"use strict";
n.d(t, { Ay: () => D, Sm: () => P, bc: () => G, dR: () => w, gz: () => k, i8: () => U, jX: () => L, xb: () => x }),
    n(142703),
    n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(492462),
    l = n(873263),
    u = n(815390),
    c = n(17928),
    d = n(834730),
    _ = n(289873),
    h = n(534514),
    f = n(573435),
    p = n(726249),
    E = n(310419),
    m = n(976860),
    g = n(345942),
    A = n(734057),
    I = n(576705),
    T = n(309010),
    S = n(174459),
    y = n(486020),
    C = n(625494),
    N = n(998218),
    v = n(321987),
    R = n(652215),
    O = n(375708),
    b = n(729291);
function D(e) {
    let { message: t, footer: n, headerClassName: r, showsCloseWindowText: s, spinner: o } = e;
    return (
        (0, p.HU)({ location: O.intl.string(O.t["3S2494"]) }),
        (0, i.jsxs)("div", {
            className: b.iE,
            children: [
                o ? (0, i.jsx)(_.y, {}) : null,
                (0, i.jsx)("div", { className: a()(b.wx, r) }),
                (0, i.jsx)(h.D, { variant: "heading-lg/bold", className: b.Qq, children: t }),
                null != n ? n : null,
                s
                    ? (0, i.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: b.lO,
                          children: O.intl.string(O.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}
function L(e) {
    return (0, i.jsx)(D, { ...e, headerClassName: b.nQ });
}
function w(e) {
    let { guild: t, application: n, ...s } = e,
        { onClose: a } = s,
        o = r.useCallback(() => {
            t?.id != null &&
                ((0, g.u)(t?.id),
                a?.(),
                S.default.track(R.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: n?.id,
                    guild_id: t?.id,
                }));
        }, [a, n?.id, t?.id]),
        l = E.h.getField("entrypoint"),
        u = r.useCallback(() => {
            a?.(), S.default.track(R.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: n?.id });
        }, [a, n?.id]),
        d = window.location.pathname.startsWith(R.BVt.APPLICATION_DIRECTORY),
        _ = r.useCallback(() => {
            n?.id != null &&
                (a?.(),
                null != l && (0, m.pX)(""),
                setImmediate(() => {
                    C._.dispatchToLastSubscribed(R.jej.OPEN_APP_LAUNCHER, { applicationId: n.id }),
                        S.default.track(R.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                }));
        }, [n?.id, a, l]),
        h = (0, c.bG)([T.A, A.A], () => A.A.getChannel(T.A.getChannelId())),
        f = (0, c.bG)([I.A], () => I.A.can(R.xBc.SEND_MESSAGES, h)),
        p = null != t,
        y = null == t && f && (!d || null != l),
        N = [];
    return (
        (null != t || null != a) &&
            (null != a && N.push({ variant: "secondary", text: O.intl.string(O.t.cpT0Cq), onClick: u }),
            p &&
                N.push({
                    variant: "primary",
                    text:
                        t?.name.length > 30
                            ? O.intl.string(O.t.M35zFB)
                            : O.intl.format(O.t.UdYYP3, { guildName: t?.name }),
                    onClick: o,
                }),
            y && N.push({ variant: "primary", text: O.intl.string(O.t["0cCDKP"]), onClick: _ })),
        (0, i.jsx)(v.f, { ...s, actions: N, children: (0, i.jsx)(M, { guild: t, application: n, ...s }) })
    );
}
function M(e) {
    let { guild: t, application: n, ...s } = e,
        a = O.intl.string(O.t.se5gLj);
    r.useEffect(() => {
        S.default.track(R.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: n?.id });
    }, [n?.id]);
    let o = r.useMemo(
            () =>
                null != n
                    ? null != t
                        ? O.intl.format(O.t.IlF6IY, { installedApplicationName: n?.name, guildName: t?.name })
                        : O.intl.format(O.t.vTVC5T, { installedApplicationName: n?.name })
                    : O.intl.string(O.t["Dp+rgP"]),
            [n, t],
        ),
        l = (0, i.jsx)(d.E, { variant: "text-md/normal", className: b.OY, children: o });
    return (0, i.jsx)(L, { message: a, footer: l, ...s });
}
function P(e) {
    let { application: t, ...n } = e,
        { onClose: s } = n;
    r.useEffect(() => {
        S.default.track(R.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
    }, [t.id]);
    let a = r.useCallback(() => {
        s?.(), S.default.track(R.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id });
    }, [s, t.id]);
    return (0, i.jsx)(v.f, {
        ...n,
        actions: [{ variant: "primary", text: O.intl.string(O.t["31Bci5"]), onClick: a }],
        children: (0, i.jsxs)("div", {
            className: b.kV,
            children: [
                (0, i.jsx)(f.Ay, {
                    mask: f.hW.SQUIRCLE,
                    className: b.LR,
                    children: (0, i.jsx)("img", {
                        alt: t.name,
                        src: y.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: b.fv,
                    children: [
                        (0, i.jsx)(h.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: O.intl.format(O.t["1Q+p1k"], { appName: t.name }),
                        }),
                        (0, i.jsx)(d.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: O.intl.format(O.t.Mr7x5U, { appName: t.name }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function x(e) {
    return (0, i.jsx)(v.f, {
        ...e,
        title: O.intl.string(O.t.j2d6Km),
        subtitle: O.intl.string(O.t["/B7kXy"]),
        actions: [{ text: O.intl.string(O.t["31Bci5"]), onClick: e.onClose }],
    });
}
function k(e) {
    return (0, i.jsx)(D, { ...e, headerClassName: b.gW });
}
function U() {
    let e = (0, l.zy)();
    return (0, i.jsx)(v.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(v.f, {
            transitionState: u.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(M, {
                guild: e.state?.guild,
                application: e.state?.application,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
function G(e) {
    let { location: t } = e;
    r.useEffect(() => {
        if (null == t || "" === t.search) return;
        let e = null != document.referrer && "" !== document.referrer ? N.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== R.BVt.OAUTH2_AUTHORIZE) &&
            (0, m.pX)(R.BVt.INDEX);
    }, [t]);
    let n = null != t ? (0, o.parse)(t.search) : {},
        s = n.error_description ?? n.error ?? O.intl.string(O.t.mqn873);
    return (0, i.jsx)(v.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(v.f, {
            transitionState: u.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(k, { message: s, showsCloseWindowText: !0 }),
        }),
    });
}
