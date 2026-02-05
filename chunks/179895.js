"use strict";
n.d(t, { A: () => g }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(397927);
n(465932);
var r = n(11351),
    a = n(306444),
    o = n(922975),
    d = n(626083),
    c = n(79143),
    u = n(2242),
    m = n(985018);
function g() {
    let { editStateId: e, guildId: t } = (0, a.O)(),
        [n, g] = o.lZ(e),
        x = s.useMemo(() => new Set(n.map((e) => e.ref_id)), [n]);
    function h(e, t) {
        let { channelId: i, description: s, emojiId: l, emojiName: r } = e,
            a = [...n],
            o = { name: "", description: s, emoji_id: l, emoji_name: r, ref_type: u.bN.CHANNEL, ref_id: i };
        null != t ? (a[t] = o) : a.push(o), g(a);
    }
    let _ = (0, r.gN)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.$, {
                benefits: n,
                onEdit: function (e) {
                    (0, l.qfG)((s) =>
                        (0, i.jsx)(d.oJ, {
                            ...s,
                            guildId: t,
                            omitChannelIds: x,
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
                        [s] = i.splice(e, 1);
                    i.splice(t, 0, s), g(i);
                },
                guildId: t,
            }),
            n.length > 0 && (0, i.jsx)(l.hKd, { size: 8 }),
            (0, i.jsx)(c.n, {
                onClick: function () {
                    (0, l.qfG)((e) => (0, i.jsx)(d.oJ, { ...e, guildId: t, omitChannelIds: x, onSave: (e) => h(e) }));
                },
                disabled: _,
                children: m.intl.string(m.t.PLSCUg),
            }),
        ],
    });
}
