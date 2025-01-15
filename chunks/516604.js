n(47120);
var r = n(192379),
    i = n(570140),
    a = n(4646),
    u = n(258340),
    o = n(768581),
    c = n(176354);
t.Z = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
        { update: n, draw: l, emit: s, shouldTick: d } = (0, u.Z)(e),
        f = r.useMemo(() => new a.ZP(), []),
        h = r.useCallback(
            (e) => {
                (e.assetMap = f), l(e);
            },
            [f, l]
        ),
        [w, m] = r.useState(!1),
        v = r.useRef();
    return (
        r.useEffect(() => {
            async function e(e) {
                var n;
                let { emoji: r } = e,
                    i = null !== (n = r.id) && void 0 !== n ? n : r.name,
                    a =
                        null == r.id
                            ? c.ZP.getURL(r.name)
                            : o.ZP.getEmojiURL({
                                  id: r.id,
                                  animated: !1,
                                  size: 64,
                                  forcePNG: !0
                              });
                await f.loadRemoteImage(i, a), s(i, t), m(!0);
            }
            return i.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => i.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }),
        r.useEffect(() => {
            let e = () => {
                d.current ? (v.current = setTimeout(e, 1000)) : (m(!1), (v.current = null));
            };
            return (
                (v.current = setTimeout(e, 1000)),
                () => {
                    null != v.current && clearTimeout(v.current);
                }
            );
        }, [w, d]),
        {
            update: n,
            draw: h,
            playing: w
        }
    );
};
