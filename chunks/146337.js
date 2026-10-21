t.d(n, { A: () => y, _: () => g });
var e = t(477900);
t(582128);
var i = t(477782),
    u = t(138134),
    c = t(627363),
    r = t(587895),
    o = t(928658),
    a = t(858899),
    d = t(105292);
async function s(l) {
    let n = r.A.getApplication(l);
    if (null != n && r.A.isHydrated(l)) return n;
    try {
        await c.Ay.fetchApplication(l);
    } catch {
        return null;
    }
    return r.A.getApplication(l);
}
async function p(l, n, t) {
    let e = await s(l);
    null == e
        ? (0, a.P0)({ text: d.intl.string(d.t.F8FvUy), variant: "critical" })
        : (0, o.r3)({
              application: e,
              entrypoint: t,
              contextualGuildId: n.getGuildId() ?? void 0,
              contextualChannelId: n.id,
          });
}
var A = t(652215);
let g = "app_channel_context_menu";
function y(l, n) {
    let t = l.type === A.rbe.GUILD_APP ? l.getApplicationId() : null;
    return null == t
        ? null
        : (0, e.jsx)(i.Dr, {
              id: "report-app",
              label: d.intl.string(d.t.NgA5vp),
              action: () => p(t, l, n),
              icon: u.FlagIcon,
              leadingAccessory: { type: "icon", icon: u.FlagIcon },
              color: "danger",
          });
}
