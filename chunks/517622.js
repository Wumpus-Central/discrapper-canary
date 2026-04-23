n.d(t, { A: () => B });
var r = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    o = n(837381),
    a = n(27192),
    c = n(534514),
    d = n(939249),
    u = n(834730),
    x = n(179866),
    h = n(97808),
    m = n(778712),
    w = n(709066),
    g = n(915089),
    f = n(548118),
    S = n(495273),
    b = n(39255);
let E = l.forwardRef(function (e, t) {
    let {
        query: n,
        onQueryChange: l,
        onRemoveTag: s,
        onSelect: i,
        onSelectionChange: o,
        selectedSection: a,
        selectedRow: c,
        tags: d,
        sections: u,
        placeholder: x = "",
        focusAfterReady: h,
        isReady: m,
        "aria-labelledby": w,
        "aria-controls": g,
    } = e;
    return (0, r.jsx)(b.A, {
        autoFocus: !0,
        maxHeight: 100,
        onQueryChange: l,
        onRemoveTag: s,
        selectedSection: a,
        selectedRow: c,
        onSelect: i,
        onSelectionChange: o,
        placeholder: 0 === d.length ? x : "",
        query: n,
        ref: t,
        size: b.A.Sizes.MEDIUM,
        tags: d,
        sections: u,
        focusAfterReady: h,
        isReady: m,
        inputProps: {
            "aria-labelledby": w,
            "aria-controls": g,
            "aria-expanded": !0,
            "aria-activedescendant": `user-row-${c}`,
        },
    });
});
var R = n(719366),
    v = n(985018),
    j = n(98965);
let y = (0, g.Ld)(),
    p = (0, g.Ld)();
