t.d(a, { A: () => h, C: () => b });
var l = t(477900),
    n = t(582128),
    i = t(17928),
    r = t(477782),
    d = t(499373),
    o = t(967198),
    c = t(5180),
    u = t(192308),
    s = t(652215),
    p = t(449817),
    _ = t(375708);
function b(e) {
    let a = (0, i.bG)([o.A], () => o.A.getGuildId()),
        r = n.useCallback(() => {
            var a;
            (a = e.id),
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        t.e("73883"),
                        t.e("73216"),
                        t.e("69977"),
                        t.e("74390"),
                        t.e("36946"),
                        t.e("92639"),
                        t.e("90480"),
                        t.e("40963"),
                        t.e("66031"),
                        t.e("94317"),
                        t.e("64307"),
                    ]).then(t.bind(t, 420222));
                    return (t) => (0, l.jsx)(e, { ...t, parentId: a, source: "favorites_add_to_category" });
                });
        }, [e.id]);
    return __OVERLAY__ || !(0, c.ai)(a) || e.type !== s.rbe.GUILD_CATEGORY
        ? null
        : { label: _.intl.string(p.default["1QJmIL"]), perform: r };
}
function h(e) {
    let a = b(e);
    return null == a
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "add-channel-to-category",
              trailingIndicator: { type: "icon", icon: d.T },
              label: a.label,
              action: a.perform,
          });
}
