n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(866830),
    s = n(85960),
    a = n(226192),
    o = n(683579);
function c(e) {
    let { rule: t, onChangeRule: n } = e,
        c = r.useMemo(() => (0, s.V9)(t.triggerType), [t.triggerType]),
        d = a.km(t.guildId),
        u = r.useMemo(() => (0, l.U5)(), []),
        m = (e, i) => {
            if (null == i) return;
            let r = t.actions.some((e) => e.type === i.type),
                l = [...t.actions, i];
            if (r) {
                let n = t.actions.filter((e) => e.type !== i.type);
                l = e ? [...n, i] : n;
            }
            n({
                ...t,
                actions: l
            });
        },
        h = (e) => async (n) => {
            let i = t.actions.find((t) => t.type === e),
                r = null != i,
                l = u[e],
                s = n ? i : l;
            if (null != s && (!r || n)) {
                let n = d[e];
                null != n ? m(!0, await n(t, s)) : m(!0, s);
            } else m(!1, r ? i : l);
        };
    return (0, i.jsx)(i.Fragment, {
        children: c.map((e) => {
            let n = t.actions.find((t) => t.type === e);
            return (0, i.jsx)(
                o.Z,
                {
                    guildId: t.guildId,
                    triggerType: t.triggerType,
                    action: null != n ? n : u[e],
                    toggled: null != n,
                    onToggleAction: h(e)
                },
                e
            );
        })
    });
}
