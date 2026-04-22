l.d(e, { A: () => y });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    r = l.n(i),
    s = l(459192),
    o = l(821609),
    d = l(492349),
    u = l(104510),
    c = l(470934),
    p = l(898190),
    f = l(998418),
    A = l(220628),
    v = l(933337),
    E = l(568065),
    g = l(853513),
    h = l(985018),
    x = l(455923);
function y(t) {
    let {
            guildId: e,
            powerup: l,
            compact: i,
            iconSize: y,
            size: _,
            grow: m,
            className: I,
            expressiveCta: b,
            onError: j,
        } = t,
        { onActivate: C, isLoading: k, error: T } = (0, A.A)(e, l),
        { isLoading: w, error: L } = (0, p.A)(e, l),
        R = (0, v.A)(e, l),
        V = (0, f.Ay)(e, l),
        P = V.type !== E.b_.INACTIVE,
        { disabled: S, reason: O } = (0, c.A)(e, l, P),
        N =
            null != O
                ? { title: null, body: O }
                : V.type === E.b_.LEVEL_ACTIVATED
                  ? {
                        title: h.intl.string(g.default["9oYuvb"]),
                        body: h.intl.formatToPlainString(g.default.WRRYUT, {
                            perkName: V.sourcePowerup?.title ?? h.intl.string(h.t.BfF6ED),
                        }),
                    }
                  : V.type === E.b_.POWERUP_ACTIVATED
                    ? {
                          title: h.intl.string(g.default.TZsu1U),
                          body: h.intl.formatToPlainString(g.default["5HQUzD"], { boostCount: l.cost }),
                      }
                    : null;
    return (
        a.useEffect(() => {
            j?.(T ?? L);
        }, [T, L, j]),
        (0, n.jsx)(s.u, {
            body: N?.body ?? "",
            title: N?.title ?? void 0,
            shouldShow: null != N,
            delay: 100,
            "aria-label": null != O ? O : P ? h.intl.string(g.default.TZsu1U) : void 0,
            children: (0, n.jsx)("div", {
                className: r()(x.zr, { [x._o]: m, [x.nB]: !m }, I),
                children: (() => {
                    let { text: t, icon: e } = (function (t) {
                        let { cost: e, isActive: l, compact: a, iconSize: i } = t,
                            r = i ?? "sm",
                            s = l ? d.x : u._;
                        return a
                            ? { text: e.toString(), icon: s }
                            : {
                                  text: h.intl.format(l ? g.default.uzQpQd : g.default.ad2Mfj, {
                                      boostCount: e,
                                      dotHook: () => (0, n.jsx)("span", { className: x.Om, children: "•" }),
                                      boostIconHook: () =>
                                          (0, n.jsx)(s, { size: r, color: "currentColor", className: x.$J }),
                                  }),
                              };
                    })({ cost: l.cost, isActive: P, compact: i, iconSize: y });
                    return (0, n.jsx)(o.$, {
                        variant: P ? "secondary" : b ? "expressive" : "primary",
                        "aria-label": h.intl.string(P ? g.default.TZsu1U : g.default.gSxlHf),
                        disabled: S,
                        onClick: (t) => {
                            t.stopPropagation(), P ? R() : C();
                        },
                        loading: k || w,
                        fullWidth: m,
                        size: _ ?? (i ? "md" : void 0),
                        text: t,
                        minWidth: 0,
                        ...(i ? { icon: e } : {}),
                    });
                })(),
            }),
        })
    );
}
