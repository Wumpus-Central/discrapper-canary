l.d(t, { $: () => f, default: () => j });
var i = l(627968),
    s = l(64700),
    a = l(311907),
    n = l(990078),
    r = l(521489),
    d = l(397927),
    c = l(793574),
    o = l(688810),
    u = l(274372),
    m = l(794905),
    p = l(219480),
    h = l(650995),
    x = l(792852),
    C = l(409067),
    v = l(985018),
    g = l(45968);
let f = s.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function j(e) {
    let { channelId: t, onClose: j, onClipClick: y, ...A } = e,
        { analyticsLocations: I } = (0, o.Ay)(c.A.CLIPS_GALLERY),
        [N, b] = s.useState(new Set()),
        { clipsByGame: E, filteredClips: k, favoriteClips: M, allClips: w } = (0, C.a)(),
        { onShareClick: L } = (0, m.A)(t),
        H = (0, a.bG)([u.A], () => u.A.getExportingClipIds().length > 0),
        S = (0, x.P)((e) => e.selectedGameId),
        T = s.useMemo(
            () => (null == S || "favorites" === S ? null : (E.find((e) => e.applicationId === S) ?? null)),
            [S, E],
        ),
        P = s.useMemo(() => ("favorites" === S ? M : (T?.filteredClips ?? k)), [S, T, k, M]),
        V = s.useMemo(
            () => ("favorites" === S ? v.intl.string(v.t["9rlCk1"]) : (T?.name ?? v.intl.string(v.t.dPVrEv))),
            [S, T],
        ),
        D = s.useCallback((e) => {
            b((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        R = s.useCallback(() => {
            b(new Set());
        }, []),
        G = N.size > 0,
        _ = s.useCallback(() => {
            let e = w.filter((e) => N.has(e.id));
            (0, d.mMO)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                R(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [w, N, R]),
        z = s.useCallback(async () => {
            let e = w.filter((e) => N.has(e.id));
            await L({ clips: e }), R();
        }, [w, N, L, R]),
        O = s.useMemo(
            () => ({ selectedClipIds: N, toggleClipSelection: D, clearSelection: R, isMultiSelectMode: G }),
            [N, D, R, G],
        );
    return (0, i.jsx)(o.f5, {
        value: I,
        children: (0, i.jsx)(f.Provider, {
            value: O,
            children: (0, i.jsx)(r.N, {
                onClose: j,
                ...A,
                children: (0, i.jsxs)("div", {
                    className: g.jT,
                    children: [
                        (0, i.jsx)(h.A, { clipsByGame: E, filteredClips: k, favoriteClips: M, allClips: w }),
                        (0, i.jsxs)("div", {
                            className: g.Qs,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: g.$Q,
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/medium",
                                            color: "text-default",
                                            children: V,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: g.$s,
                                            children: [
                                                G &&
                                                    (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, i.jsx)(n.m, {
                                                                text: v.intl.string(v.t.RDE0Sc),
                                                                children: (0, i.jsx)(d.K0, {
                                                                    onClick: z,
                                                                    icon: d.liv,
                                                                    size: "sm",
                                                                    variant: "icon-only",
                                                                    "aria-label": v.intl.string(v.t.RDE0Sc),
                                                                    loading: H,
                                                                }),
                                                            }),
                                                            (0, i.jsx)(n.m, {
                                                                text: v.intl.string(v.t.oyYWHE),
                                                                children: (0, i.jsx)(d.K0, {
                                                                    onClick: _,
                                                                    icon: d.ucK,
                                                                    size: "sm",
                                                                    variant: "icon-only",
                                                                    "aria-label": v.intl.string(v.t.oyYWHE),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                (0, i.jsx)(d.K0, {
                                                    onClick: j,
                                                    icon: d.d$L,
                                                    size: "sm",
                                                    variant: "icon-only",
                                                    "aria-label": v.intl.string(v.t.cpT0Cq),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(p.A, {
                                    channelId: t,
                                    filteredClips: P,
                                    totalClipCount: w.length,
                                    onClipClick: y,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
