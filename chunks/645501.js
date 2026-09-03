n.d(t, { A: () => h });
var l = n(477900);
n(582128);
var s = n(297264),
    i = n(866665),
    r = n(939249),
    a = n(885574),
    o = n(975807),
    c = n(975571),
    d = n(652215),
    u = n(375708),
    m = n(373599);
let h = function (e) {
    let { personalizedResults: t, label: n } = e,
        h = n ?? u.intl.string(u.t.NSv5KV);
    return (0, l.jsxs)("div", {
        className: m.L,
        children: [
            (0, l.jsx)(s.D, { variant: "heading-lg/semibold", children: h }),
            t &&
                (0, l.jsx)(i.m, {
                    text: u.intl.string(u.t["3taPdj"]),
                    position: "top",
                    "aria-label": u.intl.string(u.t["3taPdj"]),
                    children: (0, l.jsx)(r.D, {
                        onClick: () => (0, o.A)(c.A.getArticleURL(d.MVz.DATA_USED_FOR_RECOMMENDED)),
                        className: m.s,
                        children: (0, l.jsx)(a.CircleInformationIcon, { size: "sm" }),
                    }),
                }),
        ],
    });
};
