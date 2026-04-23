n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(862482),
    o = n(930861),
    d = n(821609),
    u = n(688810),
    c = n(385612),
    g = n(128450),
    m = n(339984),
    _ = n(985018),
    A = n(114077);
let h = [{ name: "gif", extensions: ["gif"] }];
function p(e) {
    let {
            showRemoveAvatarButton: t,
            errors: n,
            onAvatarChange: l,
            sectionTitle: p,
            changeAvatarButtonText: x,
            guildId: E,
            className: T,
            disabled: S = !1,
            isTryItOut: f = !1,
            forcedDivider: b,
            withHighlight: C = !1,
        } = e,
        { newestAnalyticsLocation: v } = (0, u.Ay)(),
        N = C ? o.wL : r.$n,
        I = s.useCallback(() => {
            (0, c.XD)({
                uploadType: m.HL.AVATAR,
                analyticsSource: v,
                filters: f ? h : void 0,
                guildId: E,
                isTryItOut: f,
            });
        }, [E, v, f]);
    return (0, i.jsx)(g.A, {
        className: T,
        title: p,
        errors: n,
        disabled: S,
        forcedDivider: b,
        children: (0, i.jsxs)("div", {
            className: A.NC,
            children: [
                (0, i.jsx)(N, {
                    className: a()({ [A.yj]: C }),
                    size: r.$n.Sizes.SMALL,
                    onClick: I,
                    children: x ?? _.intl.string(_.t["4OynCD"]),
                }),
                t &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: A.DT,
                        children: (0, i.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != E ? _.intl.string(_.t.TDjKDm) : _.intl.string(_.t.twB3fz),
                            onClick: () => l(null),
                        }),
                    }),
            ],
        }),
    });
}
