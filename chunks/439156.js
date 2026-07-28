l.d(t, { A: () => v });
var n = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    o = l(821609),
    a = l(492349),
    u = l(104510),
    d = l(459192),
    c = l(470934),
    m = l(898190),
    p = l(998418),
    g = l(249286),
    f = l(933337),
    x = l(568065),
    A = l(853513),
    h = l(375708),
    E = l(411403);
function v(e) {
    let {
            guildId: t,
            powerup: l,
            compact: s,
            iconSize: v,
            size: I,
            grow: j,
            className: b,
            expressiveCta: _,
            skipActivateModal: S,
            onError: y,
        } = e,
        { onActivate: w, isLoading: C, error: R } = (0, g.A)(t, l, { skipActivateModal: S }),
        { isLoading: N, error: L } = (0, m.A)(t, l),
        P = (0, f.A)(t, l),
        T = (0, p.Ay)(t, l),
        G = T.type !== x.b_.INACTIVE,
        { disabled: k, reason: D } = (0, c.A)(t, l, G),
        O =
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
        i.useEffect(() => {
            y?.(R ?? L);
        }, [R, L, y]),
        (0, n.jsx)(d.u, {
            body: O?.body ?? "",
            title: O?.title ?? void 0,
            shouldShow: null != O,
            delay: 100,
            "aria-label": null != D ? D : G ? h.intl.string(A.default.TZsu1U) : void 0,
            children: (0, n.jsx)("div", {
                className: r()(E.zr, { [E._o]: j, [E.nB]: !j }, b),
                children: (() => {
                    let { text: e, icon: t } = (function (e) {
                        let { cost: t, isActive: l, compact: i, iconSize: s } = e,
                            r = s ?? "sm",
                            o = l ? a.x : u._;
                        return i
                            ? { text: t.toString(), icon: o }
                            : {
                                  text: h.intl.format(l ? A.default.uzQpQd : A.default.ad2Mfj, {
                                      boostCount: t,
                                      dotHook: () => (0, n.jsx)("span", { className: E.Om, children: "\u2022" }),
                                      boostIconHook: () =>
                                          (0, n.jsx)(o, { size: r, color: "currentColor", className: E.$J }),
                                  }),
                              };
                    })({ cost: l.cost, isActive: G, compact: s, iconSize: v });
                    return (0, n.jsx)(o.$, {
                        variant: G ? "secondary" : _ ? "expressive" : "primary",
                        "aria-label": h.intl.string(G ? A.default.TZsu1U : A.default.gSxlHf),
                        disabled: k,
                        onClick: (e) => {
                            e.stopPropagation(), G ? P() : w();
                        },
                        loading: C || N,
                        fullWidth: j,
                        size: I ?? (s ? "md" : void 0),
                        text: e,
                        minWidth: 0,
                        ...(s ? { icon: t } : {}),
                    });
                })(),
            }),
        })
    );
}
