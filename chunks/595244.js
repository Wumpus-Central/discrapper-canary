n.d(t, { Ay: () => U, Sm: () => G, bc: () => F, dR: () => M, gz: () => B, i8: () => w, jX: () => P, xb: () => v }),
    n(142703),
    n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(492462),
    l = n(873263),
    o = n(815390),
    E = n(17928),
    d = n(834730),
    c = n(289873),
    u = n(534514),
    I = n(573435),
    A = n(726249),
    T = n(310419),
    S = n(976860),
    N = n(345942),
    O = n(734057),
    R = n(576705),
    f = n(309010),
    C = n(954571),
    p = n(486020),
    m = n(625494),
    L = n(998218),
    D = n(321987),
    h = n(652215),
    g = n(985018),
    b = n(729291);
function U(e) {
    let { message: t, footer: n, headerClassName: r, showsCloseWindowText: a, spinner: _ } = e;
    return (
        (0, A.HU)({ location: g.intl.string(g.t["3S2494"]) }),
        (0, i.jsxs)("div", {
            className: b.iE,
            children: [
                _ ? (0, i.jsx)(c.y, {}) : null,
                (0, i.jsx)("div", { className: s()(b.wx, r) }),
                (0, i.jsx)(u.D, { variant: "heading-lg/bold", className: b.Qq, children: t }),
                null != n ? n : null,
                a
                    ? (0, i.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: b.lO,
                          children: g.intl.string(g.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}
function P(e) {
    return (0, i.jsx)(U, { ...e, headerClassName: b.nQ });
}
function M(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        _ = r.useCallback(() => {
            t?.id != null &&
                ((0, N.u)(t?.id),
                s?.(),
                C.default.track(h.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: n?.id,
                    guild_id: t?.id,
                }));
        }, [s, n?.id, t?.id]),
        l = T.h.getField("entrypoint"),
        o = r.useCallback(() => {
            s?.(), C.default.track(h.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: n?.id });
        }, [s, n?.id]),
        d = window.location.pathname.startsWith(h.BVt.APPLICATION_DIRECTORY),
        c = r.useCallback(() => {
            n?.id != null &&
                (s?.(),
                null != l && (0, S.pX)(""),
                setImmediate(() => {
                    m._.dispatchToLastSubscribed(h.jej.OPEN_APP_LAUNCHER, { applicationId: n.id }),
                        C.default.track(h.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                }));
        }, [n?.id, s, l]),
        u = (0, E.bG)([f.A, O.A], () => O.A.getChannel(f.A.getChannelId())),
        I = (0, E.bG)([R.A], () => R.A.can(h.xBc.SEND_MESSAGES, u)),
        A = null != t,
        p = null == t && I && (!d || null != l),
        L = [];
    return (
        (null != t || null != s) &&
            (null != s && L.push({ variant: "secondary", text: g.intl.string(g.t.cpT0Cq), onClick: o }),
            A &&
                L.push({
                    variant: "primary",
                    text:
                        t?.name.length > 30
                            ? g.intl.string(g.t.M35zFB)
                            : g.intl.format(g.t.UdYYP3, { guildName: t?.name }),
                    onClick: _,
                }),
            p && L.push({ variant: "primary", text: g.intl.string(g.t["0cCDKP"]), onClick: c })),
        (0, i.jsx)(D.f, { ...a, actions: L, children: (0, i.jsx)(y, { guild: t, application: n, ...a }) })
    );
}
function y(e) {
    let { guild: t, application: n, ...a } = e,
        s = g.intl.string(g.t.se5gLj);
    r.useEffect(() => {
        C.default.track(h.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: n?.id });
    }, [n?.id]);
    let _ = r.useMemo(
            () =>
                null != n
                    ? null != t
                        ? g.intl.format(g.t.IlF6IY, { installedApplicationName: n?.name, guildName: t?.name })
                        : g.intl.format(g.t.vTVC5T, { installedApplicationName: n?.name })
                    : g.intl.string(g.t["Dp+rgP"]),
            [n, t],
        ),
        l = (0, i.jsx)(d.E, { variant: "text-md/normal", className: b.OY, children: _ });
    return (0, i.jsx)(P, { message: s, footer: l, ...a });
}
function G(e) {
    let { application: t, ...n } = e,
        { onClose: a } = n;
    r.useEffect(() => {
        C.default.track(h.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
    }, [t.id]);
    let s = r.useCallback(() => {
        a?.(), C.default.track(h.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id });
    }, [a, t.id]);
    return (0, i.jsx)(D.f, {
        ...n,
        actions: [{ variant: "primary", text: g.intl.string(g.t["31Bci5"]), onClick: s }],
        children: (0, i.jsxs)("div", {
            className: b.kV,
            children: [
                (0, i.jsx)(I.Ay, {
                    mask: I.hW.SQUIRCLE,
                    className: b.LR,
                    children: (0, i.jsx)("img", {
                        alt: t.name,
                        src: p.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: b.fv,
                    children: [
                        (0, i.jsx)(u.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: g.intl.format(g.t["1Q+p1k"], { appName: t.name }),
                        }),
                        (0, i.jsx)(d.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t.Mr7x5U, { appName: t.name }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function v(e) {
    return (0, i.jsx)(D.f, {
        ...e,
        title: g.intl.string(g.t.j2d6Km),
        subtitle: g.intl.string(g.t["/B7kXy"]),
        actions: [{ text: g.intl.string(g.t["31Bci5"]), onClick: e.onClose }],
    });
}
function B(e) {
    return (0, i.jsx)(U, { ...e, headerClassName: b.gW });
}
function w() {
    let e = (0, l.zy)();
    return (0, i.jsx)(D.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(D.f, {
            transitionState: o.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(y, {
                guild: e.state?.guild,
                application: e.state?.application,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
function F(e) {
    let { location: t } = e;
    r.useEffect(() => {
        if (null == t || "" === t.search) return;
        let e = null != document.referrer && "" !== document.referrer ? L.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== h.BVt.OAUTH2_AUTHORIZE) &&
            (0, S.pX)(h.BVt.INDEX);
    }, [t]);
    let n = null != t ? (0, _.parse)(t.search) : {},
        a = n.error_description ?? n.error ?? g.intl.string(g.t.mqn873);
    return (0, i.jsx)(D.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(D.f, {
            transitionState: o.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(B, { message: a, showsCloseWindowText: !0 }),
        }),
    });
}
