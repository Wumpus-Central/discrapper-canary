r.d(t, { default: () => w }), r(388685), r(781311);
var o = r(255367),
    n = r(73800),
    a = r(866442),
    l = r(442837),
    i = r(481060),
    s = r(461745),
    c = r(185413),
    d = r(971628),
    u = r(600164),
    b = r(892880),
    m = r(51144),
    _ = r(480608),
    f = r(434404),
    x = r(946724),
    h = r(130341),
    p = r(494831),
    g = r(981631),
    k = r(71080),
    y = r(388032),
    v = r(691);
function R(e) {
    var t = (function (e, t) {
        if ('object' !== j(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var o = r.call(e, t || 'default');
            if ('object' !== j(o)) return o;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === j(t) ? t : String(t);
}
function j(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
function C(e) {
    var t;
    let { onClose: r, roleId: j, guildId: C, onBack: w, isCreateRoleFlow: S, focusSearchAfterReady: M, isReady: O } = e,
        L = (0, l.e7)([x.Z], () => x.Z.getRole(j), [j]),
        [z, N] = n.useState(''),
        [P, T] = n.useState({}),
        [B, I] = n.useState(!1);
    n.useEffect(() => {
        b.Z.requestMembers(C, z.trim().toLowerCase(), h._4);
    }, [C, z]);
    let A = n.useCallback((e) => !e.roles.includes(j), [j]),
        E = (0, h.lJ)(C, A),
        Z = n.useMemo(() => E.filter((e) => (0, h.eg)(z, e)), [z, E]),
        Y = n.useCallback(async () => {
            let e = Object.values(P).map((e) => e.row.id);
            I(!0);
            try {
                await f.Z.bulkAddMemberRoles(C, j, e), (0, _.H)(C, j, !1), r();
            } catch (e) {
                I(!1);
            }
        }, [C, j, P, r]),
        q = n.useCallback((e) => {
            T((t) => {
                let r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (o = o.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                o.forEach(function (t) {
                                    var o;
                                    (o = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: o,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = o);
                                });
                        }
                        return e;
                    })({}, t),
                    o = (0, d.G)(e);
                return (
                    o in r
                        ? delete r[o]
                        : (r[o] = {
                              display: {
                                  type: s.Fj.MEMBER,
                                  label: e.name,
                                  avatar: e.avatarURL
                              },
                              row: e
                          }),
                    r
                );
            });
        }, []),
        K = n.useCallback((e) => {
            T((t) => {
                let { [e]: r } = t;
                return (function (e, t) {
                    if (null == e) return {};
                    var r,
                        o,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                o,
                                n = {},
                                a = Object.keys(e);
                            for (o = 0; o < a.length; o++) (r = a[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (o = 0; o < a.length; o++) (r = a[o]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
                    }
                    return n;
                })(t, [e].map(R));
            });
        }, []),
        U = n.useMemo(
            () =>
                Z.map((e) => {
                    var t;
                    let r = m.ZP.getUserTag(e.user);
                    return {
                        rowType: k.aC.MEMBER,
                        name: null != (t = e.name) ? t : r,
                        nickname: e.name,
                        username: r,
                        id: e.id,
                        avatarURL: e.avatarURL,
                        bot: e.bot,
                        verifiedBot: e.verifiedBot,
                        disabled: !1,
                        key: e.id
                    };
                }),
            [Z]
        ),
        H = n.useMemo(() => Object.keys(P).length, [P]);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(i.xBx, {
                className: v.header,
                separator: !1,
                direction: u.Z.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(i.X6q, {
                        variant: 'heading-xl/semibold',
                        children: y.intl.string(y.t['ZYOK4+'])
                    }),
                    S
                        ? (0, o.jsx)(i.Text, {
                              className: v.subtitle,
                              color: 'text-default',
                              variant: 'text-md/normal',
                              children: y.intl.string(y.t.AMsxa2)
                          })
                        : (0, o.jsxs)('div', {
                              className: v.roleContainer,
                              children: [
                                  (0, o.jsx)(i.lZ8, {
                                      size: 'xs',
                                      color: null != (t = null == L ? void 0 : L.colorString) ? t : (0, a.Rf)(g.p6O)
                                  }),
                                  (0, o.jsx)(i.Text, {
                                      className: v.roleName,
                                      color: 'text-default',
                                      variant: 'text-md/normal',
                                      children: null == L ? void 0 : L.name
                                  })
                              ]
                          })
                ]
            }),
            (0, o.jsx)(c.t, {
                listClassName: v.list,
                pendingAdditions: P,
                query: z,
                onQueryChange: N,
                onClickRow: q,
                onRemovePendingAddition: K,
                roles: [],
                members: U,
                placeholderText: y.intl.string(y.t.vMiCaW),
                renderEmptyText: (e) => y.intl.format(y.t.eq8a8f, { query: e }),
                focusSearchAfterReady: M,
                isReady: O,
                description: y.intl.formatToPlainString(y.t['3OxP4u'], { numMembers: p.ey })
            }),
            (0, o.jsxs)(i.mzw, {
                className: v.footer,
                children: [
                    (0, o.jsxs)('div', {
                        className: v.buttonsRight,
                        children: [
                            S && 0 === H
                                ? (0, o.jsx)(i.zxk, {
                                      onClick: r,
                                      color: i.zxk.Colors.PRIMARY,
                                      children: y.intl.string(y.t.CJm5V1)
                                  })
                                : (0, o.jsx)(i.zxk, {
                                      onClick: Y,
                                      submitting: B,
                                      disabled: 0 === H || H > p.ey,
                                      children: y.intl.string(y.t.OYkgVl)
                                  }),
                            !S &&
                                (0, o.jsx)(i.zxk, {
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: r,
                                    children: y.intl.string(y.t['ETE/oK'])
                                })
                        ]
                    }),
                    null != w &&
                        (0, o.jsx)(i.zxk, {
                            color: i.zxk.Colors.PRIMARY,
                            look: i.zxk.Looks.LINK,
                            size: i.zxk.Sizes.TINY,
                            onClick: w,
                            className: v.backButton,
                            children: y.intl.string(y.t['13/7kZ'])
                        })
                ]
            })
        ]
    });
}
function w(e) {
    let { transitionState: t, onClose: r, roleId: n, guildId: a } = e;
    return (0, o.jsx)(i.Y0X, {
        transitionState: t,
        size: i.CgR.SMALL,
        parentComponent: 'AddRoleMembersModal',
        children: (0, o.jsx)(C, {
            onClose: r,
            roleId: n,
            guildId: a
        })
    });
}
