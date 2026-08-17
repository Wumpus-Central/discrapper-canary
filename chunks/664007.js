e.d(a, { A: () => w });
var i = e(477900);
e(582128);
var o = e(503698),
    c = e.n(o),
    n = e(661531),
    r = e(366010),
    l = e(22231),
    t = e(750943),
    h = e(736653),
    u = e(342298),
    m = e(716078);
let p = n.A.unsafe_rawColors.PRIMARY_400.css,
    d = n.A.unsafe_rawColors.PRIMARY_500.css;
function w(s) {
    let { enabled: a, imageClassName: e, iconWrapperClassName: o, ...n } = s,
        w = (0, h.Ay)(),
        A = { height: 18, width: 18, color: (0, r.M)(w) ? p : d };
    return (0, i.jsx)(u.A, {
        className: c()({ [m.MY]: a, [m.O7]: !a }),
        imageClassName: c()(e, m.f3, { [m.Hn]: !a }),
        icon:
            null != n.image && "" !== n.image
                ? (0, i.jsx)(l.PencilIcon, { size: "custom", ...A })
                : (0, i.jsx)(t.X, { size: "custom", ...A }),
        iconClassName: c()(m.oB, m.BD),
        iconWrapperClassName: o,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...n,
    });
}
