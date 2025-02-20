n.d(t, { w: () => S });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(658722),
    s = n.n(l),
    c = n(392711),
    d = n(468194),
    u = n(442837),
    p = n(692547),
    m = n(670900),
    f = n(481060),
    h = n(218867),
    g = n(594174),
    _ = n(823379),
    b = n(111361),
    v = n(709706),
    y = n(56848),
    x = n(358820),
    O = n(990525),
    E = n(388032),
    j = n(878258);
let N = [51],
    C = [E.t.OpqAoq],
    I = () =>
        (0, r.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '40',
            height: '40',
            'aria-hidden': 'true',
            children: [
                (0, r.jsx)('path', {
                    fill: p.Z.colors.INTERACTIVE_MUTED.css,
                    'fill-rule': 'evenodd',
                    d: 'M20 38.333c2.702 0 5.267-.584 7.577-1.634a6.64 6.64 0 0 1-.911-3.366c0-1.043.315-2.127.589-2.913.305-.877.706-1.792 1.126-2.619.414-.816.896-1.645 1.388-2.318.238-.326.552-.718.93-1.064.19-.174.47-.405.833-.608.34-.19.97-.478 1.8-.478s1.462.289 1.8.478c.364.203.644.434.834.608.378.346.693.738.93 1.064q.206.281.406.592A18.3 18.3 0 0 0 38.332 20C38.333 9.875 30.126 1.667 20 1.667S1.666 9.875 1.666 20s8.208 18.333 18.333 18.333m-9.167-16.666a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m18.333 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-16.33 6.385c.764.512 1.8.307 2.311-.458A5.83 5.83 0 0 1 20 25a5.83 5.83 0 0 1 4.852 2.594 1.667 1.667 0 1 0 2.77-1.854A9.16 9.16 0 0 0 20 21.667a9.16 9.16 0 0 0-7.622 4.073c-.512.765-.307 1.8.458 2.312',
                    'clip-rule': 'evenodd'
                }),
                (0, r.jsx)('path', {
                    fill: p.Z.colors.INTERACTIVE_MUTED.css,
                    d: 'M35.528 29.75c-.773-1.622-1.737-3.083-2.195-3.083-.834 0-3.334 4.825-3.334 6.666a3.331 3.331 0 0 0 3.333 3.333 3.333 3.333 0 0 0 3.334-3.333c0-.827-.505-2.259-1.138-3.583'
                })
            ]
        });
function S(e) {
    var t;
    let { columns: n, handleScroll: a, voiceListRef: l, showSectionHeaders: S = !1, query: P } = e,
        T = (0, y.S)(),
        A = (0, u.e7)([g.default], () => (0, b.I5)(g.default.getCurrentUser())),
        {
            voicesById: w,
            isNativeModuleLoading: Z,
            hasNativeModuleFailed: k
        } = (0, u.cj)([v.Z], () => ({
            voicesById: v.Z.getVoiceFilters(),
            isNativeModuleLoading: v.Z.isNativeModuleLoading(),
            hasNativeModuleFailed: v.Z.hasNativeModuleFailed()
        })),
        R = (0, u.cj)([v.Z], () => v.Z.getSortedVoiceFilters()),
        L = A ? Object.values(w) : R,
        D = i.useMemo(() => {
            let e = (0, d._I)(P.toLowerCase());
            return [
                '' === e
                    ? L
                    : L.filter((t) => {
                          let { id: n } = t;
                          return s()(e, (0, d._I)(T[n].name.toLowerCase()));
                      })
            ];
        }, [L, P, T]),
        M = (e) => Math.ceil(e / n),
        W = i.useCallback(
            (e) => {
                let { sectionIndex: t, sectionRowIndex: i } = e;
                return (0, r.jsx)(
                    'div',
                    {
                        className: j.row,
                        children: (0, c.range)(0, n)
                            .map((e) => D[t][i * n + e])
                            .filter(_.lm)
                            .map((e) =>
                                (0, r.jsx)(
                                    O.J,
                                    {
                                        voiceFilter: e,
                                        hasNitro: A
                                    },
                                    null == e ? void 0 : e.id
                                )
                            )
                    },
                    i
                );
            },
            [n, D, A]
        );
    return P && (null == D ? void 0 : null === (t = D[0]) || void 0 === t ? void 0 : t.length) === 0
        ? (0, r.jsxs)('div', {
              className: o()(j.iconMessage),
              children: [
                  (0, r.jsx)(m._, {
                      width: 40,
                      height: 40,
                      size: 'custom',
                      color: p.Z.colors.INTERACTIVE_MUTED
                  }),
                  (0, r.jsx)(f.X6q, {
                      variant: 'heading-sm/medium',
                      color: 'header-muted',
                      children: E.NW.string(E.t.ZzukHh)
                  })
              ]
          })
        : k
          ? (0, r.jsxs)('div', {
                className: o()(j.iconMessage),
                children: [
                    (0, r.jsx)(I, {}),
                    (0, r.jsx)(f.X6q, {
                        variant: 'heading-md/normal',
                        color: 'header-muted',
                        children: E.NW.string(E.t.DpZNJy)
                    }),
                    (0, r.jsx)(f.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-muted',
                        children: E.NW.format(E.t['5afO9f'], { onClick: x.r5 })
                    })
                ]
            })
          : Z
            ? (0, r.jsx)('div', {
                  className: o()(j.loading),
                  children: (0, r.jsx)(f.$jN, {
                      type: f.$jN.Type.CHASING_DOTS,
                      animated: !0
                  })
              })
            : (0, r.jsx)(h.Z, {
                  fade: !0,
                  className: o()(j.container, { [j.hasHeaders]: S }),
                  renderRow: (e, t) => W(t),
                  renderSectionHeader:
                      !1 === S
                          ? void 0
                          : (e) =>
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-muted',
                                    className: j.header,
                                    children: E.NW.string(C[e])
                                }),
                  sectionHeaderHeight: !1 === S ? void 0 : (e) => N[e],
                  rowCountBySection: D.map((e) => M(e.length)),
                  rowCount: M((0, c.sumBy)(D, (e) => e.length)),
                  rowHeight: 130,
                  onScroll: a,
                  ref: l,
                  sectionFooterHeight: 40 * !A
              });
}
