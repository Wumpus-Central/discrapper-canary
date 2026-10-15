t.d(n, { A: () => D });
var l = t(477900),
    r = t(582128),
    s = t(503698),
    o = t.n(s),
    i = t(837381),
    a = t(27192),
    c = t(297264),
    d = t(939249),
    u = t(834730),
    x = t(957485),
    h = t(97808),
    m = t(778712),
    w = t(709066),
    S = t(915089),
    g = t(548118),
    E = t(495273),
    j = t(39255);
let R = function (e) {
    let {
        query: n,
        onQueryChange: t,
        onRemoveTag: r,
        onSelect: s,
        onSelectionChange: o,
        selectedSection: i,
        selectedRow: a,
        tags: c,
        sections: d,
        placeholder: u = "",
        focusAfterReady: x,
        isReady: h,
        "aria-labelledby": m,
        "aria-controls": w,
        ref: S,
    } = e;
    return (0, l.jsx)(j.A, {
        autoFocus: !0,
        maxHeight: 100,
        onQueryChange: t,
        onRemoveTag: r,
        selectedSection: i,
        selectedRow: a,
        onSelect: s,
        onSelectionChange: o,
        placeholder: 0 === c.length ? u : "",
        query: n,
        ref: S,
        size: j.A.Sizes.MEDIUM,
        tags: c,
        sections: d,
        focusAfterReady: x,
        isReady: h,
        inputProps: {
            "aria-labelledby": m,
            "aria-controls": w,
            "aria-expanded": !0,
            "aria-activedescendant": `user-row-${a}`,
        },
    });
};
var b = t(719366),
    v = t(105292),
    f = t(633846);
let y = (0, S.Ld)(),
    p = (0, S.Ld)();
