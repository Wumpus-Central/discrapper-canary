n.d(t, { Z: () => g }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(239091),
    l = n(962293),
    c = n(555573),
    u = n(761652),
    d = n(388032),
    f = n(585238);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    var t;
    let a,
        p,
        m,
        { className: g, activeCommand: E, activeOption: b, optionStates: y, channelId: O } = e,
        v = i.useCallback(
            (e) => {
                var t;
                let i = null == E || null == (t = E.rootCommand) ? void 0 : t.id;
                if (null == i) return void e.preventDefault();
                (0, s.jW)(e, async () => {
                    let { default: e } = await n.e("5396").then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            h(_({}, t), {
                                id: i,
                                label: d.intl.string(d.t.oJ1Muw),
                            }),
                        );
                });
            },
            [null == E || null == (t = E.rootCommand) ? void 0 : t.id],
        ),
        S = i.useCallback(() => {
            c.Po({
                channelId: O,
                command: null,
                section: null,
            });
        }, [O]);
    if (null == E) return null;
    if (null != b) {
        let e = y[b.name].lastValidationResult;
        (a = b.displayName),
            (p = b.displayDescription),
            (m = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error);
    } else (a = "".concat(u.GI).concat(E.displayName)), (p = E.displayDescription), (m = null);
    return (0, r.jsxs)("div", {
        className: o()(g, f.bar),
        onContextMenu: v,
        children: [
            (0, r.jsxs)("div", {
                className: f.commandInfo,
                children: [
                    (0, r.jsx)("span", {
                        className: f.name,
                        children: a,
                    }),
                    null != m
                        ? (0, r.jsx)("span", {
                              className: f.error,
                              children: m,
                          })
                        : (0, r.jsx)("span", {
                              className: f.description,
                              children: p,
                          }),
                ],
            }),
            (0, r.jsx)("div", {
                className: f.actions,
                children: (0, r.jsx)(l.B, { onClick: S }),
            }),
        ],
    });
}
