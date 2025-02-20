n.d(t, { w: () => C });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(658722),
    s = n.n(l),
    c = n(392711),
    d = n(468194),
    u = n(442837),
    p = n(481060),
    m = n(218867),
    f = n(594174),
    h = n(823379),
    g = n(111361),
    _ = n(709706),
    b = n(56848),
    v = n(358820),
    y = n(990525),
    x = n(388032),
    O = n(878258);
let E = [51],
    j = [x.t.OpqAoq],
    N = () =>
        (0, r.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '40',
            height: '40',
            fill: 'none',
            'aria-hidden': 'true',
            children: [
                (0, r.jsx)('path', {
                    fill: 'currentColor',
                    'fill-rule': 'evenodd',
                    d: 'M20 38.333c2.702 0 5.267-.584 7.577-1.634a6.64 6.64 0 0 1-.911-3.366c0-1.043.315-2.127.589-2.913.305-.877.706-1.792 1.126-2.619.414-.816.896-1.645 1.388-2.318.238-.326.552-.718.93-1.064.19-.174.47-.405.833-.608.34-.19.97-.478 1.8-.478s1.462.289 1.8.478c.364.203.644.434.834.608.378.346.693.738.93 1.064q.206.281.406.592A18.3 18.3 0 0 0 38.332 20C38.333 9.875 30.126 1.667 20 1.667S1.666 9.875 1.666 20s8.208 18.333 18.333 18.333m-9.167-16.666a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m18.333 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-16.33 6.385c.764.512 1.8.307 2.311-.458A5.83 5.83 0 0 1 20 25a5.83 5.83 0 0 1 4.852 2.594 1.667 1.667 0 1 0 2.77-1.854A9.16 9.16 0 0 0 20 21.667a9.16 9.16 0 0 0-7.622 4.073c-.512.765-.307 1.8.458 2.312',
                    'clip-rule': 'evenodd'
                }),
                (0, r.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M35.528 29.75c-.773-1.622-1.737-3.083-2.195-3.083-.834 0-3.334 4.825-3.334 6.666a3.331 3.331 0 0 0 3.333 3.333 3.333 3.333 0 0 0 3.334-3.333c0-.827-.505-2.259-1.138-3.583'
                })
            ]
        });
function C(e) {
    let { columns: t, handleScroll: n, voiceListRef: a, showSectionHeaders: l = !1, query: C } = e,
        I = (0, b.S)(),
        S = (0, u.e7)([f.default], () => (0, g.I5)(f.default.getCurrentUser())),
        {
            voicesById: P,
            isNativeModuleLoading: T,
            hasNativeModuleFailed: A
        } = (0, u.cj)([_.Z], () => ({
            voicesById: _.Z.getVoiceFilters(),
            isNativeModuleLoading: _.Z.isNativeModuleLoading(),
            hasNativeModuleFailed: _.Z.hasNativeModuleFailed()
        })),
        w = (0, u.cj)([_.Z], () => _.Z.getSortedVoiceFilters()),
        Z = S ? Object.values(P) : w,
        k = i.useMemo(() => {
            let e = (0, d._I)(C.toLowerCase());
            return [
                '' === e
                    ? Z
                    : Z.filter((t) => {
                          let { id: n } = t;
                          return s()(e, (0, d._I)(I[n].name.toLowerCase()));
                      })
            ];
        }, [Z, C, I]),
        R = (e) => Math.ceil(e / t),
        L = i.useCallback(
            (e) => {
                let { sectionIndex: n, sectionRowIndex: i } = e;
                return (0, r.jsx)(
                    'div',
                    {
                        className: O.row,
                        children: (0, c.range)(0, t)
                            .map((e) => k[n][i * t + e])
                            .filter(h.lm)
                            .map((e) =>
                                (0, r.jsx)(
                                    y.J,
                                    {
                                        voiceFilter: e,
                                        hasNitro: S
                                    },
                                    null == e ? void 0 : e.id
                                )
                            )
                    },
                    i
                );
            },
            [t, k, S]
        );
    return A
        ? (0, r.jsxs)('div', {
              className: o()(O.failed),
              children: [
                  (0, r.jsx)(N, {}),
                  (0, r.jsx)(p.X6q, {
                      variant: 'heading-md/normal',
                      color: 'header-muted',
                      children: x.NW.string(x.t.DpZNJy)
                  }),
                  (0, r.jsx)(p.Text, {
                      variant: 'text-sm/normal',
                      color: 'header-muted',
                      children: x.NW.format(x.t['5afO9f'], { onClick: v.r5 })
                  })
              ]
          })
        : T
          ? (0, r.jsx)('div', {
                className: o()(O.loading),
                children: (0, r.jsx)(p.$jN, {
                    type: p.$jN.Type.CHASING_DOTS,
                    animated: !0
                })
            })
          : (0, r.jsx)(m.Z, {
                fade: !0,
                className: o()(O.container, { [O.hasHeaders]: l }),
                renderRow: (e, t) => L(t),
                renderSectionHeader:
                    !1 === l
                        ? void 0
                        : (e) =>
                              (0, r.jsx)(p.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'header-muted',
                                  className: O.header,
                                  children: x.NW.string(j[e])
                              }),
                sectionHeaderHeight: !1 === l ? void 0 : (e) => E[e],
                rowCountBySection: k.map((e) => R(e.length)),
                rowCount: R((0, c.sumBy)(k, (e) => e.length)),
                rowHeight: 130,
                onScroll: n,
                ref: a,
                sectionFooterHeight: 40 * !S
            });
}
