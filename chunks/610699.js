n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(653041),
    n(47120),
    n(390547);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(477690),
    d = n(481060),
    m = n(447543),
    h = n(434650),
    f = n(317381),
    p = n(778569),
    _ = n(182906),
    g = n(884338),
    E = n(100527),
    C = n(906732),
    I = n(835473),
    x = n(471445),
    N = n(111028),
    v = n(955415),
    T = n(747127),
    S = n(601964),
    A = n(592125),
    b = n(430824),
    j = n(496675),
    R = n(594174),
    Z = n(626135),
    P = n(624138),
    L = n(358595),
    y = n(981631),
    O = n(245335),
    M = n(388032),
    D = n(823578);
let k = (0, P.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    U = (0, P.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    B = (0, P.Mg)(u.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function w(e) {
    let { members: t, membersOnline: n, isLarge: r, isStacked: l } = e,
        o = [];
    return (
        null != n &&
            n > 0 &&
            o.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: D.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: D.statusOnline }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: D.count,
                                children: M.intl.format(M.t['LC+S+v'], { membersOnline: n })
                            })
                        ]
                    },
                    'onlineCount'
                )
            ),
        null != t &&
            o.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: D.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: D.statusOffline }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: D.count,
                                children: M.intl.format(M.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, i.jsx)('div', {
            className: a()(D.statusCounts, {
                [D.large]: r,
                [D.stacked]: l
            }),
            children: o
        })
    );
}
function F(e) {
    let { channel: t, guild: n, isStacked: r, hasEnded: l } = e;
    if (null != t && null != n) {
        let e = (0, x.KS)(t, n);
        return (0, i.jsxs)('div', {
            className: a()(D.channel, {
                [D.stacked]: r,
                [D.ended]: l
            }),
            children: [
                null != e
                    ? (0, i.jsx)(e, {
                          className: D.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, i.jsx)(N.Z, {
                    children: (0, i.jsx)(d.Text, {
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
              className: a()(D.channel, {
                  [D.stacked]: r,
                  [D.ended]: l
              }),
              children: (0, i.jsx)(N.Z, {
                  children: (0, i.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      children: M.intl.format(M.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function G(e) {
    var t, n, l;
    let o,
        u,
        { invite: x, getAcceptInviteContext: N } = e,
        { approximate_member_count: P, approximate_presence_count: G, target_type: V, target_application: H } = x;
    s()(V === O.Iq.EMBEDDED_APPLICATION && null != H, 'invalid application invite');
    let z = r.useRef(null),
        [W, K] = r.useState(!1),
        [Y, X] = r.useState(!1),
        [, Q] = r.useState(!1),
        q = r.useCallback(
            (e) => {
                e &&
                    Q((e) => {
                        if (!e) {
                            var t;
                            Z.default.track(y.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                                application_id: H.id,
                                invite_inviter_id: null === (t = x.inviter) || void 0 === t ? void 0 : t.id
                            });
                        }
                        return !0;
                    });
            },
            [null === (t = x.inviter) || void 0 === t ? void 0 : t.id, H.id]
        ),
        J = (0, h.O)(q),
        $ = (0, T.Z)(z, J);
    r.useEffect(() => {
        let e = new ResizeObserver(() =>
                (function () {
                    var e;
                    let t = null === (e = z.current) || void 0 === e ? void 0 : e.offsetWidth;
                    null != t && (K(t < B + U), X(t <= 2 * k));
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
    let ee = (0, c.e7)([b.Z], () => (null != x.guild ? b.Z.getGuild(x.guild.id) : null), [x]),
        et = (0, I.Z)([H.id])[0],
        en = (0, c.e7)([f.ZP], () => {
            var e;
            return (null == x ? void 0 : x.channel) != null && (null === (e = f.ZP.getSelfEmbeddedActivityForChannel(x.channel.id)) || void 0 === e ? void 0 : e.applicationId) === H.id;
        }),
        ei = (0, c.e7)([f.ZP], () => {
            var e;
            return ((null === (e = x.channel) || void 0 === e ? void 0 : e.id) != null ? f.ZP.getEmbeddedActivitiesForChannel(x.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return H.id === t;
            });
        }),
        er = A.Z.getChannel(null === (n = x.channel) || void 0 === n ? void 0 : n.id),
        el = (0, c.e7)([j.Z], () => null != er && j.Z.can(y.Plq.USE_EMBEDDED_ACTIVITIES, er), [er]),
        { analyticsLocations: ea } = (0, C.ZP)(E.Z.INVITE_EMBED),
        eo = (0, p.Z)({
            applicationId: H.id,
            size: k,
            names: ['embedded_cover']
        }),
        es = (0, c.Wu)(
            [f.ZP],
            () =>
                null != er
                    ? f.ZP.getEmbeddedActivitiesForChannel(er.id)
                          .filter((e) => e.applicationId === H.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [er, H.id]
        ),
        ec = (0, c.Wu)([R.default], () => es.map((e) => R.default.getUser(e)), [es]),
        eu = x.state === y.r2o.ACCEPTING,
        ed = null != ee;
    if (null == ee) {
        if (null == x.guild) return (0, i.jsx)(L.Z, {});
        ee = new S.ZP(x.guild);
    }
    let em = (ed && !el) || (ed && en),
        eh = () => {
            m.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: x.code,
                context: N('Invite Button Embed'),
                analyticsLocations: ea
            });
        };
    return (ed && en && (o = M.intl.string(M.t.wJNK8P)), !el && (o = M.intl.string(M.t.hHGrW1)), (u = en ? M.intl.string(M.t.KC26NT) : ei || !ed ? M.intl.string(M.t.VJlc0d) : M.intl.string(M.t.I0v0Qk)), null == x.code || '' === x.code)
        ? null
        : (0, i.jsxs)('div', {
              className: D.container,
              ref: $,
              children: [
                  (0, i.jsx)('div', {
                      className: a()(D.imgContainer, {
                          [D.large]: W,
                          [D.stacked]: Y
                      }),
                      children: (0, i.jsx)(_.Z, {
                          imageBackground: eo,
                          applicationName: null !== (l = null == et ? void 0 : et.name) && void 0 !== l ? l : '',
                          imageClassName: a()(D.img, {
                              [D.large]: W,
                              [D.stacked]: Y
                          }),
                          imageNotFoundClassName: a()(D.brokenImg, {
                              [D.large]: W,
                              [D.stacked]: Y
                          })
                      })
                  }),
                  (0, i.jsxs)(v.Z, {
                      className: a()(D.content, {
                          [D.large]: W,
                          [D.stacked]: Y
                      }),
                      children: [
                          (0, i.jsxs)('div', {
                              className: D.info,
                              children: [
                                  (0, i.jsx)(d.FormTitle, { children: ed ? M.intl.string(M.t['1ckx+P']) : M.intl.string(M.t.BoQUFR) }),
                                  (0, i.jsx)(d.Heading, {
                                      className: D.heading,
                                      variant: 'heading-xl/semibold',
                                      children: null == et ? void 0 : et.name
                                  }),
                                  (0, i.jsx)(F, {
                                      channel: er,
                                      guild: ee,
                                      isStacked: Y,
                                      hasEnded: !ei
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: a()(D.currentState, {
                                  [D.large]: W,
                                  [D.split]: !ei && Y
                              }),
                              children: [
                                  !ei && ed
                                      ? (0, i.jsxs)('div', {
                                            className: a()(D.endedNote, { [D.large]: W }),
                                            children: [
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: M.intl.string(M.t.JBnc7O)
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: M.intl.string(M.t.lEvDDQ)
                                                })
                                            ]
                                        })
                                      : null,
                                  ed
                                      ? null
                                      : (0, i.jsx)(w, {
                                            members: P,
                                            membersOnline: G,
                                            isLarge: W,
                                            isStacked: Y
                                        }),
                                  (0, i.jsxs)('div', {
                                      className: D.cta,
                                      children: [
                                          null != ee && ei
                                              ? (0, i.jsx)('div', {
                                                    className: D.avatars,
                                                    children: (0, i.jsx)(g.Z, {
                                                        guildId: ee.id,
                                                        users: ec,
                                                        max: 4
                                                    })
                                                })
                                              : null,
                                          (0, i.jsx)(d.Tooltip, {
                                              text: o,
                                              children: (e) => {
                                                  let { onClick: t, ...n } = e;
                                                  return (0, i.jsx)(d.Button, {
                                                      className: D.actionButton,
                                                      onClick: () => {
                                                          eh(), null == t || t();
                                                      },
                                                      wrapperClassName: D.tooltipButtonWrapper,
                                                      ...n,
                                                      submitting: eu,
                                                      disabled: em,
                                                      color: d.ButtonColors.GREEN,
                                                      children: u
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
