n.d(t, { Z: () => j });
var i = n(200651);
n(192379);
var s = n(392711),
    l = n.n(s),
    a = n(442837),
    r = n(481060),
    o = n(740504),
    d = n(933557),
    c = n(471445),
    u = n(131704),
    h = n(592125),
    g = n(324067),
    m = n(699516),
    x = n(594174),
    p = n(981631),
    v = n(388032),
    N = n(913655);
let S = (e) => {
    let {
        channel: { type: t }
    } = e;
    return (0, u.r8)(t) || t === p.d4z.GUILD_CATEGORY;
};
function j(e) {
    let { guildId: t, onSelected: n } = e,
        { channels: s, categories: u } = (0, a.cj)([g.Z], () => {
            let e = g.Z.getCategories(t);
            return {
                channels: (0, o.Z)(e._categories, e, S),
                categories: e
            };
        }),
        j = l()(s)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== p.d4z.GUILD_CATEGORY || (null != u[t.id] && u[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return {
                    value: t.id,
                    label: (0, d.F6)(t, x.default, m.Z)
                };
            })
            .value();
    return (0, i.jsxs)(r.xJW, {
        children: [
            (0, i.jsx)(r.R94, {
                type: r.R94.Types.DESCRIPTION,
                children: v.intl.string(v.t['2Y9ZfH'])
            }),
            (0, i.jsx)('div', {
                className: N.input,
                children: (0, i.jsx)(r.VcW, {
                    value: p.lds,
                    onChange: n,
                    options: j,
                    renderOptionLabel: (e) => {
                        let t = h.Z.getChannel(e.value);
                        if (null == t) return e.label;
                        let n = h.Z.getChannel(t.parent_id),
                            s = null != n ? n.name : null;
                        return (0, i.jsx)(r.ZZ$, {
                            icon: (0, c.KS)(t),
                            title: e.label,
                            subtitle: s
                        });
                    },
                    placeholder: v.intl.string(v.t['Z+oF8v'])
                })
            })
        ]
    });
}
