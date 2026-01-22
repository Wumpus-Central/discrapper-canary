n.d(t, {
    PV: () => m,
    Td: () => b,
});
var r = n(627968);
n(64700);
var i = n(735438),
    l = n(397927),
    s = n(513461),
    a = n(910919),
    c = n(286056),
    o = n(645745),
    d = n(468287),
    u = n(985018);
function f(e) {
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
function g(e, t) {
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
function b(e) {
    let {
            dropHoveredIndex: t,
            formField: b,
            guild: m,
            index: x,
            isDragEnabled: h,
            submittedGuildJoinRequestsCount: j,
            removeFormField: O,
            updateFormField: y,
            updateFormFieldOrder: v,
            canRemove: A,
            actionsLocation: E,
            fieldStyle: N,
        } = e,
        _ = async () => {
            await O(x);
        },
        S = async (e) => {
            await y(x, e);
        },
        T = async (e, t, n) => {
            await v(e, t, n);
        },
        I = (0, i.uniqueId)(),
        C = t === x,
        P = {
            key: I,
            index: x,
            isDragEnabled: h,
            isDropHovered: C,
            onEdit: () => {
                0 === j
                    ? p(b, S, m)
                    : (0, l.mMO)(async () => {
                          let { default: e } = await n.e("5705").then(n.bind(n, 83024));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  g(f({}, t), {
                                      guildId: m.id,
                                      submittedGuildJoinRequestsCount: j,
                                      onConfirm: () => p(b, S, m),
                                  }),
                              );
                      });
            },
            onRemove: _,
            onDrop: T,
            canRemove: A,
            actionsLocation: E,
            fieldStyle: N,
        };
    switch (b.field_type) {
        case s.rX.TERMS:
            return (0, r.jsx)(
                o.A,
                f(
                    {
                        channelId: m.rulesChannelId,
                        title: N === s.Vf.COMPACT ? u.intl.string(u.t["55+gic"]) : u.intl.string(u.t["53vNcB"]),
                        formField: b,
                    },
                    P,
                ),
            );
        case s.rX.PARAGRAPH:
            return (0, r.jsx)(c.A, f({ formField: b }, P));
        case s.rX.TEXT_INPUT:
            return (0, r.jsx)(d.A, f({ formField: b }, P));
        case s.rX.MULTIPLE_CHOICE:
            return (0, r.jsx)(a.A, f({ formField: b }, P));
        default:
            return null;
    }
}
function m(e, t, i) {
    switch (e) {
        case s.rX.TERMS:
            return (0, l.mMO)(async () => {
                let { default: e } = await n.e("32435").then(n.bind(n, 24094));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        g(f({}, n), {
                            field: void 0,
                            onSave: t,
                            guild: i,
                        }),
                    );
            });
        case s.rX.PARAGRAPH:
            return (0, l.mMO)(async () => {
                let { ParagraphFormFieldModal: e } = await n.e("26510").then(n.bind(n, 542717));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        g(f({}, n), {
                            field: void 0,
                            onSave: t,
                        }),
                    );
            });
        case s.rX.TEXT_INPUT:
            return (0, l.mMO)(async () => {
                let { TextInputFormFieldModal: e } = await n.e("26510").then(n.bind(n, 542717));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        g(f({}, n), {
                            field: void 0,
                            onSave: t,
                        }),
                    );
            });
        case s.rX.MULTIPLE_CHOICE:
            return (0, l.mMO)(async () => {
                let { default: e } = await n.e("52981").then(n.bind(n, 520660));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        g(f({}, n), {
                            field: void 0,
                            onSave: t,
                        }),
                    );
            });
    }
}
function p(e, t, i) {
    switch (e.field_type) {
        case s.rX.TERMS:
            return (0, l.mMO)(async () => {
                let { default: l } = await n.e("32435").then(n.bind(n, 24094));
                return (n) =>
                    (0, r.jsx)(
                        l,
                        g(f({}, n), {
                            field: e,
                            onSave: t,
                            guild: i,
                        }),
                    );
            });
        case s.rX.PARAGRAPH:
            return (0, l.mMO)(async () => {
                let { ParagraphFormFieldModal: i } = await n.e("26510").then(n.bind(n, 542717));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        g(f({}, n), {
                            field: e,
                            onSave: t,
                        }),
                    );
            });
        case s.rX.TEXT_INPUT:
            return (0, l.mMO)(async () => {
                let { TextInputFormFieldModal: i } = await n.e("26510").then(n.bind(n, 542717));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        g(f({}, n), {
                            field: e,
                            onSave: t,
                        }),
                    );
            });
        case s.rX.MULTIPLE_CHOICE:
            return (0, l.mMO)(async () => {
                let { default: i } = await n.e("52981").then(n.bind(n, 520660));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        g(f({}, n), {
                            field: e,
                            onSave: t,
                        }),
                    );
            });
    }
}
