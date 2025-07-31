n.d(t, {
    UV: () => h,
    _s: () => d,
    kW: () => u,
    km: () => c
});
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(273504),
    o = n(388032);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function a(e, t) {
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
function c(e) {
    return {
        [l.jj.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, r.ZDy)(async () => {
                    let { default: r } = await n.e('94005').then(n.bind(n, 144462));
                    return (n) => {
                        var l;
                        return (0, i.jsx)(
                            r,
                            a(
                                s(
                                    {
                                        initialCustomMessage: null != (l = t.metadata.customMessage) ? l : '',
                                        onSubmit: (i) => {
                                            ((t.metadata.customMessage = i), e(t), n.onClose());
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
                (0, r.ZDy)(async () => {
                    let { default: r } = await n.e('74543').then(n.bind(n, 643611)),
                        d = t.actions.find((e) => e.type === l.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, i.jsx)(
                            r,
                            a(
                                s(
                                    {
                                        action: o,
                                        isEdit: null != d,
                                        triggerType: t.triggerType,
                                        guildId: e,
                                        onEditChannel: (e) => {
                                            ((o.metadata.channelId = e), t.exemptChannels.add(e), c(o), n.onClose());
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
                (0, r.ZDy)(async () => {
                    let { default: r } = await n.e('78273').then(n.bind(n, 41767)),
                        c = e.actions.find((e) => e.type === l.jj.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, i.jsx)(
                            r,
                            a(
                                s(
                                    {
                                        action: t,
                                        isEdit: null != c,
                                        triggerType: e.triggerType,
                                        onUpdateDuration: (e) => {
                                            (null != e && (t.metadata.durationSeconds = e), o(t), n.onClose());
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
function d(e, t, l, o) {
    (0, r.ZDy)(async () => {
        let { default: r } = await n.e('37483').then(n.bind(n, 241046));
        return (n) =>
            (0, i.jsx)(
                r,
                a(s({}, n), {
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
function u(e, t) {
    (0, r.ZDy)(async () => {
        let { default: r } = await n.e('28382').then(n.bind(n, 537623));
        return (n) =>
            (0, i.jsx)(
                r,
                a(s({}, n), {
                    messageId: e,
                    guildId: t
                })
            );
    });
}
function h(e) {
    (0, r.h7j)((t) =>
        (0, i.jsx)(
            r.ConfirmModal,
            a(
                s(
                    {
                        header: o.intl.string(o.t.wLGrjI),
                        confirmText: o.intl.string(o.t['cY+Ooa']),
                        onConfirm: e,
                        cancelText: o.intl.string(o.t['ETE/oK'])
                    },
                    t
                ),
                {
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: o.intl.string(o.t.arYQ2d)
                    })
                }
            )
        )
    );
}
