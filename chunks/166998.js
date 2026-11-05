n.d(t, { u: () => p, default: () => T });
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
    m = n(594061),
    E = n(617617);
function g() {
    return E.A.getDefaultGuildThemePreference() === c.tI.PERSONAL ? c.tI.PERSONAL : c.tI.GUILD;
}
var I = n(244696),
    C = n(49999),
    _ = n(792996),
    N = n(975366);
let p = "GUILD_THEME_NUX_MODAL",
    S = new A.A("GuildThemeNuxModal");
function T(e) {
    let { guildId: t, markAsDismissed: n, transitionState: A, onClose: E } = e,
        [p, T] = s.useState(g),
        [M, f] = s.useState(null),
        [R, L] = s.useState("init"),
        b = p === c.tI.PERSONAL,
        D = (0, l.bG)([h.A], () => h.A.getGuildId()),
        x = (0, l.bG)(
            [I.A],
            () => {
                let e = I.A.getGuildThemeSnapshot(t);
                return null != e && e.enabled ? (e.themeSettings ?? null) : null;
            },
            [t],
        ),
        G = b ? null : x;
    s.useEffect(() => {
        D !== t && E();
    }, [t, E, D]);
    let O = s.useCallback((e) => {
            (f(null), T(e));
        }, []),
        U = s.useCallback(async () => {
            if ("init" === R) {
                if (D !== t) return void (await E());
                (L("submitting"), f(null));
                try {
                    await (async function (e, t) {
                        let n = t ? c.tI.PERSONAL : c.tI.GUILD;
                        (await (0, m.JM)(n), await (0, m.Sh)(e));
                    })(t, b);
                } catch (e) {
                    (S.error("Failed to save guild theme NUX preference", e), f(_.intl.string(_.t.fEptJP)), L("init"));
                    return;
                }
                (L("submitted"), n(C.i.TAKE_ACTION), await E());
            }
        }, [t, b, n, E, D, R]),
        y = s.useCallback(async () => {
            ("submitted" !== R && n(C.i.USER_DISMISS), await E());
        }, [n, E, R]),
        H = s.useMemo(
            () => [
                { value: c.tI.GUILD, id: "guild", label: _.intl.string(_.t.aN3RNQ) },
                { value: c.tI.PERSONAL, id: "personal", label: _.intl.string(_.t.js8y7t) },
            ],
            [],
        ),
        P = b ? _.intl.string(_.t.cvoikF) : _.intl.string(_.t["cY+Oob"]);
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
        title: _.intl.string(_.t.Q9zFy9),
        subtitle: _.intl.string(_.t.XLpBLj),
        actions: [
            {
                text: P,
                variant: b ? "secondary" : "primary",
                loading: "submitting" === R,
                disabled: "submitting" === R,
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
                    options: H,
                    value: p,
                    onSelectionChange: O,
                    fullWidth: !0,
                    label: _.intl.string(_.t.Q7mm4g),
                    hideLabel: !0,
                }),
                b && (0, i.jsx)(u.w, { type: "warning", message: _.intl.string(_.t.tTHQAy), role: "status" }),
                null != M && (0, i.jsx)(u.w, { type: "critical", message: M, role: "alert" }),
            ],
        }),
    });
}
