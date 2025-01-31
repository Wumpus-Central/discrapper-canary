n.d(t, { Z: () => G }), n(653041), n(47120), n(390547);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    m = n(447543),
    h = n(434650),
    _ = n(317381),
    p = n(778569),
    g = n(182906),
    f = n(884338),
    x = n(100527),
    E = n(906732),
    C = n(835473),
    v = n(471445),
    I = n(111028),
    N = n(955415),
    S = n(747127),
    T = n(601964),
    b = n(592125),
    A = n(430824),
    j = n(496675),
    y = n(594174),
    Z = n(626135),
    R = n(624138),
    L = n(358595),
    P = n(981631),
    k = n(245335),
    M = n(388032),
    O = n(823578);
let D = (0, R.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    w = (0, R.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    F = (0, R.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function U(e) {
    let { members: t, membersOnline: n, isLarge: l, isStacked: a } = e,
        s = [];
    return (
        null != n &&
            n > 0 &&
            s.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: O.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: O.statusOnline }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: O.count,
                                children: M.intl.format(M.t['LC+S+v'], { membersOnline: n })
                            })
                        ]
                    },
                    'onlineCount'
                )
            ),
        null != t &&
            s.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: O.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: O.statusOffline }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: O.count,
                                children: M.intl.format(M.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, i.jsx)('div', {
            className: r()(O.statusCounts, {
                [O.large]: l,
                [O.stacked]: a
            }),
            children: s
        })
    );
}
function B(e) {
    let { channel: t, guild: n, isStacked: l, hasEnded: a } = e;
    if (null != t && null != n) {
        let e = (0, v.KS)(t, n);
        return (0, i.jsxs)('div', {
            className: r()(O.channel, {
                [O.stacked]: l,
                [O.ended]: a
            }),
            children: [
                null != e
                    ? (0, i.jsx)(e, {
                          className: O.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, i.jsx)(I.Z, {
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        children: M.intl.format(M.t['dc+LW1'], {
                            channelName: t.name,
                            serverName: n.name
                        })
                    })
                })
            ]
        });
    }
    return null != n
        ? (0, i.jsx)('div', {
              className: r()(O.channel, {
                  [O.stacked]: l,
                  [O.ended]: a
              }),
              children: (0, i.jsx)(I.Z, {
                  children: (0, i.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      children: M.intl.format(M.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function G(e) {
    var t, n, a;
    let s,
        d,
        { invite: v, getAcceptInviteContext: I } = e,
        { approximate_member_count: R, approximate_presence_count: G, target_type: H, target_application: V } = v;
    o()(H === k.Iq.EMBEDDED_APPLICATION && null != V, 'invalid application invite');
    let z = l.useRef(null),
        [W, K] = l.useState(!1),
        [Y, X] = l.useState(!1),
        [, q] = l.useState(!1),
        Q = l.useCallback(
            (e) => {
                e &&
                    q((e) => {
                        if (!e) {
                            var t;
                            Z.default.track(P.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                                application_id: V.id,
                                invite_inviter_id: null === (t = v.inviter) || void 0 === t ? void 0 : t.id
                            });
                        }
                        return !0;
                    });
            },
            [null === (t = v.inviter) || void 0 === t ? void 0 : t.id, V.id]
        ),
        J = (0, h.O)(Q),
        $ = (0, S.Z)(z, J);
    l.useEffect(() => {
        let e = new ResizeObserver(() =>
                (function () {
                    var e;
                    let t = null === (e = z.current) || void 0 === e ? void 0 : e.offsetWidth;
                    null != t && (K(t < F + w), X(t <= 2 * D));
                })()
            ),
            t = z.current;
        return (
            null != t && e.observe(t),
            () => {
                e.disconnect();
            }
        );
    }, [z, K, X]);
    let ee = (0, c.e7)([A.Z], () => (null != v.guild ? A.Z.getGuild(v.guild.id) : null), [v]),
        et = (0, C.Z)([V.id])[0],
        en = (0, c.e7)([_.ZP], () => {
            var e;
            return (null == v ? void 0 : v.channel) != null && (null === (e = _.ZP.getSelfEmbeddedActivityForChannel(v.channel.id)) || void 0 === e ? void 0 : e.applicationId) === V.id;
        }),
        ei = (0, c.e7)([_.ZP], () => {
            var e;
            return ((null === (e = v.channel) || void 0 === e ? void 0 : e.id) != null ? _.ZP.getEmbeddedActivitiesForChannel(v.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return V.id === t;
            });
        }),
        el = b.Z.getChannel(null === (n = v.channel) || void 0 === n ? void 0 : n.id),
        ea = (0, c.e7)([j.Z], () => null != el && j.Z.can(P.Plq.USE_EMBEDDED_ACTIVITIES, el), [el]),
        { analyticsLocations: er } = (0, E.ZP)(x.Z.INVITE_EMBED),
        es = (0, p.Z)({
            applicationId: V.id,
            size: D,
            names: ['embedded_cover']
        }),
        eo = (0, c.Wu)(
            [_.ZP],
            () =>
                null != el
                    ? _.ZP.getEmbeddedActivitiesForChannel(el.id)
                          .filter((e) => e.applicationId === V.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [el, V.id]
        ),
        ec = (0, c.Wu)([y.default], () => eo.map((e) => y.default.getUser(e)), [eo]),
        ed = v.state === P.r2o.ACCEPTING,
        eu = null != ee;
    if (null == ee) {
        if (null == v.guild) return (0, i.jsx)(L.Z, {});
        ee = new T.ZP(v.guild);
    }
    let em = (eu && !ea) || (eu && en),
        eh = () => {
            m.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: v.code,
                context: I('Invite Button Embed'),
                analyticsLocations: er
            });
        };
    return (eu && en && (s = M.intl.string(M.t.wJNK8P)), ea || (s = M.intl.string(M.t.hHGrW1)), (d = en ? M.intl.string(M.t.KC26NT) : ei || !eu ? M.intl.string(M.t.VJlc0d) : M.intl.string(M.t.I0v0Qk)), null == v.code || '' === v.code)
        ? null
        : (0, i.jsxs)('div', {
              className: O.container,
              ref: $,
              children: [
                  (0, i.jsx)('div', {
                      className: r()(O.imgContainer, {
                          [O.large]: W,
                          [O.stacked]: Y
                      }),
                      children: (0, i.jsx)(g.Z, {
                          imageBackground: es,
                          applicationName: null !== (a = null == et ? void 0 : et.name) && void 0 !== a ? a : '',
                          imageClassName: r()(O.img, {
                              [O.large]: W,
                              [O.stacked]: Y
                          }),
                          imageNotFoundClassName: r()(O.brokenImg, {
                              [O.large]: W,
                              [O.stacked]: Y
                          })
                      })
                  }),
                  (0, i.jsxs)(N.Z, {
                      className: r()(O.content, {
                          [O.large]: W,
                          [O.stacked]: Y
                      }),
                      children: [
                          (0, i.jsxs)('div', {
                              className: O.info,
                              children: [
                                  (0, i.jsx)(u.vwX, { children: eu ? M.intl.string(M.t['1ckx+P']) : M.intl.string(M.t.BoQUFR) }),
                                  (0, i.jsx)(u.X6q, {
                                      className: O.heading,
                                      variant: 'heading-xl/semibold',
                                      children: null == et ? void 0 : et.name
                                  }),
                                  (0, i.jsx)(B, {
                                      channel: el,
                                      guild: ee,
                                      isStacked: Y,
                                      hasEnded: !ei
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: r()(O.currentState, {
                                  [O.large]: W,
                                  [O.split]: !ei && Y
                              }),
                              children: [
                                  !ei && eu
                                      ? (0, i.jsxs)('div', {
                                            className: r()(O.endedNote, { [O.large]: W }),
                                            children: [
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: M.intl.string(M.t.JBnc7O)
                                                }),
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: M.intl.string(M.t.lEvDDQ)
                                                })
                                            ]
                                        })
                                      : null,
                                  eu
                                      ? null
                                      : (0, i.jsx)(U, {
                                            members: R,
                                            membersOnline: G,
                                            isLarge: W,
                                            isStacked: Y
                                        }),
                                  (0, i.jsxs)('div', {
                                      className: O.cta,
                                      children: [
                                          null != ee && ei
                                              ? (0, i.jsx)('div', {
                                                    className: O.avatars,
                                                    children: (0, i.jsx)(f.Z, {
                                                        guildId: ee.id,
                                                        users: ec,
                                                        max: 4
                                                    })
                                                })
                                              : null,
                                          (0, i.jsx)(u.ua7, {
                                              text: s,
                                              children: (e) => {
                                                  let { onClick: t, ...n } = e;
                                                  return (0, i.jsx)(u.zxk, {
                                                      className: O.actionButton,
                                                      onClick: () => {
                                                          eh(), null == t || t();
                                                      },
                                                      wrapperClassName: O.tooltipButtonWrapper,
                                                      ...n,
                                                      submitting: ed,
                                                      disabled: em,
                                                      color: u.Ttl.GREEN,
                                                      children: d
                                                  });
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
