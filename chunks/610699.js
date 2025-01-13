n.d(t, {
    Z: function () {
        return U;
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
    d = n(477690),
    u = n(481060),
    m = n(447543),
    h = n(317381),
    f = n(778569),
    p = n(182906),
    _ = n(884338),
    g = n(100527),
    E = n(906732),
    C = n(835473),
    I = n(471445),
    x = n(111028),
    N = n(955415),
    v = n(601964),
    T = n(592125),
    S = n(430824),
    A = n(496675),
    b = n(594174),
    j = n(624138),
    R = n(358595),
    Z = n(981631),
    P = n(245335),
    L = n(388032),
    y = n(823578);
let O = (0, j.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
    M = (0, j.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
    k = (0, j.Mg)(d.Z.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);
function D(e) {
    let { members: t, membersOnline: n, isLarge: r, isStacked: l } = e,
        o = [];
    return (
        null != n &&
            n > 0 &&
            o.push(
                (0, i.jsxs)(
                    'div',
                    {
                        className: y.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: y.statusOnline }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: y.count,
                                children: L.intl.format(L.t['LC+S+v'], { membersOnline: n })
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
                        className: y.statusWrapper,
                        children: [
                            (0, i.jsx)('i', { className: y.statusOffline }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                className: y.count,
                                children: L.intl.format(L.t.zRl6XV, { count: t })
                            })
                        ]
                    },
                    'memberCount'
                )
            ),
        (0, i.jsx)('div', {
            className: a()(y.statusCounts, {
                [y.large]: r,
                [y.stacked]: l
            }),
            children: o
        })
    );
}
function B(e) {
    let { channel: t, guild: n, isStacked: r, hasEnded: l } = e;
    if (null != t && null != n) {
        let e = (0, I.KS)(t, n);
        return (0, i.jsxs)('div', {
            className: a()(y.channel, {
                [y.stacked]: r,
                [y.ended]: l
            }),
            children: [
                null != e
                    ? (0, i.jsx)(e, {
                          className: y.channelIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                    : null,
                (0, i.jsx)(x.Z, {
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        children: L.intl.format(L.t['dc+LW1'], {
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
              className: a()(y.channel, {
                  [y.stacked]: r,
                  [y.ended]: l
              }),
              children: (0, i.jsx)(x.Z, {
                  children: (0, i.jsx)(u.Text, {
                      variant: 'text-xs/normal',
                      children: L.intl.format(L.t.u0vaDA, { guildName: n.name })
                  })
              })
          })
        : null;
}
function U(e) {
    var t, n;
    let l,
        o,
        { invite: d, getAcceptInviteContext: I } = e,
        { approximate_member_count: x, approximate_presence_count: j, target_type: U, target_application: w } = d;
    s()(U === P.Iq.EMBEDDED_APPLICATION && null != w, 'invalid application invite');
    let F = r.useRef(null),
        [G, V] = r.useState(!1),
        [H, z] = r.useState(!1);
    r.useEffect(() => {
        let e = new ResizeObserver(() =>
                (function () {
                    var e;
                    let t = null === (e = F.current) || void 0 === e ? void 0 : e.offsetWidth;
                    null != t && (V(t < k + M), z(t <= 2 * O));
                })()
            ),
            t = F.current;
        return (
            null != t && e.observe(t),
            () => {
                e.disconnect();
            }
        );
    }, [F, V, z]);
    let W = (0, c.e7)([S.Z], () => (null != d.guild ? S.Z.getGuild(d.guild.id) : null), [d]),
        K = (0, C.Z)([w.id])[0],
        Y = (0, c.e7)([h.ZP], () => {
            var e;
            return (null == d ? void 0 : d.channel) != null && (null === (e = h.ZP.getSelfEmbeddedActivityForChannel(d.channel.id)) || void 0 === e ? void 0 : e.applicationId) === w.id;
        }),
        X = (0, c.e7)([h.ZP], () => {
            var e;
            return ((null === (e = d.channel) || void 0 === e ? void 0 : e.id) != null ? h.ZP.getEmbeddedActivitiesForChannel(d.channel.id) : []).some((e) => {
                let { applicationId: t } = e;
                return w.id === t;
            });
        }),
        Q = T.Z.getChannel(null === (t = d.channel) || void 0 === t ? void 0 : t.id),
        q = (0, c.e7)([A.Z], () => null != Q && A.Z.can(Z.Plq.USE_EMBEDDED_ACTIVITIES, Q), [Q]),
        { analyticsLocations: J } = (0, E.ZP)(g.Z.INVITE_EMBED),
        $ = (0, f.Z)({
            applicationId: w.id,
            size: O,
            names: ['embedded_cover']
        }),
        ee = (0, c.Wu)(
            [h.ZP],
            () =>
                null != Q
                    ? h.ZP.getEmbeddedActivitiesForChannel(Q.id)
                          .filter((e) => e.applicationId === w.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [Q, w.id]
        ),
        et = (0, c.Wu)([b.default], () => ee.map((e) => b.default.getUser(e)), [ee]),
        en = d.state === Z.r2o.ACCEPTING,
        ei = null != W;
    if (null == W) {
        if (null == d.guild) return (0, i.jsx)(R.Z, {});
        W = new v.ZP(d.guild);
    }
    let er = (ei && !q) || (ei && Y),
        el = () => {
            m.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: d.code,
                context: I('Invite Button Embed'),
                analyticsLocations: J
            });
        };
    return (ei && Y && (l = L.intl.string(L.t.wJNK8P)), !q && (l = L.intl.string(L.t.hHGrW1)), (o = Y ? L.intl.string(L.t.KC26NT) : X || !ei ? L.intl.string(L.t.VJlc0d) : L.intl.string(L.t.I0v0Qk)), null == d.code || '' === d.code)
        ? null
        : (0, i.jsxs)('div', {
              className: y.container,
              ref: F,
              children: [
                  (0, i.jsx)('div', {
                      className: a()(y.imgContainer, {
                          [y.large]: G,
                          [y.stacked]: H
                      }),
                      children: (0, i.jsx)(p.Z, {
                          imageBackground: $,
                          applicationName: null !== (n = null == K ? void 0 : K.name) && void 0 !== n ? n : '',
                          imageClassName: a()(y.img, {
                              [y.large]: G,
                              [y.stacked]: H
                          }),
                          imageNotFoundClassName: a()(y.brokenImg, {
                              [y.large]: G,
                              [y.stacked]: H
                          })
                      })
                  }),
                  (0, i.jsxs)(N.Z, {
                      className: a()(y.content, {
                          [y.large]: G,
                          [y.stacked]: H
                      }),
                      children: [
                          (0, i.jsxs)('div', {
                              className: y.info,
                              children: [
                                  (0, i.jsx)(u.FormTitle, { children: ei ? L.intl.string(L.t['1ckx+P']) : L.intl.string(L.t.BoQUFR) }),
                                  (0, i.jsx)(u.Heading, {
                                      className: y.heading,
                                      variant: 'heading-xl/semibold',
                                      children: null == K ? void 0 : K.name
                                  }),
                                  (0, i.jsx)(B, {
                                      channel: Q,
                                      guild: W,
                                      isStacked: H,
                                      hasEnded: !X
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: a()(y.currentState, {
                                  [y.large]: G,
                                  [y.split]: !X && H
                              }),
                              children: [
                                  !X && ei
                                      ? (0, i.jsxs)('div', {
                                            className: a()(y.endedNote, { [y.large]: G }),
                                            children: [
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: L.intl.string(L.t.JBnc7O)
                                                }),
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: L.intl.string(L.t.lEvDDQ)
                                                })
                                            ]
                                        })
                                      : null,
                                  ei
                                      ? null
                                      : (0, i.jsx)(D, {
                                            members: x,
                                            membersOnline: j,
                                            isLarge: G,
                                            isStacked: H
                                        }),
                                  (0, i.jsxs)('div', {
                                      className: y.cta,
                                      children: [
                                          null != W && X
                                              ? (0, i.jsx)('div', {
                                                    className: y.avatars,
                                                    children: (0, i.jsx)(_.Z, {
                                                        guildId: W.id,
                                                        users: et,
                                                        max: 4
                                                    })
                                                })
                                              : null,
                                          (0, i.jsx)(u.Tooltip, {
                                              text: l,
                                              children: (e) => {
                                                  let { onClick: t, ...n } = e;
                                                  return (0, i.jsx)(u.Button, {
                                                      className: y.actionButton,
                                                      onClick: () => {
                                                          el(), null == t || t();
                                                      },
                                                      wrapperClassName: y.tooltipButtonWrapper,
                                                      ...n,
                                                      submitting: en,
                                                      disabled: er,
                                                      color: u.ButtonColors.GREEN,
                                                      children: o
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
