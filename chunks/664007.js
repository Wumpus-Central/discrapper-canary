i.d(s, { A: () => f });
var a = i(477900);
i(582128);
var n = i(503698),
    l = i.n(n),
    o = i(661531),
    r = i(366010),
    c = i(22231),
    t = i(750943),
    d = i(736653),
    u = i(342298),
    h = i(716078);
let m = o.A.unsafe_rawColors.PRIMARY_400.css,
    p = o.A.unsafe_rawColors.PRIMARY_500.css;
function f(e) {
    let { enabled: s, imageClassName: i, iconWrapperClassName: n, ...o } = e,
        f = (0, d.Ay)(),
        x = { height: 18, width: 18, color: (0, r.M)(f) ? m : p };
    return (0, a.jsx)(u.A, {
        className: l()({ [h.MY]: s, [h.O7]: !s }),
        imageClassName: l()(i, h.f3, { [h.Hn]: !s }),
        icon:
            null != o.image && "" !== o.image
                ? (0, a.jsx)(c.R, { size: "custom", ...x })
                : (0, a.jsx)(t.X, { size: "custom", ...x }),
        iconClassName: l()(h.oB, h.BD),
        iconWrapperClassName: n,
        showIcon: !0,
        showIconDisabled: !0,
        hideSize: !0,
        ...o,
    });
}
