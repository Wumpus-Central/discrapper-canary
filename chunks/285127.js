l.d(n, { A: () => x });
var t = l(627968),
    i = l(64700),
    s = l(317097),
    a = l(311907),
    r = l(827734),
    o = l(397927),
    d = l(654107),
    c = l(84540),
    u = l(836602),
    m = l(622543),
    A = l(930349),
    p = l(985018);
function x(e) {
    let { user: n, disabled: l = !1 } = e,
        x = i.useRef(null),
        g = (0, o.rdh)(r.A.unsafe_rawColors.PRIMARY_530).hex(),
        f = (0, d.rh)(n.getAvatarURL(null, 80), g, !1),
        { pendingAccentColor: h, savedAccentColor: v } = (0, a.cf)([u.A, m.A], () => ({
            pendingAccentColor: u.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: m.A.getUserProfile(n.id)?.accentColor,
        })),
        j = h ?? v ?? (0, s.LX)(f[0] ?? g),
        I = i.useCallback((e) => (0, c.p)({ accentColor: e }), []);
    return (0, t.jsx)(o.YNO, {
        targetElementRef: x,
        renderPopout: (e) => (0, t.jsx)(o.VNw, { ...e, value: j, onChange: I, suggestedColors: f, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(A.NW, {
                ...e,
                variant: "bar",
                buttonRef: x,
                disabled: l,
                accessibleLabel: p.intl.string(p.t["/X3fkf"]),
                children: (0, t.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, s.Hl)(j) },
                }),
            }),
    });
}
