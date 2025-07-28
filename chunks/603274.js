(n.d(t, { Z: () => N }), n(388685), n(361932), n(187205), n(539854));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    c = n(481060),
    u = n(456100),
    d = n(317381),
    h = n(884338),
    p = n(565799),
    f = n(501655),
    g = n(199902),
    m = n(592125),
    b = n(594174),
    _ = n(938475),
    O = n(823379),
    y = n(709054),
    C = n(853856),
    v = n(981631),
    j = n(388032),
    E = n(714509),
    S = n(375613);
function x(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: E.row,
              children: [
                  (0, r.jsx)(e, {
                      className: E.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, r.jsx)(h.ZP, {
                      guildId: void 0,
                      users: t,
                      max: 6
                  })
              ]
          });
}
function I() {
    let e = (0, s.Wu)([C.Z, m.Z], () =>
            y.default
                .keys(C.Z.getFavoriteChannels())
                .map((e) => m.Z.getChannel(e))
                .filter(O.lm)
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === v.d4z.GUILD_VOICE),
        i = e.filter((e) => e.type === v.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        l = (0, s.Wu)(
            [_.ZP],
            () =>
                a().flatMap(n, (e) =>
                    _.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    })
                ),
            [n]
        ),
        o = (0, s.Wu)([p.Z], () =>
            a().flatMap(i, (e) =>
                p.Z.getMutableParticipants(e, f.pV.SPEAKER)
                    .filter((e) => e.type === f.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            )
        ),
        j = (0, s.e7)([p.Z], () => {
            let e = 0;
            for (let t of i) e += p.Z.getParticipantCount(t, f.pV.AUDIENCE);
            return e;
        }),
        S = (0, s.Wu)(
            [g.Z],
            () =>
                g.Z.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t]
        ),
        I = (0, s.Wu)(
            [d.ZP],
            () => {
                let e = d.ZP.getEmbeddedActivitiesByChannel(),
                    n = [];
                for (let l of t) {
                    var r, i;
                    n.push(...(null != (i = null == (r = e.get(l)) ? void 0 : r.flatMap((e) => Array.from(e.userIds))) ? i : []));
                }
                return n;
            },
            [t]
        ),
        P = (0, s.Wu)([b.default], () => I.map((e) => b.default.getUser(e)), [I]),
        N = (0, s.Wu)([b.default], () => S.map((e) => b.default.getUser(e)), [S]),
        w = x(
            c.gj8,
            l.filter((e) => !S.includes(e.id) && !I.includes(e.id))
        ),
        Z =
            0 === o.length
                ? null
                : (0, r.jsxs)('div', {
                      className: E.row,
                      children: [
                          (0, r.jsx)(c.ewx, {
                              size: 'lg',
                              color: 'currentColor',
                              className: E.activityIcon
                          }),
                          (0, r.jsx)(h.ZP, {
                              guildId: void 0,
                              users: o,
                              max: 3
                          }),
                          (0, r.jsxs)('div', {
                              className: E.stageListenerPill,
                              children: [
                                  (0, r.jsx)(c.VWR, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: E.stageListenerCount,
                                      color: 'text-default',
                                      variant: 'text-xs/medium',
                                      children: j
                                  })
                              ]
                          })
                      ]
                  }),
        T = x(
            c.hGI,
            N.filter((e) => null != e && !I.includes(e.id))
        ),
        { enabled: A } = u.c.useExperiment({ location: 'FavoritesTooltip' }, { autoTrackExposure: !0 }),
        R = x(A ? c.iWm : c.nG3, P);
    return (0, r.jsxs)(r.Fragment, {
        children: [Z, w, T, R]
    });
}
function P() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(E.row, E.rowGuildName),
                children: (0, r.jsx)('span', {
                    className: l()(E.guildNameText, E.guildNameTextLimitedSize),
                    children: j.intl.string(j.t.wMWycn)
                })
            }),
            (0, r.jsx)(I, {})
        ]
    });
}
function N(e) {
    let { 'aria-label': t = !1, onShow: n, children: i } = e;
    return (0, r.jsx)(c.ua7, {
        hideOnClick: !0,
        spacing: 12,
        position: 'right',
        text: (0, r.jsx)(P, {}),
        'aria-label': t,
        tooltipClassName: S.listItemTooltip,
        onTooltipShow: n,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                'div',
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
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
                t)
            );
        }
    });
}
