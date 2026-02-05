n.d(t, { A: () => U, u: () => P });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(384904),
    c = n(395332),
    u = n(566605),
    g = n(429913),
    m = n(379848),
    x = n(840387),
    f = n(201718),
    h = n(961350),
    p = n(615405),
    _ = n(633075),
    A = n(289173),
    I = n(958338),
    j = n(600761),
    v = n(667049),
    T = n(605694),
    E = n(357541),
    b = n(236599),
    y = n(192),
    C = n(128988),
    N = n(795755),
    S = n(53977),
    w = n(982599),
    k = n(515054),
    R = n(266713),
    O = n(985018),
    L = n(368379);
function P(e) {
    let { widget: t, ...n } = e;
    return t instanceof _.R
        ? (0, i.jsx)(T.A, { widget: t, ...n })
        : t instanceof A.Yy
          ? (0, i.jsx)(N.A, { widget: t, ...n })
          : null;
}
function D() {
    return (0, i.jsxs)("div", {
        className: L.mJ,
        children: [
            (0, i.jsx)(o.mir, { size: "xs" }),
            (0, i.jsx)(o.Text, {
                "aria-label": O.intl.string(O.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: O.intl.string(O.t["7blcz6"]),
            }),
        ],
    });
}
function G() {
    let { isLoading: e, suggestions: t, currentUser: n } = (0, u.A)({ location: "ApplicationWidgetUpsell" });
    return e
        ? null
        : (0, i.jsx)(m.Ay, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: a } = e,
                      r = t.find((e) => e.dismissibleContent === l);
                  return null == r ? null : (0, i.jsx)(E.A, { user: n, application: r.application, onDismiss: a });
              },
          });
}
function M(e) {
    let { user: t, guildId: n, channelId: a } = e,
        r = (0, v.A)(t.id),
        o = (0, s.bG)([h.default], () => h.default.getId() === t.id),
        u = (() => {
            let [e, t] = (0, s.yK)([p.A], () => [p.A.ipCountryCode, p.A.ipCountryCodeRequest]),
                n = (0, x.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, d.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        m = (0, c.JY)({ location: "UserProfileModalV2Widgets" }),
        j = 0 === r.length && o,
        T = l.useMemo(() => r.filter(A.fu), [r]),
        E = l.useMemo(() => r.filter((e) => e instanceof _.R), [r]);
    (0, I.Y)(o, T),
        ((e, t) => {
            let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, g.A)(n);
            let { data: i, refetch: a } = (0, f.P)(e),
                r = l.useRef(null !== i);
            l.useEffect(() => {
                r.current && ((r.current = !1), a());
            }, [a]);
        })(t.id, E);
    let C = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(b.A, { className: L.cG }),
                            u && (0, i.jsx)(D, {}),
                            m && (0, i.jsx)(G, {}),
                        ],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(P, { widget: e, user: t, guildId: n, channelId: a, index: l }, e.getUniqueKey()),
                ),
            ],
        });
    if (j)
        if (m) return (0, i.jsx)(S.A, {});
        else return (0, i.jsx)(R.A, {});
    return o ? (0, i.jsx)(y.D, { children: C() }) : C();
}
function U(e) {
    let { user: t, ...n } = e,
        a = l.useRef(null);
    (0, j.i)({ containerRef: a });
    let s = (0, w.k)(t.id);
    return (0, i.jsxs)(k.K, {
        "data-scroller": !0,
        scrollerRef: a,
        className: r()(L.XG, { [L.az]: s }),
        fade: !0,
        children: [(0, i.jsx)(C.A, { scrollerRef: a }), (0, i.jsx)(M, { user: t, ...n })],
    });
}
