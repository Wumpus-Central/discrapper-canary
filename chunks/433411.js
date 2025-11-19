n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(906732),
    u = n(864106),
    d = n(1585),
    f = n(580747),
    _ = n(345861),
    p = n(350327),
    h = n(150039),
    m = n(993413),
    g = n(388032),
    E = n(785735);
function b(e) {
    let {
            user: t,
            guild: n,
            className: a,
            sectionTitle: _,
            forcedDivider: b = !1,
            withTutorial: y = !1,
            isTryItOut: v = !1,
        } = e,
        { analyticsLocations: I } = (0, c.ZP)(),
        T = (0, f.Z)("enable_avatar_decoration_uploads"),
        S = (0, h.i3)({
            user: t,
            guildId: null == n ? void 0 : n.id,
        }),
        { pendingAvatarDecoration: A, errors: C } = (0, h.wE)({
            guildId: null == n ? void 0 : n.id,
            isTryItOut: v,
        }),
        N = i.useCallback(
            () =>
                (0, d.ps)({
                    analyticsLocations: I,
                    guild: n,
                    isTryItOut: v,
                }),
            [I, n, v],
        ),
        R = v || void 0 !== A ? null != A : null != S;
    function P() {
        v ? (0, p.Xz)(null) : (0, h.PO)(null, null == n ? void 0 : n.id);
    }
    let D = y ? l.gtL : s.zx;
    return (0, r.jsxs)(m.Z, {
        className: a,
        forcedDivider: b,
        hasBackground: !0,
        title: _,
        errors: C,
        children: [
            (0, r.jsxs)("div", {
                className: E.buttonsContainer,
                children: [
                    (0, r.jsx)(D, {
                        size: s.zx.Sizes.SMALL,
                        onClick: N,
                        className: o()({ [E.buttonHighlighted]: y }),
                        children: g.intl.string(g.t.BVcYCx),
                    }),
                    R &&
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: E.removeButton,
                            children: (0, r.jsx)(l.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: (0, u.ad)(t, n) ? g.intl.string(g.t.CHf9iJ) : g.intl.string(g.t.OrokWm),
                                onClick: P,
                            }),
                        }),
                ],
            }),
            t.isStaff() && T && (0, r.jsx)(O, { user: t }),
        ],
    });
}
let y = "PALUE000000001",
    O = (e) => {
        let { user: t } = e;
        return (0, r.jsxs)("div", {
            className: E.overrideButtonsContainer,
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
                                skuID: y,
                            });
                    },
                    size: "sm",
                    variant: "primary",
                    text: g.intl.string(g.t.a9F1Qu),
                }),
            ],
        });
    };
