n.d(t, {
    A: () => x,
}),
    n(228524),
    n(896048);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(280230),
    c = n.n(s),
    o = n(397927),
    d = n(558179),
    u = n(151890),
    p = n(985018),
    h = n(191817);
let m = c().parserFor(u.A),
    b = c().reactFor(c().ruleOutput(u.A, "react"));

function f(e) {
    let { description: t, supportsMarkdown: n } = e,
        [r, s] = a.useState(!1),
        c = a.useRef(null);
    a.useEffect(() => {
        if (null == c.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, l;
            s(
                (null != (e = null == (n = c.current) ? void 0 : n.scrollHeight) ? e : 0) -
                    (null != (t = null == (l = c.current) ? void 0 : l.clientHeight) ? t : 0) >
                    1,
            );
        });
        return e.observe(c.current), () => e.disconnect();
    }, []);
    let [u, p] = a.useState(!1),
        f = a.useCallback(() => {
            p((e) => !e);
        }, []);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: c,
                className: i()({
                    [h.mA]: !u,
                    [h.ii]: !u && "Safari" === platform.name,
                }),
                children: n
                    ? (0, l.jsx)(d.A, {
                          className: h.R4,
                          parser: m,
                          output: b,
                          state: {
                              allowLinks: !0,
                          },
                          children: t,
                      })
                    : (0, l.jsx)(o.Text, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: t,
                      }),
            }),
            r || u
                ? (0, l.jsx)(g, {
                      isShowingMore: u,
                      onToggle: f,
                  })
                : null,
        ],
    });
}

function g(e) {
    let { onToggle: t, isShowingMore: n } = e,
        r = a.useMemo(
            () =>
                (0, l.jsxs)("div", {
                    className: h.eR,
                    children: [
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-text-default",
                            children: n ? p.intl.string(p.t["vtfc4+"]) : p.intl.string(p.t.ZDRyuq),
                        }),
                        n
                            ? (0, l.jsx)(o.tN5, {
                                  size: "md",
                                  color: "currentColor",
                                  className: h.ys,
                              })
                            : (0, l.jsx)(o.abt, {
                                  size: "md",
                                  color: "currentColor",
                                  className: h.ys,
                              }),
                    ],
                }),
            [n],
        );
    return (0, l.jsxs)(o.DUT, {
        className: h.dO,
        onClick: t,
        children: [
            (0, l.jsx)("div", {
                className: h.yF,
            }),
            r,
            (0, l.jsx)("div", {
                className: h.yF,
            }),
        ],
    });
}
let x = function (e) {
    var t, n;
    let { application: r } = e,
        i = null == (t = r.directory_entry) ? void 0 : t.detailed_description,
        s = null == (n = r.directory_entry) ? void 0 : n.short_description,
        c = a.useMemo(
            () =>
                null != i && i.length > 0
                    ? (0, l.jsx)(f, {
                          description: i,
                          supportsMarkdown: !0,
                      })
                    : null != s && s.length > 0
                      ? (0, l.jsx)(f, {
                            description: s,
                            supportsMarkdown: !1,
                        })
                      : null,
            [i, s],
        );
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: h.l4,
              children: [
                  (0, l.jsx)(o.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: p.intl.string(p.t.txraKS),
                  }),
                  c,
              ],
          });
};
