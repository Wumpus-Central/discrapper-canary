n.d(t, { default: () => M, u: () => S });
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
    p = n(975366);
let S = "GUILD_THEME_NUX_MODAL",
    T = new A.A("GuildThemeNuxModal");
function M(e) {
    let { guildId: t, markAsDismissed: n, transitionState: A, onClose: h } = e,
        [m, S] = s.useState(I),
        [M, f] = s.useState(null),
        [L, D] = s.useState("init"),
        R = m === c.tI.PERSONAL,
        x = (0, l.bG)([E.A], () => E.A.getGuildId()),
        O = (0, l.bG)(
            [C.A],
            () => {
                let e = C.A.getGuildThemeSnapshot(t);
                return null != e && e.enabled ? (e.themeSettings ?? null) : null;
            },
            [t],
        ),
        G = R ? null : O;
    s.useEffect(() => {
        x !== t && h();
    }, [t, h, x]);
    let U = s.useCallback((e) => {
            (f(null), S(e));
        }, []),
        b = s.useCallback(async () => {
            if ("init" === L) {
                if (x !== t) return void (await h());
                (D("submitting"), f(null));
                try {
                    await g(t, R);
                } catch (e) {
                    (T.error("Failed to save guild theme NUX preference", e), f(N.intl.string(N.t.fEptJP)), D("init"));
                    return;
                }
                (D("submitted"), n(_.i.TAKE_ACTION), await h());
            }
        }, [t, R, n, h, x, L]),
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
        H = R ? N.intl.string(N.t.cvoikF) : N.intl.string(N.t["cY+Oob"]);
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
                variant: R ? "secondary" : "primary",
                loading: "submitting" === L,
                disabled: "submitting" === L,
                onClick: b,
            },
        ],
        children: (0, i.jsxs)(o.B, {
            direction: "vertical",
            gap: 16,
            className: p.r,
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
                R && (0, i.jsx)(u.w, { type: "warning", children: N.intl.string(N.t.tTHQAy) }),
                null != M && (0, i.jsx)(u.w, { type: "critical", children: M }),
            ],
        }),
    });
}
