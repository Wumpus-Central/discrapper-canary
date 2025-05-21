n.d(t, { M: () => v }), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(286379),
    a = n(481060),
    o = n(87051),
    s = n(797614),
    c = n(681678),
    u = n(819557),
    d = n(138201),
    p = n(378298),
    h = n(359119),
    f = n(473092),
    m = n(177342),
    g = n(621600),
    b = n(276060),
    _ = n(870991),
    x = n(981631),
    C = n(134612),
    y = n(388032);
function v(e) {
    let { channelId: t, warningId: v, senderId: j } = e,
        O = (0, _.E4)(),
        E = i.useCallback(() => {
            (0, p.T)(t, [v]);
        }, [t, v]),
        I = (0, b.t)({ location: C.zr }),
        P = (e) => {
            o.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, g.ZB.Muted),
                c.Z.showMuteSuccessToast(j, t),
                (0, f.qc)({
                    channelId: t,
                    warningId: v,
                    senderId: j,
                    warningType: h.pj.LIKELY_ATO,
                    cta: e
                }),
                E();
        },
        S = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onClose: l,
                        channelId: t,
                        warningId: v,
                        senderId: j,
                        description: y.intl.string(y.t['/uid3t']),
                        safetyTipRows: O.map((e, t) =>
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
                                    title: y.intl.string(y.t.ftIK2N),
                                    description: y.intl.string(y.t.w2ve0t),
                                    buttonText: y.intl.string(y.t.ftIK2N),
                                    onButtonPress: () => {
                                        P(f.NM.USER_MODAL_MUTE), l();
                                    }
                                },
                                'likely-ato-mute'
                            )
                        ],
                        learnMore: (0, r.jsx)(a.P3F, {
                            onClick: () =>
                                (0, f.qc)({
                                    channelId: t,
                                    warningId: v,
                                    senderId: j,
                                    warningType: h.pj.LIKELY_ATO,
                                    cta: f.NM.USER_MODAL_LEARN_MORE
                                }),
                            children: (0, r.jsx)(a.X6q, {
                                variant: 'heading-sm/medium',
                                color: 'text-link',
                                children: y.intl.format(y.t.UkH129, { learnMoreLink: _.D8 })
                            })
                        })
                    });
                };
            });
        };
    return (i.useEffect(() => {
        I &&
            ((0, f.MC)(x.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: v,
                senderId: j,
                warningType: h.pj.LIKELY_ATO
            }),
            s.Z.increment({ name: l.V.SAFETY_WARNING_VIEW }));
    }, [t, v, j, I]),
    I)
        ? (0, r.jsx)(m.Q, {
              channelId: t,
              warningId: v,
              senderId: j,
              warningType: h.pj.LIKELY_ATO,
              header: y.intl.string(y.t.R8UsiI),
              description: y.intl.string(y.t.lI8nQk),
              onDismiss: E,
              buttons: [
                  {
                      text: y.intl.string(y.t.tC1pvL),
                      color: a.zxk.Colors.BRAND,
                      onclick: () => {
                          S(),
                              (0, f.qc)({
                                  channelId: t,
                                  warningId: v,
                                  senderId: j,
                                  warningType: h.pj.LIKELY_ATO,
                                  cta: f.NM.OPEN_MORE_TIPS
                              });
                      }
                  },
                  {
                      text: y.intl.string(y.t.ftIK2N),
                      color: a.zxk.Colors.PRIMARY,
                      onclick: () => P(f.NM.USER_BANNER_MUTE)
                  }
              ]
          })
        : null;
}
