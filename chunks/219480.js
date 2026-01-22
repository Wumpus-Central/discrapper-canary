l.d(t, {
    A: () => x,
}),
    l(896048),
    l(321073),
    l(228524);
var n = l(627968),
    r = l(64700),
    i = l(110259),
    a = l(311907),
    s = l(397927),
    c = l(139286),
    o = l(962125),
    u = l(661191),
    d = l(274372),
    p = l(399925),
    m = l(555957),
    f = l(714973),
    y = l(696016),
    b = l(985018),
    v = l(430494);
let j = 16 / 9,
    h = [0, 16, 0, 16],
    g = h[1] + h[3];

function O(e, t) {
    return Math.ceil(t / e);
}

function x(e) {
    let { channelId: t, filteredClips: x, totalClipCount: C, onClipClick: w } = e,
        [P, A] = r.useState(!0),
        [I, E] = r.useState({
            width: 0,
            height: 0,
        }),
        k = (0, a.bG)([d.A], () => d.A.getSettings().storageLocation),
        S = (0, a.yK)([d.A], () => d.A.getNewClipIds()),
        N = (0, a.bG)([d.A], () => d.A.getExportingClipIds().length > 0);
    (0, c.A)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: {
                number_of_clips_loaded: x.length,
            },
        },
        {
            disableTrack: P,
        },
        [x.length, P],
    ),
        r.useEffect(
            () => (
                (0, p.jA)(),
                () => {
                    (0, p.jA)(), (0, p.Su)();
                }
            ),
            [],
        );
    let D = r.useMemo(() => {
            let e = [],
                t = new Map(),
                l = [],
                n = new Date();
            n.setHours(0, 0, 0, 0);
            let r = n.getTime();
            if (
                (x.forEach((e) => {
                    let n = u.default.extractTimestamp(e.id),
                        i = new Date(n);
                    if ((i.setHours(0, 0, 0, 0), i.getTime() === r)) l.push(e);
                    else {
                        var a;
                        let l = new Date(n).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                            }),
                            r = null != (a = t.get(l)) ? a : [];
                        t.set(l, [...r, e]);
                    }
                }),
                l.length > 0)
            ) {
                let t = l.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: b.intl.string(b.t["kB2R/0"]),
                    description: t ? b.intl.string(b.t["6AXirz"]) : void 0,
                    clips: l,
                });
            }
            return (
                Array.from(t.entries()).forEach((t) => {
                    let [l, n] = t;
                    e.push({
                        type: "monthyear",
                        title: l,
                        clips: n,
                    });
                }),
                e
            );
        }, [x]),
        { width: M } = I,
        { tileWidth: L, columns: H } = r.useMemo(() => {
            var e;
            let t, l, n, r, i;
            return (
                (e = x.length),
                (n = 16 * ((l = Math.max(1, Math.floor(((t = M - g) + 16) / 336))) - 1)),
                (r = Math.max(320, (t - n) / l)),
                (i = O(l, e)),
                {
                    tileWidth: r,
                    columns: l,
                    rows: i,
                }
            );
        }, [x.length, M]);
    r.useEffect(() => {
        !(async function () {
            A(!0);
            try {
                await p.Fb(k);
            } finally {
                A(!1);
            }
        })();
    }, [k]);
    let T = r.useCallback(
            (e) => {
                (0, s.mMO)(
                    async () => {
                        let { default: r } = await Promise.all([l.e("19632"), l.e("95987")]).then(l.bind(l, 723028));
                        return (l) => {
                            var i, a;
                            return (0, n.jsx)(
                                r,
                                ((i = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var l = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(l);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                (n = l[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = n);
                                            });
                                    }
                                    return e;
                                })({}, l)),
                                (a = a =
                                    {
                                        channelId: t,
                                        clip: e,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var l = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var n = Object.getOwnPropertySymbols(e);
                                              l.push.apply(l, n);
                                          }
                                          return l;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                i),
                            );
                        };
                    },
                    {
                        modalKey: y.DQ,
                        stackingBehavior: "stack",
                    },
                );
            },
            [t],
        ),
        R = r.useMemo(() => D.map((e) => O(H, e.clips.length)), [D, H]),
        V = r.useMemo(() => R.reduce((e, t) => e + t, 0), [R]),
        G = Math.floor(L / j),
        _ = r.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: r } = t,
                    i = D[l];
                if (null == i) return null;
                let a = r * H,
                    s = i.clips.slice(a, a + H);
                return (0, n.jsx)(
                    "div",
                    {
                        className: v.UX,
                        children: s.map((e) =>
                            (0, n.jsx)(
                                "div",
                                {
                                    style: {
                                        width: L,
                                    },
                                    children: (0, n.jsx)(m.A, {
                                        actionsDisabled: N,
                                        isNew: S.includes(e.id),
                                        onClick: null != w ? w : T,
                                        clip: e,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                    },
                    "row-".concat(l, "-").concat(r),
                );
            },
            [D, H, L, N, S, T, w],
        ),
        K = r.useCallback(
            (e) => {
                let t = D[e];
                return (null == t ? void 0 : t.description) != null ? 66 : 44;
            },
            [D],
        ),
        z = r.useCallback(
            (e) => {
                let t = D[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: v.aE,
                              children: [
                                  (0, n.jsx)(s.Heading, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)(s.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: v.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          "header-".concat(e),
                      );
            },
            [D],
        );
    return P || 0 !== D.length
        ? P
            ? (0, n.jsx)("div", {
                  className: v.dc,
                  children: (0, n.jsx)(s.y$y, {}),
              })
            : (0, n.jsx)(o.A, {
                  listPadding: h,
                  renderRow: _,
                  renderSectionHeader: z,
                  rowCount: V,
                  rowCountBySection: R,
                  rowHeight: G + 68 + 16,
                  sectionHeaderHeight: K,
                  onResize: E,
              })
        : (0, n.jsx)(f.A, {
              isEmptyBecauseQuery: C > 0,
          });
}
