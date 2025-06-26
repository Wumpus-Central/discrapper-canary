n.d(t, {
    UV: () => c,
    _s: () => h,
    kW: () => u,
    km: () => d
});
var i = n(255367);
n(73800);
var s = n(481060),
    r = n(273504),
    l = n(388032);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e) {
    return {
        [r.jj.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, s.ZDy)(async () => {
                    let { default: s } = await n.e('94005').then(n.bind(n, 144462));
                    return (n) => {
                        var r;
                        return (0, i.jsx)(
                            s,
                            o(
                                a(
                                    {
                                        initialCustomMessage: null != (r = t.metadata.customMessage) ? r : '',
                                        onSubmit: (i) => {
                                            (t.metadata.customMessage = i), e(t), n.onClose();
                                        }
                                    },
                                    n
                                ),
                                { onClose: () => (e(null), n.onClose()) }
                            )
                        );
                    };
                });
            }),
        [r.jj.FLAG_TO_CHANNEL]: (t, l) =>
            new Promise((d) => {
                (0, s.ZDy)(async () => {
                    let { default: s } = await n.e('74543').then(n.bind(n, 643611)),
                        h = t.actions.find((e) => e.type === r.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, i.jsx)(
                            s,
                            o(
                                a(
                                    {
                                        action: l,
                                        isEdit: null != h,
                                        triggerType: t.triggerType,
                                        guildId: e,
                                        onEditChannel: (e) => {
                                            (l.metadata.channelId = e), t.exemptChannels.add(e), d(l), n.onClose();
                                        }
                                    },
                                    n
                                ),
                                { onClose: () => (d(null), n.onClose()) }
                            )
                        );
                });
            }),
        [r.jj.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((l) => {
                (0, s.ZDy)(async () => {
                    let { default: s } = await n.e('78273').then(n.bind(n, 41767)),
                        d = e.actions.find((e) => e.type === r.jj.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, i.jsx)(
                            s,
                            o(
                                a(
                                    {
                                        action: t,
                                        isEdit: null != d,
                                        triggerType: e.triggerType,
                                        onUpdateDuration: (e) => {
                                            null != e && (t.metadata.durationSeconds = e), l(t), n.onClose();
                                        }
                                    },
                                    n
                                ),
                                { onClose: () => (l(null), n.onClose()) }
                            )
                        );
                });
            })
    };
}
function h(e, t, r, l) {
    (0, s.ZDy)(async () => {
        let { default: s } = await n.e('37483').then(n.bind(n, 241046));
        return (n) =>
            (0, i.jsx)(
                s,
                o(a({}, n), {
                    automodDecision: {
                        messageId: e,
                        messageContent: t,
                        decisionId: r,
                        channel: l
                    }
                })
            );
    });
}
function u(e, t) {
    (0, s.ZDy)(async () => {
        let { default: s } = await n.e('28382').then(n.bind(n, 537623));
        return (n) =>
            (0, i.jsx)(
                s,
                o(a({}, n), {
                    messageId: e,
                    guildId: t
                })
            );
    });
}
function c(e) {
    (0, s.h7j)((t) =>
        (0, i.jsx)(
            s.ConfirmModal,
            o(
                a(
                    {
                        header: l.intl.string(l.t.wLGrjI),
                        confirmText: l.intl.string(l.t['cY+Ooa']),
                        onConfirm: e,
                        cancelText: l.intl.string(l.t['ETE/oK'])
                    },
                    t
                ),
                {
                    children: (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: l.intl.string(l.t.arYQ2d)
                    })
                }
            )
        )
    );
}
