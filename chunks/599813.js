n.d(t, { c: () => S });
var i = n(627968),
    l = n(64700),
    s = n(91871),
    a = n.n(s),
    r = n(23339),
    o = n(311907),
    c = n(827734),
    d = n(397927),
    u = n(962125),
    h = n(287809),
    m = n(474090),
    A = n(656088),
    g = n(971778),
    p = n(342887),
    f = n(973947),
    _ = n(985018),
    E = n(361499);
let x = [51],
    C = [_.t.OpqAok];
function S(e) {
    let { columns: t, handleScroll: n, voiceListRef: l, showSectionHeaders: s = !1, query: a } = e,
        r = T(),
        S = (0, o.bG)([h.default], () => (0, m.ki)(h.default.getCurrentUser())),
        b = N(a, S),
        y = Math.ceil(b.length / t),
        {
            isNativeModuleLoaded: v,
            isNativeModuleLoading: j,
            catalogLastFetchTime: R,
        } = (0, o.cf)([g.A], () => ({
            isNativeModuleLoaded: g.A.isNativeModuleLoaded(),
            isNativeModuleLoading: g.A.isNativeModuleLoading(),
            catalogLastFetchTime: g.A.getCatalogLastFetchTime(),
        }));
    return a && 0 === b.length
        ? (0, i.jsxs)("div", {
              className: E.nm,
              children: [
                  (0, i.jsx)(d.$p$, { width: 40, height: 40, size: "custom", color: c.A.colors.ICON_MUTED }),
                  (0, i.jsx)(d.Heading, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      children: _.intl.string(_.t.ZzukHk),
                  }),
              ],
          })
        : r
          ? (0, i.jsxs)("div", {
                className: E.nm,
                children: [
                    (0, i.jsx)(d.id, { width: 40, height: 40, size: "custom", color: c.A.colors.ICON_MUTED }),
                    (0, i.jsx)(d.Heading, {
                        variant: "heading-md/normal",
                        color: "text-muted",
                        children: _.intl.string(_.t.DpZNJw),
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: _.intl.format(_.t["5afO9U"], { onClick: v ? p.st : p.md }),
                    }),
                ],
            })
          : j || null == R
            ? (0, i.jsx)("div", {
                  className: E.Lq,
                  children: (0, i.jsx)(d.y$y, { type: d.y$y.Type.CHASING_DOTS, animated: !0 }),
              })
            : (0, i.jsx)(u.A, {
                  fade: !0,
                  className: E.kL,
                  renderRow: (e) => {
                      let n = e * t,
                          l = b.slice(n, n + t);
                      return (0, i.jsx)(
                          I,
                          {
                              children: l.map((n, l) =>
                                  (0, i.jsx)(
                                      f.I,
                                      {
                                          voiceFilter: n,
                                          hasNitro: S,
                                          analyticsContext: {
                                              reason: A.O.USER_SELECTION,
                                              gridRows: y,
                                              gridColumns: t,
                                              interactedRow: e,
                                              interactedColumn: l,
                                          },
                                      },
                                      n?.id,
                                  ),
                              ),
                          },
                          e,
                      );
                  },
                  renderSectionHeader:
                      !1 === s
                          ? void 0
                          : (e) =>
                                (0, i.jsx)(d.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    className: E.wx,
                                    children: _.intl.string(C[e]),
                                }),
                  sectionHeaderHeight: !1 === s ? void 0 : (e) => x[e],
                  rowCount: y,
                  rowHeight: 130,
                  onScroll: n,
                  ref: l,
                  sectionFooterHeight: 40 * !S,
              });
}
function I(e) {
    let { children: t } = e,
        n = l.useRef(null);
    return (0, i.jsx)("div", {
        ref: n,
        className: E.nM,
        children: (0, i.jsx)(d.xpW, { containerRef: n, children: t }),
    });
}
let T = () =>
        (0, o.bG)(
            [g.A],
            () =>
                !Object.keys(g.A.getVoiceFilterModels() ?? {}).length &&
                (g.A.getCatalogFetchFailed() || g.A.hasNativeModuleFailed()),
        ),
    N = (e, t) =>
        (0, o.yK)([g.A], () => {
            var n;
            let i,
                l = g.A.getVoiceFilters(),
                s = g.A.getSortedVoiceFilters();
            return (
                (n = t ? Object.values(l) : s),
                "" === (i = (0, r.sS)(e.toLowerCase()))
                    ? n
                    : n.filter((e) => {
                          let { name: t } = e,
                              n = (0, r.sS)(_.intl.string(t)).toLowerCase();
                          return a()(i, n);
                      })
            );
        }, [e, t]);
