n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(92674),
    o = n(942381),
    c = n(397927),
    d = n(435183),
    u = n(46054),
    m = n(435470),
    h = n(218152),
    g = n(652215),
    f = n(985018),
    x = n(40211),
    p = n(206314);
let b = l.memo(function (e) {
    let { channel: t, onChange: i } = e,
        b = (0, h.ST)(),
        { guidelinesOpen: j } = (0, h.kU)((e) => {
            let { guidelinesOpen: t } = e;
            return {
                guidelinesOpen: t,
            };
        }, o.x),
        v = (0, m.S4)(t),
        [_, y] = l.useState(!1),
        A = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== _ && y(t);
            },
            [_],
        );
    l.useLayoutEffect(() => {
        setTimeout(i, 350);
    }, [j, i]);
    let [C, O] = l.useState(!j),
        T = (0, c.zhh)({
            opacity: +!!j,
            maxHeight: 500 * !!j,
            config: {
                duration: 300,
            },
            onRest: () => O(!j),
        });
    return null != t.topic && t.topic.length > 0
        ? (0, r.jsx)(s.animated.div, {
              style: T,
              className: C ? x.kK : void 0,
              children: (0, r.jsxs)("div", {
                  className: x.kL,
                  children: [
                      (0, r.jsxs)("div", {
                          className: x.N1,
                          children: [
                              (0, r.jsxs)(c.Heading, {
                                  variant: "heading-lg/semibold",
                                  className: x.$4,
                                  children: [
                                      (0, r.jsx)(c.B8Q, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      f.intl.string(f.t["4d4T4l"]),
                                      v &&
                                          (0, r.jsx)(c.DUT, {
                                              onClick: () => {
                                                  d.Ay.open(t.id, void 0, g.b7d.TOPIC);
                                              },
                                              tag: "span",
                                              className: x.vk,
                                              children: (0, r.jsx)(c.R2l, {
                                                  size: "xs",
                                                  color: "currentColor",
                                              }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)(c.DUT, {
                                  "aria-label": f.intl.string(f.t.cpT0Cq),
                                  className: x.vk,
                                  onClick: () => {
                                      b.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, r.jsx)(c.PGe, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: x.iQ,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: {
                                      maxHeight: 220,
                                  },
                                  className: a()(x.I4, p.PT),
                                  children: (0, r.jsx)("div", {
                                      ref: A,
                                      children: u.A.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              _ &&
                                  (0, r.jsxs)("div", {
                                      className: x.jP,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: x.D7,
                                          }),
                                          (0, r.jsx)("div", {
                                              className: x.kx,
                                              children: (0, r.jsx)(c.DUT, {
                                                  className: x.DD,
                                                  onClick: () => {
                                                      (0, c.mMO)(async () => {
                                                          let { default: e } = await n
                                                              .e("45457")
                                                              .then(n.bind(n, 494664));
                                                          return (n) => {
                                                              var l, i;
                                                              return (0, r.jsx)(
                                                                  e,
                                                                  ((l = (function (e) {
                                                                      for (var t = 1; t < arguments.length; t++) {
                                                                          var n =
                                                                                  null != arguments[t]
                                                                                      ? arguments[t]
                                                                                      : {},
                                                                              r = Object.keys(n);
                                                                          "function" ==
                                                                              typeof Object.getOwnPropertySymbols &&
                                                                              (r = r.concat(
                                                                                  Object.getOwnPropertySymbols(
                                                                                      n,
                                                                                  ).filter(function (e) {
                                                                                      return Object.getOwnPropertyDescriptor(
                                                                                          n,
                                                                                          e,
                                                                                      ).enumerable;
                                                                                  }),
                                                                              )),
                                                                              r.forEach(function (t) {
                                                                                  var r;
                                                                                  (r = n[t]),
                                                                                      t in e
                                                                                          ? Object.defineProperty(
                                                                                                e,
                                                                                                t,
                                                                                                {
                                                                                                    value: r,
                                                                                                    enumerable: !0,
                                                                                                    configurable: !0,
                                                                                                    writable: !0,
                                                                                                },
                                                                                            )
                                                                                          : (e[t] = r);
                                                                              });
                                                                      }
                                                                      return e;
                                                                  })({}, n)),
                                                                  (i = i =
                                                                      {
                                                                          channel: t,
                                                                      }),
                                                                  Object.getOwnPropertyDescriptors
                                                                      ? Object.defineProperties(
                                                                            l,
                                                                            Object.getOwnPropertyDescriptors(i),
                                                                        )
                                                                      : (function (e, t) {
                                                                            var n = Object.keys(e);
                                                                            if (Object.getOwnPropertySymbols) {
                                                                                var r = Object.getOwnPropertySymbols(e);
                                                                                n.push.apply(n, r);
                                                                            }
                                                                            return n;
                                                                        })(Object(i)).forEach(function (e) {
                                                                            Object.defineProperty(
                                                                                l,
                                                                                e,
                                                                                Object.getOwnPropertyDescriptor(i, e),
                                                                            );
                                                                        }),
                                                                  l),
                                                              );
                                                          };
                                                      });
                                                  },
                                                  children: (0, r.jsxs)(c.Text, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-brand",
                                                      className: x.ur,
                                                      children: [
                                                          f.intl.string(f.t.Vu7odK),
                                                          (0, r.jsx)(c._Xm, {
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
