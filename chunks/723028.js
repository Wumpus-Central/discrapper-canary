s.d(e, { default: () => I });
var i = s(627968),
    l = s(64700),
    t = s(562708),
    o = s(17928),
    a = s(521489),
    r = s(793574),
    d = s(688810),
    c = s(553933),
    p = s(274372),
    h = s(280483),
    u = s(247181),
    C = s(309777),
    j = s(263356),
    x = s(564490),
    m = s(362081),
    A = s(594731);
function I(n) {
    let { clipId: e, onEdit: s, channelId: I, transitionState: f, onClose: E } = n;
    (0, h.A)();
    let { analyticsLocations: _ } = (0, d.Ay)(r.A.CLIPS_EDITOR),
        g = l.useRef(null),
        k = (0, o.bG)([p.Ay], () => p.Ay.getClipById(e)),
        { enabled: y } = c._.useConfig({ location: "ClipsEditModal" });
    return null == k
        ? null
        : (0, i.jsx)(d.f5, {
              value: _,
              children: (0, i.jsx)(a.N, {
                  onClose: E,
                  transitionState: f,
                  trackingProps: { impression: { impressionName: t.ImpressionNames.CLIP_EDITOR_VIEWED } },
                  children: (0, i.jsx)("div", {
                      className: A.jT,
                      ref: g,
                      children: (0, i.jsx)(m.p, {
                          clip: k,
                          editOnly: !0,
                          modalContainerRef: g,
                          children: y
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(x.A, { transitionState: f, onClose: E }),
                                        (0, i.jsx)(j.A, { onEdit: s, channelId: I, onClose: E }),
                                    ],
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.A, { transitionState: f, onClose: E }),
                                        (0, i.jsx)(C.A, { onEdit: s, channelId: I, onClose: E }),
                                    ],
                                }),
                      }),
                  }),
              }),
          });
}
