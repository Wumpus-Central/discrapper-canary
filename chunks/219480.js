l.d(t, { A: () => y }), l(321073);
var a = l(627968),
    n = l(64700),
    s = l(110259),
    i = l(311907),
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
        [N, E] = n.useState(!0),
        [w, k] = n.useState({ width: 0, height: 0 }),
        I = (0, i.bG)([m.A], () => m.A.getSettings().storageLocation),
        S = (0, i.yK)([m.A], () => m.A.getNewClipIds()),
        L = (0, i.bG)([m.A], () => m.A.getExportingClipIds().length > 0);
    (0, c.A)(
        {
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: N },
        [t.length, N],
    ),
        n.useEffect(
            () => (
                (0, h.jA)(),
                () => {
                    (0, h.jA)(), (0, h.Su)();
                }
            ),
            [],
        );
    let M = n.useMemo(() => {
            let e = [],
                l = new Map(),
                a = [],
                n = new Date();
            n.setHours(0, 0, 0, 0);
            let s = n.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        n = new Date(t);
                    if ((n.setHours(0, 0, 0, 0), n.getTime() === s)) a.push(e);
                    else {
                        let a = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            n = l.get(a) ?? [];
                        l.set(a, [...n, e]);
                    }
                }),
                a.length > 0)
            ) {
                let t = a.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: v.intl.string(v.t["kB2R/0"]),
                    description: t ? v.intl.string(v.t["6AXirz"]) : void 0,
                    clips: a,
                });
            }
            return (
                Array.from(l.entries()).forEach((t) => {
                    let [l, a] = t;
                    e.push({ type: "monthyear", title: l, clips: a });
                }),
                e
            );
        }, [t]),
        { width: R } = w,
        { tileWidth: T, columns: D } = n.useMemo(() => {
            var e;
            let l, a, n, s, i;
            return (
                (e = t.length),
                (n = 16 * ((a = Math.max(1, Math.floor(((l = R - b) + 16) / 336))) - 1)),
                (s = Math.max(320, (l - n) / a)),
                (i = C(a, e)),
                { tileWidth: s, columns: a, rows: i }
            );
        }, [t.length, R]);
    n.useEffect(() => {
        !(async function () {
            E(!0);
            try {
                await h.Fb(I);
            } finally {
                E(!1);
            }
        })();
    }, [I]);
    let O = n.useMemo(() => M.map((e) => C(D, e.clips.length)), [M, D]),
        P = n.useMemo(() => O.reduce((e, t) => e + t, 0), [O]),
        U = Math.floor(T / x),
        G = n.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: n } = t,
                    s = M[l];
                if (null == s) return null;
                let i = n * D,
                    r = s.clips.slice(i, i + D);
                return (0, a.jsx)(
                    "div",
                    {
                        className: g.UX,
                        children: r.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    style: { width: T },
                                    children: (0, a.jsx)(p.A, {
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
                    `row-${l}-${n}`,
                );
            },
            [M, D, T, L, S, y, A],
        ),
        V = n.useCallback(
            (e) => {
                let t = M[e];
                return t?.description != null ? 66 : 44;
            },
            [M],
        ),
        _ = n.useCallback(
            (e) => {
                let t = M[e];
                return null == t
                    ? null
                    : (0, a.jsxs)(
                          "div",
                          {
                              className: g.aE,
                              children: [
                                  (0, a.jsx)(r.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, a.jsx)(d.E, {
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
            ? (0, a.jsx)("div", { className: g.dc, children: (0, a.jsx)(o.y, {}) })
            : (0, a.jsx)(u.A, {
                  listPadding: j,
                  renderRow: G,
                  renderSectionHeader: _,
                  rowCount: P,
                  rowCountBySection: O,
                  rowHeight: U + 68 + 16,
                  sectionHeaderHeight: V,
                  onResize: k,
              })
        : (0, a.jsx)(f.A, { isEmptyBecauseQuery: l > 0 });
}
