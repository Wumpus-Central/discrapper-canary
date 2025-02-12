n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(903512),
    l = n(49497);
let u = Object.freeze({
        SIZE_10: l.size10,
        SIZE_12: l.size12,
        SIZE_14: l.size14,
        SIZE_16: l.size16,
        SIZE_20: l.size20,
        SIZE_24: l.size24,
        SIZE_32: l.size32
    }),
    c = (e) => {
        let { id: t, muted: n = !1, className: r = o.wrapper, size: l = u.SIZE_14, selectable: c = !1, children: d, color: f, onClick: _, onContextMenu: p, style: h, title: m, uppercase: g } = e;
        return (0, i.jsx)(s.H, {
            role: null != _ ? 'button' : void 0,
            onClick: _,
            onContextMenu: p,
            id: t,
            className: a()(r, {
                [o.base]: !0,
                [l]: !0,
                [o.selectable]: c,
                [o.muted]: n,
                [o.uppercase]: g
            }),
            title: m,
            style:
                null != f
                    ? {
                          ...h,
                          color: f
                      }
                    : h,
            children: d
        });
    };
c.Sizes = u;
let d = c;
