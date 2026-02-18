"use strict";
n.d(t, { Q: () => $, Y: () => B }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(835245),
    l = n(837381),
    u = n(884362),
    c = n(311907),
    d = n(827734),
    _ = n(435371),
    f = n(397927),
    h = n(442433),
    p = n(686956),
    g = n(775602),
    E = n(915089),
    A = n(201275),
    I = n(997509),
    T = n(967144),
    y = n(657048),
    S = n(253932),
    v = n(34457),
    C = n(696451),
    b = n(576705),
    N = n(287809),
    R = n(488926),
    O = n(465738),
    D = n(652215),
    L = n(985018),
    w = n(456665);
let x = d.A.unsafe_rawColors.PRIMARY_300;
function P(e) {
    let { role: t, guildId: n, trailing: i, itemRef: a, labelId: o, className: l, style: u } = e,
        d = (0, A.$7)({ roleId: t.id, size: 12, guildId: n }),
        h = (0, c.bG)([g.A], () => g.A.roleStyle),
        p = (0, T.X_)(n, t, t.colorStrings),
        E = t.tags?.guild_connections === null,
        I = (0, f.rdh)(x).hex(),
        S = t.colorString ?? I,
        v = () =>
            "dot" === h
                ? (0, r.jsx)(f.WYI, { className: w.m4, color: S, background: !1, colors: p, tooltip: !1 })
                : (0, r.jsx)(f.RYH, { color: S, colors: p });
    return (0, r.jsxs)("div", {
        ref: a,
        className: s()(w.JC, l),
        style: u,
        children: [
            v(),
            E && (0, r.jsx)(f.qYV, { className: w.AP, size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(_.m_, {
                text: t.name,
                overflowOnly: !0,
                ariaHidden: !0,
                children: (0, r.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: w.S3,
                    id: o,
                    children: t.name,
                }),
            }),
            null != d ? (0, r.jsx)(y.A, { className: w.UT, ...d, enableTooltip: !1 }) : null,
            i,
        ],
    });
}
function M(e) {
    let { role: t, canRemove: n, onRemoveRole: a, onContextMenu: s, ...o } = e,
        { tabIndex: u, ...c } = (0, l.rm)(t.id),
        d = (0, E.GV)(),
        h = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), a?.(t);
            },
            [a, t],
        ),
        p = n
            ? (0, r.jsx)(_.m_, {
                  text: L.intl.string(L.t["T+3Adg"]),
                  spacing: 4,
                  ariaHidden: !0,
                  children: (0, r.jsx)(f.DUT, {
                      "aria-label": L.intl.formatToPlainString(L.t.QrxwhY, { roleName: t.name }),
                      onClick: h,
                      className: w.DT,
                      tabIndex: u,
                      children: (0, r.jsx)(f.PGe, { size: "xxs", color: "currentColor" }),
                  }),
              })
            : void 0;
    return (0, r.jsx)(f.vN3, {
        children: (0, r.jsx)("div", {
            ...c,
            tabIndex: u,
            onContextMenu: s,
            className: w.b6,
            "aria-labelledby": d,
            children: (0, r.jsx)(P, { role: t, className: n ? w.nO : void 0, trailing: p, labelId: d, ...o }),
        }),
    });
}
function k(e) {
    let { roleCount: t, children: n } = e,
        a = i.useMemo(() => `roles-${(0, o.A)()}`, []),
        s = (0, u.Ay)({ id: a, isEnabled: !0, scrollToStart: D.js$, scrollToEnd: D.js$, wrap: !0 }),
        c = L.intl.formatToPlainString(L.t.PCs0oo, { numRoles: t });
    return (0, r.jsx)(l.hD, {
        navigator: s,
        children: (0, r.jsx)(l.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, r.jsx)("div", { ...i, ref: t, "aria-label": c, className: w.JK, children: n });
            },
        }),
    });
}
function U(e) {
    let { userId: t, guild: n, showLabel: a = !1, onAddRole: o, buttonRef: l } = e,
        u = (0, c.bG)([N.default], () => N.default.getCurrentUser()),
        d = null != u ? R.HJ(n, u.id) : null,
        h = (0, c.bG)([C.Ay], () => C.Ay.getMember(n.id, t)),
        p = h?.roles ?? [],
        E = (0, c.bG)([g.A], () => g.A.roleStyle),
        A = i.useRef(null),
        T = l ?? A,
        y = i.useCallback(
            (e) => {
                o?.();
                let r = C.Ay.getMember(n.id, t),
                    i = r?.roles ?? [];
                i.includes(e) || (i = [...i, e]), I.A.updateMemberRoles(n.id, t, i, [e], []);
            },
            [n.id, t, o],
        ),
        S = (e) => !(0, v.Oy)(e) && !e.managed && b.A.isRoleHigher(n, d, e) && -1 === p.indexOf(e.id);
    return (0, r.jsx)(f.YNO, {
        targetElementRef: T,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(O.A, { guild: n, roleStyle: E, roleFilter: S, onSelect: y, onClose: t });
        },
        children: (e) =>
            (0, r.jsx)(_.m_, {
                text: L.intl.string(L.t.e3Wlyw),
                shouldShow: !a,
                ariaHidden: !0,
                children: (0, r.jsxs)(f.DUT, {
                    innerRef: T,
                    "aria-label": L.intl.string(L.t.e3Wlyw),
                    className: s()(w.c9, { [w.MS]: a }),
                    ...e,
                    children: [
                        (0, r.jsx)(f.j96, { size: "sm", color: "currentColor" }),
                        a &&
                            (0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: L.intl.string(L.t.e3Wlyw),
                            }),
                    ],
                }),
            }),
    });
}
function G(e) {
    let { userId: t, guild: n, roles: r, allowEditing: a, readOnly: s } = e,
        o = (0, c.bG)([N.default], () => N.default.getCurrentUser()),
        l = S.Q_.useSetting(),
        [u] = (0, c.yK)([b.A], () => [b.A.can(D.xBc.MANAGE_ROLES, n), b.A.getGuildVersion(n.id)]),
        d = null != o ? R.HJ(n, o.id) : null,
        _ = i.useMemo(() => {
            let e = new Set();
            return (
                s ||
                    !a ||
                    r.forEach((r) => {
                        (r.tags?.guild_connections === null ? t === o?.id : u && R.wO(n, o?.id, d, r) && !r.managed) &&
                            e.add(r.id);
                    }),
                e
            );
        }, [s, a, r, t, o?.id, u, n, d]),
        f = !s && l,
        h = !s && a && u;
    return {
        canAddRoles: h,
        canRemoveAnyRoles: _.size > 0,
        isRoleRemovable: i.useCallback((e) => _.has(e), [_]),
        hasDeveloperContextMenu: f,
    };
}
function F(e, t, n) {
    return i.useCallback(
        (r) => {
            n?.();
            let i = C.Ay.getMember(t, e),
                a = (i?.roles ?? []).filter((e) => e !== r.id);
            r.tags?.guild_connections === null
                ? p.A.unassignGuildRoleConnection(t, r.id)
                : I.A.updateMemberRoles(t, e, a, [], [r.id]);
        },
        [n, t, e],
    );
}
function V() {
    return i.useCallback((e, t) => {
        (0, h.L3)(e, async () => {
            let { default: e } = await n.e("15687").then(n.bind(n, 646938));
            return (n) => (0, r.jsx)(e, { ...n, id: t, label: L.intl.string(L.t.sMsaLg) });
        });
    }, []);
}
function B(e) {
    let {
            userId: t,
            guild: n,
            roles: i,
            className: a,
            onRemoveRole: o,
            onAddRole: l,
            readOnly: u = !1,
            allowEditing: c = !1,
        } = e,
        {
            canAddRoles: d,
            canRemoveAnyRoles: _,
            hasDeveloperContextMenu: f,
            isRoleRemovable: h,
        } = G({ userId: t, guild: n, roles: i, allowEditing: c, readOnly: u }),
        p = d || _ || f,
        g = F(t, n.id, o),
        E = V(),
        A = () => (0, r.jsx)(U, { userId: t, guild: n, showLabel: 0 === i.length, onAddRole: l });
    return 0 === i.length
        ? d
            ? (0, r.jsx)("div", { className: s()(w.MR, a), children: A() })
            : null
        : (0, r.jsx)("div", {
              className: s()(w.MR, a),
              children: p
                  ? (0, r.jsxs)(k, {
                        roleCount: i.length,
                        children: [
                            i.map((e) =>
                                (0, r.jsx)(
                                    M,
                                    {
                                        role: e,
                                        guildId: n.id,
                                        canRemove: h(e.id),
                                        onRemoveRole: _ ? g : void 0,
                                        onContextMenu: f ? (t) => E(t, e.id) : void 0,
                                    },
                                    e.id,
                                ),
                            ),
                            d ? A() : null,
                        ],
                    })
                  : (0, r.jsx)("ul", {
                        className: w.nt,
                        "aria-label": L.intl.string(L.t["LPJmL/"]),
                        children: i.map((e) =>
                            (0, r.jsx)("li", { children: (0, r.jsx)(P, { role: e, guildId: n.id }) }, e.id),
                        ),
                    }),
          });
}
function j(e) {
    let { isExpanded: t, overflowCount: n, onClick: i, buttonRef: a } = e,
        o = t ? L.intl.string(L.t.XnXtCt) : L.intl.string(L.t.DY6n4q),
        l = t ? L.intl.string(L.t.XnXtCt) : L.intl.formatToPlainString(L.t.zr0Y5R, { numberOfItems: n });
    return (0, r.jsx)(_.m_, {
        text: o,
        ariaHidden: !0,
        children: (0, r.jsx)(f.DUT, {
            innerRef: a,
            "aria-label": l,
            onClick: i,
            className: s()(w.s6, { [w.X1]: !t }),
            children: t
                ? (0, r.jsx)(f.n2b, { size: "xs", color: "currentColor" })
                : (0, r.jsx)(f.Text, { variant: "text-xs/normal", color: "none", children: `+${n}` }),
        }),
    });
}
let H = 4,
    Y = 268,
    W = 2,
    K = (e) => {
        if (null == e) return 0;
        let { width: t } = e.getBoundingClientRect();
        return t > 0 ? t + H : 0;
    };
