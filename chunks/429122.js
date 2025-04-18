n.d(t, {
    ZP: () => y,
    dt: () => m,
    eo: () => b
}),
    n(539854),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(884338),
    s = n(398758),
    a = n(9156),
    c = n(934415),
    u = n(540126),
    d = n(700026),
    h = n(301342),
    p = n(327530),
    f = n(789123);
let g = i.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        l = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == l ? null : (0, r.jsx)(h.Qo, { category: l });
});
function m(e) {
    let { sectionIndex: t, guildChannels: n, voiceStates: r, selectedChannelId: i, selectedVoiceChannelId: l, optInEnabled: o, visualRefreshEnabled: s, density: a } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: c, canHaveVoiceSummary: h } = (0, d.ie)(n, o, t),
        f = c ? (s ? 9 : p.QP) : 0;
    if (!h || t === u.wZ) return f;
    let g = n.getNamedCategoryFromSection(t);
    return null == g
        ? f
        : (0, d.V5)({
                category: g,
                selectedChannelId: i,
                selectedVoiceChannelId: l,
                voiceStates: r
            })
          ? (s ? ('cozy' === a ? 42 : 34) : p.Vf) + f
          : f;
}
function b(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return 'voice-channels-button';
    let { hasDivider: r, canHaveVoiceSummary: i } = (0, d.ie)(t, n, e);
    return 'section-footer-'
        .concat(e)
        .concat(r ? '-divider' : '')
        .concat(i ? '-voice-summary' : '');
}
let y = i.memo(function (e) {
    let { sectionIndex: t, guildChannels: n, guildChannelsVersion: h, voiceStates: p, guildId: m, selectedChannelId: b, selectedVoiceChannelId: y, optInEnabled: _ } = e,
        { hasDivider: O, canHaveVoiceSummary: v } = i.useMemo(() => (0, d.ie)(n, _, t), [n, _, t, h]),
        C = i.useMemo(() => (t === u.wZ ? null : n.getCategoryFromSection(t)), [n, t, h]),
        j = (0, s.DM)(m),
        S = (0, l.Wu)(
            [a.ZP],
            () => {
                if (null == C || !C.isCollapsed || !v) return [];
                let e = C.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = a.ZP.isChannelOrParentOptedIn(m, n.id);
                    (!j || e) && t.push(n);
                }
                return t;
            },
            [C, v, m, j]
        ),
        x = i.useMemo(
            () =>
                (0, c.c4)({
                    channels: S,
                    selectedChannelId: b,
                    selectedVoiceChannelId: y,
                    voiceStates: p
                }),
            [S, b, y, p]
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, r.jsx)(g, {
            guildChannels: n,
            guildChannelsVersion: h
        });
    let E = O ? (0, r.jsx)('div', { className: f.sectionDivider }) : null;
    return v && 0 !== x.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      className: f.voiceUserSummary,
                      children: (0, r.jsx)(o.Z, {
                          renderIcon: !0,
                          users: x,
                          max: 8,
                          showUserPopout: !0,
                          guildId: m
                      })
                  }),
                  E
              ]
          })
        : E;
});
