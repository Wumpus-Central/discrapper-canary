n.d(t, {
    l: () => v,
});
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(43105),
    s = n(688810),
    o = n(626584),
    c = n(780964),
    d = n(840065),
    u = n(531685),
    m = n(259065),
    p = n(652215),
    h = n(49999),
    f = n(927961),
    x = n(985018),
    b = n(439315);
let g = new o.A("DisplayNameStylesCoachmark");

function v(e) {
    let { markAsDismissed: t, targetElementRef: n, children: o } = e,
        { analyticsLocations: v } = (0, s.Ay)(),
        j = (0, l.useRef)(null),
        y = (0, i.bG)([u.A], () => u.A.isFocused()),
        _ = (0, l.useCallback)(() => {
            t(h.i.TAKE_ACTION),
                (0, d.openUserSettings)(
                    c.X.PROFILE_PANEL,
                    {
                        section: p.nc_.PROFILE_CUSTOMIZATION,
                        analyticsLocations: v,
                    },
                    () => {
                        (0, m.L)({
                            analyticsLocations: v,
                        });
                    },
                );
        }, [t, v]),
        A = (0, l.useCallback)(() => {
            t(h.i.USER_DISMISS);
        }, [t]);
    return (
        (0, l.useEffect)(() => {
            var e, t, n;
            y && (null == (e = j.current) ? void 0 : e.paused)
                ? null == (t = j.current) || t.play().catch(g.error)
                : y || null == (n = j.current) || n.pause();
        }, [y]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                o,
                (0, a.jsx)(r.A, {
                    targetElementRef: n,
                    shouldShow: !0,
                    onRequestClose: A,
                    align: "right",
                    position: "top",
                    caretConfig: {
                        align: "center",
                    },
                    gradientColor: "nitro-pink",
                    graphic: {
                        type: "video",
                        ref: j,
                        src: b.A,
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
                            onClick: _,
                        },
                    ],
                }),
            ],
        })
    );
}
