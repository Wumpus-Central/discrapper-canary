n.d(t, {
    IU: () => y,
    dE: () => O,
}),
    n(896048),
    n(733351);
var r = n(627968),
    l = n(64700),
    i = n(896170),
    a = n(397927),
    o = n(383329),
    s = n(183555),
    c = n(735321),
    u = n(958338),
    d = n(985018),
    f = n(810824);

function p(e) {
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

function b(e) {
    let { widgetType: t, widget: n, onAddGame: b, children: y } = e,
        O = m(e, ["widgetType", "widget", "onAddGame", "children"]),
        j = l.useMemo(() => new Set(n.games.map((e) => e.applicationId)), [n.games]),
        { trackUserProfileEditAction: h } = (0, s.NJ)(),
        [x, v] = l.useState(""),
        _ = l.useRef(""),
        { options: I, matchSorterOptions: A } = (0, o.R)(),
        { applicationIds: w, onAddGame: P } = (0, u.S)(t),
        E = l.useCallback(
            (e) => {
                (0, c.ew)({
                    widgetType: t,
                    game: {
                        applicationId: e,
                    },
                }),
                    a.ORC.announce(d.intl.string(d.t.q0U3DE)),
                    h({
                        action: "GAME_ADDED",
                        gameId: e,
                        widgetEdited: t,
                    }),
                    w.includes(e) && P(e),
                    null == b || b();
            },
            [t, h, b, w, P],
        ),
        S = l.useMemo(() => {
            let e = new Map(
                    I.map((e) => [
                        String(e.value),
                        {
                            id: String(e.value),
                            value: String(e.value),
                            label: e.label,
                            disabled: j.has(e.value),
                        },
                    ]),
                ),
                t = w.map((t) => e.get(t)).filter((e) => null != e && !e.disabled),
                n = [...e.values()].filter((e) => !t.includes(e));
            return [...t, ...n];
        }, [I, j, w]),
        T = l.useMemo(
            () =>
                g(p({}, A), {
                    threshold: i.Ht.rankings.CONTAINS,
                    keys: ["label"],
                }),
            [A],
        ),
        N = l.useCallback((e) => ("" === e.trim() ? S.length : (0, i.Ht)(S, e, T).length), [S, T]),
        C = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === x.trim() &&
                    "" !== n.trim() &&
                    h({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: N(n),
                    }),
                    v(n),
                    (_.current = n);
            },
            [x, h, t, N],
        );
    return (0, r.jsx)(
        a.YNO,
        g(p({}, O), {
            onRequestOpen: () => {
                h({
                    action: "PRESS_ADD_GAME",
                    widgetEdited: t,
                }),
                    v(""),
                    (_.current = "");
            },
            onRequestClose: () => {
                h({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: _.current.trim().length,
                    numResults: N(_.current),
                });
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(a.lGe, {
                    className: f.C,
                    "aria-label": d.intl.string(d.t.uqw8wK),
                    children: (0, r.jsxs)(a.iS7, {
                        selectionMode: "single",
                        value: null,
                        onSelectionChange: (e) => {
                            null != e && (E(e), t());
                        },
                        options: S,
                        matchSorterOptions: T,
                        children: [
                            (0, r.jsx)(a.a32, {
                                label: d.intl.string(d.t["5h0QOP"]),
                                hideLabel: !0,
                                placeholder: d.intl.string(d.t["5h0QOP"]),
                                autoFocus: !0,
                                onQueryChange: C,
                            }),
                            (0, r.jsx)(a.X2W, {
                                maxVisibleItems: 7,
                            }),
                        ],
                    }),
                });
            },
            children: (e) => y(e),
        }),
    );
}

function y(e) {
    let { disabled: t } = e,
        n = m(e, ["disabled"]),
        i = l.useRef(null);
    return (0, r.jsx)(
        b,
        g(
            p(
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
                        a.Button,
                        p(
                            {
                                buttonRef: i,
                                variant: "secondary",
                                size: "sm",
                                icon: a.j96,
                                text: d.intl.string(d.t.SgTOtX),
                                disabled: t,
                            },
                            e,
                        ),
                    ),
            },
        ),
    );
}

function O(e) {
    let t = l.useRef(null);
    return (0, r.jsx)(
        b,
        g(
            p(
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
                        a.DUT,
                        g(
                            p(
                                {
                                    innerRef: t,
                                    className: f.c,
                                    "aria-label": d.intl.string(d.t.SgTOtX),
                                },
                                e,
                            ),
                            {
                                children: (0, r.jsx)(a.pa$, {
                                    color: "currentColor",
                                }),
                            },
                        ),
                    ),
            },
        ),
    );
}
