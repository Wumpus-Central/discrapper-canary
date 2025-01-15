n(47120);
var r = n(192379),
    i = n(570140),
    a = n(4646),
    u = n(258340),
    c = n(768581),
    l = n(176354);
t.Z = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
        { update: n, draw: s, emit: o, shouldTick: d } = (0, u.Z)(e),
        f = r.useMemo(() => new a.ZP(), []),
        h = r.useCallback(
            (e) => {
                (e.assetMap = f), s(e);
            },
            [f, s]
        ),
        [m, w] = r.useState(!1),
        v = r.useRef();
    return (
        r.useEffect(() => {
            async function e(e) {
                var n;
                let { emoji: r } = e,
                    i = null !== (n = r.id) && void 0 !== n ? n : r.name,
                    a =
                        null == r.id
                            ? l.ZP.getURL(r.name)
                            : c.ZP.getEmojiURL({
                                  id: r.id,
                                  animated: !1,
                                  size: 64,
                                  forcePNG: !0
                              });
                await f.loadRemoteImage(i, a), o(i, t), w(!0);
            }
            return i.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => i.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }),
        r.useEffect(() => {
            let e = () => {
                d.current ? (v.current = setTimeout(e, 1000)) : (w(!1), (v.current = null));
            };
            return (
                (v.current = setTimeout(e, 1000)),
                () => {
                    null != v.current && clearTimeout(v.current);
                }
            );
        }, [m, d]),
        {
            update: n,
            draw: h,
            playing: m
        }
    );
};
