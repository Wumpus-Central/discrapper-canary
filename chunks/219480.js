l.d(t, { A: () => A }), l(321073);
var i = l(627968),
    s = l(64700),
    a = l(110259),
    n = l(311907),
    r = l(397927),
    d = l(139286),
    c = l(962125),
    o = l(661191),
    u = l(274372),
    m = l(399925),
    p = l(555957),
    h = l(714973),
    x = l(696016),
    C = l(985018),
    v = l(186515);
let g = 16 / 9,
    j = [0, 16, 0, 16],
    f = j[1] + j[3];
function y(e, t) {
    return Math.ceil(t / e);
}
function A(e) {
    let { channelId: t, filteredClips: A, totalClipCount: N, onClipClick: I } = e,
        [b, E] = s.useState(!0),
        [k, M] = s.useState({ width: 0, height: 0 }),
        w = (0, n.bG)([u.A], () => u.A.getSettings().storageLocation),
        L = (0, n.yK)([u.A], () => u.A.getNewClipIds()),
        S = (0, n.bG)([u.A], () => u.A.getExportingClipIds().length > 0);
    (0, d.A)(
        {
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: A.length },
        },
        { disableTrack: b },
        [A.length, b],
    ),
        s.useEffect(
            () => (
                (0, m.jA)(),
                () => {
                    (0, m.jA)(), (0, m.Su)();
                }
            ),
            [],
        );
    let H = s.useMemo(() => {
            let e = [],
                t = new Map(),
                l = [],
                i = new Date();
            i.setHours(0, 0, 0, 0);
            let s = i.getTime();
            if (
                (A.forEach((e) => {
                    let i = o.default.extractTimestamp(e.id),
                        a = new Date(i);
                    if ((a.setHours(0, 0, 0, 0), a.getTime() === s)) l.push(e);
                    else {
                        let l = new Date(i).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            s = t.get(l) ?? [];
                        t.set(l, [...s, e]);
                    }
                }),
                l.length > 0)
            ) {
                let t = l.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: C.intl.string(C.t["kB2R/0"]),
                    description: t ? C.intl.string(C.t["6AXirz"]) : void 0,
                    clips: l,
                });
            }
            return (
                Array.from(t.entries()).forEach((t) => {
                    let [l, i] = t;
                    e.push({ type: "monthyear", title: l, clips: i });
                }),
                e
            );
        }, [A]),
        { width: T } = k,
        { tileWidth: P, columns: V } = s.useMemo(() => {
            var e;
            let t, l, i, s, a;
            return (
                (e = A.length),
                (i = 16 * ((l = Math.max(1, Math.floor(((t = T - f) + 16) / 336))) - 1)),
                (s = Math.max(320, (t - i) / l)),
                (a = y(l, e)),
                { tileWidth: s, columns: l, rows: a }
            );
        }, [A.length, T]);
    s.useEffect(() => {
        !(async function () {
            E(!0);
            try {
                await m.Fb(w);
            } finally {
                E(!1);
            }
        })();
    }, [w]);
    let D = s.useCallback(
            (e) => {
                (0, r.mMO)(
                    async () => {
                        let { default: s } = await l.e("29621").then(l.bind(l, 723028));
                        return (l) => (0, i.jsx)(s, { ...l, channelId: t, clip: e });
                    },
                    { modalKey: x.DQ, stackingBehavior: "stack" },
                );
            },
            [t],
        ),
        R = s.useMemo(() => H.map((e) => y(V, e.clips.length)), [H, V]),
        G = s.useMemo(() => R.reduce((e, t) => e + t, 0), [R]),
        _ = Math.floor(P / g),
        O = s.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: s } = t,
                    a = H[l];
                if (null == a) return null;
                let n = s * V,
                    r = a.clips.slice(n, n + V);
                return (0, i.jsx)(
                    "div",
                    {
                        className: v.UX,
                        children: r.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: P },
                                    children: (0, i.jsx)(p.A, {
                                        actionsDisabled: S,
                                        isNew: L.includes(e.id),
                                        onClick: I ?? D,
                                        clip: e,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                    },
                    `row-${l}-${s}`,
                );
            },
            [H, V, P, S, L, D, I],
        ),
        z = s.useCallback(
            (e) => {
                let t = H[e];
                return t?.description != null ? 66 : 44;
            },
            [H],
        ),
        K = s.useCallback(
            (e) => {
                let t = H[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: v.aE,
                              children: [
                                  (0, i.jsx)(r.Heading, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(r.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: v.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [H],
        );
    return b || 0 !== H.length
        ? b
            ? (0, i.jsx)("div", { className: v.dc, children: (0, i.jsx)(r.y$y, {}) })
            : (0, i.jsx)(c.A, {
                  listPadding: j,
                  renderRow: O,
                  renderSectionHeader: K,
                  rowCount: G,
                  rowCountBySection: R,
                  rowHeight: _ + 68 + 16,
                  sectionHeaderHeight: z,
                  onResize: M,
              })
        : (0, i.jsx)(h.A, { isEmptyBecauseQuery: N > 0 });
}
