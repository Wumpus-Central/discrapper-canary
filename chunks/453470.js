(n.d(t, { M: () => v }), n(953529));
var r = n(255367),
    i = n(73800),
    o = n(286379),
    a = n(481060),
    s = n(87051),
    l = n(797614),
    c = n(681678),
    u = n(819557),
    d = n(138201),
    f = n(378298),
    _ = n(359119),
    p = n(473092),
    h = n(177342),
    m = n(621600),
    g = n(276060),
    E = n(870991),
    b = n(981631),
    y = n(134612),
    O = n(388032);
function v(e) {
    let { channelId: t, warningId: v, senderId: I } = e,
        T = (0, E.E4)(),
        S = i.useCallback(() => {
            (0, f.T)(t, [v]);
        }, [t, v]),
        A = (0, g.t)({ location: y.zr }),
        N = () => {
            (R(),
                (0, p.qc)({
                    channelId: t,
                    warningId: v,
                    senderId: I,
                    warningType: _.pj.LIKELY_ATO,
                    cta: p.NM.OPEN_MORE_TIPS
                }));
        },
        C = (e) => {
            (s.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, m.ZB.Muted),
                c.Z.showMuteSuccessToast(I, t),
                (0, p.qc)({
                    channelId: t,
                    warningId: v,
                    senderId: I,
                    warningType: _.pj.LIKELY_ATO,
                    cta: e
                }),
                S());
        },
        R = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: i, onClose: o } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onClose: o,
                        channelId: t,
                        warningId: v,
                        senderId: I,
                        description: O.intl.string(O.t['/uid3t']),
                        safetyTipRows: T.map((e, t) =>
                            (0, r.jsx)(
                                u.q,
                                {
                                    listType: 'numbered',
                                    index: t,
                                    title: e.title,
                                    description: e.description
                                },
                                t
                            )
                        ),
                        actionRows: [
                            (0, r.jsx)(
                                d.ZP,
                                {
                                    title: O.intl.string(O.t.ftIK2N),
                                    description: O.intl.string(O.t.w2ve0t),
                                    buttonText: O.intl.string(O.t.ftIK2N),
                                    onButtonPress: () => {
                                        (C(p.NM.USER_MODAL_MUTE), o());
                                    }
                                },
                                'likely-ato-mute'
                            )
                        ],
                        learnMore: (0, r.jsx)(a.P3F, {
                            onClick: () =>
                                (0, p.qc)({
                                    channelId: t,
                                    warningId: v,
                                    senderId: I,
                                    warningType: _.pj.LIKELY_ATO,
                                    cta: p.NM.USER_MODAL_LEARN_MORE
                                }),
                            children: (0, r.jsx)(a.X6q, {
                                variant: 'heading-sm/medium',
                                color: 'text-link',
                                children: O.intl.format(O.t.UkH129, { learnMoreLink: E.D8 })
                            })
                        })
                    });
                };
            });
        };
    return (i.useEffect(() => {
        A &&
            ((0, p.MC)(b.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: v,
                senderId: I,
                warningType: _.pj.LIKELY_ATO
            }),
            l.Z.increment({ name: o.V.SAFETY_WARNING_VIEW }));
    }, [t, v, I, A]),
    A)
        ? (0, r.jsx)(h.Q, {
              channelId: t,
              warningId: v,
              senderId: I,
              warningType: _.pj.LIKELY_ATO,
              header: O.intl.string(O.t.R8UsiI),
              description: O.intl.string(O.t.lI8nQk),
              onDismiss: S,
              buttons: [
                  {
                      text: O.intl.string(O.t.tC1pvL),
                      variant: 'primary',
                      onClick: N
                  },
                  {
                      text: O.intl.string(O.t.ftIK2N),
                      onClick: () => C(p.NM.USER_BANNER_MUTE)
                  }
              ]
          })
        : null;
}
