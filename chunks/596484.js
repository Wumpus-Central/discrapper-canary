t.d(l, { z: () => d });
var n = t(477900);
t(582128);
var i = t(503698),
    s = t.n(i),
    a = t(866665),
    u = t(939249),
    r = t(834730),
    o = t(689949);
function d(e) {
    let { pills: l, pillClassName: t } = e;
    return (0, n.jsx)("div", {
        className: o.kL,
        children: l.map((e) =>
            (0, n.jsx)(
                a.m,
                {
                    __unsupportedReactNodeAsText: e.tooltipText,
                    shouldShow: null != e.tooltipText,
                    children: (0, n.jsx)(u.D, {
                        className: s()(o.Io, { [o.r9]: e.disabled }, t),
                        onClick: e.disabled ? void 0 : e.onClick,
                        children: (0, n.jsx)(r.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "interactive-text-default",
                            children: e.text,
                        }),
                    }),
                },
                e.text,
            ),
        ),
    });
}
