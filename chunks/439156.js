"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(435371),
    o = n(732955),
    c = n(397927),
    d = n(470934),
    u = n(898190),
    h = n(998418),
    A = n(220628),
    m = n(933337),
    p = n(568065),
    g = n(333354),
    _ = n(985018),
    f = n(21795);
function x(e) {
    let {
            guildId: t,
            powerup: n,
            compact: l,
            iconSize: x,
            size: C,
            grow: E,
            className: I,
            expressiveCta: N,
            onError: b,
        } = e,
        { onActivate: S, isLoading: T, error: v } = (0, A.A)(t, n),
        { isLoading: y, error: j } = (0, u.A)(t, n),
        R = (0, m.A)(t, n),
        O = (0, h.Ay)(t, n),
        L = O.type !== p.b_.INACTIVE,
        { disabled: M, reason: D } = (0, d.A)(t, n, L),
        G =
            null != D
                ? { title: null, body: D }
                : O.type === p.b_.LEVEL_ACTIVATED
                  ? {
                        title: _.intl.string(g.default["9oYuvb"]),
                        body: _.intl.formatToPlainString(g.default.WRRYUT, {
                            perkName: O.sourcePowerup?.title ?? _.intl.string(_.t.BfF6ED),
                        }),
                    }
                  : O.type === p.b_.POWERUP_ACTIVATED
                    ? {
                          title: _.intl.string(g.default.TZsu1U),
                          body: _.intl.formatToPlainString(g.default["5HQUzD"], { boostCount: n.cost }),
                      }
                    : null;
    return (
        s.useEffect(() => {
            b?.(v ?? j);
        }, [v, j, b]),
        (0, i.jsx)(a.un, {
            body: G?.body ?? "",
            title: G?.title ?? void 0,
            shouldShow: null != G,
            delay: 100,
            "aria-label": null != D ? D : L ? _.intl.string(g.default.TZsu1U) : void 0,
            children: (0, i.jsx)("div", {
                className: r()(f.zr, { [f._o]: E, [f.nB]: !E }, I),
                children: (() => {
                    let { text: e, icon: t } = (function (e) {
                        let { cost: t, isActive: n, compact: s, iconSize: l } = e,
                            r = l ?? "sm",
                            a = n ? c.x8N : c._Jp;
                        return s
                            ? { text: t.toString(), icon: a }
                            : {
                                  text: _.intl.format(n ? g.default.uzQpQd : g.default.ad2Mfj, {
                                      boostCount: t,
                                      dotHook: () => (0, i.jsx)("span", { className: f.Om, children: "•" }),
                                      boostIconHook: () =>
                                          (0, i.jsx)(a, { size: r, color: "currentColor", className: f.$J }),
                                  }),
                              };
                    })({ cost: n.cost, isActive: L, compact: l, iconSize: x });
                    return (0, i.jsx)(o.$nd, {
                        variant: L ? "secondary" : N ? "expressive" : "primary",
                        "aria-label": _.intl.string(L ? g.default.TZsu1U : g.default.gSxlHf),
                        disabled: M,
                        onClick: (e) => {
                            e.stopPropagation(), L ? R() : S();
                        },
                        loading: T || y,
                        fullWidth: E,
                        size: C ?? (l ? "md" : void 0),
                        text: e,
                        minWidth: 0,
                        ...(l ? { icon: t } : {}),
                    });
                })(),
            }),
        })
    );
}
