a.d(s, { A: () => x });
var i = a(627968);
a(64700);
var l = a(503698),
    n = a.n(l),
    r = a(661531),
    o = a(366010),
    c = a(22231),
    t = a(750943),
    d = a(736653),
    u = a(342298),
    h = a(810470);
let m = r.A.unsafe_rawColors.PRIMARY_400.css,
    p = r.A.unsafe_rawColors.PRIMARY_500.css;
function x(e) {
    let { enabled: s, imageClassName: a, iconWrapperClassName: l, ...r } = e,
        x = (0, d.Ay)(),
        A = { height: 18, width: 18, color: (0, o.M)(x) ? m : p };
    return (0, i.jsx)(u.A, {
        className: n()({ [h.MY]: s, [h.O7]: !s }),
        imageClassName: n()(a, h.f3, { [h.Hn]: !s }),
        icon:
            null != r.image && "" !== r.image
                ? (0, i.jsx)(c.R, { size: "custom", ...A })
                : (0, i.jsx)(t.X, { size: "custom", ...A }),
        iconClassName: n()(h.oB, h.BD),
        iconWrapperClassName: l,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...r,
    });
}
