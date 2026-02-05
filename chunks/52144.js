n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(319354),
    d = n(435371),
    c = n(397927),
    u = n(573435),
    A = n(545167),
    h = n(851580),
    _ = n(222823),
    m = n(287809),
    p = n(371911),
    g = n(790782),
    E = n(985018),
    f = n(656678);
function I(e) {
    let { onOpen: t, onClose: n, "data-jump-section": a } = e,
        I = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        C = r.useRef(null),
        N = (0, s.bG)([_.Ay], () => I?.id != null && _.Ay.getMentionCount(I.id, g.P.NOTIFICATION_CENTER) > 0),
        { titlebarIconSize: T, titlebarHoverHighlight: S } = (0, A.pz)({ location: "RecentsButton" }),
        x = "sm" === T ? "refresh_sm" : "md",
        v = r.useMemo(() => (0, i.jsx)(c.K$s, { size: x, color: "currentColor" }), [x]);
    return (0, i.jsx)(p.C, {
        targetElementRef: C,
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: N },
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, r) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.m_, {
                        targetElementRef: C,
                        shouldShow: !t,
                        text: E.intl.string(E.t.GSmTKJ),
                        children: (0, i.jsx)(c.DUT, {
                            ...n,
                            tag: "div",
                            innerRef: C,
                            onClick: e,
                            "data-jump-section": a,
                            "aria-label": E.intl.string(E.t.GSmTKJ),
                            className: l()(f.vk, { [f.l9]: S }),
                            children:
                                N || r
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(u.Ay, {
                                                  mask: u.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  height: o.E[x],
                                                  width: o.E[x],
                                                  children: v,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: l()(f.qS, { [f.mf]: "refresh_sm" === x }),
                                              }),
                                          ],
                                      })
                                    : v,
                        }),
                    }),
                    (0, i.jsx)(h.v, { location: "inbox-button", targetElementRef: C }),
                ],
            }),
    });
}
