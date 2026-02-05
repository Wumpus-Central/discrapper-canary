"use strict";
n.d(t, { Ay: () => O, Sm: () => x, bc: () => U, dR: () => L, gz: () => M, i8: () => k, jX: () => D, xb: () => P }),
    n(142703),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(492462),
    l = n(960488),
    u = n(158954),
    c = n(311907),
    d = n(571356),
    _ = n(397927),
    f = n(573435),
    p = n(726249),
    h = n(310419),
    m = n(976860),
    g = n(345942),
    E = n(734057),
    A = n(576705),
    I = n(309010),
    T = n(954571),
    y = n(486020),
    S = n(203982),
    v = n(998218),
    C = n(321987),
    b = n(652215),
    N = n(985018),
    R = n(756302);
function O(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: a, spinner: o } = e;
    return (
        (0, p.HU)({ location: N.intl.string(N.t["3S2494"]) }),
        (0, r.jsxs)("div", {
            className: R.iE,
            children: [
                o ? (0, r.jsx)(_.y$y, {}) : null,
                (0, r.jsx)("div", { className: s()(R.wx, i) }),
                (0, r.jsx)(_.Heading, { variant: "heading-lg/bold", className: R.Qq, children: t }),
                null != n ? n : null,
                a
                    ? (0, r.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: R.lO,
                          children: N.intl.string(N.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}
function D(e) {
    return (0, r.jsx)(O, { ...e, headerClassName: R.nQ });
}
function L(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        o = i.useCallback(() => {
            t?.id != null &&
                ((0, g.u)(t?.id),
                s?.(),
                T.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: n?.id,
                    guild_id: t?.id,
                }));
        }, [s, n?.id, t?.id]),
        l = h.h.getField("entrypoint"),
        u = i.useCallback(() => {
            s?.(), T.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: n?.id });
        }, [s, n?.id]),
        d = window.location.pathname.startsWith(b.BVt.APPLICATION_DIRECTORY),
        _ = i.useCallback(() => {
            n?.id != null &&
                (s?.(),
                null != l && (0, m.pX)(""),
                setImmediate(() => {
                    S._.dispatchToLastSubscribed(b.jej.OPEN_APP_LAUNCHER, { applicationId: n.id }),
                        T.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                }));
        }, [n?.id, s, l]),
        f = (0, c.bG)([I.A, E.A], () => E.A.getChannel(I.A.getChannelId())),
        p = (0, c.bG)([A.A], () => A.A.can(b.xBc.SEND_MESSAGES, f)),
        y = null != t,
        v = null == t && p && (!d || null != l),
        R = [];
    return (
        (null != t || null != s) &&
            (null != s && R.push({ variant: "secondary", text: N.intl.string(N.t.cpT0Cq), onClick: u }),
            y &&
                R.push({
                    variant: "primary",
                    text:
                        t?.name.length > 30
                            ? N.intl.string(N.t.M35zFB)
                            : N.intl.format(N.t.UdYYP3, { guildName: t?.name }),
                    onClick: o,
                }),
            v && R.push({ variant: "primary", text: N.intl.string(N.t["0cCDKP"]), onClick: _ })),
        (0, r.jsx)(C.f, { ...a, actions: R, children: (0, r.jsx)(w, { guild: t, application: n, ...a }) })
    );
}
function w(e) {
    let { guild: t, application: n, ...a } = e,
        s = N.intl.string(N.t.se5gLj);
    i.useEffect(() => {
        T.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: n?.id });
    }, [n?.id]);
    let o = i.useMemo(
            () =>
                null != n
                    ? null != t
                        ? N.intl.format(N.t.IlF6IY, { installedApplicationName: n?.name, guildName: t?.name })
                        : N.intl.format(N.t.vTVC5T, { installedApplicationName: n?.name })
                    : N.intl.string(N.t["Dp+rgP"]),
            [n, t],
        ),
        l = (0, r.jsx)(d.E, { variant: "text-md/normal", className: R.OY, children: o });
    return (0, r.jsx)(D, { message: s, footer: l, ...a });
}
function x(e) {
    let { application: t, ...n } = e,
        { onClose: a } = n;
    i.useEffect(() => {
        T.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
    }, [t.id]);
    let s = i.useCallback(() => {
        a?.(), T.default.track(b.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id });
    }, [a, t.id]);
    return (0, r.jsx)(C.f, {
        ...n,
        actions: [{ variant: "primary", text: N.intl.string(N.t["31Bci5"]), onClick: s }],
        children: (0, r.jsxs)("div", {
            className: R.kV,
            children: [
                (0, r.jsx)(f.Ay, {
                    mask: f.hW.SQUIRCLE,
                    className: R.LR,
                    children: (0, r.jsx)("img", {
                        alt: t.name,
                        src: y.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: R.fv,
                    children: [
                        (0, r.jsx)(_.Heading, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: N.intl.format(N.t["1Q+p1k"], { appName: t.name }),
                        }),
                        (0, r.jsx)(d.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: N.intl.format(N.t.Mr7x5U, { appName: t.name }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function P(e) {
    return (0, r.jsx)(C.f, {
        ...e,
        title: N.intl.string(N.t.j2d6Km),
        subtitle: N.intl.string(N.t["/B7kXy"]),
        actions: [{ text: N.intl.string(N.t["31Bci5"]), onClick: e.onClose }],
    });
}
function M(e) {
    return (0, r.jsx)(O, { ...e, headerClassName: R.gW });
}
function k() {
    let e = (0, l.zy)();
    return (0, r.jsx)(C.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(C.f, {
            transitionState: u.ip4.ENTERED,
            hideHeader: !0,
            children: (0, r.jsx)(w, {
                guild: e.state?.guild,
                application: e.state?.application,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
function U(e) {
    let { location: t } = e;
    i.useEffect(() => {
        if (null == t || "" === t.search) return;
        let e = null != document.referrer && "" !== document.referrer ? v.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== b.BVt.OAUTH2_AUTHORIZE) &&
            (0, m.pX)(b.BVt.INDEX);
    }, [t]);
    let n = null != t ? (0, o.parse)(t.search) : {},
        a = n.error_description ?? n.error ?? N.intl.string(N.t.mqn873);
    return (0, r.jsx)(C.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(C.f, {
            transitionState: u.ip4.ENTERED,
            hideHeader: !0,
            children: (0, r.jsx)(M, { message: a, showsCloseWindowText: !0 }),
        }),
    });
}
