n.d(t, { e: () => v });
var a = n(951288),
    i = n(647438),
    l = n(442837),
    r = n(264418),
    s = n(906732),
    o = n(710845),
    c = n(313789),
    d = n(518596),
    u = n(451478),
    m = n(829716),
    p = n(981631),
    h = n(921944),
    x = n(352609),
    g = n(388032),
    f = n(374104);
let b = new o.Z("DisplayNameStylesCoachmark");
function v(e) {
    let { markAsDismissed: t, targetElementRef: n, children: o } = e,
        { analyticsLocations: v } = (0, s.ZP)(),
        j = (0, i.useRef)(null),
        _ = (0, l.e7)([u.Z], () => u.Z.isFocused()),
        y = (0, i.useCallback)(() => {
            t(h.L.TAKE_ACTION),
                (0, d.openUserSettings)(
                    c.n.PROFILE_PANEL,
                    {
                        section: p.oAB.PROFILE_CUSTOMIZATION,
                        analyticsLocations: v,
                    },
                    () => {
                        (0, m.I)({ analyticsLocations: v });
                    },
                );
        }, [t, v]),
        C = (0, i.useCallback)(() => {
            t(h.L.USER_DISMISS);
        }, [t]);
    return (
        (0, i.useEffect)(() => {
            var e, t, n;
            _ && (null == (e = j.current) ? void 0 : e.paused)
                ? null == (t = j.current) || t.play().catch(b.error)
                : _ || null == (n = j.current) || n.pause();
        }, [_]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                o,
                (0, a.jsx)(r.J, {
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
                        src: f.Z,
                        aspectRatio: "21/9",
                        loop: !0,
                    },
                    size: "lg",
                    title: g.intl.string(x.default["1AE464"]),
                    body: [g.intl.string(x.default.cNc1g9), g.intl.string(g.t["4JNXHG"])],
                    actions: [
                        {
                            text: g.intl.string(g.t.uw9zI7),
                            variant: "primary",
                            onClick: y,
                        },
                    ],
                }),
            ],
        })
    );
}
