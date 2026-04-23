l.d(t, { $: () => M, default: () => R });
var a = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(311907),
    d = l(990078),
    o = l(521489),
    c = l(231723),
    u = l(192308),
    m = l(534514),
    h = l(408278),
    p = l(405433),
    f = l(241326),
    v = l(972213),
    g = l(775602),
    x = l(793574),
    j = l(688810),
    b = l(274372),
    C = l(247181),
    y = l(309777),
    A = l(429364),
    N = l(794905),
    E = l(219480),
    w = l(650995),
    k = l(792852),
    I = l(409067),
    S = l(985018),
    L = l(847455);
let M = n.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function R(e) {
    let { channelId: t, onClose: s, onClipClick: R, transitionState: T, ...D } = e,
        { analyticsLocations: O } = (0, j.Ay)(x.A.CLIPS_GALLERY),
        [P, U] = n.useState(new Set()),
        { clipsByGame: G, filteredClips: V, favoriteClips: _, allClips: z } = (0, I.a)(),
        { onShareClick: H } = (0, N.A)(t),
        $ = (0, r.bG)([b.A], () => b.A.getExportingClipIds().length > 0),
        [F, B] = n.useState("gallery"),
        [K, Z] = n.useState(null),
        Q = (0, r.bG)([b.A], () => (null != K ? b.A.getClipById(K) : null), [K]),
        X = n.useRef(F);
    X.current = F;
    let [Y, q] = n.useState(c.ip.HIDDEN),
        W = n.useRef(null),
        J = (0, k.P)((e) => e.selectedGameId),
        ee = n.useMemo(
            () => (null == J || "favorites" === J ? null : (G.find((e) => e.applicationId === J) ?? null)),
            [J, G],
        ),
        et = n.useMemo(() => ("favorites" === J ? _ : (ee?.filteredClips ?? V)), [J, ee, V, _]),
        el = n.useMemo(
            () => ("favorites" === J ? S.intl.string(S.t["9rlCk1"]) : (ee?.name ?? S.intl.string(S.t.dPVrEv))),
            [J, ee],
        ),
        ea = n.useCallback((e) => {
            U((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        en = n.useCallback((e) => {
            Z(e.id), B("editing"), g.A.useReducedMotion && q(c.ip.ENTERED);
        }, []),
        es = n.useCallback(() => {
            g.A.useReducedMotion && Z(null), B("gallery");
        }, []);
    n.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === X.current && (e.stopPropagation(), es());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [es, s]);
    let ei = n.useCallback(() => {
            U(new Set());
        }, []),
        er = P.size > 0,
        ed = n.useCallback(() => {
            let e = z.filter((e) => P.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, a.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                ei(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [z, P, ei]),
        eo = n.useCallback(async () => {
            let e = z.filter((e) => P.has(e.id));
            await H({ clips: e }), ei();
        }, [z, P, H, ei]),
        ec = n.useMemo(
            () => ({ selectedClipIds: P, toggleClipSelection: ea, clearSelection: ei, isMultiSelectMode: er }),
            [P, ea, ei, er],
        );
    return (0, a.jsx)(j.f5, {
        value: O,
        children: (0, a.jsx)(M.Provider, {
            value: ec,
            children: (0, a.jsx)(o.N, {
                onClose: s,
                transitionState: T,
                ...D,
                children: (0, a.jsxs)("div", {
                    className: L.jT,
                    ref: W,
                    children: [
                        (0, a.jsxs)("div", {
                            className: i()(L.PD, "gallery" === F && L.vu),
                            "aria-hidden": "gallery" !== F,
                            children: [
                                (0, a.jsx)(w.A, { clipsByGame: G, filteredClips: V, favoriteClips: _, allClips: z }),
                                (0, a.jsxs)("div", {
                                    className: L.Qs,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: L.$Q,
                                            children: [
                                                (0, a.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: el,
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: L.$s,
                                                    children: [
                                                        er &&
                                                            (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(d.m, {
                                                                        text: S.intl.string(S.t.RDE0Sc),
                                                                        children: (0, a.jsx)(h.K, {
                                                                            onClick: eo,
                                                                            icon: p.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": S.intl.string(S.t.RDE0Sc),
                                                                            loading: $,
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(d.m, {
                                                                        text: S.intl.string(S.t.oyYWHE),
                                                                        children: (0, a.jsx)(h.K, {
                                                                            onClick: ed,
                                                                            icon: f.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": S.intl.string(S.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, a.jsx)(h.K, {
                                                            onClick: s,
                                                            icon: v.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": S.intl.string(S.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(E.A, {
                                            onEdit: en,
                                            channelId: t,
                                            filteredClips: et,
                                            totalClipCount: z.length,
                                            onClipClick: R,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: i()(L.jN, "editing" === F && L.vu),
                            "aria-hidden": "editing" !== F,
                            onTransitionEnd: () => {
                                "gallery" === F ? (Z(null), q(c.ip.HIDDEN)) : "editing" === F && q(c.ip.ENTERED);
                            },
                            children:
                                null != Q &&
                                (0, a.jsxs)(A.p, {
                                    clip: Q,
                                    modalContainerRef: W,
                                    children: [
                                        (0, a.jsx)(C.A, { clip: Q, transitionState: Y, onClose: es }),
                                        (0, a.jsx)(y.A, { channelId: t, clip: Q, onClose: es }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
