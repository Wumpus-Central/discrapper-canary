n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(399606),
    o = n(846519),
    s = n(481060),
    l = n(607070),
    c = n(745510),
    u = n(674701),
    d = n(934415),
    f = n(834129),
    p = n(981631),
    _ = n(56324);
let m = 6,
    h = 1000;
function g(e) {
    let { giftIntentType: t, recipientUser: n, channel: g } = e,
        E = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        b = i.useRef(null),
        { createMultipleConfettiAt: y } = i.useContext(c.h),
        O = i.useCallback(
            (e) => ({
                size: {
                    type: "static-random",
                    minValue: e.confettiSize - m,
                    maxValue: e.confettiSize + m,
                },
                velocity: {
                    type: "static-random",
                    minValue: {
                        x: -180,
                        y: -180,
                    },
                    maxValue: {
                        x: 180,
                        y: 0,
                    },
                },
            }),
            [],
        );
    return (
        i.useEffect(() => {
            var e;
            if (E) return;
            let t = null == (e = b.current) ? void 0 : e.getBoundingClientRect();
            if (null == t) return;
            let n = O({ confettiSize: 8 }),
                r = new o.sW(h, () => {
                    y(t.left + t.width / 2, t.top + t.height / 2, n, 60);
                });
            return (
                r.delay(),
                () => {
                    r.cancel();
                }
            );
        }, [y, b, E, O]),
        (0, r.jsx)(f.Z, {
            contentClassName: _.messageContentContainer,
            iconContainerClassName: _.iconContainer,
            iconNode: (0, r.jsx)(s.Dkj, { colorClass: _.icon }),
            children: (0, r.jsx)(u.Z, {
                innerRef: b,
                giftIntentType: t,
                recipientUser: n,
                analyticsPage: (0, d.mE)(g),
                analyticsSection: p.jXE.CHANNEL,
            }),
        })
    );
}
