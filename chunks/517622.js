t.d(n, { A: () => D });
var r = t(627968),
    l = t(64700),
    s = t(503698),
    o = t.n(s),
    i = t(837381),
    a = t(27192),
    c = t(534514),
    d = t(939249),
    u = t(834730),
    x = t(957485),
    h = t(97808),
    w = t(778712),
    m = t(709066),
    S = t(915089),
    g = t(548118),
    E = t(495273),
    R = t(39255);
let j = l.forwardRef(function (e, n) {
    let {
        query: t,
        onQueryChange: l,
        onRemoveTag: s,
        onSelect: o,
        onSelectionChange: i,
        selectedSection: a,
        selectedRow: c,
        tags: d,
        sections: u,
        placeholder: x = "",
        focusAfterReady: h,
        isReady: w,
        "aria-labelledby": m,
        "aria-controls": S,
    } = e;
    return (0, r.jsx)(R.A, {
        autoFocus: !0,
        maxHeight: 100,
        onQueryChange: l,
        onRemoveTag: s,
        selectedSection: a,
        selectedRow: c,
        onSelect: o,
        onSelectionChange: i,
        placeholder: 0 === d.length ? x : "",
        query: t,
        ref: n,
        size: R.A.Sizes.MEDIUM,
        tags: d,
        sections: u,
        focusAfterReady: h,
        isReady: w,
        inputProps: {
            "aria-labelledby": m,
            "aria-controls": S,
            "aria-expanded": !0,
            "aria-activedescendant": `user-row-${c}`,
        },
    });
});
var f = t(719366),
    v = t(375708),
    b = t(393749);
let y = (0, S.Ld)(),
    p = (0, S.Ld)();
