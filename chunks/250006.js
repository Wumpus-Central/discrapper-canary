n.d(t, { A: () => h }), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    c = n(990078),
    o = n(397927),
    d = n(736653),
    u = n(573648),
    f = n(587895),
    g = n(599119),
    b = n(923121),
    m = n(539916),
    p = n(985018),
    x = n(931136);
function h(e) {
    let { connection: t, index: l, onDragStart: h, onDragReset: j, onDragComplete: O, draggingId: y } = e,
        v = (0, d.Ay)(),
        {
            drag: A,
            drop: E,
            dragSourcePosition: N,
            setIsDraggable: _,
        } = (0, g.A)({
            type: "ONBOARDING_CONNECTION_CARD",
            index: l,
            optionId: t.id,
            onDragStart: () => h(t.id),
            onDragComplete: (e) => O(e),
            onDragReset: () => j(),
        }),
        S = i.useCallback(() => {
            (0, b.zN)(l);
        }, [l]),
        T = i.useCallback(() => {
            (0, o.mMO)(async () => {
                let { default: e } = await n.e("90194").then(n.bind(n, 566857));
                return (n) => {
                    var i, s;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
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
                        })({}, n)),
                        (s = s =
                            {
                                connection: t,
                                index: l,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        i),
                    );
                };
            });
        }, [t, l]),
        I = t.connection_type === m.wZ.APPLICATION,
        C = t.application_id,
        P = (0, a.bG)([f.A], () => (I && null != C ? f.A.getApplication(C) : null), [I, C]),
        w = i.useMemo(
            () =>
                (function (e, t, n) {
                    var r, i, l;
                    if (e.connection_type === m.wZ.APPLICATION && null != e.application_id) {
                        if (null != n)
                            return {
                                name: n.name,
                                icon: null != (r = n.getIconURL(128)) ? r : null,
                            };
                    } else if (null != e.provider_id) {
                        let n = u.A.get(e.provider_id);
                        return null != n
                            ? {
                                  name: n.name,
                                  icon:
                                      "light" === t
                                          ? null == (i = n.icon)
                                              ? void 0
                                              : i.lightPNG
                                          : null == (l = n.icon)
                                            ? void 0
                                            : l.darkPNG,
                              }
                            : {
                                  name: "Unknown Platform",
                                  icon: null,
                              };
                    }
                    return {
                        name: p.intl.string(p.t.kFlgsx),
                        icon: null,
                    };
                })(t, v, P),
            [t, v, P],
        );
    return (0, r.jsxs)("div", {
        className: s()(x.Nr, {
            [x.A]: null != N && l < N,
            [x.Ze]: null != N && l > N,
        }),
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        ref: (e) => {
            A(E(e));
        },
        children: [
            (0, r.jsx)("div", {
                className: x.BU,
                children: (0, r.jsx)(o.WP0, {
                    size: "sm",
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                className: x.hu,
                children: [
                    (0, r.jsx)("div", {
                        className: x.Kk,
                        children:
                            null != w.icon
                                ? (0, r.jsx)("img", {
                                      src: w.icon,
                                      alt: "",
                                      width: 40,
                                      height: 40,
                                  })
                                : (0, r.jsx)(o._xR, {
                                      size: "custom",
                                      width: 40,
                                      height: 40,
                                      color: "currentColor",
                                  }),
                    }),
                    (0, r.jsxs)("div", {
                        className: x.P_,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: w.name,
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    null != t.description && t.description.length > 0
                                        ? t.description
                                        : p.intl.string(p.t["4nNtsP"]),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: x.o1,
                children: [
                    (0, r.jsx)(c.m, {
                        text: p.intl.string(p.t.bt75uw),
                        children: (0, r.jsx)(o.DUT, {
                            className: x.r9,
                            onClick: T,
                            "aria-label": p.intl.string(p.t.bt75uw),
                            children: (0, r.jsx)(o.R2l, {
                                size: "xs",
                                color: "currentColor",
                            }),
                        }),
                    }),
                    (0, r.jsx)(c.m, {
                        text: p.intl.string(p.t.N86XcP),
                        children: (0, r.jsx)(o.DUT, {
                            className: x.DT,
                            onClick: S,
                            "aria-label": p.intl.string(p.t.N86XcP),
                            children: (0, r.jsx)(o.ucK, {
                                size: "xs",
                                color: "currentColor",
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
