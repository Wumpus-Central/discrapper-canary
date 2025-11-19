n.d(t, {
    $0: () => G,
    Lk: () => Z,
    Xg: () => F,
    ZP: () => M,
    c7: () => k,
    j3: () => V,
    jO: () => j,
    ks: () => B,
}),
    n(358797),
    n(539854),
    n(35282);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(593473),
    l = n(828700),
    c = n(793030),
    u = n(442837),
    d = n(993365),
    f = n(481060),
    _ = n(686546),
    p = n(252618),
    h = n(258971),
    m = n(703656),
    g = n(769654),
    E = n(592125),
    b = n(496675),
    y = n(944486),
    O = n(626135),
    v = n(768581),
    I = n(585483),
    T = n(591759),
    S = n(787025),
    A = n(981631),
    C = n(388032),
    N = n(563630);
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
function P(e) {
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
function D(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function M(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: a, spinner: s } = e;
    return (
        (0, p.Tt)({ location: C.intl.string(C.t["3S2494"]) }),
        (0, r.jsxs)("div", {
            className: N.wrapper,
            children: [
                s ? (0, r.jsx)(f.$jN, {}) : null,
                (0, r.jsx)("div", { className: o()(N.header, i) }),
                (0, r.jsx)(f.Heading, {
                    variant: "heading-lg/bold",
                    className: N.text,
                    children: t,
                }),
                null != n ? n : null,
                a
                    ? (0, r.jsx)(d.x, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: N.cta,
                          children: C.intl.string(C.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}
function k(e) {
    return (0, r.jsx)(M, w(P({}, e), { headerClassName: N.headerSuccess }));
}
function j(e) {
    var { guild: t, application: n } = e,
        a = L(e, ["guild", "application"]);
    let { onClose: o } = a,
        s = i.useCallback(() => {
            (null == t ? void 0 : t.id) != null &&
                ((0, g.X)(null == t ? void 0 : t.id),
                null == o || o(),
                O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: null == n ? void 0 : n.id,
                    guild_id: null == t ? void 0 : t.id,
                }));
        }, [o, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        l = h.z8.getField("entrypoint"),
        c = i.useCallback(() => {
            null == o || o(),
                O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: null == n ? void 0 : n.id,
                });
        }, [o, null == n ? void 0 : n.id]),
        d = window.location.pathname.startsWith(A.Z5c.APPLICATION_DIRECTORY),
        f = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                (null == o || o(),
                null != l && (0, m.uL)(""),
                setImmediate(() => {
                    I.S.dispatchToLastSubscribed(A.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }),
                        O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                }));
        }, [null == n ? void 0 : n.id, o, l]),
        _ = (0, u.e7)([y.Z, E.Z], () => E.Z.getChannel(y.Z.getChannelId())),
        p = (0, u.e7)([b.Z], () => b.Z.can(A.Plq.SEND_MESSAGES, _)),
        v = null != t,
        T = null == t && p && (!d || null != l),
        N = [];
    return (
        (null != t || null != o) &&
            (null != o &&
                N.push({
                    variant: "secondary",
                    text: C.intl.string(C.t.cpT0Cq),
                    onClick: c,
                }),
            v &&
                N.push({
                    variant: "primary",
                    text:
                        (null == t ? void 0 : t.name.length) > 30
                            ? C.intl.string(C.t.M35zFB)
                            : C.intl.format(C.t.UdYYP3, { guildName: null == t ? void 0 : t.name }),
                    onClick: s,
                }),
            T &&
                N.push({
                    variant: "primary",
                    text: C.intl.string(C.t["0cCDKP"]),
                    onClick: f,
                })),
        (0, r.jsx)(
            S.j,
            w(P({}, a), {
                actions: N,
                children: (0, r.jsx)(
                    U,
                    P(
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
    var { guild: t, application: n } = e,
        a = L(e, ["guild", "application"]);
    let o = C.intl.string(C.t.se5gLj);
    i.useEffect(() => {
        O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
    }, [null == n ? void 0 : n.id]);
    let s = i.useMemo(
            () =>
                null != n
                    ? null != t
                        ? C.intl.format(C.t.IlF6IY, {
                              installedApplicationName: null == n ? void 0 : n.name,
                              guildName: null == t ? void 0 : t.name,
                          })
                        : C.intl.format(C.t.vTVC5T, { installedApplicationName: null == n ? void 0 : n.name })
                    : C.intl.string(C.t["Dp+rgP"]),
            [n, t],
        ),
        l = (0, r.jsx)(d.x, {
            variant: "text-md/normal",
            className: N.authorizedSuccessSubtext,
            children: s,
        });
    return (0, r.jsx)(
        k,
        P(
            {
                message: o,
                footer: l,
            },
            a,
        ),
    );
}
function G(e) {
    var { application: t } = e,
        n = L(e, ["application"]);
    let { onClose: a } = n;
    i.useEffect(() => {
        O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
    }, [t.id]);
    let o = i.useCallback(() => {
        null == a || a(), O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id });
    }, [a, t.id]);
    return (0, r.jsx)(
        S.j,
        w(P({}, n), {
            actions: [
                {
                    variant: "primary",
                    text: C.intl.string(C.t["31Bci5"]),
                    onClick: o,
                },
            ],
            children: (0, r.jsxs)("div", {
                className: N.authorizedSuccessExternal,
                children: [
                    (0, r.jsx)(_.ZP, {
                        mask: _.QS.SQUIRCLE,
                        className: N.authorizedSuccessExternalIcon,
                        children: (0, r.jsx)("img", {
                            alt: t.name,
                            src: v.ZP.getApplicationIconURL({
                                id: t.id,
                                icon: t.icon,
                            }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: N.authorizedSuccessExternalCopy,
                        children: [
                            (0, r.jsx)(f.Heading, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: C.intl.format(C.t["1Q+p1k"], { appName: t.name }),
                            }),
                            (0, r.jsx)(d.x, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: C.intl.format(C.t.Mr7x5U, { appName: t.name }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    );
}
function B(e) {
    return (0, r.jsx)(
        S.j,
        w(P({}, e), {
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
function Z(e) {
    return (0, r.jsx)(M, w(P({}, e), { headerClassName: N.headerFailure }));
}
function F() {
    var e, t;
    let n = (0, l.TH)();
    return (0, r.jsx)(S.G, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(S.j, {
            transitionState: c.Dvm.ENTERED,
            hideHeader: !0,
            children: (0, r.jsx)(U, {
                guild: null == (e = n.state) ? void 0 : e.guild,
                application: null == (t = n.state) ? void 0 : t.application,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
function V(e) {
    var t, n;
    let { location: a } = e;
    i.useEffect(() => {
        if (null == a || "" === a.search) return;
        let e = null != document.referrer && "" !== document.referrer ? T.Z.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== A.Z5c.OAUTH2_AUTHORIZE) &&
            (0, m.uL)(A.Z5c.INDEX);
    }, [a]);
    let o = null != a ? (0, s.parse)(a.search) : {},
        l = null != (n = null != (t = o.error_description) ? t : o.error) ? n : C.intl.string(C.t.mqn873);
    return (0, r.jsx)(S.G, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(S.j, {
            transitionState: c.Dvm.ENTERED,
            hideHeader: !0,
            children: (0, r.jsx)(Z, {
                message: l,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
