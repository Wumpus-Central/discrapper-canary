n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(827734),
    a = n(366010),
    o = n(22231),
    d = n(750943),
    c = n(736653),
    u = n(342298),
    m = n(810470);
let g = r.A.unsafe_rawColors.PRIMARY_400.css,
    h = r.A.unsafe_rawColors.PRIMARY_500.css;
function x(e) {
    let { enabled: t, imageClassName: n, iconWrapperClassName: l, ...r } = e,
        x = (0, c.Ay)(),
        _ = { height: 18, width: 18, color: (0, a.M)(x) ? g : h };
    return (0, i.jsx)(u.A, {
        className: s()({ [m.MY]: t, [m.O7]: !t }),
        imageClassName: s()(n, m.f3, { [m.Hn]: !t }),
        icon:
            null != r.image && "" !== r.image
                ? (0, i.jsx)(o.R, { size: "custom", ..._ })
                : (0, i.jsx)(d.X, { size: "custom", ..._ }),
        iconClassName: s()(m.oB, m.BD),
        iconWrapperClassName: l,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...r,
    });
}
