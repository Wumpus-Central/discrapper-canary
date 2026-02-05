"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(827734),
    a = n(397927),
    o = n(736653),
    d = n(342298),
    c = n(458091);
let u = r.A.unsafe_rawColors.PRIMARY_400.css,
    m = r.A.unsafe_rawColors.PRIMARY_500.css;
function g(e) {
    let { enabled: t, imageClassName: n, iconWrapperClassName: s, ...r } = e,
        g = (0, o.Ay)(),
        x = { height: 18, width: 18, color: (0, a.Mwr)(g) ? u : m };
    return (0, i.jsx)(d.A, {
        className: l()({ [c.MY]: t, [c.O7]: !t }),
        imageClassName: l()(n, c.f3, { [c.Hn]: !t }),
        icon:
            null != r.image && "" !== r.image
                ? (0, i.jsx)(a.R2l, { size: "custom", ...x })
                : (0, i.jsx)(a.XGR, { size: "custom", ...x }),
        iconClassName: l()(c.oB, c.BD),
        iconWrapperClassName: s,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...r,
    });
}
