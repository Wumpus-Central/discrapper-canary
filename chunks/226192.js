n.d(t, {
    UV: () => _,
    _s: () => f,
    kW: () => p,
    km: () => d,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(273504),
    o = n(388032);
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
                        var a;
                        return (0, r.jsx)(
                            i,
                            u(
                                l(
                                    {
                                        initialCustomMessage: null != (a = t.metadata.customMessage) ? a : "",
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
        o = (t, o) =>
            new Promise((s) => {
                (0, i.ZDy)(async () => {
                    let { default: i } = await n.e("74543").then(n.bind(n, 643611)),
                        c = t.actions.find((e) => e.type === a.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            u(
                                l(
                                    {
                                        action: o,
                                        isEdit: null != c,
                                        triggerType: t.triggerType,
                                        guildId: e,
                                        onEditChannel: (e) => {
                                            (o.metadata.channelId = e), t.exemptChannels.add(e), s(o), n.onClose();
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
            new Promise((o) => {
                (0, i.ZDy)(async () => {
                    let { default: i } = await n.e("78273").then(n.bind(n, 41767)),
                        s = e.actions.find((e) => e.type === a.jj.USER_COMMUNICATION_DISABLED);
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
                                            null != e && (t.metadata.durationSeconds = e), o(t), n.onClose();
                                        },
                                    },
                                    n,
                                ),
                                { onClose: () => (o(null), n.onClose()) },
                            ),
                        );
                });
            });
    return {
        [a.jj.BLOCK_MESSAGE]: t,
        [a.jj.FLAG_TO_CHANNEL]: o,
        [a.jj.USER_COMMUNICATION_DISABLED]: s,
    };
}
function f(e, t, a, o) {
    (0, i.ZDy)(async () => {
        let { default: i } = await n.e("37483").then(n.bind(n, 241046));
        return (n) =>
            (0, r.jsx)(
                i,
                u(l({}, n), {
                    automodDecision: {
                        messageId: e,
                        messageContent: t,
                        decisionId: a,
                        channel: o,
                    },
                }),
            );
    });
}
function p(e, t) {
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
function _(e) {
    (0, i.h7j)((t) =>
        (0, r.jsx)(
            i.ConfirmModal,
            u(
                l(
                    {
                        header: o.intl.string(o.t.wLGrjB),
                        confirmText: o.intl.string(o.t["cY+Oob"]),
                        onConfirm: e,
                        cancelText: o.intl.string(o.t["ETE/oC"]),
                    },
                    t,
                ),
                {
                    children: (0, r.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: o.intl.string(o.t.arYQ2X),
                    }),
                },
            ),
        ),
    );
}
