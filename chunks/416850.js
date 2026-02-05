i.d(t, { A: () => p });
var n = i(627968),
    s = i(735438),
    l = i.n(s),
    a = i(311907),
    r = i(417048),
    d = i(444550),
    o = i(999903),
    c = i(47167),
    u = i(713654),
    g = i(95701),
    h = i(734057),
    x = i(769765),
    m = i(994500),
    A = i(287809),
    N = i(652215),
    j = i(985018);
let S = (e) => {
    let {
        channel: { type: t },
    } = e;
    return (0, g.tr)(t) || t === N.rbe.GUILD_CATEGORY;
};
function p(e) {
    let { guildId: t, onSelected: i } = e,
        { channels: s, categories: g } = (0, a.cf)([x.A], () => {
            let e = x.A.getCategories(t);
            return { channels: (0, o.A)(e._categories, e, S), categories: e };
        }),
        p = l()(s)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== N.rbe.GUILD_CATEGORY || (null != g[t.id] && g[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, c.m1)(t, A.default, m.A) };
            })
            .value();
    return (0, n.jsx)(d.p, {
        description: j.intl.string(j.t["2Y9ZfA"]),
        value: N.dJq,
        onChange: i,
        options: p,
        renderOptionLabel: (e) => {
            let t = h.A.getChannel(e.value);
            if (null == t) return e.label;
            let i = h.A.getChannel(t.parent_id),
                s = null != i ? i.name : null;
            return (0, n.jsx)(r.X, { icon: (0, u.gU)(t), title: e.label, subtitle: s });
        },
        placeholder: j.intl.string(j.t["Z+oF8h"]),
        "data-migration-pending": !0,
    });
}
