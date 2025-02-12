a.d(t, { default: () => w }), a(47120);
var o = a(200651),
    r = a(192379),
    l = a(866442),
    i = a(442837),
    n = a(481060),
    s = a(461745),
    d = a(185413),
    c = a(971628),
    b = a(600164),
    u = a(892880),
    _ = a(51144),
    m = a(480608),
    x = a(434404),
    h = a(946724),
    k = a(130341),
    R = a(494831),
    g = a(981631),
    C = a(71080),
    p = a(377668),
    f = a(388032),
    L = a(265626);
function v(e) {
    var t;
    let { onClose: a, roleId: v, guildId: w, onBack: M, isCreateRoleFlow: j, focusSearchAfterReady: S, isReady: z } = e,
        y = (0, i.e7)([h.Z], () => h.Z.getRole(v), [v]),
        [B, N] = r.useState(''),
        [T, I] = r.useState({}),
        [A, E] = r.useState(!1);
    r.useEffect(() => {
        u.Z.requestMembers(w, B.trim().toLowerCase(), k._4);
    }, [w, B]);
    let Z = r.useCallback((e) => !e.roles.includes(v), [v]),
        P = (0, k.lJ)(w, Z),
        Y = r.useMemo(() => P.filter((e) => (0, k.eg)(B, e)), [B, P]);
    Y = Y.filter((e) => e.id !== p.fL);
    let O = r.useCallback(async () => {
            let e = Object.values(T).map((e) => e.row.id);
            E(!0);
            try {
                await x.Z.bulkAddMemberRoles(w, v, e), (0, m.H)(w, v, !1), a();
            } catch (e) {
                E(!1);
            }
        }, [w, v, T, a]),
        q = r.useCallback((e) => {
            I((t) => {
                let a = { ...t },
                    o = (0, c.G)(e);
                return (
                    o in a
                        ? delete a[o]
                        : (a[o] = {
                              display: {
                                  type: s.Fj.MEMBER,
                                  label: e.name,
                                  avatar: e.avatarURL
                              },
                              row: e
                          }),
                    a
                );
            });
        }, []),
        K = r.useCallback((e) => {
            I((t) => {
                let { [e]: a, ...o } = t;
                return o;
            });
        }, []),
        U = r.useMemo(
            () =>
                Y.map((e) => {
                    var t;
                    let a = _.ZP.getUserTag(e.user);
                    return {
                        rowType: C.aC.MEMBER,
                        name: null !== (t = e.name) && void 0 !== t ? t : a,
                        nickname: e.name,
                        username: a,
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
        H = r.useMemo(() => Object.keys(T).length, [T]);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(n.xBx, {
                className: L.header,
                separator: !1,
                direction: b.Z.Direction.VERTICAL,
                children: [
                    (0, o.jsx)(n.X6q, {
                        variant: 'heading-xl/semibold',
                        children: f.intl.string(f.t['ZYOK4+'])
                    }),
                    j
                        ? (0, o.jsx)(n.Text, {
                              className: L.subtitle,
                              color: 'text-normal',
                              variant: 'text-md/normal',
                              children: f.intl.string(f.t.AMsxa2)
                          })
                        : (0, o.jsxs)('div', {
                              className: L.roleContainer,
                              children: [
                                  (0, o.jsx)(n.lZ8, {
                                      size: 'xs',
                                      color: null !== (t = null == y ? void 0 : y.colorString) && void 0 !== t ? t : (0, l.Rf)(g.p6O)
                                  }),
                                  (0, o.jsx)(n.Text, {
                                      className: L.roleName,
                                      color: 'text-normal',
                                      variant: 'text-md/normal',
                                      children: null == y ? void 0 : y.name
                                  })
                              ]
                          })
                ]
            }),
            (0, o.jsx)(d.t, {
                listClassName: L.list,
                pendingAdditions: T,
                query: B,
                onQueryChange: N,
                onClickRow: q,
                onRemovePendingAddition: K,
                roles: [],
                members: U,
                placeholderText: f.intl.string(f.t.vMiCaW),
                renderEmptyText: (e) => f.intl.format(f.t.eq8a8f, { query: e }),
                focusSearchAfterReady: S,
                isReady: z,
                description: f.intl.formatToPlainString(f.t['3OxP4u'], { numMembers: R.ey })
            }),
            (0, o.jsxs)(n.mzw, {
                className: L.footer,
                children: [
                    (0, o.jsxs)('div', {
                        className: L.buttonsRight,
                        children: [
                            j && 0 === H
                                ? (0, o.jsx)(n.zxk, {
                                      onClick: a,
                                      color: n.zxk.Colors.PRIMARY,
                                      children: f.intl.string(f.t.CJm5V1)
                                  })
                                : (0, o.jsx)(n.zxk, {
                                      onClick: O,
                                      submitting: A,
                                      disabled: 0 === H || H > R.ey,
                                      children: f.intl.string(f.t.OYkgVl)
                                  }),
                            !j &&
                                (0, o.jsx)(n.zxk, {
                                    look: n.zxk.Looks.LINK,
                                    color: n.zxk.Colors.PRIMARY,
                                    size: n.zxk.Sizes.SMALL,
                                    onClick: a,
                                    children: f.intl.string(f.t['ETE/oK'])
                                })
                        ]
                    }),
                    null != M &&
                        (0, o.jsx)(n.zxk, {
                            color: n.zxk.Colors.PRIMARY,
                            look: n.zxk.Looks.LINK,
                            size: n.zxk.Sizes.TINY,
                            onClick: M,
                            className: L.backButton,
                            children: f.intl.string(f.t['13/7kZ'])
                        })
                ]
            })
        ]
    });
}
function w(e) {
    let { transitionState: t, onClose: a, roleId: r, guildId: l } = e;
    return (0, o.jsx)(n.Y0X, {
        transitionState: t,
        size: n.CgR.SMALL,
        children: (0, o.jsx)(v, {
            onClose: a,
            roleId: r,
            guildId: l
        })
    });
}
