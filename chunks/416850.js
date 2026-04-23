n.d(t, { A: () => p });
var i = n(627968),
    s = n(735438),
    l = n.n(s),
    a = n(311907),
    r = n(417048),
    d = n(444550),
    o = n(999903),
    c = n(47167),
    u = n(713654),
    h = n(95701),
    g = n(734057),
    m = n(769765),
    x = n(994500),
    A = n(287809),
    N = n(652215),
    j = n(985018);
let S = (e) => {
    let {
        channel: { type: t },
    } = e;
    return (0, h.tr)(t) || t === N.rbe.GUILD_CATEGORY;
};
function p(e) {
    let { guildId: t, onSelected: n } = e,
        { channels: s, categories: h } = (0, a.cf)([m.A], () => {
            let e = m.A.getCategories(t);
            return { channels: (0, o.A)(e._categories, e, S), categories: e };
        }),
        p = l()(s)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== N.rbe.GUILD_CATEGORY || (null != h[t.id] && h[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, c.m1)(t, A.default, x.A) };
            })
            .value();
    return (0, i.jsx)(d.p, {
        description: j.intl.string(j.t["2Y9ZfA"]),
        value: N.dJq,
        onChange: n,
        options: p,
        renderOptionLabel: (e) => {
            let t = g.A.getChannel(e.value);
            if (null == t) return e.label;
            let n = g.A.getChannel(t.parent_id),
                s = null != n ? n.name : null;
            return (0, i.jsx)(r.X, { icon: (0, u.gU)(t), title: e.label, subtitle: s });
        },
        placeholder: j.intl.string(j.t["Z+oF8h"]),
        "data-migration-pending": !0,
    });
}
