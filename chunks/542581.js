n(47120);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(666912),
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
t.Z = i.memo(function (e) {
    let { channel: t, onChange: r } = e,
        C = (0, h.AF)(),
        { guidelinesOpen: v } = (0, h.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, o.X),
        b = (0, m.r_)(t),
        [j, _] = i.useState(!1),
        I = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = e.clientHeight >= 220;
                t !== j && _(t);
            },
            [j]
        );
    i.useLayoutEffect(() => {
        setTimeout(r, 350);
    }, [v, r]);
    let [T, N] = i.useState(!v),
        S = (0, c.useSpring)({
            opacity: v ? 1 : 0,
            maxHeight: v ? 500 : 0,
            config: { duration: 300 },
            onRest: () => N(!v)
        });
    return null != t.topic && t.topic.length > 0
        ? (0, a.jsx)(s.animated.div, {
              style: S,
              className: T ? f.hiddenVisually : void 0,
              children: (0, a.jsxs)('div', {
                  className: f.container,
                  children: [
                      (0, a.jsxs)('div', {
                          className: f.headerContainer,
                          children: [
                              (0, a.jsxs)(c.Heading, {
                                  variant: 'heading-lg/semibold',
                                  className: f.guidelinesHeader,
                                  children: [
                                      (0, a.jsx)(c.BookCheckIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20
                                      }),
                                      x.intl.string(x.t['4d4T4u']),
                                      b &&
                                          (0, a.jsx)(c.Clickable, {
                                              onClick: () => {
                                                  d.ZP.open(t.id, void 0, g.ZfP.TOPIC);
                                              },
                                              tag: 'span',
                                              className: f.clickable,
                                              children: (0, a.jsx)(c.PencilIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          })
                                  ]
                              }),
                              (0, a.jsx)(c.Clickable, {
                                  'aria-label': x.intl.string(x.t.cpT0Cg),
                                  className: f.clickable,
                                  onClick: () => {
                                      C.getState().setGuidelinesOpen(!1);
                                  },
                                  children: (0, a.jsx)(c.XSmallIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  })
                              })
                          ]
                      }),
                      (0, a.jsxs)('div', {
                          className: f.descriptionContainer,
                          children: [
                              (0, a.jsx)(c.Text, {
                                  selectable: !0,
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  style: { maxHeight: 220 },
                                  className: l()(f.guidelines, p.markup),
                                  children: (0, a.jsx)('div', {
                                      ref: I,
                                      children: u.Z.parseForumPostGuidelines(t.topic, !0, {
                                          channelId: t.id,
                                          allowHeading: !0,
                                          allowList: !0
                                      })
                                  })
                              }),
                              j &&
                                  (0, a.jsxs)('div', {
                                      className: f.showMore,
                                      children: [
                                          (0, a.jsx)('div', { className: f.gradient }),
                                          (0, a.jsx)('div', {
                                              className: f.linkContainer,
                                              children: (0, a.jsx)(c.Clickable, {
                                                  className: f.showMoreLink,
                                                  onClick: () => {
                                                      (0, c.openModalLazy)(async () => {
                                                          let { default: e } = await n.e('78712').then(n.bind(n, 223164));
                                                          return (n) =>
                                                              (0, a.jsx)(e, {
                                                                  ...n,
                                                                  channel: t
                                                              });
                                                      });
                                                  },
                                                  children: (0, a.jsxs)(c.Text, {
                                                      variant: 'text-sm/semibold',
                                                      color: 'text-brand',
                                                      className: f.showMoreText,
                                                      children: [
                                                          x.intl.string(x.t.Vu7odH),
                                                          (0, a.jsx)(c.MaximizeIcon, {
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
