i.d(t, { A: () => A });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(71393),
    a = i(287809),
    d = i(234053),
    o = i(395504),
    c = i(652215),
    u = i(985018);
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = (0, o.jN)(e),
        A = (0, l.bG)([r.A], () => r.A.getGuild(e)),
        g = (0, l.bG)([a.default], () => a.default.getCurrentUser());
    return null != g && null != A && (A.features.has(c.GuildFeatures.COMMUNITY) || g.isStaff())
        ? (0, n.jsx)(s.sLh, {
              id: "opt-in",
              label: u.intl.string(u.t.FB2ZZV),
              leadingAccessory: t ? { type: "icon", icon: s.bMW } : void 0,
              checked: !i,
              action: () => {
                  (0, d.Lu)(e);
              },
          })
        : null;
}
