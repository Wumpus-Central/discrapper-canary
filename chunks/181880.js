n.d(t, { default: () => M, u: () => S });
var i = n(477900),
    s = n(582128),
    l = n(17928),
    a = n(116833),
    r = n(772707),
    o = n(331322),
    d = n(691885),
    u = n(683071),
    c = n(56562),
    A = n(626584),
    h = n(967198),
    E = n(594061),
    m = n(617617);
function g() {
    return m.A.getDefaultGuildThemePreference() === c.tI.PERSONAL ? c.tI.PERSONAL : c.tI.GUILD;
}
async function I(e, t) {
    let n = t ? c.tI.PERSONAL : c.tI.GUILD;
    (await (0, E.JM)(n), await (0, E.Sh)(e));
}
var C = n(244696),
    _ = n(49999),
    N = n(105292),
    p = n(975366);
let S = "GUILD_THEME_NUX_MODAL",
    T = new A.A("GuildThemeNuxModal");
function M(e) {
    let { guildId: t, markAsDismissed: n, transitionState: A, onClose: E } = e,
        [m, S] = s.useState(g),
        [M, f] = s.useState(null),
        [R, x] = s.useState("init"),
        L = m === c.tI.PERSONAL,
        D = (0, l.bG)([h.A], () => h.A.getGuildId()),
        O = (0, l.bG)(
            [C.A],
            () => {
                let e = C.A.getGuildThemeSnapshot(t);
                return null != e && e.enabled ? (e.themeSettings ?? null) : null;
            },
            [t],
        ),
        G = L ? null : O;
    s.useEffect(() => {
        D !== t && E();
    }, [t, E, D]);
    let b = s.useCallback((e) => {
            (f(null), S(e));
        }, []),
        U = s.useCallback(async () => {
            if ("init" === R) {
                if (D !== t) return void (await E());
                (x("submitting"), f(null));
                try {
                    await I(t, L);
                } catch (e) {
                    (T.error("Failed to save guild theme NUX preference", e), f(N.intl.string(N.t.fEptJP)), x("init"));
                    return;
                }
                (x("submitted"), n(_.i.TAKE_ACTION), await E());
            }
        }, [t, L, n, E, D, R]),
        y = s.useCallback(async () => {
            ("submitted" !== R && n(_.i.USER_DISMISS), await E());
        }, [n, E, R]),
        H = s.useMemo(
            () => [
                { value: c.tI.GUILD, id: "guild", label: N.intl.string(N.t.aN3RNQ) },
                { value: c.tI.PERSONAL, id: "personal", label: N.intl.string(N.t.js8y7t) },
            ],
            [],
        ),
        P = L ? N.intl.string(N.t.cvoikF) : N.intl.string(N.t["cY+Oob"]);
    return (0, i.jsx)(r.k, {
        size: "md",
        transitionState: A,
        onClose: y,
        gradientColor: "blue",
        graphic: {
            type: "dynamic",
            component: a.DynamicGraphicComponent.GUILD_THEME_NUX_PREVIEW,
            aspectRatio: "16/9",
            props: { themeSettings: G },
        },
        title: N.intl.string(N.t.Q9zFy9),
        subtitle: N.intl.string(N.t.XLpBLj),
        actions: [
            {
                text: P,
                variant: L ? "secondary" : "primary",
                loading: "submitting" === R,
                disabled: "submitting" === R,
                onClick: U,
            },
        ],
        children: (0, i.jsxs)(o.B, {
            direction: "vertical",
            gap: 16,
            className: p.r,
            children: [
                (0, i.jsx)(d.l, {
                    selectionMode: "single",
                    options: H,
                    value: m,
                    onSelectionChange: b,
                    fullWidth: !0,
                    label: N.intl.string(N.t.Q7mm4g),
                    hideLabel: !0,
                }),
                L && (0, i.jsx)(u.w, { type: "warning", message: N.intl.string(N.t.tTHQAy), role: "status" }),
                null != M && (0, i.jsx)(u.w, { type: "critical", message: M, role: "alert" }),
            ],
        }),
    });
}
