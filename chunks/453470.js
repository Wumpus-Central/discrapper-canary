n.d(t, { M: () => x }), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(286379),
    o = n(481060),
    a = n(87051),
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
    C = n(981631),
    v = n(134612),
    y = n(388032);
function x(e) {
    let { channelId: t, warningId: x, senderId: j } = e,
        O = (0, _.E4)(),
        N = i.useCallback(() => {
            (0, p.T)(t, [x]);
        }, [t, x]),
        E = (0, b.t)({ location: v.zr }),
        P = (e) => {
            a.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, g.ZB.Muted),
                c.Z.showMuteSuccessToast(j, t),
                (0, f.qc)({
                    channelId: t,
                    warningId: x,
                    senderId: j,
                    warningType: h.pj.LIKELY_ATO,
                    cta: e
                }),
                N();
        },
        I = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onClose: l,
                        channelId: t,
                        warningId: x,
                        senderId: j,
                        description: y.NW.string(y.t['/uid3t']),
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
                                    title: y.NW.string(y.t.ftIK2N),
                                    description: y.NW.string(y.t.w2ve0t),
                                    buttonText: y.NW.string(y.t.ftIK2N),
                                    onButtonPress: () => {
                                        P(f.NM.USER_MODAL_MUTE), l();
                                    }
                                },
                                'likely-ato-mute'
                            )
                        ],
                        learnMore: (0, r.jsx)(o.P3F, {
                            onClick: () =>
                                (0, f.qc)({
                                    channelId: t,
                                    warningId: x,
                                    senderId: j,
                                    warningType: h.pj.LIKELY_ATO,
                                    cta: f.NM.USER_MODAL_LEARN_MORE
                                }),
                            children: (0, r.jsx)(o.X6q, {
                                variant: 'heading-sm/medium',
                                color: 'text-link',
                                children: y.NW.format(y.t.UkH129, { learnMoreLink: _.D8 })
                            })
                        })
                    });
                };
            });
        };
    return (i.useEffect(() => {
        E &&
            ((0, f.MC)(C.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: x,
                senderId: j,
                warningType: h.pj.LIKELY_ATO
            }),
            s.Z.increment({ name: l.V.SAFETY_WARNING_VIEW }));
    }, [t, x, j, E]),
    E)
        ? (0, r.jsx)(m.Q, {
              channelId: t,
              warningId: x,
              senderId: j,
              warningType: h.pj.LIKELY_ATO,
              header: y.NW.string(y.t.R8UsiI),
              description: y.NW.string(y.t.lI8nQk),
              onDismiss: N,
              buttons: [
                  {
                      text: y.NW.string(y.t.tC1pvL),
                      color: o.zxk.Colors.BRAND,
                      onclick: () => {
                          I(),
                              (0, f.qc)({
                                  channelId: t,
                                  warningId: x,
                                  senderId: j,
                                  warningType: h.pj.LIKELY_ATO,
                                  cta: f.NM.OPEN_MORE_TIPS
                              });
                      }
                  },
                  {
                      text: y.NW.string(y.t.ftIK2N),
                      color: o.zxk.Colors.PRIMARY,
                      onclick: () => P(f.NM.USER_BANNER_MUTE)
                  }
              ]
          })
        : null;
}
