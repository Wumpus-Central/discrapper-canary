n.d(t, {
    M: function () {
        return E;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(286379),
    a = n(481060),
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
    C = n(276060),
    x = n(870991),
    v = n(981631),
    _ = n(134612),
    I = n(388032);
function E(e) {
    let { channelId: t, warningId: E, senderId: b } = e,
        Z = (0, x.E4)(),
        N = l.useCallback(() => {
            (0, h.T)(t, [E]);
        }, [t, E]),
        S = (0, C.t)({ location: _.zr }),
        T = (e) => {
            s.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, g.ZB.Muted),
                c.Z.showMuteSuccessToast(b, t),
                (0, m.qc)({
                    channelId: t,
                    warningId: E,
                    senderId: b,
                    warningType: p.pj.LIKELY_ATO,
                    cta: e
                }),
                N();
        },
        j = () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: l, onClose: r } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: r,
                        channelId: t,
                        warningId: E,
                        senderId: b,
                        description: I.intl.string(I.t['/uid3t']),
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
                                    title: I.intl.string(I.t.ftIK2N),
                                    description: I.intl.string(I.t.w2ve0t),
                                    buttonText: I.intl.string(I.t.ftIK2N),
                                    onButtonPress: () => {
                                        T(m.NM.USER_MODAL_MUTE), r();
                                    }
                                },
                                'likely-ato-mute'
                            )
                        ],
                        learnMore: (0, i.jsx)(a.Clickable, {
                            onClick: () =>
                                (0, m.qc)({
                                    channelId: t,
                                    warningId: E,
                                    senderId: b,
                                    warningType: p.pj.LIKELY_ATO,
                                    cta: m.NM.USER_MODAL_LEARN_MORE
                                }),
                            children: (0, i.jsx)(a.Heading, {
                                variant: 'heading-sm/medium',
                                color: 'text-link',
                                children: I.intl.format(I.t.UkH129, { learnMoreLink: x.D8 })
                            })
                        })
                    });
                };
            });
        };
    return (l.useEffect(() => {
        S &&
            ((0, m.MC)(v.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: E,
                senderId: b,
                warningType: p.pj.LIKELY_ATO
            }),
            o.Z.increment({ name: r.V.SAFETY_WARNING_VIEW }));
    }, [t, E, b, S]),
    S)
        ? (0, i.jsx)(f.Q, {
              channelId: t,
              warningId: E,
              senderId: b,
              warningType: p.pj.LIKELY_ATO,
              header: I.intl.string(I.t.R8UsiI),
              description: I.intl.string(I.t.lI8nQk),
              onDismiss: N,
              buttons: [
                  {
                      text: I.intl.string(I.t.tC1pvL),
                      color: a.Button.Colors.BRAND,
                      onclick: () => {
                          j(),
                              (0, m.qc)({
                                  channelId: t,
                                  warningId: E,
                                  senderId: b,
                                  warningType: p.pj.LIKELY_ATO,
                                  cta: m.NM.OPEN_MORE_TIPS
                              });
                      }
                  },
                  {
                      text: I.intl.string(I.t.ftIK2N),
                      color: a.Button.Colors.PRIMARY,
                      onclick: () => T(m.NM.USER_BANNER_MUTE)
                  }
              ]
          })
        : null;
}
