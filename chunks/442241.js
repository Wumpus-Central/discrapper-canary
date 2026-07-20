i.d(t, { default: () => o }), i(321073);
var s = i(627968),
    e = i(64700),
    n = i(189213),
    r = i(834730),
    l = i(49999),
    c = i(375708),
    d = i(492250);
function o(a) {
    let { modalConfig: t, markAsDismissed: i, onClose: o, ...h } = a,
        p = e.useCallback(
            (a) => {
                t.onPrimaryClick?.(a), i(l.i.TAKE_ACTION), o?.();
            },
            [t, i, o],
        ),
        u = [];
    return (
        t.hasCancelButton && u.push({ variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: o }),
        null != t.primaryButtonText && u.push({ variant: "primary", text: t.primaryButtonText, onClick: p }),
        (0, s.jsx)(n.Modal, {
            ...h,
            onClose: o,
            title: t.header,
            actions: u,
            size: "md",
            children: (0, s.jsx)("div", {
                className: d.kL,
                children: (0, s.jsx)("div", {
                    className: d.hQ,
                    children: t.bodies.map((a, t) =>
                        (0, s.jsx)(r.E, { tag: "span", className: d.h_, variant: "text-sm/normal", children: a }, t),
                    ),
                }),
            }),
        })
    );
}
