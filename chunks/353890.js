n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(471445),
    c = n(977258),
    d = n(637853),
    u = n(816436),
    m = n(259580),
    g = n(889369),
    p = n(838324),
    h = n(388032),
    f = n(281310);
function b(e) {
    let { guild: t, scrollToQuestions: n } = e,
        i = (0, a.e7)([g.Z], () => g.Z.editedDefaultChannelIds),
        s = (0, u.b)(t.id, i).filter((e) => e.isCategory() || (0, c.s)(e.guild_id, e.id));
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
                children: [(0, r.jsx)(N, {}), 0 === s.length && (0, r.jsx)(x, {}), (0, r.jsx)(j, { channels: s })]
            })
        ]
    });
}
function x() {
    return (0, r.jsxs)('div', {
        className: f.emptyState,
        children: [
            (0, r.jsx)('div', {
                className: f.emptyStateIcon,
                children: (0, r.jsx)(l.VL1, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsx)(l.Text, {
                className: f.channelName,
                variant: 'text-md/normal',
                color: 'text-muted',
                children: h.NW.string(h.t['Qj6O9/'])
            })
        ]
    });
}
function j(e) {
    let { channels: t } = e;
    return (0, r.jsx)(r.Fragment, { children: t.map((e) => (e.isCategory() ? (0, r.jsx)(_, { label: e.name }, e.id) : (0, r.jsx)(v, { channel: e }, e.id))) });
}
function N() {
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
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/semibold',
                color: 'text-muted',
                lineClamp: 1,
                children: t
            })
        ]
    });
}
function v(e) {
    var t;
    let { channel: n } = e,
        i = (0, d.iF)(n),
        a = null != (t = (0, o.KS)(n)) ? t : l.VL1;
    return (0, r.jsxs)('div', {
        className: f.channel,
        children: [
            (0, r.jsx)(a, {
                className: f.channelIcon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, r.jsx)(l.Text, {
                className: f.channelName,
                variant: 'text-md/normal',
                color: 'text-muted',
                lineClamp: 1,
                children: n.name
            }),
            (0, r.jsx)('div', { className: s()({ [f.chattableIndicator]: i }) })
        ]
    });
}