function O(e) {
    return `${e.rowType}:${e.id}`;
}
let C = r.createContext({
    searchRef: { current: null },
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
function k() {
    return r.useContext(C);
}
let T = [];
function I(e) {
    let { roles: n = T, members: t = T, users: l = T, guilds: s = T } = e;
    return r.useMemo(() => [n.length, t.length, l.length, s.length], [n.length, t.length, l.length, s.length]);
}
let L = (e) => {
    let { title: n } = e;
    return (0, l.jsx)(c.D, { variant: "heading-sm/semibold", className: o()(f.Gf, f.iw), children: n }, n);
};
function M(e) {
    let { id: n, sectionIndex: t, rowIndex: s, rows: c, children: x, showCheckbox: h, showRowLabel: m } = e,
        w = (0, i.rm)(n),
        {
            selectedSection: S,
            selectedRow: g,
            onSelectionChange: j,
            pendingAdditions: R,
            onRowClick: v,
            isAtMaxPendingRows: y,
        } = k(),
        p = c[s],
        C = O(p),
        T = p.disabled || C in R,
        I = p.disabled || (!T && y);
    return (0, r.createElement)(d.D, {
        ...w,
        id: n,
        key: C,
        role: "option",
        className: o()(f.d, { [f.A5]: S === t && g === s }),
        onClick: (e) => {
            I || (e.preventDefault(), p.rowType !== b.T6.EMPTY_STATE && v(p));
        },
        onMouseEnter: () => j(t, s, !1),
        "aria-disabled": I,
        "aria-selected": T,
        "aria-setsize": c.length,
        "aria-posinset": s + 1,
        children: [
            h
                ? (0, l.jsx)(a.Kj, {
                      className: f.kv,
                      displayOnly: !0,
                      size: 18,
                      value: T,
                      type: a.Or.INVERTED,
                      disabled: I,
                      children: (0, l.jsx)("div", { className: f.fw, children: x }),
                  })
                : (0, l.jsx)("div", { className: f.fw, children: x }),
            m ? (0, l.jsx)(u.E, { color: "text-muted", variant: "text-xs/normal", children: E.vV(p.rowType) }) : null,
        ],
    });
}
let A = (e) => {
        let { index: n, disabledText: t } = e,
            { roles: r } = k(),
            s = r[n];
        return null == s
            ? null
            : (0, l.jsxs)(M, {
                  id: `roles-row-${n}`,
                  sectionIndex: b.oO.ROLES,
                  rowIndex: n,
                  rows: r,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)("div", {
                          className: o()(f.iw, f.Hu),
                          children: (0, l.jsx)(x.i, { size: "custom", color: s.colorString, height: 20 }),
                      }),
                      (0, l.jsxs)("div", {
                          className: f.xZ,
                          children: [
                              (0, l.jsx)(u.E, {
                                  variant: "text-sm/medium",
                                  color: s.rowType === b.T6.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: s.name,
                              }),
                              s.disabled && null != t
                                  ? (0, l.jsx)(u.E, { color: "text-default", variant: "text-xs/normal", children: t })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    N = (e) => {
        let { index: n } = e,
            { members: t } = k(),
            r = t[n];
        return null == r
            ? null
            : (0, l.jsxs)(M, {
                  id: `members-row-${n}`,
                  sectionIndex: b.oO.MEMBERS,
                  rowIndex: n,
                  rows: t,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(h.eu, { src: r.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, l.jsx)(u.E, { className: f.xZ, variant: "text-sm/normal", children: r.name }),
                      (0, l.jsx)(u.E, {
                          color: "text-muted",
                          className: f.Gq,
                          variant: "text-sm/normal",
                          "aria-hidden": !0,
                          children: r.username,
                      }),
                      r.bot && (0, l.jsx)(w.A, { verified: r.verifiedBot }),
                  ],
              });
    },
    U = (e) => {
        let { index: n, disabledText: t } = e,
            { users: r } = k(),
            s = r[n];
        return null == s
            ? null
            : (0, l.jsxs)(M, {
                  id: `users-row-${n}`,
                  sectionIndex: b.oO.USERS,
                  rowIndex: n,
                  rows: r,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(h.eu, { src: s.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, l.jsxs)("div", {
                          className: f.xZ,
                          children: [
                              (0, l.jsx)(u.E, { variant: "text-sm/normal", children: s.name }),
                              s.disabled && null != t
                                  ? (0, l.jsx)(u.E, { color: "text-default", variant: "text-xs/normal", children: t })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    _ = (e) => {
        let { index: n } = e,
            { guilds: t } = k(),
            r = t[n];
        return null == r
            ? null
            : (0, l.jsxs)(M, {
                  id: `guilds-row-${n}`,
                  sectionIndex: b.oO.GUILDS,
                  rowIndex: n,
                  rows: t,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, l.jsx)(g.Ay, { guild: r.guild, active: !0, size: g.Ay.Sizes.SMALLER }),
                      (0, l.jsx)("div", {
                          className: f.xZ,
                          children: (0, l.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: r.name,
                          }),
                      }),
                  ],
              });
    },
    D = {
        SECTION_HEIGHT: 32,
        ROW_HEIGHT: 40,
        Provider: function (e) {
            let {
                    children: n,
                    listRef: t,
                    query: s,
                    setQuery: o,
                    pendingAdditions: i,
                    setPendingAdditions: a,
                    roles: c = T,
                    members: d = T,
                    users: u = T,
                    guilds: x = T,
                    getRichTag: h,
                    maxPendingRows: m,
                } = e,
                w = r.useRef(null),
                [S, g] = r.useState({ section: 0, row: -1 });
            r.useEffect(() => {
                w.current?.focus();
            }, []);
            let E = r.useCallback(
                    function (e, n) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        (g((t) => (t.section === e && t.row === n ? t : { section: e ?? 0, row: n ?? -1 })),
                            l && t?.current?.scrollToIndex({ section: e ?? 0, row: n ?? 0, padding: 8 }));
                    },
                    [t],
                ),
                j = r.useCallback(
                    (e) => {
                        let n = O(e);
                        (a((t) => {
                            if (n in t) {
                                let { [n]: e, ...l } = t;
                                return l;
                            }
                            {
                                let l = h(e);
                                if (null != l) {
                                    let r = { ...t };
                                    return ((r[n] = { display: l, row: e }), r);
                                }
                            }
                            return t;
                        }),
                            o(""),
                            w.current?.focus());
                    },
                    [h, a, o],
                ),
                R = r.useCallback(
                    (e, n) => {
                        if (null == n) return;
                        o("");
                        let t = [];
                        switch (e) {
                            case b.oO.ROLES:
                                t = c;
                                break;
                            case b.oO.MEMBERS:
                                t = d;
                                break;
                            case b.oO.USERS:
                                t = u;
                                break;
                            case b.oO.GUILDS:
                                t = x;
                        }
                        let l = t[n];
                        null != l && l.rowType !== b.T6.EMPTY_STATE && j(l);
                    },
                    [x, j, d, c, o, u],
                ),
                v = r.useCallback(
                    (e) => {
                        a((n) => {
                            let { [e]: t, ...l } = n;
                            return l;
                        });
                    },
                    [a],
                ),
                f = null != m && Object.keys(i).length >= m,
                y = r.useMemo(
                    () => ({
                        searchRef: w,
                        selectedSection: S.section,
                        selectedRow: S.row,
                        roles: c,
                        members: d,
                        users: u,
                        guilds: x,
                        pendingAdditions: i,
                        isAtMaxPendingRows: f,
                        onSelectionChange: E,
                        onRowClick: j,
                        query: s,
                        onQueryChange: o,
                        onQueryClick: R,
                        onRemovePendingAddition: v,
                    }),
                    [x, R, v, j, E, f, d, i, s, c, S.row, S.section, o, u],
                );
            return (0, l.jsx)(C.Provider, { value: y, children: n });
        },
        SearchBox: (e) => {
            let { placeholderText: n, focusSearchAfterReady: t, isReady: s } = e,
                {
                    searchRef: o,
                    selectedSection: i,
                    selectedRow: a,
                    pendingAdditions: c,
                    query: d,
                    onSelectionChange: u,
                    onQueryChange: x,
                    onQueryClick: h,
                    onRemovePendingAddition: m,
                    roles: w,
                    members: S,
                    users: g,
                    guilds: E,
                } = k(),
                { keys: j, tags: b } = r.useMemo(() => {
                    let e = Object.keys(c),
                        n = e.map((e) => c[e].display);
                    return { keys: e, tags: n };
                }, [c]),
                v = I({ roles: w, members: S, users: g, guilds: E });
            return (0, l.jsx)(R, {
                ref: o,
                query: d,
                onQueryChange: x,
                selectedSection: i,
                selectedRow: a,
                onSelectionChange: u,
                onSelect: h,
                tags: b,
                sections: v,
                onRemoveTag: (e) => m(j[e]),
                placeholder: n,
                focusAfterReady: t,
                isReady: s,
                "aria-labelledby": y,
                "aria-controls": p,
            });
        },
        renderSection: (e) => {
            let { section: n } = e;
            switch (n) {
                case b.oO.ROLES:
                    return (0, l.jsx)(L, { title: v.intl.string(v.t["LPJmL/"]) });
                case b.oO.MEMBERS:
                    return (0, l.jsx)(L, { title: v.intl.string(v.t["9Oq93m"]) });
                case b.oO.USERS:
                    return (0, l.jsx)(L, { title: v.intl.string(v.t.nqDUBX) });
                case b.oO.GUILDS:
                    return (0, l.jsx)(L, { title: v.intl.string(v.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: n, row: t } = e;
            switch (n) {
                case b.oO.ROLES:
                    return (0, l.jsx)(A, { index: t });
                case b.oO.MEMBERS:
                    return (0, l.jsx)(N, { index: t });
                case b.oO.USERS:
                    return (0, l.jsx)(U, { index: t });
                case b.oO.GUILDS:
                    return (0, l.jsx)(_, { index: t });
            }
            return null;
        },
        useSections: I,
    };
