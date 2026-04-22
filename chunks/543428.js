l.d(t, { $: () => M, default: () => R });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
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
let M = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function R(e) {
    let { channelId: t, onClose: i, onClipClick: R, transitionState: T, ...D } = e,
        { analyticsLocations: O } = (0, j.Ay)(x.A.CLIPS_GALLERY),
        [P, U] = a.useState(new Set()),
        { clipsByGame: G, filteredClips: z, favoriteClips: V, allClips: _ } = (0, I.a)(),
        { onShareClick: H } = (0, N.A)(t),
        $ = (0, r.bG)([b.A], () => b.A.getExportingClipIds().length > 0),
        [B, F] = a.useState("gallery"),
        [K, Z] = a.useState(null),
        Q = (0, r.bG)([b.A], () => (null != K ? b.A.getClipById(K) : null), [K]),
        X = a.useRef(B);
    X.current = B;
    let [Y, q] = a.useState(c.ip.HIDDEN),
        W = a.useRef(null),
        J = (0, k.P)((e) => e.selectedGameId),
        ee = a.useMemo(
            () => (null == J || "favorites" === J ? null : (G.find((e) => e.applicationId === J) ?? null)),
            [J, G],
        ),
        et = a.useMemo(() => ("favorites" === J ? V : (ee?.filteredClips ?? z)), [J, ee, z, V]),
        el = a.useMemo(
            () => ("favorites" === J ? S.intl.string(S.t["9rlCk1"]) : (ee?.name ?? S.intl.string(S.t.dPVrEv))),
            [J, ee],
        ),
        en = a.useCallback((e) => {
            U((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        ea = a.useCallback((e) => {
            Z(e.id), F("editing"), g.A.useReducedMotion && q(c.ip.ENTERED);
        }, []),
        ei = a.useCallback(() => {
            g.A.useReducedMotion && Z(null), F("gallery");
        }, []);
    a.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === X.current && (e.stopPropagation(), ei());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [ei, i]);
    let es = a.useCallback(() => {
            U(new Set());
        }, []),
        er = P.size > 0,
        ed = a.useCallback(() => {
            let e = _.filter((e) => P.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                es(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [_, P, es]),
        eo = a.useCallback(async () => {
            let e = _.filter((e) => P.has(e.id));
            await H({ clips: e }), es();
        }, [_, P, H, es]),
        ec = a.useMemo(
            () => ({ selectedClipIds: P, toggleClipSelection: en, clearSelection: es, isMultiSelectMode: er }),
            [P, en, es, er],
        );
    return (0, n.jsx)(j.f5, {
        value: O,
        children: (0, n.jsx)(M.Provider, {
            value: ec,
            children: (0, n.jsx)(o.N, {
                onClose: i,
                transitionState: T,
                ...D,
                children: (0, n.jsxs)("div", {
                    className: L.jT,
                    ref: W,
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(L.PD, "gallery" === B && L.vu),
                            "aria-hidden": "gallery" !== B,
                            children: [
                                (0, n.jsx)(w.A, { clipsByGame: G, filteredClips: z, favoriteClips: V, allClips: _ }),
                                (0, n.jsxs)("div", {
                                    className: L.Qs,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: L.$Q,
                                            children: [
                                                (0, n.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: el,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: L.$s,
                                                    children: [
                                                        er &&
                                                            (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(d.m, {
                                                                        text: S.intl.string(S.t.RDE0Sc),
                                                                        children: (0, n.jsx)(h.K, {
                                                                            onClick: eo,
                                                                            icon: p.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": S.intl.string(S.t.RDE0Sc),
                                                                            loading: $,
                                                                        }),
                                                                    }),
                                                                    (0, n.jsx)(d.m, {
                                                                        text: S.intl.string(S.t.oyYWHE),
                                                                        children: (0, n.jsx)(h.K, {
                                                                            onClick: ed,
                                                                            icon: f.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": S.intl.string(S.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, n.jsx)(h.K, {
                                                            onClick: i,
                                                            icon: v.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": S.intl.string(S.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(E.A, {
                                            onEdit: ea,
                                            channelId: t,
                                            filteredClips: et,
                                            totalClipCount: _.length,
                                            onClipClick: R,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: s()(L.jN, "editing" === B && L.vu),
                            "aria-hidden": "editing" !== B,
                            onTransitionEnd: () => {
                                "gallery" === B ? (Z(null), q(c.ip.HIDDEN)) : "editing" === B && q(c.ip.ENTERED);
                            },
                            children:
                                null != Q &&
                                (0, n.jsxs)(A.p, {
                                    clip: Q,
                                    modalContainerRef: W,
                                    children: [
                                        (0, n.jsx)(C.A, { clip: Q, transitionState: Y, onClose: ei }),
                                        (0, n.jsx)(y.A, { channelId: t, clip: Q, onClose: ei }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
