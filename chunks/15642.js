n.d(t, { Z: () => E }), n(388685);
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
let m = 4,
    h = 6,
    g = 1000;
function E(e) {
    let { giftIntentType: t, recipientUser: n, channel: E } = e,
        b = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        y = i.useRef(null),
        [O, v] = i.useState(0),
        { createMultipleConfettiAt: S } = i.useContext(c.h),
        I = i.useCallback(
            (e) => ({
                size: {
                    type: "static-random",
                    minValue: e.confettiSize - h,
                    maxValue: e.confettiSize + h,
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
    i.useEffect(() => {
        var e;
        if (b) return;
        let t = null == (e = y.current) ? void 0 : e.getBoundingClientRect();
        if (null == t) return;
        let n = I({ confettiSize: 8 }),
            r = new o.sW(g, () => {
                S(t.left + t.width / 2, t.top + t.height / 2, n, 60);
            });
        return (
            r.delay(),
            () => {
                r.cancel();
            }
        );
    }, [S, y, b, I]);
    let T = i.useCallback(() => {
        var e;
        if ((v(O + 1), b)) return;
        let t = null == (e = y.current) ? void 0 : e.getBoundingClientRect();
        if (null != t && O % m == 0) {
            let e = I({ confettiSize: 8 });
            S(t.left + t.width / 2, t.top + t.height / 2, e, 60);
        }
    }, [S, y, b, O, I]);
    return (0, r.jsx)(f.Z, {
        contentClassName: _.messageContentContainer,
        iconContainerClassName: _.iconContainer,
        iconNode: (0, r.jsx)(s.Dkj, { colorClass: _.icon }),
        children: (0, r.jsx)(u.Z, {
            innerRef: y,
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, d.mE)(E),
            analyticsSection: p.jXE.CHANNEL,
            onMouseEnter: T,
        }),
    });
}
