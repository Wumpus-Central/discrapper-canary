(l.d(n, { Ql: () => el, YR: () => Z, g1: () => $ }), l(321073));
var t = l(477900),
    i = l(582128),
    r = l(503698),
    s = l.n(r),
    o = l(132500),
    a = l(837381),
    d = l(887129),
    u = l(17928),
    c = l(661531),
    x = l(739187),
    g = l(857250),
    h = l(97483),
    m = l(602853),
    f = l(545442),
    j = l(173936),
    R = l(866665),
    b = l(834730),
    C = l(939249),
    y = l(789645),
    v = l(559106),
    p = l(922016),
    A = l(307301),
    w = l(921853),
    N = l(442433),
    M = l(66834),
    S = l(775602),
    k = l(915089),
    P = l(468689),
    E = l(967144),
    I = l(69282),
    L = l(657048),
    _ = l(885386),
    G = l(34457),
    T = l(696451),
    z = l(576705),
    D = l(287809),
    H = l(488926),
    J = l(465738),
    O = l(652215),
    X = l(660183),
    W = l(434367);
let Y = c.A.unsafe_rawColors.PRIMARY_300;
function U() {
    (0, x.P)((0, g.o)(X.intl.string(X.t.fEptJP), h.Ck.FAILURE));
}
function $(e) {
    let { role: n, guildId: l, trailing: i, itemRef: r, labelId: o, className: a, style: d } = e,
        c = (0, I.Xx)({ roleId: n.id, size: 12, guildId: l }),
        x = (0, u.bG)([S.Ay], () => S.Ay.roleStyle),
        g = (0, E.X_)(l, n, n.colorStrings),
        h = n.tags?.guild_connections === null,
        C = (0, m.r)(Y).hex(),
        y = n.colorString ?? C;
    return (0, t.jsxs)("div", {
        ref: r,
        className: s()(W.JC, a),
        style: d,
        children: [
            "dot" === x
                ? (0, t.jsx)(f.W, { className: W.m4, color: y, background: !1, colors: g, tooltip: !1 })
                : (0, t.jsx)(f.R, { color: y, colors: g }),
            h &&
                (0, t.jsx)(j.LinkIcon, {
                    className: W.AP,
                    size: "custom",
                    width: 12,
                    height: 12,
                    color: "currentColor",
                }),
            (0, t.jsx)(R.m, {
                text: n.name,
                overflowOnly: !0,
                ariaHidden: !0,
                children: (0, t.jsx)(b.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: W.S3,
                    id: o,
                    children: n.name,
                }),
            }),
            null != c
                ? (0, t.jsx)("span", { className: W.UT, children: (0, t.jsx)(L.A, { ...c, enableTooltip: !1 }) })
                : null,
            i,
        ],
    });
}
function B(e) {
    let { role: n, canRemove: l, onRemoveRole: r, onContextMenu: s, ...o } = e,
        { tabIndex: d, ...u } = (0, a.rm)(n.id),
        c = (0, k.GV)(),
        x = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), r?.(n));
            },
            [r, n],
        ),
        g = l
            ? (0, t.jsx)(R.m, {
                  text: X.intl.string(X.t["T+3Adg"]),
                  spacing: 4,
                  ariaHidden: !0,
                  children: (0, t.jsx)(C.D, {
                      "aria-label": X.intl.formatToPlainString(X.t.QrxwhY, { roleName: n.name }),
                      onClick: x,
                      className: W.DT,
                      tabIndex: d,
                      children: (0, t.jsx)(y.P, { size: "xxs", color: "currentColor" }),
                  }),
              })
            : void 0;
    return (0, t.jsx)(v.vN, {
        children: (0, t.jsx)("div", {
            ...u,
            tabIndex: d,
            onContextMenu: s,
            className: W.b6,
            "aria-labelledby": c,
            children: (0, t.jsx)($, { role: n, className: l ? W.nO : void 0, trailing: g, labelId: c, ...o }),
        }),
    });
}
function F(e) {
    let { roleCount: n, children: l } = e,
        r = i.useMemo(() => `roles-${(0, o.A)()}`, []),
        s = (0, d.Ay)({ id: r, isEnabled: !0, scrollToStart: O.js$, scrollToEnd: O.js$, wrap: !0 }),
        u = X.intl.formatToPlainString(X.t.PCs0oo, { numRoles: n });
    return (0, t.jsx)(a.hD, {
        navigator: s,
        children: (0, t.jsx)(a.PR, {
            children: (e) => {
                let { ref: n, ...i } = e;
                return (0, t.jsx)("div", { ...i, ref: n, "aria-label": u, className: W.JK, children: l });
            },
        }),
    });
}
function Q(e) {
    let { userId: n, guild: l, showLabel: r = !1, onAddRole: o, buttonRef: a } = e,
        d = (0, u.bG)([D.default], () => D.default.getCurrentUser()),
        c = null != d ? H.HJ(l, d.id) : null,
        x = (0, u.bG)([T.Ay], () => T.Ay.getMember(l.id, n)),
        g = x?.roles ?? [],
        h = (0, u.bG)([S.Ay], () => S.Ay.roleStyle),
        m = i.useRef(null),
        f = a ?? m,
        j = i.useCallback(
            async (e) => {
                let t = T.Ay.getMember(l.id, n),
                    i = t?.roles ?? [];
                i.includes(e) || (i = [...i, e]);
                try {
                    (await P.default.updateMemberRoles(l.id, n, i, [e], []), o?.());
                } catch {
                    U();
                }
            },
            [l.id, n, o],
        );
    function y(e) {
        return !(0, G.Oy)(e) && !e.managed && z.A.isRoleHigher(l, c, e) && -1 === g.indexOf(e.id);
    }
    return (0, t.jsx)(p.Y, {
        targetElementRef: f,
        position: "bottom",
        align: "center",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, t.jsx)(J.A, { guild: l, roleStyle: h, roleFilter: y, onSelect: j, onClose: n });
        },
        children: (e) =>
            (0, t.jsx)(R.m, {
                text: X.intl.string(X.t.e3Wlyw),
                shouldShow: !r,
                ariaHidden: !0,
                children: (0, t.jsxs)(C.D, {
                    innerRef: f,
                    "aria-label": X.intl.string(X.t.e3Wlyw),
                    className: s()(W.c9, { [W.MS]: r }),
                    ...e,
                    children: [
                        (0, t.jsx)(A.j, { size: "sm", color: "currentColor" }),
                        r &&
                            (0, t.jsx)(b.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: X.intl.string(X.t.e3Wlyw),
                            }),
                    ],
                }),
            }),
    });
}
function K(e) {
    let { userId: n, guild: l, roles: t, allowEditing: r, readOnly: s } = e,
        o = (0, u.bG)([D.default], () => D.default.getCurrentUser()),
        a = _.Q_.useSetting(),
        [d] = (0, u.yK)([z.A], () => [z.A.can(O.xBc.MANAGE_ROLES, l), z.A.getGuildVersion(l.id)]),
        c = null != o ? H.HJ(l, o.id) : null,
        x = i.useMemo(() => {
            let e = new Set();
            return (
                s ||
                    !r ||
                    t.forEach((t) => {
                        (t.tags?.guild_connections === null ? n === o?.id : d && H.wO(l, o?.id, c, t) && !t.managed) &&
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
function V(e, n, l) {
    return i.useCallback(
        async (t) => {
            let i = T.Ay.getMember(n, e),
                r = (i?.roles ?? []).filter((e) => e !== t.id);
            try {
                (t.tags?.guild_connections === null
                    ? await M.A.unassignGuildRoleConnection(n, t.id)
                    : await P.default.updateMemberRoles(n, e, r, [], [t.id]),
                    l?.());
            } catch {
                U();
            }
        },
        [l, n, e],
    );
}
function q() {
    return i.useCallback((e, n) => {
        (0, N.L3)(e, async () => {
            let { default: e } = await Promise.all([l.e("638221"), l.e("715687")]).then(l.bind(l, 646938));
            return (l) => (0, t.jsx)(e, { ...l, id: n, label: X.intl.string(X.t.sMsaLg) });
        });
    }, []);
}
function Z(e) {
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
        } = K({ userId: n, guild: l, roles: i, allowEditing: u, readOnly: d }),
        m = V(n, l.id, o),
        f = q();
    function j() {
        return (0, t.jsx)(Q, { userId: n, guild: l, showLabel: 0 === i.length, onAddRole: a });
    }
    return 0 === i.length
        ? c
            ? (0, t.jsx)("div", { className: s()(W.MR, r), children: j() })
            : null
        : (0, t.jsx)("div", {
              className: s()(W.MR, r),
              children:
                  c || x || g
                      ? (0, t.jsxs)(F, {
                            roleCount: i.length,
                            children: [
                                i.map((e) =>
                                    (0, t.jsx)(
                                        B,
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
                            className: W.nt,
                            "aria-label": X.intl.string(X.t["LPJmL/"]),
                            children: i.map((e) =>
                                (0, t.jsx)("li", { children: (0, t.jsx)($, { role: e, guildId: l.id }) }, e.id),
                            ),
                        }),
          });
}
function ee(e) {
    let { isExpanded: n, overflowCount: l, onClick: i, buttonRef: r } = e,
        o = n ? X.intl.string(X.t.XnXtCt) : X.intl.string(X.t.DY6n4q),
        a = n ? X.intl.string(X.t.XnXtCt) : X.intl.formatToPlainString(X.t.zr0Y5R, { numberOfItems: l });
    return (0, t.jsx)(R.m, {
        text: o,
        ariaHidden: !0,
        children: (0, t.jsx)(C.D, {
            innerRef: r,
            "aria-label": a,
            onClick: i,
            className: s()(W.s6, { [W.X1]: !n }),
            children: n
                ? (0, t.jsx)(w.n, { size: "xs", color: "currentColor" })
                : (0, t.jsx)(b.E, { variant: "text-xs/normal", color: "none", children: `+${l}` }),
        }),
    });
}
function en(e) {
    if (null == e) return 0;
    let { width: n } = e.getBoundingClientRect();
    return n > 0 ? n + 4 : 0;
}
function el(e) {
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
        } = K({ userId: n, guild: l, roles: r, allowEditing: x, readOnly: g }),
        R = V(n, l.id, d),
        b = q(),
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
            let e = en(S.current),
                n = en(k.current),
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
            ? (0, t.jsx)(ee, { isExpanded: N, overflowCount: r.length - v.length, onClick: I, buttonRef: S })
            : null;
    }
    function _() {
        return (0, t.jsx)(Q, { buttonRef: k, userId: n, guild: l, showLabel: 0 === r.length, onAddRole: a });
    }
    return 0 === r.length
        ? h
            ? (0, t.jsx)("div", { className: s()(W.MR, o), children: _() })
            : null
        : (0, t.jsx)("div", {
              className: s()(W.MR, o),
              children:
                  h || m || f
                      ? (0, t.jsxs)(F, {
                            roleCount: r.length,
                            children: [
                                E.map((e, n) =>
                                    (0, t.jsx)(
                                        B,
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
                                    className: W.nt,
                                    "aria-label": X.intl.string(X.t["LPJmL/"]),
                                    children: E.map((e, n) =>
                                        (0, t.jsx)(
                                            "li",
                                            {
                                                children: (0, t.jsx)($, {
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
