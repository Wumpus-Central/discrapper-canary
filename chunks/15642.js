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
    _ = n(981631),
    p = n(60044);
let h = 4,
    m = 6,
    g = 1000;
function E(e) {
    let { giftIntentType: t, recipientUser: n, channel: E } = e,
        b = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        y = i.useRef(null),
        [O, v] = i.useState(0),
        { createMultipleConfettiAt: I } = i.useContext(c.h),
        T = i.useCallback(
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
    i.useEffect(() => {
        var e;
        if (b) return;
        let t = null == (e = y.current) ? void 0 : e.getBoundingClientRect();
        if (null == t) return;
        let n = T({ confettiSize: 8 });
        new o.sW(g, () => {
            I(t.left + t.width / 2, t.top + t.height / 2, n, 60);
        }).delay();
    }, [I, y, b, T]);
    let S = i.useCallback(() => {
        var e;
        if ((v(O + 1), b)) return;
        let t = null == (e = y.current) ? void 0 : e.getBoundingClientRect();
        if (null != t && O % h == 0) {
            let e = T({ confettiSize: 8 });
            I(t.left + t.width / 2, t.top + t.height / 2, e, 60);
        }
    }, [I, y, b, O, T]);
    return (0, r.jsx)(f.Z, {
        contentClassName: p.messageContentContainer,
        iconContainerClassName: p.iconContainer,
        iconNode: (0, r.jsx)(s.Dkj, { colorClass: p.icon }),
        children: (0, r.jsx)(u.Z, {
            innerRef: y,
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, d.mE)(E),
            analyticsSection: _.jXE.CHANNEL,
            onMouseEnter: S,
        }),
    });
}
