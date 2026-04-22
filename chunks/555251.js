e.d(a, { default: () => x });
var i = e(627968),
    s = e(64700),
    n = e(189213),
    r = e(778712),
    l = e(834730),
    c = e(656925),
    o = e(985018),
    d = e(918684);
function x(t) {
    let { avatarId: a, storageHash: e, avatarDescription: x, onConfirmDelete: u, onClose: h, ...f } = t,
        [m, v] = s.useState(!1),
        { avatarSrc: p, eventHandlers: y } = (0, c.A)({ avatarId: a, storageHash: e, size: r._3.SIZE_120 }),
        { onMouseEnter: _, onMouseLeave: C } = y,
        E = s.useCallback(async () => {
            v(!0);
            try {
                await u();
            } catch (t) {
            } finally {
                v(!1);
            }
            h();
        }, [u, h]);
    return (0, i.jsx)(n.Modal, {
        size: "sm",
        title: o.intl.string(o.t.rfaLTH),
        subtitle: o.intl.string(o.t.EKmxKc),
        actions: [
            { text: o.intl.string(o.t["ETE/oC"]), variant: "secondary", onClick: h, disabled: m },
            { text: o.intl.string(o.t.Lh0uyy), variant: "critical-primary", onClick: E, loading: m },
        ],
        onClose: h,
        ...f,
        children: (0, i.jsxs)("div", {
            className: d.jE,
            children: [
                (0, i.jsx)("div", {
                    onMouseEnter: _,
                    onMouseLeave: C,
                    className: d.H,
                    children: (0, i.jsx)("img", { src: p, alt: x, className: d.my }),
                }),
                (0, i.jsx)(l.E, {
                    variant: "eyebrow",
                    color: "text-feedback-positive",
                    children: o.intl.string(o.t["2Ld8DM"]),
                }),
                (0, i.jsx)(l.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: o.intl.string(o.t.Oe0xqt),
                }),
            ],
        }),
    });
}
