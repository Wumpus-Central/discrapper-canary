i.d(t, { default: () => o });
var e = i(627968),
    s = i(64700),
    n = i(189213),
    r = i(834730),
    l = i(49999),
    c = i(375708),
    d = i(89946);
function o(a) {
    let { modalConfig: t, markAsDismissed: i, onClose: o, ...h } = a,
        p = s.useCallback(
            (a) => {
                t.onPrimaryClick?.(a), i(l.i.TAKE_ACTION), o?.();
            },
            [t, i, o],
        ),
        m = [
            { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: o },
            ...(null != t.primaryButtonText ? [{ variant: "primary", text: t.primaryButtonText, onClick: p }] : []),
        ];
    return (0, e.jsx)(n.Modal, {
        ...h,
        onClose: o,
        title: t.header,
        actions: m,
        size: "md",
        children: (0, e.jsx)("div", {
            className: d.kL,
            children: (0, e.jsx)("div", {
                className: d.hQ,
                children: t.bodies.map((a, t) =>
                    (0, e.jsx)(r.E, { tag: "span", className: d.h_, variant: "text-sm/normal", children: a }, t),
                ),
            }),
        }),
    });
}
