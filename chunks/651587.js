n.d(t, { Z: () => x }), n(388685), n(539854), n(953529);
var l = n(951288),
    r = n(647438),
    i = n(990547),
    a = n(442837),
    s = n(481060),
    c = n(213609),
    o = n(218867),
    u = n(709054),
    d = n(435064),
    p = n(39604),
    m = n(10217),
    f = n(410426),
    y = n(356659),
    b = n(388032),
    h = n(132851);
let v = 16 / 9,
    g = [0, 16, 0, 16],
    j = g[1] + g[3];
function O(e, t) {
    return Math.ceil(t / e);
}
function x(e) {
    let { channelId: t, filteredClips: x, totalClipCount: C, onClipClick: w } = e,
        [P, k] = r.useState(!0),
        [I, S] = r.useState({
            width: 0,
            height: 0,
        }),
        E = (0, a.e7)([d.Z], () => d.Z.getSettings().storageLocation),
        N = (0, a.Wu)([d.Z], () => d.Z.getNewClipIds()),
        M = (0, a.e7)([d.Z], () => d.Z.getExportingClipIds().length > 0);
    (0, c.Z)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: x.length },
        },
        { disableTrack: P },
        [x.length, P],
    ),
        r.useEffect(
            () => (
                (0, p.eL)(),
                () => {
                    (0, p.eL)(), (0, p.zq)();
                }
            ),
            [],
        );
    let Z = r.useMemo(() => {
            let e = [],
                t = new Map(),
                n = [],
                l = new Date();
            l.setHours(0, 0, 0, 0);
            let r = l.getTime();
            if (
                (x.forEach((e) => {
                    let l = u.default.extractTimestamp(e.id),
                        i = new Date(l);
                    if ((i.setHours(0, 0, 0, 0), i.getTime() === r)) n.push(e);
                    else {
                        var a;
                        let n = new Date(l).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                            }),
                            r = null != (a = t.get(n)) ? a : [];
                        t.set(n, [...r, e]);
                    }
                }),
                n.length > 0)
            ) {
                let t = n.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: b.intl.string(b.t["kB2R/0"]),
                    description: t ? b.intl.string(b.t["6AXirz"]) : void 0,
                    clips: n,
                });
            }
            return (
                Array.from(t.entries()).forEach((t) => {
                    let [n, l] = t;
                    e.push({
                        type: "monthyear",
                        title: n,
                        clips: l,
                    });
                }),
                e
            );
        }, [x]),
        { width: D } = I,
        { tileWidth: L, columns: H } = r.useMemo(
            () =>
                (function (e, t) {
                    let n = t - j,
                        l = Math.max(1, Math.floor((n + 16) / 336)),
                        r = Math.max(320, (n - 16 * (l - 1)) / l),
                        i = O(l, e);
                    return {
                        tileWidth: r,
                        columns: l,
                        rows: i,
                    };
                })(x.length, D),
            [x.length, D],
        );
    r.useEffect(() => {
        !(async function () {
            k(!0);
            try {
                await p.jv(E);
            } finally {
                k(!1);
            }
        })();
    }, [E]);
    let T = r.useCallback(
            (e) => {
                (0, s.ZDy)(
                    async () => {
                        let { default: r } = await Promise.all([n.e("98920"), n.e("60090")]).then(n.bind(n, 22989));
                        return (n) => {
                            var i, a;
                            return (0, l.jsx)(
                                r,
                                ((i = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (a = a =
                                    {
                                        channelId: t,
                                        clip: e,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, l);
                                          }
                                          return n;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                i),
                            );
                        };
                    },
                    {
                        modalKey: y.Ut,
                        stackingBehavior: "stack",
                    },
                );
            },
            [t],
        ),
        A = r.useMemo(() => Z.map((e) => O(H, e.clips.length)), [Z, H]),
        R = r.useMemo(() => A.reduce((e, t) => e + t, 0), [A]),
        V = Math.floor(L / v),
        _ = r.useCallback(
            (e, t) => {
                let { sectionIndex: n, sectionRowIndex: r } = t,
                    i = Z[n];
                if (null == i) return null;
                let a = r * H,
                    s = i.clips.slice(a, a + H);
                return (0, l.jsx)(
                    "div",
                    {
                        className: h.clipsRow,
                        children: s.map((e) =>
                            (0, l.jsx)(
                                "div",
                                {
                                    style: { width: L },
                                    children: (0, l.jsx)(m.Z, {
                                        actionsDisabled: M,
                                        isNew: N.includes(e.id),
                                        onClick: null != w ? w : T,
                                        clip: e,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                    },
                    "row-".concat(n, "-").concat(r),
                );
            },
            [Z, H, L, M, N, T, w],
        ),
        U = r.useCallback(
            (e) => {
                let t = Z[e];
                return (null == t ? void 0 : t.description) != null ? 66 : 44;
            },
            [Z],
        ),
        z = r.useCallback(
            (e) => {
                let t = Z[e];
                return null == t
                    ? null
                    : (0, l.jsxs)(
                          "div",
                          {
                              className: h.sectionHeaderContainer,
                              children: [
                                  (0, l.jsx)(s.Heading, {
                                      variant: "text-md/semibold",
                                      color: "header-secondary",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, l.jsx)(s.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-secondary",
                                          className: h.sectionDescription,
                                          children: t.description,
                                      }),
                              ],
                          },
                          "header-".concat(e),
                      );
            },
            [Z],
        );
    return P || 0 !== Z.length
        ? P
            ? (0, l.jsx)("div", {
                  className: h.spinnerContainer,
                  children: (0, l.jsx)(s.$jN, {}),
              })
            : (0, l.jsx)(o.Z, {
                  listPadding: g,
                  renderRow: _,
                  renderSectionHeader: z,
                  rowCount: R,
                  rowCountBySection: A,
                  rowHeight: V + 68 + 16,
                  sectionHeaderHeight: U,
                  onResize: S,
              })
        : (0, l.jsx)(f.Z, { isEmptyBecauseQuery: C > 0 });
}
