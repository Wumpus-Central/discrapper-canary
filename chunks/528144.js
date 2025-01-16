var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(972623),
    u = r(430229);
let c = Object.freeze({
        SIZE_10: u.size10,
        SIZE_12: u.size12,
        SIZE_14: u.size14,
        SIZE_16: u.size16,
        SIZE_20: u.size20,
        SIZE_24: u.size24,
        SIZE_32: u.size32
    }),
    d = (e) => {
        let { id: n, muted: r = !1, className: a = l.wrapper, size: u = c.SIZE_14, selectable: d = !1, children: f, color: _, onClick: h, onContextMenu: p, style: m, title: g, uppercase: E } = e;
        return (0, i.jsx)(o.H, {
            role: null != h ? 'button' : void 0,
            onClick: h,
            onContextMenu: p,
            id: n,
            className: s()(a, {
                [l.base]: !0,
                [u]: !0,
                [l.selectable]: d,
                [l.muted]: r,
                [l.uppercase]: E
            }),
            title: g,
            style:
                null != _
                    ? {
                          ...m,
                          color: _
                      }
                    : m,
            children: f
        });
    };
(d.Sizes = c), (n.Z = d);
