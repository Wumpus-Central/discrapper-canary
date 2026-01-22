n.d(t, {
    Ay: () => j,
    Sm: () => G,
    bc: () => H,
    dR: () => k,
    gz: () => F,
    i8: () => B,
    jX: () => M,
    xb: () => V,
}),
    n(142703),
    n(321073),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(492462),
    l = n(960488),
    c = n(158954),
    u = n(311907),
    d = n(571356),
    f = n(397927),
    p = n(573435),
    _ = n(726249),
    h = n(310419),
    m = n(976860),
    g = n(345942),
    E = n(734057),
    b = n(576705),
    y = n(309010),
    O = n(954571),
    A = n(486020),
    v = n(203982),
    S = n(998218),
    I = n(321987),
    T = n(652215),
    C = n(985018),
    N = n(756302);

function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function w(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}

function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = L(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function j(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: a, spinner: o } = e;
    return (
        (0, _.HU)({
            location: C.intl.string(C.t["3S2494"]),
        }),
        (0, r.jsxs)("div", {
            className: N.iE,
            children: [
                o ? (0, r.jsx)(f.y$y, {}) : null,
                (0, r.jsx)("div", {
                    className: s()(N.wx, i),
                }),
                (0, r.jsx)(f.Heading, {
                    variant: "heading-lg/bold",
                    className: N.Qq,
                    children: t,
                }),
                null != n ? n : null,
                a
                    ? (0, r.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: N.lO,
                          children: C.intl.string(C.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}

function M(e) {
    return (0, r.jsx)(
        j,
        D(w({}, e), {
            headerClassName: N.nQ,
        }),
    );
}

function k(e) {
    let { guild: t, application: n } = e,
        a = x(e, ["guild", "application"]),
        { onClose: s } = a,
        o = i.useCallback(() => {
            (null == t ? void 0 : t.id) != null &&
                ((0, g.u)(null == t ? void 0 : t.id),
                null == s || s(),
                O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: null == n ? void 0 : n.id,
                    guild_id: null == t ? void 0 : t.id,
                }));
        }, [s, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        l = h.h.getField("entrypoint"),
        c = i.useCallback(() => {
            null == s || s(),
                O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: null == n ? void 0 : n.id,
                });
        }, [s, null == n ? void 0 : n.id]),
        d = window.location.pathname.startsWith(T.BVt.APPLICATION_DIRECTORY),
        f = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                (null == s || s(),
                null != l && (0, m.pX)(""),
                setImmediate(() => {
                    v._.dispatchToLastSubscribed(T.jej.OPEN_APP_LAUNCHER, {
                        applicationId: n.id,
                    }),
                        O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, {
                            application_id: n.id,
                        });
                }));
        }, [null == n ? void 0 : n.id, s, l]),
        p = (0, u.bG)([y.A, E.A], () => E.A.getChannel(y.A.getChannelId())),
        _ = (0, u.bG)([b.A], () => b.A.can(T.xBc.SEND_MESSAGES, p)),
        A = null != t,
        S = null == t && _ && (!d || null != l),
        N = [];
    return (
        (null != t || null != s) &&
            (null != s &&
                N.push({
                    variant: "secondary",
                    text: C.intl.string(C.t.cpT0Cq),
                    onClick: c,
                }),
            A &&
                N.push({
                    variant: "primary",
                    text:
                        (null == t ? void 0 : t.name.length) > 30
                            ? C.intl.string(C.t.M35zFB)
                            : C.intl.format(C.t.UdYYP3, {
                                  guildName: null == t ? void 0 : t.name,
                              }),
                    onClick: o,
                }),
            S &&
                N.push({
                    variant: "primary",
                    text: C.intl.string(C.t["0cCDKP"]),
                    onClick: f,
                })),
        (0, r.jsx)(
            I.f,
            D(w({}, a), {
                actions: N,
                children: (0, r.jsx)(
                    U,
                    w(
                        {
                            guild: t,
                            application: n,
                        },
                        a,
                    ),
                ),
            }),
        )
    );
}

function U(e) {
    let { guild: t, application: n } = e,
        a = x(e, ["guild", "application"]),
        s = C.intl.string(C.t.se5gLj);
    i.useEffect(() => {
        O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
            application_id: null == n ? void 0 : n.id,
        });
    }, [null == n ? void 0 : n.id]);
    let o = i.useMemo(
            () =>
                null != n
                    ? null != t
                        ? C.intl.format(C.t.IlF6IY, {
                              installedApplicationName: null == n ? void 0 : n.name,
                              guildName: null == t ? void 0 : t.name,
                          })
                        : C.intl.format(C.t.vTVC5T, {
                              installedApplicationName: null == n ? void 0 : n.name,
                          })
                    : C.intl.string(C.t["Dp+rgP"]),
            [n, t],
        ),
        l = (0, r.jsx)(d.E, {
            variant: "text-md/normal",
            className: N.OY,
            children: o,
        });
    return (0, r.jsx)(
        M,
        w(
            {
                message: s,
                footer: l,
            },
            a,
        ),
    );
}

