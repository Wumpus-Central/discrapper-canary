n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(388032),
    l = n(77752);
function c(e) {
    let { title: t, children: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.Heading, {
                variant: "text-md/medium",
                className: l.previewTitle,
                children: t,
            }),
            n,
        ],
    });
}
function u(e) {
    let {
            children: t,
            className: n,
            layoutClassName: i,
            profilePreview: o,
            profilePreviewTitle: u,
            nameplatePreview: d,
        } = e,
        f = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c, {
                        title: null != u ? u : s.intl.string(s.t.Zb06yP),
                        children: o,
                    }),
                    null != d
                        ? (0, r.jsx)(c, {
                              title: s.intl.string(s.t["7KRt6R"]),
                              children: d,
                          })
                        : null,
                ],
            });
    return (0, r.jsx)("div", {
        className: a()(l.profileCustomizationSection, n),
        children: (0, r.jsxs)("div", {
            className: a()(l.baseLayout, i),
            children: [
                (0, r.jsx)("div", {
                    className: l.previewsContainer,
                    children: f(),
                }),
                (0, r.jsx)("div", {
                    className: l.formContent,
                    children: t,
                }),
            ],
        }),
    });
}
