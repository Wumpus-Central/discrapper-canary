n.d(t, { M: () => I });
var i = n(200651),
    l = n(192379),
    a = n(286379),
    r = n(481060),
    s = n(87051),
    o = n(797614),
    c = n(681678),
    d = n(819557),
    u = n(138201),
    h = n(378298),
    p = n(359119),
    m = n(473092),
    f = n(177342),
    g = n(621600),
    _ = n(276060),
    C = n(870991),
    x = n(981631),
    v = n(134612),
    E = n(388032);
function I(e) {
    let { channelId: t, warningId: I, senderId: b } = e,
        Z = (0, C.E4)(),
        N = l.useCallback(() => {
            (0, h.T)(t, [I]);
        }, [t, I]),
        T = (0, _.t)({ location: v.zr }),
        S = (e) => {
            s.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, g.ZB.Muted),
                c.Z.showMuteSuccessToast(b, t),
                (0, m.qc)({
                    channelId: t,
                    warningId: I,
                    senderId: b,
                    warningType: p.pj.LIKELY_ATO,
                    cta: e
                }),
                N();
        },
        j = () => {
            (0, r.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: l, onClose: a } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: a,
                        channelId: t,
                        warningId: I,
                        senderId: b,
                        description: E.intl.string(E.t['/uid3t']),
                        safetyTipRows: Z.map((e, t) =>
                            (0, i.jsx)(
                                d.q,
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
                            (0, i.jsx)(
                                u.ZP,
                                {
                                    title: E.intl.string(E.t.ftIK2N),
                                    description: E.intl.string(E.t.w2ve0t),
                                    buttonText: E.intl.string(E.t.ftIK2N),
                                    onButtonPress: () => {
                                        S(m.NM.USER_MODAL_MUTE), a();
                                    }
                                },
                                'likely-ato-mute'
                            )
                        ],
                        learnMore: (0, i.jsx)(r.P3F, {
                            onClick: () =>
                                (0, m.qc)({
                                    channelId: t,
                                    warningId: I,
                                    senderId: b,
                                    warningType: p.pj.LIKELY_ATO,
                                    cta: m.NM.USER_MODAL_LEARN_MORE
                                }),
                            children: (0, i.jsx)(r.X6q, {
                                variant: 'heading-sm/medium',
                                color: 'text-link',
                                children: E.intl.format(E.t.UkH129, { learnMoreLink: C.D8 })
                            })
                        })
                    });
                };
            });
        };
    return (l.useEffect(() => {
        T &&
            ((0, m.MC)(x.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: I,
                senderId: b,
                warningType: p.pj.LIKELY_ATO
            }),
            o.Z.increment({ name: a.V.SAFETY_WARNING_VIEW }));
    }, [t, I, b, T]),
    T)
        ? (0, i.jsx)(f.Q, {
              channelId: t,
              warningId: I,
              senderId: b,
              warningType: p.pj.LIKELY_ATO,
              header: E.intl.string(E.t.R8UsiI),
              description: E.intl.string(E.t.lI8nQk),
              onDismiss: N,
              buttons: [
                  {
                      text: E.intl.string(E.t.tC1pvL),
                      color: r.zxk.Colors.BRAND,
                      onclick: () => {
                          j(),
                              (0, m.qc)({
                                  channelId: t,
                                  warningId: I,
                                  senderId: b,
                                  warningType: p.pj.LIKELY_ATO,
                                  cta: m.NM.OPEN_MORE_TIPS
                              });
                      }
                  },
                  {
                      text: E.intl.string(E.t.ftIK2N),
                      color: r.zxk.Colors.PRIMARY,
                      onclick: () => S(m.NM.USER_BANNER_MUTE)
                  }
              ]
          })
        : null;
}
