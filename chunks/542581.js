n.d(t, { Z: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(481752),
    o = n(760907),
    c = n(481060),
    d = n(787014),
    u = n(454585),
    m = n(456269),
    h = n(470623),
    g = n(981631),
    f = n(388032),
    p = n(761852),
    x = n(73433);
let b = i.memo(function (e) {
    let { channel: t, onChange: l } = e,
        b = (0, h.AF)(),
        { guidelinesOpen: j } = (0, h.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, o.X),
        v = (0, m.r_)(t),
        [C, _] = i.useState(!1),
        y = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== C && _(t);
            },
            [C]
        );
    i.useLayoutEffect(() => {
        setTimeout(l, 350);
    }, [j, l]);
    let [O, w] = i.useState(!j),
        S = (0, c.q_F)({
            opacity: +!!j,
            maxHeight: 500 * !!j,
            config: { duration: 300 },
            onRest: () => w(!j)
        });
    return null != t.topic && t.topic.length > 0
        ? (0, r.jsx)(s.animated.div, {
              style: S,
              className: O ? p.hiddenVisually : void 0,
              children: (0, r.jsxs)('div', {
                  className: p.container,
                  children: [
                      (0, r.jsxs)('div', {
                          className: p.headerContainer,
                          children: [
                              (0, r.jsxs)(c.X6q, {
                                  variant: 'heading-lg/semibold',
                                  className: p.guidelinesHeader,
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
                                              className: p.clickable,
                                              children: (0, r.jsx)(c.vdY, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)(c.P3F, {
                                  'aria-label': f.intl.string(f.t.cpT0Cg),
                                  className: p.clickable,
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
                          className: p.descriptionContainer,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  selectable: !0,
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  style: { maxHeight: 220 },
                                  className: a()(p.guidelines, x.markup),
                                  children: (0, r.jsx)('div', {
                                      ref: y,
                                      children: u.Z.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0
                                      })
                                  })
                              }),
                              C &&
                                  (0, r.jsxs)('div', {
                                      className: p.showMore,
                                      children: [
                                          (0, r.jsx)('div', { className: p.gradient }),
                                          (0, r.jsx)('div', {
                                              className: p.linkContainer,
                                              children: (0, r.jsx)(c.P3F, {
                                                  className: p.showMoreLink,
                                                  onClick: () => {
                                                      (0, c.ZDy)(async () => {
                                                          let { default: e } = await n.e('78712').then(n.bind(n, 223164));
                                                          return (n) => {
                                                              var i, l;
                                                              return (0, r.jsx)(
                                                                  e,
                                                                  ((i = (function (e) {
                                                                      for (var t = 1; t < arguments.length; t++) {
                                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                                              r = Object.keys(n);
                                                                          'function' == typeof Object.getOwnPropertySymbols &&
                                                                              (r = r.concat(
                                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                  })
                                                                              )),
                                                                              r.forEach(function (t) {
                                                                                  var r;
                                                                                  (r = n[t]),
                                                                                      t in e
                                                                                          ? Object.defineProperty(e, t, {
                                                                                                value: r,
                                                                                                enumerable: !0,
                                                                                                configurable: !0,
                                                                                                writable: !0
                                                                                            })
                                                                                          : (e[t] = r);
                                                                              });
                                                                      }
                                                                      return e;
                                                                  })({}, n)),
                                                                  (l = l = { channel: t }),
                                                                  Object.getOwnPropertyDescriptors
                                                                      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                                                      : (function (e, t) {
                                                                            var n = Object.keys(e);
                                                                            if (Object.getOwnPropertySymbols) {
                                                                                var r = Object.getOwnPropertySymbols(e);
                                                                                n.push.apply(n, r);
                                                                            }
                                                                            return n;
                                                                        })(Object(l)).forEach(function (e) {
                                                                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                                                        }),
                                                                  i)
                                                              );
                                                          };
                                                      });
                                                  },
                                                  children: (0, r.jsxs)(c.Text, {
                                                      variant: 'text-sm/semibold',
                                                      color: 'text-brand',
                                                      className: p.showMoreText,
                                                      children: [
                                                          f.intl.string(f.t.Vu7odH),
                                                          (0, r.jsx)(c.bJT, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: p.showMoreIcon
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
