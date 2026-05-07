n.d(t, { A: () => x });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(459192),
    s = n(821609),
    d = n(492349),
    u = n(104510),
    c = n(470934),
    p = n(898190),
    A = n(998418),
    f = n(249286),
    E = n(933337),
    y = n(568065),
    _ = n(853513),
    g = n(375708),
    v = n(455923);
function x(e) {
    let {
            guildId: t,
            powerup: n,
            compact: r,
            iconSize: x,
            size: I,
            grow: b,
            className: h,
            expressiveCta: m,
            onError: k,
        } = e,
        { onActivate: C, isLoading: j, error: P } = (0, f.A)(t, n),
        { isLoading: R, error: T } = (0, p.A)(t, n),
        L = (0, E.A)(t, n),
        S = (0, A.Ay)(t, n),
        V = S.type !== y.b_.INACTIVE,
        { disabled: w, reason: O } = (0, c.A)(t, n, V),
        D =
            null != O
                ? { title: null, body: O }
                : S.type === y.b_.LEVEL_ACTIVATED
                  ? {
                        title: g.intl.string(_.default["9oYuvb"]),
                        body: g.intl.formatToPlainString(_.default.WRRYUT, {
                            perkName: S.sourcePowerup?.title ?? g.intl.string(g.t.BfF6ED),
                        }),
                    }
                  : S.type === y.b_.POWERUP_ACTIVATED
                    ? {
                          title: g.intl.string(_.default.TZsu1U),
                          body: g.intl.formatToPlainString(_.default["5HQUzD"], { boostCount: n.cost }),
                      }
                    : null;
    return (
        i.useEffect(() => {
            k?.(P ?? T);
        }, [P, T, k]),
        (0, l.jsx)(o.u, {
            body: D?.body ?? "",
            title: D?.title ?? void 0,
            shouldShow: null != D,
            delay: 100,
            "aria-label": null != O ? O : V ? g.intl.string(_.default.TZsu1U) : void 0,
            children: (0, l.jsx)("div", {
                className: a()(v.zr, { [v._o]: b, [v.nB]: !b }, h),
                children: (() => {
                    let { text: e, icon: t } = (function (e) {
                        let { cost: t, isActive: n, compact: i, iconSize: r } = e,
                            a = r ?? "sm",
                            o = n ? d.x : u._;
                        return i
                            ? { text: t.toString(), icon: o }
                            : {
                                  text: g.intl.format(n ? _.default.uzQpQd : _.default.ad2Mfj, {
                                      boostCount: t,
                                      dotHook: () => (0, l.jsx)("span", { className: v.Om, children: "\u2022" }),
                                      boostIconHook: () =>
                                          (0, l.jsx)(o, { size: a, color: "currentColor", className: v.$J }),
                                  }),
                              };
                    })({ cost: n.cost, isActive: V, compact: r, iconSize: x });
                    return (0, l.jsx)(s.$, {
                        variant: V ? "secondary" : m ? "expressive" : "primary",
                        "aria-label": g.intl.string(V ? _.default.TZsu1U : _.default.gSxlHf),
                        disabled: w,
                        onClick: (e) => {
                            e.stopPropagation(), V ? L() : C();
                        },
                        loading: j || R,
                        fullWidth: b,
                        size: I ?? (r ? "md" : void 0),
                        text: e,
                        minWidth: 0,
                        ...(r ? { icon: t } : {}),
                    });
                })(),
            }),
        })
    );
}
