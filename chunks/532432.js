n.d(t, { Z: () => h });
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
    p = n(388032),
    _ = n(282341);
let m = [
    {
        name: "gif",
        extensions: ["gif"],
    },
];
function h(e) {
    let {
            showRemoveAvatarButton: t,
            errors: n,
            onAvatarChange: a,
            sectionTitle: h,
            changeAvatarButtonText: g,
            guildId: E,
            className: b,
            disabled: y = !1,
            isTryItOut: O = !1,
            forcedDivider: v,
            withHighlight: S = !1,
        } = e,
        { newestAnalyticsLocation: I } = (0, c.ZP)(),
        T = S ? l.gtL : s.zx,
        C = i.useCallback(() => {
            (0, u.$r)({
                uploadType: f.pC.AVATAR,
                analyticsSource: I,
                filters: O ? m : void 0,
                guildId: E,
                isTryItOut: O,
            });
        }, [E, I, O]);
    return (0, r.jsx)(d.Z, {
        className: b,
        title: h,
        errors: n,
        disabled: y,
        forcedDivider: v,
        children: (0, r.jsxs)("div", {
            className: _.buttonsContainer,
            children: [
                (0, r.jsx)(T, {
                    className: o()({ [_.buttonHighlighted]: S }),
                    size: s.zx.Sizes.SMALL,
                    onClick: C,
                    children: null != g ? g : p.intl.string(p.t["4OynCD"]),
                }),
                t &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: _.removeButton,
                        children: (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != E ? p.intl.string(p.t.TDjKDm) : p.intl.string(p.t.twB3fz),
                            onClick: () => a(null),
                        }),
                    }),
            ],
        }),
    });
}
