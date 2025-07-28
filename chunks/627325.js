n.d(t, { w: () => S });
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
    h = n(358820),
    b = n(990525),
    _ = n(388032),
    v = n(92609);
let y = [51],
    O = [_.t.OpqAoq];
function S(e) {
    let { columns: t, handleScroll: n, voiceListRef: i, showSectionHeaders: l = !1, query: a } = e,
        o = j(),
        S = (0, s.e7)([f.default], () => (0, p.I5)(f.default.getCurrentUser())),
        x = E(a, S),
        P = Math.ceil(x.length / t),
        {
            isNativeModuleLoaded: C,
            isNativeModuleLoading: T,
            catalogLastFetchTime: N
        } = (0, s.cj)([g.Z], () => ({
            isNativeModuleLoaded: g.Z.isNativeModuleLoaded(),
            isNativeModuleLoading: g.Z.isNativeModuleLoading(),
            catalogLastFetchTime: g.Z.getCatalogLastFetchTime()
        }));
    return a && 0 === x.length
        ? (0, r.jsxs)('div', {
              className: v.iconMessage,
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
                      children: _.intl.string(_.t.ZzukHh)
                  })
              ]
          })
        : o
          ? (0, r.jsxs)('div', {
                className: v.iconMessage,
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
                        children: _.intl.string(_.t.DpZNJy)
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-muted',
                        children: _.intl.format(_.t['5afO9f'], { onClick: C ? h.wV : h.r5 })
                    })
                ]
            })
          : T || null == N
            ? (0, r.jsx)('div', {
                  className: v.loading,
                  children: (0, r.jsx)(u.$jN, {
                      type: u.$jN.Type.CHASING_DOTS,
                      animated: !0
                  })
              })
            : (0, r.jsx)(d.Z, {
                  fade: !0,
                  className: v.container,
                  renderRow: (e) => {
                      let n = e * t,
                          i = x.slice(n, n + t);
                      return (0, r.jsx)(
                          I,
                          {
                              children: i.map((n, i) =>
                                  (0, r.jsx)(
                                      b.J,
                                      {
                                          voiceFilter: n,
                                          hasNitro: S,
                                          analyticsContext: {
                                              reason: m.W.USER_SELECTION,
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
                      !1 === l
                          ? void 0
                          : (e) =>
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-muted',
                                    className: v.header,
                                    children: _.intl.string(O[e])
                                }),
                  sectionHeaderHeight: !1 === l ? void 0 : (e) => y[e],
                  rowCount: P,
                  rowHeight: 130,
                  onScroll: n,
                  ref: i,
                  sectionFooterHeight: 40 * !S
              });
}
function I(e) {
    let { children: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)('div', {
        ref: n,
        className: v.row,
        children: (0, r.jsx)(u.JcV, {
            containerRef: n,
            children: t
        })
    });
}
let j = () =>
        (0, s.e7)([g.Z], () => {
            var e;
            return !Object.keys(null != (e = g.Z.getVoiceFilterModels()) ? e : {}).length && (g.Z.getCatalogFetchFailed() || g.Z.hasNativeModuleFailed());
        }),
    x = (e, t) => {
        let n = (0, o._I)(t.toLowerCase());
        return '' === n
            ? e
            : e.filter((e) => {
                  let { name: t } = e,
                      r = (0, o._I)(_.intl.string(t)).toLowerCase();
                  return a()(n, r);
              });
    },
    E = (e, t) =>
        (0, s.Wu)(
            [g.Z],
            () => {
                let n = g.Z.getVoiceFilters(),
                    r = g.Z.getSortedVoiceFilters();
                return x(t ? Object.values(n) : r, e);
            },
            [e, t]
        );
