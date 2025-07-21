n.d(t, { w: () => j });
var r = n(255367),
    i = n(73800),
    l = n(658722),
    a = n.n(l),
    o = n(468194),
    s = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(218867),
    f = n(594174),
    p = n(111361),
    m = n(778033),
    g = n(709706),
    _ = n(358820),
    v = n(990525),
    b = n(388032),
    y = n(92609);
let h = [51],
    O = [b.t.OpqAoq];
function j(e) {
    let { columns: t, handleScroll: n, voiceListRef: i, showSectionHeaders: l = !1, query: a } = e,
        o = x(),
        j = (0, s.e7)([f.default], () => (0, p.I5)(f.default.getCurrentUser())),
        I = P(a, j),
        C = Math.ceil(I.length / t),
        {
            isNativeModuleLoaded: w,
            isNativeModuleLoading: E,
            catalogLastFetchTime: T
        } = (0, s.cj)([g.Z], () => ({
            isNativeModuleLoaded: g.Z.isNativeModuleLoaded(),
            isNativeModuleLoading: g.Z.isNativeModuleLoading(),
            catalogLastFetchTime: g.Z.getCatalogLastFetchTime()
        }));
    return a && 0 === I.length
        ? (0, r.jsxs)('div', {
              className: y.iconMessage,
              children: [
                  (0, r.jsx)(u._Ve, {
                      width: 40,
                      height: 40,
                      size: 'custom',
                      color: c.Z.colors.INTERACTIVE_MUTED
                  }),
                  (0, r.jsx)(u.X6q, {
                      variant: 'heading-sm/medium',
                      color: 'header-muted',
                      children: b.intl.string(b.t.ZzukHh)
                  })
              ]
          })
        : o
          ? (0, r.jsxs)('div', {
                className: y.iconMessage,
                children: [
                    (0, r.jsx)(u.aNP, {
                        width: 40,
                        height: 40,
                        size: 'custom',
                        color: c.Z.colors.INTERACTIVE_MUTED
                    }),
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-muted',
                        children: b.intl.string(b.t.DpZNJy)
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-muted',
                        children: b.intl.format(b.t['5afO9f'], { onClick: w ? _.wV : _.r5 })
                    })
                ]
            })
          : E || null == T
            ? (0, r.jsx)('div', {
                  className: y.loading,
                  children: (0, r.jsx)(u.$jN, {
                      type: u.$jN.Type.CHASING_DOTS,
                      animated: !0
                  })
              })
            : (0, r.jsx)(d.Z, {
                  fade: !0,
                  className: y.container,
                  renderRow: (e) => {
                      let n = e * t,
                          i = I.slice(n, n + t);
                      return (0, r.jsx)(
                          S,
                          {
                              children: i.map((n, i) =>
                                  (0, r.jsx)(
                                      v.J,
                                      {
                                          voiceFilter: n,
                                          hasNitro: j,
                                          analyticsContext: {
                                              reason: m.W.USER_SELECTION,
                                              gridRows: C,
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
                      !1 === l
                          ? void 0
                          : (e) =>
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-muted',
                                    className: y.header,
                                    children: b.intl.string(O[e])
                                }),
                  sectionHeaderHeight: !1 === l ? void 0 : (e) => h[e],
                  rowCount: C,
                  rowHeight: 130,
                  onScroll: n,
                  ref: i,
                  sectionFooterHeight: 40 * !j
              });
}
function S(e) {
    let { children: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)('div', {
        ref: n,
        className: y.row,
        children: (0, r.jsx)(u.JcV, {
            containerRef: n,
            children: t
        })
    });
}
let x = () =>
        (0, s.e7)([g.Z], () => {
            var e;
            return !Object.keys(null != (e = g.Z.getVoiceFilterModels()) ? e : {}).length && (g.Z.getCatalogFetchFailed() || g.Z.hasNativeModuleFailed());
        }),
    I = (e, t) => {
        let n = (0, o._I)(t.toLowerCase());
        return '' === n
            ? e
            : e.filter((e) => {
                  let { name: t } = e,
                      r = (0, o._I)(b.intl.string(t)).toLowerCase();
                  return a()(n, r);
              });
    },
    P = (e, t) =>
        (0, s.Wu)(
            [g.Z],
            () => {
                let n = g.Z.getVoiceFilters(),
                    r = g.Z.getSortedVoiceFilters();
                return I(t ? Object.values(n) : r, e);
            },
            [e, t]
        );
