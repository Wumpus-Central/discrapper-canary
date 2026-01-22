n.d(t, {
    c: () => v,
});
var l = n(627968),
    r = n(64700),
    i = n(91871),
    a = n.n(i),
    s = n(23339),
    o = n(311907),
    c = n(827734),
    u = n(397927),
    d = n(962125),
    f = n(287809),
    p = n(474090),
    b = n(656088),
    g = n(971778),
    m = n(342887),
    h = n(973947),
    A = n(985018),
    y = n(32425);
let _ = [51],
    E = [A.t.OpqAok];

function v(e) {
    let { columns: t, handleScroll: n, voiceListRef: r, showSectionHeaders: i = !1, query: a } = e,
        s = x(),
        v = (0, o.bG)([f.default], () => (0, p.ki)(f.default.getCurrentUser())),
        N = S(a, v),
        C = Math.ceil(N.length / t),
        {
            isNativeModuleLoaded: j,
            isNativeModuleLoading: T,
            catalogLastFetchTime: I,
        } = (0, o.cf)([g.A], () => ({
            isNativeModuleLoaded: g.A.isNativeModuleLoaded(),
            isNativeModuleLoading: g.A.isNativeModuleLoading(),
            catalogLastFetchTime: g.A.getCatalogLastFetchTime(),
        }));
    return a && 0 === N.length
        ? (0, l.jsxs)("div", {
              className: y.nm,
              children: [
                  (0, l.jsx)(u.$p$, {
                      width: 40,
                      height: 40,
                      size: "custom",
                      color: c.A.colors.ICON_MUTED,
                  }),
                  (0, l.jsx)(u.Heading, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      children: A.intl.string(A.t.ZzukHk),
                  }),
              ],
          })
        : s
          ? (0, l.jsxs)("div", {
                className: y.nm,
                children: [
                    (0, l.jsx)(u.id, {
                        width: 40,
                        height: 40,
                        size: "custom",
                        color: c.A.colors.ICON_MUTED,
                    }),
                    (0, l.jsx)(u.Heading, {
                        variant: "heading-md/normal",
                        color: "text-muted",
                        children: A.intl.string(A.t.DpZNJw),
                    }),
                    (0, l.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: A.intl.format(A.t["5afO9U"], {
                            onClick: j ? m.st : m.md,
                        }),
                    }),
                ],
            })
          : T || null == I
            ? (0, l.jsx)("div", {
                  className: y.Lq,
                  children: (0, l.jsx)(u.y$y, {
                      type: u.y$y.Type.CHASING_DOTS,
                      animated: !0,
                  }),
              })
            : (0, l.jsx)(d.A, {
                  fade: !0,
                  className: y.kL,
                  renderRow: (e) => {
                      let n = e * t,
                          r = N.slice(n, n + t);
                      return (0, l.jsx)(
                          O,
                          {
                              children: r.map((n, r) =>
                                  (0, l.jsx)(
                                      h.I,
                                      {
                                          voiceFilter: n,
                                          hasNitro: v,
                                          analyticsContext: {
                                              reason: b.O.USER_SELECTION,
                                              gridRows: C,
                                              gridColumns: t,
                                              interactedRow: e,
                                              interactedColumn: r,
                                          },
                                      },
                                      null == n ? void 0 : n.id,
                                  ),
                              ),
                          },
                          e,
                      );
                  },
                  renderSectionHeader:
                      !1 === i
                          ? void 0
                          : (e) =>
                                (0, l.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    className: y.wx,
                                    children: A.intl.string(E[e]),
                                }),
                  sectionHeaderHeight: !1 === i ? void 0 : (e) => _[e],
                  rowCount: C,
                  rowHeight: 130,
                  onScroll: n,
                  ref: r,
                  sectionFooterHeight: 40 * !v,
              });
}

function O(e) {
    let { children: t } = e,
        n = r.useRef(null);
    return (0, l.jsx)("div", {
        ref: n,
        className: y.nM,
        children: (0, l.jsx)(u.xpW, {
            containerRef: n,
            children: t,
        }),
    });
}
let x = () =>
        (0, o.bG)([g.A], () => {
            var e;
            return (
                !Object.keys(null != (e = g.A.getVoiceFilterModels()) ? e : {}).length &&
                (g.A.getCatalogFetchFailed() || g.A.hasNativeModuleFailed())
            );
        }),
    S = (e, t) =>
        (0, o.yK)([g.A], () => {
            var n;
            let l,
                r = g.A.getVoiceFilters(),
                i = g.A.getSortedVoiceFilters();
            return (
                (n = t ? Object.values(r) : i),
                "" === (l = (0, s.sS)(e.toLowerCase()))
                    ? n
                    : n.filter((e) => {
                          let { name: t } = e,
                              n = (0, s.sS)(A.intl.string(t)).toLowerCase();
                          return a()(l, n);
                      })
            );
        }, [e, t]);
