n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(189252),
    o = n(851580),
    d = n(222823),
    c = n(287809),
    u = n(371911),
    A = n(790782),
    h = n(985018);
function _(e) {
    let { onOpen: t, onClose: n, "data-jump-section": _ } = e,
        m = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        p = r.useRef(null),
        g = (0, l.bG)([d.Ay], () => m?.id != null && d.Ay.getMentionCount(m.id, A.P.NOTIFICATION_CENTER) > 0);
    return (0, i.jsx)(u.C, {
        targetElementRef: p,
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: g },
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, r) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.A, {
                        ...n,
                        icon: a.K$s,
                        tooltip: h.intl.string(h.t.GSmTKJ),
                        onClick: e,
                        showBadge: g || r,
                        selected: t,
                        "data-jump-section": _,
                        ref: p,
                    }),
                    (0, i.jsx)(o.v, { location: "inbox-button", targetElementRef: p }),
                ],
            }),
    });
}
