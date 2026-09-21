n.d(s, { default: () => m });
var i = n(477900),
    l = n(582128),
    t = n(562708),
    r = n(17928),
    a = n(521489),
    d = n(793574),
    o = n(688810),
    c = n(915725),
    p = n(280483),
    u = n(362081),
    h = n(282207),
    C = n(620957),
    j = n(245116),
    I = n(933092);
function m(e) {
    let { clipId: s, onEdit: n, channelId: m, transitionState: x, onClose: A } = e;
    (0, p.A)();
    let { analyticsLocations: f } = (0, o.Ay)(d.A.CLIPS_EDITOR),
        k = l.useRef(null),
        y = (0, r.bG)([c.Ay], () => c.Ay.getClipById(s));
    return null == y
        ? null
        : (0, i.jsx)(o.f5, {
              value: f,
              children: (0, i.jsx)(a.N, {
                  onClose: A,
                  transitionState: x,
                  trackingProps: { impression: { impressionName: t.ImpressionNames.CLIP_EDITOR_VIEWED } },
                  children: (0, i.jsx)("div", {
                      className: I.jT,
                      ref: k,
                      children: (0, i.jsx)(u.p, {
                          clip: y,
                          editOnly: !0,
                          modalContainerRef: k,
                          children: (0, i.jsxs)(
                              j.JQ,
                              {
                                  children: [
                                      (0, i.jsx)(C.A, { transitionState: x, onClose: A }),
                                      (0, i.jsx)(h.A, { onEdit: n, channelId: m, onClose: A }),
                                  ],
                              },
                              y.id,
                          ),
                      }),
                  }),
              }),
          });
}
