e.d(n, { A: () => p });
var i = e(243949),
    l = e(939496),
    r = e(667201),
    a = e(754495),
    s = e(534465),
    o = e(939075),
    c = e(106890),
    u = e(552468),
    d = e(518477),
    A = e(996988),
    x = e(985018);
function p(t) {
    let { onAction: n } = t,
        { themeType: e } = (0, l.E)(),
        p = (0, i.A)({
            userId: t.user.id,
            tabSection: d.RP.ACTIVITY,
            label: x.intl.string(x.t.pD1L1u),
            onAction: () => n?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
        });
    return [
        e === A.d.POPOUT ? p : null,
        (0, c.A)(t),
        (0, s.Ay)(t),
        (0, s.gA)(t),
        (0, u.A)(t),
        (0, o.A)(t),
        (0, r.A)(t),
        (0, a.s)(t),
    ].filter((t) => null != t);
}
