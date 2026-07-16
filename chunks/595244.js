"use strict";
n.d(t, { Ay: () => v, Sm: () => U, bc: () => k, dR: () => M, gz: () => G, i8: () => x, jX: () => b, xb: () => w }),
    n(142703),
    n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(492462),
    o = n(873263),
    d = n(815390),
    c = n(17928),
    u = n(834730),
    _ = n(289873),
    E = n(297264),
    A = n(573435),
    h = n(726249),
    I = n(310419),
    f = n(976860),
    p = n(345942),
    T = n(734057),
    m = n(576705),
    g = n(309010),
    S = n(174459),
    N = n(486020),
    C = n(625494),
    R = n(998218),
    O = n(321987),
    L = n(652215),
    y = n(375708),
    D = n(729291);
function v(e) {
    let { message: t, footer: n, headerClassName: r, showsCloseWindowText: a, spinner: l } = e;
    return (
        (0, h.HU)({ location: y.intl.string(y.t["3S2494"]) }),
        (0, i.jsxs)("div", {
            className: D.iE,
            children: [
                l ? (0, i.jsx)(_.y, {}) : null,
                (0, i.jsx)("div", { className: s()(D.wx, r) }),
                (0, i.jsx)(E.D, { variant: "heading-lg/bold", className: D.Qq, children: t }),
                null != n ? n : null,
                a
                    ? (0, i.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: D.lO,
                          children: y.intl.string(y.t["k7J/w/"]),
                      })
                    : null,
            ],
        })
    );
}
function b(e) {
    return (0, i.jsx)(v, { ...e, headerClassName: D.nQ });
}
function M(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        l = r.useCallback(() => {
            t?.id != null &&
                ((0, p.u)(t?.id),
                s?.(),
                S.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: n?.id,
                    guild_id: t?.id,
                }));
        }, [s, n?.id, t?.id]),
        o = I.h.getField("entrypoint"),
        d = r.useCallback(() => {
            s?.(), S.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: n?.id });
        }, [s, n?.id]),
        u = window.location.pathname.startsWith(L.BVt.APPLICATION_DIRECTORY),
        _ = r.useCallback(() => {
            n?.id != null &&
                (s?.(),
                null != o && (0, f.pX)(""),
                setImmediate(() => {
                    C._.dispatchToLastSubscribed(L.jej.OPEN_APP_LAUNCHER, { applicationId: n.id }),
                        S.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                }));
        }, [n?.id, s, o]),
        E = (0, c.bG)([g.Ay, T.A], () => T.A.getChannel(g.Ay.getChannelId())),
        A = (0, c.bG)([m.A], () => m.A.can(L.xBc.SEND_MESSAGES, E)),
        h = null != t,
        N = null == t && A && (!u || null != o),
        R = [];
    return (
        (null != t || null != s) &&
            (null != s && R.push({ variant: "secondary", text: y.intl.string(y.t.cpT0Cq), onClick: d }),
            h &&
                R.push({
                    variant: "primary",
                    text:
                        t?.name.length > 30
                            ? y.intl.string(y.t.M35zFB)
                            : y.intl.format(y.t.UdYYP3, { guildName: t?.name }),
                    onClick: l,
                }),
            N && R.push({ variant: "primary", text: y.intl.string(y.t["0cCDKP"]), onClick: _ })),
        (0, i.jsx)(O.f, { ...a, actions: R, children: (0, i.jsx)(P, { guild: t, application: n, ...a }) })
    );
}
function P(e) {
    let { guild: t, application: n, ...a } = e,
        s = y.intl.string(y.t.se5gLj);
    r.useEffect(() => {
        S.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: n?.id });
    }, [n?.id]);
    let l = r.useMemo(
            () =>
                null != n
                    ? null != t
                        ? y.intl.format(y.t.IlF6IY, { installedApplicationName: n?.name, guildName: t?.name })
                        : y.intl.format(y.t.vTVC5T, { installedApplicationName: n?.name })
                    : y.intl.string(y.t["Dp+rgP"]),
            [n, t],
        ),
        o = (0, i.jsx)(u.E, { variant: "text-md/normal", className: D.OY, children: l });
    return (0, i.jsx)(b, { message: s, footer: o, ...a });
}
function U(e) {
    let { application: t, ...n } = e,
        { onClose: a } = n;
    r.useEffect(() => {
        S.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
    }, [t.id]);
    let s = r.useCallback(() => {
        a?.(), S.default.track(L.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id });
    }, [a, t.id]);
    return (0, i.jsx)(O.f, {
        ...n,
        actions: [{ variant: "primary", text: y.intl.string(y.t["31Bci5"]), onClick: s }],
        children: (0, i.jsxs)("div", {
            className: D.kV,
            children: [
                (0, i.jsx)(A.Ay, {
                    mask: A.hW.SQUIRCLE,
                    className: D.LR,
                    children: (0, i.jsx)("img", {
                        alt: t.name,
                        src: N.Ay.getApplicationIconURL({ id: t.id, icon: t.icon }),
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: D.fv,
                    children: [
                        (0, i.jsx)(E.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: y.intl.format(y.t["1Q+p1k"], { appName: t.name }),
                        }),
                        (0, i.jsx)(u.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: y.intl.format(y.t.Mr7x5U, { appName: t.name }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function w(e) {
    return (0, i.jsx)(O.f, {
        ...e,
        title: y.intl.string(y.t.j2d6Km),
        subtitle: y.intl.string(y.t["/B7kXy"]),
        actions: [{ text: y.intl.string(y.t["31Bci5"]), onClick: e.onClose }],
    });
}
function G(e) {
    return (0, i.jsx)(v, { ...e, headerClassName: D.gW });
}
function x() {
    let e = (0, o.zy)();
    return (0, i.jsx)(O.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(O.f, {
            transitionState: d.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(P, {
                guild: e.state?.guild,
                application: e.state?.application,
                showsCloseWindowText: !0,
            }),
        }),
    });
}
function k(e) {
    let { location: t } = e;
    r.useEffect(() => {
        if (null == t || "" === t.search) return;
        let e = null != document.referrer && "" !== document.referrer ? R.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== L.BVt.OAUTH2_AUTHORIZE) &&
            (0, f.pX)(L.BVt.INDEX);
    }, [t]);
    let n = null != t ? (0, l.parse)(t.search) : {},
        a = n.error_description ?? n.error ?? y.intl.string(y.t.mqn873);
    return (0, i.jsx)(O.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(O.f, {
            transitionState: d.i.ENTERED,
            hideHeader: !0,
            children: (0, i.jsx)(G, { message: a, showsCloseWindowText: !0 }),
        }),
    });
}
