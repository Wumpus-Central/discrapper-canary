n.d(t, { Z: () => b }), n(953529), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(159635),
    o = n.n(s),
    c = n(481060),
    d = n(241209),
    u = n(547563),
    p = n(388032),
    m = n(582735);
let h = o().parserFor(u.Z),
    g = o().reactFor(o().ruleOutput(u.Z, 'react'));
function _(e) {
    let { description: t, supportsMarkdown: n } = e,
        [a, s] = i.useState(!1),
        o = i.useRef(null);
    i.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            s((null != (n = null == (e = o.current) ? void 0 : e.scrollHeight) ? n : 0) - (null != (r = null == (t = o.current) ? void 0 : t.clientHeight) ? r : 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [u, p] = i.useState(!1),
        _ = i.useCallback(() => {
            p((e) => !e);
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                ref: o,
                className: l()({
                    [m.descriptionClamp]: !u,
                    [m.descriptionClampSafari]: !u && 'Safari' === platform.name
                }),
                children: n
                    ? (0, r.jsx)(d.Z, {
                          className: m.detailedDescription,
                          parser: h,
                          output: g,
                          state: { allowLinks: !0 },
                          children: t
                      })
                    : (0, r.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          color: 'text-normal',
                          children: t
                      })
            }),
            a || u
                ? (0, r.jsx)(f, {
                      isShowingMore: u,
                      onToggle: _
                  })
                : null
        ]
    });
}
function f(e) {
    let { onToggle: t, isShowingMore: n } = e,
        a = i.useMemo(
            () =>
                (0, r.jsxs)('div', {
                    className: m.showMoreContent,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            color: 'interactive-normal',
                            children: n ? p.intl.string(p.t['vtfc4+']) : p.intl.string(p.t.ZDRyur)
                        }),
                        n
                            ? (0, r.jsx)(c.u04, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: m.showMoreButtonIcon
                              })
                            : (0, r.jsx)(c.CJ0, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: m.showMoreButtonIcon
                              })
                    ]
                }),
            [n]
        );
    return (0, r.jsxs)(c.P3F, {
        className: m.showMoreButton,
        onClick: t,
        children: [(0, r.jsx)('div', { className: m.divider }), a, (0, r.jsx)('div', { className: m.divider })]
    });
}
let b = function (e) {
    var t, n;
    let { application: a } = e,
        l = null == (t = a.directory_entry) ? void 0 : t.detailed_description,
        s = null == (n = a.directory_entry) ? void 0 : n.short_description,
        o = i.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, r.jsx)(_, {
                          description: l,
                          supportsMarkdown: !0
                      })
                    : null != s && s.length > 0
                      ? (0, r.jsx)(_, {
                            description: s,
                            supportsMarkdown: !1
                        })
                      : null,
            [l, s]
        );
    return null == o
        ? null
        : (0, r.jsxs)('div', {
              className: m.overviewContainer,
              children: [
                  (0, r.jsx)(c.X6q, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: p.intl.string(p.t.txraKS)
                  }),
                  o
              ]
          });
};
