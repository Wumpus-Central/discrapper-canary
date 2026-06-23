l.d(t, { A: () => I });
var n = l(627968),
    s = l(64700),
    r = l(503698),
    i = l.n(r),
    o = l(459192),
    a = l(821609),
    u = l(492349),
    d = l(104510),
    c = l(470934),
    p = l(898190),
    m = l(998418),
    g = l(249286),
    f = l(933337),
    x = l(568065),
    A = l(853513),
    h = l(375708),
    E = l(455923);
function I(e) {
    let {
            guildId: t,
            powerup: l,
            compact: r,
            iconSize: I,
            size: v,
            grow: _,
            className: j,
            expressiveCta: y,
            skipActivateModal: S,
            onError: b,
        } = e,
        { onActivate: w, isLoading: R, error: C } = (0, g.A)(t, l, { skipActivateModal: S }),
        { isLoading: L, error: N } = (0, p.A)(t, l),
        P = (0, f.A)(t, l),
        T = (0, m.Ay)(t, l),
        G = T.type !== x.b_.INACTIVE,
        { disabled: O, reason: D } = (0, c.A)(t, l, G),
        k =
            null != D
                ? { title: null, body: D }
                : T.type === x.b_.LEVEL_ACTIVATED
                  ? {
                        title: h.intl.string(A.default["9oYuvb"]),
                        body: h.intl.formatToPlainString(A.default.WRRYUT, {
                            perkName: T.sourcePowerup?.title ?? h.intl.string(h.t.BfF6ED),
                        }),
                    }
                  : T.type === x.b_.POWERUP_ACTIVATED
                    ? {
                          title: h.intl.string(A.default.TZsu1U),
                          body: h.intl.formatToPlainString(A.default["5HQUzD"], { boostCount: l.cost }),
                      }
                    : null;
    return (
        s.useEffect(() => {
            b?.(C ?? N);
        }, [C, N, b]),
        (0, n.jsx)(o.u, {
            body: k?.body ?? "",
            title: k?.title ?? void 0,
            shouldShow: null != k,
            delay: 100,
            "aria-label": null != D ? D : G ? h.intl.string(A.default.TZsu1U) : void 0,
            children: (0, n.jsx)("div", {
                className: i()(E.zr, { [E._o]: _, [E.nB]: !_ }, j),
                children: (() => {
                    let { text: e, icon: t } = (function (e) {
                        let { cost: t, isActive: l, compact: s, iconSize: r } = e,
                            i = r ?? "sm",
                            o = l ? u.x : d._;
                        return s
                            ? { text: t.toString(), icon: o }
                            : {
                                  text: h.intl.format(l ? A.default.uzQpQd : A.default.ad2Mfj, {
                                      boostCount: t,
                                      dotHook: () => (0, n.jsx)("span", { className: E.Om, children: "\u2022" }),
                                      boostIconHook: () =>
                                          (0, n.jsx)(o, { size: i, color: "currentColor", className: E.$J }),
                                  }),
                              };
                    })({ cost: l.cost, isActive: G, compact: r, iconSize: I });
                    return (0, n.jsx)(a.$, {
                        variant: G ? "secondary" : y ? "expressive" : "primary",
                        "aria-label": h.intl.string(G ? A.default.TZsu1U : A.default.gSxlHf),
                        disabled: O,
                        onClick: (e) => {
                            e.stopPropagation(), G ? P() : w();
                        },
                        loading: R || L,
                        fullWidth: _,
                        size: v ?? (r ? "md" : void 0),
                        text: e,
                        minWidth: 0,
                        ...(r ? { icon: t } : {}),
                    });
                })(),
            }),
        })
    );
}
