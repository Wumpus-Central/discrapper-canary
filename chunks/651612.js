n.d(t, { Z: () => y }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n(442837),
    s = n(481060),
    o = n(481051),
    c = n(871499),
    d = n(306680),
    u = n(111583),
    p = n(459273),
    h = n(566620),
    f = n(317381),
    g = n(918559),
    m = n(981631),
    b = n(388032),
    _ = n(664131);
function y(e) {
    var { channelId: t, className: n } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["channelId", "className"]);
    let O = i.useRef(null),
        j = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout() === g.MI.RESIZABLE),
        x = i.useCallback(() => {
            let e = j ? g.MI.NO_CHAT : g.MI.RESIZABLE;
            (0, h.gC)(e);
        }, [j]),
        { unreadCount: v, mentionCount: C } = (function (e) {
            let t = (0, a.e7)([u.Z], () => !(0, l.isEmpty)(u.Z.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: r } = (0, a.cj)(
                    [d.ZP],
                    () => ({
                        unreadCount: d.ZP.getUnreadCount(e),
                        mentionCount: d.ZP.getMentionCount(e),
                    }),
                    [e],
                );
            return {
                unreadCount: n,
                mentionCount: r,
                isTyping: t,
            };
        })(t),
        I = i.useCallback(() => {
            var e;
            null == (e = O.current) || e.focus();
        }, []);
    (0, p.yp)({
        event: m.CkL.FOCUS_CHAT_BUTTON,
        handler: I,
    });
    let S = j ? b.intl.string(b.t["5MstTl"]) : b.intl.string(b.t.kkKapG),
        E = [S];
    C > 0 && E.push(b.intl.formatToPlainString(b.t["3l1GOx"], { mentionCount: C })),
        v > 0 && E.push(b.intl.string(b.t.x5zAGZ));
    let Z = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout()),
        P = C > 0 ? C : v,
        T = P > 0;
    return (0, r.jsxs)("div", {
        className: _.wrapper,
        children: [
            (0, r.jsx)(
                c.d,
                (function (e) {
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
                })(
                    {
                        isTrayButton: !0,
                        buttonRef: O,
                        onClick: x,
                        label: S,
                        "aria-label": E.join(", "),
                        tooltipPosition: "top",
                        iconComponent: Z === g.MI.NO_CHAT ? s.sXD : s.hic,
                        themeable: !0,
                        className: n,
                    },
                    y,
                ),
            ),
            T
                ? (0, r.jsx)(o.Z, {
                      hasMentions: C > 0,
                      truncatedCount: P > 99 ? "99+" : P,
                      className: _.badge,
                  })
                : null,
        ],
    });
}
