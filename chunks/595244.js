"use strict";
n.d(t, { Ay: () => D, Sm: () => P, bc: () => G, dR: () => w, gz: () => k, i8: () => x, jX: () => L, xb: () => U }),
    n(142703),
    n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(492462),
    l = n(873263),
    u = n(815390),
    d = n(311907),
    c = n(834730),
    _ = n(289873),
    f = n(534514),
    E = n(573435),
    h = n(726249),
    p = n(310419),
    m = n(976860),
    g = n(345942),
    A = n(734057),
    I = n(576705),
    T = n(309010),
    S = n(954571),
    y = n(486020),
    N = n(203982),
    O = n(998218),
    R = n(321987),
    v = n(652215),
    C = n(985018),
    b = n(729291);
function D(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: s, spinner: o } = e;
    return (
        (0, h.HU)({ location: C.intl.string(C.t["3S2494"]) }),
        (0, r.jsxs)("div", {
            className: b.iE,
            children: [
                o ? (0, r.jsx)(_.y, {}) : null,
                (0, r.jsx)("div", { className: a()(b.wx, i) }),
                (0, r.jsx)(f.D, { variant: "heading-lg/bold", className: b.Qq, children: t }),
                null != n ? n : null,
                s
                    ? (0, r.jsx)(c.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: b.lO,
                          children: C.intl.string(C.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}
function L(e) {
    return (0, r.jsx)(D, { ...e, headerClassName: b.nQ });
}
function w(e) {
    let { guild: t, application: n, ...s } = e,
        { onClose: a } = s,
        o = i.useCallback(() => {
            t?.id != null &&
                ((0, g.u)(t?.id),
                a?.(),
                S.default.track(v.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: n?.id,
                    guild_id: t?.id,
                }));
        }, [a, n?.id, t?.id]),
        l = p.h.getField("entrypoint"),
        u = i.useCallback(() => {
            a?.(), S.default.track(v.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: n?.id });
        }, [a, n?.id]),
        c = window.location.pathname.startsWith(v.BVt.APPLICATION_DIRECTORY),
        _ = i.useCallback(() => {
            n?.id != null &&
                (a?.(),
                null != l && (0, m.pX)(""),
                setImmediate(() => {
                    N._.dispatchToLastSubscribed(v.jej.OPEN_APP_LAUNCHER, { applicationId: n.id }),
                        S.default.track(v.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                }));
        }, [n?.id, a, l]),
        f = (0, d.bG)([T.A, A.A], () => A.A.getChannel(T.A.getChannelId())),
        E = (0, d.bG)([I.A], () => I.A.can(v.xBc.SEND_MESSAGES, f)),
        h = null != t,
        y = null == t && E && (!c || null != l),
        O = [];
    return (
        (null != t || null != a) &&
            (null != a && O.push({ variant: "secondary", text: C.intl.string(C.t.cpT0Cq), onClick: u }),
            h &&
                O.push({
                    variant: "primary",
                    text:
                        t?.name.length > 30
                            ? C.intl.string(C.t.M35zFB)
                            : C.intl.format(C.t.UdYYP3, { guildName: t?.name }),
                    onClick: o,
                }),
            y && O.push({ variant: "primary", text: C.intl.string(C.t["0cCDKP"]), onClick: _ })),
        (0, r.jsx)(R.f, { ...s, actions: O, children: (0, r.jsx)(M, { guild: t, application: n, ...s }) })
    );
}
function M(e) {
    let { guild: t, application: n, ...s } = e,
        a = C.intl.string(C.t.se5gLj);
    i.useEffect(() => {
        S.default.track(v.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: n?.id });
    }, [n?.id]);
    let o = i.useMemo(
            () =>
                null != n
                    ? null != t
                        ? C.intl.format(C.t.IlF6IY, { installedApplicationName: n?.name, guildName: t?.name })
                        : C.intl.format(C.t.vTVC5T, { installedApplicationName: n?.name })
                    : C.intl.string(C.t["Dp+rgP"]),
            [n, t],
        ),
        l = (0, r.jsx)(c.E, { variant: "text-md/normal", className: b.OY, children: o });
    return (0, r.jsx)(L, { message: a, footer: l, ...s });
}
function P(e) {
    let { application: t, ...n } = e,
        { onClose: s } = n;
    i.useEffect(() => {
        S.default.track(v.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
    }, [t.id]);
    let a = i.useCallback(() => {
        s?.(), S.default.track(v.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id });
    }, [s, t.id]);
    return (0, r.jsx)(R.f, {
        ...n,
        actions: [{ variant: "primary", text: C.intl.string(C.t["31Bci5"]), onClick: a }],
        children: (0, r.jsxs)("div", {
            className: b.kV,
            children: [
                (0, r.jsx)(E.Ay, {
                    mask: E.hW.SQUIRCLE,
                    className: b.LR,
                    children: (0, r.jsx)("img", {
                        alt: t.name,
                        src: y.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: b.fv,
                    children: [
                        (0, r.jsx)(f.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: C.intl.format(C.t["1Q+p1k"], { appName: t.name }),
                        }),
                        (0, r.jsx)(c.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.format(C.t.Mr7x5U, { appName: t.name }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function U(e) {
    return (0, r.jsx)(R.f, {
        ...e,
        title: C.intl.string(C.t.j2d6Km),
        subtitle: C.intl.string(C.t["/B7kXy"]),
        actions: [{ text: C.intl.string(C.t["31Bci5"]), onClick: e.onClose }],
    });
}
function k(e) {
    return (0, r.jsx)(D, { ...e, headerClassName: b.gW });
}
function x() {
    let e = (0, l.zy)();
    return (0, r.jsx)(R.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(R.f, {
            transitionState: u.i.ENTERED,
            hideHeader: !0,
            children: (0, r.jsx)(M, {
                guild: e.state?.guild,
                application: e.state?.application,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
function G(e) {
    let { location: t } = e;
    i.useEffect(() => {
        if (null == t || "" === t.search) return;
        let e = null != document.referrer && "" !== document.referrer ? O.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== v.BVt.OAUTH2_AUTHORIZE) &&
            (0, m.pX)(v.BVt.INDEX);
    }, [t]);
    let n = null != t ? (0, o.parse)(t.search) : {},
        s = n.error_description ?? n.error ?? C.intl.string(C.t.mqn873);
    return (0, r.jsx)(R.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(R.f, {
            transitionState: u.i.ENTERED,
            hideHeader: !0,
            children: (0, r.jsx)(k, { message: s, showsCloseWindowText: !0 }),
        }),
    });
}
