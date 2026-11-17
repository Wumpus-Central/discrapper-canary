(n.d(t, { xb: () => x, Sm: () => G, i8: () => F, dR: () => U, gz: () => k, bc: () => B, jX: () => M, Ay: () => P }),
    n(142703),
    n(321073));
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(492462),
    o = n(806163),
    d = n(855986),
    c = n(62617);
function u(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: s, width: l, height: o, className: d, style: u } = e,
        _ = r.useMemo(
            () => (0, c.H)({ width: l, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [l, o, u],
        );
    return (0, i.jsx)("img", {
        style: _,
        src: "https://cdn.discordapp.com/assets/content/f7a6b755e6c2a5228c797a994ec09f9689fd695cafb96eae119c82f72edfe50d.svg",
        className: (0, c.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var _ = n(815390),
    E = n(289873),
    A = n(534514),
    f = n(834730),
    h = n(573435),
    I = n(726249),
    p = n(310419),
    m = n(976860),
    g = n(345942),
    T = n(734057),
    S = n(576705),
    N = n(309010),
    C = n(129230),
    O = n(486020),
    R = n(188567),
    L = n(998218),
    y = n(321987),
    D = n(652215),
    b = n(792996),
    v = n(6612);
function P(e) {
    let { message: t, footer: n, headerClassName: r, illustration: a, showsCloseWindowText: l, spinner: o } = e;
    return (
        (0, I.HU)({ location: b.intl.string(b.t["3S2494"]) }),
        (0, i.jsxs)("div", {
            className: v.iE,
            children: [
                o ? (0, i.jsx)(E.y, {}) : null,
                null != a ? a : (0, i.jsx)("div", { className: s()(v.wx, r) }),
                (0, i.jsx)(A.D, { variant: "heading-lg/semibold", className: v.Qq, children: t }),
                null != n ? n : null,
                l
                    ? (0, i.jsx)(f.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          className: v.lO,
                          children: b.intl.string(b.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}
function M(e) {
    return (0, i.jsx)(P, { ...e, headerClassName: v.nQ });
}
function U(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        l = r.useCallback(() => {
            t?.id != null &&
                ((0, g.u)(t?.id),
                s?.(),
                C.default.track(D.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: n?.id,
                    guild_id: t?.id,
                }));
        }, [s, n?.id, t?.id]),
        o = p.h.getField("entrypoint"),
        c = r.useCallback(() => {
            (s?.(), C.default.track(D.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: n?.id }));
        }, [s, n?.id]),
        u = window.location.pathname.startsWith(D.BVt.APPLICATION_DIRECTORY),
        _ = r.useCallback(() => {
            n?.id != null &&
                (s?.(),
                null != o && (0, m.pX)(""),
                setImmediate(() => {
                    (R._.dispatchToLastSubscribed(D.jej.OPEN_APP_LAUNCHER, { applicationId: n.id }),
                        C.default.track(D.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id }));
                }));
        }, [n?.id, s, o]),
        E = (0, d.bG)([N.Ay, T.A], () => T.A.getChannel(N.Ay.getChannelId())),
        A = (0, d.bG)([S.A], () => S.A.can(D.xBc.SEND_MESSAGES, E)),
        f = null != t,
        h = null == t && A && (!u || null != o),
        I = [];
    return (
        (null != t || null != s) &&
            (null != s && I.push({ variant: "secondary", text: b.intl.string(b.t.cpT0Cq), onClick: c }),
            f &&
                I.push({
                    variant: "primary",
                    text:
                        t?.name.length > 30
                            ? b.intl.string(b.t.M35zFB)
                            : b.intl.format(b.t.UdYYP3, { guildName: t?.name }),
                    onClick: l,
                }),
            h && I.push({ variant: "primary", text: b.intl.string(b.t["0cCDKP"]), onClick: _ })),
        (0, i.jsx)(y.f, { ...a, actions: I, children: (0, i.jsx)(w, { guild: t, application: n, ...a }) })
    );
}
function w(e) {
    let { guild: t, application: n, ...a } = e,
        s = b.intl.string(b.t.se5gLj);
    r.useEffect(() => {
        C.default.track(D.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: n?.id });
    }, [n?.id]);
    let l = r.useMemo(
            () =>
                null != n
                    ? null != t
                        ? b.intl.format(b.t.IlF6IY, { installedApplicationName: n?.name, guildName: t?.name })
                        : b.intl.format(b.t.vTVC5T, { installedApplicationName: n?.name })
                    : b.intl.string(b.t["Dp+rgP"]),
            [n, t],
        ),
        o = (0, i.jsx)(f.E, { variant: "body-md/normal", className: v.OY, children: l });
    return (0, i.jsx)(P, { message: s, footer: o, ...a, illustration: (0, i.jsx)(u, { alt: "", ariaHidden: !0 }) });
}
function G(e) {
    let { application: t, ...n } = e,
        { onClose: a } = n;
    r.useEffect(() => {
        C.default.track(D.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
    }, [t.id]);
    let s = r.useCallback(() => {
        (a?.(), C.default.track(D.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id }));
    }, [a, t.id]);
    return (0, i.jsx)(y.f, {
        ...n,
        actions: [{ variant: "primary", text: b.intl.string(b.t["31Bci5"]), onClick: s }],
        children: (0, i.jsxs)("div", {
            className: v.kV,
            children: [
                (0, i.jsx)(h.Ay, {
                    mask: h.hW.SQUIRCLE,
                    className: v.LR,
                    children: (0, i.jsx)("img", {
                        alt: t.name,
                        src: O.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: v.fv,
                    children: [
                        (0, i.jsx)(A.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: b.intl.format(b.t["1Q+p1k"], { appName: t.name }),
                        }),
                        (0, i.jsx)(f.E, {
                            variant: "body-md/normal",
                            color: "text-muted",
                            children: b.intl.format(b.t.Mr7x5U, { appName: t.name }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function x(e) {
    return (0, i.jsx)(y.f, {
        ...e,
        title: b.intl.string(b.t.j2d6Km),
        subtitle: b.intl.string(b.t["/B7kXy"]),
        actions: [{ text: b.intl.string(b.t["31Bci5"]), onClick: e.onClose }],
    });
}
function k(e) {
    return (0, i.jsx)(P, { ...e, headerClassName: v.gW });
}
function F() {
    let e = (0, o.zy)();
    return (0, i.jsx)(y.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(y.f, {
            transitionState: _.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(w, {
                guild: e.state?.guild,
                application: e.state?.application,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
function B(e) {
    let { location: t } = e;
    r.useEffect(() => {
        if (null == t || "" === t.search) return;
        let e = null != document.referrer && "" !== document.referrer ? L.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== D.BVt.OAUTH2_AUTHORIZE) &&
            (0, m.pX)(D.BVt.INDEX);
    }, [t]);
    let n = null != t ? (0, l.qg)(t.search) : {},
        a = n.error_description ?? n.error ?? b.intl.string(b.t.mqn873);
    return (0, i.jsx)(y.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(y.f, {
            transitionState: _.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(k, { message: a, showsCloseWindowText: !0 }),
        }),
    });
}
