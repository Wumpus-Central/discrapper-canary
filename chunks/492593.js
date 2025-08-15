n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(442837),
    s = n(573385),
    c = n(481060),
    u = n(181430),
    d = n(606318),
    p = n(402235),
    m = n(485386),
    g = n(724913);
function f(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: o = !1,
            zalgo: h = !0,
            preview: y = !1,
            disableInteraction: O = !1,
            childrenRepliedMessage: v,
            childrenExecutedCommand: j,
            childrenHeader: P,
            childrenSystemMessage: x,
            childrenButtons: w,
            childrenMessageContent: C,
            childrenAccessories: S,
            messageRef: E,
            focusProps: N = {
                offset: {
                    left: 4,
                    right: 4,
                },
            },
            hasThread: R,
            isSystemMessage: T,
            hasReply: Z,
            author: I,
            onMouseEnter: _,
            onMouseLeave: k,
        } = e,
        M = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, [
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
    let D = (0, a.e7)([m.Z], () =>
            (null == I ? void 0 : I.guildId) == null || (null == I ? void 0 : I.colorRoleId) == null
                ? null
                : m.Z.getRole(I.guildId, I.colorRoleId),
        ),
        A = (0, p.yH)(null == I ? void 0 : I.guildId, D) && (0, d.S2)(I),
        [L, G] = l.useState(!1),
        U = l.useCallback(
            (e) => {
                G(!0), null == _ || _(e);
            },
            [_],
        ),
        B = l.useCallback(
            (e) => {
                G(!1), null == k || k(e);
            },
            [k],
        ),
        F = (0, u.Y)({ location: "BaseMessage" }),
        H = (0, r.jsx)(s.d.Provider, {
            value: {
                animate: L,
                setAnimate: G,
            },
            children: (0, r.jsx)(
                c.tEY,
                b(f({}, N), {
                    children: (0, r.jsxs)(
                        "div",
                        b(
                            f(
                                {
                                    className: i()(t, {
                                        [g.gradient]: A,
                                        [g.withDisplayNameStyles]:
                                            F &&
                                            (null == I ? void 0 : I.displayNameStyles) != null &&
                                            (null == I ? void 0 : I.guildId) == null,
                                        [g.wrapper]: !0,
                                        [g.contentOnly]: o,
                                        [g.compact]: n,
                                        [g.preview]: y,
                                        [g.cozy]: !n,
                                        [g.zalgo]: h,
                                        [g.hasThread]: R,
                                        [g.isSystemMessage]: T,
                                        [g.hasReply]: Z,
                                    }),
                                    ref: E,
                                },
                                M,
                            ),
                            {
                                role: "article",
                                onMouseEnter: U,
                                onMouseLeave: B,
                                children: [
                                    v,
                                    j,
                                    (0, r.jsxs)("div", {
                                        className: g.contents,
                                        children: [x, P, null == x && C],
                                    }),
                                    S,
                                    null != w
                                        ? (0, r.jsx)("div", {
                                              className: g.buttonContainer,
                                              children: w,
                                          })
                                        : null,
                                ],
                            },
                        ),
                    ),
                }),
            ),
        });
    return O ? (0, r.jsx)(c.Rny, { children: H }) : H;
};
