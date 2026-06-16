"use strict";
n.d(t, { A: () => T, n: () => I });
var i = n(627968),
    r = n(64700),
    s = n(990078),
    a = n(922016),
    o = n(980707),
    l = n(477782),
    u = n(939249),
    c = n(365199),
    d = n(442433),
    _ = n(50268),
    h = n(409626),
    f = n(692969),
    p = n(243949),
    E = n(20805),
    m = n(742424),
    g = n(375708),
    A = n(399247);
let I = "content-inventory-context";
function T(e) {
    let { user: t, guildId: n, channel: T, entry: S, onSelect: y, disableGameProfileLinks: C } = e,
        N = r.useRef(null),
        v = r.useContext(m.Jd),
        R = (0, p.A)({ userId: t.id, guildId: n, channelId: T?.id, onAction: v }),
        O = (0, _.A)({ id: t.id, label: g.intl.string(g.t["/AXYnE"]) }),
        b = "application_id" in S.extra ? S.extra.application_id : null,
        D = (0, _.A)({ id: b, label: g.intl.string(g.t["FfCL+6"]) }),
        L = (0, E.zD)(S),
        w = (0, f.A)({
            location: "ContentPopoutContextMenu",
            applicationId: L && !0 !== C ? S.extra?.application_id : void 0,
            source: h.Ob.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: S.author_id,
        });
    return (0, i.jsx)(a.Y, {
        targetElementRef: N,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o.W, {
                "data-menu-migrated-auto": !0,
                navId: I,
                onClose: () => {
                    (0, d.Z_)(), t();
                },
                "aria-label": g.intl.string(g.t.liqwPJ),
                onSelect: y,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(l.rX, {
                            children: [
                                R,
                                null != w &&
                                    (0, i.jsx)(l.Dr, {
                                        id: "game-profile",
                                        label: g.intl.string(g.t.f7aVGn),
                                        action: (e) => {
                                            w(e), v?.();
                                        },
                                    }),
                            ],
                        }),
                        (0, i.jsxs)(l.rX, { children: [O, D] }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(s.m, {
                asContainer: !0,
                text: g.intl.string(g.t["UKOtz+"]),
                children: (0, i.jsx)(u.D, {
                    innerRef: N,
                    className: A.r,
                    ...e,
                    children: (0, i.jsx)(c.j, { color: "currentColor", size: "custom", width: 16, height: 16 }),
                }),
            }),
    });
}
