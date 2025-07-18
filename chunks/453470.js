(n.d(t, { M: () => j }), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(286379),
    a = n(755721),
    o = n(481060),
    s = n(87051),
    c = n(797614),
    u = n(681678),
    d = n(819557),
    p = n(138201),
    h = n(378298),
    f = n(359119),
    m = n(473092),
    g = n(177342),
    b = n(621600),
    _ = n(276060),
    y = n(870991),
    C = n(981631),
    x = n(134612),
    v = n(388032);
function j(e) {
    let { channelId: t, warningId: j, senderId: O } = e,
        E = (0, y.E4)(),
        S = i.useCallback(() => {
            (0, h.T)(t, [j]);
        }, [t, j]),
        P = (0, _.t)({ location: x.zr }),
        I = (e) => {
            (s.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, b.ZB.Muted),
                u.Z.showMuteSuccessToast(O, t),
                (0, m.qc)({
                    channelId: t,
                    warningId: j,
                    senderId: O,
                    warningType: f.pj.LIKELY_ATO,
                    cta: e
                }),
                S());
        },
        Z = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onClose: l,
                        channelId: t,
                        warningId: j,
                        senderId: O,
                        description: v.intl.string(v.t['/uid3t']),
                        safetyTipRows: E.map((e, t) =>
                            (0, r.jsx)(
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
                            (0, r.jsx)(
                                p.ZP,
                                {
                                    title: v.intl.string(v.t.ftIK2N),
                                    description: v.intl.string(v.t.w2ve0t),
                                    buttonText: v.intl.string(v.t.ftIK2N),
                                    onButtonPress: () => {
                                        (I(m.NM.USER_MODAL_MUTE), l());
                                    }
                                },
                                'likely-ato-mute'
                            )
                        ],
                        learnMore: (0, r.jsx)(o.P3F, {
                            onClick: () =>
                                (0, m.qc)({
                                    channelId: t,
                                    warningId: j,
                                    senderId: O,
                                    warningType: f.pj.LIKELY_ATO,
                                    cta: m.NM.USER_MODAL_LEARN_MORE
                                }),
                            children: (0, r.jsx)(o.X6q, {
                                variant: 'heading-sm/medium',
                                color: 'text-link',
                                children: v.intl.format(v.t.UkH129, { learnMoreLink: y.D8 })
                            })
                        })
                    });
                };
            });
        };
    return (i.useEffect(() => {
        P &&
            ((0, m.MC)(C.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: j,
                senderId: O,
                warningType: f.pj.LIKELY_ATO
            }),
            c.Z.increment({ name: l.V.SAFETY_WARNING_VIEW }));
    }, [t, j, O, P]),
    P)
        ? (0, r.jsx)(g.Q, {
              channelId: t,
              warningId: j,
              senderId: O,
              warningType: f.pj.LIKELY_ATO,
              header: v.intl.string(v.t.R8UsiI),
              description: v.intl.string(v.t.lI8nQk),
              onDismiss: S,
              buttons: [
                  {
                      text: v.intl.string(v.t.tC1pvL),
                      color: a.zx.Colors.BRAND,
                      onclick: () => {
                          (Z(),
                              (0, m.qc)({
                                  channelId: t,
                                  warningId: j,
                                  senderId: O,
                                  warningType: f.pj.LIKELY_ATO,
                                  cta: m.NM.OPEN_MORE_TIPS
                              }));
                      }
                  },
                  {
                      text: v.intl.string(v.t.ftIK2N),
                      color: a.zx.Colors.PRIMARY,
                      onclick: () => I(m.NM.USER_BANNER_MUTE)
                  }
              ]
          })
        : null;
}
