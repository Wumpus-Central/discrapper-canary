r(47120);
var n = r(192379),
    a = r(570140),
    i = r(4646),
    u = r(258340),
    l = r(768581),
    o = r(176354),
    s = r(823961);
t.Z = (e) => {
    let { update: t, draw: r, emit: c, tickRate: d, improvePerformance: f, shouldTick: h } = (0, u.Z)(e),
        m = n.useMemo(() => new i.ZP(), []),
        w = n.useCallback(
            (e) => {
                (e.assetMap = m), r(e);
            },
            [m, r]
        ),
        [p, y] = n.useState(!1),
        v = n.useRef(),
        x = n.useRef();
    return (
        n.useEffect(() => {
            async function e(e) {
                var t;
                let { emoji: r, boundingRect: n } = e,
                    i = null !== (t = r.id) && void 0 !== t ? t : r.name,
                    u =
                        null == r.id
                            ? o.ZP.getURL(r.name)
                            : l.ZP.getEmojiURL({
                                  id: r.id,
                                  animated: !1,
                                  size: 64,
                                  forcePNG: !0
                              });
                await m.loadRemoteImage(i, u),
                    c(i, n),
                    y(!0),
                    null != x.current && clearTimeout(x.current),
                    (x.current = setTimeout(() => {
                        let e = s.Z.lastConfettiTrigger;
                        (null == e || Date.now() - e > 5000) &&
                            a.Z.dispatch({
                                type: 'POTIONS_SET_CONFETTI_MODE',
                                enabled: !1
                            });
                    }, 5000));
            }
            return a.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => a.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }, [m, c]),
        n.useEffect(
            () => () => {
                null != x.current && clearTimeout(x.current);
            },
            []
        ),
        n.useEffect(() => {
            let e = () => {
                h.current ? (v.current = setTimeout(e, 1000)) : (y(!1), (v.current = null));
            };
            return (
                (v.current = setTimeout(e, 1000)),
                () => {
                    null != v.current && clearTimeout(v.current);
                }
            );
        }, [p, h]),
        {
            update: t,
            draw: w,
            tickRate: d,
            improvePerformance: f,
            playing: p
        }
    );
};
