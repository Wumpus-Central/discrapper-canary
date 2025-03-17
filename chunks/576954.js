n.d(t, { M: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(286379),
    o = n(442837),
    a = n(481060),
    s = n(87051),
    c = n(194359),
    u = n(797614),
    d = n(922611),
    p = n(681678),
    h = n(819557),
    f = n(138201),
    m = n(699516),
    g = n(9156),
    b = n(621600),
    _ = n(378298),
    C = n(359119),
    v = n(473092),
    y = n(177342),
    x = n(134612),
    j = n(981631),
    O = n(388032);
function E(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: a } = (0, o.cj)([m.Z], () => ({ isIgnored: m.Z.isIgnored(t) }), [t]),
        u = (0, d.D)({ location: 'web_stranger_danger_more' }),
        h = (0, o.e7)([g.ZP], () => g.ZP.isChannelMuted(null, n)),
        _ = i.useCallback(() => {
            (0, v.qc)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: C.pj.STRANGER_DANGER,
                cta: v.NM.USER_MODAL_IGNORE
            }),
                c.Z.ignoreUser(t, 'web_stranger_danger_more', n);
        }, [n, l, t]),
        y = i.useCallback(() => {
            (0, v.qc)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: C.pj.STRANGER_DANGER,
                cta: v.NM.USER_MODAL_UNIGNORE
            }),
                c.Z.unignoreUser(t, 'web_stranger_danger_more', n);
        }, [n, l, t]);
    return u
        ? (0, r.jsx)(f.ZP, {
              title: O.NW.string(O.t.avyV7O),
              description: O.NW.string(O.t.naWE6e),
              buttonText: a ? O.NW.string(O.t['3SrzRU']) : O.NW.string(O.t.avyV7O),
              onButtonPress: a ? y : _
          })
        : (0, r.jsx)(f.ZP, {
              title: O.NW.string(O.t['UVp+4+']),
              description: O.NW.string(O.t.VS47BA),
              buttonText: h ? O.NW.string(O.t['6QK4Hx']) : O.NW.string(O.t['UVp+4+']),
              onButtonPress: h
                  ? () => {
                        s.Z.updateChannelOverrideSettings(null, n, { muted: !1 }, b.ZB.Unmuted),
                            p.Z.showUnmuteSuccessToast(t, n),
                            (0, v.qc)({
                                channelId: n,
                                warningId: l,
                                senderId: t,
                                warningType: C.pj.STRANGER_DANGER,
                                cta: v.NM.USER_MODAL_UNMUTE
                            });
                    }
                  : () => {
                        s.Z.updateChannelOverrideSettings(null, n, { muted: !0 }, b.ZB.Muted),
                            p.Z.showMuteSuccessToast(t, n),
                            (0, v.qc)({
                                channelId: n,
                                warningId: l,
                                senderId: t,
                                warningType: C.pj.STRANGER_DANGER,
                                cta: v.NM.USER_MODAL_MUTE
                            });
                    }
          });
}
function N(e) {
    let { channelId: t, warningId: s, senderId: d } = e,
        { isBlocked: p } = (0, o.cj)([m.Z], () => ({ isBlocked: m.Z.isBlocked(d) }), [d]),
        g = i.useCallback(() => {
            (0, _.T)(t, [s]);
        }, [t, s]),
        b = (0, x.C2)(),
        N = i.useCallback(
            (e) => () => {
                c.Z.blockUser(d, { location: x.zr }).then(() => {
                    g();
                }),
                    (0, v.qc)({
                        channelId: t,
                        warningId: s,
                        senderId: d,
                        warningType: C.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [g, t, s, d]
        );
    i.useEffect(() => {
        (0, v.MC)(j.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: s,
            senderId: d,
            warningType: C.pj.STRANGER_DANGER
        }),
            u.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, [t, s, d]);
    let I = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onClose: l,
                        channelId: t,
                        warningId: s,
                        senderId: d,
                        description: O.NW.string(O.t.DJMZX1),
                        safetyTipRows: b.map((e, t) =>
                            (0, r.jsx)(
                                h.q,
                                {
                                    index: t,
                                    listType: 'numbered',
                                    title: e
                                },
                                t
                            )
                        ),
                        actionRows: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    E,
                                    {
                                        senderId: d,
                                        channelId: t,
                                        warningId: s
                                    },
                                    'more-tips-button'
                                ),
                                (0, r.jsx)(
                                    f.ZP,
                                    {
                                        title: O.NW.string(O.t['5QYPOz']),
                                        description: O.NW.string(O.t.G08MKi),
                                        buttonText: O.NW.string(O.t['5QYPOz']),
                                        buttonColor: a.zxk.Colors.RED,
                                        onButtonPress: () => {
                                            l(), P(v.NM.USER_MODAL_BLOCK_CONFIRM, v.NM.USER_MODAL_BLOCK_CANCEL, I);
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
        P = (e, i, l) => {
            (0, a.ZDy)(async () => {
                let { default: o } = await Promise.all([n.e('97652'), n.e('26237')]).then(n.bind(n, 744373));
                return (n) => {
                    var a, c;
                    return (0, r.jsx)(
                        o,
                        ((a = (function (e) {
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
                        })({}, n)),
                        (c = c =
                            {
                                userId: d,
                                confirmBlock: N(e),
                                onCancel: () => {
                                    null == l || l(),
                                        (0, v.qc)({
                                            channelId: t,
                                            warningId: s,
                                            senderId: d,
                                            warningType: C.pj.STRANGER_DANGER,
                                            cta: i
                                        });
                                }
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(c)).forEach(function (e) {
                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(c, e));
                              }),
                        a)
                    );
                };
            });
        };
    return (0, r.jsx)(y.Q, {
        channelId: t,
        warningId: s,
        senderId: d,
        warningType: C.pj.STRANGER_DANGER,
        header: O.NW.string(O.t.iOkDpK),
        description: O.NW.string(O.t.ISUbcH),
        onDismiss: g,
        buttons: [
            {
                text: O.NW.string(O.t['Qk/c4+']),
                color: a.zxk.Colors.BRAND,
                onclick: () => {
                    I(),
                        (0, v.qc)({
                            channelId: t,
                            warningId: s,
                            senderId: d,
                            warningType: C.pj.STRANGER_DANGER,
                            cta: v.NM.OPEN_MORE_TIPS
                        });
                }
            },
            ...(p
                ? []
                : [
                      {
                          text: O.NW.string(O.t.ie0QdH),
                          color: a.zxk.Colors.RED,
                          onclick: () => P(v.NM.USER_BANNER_BLOCK_CONFIRM, v.NM.USER_BANNER_BLOCK_CANCEL)
                      }
                  ])
        ]
    });
}
