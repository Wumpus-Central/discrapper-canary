n.d(t, {
    $: () => V,
}),
    n(747238);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(565645),
    o = n(730134),
    c = n(688810),
    u = n(587895),
    d = n(22007),
    f = n(46054),
    p = n(102876),
    h = n(657331),
    b = n(253932),
    g = n(427157),
    m = n(287809),
    A = n(954571),
    y = n(661191),
    O = n(998218),
    j = n(245205),
    v = n(322387),
    x = n(995273),
    E = n(96511),
    _ = n(160098),
    C = n(429604),
    S = n(9905),
    I = n(717607),
    N = n(457404),
    T = n(652215),
    P = n(985018),
    w = n(993169),
    R = n(213398),
    D = n(537997);

function M(e) {
    var t, n, l, i, s;
    let { item: c } = e,
        u = null == (n = c.message) ? void 0 : n.content;
    if (null == u) return (0, r.jsx)("div", {});
    let d =
            null != (t = m.default.getUser(null == (i = c.message) || null == (l = i.author) ? void 0 : l.id))
                ? t
                : new g.A(null == (s = c.message) ? void 0 : s.author),
        p = f.A.parse(u);
    return (0, r.jsxs)("div", {
        className: w.PI,
        children: [
            (0, r.jsx)(o.A, {
                user: d,
                size: a._3J.SIZE_24,
            }),
            (0, r.jsx)(a.Text, {
                className: w.Bp,
                variant: "text-sm/normal",
                lineClamp: 2,
                children: p,
            }),
        ],
    });
}

function L(e) {
    let {
        item: { callout: t },
    } = e;
    if (null == t) return null;
    let n = f.A.parse(t);
    return (0, r.jsx)("div", {
        className: w.CD,
        children: (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            lineClamp: 2,
            children: n,
        }),
    });
}

function G(e) {
    let { item: t } = e,
        n = D,
        l = P.intl.string(P.t.SJTHJb);
    return (
        t.completed && ((n = R), (l = P.intl.string(P.t.f6RTAM))),
        (0, r.jsxs)("div", {
            className: w.AE,
            children: [
                (0, r.jsx)("img", {
                    className: w.kv,
                    alt: "",
                    src: n,
                }),
                (0, r.jsx)(a.Text, {
                    className: w.mc,
                    variant: "text-xs/bold",
                    color: "text-default",
                    children: l,
                }),
            ],
        })
    );
}

function k(e) {
    let { applicationId: t } = e,
        n = (0, i.bG)([u.A], () => u.A.getApplication(t));
    return null == n
        ? (0, r.jsx)("div", {})
        : (0, r.jsx)(
              p.A,
              {
                  application: n,
              },
              n.id,
          );
}
let U = l.memo(function (e) {
        var t;
        let { item: i, ackedBeforeId: o } = e,
            { analyticsLocations: u } = (0, c.Ay)(),
            p = (0, C.t)(i, o),
            b = l.useCallback(async () => {
                if ((p || (0, j.R7)(i), null != i.item_enum && i.item_enum === v.r_.FIND_FRIENDS))
                    return void (0, a.mMO)(async () => {
                        let { default: e } = await n.e("67248").then(n.bind(n, 911539));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                (function (e) {
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
                                })(
                                    {
                                        source: "Notification Center",
                                    },
                                    t,
                                ),
                            );
                    });
                if (null != i.deeplink) {
                    let t = O.A.safeParseWithQuery(i.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        r = t.path;
                    if (null == n || null == r) return;
                    if (O.A.isDiscordHostname(n)) {
                        let t = r.match("^/users/(\\d+)");
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, h.openUserProfileModal)({
                                userId: t[1],
                                messageId: null == (e = i.message) ? void 0 : e.id,
                                sourceAnalyticsLocations: u,
                            });
                        } else await (0, d.A)(r);
                    }
                    A.default.track(T.HAw.NOTIFICATION_CENTER_ACTION, {
                        action_type: v.e1.CLICKED,
                        notification_center_id: i.id,
                        item_type: i.type,
                        acked: p,
                    });
                }
            }, [i, p, u]),
            g = null;
        i.type === v.Uo.INCOMING_FRIEND_REQUESTS && null != i.other_user
            ? (g = (0, r.jsx)(I.A, {
                  userId: i.other_user.id,
              }))
            : i.type === v.Uo.INCOMING_GAME_FRIEND_REQUESTS &&
              null != i.other_user &&
              (g = (0, r.jsx)(I.A, {
                  userId: i.other_user.id,
                  applicationId: i.applicationId,
              }));
        let m = null != i.local_id,
            _ = (0, E.A)({
                item: i,
                renderApplication: (e) =>
                    (0, r.jsx)(k, {
                        applicationId: e,
                    }),
            }),
            { emoji_id: P, emoji_name: R } = i,
            D =
                null != P || null != R
                    ? (0, r.jsx)(s.A, {
                          className: w.Zg,
                          emojiId: P,
                          emojiName: R,
                      })
                    : null;
        return (0, r.jsxs)("div", {
            className: w.nM,
            children: [
                (0, r.jsxs)(a.sqX, {
                    className: w.u4,
                    focusProps: {
                        offset: 4,
                    },
                    "aria-label": _,
                    onClick: b,
                    children: [
                        p
                            ? null
                            : (0, r.jsx)("div", {
                                  className: w.gy,
                              }),
                        (0, r.jsx)(S.J, {
                            item: i,
                        }),
                        (0, r.jsxs)("div", {
                            className: w.rf,
                            children: [
                                "lifecycle_item" === i.type &&
                                    null != i.item_enum &&
                                    (0, r.jsx)(G, {
                                        item: i,
                                    }),
                                (0, r.jsxs)(a.Text, {
                                    variant: "text-md/normal",
                                    color: p ? "text-muted" : "text-default",
                                    children: ["string" != typeof _ ? _ : f.A.parse(_), D],
                                }),
                                (null == (t = i.message) ? void 0 : t.content) != null
                                    ? (0, r.jsx)(M, {
                                          item: i,
                                      })
                                    : null,
                                null != i.callout
                                    ? (0, r.jsx)(L, {
                                          item: i,
                                      })
                                    : null,
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    color: p ? "text-muted" : "text-default",
                                    children: (0, x.jb)(y.default.extractTimestamp(i.id)),
                                }),
                                g,
                            ],
                        }),
                    ],
                }),
                m
                    ? null
                    : (0, r.jsx)(N.e, {
                          item: i,
                      }),
            ],
        });
    }),
    V = l.memo(function (e) {
        let { items: t } = e,
            n = b.ns.useSetting();
        return (
            (0, _.q)(t),
            (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        U,
                        {
                            item: e,
                            ackedBeforeId: n,
                        },
                        e.id,
                    ),
                ),
            })
        );
    });
