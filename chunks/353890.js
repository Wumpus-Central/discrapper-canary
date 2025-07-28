n.d(t, { Z: () => x });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(471445),
    c = n(977258),
    d = n(637853),
    u = n(816436),
    m = n(259580),
    g = n(889369),
    p = n(838324),
    h = n(388032),
    f = n(281310);
function x(e) {
    let { guild: t, scrollToQuestions: n } = e,
        i = (0, a.e7)([g.Z], () => g.Z.editedDefaultChannelIds),
        l = (0, u.b)(t.id, i).filter((e) => e.isCategory() || (0, c.s)(e.guild_id, e.id));
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            (0, r.jsx)('div', {
                className: f.header,
                children: (0, r.jsx)(p.Z, {
                    guildId: t.id,
                    scrollToQuestions: n
                })
            }),
            (0, r.jsxs)('div', {
                className: f.channelList,
                children: [(0, r.jsx)(v, {}), 0 === l.length && (0, r.jsx)(b, {}), (0, r.jsx)(j, { channels: l })]
            })
        ]
    });
}
function b() {
    return (0, r.jsxs)('div', {
        className: f.emptyState,
        children: [
            (0, r.jsx)('div', {
                className: f.emptyStateIcon,
                children: (0, r.jsx)(s.VL1, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsx)(s.Text, {
                className: f.channelName,
                variant: 'text-md/normal',
                color: 'text-muted',
                children: h.intl.string(h.t['Qj6O9/'])
            })
        ]
    });
}
function j(e) {
    let { channels: t } = e;
    return (0, r.jsx)(r.Fragment, { children: t.map((e) => (e.isCategory() ? (0, r.jsx)(_, { label: e.name }, e.id) : (0, r.jsx)(O, { channel: e }, e.id))) });
}
function v() {
    return (0, r.jsx)('div', { className: f.divider });
}
function _(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: f.category,
        children: [
            (0, r.jsx)(m.Z, {
                className: f.caret,
                width: 12,
                height: 12,
                direction: m.Z.Directions.DOWN
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/semibold',
                color: 'text-muted',
                lineClamp: 1,
                children: t
            })
        ]
    });
}
function O(e) {
    var t;
    let { channel: n } = e,
        i = (0, d.iF)(n),
        a = null != (t = (0, o.KS)(n)) ? t : s.VL1;
    return (0, r.jsxs)('div', {
        className: f.channel,
        children: [
            (0, r.jsx)(a, {
                className: f.channelIcon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, r.jsx)(s.Text, {
                className: f.channelName,
                variant: 'text-md/normal',
                color: 'text-muted',
                lineClamp: 1,
                children: n.name
            }),
            (0, r.jsx)('div', { className: l()({ [f.chattableIndicator]: i }) })
        ]
    });
}
