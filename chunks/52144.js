n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(319354),
    d = n(435371),
    c = n(397927),
    u = n(573435),
    A = n(851580),
    h = n(222823),
    _ = n(287809),
    m = n(371911),
    p = n(790782),
    g = n(985018),
    E = n(656678);
function I(e) {
    let { onOpen: t, onClose: n, "data-jump-section": l } = e,
        I = (0, s.bG)([_.default], () => _.default.getCurrentUser()),
        f = r.useRef(null),
        C = (0, s.bG)([h.Ay], () => I?.id != null && h.Ay.getMentionCount(I.id, p.P.NOTIFICATION_CENTER) > 0);
    return (0, i.jsx)(m.C, {
        targetElementRef: f,
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: C },
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, r) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.m_, {
                        targetElementRef: f,
                        shouldShow: !t,
                        text: g.intl.string(g.t.GSmTKJ),
                        children: (0, i.jsx)(c.DUT, {
                            ...n,
                            tag: "div",
                            innerRef: f,
                            onClick: e,
                            "data-jump-section": l,
                            "aria-label": g.intl.string(g.t.GSmTKJ),
                            className: a()(E.vk, E.l9),
                            children:
                                C || r
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(u.Ay, {
                                                  mask: u.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  height: o.E.refresh_sm,
                                                  width: o.E.refresh_sm,
                                                  children: (0, i.jsx)(c.K$s, {
                                                      size: "refresh_sm",
                                                      color: "currentColor",
                                                  }),
                                              }),
                                              (0, i.jsx)("span", { className: E.qS }),
                                          ],
                                      })
                                    : (0, i.jsx)(c.K$s, { size: "refresh_sm", color: "currentColor" }),
                        }),
                    }),
                    (0, i.jsx)(A.v, { location: "inbox-button", targetElementRef: f }),
                ],
            }),
    });
}
