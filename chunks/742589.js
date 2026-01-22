n.d(t, {
    A: () => D,
    I: () => N,
}),
    n(747238);
var r = n(627968);
n(64700);
var i = n(607399),
    a = n(311907),
    s = n(367513),
    o = n(793574),
    l = n(688810),
    c = n(313961),
    u = n(261718),
    d = n(966597),
    f = n(922281),
    p = n(907745),
    _ = n(772475),
    h = n(977997),
    m = n(723702),
    g = n(837921),
    E = n(58736),
    b = n(652215),
    y = n(746080),
    O = n(892513);
function A(e, t, n) {
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
function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
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
    if (((a = C(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
async function N(e) {
    if (!e && (0, m.isMac)() && m.isPlatformEmbedded) {
        var t, n, r;
        let e =
            null !=
            (t = await (null == (n = (r = window.DiscordNative.remoteApp).getDefaultDoubleClickAction)
                ? void 0
                : n.call(r)))
                ? t
                : "Maximize";
        "Minimize" === e ? g.Ay.minimize() : "Maximize" === e && g.Ay.maximize();
    }
}
function R(e) {
    let {
            children: t,
            className: n,
            channelId: o,
            channelType: l,
            guildId: m,
            innerClassname: g,
            transparent: A = !1,
            hidden: v = !1,
            toolbar: S,
            mobileToolbar: I,
            "aria-label": T,
            "aria-labelledby": C,
            scrollable: R,
            role: w,
            hideSearch: P,
            showDivider: D,
            disableDoubleClick: x,
        } = e,
        L = null == o || (0, y.jq)(o) ? null : o,
        j = (0, a.bG)([h.A], () => h.A.isInChannel(L) || !1),
        M = (0, a.bG)([c.A], () => null != L && c.A.getParticipantsListOpen(L)),
        { enabled: k, inInbox: U } = d.A.useExperiment({ location: "HeaderBar" }),
        { hasParticipantsPanel: G } = (0, u.A)({ location: "HeaderBar" });
    function V() {
        if (null == S) return null;
        let e = null != o && !P;
        return i.Fr
            ? I
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      S,
                      e && !(0, y.jq)(o)
                          ? (0, r.jsx)(
                                p.Ay,
                                {
                                    guildId: m,
                                    channelId: o,
                                    className: O.$P,
                                },
                                null != m ? m : o,
                            )
                          : null,
                      D && (0, r.jsx)(E.Ay.Divider, {}),
                      k && !U ? (0, r.jsx)(f.A, {}) : null,
                      G &&
                          j &&
                          null != L &&
                          !M &&
                          l === b.rbe.GROUP_DM &&
                          (0, r.jsxs)("div", {
                              className: O.pc,
                              children: [
                                  (0, r.jsx)(E.Ay.Divider, {}),
                                  (0, r.jsx)(_.A, { onClick: () => s.A.toggleParticipantsList(L, !M) }),
                              ],
                          }),
                  ],
              });
    }
    return (0, r.jsx)(E.Ay, {
        className: n,
        innerClassName: g,
        toolbar: V(),
        transparent: A,
        hidden: v,
        onDoubleClick: () => N(x),
        "aria-label": T,
        "aria-labelledby": C,
        role: w,
        scrollable: R,
        children: t,
    });
}
function w(e) {
    let { children: t, className: n, "aria-label": i, "aria-labelledby": a, role: s, disableDoubleClick: o } = e;
    return (0, r.jsx)(E.Ay, {
        className: n,
        onDoubleClick: () => N(o),
        "aria-label": i,
        "aria-labelledby": a,
        role: s,
        children: t,
    });
}
function P(e) {
    let { isAuthenticated: t = !0 } = e,
        n = T(e, ["isAuthenticated"]),
        { analyticsLocations: i } = (0, l.Ay)(o.A.HEADER_BAR);
    return (0, r.jsx)(l.f5, {
        value: i,
        children: t
            ? (0, r.jsx)(R, I(v({}, n), { className: n.className }))
            : (0, r.jsx)(w, I(v({}, n), { className: n.className })),
    });
}
(P.Title = E.Ay.Title),
    (P.Icon = E.Ay.Icon),
    (P.ChannelIcon = E.Ay.ChannelIcon),
    (P.Divider = E.Ay.Divider),
    (P.Caret = E.Ay.Caret);
let D = P;
