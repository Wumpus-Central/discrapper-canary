n.d(t, { e: () => b });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(264418),
    s = n(906732),
    l = n(710845),
    c = n(313789),
    u = n(518596),
    d = n(451478),
    f = n(829716),
    _ = n(981631),
    p = n(921944),
    h = n(62222),
    m = n(388032),
    g = n(16596);
let E = new l.Z("DisplayNameStylesCoachmark");
function b(e) {
    let { markAsDismissed: t, targetElementRef: n, children: l } = e,
        { analyticsLocations: b } = (0, s.ZP)(),
        y = (0, i.useRef)(null),
        O = (0, a.e7)([d.Z], () => d.Z.isFocused()),
        v = (0, i.useCallback)(() => {
            t(p.L.TAKE_ACTION),
                (0, u.openUserSettings)(c.n.PROFILE_PANEL, {
                    section: _.oAB.PROFILE_CUSTOMIZATION,
                    analyticsLocations: b,
                }),
                (0, f.I)({ analyticsLocations: b });
        }, [t, b]),
        I = (0, i.useCallback)(() => {
            t(p.L.USER_DISMISS);
        }, [t]);
    return (
        (0, i.useEffect)(() => {
            var e, t, n;
            O && (null == (e = y.current) ? void 0 : e.paused)
                ? null == (t = y.current) || t.play().catch(E.error)
                : O || null == (n = y.current) || n.pause();
        }, [O]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                l,
                (0, r.jsx)(o.J, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: I,
                    align: "right",
                    position: "top",
                    caretConfig: { align: "center" },
                    gradientColor: "nitro-pink",
                    graphic: {
                        type: "video",
                        ref: y,
                        src: g.Z,
                        aspectRatio: "21/9",
                        loop: !0,
                    },
                    size: "lg",
                    badge: {
                        type: "beta",
                        variant: "expressive",
                    },
                    title: m.intl.string(h.default["1AE46+"]),
                    body: [m.intl.string(h.default.cNc1g4), m.intl.string(m.t["4JNXHB"])],
                    actions: [
                        {
                            text: m.intl.string(m.t.uw9zIy),
                            variant: "primary",
                            onClick: v,
                        },
                    ],
                }),
            ],
        })
    );
}
