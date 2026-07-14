n.d(t, { A: () => b });
var l = n(627968),
    i = n(64700),
    a = n(17928),
    r = n(95561),
    o = n(688810),
    s = n(206828),
    c = n(627363),
    u = n(587895),
    d = n(769015),
    m = n(174459),
    h = n(834730),
    p = n(289873),
    g = n(628284),
    x = n(821609),
    f = n(375708),
    A = n(221919);
function C(e) {
    let { displayName: t, description: n, icon: i, isLoading: a, isConnected: r, canConnect: o, onConnect: s } = e;
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
                            (0, l.jsx)(h.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                            null != n &&
                                n.length > 0 &&
                                (0, l.jsx)(h.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
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
                                variant: "text-md/medium",
                                color: "text-feedback-positive",
                                children: f.intl.string(f.t["LV+CXH"]),
                            }),
                            (0, l.jsx)(g.y, { size: "custom", width: 20, height: 20, color: "var(--status-positive)" }),
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
var j = n(652215);
function v(e) {
    let { connection: t, guildId: n, location: h } = e,
        p = (0, a.bG)([u.A], () => (null != t.application_id ? u.A.getApplication(t.application_id) : null), [
            t.application_id,
        ]),
        { analyticsLocations: g } = (0, o.Ay)(h);
    i.useEffect(() => {
        null != p ||
            null == t.application_id ||
            u.A.isFetchingApplication(t.application_id) ||
            u.A.didFetchingApplicationFail(t.application_id) ||
            (0, c.TA)(t.application_id).catch(() => {});
    }, [p, t.application_id]);
    let x = p?.name ?? f.intl.string(f.t.cgPbaZ),
        { hasAlreadyLinked: A, canStartAuthorization: v, startAuthorization: _, fetched: N } = (0, s.RD)(p),
        y = (0, l.jsx)(d.A, { game: p, size: d.M.MEDIUM }),
        E = i.useCallback(() => {
            m.default.track(j.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, r.H$)(n),
                connection_type: "application",
                application_id: t.application_id ?? void 0,
                location: h,
            }),
                _({ analyticsLocations: g });
        }, [_, n, t.application_id, h, g]);
    return (0, l.jsx)(C, {
        displayName: x,
        description: t.description,
        icon: y,
        isLoading: !N,
        isConnected: A,
        canConnect: v,
        onConnect: E,
    });
}
var _ = n(462887),
    N = n(173936),
    y = n(736653),
    E = n(573648),
    w = n(456647);
function I(e) {
    let { connection: t, guildId: n, location: a } = e,
        o = (0, y.Ay)(),
        s = (null != t.provider_id ? E.A.get(t.provider_id)?.name : null) ?? f.intl.string(f.t.NzCoRx),
        c =
            null != t.description && t.description.length > 0
                ? t.description
                : (function (e) {
                      switch (e) {
                          case j.fg2.TWITCH:
                              return f.intl.string(f.t["D/wRWb"]);
                          case j.fg2.YOUTUBE:
                              return f.intl.string(f.t.TC0upt);
                          default:
                              return;
                      }
                  })(t.provider_id),
        {
            hasConnection: u,
            canConnect: d,
            startConnection: h,
            loading: p,
        } = (function (e) {
            let { loading: t, hasConnection: n, canConnect: l, startConnection: a, account: r } = (0, w.X)(e);
            return {
                loading: t,
                hasConnection: n,
                canConnect: l,
                startConnection: i.useCallback(
                    async (e) => {
                        let t = await a(e);
                        if (t.success && null != t.url) {
                            let e = window.open(t.url, "_blank");
                            return null == e ? { success: !1 } : { success: !0, popup: e };
                        }
                        return { success: !1 };
                    },
                    [a],
                ),
                account: r,
            };
        })(t.provider_id),
        g = i.useCallback(async () => {
            m.default.track(j.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
                ...(0, r.H$)(n),
                connection_type: "provider",
                provider_id: t.provider_id ?? void 0,
                location: a,
            }),
                await h(a);
        }, [h, n, t.provider_id, a]),
        x = i.useMemo(() => {
            if (null != t.provider_id) {
                let e = E.A.get(t.provider_id),
                    n = e?.icon != null ? ((0, _.M)(o) ? e.icon.darkPNG : e.icon.lightPNG) : null;
                if (null != n) return (0, l.jsx)("img", { src: n, alt: s, width: 40, height: 40 });
            }
            return (0, l.jsx)(N.q, { size: "custom", width: 40, height: 40, color: "currentColor" });
        }, [t.provider_id, o, s]);
    return (0, l.jsx)(C, {
        displayName: s,
        description: c,
        icon: x,
        isLoading: p,
        isConnected: u,
        canConnect: d,
        onConnect: g,
    });
}
var M = n(539916);
function b(e) {
    let { connection: t, guildId: n, location: i } = e;
    switch (t.connection_type) {
        case M.wZ.APPLICATION:
            return (0, l.jsx)(v, { connection: t, guildId: n, location: i });
        case M.wZ.PROVIDER_CONNECTED_ACCOUNT:
            return (0, l.jsx)(I, { connection: t, guildId: n, location: i });
        default:
            return t.connection_type, null;
    }
}
