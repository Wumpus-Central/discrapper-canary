i.d(e, { A: () => h });
var n = i(627968);
i(64700);
var u = i(17928),
    s = i(477782),
    l = i(39623),
    a = i(71393),
    c = i(287809),
    d = i(234053),
    r = i(395504),
    o = i(652215),
    p = i(375708);
function h(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = (0, r.jN)(t),
        h = (0, u.bG)([a.A], () => a.A.getGuild(t)),
        f = (0, u.bG)([c.default], () => c.default.getCurrentUser());
    return null != f && null != h && (h.features.has(o.GuildFeatures.COMMUNITY) || f.isStaff())
        ? (0, n.jsx)(s.sL, {
              id: "opt-in",
              label: p.intl.string(p.t.FB2ZZV),
              leadingAccessory: e ? { type: "icon", icon: l.b } : void 0,
              checked: !i,
              action: function () {
                  (0, d.Lu)(t);
              },
          })
        : null;
}
