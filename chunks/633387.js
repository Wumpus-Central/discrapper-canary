e.d(n, { r: () => p });
var i = e(477900);
e(582128);
var s = e(858899),
    a = e(231483),
    l = e(661531),
    o = e(739187),
    r = e(857250),
    c = e(97483),
    d = e(973283),
    u = e(503698),
    I = e.n(u),
    E = e(834730),
    _ = e(381666),
    C = e(655214);
function h(t) {
    let { text: n } = t;
    return (0, i.jsxs)("div", {
        className: I()(C.oR, _.o),
        children: [
            (0, i.jsx)(a.ShieldIcon, { color: l.A.colors.TEXT_BRAND }),
            (0, i.jsx)(E.E, {
                className: C.__invalid_content,
                color: "text-strong",
                variant: "text-md/normal",
                children: n,
            }),
        ],
    });
}
function p(t) {
    let { text: n, id: e } = t;
    (0, d.WD)("showSafetyToast")
        ? (0, s.P0)({ text: n, icon: a.ShieldIcon, iconColor: l.A.colors.ICON_BRAND })
        : (0, o.P)((0, r.o)(n, c.Ck.CUSTOM, { component: (0, i.jsx)(h, { text: n }, e) }));
}
