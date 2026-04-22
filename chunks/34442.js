i.d(t, { IU: () => v, dE: () => S });
var n = i(627968),
    l = i(64700),
    s = i(896170),
    a = i(765178),
    r = i(265872),
    d = i(305866),
    o = i(389723),
    c = i(821609),
    u = i(307301),
    g = i(939249),
    m = i(663341),
    h = i(383329),
    x = i(183555),
    p = i(735321),
    A = i(958338),
    j = i(985018),
    f = i(804981);
function I(e) {
    let { widgetType: t, widget: i, onAddGame: c, children: u, ...g } = e,
        m = l.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: I } = (0, x.NJ)(),
        [v, S] = l.useState(""),
        E = l.useRef(""),
        { options: y, matchSorterOptions: b } = (0, h.R)(),
        { applicationIds: w, onAddGame: N } = (0, A.S)(t),
        T = l.useCallback(
            (e) => {
                (0, p.ew)({ widgetType: t, game: { applicationId: e } }),
                    a.O.announce(j.intl.string(j.t.q0U3DE)),
                    I({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    w.includes(e) && N(e),
                    c?.();
            },
            [t, I, c, w, N],
        ),
        C = l.useMemo(() => {
            let e = new Map(
                    y.map((e) => [
                        String(e.value),
                        { id: String(e.value), value: String(e.value), label: e.label, disabled: m.has(e.value) },
                    ]),
                ),
                t = w.map((t) => e.get(t)).filter((e) => null != e && !e.disabled),
                i = [...e.values()].filter((e) => !t.includes(e));
            return [...t, ...i];
        }, [y, m, w]),
        R = l.useMemo(() => ({ ...b, threshold: s.Ht.rankings.CONTAINS, keys: ["label"] }), [b]),
        O = l.useCallback((e) => ("" === e.trim() ? C.length : (0, s.Ht)(C, e, R).length), [C, R]),
        k = l.useCallback(
            (e) => {
                let i = e.target.value;
                "" === v.trim() &&
                    "" !== i.trim() &&
                    I({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: O(i),
                    }),
                    S(i),
                    (E.current = i);
            },
            [v, I, t, O],
        );
    return (0, n.jsx)(r.Y, {
        ...g,
        onRequestOpen: () => {
            I({ action: "PRESS_ADD_GAME", widgetEdited: t }), S(""), (E.current = "");
        },
        onRequestClose: () => {
            I({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: E.current.trim().length,
                numResults: O(E.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(d.l, {
                className: f.C,
                "aria-label": j.intl.string(j.t.uqw8wK),
                children: (0, n.jsxs)(o.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (T(e), t());
                    },
                    options: C,
                    matchSorterOptions: R,
                    children: [
                        (0, n.jsx)(o.a3, {
                            label: j.intl.string(j.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: j.intl.string(j.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: k,
                        }),
                        (0, n.jsx)(o.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => u(e),
    });
}
function v(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(I, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(c.$, {
                buttonRef: s,
                variant: "secondary",
                size: "sm",
                icon: u.j,
                text: j.intl.string(j.t.SgTOtX),
                disabled: t,
                ...e,
            }),
    });
}
function S(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(I, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(g.D, {
                innerRef: t,
                className: f.c,
                "aria-label": j.intl.string(j.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(m.p, { color: "currentColor" }),
            }),
    });
}
