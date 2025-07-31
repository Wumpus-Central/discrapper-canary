(n.d(t, { Z: () => g }), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(239091),
    l = n(962293),
    c = n(555573),
    u = n(761652),
    d = n(388032),
    _ = n(168362);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    var t;
    let a,
        f,
        h,
        { className: g, activeCommand: E, activeOption: b, optionStates: y, channelId: O } = e,
        v = i.useCallback(
            (e) => {
                var t;
                let i = null == E || null == (t = E.rootCommand) ? void 0 : t.id;
                if (null == i) return void e.preventDefault();
                (0, s.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            m(p({}, t), {
                                id: i,
                                label: d.intl.string(d.t.oJ1Mu7)
                            })
                        );
                });
            },
            [null == E || null == (t = E.rootCommand) ? void 0 : t.id]
        ),
        I = i.useCallback(() => {
            c.Po({
                channelId: O,
                command: null,
                section: null
            });
        }, [O]);
    if (null == E) return null;
    if (null != b) {
        let e = y[b.name].lastValidationResult;
        ((a = b.displayName), (f = b.displayDescription), (h = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error));
    } else ((a = ''.concat(u.GI).concat(E.displayName)), (f = E.displayDescription), (h = null));
    return (0, r.jsxs)('div', {
        className: o()(g, _.bar),
        onContextMenu: v,
        children: [
            (0, r.jsxs)('div', {
                className: _.commandInfo,
                children: [
                    (0, r.jsx)('span', {
                        className: _.name,
                        children: a
                    }),
                    null != h
                        ? (0, r.jsx)('span', {
                              className: _.error,
                              children: h
                          })
                        : (0, r.jsx)('span', {
                              className: _.description,
                              children: f
                          })
                ]
            }),
            (0, r.jsx)('div', {
                className: _.actions,
                children: (0, r.jsx)(l.B, { onClick: I })
            })
        ]
    });
}
