n.d(t, {
    C: () => W,
    Z: () => M,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
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
    y = n(836197),
    O = n(880421),
    v = n(206599),
    j = n(50130),
    x = n(5136),
    P = n(690760),
    _ = n(517157),
    I = n(860717),
    w = n(28671),
    S = n(729424),
    E = n(34335),
    T = n(683881),
    C = n(190862),
    D = n(682085),
    k = n(996921),
    N = n(661462),
    A = n(795990),
    Z = n(388032),
    R = n(830202);
function G(e) {
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
function M(e) {
    var { widget: t } = e,
        n = L(e, ["widget"]);
    return t instanceof h.q
        ? (0, r.jsx)(I.Z, G({ widget: t }, n))
        : t instanceof y.zy
          ? (0, r.jsx)(C.Z, G({ widget: t }, n))
          : null;
}
function B() {
    return (0, r.jsxs)("div", {
        className: R.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(c.d3s, { size: "xs" }),
            (0, r.jsx)(c.Text, {
                "aria-label": Z.intl.string(Z.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: Z.intl.string(Z.t["7blcz6"]),
            }),
        ],
    });
}
function F(e) {
    let { user: t } = e,
        { application: n } = (0, j.G)(),
        { token: i } = (0, d.o)(null == n ? void 0 : n.id),
        l = (0, _.Z)(t.id),
        a = (0, O.k)({ location: "ApplicationWidgetUpsell" }),
        o = l.some((e) => e instanceof h.q && e.applicationId === (null == n ? void 0 : n.id));
    return null == n || !a || null == i || o
        ? null
        : (0, r.jsx)(f.ZP, {
              contentTypes: [s.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
              children: (e) => {
                  let { visibleContent: i, markAsDismissed: l } = e;
                  return i === s.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET
                      ? (0, r.jsx)(w.Z, {
                            user: t,
                            application: n,
                            onDismiss: l,
                        })
                      : null;
              },
          });
}
function U(e) {
    let { user: t, guildId: n, channelId: l } = e,
        a = (0, _.Z)(t.id),
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
        d = (0, O.k)({ location: "UserProfileModalV2Widgets" }),
        f = 0 === a.length && s,
        j = i.useMemo(() => a.filter(y.Wc), [a]),
        x = i.useMemo(() => a.filter((e) => e instanceof h.q), [a]);
    (0, v.J)(s, j);
    var I = t.id;
    (0, P.s)(x);
    let { data: w, refetch: T } = (0, p.O)(I),
        C = i.useRef(w);
    (C.current = w),
        i.useEffect(() => {
            null !== C.current && T();
        }, [T]);
    let k = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                s &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(S.Z, { className: R.editingHeader }),
                            c && (0, r.jsx)(B, {}),
                            (0, r.jsx)(F, { user: t }),
                        ],
                    }),
                a.map((e, i) =>
                    (0, r.jsx)(
                        M,
                        {
                            widget: e,
                            user: t,
                            guildId: n,
                            channelId: l,
                            index: i,
                        },
                        e instanceof h.q ? "".concat(e.type, "-").concat(e.applicationId) : "".concat(e.type),
                    ),
                ),
            ],
        });
    if (f)
        if (d) return (0, r.jsx)(D.Z, {});
        else return (0, r.jsx)(A.Z, {});
    return s ? (0, r.jsx)(E.K, { children: k() }) : k();
}
function W(e) {
    var { user: t } = e,
        n = L(e, ["user"]);
    let l = i.useRef(null);
    (0, x.r)({ containerRef: l });
    let o = (0, k.h)(t.id);
    return (0, r.jsxs)(N.F, {
        "data-scroller": !0,
        scrollerRef: l,
        className: a()(R.scroller, { [R.hasToolbar]: o }),
        fade: !0,
        children: [(0, r.jsx)(T.Z, { scrollerRef: l }), (0, r.jsx)(U, G({ user: t }, n))],
    });
}
