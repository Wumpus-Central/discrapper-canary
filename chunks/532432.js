n.d(t, { Z: () => O }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(704215),
    l = n(755721),
    c = n(481060),
    u = n(906732),
    d = n(243778),
    f = n(373230),
    _ = n(654904),
    p = n(993413),
    h = n(921944),
    m = n(486324),
    g = n(485696),
    E = n(388032),
    b = n(801292);
let y = [
    {
        name: "gif",
        extensions: ["gif"],
    },
];
function O(e) {
    let {
            showRemoveAvatarButton: t,
            errors: n,
            onAvatarChange: a,
            sectionTitle: O,
            changeAvatarButtonText: v,
            guildId: I,
            className: T,
            disabled: S = !1,
            isTryItOutFlow: A = !1,
            forcedDivider: C,
            withHighlight: N = !1,
        } = e,
        { newestAnalyticsLocation: R } = (0, u.ZP)(),
        P = N ? c.gtL : l.zx,
        w = (0, f.T)({ location: "AvatarSection" }),
        D = [];
    w && D.push(s.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
    let [x, L] = (0, d.US)(D),
        j = x === s.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        M = i.useCallback(() => {
            L(h.L.TAKE_ACTION),
                (0, _.$r)({
                    uploadType: m.pC.AVATAR,
                    analyticsSource: R,
                    filters: A ? y : void 0,
                    guildId: I,
                    isTryItOutFlow: A,
                });
        }, [I, R, A, L]);
    return (0, r.jsx)(p.Z, {
        className: T,
        title: O,
        titleIcon: j
            ? (0, r.jsx)(c.IGR, {
                  text: E.intl.string(E.t.y2b7CA),
                  className: b.newBadge,
              })
            : void 0,
        description: w
            ? E.intl.format(E.t.U4tZfX, {
                  recentAvatarsLimit: g.iZ,
                  onClick: M,
              })
            : void 0,
        errors: n,
        disabled: S,
        forcedDivider: C,
        children: (0, r.jsxs)("div", {
            className: b.buttonsContainer,
            children: [
                (0, r.jsx)(P, {
                    className: o()({ [b.buttonHighlighted]: N }),
                    size: l.zx.Sizes.SMALL,
                    onClick: M,
                    children: null != v ? v : E.intl.string(E.t["4OynCA"]),
                }),
                t &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: b.removeButton,
                        children: (0, r.jsx)(c.zxk, {
                            variant: "secondary",
                            size: "sm",
                            text: null != I ? E.intl.string(E.t.TDjKDg) : E.intl.string(E.t.twB3f3),
                            onClick: () => a(null),
                        }),
                    }),
            ],
        }),
    });
}
