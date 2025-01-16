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
    d = n(378298),
    u = n(359119),
    h = n(473092),
    p = n(177342),
    m = n(621600),
    f = n(276060),
    g = n(870991),
    C = n(981631),
    x = n(134612),
    v = n(388032),
    _ = n(162787);
function I(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)('div', {
        className: _.safetyAction,
        children: [
            (0, i.jsxs)('div', {
                className: _.safetyActionText,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: v.intl.string(v.t.ftIK2N)
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: v.intl.string(v.t.w2ve0t)
                    })
                ]
            }),
            (0, i.jsx)(a.Button, {
                size: a.Button.Sizes.SMALL,
                color: a.Button.Colors.PRIMARY,
                'aria-label': v.intl.string(v.t.ftIK2N),
                onClick: t,
                children: v.intl.string(v.t.ftIK2N)
            })
        ]
    });
}
function E(e) {
    let { channelId: t, warningId: E, senderId: b } = e,
        Z = (0, g.E4)(),
        N = l.useCallback(() => {
            (0, d.T)(t, [E]);
        }, [t, E]),
        S = (0, f.t)({ location: x.zr }),
        T = (e) => {
            s.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, m.ZB.Muted),
                c.Z.showMuteSuccessToast(b, t),
                (0, h.qc)({
                    channelId: t,
                    warningId: E,
                    senderId: b,
                    warningType: u.pj.LIKELY_ATO,
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
                        description: v.intl.string(v.t['/uid3t']),
                        safetyTips: Z.map((e, t) =>
                            (0, i.jsxs)(
                                'div',
                                {
                                    className: _.tipContent,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-md/medium',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, i.jsx)(
                                            a.Text,
                                            {
                                                variant: 'text-sm/medium',
                                                color: 'header-secondary',
                                                children: e.description
                                            },
                                            t
                                        )
                                    ]
                                },
                                t
                            )
                        ),
                        actions: (0, i.jsx)(I, {
                            senderId: b,
                            channelId: t,
                            warningId: E,
                            onClick: () => {
                                T(h.NM.USER_MODAL_MUTE), r();
                            }
                        }),
                        learnMore: (0, i.jsx)(a.Clickable, {
                            onClick: () =>
                                (0, h.qc)({
                                    channelId: t,
                                    warningId: E,
                                    senderId: b,
                                    warningType: u.pj.LIKELY_ATO,
                                    cta: h.NM.USER_MODAL_LEARN_MORE
                                }),
                            children: (0, i.jsx)(a.Heading, {
                                variant: 'heading-sm/medium',
                                color: 'text-link',
                                children: v.intl.format(v.t.UkH129, { learnMoreLink: g.D8 })
                            })
                        })
                    });
                };
            });
        };
    return (l.useEffect(() => {
        S &&
            ((0, h.MC)(C.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: E,
                senderId: b,
                warningType: u.pj.LIKELY_ATO
            }),
            o.Z.increment({ name: r.V.SAFETY_WARNING_VIEW }));
    }, [t, E, b, S]),
    S)
        ? (0, i.jsx)(p.Q, {
              channelId: t,
              warningId: E,
              senderId: b,
              warningType: u.pj.LIKELY_ATO,
              header: v.intl.string(v.t.R8UsiI),
              description: v.intl.string(v.t.lI8nQk),
              onDismiss: N,
              buttons: [
                  {
                      text: v.intl.string(v.t.tC1pvL),
                      color: a.Button.Colors.BRAND,
                      onclick: () => {
                          j(),
                              (0, h.qc)({
                                  channelId: t,
                                  warningId: E,
                                  senderId: b,
                                  warningType: u.pj.LIKELY_ATO,
                                  cta: h.NM.OPEN_MORE_TIPS
                              });
                      }
                  },
                  {
                      text: v.intl.string(v.t.ftIK2N),
                      color: a.Button.Colors.PRIMARY,
                      onclick: () => T(h.NM.USER_BANNER_MUTE)
                  }
              ]
          })
        : null;
}
