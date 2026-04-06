l.d(t, { A: () => C }), l(321073);
var a = l(627968),
    n = l(64700),
    i = l(110259),
    s = l(311907),
    r = l(397927),
    o = l(139286),
    d = l(962125),
    c = l(661191),
    u = l(274372),
    m = l(399925),
    h = l(555957),
    p = l(714973),
    x = l(985018),
    f = l(186515);
let g = 16 / 9,
    v = [0, 16, 0, 16],
    j = v[1] + v[3];
function b(e, t) {
    return Math.ceil(t / e);
}
function C(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: C, onEdit: y } = e,
        [N, A] = n.useState(!0),
        [E, k] = n.useState({ width: 0, height: 0 }),
        I = (0, s.bG)([u.A], () => u.A.getSettings().storageLocation),
        S = (0, s.yK)([u.A], () => u.A.getNewClipIds()),
        w = (0, s.bG)([u.A], () => u.A.getExportingClipIds().length > 0);
    (0, o.A)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: N },
        [t.length, N],
    ),
        n.useEffect(
            () => (
                (0, m.jA)(),
                () => {
                    (0, m.jA)(), (0, m.Su)();
                }
            ),
            [],
        );
    let L = n.useMemo(() => {
            let e = [],
                l = new Map(),
                a = [],
                n = new Date();
            n.setHours(0, 0, 0, 0);
            let i = n.getTime();
            if (
                (t.forEach((e) => {
                    let t = c.default.extractTimestamp(e.id),
                        n = new Date(t);
                    if ((n.setHours(0, 0, 0, 0), n.getTime() === i)) a.push(e);
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
                    title: x.intl.string(x.t["kB2R/0"]),
                    description: t ? x.intl.string(x.t["6AXirz"]) : void 0,
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
        { width: M } = E,
        { tileWidth: T, columns: R } = n.useMemo(() => {
            var e;
            let l, a, n, i, s;
            return (
                (e = t.length),
                (n = 16 * ((a = Math.max(1, Math.floor(((l = M - j) + 16) / 336))) - 1)),
                (i = Math.max(320, (l - n) / a)),
                (s = b(a, e)),
                { tileWidth: i, columns: a, rows: s }
            );
        }, [t.length, M]);
    n.useEffect(() => {
        !(async function () {
            A(!0);
            try {
                await m.Fb(I);
            } finally {
                A(!1);
            }
        })();
    }, [I]);
    let D = n.useMemo(() => L.map((e) => b(R, e.clips.length)), [L, R]),
        O = n.useMemo(() => D.reduce((e, t) => e + t, 0), [D]),
        P = Math.floor(T / g),
        U = n.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: n } = t,
                    i = L[l];
                if (null == i) return null;
                let s = n * R,
                    r = i.clips.slice(s, s + R);
                return (0, a.jsx)(
                    "div",
                    {
                        className: f.UX,
                        children: r.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    style: { width: T },
                                    children: (0, a.jsx)(h.A, {
                                        actionsDisabled: w,
                                        isNew: S.includes(e.id),
                                        onClick: C ?? y,
                                        onEdit: y,
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
            [L, R, T, w, S, C, y],
        ),
        G = n.useCallback(
            (e) => {
                let t = L[e];
                return t?.description != null ? 66 : 44;
            },
            [L],
        ),
        V = n.useCallback(
            (e) => {
                let t = L[e];
                return null == t
                    ? null
                    : (0, a.jsxs)(
                          "div",
                          {
                              className: f.aE,
                              children: [
                                  (0, a.jsx)(r.Heading, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, a.jsx)(r.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: f.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [L],
        );
    return N || 0 !== L.length
        ? N
            ? (0, a.jsx)("div", { className: f.dc, children: (0, a.jsx)(r.y$y, {}) })
            : (0, a.jsx)(d.A, {
                  listPadding: v,
                  renderRow: U,
                  renderSectionHeader: V,
                  rowCount: O,
                  rowCountBySection: D,
                  rowHeight: P + 68 + 16,
                  sectionHeaderHeight: G,
                  onResize: k,
              })
        : (0, a.jsx)(p.A, { isEmptyBecauseQuery: l > 0 });
}
