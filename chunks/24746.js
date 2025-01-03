t(47120);
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(477660),
    s = t.n(o),
    c = t(481060),
    d = t(939893),
    u = t(241209),
    m = t(388032),
    p = t(285136);
let _ = s().parserFor(d.Z),
    g = s().reactFor(s().ruleOutput(d.Z, 'react'));
function v(e) {
    let { description: n, supportsMarkdown: t } = e,
        [r, o] = i.useState(!1),
        s = i.useRef(null);
    i.useEffect(() => {
        if (null == s.current) return;
        let e = new ResizeObserver(() => {
            var e, n, t, a;
            let i = null !== (t = null === (e = s.current) || void 0 === e ? void 0 : e.scrollHeight) && void 0 !== t ? t : 0;
            o(i - (null !== (a = null === (n = s.current) || void 0 === n ? void 0 : n.clientHeight) && void 0 !== a ? a : 0) > 1);
        });
        return e.observe(s.current), () => e.disconnect();
    }, []);
    let [d, m] = i.useState(!1),
        v = i.useCallback(() => {
            m((e) => !e);
        }, []);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                ref: s,
                className: l()({
                    [p.descriptionClamp]: !d,
                    [p.descriptionClampSafari]: !d && 'Safari' === platform.name
                }),
                children: t
                    ? (0, a.jsx)(u.Z, {
                          className: p.detailedDescription,
                          parser: _,
                          output: g,
                          state: { allowLinks: !0 },
                          children: n
                      })
                    : (0, a.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          color: 'text-normal',
                          children: n
                      })
            }),
            r || d
                ? (0, a.jsx)(f, {
                      isShowingMore: d,
                      onToggle: v
                  })
                : null
        ]
    });
}
function f(e) {
    let { onToggle: n, isShowingMore: t } = e,
        r = i.useMemo(
            () =>
                (0, a.jsxs)('div', {
                    className: p.showMoreContent,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            color: 'interactive-normal',
                            children: t ? m.intl.string(m.t['vtfc4+']) : m.intl.string(m.t.ZDRyur)
                        }),
                        t
                            ? (0, a.jsx)(c.ChevronSmallUpIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: p.showMoreButtonIcon
                              })
                            : (0, a.jsx)(c.ChevronSmallDownIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: p.showMoreButtonIcon
                              })
                    ]
                }),
            [t]
        );
    return (0, a.jsxs)(c.Clickable, {
        className: p.showMoreButton,
        onClick: n,
        children: [(0, a.jsx)('div', { className: p.divider }), r, (0, a.jsx)('div', { className: p.divider })]
    });
}
n.Z = function (e) {
    var n, t;
    let { application: r } = e,
        l = null === (n = r.directory_entry) || void 0 === n ? void 0 : n.detailed_description,
        o = null === (t = r.directory_entry) || void 0 === t ? void 0 : t.short_description,
        s = i.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, a.jsx)(v, {
                          description: l,
                          supportsMarkdown: !0
                      })
                    : null != o && o.length > 0
                      ? (0, a.jsx)(v, {
                            description: o,
                            supportsMarkdown: !1
                        })
                      : null,
            [l, o]
        );
    return null == s
        ? null
        : (0, a.jsxs)('div', {
              className: p.overviewContainer,
              children: [
                  (0, a.jsx)(c.Heading, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: m.intl.string(m.t.txraKS)
                  }),
                  s
              ]
          });
};