function T(e) {
    return `${e.rowType}:${e.id}`;
}
let k = l.createContext({
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
    C = [];
function O(e) {
    let { roles: t = C, members: n = C, users: r = C, guilds: s = C } = e;
    return l.useMemo(() => [t.length, n.length, r.length, s.length], [t.length, n.length, r.length, s.length]);
}
let A = (e) => {
    let { title: t } = e;
    return (0, r.jsx)(c.D, { variant: "heading-sm/semibold", className: i()(j.Gf, j.iw), children: t }, t);
};
function M(e) {
    let { id: t, sectionIndex: n, rowIndex: s, rows: c, children: x, showCheckbox: h, showRowLabel: m } = e,
        w = (0, o.rm)(t),
        {
            selectedSection: g,
            selectedRow: f,
            onSelectionChange: b,
            pendingAdditions: E,
            onRowClick: v,
            isAtMaxPendingRows: y,
        } = l.useContext(k),
        p = c[s],
        C = T(p),
        O = p.disabled || C in E,
        A = p.disabled || (!O && y);
    return (0, l.createElement)(d.D, {
        ...w,
        id: t,
        key: C,
        role: "option",
        className: i()(j.d, { [j.A5]: g === n && f === s }),
        onClick: (e) => {
            A || (e.preventDefault(), p.rowType !== R.T6.EMPTY_STATE && v(p));
        },
        onMouseEnter: () => b(n, s, !1),
        "aria-disabled": A,
        "aria-selected": O,
        "aria-setsize": c.length,
        "aria-posinset": s + 1,
        children: [
            h
                ? (0, r.jsx)(a.Kj, {
                      className: j.kv,
                      displayOnly: !0,
                      size: 18,
                      value: O,
                      type: a.Or.INVERTED,
                      disabled: A,
                      children: (0, r.jsx)("div", { className: j.fw, children: x }),
                  })
                : (0, r.jsx)("div", { className: j.fw, children: x }),
            m ? (0, r.jsx)(u.E, { color: "text-muted", variant: "text-xs/normal", children: S.vV(p.rowType) }) : null,
        ],
    });
}
let _ = (e) => {
        let { index: t, disabledText: n } = e,
            { roles: s } = l.useContext(k),
            o = s[t];
        return null == o
            ? null
            : (0, r.jsxs)(M, {
                  id: `roles-row-${t}`,
                  sectionIndex: R.oO.ROLES,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)("div", {
                          className: i()(j.iw, j.Hu),
                          children: (0, r.jsx)(x.i, { size: "custom", color: o.colorString, height: 20 }),
                      }),
                      (0, r.jsxs)("div", {
                          className: j.xZ,
                          children: [
                              (0, r.jsx)(u.E, {
                                  variant: "text-sm/medium",
                                  color: o.rowType === R.T6.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: o.name,
                              }),
                              o.disabled && null != n
                                  ? (0, r.jsx)(u.E, { color: "text-default", variant: "text-xs/normal", children: n })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    L = (e) => {
        let { index: t } = e,
            { members: n } = l.useContext(k),
            s = n[t];
        return null == s
            ? null
            : (0, r.jsxs)(M, {
                  id: `members-row-${t}`,
                  sectionIndex: R.oO.MEMBERS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(h.eu, { src: s.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, r.jsx)(u.E, { className: j.xZ, variant: "text-sm/normal", children: s.name }),
                      (0, r.jsx)(u.E, {
                          color: "text-muted",
                          className: j.Gq,
                          variant: "text-sm/normal",
                          "aria-hidden": !0,
                          children: s.username,
                      }),
                      s.bot && (0, r.jsx)(w.A, { verified: s.verifiedBot }),
                  ],
              });
    },
    I = (e) => {
        let { index: t, disabledText: n } = e,
            { users: s } = l.useContext(k),
            i = s[t];
        return null == i
            ? null
            : (0, r.jsxs)(M, {
                  id: `users-row-${t}`,
                  sectionIndex: R.oO.USERS,
                  rowIndex: t,
                  rows: s,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(h.eu, { src: i.avatarURL, size: m._3.SIZE_24, "aria-label": "" }),
                      (0, r.jsxs)("div", {
                          className: j.xZ,
                          children: [
                              (0, r.jsx)(u.E, { variant: "text-sm/normal", children: i.name }),
                              i.disabled && null != n
                                  ? (0, r.jsx)(u.E, { color: "text-default", variant: "text-xs/normal", children: n })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    N = (e) => {
        let { index: t } = e,
            { guilds: n } = l.useContext(k),
            s = n[t];
        return null == s
            ? null
            : (0, r.jsxs)(M, {
                  id: `guilds-row-${t}`,
                  sectionIndex: R.oO.GUILDS,
                  rowIndex: t,
                  rows: n,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, r.jsx)(f.Ay, { guild: s.guild, active: !0, size: f.Ay.Sizes.SMALLER }),
                      (0, r.jsx)("div", {
                          className: j.xZ,
                          children: (0, r.jsx)(u.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: s.name,
                          }),
                      }),
                  ],
              });
    },
    B = {
        SECTION_HEIGHT: 32,
        ROW_HEIGHT: 40,
        Provider: (e) => {
            let {
                    children: t,
                    listRef: n,
                    query: s,
                    setQuery: i,
                    pendingAdditions: o,
                    setPendingAdditions: a,
                    roles: c = C,
                    members: d = C,
                    users: u = C,
                    guilds: x = C,
                    getRichTag: h,
                    maxPendingRows: m,
                } = e,
                w = l.useRef(null),
                [g, f] = l.useState({ section: 0, row: -1 });
            function S(e) {
                let t = T(e);
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
                    i(""),
                    w.current?.focus();
            }
            l.useEffect(() => {
                w.current?.focus();
            }, []);
            let b = null != m && Object.keys(o).length >= m;
            return (0, r.jsx)(k.Provider, {
                value: {
                    searchRef: w,
                    selectedSection: g.section,
                    selectedRow: g.row,
                    roles: c,
                    members: d,
                    users: u,
                    guilds: x,
                    pendingAdditions: o,
                    isAtMaxPendingRows: b,
                    onSelectionChange: function (e, t) {
                        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        f((n) => (n.section === e && n.row === t ? n : { section: e ?? 0, row: t ?? -1 })),
                            r && n?.current?.scrollToIndex({ section: e ?? 0, row: t ?? 0, padding: 8 });
                    },
                    onRowClick: S,
                    query: s,
                    onQueryChange: i,
                    onQueryClick: function (e, t) {
                        if (null == t) return;
                        i("");
                        let n = [];
                        switch (e) {
                            case R.oO.ROLES:
                                n = c;
                                break;
                            case R.oO.MEMBERS:
                                n = d;
                                break;
                            case R.oO.USERS:
                                n = u;
                                break;
                            case R.oO.GUILDS:
                                n = x;
                        }
                        let r = n[t];
                        null != r && r.rowType !== R.T6.EMPTY_STATE && S(r);
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
                    searchRef: i,
                    selectedSection: o,
                    selectedRow: a,
                    pendingAdditions: c,
                    query: d,
                    onSelectionChange: u,
                    onQueryChange: x,
                    onQueryClick: h,
                    onRemovePendingAddition: m,
                    roles: w,
                    members: g,
                    users: f,
                    guilds: S,
                } = l.useContext(k),
                { keys: b, tags: R } = l.useMemo(() => {
                    let e = Object.keys(c),
                        t = e.map((e) => c[e].display);
                    return { keys: e, tags: t };
                }, [c]),
                v = O({ roles: w, members: g, users: f, guilds: S });
            return (0, r.jsx)(E, {
                ref: i,
                query: d,
                onQueryChange: x,
                selectedSection: o,
                selectedRow: a,
                onSelectionChange: u,
                onSelect: h,
                tags: R,
                sections: v,
                onRemoveTag: (e) => m(b[e]),
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
                case R.oO.ROLES:
                    return (0, r.jsx)(A, { title: v.intl.string(v.t["LPJmL/"]) });
                case R.oO.MEMBERS:
                    return (0, r.jsx)(A, { title: v.intl.string(v.t["9Oq93m"]) });
                case R.oO.USERS:
                    return (0, r.jsx)(A, { title: v.intl.string(v.t.nqDUBX) });
                case R.oO.GUILDS:
                    return (0, r.jsx)(A, { title: v.intl.string(v.t["7hB4kg"]) });
                default:
                    return null;
            }
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            switch (t) {
                case R.oO.ROLES:
                    return (0, r.jsx)(_, { index: n });
                case R.oO.MEMBERS:
                    return (0, r.jsx)(L, { index: n });
                case R.oO.USERS:
                    return (0, r.jsx)(I, { index: n });
                case R.oO.GUILDS:
                    return (0, r.jsx)(N, { index: n });
            }
            return null;
        },
        useSections: O,
    };
