n.d(t, { u: () => S, default: () => T });
var i = n(477900),
    s = n(582128),
    l = n(855986),
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
var I = n(244696),
    C = n(49999),
    _ = n(792996),
    N = n(975366);
let S = "GUILD_THEME_NUX_MODAL",
    p = new A.A("GuildThemeNuxModal");
function T(e) {
    let { guildId: t, markAsDismissed: n, transitionState: A, onClose: m } = e,
        [S, T] = s.useState(g),
        [M, f] = s.useState(null),
        [b, R] = s.useState("init"),
        L = S === c.tI.PERSONAL,
        x = (0, l.bG)([h.A], () => h.A.getGuildId()),
        D = (0, l.bG)(
            [I.A],
            () => {
                let e = I.A.getGuildThemeSnapshot(t);
                return null != e && e.enabled ? (e.themeSettings ?? null) : null;
            },
            [t],
        ),
        O = L ? null : D;
    s.useEffect(() => {
        x !== t && m();
    }, [t, m, x]);
    let G = s.useCallback((e) => {
            (f(null), T(e));
        }, []),
        U = s.useCallback(async () => {
            if ("init" === b) {
                if (x !== t) return void (await m());
                (R("submitting"), f(null));
                try {
                    await (async function (e, t) {
                        let n = t ? c.tI.PERSONAL : c.tI.GUILD;
                        (await (0, E.JM)(n), await (0, E.Sh)(e));
                    })(t, L);
                } catch (e) {
                    (p.error("Failed to save guild theme NUX preference", e), f(_.intl.string(_.t.fEptJP)), R("init"));
                    return;
                }
                (R("submitted"), n(C.i.TAKE_ACTION), await m());
            }
        }, [t, L, n, m, x, b]),
        y = s.useCallback(async () => {
            ("submitted" !== b && n(C.i.USER_DISMISS), await m());
        }, [n, m, b]),
        P = s.useMemo(
            () => [
                { value: c.tI.GUILD, id: "guild", label: _.intl.string(_.t.aN3RNQ) },
                { value: c.tI.PERSONAL, id: "personal", label: _.intl.string(_.t.js8y7t) },
            ],
            [],
        ),
        H = L ? _.intl.string(_.t.cvoikF) : _.intl.string(_.t["cY+Oob"]);
    return (0, i.jsx)(r.k, {
        size: "md",
        transitionState: A,
        onClose: y,
        gradientColor: "blue",
        graphic: {
            type: "dynamic",
            component: a.DynamicGraphicComponent.GUILD_THEME_NUX_PREVIEW,
            aspectRatio: "16/9",
            props: { themeSettings: O },
        },
        title: _.intl.string(_.t.Q9zFy9),
        subtitle: _.intl.string(_.t.XLpBLj),
        actions: [
            {
                text: H,
                variant: L ? "secondary" : "primary",
                loading: "submitting" === b,
                disabled: "submitting" === b,
                onClick: U,
            },
        ],
        children: (0, i.jsxs)(o.B, {
            direction: "vertical",
            gap: 16,
            className: N.r,
            children: [
                (0, i.jsx)(d.l, {
                    selectionMode: "single",
                    options: P,
                    value: S,
                    onSelectionChange: G,
                    fullWidth: !0,
                    label: _.intl.string(_.t.Q7mm4g),
                    hideLabel: !0,
                }),
                L && (0, i.jsx)(u.w, { type: "warning", message: _.intl.string(_.t.tTHQAy), role: "status" }),
                null != M && (0, i.jsx)(u.w, { type: "critical", message: M, role: "alert" }),
            ],
        }),
    });
}
