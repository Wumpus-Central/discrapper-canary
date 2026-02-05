"use strict";
n.d(t, { Q: () => K, Y: () => F }), n(321073);
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
    p = n(442433),
    h = n(686956),
    m = n(775602),
    g = n(915089),
    E = n(201275),
    A = n(997509),
    I = n(967144),
    T = n(657048),
    y = n(253932),
    S = n(34457),
    v = n(696451),
    C = n(576705),
    b = n(287809),
    N = n(488926),
    R = n(465738),
    O = n(652215),
    D = n(985018),
    L = n(456665);
let w = d.A.unsafe_rawColors.PRIMARY_300;
function x(e) {
    let { role: t, guildId: n, trailing: i, itemRef: a, labelId: o, className: l, style: u } = e,
        d = (0, E.$7)({ roleId: t.id, size: 12, guildId: n }),
        p = (0, c.bG)([m.A], () => m.A.roleStyle),
        h = (0, I.X_)(n, t, t.colorStrings),
        g = t.tags?.guild_connections === null,
        A = (0, f.rdh)(w).hex(),
        y = t.colorString ?? A,
        S = () =>
            "dot" === p
                ? (0, r.jsx)(f.WYI, { className: L.m4, color: y, background: !1, colors: h, tooltip: !1 })
                : (0, r.jsx)(f.RYH, { color: y, colors: h });
    return (0, r.jsxs)("div", {
        ref: a,
        className: s()(L.JC, l),
        style: u,
        children: [
            S(),
            g && (0, r.jsx)(f.qYV, { className: L.AP, size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(_.m_, {
                text: t.name,
                overflowOnly: !0,
                ariaHidden: !0,
                children: (0, r.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: L.S3,
                    id: o,
                    children: t.name,
                }),
            }),
            null != d ? (0, r.jsx)(T.A, { className: L.UT, ...d, enableTooltip: !1 }) : null,
            i,
        ],
    });
}
function P(e) {
    let { role: t, canRemove: n, onRemoveRole: a, onContextMenu: s, ...o } = e,
        { tabIndex: u, ...c } = (0, l.rm)(t.id),
        d = (0, g.GV)(),
        p = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), a?.(t);
            },
            [a, t],
        ),
        h = n
            ? (0, r.jsx)(_.m_, {
                  text: D.intl.string(D.t["T+3Adg"]),
                  spacing: 4,
                  ariaHidden: !0,
                  children: (0, r.jsx)(f.DUT, {
                      "aria-label": D.intl.formatToPlainString(D.t.QrxwhY, { roleName: t.name }),
                      onClick: p,
                      className: L.DT,
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
            className: L.b6,
            "aria-labelledby": d,
            children: (0, r.jsx)(x, { role: t, className: n ? L.nO : void 0, trailing: h, labelId: d, ...o }),
        }),
    });
}
function M(e) {
    let { roleCount: t, children: n } = e,
        a = i.useMemo(() => `roles-${(0, o.A)()}`, []),
        s = (0, u.Ay)({ id: a, isEnabled: !0, scrollToStart: O.js$, scrollToEnd: O.js$, wrap: !0 }),
        c = D.intl.formatToPlainString(D.t.PCs0oo, { numRoles: t });
    return (0, r.jsx)(l.hD, {
        navigator: s,
        children: (0, r.jsx)(l.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, r.jsx)("div", { ...i, ref: t, "aria-label": c, className: L.JK, children: n });
            },
        }),
    });
}
function k(e) {
    let { userId: t, guild: n, showLabel: a = !1, onAddRole: o, buttonRef: l } = e,
        u = (0, c.bG)([b.default], () => b.default.getCurrentUser()),
        d = null != u ? N.HJ(n, u.id) : null,
        p = (0, c.bG)([v.Ay], () => v.Ay.getMember(n.id, t)),
        h = p?.roles ?? [],
        g = (0, c.bG)([m.A], () => m.A.roleStyle),
        E = i.useRef(null),
        I = l ?? E,
        T = i.useCallback(
            (e) => {
                o?.();
                let r = v.Ay.getMember(n.id, t),
                    i = r?.roles ?? [];
                i.includes(e) || (i = [...i, e]), A.A.updateMemberRoles(n.id, t, i, [e], []);
            },
            [n.id, t, o],
        ),
        y = (e) => !(0, S.Oy)(e) && !e.managed && C.A.isRoleHigher(n, d, e) && -1 === h.indexOf(e.id);
    return (0, r.jsx)(f.YNO, {
        targetElementRef: I,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(R.A, { guild: n, roleStyle: g, roleFilter: y, onSelect: T, onClose: t });
        },
        children: (e) =>
            (0, r.jsx)(_.m_, {
                text: D.intl.string(D.t.e3Wlyw),
                shouldShow: !a,
                ariaHidden: !0,
                children: (0, r.jsxs)(f.DUT, {
                    innerRef: I,
                    "aria-label": D.intl.string(D.t.e3Wlyw),
                    className: s()(L.c9, { [L.MS]: a }),
                    ...e,
                    children: [
                        (0, r.jsx)(f.j96, { size: "sm", color: "currentColor" }),
                        a &&
                            (0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: D.intl.string(D.t.e3Wlyw),
                            }),
                    ],
                }),
            }),
    });
}
function U(e) {
    let { userId: t, guild: n, roles: r, allowEditing: a, readOnly: s } = e,
        o = (0, c.bG)([b.default], () => b.default.getCurrentUser()),
        l = y.Q_.useSetting(),
        [u] = (0, c.yK)([C.A], () => [C.A.can(O.xBc.MANAGE_ROLES, n), C.A.getGuildVersion(n.id)]),
        d = null != o ? N.HJ(n, o.id) : null,
        _ = i.useMemo(() => {
            let e = new Set();
            return (
                s ||
                    !a ||
                    r.forEach((r) => {
                        (r.tags?.guild_connections === null ? t === o?.id : u && N.wO(n, o?.id, d, r)) && e.add(r.id);
                    }),
                e
            );
        }, [s, a, r, t, o?.id, u, n, d]),
        f = !s && l,
        p = !s && a && u;
    return {
        canAddRoles: p,
        canRemoveAnyRoles: _.size > 0,
        isRoleRemovable: i.useCallback((e) => _.has(e), [_]),
        hasDeveloperContextMenu: f,
    };
}
function G(e, t, n) {
    return i.useCallback(
        (r) => {
            n?.();
            let i = v.Ay.getMember(t, e),
                a = (i?.roles ?? []).filter((e) => e !== r.id);
            r.tags?.guild_connections === null
                ? h.A.unassignGuildRoleConnection(t, r.id)
                : A.A.updateMemberRoles(t, e, a, [], [r.id]);
        },
        [n, t, e],
    );
}
function V() {
    return i.useCallback((e, t) => {
        (0, p.L3)(e, async () => {
            let { default: e } = await n.e("15687").then(n.bind(n, 646938));
            return (n) => (0, r.jsx)(e, { ...n, id: t, label: D.intl.string(D.t.sMsaLg) });
        });
    }, []);
}
function F(e) {
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
            isRoleRemovable: p,
        } = U({ userId: t, guild: n, roles: i, allowEditing: c, readOnly: u }),
        h = d || _ || f,
        m = G(t, n.id, o),
        g = V(),
        E = () => (0, r.jsx)(k, { userId: t, guild: n, showLabel: 0 === i.length, onAddRole: l });
    return 0 === i.length
        ? d
            ? (0, r.jsx)("div", { className: s()(L.MR, a), children: E() })
            : null
        : (0, r.jsx)("div", {
              className: s()(L.MR, a),
              children: h
                  ? (0, r.jsxs)(M, {
                        roleCount: i.length,
                        children: [
                            i.map((e) =>
                                (0, r.jsx)(
                                    P,
                                    {
                                        role: e,
                                        guildId: n.id,
                                        canRemove: p(e.id),
                                        onRemoveRole: _ ? m : void 0,
                                        onContextMenu: f ? (t) => g(t, e.id) : void 0,
                                    },
                                    e.id,
                                ),
                            ),
                            d ? E() : null,
                        ],
                    })
                  : (0, r.jsx)("ul", {
                        className: L.nt,
                        "aria-label": D.intl.string(D.t["LPJmL/"]),
                        children: i.map((e) =>
                            (0, r.jsx)("li", { children: (0, r.jsx)(x, { role: e, guildId: n.id }) }, e.id),
                        ),
                    }),
          });
}
function B(e) {
    let { isExpanded: t, overflowCount: n, onClick: i, buttonRef: a } = e,
        o = t ? D.intl.string(D.t.XnXtCt) : D.intl.string(D.t.DY6n4q),
        l = t ? D.intl.string(D.t.XnXtCt) : D.intl.formatToPlainString(D.t.zr0Y5R, { numberOfItems: n });
    return (0, r.jsx)(_.m_, {
        text: o,
        ariaHidden: !0,
        children: (0, r.jsx)(f.DUT, {
            innerRef: a,
            "aria-label": l,
            onClick: i,
            className: s()(L.s6, { [L.X1]: !t }),
            children: t
                ? (0, r.jsx)(f.n2b, { size: "xs", color: "currentColor" })
                : (0, r.jsx)(f.Text, { variant: "text-xs/normal", color: "none", children: `+${n}` }),
        }),
    });
}
let j = 4,
    H = 268,
    Y = 2,
    W = (e) => {
        if (null == e) return 0;
        let { width: t } = e.getBoundingClientRect();
        return t > 0 ? t + j : 0;
    };
