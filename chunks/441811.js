n.d(t, { l: () => b });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(265486),
    r = n(688810),
    o = n(626584),
    d = n(780964),
    c = n(840065),
    u = n(531685),
    m = n(259065),
    h = n(652215),
    p = n(49999),
    x = n(927961),
    g = n(985018),
    _ = n(439315);
let f = new o.A("DisplayNameStylesCoachmark");
function b(e) {
    let { markAsDismissed: t, targetElementRef: n, children: o } = e,
        { analyticsLocations: b } = (0, r.Ay)(),
        v = (0, i.useRef)(null),
        j = (0, s.bG)([u.A], () => u.A.isFocused()),
        C = (0, i.useCallback)(() => {
            t(p.i.TAKE_ACTION),
                (0, c.openUserSettings)(
                    d.X.PROFILE_PANEL,
                    { section: h.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: b },
                    () => {
                        (0, m.L)({ analyticsLocations: b });
                    },
                );
        }, [t, b]),
        A = (0, i.useCallback)(() => {
            t(p.i.USER_DISMISS);
        }, [t]);
    return (
        (0, i.useEffect)(() => {
            j && v.current?.paused ? v.current?.play().catch(f.error) : j || v.current?.pause();
        }, [j]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                o,
                (0, a.jsx)(l.A, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: A,
                    align: "right",
                    position: "top",
                    caretConfig: { align: "center" },
                    gradientColor: "nitro-pink",
                    graphic: { type: "video", ref: v, src: _.A, aspectRatio: "21/9", loop: !0 },
                    size: "lg",
                    title: g.intl.string(x.default["1AE464"]),
                    body: [g.intl.string(x.default.cNc1g9), g.intl.string(g.t["4JNXHG"])],
                    actions: [{ text: g.intl.string(g.t.uw9zI7), variant: "primary", onClick: C }],
                }),
            ],
        })
    );
}
