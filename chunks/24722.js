r.d(t, { default: () => S }), r(47120), r(566702);
var o = r(200651),
    n = r(192379),
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
    g = r(494831),
    p = r(981631),
    k = r(71080),
    y = r(377668),
    v = r(388032),
    R = r(691);
function j(e) {
    var t = (function (e, t) {
        if ('object' !== w(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var o = r.call(e, t || 'default');
            if ('object' !== w(o)) return o;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === w(t) ? t : String(t);
}
function w(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
function C(e) {
    var t;
    let { onClose: r, roleId: w, guildId: C, onBack: S, isCreateRoleFlow: N, focusSearchAfterReady: L, isReady: O } = e,
        M = (0, l.e7)([x.Z], () => x.Z.getRole(w), [w]),
        [z, P] = n.useState(''),
        [T, B] = n.useState({}),
        [I, E] = n.useState(!1);
    n.useEffect(() => {
        b.Z.requestMembers(C, z.trim().toLowerCase(), h._4);
    }, [C, z]);
    let A = n.useCallback((e) => !e.roles.includes(w), [w]),
        W = (0, h.lJ)(C, A),
        Z = n.useMemo(() => W.filter((e) => (0, h.eg)(z, e)), [z, W]);
    Z = Z.filter((e) => e.id !== y.fL);
    let Y = n.useCallback(async () => {
            let e = Object.values(T).map((e) => e.row.id);
            E(!0);
            try {
                await f.Z.bulkAddMemberRoles(C, w, e), (0, _.H)(C, w, !1), r();
            } catch (e) {
                E(!1);
            }
        }, [C, w, T, r]),
        q = n.useCallback((e) => {
            B((t) => {
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
            B((t) => {
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
                })(t, [e].map(j));
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
        H = n.useMemo(() => Object.keys(T).length, [T]);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(i.xBx, {
                className: R.header,
                separator: !1,
                direction: u.Z.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(i.X6q, {
                        variant: 'heading-xl/semibold',
                        children: v.NW.string(v.t['ZYOK4+'])
                    }),
                    N
                        ? (0, o.jsx)(i.Text, {
                              className: R.subtitle,
                              color: 'text-normal',
                              variant: 'text-md/normal',
                              children: v.NW.string(v.t.AMsxa2)
                          })
                        : (0, o.jsxs)('div', {
                              className: R.roleContainer,
                              children: [
                                  (0, o.jsx)(i.lZ8, {
                                      size: 'xs',
                                      color: null != (t = null == M ? void 0 : M.colorString) ? t : (0, a.Rf)(p.p6O)
                                  }),
                                  (0, o.jsx)(i.Text, {
                                      className: R.roleName,
                                      color: 'text-normal',
                                      variant: 'text-md/normal',
                                      children: null == M ? void 0 : M.name
                                  })
                              ]
                          })
                ]
            }),
            (0, o.jsx)(c.t, {
                listClassName: R.list,
                pendingAdditions: T,
                query: z,
                onQueryChange: P,
                onClickRow: q,
                onRemovePendingAddition: K,
                roles: [],
                members: U,
                placeholderText: v.NW.string(v.t.vMiCaW),
                renderEmptyText: (e) => v.NW.format(v.t.eq8a8f, { query: e }),
                focusSearchAfterReady: L,
                isReady: O,
                description: v.NW.formatToPlainString(v.t['3OxP4u'], { numMembers: g.ey })
            }),
            (0, o.jsxs)(i.mzw, {
                className: R.footer,
                children: [
                    (0, o.jsxs)('div', {
                        className: R.buttonsRight,
                        children: [
                            N && 0 === H
                                ? (0, o.jsx)(i.zxk, {
                                      onClick: r,
                                      color: i.zxk.Colors.PRIMARY,
                                      children: v.NW.string(v.t.CJm5V1)
                                  })
                                : (0, o.jsx)(i.zxk, {
                                      onClick: Y,
                                      submitting: I,
                                      disabled: 0 === H || H > g.ey,
                                      children: v.NW.string(v.t.OYkgVl)
                                  }),
                            !N &&
                                (0, o.jsx)(i.zxk, {
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: r,
                                    children: v.NW.string(v.t['ETE/oK'])
                                })
                        ]
                    }),
                    null != S &&
                        (0, o.jsx)(i.zxk, {
                            color: i.zxk.Colors.PRIMARY,
                            look: i.zxk.Looks.LINK,
                            size: i.zxk.Sizes.TINY,
                            onClick: S,
                            className: R.backButton,
                            children: v.NW.string(v.t['13/7kZ'])
                        })
                ]
            })
        ]
    });
}
function S(e) {
    let { transitionState: t, onClose: r, roleId: n, guildId: a } = e;
    return (0, o.jsx)(i.Y0X, {
        transitionState: t,
        size: i.CgR.SMALL,
        children: (0, o.jsx)(C, {
            onClose: r,
            roleId: n,
            guildId: a
        })
    });
}
