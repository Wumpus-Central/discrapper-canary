n.d(t, {
    ZP: () => y,
    dt: () => b,
    eo: () => m,
}),
    n(539854),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(884338),
    o = n(398758),
    s = n(9156),
    c = n(934415),
    u = n(540126),
    d = n(700026),
    f = n(301342),
    h = n(327530),
    p = n(135445);
let g = i.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        l = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == l ? null : (0, r.jsx)(f.Qo, { category: l });
});
function b(e) {
    let {
        sectionIndex: t,
        guildChannels: n,
        voiceStates: r,
        selectedChannelId: i,
        selectedVoiceChannelId: l,
        optInEnabled: a,
        visualRefreshEnabled: o,
        density: s,
    } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: c, canHaveVoiceSummary: f } = (0, d.ie)(n, a, t),
        p = c ? (o ? 9 : h.QP) : 0;
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
          ? (o ? ("cozy" === s ? 42 : 34) : h.Vf) + p
          : p;
}
function m(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
    let { hasDivider: r, canHaveVoiceSummary: i } = (0, d.ie)(t, n, e);
    return "section-footer-"
        .concat(e)
        .concat(r ? "-divider" : "")
        .concat(i ? "-voice-summary" : "");
}
let y = i.memo(function (e) {
    let {
            sectionIndex: t,
            guildChannels: n,
            guildChannelsVersion: f,
            voiceStates: h,
            guildId: b,
            selectedChannelId: m,
            selectedVoiceChannelId: y,
            optInEnabled: O,
        } = e,
        { hasDivider: v, canHaveVoiceSummary: j } = i.useMemo(() => (0, d.ie)(n, O, t), [n, O, t, f]),
        C = i.useMemo(() => (t === u.wZ ? null : n.getCategoryFromSection(t)), [n, t, f]),
        x = (0, o.DM)(b),
        E = (0, l.Wu)([s.ZP], () => {
            if (null == C || !C.isCollapsed || !j) return [];
            let e = C.getChannelRecords(),
                t = [];
            for (let n of e) {
                if (!n.isGuildVocal()) continue;
                let e = s.ZP.isChannelOrParentOptedIn(b, n.id);
                (!x || e) && t.push(n);
            }
            return t;
        }, [C, j, b, x]),
        S = i.useMemo(
            () =>
                (0, c.c4)({
                    channels: E,
                    selectedChannelId: m,
                    selectedVoiceChannelId: y,
                    voiceStates: h,
                }),
            [E, m, y, h],
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, r.jsx)(g, {
            guildChannels: n,
            guildChannelsVersion: f,
        });
    let I = v ? (0, r.jsx)("div", { className: p.sectionDivider }) : null;
    return j && 0 !== S.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: p.voiceUserSummary,
                      children: (0, r.jsx)(a.ZP, {
                          renderIcon: !0,
                          users: S,
                          max: 8,
                          showUserPopout: !0,
                          guildId: b,
                      }),
                  }),
                  I,
              ],
          })
        : I;
});
