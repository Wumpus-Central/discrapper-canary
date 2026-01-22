n.d(t, { P: () => T }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(349288),
    s = n(473193),
    o = n(397927),
    l = n(793574),
    c = n(688810),
    u = n(609425),
    d = n(922301),
    f = n(750112),
    p = n(73392),
    _ = n(676608),
    h = n(342296),
    m = n(734057),
    g = n(841549),
    E = n(560936);
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
function A(e, t) {
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
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = S(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function I(e, t) {
    return i.useCallback(
        (n) => {
            let r = m.A.getChannel(t);
            null != r && null != e && (0, g.wQ)(n, e, r);
        },
        [e, t],
    );
}
function T(e) {
    let {
            user: t,
            channelId: n,
            guildId: m,
            messageId: g,
            stopPropagation: b = !1,
            ariaLabel: O,
            enableDisplayNameStyles: S = !1,
        } = e,
        T = i.useRef(null),
        { analyticsLocations: C } = (0, c.Ay)(l.A.USERNAME),
        N = (0, _.Ay)(m, null == t ? void 0 : t.id),
        R = (0, u.A)({
            userId: null == t ? void 0 : t.id,
            guildId: m,
        }),
        w = (0, p.a)({ displayNameStyles: R }),
        P = I(t, n),
        D = i.useContext(s.C);
    return (
        (0, E.A)({
            subscribeToGroupId: g,
            authorId: null == t ? void 0 : t.id,
            shouldSubscribe: S && null != R && null == m,
        }),
        i.useCallback(
            (e) => (i, s) => {
                let l = null == e ? void 0 : e.colorStrings,
                    u = N && null != l && null != l.primaryColor && null != l.secondaryColor,
                    p = (t, n) => {
                        var s, c, p;
                        if (!S || null == R || null != m)
                            return (0, r.jsx)(
                                o.V30,
                                A(y({}, null != t ? t : {}), {
                                    ref: T,
                                    onContextMenu: P,
                                    name: null != (c = (0, o.Oer)(i)) ? c : "",
                                    colorString: null != (p = null == e ? void 0 : e.colorString) ? p : null,
                                    roleName: null == e ? void 0 : e.colorRoleName,
                                    colorStrings: u ? l : null,
                                    "aria-label": O,
                                    className: w,
                                }),
                            );
                        {
                            let e =
                                (null == D ? void 0 : D.animate) || (null == n ? void 0 : n.isShown)
                                    ? d.G.ANIMATED
                                    : d.G.PLAIN;
                            return (0, r.jsx)(
                                a.Anchor,
                                A(y({}, null != t ? t : {}), {
                                    ref: T,
                                    onContextMenu: P,
                                    "aria-label": O,
                                    children: (0, r.jsx)(f.A, {
                                        userName: null != (s = (0, o.Oer)(i)) ? s : "",
                                        displayNameStyles: R,
                                        effectDisplayType: e,
                                        shouldUnderlineOnHover: !0,
                                        loop: !0,
                                    }),
                                }),
                            );
                        }
                    },
                    _ = (e) => (t) => {
                        b && null != t && t.stopPropagation(), e(t);
                    };
                return (0, r.jsx)(
                    c.f5,
                    {
                        value: C,
                        children:
                            null != t
                                ? (0, r.jsx)(h.A, {
                                      targetElementRef: T,
                                      user: t,
                                      guildId: m,
                                      channelId: n,
                                      messageId: g,
                                      roleId: null == e ? void 0 : e.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          let [n, ...r] = [e, t],
                                              { onClick: i } = n,
                                              a = v(n, ["onClick"]),
                                              [s] = r;
                                          return p(y({ onClick: _(i) }, a), s);
                                      },
                                  })
                                : p(void 0, void 0),
                    },
                    s,
                );
            },
            [C, t, n, m, g, P, b, O, N, w, null == D ? void 0 : D.animate, R, S],
        )
    );
}
