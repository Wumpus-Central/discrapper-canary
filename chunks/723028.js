s.d(e, { default: () => f });
var i = s(477900),
    l = s(582128),
    t = s(562708),
    o = s(17928),
    a = s(521489),
    d = s(793574),
    r = s(688810),
    c = s(553933),
    p = s(915725),
    h = s(280483),
    u = s(951592),
    C = s(309777),
    j = s(362081),
    x = s(217482),
    A = s(328461),
    I = s(801835),
    m = s(933092);
function f(n) {
    let { clipId: e, onEdit: s, channelId: f, transitionState: E, onClose: _ } = n;
    (0, h.A)();
    let { analyticsLocations: k } = (0, r.Ay)(d.A.CLIPS_EDITOR),
        y = l.useRef(null),
        b = (0, o.bG)([p.Ay], () => p.Ay.getClipById(e)),
        { enabled: g } = c._.useConfig({ location: "ClipsEditModal" });
    return null == b
        ? null
        : (0, i.jsx)(r.f5, {
              value: k,
              children: (0, i.jsx)(a.N, {
                  onClose: _,
                  transitionState: E,
                  trackingProps: { impression: { impressionName: t.ImpressionNames.CLIP_EDITOR_VIEWED } },
                  children: (0, i.jsx)("div", {
                      className: m.jT,
                      ref: y,
                      children: (0, i.jsx)(j.p, {
                          clip: b,
                          editOnly: !0,
                          modalContainerRef: y,
                          children: g
                              ? (0, i.jsxs)(
                                    I.JQ,
                                    {
                                        children: [
                                            (0, i.jsx)(A.A, { transitionState: E, onClose: _ }),
                                            (0, i.jsx)(x.A, { onEdit: s, channelId: f, onClose: _ }),
                                        ],
                                    },
                                    b.id,
                                )
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.A, { transitionState: E, onClose: _ }),
                                        (0, i.jsx)(C.A, { onEdit: s, channelId: f, onClose: _ }),
                                    ],
                                }),
                      }),
                  }),
              }),
          });
}
