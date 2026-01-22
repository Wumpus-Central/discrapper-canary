n.d(t, { A: () => p }), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(432022),
    c = n(942381),
    o = n(397927),
    d = n(435183),
    u = n(46054),
    m = n(435470),
    h = n(218152),
    f = n(652215),
    g = n(985018),
    x = n(40211),
    b = n(206314);
let p = r.memo(function (e) {
    let { channel: t, onChange: a } = e,
        p = (0, h.ST)(),
        { guidelinesOpen: j } = (0, h.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.x),
        v = (0, m.S4)(t),
        [y, A] = r.useState(!1),
        C = r.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== y && A(t);
            },
            [y],
        );
    r.useLayoutEffect(() => {
        setTimeout(a, 350);
    }, [j, a]);
    let [O, N] = r.useState(!j),
        S = (0, o.zhh)({
            opacity: +!!j,
            maxHeight: 500 * !!j,
            config: { duration: 300 },
            onRest: () => N(!j),
        });
    return null != t.topic && t.topic.length > 0
        ? (0, l.jsx)(s.animated.div, {
              style: S,
              className: O ? x.kK : void 0,
              children: (0, l.jsxs)("div", {
                  className: x.kL,
                  children: [
                      (0, l.jsxs)("div", {
                          className: x.N1,
                          children: [
                              (0, l.jsxs)(o.Heading, {
                                  variant: "heading-lg/semibold",
                                  className: x.$4,
                                  children: [
                                      (0, l.jsx)(o.B8Q, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      g.intl.string(g.t["4d4T4l"]),
                                      v &&
                                          (0, l.jsx)(o.DUT, {
                                              onClick: () => {
                                                  d.Ay.open(t.id, void 0, f.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: x.vk,
                                              children: (0, l.jsx)(o.R2l, {
                                                  size: "xs",
                                                  color: "currentColor",
                                              }),
                                          }),
                                  ],
                              }),
                              (0, l.jsx)(o.DUT, {
                                  "aria-label": g.intl.string(g.t.cpT0Cq),
                                  className: x.vk,
                                  onClick: () => {
                                      p.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, l.jsx)(o.PGe, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
                      (0, l.jsxs)("div", {
                          className: x.iQ,
                          children: [
                              (0, l.jsx)(o.Text, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: i()(x.I4, b.PT),
                                  children: (0, l.jsx)("div", {
                                      ref: C,
                                      children: u.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              y &&
                                  (0, l.jsxs)("div", {
                                      className: x.jP,
                                      children: [
                                          (0, l.jsx)("div", { className: x.D7 }),
                                          (0, l.jsx)("div", {
                                              className: x.kx,
                                              children: (0, l.jsx)(o.DUT, {
                                                  className: x.DD,
                                                  onClick: () => {
                                                      (0, o.mMO)(async () => {
                                                          let { default: e } = await n
                                                              .e("45457")
                                                              .then(n.bind(n, 494664));
                                                          return (n) => {
                                                              var r, a;
                                                              return (0, l.jsx)(
                                                                  e,
                                                                  ((r = (function (e) {
                                                                      for (var t = 1; t < arguments.length; t++) {
                                                                          var n =
                                                                                  null != arguments[t]
                                                                                      ? arguments[t]
                                                                                      : {},
                                                                              l = Object.keys(n);
                                                                          "function" ==
                                                                              typeof Object.getOwnPropertySymbols &&
                                                                              (l = l.concat(
                                                                                  Object.getOwnPropertySymbols(
                                                                                      n,
                                                                                  ).filter(function (e) {
                                                                                      return Object.getOwnPropertyDescriptor(
                                                                                          n,
                                                                                          e,
                                                                                      ).enumerable;
                                                                                  }),
                                                                              )),
                                                                              l.forEach(function (t) {
                                                                                  var l;
                                                                                  (l = n[t]),
                                                                                      t in e
                                                                                          ? Object.defineProperty(
                                                                                                e,
                                                                                                t,
                                                                                                {
                                                                                                    value: l,
                                                                                                    enumerable: !0,
                                                                                                    configurable: !0,
                                                                                                    writable: !0,
                                                                                                },
                                                                                            )
                                                                                          : (e[t] = l);
                                                                              });
                                                                      }
                                                                      return e;
                                                                  })({}, n)),
                                                                  (a = a = { channel: t }),
                                                                  Object.getOwnPropertyDescriptors
                                                                      ? Object.defineProperties(
                                                                            r,
                                                                            Object.getOwnPropertyDescriptors(a),
                                                                        )
                                                                      : (function (e, t) {
                                                                            var n = Object.keys(e);
                                                                            if (Object.getOwnPropertySymbols) {
                                                                                var l = Object.getOwnPropertySymbols(e);
                                                                                n.push.apply(n, l);
                                                                            }
                                                                            return n;
                                                                        })(Object(a)).forEach(function (e) {
                                                                            Object.defineProperty(
                                                                                r,
                                                                                e,
                                                                                Object.getOwnPropertyDescriptor(a, e),
                                                                            );
                                                                        }),
                                                                  r),
                                                              );
                                                          };
                                                      });
                                                  },
                                                  children: (0, l.jsxs)(o.Text, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-brand",
                                                      className: x.ur,
                                                      children: [
                                                          g.intl.string(g.t.Vu7odK),
                                                          (0, l.jsx)(o._Xm, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: x.yS,
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
