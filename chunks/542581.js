n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(232713),
    c = n(481060),
    d = n(787014),
    u = n(454585),
    m = n(456269),
    h = n(470623),
    g = n(981631),
    x = n(388032),
    f = n(655910),
    p = n(665162);
let v = l.memo(function (e) {
    let { channel: t, onChange: r } = e,
        v = (0, h.AF)(),
        { guidelinesOpen: C } = (0, h.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, o.X),
        _ = (0, m.r_)(t),
        [b, j] = l.useState(!1),
        N = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== b && j(t);
            },
            [b]
        );
    l.useLayoutEffect(() => {
        setTimeout(r, 350);
    }, [C, r]);
    let [T, I] = l.useState(!C),
        S = (0, c.q_F)({
            opacity: C ? 1 : 0,
            maxHeight: C ? 500 : 0,
            config: { duration: 300 },
            onRest: () => I(!C)
        });
    return null != t.topic && t.topic.length > 0
        ? (0, i.jsx)(s.animated.div, {
              style: S,
              className: T ? f.hiddenVisually : void 0,
              children: (0, i.jsxs)('div', {
                  className: f.container,
                  children: [
                      (0, i.jsxs)('div', {
                          className: f.headerContainer,
                          children: [
                              (0, i.jsxs)(c.X6q, {
                                  variant: 'heading-lg/semibold',
                                  className: f.guidelinesHeader,
                                  children: [
                                      (0, i.jsx)(c.snC, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20
                                      }),
                                      x.intl.string(x.t['4d4T4u']),
                                      _ &&
                                          (0, i.jsx)(c.P3F, {
                                              onClick: () => {
                                                  d.ZP.open(t.id, void 0, g.ZfP.TOPIC);
                                              },
                                              tag: 'span',
                                              className: f.clickable,
                                              children: (0, i.jsx)(c.vdY, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          })
                                  ]
                              }),
                              (0, i.jsx)(c.P3F, {
                                  'aria-label': x.intl.string(x.t.cpT0Cg),
                                  className: f.clickable,
                                  onClick: () => {
                                      v.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, i.jsx)(c.Dio, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: f.descriptionContainer,
                          children: [
                              (0, i.jsx)(c.Text, {
                                  selectable: !0,
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  style: { maxHeight: 220 },
                                  className: a()(f.guidelines, p.markup),
                                  children: (0, i.jsx)('div', {
                                      ref: N,
                                      children: u.Z.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0
                                      })
                                  })
                              }),
                              b &&
                                  (0, i.jsxs)('div', {
                                      className: f.showMore,
                                      children: [
                                          (0, i.jsx)('div', { className: f.gradient }),
                                          (0, i.jsx)('div', {
                                              className: f.linkContainer,
                                              children: (0, i.jsx)(c.P3F, {
                                                  className: f.showMoreLink,
                                                  onClick: () => {
                                                      (0, c.ZDy)(async () => {
                                                          let { default: e } = await n.e('78712').then(n.bind(n, 223164));
                                                          return (n) =>
                                                              (0, i.jsx)(e, {
                                                                  ...n,
                                                                  channel: t
                                                              });
                                                      });
                                                  },
                                                  children: (0, i.jsxs)(c.Text, {
                                                      variant: 'text-sm/semibold',
                                                      color: 'text-brand',
                                                      className: f.showMoreText,
                                                      children: [
                                                          x.intl.string(x.t.Vu7odH),
                                                          (0, i.jsx)(c.bJT, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: f.showMoreIcon
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
