"use strict";
n.d(t, { A: () => E, n: () => C });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    r = n(265872),
    a = n(861672),
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
    A = n(399247);
let C = "content-inventory-context";
function E(e) {
    let { user: t, guildId: n, channel: E, entry: I, onSelect: v, disableGameProfileLinks: y } = e,
        S = l.useRef(null),
        b = l.useContext(_.Jd),
        N = (0, f.A)({ userId: t.id, guildId: n, channelId: E?.id, onAction: b }),
        T = (0, h.A)({ id: t.id, label: x.intl.string(x.t["/AXYnE"]) }),
        j = "application_id" in I.extra ? I.extra.application_id : null,
        R = (0, h.A)({ id: j, label: x.intl.string(x.t["FfCL+6"]) }),
        w = (0, g.zD)(I),
        L = (0, p.A)({
            location: "ContentPopoutContextMenu",
            applicationId: w && !0 !== y ? I.extra?.application_id : void 0,
            source: m.Ob.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: I.author_id,
        });
    return (0, i.jsx)(r.Y, {
        targetElementRef: S,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(a.W, {
                "data-menu-migrated-auto": !0,
                navId: C,
                onClose: () => {
                    (0, d.Z_)(), t();
                },
                "aria-label": x.intl.string(x.t.liqwPJ),
                onSelect: v,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(o.rX, {
                            children: [
                                N,
                                null != L &&
                                    (0, i.jsx)(o.Dr, {
                                        id: "game-profile",
                                        label: x.intl.string(x.t.f7aVGn),
                                        action: (e) => {
                                            L(e), b?.();
                                        },
                                    }),
                            ],
                        }),
                        (0, i.jsxs)(o.rX, { children: [T, R] }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(s.m, {
                asContainer: !0,
                text: x.intl.string(x.t["UKOtz+"]),
                children: (0, i.jsx)(c.D, {
                    innerRef: S,
                    className: A.r,
                    ...e,
                    children: (0, i.jsx)(u.j, { color: "currentColor", size: "custom", width: 16, height: 16 }),
                }),
            }),
    });
}
