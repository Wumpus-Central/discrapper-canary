var o = e(477900);
e(582128);
var c = e(503698),
    i = e.n(c),
    n = e(646514),
    l = e(366010),
    r = e(22231),
    t = e(750943),
    u = e(736653),
    h = e(342298),
    m = e(748141);
let p = n.A.unsafe_rawColors.PRIMARY_400.css,
    d = n.A.unsafe_rawColors.PRIMARY_500.css;
e.d(
    a,
    {},
    {
        A: function (s) {
            let { enabled: a, imageClassName: e, iconWrapperClassName: c, ...n } = s,
                w = (0, u.Ay)(),
                A = { height: 18, width: 18, color: (0, l.M)(w) ? p : d };
            return (0, o.jsx)(h.A, {
                className: i()({ [m.MY]: a, [m.O7]: !a }),
                imageClassName: i()(e, m.f3, { [m.Hn]: !a }),
                icon:
                    null != n.image && "" !== n.image
                        ? (0, o.jsx)(r.PencilIcon, { size: "custom", ...A })
                        : (0, o.jsx)(t.ImagePlusIcon, { size: "custom", ...A }),
                iconClassName: i()(m.oB, m.BD),
                iconWrapperClassName: c,
                showIcon: !0,
                showIconDisabled: !0,
                hideSize: !0,
                ...n,
            });
        },
    },
);
