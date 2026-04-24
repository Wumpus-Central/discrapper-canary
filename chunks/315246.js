"use strict";
n.d(t, { A: () => E, n: () => A });
var l = n(627968),
    i = n(64700),
    s = n(990078),
    a = n(922016),
    r = n(550079),
    o = n(477782),
    c = n(939249),
    u = n(365199),
    d = n(442433),
    h = n(50268),
    m = n(409626),
    p = n(692969),
    f = n(243949),
    g = n(20805),
    _ = n(420706),
    x = n(985018),
    C = n(399247);
let A = "content-inventory-context";
function E(e) {
    let { user: t, guildId: n, channel: E, entry: I, onSelect: v, disableGameProfileLinks: y } = e,
        b = i.useRef(null),
        S = i.useContext(_.Jd),
        N = (0, f.A)({ userId: t.id, guildId: n, channelId: E?.id, onAction: S }),
        j = (0, h.A)({ id: t.id, label: x.intl.string(x.t["/AXYnE"]) }),
        T = "application_id" in I.extra ? I.extra.application_id : null,
        w = (0, h.A)({ id: T, label: x.intl.string(x.t["FfCL+6"]) }),
        R = (0, g.zD)(I),
        L = (0, p.A)({
            location: "ContentPopoutContextMenu",
            applicationId: R && !0 !== y ? I.extra?.application_id : void 0,
            source: m.Ob.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: I.author_id,
        });
    return (0, l.jsx)(a.Y, {
        targetElementRef: b,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(r.W, {
                "data-menu-migrated-auto": !0,
                navId: A,
                onClose: () => {
                    (0, d.Z_)(), t();
                },
                "aria-label": x.intl.string(x.t.liqwPJ),
                onSelect: v,
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(o.rX, {
                            children: [
                                N,
                                null != L &&
                                    (0, l.jsx)(o.Dr, {
                                        id: "game-profile",
                                        label: x.intl.string(x.t.f7aVGn),
                                        action: (e) => {
                                            L(e), S?.();
                                        },
                                    }),
                            ],
                        }),
                        (0, l.jsxs)(o.rX, { children: [j, w] }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, l.jsx)(s.m, {
                asContainer: !0,
                text: x.intl.string(x.t["UKOtz+"]),
                children: (0, l.jsx)(c.D, {
                    innerRef: b,
                    className: C.r,
                    ...e,
                    children: (0, l.jsx)(u.j, { color: "currentColor", size: "custom", width: 16, height: 16 }),
                }),
            }),
    });
}
