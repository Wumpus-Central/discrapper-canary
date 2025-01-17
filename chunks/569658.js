n.d(t, {
    Z: function () {
        return j;
    }
});
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
    m = n(324067),
    g = n(699516),
    x = n(594174),
    S = n(981631),
    p = n(388032),
    N = n(539673);
let v = (e) => {
    let {
        channel: { type: t }
    } = e;
    return (0, u.r8)(t) || t === S.d4z.GUILD_CATEGORY;
};
function j(e) {
    var t;
    let { guildId: n, onSelected: s } = e;
    let { channels: u, categories: j } =
            ((t = n),
            (0, r.cj)([m.Z], () => {
                let e = m.Z.getCategories(t);
                return {
                    channels: (0, o.Z)(e._categories, e, v),
                    categories: e
                };
            })),
        C = l()(u)
            .filter((e) => {
                let { channel: t } = e;
                return t.type !== S.d4z.GUILD_CATEGORY || (null != j[t.id] && j[t.id].length > 0);
            })
            .map((e) => {
                let { channel: t } = e;
                return {
                    value: t.id,
                    label: (0, d.F6)(t, x.default, g.Z)
                };
            })
            .value();
    return (0, i.jsxs)(a.FormItem, {
        children: [
            (0, i.jsx)(a.FormText, {
                type: a.FormText.Types.DESCRIPTION,
                children: p.intl.string(p.t['2Y9ZfH'])
            }),
            (0, i.jsx)('div', {
                className: N.input,
                children: (0, i.jsx)(a.SearchableSelect, {
                    value: S.lds,
                    onChange: s,
                    options: C,
                    renderOptionLabel: (e) => {
                        let t = h.Z.getChannel(e.value);
                        if (null == t) return e.label;
                        let n = h.Z.getChannel(t.parent_id),
                            s = null != n ? n.name : null;
                        return (0, i.jsx)(a.IconSelectOption, {
                            icon: (0, c.KS)(t),
                            title: e.label,
                            subtitle: s
                        });
                    },
                    placeholder: p.intl.string(p.t['Z+oF8v'])
                })
            })
        ]
    });
}
