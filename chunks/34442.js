n.d(t, { IU: () => x, dE: () => f });
var i = n(627968),
    l = n(64700),
    a = n(896170),
    r = n(397927),
    s = n(383329),
    o = n(183555),
    d = n(735321),
    c = n(958338),
    u = n(985018),
    g = n(810824);
function m(e) {
    let { widgetType: t, widget: n, onAddGame: m, children: x, ...f } = e,
        h = l.useMemo(() => new Set(n.games.map((e) => e.applicationId)), [n.games]),
        { trackUserProfileEditAction: p } = (0, o.NJ)(),
        [_, A] = l.useState(""),
        I = l.useRef(""),
        { options: j, matchSorterOptions: v } = (0, s.R)(),
        { applicationIds: T, onAddGame: E } = (0, c.S)(t),
        b = l.useCallback(
            (e) => {
                (0, d.ew)({ widgetType: t, game: { applicationId: e } }),
                    r.ORC.announce(u.intl.string(u.t.q0U3DE)),
                    p({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    T.includes(e) && E(e),
                    m?.();
            },
            [t, p, m, T, E],
        ),
        y = l.useMemo(() => {
            let e = new Map(
                    j.map((e) => [
                        String(e.value),
                        { id: String(e.value), value: String(e.value), label: e.label, disabled: h.has(e.value) },
                    ]),
                ),
                t = T.map((t) => e.get(t)).filter((e) => null != e && !e.disabled),
                n = [...e.values()].filter((e) => !t.includes(e));
            return [...t, ...n];
        }, [j, h, T]),
        C = l.useMemo(() => ({ ...v, threshold: a.Ht.rankings.CONTAINS, keys: ["label"] }), [v]),
        N = l.useCallback((e) => ("" === e.trim() ? y.length : (0, a.Ht)(y, e, C).length), [y, C]),
        S = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === _.trim() &&
                    "" !== n.trim() &&
                    p({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: N(n),
                    }),
                    A(n),
                    (I.current = n);
            },
            [_, p, t, N],
        );
    return (0, i.jsx)(r.YNO, {
        ...f,
        onRequestOpen: () => {
            p({ action: "PRESS_ADD_GAME", widgetEdited: t }), A(""), (I.current = "");
        },
        onRequestClose: () => {
            p({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: I.current.trim().length,
                numResults: N(I.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(r.lGe, {
                className: g.C,
                "aria-label": u.intl.string(u.t.uqw8wK),
                children: (0, i.jsxs)(r.iS7, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (b(e), t());
                    },
                    options: y,
                    matchSorterOptions: C,
                    children: [
                        (0, i.jsx)(r.a32, {
                            label: u.intl.string(u.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: u.intl.string(u.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: S,
                        }),
                        (0, i.jsx)(r.X2W, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => x(e),
    });
}
function x(e) {
    let { disabled: t, ...n } = e,
        a = l.useRef(null);
    return (0, i.jsx)(m, {
        targetElementRef: a,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(r.Button, {
                buttonRef: a,
                variant: "secondary",
                size: "sm",
                icon: r.j96,
                text: u.intl.string(u.t.SgTOtX),
                disabled: t,
                ...e,
            }),
    });
}
function f(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(m, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(r.DUT, {
                innerRef: t,
                className: g.c,
                "aria-label": u.intl.string(u.t.SgTOtX),
                ...e,
                children: (0, i.jsx)(r.pa$, { color: "currentColor" }),
            }),
    });
}
