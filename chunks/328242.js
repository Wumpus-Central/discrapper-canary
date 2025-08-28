n.d(t, { Z: () => x }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    s = n(268146),
    o = n(481060),
    a = n(63063),
    c = n(855403),
    d = n(615161),
    u = n(637824),
    f = n(388032),
    m = n(602804);
function h(e) {
    let { source: t } = e;
    return t.id.startsWith(s.vA.SCREEN)
        ? (0, r.jsx)(o.pzj, { size: "xs" })
        : t.id.startsWith(s.vA.WINDOW)
          ? null != t.icon && "" !== t.icon
              ? (0, r.jsx)("img", {
                    src: t.icon,
                    className: m.sourceIcon,
                    alt: "",
                })
              : (0, r.jsx)(o.GON, { size: "xs" })
          : (0, r.jsx)(o.Odl, { size: "xs" });
}
function p(e) {
    let { source: t, selected: n, onClick: i } = e,
        { url: s, name: a } = t;
    return (0, r.jsxs)(o.P3F, {
        onClick: () => i(t),
        className: l()(m.source, { [m.selectedSource]: n }),
        children: [
            (0, r.jsx)("div", {
                className: m.sourcePreviewContainer,
                children: (0, r.jsxs)("div", {
                    className: m.sourcePreview,
                    children: [
                        (0, r.jsx)("img", {
                            src: s,
                            className: m.sourcePreviewImage,
                            alt: "",
                        }),
                        (0, r.jsx)("div", {
                            className: m.sourceOverlay,
                            children: (0, r.jsx)("div", {
                                className: m.sourceOverlayCTA,
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "button-filled-white-text",
                                    children: f.intl.string(f.t.z7WGho),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: m.sourceNameContainer,
                children: [
                    (0, r.jsx)(h, { source: t }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        className: m.sourceName,
                        children: a,
                    }),
                ],
            }),
        ],
    });
}
function x(e) {
    var t;
    let { onClick: n } = e,
        [
            {
                windowSources: i,
                deviceSources: l,
                screenSources: a,
                sourceType: u,
                fetchingSources: f,
                selectedSource: h,
            },
        ] = (0, d.E_)();
    return f
        ? (0, r.jsx)("div", {
              className: m.loading,
              children: (0, r.jsx)(o.$jN, {}),
          })
        : ((t = u === s.vA.WINDOW ? i : u === s.vA.SCREEN ? a : l),
          u === s.vA.CAMERA && 0 === t.length
              ? (0, r.jsx)(g, {})
              : (0, r.jsx)("div", {
                    className: m.root,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            p,
                            {
                                onClick: n,
                                source: e,
                                selected:
                                    null != h && "windowHandle" in h
                                        ? (0, c.Z)(e.id, h.windowHandle)
                                        : (null == h ? void 0 : h.id) === e.id,
                            },
                            e.id,
                        ),
                    ),
                }));
}
function g() {
    return (0, r.jsxs)("div", {
        className: m.emptyState,
        children: [
            (0, r.jsx)(o.Odl, {
                size: "md",
                color: o.TVs.colors.ICON_MUTED,
                className: m.emptyIcon,
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-lg/medium",
                color: "header-primary",
                className: m.emptyHeader,
                children: f.intl.string(u.default["/z3YaW"]),
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: m.emptyBody,
                children: f.intl.string(u.default.agwSGB),
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/semibold",
                children: f.intl.format(u.default.xpVzr6, { helpdeskURL: a.Z.getArticleURL(360040816151) }),
            }),
        ],
    });
}
