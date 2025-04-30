n.d(t, {
    UV: () => E,
    _s: () => u,
    kW: () => d,
    km: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(273504),
    o = n(388032);
function a(e) {
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
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e) {
    return {
        [l.jj.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, i.ZDy)(async () => {
                    let { default: i } = await n.e('94005').then(n.bind(n, 144462));
                    return (n) => {
                        var l;
                        return (0, r.jsx)(
                            i,
                            s(
                                a(
                                    {
                                        initialCustomMessage: null != (l = t.metadata.customMessage) ? l : '',
                                        onSubmit: (r) => {
                                            (t.metadata.customMessage = r), e(t), n.onClose();
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
        [l.jj.FLAG_TO_CHANNEL]: (t, o) =>
            new Promise((c) => {
                (0, i.ZDy)(async () => {
                    let { default: i } = await n.e('74543').then(n.bind(n, 643611)),
                        u = t.actions.find((e) => e.type === l.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            s(
                                a(
                                    {
                                        action: o,
                                        isEdit: null != u,
                                        triggerType: t.triggerType,
                                        guildId: e,
                                        onEditChannel: (e) => {
                                            (o.metadata.channelId = e), t.exemptChannels.add(e), c(o), n.onClose();
                                        }
                                    },
                                    n
                                ),
                                { onClose: () => (c(null), n.onClose()) }
                            )
                        );
                });
            }),
        [l.jj.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((o) => {
                (0, i.ZDy)(async () => {
                    let { default: i } = await n.e('78273').then(n.bind(n, 41767)),
                        c = e.actions.find((e) => e.type === l.jj.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            s(
                                a(
                                    {
                                        action: t,
                                        isEdit: null != c,
                                        triggerType: e.triggerType,
                                        onUpdateDuration: (e) => {
                                            null != e && (t.metadata.durationSeconds = e), o(t), n.onClose();
                                        }
                                    },
                                    n
                                ),
                                { onClose: () => (o(null), n.onClose()) }
                            )
                        );
                });
            })
    };
}
function u(e, t, l, o) {
    (0, i.ZDy)(async () => {
        let { default: i } = await n.e('37483').then(n.bind(n, 241046));
        return (n) =>
            (0, r.jsx)(
                i,
                s(a({}, n), {
                    automodDecision: {
                        messageId: e,
                        messageContent: t,
                        decisionId: l,
                        channel: o
                    }
                })
            );
    });
}
function d(e, t) {
    (0, i.ZDy)(async () => {
        let { default: i } = await n.e('28382').then(n.bind(n, 537623));
        return (n) =>
            (0, r.jsx)(
                i,
                s(a({}, n), {
                    messageId: e,
                    guildId: t
                })
            );
    });
}
function E(e) {
    (0, i.h7j)((t) =>
        (0, r.jsx)(
            i.ConfirmModal,
            s(
                a(
                    {
                        header: o.intl.string(o.t.wLGrjI),
                        confirmText: o.intl.string(o.t['cY+Ooa']),
                        onConfirm: e,
                        cancelText: o.intl.string(o.t['ETE/oK'])
                    },
                    t
                ),
                {
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        children: o.intl.string(o.t.arYQ2d)
                    })
                }
            )
        )
    );
}
