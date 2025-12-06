n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(906732),
    c = n(864106),
    u = n(1585),
    d = n(580747),
    f = n(345861),
    p = n(150039),
    _ = n(993413),
    m = n(388032),
    h = n(642588);
function g(e) {
    let { user: t, guild: n, className: i, sectionTitle: f, forcedDivider: g = !1, withTutorial: E = !1 } = e,
        { analyticsLocations: y } = (0, l.ZP)(),
        O = (0, d.Z)("enable_avatar_decoration_uploads"),
        v = (0, p.i3)({
            user: t,
            guildId: null == n ? void 0 : n.id,
        }),
        { pendingAvatarDecoration: S, errors: I } = (0, p.Tb)(null == n ? void 0 : n.id),
        T = void 0 === S ? null != v : null != S,
        A = () => {
            (0, u.ps)({
                analyticsLocations: y,
                guild: n,
            });
        },
        C = () => {
            (0, p.PO)(null, null == n ? void 0 : n.id);
        },
        N = E ? s.gtL : o.zx;
    return (0, r.jsxs)(_.Z, {
        className: i,
        forcedDivider: g,
        hasBackground: !0,
        title: f,
        errors: I,
        children: [
            (0, r.jsxs)("div", {
                className: h.buttonsContainer,
                children: [
                    (0, r.jsx)(N, {
                        size: o.zx.Sizes.SMALL,
                        onClick: A,
                        className: a()({ [h.buttonHighlighted]: E }),
                        children: m.intl.string(m.t.BVcYCx),
                    }),
                    T &&
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: h.removeButton,
                            children: (0, r.jsx)(s.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: (0, c.ad)(t, n) ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.OrokWm),
                                onClick: C,
                            }),
                        }),
                ],
            }),
            t.isStaff() && O && (0, r.jsx)(b, { user: t }),
        ],
    });
}
let E = "PALUE000000001",
    b = (e) => {
        let { user: t } = e;
        return (0, r.jsxs)("div", {
            className: h.overrideButtonsContainer,
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-xs/bold",
                    children: "STAFF ONLY and Experimental. Upload a decoration to view throughout the app.",
                }),
                (0, r.jsx)(f.Z, {
                    onChange: (e) => {
                        null != e &&
                            (t.avatarDecoration = {
                                asset: e,
                                skuID: E,
                            });
                    },
                    size: "sm",
                    variant: "primary",
                    text: m.intl.string(m.t.a9F1Qu),
                }),
            ],
        });
    };
