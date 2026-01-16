n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(81239),
    o = n(782425),
    c = n(481060),
    d = n(787014),
    u = n(454585),
    m = n(456269),
    h = n(470623),
    f = n(981631),
    g = n(388032),
    x = n(979444),
    b = n(960324);
let p = a.memo(function (e) {
    let { channel: t, onChange: i } = e,
        p = (0, h.AF)(),
        { guidelinesOpen: j } = (0, h.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, o.X),
        v = (0, m.r_)(t),
        [C, y] = a.useState(!1),
        T = a.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== C && y(t);
            },
            [C],
        );
    a.useLayoutEffect(() => {
        setTimeout(i, 350);
    }, [j, i]);
    let [S, N] = a.useState(!j),
        w = (0, c.q_F)({
            opacity: +!!j,
            maxHeight: 500 * !!j,
            config: { duration: 300 },
            onRest: () => N(!j),
        });
    return null != t.topic && t.topic.length > 0
        ? (0, r.jsx)(s.animated.div, {
              style: w,
              className: S ? x.hiddenVisually : void 0,
              children: (0, r.jsxs)("div", {
                  className: x.container,
                  children: [
                      (0, r.jsxs)("div", {
                          className: x.headerContainer,
                          children: [
                              (0, r.jsxs)(c.Heading, {
                                  variant: "heading-lg/semibold",
                                  className: x.guidelinesHeader,
                                  children: [
                                      (0, r.jsx)(c.snC, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                      g.intl.string(g.t["4d4T4l"]),
                                      v &&
                                          (0, r.jsx)(c.P3F, {
                                              onClick: () => {
                                                  d.ZP.open(t.id, void 0, f.ZfP.TOPIC);
                                              },
                                              tag: "span",
                                              className: x.clickable,
                                              children: (0, r.jsx)(c.vdY, {
                                                  size: "xs",
                                                  color: "currentColor",
                                              }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)(c.P3F, {
                                  "aria-label": g.intl.string(g.t.cpT0Cq),
                                  className: x.clickable,
                                  onClick: () => {
                                      p.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, r.jsx)(c.Dio, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: x.descriptionContainer,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  selectable: !0,
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  style: { maxHeight: 220 },
                                  className: l()(x.guidelines, b.markup),
                                  children: (0, r.jsx)("div", {
                                      ref: T,
                                      children: u.Z.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0,
                                      }),
                                  }),
                              }),
                              C &&
                                  (0, r.jsxs)("div", {
                                      className: x.showMore,
                                      children: [
                                          (0, r.jsx)("div", { className: x.gradient }),
                                          (0, r.jsx)("div", {
                                              className: x.linkContainer,
                                              children: (0, r.jsx)(c.P3F, {
                                                  className: x.showMoreLink,
                                                  onClick: () => {
                                                      (0, c.ZDy)(async () => {
                                                          let { default: e } = await n
                                                              .e("78712")
                                                              .then(n.bind(n, 223164));
                                                          return (n) => {
                                                              var a, i;
                                                              return (0, r.jsx)(
                                                                  e,
                                                                  ((a = (function (e) {
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
                                                                  (i = i = { channel: t }),
                                                                  Object.getOwnPropertyDescriptors
                                                                      ? Object.defineProperties(
                                                                            a,
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
                                                                                a,
                                                                                e,
                                                                                Object.getOwnPropertyDescriptor(i, e),
                                                                            );
                                                                        }),
                                                                  a),
                                                              );
                                                          };
                                                      });
                                                  },
                                                  children: (0, r.jsxs)(c.Text, {
                                                      variant: "text-sm/semibold",
                                                      color: "text-brand",
                                                      className: x.showMoreText,
                                                      children: [
                                                          g.intl.string(g.t.Vu7odK),
                                                          (0, r.jsx)(c.bJT, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: x.showMoreIcon,
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
