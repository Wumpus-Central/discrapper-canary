i.d(t, { A: () => h });
var n = i(477900);
i(582128);
var u = i(17928),
    s = i(477782),
    l = i(39623),
    a = i(71393),
    c = i(287809),
    d = i(234053),
    r = i(395504),
    o = i(652215),
    p = i(375708);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = (0, r.jN)(e),
        h = (0, u.bG)([a.A], () => a.A.getGuild(e)),
        f = (0, u.bG)([c.default], () => c.default.getCurrentUser());
    return null != f && null != h && (h.features.has(o.GuildFeatures.COMMUNITY) || f.isStaff())
        ? (0, n.jsx)(s.sL, {
              id: "opt-in",
              label: p.intl.string(p.t.FB2ZZV),
              leadingAccessory: t ? { type: "icon", icon: l.EyeIcon } : void 0,
              checked: !i,
              action: function () {
                  (0, d.Lu)(e);
              },
          })
        : null;
}
