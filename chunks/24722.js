(r.d(t, { default: () => S }), r(388685), r(781311));
var n = r(255367),
    o = r(73800),
    a = r(866442),
    l = r(442837),
    i = r(755721),
    s = r(481060),
    d = r(794433),
    c = r(185413),
    u = r(971628),
    b = r(600164),
    m = r(892880),
    _ = r(51144),
    f = r(480608),
    x = r(434404),
    h = r(946724),
    p = r(130341),
    g = r(494831),
    y = r(981631),
    v = r(71080),
    k = r(388032),
    j = r(691);
function w(e) {
    var t = (function (e, t) {
        if ('object' !== R(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || 'default');
            if ('object' !== R(n)) return n;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === R(t) ? t : String(t);
}
function R(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
function C(e) {
    var t;
    let { onClose: r, roleId: R, guildId: C, onBack: S, isCreateRoleFlow: O, focusSearchAfterReady: M, isReady: L } = e,
        T = (0, l.e7)([h.Z], () => h.Z.getRole(R), [R]),
        [N, z] = o.useState(''),
        [P, B] = o.useState({}),
        [E, I] = o.useState(!1);
    o.useEffect(() => {
        m.Z.requestMembers(C, N.trim().toLowerCase(), p._4);
    }, [C, N]);
    let A = o.useCallback((e) => !e.roles.includes(R), [R]),
        Z = (0, p.lJ)(C, A),
        Y = o.useMemo(() => Z.filter((e) => (0, p.eg)(N, e)), [N, Z]),
        q = o.useCallback(async () => {
            let e = Object.values(P).map((e) => e.row.id);
            I(!0);
            try {
                (await x.Z.bulkAddMemberRoles(C, R, e), (0, f.H)(C, R, !1), r());
            } catch (e) {
                I(!1);
            }
        }, [C, R, P, r]),
        U = o.useCallback((e) => {
            B((t) => {
                let r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })({}, t),
                    n = (0, u.G)(e);
                return (
                    n in r
                        ? delete r[n]
                        : (r[n] = {
                              display: {
                                  type: d.F.MEMBER,
                                  label: e.name,
                                  avatar: e.avatarURL
                              },
                              row: e
                          }),
                    r
                );
            });
        }, []),
        H = o.useCallback((e) => {
            B((t) => {
                let { [e]: r } = t;
                return (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                o = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                            return o;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++) ((r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
                    }
                    return o;
                })(t, [e].map(w));
            });
        }, []),
        K = o.useMemo(
            () =>
                Y.map((e) => {
                    var t;
                    let r = _.ZP.getUserTag(e.user);
                    return {
                        rowType: v.aC.MEMBER,
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
            [Y]
        ),
        V = o.useMemo(() => Object.keys(P).length, [P]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(s.xBx, {
                className: j.header,
                separator: !1,
                direction: b.Z.Direction.VERTICAL,
                children: [
                    (0, n.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        children: k.intl.string(k.t['ZYOK4+'])
                    }),
                    O
                        ? (0, n.jsx)(s.Text, {
                              className: j.subtitle,
                              color: 'text-default',
                              variant: 'text-md/normal',
                              children: k.intl.string(k.t.AMsxa2)
                          })
                        : (0, n.jsxs)('div', {
                              className: j.roleContainer,
                              children: [
                                  (0, n.jsx)(s.lZ8, {
                                      size: 'xs',
                                      color: null != (t = null == T ? void 0 : T.colorString) ? t : (0, a.Rf)(y.p6O)
                                  }),
                                  (0, n.jsx)(s.Text, {
                                      className: j.roleName,
                                      color: 'text-default',
                                      variant: 'text-md/normal',
                                      children: null == T ? void 0 : T.name
                                  })
                              ]
                          })
                ]
            }),
            (0, n.jsx)(c.t, {
                listClassName: j.list,
                pendingAdditions: P,
                query: N,
                onQueryChange: z,
                onClickRow: U,
                onRemovePendingAddition: H,
                roles: [],
                members: K,
                placeholderText: k.intl.string(k.t.vMiCaW),
                renderEmptyText: (e) => k.intl.format(k.t.eq8a8f, { query: e }),
                focusSearchAfterReady: M,
                isReady: L,
                description: k.intl.formatToPlainString(k.t['3OxP4u'], { numMembers: g.ey })
            }),
            (0, n.jsxs)(s.mzw, {
                className: j.footer,
                children: [
                    (0, n.jsxs)('div', {
                        className: j.buttonsRight,
                        children: [
                            O && 0 === V
                                ? (0, n.jsx)(s.zxk, {
                                      variant: 'secondary',
                                      text: k.intl.string(k.t.CJm5V1),
                                      onClick: r
                                  })
                                : (0, n.jsx)(s.zxk, {
                                      variant: 'primary',
                                      text: k.intl.string(k.t.OYkgVl),
                                      onClick: q,
                                      loading: E,
                                      disabled: 0 === V || V > g.ey
                                  }),
                            !O &&
                                (0, n.jsx)(s.zxk, {
                                    variant: 'secondary',
                                    size: 'sm',
                                    text: k.intl.string(k.t['ETE/oK']),
                                    onClick: r
                                })
                        ]
                    }),
                    null != S &&
                        (0, n.jsx)(i.zx, {
                            color: i.zx.Colors.PRIMARY,
                            look: i.zx.Looks.LINK,
                            size: i.zx.Sizes.TINY,
                            onClick: S,
                            className: j.backButton,
                            children: k.intl.string(k.t['13/7kZ'])
                        })
                ]
            })
        ]
    });
}
function S(e) {
    let { transitionState: t, onClose: r, roleId: o, guildId: a } = e;
    return (0, n.jsx)(s.Y0X, {
        transitionState: t,
        size: s.CgR.SMALL,
        parentComponent: 'AddRoleMembersModal',
        children: (0, n.jsx)(C, {
            onClose: r,
            roleId: o,
            guildId: a
        })
    });
}
