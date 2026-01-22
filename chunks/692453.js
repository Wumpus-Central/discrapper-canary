n.d(t, {
    A: () => j,
    R: () => O,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(397927),
    c = n(219504),
    o = n(975571),
    d = n(555337),
    u = n(923121),
    f = n(352821),
    g = n(250006),
    b = n(652215),
    m = n(539916),
    p = n(985018),
    x = n(902973);

function h(e) {
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
        s = (0, l.bG)([d.A], () => d.A.getGuildId()),
        j = (0, l.bG)([f.A], () => f.A.getEditedConnections()),
        O = (0, l.bG)([f.A], () => f.A.isSubmitting()),
        y = i.useRef(s);
    i.useEffect(() => {
        y.current = s;
    }, [s]),
        i.useEffect(() => {
            let { current: e } = y;
            return () => {
                t && null != e && (0, u.fH)(e);
            };
        }, [t, s]);
    let v = i.useCallback(() => {
            null != s &&
                (0, a.mMO)(async () => {
                    let { default: e } = await n.e("90194").then(n.bind(n, 566857));
                    return (t) => (0, r.jsx)(e, h({}, t));
                });
        }, [s]),
        A = i.useMemo(
            () =>
                j.map((e) => {
                    var t, n;
                    return (
                        (t = h({}, e)),
                        (n = n =
                            {
                                id: (0, m.Sq)(e),
                            }),
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
        E = i.useCallback((e) => {
            let t = e.map((e) => {
                let { id: t } = e;
                return (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i,
                        l = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                            (r = n[i]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                        return l;
                    }
                    if (
                        ((l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.getOwnPropertyNames(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                            return i;
                        })(e, t)),
                        Object.getOwnPropertySymbols)
                    )
                        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                            (r = n[i]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                    return l;
                })(e, ["id"]);
            });
            (0, u.Bq)(t);
        }, []),
        { handleDragStart: N, handleDragReset: _, handleDragComplete: S, draggingId: T } = (0, c.A)(A, E);
    if (null == s) return null;
    let I = j.length < m.pA;
    return (0, r.jsx)("div", {
        className: x.kL,
        children: (0, r.jsxs)("div", {
            className: x.jx,
            children: [
                (0, r.jsxs)("div", {
                    className: x.G6,
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-lg/bold",
                            children: p.intl.string(p.t.Cl8F8H),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: p.intl.format(p.t.vqgyJR, {
                                linkedRolesUrl: o.A.getArticleURL(b.MVz.CONNECTION_DETAILS_ADMIN),
                            }),
                        }),
                    ],
                }),
                j.length > 0 &&
                    (0, r.jsx)("div", {
                        className: x.eF,
                        children: A.map((e, t) =>
                            (0, r.jsx)(
                                g.A,
                                {
                                    connection: e,
                                    index: t,
                                    onDragStart: N,
                                    onDragReset: _,
                                    onDragComplete: S,
                                    draggingId: T,
                                },
                                e.id,
                            ),
                        ),
                    }),
                (0, r.jsxs)("button", {
                    className: x.qG,
                    onClick: v,
                    disabled: !I || O,
                    type: "button",
                    children: [
                        (0, r.jsx)(a.U1e, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "text-brand",
                            children: p.intl.string(p.t["03EqaC"]),
                        }),
                    ],
                }),
                !I &&
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: p.intl.format(p.t.Nc7guW, {
                            max: m.pA,
                        }),
                    }),
            ],
        }),
    });
}

function O() {
    let e = (0, l.bG)([d.A], () => d.A.getGuildId()),
        t = (0, l.bG)([f.A], () => f.A.isSubmitting()),
        n = (0, l.bG)([f.A], () => f.A.getErrors());
    if (null == e) return null;
    let i = n.length > 0;
    return (0, r.jsx)(s.A, {
        onSave: () => {
            i || (0, u.q3)(e);
        },
        onReset: u.p2,
        submitting: t,
        onSaveText: p.intl.string(p.t["R3BPH+"]),
        disabled: i,
        errorMessage: i
            ? (0, r.jsx)("div", {
                  className: x.Tt,
                  children: (0, r.jsx)("ul", {
                      className: x.qr,
                      children: n.map((e, t) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: x.Ff,
                                  children: [
                                      (0, r.jsx)(a.EpV, {
                                          size: "sm",
                                          color: "currentColor",
                                      }),
                                      (0, r.jsx)(a.Text, {
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
