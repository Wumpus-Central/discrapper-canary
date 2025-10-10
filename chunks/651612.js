n.d(t, { Z: () => _ }), n(539854);
var r = n(951288),
    i = n(647438),
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
    y = n(332139);
function _(e) {
    var { channelId: t, className: n } = e,
        _ = (function (e, t) {
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
    let j = i.useRef(null),
        x = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout() === g.MI.RESIZABLE),
        O = i.useCallback(() => {
            let e = x ? g.MI.NO_CHAT : g.MI.RESIZABLE;
            (0, h.gC)(e);
        }, [x]),
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
            null == (e = j.current) || e.focus();
        }, []);
    (0, p.yp)({
        event: m.CkL.FOCUS_CHAT_BUTTON,
        handler: I,
    });
    let E = x ? b.intl.string(b.t["5MstTk"]) : b.intl.string(b.t.kkKapK),
        S = [E];
    C > 0 && S.push(b.intl.formatToPlainString(b.t["3l1GOz"], { mentionCount: C })),
        v > 0 && S.push(b.intl.string(b.t.x5zAGR));
    let Z = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout()),
        T = C > 0 ? C : v,
        P = T > 0;
    return (0, r.jsxs)("div", {
        className: y.wrapper,
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
                        buttonRef: j,
                        onClick: O,
                        label: E,
                        "aria-label": S.join(", "),
                        tooltipPosition: "top",
                        iconComponent: Z === g.MI.NO_CHAT ? s.sXD : s.hic,
                        themeable: !0,
                        className: n,
                    },
                    _,
                ),
            ),
            P
                ? (0, r.jsx)(o.Z, {
                      hasMentions: C > 0,
                      truncatedCount: T > 99 ? "99+" : T,
                      className: y.badge,
                  })
                : null,
        ],
    });
}
