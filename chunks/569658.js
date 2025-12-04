n.d(t, { Z: () => N });
var i = n(54381),
    s = n(392711),
    l = n.n(s),
    r = n(442837),
    a = n(311047),
    o = n(668339),
    d = n(740504),
    c = n(933557),
    u = n(471445),
    h = n(131704),
    g = n(592125),
    m = n(324067),
    x = n(699516),
    p = n(594174),
    j = n(981631),
    v = n(388032);
let f = (e) => {
    let {
        channel: { type: t },
    } = e;
    return (0, h.r8)(t) || t === j.d4z.GUILD_CATEGORY;
};
function N(e) {
    let { guildId: t, onSelected: n } = e,
        { channels: s, categories: h } = (0, r.cj)([m.Z], () => {
            let e = m.Z.getCategories(t);
            return {
                channels: (0, d.Z)(e._categories, e, f),
                categories: e,
            };
        }),
        N = l()(s)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== j.d4z.GUILD_CATEGORY || (null != h[t.id] && h[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return {
                    value: t.id,
                    label: (0, c.F6)(t, p.default, x.Z),
                };
            })
            .value();
    return (0, i.jsx)(o.d, {
        description: v.intl.string(v.t["2Y9ZfA"]),
        value: j.lds,
        onChange: n,
        options: N,
        renderOptionLabel: (e) => {
            let t = g.Z.getChannel(e.value);
            if (null == t) return e.label;
            let n = g.Z.getChannel(t.parent_id),
                s = null != n ? n.name : null;
            return (0, i.jsx)(a.Z, {
                icon: (0, u.KS)(t),
                title: e.label,
                subtitle: s,
            });
        },
        placeholder: v.intl.string(v.t["Z+oF8h"]),
    });
}
