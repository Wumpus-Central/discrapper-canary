n.d(t, {
    A: () => X,
    u: () => L,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(384904),
    u = n(395332),
    d = n(566605),
    f = n(429913),
    p = n(379848),
    b = n(840387),
    g = n(201718),
    m = n(961350),
    y = n(615405),
    O = n(633075),
    j = n(289173),
    x = n(958338),
    h = n(600761),
    v = n(667049),
    A = n(605694),
    w = n(357541),
    I = n(236599),
    P = n(192),
    E = n(128988),
    S = n(795755),
    T = n(53977),
    _ = n(982599),
    N = n(515054),
    D = n(266713),
    R = n(985018),
    C = n(368379);

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

function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}

function L(e) {
    let { widget: t } = e,
        n = G(e, ["widget"]);
    return t instanceof O.R
        ? (0, r.jsx)(
              A.A,
              k(
                  {
                      widget: t,
                  },
                  n,
              ),
          )
        : t instanceof j.Yy
          ? (0, r.jsx)(
                S.A,
                k(
                    {
                        widget: t,
                    },
                    n,
                ),
            )
          : null;
}

function U() {
    return (0, r.jsxs)("div", {
        className: C.mJ,
        children: [
            (0, r.jsx)(o.mir, {
                size: "xs",
            }),
            (0, r.jsx)(o.Text, {
                "aria-label": R.intl.string(R.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: R.intl.string(R.t["7blcz6"]),
            }),
        ],
    });
}

function M() {
    let {
        isLoading: e,
        suggestions: t,
        currentUser: n,
    } = (0, d.A)({
        location: "ApplicationWidgetUpsell",
    });
    return e
        ? null
        : (0, r.jsx)(p.Ay, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: i } = e,
                      a = t.find((e) => e.dismissibleContent === l);
                  return null == a
                      ? null
                      : (0, r.jsx)(w.A, {
                            user: n,
                            application: a.application,
                            onDismiss: i,
                        });
              },
          });
}

function F(e) {
    let { user: t, guildId: n, channelId: i } = e,
        a = (0, v.A)(t.id),
        o = (0, s.bG)([m.default], () => m.default.getId() === t.id),
        d = (() => {
            let [e, t] = (0, s.yK)([y.A], () => [y.A.ipCountryCode, y.A.ipCountryCodeRequest]),
                n = (0, b.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, c.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        p = (0, u.JY)({
            location: "UserProfileModalV2Widgets",
        }),
        h = 0 === a.length && o,
        A = l.useMemo(() => a.filter(j.fu), [a]),
        w = l.useMemo(() => a.filter((e) => e instanceof O.R), [a]);
    (0, x.Y)(o, A),
        ((e, t) => {
            let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, f.A)(n);
            let { data: r, refetch: i } = (0, g.P)(e),
                a = l.useRef(null !== r);
            l.useEffect(() => {
                a.current && ((a.current = !1), i());
            }, [i]);
        })(t.id, w);
    let E = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                o &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(I.A, {
                                className: C.cG,
                            }),
                            d && (0, r.jsx)(U, {}),
                            p && (0, r.jsx)(M, {}),
                        ],
                    }),
                a.map((e, l) =>
                    (0, r.jsx)(
                        L,
                        {
                            widget: e,
                            user: t,
                            guildId: n,
                            channelId: i,
                            index: l,
                        },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    if (h)
        if (p) return (0, r.jsx)(T.A, {});
        else return (0, r.jsx)(D.A, {});
    return o
        ? (0, r.jsx)(P.D, {
              children: E(),
          })
        : E();
}

function X(e) {
    let { user: t } = e,
        n = G(e, ["user"]),
        i = l.useRef(null);
    (0, h.i)({
        containerRef: i,
    });
    let s = (0, _.k)(t.id);
    return (0, r.jsxs)(N.K, {
        "data-scroller": !0,
        scrollerRef: i,
        className: a()(C.XG, {
            [C.az]: s,
        }),
        fade: !0,
        children: [
            (0, r.jsx)(E.A, {
                scrollerRef: i,
            }),
            (0, r.jsx)(
                F,
                k(
                    {
                        user: t,
                    },
                    n,
                ),
            ),
        ],
    });
}
