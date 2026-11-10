l(321073);
var t = l(477900),
    i = l(582128),
    r = l(503698),
    s = l.n(r),
    o = l(115560),
    a = l(837381),
    d = l(116903),
    u = l(855986),
    c = l(646514),
    h = l(858899),
    g = l(602853),
    m = l(545442),
    x = l(173936),
    f = l(866665),
    j = l(834730),
    b = l(939249),
    R = l(789645),
    y = l(559106),
    C = l(265872),
    v = l(307301),
    A = l(921853),
    p = l(442433),
    S = l(778858),
    w = l(775602),
    N = l(915089),
    M = l(727419),
    I = l(967144),
    k = l(69282),
    P = l(657048),
    E = l(253932),
    L = l(34457),
    _ = l(696451),
    G = l(576705),
    T = l(287809),
    X = l(488926),
    z = l(465738),
    D = l(652215),
    H = l(792996),
    J = l(434367);
let O = c.A.unsafe_rawColors.PRIMARY_300;
function W() {
    (0, h.P0)({ text: H.intl.string(H.t.fEptJP), variant: "critical" });
}
function Y(e) {
    let { role: n, guildId: l, trailing: i, itemRef: r, labelId: o, className: a, style: d } = e,
        c = (0, k.Xx)({ roleId: n.id, size: 12, guildId: l }),
        h = (0, u.bG)([w.Ay], () => w.Ay.roleStyle),
        b = (0, I.X_)(l, n, n.colorStrings),
        R = n.tags?.guild_connections === null,
        y = (0, g.r)(O).hex(),
        C = n.colorString ?? y;
    return (0, t.jsxs)("div", {
        ref: r,
        className: s()(J.JC, a),
        style: d,
        children: [
            "dot" === h
                ? (0, t.jsx)(m.W, { className: J.m4, color: C, background: !1, colors: b, tooltip: !1 })
                : (0, t.jsx)(m.R, { color: C, colors: b }),
            R &&
                (0, t.jsx)(x.LinkIcon, {
                    className: J.AP,
                    size: "custom",
                    width: 12,
                    height: 12,
                    color: "currentColor",
                }),
            (0, t.jsx)(f.m, {
                text: n.name,
                overflowOnly: !0,
                ariaHidden: !0,
                children: (0, t.jsx)(j.E, {
                    variant: "body-xs/normal",
                    color: "text-default",
                    className: J.S3,
                    id: o,
                    children: n.name,
                }),
            }),
            null != c
                ? (0, t.jsx)("span", { className: J.UT, children: (0, t.jsx)(P.A, { ...c, enableTooltip: !1 }) })
                : null,
            i,
        ],
    });
}
function $(e) {
    let { role: n, canRemove: l, onRemoveRole: r, onContextMenu: s, ...o } = e,
        { tabIndex: d, ...u } = (0, a.rm)(n.id),
        c = (0, N.GV)(),
        h = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), r?.(n));
            },
            [r, n],
        ),
        g = l
            ? (0, t.jsx)(f.m, {
                  text: H.intl.string(H.t["T+3Adg"]),
                  spacing: 4,
                  ariaHidden: !0,
                  children: (0, t.jsx)(b.D, {
                      "aria-label": H.intl.formatToPlainString(H.t.QrxwhY, { roleName: n.name }),
                      onClick: h,
                      className: J.DT,
                      tabIndex: d,
                      children: (0, t.jsx)(R.XSmallIcon, { size: "xxs", color: "currentColor" }),
                  }),
              })
            : void 0;
    return (0, t.jsx)(y.vN, {
        children: (0, t.jsx)("div", {
            ...u,
            tabIndex: d,
            onContextMenu: s,
            className: J.b6,
            "aria-labelledby": c,
            children: (0, t.jsx)(Y, { role: n, className: l ? J.nO : void 0, trailing: g, labelId: c, ...o }),
        }),
    });
}
function B(e) {
    let { roleCount: n, children: l } = e,
        r = i.useMemo(() => `roles-${(0, o.A)()}`, []),
        s = (0, d.Ay)({ id: r, isEnabled: !0, scrollToStart: D.js$, scrollToEnd: D.js$, wrap: !0 }),
        u = H.intl.formatToPlainString(H.t.PCs0oo, { numRoles: n });
    return (0, t.jsx)(a.hD, {
        navigator: s,
        children: (0, t.jsx)(a.PR, {
            children: (e) => {
                let { ref: n, ...i } = e;
                return (0, t.jsx)("div", { ...i, ref: n, "aria-label": u, className: J.JK, children: l });
            },
        }),
    });
}
function Q(e) {
    let { userId: n, guild: l, showLabel: r = !1, onAddRole: o, buttonRef: a } = e,
        d = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        c = null != d ? X.HJ(l, d.id) : null,
        h = (0, u.bG)([_.Ay], () => _.Ay.getMember(l.id, n)),
        g = h?.roles ?? [],
        m = (0, u.bG)([w.Ay], () => w.Ay.roleStyle),
        x = i.useRef(null),
        R = a ?? x,
        y = i.useCallback(
            async (e) => {
                let t = _.Ay.getMember(l.id, n),
                    i = t?.roles ?? [];
                i.includes(e) || (i = [...i, e]);
                try {
                    (await M.A.updateMemberRoles(l.id, n, i, [e], []), o?.());
                } catch {
                    W();
                }
            },
            [l.id, n, o],
        );
    function A(e) {
        return !(0, L.Oy)(e) && !e.managed && G.A.isRoleHigher(l, c, e) && -1 === g.indexOf(e.id);
    }
    return (0, t.jsx)(C.Y, {
        targetElementRef: R,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, t.jsx)(z.A, { guild: l, roleStyle: m, roleFilter: A, onSelect: y, onClose: n });
        },
        children: (e) =>
            (0, t.jsx)(f.m, {
                text: H.intl.string(H.t.e3Wlyw),
                shouldShow: !r,
                ariaHidden: !0,
                children: (0, t.jsxs)(b.D, {
                    innerRef: R,
                    "aria-label": H.intl.string(H.t.e3Wlyw),
                    className: s()(J.c9, { [J.MS]: r }),
                    ...e,
                    children: [
                        (0, t.jsx)(v.PlusSmallIcon, { size: "sm", color: "currentColor" }),
                        r &&
                            (0, t.jsx)(j.E, {
                                variant: "body-xs/normal",
                                color: "none",
                                children: H.intl.string(H.t.e3Wlyw),
                            }),
                    ],
                }),
            }),
    });
}
function U(e) {
    let { userId: n, guild: l, roles: t, allowEditing: r, readOnly: s } = e,
        o = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        a = E.Q_.useSetting(),
        [d] = (0, u.yK)([G.A], () => [G.A.can(D.xBc.MANAGE_ROLES, l), G.A.getGuildVersion(l.id)]),
        c = null != o ? X.HJ(l, o.id) : null,
        h = i.useMemo(() => {
            let e = new Set();
            return (
                s ||
                    !r ||
                    t.forEach((t) => {
                        (t.tags?.guild_connections === null ? n === o?.id : d && X.wO(l, o?.id, c, t) && !t.managed) &&
                            e.add(t.id);
                    }),
                e
            );
        }, [s, r, t, n, o?.id, d, l, c]),
        g = !s && a,
        m = !s && r && d;
    return {
        canAddRoles: m,
        canRemoveAnyRoles: h.size > 0,
        isRoleRemovable: i.useCallback((e) => h.has(e), [h]),
        hasDeveloperContextMenu: g,
    };
}
function F(e, n, l) {
    return i.useCallback(
        async (t) => {
            let i = _.Ay.getMember(n, e),
                r = (i?.roles ?? []).filter((e) => e !== t.id);
            try {
                (t.tags?.guild_connections === null
                    ? await S.A.unassignGuildRoleConnection(n, t.id)
                    : await M.A.updateMemberRoles(n, e, r, [], [t.id]),
                    l?.());
            } catch {
                W();
            }
        },
        [l, n, e],
    );
}
function K() {
    return i.useCallback((e, n) => {
        (0, p.L3)(e, async () => {
            let { default: e } = await l.e(715687).then(l.bind(l, 646938));
            return (l) => (0, t.jsx)(e, { ...l, id: n, label: H.intl.string(H.t.sMsaLg) });
        });
    }, []);
}
function V(e) {
    let { isExpanded: n, overflowCount: l, onClick: i, buttonRef: r } = e,
        o = n ? H.intl.string(H.t.XnXtCt) : H.intl.string(H.t.DY6n4q),
        a = n ? H.intl.string(H.t.XnXtCt) : H.intl.formatToPlainString(H.t.zr0Y5R, { numberOfItems: l });
    return (0, t.jsx)(f.m, {
        text: o,
        ariaHidden: !0,
        children: (0, t.jsx)(b.D, {
            innerRef: r,
            "aria-label": a,
            onClick: i,
            className: s()(J.s6, { [J.X1]: !n }),
            children: n
                ? (0, t.jsx)(A.ChevronSmallLeftIcon, { size: "xs", color: "currentColor" })
                : (0, t.jsx)(j.E, { variant: "body-xs/normal", color: "none", children: `+${l}` }),
        }),
    });
}
function q(e) {
    if (null == e) return 0;
    let { width: n } = e.getBoundingClientRect();
    return n > 0 ? n + 4 : 0;
}
l.d(
    n,
    {},
    {
        Ql: function (e) {
            let {
                    userId: n,
                    guild: l,
                    roles: r,
                    className: o,
                    onAddRole: a,
                    onRemoveRole: d,
                    onExpand: u,
                    onCollapse: c,
                    allowEditing: h = !1,
                    readOnly: g = !1,
                } = e,
                {
                    canAddRoles: m,
                    canRemoveAnyRoles: x,
                    hasDeveloperContextMenu: f,
                    isRoleRemovable: j,
                } = U({ userId: n, guild: l, roles: r, allowEditing: h, readOnly: g }),
                b = F(n, l.id, d),
                R = K(),
                y = i.useRef({});
            function C(e, n) {
                null != n ? (y.current[e] = n) : delete y.current[e];
            }
            let [v, A] = i.useState(r),
                [p, S] = i.useState(268),
                [w, N] = i.useState(!1),
                M = i.useRef(null),
                I = i.useRef(null),
                k = i.useRef(0);
            (i.useLayoutEffect(() => {
                k.current = 0;
            }, [r]),
                i.useLayoutEffect(() => {
                    if (w) return;
                    let e = q(M.current),
                        n = q(I.current),
                        l = [],
                        t = 268 - e - n;
                    for (let e = 0; e < 2; e++) {
                        let n = 1 === e ? t : 268;
                        for (let e = 0, t = l.length; t < r.length; t++) {
                            let i = r[t],
                                s = y.current[i.id];
                            if (null == s) {
                                0 === k.current && l.push(i);
                                continue;
                            }
                            let o = Math.min(s.getBoundingClientRect().width, n);
                            if (e + o > n) break;
                            ((e += o + 4), l.push(i));
                        }
                    }
                    (A(l.length !== v.length || l.some((e, n) => e.id !== v[n]?.id) ? l : v), S(t), k.current++);
                }, [r, v, w]));
            let P = w ? r : v;
            function E() {
                w ? (c?.(), N(!1)) : (u?.(), N(!0));
            }
            function L() {
                return v.length < r.length
                    ? (0, t.jsx)(V, { isExpanded: w, overflowCount: r.length - v.length, onClick: E, buttonRef: M })
                    : null;
            }
            function _() {
                return (0, t.jsx)(Q, { buttonRef: I, userId: n, guild: l, showLabel: 0 === r.length, onAddRole: a });
            }
            return 0 === r.length
                ? m
                    ? (0, t.jsx)("div", { className: s()(J.MR, o), children: _() })
                    : null
                : (0, t.jsx)("div", {
                      className: s()(J.MR, o),
                      children:
                          m || x || f
                              ? (0, t.jsxs)(B, {
                                    roleCount: r.length,
                                    children: [
                                        P.map((e, n) =>
                                            (0, t.jsx)(
                                                $,
                                                {
                                                    role: e,
                                                    guildId: l.id,
                                                    canRemove: j(e.id),
                                                    onRemoveRole: x ? b : void 0,
                                                    itemRef: (n) => C(e.id, n),
                                                    onContextMenu: f ? (n) => R(n, e.id) : void 0,
                                                    style: { maxWidth: w || n !== v.length - 1 ? 268 : p },
                                                },
                                                e.id,
                                            ),
                                        ),
                                        L(),
                                        m ? _() : null,
                                    ],
                                })
                              : (0, t.jsxs)(t.Fragment, {
                                    children: [
                                        (0, t.jsx)("ul", {
                                            className: J.nt,
                                            "aria-label": H.intl.string(H.t["LPJmL/"]),
                                            children: P.map((e, n) =>
                                                (0, t.jsx)(
                                                    "li",
                                                    {
                                                        children: (0, t.jsx)(Y, {
                                                            itemRef: (n) => C(e.id, n),
                                                            role: e,
                                                            guildId: l.id,
                                                            style: { maxWidth: w || n !== v.length - 1 ? 268 : p },
                                                        }),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                        L(),
                                    ],
                                }),
                  });
        },
        YR: function (e) {
            let {
                    userId: n,
                    guild: l,
                    roles: i,
                    className: r,
                    onRemoveRole: o,
                    onAddRole: a,
                    readOnly: d = !1,
                    allowEditing: u = !1,
                } = e,
                {
                    canAddRoles: c,
                    canRemoveAnyRoles: h,
                    hasDeveloperContextMenu: g,
                    isRoleRemovable: m,
                } = U({ userId: n, guild: l, roles: i, allowEditing: u, readOnly: d }),
                x = F(n, l.id, o),
                f = K();
            function j() {
                return (0, t.jsx)(Q, { userId: n, guild: l, showLabel: 0 === i.length, onAddRole: a });
            }
            return 0 === i.length
                ? c
                    ? (0, t.jsx)("div", { className: s()(J.MR, r), children: j() })
                    : null
                : (0, t.jsx)("div", {
                      className: s()(J.MR, r),
                      children:
                          c || h || g
                              ? (0, t.jsxs)(B, {
                                    roleCount: i.length,
                                    children: [
                                        i.map((e) =>
                                            (0, t.jsx)(
                                                $,
                                                {
                                                    role: e,
                                                    guildId: l.id,
                                                    canRemove: m(e.id),
                                                    onRemoveRole: h ? x : void 0,
                                                    onContextMenu: g ? (n) => f(n, e.id) : void 0,
                                                },
                                                e.id,
                                            ),
                                        ),
                                        c ? j() : null,
                                    ],
                                })
                              : (0, t.jsx)("ul", {
                                    className: J.nt,
                                    "aria-label": H.intl.string(H.t["LPJmL/"]),
                                    children: i.map((e) =>
                                        (0, t.jsx)("li", { children: (0, t.jsx)(Y, { role: e, guildId: l.id }) }, e.id),
                                    ),
                                }),
                  });
        },
        g1: Y,
    },
);
