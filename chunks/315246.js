n.d(i, { A: () => A, n: () => m });
var e = n(477900),
    r = n(582128);
if (221552 == n.j) var a = n(922016);
if (221552 == n.j) var o = n(980707);
if (221552 == n.j) var l = n(477782);
if (221552 == n.j) var s = n(866665);
if (221552 == n.j) var d = n(939249);
if (221552 == n.j) var c = n(365199);
var u = n(442433),
    p = n(50268),
    h = n(409626),
    x = n(692969),
    j = n(243949),
    v = n(20805),
    f = n(903134),
    g = n(375708),
    C = n(495602);
let m = "content-inventory-context";
function A(t) {
    let { user: i, guildId: n, channel: A, entry: b, onSelect: I, disableGameProfileLinks: _ } = t,
        P = r.useRef(null),
        k = r.useContext(f.J),
        w = (0, j.A)({ userId: i.id, guildId: n, channelId: A?.id, onAction: k }),
        z = (0, p.A)({ id: i.id, label: g.intl.string(g.t["/AXYnE"]) }),
        E = "application_id" in b.extra ? b.extra.application_id : null,
        y = (0, p.A)({ id: E, label: g.intl.string(g.t["FfCL+6"]) }),
        D = (0, v.zD)(b),
        J = (0, x.A)({
            location: "ContentPopoutContextMenu",
            applicationId: D && !0 !== _ ? b.extra?.application_id : void 0,
            source: h.GameProfileSources.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: b.author_id,
        });
    return (0, e.jsx)(a.Y, {
        targetElementRef: P,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (t) => {
            let { closePopout: i } = t;
            return (0, e.jsx)(o.W, {
                "data-menu-migrated-auto": !0,
                navId: m,
                onClose: () => {
                    ((0, u.Z_)(), i());
                },
                "aria-label": g.intl.string(g.t.liqwPJ),
                onSelect: I,
                children: (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsxs)(l.rX, {
                            children: [
                                w,
                                null != J &&
                                    (0, e.jsx)(l.Dr, {
                                        id: "game-profile",
                                        label: g.intl.string(g.t.f7aVGn),
                                        action: (t) => {
                                            (J(t), k?.());
                                        },
                                    }),
                            ],
                        }),
                        (0, e.jsxs)(l.rX, { children: [z, y] }),
                    ],
                }),
            });
        },
        children: (t) =>
            (0, e.jsx)(s.m, {
                asContainer: !0,
                text: g.intl.string(g.t["UKOtz+"]),
                children: (0, e.jsx)(d.D, {
                    innerRef: P,
                    className: C.r,
                    ...t,
                    children: (0, e.jsx)(c.MoreHorizontalIcon, {
                        color: "currentColor",
                        size: "custom",
                        width: 16,
                        height: 16,
                    }),
                }),
            }),
    });
}
