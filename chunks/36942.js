t.d(n, { A: () => A });
var l = t(627968);
t(64700);
var i = t(17928),
    a = t(477782),
    r = t(39623),
    s = t(71393),
    o = t(287809),
    d = t(234053),
    c = t(395504),
    u = t(652215),
    v = t(985018);
function A(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        t = (0, c.jN)(e),
        A = (0, i.bG)([s.A], () => s.A.getGuild(e)),
        g = (0, i.bG)([o.default], () => o.default.getCurrentUser());
    return null != g && null != A && (A.features.has(u.GuildFeatures.COMMUNITY) || g.isStaff())
        ? (0, l.jsx)(a.sL, {
              id: "opt-in",
              label: v.intl.string(v.t.FB2ZZV),
              leadingAccessory: n ? { type: "icon", icon: r.b } : void 0,
              checked: !t,
              action: () => {
                  (0, d.Lu)(e);
              },
          })
        : null;
}
