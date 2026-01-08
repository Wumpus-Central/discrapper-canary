n.d(t, {
    C: () => F,
    Z: () => L,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(355467),
    u = n(251296),
    d = n(513417),
    f = n(835473),
    g = n(243778),
    p = n(981312),
    m = n(929677),
    b = n(314897),
    y = n(351402),
    j = n(931847),
    h = n(836197),
    O = n(206599),
    v = n(5136),
    x = n(517157),
    P = n(860717),
    I = n(28671),
    w = n(729424),
    S = n(34335),
    E = n(683881),
    T = n(190862),
    _ = n(682085),
    C = n(996921),
    N = n(661462),
    Z = n(795990),
    A = n(388032),
    D = n(3083);
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
function R(e, t) {
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
function L(e) {
    var { widget: t } = e,
        n = R(e, ["widget"]);
    return t instanceof j.q
        ? (0, r.jsx)(P.Z, k({ widget: t }, n))
        : t instanceof h.zy
          ? (0, r.jsx)(T.Z, k({ widget: t }, n))
          : null;
}
function G() {
    return (0, r.jsxs)("div", {
        className: D.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(c.d3s, { size: "xs" }),
            (0, r.jsx)(c.Text, {
                "aria-label": A.intl.string(A.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: A.intl.string(A.t["7blcz6"]),
            }),
        ],
    });
}
function B() {
    let { isLoading: e, suggestions: t, currentUser: n } = (0, d.Z)({ location: "ApplicationWidgetUpsell" });
    return e
        ? null
        : (0, r.jsx)(g.ZP, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: i, markAsDismissed: l } = e,
                      a = t.find((e) => e.dismissibleContent === i);
                  return null == a
                      ? null
                      : (0, r.jsx)(I.Z, {
                            user: n,
                            application: a.application,
                            onDismiss: l,
                        });
              },
          });
}
function M(e) {
    let { user: t, guildId: n, channelId: l } = e,
        a = (0, x.Z)(t.id),
        c = (0, o.e7)([b.default], () => b.default.getId() === t.id),
        d = (() => {
            let [e, t] = (0, o.Wu)([y.Z], () => [y.Z.ipCountryCode, y.Z.ipCountryCodeRequest]),
                n = (0, p.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && n && (0, s.GE)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        g = (0, u.q5)({ location: "UserProfileModalV2Widgets" }),
        v = 0 === a.length && c,
        P = i.useMemo(() => a.filter(h.Wc), [a]),
        I = i.useMemo(() => a.filter((e) => e instanceof j.q), [a]);
    (0, O.J)(c, P),
        ((e, t) => {
            let n = i.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, f.Z)(n);
            let { data: r, refetch: l } = (0, m.O)(e),
                a = i.useRef(null !== r);
            i.useEffect(() => {
                a.current && ((a.current = !1), l());
            }, [l]);
        })(t.id, I);
    let E = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                c &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(w.Z, { className: D.editingHeader }),
                            d && (0, r.jsx)(G, {}),
                            g && (0, r.jsx)(B, {}),
                        ],
                    }),
                a.map((e, i) =>
                    (0, r.jsx)(
                        L,
                        {
                            widget: e,
                            user: t,
                            guildId: n,
                            channelId: l,
                            index: i,
                        },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    if (v)
        if (g) return (0, r.jsx)(_.Z, {});
        else return (0, r.jsx)(Z.Z, {});
    return c ? (0, r.jsx)(S.K, { children: E() }) : E();
}
function F(e) {
    var { user: t } = e,
        n = R(e, ["user"]);
    let l = i.useRef(null);
    (0, v.r)({ containerRef: l });
    let o = (0, C.h)(t.id);
    return (0, r.jsxs)(N.F, {
        "data-scroller": !0,
        scrollerRef: l,
        className: a()(D.scroller, { [D.hasToolbar]: o }),
        fade: !0,
        children: [(0, r.jsx)(E.Z, { scrollerRef: l }), (0, r.jsx)(M, k({ user: t }, n))],
    });
}
