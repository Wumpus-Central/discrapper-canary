l.d(i, { A: () => T });
var o = l(477900),
    e = l(582128),
    n = l(503698),
    a = l.n(n),
    r = l(821609),
    s = l(492349),
    d = l(104510),
    u = l(683063),
    c = l(470934),
    f = l(898190),
    b = l(998418),
    p = l(249286),
    g = l(933337),
    h = l(568065),
    m = l(959456),
    y = l(105292),
    A = l(901764);
function T(t) {
    let {
            guildId: i,
            powerup: l,
            compact: n,
            iconSize: T,
            size: x,
            grow: C,
            className: _,
            skipActivateModal: k,
            onError: E,
        } = t,
        { onActivate: v, isLoading: j, error: z } = (0, p.A)(i, l, { skipActivateModal: k }),
        { isLoading: P, error: S } = (0, f.A)(i, l),
        U = (0, g.A)(i, l),
        I = (0, b.Ay)(i, l),
        N = I.type !== h.b_.INACTIVE,
        { disabled: w, reason: D } = (0, c.A)(i, l, N),
        H =
            null != D
                ? { title: null, body: D }
                : I.type === h.b_.LEVEL_ACTIVATED
                  ? {
                        title: y.intl.string(m.default["9oYuvb"]),
                        body: y.intl.formatToPlainString(m.default.WRRYUT, {
                            perkName: I.sourcePowerup?.title ?? y.intl.string(y.t.BfF6ED),
                        }),
                    }
                  : I.type === h.b_.POWERUP_ACTIVATED
                    ? {
                          title: y.intl.string(m.default.TZsu1U),
                          body: y.intl.formatToPlainString(m.default["5HQUzD"], { boostCount: l.cost }),
                      }
                    : null;
    return (
        e.useEffect(() => {
            E?.(z ?? S);
        }, [z, S, E]),
        (0, o.jsx)(u.u, {
            body: H?.body ?? "",
            title: H?.title ?? void 0,
            shouldShow: null != H,
            delay: 100,
            "aria-label": null != D ? D : N ? y.intl.string(m.default.TZsu1U) : void 0,
            children: (0, o.jsx)("div", {
                className: a()(A.zr, { [A._o]: C, [A.nB]: !C }, _),
                children: (() => {
                    let { text: t, icon: i } = (function (t) {
                        let { cost: i, isActive: l, compact: e, iconSize: n } = t,
                            a = n ?? "sm",
                            r = l ? s.x : d._;
                        return e
                            ? { text: i.toString(), icon: r }
                            : {
                                  text: y.intl.format(l ? m.default.uzQpQd : m.default.ad2Mfj, {
                                      boostCount: i,
                                      dotHook: () => (0, o.jsx)("span", { className: A.Om, children: "\u2022" }),
                                      boostIconHook: () =>
                                          (0, o.jsx)(r, { size: a, color: "currentColor", className: A.$J }),
                                  }),
                              };
                    })({ cost: l.cost, isActive: N, compact: n, iconSize: T });
                    return (0, o.jsx)(r.$, {
                        variant: N ? "secondary" : "primary",
                        "aria-label": y.intl.string(N ? m.default.TZsu1U : m.default.gSxlHf),
                        disabled: w,
                        onClick: (t) => {
                            (t.stopPropagation(), N ? U() : v());
                        },
                        loading: j || P,
                        fullWidth: C,
                        size: x ?? (n ? "md" : void 0),
                        text: t,
                        minWidth: 0,
                        ...(n ? { icon: i } : {}),
                    });
                })(),
            }),
        })
    );
}
