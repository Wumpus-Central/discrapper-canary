n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(906732),
    u = n(654904),
    d = n(993413),
    f = n(486324),
    _ = n(388032),
    p = n(190575);
let h = [
    {
        name: "gif",
        extensions: ["gif"],
    },
];
function m(e) {
    let {
            showRemoveAvatarButton: t,
            errors: n,
            onAvatarChange: a,
            sectionTitle: m,
            changeAvatarButtonText: g,
            guildId: E,
            className: b,
            disabled: y = !1,
            isTryItOut: O = !1,
            forcedDivider: v,
            withHighlight: I = !1,
        } = e,
        { newestAnalyticsLocation: T } = (0, c.ZP)(),
        S = I ? l.gtL : s.zx,
        A = i.useCallback(() => {
            (0, u.$r)({
                uploadType: f.pC.AVATAR,
                analyticsSource: T,
                filters: O ? h : void 0,
                guildId: E,
                isTryItOut: O,
            });
        }, [E, T, O]);
    return (0, r.jsx)(d.Z, {
        className: b,
        title: m,
        errors: n,
        disabled: y,
        forcedDivider: v,
        children: (0, r.jsxs)("div", {
            className: p.buttonsContainer,
            children: [
                (0, r.jsx)(S, {
                    className: o()({ [p.buttonHighlighted]: I }),
                    size: s.zx.Sizes.SMALL,
                    onClick: A,
                    children: null != g ? g : _.intl.string(_.t["4OynCD"]),
                }),
                t &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: p.removeButton,
                        children: (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != E ? _.intl.string(_.t.TDjKDm) : _.intl.string(_.t.twB3fz),
                            onClick: () => a(null),
                        }),
                    }),
            ],
        }),
    });
}
