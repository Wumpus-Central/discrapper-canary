n.d(t, { Ay: () => I, fz: () => E, tt: () => C }), n(321073);
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
    g = n(32603),
    m = n(85808),
    p = n(823142);
n(83766);
var _ = n(728444),
    x = n(495401);
let f = l.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        s = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == s ? null : (0, i.jsx)(p.AV, { category: s });
});
function E(e) {
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
    if (!c || t === g.PU) return u;
    let h = n.getNamedCategoryFromSection(t);
    return null == h
        ? u
        : (0, m.Bo)({ category: h, selectedChannelId: l, selectedVoiceChannelId: s, voiceStates: i })
          ? (r && "cozy" === o ? 42 : 34) + u
          : u;
}
function C(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
    let { hasDivider: i, canHaveVoiceSummary: l } = (0, m.B3)(t, n, e);
    return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
}
let I = l.memo(function (e) {
    let {
            sectionIndex: t,
            guildChannels: n,
            guildChannelsVersion: s,
            voiceStates: p,
            guildId: E,
            selectedChannelId: C,
            selectedVoiceChannelId: I,
            optInEnabled: S,
        } = e,
        { hasDivider: b, canHaveVoiceSummary: N } = l.useMemo(() => (0, m.B3)(n, S, t), [n, S, t, s]),
        T = l.useMemo(() => (t === g.PU ? null : n.getCategoryFromSection(t)), [n, t, s]),
        j = (0, u.jN)(E),
        { enableWaveformIcon: v } = (0, d.b)(E, "ChannelListSectionFooter"),
        y = (0, r.yK)([h.Ay], () => {
            if (null == T || !T.isCollapsed || !N) return [];
            let e = T.getChannelRecords(),
                t = [];
            for (let n of e) {
                if (!n.isGuildVocal()) continue;
                let e = h.Ay.isChannelOrParentOptedIn(E, n.id);
                (!j || e) && t.push(n);
            }
            return t;
        }, [T, N, E, j]),
        R = l.useMemo(
            () => (0, A.fK)({ channels: y, selectedChannelId: C, selectedVoiceChannelId: I, voiceStates: p }),
            [y, C, I, p],
        );
    if (t === n.voiceChannelsSectionNumber) return (0, i.jsx)(f, { guildChannels: n, guildChannelsVersion: s });
    let O = b ? (0, i.jsx)("div", { className: x.ts }) : null;
    return N && 0 !== R.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: x.qz,
                      children: (0, i.jsx)(o.Ay, {
                          renderIcon: !0,
                          users: R,
                          max: 8,
                          showUserPopout: !0,
                          guildId: E,
                          renderLeadingIcon: v
                              ? (e) => (0, i.jsx)(c.A, { color: "currentColor", className: a()(e, _.Gj) })
                              : void 0,
                      }),
                  }),
                  O,
              ],
          })
        : O;
});
