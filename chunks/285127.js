l.d(n, { A: () => x });
var t = l(627968),
    i = l(64700),
    r = l(317097),
    s = l(311907),
    a = l(827734),
    o = l(602853),
    d = l(265872),
    c = l(508274),
    u = l(654107),
    g = l(84540),
    A = l(836602),
    m = l(622543),
    f = l(930349),
    p = l(985018);
function x(e) {
    let { user: n, disabled: l = !1 } = e,
        x = i.useRef(null),
        h = (0, o.r)(a.A.unsafe_rawColors.PRIMARY_530).hex(),
        v = (0, u.rh)(n.getAvatarURL(null, 80), h, !1),
        { pendingAccentColor: j, savedAccentColor: I } = (0, s.cf)([A.A, m.A], () => ({
            pendingAccentColor: A.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: m.A.getUserProfile(n.id)?.accentColor,
        })),
        b = j ?? I ?? (0, r.LX)(v[0] ?? h),
        C = i.useCallback((e) => (0, g.p)({ accentColor: e }), []);
    return (0, t.jsx)(d.Y, {
        targetElementRef: x,
        renderPopout: (e) => (0, t.jsx)(c.VN, { ...e, value: b, onChange: C, suggestedColors: v, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(f.NW, {
                ...e,
                variant: "bar",
                buttonRef: x,
                disabled: l,
                accessibleLabel: p.intl.string(p.t["/X3fkf"]),
                children: (0, t.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, r.Hl)(b) },
                }),
            }),
    });
}
