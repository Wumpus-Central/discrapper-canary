(n.d(t, { xb: () => k, Sm: () => x, i8: () => B, dR: () => w, gz: () => F, bc: () => V, jX: () => U, Ay: () => M }),
    n(142703),
    n(321073));
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(492462),
    o = n(806163),
    d = n(855986),
    c = n(62617),
    u = n(380832);
function _(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: s, width: l, height: o, className: d, style: _ } = e,
        E = r.useMemo(
            () => (0, c.H)({ width: l, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: _ }),
            [l, o, _],
        );
    return (0, i.jsx)("img", {
        style: E,
        src: u.A,
        className: (0, c.Z)(d),
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var E = n(815390),
    A = n(289873),
    f = n(534514),
    h = n(834730),
    I = n(573435),
    p = n(726249),
    m = n(310419),
    g = n(976860),
    T = n(345942),
    S = n(734057),
    N = n(576705),
    C = n(309010),
    O = n(129230),
    R = n(486020),
    L = n(188567),
    y = n(998218),
    D = n(321987),
    b = n(652215),
    v = n(792996),
    P = n(6612);
function M(e) {
    let { message: t, footer: n, headerClassName: r, illustration: a, showsCloseWindowText: l, spinner: o } = e;
    return (
        (0, p.HU)({ location: v.intl.string(v.t["3S2494"]) }),
        (0, i.jsxs)("div", {
            className: P.iE,
            children: [
                o ? (0, i.jsx)(A.y, {}) : null,
                null != a ? a : (0, i.jsx)("div", { className: s()(P.wx, r) }),
                (0, i.jsx)(f.D, { variant: "heading-lg/semibold", className: P.Qq, children: t }),
                null != n ? n : null,
                l
                    ? (0, i.jsx)(h.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          className: P.lO,
                          children: v.intl.string(v.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}
function U(e) {
    return (0, i.jsx)(M, { ...e, headerClassName: P.nQ });
}
function w(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        l = r.useCallback(() => {
            t?.id != null &&
                ((0, T.u)(t?.id),
                s?.(),
                O.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: n?.id,
                    guild_id: t?.id,
                }));
        }, [s, n?.id, t?.id]),
        o = m.h.getField("entrypoint"),
        c = r.useCallback(() => {
            (s?.(), O.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: n?.id }));
        }, [s, n?.id]),
        u = window.location.pathname.startsWith(b.BVt.APPLICATION_DIRECTORY),
        _ = r.useCallback(() => {
            n?.id != null &&
                (s?.(),
                null != o && (0, g.pX)(""),
                setImmediate(() => {
                    (L._.dispatchToLastSubscribed(b.jej.OPEN_APP_LAUNCHER, { applicationId: n.id }),
                        O.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id }));
                }));
        }, [n?.id, s, o]),
        E = (0, d.bG)([C.Ay, S.A], () => S.A.getChannel(C.Ay.getChannelId())),
        A = (0, d.bG)([N.A], () => N.A.can(b.xBc.SEND_MESSAGES, E)),
        f = null != t,
        h = null == t && A && (!u || null != o),
        I = [];
    return (
        (null != t || null != s) &&
            (null != s && I.push({ variant: "secondary", text: v.intl.string(v.t.cpT0Cq), onClick: c }),
            f &&
                I.push({
                    variant: "primary",
                    text:
                        t?.name.length > 30
                            ? v.intl.string(v.t.M35zFB)
                            : v.intl.format(v.t.UdYYP3, { guildName: t?.name }),
                    onClick: l,
                }),
            h && I.push({ variant: "primary", text: v.intl.string(v.t["0cCDKP"]), onClick: _ })),
        (0, i.jsx)(D.f, { ...a, actions: I, children: (0, i.jsx)(G, { guild: t, application: n, ...a }) })
    );
}
function G(e) {
    let { guild: t, application: n, ...a } = e,
        s = v.intl.string(v.t.se5gLj);
    r.useEffect(() => {
        O.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: n?.id });
    }, [n?.id]);
    let l = r.useMemo(
            () =>
                null != n
                    ? null != t
                        ? v.intl.format(v.t.IlF6IY, { installedApplicationName: n?.name, guildName: t?.name })
                        : v.intl.format(v.t.vTVC5T, { installedApplicationName: n?.name })
                    : v.intl.string(v.t["Dp+rgP"]),
            [n, t],
        ),
        o = (0, i.jsx)(h.E, { variant: "body-md/normal", className: P.OY, children: l });
    return (0, i.jsx)(M, { message: s, footer: o, ...a, illustration: (0, i.jsx)(_, { alt: "", ariaHidden: !0 }) });
}
function x(e) {
    let { application: t, ...n } = e,
        { onClose: a } = n;
    r.useEffect(() => {
        O.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
    }, [t.id]);
    let s = r.useCallback(() => {
        (a?.(), O.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id }));
    }, [a, t.id]);
    return (0, i.jsx)(D.f, {
        ...n,
        actions: [{ variant: "primary", text: v.intl.string(v.t["31Bci5"]), onClick: s }],
        children: (0, i.jsxs)("div", {
            className: P.kV,
            children: [
                (0, i.jsx)(I.Ay, {
                    mask: I.hW.SQUIRCLE,
                    className: P.LR,
                    children: (0, i.jsx)("img", {
                        alt: t.name,
                        src: R.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: P.fv,
                    children: [
                        (0, i.jsx)(f.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: v.intl.format(v.t["1Q+p1k"], { appName: t.name }),
                        }),
                        (0, i.jsx)(h.E, {
                            variant: "body-md/normal",
                            color: "text-muted",
                            children: v.intl.format(v.t.Mr7x5U, { appName: t.name }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function k(e) {
    return (0, i.jsx)(D.f, {
        ...e,
        title: v.intl.string(v.t.j2d6Km),
        subtitle: v.intl.string(v.t["/B7kXy"]),
        actions: [{ text: v.intl.string(v.t["31Bci5"]), onClick: e.onClose }],
    });
}
function F(e) {
    return (0, i.jsx)(M, { ...e, headerClassName: P.gW });
}
function B() {
    let e = (0, o.zy)();
    return (0, i.jsx)(D.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(D.f, {
            transitionState: E.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(G, {
                guild: e.state?.guild,
                application: e.state?.application,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
function V(e) {
    let { location: t } = e;
    r.useEffect(() => {
        if (null == t || "" === t.search) return;
        let e = null != document.referrer && "" !== document.referrer ? y.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== b.BVt.OAUTH2_AUTHORIZE) &&
            (0, g.pX)(b.BVt.INDEX);
    }, [t]);
    let n = null != t ? (0, l.qg)(t.search) : {},
        a = n.error_description ?? n.error ?? v.intl.string(v.t.mqn873);
    return (0, i.jsx)(D.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(D.f, {
            transitionState: E.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(F, { message: a, showsCloseWindowText: !0 }),
        }),
    });
}
