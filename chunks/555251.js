a.d(e, { default: () => d });
var i = a(627968),
    s = a(64700),
    n = a(732955),
    r = a(397927),
    l = a(656925),
    c = a(985018),
    o = a(856367);
function d(t) {
    let { avatarId: e, storageHash: a, avatarDescription: d, onConfirmDelete: x, onClose: u, ...h } = t,
        [f, m] = s.useState(!1),
        { avatarSrc: v, eventHandlers: p } = (0, l.A)({ avatarId: e, storageHash: a, size: r._3J.SIZE_120 }),
        { onMouseEnter: y, onMouseLeave: _ } = p,
        C = s.useCallback(async () => {
            m(!0);
            try {
                await x();
            } catch (t) {
            } finally {
                m(!1);
            }
            u();
        }, [x, u]);
    return (0, i.jsx)(n.aFV, {
        size: "sm",
        title: c.intl.string(c.t.rfaLTH),
        subtitle: c.intl.string(c.t.EKmxKc),
        actions: [
            { text: c.intl.string(c.t["ETE/oC"]), variant: "secondary", onClick: u, disabled: f },
            { text: c.intl.string(c.t.Lh0uyy), variant: "critical-primary", onClick: C, loading: f },
        ],
        onClose: u,
        ...h,
        children: (0, i.jsxs)("div", {
            className: o.jE,
            children: [
                (0, i.jsx)("div", {
                    onMouseEnter: y,
                    onMouseLeave: _,
                    className: o.H,
                    children: (0, i.jsx)("img", { src: v, alt: d, className: o.my }),
                }),
                (0, i.jsx)(r.Text, {
                    variant: "eyebrow",
                    color: "text-feedback-positive",
                    children: c.intl.string(c.t["2Ld8DM"]),
                }),
                (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: c.intl.string(c.t.Oe0xqt),
                }),
            ],
        }),
    });
}
