n.d(t, {
    A: () => A,
});
var i = n(627968),
    l = n(735438),
    s = n.n(l),
    r = n(311907),
    a = n(417048),
    d = n(444550),
    o = n(999903),
    c = n(47167),
    u = n(713654),
    g = n(95701),
    h = n(734057),
    m = n(769765),
    x = n(994500),
    j = n(287809),
    p = n(652215),
    b = n(985018);
let N = (e) => {
    let {
        channel: { type: t },
    } = e;
    return (0, g.tr)(t) || t === p.rbe.GUILD_CATEGORY;
};

function A(e) {
    let { guildId: t, onSelected: n } = e,
        { channels: l, categories: g } = (0, r.cf)([m.A], () => {
            let e = m.A.getCategories(t);
            return {
                channels: (0, o.A)(e._categories, e, N),
                categories: e,
            };
        }),
        A = s()(l)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== p.rbe.GUILD_CATEGORY || (null != g[t.id] && g[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return {
                    value: t.id,
                    label: (0, c.m1)(t, j.default, x.A),
                };
            })
            .value();
    return (0, i.jsx)(d.p, {
        description: b.intl.string(b.t["2Y9ZfA"]),
        value: p.dJq,
        onChange: n,
        options: A,
        renderOptionLabel: (e) => {
            let t = h.A.getChannel(e.value);
            if (null == t) return e.label;
            let n = h.A.getChannel(t.parent_id),
                l = null != n ? n.name : null;
            return (0, i.jsx)(a.X, {
                icon: (0, u.gU)(t),
                title: e.label,
                subtitle: l,
            });
        },
        placeholder: b.intl.string(b.t["Z+oF8h"]),
        "data-migration-pending": !0,
    });
}
