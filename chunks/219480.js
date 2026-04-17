l.d(t, { A: () => b }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(110259),
    s = l(311907),
    r = l(397927),
    d = l(139286),
    o = l(962125),
    c = l(274372),
    u = l(399925),
    m = l(555957),
    h = l(714973),
    p = l(985018),
    x = l(352528);
let g = 16 / 9,
    f = [0, 16, 0, 16],
    v = f[1] + f[3];
function j(e, t) {
    return Math.ceil(t / e);
}
function b(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: b, onEdit: C } = e,
        [y, A] = a.useState(!0),
        [N, E] = a.useState({ width: 0, height: 0 }),
        k = (0, s.bG)([c.A], () => c.A.getSettings().storageLocation),
        I = (0, s.yK)([c.A], () => c.A.getNewClipIds()),
        S = (0, s.bG)([c.A], () => c.A.getExportingClipIds().length > 0);
    (0, d.A)(
        {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: y },
        [t.length, y],
    ),
        a.useEffect(
            () => (
                (0, u.jA)(),
                () => {
                    (0, u.jA)(), (0, u.Su)();
                }
            ),
            [],
        );
    let w = a.useMemo(() => {
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
                    title: p.intl.string(p.t["kB2R/0"]),
                    description: t ? p.intl.string(p.t["6AXirz"]) : void 0,
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
        { width: L } = N,
        { tileWidth: M, columns: T } = a.useMemo(() => {
            var e;
            let l, n, a, i, s;
            return (
                (e = t.length),
                (a = 16 * ((n = Math.max(1, Math.floor(((l = L - v) + 16) / 336))) - 1)),
                (i = Math.max(320, (l - a) / n)),
                (s = j(n, e)),
                { tileWidth: i, columns: n, rows: s }
            );
        }, [t.length, L]);
    a.useEffect(() => {
        !(async function () {
            A(!0);
            try {
                await u.Fb(k);
            } finally {
                A(!1);
            }
        })();
    }, [k]);
    let R = a.useMemo(() => w.map((e) => j(T, e.clips.length)), [w, T]),
        D = a.useMemo(() => R.reduce((e, t) => e + t, 0), [R]),
        O = Math.floor(M / g),
        P = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    i = w[l];
                if (null == i) return null;
                let s = a * T,
                    r = i.clips.slice(s, s + T);
                return (0, n.jsx)(
                    "div",
                    {
                        className: x.UX,
                        children: r.map((e) =>
                            (0, n.jsx)(
                                "div",
                                {
                                    style: { width: M },
                                    children: (0, n.jsx)(m.A, {
                                        actionsDisabled: S,
                                        isNew: I.includes(e.id),
                                        onClick: b ?? C,
                                        onEdit: C,
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
            [w, T, M, S, I, b, C],
        ),
        U = a.useCallback(
            (e) => {
                let t = w[e];
                return t?.description != null ? 66 : 44;
            },
            [w],
        ),
        G = a.useCallback(
            (e) => {
                let t = w[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: x.aE,
                              children: [
                                  (0, n.jsx)(r.Heading, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)(r.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: x.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [w],
        );
    return y || 0 !== w.length
        ? y
            ? (0, n.jsx)("div", { className: x.dc, children: (0, n.jsx)(r.y$y, {}) })
            : (0, n.jsx)(o.A, {
                  listPadding: f,
                  renderRow: P,
                  renderSectionHeader: G,
                  rowCount: D,
                  rowCountBySection: R,
                  rowHeight: O + 68 + 16,
                  sectionHeaderHeight: U,
                  onResize: E,
              })
        : (0, n.jsx)(h.A, { isEmptyBecauseQuery: l > 0 });
}
