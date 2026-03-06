"use strict";
n.d(t, { Ql: () => K, YR: () => V, g1: () => M }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(915089),
    g = n(201275),
    A = n(997509),
    I = n(967144),
    T = n(657048),
    S = n(253932),
    y = n(34457),
    v = n(696451),
    N = n(576705),
    C = n(287809),
    R = n(488926),
    O = n(465738),
    b = n(652215),
    D = n(985018),
    L = n(984331);
let w = d.A.unsafe_rawColors.PRIMARY_300;
function M(e) {
    let { role: t, guildId: n, trailing: i, itemRef: s, labelId: o, className: l, style: u } = e,
        d = (0, g.$7)({ roleId: t.id, size: 12, guildId: n }),
        p = (0, c.bG)([m.A], () => m.A.roleStyle),
        h = (0, I.X_)(n, t, t.colorStrings),
        E = t.tags?.guild_connections === null,
        A = (0, f.rdh)(w).hex(),
        S = t.colorString ?? A,
        y = () =>
            "dot" === p
                ? (0, r.jsx)(f.WYI, { className: L.m4, color: S, background: !1, colors: h, tooltip: !1 })
                : (0, r.jsx)(f.RYH, { color: S, colors: h });
    return (0, r.jsxs)("div", {
        ref: s,
        className: a()(L.JC, l),
        style: u,
        children: [
            y(),
            E && (0, r.jsx)(f.qYV, { className: L.AP, size: "custom", width: 12, height: 12, color: "currentColor" }),
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
function x(e) {
    let { role: t, canRemove: n, onRemoveRole: s, onContextMenu: a, ...o } = e,
        { tabIndex: u, ...c } = (0, l.rm)(t.id),
        d = (0, E.GV)(),
        p = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), s?.(t);
            },
            [s, t],
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
            onContextMenu: a,
            className: L.b6,
            "aria-labelledby": d,
            children: (0, r.jsx)(M, { role: t, className: n ? L.nO : void 0, trailing: h, labelId: d, ...o }),
        }),
    });
}
function P(e) {
    let { roleCount: t, children: n } = e,
        s = i.useMemo(() => `roles-${(0, o.A)()}`, []),
        a = (0, u.Ay)({ id: s, isEnabled: !0, scrollToStart: b.js$, scrollToEnd: b.js$, wrap: !0 }),
        c = D.intl.formatToPlainString(D.t.PCs0oo, { numRoles: t });
    return (0, r.jsx)(l.hD, {
        navigator: a,
        children: (0, r.jsx)(l.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, r.jsx)("div", { ...i, ref: t, "aria-label": c, className: L.JK, children: n });
            },
        }),
    });
}
function k(e) {
    let { userId: t, guild: n, showLabel: s = !1, onAddRole: o, buttonRef: l } = e,
        u = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        d = null != u ? R.HJ(n, u.id) : null,
        p = (0, c.bG)([v.Ay], () => v.Ay.getMember(n.id, t)),
        h = p?.roles ?? [],
        E = (0, c.bG)([m.A], () => m.A.roleStyle),
        g = i.useRef(null),
        I = l ?? g,
        T = i.useCallback(
            (e) => {
                o?.();
                let r = v.Ay.getMember(n.id, t),
                    i = r?.roles ?? [];
                i.includes(e) || (i = [...i, e]), A.A.updateMemberRoles(n.id, t, i, [e], []);
            },
            [n.id, t, o],
        ),
        S = (e) => !(0, y.Oy)(e) && !e.managed && N.A.isRoleHigher(n, d, e) && -1 === h.indexOf(e.id);
    return (0, r.jsx)(f.YNO, {
        targetElementRef: I,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(O.A, { guild: n, roleStyle: E, roleFilter: S, onSelect: T, onClose: t });
        },
        children: (e) =>
            (0, r.jsx)(_.m_, {
                text: D.intl.string(D.t.e3Wlyw),
                shouldShow: !s,
                ariaHidden: !0,
                children: (0, r.jsxs)(f.DUT, {
                    innerRef: I,
                    "aria-label": D.intl.string(D.t.e3Wlyw),
                    className: a()(L.c9, { [L.MS]: s }),
                    ...e,
                    children: [
                        (0, r.jsx)(f.j96, { size: "sm", color: "currentColor" }),
                        s &&
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
    let { userId: t, guild: n, roles: r, allowEditing: s, readOnly: a } = e,
        o = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        l = S.Q_.useSetting(),
        [u] = (0, c.yK)([N.A], () => [N.A.can(b.xBc.MANAGE_ROLES, n), N.A.getGuildVersion(n.id)]),
        d = null != o ? R.HJ(n, o.id) : null,
        _ = i.useMemo(() => {
            let e = new Set();
            return (
                a ||
                    !s ||
                    r.forEach((r) => {
                        (r.tags?.guild_connections === null ? t === o?.id : u && R.wO(n, o?.id, d, r) && !r.managed) &&
                            e.add(r.id);
                    }),
                e
            );
        }, [a, s, r, t, o?.id, u, n, d]),
        f = !a && l,
        p = !a && s && u;
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
                s = (i?.roles ?? []).filter((e) => e !== r.id);
            r.tags?.guild_connections === null
                ? h.A.unassignGuildRoleConnection(t, r.id)
                : A.A.updateMemberRoles(t, e, s, [], [r.id]);
        },
        [n, t, e],
    );
}
function F() {
    return i.useCallback((e, t) => {
        (0, p.L3)(e, async () => {
            let { default: e } = await n.e("15687").then(n.bind(n, 646938));
            return (n) => (0, r.jsx)(e, { ...n, id: t, label: D.intl.string(D.t.sMsaLg) });
        });
    }, []);
}
function V(e) {
    let {
            userId: t,
            guild: n,
            roles: i,
            className: s,
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
        E = F(),
        g = () => (0, r.jsx)(k, { userId: t, guild: n, showLabel: 0 === i.length, onAddRole: l });
    return 0 === i.length
        ? d
            ? (0, r.jsx)("div", { className: a()(L.MR, s), children: g() })
            : null
        : (0, r.jsx)("div", {
              className: a()(L.MR, s),
              children: h
                  ? (0, r.jsxs)(P, {
                        roleCount: i.length,
                        children: [
                            i.map((e) =>
                                (0, r.jsx)(
                                    x,
                                    {
                                        role: e,
                                        guildId: n.id,
                                        canRemove: p(e.id),
                                        onRemoveRole: _ ? m : void 0,
                                        onContextMenu: f ? (t) => E(t, e.id) : void 0,
                                    },
                                    e.id,
                                ),
                            ),
                            d ? g() : null,
                        ],
                    })
                  : (0, r.jsx)("ul", {
                        className: L.nt,
                        "aria-label": D.intl.string(D.t["LPJmL/"]),
                        children: i.map((e) =>
                            (0, r.jsx)("li", { children: (0, r.jsx)(M, { role: e, guildId: n.id }) }, e.id),
                        ),
                    }),
          });
}
function B(e) {
    let { isExpanded: t, overflowCount: n, onClick: i, buttonRef: s } = e,
        o = t ? D.intl.string(D.t.XnXtCt) : D.intl.string(D.t.DY6n4q),
        l = t ? D.intl.string(D.t.XnXtCt) : D.intl.formatToPlainString(D.t.zr0Y5R, { numberOfItems: n });
    return (0, r.jsx)(_.m_, {
        text: o,
        ariaHidden: !0,
        children: (0, r.jsx)(f.DUT, {
            innerRef: s,
            "aria-label": l,
            onClick: i,
            className: a()(L.s6, { [L.X1]: !t }),
            children: t
                ? (0, r.jsx)(f.n2b, { size: "xs", color: "currentColor" })
                : (0, r.jsx)(f.Text, { variant: "text-xs/normal", color: "none", children: `+${n}` }),
        }),
    });
}
let H = 4,
    j = 268,
    Y = 2,
    W = (e) => {
        if (null == e) return 0;
        let { width: t } = e.getBoundingClientRect();
        return t > 0 ? t + H : 0;
    };
function K(e) {
    let {
            userId: t,
            guild: n,
            roles: s,
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
            isRoleRemovable: E,
        } = U({ userId: t, guild: n, roles: s, allowEditing: _, readOnly: f }),
        g = p || h || m,
        A = G(t, n.id, u),
        I = F(),
        T = i.useRef({}),
        S = (e, t) => {
            null != t ? (T.current[e] = t) : delete T.current[e];
        },
        [y, v] = i.useState(s),
        [N, C] = i.useState(j),
        [R, O] = i.useState(!1),
        b = i.useRef(null),
        w = i.useRef(null),
        V = i.useRef(0);
    i.useLayoutEffect(() => {
        V.current = 0;
    }, [s]),
        i.useLayoutEffect(() => {
            if (R) return;
            let e = W(b.current),
                t = W(w.current),
                n = [],
                r = j - e - t;
            for (let e = 0; e < Y; e++) {
                let t = e === Y - 1 ? r : j;
                for (let e = 0, r = n.length; r < s.length; r++) {
                    let i = s[r],
                        a = T.current[i.id];
                    if (null == a) {
                        0 === V.current && n.push(i);
                        continue;
                    }
                    let o = Math.min(a.getBoundingClientRect().width, t);
                    if (e + o > t) break;
                    (e += o + H), n.push(i);
                }
            }
            v(n.length === y.length ? y : n), C(r), V.current++;
        }, [s, y, R]);
    let K = R ? s : y,
        $ = () => {
            R ? (d?.(), O(!1)) : (c?.(), O(!0));
        },
        z = () =>
            y.length < s.length
                ? (0, r.jsx)(B, { isExpanded: R, overflowCount: s.length - y.length, onClick: $, buttonRef: b })
                : null,
        q = () => (0, r.jsx)(k, { buttonRef: w, userId: t, guild: n, showLabel: 0 === s.length, onAddRole: l });
    return 0 === s.length
        ? p
            ? (0, r.jsx)("div", { className: a()(L.MR, o), children: q() })
            : null
        : (0, r.jsx)("div", {
              className: a()(L.MR, o),
              children: g
                  ? (0, r.jsxs)(P, {
                        roleCount: s.length,
                        children: [
                            K.map((e, t) =>
                                (0, r.jsx)(
                                    x,
                                    {
                                        role: e,
                                        guildId: n.id,
                                        canRemove: E(e.id),
                                        onRemoveRole: h ? A : void 0,
                                        itemRef: (t) => S(e.id, t),
                                        onContextMenu: m ? (t) => I(t, e.id) : void 0,
                                        style: { maxWidth: R || t !== y.length - 1 ? j : N },
                                    },
                                    e.id,
                                ),
                            ),
                            z(),
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
                                            children: (0, r.jsx)(M, {
                                                itemRef: (t) => S(e.id, t),
                                                role: e,
                                                guildId: n.id,
                                                style: { maxWidth: R || t !== y.length - 1 ? j : N },
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                            z(),
                        ],
                    }),
          });
}
