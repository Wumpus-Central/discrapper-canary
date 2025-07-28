(n.d(t, {
    ZP: () => _,
    dt: () => m,
    eo: () => b
}),
    n(539854),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(884338),
    a = n(398758),
    s = n(9156),
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
    let { sectionIndex: t, guildChannels: n, voiceStates: r, selectedChannelId: i, selectedVoiceChannelId: l, optInEnabled: o, visualRefreshEnabled: a, density: s } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: c, canHaveVoiceSummary: h } = (0, d.ie)(n, o, t),
        f = c ? (a ? 9 : p.QP) : 0;
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
          ? (a ? ('cozy' === s ? 42 : 34) : p.Vf) + f
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
let _ = i.memo(function (e) {
    let { sectionIndex: t, guildChannels: n, guildChannelsVersion: h, voiceStates: p, guildId: m, selectedChannelId: b, selectedVoiceChannelId: _, optInEnabled: O } = e,
        { hasDivider: y, canHaveVoiceSummary: C } = i.useMemo(() => (0, d.ie)(n, O, t), [n, O, t, h]),
        v = i.useMemo(() => (t === u.wZ ? null : n.getCategoryFromSection(t)), [n, t, h]),
        j = (0, a.DM)(m),
        E = (0, l.Wu)(
            [s.ZP],
            () => {
                if (null == v || !v.isCollapsed || !C) return [];
                let e = v.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = s.ZP.isChannelOrParentOptedIn(m, n.id);
                    (!j || e) && t.push(n);
                }
                return t;
            },
            [v, C, m, j]
        ),
        S = i.useMemo(
            () =>
                (0, c.c4)({
                    channels: E,
                    selectedChannelId: b,
                    selectedVoiceChannelId: _,
                    voiceStates: p
                }),
            [E, b, _, p]
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, r.jsx)(g, {
            guildChannels: n,
            guildChannelsVersion: h
        });
    let x = y ? (0, r.jsx)('div', { className: f.sectionDivider }) : null;
    return C && 0 !== S.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      className: f.voiceUserSummary,
                      children: (0, r.jsx)(o.ZP, {
                          renderIcon: !0,
                          users: S,
                          max: 8,
                          showUserPopout: !0,
                          guildId: m
                      })
                  }),
                  x
              ]
          })
        : x;
});
