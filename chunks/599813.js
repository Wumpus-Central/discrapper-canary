n.d(t, { c: () => S });
var i = n(627968),
    l = n(64700),
    a = n(91871),
    s = n.n(a),
    r = n(23339),
    o = n(311907),
    c = n(827734),
    d = n(397927),
    u = n(962125),
    h = n(287809),
    m = n(474090),
    A = n(656088),
    p = n(971778),
    g = n(342887),
    f = n(973947),
    _ = n(985018),
    E = n(32425);
let C = [51],
    x = [_.t.OpqAok];
function S(e) {
    let { columns: t, handleScroll: n, voiceListRef: l, showSectionHeaders: a = !1, query: s } = e,
        r = I(),
        S = (0, o.bG)([h.default], () => (0, m.ki)(h.default.getCurrentUser())),
        v = N(s, S),
        y = Math.ceil(v.length / t),
        {
            isNativeModuleLoaded: b,
            isNativeModuleLoading: R,
            catalogLastFetchTime: j,
        } = (0, o.cf)([p.A], () => ({
            isNativeModuleLoaded: p.A.isNativeModuleLoaded(),
            isNativeModuleLoading: p.A.isNativeModuleLoading(),
            catalogLastFetchTime: p.A.getCatalogLastFetchTime(),
        }));
    return s && 0 === v.length
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
                        children: _.intl.format(_.t["5afO9U"], { onClick: b ? g.st : g.md }),
                    }),
                ],
            })
          : R || null == j
            ? (0, i.jsx)("div", {
                  className: E.Lq,
                  children: (0, i.jsx)(d.y$y, { type: d.y$y.Type.CHASING_DOTS, animated: !0 }),
              })
            : (0, i.jsx)(u.A, {
                  fade: !0,
                  className: E.kL,
                  renderRow: (e) => {
                      let n = e * t,
                          l = v.slice(n, n + t);
                      return (0, i.jsx)(
                          T,
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
                      !1 === a
                          ? void 0
                          : (e) =>
                                (0, i.jsx)(d.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    className: E.wx,
                                    children: _.intl.string(x[e]),
                                }),
                  sectionHeaderHeight: !1 === a ? void 0 : (e) => C[e],
                  rowCount: y,
                  rowHeight: 130,
                  onScroll: n,
                  ref: l,
                  sectionFooterHeight: 40 * !S,
              });
}
function T(e) {
    let { children: t } = e,
        n = l.useRef(null);
    return (0, i.jsx)("div", {
        ref: n,
        className: E.nM,
        children: (0, i.jsx)(d.xpW, { containerRef: n, children: t }),
    });
}
let I = () =>
        (0, o.bG)(
            [p.A],
            () =>
                !Object.keys(p.A.getVoiceFilterModels() ?? {}).length &&
                (p.A.getCatalogFetchFailed() || p.A.hasNativeModuleFailed()),
        ),
    N = (e, t) =>
        (0, o.yK)([p.A], () => {
            var n;
            let i,
                l = p.A.getVoiceFilters(),
                a = p.A.getSortedVoiceFilters();
            return (
                (n = t ? Object.values(l) : a),
                "" === (i = (0, r.sS)(e.toLowerCase()))
                    ? n
                    : n.filter((e) => {
                          let { name: t } = e,
                              n = (0, r.sS)(_.intl.string(t)).toLowerCase();
                          return s()(i, n);
                      })
            );
        }, [e, t]);
