n.d(t, {
    dt: function () {
        return g;
    },
    eo: function () {
        return v;
    }
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
    u = n(540126),
    d = n(700026),
    h = n(301342),
    p = n(327530),
    f = n(607686);
let m = l.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        r = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == r ? null : (0, i.jsx)(h.Qo, { category: r });
});
function g(e) {
    let { sectionIndex: t, guildChannels: n, voiceStates: i, selectedChannelId: l, selectedVoiceChannelId: r, optInEnabled: a, visualRefreshEnabled: o, density: s } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: c, canHaveVoiceSummary: h } = (0, d.ie)(n, a, t),
        f = c ? (o ? 9 : p.QP) : 0;
    if (!h || t === u.wZ) return f;
    let m = n.getNamedCategoryFromSection(t);
    return null == m
        ? f
        : (0, d.V5)({
                category: m,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i
            })
          ? (o ? ('cozy' === s ? 42 : 34) : p.Vf) + f
          : f;
}
function v(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return 'voice-channels-button';
    let { hasDivider: i, canHaveVoiceSummary: l } = (0, d.ie)(t, n, e);
    return 'section-footer-'
        .concat(e)
        .concat(i ? '-divider' : '')
        .concat(l ? '-voice-summary' : '');
}
t.ZP = l.memo(function (e) {
    let { sectionIndex: t, guildChannels: n, guildChannelsVersion: h, voiceStates: p, guildId: g, selectedChannelId: v, selectedVoiceChannelId: C, optInEnabled: x } = e,
        { hasDivider: I, canHaveVoiceSummary: _ } = l.useMemo(() => (0, d.ie)(n, x, t), [n, x, t, h]),
        Z = l.useMemo(() => (t === u.wZ ? null : n.getCategoryFromSection(t)), [n, t, h]),
        b = (0, o.DM)(g),
        S = (0, r.Wu)(
            [s.ZP],
            () => {
                if (null == Z || !Z.isCollapsed || !_) return [];
                let e = Z.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = s.ZP.isChannelOrParentOptedIn(g, n.id);
                    (!b || e) && t.push(n);
                }
                return t;
            },
            [Z, _, g, b]
        ),
        N = l.useMemo(
            () =>
                (0, c.c4)({
                    channels: S,
                    selectedChannelId: v,
                    selectedVoiceChannelId: C,
                    voiceStates: p
                }),
            [S, v, C, p]
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, i.jsx)(m, {
            guildChannels: n,
            guildChannelsVersion: h
        });
    let E = I ? (0, i.jsx)('div', { className: f.sectionDivider }) : null;
    return _ && 0 !== N.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', {
                      className: f.voiceUserSummary,
                      children: (0, i.jsx)(a.Z, {
                          renderIcon: !0,
                          users: N,
                          max: 8,
                          showUserPopout: !0,
                          guildId: g
                      })
                  }),
                  E
              ]
          })
        : E;
});
