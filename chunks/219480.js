l.d(t, { A: () => y }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(110259),
    s = l(311907),
    r = l(534514),
    d = l(834730),
    o = l(289873),
    c = l(139286),
    u = l(962125),
    m = l(274372),
    h = l(399925),
    p = l(555957),
    f = l(714973),
    v = l(985018),
    g = l(352528);
let x = 16 / 9,
    j = [0, 16, 0, 16],
    b = j[1] + j[3];
function C(e, t) {
    return Math.ceil(t / e);
}
function y(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: y, onEdit: A } = e,
        [N, E] = a.useState(!0),
        [w, k] = a.useState({ width: 0, height: 0 }),
        I = (0, s.bG)([m.A], () => m.A.getSettings().storageLocation),
        S = (0, s.yK)([m.A], () => m.A.getNewClipIds()),
        L = (0, s.bG)([m.A], () => m.A.getExportingClipIds().length > 0);
    (0, c.A)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: N },
        [t.length, N],
    ),
        a.useEffect(
            () => (
                (0, h.jA)(),
                () => {
                    (0, h.jA)(), (0, h.Su)();
                }
            ),
            [],
        );
    let M = a.useMemo(() => {
            let e = [],
                l = new Map(),
                n = [],
                a = new Date();
            a.setHours(0, 0, 0, 0);
            let i = a.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        a = new Date(t);
                    if ((a.setHours(0, 0, 0, 0), a.getTime() === i)) n.push(e);
                    else {
                        let n = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            a = l.get(n) ?? [];
                        l.set(n, [...a, e]);
                    }
                }),
                n.length > 0)
            ) {
                let t = n.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: v.intl.string(v.t["kB2R/0"]),
                    description: t ? v.intl.string(v.t["6AXirz"]) : void 0,
                    clips: n,
                });
            }
            return (
                Array.from(l.entries()).forEach((t) => {
                    let [l, n] = t;
                    e.push({ type: "monthyear", title: l, clips: n });
                }),
                e
            );
        }, [t]),
        { width: R } = w,
        { tileWidth: T, columns: D } = a.useMemo(() => {
            var e;
            let l, n, a, i, s;
            return (
                (e = t.length),
                (a = 16 * ((n = Math.max(1, Math.floor(((l = R - b) + 16) / 336))) - 1)),
                (i = Math.max(320, (l - a) / n)),
                (s = C(n, e)),
                { tileWidth: i, columns: n, rows: s }
            );
        }, [t.length, R]);
    a.useEffect(() => {
        !(async function () {
            E(!0);
            try {
                await h.Fb(I);
            } finally {
                E(!1);
            }
        })();
    }, [I]);
    let O = a.useMemo(() => M.map((e) => C(D, e.clips.length)), [M, D]),
        P = a.useMemo(() => O.reduce((e, t) => e + t, 0), [O]),
        U = Math.floor(T / x),
        G = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    i = M[l];
                if (null == i) return null;
                let s = a * D,
                    r = i.clips.slice(s, s + D);
                return (0, n.jsx)(
                    "div",
                    {
                        className: g.UX,
                        children: r.map((e) =>
                            (0, n.jsx)(
                                "div",
                                {
                                    style: { width: T },
                                    children: (0, n.jsx)(p.A, {
                                        actionsDisabled: L,
                                        isNew: S.includes(e.id),
                                        onClick: y ?? A,
                                        onEdit: A,
                                        clip: e,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                    },
                    `row-${l}-${a}`,
                );
            },
            [M, D, T, L, S, y, A],
        ),
        z = a.useCallback(
            (e) => {
                let t = M[e];
                return t?.description != null ? 66 : 44;
            },
            [M],
        ),
        V = a.useCallback(
            (e) => {
                let t = M[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: g.aE,
                              children: [
                                  (0, n.jsx)(r.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)(d.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: g.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [M],
        );
    return N || 0 !== M.length
        ? N
            ? (0, n.jsx)("div", { className: g.dc, children: (0, n.jsx)(o.y, {}) })
            : (0, n.jsx)(u.A, {
                  listPadding: j,
                  renderRow: G,
                  renderSectionHeader: V,
                  rowCount: P,
                  rowCountBySection: O,
                  rowHeight: U + 68 + 16,
                  sectionHeaderHeight: z,
                  onResize: k,
              })
        : (0, n.jsx)(f.A, { isEmptyBecauseQuery: l > 0 });
}
