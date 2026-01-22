n.d(t, {
    A: () => m,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(442433),
    l = n(927057),
    c = n(721768);
n(827669);
var u = n(985018),
    d = n(947941);

function f(e, t, n) {
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

function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
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

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e) {
    var t;
    let a,
        f,
        _,
        { className: m, activeCommand: g, activeOption: E, optionStates: b, channelId: y } = e,
        O = i.useCallback(
            (e) => {
                var t;
                let i = null == g || null == (t = g.rootCommand) ? void 0 : t.id;
                null == i
                    ? e.preventDefault()
                    : (0, o.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  h(p({}, t), {
                                      id: i,
                                      label: u.intl.string(u.t.oJ1Muw),
                                  }),
                              );
                      });
            },
            [null == g || null == (t = g.rootCommand) ? void 0 : t.id],
        ),
        A = i.useCallback(() => {
            c.Gf({
                channelId: y,
                command: null,
                section: null,
            });
        }, [y]);
    if (null == g) return null;
    if (null != E) {
        let e = b[E.name].lastValidationResult;
        (a = E.displayName),
            (f = E.displayDescription),
            (_ = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error);
    } else (a = "".concat("/").concat(g.displayName)), (f = g.displayDescription), (_ = null);
    return (0, r.jsxs)("div", {
        className: s()(m, d.M0),
        onContextMenu: O,
        children: [
            (0, r.jsxs)("div", {
                className: d.iz,
                children: [
                    (0, r.jsx)("span", {
                        className: d.UU,
                        children: a,
                    }),
                    null != _
                        ? (0, r.jsx)("span", {
                              className: d.z3,
                              children: _,
                          })
                        : (0, r.jsx)("span", {
                              className: d.h_,
                              children: f,
                          }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.o1,
                children: (0, r.jsx)(l.x, {
                    onClick: A,
                }),
            }),
        ],
    });
}
