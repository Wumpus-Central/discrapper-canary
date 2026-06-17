n.d(t, { A: () => _ });
var r = n(627968),
    l = n(64700),
    s = n(503698),
    o = n.n(s),
    i = n(837381),
    a = n(27192),
    c = n(534514),
    d = n(939249),
    u = n(834730),
    x = n(957485),
    h = n(97808),
    w = n(778712),
    m = n(709066),
    S = n(915089),
    g = n(548118),
    E = n(495273),
    R = n(39255);
let j = l.forwardRef(function (e, t) {
    let {
        query: n,
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
        query: n,
        ref: t,
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
var f = n(719366),
    v = n(375708),
    b = n(393749);
let y = (0, S.Ld)(),
    p = (0, S.Ld)();
function C(e) {
    return `${e.rowType}:${e.id}`;
}
let O = l.createContext({
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
    }),
    T = [];
function k(e) {
    let { roles: t = T, members: n = T, users: r = T, guilds: s = T } = e;
    return l.useMemo(() => [t.length, n.length, r.length, s.length], [t.length, n.length, r.length, s.length]);
}
let I = (e) => {
    let { title: t } = e;
    return (0, r.jsx)(c.D, { variant: "heading-sm/semibold", className: o()(b.Gf, b.iw), children: t }, t);
};
function L(e) {
    let { id: t, sectionIndex: n, rowIndex: s, rows: c, children: x, showCheckbox: h, showRowLabel: w } = e,
        m = (0, i.rm)(t),
        {
            selectedSection: S,
            selectedRow: g,
            onSelectionChange: R,
            pendingAdditions: j,
            onRowClick: v,
            isAtMaxPendingRows: y,
        } = l.useContext(O),
        p = c[s],
        T = C(p),
        k = p.disabled || T in j,
        I = p.disabled || (!k && y);
    return (0, l.createElement)(d.D, {
        ...m,
        id: t,
        key: T,
        role: "option",
        className: o()(b.d, { [b.A5]: S === n && g === s }),
        onClick: (e) => {
            I || (e.preventDefault(), p.rowType !== f.T6.EMPTY_STATE && v(p));
        },
        onMouseEnter: () => R(n, s, !1),
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
let M = (e) => {
        let { index: t, disabledText: n } = e,
            { roles: s } = l.useContext(O),
            i = s[t];
        return null == i
            ? null
            : (0, r.jsxs)(L, {
                  id: `roles-row-${t}`,
                  sectionIndex: f.oO.ROLES,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)("div", {
                          className: o()(b.iw, b.Hu),
                          children: (0, r.jsx)(x.i, { size: "custom", color: i.colorString, height: 20 }),
                      }),
                      (0, r.jsxs)("div", {
                          className: b.xZ,
                          children: [
                              (0, r.jsx)(u.E, {
                                  variant: "text-sm/medium",
                                  color: i.rowType === f.T6.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: i.name,
                              }),
                              i.disabled && null != n
                                  ? (0, r.jsx)(u.E, { color: "text-default", variant: "text-xs/normal", children: n })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    A = (e) => {
        let { index: t } = e,
            { members: n } = l.useContext(O),
            s = n[t];
        return null == s
            ? null
            : (0, r.jsxs)(L, {
                  id: `members-row-${t}`,
                  sectionIndex: f.oO.MEMBERS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(h.eu, { src: s.avatarURL, size: w._3.SIZE_24, "aria-label": "" }),
                      (0, r.jsx)(u.E, { className: b.xZ, variant: "text-sm/normal", children: s.name }),
                      (0, r.jsx)(u.E, {
                          color: "text-muted",
                          className: b.Gq,
                          variant: "text-sm/normal",
                          "aria-hidden": !0,
                          children: s.username,
                      }),
                      s.bot && (0, r.jsx)(m.A, { verified: s.verifiedBot }),
                  ],
              });
    },
    N = (e) => {
        let { index: t, disabledText: n } = e,
            { users: s } = l.useContext(O),
            o = s[t];
        return null == o
            ? null
            : (0, r.jsxs)(L, {
                  id: `users-row-${t}`,
                  sectionIndex: f.oO.USERS,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(h.eu, { src: o.avatarURL, size: w._3.SIZE_24, "aria-label": "" }),
                      (0, r.jsxs)("div", {
                          className: b.xZ,
                          children: [
                              (0, r.jsx)(u.E, { variant: "text-sm/normal", children: o.name }),
                              o.disabled && null != n
                                  ? (0, r.jsx)(u.E, { color: "text-default", variant: "text-xs/normal", children: n })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    U = (e) => {
        let { index: t } = e,
            { guilds: n } = l.useContext(O),
            s = n[t];
        return null == s
            ? null
            : (0, r.jsxs)(L, {
                  id: `guilds-row-${t}`,
                  sectionIndex: f.oO.GUILDS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(g.Ay, { guild: s.guild, active: !0, size: g.Ay.Sizes.SMALLER }),
                      (0, r.jsx)("div", {
                          className: b.xZ,
                          children: (0, r.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: s.name,
                          }),
                      }),
                  ],
              });
    },
    _ = {
        SECTION_HEIGHT: 32,
        ROW_HEIGHT: 40,
        Provider: (e) => {
            let {
                    children: t,
                    listRef: n,
                    query: s,
                    setQuery: o,
                    pendingAdditions: i,
                    setPendingAdditions: a,
                    roles: c = T,
                    members: d = T,
                    users: u = T,
                    guilds: x = T,
                    getRichTag: h,
                    maxPendingRows: w,
                } = e,
                m = l.useRef(null),
                [S, g] = l.useState({ section: 0, row: -1 });
            function E(e) {
                let t = C(e);
                a((n) => {
                    if (t in n) {
                        let { [t]: e, ...r } = n;
                        return r;
                    }
                    {
                        let r = h(e);
                        if (null != r) {
                            let l = { ...n };
                            return (l[t] = { display: r, row: e }), l;
                        }
                    }
                    return n;
                }),
                    o(""),
                    m.current?.focus();
            }
            l.useEffect(() => {
                m.current?.focus();
            }, []);
            let R = null != w && Object.keys(i).length >= w;
            return (0, r.jsx)(O.Provider, {
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
                    onSelectionChange: function (e, t) {
                        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        g((n) => (n.section === e && n.row === t ? n : { section: e ?? 0, row: t ?? -1 })),
                            r && n?.current?.scrollToIndex({ section: e ?? 0, row: t ?? 0, padding: 8 });
                    },
                    onRowClick: E,
                    query: s,
                    onQueryChange: o,
                    onQueryClick: function (e, t) {
                        if (null == t) return;
                        o("");
                        let n = [];
                        switch (e) {
                            case f.oO.ROLES:
                                n = c;
                                break;
                            case f.oO.MEMBERS:
                                n = d;
                                break;
                            case f.oO.USERS:
                                n = u;
                                break;
                            case f.oO.GUILDS:
                                n = x;
                        }
                        let r = n[t];
                        null != r && r.rowType !== f.T6.EMPTY_STATE && E(r);
                    },
                    onRemovePendingAddition: function (e) {
                        a((t) => {
                            let { [e]: n, ...r } = t;
                            return r;
                        });
                    },
                },
                children: t,
            });
        },
        SearchBox: (e) => {
            let { placeholderText: t, focusSearchAfterReady: n, isReady: s } = e,
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
                } = l.useContext(O),
                { keys: R, tags: f } = l.useMemo(() => {
                    let e = Object.keys(c),
                        t = e.map((e) => c[e].display);
                    return { keys: e, tags: t };
                }, [c]),
                v = k({ roles: m, members: S, users: g, guilds: E });
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
                placeholder: t,
                focusAfterReady: n,
                isReady: s,
                "aria-labelledby": y,
                "aria-controls": p,
            });
        },
        renderSection: (e) => {
            let { section: t } = e;
            switch (t) {
                case f.oO.ROLES:
                    return (0, r.jsx)(I, { title: v.intl.string(v.t["LPJmL/"]) });
                case f.oO.MEMBERS:
                    return (0, r.jsx)(I, { title: v.intl.string(v.t["9Oq93m"]) });
                case f.oO.USERS:
                    return (0, r.jsx)(I, { title: v.intl.string(v.t.nqDUBX) });
                case f.oO.GUILDS:
                    return (0, r.jsx)(I, { title: v.intl.string(v.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            switch (t) {
                case f.oO.ROLES:
                    return (0, r.jsx)(M, { index: n });
                case f.oO.MEMBERS:
                    return (0, r.jsx)(A, { index: n });
                case f.oO.USERS:
                    return (0, r.jsx)(N, { index: n });
                case f.oO.GUILDS:
                    return (0, r.jsx)(U, { index: n });
            }
            return null;
        },
        useSections: k,
    };
