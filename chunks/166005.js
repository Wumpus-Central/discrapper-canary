n(321073);
var t = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    o = n(115560),
    a = n(837381),
    d = n(116903),
    u = n(855986),
    c = n(646514),
    h = n(858899),
    g = n(602853),
    m = n(545442),
    x = n(173936),
    f = n(866665),
    j = n(834730),
    b = n(939249),
    R = n(789645),
    y = n(559106),
    C = n(265872),
    v = n(307301),
    A = n(921853),
    p = n(442433),
    S = n(778858),
    w = n(775602),
    N = n(915089),
    M = n(727419),
    I = n(967144),
    k = n(69282),
    P = n(657048),
    E = n(253932),
    L = n(34457),
    _ = n(696451),
    G = n(576705),
    T = n(287809),
    X = n(488926),
    z = n(465738),
    D = n(652215),
    H = n(792996),
    J = n(434367);
let O = c.A.unsafe_rawColors.PRIMARY_300;
function W() {
    (0, h.P0)({ text: H.intl.string(H.t.fEptJP), variant: "critical" });
}
function Y(e) {
    let { role: l, guildId: n, trailing: i, itemRef: r, labelId: o, className: a, style: d } = e,
        c = (0, k.Xx)({ roleId: l.id, size: 12, guildId: n }),
        h = (0, u.bG)([w.Ay], () => w.Ay.roleStyle),
        b = (0, I.X_)(n, l, l.colorStrings),
        R = l.tags?.guild_connections === null,
        y = (0, g.r)(O).hex(),
        C = l.colorString ?? y;
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
                text: l.name,
                overflowOnly: !0,
                ariaHidden: !0,
                children: (0, t.jsx)(j.E, {
                    variant: "body-xs/normal",
                    color: "text-default",
                    className: J.S3,
                    id: o,
                    children: l.name,
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
    let { role: l, canRemove: n, onRemoveRole: r, onContextMenu: s, ...o } = e,
        { tabIndex: d, ...u } = (0, a.rm)(l.id),
        c = (0, N.GV)(),
        h = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), r?.(l));
            },
            [r, l],
        ),
        g = n
            ? (0, t.jsx)(f.m, {
                  text: H.intl.string(H.t["T+3Adg"]),
                  spacing: 4,
                  ariaHidden: !0,
                  children: (0, t.jsx)(b.D, {
                      "aria-label": H.intl.formatToPlainString(H.t.QrxwhY, { roleName: l.name }),
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
            children: (0, t.jsx)(Y, { role: l, className: n ? J.nO : void 0, trailing: g, labelId: c, ...o }),
        }),
    });
}
function B(e) {
    let { roleCount: l, children: n } = e,
        r = i.useMemo(() => `roles-${(0, o.A)()}`, []),
        s = (0, d.Ay)({ id: r, isEnabled: !0, scrollToStart: D.js$, scrollToEnd: D.js$, wrap: !0 }),
        u = H.intl.formatToPlainString(H.t.PCs0oo, { numRoles: l });
    return (0, t.jsx)(a.hD, {
        navigator: s,
        children: (0, t.jsx)(a.PR, {
            children: (e) => {
                let { ref: l, ...i } = e;
                return (0, t.jsx)("div", { ...i, ref: l, "aria-label": u, className: J.JK, children: n });
            },
        }),
    });
}
function Q(e) {
    let { userId: l, guild: n, showLabel: r = !1, onAddRole: o, buttonRef: a } = e,
        d = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        c = null != d ? X.HJ(n, d.id) : null,
        h = (0, u.bG)([_.Ay], () => _.Ay.getMember(n.id, l)),
        g = h?.roles ?? [],
        m = (0, u.bG)([w.Ay], () => w.Ay.roleStyle),
        x = i.useRef(null),
        R = a ?? x,
        y = i.useCallback(
            async (e) => {
                let t = _.Ay.getMember(n.id, l),
                    i = t?.roles ?? [];
                i.includes(e) || (i = [...i, e]);
                try {
                    (await M.A.updateMemberRoles(n.id, l, i, [e], []), o?.());
                } catch {
                    W();
                }
            },
            [n.id, l, o],
        );
    function A(e) {
        return !(0, L.Oy)(e) && !e.managed && G.A.isRoleHigher(n, c, e) && -1 === g.indexOf(e.id);
    }
    return (0, t.jsx)(C.Y, {
        targetElementRef: R,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, t.jsx)(z.A, { guild: n, roleStyle: m, roleFilter: A, onSelect: y, onClose: l });
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
    let { userId: l, guild: n, roles: t, allowEditing: r, readOnly: s } = e,
        o = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        a = E.Q_.useSetting(),
        [d] = (0, u.yK)([G.A], () => [G.A.can(D.xBc.MANAGE_ROLES, n), G.A.getGuildVersion(n.id)]),
        c = null != o ? X.HJ(n, o.id) : null,
        h = i.useMemo(() => {
            let e = new Set();
            return (
                s ||
                    !r ||
                    t.forEach((t) => {
                        (t.tags?.guild_connections === null ? l === o?.id : d && X.wO(n, o?.id, c, t) && !t.managed) &&
                            e.add(t.id);
                    }),
                e
            );
        }, [s, r, t, l, o?.id, d, n, c]),
        g = !s && a,
        m = !s && r && d;
    return {
        canAddRoles: m,
        canRemoveAnyRoles: h.size > 0,
        isRoleRemovable: i.useCallback((e) => h.has(e), [h]),
        hasDeveloperContextMenu: g,
    };
}
function F(e, l, n) {
    return i.useCallback(
        async (t) => {
            let i = _.Ay.getMember(l, e),
                r = (i?.roles ?? []).filter((e) => e !== t.id);
            try {
                (t.tags?.guild_connections === null
                    ? await S.A.unassignGuildRoleConnection(l, t.id)
                    : await M.A.updateMemberRoles(l, e, r, [], [t.id]),
                    n?.());
            } catch {
                W();
            }
        },
        [n, l, e],
    );
}
function K() {
    return i.useCallback((e, l) => {
        (0, p.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e(638221), n.e(715687)]).then(n.bind(n, 646938));
            return (n) => (0, t.jsx)(e, { ...n, id: l, label: H.intl.string(H.t.sMsaLg) });
        });
    }, []);
}
function V(e) {
    let { isExpanded: l, overflowCount: n, onClick: i, buttonRef: r } = e,
        o = l ? H.intl.string(H.t.XnXtCt) : H.intl.string(H.t.DY6n4q),
        a = l ? H.intl.string(H.t.XnXtCt) : H.intl.formatToPlainString(H.t.zr0Y5R, { numberOfItems: n });
    return (0, t.jsx)(f.m, {
        text: o,
        ariaHidden: !0,
        children: (0, t.jsx)(b.D, {
            innerRef: r,
            "aria-label": a,
            onClick: i,
            className: s()(J.s6, { [J.X1]: !l }),
            children: l
                ? (0, t.jsx)(A.ChevronSmallLeftIcon, { size: "xs", color: "currentColor" })
                : (0, t.jsx)(j.E, { variant: "body-xs/normal", color: "none", children: `+${n}` }),
        }),
    });
}
function q(e) {
    if (null == e) return 0;
    let { width: l } = e.getBoundingClientRect();
    return l > 0 ? l + 4 : 0;
}
n.d(
    l,
    {},
    {
        Ql: function (e) {
            let {
                    userId: l,
                    guild: n,
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
                } = U({ userId: l, guild: n, roles: r, allowEditing: h, readOnly: g }),
                b = F(l, n.id, d),
                R = K(),
                y = i.useRef({});
            function C(e, l) {
                null != l ? (y.current[e] = l) : delete y.current[e];
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
                        l = q(I.current),
                        n = [],
                        t = 268 - e - l;
                    for (let e = 0; e < 2; e++) {
                        let l = 1 === e ? t : 268;
                        for (let e = 0, t = n.length; t < r.length; t++) {
                            let i = r[t],
                                s = y.current[i.id];
                            if (null == s) {
                                0 === k.current && n.push(i);
                                continue;
                            }
                            let o = Math.min(s.getBoundingClientRect().width, l);
                            if (e + o > l) break;
                            ((e += o + 4), n.push(i));
                        }
                    }
                    (A(n.length !== v.length || n.some((e, l) => e.id !== v[l]?.id) ? n : v), S(t), k.current++);
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
                return (0, t.jsx)(Q, { buttonRef: I, userId: l, guild: n, showLabel: 0 === r.length, onAddRole: a });
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
                                        P.map((e, l) =>
                                            (0, t.jsx)(
                                                $,
                                                {
                                                    role: e,
                                                    guildId: n.id,
                                                    canRemove: j(e.id),
                                                    onRemoveRole: x ? b : void 0,
                                                    itemRef: (l) => C(e.id, l),
                                                    onContextMenu: f ? (l) => R(l, e.id) : void 0,
                                                    style: { maxWidth: w || l !== v.length - 1 ? 268 : p },
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
                                            children: P.map((e, l) =>
                                                (0, t.jsx)(
                                                    "li",
                                                    {
                                                        children: (0, t.jsx)(Y, {
                                                            itemRef: (l) => C(e.id, l),
                                                            role: e,
                                                            guildId: n.id,
                                                            style: { maxWidth: w || l !== v.length - 1 ? 268 : p },
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
                    userId: l,
                    guild: n,
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
                } = U({ userId: l, guild: n, roles: i, allowEditing: u, readOnly: d }),
                x = F(l, n.id, o),
                f = K();
            function j() {
                return (0, t.jsx)(Q, { userId: l, guild: n, showLabel: 0 === i.length, onAddRole: a });
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
                                                    guildId: n.id,
                                                    canRemove: m(e.id),
                                                    onRemoveRole: h ? x : void 0,
                                                    onContextMenu: g ? (l) => f(l, e.id) : void 0,
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
                                        (0, t.jsx)("li", { children: (0, t.jsx)(Y, { role: e, guildId: n.id }) }, e.id),
                                    ),
                                }),
                  });
        },
        g1: Y,
    },
);
