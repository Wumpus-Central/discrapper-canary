n.d(t, { Z: () => x }), n(953529), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(159635),
    o = n.n(s),
    c = n(481060),
    d = n(241209),
    u = n(547563),
    p = n(388032),
    m = n(300449);
let h = o().parserFor(u.Z),
    f = o().reactFor(o().ruleOutput(u.Z, "react"));
function g(e) {
    let { description: t, supportsMarkdown: n } = e,
        [i, s] = r.useState(!1),
        o = r.useRef(null);
    r.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, a;
            s(
                (null != (n = null == (e = o.current) ? void 0 : e.scrollHeight) ? n : 0) -
                    (null != (a = null == (t = o.current) ? void 0 : t.clientHeight) ? a : 0) >
                    1,
            );
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [u, p] = r.useState(!1),
        g = r.useCallback(() => {
            p((e) => !e);
        }, []);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: o,
                className: l()({
                    [m.descriptionClamp]: !u,
                    [m.descriptionClampSafari]: !u && "Safari" === platform.name,
                }),
                children: n
                    ? (0, a.jsx)(d.Z, {
                          className: m.detailedDescription,
                          parser: h,
                          output: f,
                          state: { allowLinks: !0 },
                          children: t,
                      })
                    : (0, a.jsx)(c.Text, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: t,
                      }),
            }),
            i || u
                ? (0, a.jsx)(b, {
                      isShowingMore: u,
                      onToggle: g,
                  })
                : null,
        ],
    });
}
function b(e) {
    let { onToggle: t, isShowingMore: n } = e,
        i = r.useMemo(
            () =>
                (0, a.jsxs)("div", {
                    className: m.showMoreContent,
                    children: [
                        (0, a.jsx)(c.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-text-default",
                            children: n ? p.intl.string(p.t["vtfc4+"]) : p.intl.string(p.t.ZDRyuq),
                        }),
                        n
                            ? (0, a.jsx)(c.u04, {
                                  size: "md",
                                  color: "currentColor",
                                  className: m.showMoreButtonIcon,
                              })
                            : (0, a.jsx)(c.CJ0, {
                                  size: "md",
                                  color: "currentColor",
                                  className: m.showMoreButtonIcon,
                              }),
                    ],
                }),
            [n],
        );
    return (0, a.jsxs)(c.P3F, {
        className: m.showMoreButton,
        onClick: t,
        children: [(0, a.jsx)("div", { className: m.divider }), i, (0, a.jsx)("div", { className: m.divider })],
    });
}
let x = function (e) {
    var t, n;
    let { application: i } = e,
        l = null == (t = i.directory_entry) ? void 0 : t.detailed_description,
        s = null == (n = i.directory_entry) ? void 0 : n.short_description,
        o = r.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, a.jsx)(g, {
                          description: l,
                          supportsMarkdown: !0,
                      })
                    : null != s && s.length > 0
                      ? (0, a.jsx)(g, {
                            description: s,
                            supportsMarkdown: !1,
                        })
                      : null,
            [l, s],
        );
    return null == o
        ? null
        : (0, a.jsxs)("div", {
              className: m.overviewContainer,
              children: [
                  (0, a.jsx)(c.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: p.intl.string(p.t.txraKS),
                  }),
                  o,
              ],
          });
};
