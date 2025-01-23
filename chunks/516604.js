r(47120);
var n = r(192379),
    a = r(570140),
    i = r(4646),
    u = r(258340),
    l = r(768581),
    o = r(176354),
    s = r(823961);
t.Z = (e) => {
    let { update: t, draw: r, emit: c, tickRate: d, improvePerformance: f, shouldTick: m } = (0, u.Z)(e),
        h = n.useMemo(() => new i.ZP(), []),
        w = n.useCallback(
            (e) => {
                (e.assetMap = h), r(e);
            },
            [h, r]
        ),
        [y, p] = n.useState(!1),
        x = n.useRef(),
        v = n.useRef();
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
                await h.loadRemoteImage(i, u),
                    c(i, n),
                    p(!0),
                    null != v.current && clearTimeout(v.current),
                    (v.current = setTimeout(() => {
                        let e = s.Z.lastConfettiTrigger;
                        (null == e || Date.now() - e > 5000) &&
                            a.Z.dispatch({
                                type: 'POTIONS_SET_CONFETTI_MODE',
                                enabled: !1
                            });
                    }, 5000));
            }
            return a.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => a.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }, [h, c]),
        n.useEffect(
            () => () => {
                null != v.current && clearTimeout(v.current);
            },
            []
        ),
        n.useEffect(() => {
            let e = () => {
                m.current ? (x.current = setTimeout(e, 1000)) : (p(!1), (x.current = null));
            };
            return (
                (x.current = setTimeout(e, 1000)),
                () => {
                    null != x.current && clearTimeout(x.current);
                }
            );
        }, [y, m]),
        {
            update: t,
            draw: w,
            tickRate: d,
            improvePerformance: f,
            playing: y
        }
    );
};