function G(e) {
    let { application: t } = e,
        n = x(e, ["application"]),
        { onClose: a } = n;
    i.useEffect(() => {
        O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
            application_id: t.id,
        });
    }, [t.id]);
    let s = i.useCallback(() => {
        null == a || a(),
            O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                application_id: t.id,
            });
    }, [a, t.id]);
    return (0, r.jsx)(
        I.f,
        D(w({}, n), {
            actions: [
                {
                    variant: "primary",
                    text: C.intl.string(C.t["31Bci5"]),
                    onClick: s,
                },
            ],
            children: (0, r.jsxs)("div", {
                className: N.kV,
                children: [
                    (0, r.jsx)(p.Ay, {
                        mask: p.hW.SQUIRCLE,
                        className: N.LR,
                        children: (0, r.jsx)("img", {
                            alt: t.name,
                            src: A.Ay.getApplicationIconURL({
                                id: t.id,
                                icon: t.icon,
                            }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: N.fv,
                        children: [
                            (0, r.jsx)(f.Heading, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: C.intl.format(C.t["1Q+p1k"], {
                                    appName: t.name,
                                }),
                            }),
                            (0, r.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: C.intl.format(C.t.Mr7x5U, {
                                    appName: t.name,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    );
}

function V(e) {
    return (0, r.jsx)(
        I.f,
        D(w({}, e), {
            title: C.intl.string(C.t.j2d6Km),
            subtitle: C.intl.string(C.t["/B7kXy"]),
            actions: [
                {
                    text: C.intl.string(C.t["31Bci5"]),
                    onClick: e.onClose,
                },
            ],
        }),
    );
}

function F(e) {
    return (0, r.jsx)(
        j,
        D(w({}, e), {
            headerClassName: N.gW,
        }),
    );
}

function B() {
    var e, t;
    let n = (0, l.zy)();
    return (0, r.jsx)(I.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(I.f, {
            transitionState: c.ip4.ENTERED,
            hideHeader: !0,
            children: (0, r.jsx)(U, {
                guild: null == (e = n.state) ? void 0 : e.guild,
                application: null == (t = n.state) ? void 0 : t.application,
                showsCloseWindowText: !0,
            }),
        }),
    });
}

function H(e) {
    var t, n;
    let { location: a } = e;
    i.useEffect(() => {
        if (null == a || "" === a.search) return;
        let e = null != document.referrer && "" !== document.referrer ? S.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== T.BVt.OAUTH2_AUTHORIZE) &&
            (0, m.pX)(T.BVt.INDEX);
    }, [a]);
    let s = null != a ? (0, o.parse)(a.search) : {},
        l = null != (t = null != (n = s.error_description) ? n : s.error) ? t : C.intl.string(C.t.mqn873);
    return (0, r.jsx)(I.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(I.f, {
            transitionState: c.ip4.ENTERED,
            hideHeader: !0,
            children: (0, r.jsx)(F, {
                message: l,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
