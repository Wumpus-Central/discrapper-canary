n.d(t, { l: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(265486),
    r = n(688810),
    o = n(626584),
    d = n(780964),
    c = n(858897),
    u = n(531685),
    p = n(259065),
    h = n(49999),
    m = n(864386),
    _ = n(985018),
    A = n(439315);
let f = new o.A("DisplayNameStylesCoachmark");
function g(e) {
    let { markAsDismissed: t, targetElementRef: n, children: o } = e,
        { analyticsLocations: g } = (0, r.Ay)(),
        x = (0, s.useRef)(null),
        E = (0, l.bG)([u.A], () => u.A.isFocused()),
        C = (0, s.useCallback)(() => {
            t(h.i.TAKE_ACTION),
                (0, c.openUserSettings)(d.X.PROFILE_PANEL, { analyticsLocations: g }, () => {
                    (0, p.L)({ analyticsLocations: g });
                });
        }, [t, g]),
        T = (0, s.useCallback)(() => {
            t(h.i.USER_DISMISS);
        }, [t]);
    return (
        (0, s.useEffect)(() => {
            E && x.current?.paused ? x.current?.play().catch(f.error) : E || x.current?.pause();
        }, [E]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                o,
                (0, i.jsx)(a.A, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: T,
                    align: "right",
                    position: "top",
                    caretConfig: { align: "center" },
                    gradientColor: "nitro-pink",
                    graphic: { type: "video", ref: x, src: A.A, aspectRatio: "21/9", loop: !0 },
                    size: "lg",
                    title: _.intl.string(m.default["1AE464"]),
                    body: [_.intl.string(m.default.cNc1g9), _.intl.string(_.t["4JNXHG"])],
                    actions: [{ text: _.intl.string(_.t.uw9zI7), variant: "primary", onClick: C }],
                }),
            ],
        })
    );
}
