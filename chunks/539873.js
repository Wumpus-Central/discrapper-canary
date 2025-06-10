n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(313201),
    d = n(540059),
    f = n(587446),
    _ = n(996073),
    p = n(737604),
    h = n(401460),
    m = n(441319),
    g = n(526761),
    E = n(388032),
    b = n(888090),
    y = n(716827);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function N(e) {
    let { className: t, disabled: n, isEditor: a, renderCTAButtons: O } = e,
        [I] = (0, s.Wu)([p.Z], () => [p.Z.getCurrentDesktopIcon()]),
        A = i.useRef(null);
    (0, _.Z)(A, g.h1.CUSTOM_APP_ICONS);
    let N = (0, u.Dt)(),
        C = (0, l.arW)({
            orientation: 'horizontal',
            labelledBy: N
        }),
        { ref: R } = C,
        P = S(C, ['ref']),
        w = (0, d.Q3)('AppIconSelectionGroup'),
        D = (e) => {
            c.Z.dispatch({
                type: 'APP_ICON_UPDATED',
                id: e
            });
        };
    return (0, r.jsx)('div', {
        ref: A,
        children: (0, r.jsx)(
            'div',
            T(v({}, P), {
                ref: R,
                className: b.__invalid_container,
                children: (0, r.jsxs)('div', {
                    className: t,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.header,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: b.headings,
                                    children: [
                                        !a &&
                                            (0, r.jsxs)('div', {
                                                className: b.title,
                                                children: [
                                                    (0, r.jsx)(l.X6q, {
                                                        className: b.titleText,
                                                        variant: w ? 'text-lg/medium' : 'text-md/medium',
                                                        children: E.intl.string(E.t.NThqT0)
                                                    }),
                                                    (0, r.jsx)(f.Z, { className: b.premiumIcon })
                                                ]
                                            }),
                                        (0, r.jsx)(l.X6q, {
                                            variant: 'text-sm/normal',
                                            className: o()({ [y.subtext]: w }),
                                            children: E.intl.string(E.t.IgENJi)
                                        })
                                    ]
                                }),
                                null == O ? void 0 : O()
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: b.presets,
                            children: (0, m.wu)()
                                .filter((e) => {
                                    let { isHidden: t } = e;
                                    return !t;
                                })
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        h.Z,
                                        {
                                            icon: e,
                                            isSelected: I === e.id,
                                            onSelect: (e) => D(e),
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
