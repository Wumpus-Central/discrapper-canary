n.d(t, { A: () => F, u: () => y });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(885574),
    c = n(834730),
    d = n(395332),
    u = n(566605),
    g = n(429913),
    m = n(323082),
    _ = n(379848),
    f = n(840387),
    x = n(201718),
    p = n(961350),
    I = n(615405),
    A = n(633075),
    h = n(289173),
    E = n(958338),
    v = n(600761),
    j = n(667049),
    N = n(605694),
    b = n(357541),
    C = n(236599),
    S = n(192),
    T = n(128988),
    O = n(795755),
    k = n(53977),
    P = n(982599),
    L = n(515054),
    R = n(266713),
    D = n(985018),
    G = n(117444);
function y(e) {
    let { widget: t, ...n } = e;
    return t instanceof A.R
        ? (0, i.jsx)(N.A, { widget: t, ...n })
        : t instanceof h.Yy
          ? (0, i.jsx)(O.A, { widget: t, ...n })
          : null;
}
function w() {
    return (0, i.jsxs)("div", {
        className: G.mJ,
        children: [
            (0, i.jsx)(o.m, { size: "xs" }),
            (0, i.jsx)(c.E, {
                "aria-label": D.intl.string(D.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: D.intl.string(D.t["7blcz6"]),
            }),
        ],
    });
}
function M() {
    let { isLoading: e, suggestions: t, currentUser: n } = (0, u.A)({ location: "ApplicationWidgetUpsell" });
    return e || null == n
        ? null
        : (0, i.jsx)(_.Ay, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: a, markAsDismissed: l } = e,
                      s = t.find((e) => e.dismissibleContent === a);
                  return null == s ? null : (0, i.jsx)(b.A, { user: n, application: s.application, onDismiss: l });
              },
          });
}
function U(e) {
    let { user: t, guildId: n, channelId: l } = e,
        s = (0, j.A)(t.id),
        o = (0, r.bG)([p.default], () => p.default.getId() === t.id),
        c = (() => {
            let [e, t] = (0, r.yK)([I.A], () => [I.A.ipCountryCode, I.A.ipCountryCodeRequest]),
                n = (0, f.Z)();
            return (
                a.useEffect(() => {
                    null == e && null == t && n && (0, m.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        u = (0, d.QR)({ location: "UserProfileModalV2Widgets" }),
        _ = 0 === s.length && o,
        v = a.useMemo(() => s.filter(h.fu), [s]),
        N = a.useMemo(() => s.filter((e) => e instanceof A.R), [s]);
    (0, E.Y)(o, v),
        ((e, t) => {
            let n = a.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, g.A)(n);
            let { data: i, refetch: l } = (0, x.P)(e),
                s = a.useRef(null !== i);
            a.useEffect(() => {
                s.current && ((s.current = !1), l());
            }, [l]);
        })(t.id, N);
    let b = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(C.A, { className: G.cG }),
                            c && (0, i.jsx)(w, {}),
                            u && (0, i.jsx)(M, {}),
                        ],
                    }),
                s.map((e, a) =>
                    (0, i.jsx)(y, { widget: e, user: t, guildId: n, channelId: l, index: a }, e.getUniqueKey()),
                ),
            ],
        });
    if (_)
        if (u) return (0, i.jsx)(k.A, {});
        else return (0, i.jsx)(R.A, {});
    return o ? (0, i.jsx)(S.D, { children: b() }) : b();
}
function F(e) {
    let { user: t, ...n } = e,
        l = a.useRef(null);
    (0, v.i)({ containerRef: l });
    let r = (0, P.k)(t.id);
    return (0, i.jsxs)(L.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: s()(G.XG, { [G.az]: r }),
        fade: !0,
        children: [(0, i.jsx)(T.A, { scrollerRef: l }), (0, i.jsx)(U, { user: t, ...n })],
    });
}
