n.d(l, { Ql: () => V, YR: () => q, g1: () => W }), n(321073);
var t = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(835245),
    a = n(837381),
    d = n(887129),
    u = n(17928),
    c = n(661531),
    g = n(990078),
    x = n(602853),
    h = n(545442),
    m = n(173936),
    f = n(834730),
    j = n(939249),
    b = n(789645),
    R = n(187322),
    C = n(922016),
    v = n(307301),
    A = n(921853),
    p = n(442433),
    y = n(66834),
    N = n(775602),
    M = n(915089),
    S = n(201275),
    w = n(468689),
    k = n(967144),
    E = n(657048),
    I = n(885386),
    P = n(34457),
    L = n(696451),
    _ = n(576705),
    G = n(287809),
    T = n(488926),
    z = n(465738),
    D = n(652215),
    H = n(375708),
    O = n(737680);
let J = c.A.unsafe_rawColors.PRIMARY_300;
function W(e) {
    let { role: l, guildId: n, trailing: i, itemRef: r, labelId: o, className: a, style: d } = e,
        c = (0, S.$7)({ roleId: l.id, size: 12, guildId: n }),
        j = (0, u.bG)([N.A], () => N.A.roleStyle),
        b = (0, k.X_)(n, l, l.colorStrings),
        R = l.tags?.guild_connections === null,
        C = (0, x.r)(J).hex(),
        v = l.colorString ?? C;
    return (0, t.jsxs)("div", {
        ref: r,
        className: s()(O.JC, a),
        style: d,
        children: [
            "dot" === j
                ? (0, t.jsx)(h.W, { className: O.m4, color: v, background: !1, colors: b, tooltip: !1 })
                : (0, t.jsx)(h.R, { color: v, colors: b }),
            R && (0, t.jsx)(m.q, { className: O.AP, size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, t.jsx)(g.m, {
                text: l.name,
                overflowOnly: !0,
                ariaHidden: !0,
                children: (0, t.jsx)(f.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: O.S3,
                    id: o,
                    children: l.name,
                }),
            }),
            null != c ? (0, t.jsx)(E.A, { className: O.UT, ...c, enableTooltip: !1 }) : null,
            i,
        ],
    });
}
function X(e) {
    let { role: l, canRemove: n, onRemoveRole: r, onContextMenu: s, ...o } = e,
        { tabIndex: d, ...u } = (0, a.rm)(l.id),
        c = (0, M.GV)(),
        x = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r?.(l);
            },
            [r, l],
        ),
        h = n
            ? (0, t.jsx)(g.m, {
                  text: H.intl.string(H.t["T+3Adg"]),
                  spacing: 4,
                  ariaHidden: !0,
                  children: (0, t.jsx)(j.D, {
                      "aria-label": H.intl.formatToPlainString(H.t.QrxwhY, { roleName: l.name }),
                      onClick: x,
                      className: O.DT,
                      tabIndex: d,
                      children: (0, t.jsx)(b.P, { size: "xxs", color: "currentColor" }),
                  }),
              })
            : void 0;
    return (0, t.jsx)(R.vN, {
        children: (0, t.jsx)("div", {
            ...u,
            tabIndex: d,
            onContextMenu: s,
            className: O.b6,
            "aria-labelledby": c,
            children: (0, t.jsx)(W, { role: l, className: n ? O.nO : void 0, trailing: h, labelId: c, ...o }),
        }),
    });
}
function Y(e) {
    let { roleCount: l, children: n } = e,
        r = i.useMemo(() => `roles-${(0, o.A)()}`, []),
        s = (0, d.Ay)({ id: r, isEnabled: !0, scrollToStart: D.js$, scrollToEnd: D.js$, wrap: !0 }),
        u = H.intl.formatToPlainString(H.t.PCs0oo, { numRoles: l });
    return (0, t.jsx)(a.hD, {
        navigator: s,
        children: (0, t.jsx)(a.PR, {
            children: (e) => {
                let { ref: l, ...i } = e;
                return (0, t.jsx)("div", { ...i, ref: l, "aria-label": u, className: O.JK, children: n });
            },
        }),
    });
}
function $(e) {
    let { userId: l, guild: n, showLabel: r = !1, onAddRole: o, buttonRef: a } = e,
        d = (0, u.bG)([G.default], () => G.default.getCurrentUser()),
        c = null != d ? T.HJ(n, d.id) : null,
        x = (0, u.bG)([L.Ay], () => L.Ay.getMember(n.id, l)),
        h = x?.roles ?? [],
        m = (0, u.bG)([N.A], () => N.A.roleStyle),
        b = i.useRef(null),
        R = a ?? b,
        A = i.useCallback(
            (e) => {
                o?.();
                let t = L.Ay.getMember(n.id, l),
                    i = t?.roles ?? [];
                i.includes(e) || (i = [...i, e]), w.A.updateMemberRoles(n.id, l, i, [e], []);
            },
            [n.id, l, o],
        ),
        p = (e) => !(0, P.Oy)(e) && !e.managed && _.A.isRoleHigher(n, c, e) && -1 === h.indexOf(e.id);
    return (0, t.jsx)(C.Y, {
        targetElementRef: R,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, t.jsx)(z.A, { guild: n, roleStyle: m, roleFilter: p, onSelect: A, onClose: l });
        },
        children: (e) =>
            (0, t.jsx)(g.m, {
                text: H.intl.string(H.t.e3Wlyw),
                shouldShow: !r,
                ariaHidden: !0,
                children: (0, t.jsxs)(j.D, {
                    innerRef: R,
                    "aria-label": H.intl.string(H.t.e3Wlyw),
                    className: s()(O.c9, { [O.MS]: r }),
                    ...e,
                    children: [
                        (0, t.jsx)(v.j, { size: "sm", color: "currentColor" }),
                        r &&
                            (0, t.jsx)(f.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: H.intl.string(H.t.e3Wlyw),
                            }),
                    ],
                }),
            }),
    });
}
function B(e) {
    let { userId: l, guild: n, roles: t, allowEditing: r, readOnly: s } = e,
        o = (0, u.bG)([G.default], () => G.default.getCurrentUser()),
        a = I.Q_.useSetting(),
        [d] = (0, u.yK)([_.A], () => [_.A.can(D.xBc.MANAGE_ROLES, n), _.A.getGuildVersion(n.id)]),
        c = null != o ? T.HJ(n, o.id) : null,
        g = i.useMemo(() => {
            let e = new Set();
            return (
                s ||
                    !r ||
                    t.forEach((t) => {
                        (t.tags?.guild_connections === null ? l === o?.id : d && T.wO(n, o?.id, c, t) && !t.managed) &&
                            e.add(t.id);
                    }),
                e
            );
        }, [s, r, t, l, o?.id, d, n, c]),
        x = !s && a,
        h = !s && r && d;
    return {
        canAddRoles: h,
        canRemoveAnyRoles: g.size > 0,
        isRoleRemovable: i.useCallback((e) => g.has(e), [g]),
        hasDeveloperContextMenu: x,
    };
}
function Q(e, l, n) {
    return i.useCallback(
        (t) => {
            n?.();
            let i = L.Ay.getMember(l, e),
                r = (i?.roles ?? []).filter((e) => e !== t.id);
            t.tags?.guild_connections === null
                ? y.A.unassignGuildRoleConnection(l, t.id)
                : w.A.updateMemberRoles(l, e, r, [], [t.id]);
        },
        [n, l, e],
    );
}
function U() {
    return i.useCallback((e, l) => {
        (0, p.L3)(e, async () => {
            let { default: e } = await n.e("15687").then(n.bind(n, 646938));
            return (n) => (0, t.jsx)(e, { ...n, id: l, label: H.intl.string(H.t.sMsaLg) });
        });
    }, []);
}
function q(e) {
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
            canRemoveAnyRoles: g,
            hasDeveloperContextMenu: x,
            isRoleRemovable: h,
        } = B({ userId: l, guild: n, roles: i, allowEditing: u, readOnly: d }),
        m = Q(l, n.id, o),
        f = U(),
        j = () => (0, t.jsx)($, { userId: l, guild: n, showLabel: 0 === i.length, onAddRole: a });
    return 0 === i.length
        ? c
            ? (0, t.jsx)("div", { className: s()(O.MR, r), children: j() })
            : null
        : (0, t.jsx)("div", {
              className: s()(O.MR, r),
              children:
                  c || g || x
                      ? (0, t.jsxs)(Y, {
                            roleCount: i.length,
                            children: [
                                i.map((e) =>
                                    (0, t.jsx)(
                                        X,
                                        {
                                            role: e,
                                            guildId: n.id,
                                            canRemove: h(e.id),
                                            onRemoveRole: g ? m : void 0,
                                            onContextMenu: x ? (l) => f(l, e.id) : void 0,
                                        },
                                        e.id,
                                    ),
                                ),
                                c ? j() : null,
                            ],
                        })
                      : (0, t.jsx)("ul", {
                            className: O.nt,
                            "aria-label": H.intl.string(H.t["LPJmL/"]),
                            children: i.map((e) =>
                                (0, t.jsx)("li", { children: (0, t.jsx)(W, { role: e, guildId: n.id }) }, e.id),
                            ),
                        }),
          });
}
function F(e) {
    let { isExpanded: l, overflowCount: n, onClick: i, buttonRef: r } = e,
        o = l ? H.intl.string(H.t.XnXtCt) : H.intl.string(H.t.DY6n4q),
        a = l ? H.intl.string(H.t.XnXtCt) : H.intl.formatToPlainString(H.t.zr0Y5R, { numberOfItems: n });
    return (0, t.jsx)(g.m, {
        text: o,
        ariaHidden: !0,
        children: (0, t.jsx)(j.D, {
            innerRef: r,
            "aria-label": a,
            onClick: i,
            className: s()(O.s6, { [O.X1]: !l }),
            children: l
                ? (0, t.jsx)(A.n, { size: "xs", color: "currentColor" })
                : (0, t.jsx)(f.E, { variant: "text-xs/normal", color: "none", children: `+${n}` }),
        }),
    });
}
let K = (e) => {
    if (null == e) return 0;
    let { width: l } = e.getBoundingClientRect();
    return l > 0 ? l + 4 : 0;
};
function V(e) {
    let {
            userId: l,
            guild: n,
            roles: r,
            className: o,
            onAddRole: a,
            onRemoveRole: d,
            onExpand: u,
            onCollapse: c,
            allowEditing: g = !1,
            readOnly: x = !1,
        } = e,
        {
            canAddRoles: h,
            canRemoveAnyRoles: m,
            hasDeveloperContextMenu: f,
            isRoleRemovable: j,
        } = B({ userId: l, guild: n, roles: r, allowEditing: g, readOnly: x }),
        b = Q(l, n.id, d),
        R = U(),
        C = i.useRef({}),
        v = (e, l) => {
            null != l ? (C.current[e] = l) : delete C.current[e];
        },
        [A, p] = i.useState(r),
        [y, N] = i.useState(268),
        [M, S] = i.useState(!1),
        w = i.useRef(null),
        k = i.useRef(null),
        E = i.useRef(0);
    i.useLayoutEffect(() => {
        E.current = 0;
    }, [r]),
        i.useLayoutEffect(() => {
            if (M) return;
            let e = K(w.current),
                l = K(k.current),
                n = [],
                t = 268 - e - l;
            for (let e = 0; e < 2; e++) {
                let l = 1 === e ? t : 268;
                for (let e = 0, t = n.length; t < r.length; t++) {
                    let i = r[t],
                        s = C.current[i.id];
                    if (null == s) {
                        0 === E.current && n.push(i);
                        continue;
                    }
                    let o = Math.min(s.getBoundingClientRect().width, l);
                    if (e + o > l) break;
                    (e += o + 4), n.push(i);
                }
            }
            p(n.length === A.length ? A : n), N(t), E.current++;
        }, [r, A, M]);
    let I = M ? r : A,
        P = () => {
            M ? (c?.(), S(!1)) : (u?.(), S(!0));
        },
        L = () =>
            A.length < r.length
                ? (0, t.jsx)(F, { isExpanded: M, overflowCount: r.length - A.length, onClick: P, buttonRef: w })
                : null,
        _ = () => (0, t.jsx)($, { buttonRef: k, userId: l, guild: n, showLabel: 0 === r.length, onAddRole: a });
    return 0 === r.length
        ? h
            ? (0, t.jsx)("div", { className: s()(O.MR, o), children: _() })
            : null
        : (0, t.jsx)("div", {
              className: s()(O.MR, o),
              children:
                  h || m || f
                      ? (0, t.jsxs)(Y, {
                            roleCount: r.length,
                            children: [
                                I.map((e, l) =>
                                    (0, t.jsx)(
                                        X,
                                        {
                                            role: e,
                                            guildId: n.id,
                                            canRemove: j(e.id),
                                            onRemoveRole: m ? b : void 0,
                                            itemRef: (l) => v(e.id, l),
                                            onContextMenu: f ? (l) => R(l, e.id) : void 0,
                                            style: { maxWidth: M || l !== A.length - 1 ? 268 : y },
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
                                    "aria-label": H.intl.string(H.t["LPJmL/"]),
                                    children: I.map((e, l) =>
                                        (0, t.jsx)(
                                            "li",
                                            {
                                                children: (0, t.jsx)(W, {
                                                    itemRef: (l) => v(e.id, l),
                                                    role: e,
                                                    guildId: n.id,
                                                    style: { maxWidth: M || l !== A.length - 1 ? 268 : y },
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
