n.d(t, { w: () => Z });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(658722),
    o = n.n(s),
    c = n(392711),
    d = n(468194),
    u = n(442837),
    h = n(481060),
    p = n(218867),
    m = n(594174),
    f = n(823379),
    g = n(111361),
    _ = n(709706),
    C = n(56848),
    x = n(990525),
    v = n(388032),
    E = n(861368);
let I = [51],
    b = [v.t.OpqAoq];
function Z(e) {
    let { columns: t, handleScroll: n, voiceListRef: a, showSectionHeaders: s = !1, query: Z } = e,
        N = (0, C.S)(),
        T = (0, u.e7)([m.default], () => (0, g.I5)(m.default.getCurrentUser())),
        { voicesById: S, isNativeModuleLoading: j } = (0, u.cj)([_.Z], () => ({
            voicesById: _.Z.getVoiceFilters(),
            isNativeModuleLoading: _.Z.isNativeModuleLoading()
        })),
        y = (0, u.cj)([_.Z], () => _.Z.getSortedVoiceFilters()),
        A = T ? Object.values(S) : y,
        P = l.useMemo(() => {
            let e = (0, d._I)(Z.toLowerCase());
            return [
                '' === e
                    ? A
                    : A.filter((t) => {
                          let { id: n } = t;
                          return o()(e, (0, d._I)(N[n].name.toLowerCase()));
                      })
            ];
        }, [A, Z, N]),
        R = (e) => Math.ceil(e / t),
        M = l.useCallback(
            (e) => {
                let { sectionIndex: n, sectionRowIndex: l } = e;
                return (0, i.jsx)(
                    'div',
                    {
                        className: E.row,
                        children: (0, c.range)(0, t)
                            .map((e) => P[n][l * t + e])
                            .filter(f.lm)
                            .map((e) =>
                                (0, i.jsx)(
                                    x.J,
                                    {
                                        voiceFilter: e,
                                        hasNitro: T
                                    },
                                    null == e ? void 0 : e.id
                                )
                            )
                    },
                    l
                );
            },
            [t, P, T]
        );
    return j
        ? (0, i.jsx)('div', {
              className: r()(E.loading),
              children: (0, i.jsx)(h.$jN, {
                  type: h.$jN.Type.CHASING_DOTS,
                  animated: !0
              })
          })
        : (0, i.jsx)(p.Z, {
              fade: !0,
              className: r()(E.container, { [E.hasHeaders]: s }),
              renderRow: (e, t) => M(t),
              renderSectionHeader:
                  !1 === s
                      ? void 0
                      : (e) =>
                            (0, i.jsx)(h.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-muted',
                                className: E.header,
                                children: v.intl.string(b[e])
                            }),
              sectionHeaderHeight: !1 === s ? void 0 : (e) => I[e],
              rowCountBySection: P.map((e) => R(e.length)),
              rowCount: R((0, c.sumBy)(P, (e) => e.length)),
              rowHeight: 130,
              onScroll: n,
              ref: a,
              sectionFooterHeight: T ? 0 : 40
          });
}
