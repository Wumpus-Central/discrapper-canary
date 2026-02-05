"use strict";
n.d(t, { A: () => m }), n(321073);
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(11351),
    r = n(306444),
    a = n(922975),
    o = n(626083),
    d = n(79143),
    c = n(2242),
    u = n(985018);
function m() {
    let { editStateId: e, guildId: t } = (0, r.O)(),
        [n, m] = a.$O(e);
    function g(e, t) {
        let { name: i, description: s, emojiId: l, emojiName: r } = e,
            a = [...n],
            o = { name: i, description: s, emoji_id: l, emoji_name: r, ref_type: c.bN.INTANGIBLE, ref_id: void 0 };
        null != t ? (a[t] = o) : a.push(o), m(a);
    }
    let x = (0, l.gN)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.$, {
                benefits: n,
                onEdit: function (e) {
                    (0, s.qfG)((s) =>
                        (0, i.jsx)(o.aP, {
                            ...s,
                            guildId: t,
                            initialData: n[e],
                            onSave: (t) => g(t, e),
                            onDelete: () => {
                                let t;
                                (t = [...n]).splice(e, 1), m(t);
                            },
                        }),
                    );
                },
                onMove: function (e, t) {
                    let i = [...n],
                        [s] = i.splice(e, 1);
                    i.splice(t, 0, s), m(i);
                },
                guildId: t,
            }),
            n.length > 0 ? (0, i.jsx)(s.hKd, { size: 8 }) : null,
            (0, i.jsx)(d.n, {
                onClick: function () {
                    (0, s.qfG)((e) => (0, i.jsx)(o.aP, { ...e, guildId: t, onSave: (e) => g(e) }));
                },
                disabled: x,
                children: u.intl.string(u.t["6dwqo0"]),
            }),
        ],
    });
}
