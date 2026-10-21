t.d(n, { A: () => _ });
var r = t(477900),
    l = t(582128),
    s = t(503698),
    i = t.n(s),
    o = t(837381),
    a = t(189213),
    c = t(27192),
    d = t(297264),
    u = t(939249),
    x = t(834730),
    h = t(957485),
    w = t(97808),
    m = t(778712),
    S = t(928039),
    g = t(709066),
    E = t(915089),
    R = t(548118),
    j = t(495273),
    v = t(39255);
let b = function (e) {
    let {
        query: n,
        onQueryChange: t,
        onRemoveTag: l,
        onSelect: s,
        onSelectionChange: i,
        selectedSection: o,
        selectedRow: a,
        tags: c,
        sections: d,
        placeholder: u = "",
        focusAfterReady: x,
        isReady: h,
        "aria-labelledby": w,
        "aria-controls": m,
        "aria-activedescendant": S,
        ref: g,
    } = e;
    return (0, r.jsx)(v.A, {
        autoFocus: !0,
        maxHeight: 100,
        onQueryChange: t,
        onRemoveTag: l,
        selectedSection: o,
        selectedRow: a,
        onSelect: s,
        onSelectionChange: i,
        placeholder: 0 === c.length ? u : "",
        query: n,
        ref: g,
        size: v.A.Sizes.MEDIUM,
        tags: c,
        sections: d,
        focusAfterReady: x,
        isReady: h,
        inputProps: { "aria-labelledby": w, "aria-controls": m, "aria-expanded": !0, "aria-activedescendant": S },
    });
};
var f = t(719366),
    y = t(105292),
    O = t(633846);
let p = (0, E.Ld)(),
    C = (0, E.Ld)();
