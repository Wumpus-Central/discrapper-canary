n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(570140),
    c = n(313201),
    u = n(587446),
    d = n(996073),
    f = n(737604),
    p = n(401460),
    _ = n(441319),
    m = n(526761),
    h = n(388032),
    g = n(339637),
    E = n(226518);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function T(e) {
    let { className: t, disabled: n, isEditor: b, renderCTAButtons: O } = e,
        [I] = (0, a.Wu)([f.Z], () => [f.Z.getCurrentDesktopIcon()]),
        T = i.useRef(null);
    (0, d.Z)(T, m.h1.CUSTOM_APP_ICONS);
    let C = (0, c.Dt)(),
        A = (0, o.Jb)({
            orientation: "horizontal",
            labelledBy: C,
        }),
        { ref: N } = A,
        P = S(A, ["ref"]),
        R = (e) => {
            l.Z.dispatch({
                type: "APP_ICON_UPDATED",
                id: e,
            });
        };
    return (0, r.jsx)("div", {
        ref: T,
        children: (0, r.jsx)(
            "div",
            v(y({}, P), {
                ref: N,
                className: g.__invalid_container,
                children: (0, r.jsxs)("div", {
                    className: t,
                    children: [
                        (0, r.jsxs)("div", {
                            className: g.header,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: g.headings,
                                    children: [
                                        !b &&
                                            (0, r.jsxs)("div", {
                                                className: g.title,
                                                children: [
                                                    (0, r.jsx)(s.Heading, {
                                                        className: g.titleText,
                                                        variant: "text-lg/medium",
                                                        children: h.intl.string(h.t.NThqTw),
                                                    }),
                                                    (0, r.jsx)(u.Z, { className: g.premiumIcon }),
                                                ],
                                            }),
                                        (0, r.jsx)(s.Heading, {
                                            variant: "text-sm/normal",
                                            className: E.subtext,
                                            children: h.intl.string(h.t.IgENJo),
                                        }),
                                    ],
                                }),
                                null == O ? void 0 : O(),
                            ],
                        }),
                        (0, r.jsx)(s.Kqy, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 16 },
                            children: (0, _.wu)()
                                .filter((e) => {
                                    let { isHidden: t } = e;
                                    return !t;
                                })
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        p.Z,
                                        {
                                            icon: e,
                                            isSelected: I === e.id,
                                            onSelect: (e) => R(e),
                                            disabled: n,
                                            tabIndex: 0 !== t || n ? void 0 : 0,
                                            locked: !1,
                                        },
                                        e.id,
                                    ),
                                ),
                        }),
                    ],
                }),
            }),
        ),
    });
}
