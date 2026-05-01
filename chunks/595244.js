n.d(t, { Ay: () => M, Sm: () => y, bc: () => V, dR: () => U, gz: () => w, i8: () => x, jX: () => P, xb: () => G }),
    n(142703),
    n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(492462),
    o = n(873263),
    d = n(815390),
    c = n(17928),
    _ = n(834730),
    E = n(289873),
    u = n(534514),
    A = n(573435),
    I = n(726249),
    T = n(310419),
    h = n(976860),
    S = n(345942),
    N = n(734057),
    f = n(576705),
    p = n(309010),
    m = n(954571),
    O = n(486020),
    C = n(625494),
    R = n(998218),
    g = n(321987),
    L = n(652215),
    D = n(985018),
    b = n(729291);
function M(e) {
    let { message: t, footer: n, headerClassName: a, showsCloseWindowText: r, spinner: l } = e;
    return (
        (0, I.HU)({ location: D.intl.string(D.t["3S2494"]) }),
        (0, i.jsxs)("div", {
            className: b.iE,
            children: [
                l ? (0, i.jsx)(E.y, {}) : null,
                (0, i.jsx)("div", { className: s()(b.wx, a) }),
                (0, i.jsx)(u.D, { variant: "heading-lg/bold", className: b.Qq, children: t }),
                null != n ? n : null,
                r
                    ? (0, i.jsx)(_.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: b.lO,
                          children: D.intl.string(D.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}
function P(e) {
    return (0, i.jsx)(M, { ...e, headerClassName: b.nQ });
}
function U(e) {
    let { guild: t, application: n, ...r } = e,
        { onClose: s } = r,
        l = a.useCallback(() => {
            t?.id != null &&
                ((0, S.u)(t?.id),
                s?.(),
                m.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: n?.id,
                    guild_id: t?.id,
                }));
        }, [s, n?.id, t?.id]),
        o = T.h.getField("entrypoint"),
        d = a.useCallback(() => {
            s?.(), m.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: n?.id });
        }, [s, n?.id]),
        _ = window.location.pathname.startsWith(L.BVt.APPLICATION_DIRECTORY),
        E = a.useCallback(() => {
            n?.id != null &&
                (s?.(),
                null != o && (0, h.pX)(""),
                setImmediate(() => {
                    C._.dispatchToLastSubscribed(L.jej.OPEN_APP_LAUNCHER, { applicationId: n.id }),
                        m.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                }));
        }, [n?.id, s, o]),
        u = (0, c.bG)([p.A, N.A], () => N.A.getChannel(p.A.getChannelId())),
        A = (0, c.bG)([f.A], () => f.A.can(L.xBc.SEND_MESSAGES, u)),
        I = null != t,
        O = null == t && A && (!_ || null != o),
        R = [];
    return (
        (null != t || null != s) &&
            (null != s && R.push({ variant: "secondary", text: D.intl.string(D.t.cpT0Cq), onClick: d }),
            I &&
                R.push({
                    variant: "primary",
                    text:
                        t?.name.length > 30
                            ? D.intl.string(D.t.M35zFB)
                            : D.intl.format(D.t.UdYYP3, { guildName: t?.name }),
                    onClick: l,
                }),
            O && R.push({ variant: "primary", text: D.intl.string(D.t["0cCDKP"]), onClick: E })),
        (0, i.jsx)(g.f, { ...r, actions: R, children: (0, i.jsx)(v, { guild: t, application: n, ...r }) })
    );
}
function v(e) {
    let { guild: t, application: n, ...r } = e,
        s = D.intl.string(D.t.se5gLj);
    a.useEffect(() => {
        m.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: n?.id });
    }, [n?.id]);
    let l = a.useMemo(
            () =>
                null != n
                    ? null != t
                        ? D.intl.format(D.t.IlF6IY, { installedApplicationName: n?.name, guildName: t?.name })
                        : D.intl.format(D.t.vTVC5T, { installedApplicationName: n?.name })
                    : D.intl.string(D.t["Dp+rgP"]),
            [n, t],
        ),
        o = (0, i.jsx)(_.E, { variant: "text-md/normal", className: b.OY, children: l });
    return (0, i.jsx)(P, { message: s, footer: o, ...r });
}
function y(e) {
    let { application: t, ...n } = e,
        { onClose: r } = n;
    a.useEffect(() => {
        m.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
    }, [t.id]);
    let s = a.useCallback(() => {
        r?.(), m.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id });
    }, [r, t.id]);
    return (0, i.jsx)(g.f, {
        ...n,
        actions: [{ variant: "primary", text: D.intl.string(D.t["31Bci5"]), onClick: s }],
        children: (0, i.jsxs)("div", {
            className: b.kV,
            children: [
                (0, i.jsx)(A.Ay, {
                    mask: A.hW.SQUIRCLE,
                    className: b.LR,
                    children: (0, i.jsx)("img", {
                        alt: t.name,
                        src: O.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: b.fv,
                    children: [
                        (0, i.jsx)(u.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: D.intl.format(D.t["1Q+p1k"], { appName: t.name }),
                        }),
                        (0, i.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: D.intl.format(D.t.Mr7x5U, { appName: t.name }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function G(e) {
    return (0, i.jsx)(g.f, {
        ...e,
        title: D.intl.string(D.t.j2d6Km),
        subtitle: D.intl.string(D.t["/B7kXy"]),
        actions: [{ text: D.intl.string(D.t["31Bci5"]), onClick: e.onClose }],
    });
}
function w(e) {
    return (0, i.jsx)(M, { ...e, headerClassName: b.gW });
}
function x() {
    let e = (0, o.zy)();
    return (0, i.jsx)(g.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(g.f, {
            transitionState: d.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(v, {
                guild: e.state?.guild,
                application: e.state?.application,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
function V(e) {
    let { location: t } = e;
    a.useEffect(() => {
        if (null == t || "" === t.search) return;
        let e = null != document.referrer && "" !== document.referrer ? R.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== L.BVt.OAUTH2_AUTHORIZE) &&
            (0, h.pX)(L.BVt.INDEX);
    }, [t]);
    let n = null != t ? (0, l.parse)(t.search) : {},
        r = n.error_description ?? n.error ?? D.intl.string(D.t.mqn873);
    return (0, i.jsx)(g.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(g.f, {
            transitionState: d.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(w, { message: r, showsCloseWindowText: !0 }),
        }),
    });
}
