l.d(t, { A: () => h });
var n = l(477900);
l(582128);
var s = l(297264),
    i = l(866665),
    r = l(939249),
    a = l(885574),
    o = l(975807),
    u = l(975571),
    c = l(652215),
    d = l(375708),
    m = l(373599);
let h = function (e) {
    let { personalizedResults: t, label: l } = e,
        h = l ?? d.intl.string(d.t.NSv5KV);
    return (0, n.jsxs)("div", {
        className: m.L,
        children: [
            (0, n.jsx)(s.D, { variant: "heading-lg/semibold", children: h }),
            t &&
                (0, n.jsx)(i.m, {
                    text: d.intl.string(d.t["3taPdj"]),
                    position: "top",
                    "aria-label": d.intl.string(d.t["3taPdj"]),
                    children: (0, n.jsx)(r.D, {
                        onClick: () => (0, o.A)(u.A.getArticleURL(c.MVz.DATA_USED_FOR_RECOMMENDED)),
                        className: m.s,
                        children: (0, n.jsx)(a.CircleInformationIcon, { size: "sm" }),
                    }),
                }),
        ],
    });
};
