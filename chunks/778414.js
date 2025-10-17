n.d(t, {
    C: () => W,
    Z: () => B,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(355467),
    d = n(491662),
    f = n(243778),
    g = n(981312),
    p = n(929677),
    m = n(314897),
    b = n(351402),
    h = n(931847),
    v = n(836197),
    y = n(880421),
    j = n(206599),
    O = n(50130),
    x = n(5136),
    _ = n(690760),
    P = n(747101),
    I = n(517157),
    w = n(860717),
    S = n(28671),
    E = n(430790),
    T = n(683881),
    C = n(190862),
    N = n(682085),
    A = n(996921),
    D = n(661462),
    k = n(795990),
    Z = n(388032),
    R = n(830202);
function L(e) {
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
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function B(e) {
    var { widget: t } = e,
        n = G(e, ["widget"]);
    return t instanceof h.q
        ? (0, r.jsx)(w.Z, L({ widget: t }, n))
        : t instanceof v.zy
          ? (0, r.jsx)(C.Z, L({ widget: t }, n))
          : null;
}
function M() {
    return (0, r.jsxs)("div", {
        className: R.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(c.d3s, { size: "xs" }),
            (0, r.jsx)(c.Text, {
                "aria-label": Z.intl.string(Z.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: Z.intl.string(Z.t["7blcz8"]),
            }),
        ],
    });
}
function F(e) {
    let { user: t } = e,
        { application: n } = (0, O.G)(),
        { token: i } = (0, d.o)(null == n ? void 0 : n.id),
        a = (0, I.Z)(t.id),
        l = (0, y.k)({ location: "ApplicationWidgetUpsell" }),
        o = a.some((e) => e instanceof h.q && e.applicationId === (null == n ? void 0 : n.id));
    return null == n || !l || null == i || o
        ? null
        : (0, r.jsx)(f.ZP, {
              contentTypes: [s.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
              children: (e) => {
                  let { visibleContent: i, markAsDismissed: a } = e;
                  return i === s.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET
                      ? (0, r.jsx)(S.Z, {
                            user: t,
                            application: n,
                            onDismiss: a,
                        })
                      : null;
              },
          });
}
function U(e) {
    let { user: t, guildId: n, channelId: a } = e,
        l = (0, I.Z)(t.id),
        s = (0, o.e7)([m.default], () => m.default.getId() === t.id),
        c = (() => {
            let [e, t] = (0, o.Wu)([b.Z], () => [b.Z.ipCountryCode, b.Z.ipCountryCodeRequest]),
                n = (0, g.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && n && (0, u.GE)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        d = (0, y.k)({ location: "UserProfileModalV2Widgets" }),
        f = 0 === l.length && s,
        O = i.useMemo(() => l.filter(v.Wc), [l]),
        x = i.useMemo(() => l.filter((e) => e instanceof h.q), [l]);
    (0, P.ZP)(O), (0, j.J)(s, O);
    var w = t.id;
    (0, _.s)(x);
    let { data: S, refetch: T } = (0, p.O)(w),
        C = i.useRef(S);
    if (
        ((C.current = S),
        i.useEffect(() => {
            null !== C.current && T();
        }, [T]),
        f)
    )
        if (d) return (0, r.jsx)(N.Z, {});
        else return (0, r.jsx)(k.Z, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s && c && (0, r.jsx)(M, {}),
            s && (0, r.jsx)(F, { user: t }),
            l.map((e, i) =>
                (0, r.jsx)(
                    B,
                    {
                        widget: e,
                        user: t,
                        guildId: n,
                        channelId: a,
                        index: i,
                    },
                    e.type,
                ),
            ),
            s && (0, r.jsx)(E.Z, {}),
        ],
    });
}
function W(e) {
    var { user: t } = e,
        n = G(e, ["user"]);
    let a = i.useRef(null);
    (0, x.r)({ container: a.current });
    let o = (0, A.h)(t.id);
    return (0, r.jsxs)(D.F, {
        "data-scroller": !0,
        scrollerRef: a,
        className: l()(R.scroller, { [R.hasToolbar]: o }),
        fade: !0,
        children: [(0, r.jsx)(T.Z, { scrollerRef: a }), (0, r.jsx)(U, L({ user: t }, n))],
    });
}
