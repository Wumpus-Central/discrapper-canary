s.d(i, { default: () => u });
var a = s(477900),
    e = s(582128),
    n = s(189213),
    l = s(778712),
    r = s(834730),
    c = s(656925),
    o = s(105292),
    d = s(164086);
function u(t) {
    let { avatarId: i, storageHash: s, avatarDescription: u, onConfirmDelete: x, onClose: h, ...m } = t,
        [y, b] = e.useState(!1),
        { avatarSrc: p, eventHandlers: v } = (0, c.A)({ avatarId: i, storageHash: s, size: l._3.SIZE_120 }),
        { onMouseEnter: g, onMouseLeave: k } = v,
        E = e.useCallback(async () => {
            b(!0);
            try {
                await x();
            } catch (t) {
            } finally {
                b(!1);
            }
            h();
        }, [x, h]);
    return (0, a.jsx)(n.a, {
        size: "sm",
        title: o.intl.string(o.t.rfaLTH),
        subtitle: o.intl.string(o.t.EKmxKc),
        actions: [
            { text: o.intl.string(o.t["ETE/oC"]), variant: "secondary", onClick: h, disabled: y },
            { text: o.intl.string(o.t.Lh0uyy), variant: "critical-primary", onClick: E, loading: y },
        ],
        onClose: h,
        ...m,
        children: (0, a.jsxs)("div", {
            className: d.jE,
            children: [
                (0, a.jsx)("div", {
                    onMouseEnter: g,
                    onMouseLeave: k,
                    className: d.H,
                    children: (0, a.jsx)("img", { src: p, alt: u, className: d.my }),
                }),
                (0, a.jsx)(r.E, {
                    variant: "body-sm/medium",
                    color: "text-feedback-positive",
                    children: o.intl.string(o.t["2Ld8DM"]),
                }),
                (0, a.jsx)(r.E, {
                    variant: "body-xs/normal",
                    color: "text-subtle",
                    children: o.intl.string(o.t.Oe0xqt),
                }),
            ],
        }),
    });
}
