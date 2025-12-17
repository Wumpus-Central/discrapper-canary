n.d(t, {
    Z: () => j,
    u: () => v,
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
    f = n(964821),
    m = n(981631),
    b = n(290511),
    p = n(388032),
    h = n(163022);
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
        v = (0, l.e7)([g.Z], () => g.Z.isSubmitting()),
        O = i.useRef(a);
    i.useEffect(() => {
        O.current = a;
    }, [a]),
        i.useEffect(() => {
            let { current: e } = O;
            return () => {
                t && null != e && (0, u.ss)(e);
            };
        }, [t, a]);
    let C = i.useCallback(() => {
            null != a &&
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e("11798").then(n.bind(n, 8656));
                    return (t) => (0, r.jsx)(e, x({}, t));
                });
        }, [a]),
        y = i.useMemo(
            () =>
                j.map((e) => {
                    var t, n;
                    return (
                        (t = x({}, e)),
                        (n = n = { id: (0, b.a4)(e) }),
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
        N = i.useCallback((e) => {
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
        { handleDragStart: E, handleDragReset: I, handleDragComplete: S, draggingId: _ } = (0, o.Z)(y, N);
    if (null == a) return null;
    let T = j.length < b.yx;
    return (0, r.jsx)("div", {
        className: h.container,
        children: (0, r.jsxs)("div", {
            className: h.connectionsSection,
            children: [
                (0, r.jsxs)("div", {
                    className: h.connectionsSectionHeader,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: "heading-lg/bold",
                            children: p.intl.string(p.t.Cl8F8H),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: p.intl.format(p.t.vqgyJR, {
                                linkedRolesUrl: c.Z.getArticleURL(m.BhN.CONNECTION_DETAILS_ADMIN),
                            }),
                        }),
                    ],
                }),
                j.length > 0 &&
                    (0, r.jsx)("div", {
                        className: h.connectionsList,
                        children: y.map((e, t) =>
                            (0, r.jsx)(
                                f.Z,
                                {
                                    connection: e,
                                    index: t,
                                    onDragStart: E,
                                    onDragReset: I,
                                    onDragComplete: S,
                                    draggingId: _,
                                },
                                e.id,
                            ),
                        ),
                    }),
                (0, r.jsxs)("button", {
                    className: h.addConnectionButton,
                    onClick: C,
                    disabled: !T || v,
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
                            children: p.intl.string(p.t["03EqaC"]),
                        }),
                    ],
                }),
                !T &&
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: p.intl.format(p.t.Nc7guW, { max: b.yx }),
                    }),
            ],
        }),
    });
}
function v() {
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
        onSaveText: p.intl.string(p.t["R3BPH+"]),
        disabled: i,
        errorMessage: i
            ? (0, r.jsx)("div", {
                  className: h.errorsContainer,
                  children: (0, r.jsx)("ul", {
                      className: h.errorsList,
                      children: n.map((e, t) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: h.errorRow,
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
