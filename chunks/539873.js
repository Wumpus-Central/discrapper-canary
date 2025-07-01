(n.d(t, { Z: () => T }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(570140),
    l = n(313201),
    c = n(587446),
    u = n(996073),
    d = n(737604),
    f = n(401460),
    _ = n(441319),
    p = n(526761),
    h = n(388032),
    m = n(888090),
    g = n(716827);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            }));
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function T(e) {
    let { className: t, disabled: n, isEditor: E, renderCTAButtons: y } = e,
        [I] = (0, a.Wu)([d.Z], () => [d.Z.getCurrentDesktopIcon()]),
        T = i.useRef(null);
    (0, u.Z)(T, p.h1.CUSTOM_APP_ICONS);
    let S = (0, l.Dt)(),
        A = (0, o.arW)({
            orientation: 'horizontal',
            labelledBy: S
        }),
        { ref: N } = A,
        C = v(A, ['ref']),
        R = (e) => {
            s.Z.dispatch({
                type: 'APP_ICON_UPDATED',
                id: e
            });
        };
    return (0, r.jsx)('div', {
        ref: T,
        children: (0, r.jsx)(
            'div',
            O(b({}, C), {
                ref: N,
                className: m.__invalid_container,
                children: (0, r.jsxs)('div', {
                    className: t,
                    children: [
                        (0, r.jsxs)('div', {
                            className: m.header,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: m.headings,
                                    children: [
                                        !E &&
                                            (0, r.jsxs)('div', {
                                                className: m.title,
                                                children: [
                                                    (0, r.jsx)(o.X6q, {
                                                        className: m.titleText,
                                                        variant: 'text-lg/medium',
                                                        children: h.intl.string(h.t.NThqT0)
                                                    }),
                                                    (0, r.jsx)(c.Z, { className: m.premiumIcon })
                                                ]
                                            }),
                                        (0, r.jsx)(o.X6q, {
                                            variant: 'text-sm/normal',
                                            className: g.subtext,
                                            children: h.intl.string(h.t.IgENJi)
                                        })
                                    ]
                                }),
                                null == y ? void 0 : y()
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: m.presets,
                            children: (0, _.wu)()
                                .filter((e) => {
                                    let { isHidden: t } = e;
                                    return !t;
                                })
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        f.Z,
                                        {
                                            icon: e,
                                            isSelected: I === e.id,
                                            onSelect: (e) => R(e),
                                            disabled: n,
                                            tabIndex: 0 !== t || n ? void 0 : 0,
                                            locked: !1
                                        },
                                        e.id
                                    )
                                )
                        })
                    ]
                })
            })
        )
    });
}
