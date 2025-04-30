n.d(t, { Z: () => N });
var i = n(200651);
n(192379);
var s = n(392711),
    l = n.n(s),
    r = n(442837),
    a = n(481060),
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
    j = n(490958);
let S = (e) => {
    let {
        channel: { type: t }
    } = e;
    return (0, u.r8)(t) || t === p.d4z.GUILD_CATEGORY;
};
function N(e) {
    let { guildId: t, onSelected: n } = e,
        { channels: s, categories: u } = (0, r.cj)([g.Z], () => {
            let e = g.Z.getCategories(t);
            return {
                channels: (0, o.Z)(e._categories, e, S),
                categories: e
            };
        }),
        N = l()(s)
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
    return (0, i.jsxs)(a.xJW, {
        children: [
            (0, i.jsx)(a.R94, {
                type: a.R94.Types.DESCRIPTION,
                children: v.intl.string(v.t['2Y9ZfH'])
            }),
            (0, i.jsx)('div', {
                className: j.input,
                children: (0, i.jsx)(a.VcW, {
                    value: p.lds,
                    onChange: n,
                    options: N,
                    renderOptionLabel: (e) => {
                        let t = h.Z.getChannel(e.value);
                        if (null == t) return e.label;
                        let n = h.Z.getChannel(t.parent_id),
                            s = null != n ? n.name : null;
                        return (0, i.jsx)(a.ZZ$, {
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
