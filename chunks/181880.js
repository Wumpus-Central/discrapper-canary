n.d(t, { default: () => M, u: () => T });
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
    g = n(617617);
function I() {
    return g.A.getDefaultGuildThemePreference() === c.tI.PERSONAL ? c.tI.PERSONAL : c.tI.GUILD;
}
async function _(e, t) {
    let n = t ? c.tI.PERSONAL : c.tI.GUILD;
    await (0, h.JM)(n), await (0, h.Sh)(e);
}
var N = n(244696),
    m = n(49999),
    C = n(375708),
    S = n(975366);
let T = "GUILD_THEME_NUX_MODAL",
    p = new A.A("GuildThemeNuxModal");
function M(e) {
    let { guildId: t, markAsDismissed: n, transitionState: A, onClose: h } = e,
        [g, T] = s.useState(I),
        [M, f] = s.useState(null),
        [O, L] = s.useState("init"),
        R = g === c.tI.PERSONAL,
        x = (0, l.bG)([E.A], () => E.A.getGuildId()),
        G = (0, l.bG)([N.A], () => {
            let e = N.A.getGuildThemeSnapshot(t);
            return null != e && e.enabled ? (e.themeSettings ?? null) : null;
        }, [t]),
        D = R ? null : G;
    s.useEffect(() => {
        x !== t && h();
    }, [t, h, x]);
    let U = s.useCallback((e) => {
            f(null), T(e);
        }, []),
        b = s.useCallback(async () => {
            if ("init" === O) {
                if (x !== t) return void (await h());
                L("submitting"), f(null);
                try {
                    await _(t, R);
                } catch (e) {
                    p.error("Failed to save guild theme NUX preference", e), f(C.intl.string(C.t.fEptJP)), L("init");
                    return;
                }
                L("submitted"), n(m.i.TAKE_ACTION), await h();
            }
        }, [t, R, n, h, x, O]),
        y = s.useCallback(async () => {
            "submitted" !== O && n(m.i.USER_DISMISS), await h();
        }, [n, h, O]),
        P = s.useMemo(
            () => [
                { value: c.tI.GUILD, id: "guild", label: C.intl.string(C.t.aN3RNQ) },
                { value: c.tI.PERSONAL, id: "personal", label: C.intl.string(C.t.js8y7t) },
            ],
            [],
        ),
        H = R ? C.intl.string(C.t.cvoikF) : C.intl.string(C.t["cY+Oob"]);
    return (0, i.jsx)(a.k, {
        size: "md",
        transitionState: A,
        onClose: y,
        gradientColor: "blue",
        graphic: {
            type: "dynamic",
            component: r.DynamicGraphicComponent.GUILD_THEME_NUX_PREVIEW,
            aspectRatio: "16/9",
            props: { themeSettings: D },
        },
        title: C.intl.string(C.t.Q9zFy9),
        subtitle: C.intl.string(C.t.XLpBLj),
        actions: [
            {
                text: H,
                variant: R ? "secondary" : "primary",
                loading: "submitting" === O,
                disabled: "submitting" === O,
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
                    value: g,
                    onSelectionChange: U,
                    fullWidth: !0,
                    label: C.intl.string(C.t.Q7mm4g),
                    hideLabel: !0,
                }),
                R && (0, i.jsx)(u.w, { type: "warning", children: C.intl.string(C.t.tTHQAy) }),
                null != M && (0, i.jsx)(u.w, { type: "critical", children: M }),
            ],
        }),
    });
}
