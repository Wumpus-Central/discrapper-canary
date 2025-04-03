n.d(t, { Z: () => Z }), n(47120), n(13667), n(390547), n(653041);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    c = n(481060),
    u = n(317381),
    d = n(884338),
    p = n(540059),
    h = n(565799),
    f = n(501655),
    g = n(199902),
    m = n(592125),
    b = n(594174),
    y = n(938475),
    _ = n(823379),
    v = n(709054),
    O = n(853856),
    j = n(981631),
    x = n(388032),
    C = n(714509),
    S = n(375613);
function P(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: C.row,
              children: [
                  (0, r.jsx)(e, {
                      className: C.activityIcon,
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
function I() {
    let e = (0, s.Wu)([O.Z, m.Z], () =>
            v.default
                .keys(O.Z.getFavoriteChannels())
                .map((e) => m.Z.getChannel(e))
                .filter(_.lm)
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === j.d4z.GUILD_VOICE),
        i = e.filter((e) => e.type === j.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        l = (0, s.Wu)(
            [y.ZP],
            () =>
                a().flatMap(n, (e) =>
                    y.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    })
                ),
            [n]
        ),
        o = (0, s.Wu)([h.Z], () =>
            a().flatMap(i, (e) =>
                h.Z.getMutableParticipants(e, f.pV.SPEAKER)
                    .filter((e) => e.type === f.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            )
        ),
        p = (0, s.e7)([h.Z], () => {
            let e = 0;
            for (let t of i) e += h.Z.getParticipantCount(t, f.pV.AUDIENCE);
            return e;
        }),
        x = (0, s.Wu)(
            [g.Z],
            () =>
                g.Z.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t]
        ),
        S = (0, s.Wu)(
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
        I = (0, s.Wu)([b.default], () => S.map((e) => b.default.getUser(e)), [S]),
        N = (0, s.Wu)([b.default], () => x.map((e) => b.default.getUser(e)), [x]),
        Z = P(
            c.gj8,
            l.filter((e) => !x.includes(e.id) && !S.includes(e.id))
        ),
        w =
            0 === o.length
                ? null
                : (0, r.jsxs)('div', {
                      className: C.row,
                      children: [
                          (0, r.jsx)(c.ewx, {
                              size: 'lg',
                              color: 'currentColor',
                              className: C.activityIcon
                          }),
                          (0, r.jsx)(d.Z, {
                              guildId: void 0,
                              users: o,
                              max: 3
                          }),
                          (0, r.jsxs)('div', {
                              className: C.stageListenerPill,
                              children: [
                                  (0, r.jsx)(c.VWR, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: C.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/medium',
                                      children: p
                                  })
                              ]
                          })
                      ]
                  }),
        E = P(
            c.hGI,
            N.filter((e) => null != e && !S.includes(e.id))
        ),
        T = P(c.nG3, I);
    return (0, r.jsxs)(r.Fragment, {
        children: [w, Z, E, T]
    });
}
function N() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(C.row, C.rowGuildName),
                children: (0, r.jsx)('span', {
                    className: l()(C.guildNameText, C.guildNameTextLimitedSize),
                    children: x.NW.string(x.t.wMWycn)
                })
            }),
            (0, r.jsx)(I, {})
        ]
    });
}
function Z(e) {
    let { 'aria-label': t = !1, onShow: n, children: i } = e,
        l = (0, p.Q3)('FavoritesTooltip');
    return (0, r.jsx)(c.ua7, {
        hideOnClick: !0,
        spacing: l ? 12 : 20,
        position: 'right',
        text: (0, r.jsx)(N, {}),
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
