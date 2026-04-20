n.d(t, { l: () => v });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(43105),
    r = n(688810),
    o = n(626584),
    d = n(780964),
    c = n(858897),
    u = n(531685),
    m = n(259065),
    h = n(49999),
    x = n(864386),
    p = n(985018),
    g = n(439315);
let f = new o.A("DisplayNameStylesCoachmark");
function v(e) {
    let { markAsDismissed: t, targetElementRef: n, children: o } = e,
        { analyticsLocations: v } = (0, r.Ay)(),
        _ = (0, i.useRef)(null),
        b = (0, s.bG)([u.A], () => u.A.isFocused()),
        j = (0, i.useCallback)(() => {
            t(h.i.TAKE_ACTION),
                (0, c.openUserSettings)(d.X.PROFILE_PANEL, { analyticsLocations: v }, () => {
                    (0, m.L)({ analyticsLocations: v });
                });
        }, [t, v]),
        A = (0, i.useCallback)(() => {
            t(h.i.USER_DISMISS);
        }, [t]);
    return (
        (0, i.useEffect)(() => {
            b && _.current?.paused ? _.current?.play().catch(f.error) : b || _.current?.pause();
        }, [b]),
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
                    graphic: { type: "video", ref: _, src: g.A, aspectRatio: "21/9", loop: !0 },
                    size: "lg",
                    title: p.intl.string(x.default["1AE464"]),
                    body: [p.intl.string(x.default.cNc1g9), p.intl.string(p.t["4JNXHG"])],
                    actions: [{ text: p.intl.string(p.t.uw9zI7), variant: "primary", onClick: j }],
                }),
            ],
        })
    );
}
