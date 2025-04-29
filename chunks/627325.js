n.d(t, { w: () => C });
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
    g = n(709706),
    h = n(358820),
    v = n(990525),
    b = n(388032),
    y = n(92609);
let x = [51],
    j = [b.t.OpqAoq];
function C(e) {
    let { columns: t, handleScroll: n, voiceListRef: i, showSectionHeaders: a = !1, query: l } = e,
        s = O(),
        c = (0, d.e7)([f.default], () => (0, p.I5)(f.default.getCurrentUser())),
        C = N(l, c),
        E = Math.ceil(C.length / t),
        {
            isNativeModuleLoaded: P,
            isNativeModuleLoading: S,
            catalogLastFetchTime: w
        } = (0, d.cj)([g.Z], () => ({
            isNativeModuleLoaded: g.Z.isNativeModuleLoaded(),
            isNativeModuleLoading: g.Z.isNativeModuleLoading(),
            catalogLastFetchTime: g.Z.getCatalogLastFetchTime()
        }));
    return l && 0 === C.length
        ? (0, r.jsxs)('div', {
              className: y.iconMessage,
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
                      children: b.intl.string(b.t.ZzukHh)
                  })
              ]
          })
        : s
          ? (0, r.jsxs)('div', {
                className: y.iconMessage,
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
                        children: b.intl.string(b.t.DpZNJy)
                    }),
                    (0, r.jsx)(_.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-muted',
                        children: b.intl.format(b.t['5afO9f'], { onClick: P ? h.wV : h.r5 })
                    })
                ]
            })
          : S || null == w
            ? (0, r.jsx)('div', {
                  className: y.loading,
                  children: (0, r.jsx)(_.$jN, {
                      type: _.$jN.Type.CHASING_DOTS,
                      animated: !0
                  })
              })
            : (0, r.jsx)(m.Z, {
                  fade: !0,
                  className: o()(y.container, { [y.hasHeaders]: a }),
                  renderRow: (e) => {
                      let n = e * t,
                          i = C.slice(n, n + t);
                      return (0, r.jsx)(
                          I,
                          {
                              children: i.map((n, i) =>
                                  (0, r.jsx)(
                                      v.J,
                                      {
                                          voiceFilter: n,
                                          hasNitro: c,
                                          analyticsContext: {
                                              gridRows: E,
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
                                    className: y.header,
                                    children: b.intl.string(j[e])
                                }),
                  sectionHeaderHeight: !1 === a ? void 0 : (e) => x[e],
                  rowCount: E,
                  rowHeight: 130,
                  onScroll: n,
                  ref: i,
                  sectionFooterHeight: 40 * !c
              });
}
function I(e) {
    let { children: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)('div', {
        ref: n,
        className: y.row,
        children: (0, r.jsx)(_.JcV, {
            containerRef: n,
            children: t
        })
    });
}
let O = () =>
        (0, d.e7)([g.Z], () => {
            var e;
            return !Object.keys(null != (e = g.Z.getVoiceFilterModels()) ? e : {}).length && (g.Z.getCatalogFetchFailed() || g.Z.hasNativeModuleFailed());
        }),
    E = (e, t) => {
        let n = (0, c._I)(t.toLowerCase());
        return '' === n
            ? e
            : e.filter((e) => {
                  let { name: t } = e,
                      r = (0, c._I)(b.intl.string(t)).toLowerCase();
                  return s()(n, r);
              });
    },
    N = (e, t) =>
        (0, d.Wu)(
            [g.Z],
            () => {
                let n = g.Z.getVoiceFilters(),
                    r = g.Z.getSortedVoiceFilters();
                return E(t ? Object.values(n) : r, e);
            },
            [e, t]
        );
