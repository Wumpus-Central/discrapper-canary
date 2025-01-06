n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(481060),
    o = n(471445),
    c = n(977258),
    d = n(637853),
    u = n(816436),
    m = n(259580),
    h = n(889369),
    g = n(838324),
    x = n(388032),
    p = n(531840);
function f(e) {
    let { guild: t, scrollToQuestions: n } = e,
        r = (0, a.e7)([h.Z], () => h.Z.editedDefaultChannelIds),
        l = (0, u.b)(t.id, r).filter((e) => e.isCategory() || (0, c.s)(e.guild_id, e.id));
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)('div', {
                className: p.header,
                children: (0, i.jsx)(g.Z, {
                    guildId: t.id,
                    scrollToQuestions: n
                })
            }),
            (0, i.jsxs)('div', {
                className: p.channelList,
                children: [(0, i.jsx)(_, {}), 0 === l.length && (0, i.jsx)(C, {}), (0, i.jsx)(v, { channels: l })]
            })
        ]
    });
}
function C() {
    return (0, i.jsxs)('div', {
        className: p.emptyState,
        children: [
            (0, i.jsx)('div', {
                className: p.emptyStateIcon,
                children: (0, i.jsx)(s.TextIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, i.jsx)(s.Text, {
                className: p.channelName,
                variant: 'text-md/normal',
                color: 'text-muted',
                children: x.intl.string(x.t['Qj6O9/'])
            })
        ]
    });
}
function v(e) {
    let { channels: t } = e;
    return (0, i.jsx)(i.Fragment, { children: t.map((e) => (e.isCategory() ? (0, i.jsx)(I, { label: e.name }, e.id) : (0, i.jsx)(N, { channel: e }, e.id))) });
}
function _() {
    return (0, i.jsx)('div', { className: p.divider });
}
function I(e) {
    let { label: t } = e;
    return (0, i.jsxs)('div', {
        className: p.category,
        children: [
            (0, i.jsx)(m.Z, {
                className: p.caret,
                width: 12,
                height: 12,
                direction: m.Z.Directions.DOWN
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/semibold',
                color: 'text-muted',
                lineClamp: 1,
                children: t
            })
        ]
    });
}
function N(e) {
    var t;
    let { channel: n } = e,
        r = (0, d.iF)(n),
        a = null !== (t = (0, o.KS)(n)) && void 0 !== t ? t : s.TextIcon;
    return (0, i.jsxs)('div', {
        className: p.channel,
        children: [
            (0, i.jsx)(a, {
                className: p.channelIcon,
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(s.Text, {
                className: p.channelName,
                variant: 'text-md/normal',
                color: 'text-muted',
                lineClamp: 1,
                children: n.name
            }),
            (0, i.jsx)('div', { className: l()({ [p.chattableIndicator]: r }) })
        ]
    });
}
