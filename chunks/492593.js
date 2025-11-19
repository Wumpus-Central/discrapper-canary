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
    _ = n(485386),
    p = n(724913);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
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
            zalgo: h = !0,
            preview: g = !1,
            disableInteraction: y = !1,
            childrenRepliedMessage: O,
            childrenExecutedCommand: v,
            childrenHeader: I,
            childrenSystemMessage: T,
            childrenButtons: S,
            childrenMessageContent: A,
            childrenAccessories: C,
            messageRef: N,
            focusProps: R = {
                offset: {
                    left: 4,
                    right: 4,
                },
            },
            hasThread: P,
            isSystemMessage: D,
            hasReply: w,
            author: L,
            onMouseEnter: x,
            onMouseLeave: M,
        } = e,
        k = b(e, [
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
    let j = (0, s.e7)([_.Z], () =>
            (null == L ? void 0 : L.guildId) == null || (null == L ? void 0 : L.colorRoleId) == null
                ? null
                : _.Z.getRole(L.guildId, L.colorRoleId),
        ),
        U = (0, f.yH)(null == L ? void 0 : L.guildId, j) && (0, d.S2)(L),
        [G, B] = i.useState(!1),
        Z = i.useCallback(
            (e) => {
                B(!0), null == x || x(e);
            },
            [x],
        ),
        F = i.useCallback(
            (e) => {
                B(!1), null == M || M(e);
            },
            [M],
        ),
        V = (0, u.Y)({ location: "BaseMessage" }),
        H = (0, r.jsx)(l.d.Provider, {
            value: {
                animate: G,
                setAnimate: B,
            },
            children: (0, r.jsx)(
                c.tEY,
                E(m({}, R), {
                    children: (0, r.jsxs)(
                        "div",
                        E(
                            m(
                                {
                                    className: o()(t, {
                                        [p.gradient]: U,
                                        [p.withDisplayNameStyles]:
                                            V &&
                                            (null == L ? void 0 : L.displayNameStyles) != null &&
                                            (null == L ? void 0 : L.guildId) == null,
                                        [p.wrapper]: !0,
                                        [p.contentOnly]: a,
                                        [p.compact]: n,
                                        [p.preview]: g,
                                        [p.cozy]: !n,
                                        [p.zalgo]: h,
                                        [p.hasThread]: P,
                                        [p.isSystemMessage]: D,
                                        [p.hasReply]: w,
                                    }),
                                    ref: N,
                                },
                                k,
                            ),
                            {
                                role: "article",
                                onMouseEnter: Z,
                                onMouseLeave: F,
                                children: [
                                    O,
                                    v,
                                    (0, r.jsxs)("div", {
                                        className: p.contents,
                                        children: [T, I, null == T && A],
                                    }),
                                    C,
                                    null != S
                                        ? (0, r.jsx)("div", {
                                              className: p.buttonContainer,
                                              children: S,
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
