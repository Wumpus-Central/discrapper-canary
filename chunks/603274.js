n.d(t, { Z: () => P }), n(388685), n(361932), n(187205), n(539854);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(392711),
    s = n.n(o),
    a = n(442837),
    c = n(481060),
    u = n(317381),
    d = n(884338),
    h = n(540059),
    p = n(565799),
    f = n(501655),
    g = n(199902),
    m = n(592125),
    b = n(594174),
    y = n(938475),
    _ = n(823379),
    v = n(709054),
    O = n(853856),
    C = n(981631),
    S = n(388032),
    j = n(714509),
    E = n(375613);
function x(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: j.row,
              children: [
                  (0, r.jsx)(e, {
                      className: j.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, r.jsx)(d.Z, {
                      guildId: void 0,
                      users: t,
                      max: 6
                  })
              ]
          });
}
function N() {
    let e = (0, a.Wu)([O.Z, m.Z], () =>
            v.default
                .keys(O.Z.getFavoriteChannels())
                .map((e) => m.Z.getChannel(e))
                .filter(_.lm)
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === C.d4z.GUILD_VOICE),
        i = e.filter((e) => e.type === C.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        l = (0, a.Wu)(
            [y.ZP],
            () =>
                s().flatMap(n, (e) =>
                    y.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    })
                ),
            [n]
        ),
        o = (0, a.Wu)([p.Z], () =>
            s().flatMap(i, (e) =>
                p.Z.getMutableParticipants(e, f.pV.SPEAKER)
                    .filter((e) => e.type === f.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            )
        ),
        h = (0, a.e7)([p.Z], () => {
            let e = 0;
            for (let t of i) e += p.Z.getParticipantCount(t, f.pV.AUDIENCE);
            return e;
        }),
        S = (0, a.Wu)(
            [g.Z],
            () =>
                g.Z.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t]
        ),
        E = (0, a.Wu)(
            [u.ZP],
            () => {
                let e = u.ZP.getEmbeddedActivitiesByChannel(),
                    n = [];
                for (let l of t) {
                    var r, i;
                    n.push(...(null != (i = null == (r = e.get(l)) ? void 0 : r.flatMap((e) => Array.from(e.userIds))) ? i : []));
                }
                return n;
            },
            [t]
        ),
        N = (0, a.Wu)([b.default], () => E.map((e) => b.default.getUser(e)), [E]),
        I = (0, a.Wu)([b.default], () => S.map((e) => b.default.getUser(e)), [S]),
        P = x(
            c.gj8,
            l.filter((e) => !S.includes(e.id) && !E.includes(e.id))
        ),
        w =
            0 === o.length
                ? null
                : (0, r.jsxs)('div', {
                      className: j.row,
                      children: [
                          (0, r.jsx)(c.ewx, {
                              size: 'lg',
                              color: 'currentColor',
                              className: j.activityIcon
                          }),
                          (0, r.jsx)(d.Z, {
                              guildId: void 0,
                              users: o,
                              max: 3
                          }),
                          (0, r.jsxs)('div', {
                              className: j.stageListenerPill,
                              children: [
                                  (0, r.jsx)(c.VWR, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: j.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/medium',
                                      children: h
                                  })
                              ]
                          })
                      ]
                  }),
        Z = x(
            c.hGI,
            I.filter((e) => null != e && !E.includes(e.id))
        ),
        T = x(c.nG3, N);
    return (0, r.jsxs)(r.Fragment, {
        children: [w, P, Z, T]
    });
}
function I() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(j.row, j.rowGuildName),
                children: (0, r.jsx)('span', {
                    className: l()(j.guildNameText, j.guildNameTextLimitedSize),
                    children: S.NW.string(S.t.wMWycn)
                })
            }),
            (0, r.jsx)(N, {})
        ]
    });
}
function P(e) {
    let { 'aria-label': t = !1, onShow: n, children: i } = e,
        l = (0, h.Q3)('FavoritesTooltip');
    return (0, r.jsx)(c.ua7, {
        hideOnClick: !0,
        spacing: l ? 12 : 20,
        position: 'right',
        text: (0, r.jsx)(I, {}),
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
