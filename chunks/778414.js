n.d(t, {
    C: () => V,
    Z: () => U,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(355467),
    d = n(491662),
    p = n(243778),
    f = n(981312),
    h = n(929677),
    g = n(314897),
    m = n(351402),
    b = n(931847),
    _ = n(836197),
    O = n(880421),
    E = n(206599),
    v = n(50130),
    y = n(5136),
    I = n(690760),
    C = n(747101),
    S = n(517157),
    T = n(860717),
    N = n(28671),
    j = n(430790),
    P = n(640078),
    x = n(190862),
    A = n(682085),
    Z = n(996921),
    w = n(661462),
    L = n(795990),
    R = n(388032),
    D = n(830202);
function k(e) {
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
function M(e, t) {
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
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function U(e) {
    var { widget: t } = e,
        n = M(e, ["widget"]);
    return t instanceof b.q
        ? (0, r.jsx)(T.Z, k({ widget: t }, n))
        : t instanceof _.zy
          ? (0, r.jsx)(x.Z, k({ widget: t }, n))
          : null;
}
function G() {
    return (0, r.jsxs)("div", {
        className: D.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(c.d3s, { size: "xs" }),
            (0, r.jsx)(c.Text, {
                "aria-label": R.intl.string(R.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: R.intl.string(R.t["7blcz8"]),
            }),
        ],
    });
}
function B(e) {
    let { user: t } = e,
        { application: n } = (0, v.G)(),
        { token: i } = (0, d.o)(null == n ? void 0 : n.id),
        l = (0, S.Z)(t.id),
        a = (0, O.k)({ location: "ApplicationWidgetUpsell" }),
        o = l.some((e) => e instanceof b.q && e.applicationId === (null == n ? void 0 : n.id));
    return null == n || !a || null == i || o
        ? null
        : (0, r.jsx)(p.ZP, {
              contentTypes: [s.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
              children: (e) => {
                  let { visibleContent: i, markAsDismissed: l } = e;
                  return i === s.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET
                      ? (0, r.jsx)(N.Z, {
                            user: t,
                            application: n,
                            onDismiss: l,
                        })
                      : null;
              },
          });
}
function H(e) {
    let { user: t, guildId: n, channelId: l } = e,
        a = (0, S.Z)(t.id),
        s = (0, o.e7)([g.default], () => g.default.getId() === t.id),
        c = (() => {
            let [e, t] = (0, o.Wu)([m.Z], () => [m.Z.ipCountryCode, m.Z.ipCountryCodeRequest]),
                n = (0, f.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && n && (0, u.GE)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        d = (0, O.k)({ location: "UserProfileModalV2Widgets" }),
        p = 0 === a.length && s,
        v = i.useMemo(() => a.filter(_.Wc), [a]),
        y = i.useMemo(() => a.filter((e) => e instanceof b.q), [a]);
    (0, C.ZP)(v), (0, E.J)(s, v);
    var T = t.id;
    (0, I.s)(y);
    let { data: N, refetch: P } = (0, h.O)(T),
        x = i.useRef(N);
    if (
        ((x.current = N),
        i.useEffect(() => {
            null !== x.current && P();
        }, [P]),
        p)
    )
        if (d) return (0, r.jsx)(A.Z, {});
        else return (0, r.jsx)(L.Z, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s && c && (0, r.jsx)(G, {}),
            s && (0, r.jsx)(B, { user: t }),
            a.map((e, i) =>
                (0, r.jsx)(
                    U,
                    {
                        widget: e,
                        user: t,
                        guildId: n,
                        channelId: l,
                        index: i,
                    },
                    e.type,
                ),
            ),
            s && (0, r.jsx)(j.Z, {}),
        ],
    });
}
function V(e) {
    var { user: t } = e,
        n = M(e, ["user"]);
    let l = i.useRef(null);
    (0, y.r)({ container: l.current });
    let o = (0, Z.h)(t.id);
    return (0, r.jsxs)(w.F, {
        "data-scroller": !0,
        scrollerRef: l,
        className: a()(D.scroller, { [D.hasToolbar]: o }),
        fade: !0,
        children: [(0, r.jsx)(P.Z, { scrollerRef: l }), (0, r.jsx)(H, k({ user: t }, n))],
    });
}
