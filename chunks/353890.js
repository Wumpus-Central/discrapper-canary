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
    f = n(388032),
    h = n(281310);
function b(e) {
    let { guild: t, scrollToQuestions: n } = e,
        i = (0, a.e7)([g.Z], () => g.Z.editedDefaultChannelIds),
        s = (0, u.b)(t.id, i).filter((e) => e.isCategory() || (0, c.s)(e.guild_id, e.id));
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsx)('div', {
                className: h.header,
                children: (0, r.jsx)(p.Z, {
                    guildId: t.id,
                    scrollToQuestions: n
                })
            }),
            (0, r.jsxs)('div', {
                className: h.channelList,
                children: [(0, r.jsx)(N, {}), 0 === s.length && (0, r.jsx)(x, {}), (0, r.jsx)(j, { channels: s })]
            })
        ]
    });
}
function x() {
    return (0, r.jsxs)('div', {
        className: h.emptyState,
        children: [
            (0, r.jsx)('div', {
                className: h.emptyStateIcon,
                children: (0, r.jsx)(l.VL1, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsx)(l.Text, {
                className: h.channelName,
                variant: 'text-md/normal',
                color: 'text-muted',
                children: f.NW.string(f.t['Qj6O9/'])
            })
        ]
    });
}
function j(e) {
    let { channels: t } = e;
    return (0, r.jsx)(r.Fragment, { children: t.map((e) => (e.isCategory() ? (0, r.jsx)(v, { label: e.name }, e.id) : (0, r.jsx)(_, { channel: e }, e.id))) });
}
function N() {
    return (0, r.jsx)('div', { className: h.divider });
}
function v(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: h.category,
        children: [
            (0, r.jsx)(m.Z, {
                className: h.caret,
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
function _(e) {
    var t;
    let { channel: n } = e,
        i = (0, d.iF)(n),
        a = null != (t = (0, o.KS)(n)) ? t : l.VL1;
    return (0, r.jsxs)('div', {
        className: h.channel,
        children: [
            (0, r.jsx)(a, {
                className: h.channelIcon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, r.jsx)(l.Text, {
                className: h.channelName,
                variant: 'text-md/normal',
                color: 'text-muted',
                lineClamp: 1,
                children: n.name
            }),
            (0, r.jsx)('div', { className: s()({ [h.chattableIndicator]: i }) })
        ]
    });
}
