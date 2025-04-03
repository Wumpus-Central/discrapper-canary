r.d(t, { Z: () => o }), r(47120);
var n = r(192379),
    a = r(570140),
    i = r(4646),
    l = r(258340),
    u = r(768581),
    c = r(176354),
    s = r(823961);
let o = (e) => {
    let { update: t, draw: r, emit: o, tickRate: d, improvePerformance: f, shouldTick: m } = (0, l.Z)(e),
        p = n.useMemo(() => new i.ZP(), []),
        h = n.useCallback(
            (e) => {
                (e.assetMap = p), r(e);
            },
            [p, r]
        ),
        [y, w] = n.useState(!1),
        v = n.useRef(),
        x = n.useRef(),
        E = n.useRef(s.Z.lastConfetti);
    return (
        n.useEffect(() => {
            async function e(e) {
                var t;
                let { emoji: r, boundingRect: n } = e,
                    i = null != (t = r.id) ? t : r.name,
                    l =
                        null == r.id
                            ? c.ZP.getURL(r.name)
                            : u.ZP.getEmojiURL({
                                  id: r.id,
                                  animated: !1,
                                  size: 64,
                                  forcePNG: !0
                              });
                await p.loadRemoteImage(i, l),
                    o(i, n),
                    w(!0),
                    null != x.current && clearTimeout(x.current),
                    (x.current = setTimeout(() => {
                        var e;
                        let t = null == (e = s.Z.lastConfetti) ? void 0 : e.triggerTime;
                        (null == t || Date.now() - t > 2500) &&
                            a.Z.dispatch({
                                type: 'POTIONS_SET_CONFETTI_MODE',
                                enabled: !1
                            });
                    }, 2500));
            }
            let t = E.current;
            return null != t && ((E.current = void 0), e(t)), a.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => a.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }, [p, o]),
        n.useEffect(
            () => () => {
                null != x.current &&
                    (a.Z.dispatch({
                        type: 'POTIONS_SET_CONFETTI_MODE',
                        enabled: !1
                    }),
                    clearTimeout(x.current));
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
                    null != v.current &&
                        (a.Z.dispatch({
                            type: 'POTIONS_SET_CONFETTI_MODE',
                            enabled: !1
                        }),
                        clearTimeout(v.current));
                }
            );
        }, [y, m]),
        {
            update: t,
            draw: h,
            tickRate: d,
            improvePerformance: f,
            playing: y
        }
    );
};
