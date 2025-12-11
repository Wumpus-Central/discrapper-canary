n.d(e, { default: () => p }), n(953529);
var r = n(54381);
n(473749);
var a = n(120356),
    i = n.n(a),
    s = n(755721),
    o = n(481060),
    l = n(923928),
    c = n(600164),
    m = n(388032),
    d = n(945346),
    u = n(337667);
let p = (t) => {
    let { onClose: e, transitionState: n, showHideSuppressWarning: a = !1 } = t;
    return (0, r.jsx)(o.Y0X, {
        transitionState: n,
        className: d.container,
        "aria-label": m.intl.string(m.t["4Y2AS7"]),
        parentComponent: "HubStudyRoomSuppressModal",
        children: (0, r.jsxs)("form", {
            onSubmit: (t) => {
                null == t || t.preventDefault(), l.Z.clearSuppressWarning(), null == e || e();
            },
            className: d.form,
            children: [
                (0, r.jsxs)(o.hzk, {
                    className: d.modalContent,
                    children: [
                        (0, r.jsx)("img", {
                            src: u,
                            alt: "",
                            className: d.hero,
                        }),
                        (0, r.jsx)(o.Text, {
                            className: d.title,
                            color: "text-strong",
                            variant: "text-md/semibold",
                            children: m.intl.string(m.t.sDvH0T),
                        }),
                        (0, r.jsx)(o.Text, {
                            className: d.description,
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: m.intl.string(m.t["CLpr/y"]),
                        }),
                    ],
                }),
                (0, r.jsxs)(o.mzw, {
                    justify: c.Z.Justify.BETWEEN,
                    wrap: c.Z.Wrap.WRAP,
                    children: [
                        (0, r.jsx)(s.zx, {
                            type: "submit",
                            size: s.zx.Sizes.LARGE,
                            className: i()(d.primaryButton, d.gutter),
                            autoFocus: !0,
                            children: m.intl.string(m.t["NX+WJN"]),
                        }),
                        a &&
                            (0, r.jsx)(o.P3F, {
                                onClick: () => l.Z.clearSuppressWarning(!0),
                                className: d.minorContainer,
                                children: (0, r.jsx)(o.Text, {
                                    className: d.minorAction,
                                    variant: "text-xs/normal",
                                    children: m.intl.string(m.t["5E9SB9"]),
                                }),
                            }),
                    ],
                }),
            ],
        }),
    });
};
