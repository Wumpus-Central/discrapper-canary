n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(435371),
    o = n(732955),
    d = n(397927),
    c = n(470934),
    u = n(898190),
    h = n(998418),
    A = n(220628),
    g = n(933337),
    m = n(568065),
    p = n(333354),
    _ = n(985018),
    x = n(294590);
function f(e) {
    let { guildId: t, powerup: n, compact: s, iconSize: f, size: E, grow: C, className: I, onError: S } = e,
        { onActivate: b, isLoading: N, error: T } = (0, A.A)(t, n),
        { isLoading: j, error: v } = (0, u.A)(t, n),
        y = (0, g.A)(t, n),
        R = (0, h.Ay)(t, n),
        O = R.type !== m.b_.INACTIVE,
        { disabled: L, reason: D } = (0, c.A)(t, n, O),
        M =
            null != D
                ? { title: null, body: D }
                : R.type === m.b_.LEVEL_ACTIVATED
                  ? {
                        title: _.intl.string(p.default["9oYuvb"]),
                        body: _.intl.formatToPlainString(p.default.WRRYUT, {
                            perkName: R.sourcePowerup?.title ?? _.intl.string(_.t.BfF6ED),
                        }),
                    }
                  : R.type === m.b_.POWERUP_ACTIVATED
                    ? {
                          title: _.intl.string(p.default.TZsu1U),
                          body: _.intl.formatToPlainString(p.default["5HQUzD"], { boostCount: n.cost }),
                      }
                    : null;
    return (
        l.useEffect(() => {
            S?.(T ?? v);
        }, [T, v, S]),
        (0, i.jsx)(r.un, {
            body: M?.body ?? "",
            title: M?.title ?? void 0,
            shouldShow: null != M,
            delay: 100,
            "aria-label": null != D ? D : O ? _.intl.string(p.default.TZsu1U) : void 0,
            children: (0, i.jsx)("div", {
                className: a()(x.zr, { [x._o]: C, [x.nB]: !C }, I),
                children: (() => {
                    let { text: e, icon: t } = (function (e) {
                        let { cost: t, isActive: n, compact: l, iconSize: s } = e,
                            a = s ?? "sm",
                            r = n ? d.x8N : d._Jp;
                        return l
                            ? { text: t.toString(), icon: r }
                            : {
                                  text: _.intl.format(n ? p.default.uzQpQd : p.default.ad2Mfj, {
                                      boostCount: t,
                                      dotHook: () => (0, i.jsx)("span", { className: x.Om, children: "•" }),
                                      boostIconHook: () =>
                                          (0, i.jsx)(r, { size: a, color: "currentColor", className: x.$J }),
                                  }),
                              };
                    })({ cost: n.cost, isActive: O, compact: s, iconSize: f });
                    return (0, i.jsx)(o.$nd, {
                        variant: O ? "secondary" : "primary",
                        "aria-label": _.intl.string(O ? p.default.TZsu1U : p.default.gSxlHf),
                        disabled: L,
                        onClick: (e) => {
                            e.stopPropagation(), O ? y() : b();
                        },
                        loading: N || j,
                        fullWidth: C,
                        size: E ?? (s ? "md" : void 0),
                        text: e,
                        minWidth: 0,
                        ...(s ? { icon: t } : {}),
                    });
                })(),
            }),
        })
    );
}
