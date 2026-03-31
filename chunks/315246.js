"use strict";
n.d(t, { A: () => E, n: () => m });
var r = n(627968),
    i = n(64700),
    s = n(990078),
    a = n(397927),
    o = n(442433),
    l = n(50268),
    u = n(409626),
    c = n(692969),
    d = n(243949),
    _ = n(20805),
    f = n(420706),
    p = n(985018),
    h = n(436878);
let m = "content-inventory-context";
function E(e) {
    let { user: t, guildId: n, channel: E, entry: g, onSelect: A, disableGameProfileLinks: I } = e,
        T = i.useRef(null),
        S = i.useContext(f.Jd),
        y = (0, d.A)({ userId: t.id, guildId: n, channelId: E?.id, onAction: S }),
        v = (0, l.A)({ id: t.id, label: p.intl.string(p.t["/AXYnE"]) }),
        N = "application_id" in g.extra ? g.extra.application_id : null,
        C = (0, l.A)({ id: N, label: p.intl.string(p.t["FfCL+6"]) }),
        R = (0, _.zD)(g),
        O = (0, c.A)({
            location: "ContentPopoutContextMenu",
            applicationId: R && !0 !== I ? g.extra?.application_id : void 0,
            source: u.Ob.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: g.author_id,
        });
    return (0, r.jsx)(a.YNO, {
        targetElementRef: T,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(a.W1t, {
                "data-menu-migrated-auto": !0,
                navId: m,
                onClose: () => {
                    (0, o.Z_)(), t();
                },
                "aria-label": p.intl.string(p.t.liqwPJ),
                onSelect: A,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(a.rXV, {
                            children: [
                                y,
                                null != O &&
                                    (0, r.jsx)(a.Drp, {
                                        id: "game-profile",
                                        label: p.intl.string(p.t.f7aVGn),
                                        action: (e) => {
                                            O(e), S?.();
                                        },
                                    }),
                            ],
                        }),
                        (0, r.jsxs)(a.rXV, { children: [v, C] }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(s.m, {
                asContainer: !0,
                text: p.intl.string(p.t["UKOtz+"]),
                children: (0, r.jsx)(a.DUT, {
                    innerRef: T,
                    className: h.r,
                    ...e,
                    children: (0, r.jsx)(a.jNK, { color: "currentColor", size: "custom", width: 16, height: 16 }),
                }),
            }),
    });
}
