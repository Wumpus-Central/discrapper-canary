n.d(t, {
    Ay: () => v,
    fz: () => O,
    tt: () => j,
}),
    n(321073),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(104171),
    c = n(186369),
    u = n(970812),
    d = n(395504),
    f = n(543465),
    p = n(147036),
    h = n(32603),
    b = n(85808),
    g = n(823142);
n(83766);
var m = n(728444),
    A = n(495401);
let y = l.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        i = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == i
        ? null
        : (0, r.jsx)(g.AV, {
              category: i,
          });
});

function O(e) {
    let {
        sectionIndex: t,
        guildChannels: n,
        voiceStates: r,
        selectedChannelId: l,
        selectedVoiceChannelId: i,
        optInEnabled: a,
        visualRefreshEnabled: s,
        density: o,
    } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: c, canHaveVoiceSummary: u } = (0, b.B3)(n, a, t),
        d = c ? (s ? 9 : 12) : 0;
    if (!u || t === h.PU) return d;
    let f = n.getNamedCategoryFromSection(t);
    return null == f
        ? d
        : (0, b.Bo)({
                category: f,
                selectedChannelId: l,
                selectedVoiceChannelId: i,
                voiceStates: r,
            })
          ? (s && "cozy" === o ? 42 : 34) + d
          : d;
}

function j(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
    let { hasDivider: r, canHaveVoiceSummary: l } = (0, b.B3)(t, n, e);
    return "section-footer-"
        .concat(e)
        .concat(r ? "-divider" : "")
        .concat(l ? "-voice-summary" : "");
}
let v = l.memo(function (e) {
    let {
            sectionIndex: t,
            guildChannels: n,
            guildChannelsVersion: i,
            voiceStates: g,
            guildId: O,
            selectedChannelId: j,
            selectedVoiceChannelId: v,
            optInEnabled: x,
        } = e,
        { hasDivider: E, canHaveVoiceSummary: _ } = l.useMemo(() => (0, b.B3)(n, x, t), [n, x, t, i]),
        C = l.useMemo(() => (t === h.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
        S = (0, d.jN)(O),
        { enableWaveformIcon: I } = (0, c.b)(O, "ChannelListSectionFooter"),
        N = (0, s.yK)([f.Ay], () => {
            if (null == C || !C.isCollapsed || !_) return [];
            let e = C.getChannelRecords(),
                t = [];
            for (let n of e) {
                if (!n.isGuildVocal()) continue;
                let e = f.Ay.isChannelOrParentOptedIn(O, n.id);
                (!S || e) && t.push(n);
            }
            return t;
        }, [C, _, O, S]),
        T = l.useMemo(
            () =>
                (0, p.fK)({
                    channels: N,
                    selectedChannelId: j,
                    selectedVoiceChannelId: v,
                    voiceStates: g,
                }),
            [N, j, v, g],
        );
    if (t === n.voiceChannelsSectionNumber)
        return (0, r.jsx)(y, {
            guildChannels: n,
            guildChannelsVersion: i,
        });
    let P = E
        ? (0, r.jsx)("div", {
              className: A.ts,
          })
        : null;
    return _ && 0 !== T.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: A.qz,
                      children: (0, r.jsx)(o.Ay, {
                          renderIcon: !0,
                          users: T,
                          max: 8,
                          showUserPopout: !0,
                          guildId: O,
                          renderLeadingIcon: I
                              ? (e) =>
                                    (0, r.jsx)(u.A, {
                                        color: "currentColor",
                                        className: a()(e, m.Gj),
                                    })
                              : void 0,
                      }),
                  }),
                  P,
              ],
          })
        : P;
});
