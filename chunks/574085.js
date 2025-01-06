n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(723047),
    a = n(727843),
    s = n(290348),
    o = n(764163),
    c = n(155758),
    d = n(293810),
    u = n(388032);
function m() {
    let { editStateId: e, guildId: t } = (0, a.N)(),
        [n, m] = s.R7(e);
    function h(e, t) {
        let { name: i, description: r, emojiId: l, emojiName: a } = e,
            s = [...n],
            o = {
                name: i,
                description: r,
                emoji_id: l,
                emoji_name: a,
                ref_type: d.Qs.INTANGIBLE,
                ref_id: void 0
            };
        null != t ? (s[t] = o) : s.push(o), m(s);
    }
    let g = (0, l.mY)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.p, {
                benefits: n,
                onEdit: function (e) {
                    (0, r.openModal)((r) =>
                        (0, i.jsx)(o.DI, {
                            ...r,
                            guildId: t,
                            initialData: n[e],
                            onSave: (t) => h(t, e),
                            onDelete: () =>
                                (function (e) {
                                    let t = [...n];
                                    t.splice(e, 1), m(t);
                                })(e)
                        })
                    );
                },
                onMove: function (e, t) {
                    let i = [...n],
                        [r] = i.splice(e, 1);
                    i.splice(t, 0, r), m(i);
                },
                guildId: t
            }),
            n.length > 0 ? (0, i.jsx)(r.Spacer, { size: 8 }) : null,
            (0, i.jsx)(c.s, {
                onClick: function () {
                    (0, r.openModal)((e) =>
                        (0, i.jsx)(o.DI, {
                            ...e,
                            guildId: t,
                            onSave: (e) => h(e)
                        })
                    );
                },
                disabled: g,
                children: u.intl.string(u.t['6dwqo6'])
            })
        ]
    });
}
