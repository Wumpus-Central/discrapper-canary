n.d(t, {
    Y: () => _,
    Z: () => y,
});
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(681715),
    c = n(481060),
    d = n(906732),
    u = n(594174),
    p = n(51144),
    h = n(221292),
    f = n(461631),
    g = n(228168),
    m = n(388032),
    b = n(232644),
    _ =
        (((r = {}).GIFTING_FLOW = "gifting_flow"),
        (r.PROFILE_MODAL = "profile_modal"),
        (r.PROFILE_SIDEBAR = "profile_sidebar"),
        r);
function y(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: r,
            surface: a = "profile_modal",
            cardRef: _,
            renderItemPreview: y,
            accessibleLabel: x,
            onCardClick: O,
            buttonCTALabel: j,
            buttonIcon: v,
            isOwned: C = !1,
            renderSourceIcon: I,
        } = e,
        S = l.useRef(null),
        E = l.useRef(null),
        Z = null != _ ? _ : E,
        { analyticsLocations: P } = (0, d.ZP)(),
        T = r && !0 === t.isOwned && null != t.gifterUserId,
        N = null != t.gifterUserId ? u.default.getUser(t.gifterUserId) : null,
        R = null != N ? p.ZP.getName(N) : null,
        w = T && null != N && null != R && "" !== R,
        A = w
            ? (0, i.jsx)(c.qEK, {
                  src: N.getAvatarURL(void 0, 48),
                  size: c.EFr.SIZE_48,
                  "aria-label": R,
              })
            : null,
        D = (0, i.jsx)("div", {
            className: b.cardStateIconWrapper,
            children: (0, i.jsx)(c.sV5, {
                size: "custom",
                color: c.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: s()(b.cardStateIcon, b.checkmark),
                "aria-label": m.intl.string(m.t.L5Pt9L),
            }),
        }),
        L = (0, i.jsx)("div", {
            className: b.overlay,
            children: (0, i.jsx)(c.Button, {
                focusProps: { ringTarget: Z },
                variant: "primary",
                size: "sm",
                text: j,
                icon: v,
                onClick: (e) => {
                    e.stopPropagation(), M();
                },
                fullWidth: !0,
            }),
        }),
        M = () => {
            null != n &&
                (0, h.Er)({
                    wishlistId: n,
                    action: g.NW.WISHLIST_ITEM_CLICKED,
                    skuId: t.skuId,
                    analyticsLocations: P,
                }),
                O();
        },
        k = (0, i.jsxs)("div", {
            ref: S,
            className: b.container,
            children: [
                (0, i.jsxs)("div", {
                    ref: Z,
                    className: s()(b.card, {
                        [b.isOwned]: C,
                        [b.smallCard]: "gifting_flow" === a,
                        [b.largeCard]: "profile_modal" === a,
                    }),
                    onClick: M,
                    children: [
                        (0, i.jsx)(c.nn4, { children: (0, i.jsx)(c.H, { children: x }) }),
                        (0, i.jsx)("div", {
                            className: b.cardPreview,
                            children: y(),
                        }),
                        C && D,
                        "profile_modal" === a
                            ? L
                            : (0, i.jsx)(c.P3F, {
                                  "aria-label": j,
                                  focusProps: { ringTarget: Z },
                                  onClick: (e) => {
                                      e.stopPropagation(), M();
                                  },
                              }),
                    ],
                }),
                null != I && I(),
                r &&
                    null != n &&
                    (0, i.jsx)(f.Z, {
                        iconSize: "sm",
                        item: t,
                        wishlistId: n,
                        className: b.removeItemButton,
                    }),
            ],
        });
    return w
        ? (0, i.jsx)(o.i_, {
              asContainer: !0,
              title: m.intl.formatToPlainString(m.t.TL4ktE, { username: R }),
              body: t.skuName,
              asset: A,
              children: k,
          })
        : k;
}
