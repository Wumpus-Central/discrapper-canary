n.d(t, { Z: () => N }), n(388685), n(361932), n(187205), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(681715),
    d = n(481060),
    f = n(317381),
    h = n(884338),
    p = n(565799),
    g = n(501655),
    b = n(199902),
    m = n(592125),
    y = n(594174),
    O = n(938475),
    v = n(823379),
    j = n(709054),
    C = n(853856),
    x = n(981631),
    E = n(388032),
    S = n(998081);
function I(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: S.row,
              children: [
                  (0, r.jsx)(e, {
                      className: S.activityIcon,
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
function _() {
    let e = (0, c.Wu)([C.Z, m.Z], () =>
            j.default
                .keys(C.Z.getFavoriteChannels())
                .map((e) => m.Z.getChannel(e))
                .filter(v.lm),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === x.d4z.GUILD_VOICE),
        i = e.filter((e) => e.type === x.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        l = (0, c.Wu)(
            [O.ZP],
            () =>
                s().flatMap(n, (e) =>
                    O.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        a = (0, c.Wu)([p.Z], () =>
            s().flatMap(i, (e) =>
                p.Z.getMutableParticipants(e, g.pV.SPEAKER)
                    .filter((e) => e.type === g.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        o = (0, c.e7)([p.Z], () => {
            let e = 0;
            for (let t of i) e += p.Z.getParticipantCount(t, g.pV.AUDIENCE);
            return e;
        }),
        u = (0, c.Wu)(
            [b.Z],
            () =>
                b.Z.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        E = (0, c.Wu)([f.ZP], () => {
            let e = f.ZP.getEmbeddedActivitiesByChannel(),
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
        _ = (0, c.Wu)([y.default], () => E.map((e) => y.default.getUser(e)), [E]),
        P = (0, c.Wu)([y.default], () => u.map((e) => y.default.getUser(e)), [u]),
        N = I(
            d.gj8,
            l.filter((e) => !u.includes(e.id) && !E.includes(e.id)),
        ),
        Z =
            0 === a.length
                ? null
                : (0, r.jsxs)("div", {
                      className: S.row,
                      children: [
                          (0, r.jsx)(d.ewx, {
                              size: "lg",
                              color: "currentColor",
                              className: S.activityIcon,
                          }),
                          (0, r.jsx)(h.ZP, {
                              guildId: void 0,
                              users: a,
                              max: 3,
                          }),
                          (0, r.jsxs)("div", {
                              className: S.stageListenerPill,
                              children: [
                                  (0, r.jsx)(d.VWR, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      className: S.stageListenerCount,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: o,
                                  }),
                              ],
                          }),
                      ],
                  }),
        w = I(
            d.hGI,
            P.filter((e) => null != e && !E.includes(e.id)),
        ),
        T = I(d.nG3, _);
    return (0, r.jsxs)(r.Fragment, {
        children: [Z, N, w, T],
    });
}
function P() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: a()(S.row, S.rowGuildName),
                children: (0, r.jsx)("span", {
                    className: a()(S.guildNameText, S.guildNameTextLimitedSize),
                    children: E.intl.string(E.t.wMWyci),
                }),
            }),
            (0, r.jsx)(_, {}),
        ],
    });
}
function N(e) {
    let { "aria-label": t = !1, onShow: n, children: l } = e,
        a = i.useMemo(
            () =>
                (0, r.jsx)("div", {
                    className: S.guildTooltipWrapper,
                    children: (0, r.jsx)(P, {}),
                }),
            [],
        );
    return (0, r.jsx)(u.u, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        onTooltipShow: n,
        asContainer: !0,
        children: l,
    });
}
