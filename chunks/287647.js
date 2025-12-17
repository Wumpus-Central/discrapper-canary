n.d(t, { e: () => v });
var a = n(54381),
    r = n(473749),
    l = n(442837),
    i = n(264418),
    s = n(906732),
    o = n(710845),
    c = n(313789),
    d = n(518596),
    u = n(451478),
    m = n(829716),
    p = n(981631),
    h = n(921944),
    f = n(143525),
    x = n(388032),
    b = n(16596);
let g = new o.Z("DisplayNameStylesCoachmark");
function v(e) {
    let { markAsDismissed: t, targetElementRef: n, children: o } = e,
        { analyticsLocations: v } = (0, s.ZP)(),
        j = (0, r.useRef)(null),
        y = (0, l.e7)([u.Z], () => u.Z.isFocused()),
        C = (0, r.useCallback)(() => {
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
        _ = (0, r.useCallback)(() => {
            t(h.L.USER_DISMISS);
        }, [t]);
    return (
        (0, r.useEffect)(() => {
            var e, t, n;
            y && (null == (e = j.current) ? void 0 : e.paused)
                ? null == (t = j.current) || t.play().catch(g.error)
                : y || null == (n = j.current) || n.pause();
        }, [y]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                o,
                (0, a.jsx)(i.J, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: _,
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
                    title: x.intl.string(f.default["1AE464"]),
                    body: [x.intl.string(f.default.cNc1g9), x.intl.string(x.t["4JNXHG"])],
                    actions: [
                        {
                            text: x.intl.string(x.t.uw9zI7),
                            variant: "primary",
                            onClick: C,
                        },
                    ],
                }),
            ],
        })
    );
}
