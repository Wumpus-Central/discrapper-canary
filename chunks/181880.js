n.d(t, { default: () => M, u: () => p });
var i = n(477900),
    s = n(582128),
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
    m = n(617617);
function I() {
    return m.A.getDefaultGuildThemePreference() === c.tI.PERSONAL ? c.tI.PERSONAL : c.tI.GUILD;
}
async function g(e, t) {
    let n = t ? c.tI.PERSONAL : c.tI.GUILD;
    (await (0, h.JM)(n), await (0, h.Sh)(e));
}
var C = n(244696),
    _ = n(49999),
    N = n(375708),
    S = n(975366);
let p = "GUILD_THEME_NUX_MODAL",
    T = new A.A("GuildThemeNuxModal");
function M(e) {
    let { guildId: t, markAsDismissed: n, transitionState: A, onClose: h } = e,
        [m, p] = s.useState(I),
        [M, f] = s.useState(null),
        [L, R] = s.useState("init"),
        D = m === c.tI.PERSONAL,
        O = (0, l.bG)([E.A], () => E.A.getGuildId()),
        x = (0, l.bG)(
            [C.A],
            () => {
                let e = C.A.getGuildThemeSnapshot(t);
                return null != e && e.enabled ? (e.themeSettings ?? null) : null;
            },
            [t],
        ),
        G = D ? null : x;
    s.useEffect(() => {
        O !== t && h();
    }, [t, h, O]);
    let U = s.useCallback((e) => {
            (f(null), p(e));
        }, []),
        b = s.useCallback(async () => {
            if ("init" === L) {
                if (O !== t) return void (await h());
                (R("submitting"), f(null));
                try {
                    await g(t, D);
                } catch (e) {
                    (T.error("Failed to save guild theme NUX preference", e), f(N.intl.string(N.t.fEptJP)), R("init"));
                    return;
                }
                (R("submitted"), n(_.i.TAKE_ACTION), await h());
            }
        }, [t, D, n, h, O, L]),
        y = s.useCallback(async () => {
            ("submitted" !== L && n(_.i.USER_DISMISS), await h());
        }, [n, h, L]),
        P = s.useMemo(
            () => [
                { value: c.tI.GUILD, id: "guild", label: N.intl.string(N.t.aN3RNQ) },
                { value: c.tI.PERSONAL, id: "personal", label: N.intl.string(N.t.js8y7t) },
            ],
            [],
        ),
        H = D ? N.intl.string(N.t.cvoikF) : N.intl.string(N.t["cY+Oob"]);
    return (0, i.jsx)(a.k, {
        size: "md",
        transitionState: A,
        onClose: y,
        gradientColor: "blue",
        graphic: {
            type: "dynamic",
            component: r.DynamicGraphicComponent.GUILD_THEME_NUX_PREVIEW,
            aspectRatio: "16/9",
            props: { themeSettings: G },
        },
        title: N.intl.string(N.t.Q9zFy9),
        subtitle: N.intl.string(N.t.XLpBLj),
        actions: [
            {
                text: H,
                variant: D ? "secondary" : "primary",
                loading: "submitting" === L,
                disabled: "submitting" === L,
                onClick: b,
            },
        ],
        children: (0, i.jsxs)(o.B, {
            direction: "vertical",
            gap: 16,
            className: S.r,
            children: [
                (0, i.jsx)(d.l, {
                    selectionMode: "single",
                    options: P,
                    value: m,
                    onSelectionChange: U,
                    fullWidth: !0,
                    label: N.intl.string(N.t.Q7mm4g),
                    hideLabel: !0,
                }),
                D && (0, i.jsx)(u.w, { type: "warning", children: N.intl.string(N.t.tTHQAy) }),
                null != M && (0, i.jsx)(u.w, { type: "critical", children: M }),
            ],
        }),
    });
}
