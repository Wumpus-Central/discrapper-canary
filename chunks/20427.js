t.d(a, { A: () => f, C: () => b });
var n = t(477900),
    l = t(582128),
    i = t(17928),
    r = t(477782),
    d = t(499373),
    o = t(967198),
    c = t(5180),
    u = t(518082),
    s = t(652215),
    p = t(449817),
    _ = t(375708);
function b(e) {
    let a = (0, i.bG)([o.A], () => o.A.getGuildId()),
        t = l.useCallback(() => {
            (0, u.A)(e.id, "favorites_add_to_category");
        }, [e.id]);
    return __OVERLAY__ || !(0, c.ai)(a) || e.type !== s.rbe.GUILD_CATEGORY
        ? null
        : { label: _.intl.string(p.default["1QJmIL"]), perform: t };
}
function f(e) {
    let a = b(e);
    return null == a
        ? null
        : (0, n.jsx)(r.Dr, {
              id: "add-channel-to-category",
              trailingIndicator: { type: "icon", icon: d.T },
              label: a.label,
              action: a.perform,
          });
}
