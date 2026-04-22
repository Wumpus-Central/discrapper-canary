n.d(t, { A: () => g }), n(321073);
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(696986),
    r = n(11351),
    a = n(306444),
    o = n(922975),
    d = n(626083),
    c = n(79143),
    u = n(2242),
    m = n(985018);
function g() {
    let { editStateId: e, guildId: t } = (0, a.O)(),
        [n, g] = o.$O(e);
    function h(e, t) {
        let { name: i, description: l, emojiId: s, emojiName: r } = e,
            a = [...n],
            o = { name: i, description: l, emoji_id: s, emoji_name: r, ref_type: u.bN.INTANGIBLE, ref_id: void 0 };
        null != t ? (a[t] = o) : a.push(o), g(a);
    }
    let x = (0, r.gN)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.$, {
                benefits: n,
                onEdit: function (e) {
                    (0, l.openModal)((l) =>
                        (0, i.jsx)(d.aP, {
                            ...l,
                            guildId: t,
                            initialData: n[e],
                            onSave: (t) => h(t, e),
                            onDelete: () => {
                                let t;
                                (t = [...n]).splice(e, 1), g(t);
                            },
                        }),
                    );
                },
                onMove: function (e, t) {
                    let i = [...n],
                        [l] = i.splice(e, 1);
                    i.splice(t, 0, l), g(i);
                },
                guildId: t,
            }),
            n.length > 0 ? (0, i.jsx)(s.h, { size: 8 }) : null,
            (0, i.jsx)(c.n, {
                onClick: function () {
                    (0, l.openModal)((e) => (0, i.jsx)(d.aP, { ...e, guildId: t, onSave: (e) => h(e) }));
                },
                disabled: x,
                children: m.intl.string(m.t["6dwqo0"]),
            }),
        ],
    });
}
