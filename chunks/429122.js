n.d(t, {
    ZP: () => x,
    dt: () => j,
    eo: () => C,
}),
    n(539854),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(884338),
    c = n(526139),
    u = n(851910),
    d = n(398758),
    f = n(9156),
    h = n(934415),
    p = n(540126),
    g = n(700026),
    b = n(301342),
    m = n(327530),
    y = n(642915),
    O = n(135445);
let v = i.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        l = i.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == l ? null : (0, r.jsx)(b.Qo, { category: l });
});
function j(e) {
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
    let { hasDivider: c, canHaveVoiceSummary: u } = (0, g.ie)(n, a, t),
        d = c ? (o ? 9 : m.QP) : 0;
    if (!u || t === p.wZ) return d;
    let f = n.getNamedCategoryFromSection(t);
    return null == f
        ? d
        : (0, g.V5)({
                category: f,
                selectedChannelId: i,
                selectedVoiceChannelId: l,
                voiceStates: r,
            })
          ? (o ? ("cozy" === s ? 42 : 34) : m.Vf) + d
          : d;
}
function C(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
    let { hasDivider: r, canHaveVoiceSummary: i } = (0, g.ie)(t, n, e);
    return "section-footer-"
        .concat(e)
        .concat(r ? "-divider" : "")
        .concat(i ? "-voice-summary" : "");
}
let x = i.memo(function (e) {
    let {
            sectionIndex: t,
            guildChannels: n,
            guildChannelsVersion: l,
            voiceStates: b,
            guildId: m,
            selectedChannelId: j,
            selectedVoiceChannelId: C,
            optInEnabled: x,
        } = e,
        { hasDivider: E, canHaveVoiceSummary: S } = i.useMemo(() => (0, g.ie)(n, x, t), [n, x, t, l]),
        I = i.useMemo(() => (t === p.wZ ? null : n.getCategoryFromSection(t)), [n, t, l]),
        _ = (0, d.DM)(m),
        { enableWaveformIcon: P } = (0, c.M)(m, "ChannelListSectionFooter"),
        N = (0, o.Wu)([f.ZP], () => {
            if (null == I || !I.isCollapsed || !S) return [];
            let e = I.getChannelRecords(),
                t = [];
            for (let n of e) {
                if (!n.isGuildVocal()) continue;
                let e = f.ZP.isChannelOrParentOptedIn(m, n.id);
                (!_ || e) && t.push(n);
            }
            return t;
        }, [I, S, m, _]),
        Z = i.useMemo(
            () =>
                (0, h.c4)({
                    channels: N,
                    selectedChannelId: j,
                    selectedVoiceChannelId: C,
                    voiceStates: b,
                }),
            [N, j, C, b],
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, r.jsx)(v, {
            guildChannels: n,
            guildChannelsVersion: l,
        });
    let w = E ? (0, r.jsx)("div", { className: O.sectionDivider }) : null;
    return S && 0 !== Z.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: O.voiceUserSummary,
                      children: (0, r.jsx)(s.ZP, {
                          renderIcon: !0,
                          users: Z,
                          max: 8,
                          showUserPopout: !0,
                          guildId: m,
                          renderLeadingIcon: P
                              ? (e) =>
                                    (0, r.jsx)(u.Z, {
                                        color: "currentColor",
                                        className: a()(e, y.iconLive),
                                    })
                              : void 0,
                      }),
                  }),
                  w,
              ],
          })
        : w;
});
