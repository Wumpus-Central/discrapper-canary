n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(435371),
    a = n(732955),
    u = n(397927),
    d = n(470934),
    c = n(898190),
    p = n(998418),
    _ = n(220628),
    m = n(933337),
    f = n(568065),
    A = n(333354),
    g = n(985018),
    x = n(21795);
function v(e) {
    let {
            guildId: t,
            powerup: n,
            compact: l,
            iconSize: v,
            size: h,
            grow: E,
            className: I,
            expressiveCta: b,
            onError: j,
        } = e,
        { onActivate: S, isLoading: C, error: w } = (0, _.A)(t, n),
        { isLoading: y, error: L } = (0, c.A)(t, n),
        k = (0, m.A)(t, n),
        N = (0, p.Ay)(t, n),
        R = N.type !== f.b_.INACTIVE,
        { disabled: T, reason: P } = (0, d.A)(t, n, R),
        O =
            null != P
                ? { title: null, body: P }
                : N.type === f.b_.LEVEL_ACTIVATED
                  ? {
                        title: g.intl.string(A.default["9oYuvb"]),
                        body: g.intl.formatToPlainString(A.default.WRRYUT, {
                            perkName: N.sourcePowerup?.title ?? g.intl.string(g.t.BfF6ED),
                        }),
                    }
                  : N.type === f.b_.POWERUP_ACTIVATED
                    ? {
                          title: g.intl.string(A.default.TZsu1U),
                          body: g.intl.formatToPlainString(A.default["5HQUzD"], { boostCount: n.cost }),
                      }
                    : null;
    return (
        i.useEffect(() => {
            j?.(w ?? L);
        }, [w, L, j]),
        (0, r.jsx)(o.un, {
            body: O?.body ?? "",
            title: O?.title ?? void 0,
            shouldShow: null != O,
            delay: 100,
            "aria-label": null != P ? P : R ? g.intl.string(A.default.TZsu1U) : void 0,
            children: (0, r.jsx)("div", {
                className: s()(x.zr, { [x._o]: E, [x.nB]: !E }, I),
                children: (() => {
                    let { text: e, icon: t } = (function (e) {
                        let { cost: t, isActive: n, compact: i, iconSize: l } = e,
                            s = l ?? "sm",
                            o = n ? u.x8N : u._Jp;
                        return i
                            ? { text: t.toString(), icon: o }
                            : {
                                  text: g.intl.format(n ? A.default.uzQpQd : A.default.ad2Mfj, {
                                      boostCount: t,
                                      dotHook: () => (0, r.jsx)("span", { className: x.Om, children: "•" }),
                                      boostIconHook: () =>
                                          (0, r.jsx)(o, { size: s, color: "currentColor", className: x.$J }),
                                  }),
                              };
                    })({ cost: n.cost, isActive: R, compact: l, iconSize: v });
                    return (0, r.jsx)(a.$nd, {
                        variant: R ? "secondary" : b ? "expressive" : "primary",
                        "aria-label": g.intl.string(R ? A.default.TZsu1U : A.default.gSxlHf),
                        disabled: T,
                        onClick: (e) => {
                            e.stopPropagation(), R ? k() : S();
                        },
                        loading: C || y,
                        fullWidth: E,
                        size: h ?? (l ? "md" : void 0),
                        text: e,
                        minWidth: 0,
                        ...(l ? { icon: t } : {}),
                    });
                })(),
            }),
        })
    );
}
