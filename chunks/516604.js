r(47120);
var n = r(192379),
    a = r(570140),
    i = r(4646),
    l = r(258340),
    c = r(768581),
    u = r(176354),
    s = r(823961);
t.Z = (e) => {
    let { update: t, draw: r, emit: o, tickRate: d, improvePerformance: f, shouldTick: m } = (0, l.Z)(e),
        h = n.useMemo(() => new i.ZP(), []),
        p = n.useCallback(
            (e) => {
                (e.assetMap = h), r(e);
            },
            [h, r]
        ),
        [y, w] = n.useState(!1),
        v = n.useRef(),
        x = n.useRef();
    return (
        n.useEffect(() => {
            async function e(e) {
                var t;
                let { emoji: r, boundingRect: n } = e,
                    i = null !== (t = r.id) && void 0 !== t ? t : r.name,
                    l =
                        null == r.id
                            ? u.ZP.getURL(r.name)
                            : c.ZP.getEmojiURL({
                                  id: r.id,
                                  animated: !1,
                                  size: 64,
                                  forcePNG: !0
                              });
                await h.loadRemoteImage(i, l),
                    o(i, n),
                    w(!0),
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
        }, [h, o]),
        n.useEffect(
            () => () => {
                null != x.current && clearTimeout(x.current);
            },
            []
        ),
        n.useEffect(() => {
            let e = () => {
                m.current ? (v.current = setTimeout(e, 1000)) : (w(!1), (v.current = null));
            };
            return (
                (v.current = setTimeout(e, 1000)),
                () => {
                    null != v.current && clearTimeout(v.current);
                }
            );
        }, [y, m]),
        {
            update: t,
            draw: p,
            tickRate: d,
            improvePerformance: f,
            playing: y
        }
    );
};
