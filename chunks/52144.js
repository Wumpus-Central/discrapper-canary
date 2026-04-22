n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(912592),
    s = n(189252),
    o = n(851580),
    d = n(222823),
    u = n(287809),
    c = n(371911),
    A = n(790782),
    h = n(985018);
function _(e) {
    let { onOpen: t, onClose: n, "data-jump-section": _ } = e,
        E = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        p = r.useRef(null),
        m = (0, a.bG)([d.Ay], () => E?.id != null && d.Ay.getMentionCount(E.id, A.P.NOTIFICATION_CENTER) > 0);
    return (0, i.jsx)(c.C, {
        targetElementRef: p,
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: m },
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, r) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.A, {
                        ...n,
                        icon: l.K,
                        tooltip: h.intl.string(h.t.GSmTKJ),
                        onClick: e,
                        showBadge: m || r,
                        selected: t,
                        "data-jump-section": _,
                        ref: p,
                    }),
                    (0, i.jsx)(o.v, { location: "inbox-button", targetElementRef: p }),
                ],
            }),
    });
}