function O(e) {
    return `${e.rowType}:${e.id}`;
}
let T = l.createContext({
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
function C() {
    return l.useContext(T);
}
let k = [];
function I(e) {
    let { roles: n = k, members: t = k, users: r = k, guilds: s = k } = e;
    return l.useMemo(() => [n.length, t.length, r.length, s.length], [n.length, t.length, r.length, s.length]);
}
let L = (e) => {
    let { title: n } = e;
    return (0, r.jsx)(c.D, { variant: "heading-sm/semibold", className: o()(b.Gf, b.iw), children: n }, n);
};
function M(e) {
    let { id: n, sectionIndex: t, rowIndex: s, rows: c, children: x, showCheckbox: h, showRowLabel: w } = e,
        m = (0, i.rm)(n),
        {
            selectedSection: S,
            selectedRow: g,
            onSelectionChange: R,
            pendingAdditions: j,
            onRowClick: v,
            isAtMaxPendingRows: y,
        } = C(),
        p = c[s],
        T = O(p),
        k = p.disabled || T in j,
        I = p.disabled || (!k && y);
    return (0, l.createElement)(d.D, {
        ...m,
        id: n,
        key: T,
        role: "option",
        className: o()(b.d, { [b.A5]: S === t && g === s }),
        onClick: (e) => {
            I || (e.preventDefault(), p.rowType !== f.T6.EMPTY_STATE && v(p));
        },
        onMouseEnter: () => R(t, s, !1),
        "aria-disabled": I,
        "aria-selected": k,
        "aria-setsize": c.length,
        "aria-posinset": s + 1,
        children: [
            h
                ? (0, r.jsx)(a.Kj, {
                      className: b.kv,
                      displayOnly: !0,
                      size: 18,
                      value: k,
                      type: a.Or.INVERTED,
                      disabled: I,
                      children: (0, r.jsx)("div", { className: b.fw, children: x }),
                  })
                : (0, r.jsx)("div", { className: b.fw, children: x }),
            w ? (0, r.jsx)(u.E, { color: "text-muted", variant: "text-xs/normal", children: E.vV(p.rowType) }) : null,
        ],
    });
}
let A = (e) => {
        let { index: n, disabledText: t } = e,
            { roles: l } = C(),
            s = l[n];
        return null == s
            ? null
            : (0, r.jsxs)(M, {
                  id: `roles-row-${n}`,
                  sectionIndex: f.oO.ROLES,
                  rowIndex: n,
                  rows: l,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)("div", {
                          className: o()(b.iw, b.Hu),
                          children: (0, r.jsx)(x.i, { size: "custom", color: s.colorString, height: 20 }),
                      }),
                      (0, r.jsxs)("div", {
                          className: b.xZ,
                          children: [
                              (0, r.jsx)(u.E, {
                                  variant: "text-sm/medium",
                                  color: s.rowType === f.T6.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: s.name,
                              }),
                              s.disabled && null != t
                                  ? (0, r.jsx)(u.E, { color: "text-default", variant: "text-xs/normal", children: t })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    N = (e) => {
        let { index: n } = e,
            { members: t } = C(),
            l = t[n];
        return null == l
            ? null
            : (0, r.jsxs)(M, {
                  id: `members-row-${n}`,
                  sectionIndex: f.oO.MEMBERS,
                  rowIndex: n,
                  rows: t,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(h.eu, { src: l.avatarURL, size: w._3.SIZE_24, "aria-label": "" }),
                      (0, r.jsx)(u.E, { className: b.xZ, variant: "text-sm/normal", children: l.name }),
                      (0, r.jsx)(u.E, {
                          color: "text-muted",
                          className: b.Gq,
                          variant: "text-sm/normal",
                          "aria-hidden": !0,
                          children: l.username,
                      }),
                      l.bot && (0, r.jsx)(m.A, { verified: l.verifiedBot }),
                  ],
              });
    },
    U = (e) => {
        let { index: n, disabledText: t } = e,
            { users: l } = C(),
            s = l[n];
        return null == s
            ? null
            : (0, r.jsxs)(M, {
                  id: `users-row-${n}`,
                  sectionIndex: f.oO.USERS,
                  rowIndex: n,
                  rows: l,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(h.eu, { src: s.avatarURL, size: w._3.SIZE_24, "aria-label": "" }),
                      (0, r.jsxs)("div", {
                          className: b.xZ,
                          children: [
                              (0, r.jsx)(u.E, { variant: "text-sm/normal", children: s.name }),
                              s.disabled && null != t
                                  ? (0, r.jsx)(u.E, { color: "text-default", variant: "text-xs/normal", children: t })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    _ = (e) => {
        let { index: n } = e,
            { guilds: t } = C(),
            l = t[n];
        return null == l
            ? null
            : (0, r.jsxs)(M, {
                  id: `guilds-row-${n}`,
                  sectionIndex: f.oO.GUILDS,
                  rowIndex: n,
                  rows: t,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(g.Ay, { guild: l.guild, active: !0, size: g.Ay.Sizes.SMALLER }),
                      (0, r.jsx)("div", {
                          className: b.xZ,
                          children: (0, r.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: l.name,
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
                    roles: c = k,
                    members: d = k,
                    users: u = k,
                    guilds: x = k,
                    getRichTag: h,
                    maxPendingRows: w,
                } = e,
                m = l.useRef(null),
                [S, g] = l.useState({ section: 0, row: -1 });
            function E(e) {
                let n = O(e);
                a((t) => {
                    if (n in t) {
                        let { [n]: e, ...r } = t;
                        return r;
                    }
                    {
                        let r = h(e);
                        if (null != r) {
                            let l = { ...t };
                            return (l[n] = { display: r, row: e }), l;
                        }
                    }
                    return t;
                }),
                    o(""),
                    m.current?.focus();
            }
            l.useEffect(() => {
                m.current?.focus();
            }, []);
            let R = null != w && Object.keys(i).length >= w;
            return (0, r.jsx)(T.Provider, {
                value: {
                    searchRef: m,
                    selectedSection: S.section,
                    selectedRow: S.row,
                    roles: c,
                    members: d,
                    users: u,
                    guilds: x,
                    pendingAdditions: i,
                    isAtMaxPendingRows: R,
                    onSelectionChange: function (e, n) {
                        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        g((t) => (t.section === e && t.row === n ? t : { section: e ?? 0, row: n ?? -1 })),
                            r && t?.current?.scrollToIndex({ section: e ?? 0, row: n ?? 0, padding: 8 });
                    },
                    onRowClick: E,
                    query: s,
                    onQueryChange: o,
                    onQueryClick: function (e, n) {
                        if (null == n) return;
                        o("");
                        let t = [];
                        switch (e) {
                            case f.oO.ROLES:
                                t = c;
                                break;
                            case f.oO.MEMBERS:
                                t = d;
                                break;
                            case f.oO.USERS:
                                t = u;
                                break;
                            case f.oO.GUILDS:
                                t = x;
                        }
                        let r = t[n];
                        null != r && r.rowType !== f.T6.EMPTY_STATE && E(r);
                    },
                    onRemovePendingAddition: function (e) {
                        a((n) => {
                            let { [e]: t, ...r } = n;
                            return r;
                        });
                    },
                },
                children: n,
            });
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
                    onRemovePendingAddition: w,
                    roles: m,
                    members: S,
                    users: g,
                    guilds: E,
                } = C(),
                { keys: R, tags: f } = l.useMemo(() => {
                    let e = Object.keys(c),
                        n = e.map((e) => c[e].display);
                    return { keys: e, tags: n };
                }, [c]),
                v = I({ roles: m, members: S, users: g, guilds: E });
            return (0, r.jsx)(j, {
                ref: o,
                query: d,
                onQueryChange: x,
                selectedSection: i,
                selectedRow: a,
                onSelectionChange: u,
                onSelect: h,
                tags: f,
                sections: v,
                onRemoveTag: (e) => w(R[e]),
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
                case f.oO.ROLES:
                    return (0, r.jsx)(L, { title: v.intl.string(v.t["LPJmL/"]) });
                case f.oO.MEMBERS:
                    return (0, r.jsx)(L, { title: v.intl.string(v.t["9Oq93m"]) });
                case f.oO.USERS:
                    return (0, r.jsx)(L, { title: v.intl.string(v.t.nqDUBX) });
                case f.oO.GUILDS:
                    return (0, r.jsx)(L, { title: v.intl.string(v.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: n, row: t } = e;
            switch (n) {
                case f.oO.ROLES:
                    return (0, r.jsx)(A, { index: t });
                case f.oO.MEMBERS:
                    return (0, r.jsx)(N, { index: t });
                case f.oO.USERS:
                    return (0, r.jsx)(U, { index: t });
                case f.oO.GUILDS:
                    return (0, r.jsx)(_, { index: t });
            }
            return null;
        },
        useSections: I,
    };
