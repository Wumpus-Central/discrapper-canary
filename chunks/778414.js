n.d(t, {
    C: () => H,
    Z: () => M,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(704215),
    s = n(481060),
    u = n(355467),
    d = n(491662),
    f = n(243778),
    g = n(981312),
    p = n(929677),
    m = n(314897),
    b = n(351402),
    y = n(931847),
    h = n(836197),
    v = n(880421),
    O = n(206599),
    j = n(50130),
    x = n(5136),
    _ = n(690760),
    P = n(747101),
    I = n(517157),
    w = n(860717),
    S = n(28671),
    E = n(430790),
    T = n(34335),
    C = n(683881),
    D = n(190862),
    k = n(682085),
    N = n(996921),
    A = n(661462),
    Z = n(795990),
    R = n(388032),
    G = n(830202);
function B(e) {
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
function L(e, t) {
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
function M(e) {
    var { widget: t } = e,
        n = L(e, ["widget"]);
    return t instanceof y.q
        ? (0, r.jsx)(w.Z, B({ widget: t }, n))
        : t instanceof h.zy
          ? (0, r.jsx)(D.Z, B({ widget: t }, n))
          : null;
}
function U() {
    return (0, r.jsxs)("div", {
        className: G.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(s.d3s, { size: "xs" }),
            (0, r.jsx)(s.Text, {
                "aria-label": R.intl.string(R.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: R.intl.string(R.t["7blcz6"]),
            }),
        ],
    });
}
function F(e) {
    let { user: t } = e,
        { application: n } = (0, j.G)(),
        { token: i } = (0, d.o)(null == n ? void 0 : n.id),
        a = (0, I.Z)(t.id),
        l = (0, v.k)({ location: "ApplicationWidgetUpsell" }),
        o = a.some((e) => e instanceof y.q && e.applicationId === (null == n ? void 0 : n.id));
    return null == n || !l || null == i || o
        ? null
        : (0, r.jsx)(f.ZP, {
              contentTypes: [c.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
              children: (e) => {
                  let { visibleContent: i, markAsDismissed: a } = e;
                  return i === c.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET
                      ? (0, r.jsx)(S.Z, {
                            user: t,
                            application: n,
                            onDismiss: a,
                        })
                      : null;
              },
          });
}
function W(e) {
    let { user: t, guildId: n, channelId: a } = e,
        l = (0, I.Z)(t.id),
        c = (0, o.e7)([m.default], () => m.default.getId() === t.id),
        s = (() => {
            let [e, t] = (0, o.Wu)([b.Z], () => [b.Z.ipCountryCode, b.Z.ipCountryCodeRequest]),
                n = (0, g.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && n && (0, u.GE)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        d = (0, v.k)({ location: "UserProfileModalV2Widgets" }),
        f = 0 === l.length && c,
        j = i.useMemo(() => l.filter(h.Wc), [l]),
        x = i.useMemo(() => l.filter((e) => e instanceof y.q), [l]);
    (0, P.ZP)(j), (0, O.J)(c, j);
    var w = t.id;
    (0, _.s)(x);
    let { data: S, refetch: C } = (0, p.O)(w),
        D = i.useRef(S);
    (D.current = S),
        i.useEffect(() => {
            null !== D.current && C();
        }, [C]);
    let N = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                c && s && (0, r.jsx)(U, {}),
                c && (0, r.jsx)(F, { user: t }),
                l.map((e, i) =>
                    (0, r.jsx)(
                        M,
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
                c && (0, r.jsx)(E.Z, {}),
            ],
        });
    if (f)
        if (d) return (0, r.jsx)(k.Z, {});
        else return (0, r.jsx)(Z.Z, {});
    return c ? (0, r.jsx)(T.K, { children: N() }) : N();
}
function H(e) {
    var { user: t } = e,
        n = L(e, ["user"]);
    let a = i.useRef(null);
    (0, x.r)({ container: a.current });
    let o = (0, N.h)(t.id);
    return (0, r.jsxs)(A.F, {
        "data-scroller": !0,
        scrollerRef: a,
        className: l()(G.scroller, { [G.hasToolbar]: o }),
        fade: !0,
        children: [(0, r.jsx)(C.Z, { scrollerRef: a }), (0, r.jsx)(W, B({ user: t }, n))],
    });
}
