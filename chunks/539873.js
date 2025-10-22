n.d(t, { Z: () => A }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(570140),
    c = n(313201),
    u = n(587446),
    d = n(996073),
    f = n(368763),
    _ = n(737604),
    p = n(401460),
    h = n(441319),
    m = n(526761),
    g = n(388032),
    E = n(871976),
    b = n(5874);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function A(e) {
    let { className: t, disabled: n, isEditor: y, renderCTAButtons: v } = e,
        [S] = (0, a.Wu)([_.Z], () => [_.Z.getCurrentDesktopIcon()]),
        A = (0, f.T)("app_icons_settings_web"),
        C = i.useRef(null);
    (0, d.Z)(C, m.h1.CUSTOM_APP_ICONS);
    let N = (0, c.Dt)(),
        R = (0, o.Jb)({
            orientation: "horizontal",
            labelledBy: N,
        }),
        { ref: P } = R,
        w = T(R, ["ref"]),
        D = (e) => {
            l.Z.dispatch({
                type: "APP_ICON_UPDATED",
                id: e,
            });
        };
    return (0, r.jsx)("div", {
        ref: C,
        children: (0, r.jsx)(
            "div",
            I(O({}, w), {
                ref: P,
                className: E.__invalid_container,
                children: (0, r.jsxs)("div", {
                    className: t,
                    children: [
                        (0, r.jsxs)("div", {
                            className: E.header,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: E.headings,
                                    children: [
                                        !y &&
                                            (0, r.jsxs)("div", {
                                                className: E.title,
                                                children: [
                                                    (0, r.jsx)(s.Heading, {
                                                        className: E.titleText,
                                                        variant: "text-lg/medium",
                                                        children: g.intl.string(g.t.NThqTw),
                                                    }),
                                                    (0, r.jsx)(u.Z, { className: E.premiumIcon }),
                                                ],
                                            }),
                                        (0, r.jsx)(s.Heading, {
                                            variant: "text-sm/normal",
                                            className: b.subtext,
                                            children: g.intl.string(g.t.IgENJo),
                                        }),
                                    ],
                                }),
                                null == v ? void 0 : v(),
                            ],
                        }),
                        (0, r.jsx)(s.Kqy, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 16 },
                            children: (0, h.wu)(A)
                                .filter((e) => {
                                    let { isHidden: t } = e;
                                    return !t;
                                })
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        p.Z,
                                        {
                                            icon: e,
                                            isSelected: S === e.id,
                                            onSelect: (e) => D(e),
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
