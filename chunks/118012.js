n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(665001),
    o = n(976358);
let l = Object.freeze({
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
    u = Object.freeze({
        SIZE_10: o.size10,
        SIZE_12: o.size12,
        SIZE_14: o.size14,
        SIZE_16: o.size16,
        SIZE_20: o.size20,
        SIZE_24: o.size24,
        SIZE_32: o.size32
    }),
    c = (e) => {
        let { className: t, color: n = l.STANDARD, size: r = u.SIZE_14, tag: o = 'div', selectable: c = !1, strong: d = !1, children: f, style: _, 'aria-label': p, ...h } = e;
        return (0, i.jsx)(o, {
            'aria-label': p,
            className: a()(n, r, t, {
                [s.selectable]: c,
                [s.strong]: d
            }),
            style: _,
            ...h,
            children: f
        });
    };
(c.Colors = l), (c.Sizes = u);
let d = c;
