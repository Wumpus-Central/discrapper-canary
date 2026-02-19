"use strict";
n.d(t, { Ay: () => I, fz: () => C, tt: () => E }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(104171),
    c = n(186369),
    d = n(970812),
    u = n(395504),
    h = n(543465),
    A = n(147036),
    p = n(32603),
    g = n(85808),
    m = n(823142);
n(83766);
var _ = n(728444),
    f = n(495401);
let x = s.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        l = s.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == l ? null : (0, i.jsx)(m.AV, { category: l });
});
function C(e) {
    let {
        sectionIndex: t,
        guildChannels: n,
        voiceStates: i,
        selectedChannelId: s,
        selectedVoiceChannelId: l,
        optInEnabled: r,
        visualRefreshEnabled: a,
        density: o,
    } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: c, canHaveVoiceSummary: d } = (0, g.B3)(n, r, t),
        u = c ? (a ? 9 : 12) : 0;
    if (!d || t === p.PU) return u;
    let h = n.getNamedCategoryFromSection(t);
    return null == h
        ? u
        : (0, g.Bo)({ category: h, selectedChannelId: s, selectedVoiceChannelId: l, voiceStates: i })
          ? (a && "cozy" === o ? 42 : 34) + u
          : u;
}
function E(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
    let { hasDivider: i, canHaveVoiceSummary: s } = (0, g.B3)(t, n, e);
    return `section-footer-${e}${i ? "-divider" : ""}${s ? "-voice-summary" : ""}`;
}
let I = s.memo(function (e) {
    let {
            sectionIndex: t,
            guildChannels: n,
            guildChannelsVersion: l,
            voiceStates: m,
            guildId: C,
            selectedChannelId: E,
            selectedVoiceChannelId: I,
            optInEnabled: b,
        } = e,
        { hasDivider: N, canHaveVoiceSummary: S } = s.useMemo(() => (0, g.B3)(n, b, t), [n, b, t, l]),
        T = s.useMemo(() => (t === p.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
        v = (0, u.jN)(C),
        { enableWaveformIcon: y } = (0, c.b)(C, "ChannelListSectionFooter"),
        j = (0, a.yK)([h.Ay], () => {
            if (null == T || !T.isCollapsed || !S) return [];
            let e = T.getChannelRecords(),
                t = [];
            for (let n of e) {
                if (!n.isGuildVocal()) continue;
                let e = h.Ay.isChannelOrParentOptedIn(C, n.id);
                (!v || e) && t.push(n);
            }
            return t;
        }, [T, S, C, v]),
        R = s.useMemo(
            () => (0, A.fK)({ channels: j, selectedChannelId: E, selectedVoiceChannelId: I, voiceStates: m }),
            [j, E, I, m],
        );
    if (t === n.voiceChannelsSectionNumber) return (0, i.jsx)(x, { guildChannels: n, guildChannelsVersion: l });
    let O = N ? (0, i.jsx)("div", { className: f.ts }) : null;
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
                          guildId: C,
                          renderLeadingIcon: y
                              ? (e) => (0, i.jsx)(d.A, { color: "currentColor", className: r()(e, _.Gj) })
                              : void 0,
                      }),
                  }),
                  O,
              ],
          })
        : O;
});
