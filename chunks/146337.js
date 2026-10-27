e.d(n, { A: () => y, _: () => p });
var t = e(477900);
e(582128);
var i = e(477782),
    u = e(138134),
    c = e(627363),
    r = e(587895),
    o = e(928658),
    a = e(858899),
    d = e(105292);
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
async function A(l, n, e) {
    let t = await s(l);
    null == t
        ? (0, a.P0)({ text: d.intl.string(d.t.F8FvUy), variant: "critical" })
        : (0, o.r3)({
              application: t,
              entrypoint: e,
              contextualGuildId: n.getGuildId() ?? void 0,
              contextualChannelId: n.id,
          });
}
var g = e(652215);
let p = "app_channel_context_menu";
function y(l, n) {
    let e = l.type === g.rbe.GUILD_APP ? l.getApplicationId() : null;
    return null == e
        ? null
        : (0, t.jsx)(i.Dr, {
              id: "report-app",
              label: d.intl.string(d.t.NgA5vp),
              action: () => A(e, l, n),
              icon: u.FlagIcon,
              leadingAccessory: { type: "icon", icon: u.FlagIcon },
              color: "danger",
          });
}
