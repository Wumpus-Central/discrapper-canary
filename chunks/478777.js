n.d(t, {
    Z: () => j,
    u: () => _,
});
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(796027),
    s = n(481060),
    o = n(710344),
    c = n(63063),
    d = n(999382),
    u = n(190007),
    g = n(926958),
    m = n(964821),
    p = n(981631),
    f = n(290511),
    h = n(388032),
    b = n(407810);
function x(e) {
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
function j(e) {
    let { saveOnClose: t } = e,
        a = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
        j = (0, l.e7)([g.Z], () => g.Z.getEditedConnections()),
        _ = (0, l.e7)([g.Z], () => g.Z.isSubmitting()),
        v = i.useRef(a);
    i.useEffect(() => {
        v.current = a;
    }, [a]),
        i.useEffect(() => {
            let { current: e } = v;
            return () => {
                t && null != e && (0, u.ss)(e);
            };
        }, [t, a]);
    let O = i.useCallback(() => {
            null != a &&
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e("11798").then(n.bind(n, 8656));
                    return (t) => (0, r.jsx)(e, x({}, t));
                });
        }, [a]),
        C = i.useMemo(
            () =>
                j.map((e) => {
                    var t, n;
                    return (
                        (t = x({}, e)),
                        (n = n = { id: (0, f.a4)(e) }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t
                    );
                }),
            [j],
        ),
        y = i.useCallback((e) => {
            let t = e.map((e) => {
                var { id: t } = e;
                return (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                    }
                    return i;
                })(e, ["id"]);
            });
            (0, u.l_)(t);
        }, []),
        { handleDragStart: N, handleDragReset: E, handleDragComplete: I, draggingId: S } = (0, o.Z)(C, y);
    if (null == a) return null;
    let T = j.length < f.yx;
    return (0, r.jsx)("div", {
        className: b.container,
        children: (0, r.jsxs)("div", {
            className: b.connectionsSection,
            children: [
                (0, r.jsxs)("div", {
                    className: b.connectionsSectionHeader,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: "heading-lg/bold",
                            children: h.intl.string(h.t.Cl8F8H),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: h.intl.format(h.t.vqgyJR, {
                                linkedRolesUrl: c.Z.getArticleURL(p.BhN.CONNECTION_DETAILS_ADMIN),
                            }),
                        }),
                    ],
                }),
                j.length > 0 &&
                    (0, r.jsx)("div", {
                        className: b.connectionsList,
                        children: C.map((e, t) =>
                            (0, r.jsx)(
                                m.Z,
                                {
                                    connection: e,
                                    index: t,
                                    onDragStart: N,
                                    onDragReset: E,
                                    onDragComplete: I,
                                    draggingId: S,
                                },
                                e.id,
                            ),
                        ),
                    }),
                (0, r.jsxs)("button", {
                    className: b.addConnectionButton,
                    onClick: O,
                    disabled: !T || _,
                    type: "button",
                    children: [
                        (0, r.jsx)(s.oFk, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "text-brand",
                            children: h.intl.string(h.t["03EqaC"]),
                        }),
                    ],
                }),
                !T &&
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: h.intl.format(h.t.Nc7guW, { max: f.yx }),
                    }),
            ],
        }),
    });
}
function _() {
    let e = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
        t = (0, l.e7)([g.Z], () => g.Z.isSubmitting()),
        n = (0, l.e7)([g.Z], () => g.Z.getErrors());
    if (null == e) return null;
    let i = n.length > 0;
    return (0, r.jsx)(a.Z, {
        onSave: () => {
            i || (0, u.e$)(e);
        },
        onReset: u.Pk,
        submitting: t,
        onSaveText: h.intl.string(h.t["R3BPH+"]),
        disabled: i,
        errorMessage: i
            ? (0, r.jsx)("div", {
                  className: b.errorsContainer,
                  children: (0, r.jsx)("ul", {
                      className: b.errorsList,
                      children: n.map((e, t) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: b.errorRow,
                                  children: [
                                      (0, r.jsx)(s.Mgn, {
                                          size: "sm",
                                          color: "currentColor",
                                      }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-feedback-critical",
                                          children: e,
                                      }),
                                  ],
                              },
                              t,
                          ),
                      ),
                  }),
              })
            : null,
    });
}
