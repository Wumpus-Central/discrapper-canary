n.d(t, { Z: () => Z }), n(388685), n(361932), n(187205), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(456100),
    p = n(317381),
    h = n(884338),
    f = n(104505),
    g = n(565799),
    m = n(501655),
    b = n(199902),
    _ = n(592125),
    y = n(594174),
    O = n(938475),
    v = n(823379),
    j = n(709054),
    C = n(853856),
    x = n(981631),
    E = n(388032),
    S = n(102647);
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
function P() {
    let e = (0, c.Wu)([C.Z, _.Z], () =>
            j.default
                .keys(C.Z.getFavoriteChannels())
                .map((e) => _.Z.getChannel(e))
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
        o = (0, c.Wu)([g.Z], () =>
            s().flatMap(i, (e) =>
                g.Z.getMutableParticipants(e, m.pV.SPEAKER)
                    .filter((e) => e.type === m.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        a = (0, c.e7)([g.Z], () => {
            let e = 0;
            for (let t of i) e += g.Z.getParticipantCount(t, m.pV.AUDIENCE);
            return e;
        }),
        f = (0, c.Wu)(
            [b.Z],
            () =>
                b.Z.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        E = (0, c.Wu)([p.ZP], () => {
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
        P = (0, c.Wu)([y.default], () => E.map((e) => y.default.getUser(e)), [E]),
        N = (0, c.Wu)([y.default], () => f.map((e) => y.default.getUser(e)), [f]),
        Z = I(
            u.gj8,
            l.filter((e) => !f.includes(e.id) && !E.includes(e.id)),
        ),
        w =
            0 === o.length
                ? null
                : (0, r.jsxs)("div", {
                      className: S.row,
                      children: [
                          (0, r.jsx)(u.ewx, {
                              size: "lg",
                              color: "currentColor",
                              className: S.activityIcon,
                          }),
                          (0, r.jsx)(h.ZP, {
                              guildId: void 0,
                              users: o,
                              max: 3,
                          }),
                          (0, r.jsxs)("div", {
                              className: S.stageListenerPill,
                              children: [
                                  (0, r.jsx)(u.VWR, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      className: S.stageListenerCount,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: a,
                                  }),
                              ],
                          }),
                      ],
                  }),
        T = I(
            u.hGI,
            N.filter((e) => null != e && !E.includes(e.id)),
        ),
        { enabled: A } = d.c.useExperiment({ location: "FavoritesTooltip" }, { autoTrackExposure: !0 }),
        R = I(A ? u.iWm : u.nG3, P);
    return (0, r.jsxs)(r.Fragment, {
        children: [w, Z, T, R],
    });
}
function N() {
    return (0, r.jsxs)("div", {
        className: S.dialogWrapper,
        children: [
            (0, r.jsx)("div", {
                className: o()(S.row, S.rowGuildName),
                children: (0, r.jsx)("span", {
                    className: o()(S.guildNameText, S.guildNameTextLimitedSize),
                    children: E.intl.string(E.t.wMWyci),
                }),
            }),
            (0, r.jsx)(P, {}),
        ],
    });
}
function Z(e) {
    let { "aria-label": t = !1, onShow: n, children: l } = e,
        [o, a] = i.useState(!1),
        s = i.useRef(null),
        { isHoveringOrFocusing: c } = (0, f.Z)(s),
        d = i.useCallback(() => {
            a(!1);
        }, []);
    return (
        i.useEffect(() => {
            a(c);
        }, [c]),
        (0, r.jsx)(u.yRy, {
            targetElementRef: s,
            position: "right",
            spacing: 12,
            shouldShow: o,
            onRequestClose: d,
            renderPopout: () => (0, r.jsx)(N, {}),
            "aria-label": t,
            onRequestOpen: n,
            children: () =>
                (0, r.jsx)("div", {
                    ref: s,
                    children: l,
                }),
        })
    );
}
