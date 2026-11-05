var i = l(477900),
    e = l(582128),
    n = l(503698),
    s = l.n(n),
    a = l(821609),
    r = l(492349),
    d = l(104510),
    u = l(683063),
    c = l(470934),
    f = l(898190),
    b = l(998418),
    p = l(742534),
    m = l(933337),
    g = l(568065),
    h = l(586428),
    y = l(792996),
    A = l(901764);
l.d(
    o,
    {},
    {
        A: function (t) {
            let {
                    guildId: o,
                    powerup: l,
                    compact: n,
                    iconSize: T,
                    size: x,
                    grow: C,
                    className: k,
                    skipActivateModal: E,
                    onError: _,
                } = t,
                { onActivate: v, isLoading: I, error: S } = (0, p.A)(o, l, { skipActivateModal: E }),
                { isLoading: j, error: z } = (0, f.A)(o, l),
                P = (0, m.A)(o, l),
                U = (0, b.Ay)(o, l),
                N = U.type !== g.b_.INACTIVE,
                { disabled: w, reason: B } = (0, c.A)(o, l, N),
                D =
                    null != B
                        ? { title: null, body: B }
                        : U.type === g.b_.LEVEL_ACTIVATED
                          ? {
                                title: y.intl.string(h.default["9oYuvb"]),
                                body: y.intl.formatToPlainString(h.default.WRRYUT, {
                                    perkName: U.sourcePowerup?.title ?? y.intl.string(y.t.BfF6ED),
                                }),
                            }
                          : U.type === g.b_.POWERUP_ACTIVATED
                            ? {
                                  title: y.intl.string(h.default.TZsu1U),
                                  body: y.intl.formatToPlainString(h.default["5HQUzD"], { boostCount: l.cost }),
                              }
                            : null;
            return (
                e.useEffect(() => {
                    _?.(S ?? z);
                }, [S, z, _]),
                (0, i.jsx)(u.u, {
                    body: D?.body ?? "",
                    title: D?.title ?? void 0,
                    shouldShow: null != D,
                    delay: 100,
                    "aria-label": null != B ? B : N ? y.intl.string(h.default.TZsu1U) : void 0,
                    children: (0, i.jsx)("div", {
                        className: s()(A.zr, { [A._o]: C, [A.nB]: !C }, k),
                        children: (() => {
                            let { text: t, icon: o } = (function (t) {
                                let { cost: o, isActive: l, compact: e, iconSize: n } = t,
                                    s = n ?? "sm",
                                    a = l ? r.BoostGemSlashIcon : d.BoostGemIcon;
                                return e
                                    ? { text: o.toString(), icon: a }
                                    : {
                                          text: y.intl.format(l ? h.default.uzQpQd : h.default.ad2Mfj, {
                                              boostCount: o,
                                              dotHook: () =>
                                                  (0, i.jsx)("span", { className: A.Om, children: "\u2022" }),
                                              boostIconHook: () =>
                                                  (0, i.jsx)(a, { size: s, color: "currentColor", className: A.$J }),
                                          }),
                                      };
                            })({ cost: l.cost, isActive: N, compact: n, iconSize: T });
                            return (0, i.jsx)(a.$, {
                                variant: N ? "secondary" : "primary",
                                "aria-label": y.intl.string(N ? h.default.TZsu1U : h.default.gSxlHf),
                                disabled: w,
                                onClick: (t) => {
                                    (t.stopPropagation(), N ? P() : v());
                                },
                                loading: I || j,
                                fullWidth: C,
                                size: x ?? (n ? "md" : void 0),
                                text: t,
                                minWidth: 0,
                                ...(n ? { icon: o } : {}),
                            });
                        })(),
                    }),
                })
            );
        },
    },
);
