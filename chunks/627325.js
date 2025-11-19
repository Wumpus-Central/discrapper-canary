n.d(t, { w: () => x });
var r = n(54381),
    i = n(473749),
    o = n(658722),
    l = n.n(o),
    a = n(468194),
    s = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(218867),
    p = n(594174),
    m = n(111361),
    f = n(778033),
    b = n(709706),
    g = n(358820),
    v = n(990525),
    y = n(388032),
    O = n(335189);
let j = [51],
    h = [y.t.OpqAok];
function x(e) {
    let { columns: t, handleScroll: n, voiceListRef: i, showSectionHeaders: o = !1, query: l } = e,
        a = P(),
        x = (0, s.e7)([p.default], () => (0, m.I5)(p.default.getCurrentUser())),
        w = C(l, x),
        E = Math.ceil(w.length / t),
        {
            isNativeModuleLoaded: I,
            isNativeModuleLoading: T,
            catalogLastFetchTime: S,
        } = (0, s.cj)([b.Z], () => ({
            isNativeModuleLoaded: b.Z.isNativeModuleLoaded(),
            isNativeModuleLoading: b.Z.isNativeModuleLoading(),
            catalogLastFetchTime: b.Z.getCatalogLastFetchTime(),
        }));
    return l && 0 === w.length
        ? (0, r.jsxs)("div", {
              className: O.iconMessage,
              children: [
                  (0, r.jsx)(u._Ve, {
                      width: 40,
                      height: 40,
                      size: "custom",
                      color: c.Z.colors.INTERACTIVE_MUTED,
                  }),
                  (0, r.jsx)(u.Heading, {
                      variant: "heading-sm/medium",
                      color: "header-muted",
                      children: y.intl.string(y.t.ZzukHk),
                  }),
              ],
          })
        : a
          ? (0, r.jsxs)("div", {
                className: O.iconMessage,
                children: [
                    (0, r.jsx)(u.aNP, {
                        width: 40,
                        height: 40,
                        size: "custom",
                        color: c.Z.colors.INTERACTIVE_MUTED,
                    }),
                    (0, r.jsx)(u.Heading, {
                        variant: "heading-md/normal",
                        color: "header-muted",
                        children: y.intl.string(y.t.DpZNJw),
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "header-muted",
                        children: y.intl.format(y.t["5afO9U"], { onClick: I ? g.wV : g.r5 }),
                    }),
                ],
            })
          : T || null == S
            ? (0, r.jsx)("div", {
                  className: O.loading,
                  children: (0, r.jsx)(u.$jN, {
                      type: u.$jN.Type.CHASING_DOTS,
                      animated: !0,
                  }),
              })
            : (0, r.jsx)(d.Z, {
                  fade: !0,
                  className: O.container,
                  renderRow: (e) => {
                      let n = e * t,
                          i = w.slice(n, n + t);
                      return (0, r.jsx)(
                          _,
                          {
                              children: i.map((n, i) =>
                                  (0, r.jsx)(
                                      v.J,
                                      {
                                          voiceFilter: n,
                                          hasNitro: x,
                                          analyticsContext: {
                                              reason: f.W.USER_SELECTION,
                                              gridRows: E,
                                              gridColumns: t,
                                              interactedRow: e,
                                              interactedColumn: i,
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
                      !1 === o
                          ? void 0
                          : (e) =>
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-muted",
                                    className: O.header,
                                    children: y.intl.string(h[e]),
                                }),
                  sectionHeaderHeight: !1 === o ? void 0 : (e) => j[e],
                  rowCount: E,
                  rowHeight: 130,
                  onScroll: n,
                  ref: i,
                  sectionFooterHeight: 40 * !x,
              });
}
function _(e) {
    let { children: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)("div", {
        ref: n,
        className: O.row,
        children: (0, r.jsx)(u.JcV, {
            containerRef: n,
            children: t,
        }),
    });
}
let P = () =>
        (0, s.e7)([b.Z], () => {
            var e;
            return (
                !Object.keys(null != (e = b.Z.getVoiceFilterModels()) ? e : {}).length &&
                (b.Z.getCatalogFetchFailed() || b.Z.hasNativeModuleFailed())
            );
        }),
    C = (e, t) =>
        (0, s.Wu)([b.Z], () => {
            let n = b.Z.getVoiceFilters(),
                r = b.Z.getSortedVoiceFilters();
            var i = t ? Object.values(n) : r;
            let o = (0, a._I)(e.toLowerCase());
            return "" === o
                ? i
                : i.filter((e) => {
                      let { name: t } = e,
                          n = (0, a._I)(y.intl.string(t)).toLowerCase();
                      return l()(o, n);
                  });
        }, [e, t]);
