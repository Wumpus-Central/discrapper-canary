n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(421380),
    l = n(397927),
    c = n(688810),
    u = n(385612),
    d = n(128450),
    f = n(339984),
    p = n(985018),
    _ = n(897570);
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
            forcedDivider: A,
            withHighlight: v = !1,
        } = e,
        { newestAnalyticsLocation: S } = (0, c.Ay)(),
        I = v ? l.wLn : o.$n,
        T = i.useCallback(() => {
            (0, u.XD)({
                uploadType: f.HL.AVATAR,
                analyticsSource: S,
                filters: O ? h : void 0,
                guildId: E,
                isTryItOut: O,
            });
        }, [E, S, O]);
    return (0, r.jsx)(d.A, {
        className: b,
        title: m,
        errors: n,
        disabled: y,
        forcedDivider: A,
        children: (0, r.jsxs)("div", {
            className: _.NC,
            children: [
                (0, r.jsx)(I, {
                    className: s()({ [_.yj]: v }),
                    size: o.$n.Sizes.SMALL,
                    onClick: T,
                    children: null != g ? g : p.intl.string(p.t["4OynCD"]),
                }),
                t &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: _.DT,
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
