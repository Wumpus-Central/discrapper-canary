n.d(t, {
    U: () => L,
    default: () => Z,
    t: () => P,
}),
    n(953529),
    n(388685),
    n(781311),
    n(413496),
    n(433524),
    n(35282),
    n(539854);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(755721),
    s = n(481060),
    o = n(741361),
    c = n(794433),
    d = n(600164),
    u = n(313201),
    m = n(131704),
    x = n(592125),
    h = n(271383),
    b = n(485386),
    y = n(430824),
    f = n(626135),
    p = n(934415),
    g = n(892880),
    j = n(226951),
    v = n(605436),
    S = n(971628),
    E = n(71080),
    w = n(981631),
    T = n(494831),
    O = n(388032),
    R = n(257803);
function C(e) {
    var t = (function (e, t) {
        if ("object" !== N(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== N(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === N(t) ? t : String(t);
}
function N(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
let M = (0, u.hQ)();
function k(e, t) {
    return t ? e.slice(1) : e;
}
function L(e) {
    let t,
        {
            guild: n,
            channel: a,
            permission: s,
            pendingAdditions: o,
            setPendingAdditions: d,
            isStageChannel: u = null != a && a.isGuildStageVoice(),
            description: m,
        } = e,
        [x, y] = l.useState(!1),
        [f, p] = l.useState(""),
        w = (0, i.e7)([b.Z], () => b.Z.getSortedRoles(n.id));
    function T(e) {
        let t = k(f.trim(), x);
        return RegExp("".concat(j.Z.escape(t)), "i").test(e);
    }
    let R = (0, i.Wu)([h.ZP], () => h.ZP.getMemberIds(n.id));
    x
        ? (t = [])
        : u
          ? (t = v.Wx(n, w, a, s, T))
          : 0 === (t = v.ik(n, w, a, s, T)).length && "" === f.trim() && 1 === w.length && (t = v.aq());
    let N = v.iI(R, a, n, s, T),
        {
            placeholderText: M,
            hintText: L,
            renderEmptyText: Z,
        } = {
            placeholderText: O.intl.string(O.t.iezLLi),
            hintText: O.intl.string(O.t["rwFx8/"]),
            renderEmptyText: (e) => O.intl.format(O.t.ErpIY2, { query: e }),
        };
    return (0, r.jsx)(P, {
        pendingAdditions: o,
        query: f,
        onQueryChange: function (e) {
            let t = e.trim(),
                r = "@" === t.charAt(0);
            g.Z.requestMembers(n.id, k(t, r), E.EQ), p(e), y(r);
        },
        onClickRow: function (e) {
            let t = (0, S.G)(e);
            d((n) => {
                let r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, n);
                if (t in r) delete r[t];
                else {
                    let n;
                    e.rowType === E.aC.ROLE || e.rowType === E.aC.ADMINISTRATOR
                        ? (n = {
                              type: c.F.ROLE,
                              label: e.name,
                              color: e.colorString,
                          })
                        : (e.rowType === E.aC.MEMBER || e.rowType === E.aC.OWNER) &&
                          (n = {
                              type: c.F.MEMBER,
                              label: e.name,
                              avatar: e.avatarURL,
                          }),
                        null != n &&
                            (r[t] = {
                                display: n,
                                row: e,
                            });
                }
                return r;
            });
        },
        onRemovePendingAddition: function (e) {
            d((t) => {
                let { [e]: n } = t;
                return (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                l = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++)
                            (n = i[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (l[n] = e[n]);
                    }
                    return l;
                })(t, [e].map(C));
            });
        },
        roles: t,
        members: N,
        placeholderText: M,
        hintText: L,
        renderEmptyText: Z,
        isStageChannel: u,
        description: m,
    });
}
function P(e) {
    let t,
        {
            listClassName: n,
            pendingAdditions: l,
            query: i,
            onQueryChange: a,
            onClickRow: o,
            onRemovePendingAddition: c,
            roles: d,
            members: u,
            placeholderText: m,
            hintText: x,
            renderEmptyText: h,
            isStageChannel: b,
            focusSearchAfterReady: y,
            isReady: f,
            description: p,
        } = e;
    return (0, r.jsxs)("div", {
        className: R.content,
        children: [
            (null == (t = p) && b && (t = O.intl.string(O.t.f7VbhI)), null == t || "" === t)
                ? null
                : (0, r.jsx)(s.Text, {
                      color: "header-secondary",
                      className: R.description,
                      variant: "text-sm/normal",
                      children: t,
                  }),
            (0, r.jsx)(S.Z, {
                listClassName: n,
                pendingAdditions: l,
                query: i,
                onQueryChange: a,
                onClickRow: o,
                onRemovePendingAddition: c,
                roles: d,
                members: u,
                placeholderText: m,
                hintText: x,
                renderEmptyText: h,
                disabledText: b ? O.intl.string(O.t.MVVOCg) : null,
                focusSearchAfterReady: y,
                isReady: f,
                maxCount: T.ey,
            }),
        ],
    });
}
function Z(e) {
    let { transitionState: t, onClose: n, channelId: c, newChannel: u, inSettings: h } = e,
        [b, g] = l.useState(!1),
        [j, v] = l.useState({}),
        S = (0, i.e7)([x.Z], () => x.Z.getChannel(c), [c]),
        T = (0, i.e7)([y.Z], () => y.Z.getGuild(null == S ? void 0 : S.getGuildId()));
    if (
        (l.useEffect(() => {
            f.default.track(w.rMx.OPEN_MODAL, { type: "Grant Channel Access" });
        }, []),
        null == S || null == T)
    )
        return null;
    let C = u && 0 === Object.keys(j).length;
    async function N() {
        if (null == S || 0 === Object.keys(j).length) return void n();
        g(!0);
        try {
            await (function (e, t, n) {
                let r = [];
                return (
                    Object.values(t).forEach((t) => {
                        let { row: n } = t;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === E.aC.ROLE
                                ? r.push((0, p.rX)(n.id, e.type))
                                : n.rowType === E.aC.MEMBER && r.push((0, p.jZ)(n.id, e.type)));
                    }),
                    (0, o.hw)(e.id, r, n)
                );
            })(S, j, h),
                n(),
                g(!1);
        } catch (e) {
            g(!1);
        }
    }
    let k = (0, m.zi)(S.type) ? s.W4G : s.gjC;
    return (0, r.jsxs)(s.Y0X, {
        transitionState: t,
        size: s.CgR.SMALL,
        "aria-labelledby": M,
        className: R.modalRoot,
        parentComponent: "AddMembersModal",
        children: [
            (0, r.jsxs)(s.xBx, {
                separator: !1,
                direction: d.Z.Direction.VERTICAL,
                align: d.Z.Align.CENTER,
                className: R.header,
                children: [
                    (0, r.jsx)(s.X6q, {
                        id: M,
                        variant: "heading-xl/semibold",
                        children: O.intl.string(O.t.dMJ3Y2),
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: R.headerSubtitle,
                        children: [
                            (0, r.jsx)(k, {
                                size: "xs",
                                color: "currentColor",
                                className: R.headerSubtitleIcon,
                            }),
                            S.name,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(s.hzk, {
                children: (0, r.jsx)(L, {
                    guild: T,
                    channel: S,
                    permission: S.accessPermissions,
                    pendingAdditions: j,
                    setPendingAdditions: v,
                }),
            }),
            (0, r.jsxs)(s.mzw, {
                children: [
                    !C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: R.button,
                                    children: (0, r.jsx)(s.zxk, {
                                        variant: "primary",
                                        size: "sm",
                                        text: O.intl.string(O.t.i4jeWV),
                                        onClick: N,
                                        loading: b,
                                    }),
                                }),
                                (0, r.jsx)(a.zx, {
                                    look: a.zx.Looks.LINK,
                                    color: a.zx.Colors.TRANSPARENT,
                                    onClick: n,
                                    size: a.zx.Sizes.SMALL,
                                    children: O.intl.string(O.t["ETE/oK"]),
                                }),
                            ],
                        }),
                    C &&
                        (0, r.jsx)(s.zxk, {
                            variant: "secondary",
                            size: "sm",
                            text: O.intl.string(O.t.u46sxc),
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
}
