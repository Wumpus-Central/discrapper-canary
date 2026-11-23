i.d(n, { E: () => v, c: () => b });
var l = i(477900);
i(582128);
var t = i(855986),
    o = i(477782),
    r = i(138134),
    c = i(865116),
    a = i(928658);
let d = (0, i(945810).mj)({
    name: "2026-11-iar-guild-reporting-desktop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s = i(260509),
    u = i(287809),
    g = i(792996);
function v(e, n) {
    let { isEligible: i = !0, showIcon: c = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        v = (0, t.bG)(
            [u.default],
            () => {
                let n = u.default.getCurrentUser();
                return null != n && (0, s.bM)(e, n);
            },
            [e],
        );
    return !(function (e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { enabled: i } = d.useConfig({ location: e }, { autoTrackExposure: n });
        return n && i;
    })(n, i && !v)
        ? null
        : (0, l.jsx)(o.Dr, {
              id: "report-guild",
              label: g.intl.string(g.t.Aen9eh),
              icon: c ? r.FlagIcon : void 0,
              leadingAccessory: c ? { type: "icon", icon: r.FlagIcon } : void 0,
              action: () => (0, a.b1)(e, n),
          });
}
function b(e) {
    let n = (0, t.bG)([c.Ay], () => c.Ay.get("iar_testing")),
        i = (0, t.bG)([u.default], () => u.default.getCurrentUser());
    return null != i && i.isStaff() && n
        ? (0, l.jsx)(o.Dr, {
              id: "staff-test-guild-report",
              label: "[STAFF] Test Guild Report",
              action: () => (0, a.RV)(e, "web_guild_context_menu"),
              icon: r.FlagIcon,
              color: "danger",
          })
        : null;
}
