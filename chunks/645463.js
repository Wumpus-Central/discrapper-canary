n.d(t, { A: () => _ });
var r = n(243949),
    i = n(939496),
    a = n(667201),
    s = n(754495),
    o = n(534465),
    l = n(939075),
    c = n(106890),
    u = n(552468),
    d = n(518477),
    f = n(996988),
    p = n(985018);
function _(e) {
    let { onAction: t } = e,
        { themeType: n } = (0, i.E)(),
        _ = (0, r.A)({
            userId: e.user.id,
            tabSection: d.RP.ACTIVITY,
            label: p.intl.string(p.t.pD1L1u),
            onAction: () => (null == t ? void 0 : t({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" })),
        });
    return [
        n === f.d.POPOUT ? _ : null,
        (0, c.A)(e),
        (0, o.Ay)(e),
        (0, o.gA)(e),
        (0, u.A)(e),
        (0, l.A)(e),
        (0, a.A)(e),
        (0, s.s)(e),
    ].filter((e) => null != e);
}
