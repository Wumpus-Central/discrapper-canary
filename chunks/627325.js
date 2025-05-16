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
    v = n(709706),
    h = n(358820),
    b = n(990525),
    y = n(388032),
    x = n(92609);
let j = [51],
    C = [y.t.OpqAoq];
function I(e) {
    let { columns: t, handleScroll: n, voiceListRef: i, showSectionHeaders: a = !1, query: l } = e,
        s = E(),
        c = (0, d.e7)([f.default], () => (0, p.I5)(f.default.getCurrentUser())),
        I = N(l, c),
        P = Math.ceil(I.length / t),
        {
            isNativeModuleLoaded: S,
            isNativeModuleLoading: w,
            catalogLastFetchTime: T
        } = (0, d.cj)([v.Z], () => ({
            isNativeModuleLoaded: v.Z.isNativeModuleLoaded(),
            isNativeModuleLoading: v.Z.isNativeModuleLoading(),
            catalogLastFetchTime: v.Z.getCatalogLastFetchTime()
        }));
    return l && 0 === I.length
        ? (0, r.jsxs)('div', {
              className: x.iconMessage,
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
                className: x.iconMessage,
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
                        children: y.intl.format(y.t['5afO9f'], { onClick: S ? h.wV : h.r5 })
                    })
                ]
            })
          : w || null == T
            ? (0, r.jsx)('div', {
                  className: x.loading,
                  children: (0, r.jsx)(_.$jN, {
                      type: _.$jN.Type.CHASING_DOTS,
                      animated: !0
                  })
              })
            : (0, r.jsx)(m.Z, {
                  fade: !0,
                  className: o()(x.container, { [x.hasHeaders]: a }),
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
                                              gridRows: P,
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
                                    className: x.header,
                                    children: y.intl.string(C[e])
                                }),
                  sectionHeaderHeight: !1 === a ? void 0 : (e) => j[e],
                  rowCount: P,
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
        className: x.row,
        children: (0, r.jsx)(_.JcV, {
            containerRef: n,
            children: t
        })
    });
}
let E = () =>
        (0, d.e7)([v.Z], () => {
            var e;
            return !Object.keys(null != (e = v.Z.getVoiceFilterModels()) ? e : {}).length && (v.Z.getCatalogFetchFailed() || v.Z.hasNativeModuleFailed());
        }),
    P = (e, t) => {
        let n = (0, c._I)(t.toLowerCase());
        return '' === n
            ? e
            : e.filter((e) => {
                  let { name: t } = e,
                      r = (0, c._I)(y.intl.string(t)).toLowerCase();
                  return s()(n, r);
              });
    },
    N = (e, t) =>
        (0, d.Wu)(
            [v.Z],
            () => {
                let n = v.Z.getVoiceFilters(),
                    r = v.Z.getSortedVoiceFilters();
                return P(t ? Object.values(n) : r, e);
            },
            [e, t]
        );
