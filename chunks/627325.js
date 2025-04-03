n.d(t, { w: () => N });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(658722),
    s = n.n(l),
    c = n(468194),
    d = n(442837),
    u = n(692547),
    _ = n(670900),
    m = n(495056),
    f = n(481060),
    p = n(218867),
    g = n(594174),
    h = n(111361),
    v = n(709706),
    b = n(358820),
    y = n(990525),
    x = n(388032),
    j = n(92609);
let C = [51],
    I = [x.t.OpqAoq];
function N(e) {
    let { columns: t, handleScroll: n, voiceListRef: i, showSectionHeaders: a = !1, query: l } = e,
        s = E(),
        c = (0, d.e7)([g.default], () => (0, h.I5)(g.default.getCurrentUser())),
        N = S(l, c),
        P = Math.ceil(N.length / t),
        {
            isNativeModuleLoaded: w,
            isNativeModuleLoading: T,
            catalogLastFetchTime: L
        } = (0, d.cj)([v.Z], () => ({
            isNativeModuleLoaded: v.Z.isNativeModuleLoaded(),
            isNativeModuleLoading: v.Z.isNativeModuleLoading(),
            catalogLastFetchTime: v.Z.getCatalogLastFetchTime()
        }));
    return l && 0 === N.length
        ? (0, r.jsxs)('div', {
              className: j.iconMessage,
              children: [
                  (0, r.jsx)(_._, {
                      width: 40,
                      height: 40,
                      size: 'custom',
                      color: u.Z.colors.INTERACTIVE_MUTED
                  }),
                  (0, r.jsx)(f.X6q, {
                      variant: 'heading-sm/medium',
                      color: 'header-muted',
                      children: x.NW.string(x.t.ZzukHh)
                  })
              ]
          })
        : s
          ? (0, r.jsxs)('div', {
                className: j.iconMessage,
                children: [
                    (0, r.jsx)(m.a, {
                        width: 40,
                        height: 40,
                        size: 'custom',
                        color: u.Z.colors.INTERACTIVE_MUTED
                    }),
                    (0, r.jsx)(f.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-muted',
                        children: x.NW.string(x.t.DpZNJy)
                    }),
                    (0, r.jsx)(f.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-muted',
                        children: x.NW.format(x.t['5afO9f'], { onClick: w ? b.wV : b.r5 })
                    })
                ]
            })
          : T || null == L
            ? (0, r.jsx)('div', {
                  className: j.loading,
                  children: (0, r.jsx)(f.$jN, {
                      type: f.$jN.Type.CHASING_DOTS,
                      animated: !0
                  })
              })
            : (0, r.jsx)(p.Z, {
                  fade: !0,
                  className: o()(j.container, { [j.hasHeaders]: a }),
                  renderRow: (e) => {
                      let n = e * t,
                          i = N.slice(n, n + t);
                      return (0, r.jsx)(
                          O,
                          {
                              children: i.map((n, i) =>
                                  (0, r.jsx)(
                                      y.J,
                                      {
                                          voiceFilter: n,
                                          hasNitro: c,
                                          analyticsContext: {
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
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-muted',
                                    className: j.header,
                                    children: x.NW.string(I[e])
                                }),
                  sectionHeaderHeight: !1 === a ? void 0 : (e) => C[e],
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
        className: j.row,
        children: (0, r.jsx)(f.JcV, {
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
                      r = (0, c._I)(x.NW.string(t)).toLowerCase();
                  return s()(n, r);
              });
    },
    S = (e, t) =>
        (0, d.Wu)(
            [v.Z],
            () => {
                let n = v.Z.getVoiceFilters(),
                    r = v.Z.getSortedVoiceFilters();
                return P(t ? Object.values(n) : r, e);
            },
            [e, t]
        );
