n.d(t, { A: () => F, u: () => G });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(885574),
    c = n(834730),
    d = n(395332),
    u = n(566605),
    _ = n(429913),
    g = n(323082),
    f = n(379848),
    m = n(840387),
    x = n(201718),
    p = n(961350),
    I = n(615405),
    A = n(633075),
    h = n(289173),
    E = n(958338),
    v = n(823142),
    C = n(667049),
    b = n(605694),
    j = n(357541),
    T = n(236599),
    N = n(192),
    S = n(128988),
    k = n(795755),
    O = n(53977),
    L = n(982599),
    P = n(515054),
    R = n(266713),
    w = n(985018),
    D = n(117444);
function G(e) {
    let { widget: t, ...n } = e;
    return t instanceof A.R
        ? (0, i.jsx)(b.A, { widget: t, ...n })
        : t instanceof h.Yy
          ? (0, i.jsx)(k.A, { widget: t, ...n })
          : null;
}
function y() {
    return (0, i.jsxs)("div", {
        className: D.mJ,
        children: [
            (0, i.jsx)(o.m, { size: "xs" }),
            (0, i.jsx)(c.E, {
                "aria-label": w.intl.string(w.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: w.intl.string(w.t["7blcz6"]),
            }),
        ],
    });
}
function M() {
    let { isLoading: e, suggestions: t, currentUser: n } = (0, u.A)({ location: "ApplicationWidgetUpsell" });
    return e || null == n
        ? null
        : (0, i.jsx)(f.Ay, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: a, markAsDismissed: l } = e,
                      s = t.find((e) => e.dismissibleContent === a);
                  return null == s ? null : (0, i.jsx)(j.A, { user: n, application: s.application, onDismiss: l });
              },
          });
}
function U(e) {
    let { user: t, guildId: n, channelId: l } = e,
        s = (0, C.A)(t.id),
        o = (0, r.bG)([p.default], () => p.default.getId() === t.id),
        c = (() => {
            let [e, t] = (0, r.yK)([I.A], () => [I.A.ipCountryCode, I.A.ipCountryCodeRequest]),
                n = (0, m.Z)();
            return (
                a.useEffect(() => {
                    null == e && null == t && n && (0, g.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        u = (0, d.QR)({ location: "UserProfileModalV2Widgets" }),
        f = 0 === s.length && o,
        v = a.useMemo(() => s.filter(h.fu), [s]),
        b = a.useMemo(() => s.filter((e) => e instanceof A.R), [s]);
    (0, E.Y)(o, v),
        ((e, t) => {
            let n = a.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, _.A)(n);
            let { data: i, refetch: l } = (0, x.P)(e),
                s = a.useRef(null !== i);
            a.useEffect(() => {
                s.current && ((s.current = !1), l());
            }, [l]);
        })(t.id, b);
    let j = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(T.A, { className: D.cG }),
                            c && (0, i.jsx)(y, {}),
                            u && (0, i.jsx)(M, {}),
                        ],
                    }),
                s.map((e, a) =>
                    (0, i.jsx)(G, { widget: e, user: t, guildId: n, channelId: l, index: a }, e.getUniqueKey()),
                ),
            ],
        });
    if (f)
        if (u) return (0, i.jsx)(O.A, {});
        else return (0, i.jsx)(R.A, {});
    return o ? (0, i.jsx)(N.D, { children: j() }) : j();
}
function F(e) {
    let { user: t, ...n } = e,
        l = a.useRef(null);
    (0, v.i)({ containerRef: l });
    let r = (0, L.k)(t.id);
    return (0, i.jsxs)(P.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: s()(D.XG, { [D.az]: r }),
        fade: !0,
        children: [(0, i.jsx)(S.A, { scrollerRef: l }), (0, i.jsx)(U, { user: t, ...n })],
    });
}
