n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(573385),
    c = n(481060),
    u = n(181430),
    d = n(606318),
    f = n(402235),
    p = n(485386),
    _ = n(724913);
function m(e, t, n) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: a = !1,
            zalgo: m = !0,
            preview: g = !1,
            disableInteraction: y = !1,
            childrenRepliedMessage: O,
            childrenExecutedCommand: v,
            childrenHeader: S,
            childrenSystemMessage: I,
            childrenButtons: T,
            childrenMessageContent: A,
            childrenAccessories: C,
            messageRef: N,
            focusProps: P = {
                offset: {
                    left: 4,
                    right: 4,
                },
            },
            hasThread: R,
            isSystemMessage: w,
            hasReply: D,
            author: x,
            onMouseEnter: L,
            onMouseLeave: j,
        } = e,
        M = b(e, [
            "className",
            "compact",
            "contentOnly",
            "zalgo",
            "preview",
            "disableInteraction",
            "childrenRepliedMessage",
            "childrenExecutedCommand",
            "childrenHeader",
            "childrenSystemMessage",
            "childrenButtons",
            "childrenMessageContent",
            "childrenAccessories",
            "messageRef",
            "focusProps",
            "hasThread",
            "isSystemMessage",
            "hasReply",
            "author",
            "onMouseEnter",
            "onMouseLeave",
        ]);
    let k = (0, s.e7)([p.Z], () =>
            (null == x ? void 0 : x.guildId) == null || (null == x ? void 0 : x.colorRoleId) == null
                ? null
                : p.Z.getRole(x.guildId, x.colorRoleId),
        ),
        U = (0, f.yH)(null == x ? void 0 : x.guildId, k) && (0, d.S2)(x),
        [G, Z] = i.useState(!1),
        B = i.useCallback(
            (e) => {
                Z(!0), null == L || L(e);
            },
            [L],
        ),
        F = i.useCallback(
            (e) => {
                Z(!1), null == j || j(e);
            },
            [j],
        ),
        V = (0, u.Y)({ location: "BaseMessage" }),
        H = (0, r.jsx)(l.d.Provider, {
            value: {
                animate: G,
                setAnimate: Z,
            },
            children: (0, r.jsx)(
                c.tEY,
                E(h({}, P), {
                    children: (0, r.jsxs)(
                        "div",
                        E(
                            h(
                                {
                                    className: o()(t, {
                                        [_.gradient]: U,
                                        [_.withDisplayNameStyles]:
                                            V &&
                                            (null == x ? void 0 : x.displayNameStyles) != null &&
                                            (null == x ? void 0 : x.guildId) == null,
                                        [_.wrapper]: !0,
                                        [_.contentOnly]: a,
                                        [_.compact]: n,
                                        [_.preview]: g,
                                        [_.cozy]: !n,
                                        [_.zalgo]: m,
                                        [_.hasThread]: R,
                                        [_.isSystemMessage]: w,
                                        [_.hasReply]: D,
                                    }),
                                    ref: N,
                                },
                                M,
                            ),
                            {
                                role: "article",
                                onMouseEnter: B,
                                onMouseLeave: F,
                                children: [
                                    O,
                                    v,
                                    (0, r.jsxs)("div", {
                                        className: _.contents,
                                        children: [I, S, null == I && A],
                                    }),
                                    C,
                                    null != T
                                        ? (0, r.jsx)("div", {
                                              className: _.buttonContainer,
                                              children: T,
                                          })
                                        : null,
                                ],
                            },
                        ),
                    ),
                }),
            ),
        });
    return y ? (0, r.jsx)(c.Rny, { children: H }) : H;
};
