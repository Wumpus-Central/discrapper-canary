n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(913527),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(925329),
    c = n(388032),
    u = n(386312);
function d(e) {
    let { application: t, timestamp: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Z, {
                size: l.A.LARGE,
                game: t,
            }),
            (0, r.jsxs)("div", {
                className: u.textContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        className: u.timestamp,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: a()(n).format("LLLL"),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "interactive-active",
                        children: c.intl.format(c.t.J3s8JP, { applicationName: t.name }),
                    }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { application: t, timestamp: n, children: i } = e;
    return (0, r.jsx)(o.u, {
        position: "top",
        asContainer: !0,
        "aria-label": c.intl.string(c.t["5nMcv1"]),
        __unsupportedReactNodeAsText: (0, r.jsx)(d, {
            application: t,
            timestamp: n,
        }),
        children: (0, r.jsx)(s.P3F, {
            tag: "span",
            children: i,
        }),
    });
}
function _(e) {
    let { application: t, timestamp: n, compact: i, children: a } = e;
    return (0, r.jsxs)(f, {
        application: t,
        timestamp: n,
        children: [
            i
                ? null
                : (0, r.jsx)(s.iWm, {
                      className: u.gameIcon,
                      size: "custom",
                      width: 14,
                      height: 14,
                  }),
            a,
        ],
    });
}
