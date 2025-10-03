n.d(t, { Z: () => N }), n(388685), n(361932), n(187205), n(539854);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(456100),
    p = n(317381),
    h = n(884338),
    f = n(565799),
    g = n(501655),
    m = n(199902),
    b = n(592125),
    _ = n(594174),
    y = n(938475),
    O = n(823379),
    v = n(709054),
    j = n(853856),
    x = n(981631),
    C = n(388032),
    E = n(132789);
function S(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: E.row,
              children: [
                  (0, r.jsx)(e, {
                      className: E.activityIcon,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(h.ZP, {
                      guildId: void 0,
                      users: t,
                      max: 6,
                  }),
              ],
          });
}
function I() {
    let e = (0, s.Wu)([j.Z, b.Z], () =>
            v.default
                .keys(j.Z.getFavoriteChannels())
                .map((e) => b.Z.getChannel(e))
                .filter(O.lm),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === x.d4z.GUILD_VOICE),
        i = e.filter((e) => e.type === x.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        l = (0, s.Wu)(
            [y.ZP],
            () =>
                a().flatMap(n, (e) =>
                    y.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        o = (0, s.Wu)([f.Z], () =>
            a().flatMap(i, (e) =>
                f.Z.getMutableParticipants(e, g.pV.SPEAKER)
                    .filter((e) => e.type === g.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        c = (0, s.e7)([f.Z], () => {
            let e = 0;
            for (let t of i) e += f.Z.getParticipantCount(t, g.pV.AUDIENCE);
            return e;
        }),
        C = (0, s.Wu)(
            [m.Z],
            () =>
                m.Z.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        I = (0, s.Wu)([p.ZP], () => {
            let e = p.ZP.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let l of t) {
                var r, i;
                n.push(
                    ...(null != (i = null == (r = e.get(l)) ? void 0 : r.flatMap((e) => Array.from(e.userIds)))
                        ? i
                        : []),
                );
            }
            return n;
        }, [t]),
        P = (0, s.Wu)([_.default], () => I.map((e) => _.default.getUser(e)), [I]),
        N = (0, s.Wu)([_.default], () => C.map((e) => _.default.getUser(e)), [C]),
        Z = S(
            u.gj8,
            l.filter((e) => !C.includes(e.id) && !I.includes(e.id)),
        ),
        w =
            0 === o.length
                ? null
                : (0, r.jsxs)("div", {
                      className: E.row,
                      children: [
                          (0, r.jsx)(u.ewx, {
                              size: "lg",
                              color: "currentColor",
                              className: E.activityIcon,
                          }),
                          (0, r.jsx)(h.ZP, {
                              guildId: void 0,
                              users: o,
                              max: 3,
                          }),
                          (0, r.jsxs)("div", {
                              className: E.stageListenerPill,
                              children: [
                                  (0, r.jsx)(u.VWR, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      className: E.stageListenerCount,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: c,
                                  }),
                              ],
                          }),
                      ],
                  }),
        T = S(
            u.hGI,
            N.filter((e) => null != e && !I.includes(e.id)),
        ),
        { enabled: A } = d.c.useExperiment({ location: "FavoritesTooltip" }, { autoTrackExposure: !0 }),
        R = S(A ? u.iWm : u.nG3, P);
    return (0, r.jsxs)(r.Fragment, {
        children: [w, Z, T, R],
    });
}
function P() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(E.row, E.rowGuildName),
                children: (0, r.jsx)("span", {
                    className: l()(E.guildNameText, E.guildNameTextLimitedSize),
                    children: C.intl.string(C.t.wMWycn),
                }),
            }),
            (0, r.jsx)(I, {}),
        ],
    });
}
function N(e) {
    let { "aria-label": t = !1, onShow: n, children: i } = e;
    return (0, r.jsx)(c.u, {
        spacing: 12,
        position: "right",
        __unsupportedReactNodeAsText: (0, r.jsx)(P, {}),
        "aria-label": t,
        onTooltipShow: n,
        children: (0, r.jsx)("div", { children: i }),
    });
}
