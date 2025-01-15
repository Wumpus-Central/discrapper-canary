n(47120);
var r = n(192379),
    i = n(570140),
    a = n(4646),
    u = n(258340),
    l = n(768581),
    c = n(176354),
    o = n(823961);
t.Z = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
        { update: n, draw: s, emit: d, shouldTick: f } = (0, u.Z)(e),
        h = r.useMemo(() => new a.ZP(), []),
        m = r.useCallback(
            (e) => {
                (e.assetMap = h), s(e);
            },
            [h, s]
        ),
        [w, y] = r.useState(!1),
        p = r.useRef(),
        v = r.useRef();
    return (
        r.useEffect(() => {
            async function e(e) {
                var n;
                let { emoji: r, boundingRect: a } = e,
                    u = null !== (n = r.id) && void 0 !== n ? n : r.name,
                    s =
                        null == r.id
                            ? c.ZP.getURL(r.name)
                            : l.ZP.getEmojiURL({
                                  id: r.id,
                                  animated: !1,
                                  size: 64,
                                  forcePNG: !0
                              });
                await h.loadRemoteImage(u, s),
                    d(u, t, a),
                    y(!0),
                    null != v.current && clearTimeout(v.current),
                    (v.current = setTimeout(() => {
                        let e = o.Z.lastConfettiTrigger;
                        (null == e || Date.now() - e > 5000) &&
                            i.Z.dispatch({
                                type: 'POTIONS_SET_CONFETTI_MODE',
                                enabled: !1
                            });
                    }, 5000));
            }
            return i.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => i.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }, [h, d, t]),
        r.useEffect(
            () => () => {
                null != v.current && clearTimeout(v.current);
            },
            []
        ),
        r.useEffect(() => {
            let e = () => {
                f.current ? (p.current = setTimeout(e, 1000)) : (y(!1), (p.current = null));
            };
            return (
                (p.current = setTimeout(e, 1000)),
                () => {
                    null != p.current && clearTimeout(p.current);
                }
            );
        }, [w, f]),
        {
            update: n,
            draw: m,
            playing: w
        }
    );
};
