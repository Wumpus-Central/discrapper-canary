n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(421380),
    o = n(397927),
    c = n(688810),
    d = n(385612),
    u = n(128450),
    _ = n(339984),
    m = n(985018),
    A = n(897570);
let g = [{ name: "gif", extensions: ["gif"] }];
function E(e) {
    let {
            showRemoveAvatarButton: t,
            errors: n,
            onAvatarChange: r,
            sectionTitle: E,
            changeAvatarButtonText: h,
            guildId: p,
            className: C,
            disabled: x = !1,
            isTryItOut: T = !1,
            forcedDivider: I,
            withHighlight: S = !1,
        } = e,
        { newestAnalyticsLocation: f } = (0, c.Ay)(),
        N = S ? o.wLn : l.$n,
        b = s.useCallback(() => {
            (0, d.XD)({
                uploadType: _.HL.AVATAR,
                analyticsSource: f,
                filters: T ? g : void 0,
                guildId: p,
                isTryItOut: T,
            });
        }, [p, f, T]);
    return (0, i.jsx)(u.A, {
        className: C,
        title: E,
        errors: n,
        disabled: x,
        forcedDivider: I,
        children: (0, i.jsxs)("div", {
            className: A.NC,
            children: [
                (0, i.jsx)(N, {
                    className: a()({ [A.yj]: S }),
                    size: l.$n.Sizes.SMALL,
                    onClick: b,
                    children: h ?? m.intl.string(m.t["4OynCD"]),
                }),
                t &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: A.DT,
                        children: (0, i.jsx)(o.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != p ? m.intl.string(m.t.TDjKDm) : m.intl.string(m.t.twB3fz),
                            onClick: () => r(null),
                        }),
                    }),
            ],
        }),
    });
}
