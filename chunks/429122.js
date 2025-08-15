n.d(t, {
    ZP: () => _,
    dt: () => m,
    eo: () => b,
}),
    n(539854),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(884338),
    a = n(398758),
    s = n(9156),
    c = n(934415),
    u = n(540126),
    d = n(700026),
    p = n(301342),
    f = n(327530),
    h = n(776677);
let g = i.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        l = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == l ? null : (0, r.jsx)(p.Qo, { category: l });
});
function m(e) {
    let {
        sectionIndex: t,
        guildChannels: n,
        voiceStates: r,
        selectedChannelId: i,
        selectedVoiceChannelId: l,
        optInEnabled: o,
        visualRefreshEnabled: a,
        density: s,
    } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: c, canHaveVoiceSummary: p } = (0, d.ie)(n, o, t),
        h = c ? (a ? 9 : f.QP) : 0;
    if (!p || t === u.wZ) return h;
    let g = n.getNamedCategoryFromSection(t);
    return null == g
        ? h
        : (0, d.V5)({
                category: g,
                selectedChannelId: i,
                selectedVoiceChannelId: l,
                voiceStates: r,
            })
          ? (a ? ("cozy" === s ? 42 : 34) : f.Vf) + h
          : h;
}
function b(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
    let { hasDivider: r, canHaveVoiceSummary: i } = (0, d.ie)(t, n, e);
    return "section-footer-"
        .concat(e)
        .concat(r ? "-divider" : "")
        .concat(i ? "-voice-summary" : "");
}
let _ = i.memo(function (e) {
    let {
            sectionIndex: t,
            guildChannels: n,
            guildChannelsVersion: p,
            voiceStates: f,
            guildId: m,
            selectedChannelId: b,
            selectedVoiceChannelId: _,
            optInEnabled: O,
        } = e,
        { hasDivider: y, canHaveVoiceSummary: v } = i.useMemo(() => (0, d.ie)(n, O, t), [n, O, t, p]),
        j = i.useMemo(() => (t === u.wZ ? null : n.getCategoryFromSection(t)), [n, t, p]),
        C = (0, a.DM)(m),
        E = (0, l.Wu)([s.ZP], () => {
            if (null == j || !j.isCollapsed || !v) return [];
            let e = j.getChannelRecords(),
                t = [];
            for (let n of e) {
                if (!n.isGuildVocal()) continue;
                let e = s.ZP.isChannelOrParentOptedIn(m, n.id);
                (!C || e) && t.push(n);
            }
            return t;
        }, [j, v, m, C]),
        x = i.useMemo(
            () =>
                (0, c.c4)({
                    channels: E,
                    selectedChannelId: b,
                    selectedVoiceChannelId: _,
                    voiceStates: f,
                }),
            [E, b, _, f],
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, r.jsx)(g, {
            guildChannels: n,
            guildChannelsVersion: p,
        });
    let S = y ? (0, r.jsx)("div", { className: h.sectionDivider }) : null;
    return v && 0 !== x.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: h.voiceUserSummary,
                      children: (0, r.jsx)(o.ZP, {
                          renderIcon: !0,
                          users: x,
                          max: 8,
                          showUserPopout: !0,
                          guildId: m,
                      }),
                  }),
                  S,
              ],
          })
        : S;
});
