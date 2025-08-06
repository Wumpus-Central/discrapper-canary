n.d(t, {
    UV: () => p,
    _s: () => f,
    kW: () => _,
    km: () => d,
});
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(273504),
    a = n(388032);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e) {
    let t = (e, t) =>
            new Promise((e) => {
                (0, i.ZDy)(async () => {
                    let { default: i } = await n.e("94005").then(n.bind(n, 144462));
                    return (n) => {
                        var o;
                        return (0, r.jsx)(
                            i,
                            u(
                                l(
                                    {
                                        initialCustomMessage: null != (o = t.metadata.customMessage) ? o : "",
                                        onSubmit: (r) => {
                                            (t.metadata.customMessage = r), e(t), n.onClose();
                                        },
                                    },
                                    n,
                                ),
                                { onClose: () => (e(null), n.onClose()) },
                            ),
                        );
                    };
                });
            }),
        a = (t, a) =>
            new Promise((s) => {
                (0, i.ZDy)(async () => {
                    let { default: i } = await n.e("74543").then(n.bind(n, 643611)),
                        c = t.actions.find((e) => e.type === o.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            u(
                                l(
                                    {
                                        action: a,
                                        isEdit: null != c,
                                        triggerType: t.triggerType,
                                        guildId: e,
                                        onEditChannel: (e) => {
                                            (a.metadata.channelId = e), t.exemptChannels.add(e), s(a), n.onClose();
                                        },
                                    },
                                    n,
                                ),
                                { onClose: () => (s(null), n.onClose()) },
                            ),
                        );
                });
            }),
        s = (e, t) =>
            new Promise((a) => {
                (0, i.ZDy)(async () => {
                    let { default: i } = await n.e("78273").then(n.bind(n, 41767)),
                        s = e.actions.find((e) => e.type === o.jj.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            u(
                                l(
                                    {
                                        action: t,
                                        isEdit: null != s,
                                        triggerType: e.triggerType,
                                        onUpdateDuration: (e) => {
                                            null != e && (t.metadata.durationSeconds = e), a(t), n.onClose();
                                        },
                                    },
                                    n,
                                ),
                                { onClose: () => (a(null), n.onClose()) },
                            ),
                        );
                });
            });
    return {
        [o.jj.BLOCK_MESSAGE]: t,
        [o.jj.FLAG_TO_CHANNEL]: a,
        [o.jj.USER_COMMUNICATION_DISABLED]: s,
    };
}
function f(e, t, o, a) {
    (0, i.ZDy)(async () => {
        let { default: i } = await n.e("37483").then(n.bind(n, 241046));
        return (n) =>
            (0, r.jsx)(
                i,
                u(l({}, n), {
                    automodDecision: {
                        messageId: e,
                        messageContent: t,
                        decisionId: o,
                        channel: a,
                    },
                }),
            );
    });
}
function _(e, t) {
    (0, i.ZDy)(async () => {
        let { default: i } = await n.e("28382").then(n.bind(n, 537623));
        return (n) =>
            (0, r.jsx)(
                i,
                u(l({}, n), {
                    messageId: e,
                    guildId: t,
                }),
            );
    });
}
function p(e) {
    (0, i.h7j)((t) =>
        (0, r.jsx)(
            i.ConfirmModal,
            u(
                l(
                    {
                        header: a.intl.string(a.t.wLGrjI),
                        confirmText: a.intl.string(a.t["cY+Ooa"]),
                        onConfirm: e,
                        cancelText: a.intl.string(a.t["ETE/oK"]),
                    },
                    t,
                ),
                {
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: a.intl.string(a.t.arYQ2d),
                    }),
                },
            ),
        ),
    );
}
