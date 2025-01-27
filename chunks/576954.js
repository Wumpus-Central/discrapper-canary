n.d(t, {
    M: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(286379),
    a = n(442837),
    s = n(481060),
    o = n(87051),
    c = n(194359),
    d = n(797614),
    u = n(922611),
    h = n(681678),
    p = n(819557),
    m = n(138201),
    f = n(699516),
    g = n(9156),
    C = n(621600),
    x = n(378298),
    v = n(359119),
    _ = n(473092),
    I = n(177342),
    E = n(134612),
    b = n(981631),
    Z = n(388032);
function N(e) {
    let { senderId: t, channelId: n, warningId: r } = e,
        { isIgnored: s } = (0, a.cj)([f.Z], () => ({ isIgnored: f.Z.isIgnored(t) }), [t]),
        d = (0, u.Do)({ location: 'web_stranger_danger_more' }),
        p = (0, a.e7)([g.ZP], () => g.ZP.isChannelMuted(null, n)),
        x = l.useCallback(() => {
            (0, _.qc)({
                channelId: n,
                warningId: r,
                senderId: t,
                warningType: v.pj.STRANGER_DANGER,
                cta: _.NM.USER_MODAL_IGNORE
            }),
                c.Z.ignoreUser(t, 'web_stranger_danger_more', n);
        }, [n, r, t]),
        I = l.useCallback(() => {
            (0, _.qc)({
                channelId: n,
                warningId: r,
                senderId: t,
                warningType: v.pj.STRANGER_DANGER,
                cta: _.NM.USER_MODAL_UNIGNORE
            }),
                c.Z.unignoreUser(t, 'web_stranger_danger_more', n);
        }, [n, r, t]);
    return d
        ? (0, i.jsx)(m.ZP, {
              title: Z.intl.string(Z.t.avyV7O),
              description: Z.intl.string(Z.t.naWE6e),
              buttonText: s ? Z.intl.string(Z.t['3SrzRU']) : Z.intl.string(Z.t.avyV7O),
              onButtonPress: s ? I : x
          })
        : (0, i.jsx)(m.ZP, {
              title: Z.intl.string(Z.t['UVp+4+']),
              description: Z.intl.string(Z.t.VS47BA),
              buttonText: p ? Z.intl.string(Z.t['6QK4Hx']) : Z.intl.string(Z.t['UVp+4+']),
              onButtonPress: p
                  ? () => {
                        o.Z.updateChannelOverrideSettings(null, n, { muted: !1 }, C.ZB.Unmuted),
                            h.Z.showUnmuteSuccessToast(t, n),
                            (0, _.qc)({
                                channelId: n,
                                warningId: r,
                                senderId: t,
                                warningType: v.pj.STRANGER_DANGER,
                                cta: _.NM.USER_MODAL_UNMUTE
                            });
                    }
                  : () => {
                        o.Z.updateChannelOverrideSettings(null, n, { muted: !0 }, C.ZB.Muted),
                            h.Z.showMuteSuccessToast(t, n),
                            (0, _.qc)({
                                channelId: n,
                                warningId: r,
                                senderId: t,
                                warningType: v.pj.STRANGER_DANGER,
                                cta: _.NM.USER_MODAL_MUTE
                            });
                    }
          });
}
function S(e) {
    let { channelId: t, warningId: o, senderId: u } = e,
        { isBlocked: h } = (0, a.cj)([f.Z], () => ({ isBlocked: f.Z.isBlocked(u) }), [u]),
        g = l.useCallback(() => {
            (0, x.T)(t, [o]);
        }, [t, o]),
        C = (0, E.C2)(),
        S = l.useCallback(
            (e) => () => {
                c.Z.addRelationship({
                    userId: u,
                    context: { location: E.zr },
                    type: b.OGo.BLOCKED
                }),
                    g(),
                    (0, _.qc)({
                        channelId: t,
                        warningId: o,
                        senderId: u,
                        warningType: v.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [g, t, o, u]
        );
    l.useEffect(() => {
        (0, _.MC)(b.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: o,
            senderId: u,
            warningType: v.pj.STRANGER_DANGER
        }),
            d.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
    }, [t, o, u]);
    let T = () => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: l, onClose: r } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: r,
                        channelId: t,
                        warningId: o,
                        senderId: u,
                        description: Z.intl.string(Z.t.DJMZX1),
                        safetyTipRows: C.map((e, t) =>
                            (0, i.jsx)(
                                p.q,
                                {
                                    index: t,
                                    listType: 'numbered',
                                    title: e
                                },
                                t
                            )
                        ),
                        actionRows: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(
                                    N,
                                    {
                                        senderId: u,
                                        channelId: t,
                                        warningId: o
                                    },
                                    'more-tips-button'
                                ),
                                (0, i.jsx)(
                                    m.ZP,
                                    {
                                        title: Z.intl.string(Z.t['5QYPOz']),
                                        description: Z.intl.string(Z.t.G08MKi),
                                        buttonText: Z.intl.string(Z.t['5QYPOz']),
                                        buttonColor: s.Button.Colors.RED,
                                        onButtonPress: () => {
                                            r(), j(_.NM.USER_MODAL_BLOCK_CONFIRM, _.NM.USER_MODAL_BLOCK_CANCEL, T);
                                        }
                                    },
                                    'block-button'
                                )
                            ]
                        })
                    });
                };
            });
        },
        j = (e, l, r) => {
            (0, s.openModalLazy)(async () => {
                let { default: a } = await n.e('68747').then(n.bind(n, 744373));
                return (n) =>
                    (0, i.jsx)(a, {
                        ...n,
                        userId: u,
                        confirmBlock: S(e),
                        onCancel: () => {
                            null == r || r(),
                                (0, _.qc)({
                                    channelId: t,
                                    warningId: o,
                                    senderId: u,
                                    warningType: v.pj.STRANGER_DANGER,
                                    cta: l
                                });
                        }
                    });
            });
        };
    return (0, i.jsx)(I.Q, {
        channelId: t,
        warningId: o,
        senderId: u,
        warningType: v.pj.STRANGER_DANGER,
        header: Z.intl.string(Z.t.iOkDpK),
        description: Z.intl.string(Z.t.ISUbcH),
        onDismiss: g,
        buttons: [
            {
                text: Z.intl.string(Z.t['Qk/c4+']),
                color: s.Button.Colors.BRAND,
                onclick: () => {
                    T(),
                        (0, _.qc)({
                            channelId: t,
                            warningId: o,
                            senderId: u,
                            warningType: v.pj.STRANGER_DANGER,
                            cta: _.NM.OPEN_MORE_TIPS
                        });
                }
            },
            ...(h
                ? []
                : [
                      {
                          text: Z.intl.string(Z.t.ie0QdH),
                          color: s.Button.Colors.RED,
                          onclick: () => j(_.NM.USER_BANNER_BLOCK_CONFIRM, _.NM.USER_BANNER_BLOCK_CANCEL)
                      }
                  ])
        ]
    });
}
