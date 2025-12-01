n.d(t, {
    ZP: () => _,
    dt: () => m,
    eo: () => b,
}),
    n(539854),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(884338),
    a = n(398758),
    s = n(9156),
    c = n(934415),
    u = n(540126),
    d = n(700026),
    f = n(301342),
    h = n(327530),
    p = n(776677);
let g = i.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        l = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == l ? null : (0, r.jsx)(f.Qo, { category: l });
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
    let { hasDivider: c, canHaveVoiceSummary: f } = (0, d.ie)(n, o, t),
        p = c ? (a ? 9 : h.QP) : 0;
    if (!f || t === u.wZ) return p;
    let g = n.getNamedCategoryFromSection(t);
    return null == g
        ? p
        : (0, d.V5)({
                category: g,
                selectedChannelId: i,
                selectedVoiceChannelId: l,
                voiceStates: r,
            })
          ? (a ? ("cozy" === s ? 42 : 34) : h.Vf) + p
          : p;
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
            guildChannelsVersion: f,
            voiceStates: h,
            guildId: m,
            selectedChannelId: b,
            selectedVoiceChannelId: _,
            optInEnabled: y,
        } = e,
        { hasDivider: O, canHaveVoiceSummary: v } = i.useMemo(() => (0, d.ie)(n, y, t), [n, y, t, f]),
        j = i.useMemo(() => (t === u.wZ ? null : n.getCategoryFromSection(t)), [n, t, f]),
        x = (0, a.DM)(m),
        C = (0, l.Wu)([s.ZP], () => {
            if (null == j || !j.isCollapsed || !v) return [];
            let e = j.getChannelRecords(),
                t = [];
            for (let n of e) {
                if (!n.isGuildVocal()) continue;
                let e = s.ZP.isChannelOrParentOptedIn(m, n.id);
                (!x || e) && t.push(n);
            }
            return t;
        }, [j, v, m, x]),
        E = i.useMemo(
            () =>
                (0, c.c4)({
                    channels: C,
                    selectedChannelId: b,
                    selectedVoiceChannelId: _,
                    voiceStates: h,
                }),
            [C, b, _, h],
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, r.jsx)(g, {
            guildChannels: n,
            guildChannelsVersion: f,
        });
    let S = O ? (0, r.jsx)("div", { className: p.sectionDivider }) : null;
    return v && 0 !== E.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: p.voiceUserSummary,
                      children: (0, r.jsx)(o.ZP, {
                          renderIcon: !0,
                          users: E,
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
