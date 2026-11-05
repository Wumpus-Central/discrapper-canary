t.d(n, { A: () => k });
var l = t(477900),
    i = t(582128),
    a = t(855986),
    r = t(149468),
    o = t(688810),
    s = t(724302),
    c = t(627363),
    d = t(587895),
    u = t(769015),
    m = t(129230),
    h = t(834730),
    p = t(289873),
    g = t(628284),
    x = t(821609),
    f = t(792996),
    A = t(469792);
function C(e) {
    let { displayName: n, description: t, icon: i, isLoading: a, isConnected: r, canConnect: o, onConnect: s } = e;
    return (0, l.jsxs)("div", {
        className: A.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: A.hu,
                children: [
                    (0, l.jsx)("div", { className: A.Kk, children: i }),
                    (0, l.jsxs)("div", {
                        className: A.P_,
                        children: [
                            (0, l.jsx)(h.E, { variant: "body-md/medium", color: "text-strong", children: n }),
                            null != t &&
                                t.length > 0 &&
                                (0, l.jsx)(h.E, { variant: "body-sm/medium", color: "text-muted", children: t }),
                        ],
                    }),
                ],
            }),
            a
                ? (0, l.jsx)(p.y, {})
                : r
                  ? (0, l.jsxs)("div", {
                        className: A.ul,
                        children: [
                            (0, l.jsx)(h.E, {
                                variant: "body-md/medium",
                                color: "text-feedback-positive",
                                children: f.intl.string(f.t["LV+CXH"]),
                            }),
                            (0, l.jsx)(g.CircleCheckIcon, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "var(--status-positive)",
                            }),
                        ],
                    })
                  : (0, l.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        onClick: s,
                        text: f.intl.string(f.t.S0W8Z5),
                        disabled: !o,
                    }),
        ],
    });
}
var j = t(652215);
function v(e) {
    let { connection: n, guildId: t, location: h } = e,
        p = (0, a.bG)([d.A], () => (null != n.application_id ? d.A.getApplication(n.application_id) : null), [
            n.application_id,
        ]),
        { analyticsLocations: g } = (0, o.Ay)(h);
    i.useEffect(() => {
        null != p ||
            null == n.application_id ||
            d.A.isFetchingApplication(n.application_id) ||
            d.A.didFetchingApplicationFail(n.application_id) ||
            (0, c.TA)(n.application_id).catch(() => {});
    }, [p, n.application_id]);
    let x = p?.name ?? f.intl.string(f.t.cgPbaZ),
        { hasAlreadyLinked: A, canStartAuthorization: v, startAuthorization: y, fetched: _ } = (0, s.RD)(p),
        N = (0, l.jsx)(u.A, { game: p, size: u.M.MEDIUM }),
        E = i.useCallback(() => {
            (m.default.track(j.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, r.H$)(t),
                connection_type: "application",
                application_id: n.application_id ?? void 0,
                location: h,
            }),
                y({ analyticsLocations: g }));
        }, [y, t, n.application_id, h, g]);
    return (0, l.jsx)(C, {
        displayName: x,
        description: n.description,
        icon: N,
        isLoading: !_,
        isConnected: A,
        canConnect: v,
        onConnect: E,
    });
}
var y = t(462887),
    _ = t(173936),
    N = t(736653),
    E = t(573648),
    w = t(456647);
function I(e) {
    let { connection: n, guildId: t, location: a } = e,
        o = (0, N.Ay)(),
        s = (null != n.provider_id ? E.A.get(n.provider_id)?.name : null) ?? f.intl.string(f.t.NzCoRx),
        c =
            null != n.description && n.description.length > 0
                ? n.description
                : (function (e) {
                      switch (e) {
                          case j.fg2.TWITCH:
                              return f.intl.string(f.t["D/wRWb"]);
                          case j.fg2.YOUTUBE:
                              return f.intl.string(f.t.TC0upt);
                          default:
                              return;
                      }
                  })(n.provider_id),
        {
            hasConnection: d,
            canConnect: u,
            startConnection: h,
            loading: p,
        } = (function (e) {
            let { loading: n, hasConnection: t, canConnect: l, startConnection: a, account: r } = (0, w.X)(e);
            return {
                loading: n,
                hasConnection: t,
                canConnect: l,
                startConnection: i.useCallback(
                    async (e) => {
                        let n = await a(e);
                        if (n.success && null != n.url) {
                            let e = window.open(n.url, "_blank");
                            return null == e ? { success: !1 } : { success: !0, popup: e };
                        }
                        return { success: !1 };
                    },
                    [a],
                ),
                account: r,
            };
        })(n.provider_id),
        g = i.useCallback(async () => {
            (m.default.track(j.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, r.H$)(t),
                connection_type: "provider",
                provider_id: n.provider_id ?? void 0,
                location: a,
            }),
                await h(a));
        }, [h, t, n.provider_id, a]),
        x = i.useMemo(() => {
            if (null != n.provider_id) {
                let e = E.A.get(n.provider_id),
                    t = e?.icon != null ? ((0, y.M)(o) ? e.icon.darkPNG : e.icon.lightPNG) : null;
                if (null != t) return (0, l.jsx)("img", { src: t, alt: s, width: 40, height: 40 });
            }
            return (0, l.jsx)(_.LinkIcon, { size: "custom", width: 40, height: 40, color: "currentColor" });
        }, [n.provider_id, o, s]);
    return (0, l.jsx)(C, {
        displayName: s,
        description: c,
        icon: x,
        isLoading: p,
        isConnected: d,
        canConnect: u,
        onConnect: g,
    });
}
var b = t(539916);
function k(e) {
    let { connection: n, guildId: t, location: i } = e;
    switch (n.connection_type) {
        case b.wZ.APPLICATION:
            return (0, l.jsx)(v, { connection: n, guildId: t, location: i });
        case b.wZ.PROVIDER_CONNECTED_ACCOUNT:
            return (0, l.jsx)(I, { connection: n, guildId: t, location: i });
        default:
            return (n.connection_type, null);
    }
}
