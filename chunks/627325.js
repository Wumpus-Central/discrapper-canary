n.d(t, { w: () => T });
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
    x = n(358820),
    v = n(990525),
    E = n(388032),
    I = n(528305);
let b = [51],
    Z = [E.t.OpqAoq],
    N = () =>
        (0, i.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '40',
            height: '40',
            fill: 'none',
            'aria-hidden': 'true',
            children: [
                (0, i.jsx)('path', {
                    fill: 'currentColor',
                    'fill-rule': 'evenodd',
                    d: 'M20 38.333c2.702 0 5.267-.584 7.577-1.634a6.64 6.64 0 0 1-.911-3.366c0-1.043.315-2.127.589-2.913.305-.877.706-1.792 1.126-2.619.414-.816.896-1.645 1.388-2.318.238-.326.552-.718.93-1.064.19-.174.47-.405.833-.608.34-.19.97-.478 1.8-.478s1.462.289 1.8.478c.364.203.644.434.834.608.378.346.693.738.93 1.064q.206.281.406.592A18.3 18.3 0 0 0 38.332 20C38.333 9.875 30.126 1.667 20 1.667S1.666 9.875 1.666 20s8.208 18.333 18.333 18.333m-9.167-16.666a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m18.333 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-16.33 6.385c.764.512 1.8.307 2.311-.458A5.83 5.83 0 0 1 20 25a5.83 5.83 0 0 1 4.852 2.594 1.667 1.667 0 1 0 2.77-1.854A9.16 9.16 0 0 0 20 21.667a9.16 9.16 0 0 0-7.622 4.073c-.512.765-.307 1.8.458 2.312',
                    'clip-rule': 'evenodd'
                }),
                (0, i.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M35.528 29.75c-.773-1.622-1.737-3.083-2.195-3.083-.834 0-3.334 4.825-3.334 6.666a3.331 3.331 0 0 0 3.333 3.333 3.333 3.333 0 0 0 3.334-3.333c0-.827-.505-2.259-1.138-3.583'
                })
            ]
        });
function T(e) {
    let { columns: t, handleScroll: n, voiceListRef: a, showSectionHeaders: s = !1, query: T } = e,
        S = (0, C.S)(),
        j = (0, u.e7)([m.default], () => (0, g.I5)(m.default.getCurrentUser())),
        {
            voicesById: y,
            isNativeModuleLoading: A,
            hasNativeModuleFailed: P
        } = (0, u.cj)([_.Z], () => ({
            voicesById: _.Z.getVoiceFilters(),
            isNativeModuleLoading: _.Z.isNativeModuleLoading(),
            hasNativeModuleFailed: _.Z.hasNativeModuleFailed()
        })),
        R = (0, u.cj)([_.Z], () => _.Z.getSortedVoiceFilters()),
        M = j ? Object.values(y) : R,
        L = l.useMemo(() => {
            let e = (0, d._I)(T.toLowerCase());
            return [
                '' === e
                    ? M
                    : M.filter((t) => {
                          let { id: n } = t;
                          return o()(e, (0, d._I)(S[n].name.toLowerCase()));
                      })
            ];
        }, [M, T, S]),
        k = (e) => Math.ceil(e / t),
        O = l.useCallback(
            (e) => {
                let { sectionIndex: n, sectionRowIndex: l } = e;
                return (0, i.jsx)(
                    'div',
                    {
                        className: I.row,
                        children: (0, c.range)(0, t)
                            .map((e) => L[n][l * t + e])
                            .filter(f.lm)
                            .map((e) =>
                                (0, i.jsx)(
                                    v.J,
                                    {
                                        voiceFilter: e,
                                        hasNitro: j
                                    },
                                    null == e ? void 0 : e.id
                                )
                            )
                    },
                    l
                );
            },
            [t, L, j]
        );
    return P
        ? (0, i.jsxs)('div', {
              className: r()(I.failed),
              children: [
                  (0, i.jsx)(N, {}),
                  (0, i.jsx)(h.X6q, {
                      variant: 'heading-md/normal',
                      color: 'header-muted',
                      children: E.intl.string(E.t.DpZNJy)
                  }),
                  (0, i.jsx)(h.Text, {
                      variant: 'text-sm/normal',
                      color: 'header-muted',
                      children: E.intl.format(E.t['5afO9f'], { onClick: x.r5 })
                  })
              ]
          })
        : A
          ? (0, i.jsx)('div', {
                className: r()(I.loading),
                children: (0, i.jsx)(h.$jN, {
                    type: h.$jN.Type.CHASING_DOTS,
                    animated: !0
                })
            })
          : (0, i.jsx)(p.Z, {
                fade: !0,
                className: r()(I.container, { [I.hasHeaders]: s }),
                renderRow: (e, t) => O(t),
                renderSectionHeader:
                    !1 === s
                        ? void 0
                        : (e) =>
                              (0, i.jsx)(h.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'header-muted',
                                  className: I.header,
                                  children: E.intl.string(Z[e])
                              }),
                sectionHeaderHeight: !1 === s ? void 0 : (e) => b[e],
                rowCountBySection: L.map((e) => k(e.length)),
                rowCount: k((0, c.sumBy)(L, (e) => e.length)),
                rowHeight: 130,
                onScroll: n,
                ref: a,
                sectionFooterHeight: j ? 0 : 40
            });
}
