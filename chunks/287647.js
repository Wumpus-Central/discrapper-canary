n.d(t, { e: () => v });
var a = n(951288),
    r = n(647438),
    i = n(442837),
    l = n(264418),
    s = n(906732),
    o = n(710845),
    c = n(313789),
    d = n(518596),
    u = n(451478),
    m = n(829716),
    p = n(981631),
    h = n(921944),
    x = n(693450),
    f = n(388032),
    b = n(374104);
let g = new o.Z("DisplayNameStylesCoachmark");
function v(e) {
    let { markAsDismissed: t, targetElementRef: n, children: o } = e,
        { analyticsLocations: v } = (0, s.ZP)(),
        j = (0, r.useRef)(null),
        _ = (0, i.e7)([u.Z], () => u.Z.isFocused()),
        y = (0, r.useCallback)(() => {
            t(h.L.TAKE_ACTION),
                (0, d.openUserSettings)(c.n.PROFILE_PANEL, {
                    section: p.oAB.PROFILE_CUSTOMIZATION,
                    analyticsLocations: v,
                }),
                (0, m.I)({ analyticsLocations: v });
        }, [t, v]),
        C = (0, r.useCallback)(() => {
            t(h.L.USER_DISMISS);
        }, [t]);
    return (
        (0, r.useEffect)(() => {
            var e, t, n;
            _ && (null == (e = j.current) ? void 0 : e.paused)
                ? null == (t = j.current) || t.play().catch(g.error)
                : _ || null == (n = j.current) || n.pause();
        }, [_]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                o,
                (0, a.jsx)(l.J, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: C,
                    align: "right",
                    position: "top",
                    caretConfig: { align: "center" },
                    gradientColor: "nitro-pink",
                    graphic: {
                        type: "video",
                        ref: j,
                        src: b.Z,
                        aspectRatio: "21/9",
                        loop: !0,
                    },
                    size: "lg",
                    badge: {
                        type: "beta",
                        variant: "expressive",
                    },
                    title: f.intl.string(x.default["1AE46+"]),
                    body: [f.intl.string(x.default.cNc1g4), f.intl.string(f.t["4JNXHB"])],
                    actions: [
                        {
                            text: f.intl.string(f.t.uw9zIy),
                            variant: "primary",
                            onClick: y,
                        },
                    ],
                }),
            ],
        })
    );
}
