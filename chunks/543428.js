l.d(t, { $: () => E, default: () => k });
var a = l(627968),
    n = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(311907),
    o = l(990078),
    d = l(521489),
    c = l(397927),
    u = l(775602),
    m = l(793574),
    h = l(688810),
    p = l(274372),
    x = l(247181),
    f = l(309777),
    g = l(429364),
    v = l(794905),
    j = l(219480),
    b = l(650995),
    C = l(792852),
    y = l(409067),
    N = l(985018),
    A = l(702351);
let E = n.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function k(e) {
    let { channelId: t, onClose: i, onClipClick: k, transitionState: I, ...S } = e,
        { analyticsLocations: w } = (0, h.Ay)(m.A.CLIPS_GALLERY),
        [L, M] = n.useState(new Set()),
        { clipsByGame: T, filteredClips: R, favoriteClips: D, allClips: O } = (0, y.a)(),
        { onShareClick: P } = (0, v.A)(t),
        U = (0, r.bG)([p.A], () => p.A.getExportingClipIds().length > 0),
        [G, V] = n.useState("gallery"),
        [H, $] = n.useState(null),
        [z, _] = n.useState(c.ip4.HIDDEN),
        K = n.useRef(null),
        F = (0, C.P)((e) => e.selectedGameId),
        B = n.useMemo(
            () => (null == F || "favorites" === F ? null : (T.find((e) => e.applicationId === F) ?? null)),
            [F, T],
        ),
        Y = n.useMemo(() => ("favorites" === F ? D : (B?.filteredClips ?? R)), [F, B, R, D]),
        X = n.useMemo(
            () => ("favorites" === F ? N.intl.string(N.t["9rlCk1"]) : (B?.name ?? N.intl.string(N.t.dPVrEv))),
            [F, B],
        ),
        Q = n.useCallback((e) => {
            M((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        q = n.useCallback((e) => {
            $(e), V("editing"), u.A.useReducedMotion && _(c.ip4.ENTERED);
        }, []),
        Z = n.useCallback(() => {
            u.A.useReducedMotion && $(null), V("gallery");
        }, []),
        W = n.useCallback(() => {
            M(new Set());
        }, []),
        J = L.size > 0,
        ee = n.useCallback(() => {
            let e = O.filter((e) => L.has(e.id));
            (0, c.mMO)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, a.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                W(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [O, L, W]),
        et = n.useCallback(async () => {
            let e = O.filter((e) => L.has(e.id));
            await P({ clips: e }), W();
        }, [O, L, P, W]),
        el = n.useMemo(
            () => ({ selectedClipIds: L, toggleClipSelection: Q, clearSelection: W, isMultiSelectMode: J }),
            [L, Q, W, J],
        );
    return (0, a.jsx)(h.f5, {
        value: w,
        children: (0, a.jsx)(E.Provider, {
            value: el,
            children: (0, a.jsx)(d.N, {
                onClose: i,
                transitionState: I,
                ...S,
                children: (0, a.jsxs)("div", {
                    className: A.jT,
                    ref: K,
                    children: [
                        (0, a.jsxs)("div", {
                            className: s()(A.PD, "gallery" === G && A.vu),
                            children: [
                                (0, a.jsx)(b.A, { clipsByGame: T, filteredClips: R, favoriteClips: D, allClips: O }),
                                (0, a.jsxs)("div", {
                                    className: A.Qs,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: A.$Q,
                                            children: [
                                                (0, a.jsx)(c.Heading, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: X,
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: A.$s,
                                                    children: [
                                                        J &&
                                                            (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(o.m, {
                                                                        text: N.intl.string(N.t.RDE0Sc),
                                                                        children: (0, a.jsx)(c.K0, {
                                                                            onClick: et,
                                                                            icon: c.liv,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": N.intl.string(N.t.RDE0Sc),
                                                                            loading: U,
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(o.m, {
                                                                        text: N.intl.string(N.t.oyYWHE),
                                                                        children: (0, a.jsx)(c.K0, {
                                                                            onClick: ee,
                                                                            icon: c.ucK,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": N.intl.string(N.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, a.jsx)(c.K0, {
                                                            onClick: i,
                                                            icon: c.d$L,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": N.intl.string(N.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(j.A, {
                                            onEdit: q,
                                            channelId: t,
                                            filteredClips: Y,
                                            totalClipCount: O.length,
                                            onClipClick: k,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: s()(A.jN, "editing" === G && A.vu),
                            onTransitionEnd: () => {
                                "gallery" === G ? ($(null), _(c.ip4.HIDDEN)) : "editing" === G && _(c.ip4.ENTERED);
                            },
                            children:
                                null != H &&
                                (0, a.jsxs)(g.p, {
                                    clip: H,
                                    modalContainerRef: K,
                                    children: [
                                        (0, a.jsx)(x.A, { clip: H, transitionState: z, onClose: Z }),
                                        (0, a.jsx)(f.A, { channelId: t, clip: H, onClose: i }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
