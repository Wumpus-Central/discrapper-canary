n.d(t, { default: () => M, u: () => p });
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
    E = n(967198),
    h = n(594061),
    g = n(617617);
function _() {
    return g.A.getDefaultGuildThemePreference() === c.tI.PERSONAL ? c.tI.PERSONAL : c.tI.GUILD;
}
async function I(e, t) {
    let n = t ? c.tI.PERSONAL : c.tI.GUILD;
    await (0, h.JM)(n), await (0, h.Sh)(e);
}
var N = n(244696),
    m = n(49999),
    C = n(375708),
    S = n(958961);
let p = "GUILD_THEME_NUX_MODAL",
    T = new A.A("GuildThemeNuxModal");
function M(e) {
    let { guildId: t, markAsDismissed: n, onComplete: A, transitionState: h, onClose: g } = e,
        [p, M] = s.useState(_),
        [O, L] = s.useState(null),
        [f, R] = s.useState("init"),
        U = p === c.tI.PERSONAL,
        x = (0, l.bG)([E.A], () => E.A.getGuildId()),
        D = (0, l.bG)([N.A], () => {
            let e = N.A.getGuildThemeSnapshot(t);
            return null != e && e.enabled ? (e.themeSettings ?? null) : null;
        }, [t]),
        G = U ? null : D;
    s.useEffect(() => {
        x !== t && g();
    }, [t, g, x]);
    let b = s.useCallback((e) => {
            L(null), M(e);
        }, []),
        y = s.useCallback(async () => {
            if ("init" === f) {
                if (x !== t) return void (await g());
                R("submitting"), L(null);
                try {
                    await I(t, U);
                } catch (e) {
                    T.error("Failed to save guild theme NUX preference", e), L(C.intl.string(C.t.fEptJP)), R("init");
                    return;
                }
                R("submitted"), n(m.i.TAKE_ACTION), await g(), A();
            }
        }, [t, U, n, g, A, x, f]),
        P = s.useCallback(async () => {
            let e = "submitted" !== f;
            e && n(m.i.USER_DISMISS), await g(), e && A();
        }, [n, g, A, f]),
        H = s.useMemo(
            () => [
                { value: c.tI.GUILD, id: "guild", label: C.intl.string(C.t.aN3RNQ) },
                { value: c.tI.PERSONAL, id: "personal", label: C.intl.string(C.t.js8y7t) },
            ],
            [],
        ),
        v = U ? C.intl.string(C.t.cvoikF) : C.intl.string(C.t.RzWDqY);
    return (0, i.jsx)(a.k, {
        size: "md",
        transitionState: h,
        onClose: P,
        gradientColor: "blue",
        graphic: {
            type: "dynamic",
            component: r.DynamicGraphicComponent.GUILD_THEME_NUX_PREVIEW,
            aspectRatio: "16/9",
            props: { themeSettings: G },
        },
        title: C.intl.string(C.t.r7wPUa),
        subtitle: C.intl.string(C.t.pGMmJy),
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
            className: S.r,
            children: [
                (0, i.jsx)(d.l, {
                    selectionMode: "single",
                    options: H,
                    value: p,
                    onSelectionChange: b,
                    fullWidth: !0,
                    label: C.intl.string(C.t.Q7mm4g),
                    hideLabel: !0,
                }),
                U && (0, i.jsx)(u.w, { type: "warning", children: C.intl.string(C.t.tTHQAy) }),
                null != O && (0, i.jsx)(u.w, { type: "critical", children: O }),
            ],
        }),
    });
}
