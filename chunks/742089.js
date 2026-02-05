s.d(e, { default: () => u });
var a = s(627968);
s(64700);
var r = s(503698),
    n = s.n(r),
    i = s(421380),
    l = s(397927),
    c = s(386406),
    o = s(235986),
    d = s(985018),
    m = s(522741),
    p = s(311249);
let u = (t) => {
    let { onClose: e, transitionState: s, showHideSuppressWarning: r = !1 } = t;
    return (0, a.jsx)(l.EOs, {
        transitionState: s,
        className: m.kL,
        "aria-label": d.intl.string(d.t["4Y2AS7"]),
        parentComponent: "HubStudyRoomSuppressModal",
        children: (0, a.jsxs)("form", {
            onSubmit: (t) => {
                t?.preventDefault(), c.A.clearSuppressWarning(), e?.();
            },
            className: m.Zd,
            children: [
                (0, a.jsxs)(l.$mQ, {
                    className: m.jE,
                    children: [
                        (0, a.jsx)("img", { src: p, alt: "", className: m.ZK }),
                        (0, a.jsx)(l.Text, {
                            className: m.DD,
                            color: "text-strong",
                            variant: "text-md/semibold",
                            children: d.intl.string(d.t.sDvH0T),
                        }),
                        (0, a.jsx)(l.Text, {
                            className: m.h_,
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: d.intl.string(d.t["CLpr/y"]),
                        }),
                    ],
                }),
                (0, a.jsxs)(l.jlY, {
                    justify: o.A.Justify.BETWEEN,
                    wrap: o.A.Wrap.WRAP,
                    children: [
                        (0, a.jsx)(i.$n, {
                            type: "submit",
                            size: i.$n.Sizes.LARGE,
                            className: n()(m.FS, m.cU),
                            autoFocus: !0,
                            children: d.intl.string(d.t["NX+WJN"]),
                        }),
                        r &&
                            (0, a.jsx)(l.DUT, {
                                onClick: () => c.A.clearSuppressWarning(!0),
                                className: m.ZM,
                                children: (0, a.jsx)(l.Text, {
                                    className: m.WI,
                                    variant: "text-xs/normal",
                                    children: d.intl.string(d.t["5E9SB9"]),
                                }),
                            }),
                    ],
                }),
            ],
        }),
    });
};
