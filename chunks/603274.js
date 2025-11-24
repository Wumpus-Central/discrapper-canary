n.d(t, { Z: () => P }), n(388685), n(361932), n(187205), n(539854);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    c = n(481060),
    u = n(317381),
    d = n(884338),
    f = n(565799),
    h = n(501655),
    p = n(199902),
    g = n(592125),
    m = n(594174),
    b = n(938475),
    _ = n(823379),
    y = n(709054),
    O = n(853856),
    v = n(981631),
    j = n(388032),
    x = n(132789),
    C = n(78480);
function E(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: x.row,
              children: [
                  (0, r.jsx)(e, {
                      className: x.activityIcon,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(d.ZP, {
                      guildId: void 0,
                      users: t,
                      max: 6,
                  }),
              ],
          });
}
function S() {
    let e = (0, s.Wu)([O.Z, g.Z], () =>
            y.default
                .keys(O.Z.getFavoriteChannels())
                .map((e) => g.Z.getChannel(e))
                .filter(_.lm),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === v.d4z.GUILD_VOICE),
        i = e.filter((e) => e.type === v.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        l = (0, s.Wu)(
            [b.ZP],
            () =>
                a().flatMap(n, (e) =>
                    b.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        o = (0, s.Wu)([f.Z], () =>
            a().flatMap(i, (e) =>
                f.Z.getMutableParticipants(e, h.pV.SPEAKER)
                    .filter((e) => e.type === h.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        j = (0, s.e7)([f.Z], () => {
            let e = 0;
            for (let t of i) e += f.Z.getParticipantCount(t, h.pV.AUDIENCE);
            return e;
        }),
        C = (0, s.Wu)(
            [p.Z],
            () =>
                p.Z.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        S = (0, s.Wu)([u.ZP], () => {
            let e = u.ZP.getEmbeddedActivitiesByChannel(),
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
        I = (0, s.Wu)([m.default], () => S.map((e) => m.default.getUser(e)), [S]),
        P = (0, s.Wu)([m.default], () => C.map((e) => m.default.getUser(e)), [C]),
        N = E(
            c.gj8,
            l.filter((e) => !C.includes(e.id) && !S.includes(e.id)),
        ),
        Z =
            0 === o.length
                ? null
                : (0, r.jsxs)("div", {
                      className: x.row,
                      children: [
                          (0, r.jsx)(c.ewx, {
                              size: "lg",
                              color: "currentColor",
                              className: x.activityIcon,
                          }),
                          (0, r.jsx)(d.ZP, {
                              guildId: void 0,
                              users: o,
                              max: 3,
                          }),
                          (0, r.jsxs)("div", {
                              className: x.stageListenerPill,
                              children: [
                                  (0, r.jsx)(c.VWR, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: x.stageListenerCount,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: j,
                                  }),
                              ],
                          }),
                      ],
                  }),
        w = E(
            c.hGI,
            P.filter((e) => null != e && !S.includes(e.id)),
        ),
        T = E(c.nG3, I);
    return (0, r.jsxs)(r.Fragment, {
        children: [Z, N, w, T],
    });
}
function I() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(x.row, x.rowGuildName),
                children: (0, r.jsx)("span", {
                    className: l()(x.guildNameText, x.guildNameTextLimitedSize),
                    children: j.intl.string(j.t.wMWyci),
                }),
            }),
            (0, r.jsx)(S, {}),
        ],
    });
}
function P(e) {
    let { "aria-label": t = !1, onShow: n, children: i } = e;
    return (0, r.jsx)(c.aML, {
        "data-migration-pending": !0,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        text: (0, r.jsx)(I, {}),
        "aria-label": t,
        tooltipClassName: C.listItemTooltip,
        onTooltipShow: n,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                "div",
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n = { children: i }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        },
    });
}
