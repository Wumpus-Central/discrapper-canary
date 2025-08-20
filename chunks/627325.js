n.d(t, { w: () => I });
var r = n(951288),
    i = n(647438),
    a = n(658722),
    o = n.n(a),
    s = n(468194),
    l = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(218867),
    f = n(594174),
    _ = n(111361),
    p = n(778033),
    h = n(709706),
    m = n(358820),
    g = n(990525),
    E = n(388032),
    b = n(335189);
let y = 130,
    O = [51],
    v = [E.t.OpqAoq];
function I(e) {
    let { columns: t, handleScroll: n, voiceListRef: i, showSectionHeaders: a = !1, query: o } = e,
        s = S(),
        I = (0, l.e7)([f.default], () => (0, _.I5)(f.default.getCurrentUser())),
        A = C(o, I),
        N = Math.ceil(A.length / t),
        {
            isNativeModuleLoaded: R,
            isNativeModuleLoading: P,
            catalogLastFetchTime: w,
        } = (0, l.cj)([h.Z], () => ({
            isNativeModuleLoaded: h.Z.isNativeModuleLoaded(),
            isNativeModuleLoading: h.Z.isNativeModuleLoading(),
            catalogLastFetchTime: h.Z.getCatalogLastFetchTime(),
        }));
    return o && 0 === A.length
        ? (0, r.jsxs)("div", {
              className: b.iconMessage,
              children: [
                  (0, r.jsx)(u._Ve, {
                      width: 40,
                      height: 40,
                      size: "custom",
                      color: c.Z.colors.INTERACTIVE_MUTED,
                  }),
                  (0, r.jsx)(u.X6q, {
                      variant: "heading-sm/medium",
                      color: "header-muted",
                      children: E.intl.string(E.t.ZzukHh),
                  }),
              ],
          })
        : s
          ? (0, r.jsxs)("div", {
                className: b.iconMessage,
                children: [
                    (0, r.jsx)(u.aNP, {
                        width: 40,
                        height: 40,
                        size: "custom",
                        color: c.Z.colors.INTERACTIVE_MUTED,
                    }),
                    (0, r.jsx)(u.X6q, {
                        variant: "heading-md/normal",
                        color: "header-muted",
                        children: E.intl.string(E.t.DpZNJy),
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "header-muted",
                        children: E.intl.format(E.t["5afO9f"], { onClick: R ? m.wV : m.r5 }),
                    }),
                ],
            })
          : P || null == w
            ? (0, r.jsx)("div", {
                  className: b.loading,
                  children: (0, r.jsx)(u.$jN, {
                      type: u.$jN.Type.CHASING_DOTS,
                      animated: !0,
                  }),
              })
            : (0, r.jsx)(d.Z, {
                  fade: !0,
                  className: b.container,
                  renderRow: (e) => {
                      let n = e * t,
                          i = A.slice(n, n + t);
                      return (0, r.jsx)(
                          T,
                          {
                              children: i.map((n, i) =>
                                  (0, r.jsx)(
                                      g.J,
                                      {
                                          voiceFilter: n,
                                          hasNitro: I,
                                          analyticsContext: {
                                              reason: p.W.USER_SELECTION,
                                              gridRows: N,
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
                      !1 === a
                          ? void 0
                          : (e) =>
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-muted",
                                    className: b.header,
                                    children: E.intl.string(v[e]),
                                }),
                  sectionHeaderHeight: !1 === a ? void 0 : (e) => O[e],
                  rowCount: N,
                  rowHeight: y,
                  onScroll: n,
                  ref: i,
                  sectionFooterHeight: 40 * !I,
              });
}
function T(e) {
    let { children: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)("div", {
        ref: n,
        className: b.row,
        children: (0, r.jsx)(u.JcV, {
            containerRef: n,
            children: t,
        }),
    });
}
let S = () =>
        (0, l.e7)([h.Z], () => {
            var e;
            return (
                !Object.keys(null != (e = h.Z.getVoiceFilterModels()) ? e : {}).length &&
                (h.Z.getCatalogFetchFailed() || h.Z.hasNativeModuleFailed())
            );
        }),
    A = (e, t) => {
        let n = (0, s._I)(t.toLowerCase());
        return "" === n
            ? e
            : e.filter((e) => {
                  let { name: t } = e,
                      r = (0, s._I)(E.intl.string(t)).toLowerCase();
                  return o()(n, r);
              });
    },
    C = (e, t) =>
        (0, l.Wu)([h.Z], () => {
            let n = h.Z.getVoiceFilters(),
                r = h.Z.getSortedVoiceFilters();
            return A(t ? Object.values(n) : r, e);
        }, [e, t]);
