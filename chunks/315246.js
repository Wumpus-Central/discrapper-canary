"use strict";
n.d(t, { A: () => I, n: () => E });
var l = n(477900),
    i = n(582128),
    s = n(922016),
    r = n(980707),
    a = n(477782),
    o = n(866665),
    u = n(939249),
    c = n(365199),
    d = n(442433),
    h = n(50268),
    m = n(409626),
    f = n(692969),
    p = n(243949),
    g = n(20805),
    x = n(438692),
    A = n(375708),
    C = n(495602);
let E = "content-inventory-context";
function I(e) {
    let { user: t, guildId: n, channel: I, entry: y, onSelect: S, disableGameProfileLinks: v } = e,
        N = i.useRef(null),
        _ = i.useContext(x.Jd),
        j = (0, p.A)({ userId: t.id, guildId: n, channelId: I?.id, onAction: _ }),
        T = (0, h.A)({ id: t.id, label: A.intl.string(A.t["/AXYnE"]) }),
        b = "application_id" in y.extra ? y.extra.application_id : null,
        R = (0, h.A)({ id: b, label: A.intl.string(A.t["FfCL+6"]) }),
        O = (0, g.zD)(y),
        M = (0, f.A)({
            location: "ContentPopoutContextMenu",
            applicationId: O && !0 !== v ? y.extra?.application_id : void 0,
            source: m.GameProfileSources.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: y.author_id,
        });
    return (0, l.jsx)(s.Y, {
        targetElementRef: N,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(r.W, {
                "data-menu-migrated-auto": !0,
                navId: E,
                onClose: () => {
                    (0, d.Z_)(), t();
                },
                "aria-label": A.intl.string(A.t.liqwPJ),
                onSelect: S,
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(a.rX, {
                            children: [
                                j,
                                null != M &&
                                    (0, l.jsx)(a.Dr, {
                                        id: "game-profile",
                                        label: A.intl.string(A.t.f7aVGn),
                                        action: (e) => {
                                            M(e), _?.();
                                        },
                                    }),
                            ],
                        }),
                        (0, l.jsxs)(a.rX, { children: [T, R] }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, l.jsx)(o.m, {
                asContainer: !0,
                text: A.intl.string(A.t["UKOtz+"]),
                children: (0, l.jsx)(u.D, {
                    innerRef: N,
                    className: C.r,
                    ...e,
                    children: (0, l.jsx)(c.MoreHorizontalIcon, {
                        color: "currentColor",
                        size: "custom",
                        width: 16,
                        height: 16,
                    }),
                }),
            }),
    });
}