function k(e) {
    return `${e.rowType}:${e.id}`;
}
let T = l.createContext({
    searchRef: { current: null },
    listRef: { current: null },
    selectedSection: 0,
    selectedRow: -1,
    roles: [],
    members: [],
    users: [],
    guilds: [],
    pendingAdditions: {},
    isAtMaxPendingRows: !1,
    onSelectionChange: () => {},
    onRowClick: () => {},
    query: "",
    onQueryChange: () => {},
    onQueryClick: () => {},
    onRemovePendingAddition: () => {},
});
function M() {
    return l.useContext(T);
}
let I = [];
function L(e) {
    let { roles: n = I, members: t = I, users: r = I, guilds: s = I } = e;
    return l.useMemo(() => [n.length, t.length, r.length, s.length], [n.length, t.length, r.length, s.length]);
}
let A = (e) => {
    let { title: n } = e;
    return (0, r.jsx)(d.D, { variant: "heading-sm/semibold", className: i()(O.Gf, O.iw), children: n }, n);
};
function N(e) {
    let { id: n, sectionIndex: t, rowIndex: s, rows: a, children: d, showCheckbox: h, showRowLabel: w } = e,
        m = (0, o.rm)(n),
        {
            selectedSection: S,
            selectedRow: g,
            onSelectionChange: E,
            pendingAdditions: R,
            onRowClick: v,
            isAtMaxPendingRows: b,
        } = M(),
        y = a[s],
        p = k(y),
        C = y.disabled || p in R,
        T = y.disabled || (!C && b);
    return (0, l.createElement)(u.D, {
        ...m,
        id: n,
        key: p,
        role: "option",
        className: i()(O.d, { [O.A5]: S === t && g === s }),
        onClick: (e) => {
            T || (e.preventDefault(), y.rowType !== f.T6.EMPTY_STATE && v(y, 0 !== e.detail));
        },
        onMouseEnter: () => E(t, s, !1),
        "aria-disabled": T,
        "aria-selected": C,
        "aria-setsize": a.length,
        "aria-posinset": s + 1,
        children: [
            h
                ? (0, r.jsx)(c.Kj, {
                      className: O.kv,
                      displayOnly: !0,
                      size: 18,
                      value: C,
                      type: c.Or.INVERTED,
                      disabled: T,
                      children: (0, r.jsx)("div", { className: O.fw, children: d }),
                  })
                : (0, r.jsx)("div", { className: O.fw, children: d }),
            w ? (0, r.jsx)(x.E, { color: "text-muted", variant: "text-xs/normal", children: j.vV(y.rowType) }) : null,
        ],
    });
}
let U = (e) => {
        let { index: n, disabledText: t } = e,
            { roles: l } = M(),
            s = l[n];
        return null == s
            ? null
            : (0, r.jsxs)(N, {
                  id: `roles-row-${n}`,
                  sectionIndex: f.oO.ROLES,
                  rowIndex: n,
                  rows: l,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)("div", {
                          className: i()(O.iw, O.Hu),
                          children: (0, r.jsx)(h.i, { size: "custom", color: s.colorString, height: 20 }),
                      }),
                      (0, r.jsxs)("div", {
                          className: O.xZ,
                          children: [
                              (0, r.jsx)(x.E, {
                                  variant: "text-sm/medium",
                                  color: s.rowType === f.T6.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: s.name,
                              }),
                              s.disabled && null != t
                                  ? (0, r.jsx)(x.E, { color: "text-default", variant: "text-xs/normal", children: t })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    D = (e) => {
        let { index: n } = e,
            { members: t } = M(),
            l = t[n];
        return null == l
            ? null
            : (0, r.jsxs)(N, {
                  id: `members-row-${n}`,
                  sectionIndex: f.oO.MEMBERS,
                  rowIndex: n,
                  rows: t,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(w.eu, { src: l.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, r.jsx)(x.E, { className: O.xZ, variant: "text-sm/normal", children: l.name }),
                      (0, r.jsx)(x.E, {
                          color: "text-muted",
                          className: O.Gq,
                          variant: "text-sm/normal",
                          "aria-hidden": !0,
                          children: l.username,
                      }),
                      l.bot && (0, r.jsx)(g.A, { verified: l.verifiedBot }),
                  ],
              });
    },
    P = (e) => {
        let { index: n, disabledText: t } = e,
            { users: l } = M(),
            s = l[n];
        return null == s
            ? null
            : (0, r.jsxs)(N, {
                  id: `users-row-${n}`,
                  sectionIndex: f.oO.USERS,
                  rowIndex: n,
                  rows: l,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(w.eu, { src: s.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, r.jsxs)("div", {
                          className: O.xZ,
                          children: [
                              (0, r.jsx)(x.E, { variant: "text-sm/normal", children: s.name }),
                              s.disabled && null != t
                                  ? (0, r.jsx)(x.E, { color: "text-default", variant: "text-xs/normal", children: t })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    $ = (e) => {
        let { index: n } = e,
            { guilds: t } = M(),
            l = t[n];
        return null == l
            ? null
            : (0, r.jsxs)(N, {
                  id: `guilds-row-${n}`,
                  sectionIndex: f.oO.GUILDS,
                  rowIndex: n,
                  rows: t,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(R.Ay, { guild: l.guild, active: !0, size: R.Ay.Sizes.SMALLER }),
                      (0, r.jsx)("div", {
                          className: O.xZ,
                          children: (0, r.jsx)(x.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: l.name,
                          }),
                      }),
                  ],
              });
    },
    _ = {
        SECTION_HEIGHT: 32,
        ROW_HEIGHT: 40,
        Provider: function (e) {
            let {
                    children: n,
                    listRef: t,
                    query: s,
                    setQuery: i,
                    pendingAdditions: a,
                    setPendingAdditions: c,
                    roles: d = I,
                    members: u = I,
                    users: x = I,
                    guilds: h = I,
                    getRichTag: w,
                    maxPendingRows: m,
                } = e,
                g = l.useRef(null),
                [E, R] = l.useState({ section: 0, row: -1 }),
                j = (0, S.A)("audience-selector-list", t);
            l.useEffect(() => {
                g.current?.focus();
            }, []);
            let v = l.useCallback(
                    function (e, n) {
                        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        (R((t) => (t.section === e && t.row === n ? t : { section: e ?? 0, row: n ?? -1 })),
                            r && t.current?.scrollToIndex({ section: e ?? 0, row: n ?? 0, padding: 8 }));
                    },
                    [t],
                ),
                b = l.useCallback(
                    function (e) {
                        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            t = k(e);
                        (c((n) => {
                            if (t in n) {
                                let { [t]: e, ...r } = n;
                                return r;
                            }
                            {
                                let r = w(e);
                                if (null != r) {
                                    let l = { ...n };
                                    return ((l[t] = { display: r, row: e }), l);
                                }
                            }
                            return n;
                        }),
                            n && (i(""), g.current?.focus()));
                    },
                    [w, c, i],
                ),
                y = l.useCallback(
                    (e, n) => {
                        if (null == n) return;
                        i("");
                        let t = [];
                        switch (e) {
                            case f.oO.ROLES:
                                t = d;
                                break;
                            case f.oO.MEMBERS:
                                t = u;
                                break;
                            case f.oO.USERS:
                                t = x;
                                break;
                            case f.oO.GUILDS:
                                t = h;
                        }
                        let r = t[n];
                        null != r && r.rowType !== f.T6.EMPTY_STATE && b(r);
                    },
                    [h, b, u, d, i, x],
                ),
                O = l.useCallback(
                    (e) => {
                        c((n) => {
                            let { [e]: t, ...r } = n;
                            return r;
                        });
                    },
                    [c],
                ),
                p = null != m && Object.keys(a).length >= m,
                C = l.useMemo(
                    () => ({
                        searchRef: g,
                        listRef: t,
                        selectedSection: E.section,
                        selectedRow: E.row,
                        roles: d,
                        members: u,
                        users: x,
                        guilds: h,
                        pendingAdditions: a,
                        isAtMaxPendingRows: p,
                        onSelectionChange: v,
                        onRowClick: b,
                        query: s,
                        onQueryChange: i,
                        onQueryClick: y,
                        onRemovePendingAddition: O,
                    }),
                    [h, y, O, b, v, p, t, u, a, s, d, E.row, E.section, i, x],
                );
            return (0, r.jsx)(T.Provider, { value: C, children: (0, r.jsx)(o.hD, { navigator: j, children: n }) });
        },
        Modal: function (e) {
            let { listProps: n, ...t } = e,
                { listRef: l } = M(),
                { ref: s, role: i, ...c } = (0, o.$y)();
            return (0, r.jsx)(a.a, {
                ...t,
                listProps: {
                    ...n,
                    ...c,
                    ref: (e) => {
                        ((l.current = e), (s.current = e?.getScrollerNode() ?? null));
                    },
                    innerId: C,
                    innerAriaMultiselectable: !0,
                },
            });
        },
        SearchBox: (e) => {
            let { placeholderText: n, focusSearchAfterReady: t, isReady: s } = e,
                {
                    searchRef: i,
                    selectedSection: o,
                    selectedRow: a,
                    pendingAdditions: c,
                    query: d,
                    onSelectionChange: u,
                    onQueryChange: x,
                    onQueryClick: h,
                    onRemovePendingAddition: w,
                    roles: m,
                    members: S,
                    users: g,
                    guilds: E,
                } = M(),
                { keys: R, tags: j } = l.useMemo(() => {
                    let e = Object.keys(c),
                        n = e.map((e) => c[e].display);
                    return { keys: e, tags: n };
                }, [c]),
                v = L({ roles: m, members: S, users: g, guilds: E });
            return (0, r.jsx)(b, {
                ref: i,
                query: d,
                onQueryChange: x,
                selectedSection: o,
                selectedRow: a,
                onSelectionChange: u,
                onSelect: h,
                tags: j,
                sections: v,
                onRemoveTag: (e) => w(R[e]),
                placeholder: n,
                focusAfterReady: t,
                isReady: s,
                "aria-labelledby": p,
                "aria-controls": C,
                "aria-activedescendant":
                    a >= 0 && a < v[o]
                        ? (function (e, n) {
                              switch (e) {
                                  case f.oO.ROLES:
                                      return `roles-row-${n}`;
                                  case f.oO.MEMBERS:
                                      return `members-row-${n}`;
                                  case f.oO.USERS:
                                      return `users-row-${n}`;
                                  case f.oO.GUILDS:
                                      return `guilds-row-${n}`;
                              }
                          })(o, a)
                        : void 0,
            });
        },
        renderSection: (e) => {
            let { section: n } = e;
            switch (n) {
                case f.oO.ROLES:
                    return (0, r.jsx)(A, { title: y.intl.string(y.t["LPJmL/"]) });
                case f.oO.MEMBERS:
                    return (0, r.jsx)(A, { title: y.intl.string(y.t["9Oq93m"]) });
                case f.oO.USERS:
                    return (0, r.jsx)(A, { title: y.intl.string(y.t.nqDUBX) });
                case f.oO.GUILDS:
                    return (0, r.jsx)(A, { title: y.intl.string(y.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: n, row: t } = e;
            switch (n) {
                case f.oO.ROLES:
                    return (0, r.jsx)(U, { index: t });
                case f.oO.MEMBERS:
                    return (0, r.jsx)(D, { index: t });
                case f.oO.USERS:
                    return (0, r.jsx)(P, { index: t });
                case f.oO.GUILDS:
                    return (0, r.jsx)($, { index: t });
            }
            return null;
        },
        useSections: L,
    };
