n.d(t, { M: () => T }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(286379),
    r = n(442837),
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
    _ = n(621600),
    C = n(378298),
    x = n(359119),
    v = n(473092),
    E = n(177342),
    I = n(134612),
    b = n(981631),
    Z = n(388032);
function N(e) {
    let { senderId: t, channelId: n, warningId: a } = e,
        { isIgnored: s } = (0, r.cj)([f.Z], () => ({ isIgnored: f.Z.isIgnored(t) }), [t]),
        d = (0, u.Do)({ location: 'web_stranger_danger_more' }),
        p = (0, r.e7)([g.ZP], () => g.ZP.isChannelMuted(null, n)),
        C = l.useCallback(() => {
            (0, v.qc)({
                channelId: n,
                warningId: a,
                senderId: t,
                warningType: x.pj.STRANGER_DANGER,
                cta: v.NM.USER_MODAL_IGNORE
            }),
                c.Z.ignoreUser(t, 'web_stranger_danger_more', n);
        }, [n, a, t]),
        E = l.useCallback(() => {
            (0, v.qc)({
                channelId: n,
                warningId: a,
                senderId: t,
                warningType: x.pj.STRANGER_DANGER,
                cta: v.NM.USER_MODAL_UNIGNORE
            }),
                c.Z.unignoreUser(t, 'web_stranger_danger_more', n);
        }, [n, a, t]);
    return d
        ? (0, i.jsx)(m.ZP, {
              title: Z.intl.string(Z.t.avyV7O),
              description: Z.intl.string(Z.t.naWE6e),
              buttonText: s ? Z.intl.string(Z.t['3SrzRU']) : Z.intl.string(Z.t.avyV7O),
              onButtonPress: s ? E : C
          })
        : (0, i.jsx)(m.ZP, {
              title: Z.intl.string(Z.t['UVp+4+']),
              description: Z.intl.string(Z.t.VS47BA),
              buttonText: p ? Z.intl.string(Z.t['6QK4Hx']) : Z.intl.string(Z.t['UVp+4+']),
              onButtonPress: p
                  ? () => {
                        o.Z.updateChannelOverrideSettings(null, n, { muted: !1 }, _.ZB.Unmuted),
                            h.Z.showUnmuteSuccessToast(t, n),
                            (0, v.qc)({
                                channelId: n,
                                warningId: a,
                                senderId: t,
                                warningType: x.pj.STRANGER_DANGER,
                                cta: v.NM.USER_MODAL_UNMUTE
                            });
                    }
                  : () => {
                        o.Z.updateChannelOverrideSettings(null, n, { muted: !0 }, _.ZB.Muted),
                            h.Z.showMuteSuccessToast(t, n),
                            (0, v.qc)({
                                channelId: n,
                                warningId: a,
                                senderId: t,
                                warningType: x.pj.STRANGER_DANGER,
                                cta: v.NM.USER_MODAL_MUTE
                            });
                    }
          });
}
function T(e) {
    let { channelId: t, warningId: o, senderId: u } = e,
        { isBlocked: h } = (0, r.cj)([f.Z], () => ({ isBlocked: f.Z.isBlocked(u) }), [u]),
        g = l.useCallback(() => {
            (0, C.T)(t, [o]);
        }, [t, o]),
        _ = (0, I.C2)(),
        T = l.useCallback(
            (e) => () => {
                c.Z.addRelationship({
                    userId: u,
                    context: { location: I.zr },
                    type: b.OGo.BLOCKED
                }),
                    g(),
                    (0, v.qc)({
                        channelId: t,
                        warningId: o,
                        senderId: u,
                        warningType: x.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [g, t, o, u]
        );
    l.useEffect(() => {
        (0, v.MC)(b.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: o,
            senderId: u,
            warningType: x.pj.STRANGER_DANGER
        }),
            d.Z.increment({ name: a.V.SAFETY_WARNING_VIEW });
    }, [t, o, u]);
    let S = () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: l, onClose: a } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: a,
                        channelId: t,
                        warningId: o,
                        senderId: u,
                        description: Z.intl.string(Z.t.DJMZX1),
                        safetyTipRows: _.map((e, t) =>
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
                                        buttonColor: s.zxk.Colors.RED,
                                        onButtonPress: () => {
                                            a(), j(v.NM.USER_MODAL_BLOCK_CONFIRM, v.NM.USER_MODAL_BLOCK_CANCEL, S);
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
        j = (e, l, a) => {
            (0, s.ZDy)(async () => {
                let { default: r } = await n.e('68747').then(n.bind(n, 744373));
                return (n) =>
                    (0, i.jsx)(r, {
                        ...n,
                        userId: u,
                        confirmBlock: T(e),
                        onCancel: () => {
                            null == a || a(),
                                (0, v.qc)({
                                    channelId: t,
                                    warningId: o,
                                    senderId: u,
                                    warningType: x.pj.STRANGER_DANGER,
                                    cta: l
                                });
                        }
                    });
            });
        };
    return (0, i.jsx)(E.Q, {
        channelId: t,
        warningId: o,
        senderId: u,
        warningType: x.pj.STRANGER_DANGER,
        header: Z.intl.string(Z.t.iOkDpK),
        description: Z.intl.string(Z.t.ISUbcH),
        onDismiss: g,
        buttons: [
            {
                text: Z.intl.string(Z.t['Qk/c4+']),
                color: s.zxk.Colors.BRAND,
                onclick: () => {
                    S(),
                        (0, v.qc)({
                            channelId: t,
                            warningId: o,
                            senderId: u,
                            warningType: x.pj.STRANGER_DANGER,
                            cta: v.NM.OPEN_MORE_TIPS
                        });
                }
            },
            ...(h
                ? []
                : [
                      {
                          text: Z.intl.string(Z.t.ie0QdH),
                          color: s.zxk.Colors.RED,
                          onclick: () => j(v.NM.USER_BANNER_BLOCK_CONFIRM, v.NM.USER_BANNER_BLOCK_CANCEL)
                      }
                  ])
        ]
    });
}
