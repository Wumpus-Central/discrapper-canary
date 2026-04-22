"use strict";
n.d(t, { A: () => E });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(517738),
    o = n(942381),
    d = n(717421),
    c = n(192308),
    u = n(534514),
    m = n(622629),
    h = n(939249),
    g = n(22231),
    x = n(789645),
    f = n(834730),
    _ = n(26430),
    p = n(435183),
    j = n(46054),
    b = n(435470),
    v = n(218152),
    C = n(652215),
    A = n(985018),
    N = n(101136),
    S = n(992595);
let E = a.memo(function (e) {
    let { channel: t, onChange: s } = e,
        E = (0, v.ST)(),
        { guidelinesOpen: T } = (0, v.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, o.x),
        y = (0, b.S4)(t),
        [I, w] = a.useState(!1),
        R = a.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== I && w(t);
            },
            [I],
        );
    a.useLayoutEffect(() => {
        setTimeout(s, 350);
    }, [T, s]);
    let [k, M] = a.useState(!T),
        L = (0, d.z)({ opacity: +!!T, maxHeight: 500 * !!T, config: { duration: 300 }, onRest: () => M(!T) });
    return null != t.topic && t.topic.length > 0
        ? (0, l.jsx)(r.animated.div, {
              style: L,
              className: k ? N.kK : void 0,
              children: (0, l.jsxs)("div", {
                  className: N.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: N.N1,
                          children: [
                              (0, l.jsxs)(u.D, {
                                  variant: "heading-lg/semibold",
                                  className: N.$4,
                                  children: [
                                      (0, l.jsx)(m.B, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                                      A.intl.string(A.t["4d4T4l"]),
                                      y &&
                                          (0, l.jsx)(h.D, {
                                              onClick: () => {
                                                  p.Ay.open(t.id, void 0, C.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: N.vk,
                                              children: (0, l.jsx)(g.R, { size: "xs", color: "currentColor" }),
                                          }),
                                  ],
                              }),
                              (0, l.jsx)(h.D, {
                                  "aria-label": A.intl.string(A.t.cpT0Cq),
                                  className: N.vk,
                                  onClick: () => {
                                      E.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, l.jsx)(x.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, l.jsxs)("div", {
                          className: N.iQ,
                          children: [
                              (0, l.jsx)(f.E, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: i()(N.I4, S.PT),
                                  children: (0, l.jsx)("div", {
                                      ref: R,
                                      children: j.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              I &&
                                  (0, l.jsxs)("div", {
                                      className: N.jP,
                                      children: [
                                          (0, l.jsx)("div", { className: N.D7 }),
                                          (0, l.jsx)("div", {
                                              className: N.kx,
                                              children: (0, l.jsx)(h.D, {
                                                  className: N.DD,
                                                  onClick: () => {
                                                      (0, c.openModalLazy)(async () => {
                                                          let { default: e } = await n
                                                              .e("45457")
                                                              .then(n.bind(n, 494664));
                                                          return (n) => (0, l.jsx)(e, { ...n, channel: t });
                                                      });
                                                  },
                                                  children: (0, l.jsxs)(f.E, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-brand",
                                                      className: N.ur,
                                                      children: [
                                                          A.intl.string(A.t.Vu7odK),
                                                          (0, l.jsx)(_._, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: N.yS,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
});
