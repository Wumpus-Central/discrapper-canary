t.d(n, { A: () => x });
var l = t(627968),
    i = t(64700),
    r = t(317097),
    a = t(311907),
    s = t(827734),
    o = t(602853),
    d = t(265872),
    u = t(508274),
    c = t(654107),
    g = t(84540),
    A = t(836602),
    m = t(622543),
    f = t(930349),
    p = t(985018);
function x(e) {
    let { user: n, disabled: t = !1 } = e,
        x = i.useRef(null),
        h = (0, o.r)(s.A.unsafe_rawColors.PRIMARY_530).hex(),
        v = (0, c.rh)(n.getAvatarURL(null, 80), h, !1),
        { pendingAccentColor: j, savedAccentColor: I } = (0, a.cf)([A.A, m.A], () => ({
            pendingAccentColor: A.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: m.A.getUserProfile(n.id)?.accentColor,
        })),
        b = j ?? I ?? (0, r.LX)(v[0] ?? h),
        C = i.useCallback((e) => (0, g.p)({ accentColor: e }), []);
    return (0, l.jsx)(d.Y, {
        targetElementRef: x,
        renderPopout: (e) => (0, l.jsx)(u.VN, { ...e, value: b, onChange: C, suggestedColors: v, showEyeDropper: !0 }),
        children: (e) =>
            (0, l.jsx)(f.NW, {
                ...e,
                variant: "bar",
                buttonRef: x,
                disabled: t,
                accessibleLabel: p.intl.string(p.t["/X3fkf"]),
                children: (0, l.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, r.Hl)(b) },
                }),
            }),
    });
}
