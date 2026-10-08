(l.d(n, { Ql: () => ee, YR: () => V, g1: () => Y }), l(321073));
var t = l(477900),
    i = l(582128),
    r = l(503698),
    s = l.n(r),
    o = l(132500),
    a = l(837381),
    d = l(887129),
    u = l(17928),
    c = l(661531),
    x = l(376357),
    g = l(602853),
    h = l(545442),
    m = l(173936),
    f = l(866665),
    j = l(834730),
    R = l(939249),
    b = l(789645),
    C = l(559106),
    y = l(922016),
    v = l(307301),
    p = l(921853),
    A = l(442433),
    w = l(66834),
    N = l(775602),
    M = l(915089),
    S = l(468689),
    k = l(967144),
    P = l(69282),
    E = l(657048),
    I = l(885386),
    L = l(34457),
    _ = l(696451),
    G = l(576705),
    T = l(287809),
    z = l(488926),
    D = l(465738),
    H = l(652215),
    J = l(660183),
    O = l(434367);
let X = c.A.unsafe_rawColors.PRIMARY_300;
function W() {
    (0, x.P0)((0, x.ox)(J.intl.string(J.t.fEptJP), x.Ck.FAILURE));
}
function Y(e) {
    let { role: n, guildId: l, trailing: i, itemRef: r, labelId: o, className: a, style: d } = e,
        c = (0, P.Xx)({ roleId: n.id, size: 12, guildId: l }),
        x = (0, u.bG)([N.Ay], () => N.Ay.roleStyle),
        R = (0, k.X_)(l, n, n.colorStrings),
        b = n.tags?.guild_connections === null,
        C = (0, g.r)(X).hex(),
        y = n.colorString ?? C;
    return (0, t.jsxs)("div", {
        ref: r,
        className: s()(O.JC, a),
        style: d,
        children: [
            "dot" === x
                ? (0, t.jsx)(h.W, { className: O.m4, color: y, background: !1, colors: R, tooltip: !1 })
                : (0, t.jsx)(h.R, { color: y, colors: R }),
            b &&
                (0, t.jsx)(m.LinkIcon, {
                    className: O.AP,
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
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: O.S3,
                    id: o,
                    children: n.name,
                }),
            }),
            null != c
                ? (0, t.jsx)("span", { className: O.UT, children: (0, t.jsx)(E.A, { ...c, enableTooltip: !1 }) })
                : null,
            i,
        ],
    });
}
function U(e) {
    let { role: n, canRemove: l, onRemoveRole: r, onContextMenu: s, ...o } = e,
        { tabIndex: d, ...u } = (0, a.rm)(n.id),
        c = (0, M.GV)(),
        x = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), r?.(n));
            },
            [r, n],
        ),
        g = l
            ? (0, t.jsx)(f.m, {
                  text: J.intl.string(J.t["T+3Adg"]),
                  spacing: 4,
                  ariaHidden: !0,
                  children: (0, t.jsx)(R.D, {
                      "aria-label": J.intl.formatToPlainString(J.t.QrxwhY, { roleName: n.name }),
                      onClick: x,
                      className: O.DT,
                      tabIndex: d,
                      children: (0, t.jsx)(b.P, { size: "xxs", color: "currentColor" }),
                  }),
              })
            : void 0;
    return (0, t.jsx)(C.vN, {
        children: (0, t.jsx)("div", {
            ...u,
            tabIndex: d,
            onContextMenu: s,
            className: O.b6,
            "aria-labelledby": c,
            children: (0, t.jsx)(Y, { role: n, className: l ? O.nO : void 0, trailing: g, labelId: c, ...o }),
        }),
    });
}
function $(e) {
    let { roleCount: n, children: l } = e,
        r = i.useMemo(() => `roles-${(0, o.A)()}`, []),
        s = (0, d.Ay)({ id: r, isEnabled: !0, scrollToStart: H.js$, scrollToEnd: H.js$, wrap: !0 }),
        u = J.intl.formatToPlainString(J.t.PCs0oo, { numRoles: n });
    return (0, t.jsx)(a.hD, {
        navigator: s,
        children: (0, t.jsx)(a.PR, {
            children: (e) => {
                let { ref: n, ...i } = e;
                return (0, t.jsx)("div", { ...i, ref: n, "aria-label": u, className: O.JK, children: l });
            },
        }),
    });
}
function B(e) {
    let { userId: n, guild: l, showLabel: r = !1, onAddRole: o, buttonRef: a } = e,
        d = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        c = null != d ? z.HJ(l, d.id) : null,
        x = (0, u.bG)([_.Ay], () => _.Ay.getMember(l.id, n)),
        g = x?.roles ?? [],
        h = (0, u.bG)([N.Ay], () => N.Ay.roleStyle),
        m = i.useRef(null),
        b = a ?? m,
        C = i.useCallback(
            async (e) => {
                let t = _.Ay.getMember(l.id, n),
                    i = t?.roles ?? [];
                i.includes(e) || (i = [...i, e]);
                try {
                    (await S.default.updateMemberRoles(l.id, n, i, [e], []), o?.());
                } catch {
                    W();
                }
            },
            [l.id, n, o],
        );
    function p(e) {
        return !(0, L.Oy)(e) && !e.managed && G.A.isRoleHigher(l, c, e) && -1 === g.indexOf(e.id);
    }
    return (0, t.jsx)(y.Y, {
        targetElementRef: b,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, t.jsx)(D.A, { guild: l, roleStyle: h, roleFilter: p, onSelect: C, onClose: n });
        },
        children: (e) =>
            (0, t.jsx)(f.m, {
                text: J.intl.string(J.t.e3Wlyw),
                shouldShow: !r,
                ariaHidden: !0,
                children: (0, t.jsxs)(R.D, {
                    innerRef: b,
                    "aria-label": J.intl.string(J.t.e3Wlyw),
                    className: s()(O.c9, { [O.MS]: r }),
                    ...e,
                    children: [
                        (0, t.jsx)(v.j, { size: "sm", color: "currentColor" }),
                        r &&
                            (0, t.jsx)(j.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: J.intl.string(J.t.e3Wlyw),
                            }),
                    ],
                }),
            }),
    });
}
function F(e) {
    let { userId: n, guild: l, roles: t, allowEditing: r, readOnly: s } = e,
        o = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        a = I.Q_.useSetting(),
        [d] = (0, u.yK)([G.A], () => [G.A.can(H.xBc.MANAGE_ROLES, l), G.A.getGuildVersion(l.id)]),
        c = null != o ? z.HJ(l, o.id) : null,
        x = i.useMemo(() => {
            let e = new Set();
            return (
                s ||
                    !r ||
                    t.forEach((t) => {
                        (t.tags?.guild_connections === null ? n === o?.id : d && z.wO(l, o?.id, c, t) && !t.managed) &&
                            e.add(t.id);
                    }),
                e
            );
        }, [s, r, t, n, o?.id, d, l, c]),
        g = !s && a,
        h = !s && r && d;
    return {
        canAddRoles: h,
        canRemoveAnyRoles: x.size > 0,
        isRoleRemovable: i.useCallback((e) => x.has(e), [x]),
        hasDeveloperContextMenu: g,
    };
}
function Q(e, n, l) {
    return i.useCallback(
        async (t) => {
            let i = _.Ay.getMember(n, e),
                r = (i?.roles ?? []).filter((e) => e !== t.id);
            try {
                (t.tags?.guild_connections === null
                    ? await w.A.unassignGuildRoleConnection(n, t.id)
                    : await S.default.updateMemberRoles(n, e, r, [], [t.id]),
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
        (0, A.L3)(e, async () => {
            let { default: e } = await Promise.all([l.e("638221"), l.e("715687")]).then(l.bind(l, 646938));
            return (l) => (0, t.jsx)(e, { ...l, id: n, label: J.intl.string(J.t.sMsaLg) });
        });
    }, []);
}
function V(e) {
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
            canRemoveAnyRoles: x,
            hasDeveloperContextMenu: g,
            isRoleRemovable: h,
        } = F({ userId: n, guild: l, roles: i, allowEditing: u, readOnly: d }),
        m = Q(n, l.id, o),
        f = K();
    function j() {
        return (0, t.jsx)(B, { userId: n, guild: l, showLabel: 0 === i.length, onAddRole: a });
    }
    return 0 === i.length
        ? c
            ? (0, t.jsx)("div", { className: s()(O.MR, r), children: j() })
            : null
        : (0, t.jsx)("div", {
              className: s()(O.MR, r),
              children:
                  c || x || g
                      ? (0, t.jsxs)($, {
                            roleCount: i.length,
                            children: [
                                i.map((e) =>
                                    (0, t.jsx)(
                                        U,
                                        {
                                            role: e,
                                            guildId: l.id,
                                            canRemove: h(e.id),
                                            onRemoveRole: x ? m : void 0,
                                            onContextMenu: g ? (n) => f(n, e.id) : void 0,
                                        },
                                        e.id,
                                    ),
                                ),
                                c ? j() : null,
                            ],
                        })
                      : (0, t.jsx)("ul", {
                            className: O.nt,
                            "aria-label": J.intl.string(J.t["LPJmL/"]),
                            children: i.map((e) =>
                                (0, t.jsx)("li", { children: (0, t.jsx)(Y, { role: e, guildId: l.id }) }, e.id),
                            ),
                        }),
          });
}
function q(e) {
    let { isExpanded: n, overflowCount: l, onClick: i, buttonRef: r } = e,
        o = n ? J.intl.string(J.t.XnXtCt) : J.intl.string(J.t.DY6n4q),
        a = n ? J.intl.string(J.t.XnXtCt) : J.intl.formatToPlainString(J.t.zr0Y5R, { numberOfItems: l });
    return (0, t.jsx)(f.m, {
        text: o,
        ariaHidden: !0,
        children: (0, t.jsx)(R.D, {
            innerRef: r,
            "aria-label": a,
            onClick: i,
            className: s()(O.s6, { [O.X1]: !n }),
            children: n
                ? (0, t.jsx)(p.n, { size: "xs", color: "currentColor" })
                : (0, t.jsx)(j.E, { variant: "text-xs/normal", color: "none", children: `+${l}` }),
        }),
    });
}
function Z(e) {
    if (null == e) return 0;
    let { width: n } = e.getBoundingClientRect();
    return n > 0 ? n + 4 : 0;
}
function ee(e) {
    let {
            userId: n,
            guild: l,
            roles: r,
            className: o,
            onAddRole: a,
            onRemoveRole: d,
            onExpand: u,
            onCollapse: c,
            allowEditing: x = !1,
            readOnly: g = !1,
        } = e,
        {
            canAddRoles: h,
            canRemoveAnyRoles: m,
            hasDeveloperContextMenu: f,
            isRoleRemovable: j,
        } = F({ userId: n, guild: l, roles: r, allowEditing: x, readOnly: g }),
        R = Q(n, l.id, d),
        b = K(),
        C = i.useRef({});
    function y(e, n) {
        null != n ? (C.current[e] = n) : delete C.current[e];
    }
    let [v, p] = i.useState(r),
        [A, w] = i.useState(268),
        [N, M] = i.useState(!1),
        S = i.useRef(null),
        k = i.useRef(null),
        P = i.useRef(0);
    (i.useLayoutEffect(() => {
        P.current = 0;
    }, [r]),
        i.useLayoutEffect(() => {
            if (N) return;
            let e = Z(S.current),
                n = Z(k.current),
                l = [],
                t = 268 - e - n;
            for (let e = 0; e < 2; e++) {
                let n = 1 === e ? t : 268;
                for (let e = 0, t = l.length; t < r.length; t++) {
                    let i = r[t],
                        s = C.current[i.id];
                    if (null == s) {
                        0 === P.current && l.push(i);
                        continue;
                    }
                    let o = Math.min(s.getBoundingClientRect().width, n);
                    if (e + o > n) break;
                    ((e += o + 4), l.push(i));
                }
            }
            (p(l.length !== v.length || l.some((e, n) => e.id !== v[n]?.id) ? l : v), w(t), P.current++);
        }, [r, v, N]));
    let E = N ? r : v;
    function I() {
        N ? (c?.(), M(!1)) : (u?.(), M(!0));
    }
    function L() {
        return v.length < r.length
            ? (0, t.jsx)(q, { isExpanded: N, overflowCount: r.length - v.length, onClick: I, buttonRef: S })
            : null;
    }
    function _() {
        return (0, t.jsx)(B, { buttonRef: k, userId: n, guild: l, showLabel: 0 === r.length, onAddRole: a });
    }
    return 0 === r.length
        ? h
            ? (0, t.jsx)("div", { className: s()(O.MR, o), children: _() })
            : null
        : (0, t.jsx)("div", {
              className: s()(O.MR, o),
              children:
                  h || m || f
                      ? (0, t.jsxs)($, {
                            roleCount: r.length,
                            children: [
                                E.map((e, n) =>
                                    (0, t.jsx)(
                                        U,
                                        {
                                            role: e,
                                            guildId: l.id,
                                            canRemove: j(e.id),
                                            onRemoveRole: m ? R : void 0,
                                            itemRef: (n) => y(e.id, n),
                                            onContextMenu: f ? (n) => b(n, e.id) : void 0,
                                            style: { maxWidth: N || n !== v.length - 1 ? 268 : A },
                                        },
                                        e.id,
                                    ),
                                ),
                                L(),
                                h ? _() : null,
                            ],
                        })
                      : (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)("ul", {
                                    className: O.nt,
                                    "aria-label": J.intl.string(J.t["LPJmL/"]),
                                    children: E.map((e, n) =>
                                        (0, t.jsx)(
                                            "li",
                                            {
                                                children: (0, t.jsx)(Y, {
                                                    itemRef: (n) => y(e.id, n),
                                                    role: e,
                                                    guildId: l.id,
                                                    style: { maxWidth: N || n !== v.length - 1 ? 268 : A },
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
}
