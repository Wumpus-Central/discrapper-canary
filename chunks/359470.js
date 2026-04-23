n.d(t, { Ay: () => C, fz: () => x, tt: () => I }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(104171),
    d = n(186369),
    c = n(970812),
    u = n(395504),
    h = n(543465),
    A = n(147036),
    _ = n(32603),
    m = n(85808),
    g = n(823142);
n(83766);
var p = n(907305),
    f = n(121880);
let E = l.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        s = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == s ? null : (0, i.jsx)(g.AV, { category: s });
});
function x(e) {
    let {
        sectionIndex: t,
        guildChannels: n,
        voiceStates: i,
        selectedChannelId: l,
        selectedVoiceChannelId: s,
        optInEnabled: a,
        visualRefreshEnabled: r,
        density: o,
    } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: d, canHaveVoiceSummary: c } = (0, m.B3)(n, a, t),
        u = d ? (r ? 9 : 12) : 0;
    if (!c || t === _.PU) return u;
    let h = n.getNamedCategoryFromSection(t);
    return null == h
        ? u
        : (0, m.Bo)({ category: h, selectedChannelId: l, selectedVoiceChannelId: s, voiceStates: i })
          ? (r && "cozy" === o ? 42 : 34) + u
          : u;
}
function I(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
    let { hasDivider: i, canHaveVoiceSummary: l } = (0, m.B3)(t, n, e);
    return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
}
let C = l.memo(function (e) {
    let {
            sectionIndex: t,
            guildChannels: n,
            guildChannelsVersion: s,
            voiceStates: g,
            guildId: x,
            selectedChannelId: I,
            selectedVoiceChannelId: C,
            optInEnabled: b,
        } = e,
        { hasDivider: N, canHaveVoiceSummary: S } = l.useMemo(() => (0, m.B3)(n, b, t), [n, b, t, s]),
        v = l.useMemo(() => (t === _.PU ? null : n.getCategoryFromSection(t)), [n, t, s]),
        T = (0, u.jN)(x),
        { enableWaveformIcon: y } = (0, d.b)(x, "ChannelListSectionFooter"),
        j = (0, r.yK)([h.Ay], () => {
            if (null == v || !v.isCollapsed || !S) return [];
            let e = v.getChannelRecords(),
                t = [];
            for (let n of e) {
                if (!n.isGuildVocal()) continue;
                let e = h.Ay.isChannelOrParentOptedIn(x, n.id);
                (!T || e) && t.push(n);
            }
            return t;
        }, [v, S, x, T]),
        R = l.useMemo(
            () => (0, A.fK)({ channels: j, selectedChannelId: I, selectedVoiceChannelId: C, voiceStates: g }),
            [j, I, C, g],
        );
    if (t === n.voiceChannelsSectionNumber) return (0, i.jsx)(E, { guildChannels: n, guildChannelsVersion: s });
    let L = N ? (0, i.jsx)("div", { className: f.ts }) : null;
    return S && 0 !== R.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: f.qz,
                      children: (0, i.jsx)(o.Ay, {
                          renderIcon: !0,
                          users: R,
                          max: 8,
                          showUserPopout: !0,
                          guildId: x,
                          renderLeadingIcon: y
                              ? (e) => (0, i.jsx)(c.A, { color: "currentColor", className: a()(e, p.Gj) })
                              : void 0,
                      }),
                  }),
                  L,
              ],
          })
        : L;
});
