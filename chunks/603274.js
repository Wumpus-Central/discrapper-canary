n.d(t, { Z: () => w }), n(388685), n(361932), n(187205), n(539854);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(392711),
    s = n.n(o),
    a = n(442837),
    c = n(481060),
    u = n(456100),
    d = n(317381),
    h = n(884338),
    p = n(540059),
    f = n(565799),
    g = n(501655),
    m = n(199902),
    b = n(592125),
    y = n(594174),
    _ = n(938475),
    O = n(823379),
    v = n(709054),
    C = n(853856),
    j = n(981631),
    S = n(388032),
    x = n(714509),
    E = n(375613);
function I(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: x.row,
              children: [
                  (0, r.jsx)(e, {
                      className: x.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, r.jsx)(h.Z, {
                      guildId: void 0,
                      users: t,
                      max: 6
                  })
              ]
          });
}
function N() {
    let e = (0, a.Wu)([C.Z, b.Z], () =>
            v.default
                .keys(C.Z.getFavoriteChannels())
                .map((e) => b.Z.getChannel(e))
                .filter(O.lm)
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === j.d4z.GUILD_VOICE),
        i = e.filter((e) => e.type === j.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        l = (0, a.Wu)(
            [_.ZP],
            () =>
                s().flatMap(n, (e) =>
                    _.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    })
                ),
            [n]
        ),
        o = (0, a.Wu)([f.Z], () =>
            s().flatMap(i, (e) =>
                f.Z.getMutableParticipants(e, g.pV.SPEAKER)
                    .filter((e) => e.type === g.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            )
        ),
        p = (0, a.e7)([f.Z], () => {
            let e = 0;
            for (let t of i) e += f.Z.getParticipantCount(t, g.pV.AUDIENCE);
            return e;
        }),
        S = (0, a.Wu)(
            [m.Z],
            () =>
                m.Z.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t]
        ),
        E = (0, a.Wu)(
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
        N = (0, a.Wu)([y.default], () => E.map((e) => y.default.getUser(e)), [E]),
        P = (0, a.Wu)([y.default], () => S.map((e) => y.default.getUser(e)), [S]),
        w = I(
            c.gj8,
            l.filter((e) => !S.includes(e.id) && !E.includes(e.id))
        ),
        Z =
            0 === o.length
                ? null
                : (0, r.jsxs)('div', {
                      className: x.row,
                      children: [
                          (0, r.jsx)(c.ewx, {
                              size: 'lg',
                              color: 'currentColor',
                              className: x.activityIcon
                          }),
                          (0, r.jsx)(h.Z, {
                              guildId: void 0,
                              users: o,
                              max: 3
                          }),
                          (0, r.jsxs)('div', {
                              className: x.stageListenerPill,
                              children: [
                                  (0, r.jsx)(c.VWR, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: x.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/medium',
                                      children: p
                                  })
                              ]
                          })
                      ]
                  }),
        T = I(
            c.hGI,
            P.filter((e) => null != e && !E.includes(e.id))
        ),
        { enabled: A } = u.c.useExperiment({ location: 'FavoritesTooltip' }, { autoTrackExposure: !0 }),
        R = I(A ? c.iWm : c.nG3, N);
    return (0, r.jsxs)(r.Fragment, {
        children: [Z, w, T, R]
    });
}
function P() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(x.row, x.rowGuildName),
                children: (0, r.jsx)('span', {
                    className: l()(x.guildNameText, x.guildNameTextLimitedSize),
                    children: S.NW.string(S.t.wMWycn)
                })
            }),
            (0, r.jsx)(N, {})
        ]
    });
}
function w(e) {
    let { 'aria-label': t = !1, onShow: n, children: i } = e,
        l = (0, p.Q3)('FavoritesTooltip');
    return (0, r.jsx)(c.ua7, {
        hideOnClick: !0,
        spacing: l ? 12 : 20,
        position: 'right',
        text: (0, r.jsx)(P, {}),
        'aria-label': t,
        tooltipClassName: E.listItemTooltip,
        onTooltipShow: n,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                'div',
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
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
                t)
            );
        }
    });
}
