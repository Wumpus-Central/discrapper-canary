n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(477660),
    o = n.n(s),
    c = n(481060),
    d = n(939893),
    u = n(241209),
    m = n(388032),
    h = n(285136);
let p = o().parserFor(d.Z),
    g = o().reactFor(o().ruleOutput(d.Z, 'react'));
function _(e) {
    let { description: t, supportsMarkdown: n } = e,
        [r, s] = a.useState(!1),
        o = a.useRef(null);
    a.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            s((null !== (n = null === (e = o.current) || void 0 === e ? void 0 : e.scrollHeight) && void 0 !== n ? n : 0) - (null !== (i = null === (t = o.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [d, m] = a.useState(!1),
        _ = a.useCallback(() => {
            m((e) => !e);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: o,
                className: l()({
                    [h.descriptionClamp]: !d,
                    [h.descriptionClampSafari]: !d && 'Safari' === platform.name
                }),
                children: n
                    ? (0, i.jsx)(u.Z, {
                          className: h.detailedDescription,
                          parser: p,
                          output: g,
                          state: { allowLinks: !0 },
                          children: t
                      })
                    : (0, i.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          color: 'text-normal',
                          children: t
                      })
            }),
            r || d
                ? (0, i.jsx)(x, {
                      isShowingMore: d,
                      onToggle: _
                  })
                : null
        ]
    });
}
function x(e) {
    let { onToggle: t, isShowingMore: n } = e,
        r = a.useMemo(
            () =>
                (0, i.jsxs)('div', {
                    className: h.showMoreContent,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            color: 'interactive-normal',
                            children: n ? m.intl.string(m.t['vtfc4+']) : m.intl.string(m.t.ZDRyur)
                        }),
                        n
                            ? (0, i.jsx)(c.u04, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: h.showMoreButtonIcon
                              })
                            : (0, i.jsx)(c.CJ0, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: h.showMoreButtonIcon
                              })
                    ]
                }),
            [n]
        );
    return (0, i.jsxs)(c.P3F, {
        className: h.showMoreButton,
        onClick: t,
        children: [(0, i.jsx)('div', { className: h.divider }), r, (0, i.jsx)('div', { className: h.divider })]
    });
}
let C = function (e) {
    var t, n;
    let { application: r } = e,
        l = null === (t = r.directory_entry) || void 0 === t ? void 0 : t.detailed_description,
        s = null === (n = r.directory_entry) || void 0 === n ? void 0 : n.short_description,
        o = a.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, i.jsx)(_, {
                          description: l,
                          supportsMarkdown: !0
                      })
                    : null != s && s.length > 0
                      ? (0, i.jsx)(_, {
                            description: s,
                            supportsMarkdown: !1
                        })
                      : null,
            [l, s]
        );
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: h.overviewContainer,
              children: [
                  (0, i.jsx)(c.X6q, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: m.intl.string(m.t.txraKS)
                  }),
                  o
              ]
          });
};
