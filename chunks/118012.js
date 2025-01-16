var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(210313),
    l = r(430229);
let u = Object.freeze({
        STANDARD: o.colorStandard,
        MUTED: o.colorMuted,
        ERROR: o.colorError,
        BRAND: o.colorBrand,
        LINK: o.colorLink,
        HEADER_PRIMARY: o.colorHeaderPrimary,
        HEADER_SECONDARY: o.colorHeaderSecondary,
        STATUS_YELLOW: o.colorStatusYellow,
        STATUS_GREEN: o.colorStatusGreen,
        STATUS_RED: o.colorStatusRed,
        INTERACTIVE_ACTIVE: o.colorInteractiveActive,
        INTERACTIVE_NORMAL: o.colorInteractiveNormal,
        ALWAYS_WHITE: o.colorWhite,
        CUSTOM: null
    }),
    c = Object.freeze({
        SIZE_10: l.size10,
        SIZE_12: l.size12,
        SIZE_14: l.size14,
        SIZE_16: l.size16,
        SIZE_20: l.size20,
        SIZE_24: l.size24,
        SIZE_32: l.size32
    }),
    d = (e) => {
        let { className: n, color: r = u.STANDARD, size: a = c.SIZE_14, tag: l = 'div', selectable: d = !1, strong: f = !1, children: _, style: h, 'aria-label': p, ...m } = e;
        return (0, i.jsx)(l, {
            'aria-label': p,
            className: s()(r, a, n, {
                [o.selectable]: d,
                [o.strong]: f
            }),
            style: h,
            ...m,
            children: _
        });
    };
(d.Colors = u), (d.Sizes = c), (n.Z = d);
