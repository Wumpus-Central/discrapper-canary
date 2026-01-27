n.d(t, {
    Bx: () => u,
    is: () => d,
    rI: () => _,
    w2: () => E,
});
var r = n(627968);
n(64700);
var i = n(314116),
    l = n(397927),
    o = n(411335),
    a = n(985018);

function s(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function c(e, t) {
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

function u(e) {
    return {
        [o.AH.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, l.mMO)(async () => {
                    let { default: i } = await n.e("35023").then(n.bind(n, 148210));
                    return (n) => {
                        var l;
                        return (0, r.jsx)(
                            i,
                            c(
                                s(
                                    {
                                        initialCustomMessage: null != (l = t.metadata.customMessage) ? l : "",
                                        onSubmit: (r) => {
                                            (t.metadata.customMessage = r), e(t), n.onClose();
                                        },
                                    },
                                    n,
                                ),
                                {
                                    onClose: () => (e(null), n.onClose()),
                                },
                            ),
                        );
                    };
                });
            }),
        [o.AH.FLAG_TO_CHANNEL]: (t, i) =>
            new Promise((a) => {
                (0, l.mMO)(async () => {
                    let { default: l } = await n.e("65341").then(n.bind(n, 158956)),
                        u = t.actions.find((e) => e.type === o.AH.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, r.jsx)(
                            l,
                            c(
                                s(
                                    {
                                        action: i,
                                        isEdit: null != u,
                                        triggerType: t.triggerType,
                                        guildId: e,
                                        onEditChannel: (e) => {
                                            (i.metadata.channelId = e), t.exemptChannels.add(e), a(i), n.onClose();
                                        },
                                    },
                                    n,
                                ),
                                {
                                    onClose: () => (a(null), n.onClose()),
                                },
                            ),
                        );
                });
            }),
        [o.AH.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((i) => {
                (0, l.mMO)(async () => {
                    let { default: l } = await n.e("21932").then(n.bind(n, 16039)),
                        a = e.actions.find((e) => e.type === o.AH.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, r.jsx)(
                            l,
                            c(
                                s(
                                    {
                                        action: t,
                                        isEdit: null != a,
                                        triggerType: e.triggerType,
                                        onUpdateDuration: (e) => {
                                            null != e && (t.metadata.durationSeconds = e), i(t), n.onClose();
                                        },
                                    },
                                    n,
                                ),
                                {
                                    onClose: () => (i(null), n.onClose()),
                                },
                            ),
                        );
                });
            }),
    };
}

function E(e, t, i, o) {
    (0, l.mMO)(async () => {
        let { default: l } = await n.e("15112").then(n.bind(n, 794267));
        return (n) =>
            (0, r.jsx)(
                l,
                c(s({}, n), {
                    automodDecision: {
                        messageId: e,
                        messageContent: t,
                        decisionId: i,
                        channel: o,
                    },
                }),
            );
    });
}

function d(e, t) {
    (0, l.mMO)(async () => {
        let { default: i } = await n.e("7133").then(n.bind(n, 580812));
        return (n) =>
            (0, r.jsx)(
                i,
                c(s({}, n), {
                    messageId: e,
                    guildId: t,
                }),
            );
    });
}

function _(e) {
    (0, i.A)({
        title: a.intl.string(a.t.wLGrjB),
        subtitle: a.intl.string(a.t.arYQ2X),
        confirmText: a.intl.string(a.t["cY+Oob"]),
        onConfirm: e,
    });
}
