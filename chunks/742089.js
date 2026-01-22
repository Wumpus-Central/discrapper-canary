e.d(a, {
    default: () => u,
}),
    e(228524);
var t = e(627968);
e(64700);
var r = e(503698),
    n = e.n(r),
    l = e(421380),
    c = e(397927),
    i = e(386406),
    d = e(235986),
    o = e(985018),
    p = e(522741),
    m = e(311249);
let u = (s) => {
    let { onClose: a, transitionState: e, showHideSuppressWarning: r = !1 } = s;
    return (0, t.jsx)(c.EOs, {
        transitionState: e,
        className: p.kL,
        "aria-label": o.intl.string(o.t["4Y2AS7"]),
        parentComponent: "HubStudyRoomSuppressModal",
        children: (0, t.jsxs)("form", {
            onSubmit: (s) => {
                null == s || s.preventDefault(), i.A.clearSuppressWarning(), null == a || a();
            },
            className: p.Zd,
            children: [
                (0, t.jsxs)(c.$mQ, {
                    className: p.jE,
                    children: [
                        (0, t.jsx)("img", {
                            src: m,
                            alt: "",
                            className: p.ZK,
                        }),
                        (0, t.jsx)(c.Text, {
                            className: p.DD,
                            color: "text-strong",
                            variant: "text-md/semibold",
                            children: o.intl.string(o.t.sDvH0T),
                        }),
                        (0, t.jsx)(c.Text, {
                            className: p.h_,
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: o.intl.string(o.t["CLpr/y"]),
                        }),
                    ],
                }),
                (0, t.jsxs)(c.jlY, {
                    justify: d.A.Justify.BETWEEN,
                    wrap: d.A.Wrap.WRAP,
                    children: [
                        (0, t.jsx)(l.$n, {
                            type: "submit",
                            size: l.$n.Sizes.LARGE,
                            className: n()(p.FS, p.cU),
                            autoFocus: !0,
                            children: o.intl.string(o.t["NX+WJN"]),
                        }),
                        r &&
                            (0, t.jsx)(c.DUT, {
                                onClick: () => i.A.clearSuppressWarning(!0),
                                className: p.ZM,
                                children: (0, t.jsx)(c.Text, {
                                    className: p.WI,
                                    variant: "text-xs/normal",
                                    children: o.intl.string(o.t["5E9SB9"]),
                                }),
                            }),
                    ],
                }),
            ],
        }),
    });
};
