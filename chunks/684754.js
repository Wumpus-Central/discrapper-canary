n.d(t, { default: () => p, u: () => C });
var i = n(627968),
    s = n(64700),
    l = n(17928),
    r = n(116833),
    a = n(772707),
    o = n(331322),
    d = n(691885),
    u = n(683071),
    c = n(56562),
    A = n(626584),
    E = n(594061),
    h = n(617617),
    g = n(967198),
    _ = n(244696),
    I = n(49999),
    N = n(375708),
    m = n(958961);
let C = "GUILD_THEME_NUX_MODAL",
    S = new A.A("GuildThemeNuxModal");
function T() {
    return h.A.getDefaultGuildThemePreference() === c.tI.PERSONAL ? c.tI.PERSONAL : c.tI.GUILD;
}
function p(e) {
    let { guildId: t, markAsDismissed: n, onComplete: A, transitionState: h, onClose: C } = e,
        [p, M] = s.useState(T),
        [O, L] = s.useState(null),
        [f, R] = s.useState("init"),
        U = p === c.tI.PERSONAL,
        x = (0, l.bG)([g.A], () => g.A.getGuildId()),
        G = (0, l.bG)([_.A], () => {
            let e = _.A.getGuildThemeSnapshot(t);
            return null != e && e.enabled ? (e.themeSettings ?? null) : null;
        }, [t]),
        D = U ? null : G;
    s.useEffect(() => {
        x !== t && C();
    }, [t, C, x]);
    let b = s.useCallback((e) => {
            L(null), M(e);
        }, []),
        y = s.useCallback(async () => {
            if ("init" !== f) return;
            if (x !== t) return void (await C());
            let e = U ? c.tI.PERSONAL : c.tI.GUILD;
            R("submitting"), L(null);
            try {
                await (0, E.JM)(e), await (0, E.Sh)(t);
            } catch (e) {
                S.error("Failed to save guild theme NUX preference", e), L(N.intl.string(N.t.fEptJP)), R("init");
                return;
            }
            R("submitted"), n(I.i.TAKE_ACTION), await C(), A();
        }, [t, U, n, C, A, x, f]),
        P = s.useCallback(async () => {
            let e = "submitted" !== f;
            e && n(I.i.USER_DISMISS), await C(), e && A();
        }, [n, C, A, f]),
        H = s.useMemo(
            () => [
                { value: c.tI.GUILD, id: "guild", label: N.intl.string(N.t.aN3RNQ) },
                { value: c.tI.PERSONAL, id: "personal", label: N.intl.string(N.t.js8y7t) },
            ],
            [],
        ),
        v = U ? N.intl.string(N.t.cvoikF) : N.intl.string(N.t.RzWDqY);
    return (0, i.jsx)(a.k, {
        size: "md",
        transitionState: h,
        onClose: P,
        gradientColor: "blue",
        graphic: {
            type: "dynamic",
            component: r.DynamicGraphicComponent.GUILD_THEME_NUX_PREVIEW,
            aspectRatio: "16/9",
            props: { themeSettings: D },
        },
        title: N.intl.string(N.t.r7wPUa),
        subtitle: N.intl.string(N.t.pGMmJy),
        actions: [
            {
                text: v,
                variant: U ? "secondary" : "primary",
                loading: "submitting" === f,
                disabled: "submitting" === f,
                onClick: y,
            },
        ],
        children: (0, i.jsxs)(o.B, {
            direction: "vertical",
            gap: 16,
            className: m.r,
            children: [
                (0, i.jsx)(d.l, {
                    selectionMode: "single",
                    options: H,
                    value: p,
                    onSelectionChange: b,
                    fullWidth: !0,
                    label: N.intl.string(N.t.Q7mm4g),
                    hideLabel: !0,
                }),
                U && (0, i.jsx)(u.w, { type: "warning", children: N.intl.string(N.t.tTHQAy) }),
                null != O && (0, i.jsx)(u.w, { type: "critical", children: O }),
            ],
        }),
    });
}
