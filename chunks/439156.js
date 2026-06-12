n.d(t, { A: () => v });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(459192),
    o = n(821609),
    u = n(492349),
    d = n(104510),
    c = n(470934),
    p = n(898190),
    E = n(998418),
    A = n(249286),
    f = n(933337),
    _ = n(568065),
    y = n(853513),
    I = n(375708),
    g = n(455923);
function v(e) {
    let {
            guildId: t,
            powerup: n,
            compact: r,
            iconSize: v,
            size: b,
            grow: x,
            className: h,
            expressiveCta: m,
            onError: k,
        } = e,
        { onActivate: C, isLoading: R, error: L } = (0, A.A)(t, n),
        { isLoading: P, error: T } = (0, p.A)(t, n),
        j = (0, f.A)(t, n),
        S = (0, E.Ay)(t, n),
        V = S.type !== _.b_.INACTIVE,
        { disabled: O, reason: D } = (0, c.A)(t, n, V),
        U =
            null != D
                ? { title: null, body: D }
                : S.type === _.b_.LEVEL_ACTIVATED
                  ? {
                        title: I.intl.string(y.default["9oYuvb"]),
                        body: I.intl.formatToPlainString(y.default.WRRYUT, {
                            perkName: S.sourcePowerup?.title ?? I.intl.string(I.t.BfF6ED),
                        }),
                    }
                  : S.type === _.b_.POWERUP_ACTIVATED
                    ? {
                          title: I.intl.string(y.default.TZsu1U),
                          body: I.intl.formatToPlainString(y.default["5HQUzD"], { boostCount: n.cost }),
                      }
                    : null;
    return (
        i.useEffect(() => {
            k?.(L ?? T);
        }, [L, T, k]),
        (0, l.jsx)(s.u, {
            body: U?.body ?? "",
            title: U?.title ?? void 0,
            shouldShow: null != U,
            delay: 100,
            "aria-label": null != D ? D : V ? I.intl.string(y.default.TZsu1U) : void 0,
            children: (0, l.jsx)("div", {
                className: a()(g.zr, { [g._o]: x, [g.nB]: !x }, h),
                children: (() => {
                    let { text: e, icon: t } = (function (e) {
                        let { cost: t, isActive: n, compact: i, iconSize: r } = e,
                            a = r ?? "sm",
                            s = n ? u.x : d._;
                        return i
                            ? { text: t.toString(), icon: s }
                            : {
                                  text: I.intl.format(n ? y.default.uzQpQd : y.default.ad2Mfj, {
                                      boostCount: t,
                                      dotHook: () => (0, l.jsx)("span", { className: g.Om, children: "\u2022" }),
                                      boostIconHook: () =>
                                          (0, l.jsx)(s, { size: a, color: "currentColor", className: g.$J }),
                                  }),
                              };
                    })({ cost: n.cost, isActive: V, compact: r, iconSize: v });
                    return (0, l.jsx)(o.$, {
                        variant: V ? "secondary" : m ? "expressive" : "primary",
                        "aria-label": I.intl.string(V ? y.default.TZsu1U : y.default.gSxlHf),
                        disabled: O,
                        onClick: (e) => {
                            e.stopPropagation(), V ? j() : C();
                        },
                        loading: R || P,
                        fullWidth: x,
                        size: b ?? (r ? "md" : void 0),
                        text: e,
                        minWidth: 0,
                        ...(r ? { icon: t } : {}),
                    });
                })(),
            }),
        })
    );
}
