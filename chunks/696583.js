"use strict";
n.d(t, { A: () => p });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(490249),
    o = n(942381),
    d = n(397927),
    c = n(435183),
    u = n(46054),
    m = n(435470),
    h = n(218152),
    x = n(652215),
    g = n(985018),
    f = n(40211),
    _ = n(206314);
let p = i.memo(function (e) {
    let { channel: t, onChange: s } = e,
        p = (0, h.ST)(),
        { guidelinesOpen: j } = (0, h.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, o.x),
        b = (0, m.S4)(t),
        [v, A] = i.useState(!1),
        C = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== v && A(t);
            },
            [v],
        );
    i.useLayoutEffect(() => {
        setTimeout(s, 350);
    }, [j, s]);
    let [T, N] = i.useState(!j),
        S = (0, d.zhh)({ opacity: +!!j, maxHeight: 500 * !!j, config: { duration: 300 }, onRest: () => N(!j) });
    return null != t.topic && t.topic.length > 0
        ? (0, l.jsx)(r.animated.div, {
              style: S,
              className: T ? f.kK : void 0,
              children: (0, l.jsxs)("div", {
                  className: f.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: f.N1,
                          children: [
                              (0, l.jsxs)(d.Heading, {
                                  variant: "heading-lg/semibold",
                                  className: f.$4,
                                  children: [
                                      (0, l.jsx)(d.B8Q, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      g.intl.string(g.t["4d4T4l"]),
                                      b &&
                                          (0, l.jsx)(d.DUT, {
                                              onClick: () => {
                                                  c.Ay.open(t.id, void 0, x.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: f.vk,
                                              children: (0, l.jsx)(d.R2l, { size: "xs", color: "currentColor" }),
                                          }),
                                  ],
                              }),
                              (0, l.jsx)(d.DUT, {
                                  "aria-label": g.intl.string(g.t.cpT0Cq),
                                  className: f.vk,
                                  onClick: () => {
                                      p.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, l.jsx)(d.PGe, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      }),
                      (0, l.jsxs)("div", {
                          className: f.iQ,
                          children: [
                              (0, l.jsx)(d.Text, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: a()(f.I4, _.PT),
                                  children: (0, l.jsx)("div", {
                                      ref: C,
                                      children: u.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              v &&
                                  (0, l.jsxs)("div", {
                                      className: f.jP,
                                      children: [
                                          (0, l.jsx)("div", { className: f.D7 }),
                                          (0, l.jsx)("div", {
                                              className: f.kx,
                                              children: (0, l.jsx)(d.DUT, {
                                                  className: f.DD,
                                                  onClick: () => {
                                                      (0, d.mMO)(async () => {
                                                          let { default: e } = await n
                                                              .e("45457")
                                                              .then(n.bind(n, 494664));
                                                          return (n) => (0, l.jsx)(e, { ...n, channel: t });
                                                      });
                                                  },
                                                  children: (0, l.jsxs)(d.Text, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-brand",
                                                      className: f.ur,
                                                      children: [
                                                          g.intl.string(g.t.Vu7odK),
                                                          (0, l.jsx)(d._Xm, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: f.yS,
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
