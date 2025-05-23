n.d(t, { w: () => I });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    l = n(658722),
    s = n.n(l),
    c = n(468194),
    d = n(442837),
    u = n(692547),
    _ = n(481060),
    m = n(218867),
    f = n(594174),
    p = n(111361),
    g = n(778033),
    h = n(709706),
    v = n(358820),
    b = n(990525),
    y = n(388032),
    j = n(363743);
let C = [51],
    x = [y.t.OpqAoq];
function I(e) {
    let { columns: t, handleScroll: n, voiceListRef: i, showSectionHeaders: a = !1, query: l } = e,
        s = E(),
        c = (0, d.e7)([f.default], () => (0, p.I5)(f.default.getCurrentUser())),
        I = S(l, c),
        N = Math.ceil(I.length / t),
        {
            isNativeModuleLoaded: P,
            isNativeModuleLoading: w,
            catalogLastFetchTime: T
        } = (0, d.cj)([h.Z], () => ({
            isNativeModuleLoaded: h.Z.isNativeModuleLoaded(),
            isNativeModuleLoading: h.Z.isNativeModuleLoading(),
            catalogLastFetchTime: h.Z.getCatalogLastFetchTime()
        }));
    return l && 0 === I.length
        ? (0, r.jsxs)('div', {
              className: j.iconMessage,
              children: [
                  (0, r.jsx)(_._Ve, {
                      width: 40,
                      height: 40,
                      size: 'custom',
                      color: u.Z.colors.INTERACTIVE_MUTED
                  }),
                  (0, r.jsx)(_.X6q, {
                      variant: 'heading-sm/medium',
                      color: 'header-muted',
                      children: y.intl.string(y.t.ZzukHh)
                  })
              ]
          })
        : s
          ? (0, r.jsxs)('div', {
                className: j.iconMessage,
                children: [
                    (0, r.jsx)(_.aNP, {
                        width: 40,
                        height: 40,
                        size: 'custom',
                        color: u.Z.colors.INTERACTIVE_MUTED
                    }),
                    (0, r.jsx)(_.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-muted',
                        children: y.intl.string(y.t.DpZNJy)
                    }),
                    (0, r.jsx)(_.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-muted',
                        children: y.intl.format(y.t['5afO9f'], { onClick: P ? v.wV : v.r5 })
                    })
                ]
            })
          : w || null == T
            ? (0, r.jsx)('div', {
                  className: j.loading,
                  children: (0, r.jsx)(_.$jN, {
                      type: _.$jN.Type.CHASING_DOTS,
                      animated: !0
                  })
              })
            : (0, r.jsx)(m.Z, {
                  fade: !0,
                  className: o()(j.container, { [j.hasHeaders]: a }),
                  renderRow: (e) => {
                      let n = e * t,
                          i = I.slice(n, n + t);
                      return (0, r.jsx)(
                          O,
                          {
                              children: i.map((n, i) =>
                                  (0, r.jsx)(
                                      b.J,
                                      {
                                          voiceFilter: n,
                                          hasNitro: c,
                                          analyticsContext: {
                                              reason: g.W.USER_SELECTION,
                                              gridRows: N,
                                              gridColumns: t,
                                              interactedRow: e,
                                              interactedColumn: i
                                          }
                                      },
                                      null == n ? void 0 : n.id
                                  )
                              )
                          },
                          e
                      );
                  },
                  renderSectionHeader:
                      !1 === a
                          ? void 0
                          : (e) =>
                                (0, r.jsx)(_.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-muted',
                                    className: j.header,
                                    children: y.intl.string(x[e])
                                }),
                  sectionHeaderHeight: !1 === a ? void 0 : (e) => C[e],
                  rowCount: N,
                  rowHeight: 130,
                  onScroll: n,
                  ref: i,
                  sectionFooterHeight: 40 * !c
              });
}
function O(e) {
    let { children: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)('div', {
        ref: n,
        className: j.row,
        children: (0, r.jsx)(_.JcV, {
            containerRef: n,
            children: t
        })
    });
}
let E = () =>
        (0, d.e7)([h.Z], () => {
            var e;
            return !Object.keys(null != (e = h.Z.getVoiceFilterModels()) ? e : {}).length && (h.Z.getCatalogFetchFailed() || h.Z.hasNativeModuleFailed());
        }),
    N = (e, t) => {
        let n = (0, c._I)(t.toLowerCase());
        return '' === n
            ? e
            : e.filter((e) => {
                  let { name: t } = e,
                      r = (0, c._I)(y.intl.string(t)).toLowerCase();
                  return s()(n, r);
              });
    },
    S = (e, t) =>
        (0, d.Wu)(
            [h.Z],
            () => {
                let n = h.Z.getVoiceFilters(),
                    r = h.Z.getSortedVoiceFilters();
                return N(t ? Object.values(n) : r, e);
            },
            [e, t]
        );
