"use strict";
n.d(t, { A: () => g, n: () => m });
var i = n(477900),
    r = n(582128),
    a = n(922016),
    s = n(980707),
    l = n(477782),
    o = n(866665),
    d = n(939249),
    c = n(365199),
    u = n(442433),
    _ = n(50268),
    E = n(409626),
    A = n(692969),
    h = n(243949),
    I = n(20805),
    f = n(742424),
    p = n(375708),
    T = n(725335);
let m = "content-inventory-context";
function g(e) {
    let { user: t, guildId: n, channel: g, entry: S, onSelect: N, disableGameProfileLinks: C } = e,
        O = r.useRef(null),
        R = r.useContext(f.Jd),
        L = (0, h.A)({ userId: t.id, guildId: n, channelId: g?.id, onAction: R }),
        y = (0, _.A)({ id: t.id, label: p.intl.string(p.t["/AXYnE"]) }),
        D = "application_id" in S.extra ? S.extra.application_id : null,
        v = (0, _.A)({ id: D, label: p.intl.string(p.t["FfCL+6"]) }),
        b = (0, I.zD)(S),
        M = (0, A.A)({
            location: "ContentPopoutContextMenu",
            applicationId: b && !0 !== C ? S.extra?.application_id : void 0,
            source: E.GameProfileSources.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: S.author_id,
        });
    return (0, i.jsx)(a.Y, {
        targetElementRef: O,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(s.W, {
                "data-menu-migrated-auto": !0,
                navId: m,
                onClose: () => {
                    (0, u.Z_)(), t();
                },
                "aria-label": p.intl.string(p.t.liqwPJ),
                onSelect: N,
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(l.rX, {
                            children: [
                                L,
                                null != M &&
                                    (0, i.jsx)(l.Dr, {
                                        id: "game-profile",
                                        label: p.intl.string(p.t.f7aVGn),
                                        action: (e) => {
                                            M(e), R?.();
                                        },
                                    }),
                            ],
                        }),
                        (0, i.jsxs)(l.rX, { children: [y, v] }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(o.m, {
                asContainer: !0,
                text: p.intl.string(p.t["UKOtz+"]),
                children: (0, i.jsx)(d.D, {
                    innerRef: O,
                    className: T.r,
                    ...e,
                    children: (0, i.jsx)(c.j, { color: "currentColor", size: "custom", width: 16, height: 16 }),
                }),
            }),
    });
}
