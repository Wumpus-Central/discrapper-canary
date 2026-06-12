i.d(t, { A: () => h });
var n = i(627968);
i(64700);
var s = i(17928),
    u = i(477782),
    l = i(39623),
    a = i(71393),
    d = i(287809),
    r = i(234053),
    c = i(395504),
    o = i(652215),
    p = i(375708);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = (0, c.jN)(e),
        h = (0, s.bG)([a.A], () => a.A.getGuild(e)),
        b = (0, s.bG)([d.default], () => d.default.getCurrentUser());
    return null != b && null != h && (h.features.has(o.GuildFeatures.COMMUNITY) || b.isStaff())
        ? (0, n.jsx)(u.sL, {
              id: "opt-in",
              label: p.intl.string(p.t.FB2ZZV),
              leadingAccessory: t ? { type: "icon", icon: l.b } : void 0,
              checked: !i,
              action: () => {
                  (0, r.Lu)(e);
              },
          })
        : null;
}
