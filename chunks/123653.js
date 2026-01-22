n.d(t, {
    A: () => p,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(884362),
    i = n(837381),
    s = n(311907),
    c = n(397927),
    o = n(775602),
    d = n(422844),
    u = n(435470),
    m = n(853742),
    h = n(376310),
    f = n(652215),
    g = n(985018),
    x = n(553017);

function b() {
    return Promise.resolve();
}

function p(e) {
    let { channel: t, closePopout: n, setPopoutRef: p } = e,
        j = (0, u.OT)(t),
        { tagFilter: v } = (0, d.R)(t.id),
        y = (0, d.p)(),
        A = (0, s.bG)([o.A], () => o.A.keyboardModeEnabled),
        C = r.useCallback(
            (e) => {
                (0, m.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(v),
                    added: !v.has(e),
                    location: {
                        page: f.liQ.GUILD_CHANNEL,
                        section: f.JJy.FORUM_CHANNEL_HEADER,
                        object: f.ZSU.CHANNEL_TAG,
                    },
                }),
                    y.getState().toggleTagFilter(t.id, e);
            },
            [t, v, y],
        ),
        O = r.useCallback(() => {
            y.getState().setTagFilter(t.id, new Set()), A || n();
        }, [y, t.id, A, n]),
        N = (0, a.Ay)({
            id: "".concat(t.id, "-all-tags-dropdown-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: b,
            scrollToEnd: b,
        }),
        S = r.useRef(null);
    return (
        r.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != S.current) {
                    let e = S.current.querySelector(".".concat(x.Tc));
                    null != e && e.focus();
                }
            });
        }, []),
        (0, l.jsxs)(c.lGe, {
            ref: (e) => {
                null == p || p(e);
            },
            "aria-label": g.intl.string(g.t.TdqRTh),
            className: x.kL,
            children: [
                (0, l.jsx)("div", {
                    className: x.wx,
                    children: (0, l.jsxs)("div", {
                        className: x.LD,
                        children: [
                            (0, l.jsx)(c.Heading, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: x.TK,
                                children: g.intl.string(g.t.HPu3kq),
                            }),
                            (0, l.jsx)("div", {
                                className: x.d1,
                                children: (0, l.jsx)(c.Text, {
                                    className: x.lT,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    tabularNumbers: !0,
                                    children: v.size,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(i.hD, {
                    navigator: N,
                    children: (0, l.jsx)(i.PR, {
                        children: (e) => {
                            var t, n;
                            let { ref: r } = e,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        l,
                                        r,
                                        a = {};
                                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                                        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                                            (l = n[r]),
                                                !(t.indexOf(l) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, l) &&
                                                    (a[l] = e[l]);
                                        return a;
                                    }
                                    if (
                                        ((a = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                l,
                                                r = {},
                                                a = Object.getOwnPropertyNames(e);
                                            for (l = 0; l < a.length; l++)
                                                (n = a[l]),
                                                    !(t.indexOf(n) >= 0) &&
                                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                        (r[n] = e[n]);
                                            return r;
                                        })(e, t)),
                                        Object.getOwnPropertySymbols)
                                    )
                                        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                                            (l = n[r]),
                                                !(t.indexOf(l) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, l) &&
                                                    (a[l] = e[l]);
                                    return a;
                                })(e, ["ref"]);
                            return (0, l.jsx)(
                                "div",
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        ref: (e) => {
                                            (r.current = e), (S.current = e);
                                        },
                                    },
                                    a,
                                )),
                                (n = n =
                                    {
                                        className: x.I8,
                                        children: j.map((e) =>
                                            (0, l.jsx)(
                                                h.A,
                                                {
                                                    className: x.Tc,
                                                    tag: e,
                                                    selected: v.has(e.id),
                                                    onClick: () => C(e.id),
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, l);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t),
                            );
                        },
                    }),
                }),
                (0, l.jsx)("div", {
                    className: x.me,
                }),
                (0, l.jsx)(c.QWc, {
                    "aria-label": g.intl.string(g.t["98EPQP"]),
                    onClick: O,
                    text: g.intl.string(g.t["98EPQP"]),
                }),
            ],
        })
    );
}
