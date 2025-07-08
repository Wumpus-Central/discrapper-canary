(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(264738),
    o = n(94171),
    c = n(481060),
    d = n(787014),
    u = n(454585),
    m = n(456269),
    h = n(470623),
    g = n(981631),
    f = n(388032),
    x = n(761852),
    p = n(73433);
let b = i.memo(function (e) {
    let { channel: t, onChange: a } = e,
        b = (0, h.AF)(),
        { guidelinesOpen: j } = (0, h.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, o.X),
        v = (0, m.r_)(t),
        [_, C] = i.useState(!1),
        y = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== _ && C(t);
            },
            [_]
        );
    i.useLayoutEffect(() => {
        setTimeout(a, 350);
    }, [j, a]);
    let [O, w] = i.useState(!j),
        N = (0, c.q_F)({
            opacity: +!!j,
            maxHeight: 500 * !!j,
            config: { duration: 300 },
            onRest: () => w(!j)
        });
    return null != t.topic && t.topic.length > 0
        ? (0, r.jsx)(s.animated.div, {
              style: N,
              className: O ? x.hiddenVisually : void 0,
              children: (0, r.jsxs)('div', {
                  className: x.container,
                  children: [
                      (0, r.jsxs)('div', {
                          className: x.headerContainer,
                          children: [
                              (0, r.jsxs)(c.X6q, {
                                  variant: 'heading-lg/semibold',
                                  className: x.guidelinesHeader,
                                  children: [
                                      (0, r.jsx)(c.snC, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20
                                      }),
                                      f.intl.string(f.t['4d4T4u']),
                                      v &&
                                          (0, r.jsx)(c.P3F, {
                                              onClick: () => {
                                                  d.ZP.open(t.id, void 0, g.ZfP.TOPIC);
                                              },
                                              tag: 'span',
                                              className: x.clickable,
                                              children: (0, r.jsx)(c.vdY, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)(c.P3F, {
                                  'aria-label': f.intl.string(f.t.cpT0Cg),
                                  className: x.clickable,
                                  onClick: () => {
                                      b.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, r.jsx)(c.Dio, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      }),
                      (0, r.jsxs)('div', {
                          className: x.descriptionContainer,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  selectable: !0,
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  style: { maxHeight: 220 },
                                  className: l()(x.guidelines, p.markup),
                                  children: (0, r.jsx)('div', {
                                      ref: y,
                                      children: u.Z.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0
                                      })
                                  })
                              }),
                              _ &&
                                  (0, r.jsxs)('div', {
                                      className: x.showMore,
                                      children: [
                                          (0, r.jsx)('div', { className: x.gradient }),
                                          (0, r.jsx)('div', {
                                              className: x.linkContainer,
                                              children: (0, r.jsx)(c.P3F, {
                                                  className: x.showMoreLink,
                                                  onClick: () => {
                                                      (0, c.ZDy)(async () => {
                                                          let { default: e } = await n.e('78712').then(n.bind(n, 223164));
                                                          return (n) => {
                                                              var i, a;
                                                              return (0, r.jsx)(
                                                                  e,
                                                                  ((i = (function (e) {
                                                                      for (var t = 1; t < arguments.length; t++) {
                                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                                              r = Object.keys(n);
                                                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                                                              (r = r.concat(
                                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                  })
                                                                              )),
                                                                              r.forEach(function (t) {
                                                                                  var r;
                                                                                  ((r = n[t]),
                                                                                      t in e
                                                                                          ? Object.defineProperty(e, t, {
                                                                                                value: r,
                                                                                                enumerable: !0,
                                                                                                configurable: !0,
                                                                                                writable: !0
                                                                                            })
                                                                                          : (e[t] = r));
                                                                              }));
                                                                      }
                                                                      return e;
                                                                  })({}, n)),
                                                                  (a = a = { channel: t }),
                                                                  Object.getOwnPropertyDescriptors
                                                                      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                                                      : (function (e, t) {
                                                                            var n = Object.keys(e);
                                                                            if (Object.getOwnPropertySymbols) {
                                                                                var r = Object.getOwnPropertySymbols(e);
                                                                                n.push.apply(n, r);
                                                                            }
                                                                            return n;
                                                                        })(Object(a)).forEach(function (e) {
                                                                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                                                        }),
                                                                  i)
                                                              );
                                                          };
                                                      });
                                                  },
                                                  children: (0, r.jsxs)(c.Text, {
                                                      variant: 'text-sm/semibold',
                                                      color: 'text-brand',
                                                      className: x.showMoreText,
                                                      children: [
                                                          f.intl.string(f.t.Vu7odH),
                                                          (0, r.jsx)(c.bJT, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: x.showMoreIcon
                                                          })
                                                      ]
                                                  })
                                              })
                                          })
                                      ]
                                  })
                          ]
                      })
                  ]
              })
          })
        : null;
});
