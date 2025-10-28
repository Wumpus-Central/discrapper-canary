n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(906732),
    u = n(864106),
    d = n(1585),
    f = n(580747),
    _ = n(345861),
    p = n(150039),
    h = n(993413),
    m = n(388032),
    g = n(642588);
function E(e) {
    let {
            user: t,
            guild: n,
            className: a,
            sectionTitle: _,
            forcedDivider: E = !1,
            withTutorial: b = !1,
            isTryItOutFlow: O = !1,
        } = e,
        { analyticsLocations: v } = (0, c.ZP)(),
        I = null != n,
        {
            userAvatarDecoration: T,
            guildAvatarDecoration: S,
            pendingAvatarDecoration: A,
            pendingErrors: C,
        } = (0, p.$U)(t, n),
        N = (0, f.Z)("enable_avatar_decoration_uploads"),
        R = i.useCallback(
            () =>
                (0, d.ps)({
                    analyticsLocations: v,
                    isTryItOutFlow: O,
                    guild: n,
                }),
            [v, O, n],
        ),
        P = O || void 0 !== A ? null != A : (I ? S : T) != null;
    function w() {
        (0, p.PO)(null == n ? void 0 : n.id, null);
    }
    let D = b ? l.gtL : s.zx;
    return (0, r.jsxs)(h.Z, {
        className: a,
        forcedDivider: E,
        hasBackground: !0,
        title: _,
        errors: C,
        children: [
            (0, r.jsxs)("div", {
                className: g.buttonsContainer,
                children: [
                    (0, r.jsx)(D, {
                        size: s.zx.Sizes.SMALL,
                        onClick: R,
                        className: o()({ [g.buttonHighlighted]: b }),
                        children: m.intl.string(m.t.BVcYCx),
                    }),
                    P &&
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: g.removeButton,
                            children: (0, r.jsx)(l.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: (0, u.ad)(t, n) ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.OrokWm),
                                onClick: w,
                            }),
                        }),
                ],
            }),
            t.isStaff() && N && (0, r.jsx)(y, { user: t }),
        ],
    });
}
let b = "PALUE000000001",
    y = (e) => {
        let { user: t } = e;
        return (0, r.jsxs)("div", {
            className: g.overrideButtonsContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/bold",
                    children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app.",
                }),
                (0, r.jsx)(_.Z, {
                    onChange: (e) => {
                        null != e &&
                            (t.avatarDecoration = {
                                asset: e,
                                skuID: b,
                            });
                    },
                    size: "sm",
                    variant: "primary",
                    text: m.intl.string(m.t.a9F1Qu),
                }),
            ],
        });
    };
