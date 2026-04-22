n.d(t, { A: () => h }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(192308),
    r = n(696986);
n(465932);
var a = n(11351),
    o = n(306444),
    d = n(922975),
    c = n(626083),
    u = n(79143),
    m = n(2242),
    g = n(985018);
function h() {
    let { editStateId: e, guildId: t } = (0, o.O)(),
        [n, h] = d.lZ(e),
        x = l.useMemo(() => new Set(n.map((e) => e.ref_id)), [n]);
    function _(e, t) {
        let { channelId: i, description: l, emojiId: s, emojiName: r } = e,
            a = [...n],
            o = { name: "", description: l, emoji_id: s, emoji_name: r, ref_type: m.bN.CHANNEL, ref_id: i };
        null != t ? (a[t] = o) : a.push(o), h(a);
    }
    let p = (0, a.gN)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.$, {
                benefits: n,
                onEdit: function (e) {
                    (0, s.openModal)((l) =>
                        (0, i.jsx)(c.oJ, {
                            ...l,
                            guildId: t,
                            omitChannelIds: x,
                            initialData: n[e],
                            onSave: (t) => _(t, e),
                            onDelete: () => {
                                let t;
                                (t = [...n]).splice(e, 1), h(t);
                            },
                        }),
                    );
                },
                onMove: function (e, t) {
                    let i = [...n],
                        [l] = i.splice(e, 1);
                    i.splice(t, 0, l), h(i);
                },
                guildId: t,
            }),
            n.length > 0 && (0, i.jsx)(r.h, { size: 8 }),
            (0, i.jsx)(u.n, {
                onClick: function () {
                    (0, s.openModal)((e) =>
                        (0, i.jsx)(c.oJ, { ...e, guildId: t, omitChannelIds: x, onSave: (e) => _(e) }),
                    );
                },
                disabled: p,
                children: g.intl.string(g.t.PLSCUg),
            }),
        ],
    });
}