function K(e) {
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
            canAddRoles: p,
            canRemoveAnyRoles: h,
            hasDeveloperContextMenu: m,
            isRoleRemovable: g,
        } = U({ userId: t, guild: n, roles: a, allowEditing: _, readOnly: f }),
        E = p || h || m,
        A = G(t, n.id, u),
        I = V(),
        T = i.useRef({}),
        y = (e, t) => {
            null != t ? (T.current[e] = t) : delete T.current[e];
        },
        [S, v] = i.useState(a),
        [C, b] = i.useState(H),
        [N, R] = i.useState(!1),
        O = i.useRef(null),
        w = i.useRef(null),
        F = i.useRef(0);
    i.useLayoutEffect(() => {
        F.current = 0;
    }, [a]),
        i.useLayoutEffect(() => {
            if (N) return;
            let e = W(O.current),
                t = W(w.current),
                n = [],
                r = H - e - t;
            for (let e = 0; e < Y; e++) {
                let t = e === Y - 1 ? r : H;
                for (let e = 0, r = n.length; r < a.length; r++) {
                    let i = a[r],
                        s = T.current[i.id];
                    if (null == s) {
                        0 === F.current && n.push(i);
                        continue;
                    }
                    let o = Math.min(s.getBoundingClientRect().width, t);
                    if (e + o > t) break;
                    (e += o + j), n.push(i);
                }
            }
            v(n.length === S.length ? S : n), b(r), F.current++;
        }, [a, S, N]);
    let K = N ? a : S,
        z = () => {
            N ? (d?.(), R(!1)) : (c?.(), R(!0));
        },
        $ = () =>
            S.length < a.length
                ? (0, r.jsx)(B, { isExpanded: N, overflowCount: a.length - S.length, onClick: z, buttonRef: O })
                : null,
        q = () => (0, r.jsx)(k, { buttonRef: w, userId: t, guild: n, showLabel: 0 === a.length, onAddRole: l });
    return 0 === a.length
        ? p
            ? (0, r.jsx)("div", { className: s()(L.MR, o), children: q() })
            : null
        : (0, r.jsx)("div", {
              className: s()(L.MR, o),
              children: E
                  ? (0, r.jsxs)(M, {
                        roleCount: a.length,
                        children: [
                            K.map((e, t) =>
                                (0, r.jsx)(
                                    P,
                                    {
                                        role: e,
                                        guildId: n.id,
                                        canRemove: g(e.id),
                                        onRemoveRole: h ? A : void 0,
                                        itemRef: (t) => y(e.id, t),
                                        onContextMenu: m ? (t) => I(t, e.id) : void 0,
                                        style: { maxWidth: N || t !== S.length - 1 ? H : C },
                                    },
                                    e.id,
                                ),
                            ),
                            $(),
                            p ? q() : null,
                        ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("ul", {
                                className: L.nt,
                                "aria-label": D.intl.string(D.t["LPJmL/"]),
                                children: K.map((e, t) =>
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(x, {
                                                itemRef: (t) => y(e.id, t),
                                                role: e,
                                                guildId: n.id,
                                                style: { maxWidth: N || t !== S.length - 1 ? H : C },
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                            $(),
                        ],
                    }),
          });
}
