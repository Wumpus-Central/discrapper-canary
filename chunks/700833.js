n.d(t, {
    Md: () => b,
    a0: () => m,
});
var r = n(54381);
n(473749);
var i = n(392711),
    l = n(481060),
    a = n(246364),
    s = n(405545),
    o = n(382574),
    c = n(279988),
    d = n(786127),
    u = n(388032);
function g(e) {
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
function f(e, t) {
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
function m(e) {
    let {
            dropHoveredIndex: t,
            formField: m,
            guild: b,
            index: h,
            isDragEnabled: x,
            submittedGuildJoinRequestsCount: j,
            removeFormField: v,
            updateFormField: O,
            updateFormFieldOrder: C,
            canRemove: y,
            actionsLocation: N,
            fieldStyle: E,
        } = e,
        I = async () => {
            await v(h);
        },
        S = async (e) => {
            await O(h, e);
        },
        _ = async (e, t, n) => {
            await C(e, t, n);
        },
        T = (0, i.uniqueId)(),
        P = t === h,
        w = {
            key: T,
            index: h,
            isDragEnabled: x,
            isDropHovered: P,
            onEdit: () => {
                0 === j
                    ? p(m, S, b)
                    : (0, l.ZDy)(async () => {
                          let { default: e } = await n.e("74673").then(n.bind(n, 394045));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  f(g({}, t), {
                                      guildId: b.id,
                                      submittedGuildJoinRequestsCount: j,
                                      onConfirm: () => p(m, S, b),
                                  }),
                              );
                      });
            },
            onRemove: I,
            onDrop: _,
            canRemove: y,
            actionsLocation: N,
            fieldStyle: E,
        };
    switch (m.field_type) {
        case a.QJ.TERMS:
            return (0, r.jsx)(
                c.Z,
                g(
                    {
                        channelId: b.rulesChannelId,
                        title: E === a.it.COMPACT ? u.intl.string(u.t["55+gic"]) : u.intl.string(u.t["53vNcB"]),
                        formField: m,
                    },
                    w,
                ),
            );
        case a.QJ.PARAGRAPH:
            return (0, r.jsx)(o.Z, g({ formField: m }, w));
        case a.QJ.TEXT_INPUT:
            return (0, r.jsx)(d.Z, g({ formField: m }, w));
        case a.QJ.MULTIPLE_CHOICE:
            return (0, r.jsx)(s.Z, g({ formField: m }, w));
        default:
            return null;
    }
}
function b(e, t, i) {
    switch (e) {
        case a.QJ.TERMS:
            return (0, l.ZDy)(async () => {
                let { default: e } = await n.e("5945").then(n.bind(n, 92451));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        f(g({}, n), {
                            field: void 0,
                            onSave: t,
                            guild: i,
                        }),
                    );
            });
        case a.QJ.PARAGRAPH:
            return (0, l.ZDy)(async () => {
                let { ParagraphFormFieldModal: e } = await n.e("6595").then(n.bind(n, 457042));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        f(g({}, n), {
                            field: void 0,
                            onSave: t,
                        }),
                    );
            });
        case a.QJ.TEXT_INPUT:
            return (0, l.ZDy)(async () => {
                let { TextInputFormFieldModal: e } = await n.e("6595").then(n.bind(n, 457042));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        f(g({}, n), {
                            field: void 0,
                            onSave: t,
                        }),
                    );
            });
        case a.QJ.MULTIPLE_CHOICE:
            return (0, l.ZDy)(async () => {
                let { default: e } = await n.e("94064").then(n.bind(n, 607569));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        f(g({}, n), {
                            field: void 0,
                            onSave: t,
                        }),
                    );
            });
    }
}
function p(e, t, i) {
    switch (e.field_type) {
        case a.QJ.TERMS:
            return (0, l.ZDy)(async () => {
                let { default: l } = await n.e("5945").then(n.bind(n, 92451));
                return (n) =>
                    (0, r.jsx)(
                        l,
                        f(g({}, n), {
                            field: e,
                            onSave: t,
                            guild: i,
                        }),
                    );
            });
        case a.QJ.PARAGRAPH:
            return (0, l.ZDy)(async () => {
                let { ParagraphFormFieldModal: i } = await n.e("6595").then(n.bind(n, 457042));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        f(g({}, n), {
                            field: e,
                            onSave: t,
                        }),
                    );
            });
        case a.QJ.TEXT_INPUT:
            return (0, l.ZDy)(async () => {
                let { TextInputFormFieldModal: i } = await n.e("6595").then(n.bind(n, 457042));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        f(g({}, n), {
                            field: e,
                            onSave: t,
                        }),
                    );
            });
        case a.QJ.MULTIPLE_CHOICE:
            return (0, l.ZDy)(async () => {
                let { default: i } = await n.e("94064").then(n.bind(n, 607569));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        f(g({}, n), {
                            field: e,
                            onSave: t,
                        }),
                    );
            });
    }
}
