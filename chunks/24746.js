n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(477660),
    s = n.n(o),
    c = n(481060),
    d = n(939893),
    u = n(241209),
    m = n(388032),
    p = n(285136);
let h = s().parserFor(d.Z),
    g = s().reactFor(s().ruleOutput(d.Z, 'react'));
function C(e) {
    let { description: t, supportsMarkdown: n } = e,
        [r, o] = a.useState(!1),
        s = a.useRef(null);
    a.useEffect(() => {
        if (null == s.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            let a = null !== (n = null === (e = s.current) || void 0 === e ? void 0 : e.scrollHeight) && void 0 !== n ? n : 0;
            o(a - (null !== (i = null === (t = s.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0) > 1);
        });
        return e.observe(s.current), () => e.disconnect();
    }, []);
    let [d, m] = a.useState(!1),
        C = a.useCallback(() => {
            m((e) => !e);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                ref: s,
                className: l()({
                    [p.descriptionClamp]: !d,
                    [p.descriptionClampSafari]: !d && 'Safari' === platform.name
                }),
                children: n
                    ? (0, i.jsx)(u.Z, {
                          className: p.detailedDescription,
                          parser: h,
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
                      onToggle: C
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
                    className: p.showMoreContent,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            color: 'interactive-normal',
                            children: n ? m.intl.string(m.t['vtfc4+']) : m.intl.string(m.t.ZDRyur)
                        }),
                        n
                            ? (0, i.jsx)(c.ChevronSmallUpIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: p.showMoreButtonIcon
                              })
                            : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: p.showMoreButtonIcon
                              })
                    ]
                }),
            [n]
        );
    return (0, i.jsxs)(c.Clickable, {
        className: p.showMoreButton,
        onClick: t,
        children: [(0, i.jsx)('div', { className: p.divider }), r, (0, i.jsx)('div', { className: p.divider })]
    });
}
t.Z = function (e) {
    var t, n;
    let { application: r } = e,
        l = null === (t = r.directory_entry) || void 0 === t ? void 0 : t.detailed_description,
        o = null === (n = r.directory_entry) || void 0 === n ? void 0 : n.short_description,
        s = a.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, i.jsx)(C, {
                          description: l,
                          supportsMarkdown: !0
                      })
                    : null != o && o.length > 0
                      ? (0, i.jsx)(C, {
                            description: o,
                            supportsMarkdown: !1
                        })
                      : null,
            [l, o]
        );
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              className: p.overviewContainer,
              children: [
                  (0, i.jsx)(c.Heading, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: m.intl.string(m.t.txraKS)
                  }),
                  s
              ]
          });
};
