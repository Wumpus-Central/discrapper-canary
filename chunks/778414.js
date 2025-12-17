n.d(t, {
    C: () => W,
    Z: () => L,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
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
    b = n(314897),
    m = n(351402),
    h = n(931847),
    y = n(836197),
    v = n(880421),
    O = n(206599),
    j = n(50130),
    x = n(5136),
    P = n(690760),
    w = n(517157),
    I = n(860717),
    S = n(28671),
    E = n(729424),
    T = n(34335),
    _ = n(683881),
    C = n(190862),
    D = n(682085),
    k = n(996921),
    N = n(661462),
    A = n(795990),
    Z = n(388032),
    R = n(3083);
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
function M(e, t) {
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
function L(e) {
    var { widget: t } = e,
        n = M(e, ["widget"]);
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
            (0, r.jsx)(s.d3s, { size: "xs" }),
            (0, r.jsx)(s.Text, {
                "aria-label": Z.intl.string(Z.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: Z.intl.string(Z.t["7blcz6"]),
            }),
        ],
    });
}
function U(e) {
    let { user: t } = e,
        { application: n } = (0, j.G)(),
        { token: i } = (0, d.o)(null == n ? void 0 : n.id),
        a = (0, w.Z)(t.id),
        l = (0, v.k)({ location: "ApplicationWidgetUpsell" }),
        o = a.some((e) => e instanceof h.q && e.applicationId === (null == n ? void 0 : n.id));
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
function F(e) {
    let { user: t, guildId: n, channelId: a } = e,
        l = (0, w.Z)(t.id),
        c = (0, o.e7)([b.default], () => b.default.getId() === t.id),
        s = (() => {
            let [e, t] = (0, o.Wu)([m.Z], () => [m.Z.ipCountryCode, m.Z.ipCountryCodeRequest]),
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
        j = i.useMemo(() => l.filter(y.Wc), [l]),
        x = i.useMemo(() => l.filter((e) => e instanceof h.q), [l]);
    (0, O.J)(c, j);
    var I = t.id;
    (0, P.s)(x);
    let { data: S, refetch: _ } = (0, p.O)(I),
        C = i.useRef(S);
    (C.current = S),
        i.useEffect(() => {
            null !== C.current && _();
        }, [_]);
    let k = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                c &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(E.Z, { className: R.editingHeader }),
                            s && (0, r.jsx)(B, {}),
                            (0, r.jsx)(U, { user: t }),
                        ],
                    }),
                l.map((e, i) =>
                    (0, r.jsx)(
                        L,
                        {
                            widget: e,
                            user: t,
                            guildId: n,
                            channelId: a,
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
    return c ? (0, r.jsx)(T.K, { children: k() }) : k();
}
function W(e) {
    var { user: t } = e,
        n = M(e, ["user"]);
    let a = i.useRef(null);
    (0, x.r)({ containerRef: a });
    let o = (0, k.h)(t.id);
    return (0, r.jsxs)(N.F, {
        "data-scroller": !0,
        scrollerRef: a,
        className: l()(R.scroller, { [R.hasToolbar]: o }),
        fade: !0,
        children: [(0, r.jsx)(_.Z, { scrollerRef: a }), (0, r.jsx)(F, G({ user: t }, n))],
    });
}
