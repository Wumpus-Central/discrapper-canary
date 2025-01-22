var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(210313),
    l = r(430229);
let u = Object.freeze({
        STANDARD: s.colorStandard,
        MUTED: s.colorMuted,
        ERROR: s.colorError,
        BRAND: s.colorBrand,
        LINK: s.colorLink,
        HEADER_PRIMARY: s.colorHeaderPrimary,
        HEADER_SECONDARY: s.colorHeaderSecondary,
        STATUS_YELLOW: s.colorStatusYellow,
        STATUS_GREEN: s.colorStatusGreen,
        STATUS_RED: s.colorStatusRed,
        INTERACTIVE_ACTIVE: s.colorInteractiveActive,
        INTERACTIVE_NORMAL: s.colorInteractiveNormal,
        ALWAYS_WHITE: s.colorWhite,
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
        let { className: n, color: r = u.STANDARD, size: a = c.SIZE_14, tag: l = 'div', selectable: d = !1, strong: f = !1, children: p, style: h, 'aria-label': _, ...m } = e;
        return (0, i.jsx)(l, {
            'aria-label': _,
            className: o()(r, a, n, {
                [s.selectable]: d,
                [s.strong]: f
            }),
            style: h,
            ...m,
            children: p
        });
    };
(d.Colors = u), (d.Sizes = c), (n.Z = d);
