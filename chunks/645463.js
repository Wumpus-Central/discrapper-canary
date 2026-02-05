"use strict";
n.d(t, { A: () => p });
var r = n(243949),
    i = n(939496),
    a = n(667201),
    s = n(754495),
    o = n(534465),
    l = n(939075),
    u = n(106890),
    c = n(552468),
    d = n(518477),
    _ = n(996988),
    f = n(985018);
function p(e) {
    let { onAction: t } = e,
        { themeType: n } = (0, i.E)(),
        p = (0, r.A)({
            userId: e.user.id,
            tabSection: d.RP.ACTIVITY,
            label: f.intl.string(f.t.pD1L1u),
            onAction: () => t?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
        });
    return [
        n === _.d.POPOUT ? p : null,
        (0, u.A)(e),
        (0, o.Ay)(e),
        (0, o.gA)(e),
        (0, c.A)(e),
        (0, l.A)(e),
        (0, a.A)(e),
        (0, s.s)(e),
    ].filter((e) => null != e);
}
