n.d(t, {
    ZP: () => v,
    dt: () => f,
    eo: () => _
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(884338),
    o = n(398758),
    s = n(9156),
    c = n(934415),
    d = n(540126),
    u = n(700026),
    h = n(301342),
    p = n(327530),
    m = n(333265);
let g = l.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        r = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == r ? null : (0, i.jsx)(h.Qo, { category: r });
});
function f(e) {
    let { sectionIndex: t, guildChannels: n, voiceStates: i, selectedChannelId: l, selectedVoiceChannelId: r, optInEnabled: a, visualRefreshEnabled: o, density: s } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: c, canHaveVoiceSummary: h } = (0, u.ie)(n, a, t),
        m = c ? (o ? 9 : p.QP) : 0;
    if (!h || t === d.wZ) return m;
    let g = n.getNamedCategoryFromSection(t);
    return null == g
        ? m
        : (0, u.V5)({
                category: g,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i
            })
          ? (o ? ('cozy' === s ? 42 : 34) : p.Vf) + m
          : m;
}
function _(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return 'voice-channels-button';
    let { hasDivider: i, canHaveVoiceSummary: l } = (0, u.ie)(t, n, e);
    return 'section-footer-'
        .concat(e)
        .concat(i ? '-divider' : '')
        .concat(l ? '-voice-summary' : '');
}
let v = l.memo(function (e) {
    let { sectionIndex: t, guildChannels: n, guildChannelsVersion: h, voiceStates: p, guildId: f, selectedChannelId: _, selectedVoiceChannelId: v, optInEnabled: C } = e,
        { hasDivider: x, canHaveVoiceSummary: I } = l.useMemo(() => (0, u.ie)(n, C, t), [n, C, t, h]),
        Z = l.useMemo(() => (t === d.wZ ? null : n.getCategoryFromSection(t)), [n, t, h]),
        b = (0, o.DM)(f),
        S = (0, r.Wu)(
            [s.ZP],
            () => {
                if (null == Z || !Z.isCollapsed || !I) return [];
                let e = Z.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = s.ZP.isChannelOrParentOptedIn(f, n.id);
                    (!b || e) && t.push(n);
                }
                return t;
            },
            [Z, I, f, b]
        ),
        N = l.useMemo(
            () =>
                (0, c.c4)({
                    channels: S,
                    selectedChannelId: _,
                    selectedVoiceChannelId: v,
                    voiceStates: p
                }),
            [S, _, v, p]
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, i.jsx)(g, {
            guildChannels: n,
            guildChannelsVersion: h
        });
    let E = x ? (0, i.jsx)('div', { className: m.sectionDivider }) : null;
    return I && 0 !== N.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', {
                      className: m.voiceUserSummary,
                      children: (0, i.jsx)(a.Z, {
                          renderIcon: !0,
                          users: N,
                          max: 8,
                          showUserPopout: !0,
                          guildId: f
                      })
                  }),
                  E
              ]
          })
        : E;
});