function $(e) {
    let {
            userId: t,
            guild: n,
            roles: a,
            className: o,
            onAddRole: l,
            onRemoveRole: u,
            onExpand: c,
            onCollapse: d,
            allowEditing: _ = !1,
            readOnly: f = !1,
        } = e,
        {
            canAddRoles: h,
            canRemoveAnyRoles: p,
            hasDeveloperContextMenu: g,
            isRoleRemovable: E,
        } = G({ userId: t, guild: n, roles: a, allowEditing: _, readOnly: f }),
        A = h || p || g,
        I = F(t, n.id, u),
        T = V(),
        y = i.useRef({}),
        S = (e, t) => {
            null != t ? (y.current[e] = t) : delete y.current[e];
        },
        [v, C] = i.useState(a),
        [b, N] = i.useState(Y),
        [R, O] = i.useState(!1),
        D = i.useRef(null),
        x = i.useRef(null),
        B = i.useRef(0);
    i.useLayoutEffect(() => {
        B.current = 0;
    }, [a]),
        i.useLayoutEffect(() => {
            if (R) return;
            let e = K(D.current),
                t = K(x.current),
                n = [],
                r = Y - e - t;
            for (let e = 0; e < W; e++) {
                let t = e === W - 1 ? r : Y;
                for (let e = 0, r = n.length; r < a.length; r++) {
                    let i = a[r],
                        s = y.current[i.id];
                    if (null == s) {
                        0 === B.current && n.push(i);
                        continue;
                    }
                    let o = Math.min(s.getBoundingClientRect().width, t);
                    if (e + o > t) break;
                    (e += o + H), n.push(i);
                }
            }
            C(n.length === v.length ? v : n), N(r), B.current++;
        }, [a, v, R]);
    let $ = R ? a : v,
        z = () => {
            R ? (d?.(), O(!1)) : (c?.(), O(!0));
        },
        q = () =>
            v.length < a.length
                ? (0, r.jsx)(j, { isExpanded: R, overflowCount: a.length - v.length, onClick: z, buttonRef: D })
                : null,
        X = () => (0, r.jsx)(U, { buttonRef: x, userId: t, guild: n, showLabel: 0 === a.length, onAddRole: l });
    return 0 === a.length
        ? h
            ? (0, r.jsx)("div", { className: s()(w.MR, o), children: X() })
            : null
        : (0, r.jsx)("div", {
              className: s()(w.MR, o),
              children: A
                  ? (0, r.jsxs)(k, {
                        roleCount: a.length,
                        children: [
                            $.map((e, t) =>
                                (0, r.jsx)(
                                    M,
                                    {
                                        role: e,
                                        guildId: n.id,
                                        canRemove: E(e.id),
                                        onRemoveRole: p ? I : void 0,
                                        itemRef: (t) => S(e.id, t),
                                        onContextMenu: g ? (t) => T(t, e.id) : void 0,
                                        style: { maxWidth: R || t !== v.length - 1 ? Y : b },
                                    },
                                    e.id,
                                ),
                            ),
                            q(),
                            h ? X() : null,
                        ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("ul", {
                                className: w.nt,
                                "aria-label": L.intl.string(L.t["LPJmL/"]),
                                children: $.map((e, t) =>
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(P, {
                                                itemRef: (t) => S(e.id, t),
                                                role: e,
                                                guildId: n.id,
                                                style: { maxWidth: R || t !== v.length - 1 ? Y : b },
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                            q(),
                        ],
                    }),
          });
}
