"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(372598),
    r = n(53594),
    a = n(449585),
    o = n(864557);
function d(e) {
    let { rule: t, onChangeRule: n } = e,
        d = s.useMemo(() => (0, r.J6)(t.triggerType), [t.triggerType]),
        c = a.Bx(t.guildId),
        u = s.useMemo(() => (0, l.XO)(), []),
        m = (e, i) => {
            if (null == i) return;
            let s = t.actions.some((e) => e.type === i.type),
                l = [...t.actions, i];
            if (s) {
                let n = t.actions.filter((e) => e.type !== i.type);
                l = e ? [...n, i] : n;
            }
            n({ ...t, actions: l });
        };
    return (0, i.jsx)(i.Fragment, {
        children: d.map((e) => {
            let n = t.actions.find((t) => t.type === e);
            return (0, i.jsx)(
                o.A,
                {
                    guildId: t.guildId,
                    triggerType: t.triggerType,
                    action: n ?? u[e],
                    toggled: null != n,
                    onToggleAction: async (n) => {
                        let i = t.actions.find((t) => t.type === e),
                            s = null != i,
                            l = u[e],
                            r = n ? i : l;
                        if (null != r && (!s || n)) {
                            let n = c[e];
                            null != n ? m(!0, await n(t, r)) : m(!0, r);
                        } else m(!1, s ? i : l);
                    },
                },
                e,
            );
        }),
    });
}
