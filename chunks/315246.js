"use strict";
n.d(t, { A: () => g, n: () => m });
var r = n(627968),
    i = n(64700),
    a = n(990078),
    s = n(397927),
    o = n(442433),
    l = n(50268),
    u = n(409626),
    c = n(692969),
    d = n(243949),
    _ = n(20805),
    f = n(420706),
    p = n(985018),
    h = n(596020);
let m = "content-inventory-context";
function g(e) {
    let { user: t, guildId: n, channel: g, entry: E, onSelect: A, disableGameProfileLinks: I } = e,
        T = i.useRef(null),
        y = i.useContext(f.Jd),
        S = (0, d.A)({ userId: t.id, guildId: n, channelId: g?.id, onAction: y }),
        v = (0, l.A)({ id: t.id, label: p.intl.string(p.t["/AXYnE"]) }),
        C = "application_id" in E.extra ? E.extra.application_id : null,
        b = (0, l.A)({ id: C, label: p.intl.string(p.t["FfCL+6"]) }),
        N = (0, _.zD)(E),
        R = (0, c.A)({
            location: "ContentPopoutContextMenu",
            applicationId: N && !0 !== I ? E.extra?.application_id : void 0,
            source: u.Ob.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: E.author_id,
        });
    return (0, r.jsx)(s.YNO, {
        targetElementRef: T,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(s.W1t, {
                "data-menu-migrated-auto": !0,
                navId: m,
                onClose: () => {
                    (0, o.Z_)(), t();
                },
                "aria-label": p.intl.string(p.t.liqwPJ),
                onSelect: A,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(s.rXV, {
                            children: [
                                S,
                                null != R &&
                                    (0, r.jsx)(s.Drp, {
                                        id: "game-profile",
                                        label: p.intl.string(p.t.f7aVGn),
                                        action: (e) => {
                                            R(e), y?.();
                                        },
                                    }),
                            ],
                        }),
                        (0, r.jsxs)(s.rXV, { children: [v, b] }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(a.m, {
                asContainer: !0,
                text: p.intl.string(p.t["UKOtz+"]),
                children: (0, r.jsx)(s.DUT, {
                    innerRef: T,
                    className: h.r,
                    ...e,
                    children: (0, r.jsx)(s.jNK, { color: "currentColor", size: "custom", width: 16, height: 16 }),
                }),
            }),
    });
}
