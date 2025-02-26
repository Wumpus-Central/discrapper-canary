n.d(t, { Z: () => B }), n(653041), n(47120), n(13667), n(390547), n(301563);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(512722),
    s = n.n(l),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    p = n(447543),
    m = n(434650),
    f = n(317381),
    h = n(778569),
    g = n(182906),
    _ = n(884338),
    b = n(100527),
    v = n(906732),
    y = n(835473),
    x = n(471445),
    E = n(111028),
    O = n(955415),
    j = n(747127),
    N = n(601964),
    C = n(592125),
    I = n(430824),
    S = n(496675),
    P = n(594174),
    T = n(626135),
    A = n(624138),
    w = n(358595),
    Z = n(981631),
    k = n(245335),
    R = n(388032),
    L = n(306405);
let D = (0, A.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    M = (0, A.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    W = (0, A.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function F(e) {
    let { members: t, membersOnline: n, isLarge: i, isStacked: a } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, r.jsxs)(
                    'div',
                    {
                        className: L.statusWrapper,
                        children: [
                            (0, r.jsx)('i', { className: L.statusOnline }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: L.count,
                                children: R.NW.format(R.t['LC+S+v'], { membersOnline: n })
                            })
                        ]
                    },
                    'onlineCount'
                )
            ),
        null != t &&
            l.push(
                (0, r.jsxs)(
                    'div',
                    {
                        className: L.statusWrapper,
                        children: [
                            (0, r.jsx)('i', { className: L.statusOffline }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: L.count,
                                children: R.NW.format(R.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, r.jsx)('div', {
            className: o()(L.statusCounts, {
                [L.large]: i,
                [L.stacked]: a
            }),
            children: l
        })
    );
}
function U(e) {
    let { channel: t, guild: n, isStacked: i, hasEnded: a } = e;
    if (null != t && null != n) {
        let e = (0, x.KS)(t, n);
        return (0, r.jsxs)('div', {
            className: o()(L.channel, {
                [L.stacked]: i,
                [L.ended]: a
            }),
            children: [
                null != e
                    ? (0, r.jsx)(e, {
                          className: L.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, r.jsx)(E.Z, {
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        children: R.NW.format(R.t['dc+LW1'], {
                            channelName: t.name,
                            serverName: n.name
                        })
                    })
                })
            ]
        });
    }
    return null != n
        ? (0, r.jsx)('div', {
              className: o()(L.channel, {
                  [L.stacked]: i,
                  [L.ended]: a
              }),
              children: (0, r.jsx)(E.Z, {
                  children: (0, r.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      children: R.NW.format(R.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function B(e) {
    var t, n, a;
    let l,
        d,
        { invite: x, getAcceptInviteContext: E } = e,
        { approximate_member_count: A, approximate_presence_count: B, target_type: G, target_application: H } = x;
    s()(G === k.Iq.EMBEDDED_APPLICATION && null != H, 'invalid application invite');
    let V = i.useRef(null),
        [z, K] = i.useState(!1),
        [Y, X] = i.useState(!1),
        [, q] = i.useState(!1),
        Q = i.useCallback(
            (e) => {
                e &&
                    q((e) => {
                        if (!e) {
                            var t;
                            T.default.track(Z.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                                application_id: H.id,
                                invite_inviter_id: null === (t = x.inviter) || void 0 === t ? void 0 : t.id
                            });
                        }
                        return !0;
                    });
            },
            [null === (t = x.inviter) || void 0 === t ? void 0 : t.id, H.id]
        ),
        J = (0, m.O)(Q),
        $ = (0, j.Z)(V, J);
    i.useEffect(() => {
        let e = new ResizeObserver(() =>
                (function () {
                    var e;
                    let t = null === (e = V.current) || void 0 === e ? void 0 : e.offsetWidth;
                    null != t && (K(t < W + M), X(t <= 2 * D));
                })()
            ),
            t = V.current;
        return (
            null != t && e.observe(t),
            () => {
                e.disconnect();
            }
        );
    }, [V, K, X]);
    let ee = (0, c.e7)([I.Z], () => (null != x.guild ? I.Z.getGuild(x.guild.id) : null), [x]),
        et = (0, y.Z)([H.id])[0],
        en = (0, c.e7)([f.ZP], () => {
            var e;
            return (null == x ? void 0 : x.channel) != null && (null === (e = f.ZP.getSelfEmbeddedActivityForChannel(x.channel.id)) || void 0 === e ? void 0 : e.applicationId) === H.id;
        }),
        er = (0, c.e7)([f.ZP], () => {
            var e;
            return ((null === (e = x.channel) || void 0 === e ? void 0 : e.id) != null ? f.ZP.getEmbeddedActivitiesForChannel(x.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return H.id === t;
            });
        }),
        ei = C.Z.getChannel(null === (n = x.channel) || void 0 === n ? void 0 : n.id),
        ea = (0, c.e7)([S.Z], () => null != ei && S.Z.can(Z.Plq.USE_EMBEDDED_ACTIVITIES, ei), [ei]),
        { analyticsLocations: eo } = (0, v.ZP)(b.Z.INVITE_EMBED),
        el = (0, h.Z)({
            applicationId: H.id,
            size: D,
            names: ['embedded_cover']
        }),
        es = (0, c.Wu)(
            [f.ZP],
            () =>
                null != ei
                    ? f.ZP.getEmbeddedActivitiesForChannel(ei.id)
                          .filter((e) => e.applicationId === H.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [ei, H.id]
        ),
        ec = (0, c.Wu)([P.default], () => es.map((e) => P.default.getUser(e)), [es]),
        ed = i.useCallback(() => {
            (0, p.r$)(x, 'accept', eo),
                p.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: x.code,
                    context: E('Invite Button Embed'),
                    analyticsLocations: eo
                });
        }, [x, eo, E]),
        eu = x.state === Z.r2o.ACCEPTING,
        ep = null != ee;
    if (null == ee) {
        if (null == x.guild) return (0, r.jsx)(w.Z, {});
        ee = new N.ZP(x.guild);
    }
    let em = (ep && !ea) || (ep && en);
    return (ep && en && (l = R.NW.string(R.t.wJNK8P)), ea || (l = R.NW.string(R.t.hHGrW1)), (d = en ? R.NW.string(R.t.KC26NT) : er || !ep ? R.NW.string(R.t.VJlc0d) : R.NW.string(R.t.I0v0Qk)), null == x.code || '' === x.code)
        ? null
        : (0, r.jsxs)('div', {
              className: L.container,
              ref: $,
              children: [
                  (0, r.jsx)('div', {
                      className: o()(L.imgContainer, {
                          [L.large]: z,
                          [L.stacked]: Y
                      }),
                      children: (0, r.jsx)(g.Z, {
                          imageBackground: el,
                          applicationName: null !== (a = null == et ? void 0 : et.name) && void 0 !== a ? a : '',
                          imageClassName: o()(L.img, {
                              [L.large]: z,
                              [L.stacked]: Y
                          }),
                          imageNotFoundClassName: o()(L.brokenImg, {
                              [L.large]: z,
                              [L.stacked]: Y
                          })
                      })
                  }),
                  (0, r.jsxs)(O.Z, {
                      className: o()(L.content, {
                          [L.large]: z,
                          [L.stacked]: Y
                      }),
                      children: [
                          (0, r.jsxs)('div', {
                              className: L.info,
                              children: [
                                  (0, r.jsx)(u.vwX, { children: ep ? R.NW.string(R.t['1ckx+P']) : R.NW.string(R.t.BoQUFR) }),
                                  (0, r.jsx)(u.X6q, {
                                      className: L.heading,
                                      variant: 'heading-xl/semibold',
                                      children: null == et ? void 0 : et.name
                                  }),
                                  (0, r.jsx)(U, {
                                      channel: ei,
                                      guild: ee,
                                      isStacked: Y,
                                      hasEnded: !er
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: o()(L.currentState, {
                                  [L.large]: z,
                                  [L.split]: !er && Y
                              }),
                              children: [
                                  !er && ep
                                      ? (0, r.jsxs)('div', {
                                            className: o()(L.endedNote, { [L.large]: z }),
                                            children: [
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: R.NW.string(R.t.JBnc7O)
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: R.NW.string(R.t.lEvDDQ)
                                                })
                                            ]
                                        })
                                      : null,
                                  ep
                                      ? null
                                      : (0, r.jsx)(F, {
                                            members: A,
                                            membersOnline: B,
                                            isLarge: z,
                                            isStacked: Y
                                        }),
                                  (0, r.jsxs)('div', {
                                      className: L.cta,
                                      children: [
                                          null != ee && er
                                              ? (0, r.jsx)('div', {
                                                    className: L.avatars,
                                                    children: (0, r.jsx)(_.Z, {
                                                        guildId: ee.id,
                                                        users: ec,
                                                        max: 4
                                                    })
                                                })
                                              : null,
                                          (0, r.jsx)(u.ua7, {
                                              text: l,
                                              children: (e) => {
                                                  var t,
                                                      n,
                                                      { onClick: i } = e,
                                                      a = (function (e, t) {
                                                          if (null == e) return {};
                                                          var n,
                                                              r,
                                                              i = (function (e, t) {
                                                                  if (null == e) return {};
                                                                  var n,
                                                                      r,
                                                                      i = {},
                                                                      a = Object.keys(e);
                                                                  for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                                  return i;
                                                              })(e, t);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var a = Object.getOwnPropertySymbols(e);
                                                              for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                                          }
                                                          return i;
                                                      })(e, ['onClick']);
                                                  return (0, r.jsx)(
                                                      u.zxk,
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
                                                      })(
                                                          {
                                                              className: L.actionButton,
                                                              onClick: () => {
                                                                  ed(), null == i || i();
                                                              },
                                                              wrapperClassName: L.tooltipButtonWrapper
                                                          },
                                                          a
                                                      )),
                                                      (n = n =
                                                          {
                                                              submitting: eu,
                                                              disabled: em,
                                                              color: u.Ttl.GREEN,
                                                              children: d
                                                          }),
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
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
