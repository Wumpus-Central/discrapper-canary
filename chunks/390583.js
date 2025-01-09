n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(481060);
n(674180);
var s = n(723047),
    a = n(727843),
    o = n(290348),
    c = n(764163),
    d = n(155758),
    u = n(293810),
    m = n(388032);
function h() {
    let { editStateId: e, guildId: t } = (0, a.N)(),
        [n, h] = o.UE(e),
        g = r.useMemo(() => new Set(n.map((e) => e.ref_id)), [n]);
    function x(e, t) {
        let { channelId: i, description: r, emojiId: l, emojiName: s } = e,
            a = [...n],
            o = {
                name: '',
                description: r,
                emoji_id: l,
                emoji_name: s,
                ref_type: u.Qs.CHANNEL,
                ref_id: i
            };
        null != t ? (a[t] = o) : a.push(o), h(a);
    }
    let p = (0, s.mY)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.p, {
                benefits: n,
                onEdit: function (e) {
                    (0, l.openModal)((r) =>
                        (0, i.jsx)(c.x3, {
                            ...r,
                            guildId: t,
                            omitChannelIds: g,
                            initialData: n[e],
                            onSave: (t) => x(t, e),
                            onDelete: () =>
                                (function (e) {
                                    let t = [...n];
                                    t.splice(e, 1), h(t);
                                })(e)
                        })
                    );
                },
                onMove: function (e, t) {
                    let i = [...n],
                        [r] = i.splice(e, 1);
                    i.splice(t, 0, r), h(i);
                },
                guildId: t
            }),
            n.length > 0 && (0, i.jsx)(l.Spacer, { size: 8 }),
            (0, i.jsx)(d.s, {
                onClick: function () {
                    (0, l.openModal)((e) =>
                        (0, i.jsx)(c.x3, {
                            ...e,
                            guildId: t,
                            omitChannelIds: g,
                            onSave: (e) => x(e)
                        })
                    );
                },
                disabled: p,
                children: m.intl.string(m.t.PLSCUl)
            })
        ]
    });
}
