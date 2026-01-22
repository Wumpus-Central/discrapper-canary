n.d(t, {
    Bx: () => f,
    is: () => _,
    rI: () => h,
    w2: () => p,
});
var r = n(627968);
n(64700);
var i = n(314116),
    a = n(397927),
    s = n(411335),
    o = n(985018);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let t = (e, t) =>
            new Promise((e) => {
                (0, a.mMO)(async () => {
                    let { default: i } = await n.e("35023").then(n.bind(n, 148210));
                    return (n) => {
                        var a;
                        return (0, r.jsx)(
                            i,
                            d(
                                c(
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
        i = (t, i) =>
            new Promise((o) => {
                (0, a.mMO)(async () => {
                    let { default: a } = await n.e("65341").then(n.bind(n, 158956)),
                        l = t.actions.find((e) => e.type === s.AH.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, r.jsx)(
                            a,
                            d(
                                c(
                                    {
                                        action: i,
                                        isEdit: null != l,
                                        triggerType: t.triggerType,
                                        guildId: e,
                                        onEditChannel: (e) => {
                                            (i.metadata.channelId = e), t.exemptChannels.add(e), o(i), n.onClose();
                                        },
                                    },
                                    n,
                                ),
                                { onClose: () => (o(null), n.onClose()) },
                            ),
                        );
                });
            }),
        o = (e, t) =>
            new Promise((i) => {
                (0, a.mMO)(async () => {
                    let { default: a } = await n.e("21932").then(n.bind(n, 16039)),
                        o = e.actions.find((e) => e.type === s.AH.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, r.jsx)(
                            a,
                            d(
                                c(
                                    {
                                        action: t,
                                        isEdit: null != o,
                                        triggerType: e.triggerType,
                                        onUpdateDuration: (e) => {
                                            null != e && (t.metadata.durationSeconds = e), i(t), n.onClose();
                                        },
                                    },
                                    n,
                                ),
                                { onClose: () => (i(null), n.onClose()) },
                            ),
                        );
                });
            });
    return {
        [s.AH.BLOCK_MESSAGE]: t,
        [s.AH.FLAG_TO_CHANNEL]: i,
        [s.AH.USER_COMMUNICATION_DISABLED]: o,
    };
}
function p(e, t, i, s) {
    (0, a.mMO)(async () => {
        let { default: a } = await n.e("15112").then(n.bind(n, 794267));
        return (n) =>
            (0, r.jsx)(
                a,
                d(c({}, n), {
                    automodDecision: {
                        messageId: e,
                        messageContent: t,
                        decisionId: i,
                        channel: s,
                    },
                }),
            );
    });
}
function _(e, t) {
    (0, a.mMO)(async () => {
        let { default: i } = await n.e("7133").then(n.bind(n, 580812));
        return (n) =>
            (0, r.jsx)(
                i,
                d(c({}, n), {
                    messageId: e,
                    guildId: t,
                }),
            );
    });
}
function h(e) {
    (0, i.A)({
        title: o.intl.string(o.t.wLGrjB),
        subtitle: o.intl.string(o.t.arYQ2X),
        confirmText: o.intl.string(o.t["cY+Oob"]),
        onConfirm: e,
    });
}
