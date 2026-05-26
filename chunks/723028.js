n.d(s, { default: () => j });
var i = n(627968),
    l = n(64700),
    t = n(562708),
    a = n(17928),
    r = n(521489),
    o = n(793574),
    d = n(688810),
    c = n(274372),
    p = n(280483),
    u = n(556316),
    h = n(309777),
    C = n(429364),
    I = n(97451);
function j(e) {
    let { clipId: s, onEdit: n, channelId: j, transitionState: m, onClose: A } = e;
    (0, p.A)();
    let { analyticsLocations: f } = (0, d.Ay)(o.A.CLIPS_EDITOR),
        x = l.useRef(null),
        k = (0, a.bG)([c.A], () => c.A.getClipById(s));
    return null == k
        ? null
        : (0, i.jsx)(d.f5, {
              value: f,
              children: (0, i.jsx)(r.N, {
                  onClose: A,
                  transitionState: m,
                  trackingProps: { impression: { impressionName: t.ImpressionNames.CLIP_EDITOR_VIEWED } },
                  children: (0, i.jsx)("div", {
                      className: I.jT,
                      ref: x,
                      children: (0, i.jsxs)(C.p, {
                          clip: k,
                          editOnly: !0,
                          modalContainerRef: x,
                          children: [
                              (0, i.jsx)(u.A, { transitionState: m, onClose: A }),
                              (0, i.jsx)(h.A, { onEdit: n, channelId: j, onClose: A }),
                          ],
                      }),
                  }),
              }),
          });
}
