l.d(i, { A: () => A });
var o = l(477900),
    e = l(582128),
    n = l(503698),
    r = l.n(n),
    s = l(821609),
    a = l(492349),
    d = l(104510),
    u = l(459192),
    c = l(470934),
    f = l(898190),
    p = l(998418),
    b = l(249286),
    g = l(933337),
    h = l(568065),
    m = l(641641),
    y = l(375708),
    x = l(901764);
function A(t) {
    let {
            guildId: i,
            powerup: l,
            compact: n,
            iconSize: A,
            size: T,
            grow: C,
            className: _,
            expressiveCta: k,
            skipActivateModal: v,
            onError: E,
        } = t,
        { onActivate: j, isLoading: z, error: P } = (0, b.A)(i, l, { skipActivateModal: v }),
        { isLoading: S, error: U } = (0, f.A)(i, l),
        I = (0, g.A)(i, l),
        N = (0, p.Ay)(i, l),
        w = N.type !== h.b_.INACTIVE,
        { disabled: D, reason: H } = (0, c.A)(i, l, w),
        L =
            null != H
                ? { title: null, body: H }
                : N.type === h.b_.LEVEL_ACTIVATED
                  ? {
                        title: y.intl.string(m.default["9oYuvb"]),
                        body: y.intl.formatToPlainString(m.default.WRRYUT, {
                            perkName: N.sourcePowerup?.title ?? y.intl.string(y.t.BfF6ED),
                        }),
                    }
                  : N.type === h.b_.POWERUP_ACTIVATED
                    ? {
                          title: y.intl.string(m.default.TZsu1U),
                          body: y.intl.formatToPlainString(m.default["5HQUzD"], { boostCount: l.cost }),
                      }
                    : null;
    return (
        e.useEffect(() => {
            E?.(P ?? U);
        }, [P, U, E]),
        (0, o.jsx)(u.u, {
            body: L?.body ?? "",
            title: L?.title ?? void 0,
            shouldShow: null != L,
            delay: 100,
            "aria-label": null != H ? H : w ? y.intl.string(m.default.TZsu1U) : void 0,
            children: (0, o.jsx)("div", {
                className: r()(x.zr, { [x._o]: C, [x.nB]: !C }, _),
                children: (() => {
                    let { text: t, icon: i } = (function (t) {
                        let { cost: i, isActive: l, compact: e, iconSize: n } = t,
                            r = n ?? "sm",
                            s = l ? a.x : d._;
                        return e
                            ? { text: i.toString(), icon: s }
                            : {
                                  text: y.intl.format(l ? m.default.uzQpQd : m.default.ad2Mfj, {
                                      boostCount: i,
                                      dotHook: () => (0, o.jsx)("span", { className: x.Om, children: "\u2022" }),
                                      boostIconHook: () =>
                                          (0, o.jsx)(s, { size: r, color: "currentColor", className: x.$J }),
                                  }),
                              };
                    })({ cost: l.cost, isActive: w, compact: n, iconSize: A });
                    return (0, o.jsx)(s.$, {
                        variant: w ? "secondary" : k ? "expressive" : "primary",
                        "aria-label": y.intl.string(w ? m.default.TZsu1U : m.default.gSxlHf),
                        disabled: D,
                        onClick: (t) => {
                            t.stopPropagation(), w ? I() : j();
                        },
                        loading: z || S,
                        fullWidth: C,
                        size: T ?? (n ? "md" : void 0),
                        text: t,
                        minWidth: 0,
                        ...(n ? { icon: i } : {}),
                    });
                })(),
            }),
        })
    );
}
