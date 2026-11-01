(n.d(t, { Ay: () => b, Sm: () => w, bc: () => F, dR: () => M, gz: () => x, i8: () => k, jX: () => P, xb: () => G }),
    n(142703),
    n(321073));
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(492462),
    o = n(806163),
    d = n(17928),
    c = n(383072),
    u = n(815390),
    _ = n(289873),
    E = n(297264),
    A = n(834730),
    h = n(573435),
    f = n(726249),
    I = n(310419),
    p = n(976860),
    T = n(345942),
    m = n(734057),
    g = n(576705),
    S = n(309010),
    N = n(174459),
    C = n(486020),
    O = n(625494),
    R = n(998218),
    L = n(321987),
    y = n(652215),
    D = n(105292),
    v = n(6612);
function b(e) {
    let { message: t, footer: n, headerClassName: r, illustration: a, showsCloseWindowText: l, spinner: o } = e;
    return (
        (0, f.HU)({ location: D.intl.string(D.t["3S2494"]) }),
        (0, i.jsxs)("div", {
            className: v.iE,
            children: [
                o ? (0, i.jsx)(_.y, {}) : null,
                null != a ? a : (0, i.jsx)("div", { className: s()(v.wx, r) }),
                (0, i.jsx)(E.D, { variant: "heading-lg/bold", className: v.Qq, children: t }),
                null != n ? n : null,
                l
                    ? (0, i.jsx)(A.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: v.lO,
                          children: D.intl.string(D.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}
function P(e) {
    return (0, i.jsx)(b, { ...e, headerClassName: v.nQ });
}
function M(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        l = r.useCallback(() => {
            t?.id != null &&
                ((0, T.u)(t?.id),
                s?.(),
                N.default.track(y.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: n?.id,
                    guild_id: t?.id,
                }));
        }, [s, n?.id, t?.id]),
        o = I.h.getField("entrypoint"),
        c = r.useCallback(() => {
            (s?.(), N.default.track(y.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: n?.id }));
        }, [s, n?.id]),
        u = window.location.pathname.startsWith(y.BVt.APPLICATION_DIRECTORY),
        _ = r.useCallback(() => {
            n?.id != null &&
                (s?.(),
                null != o && (0, p.pX)(""),
                setImmediate(() => {
                    (O._.dispatchToLastSubscribed(y.jej.OPEN_APP_LAUNCHER, { applicationId: n.id }),
                        N.default.track(y.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id }));
                }));
        }, [n?.id, s, o]),
        E = (0, d.bG)([S.Ay, m.A], () => m.A.getChannel(S.Ay.getChannelId())),
        A = (0, d.bG)([g.A], () => g.A.can(y.xBc.SEND_MESSAGES, E)),
        h = null != t,
        f = null == t && A && (!u || null != o),
        C = [];
    return (
        (null != t || null != s) &&
            (null != s && C.push({ variant: "secondary", text: D.intl.string(D.t.cpT0Cq), onClick: c }),
            h &&
                C.push({
                    variant: "primary",
                    text:
                        t?.name.length > 30
                            ? D.intl.string(D.t.M35zFB)
                            : D.intl.format(D.t.UdYYP3, { guildName: t?.name }),
                    onClick: l,
                }),
            f && C.push({ variant: "primary", text: D.intl.string(D.t["0cCDKP"]), onClick: _ })),
        (0, i.jsx)(L.f, { ...a, actions: C, children: (0, i.jsx)(U, { guild: t, application: n, ...a }) })
    );
}
function U(e) {
    let { guild: t, application: n, ...a } = e,
        s = D.intl.string(D.t.se5gLj);
    r.useEffect(() => {
        N.default.track(y.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: n?.id });
    }, [n?.id]);
    let l = r.useMemo(
            () =>
                null != n
                    ? null != t
                        ? D.intl.format(D.t.IlF6IY, { installedApplicationName: n?.name, guildName: t?.name })
                        : D.intl.format(D.t.vTVC5T, { installedApplicationName: n?.name })
                    : D.intl.string(D.t["Dp+rgP"]),
            [n, t],
        ),
        o = (0, i.jsx)(A.E, { variant: "text-md/normal", className: v.OY, children: l });
    return (0, i.jsx)(b, { message: s, footer: o, ...a, illustration: (0, i.jsx)(c.l, { alt: "", ariaHidden: !0 }) });
}
function w(e) {
    let { application: t, ...n } = e,
        { onClose: a } = n;
    r.useEffect(() => {
        N.default.track(y.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
    }, [t.id]);
    let s = r.useCallback(() => {
        (a?.(), N.default.track(y.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id }));
    }, [a, t.id]);
    return (0, i.jsx)(L.f, {
        ...n,
        actions: [{ variant: "primary", text: D.intl.string(D.t["31Bci5"]), onClick: s }],
        children: (0, i.jsxs)("div", {
            className: v.kV,
            children: [
                (0, i.jsx)(h.Ay, {
                    mask: h.hW.SQUIRCLE,
                    className: v.LR,
                    children: (0, i.jsx)("img", {
                        alt: t.name,
                        src: C.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: v.fv,
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: D.intl.format(D.t["1Q+p1k"], { appName: t.name }),
                        }),
                        (0, i.jsx)(A.E, {
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
    return (0, i.jsx)(L.f, {
        ...e,
        title: D.intl.string(D.t.j2d6Km),
        subtitle: D.intl.string(D.t["/B7kXy"]),
        actions: [{ text: D.intl.string(D.t["31Bci5"]), onClick: e.onClose }],
    });
}
function x(e) {
    return (0, i.jsx)(b, { ...e, headerClassName: v.gW });
}
function k() {
    let e = (0, o.zy)();
    return (0, i.jsx)(L.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(L.f, {
            transitionState: u.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(U, {
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
        let e = null != document.referrer && "" !== document.referrer ? R.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== y.BVt.OAUTH2_AUTHORIZE) &&
            (0, p.pX)(y.BVt.INDEX);
    }, [t]);
    let n = null != t ? (0, l.parse)(t.search) : {},
        a = n.error_description ?? n.error ?? D.intl.string(D.t.mqn873);
    return (0, i.jsx)(L.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(L.f, {
            transitionState: u.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(x, { message: a, showsCloseWindowText: !0 }),
        }),
    });
}
