n.d(t, {
    IU: () => O,
    dE: () => j,
}),
    n(896048),
    n(733351);
var r = n(627968),
    l = n(64700),
    i = n(896170),
    a = n(389723),
    s = n(397927),
    o = n(383329),
    c = n(183555),
    u = n(735321),
    d = n(958338),
    f = n(985018),
    p = n(810824);

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}

function y(e) {
    let { widgetType: t, widget: n, onAddGame: y, children: O } = e,
        j = m(e, ["widgetType", "widget", "onAddGame", "children"]),
        x = l.useMemo(() => new Set(n.games.map((e) => e.applicationId)), [n.games]),
        { trackUserProfileEditAction: h } = (0, c.NJ)(),
        [v, A] = l.useState(""),
        w = l.useRef(""),
        { options: I, matchSorterOptions: P } = (0, o.R)(),
        { applicationIds: E, onAddGame: S } = (0, d.S)(t),
        T = l.useCallback(
            (e) => {
                (0, u.ew)({
                    widgetType: t,
                    game: {
                        applicationId: e,
                    },
                }),
                    s.ORC.announce(f.intl.string(f.t.q0U3DE)),
                    h({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: t,
                    }),
                    E.includes(e) && S(e),
                    null == y || y();
            },
            [t, h, y, E, S],
        ),
        _ = l.useMemo(() => {
            let e = new Map(
                    I.map((e) => [
                        String(e.value),
                        {
                            id: String(e.value),
                            value: String(e.value),
                            label: e.label,
                            disabled: x.has(e.value),
                        },
                    ]),
                ),
                t = E.map((t) => e.get(t)).filter((e) => null != e && !e.disabled),
                n = [...e.values()].filter((e) => !t.includes(e));
            return [...t, ...n];
        }, [I, x, E]),
        N = l.useMemo(
            () =>
                g(b({}, P), {
                    threshold: i.Ht.rankings.CONTAINS,
                    keys: ["label"],
                }),
            [P],
        ),
        D = l.useCallback((e) => ("" === e.trim() ? _.length : (0, i.Ht)(_, e, N).length), [_, N]),
        R = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === v.trim() &&
                    "" !== n.trim() &&
                    h({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: D(n),
                    }),
                    A(n),
                    (w.current = n);
            },
            [v, h, t, D],
        );
    return (0, r.jsx)(
        s.YNO,
        g(b({}, j), {
            onRequestOpen: () => {
                h({
                    action: "PRESS_ADD_GAME",
                    widgetEdited: t,
                }),
                    A(""),
                    (w.current = "");
            },
            onRequestClose: () => {
                h({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: w.current.trim().length,
                    numResults: D(w.current),
                });
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(s.lGe, {
                    className: p.C,
                    "aria-label": f.intl.string(f.t.uqw8wK),
                    children: (0, r.jsxs)(a.iS, {
                        selectionMode: "single",
                        value: null,
                        onSelectionChange: (e) => {
                            null != e && (T(e), t());
                        },
                        options: _,
                        matchSorterOptions: N,
                        children: [
                            (0, r.jsx)(a.a3, {
                                label: f.intl.string(f.t["5h0QOP"]),
                                hideLabel: !0,
                                placeholder: f.intl.string(f.t["5h0QOP"]),
                                autoFocus: !0,
                                onQueryChange: R,
                            }),
                            (0, r.jsx)(a.X2, {
                                maxVisibleItems: 7,
                            }),
                        ],
                    }),
                });
            },
            children: (e) => O(e),
        }),
    );
}

function O(e) {
    let { disabled: t } = e,
        n = m(e, ["disabled"]),
        i = l.useRef(null);
    return (0, r.jsx)(
        y,
        g(
            b(
                {
                    targetElementRef: i,
                    position: "bottom",
                    align: "center",
                },
                n,
            ),
            {
                children: (e) =>
                    (0, r.jsx)(
                        s.Button,
                        b(
                            {
                                buttonRef: i,
                                variant: "secondary",
                                size: "sm",
                                icon: s.j96,
                                text: f.intl.string(f.t.SgTOtX),
                                disabled: t,
                            },
                            e,
                        ),
                    ),
            },
        ),
    );
}

function j(e) {
    let t = l.useRef(null);
    return (0, r.jsx)(
        y,
        g(
            b(
                {
                    targetElementRef: t,
                    position: "right",
                    align: "top",
                },
                e,
            ),
            {
                children: (e) =>
                    (0, r.jsx)(
                        s.DUT,
                        g(
                            b(
                                {
                                    innerRef: t,
                                    className: p.c,
                                    "aria-label": f.intl.string(f.t.SgTOtX),
                                },
                                e,
                            ),
                            {
                                children: (0, r.jsx)(s.pa$, {
                                    color: "currentColor",
                                }),
                            },
                        ),
                    ),
            },
        ),
    );
}
