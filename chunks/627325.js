n.d(t, { w: () => x });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(658722),
    s = n.n(o),
    c = n(468194),
    u = n(442837),
    d = n(692547),
    f = n(481060),
    p = n(218867),
    m = n(594174),
    g = n(111361),
    _ = n(778033),
    b = n(709706),
    h = n(358820),
    v = n(990525),
    y = n(388032),
    O = n(92609);
let j = [51],
    S = [y.t.OpqAoq];
function x(e) {
    let { columns: t, handleScroll: n, voiceListRef: i, showSectionHeaders: l = !1, query: o } = e,
        s = P(),
        c = (0, u.e7)([m.default], () => (0, g.I5)(m.default.getCurrentUser())),
        x = E(o, c),
        C = Math.ceil(x.length / t),
        {
            isNativeModuleLoaded: w,
            isNativeModuleLoading: T,
            catalogLastFetchTime: N
        } = (0, u.cj)([b.Z], () => ({
            isNativeModuleLoaded: b.Z.isNativeModuleLoaded(),
            isNativeModuleLoading: b.Z.isNativeModuleLoading(),
            catalogLastFetchTime: b.Z.getCatalogLastFetchTime()
        }));
    return o && 0 === x.length
        ? (0, r.jsxs)('div', {
              className: O.iconMessage,
              children: [
                  (0, r.jsx)(f._Ve, {
                      width: 40,
                      height: 40,
                      size: 'custom',
                      color: d.Z.colors.INTERACTIVE_MUTED
                  }),
                  (0, r.jsx)(f.X6q, {
                      variant: 'heading-sm/medium',
                      color: 'header-muted',
                      children: y.intl.string(y.t.ZzukHh)
                  })
              ]
          })
        : s
          ? (0, r.jsxs)('div', {
                className: O.iconMessage,
                children: [
                    (0, r.jsx)(f.aNP, {
                        width: 40,
                        height: 40,
                        size: 'custom',
                        color: d.Z.colors.INTERACTIVE_MUTED
                    }),
                    (0, r.jsx)(f.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-muted',
                        children: y.intl.string(y.t.DpZNJy)
                    }),
                    (0, r.jsx)(f.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-muted',
                        children: y.intl.format(y.t['5afO9f'], { onClick: w ? h.wV : h.r5 })
                    })
                ]
            })
          : T || null == N
            ? (0, r.jsx)('div', {
                  className: O.loading,
                  children: (0, r.jsx)(f.$jN, {
                      type: f.$jN.Type.CHASING_DOTS,
                      animated: !0
                  })
              })
            : (0, r.jsx)(p.Z, {
                  fade: !0,
                  className: a()(O.container, { [O.hasHeaders]: l }),
                  renderRow: (e) => {
                      let n = e * t,
                          i = x.slice(n, n + t);
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
                                              reason: _.W.USER_SELECTION,
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
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-muted',
                                    className: O.header,
                                    children: y.intl.string(S[e])
                                }),
                  sectionHeaderHeight: !1 === l ? void 0 : (e) => j[e],
                  rowCount: C,
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
        className: O.row,
        children: (0, r.jsx)(f.JcV, {
            containerRef: n,
            children: t
        })
    });
}
let P = () =>
        (0, u.e7)([b.Z], () => {
            var e;
            return !Object.keys(null != (e = b.Z.getVoiceFilterModels()) ? e : {}).length && (b.Z.getCatalogFetchFailed() || b.Z.hasNativeModuleFailed());
        }),
    C = (e, t) => {
        let n = (0, c._I)(t.toLowerCase());
        return '' === n
            ? e
            : e.filter((e) => {
                  let { name: t } = e,
                      r = (0, c._I)(y.intl.string(t)).toLowerCase();
                  return s()(n, r);
              });
    },
    E = (e, t) =>
        (0, u.Wu)(
            [b.Z],
            () => {
                let n = b.Z.getVoiceFilters(),
                    r = b.Z.getSortedVoiceFilters();
                return C(t ? Object.values(n) : r, e);
            },
            [e, t]
        );
