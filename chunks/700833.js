n.d(t, {
    Md: () => h,
    a0: () => p
});
var r = n(200651);
n(192379);
var i = n(392711),
    l = n(481060),
    s = n(246364),
    a = n(405545),
    o = n(382574),
    c = n(279988),
    u = n(786127),
    d = n(388032);
function m(e) {
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
function p(e) {
    let { dropHoveredIndex: t, formField: p, guild: h, index: x, isDragEnabled: b, submittedGuildJoinRequestsCount: j, removeFormField: _, updateFormField: v, updateFormFieldOrder: O, canRemove: C, actionsLocation: y, fieldStyle: N } = e,
        I = async () => {
            await _(x);
        },
        E = async (e) => {
            await v(x, e);
        },
        S = async (e, t, n) => {
            await O(e, t, n);
        },
        T = (0, i.uniqueId)(),
        P = t === x,
        w = {
            key: T,
            index: x,
            isDragEnabled: b,
            isDropHovered: P,
            onEdit: () => {
                0 === j
                    ? f(p, E, h)
                    : (0, l.ZDy)(async () => {
                          let { default: e } = await n.e('74673').then(n.bind(n, 394045));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  g(m({}, t), {
                                      guildId: h.id,
                                      submittedGuildJoinRequestsCount: j,
                                      onConfirm: () => f(p, E, h)
                                  })
                              );
                      });
            },
            onRemove: I,
            onDrop: S,
            canRemove: C,
            actionsLocation: y,
            fieldStyle: N
        };
    switch (p.field_type) {
        case s.QJ.TERMS:
            return (0, r.jsx)(
                c.Z,
                m(
                    {
                        channelId: h.rulesChannelId,
                        title: N === s.it.COMPACT ? d.intl.string(d.t['55+giY']) : d.intl.string(d.t['53vNcH']),
                        formField: p
                    },
                    w
                )
            );
        case s.QJ.PARAGRAPH:
            return (0, r.jsx)(o.Z, m({ formField: p }, w));
        case s.QJ.TEXT_INPUT:
            return (0, r.jsx)(u.Z, m({ formField: p }, w));
        case s.QJ.MULTIPLE_CHOICE:
            return (0, r.jsx)(a.Z, m({ formField: p }, w));
        default:
            return null;
    }
}
function h(e, t, i) {
    switch (e) {
        case s.QJ.TERMS:
            return (0, l.ZDy)(async () => {
                let { default: e } = await n.e('5945').then(n.bind(n, 92451));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        g(m({}, n), {
                            field: void 0,
                            onSave: t,
                            guild: i
                        })
                    );
            });
        case s.QJ.PARAGRAPH:
            return (0, l.ZDy)(async () => {
                let { ParagraphFormFieldModal: e } = await n.e('6595').then(n.bind(n, 457042));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        g(m({}, n), {
                            field: void 0,
                            onSave: t
                        })
                    );
            });
        case s.QJ.TEXT_INPUT:
            return (0, l.ZDy)(async () => {
                let { TextInputFormFieldModal: e } = await n.e('6595').then(n.bind(n, 457042));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        g(m({}, n), {
                            field: void 0,
                            onSave: t
                        })
                    );
            });
        case s.QJ.MULTIPLE_CHOICE:
            return (0, l.ZDy)(async () => {
                let { default: e } = await n.e('94064').then(n.bind(n, 607569));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        g(m({}, n), {
                            field: void 0,
                            onSave: t
                        })
                    );
            });
    }
}
function f(e, t, i) {
    switch (e.field_type) {
        case s.QJ.TERMS:
            return (0, l.ZDy)(async () => {
                let { default: l } = await n.e('5945').then(n.bind(n, 92451));
                return (n) =>
                    (0, r.jsx)(
                        l,
                        g(m({}, n), {
                            field: e,
                            onSave: t,
                            guild: i
                        })
                    );
            });
        case s.QJ.PARAGRAPH:
            return (0, l.ZDy)(async () => {
                let { ParagraphFormFieldModal: i } = await n.e('6595').then(n.bind(n, 457042));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        g(m({}, n), {
                            field: e,
                            onSave: t
                        })
                    );
            });
        case s.QJ.TEXT_INPUT:
            return (0, l.ZDy)(async () => {
                let { TextInputFormFieldModal: i } = await n.e('6595').then(n.bind(n, 457042));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        g(m({}, n), {
                            field: e,
                            onSave: t
                        })
                    );
            });
        case s.QJ.MULTIPLE_CHOICE:
            return (0, l.ZDy)(async () => {
                let { default: i } = await n.e('94064').then(n.bind(n, 607569));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        g(m({}, n), {
                            field: e,
                            onSave: t
                        })
                    );
            });
    }
}
