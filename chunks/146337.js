t.d(l, { A: () => y, _: () => g });
var i = t(477900);
t(582128);
var e = t(477782),
    c = t(138134),
    u = t(627363),
    r = t(587895),
    o = t(928658),
    a = t(858899),
    d = t(105292);
async function s(n) {
    let l = r.A.getApplication(n);
    if (null != l && r.A.isHydrated(n)) return l;
    try {
        await u.Ay.fetchApplication(n);
    } catch {
        return null;
    }
    return r.A.getApplication(n);
}
async function A(n, l, t) {
    let i = await s(n);
    null == i
        ? (0, a.P0)({ text: d.intl.string(d.t.F8FvUy), variant: "critical" })
        : (0, o.r3)({
              application: i,
              entrypoint: t,
              contextualGuildId: l.getGuildId() ?? void 0,
              contextualChannelId: l.id,
          });
}
var p = t(652215);
let g = "app_channel_context_menu";
function y(n, l) {
    let t = n.type === p.rbe.GUILD_APP ? n.getApplicationId() : null;
    return null == t
        ? null
        : (0, i.jsx)(e.Dr, {
              id: "report-app",
              label: d.intl.string(d.t.NgA5vp),
              action: () => A(t, n, l),
              icon: c.FlagIcon,
              leadingAccessory: { type: "icon", icon: c.FlagIcon },
              color: "danger",
          });
}
