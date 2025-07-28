(n.d(t, { ZP: () => L }), n(781311), n(642613), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(239091),
    u = n(479531),
    m = n(616780),
    g = n(100527),
    p = n(906732),
    f = n(670188),
    h = n(594174),
    x = n(626135),
    b = n(243730),
    j = n(434404),
    v = n(946724),
    _ = n(130341),
    O = n(95242),
    y = n(420966),
    C = n(566476),
    N = n(203377),
    I = n(981631),
    E = n(388032),
    S = n(905972),
    T = n(877248);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function R(e, t, n) {
    let i = e.roles.filter((e) => e !== n);
    try {
        await j.Z.updateMemberRoles(t, e.id, i, [], [n]);
    } catch (t) {
        let e = new u.Z(t);
        (0, c.h7j)((t) =>
            (0, r.jsx)(
                c.ConfirmModal,
                w(P({}, t), {
                    header: E.intl.string(E.t.R0RpRU),
                    confirmText: E.intl.string(E.t.BddRzc),
                    confirmButtonColor: o.zx.Colors.BRAND,
                    children: (0, r.jsx)(c.Text, {
                        color: 'text-default',
                        variant: 'text-md/normal',
                        children: e.getAnyErrorMessage()
                    })
                })
            )
        );
    }
}
function Z(e) {
    let { member: t, guildId: l, roleId: a, locked: o } = e,
        u = i.useRef(null),
        g = i.useMemo(() => ({ [l]: [t.id] }), [l, t.id]);
    function p(e) {
        if ((e.stopPropagation(), !o)) {
            if (e.shiftKey) return void R(t, l, a);
            let n = v.Z.getRole(a);
            (0, c.h7j)((e) =>
                (0, r.jsxs)(
                    c.ConfirmModal,
                    w(P({}, e), {
                        header: E.intl.string(E.t['7sFNfX']),
                        confirmText: E.intl.string(E.t.N86XcH),
                        cancelText: E.intl.string(E.t['ETE/oK']),
                        onConfirm: () => R(t, l, a),
                        children: [
                            (0, r.jsx)(c.Text, {
                                color: 'text-default',
                                variant: 'text-md/normal',
                                children: E.intl.format(E.t.scORUl, {
                                    username: t.name,
                                    roleName: null == n ? void 0 : n.name
                                })
                            }),
                            (0, r.jsx)(c.Text, {
                                className: S.removeTip,
                                color: 'text-muted',
                                variant: 'text-md/normal',
                                children: E.intl.string(E.t.jxIxJC)
                            })
                        ]
                    })
                )
            );
        }
    }
    function x(e) {
        let i = h.default.getUser(t.id);
        null != i &&
            (0, d.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('26976'), n.e('73518')]).then(n.bind(n, 415118));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        w(P({}, t), {
                            user: i,
                            guildId: l,
                            showChatItems: !1
                        })
                    );
            });
    }
    return (
        (0, m.$)(g),
        (0, r.jsx)('div', {
            className: T.contentWidth,
            children: (0, r.jsx)(f.Z, {
                targetElementRef: u,
                userId: t.id,
                guildId: l,
                roleId: a,
                position: 'left',
                children: (e) =>
                    (0, r.jsxs)(
                        c.P3F,
                        w(P({}, e), {
                            innerRef: u,
                            className: S.memberRow,
                            onContextMenu: x,
                            children: [
                                (0, r.jsx)(C.Z, {
                                    className: S.memberDetails,
                                    avatarURL: t.avatarURL,
                                    name: t.name,
                                    bot: t.bot,
                                    verifiedBot: t.verifiedBot,
                                    userTag: t.userTag
                                }),
                                (0, r.jsx)('div', {
                                    className: S.removeButtonContainer,
                                    children: (0, r.jsx)(c.ua7, {
                                        text: o ? E.intl.string(E.t.wkrQaG) : E.intl.string(E.t['7sFNfX']),
                                        position: 'top',
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.P3F,
                                                w(P({}, e), {
                                                    className: s()(S.removeButton, { [S.removeButtonDisabled]: o }),
                                                    onClick: p,
                                                    children: (0, r.jsx)(c.k$p, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    })
                                                })
                                            )
                                    })
                                })
                            ]
                        })
                    )
            })
        })
    );
}
function D(e) {
    let { handleAddClick: t, locked: n } = e;
    return (0, r.jsx)('div', {
        className: T.contentWidth,
        children: (0, r.jsxs)('div', {
            className: s()(S.memberRow, S.emptyRowContainer),
            children: [
                (0, r.jsx)(c.BFJ, {
                    size: 'md',
                    color: 'currentColor'
                }),
                (0, r.jsx)(c.Text, {
                    className: S.emptyRowText,
                    variant: 'text-sm/semibold',
                    color: 'text-muted',
                    children: E.intl.format(E.t.P9pZOT, {
                        addMembersHook: function (e, i) {
                            return n
                                ? null
                                : (0, r.jsx)(
                                      c.eee,
                                      {
                                          onClick: t,
                                          children: e
                                      },
                                      i
                                  );
                        }
                    })
                })
            ]
        })
    });
}
function A(e) {
    let { guildId: t, roleId: n, query: l, headerHeight: s, locked: a, onScroll: o, roleMembers: d, handleAddClick: u } = e,
        { analyticsLocations: m } = (0, p.ZP)(g.Z.MEMBER_LIST),
        f = i.useMemo(() => l.trim().toLowerCase(), [l]);
    (0, _.rY)(t, f);
    let h = i.useMemo(() => d.filter((e) => (0, _.eg)(f, e)), [d, f]),
        x = i.useMemo(() => h.sort((e, t) => e.name.localeCompare(t.name)), [h]);
    return (0, r.jsx)(p.Gt, {
        value: m,
        children: (0, r.jsx)(c._2F, {
            className: S.list,
            sections: [Math.max(h.length, 1)],
            sectionHeight: s,
            renderSection: () => (0, r.jsx)('div', { style: { height: s } }, 'section'),
            style: { scrollPaddingTop: s },
            rowHeight: 40,
            renderRow: function (e) {
                let { row: i } = e;
                if (0 === x.length)
                    return (0, r.jsx)(
                        D,
                        {
                            handleAddClick: u,
                            locked: a
                        },
                        'empty'
                    );
                let l = x[i];
                return (0, r.jsx)(
                    Z,
                    {
                        member: l,
                        guildId: t,
                        roleId: n,
                        locked: a
                    },
                    l.id
                );
            },
            onScroll: o
        })
    });
}
function k(e) {
    let { query: t, setQuery: n, locked: i, handleAddClick: l } = e;
    return (0, r.jsxs)('div', {
        className: S.searchContainer,
        children: [
            (0, r.jsx)(c.E1j, {
                size: c.E1j.Sizes.MEDIUM,
                query: t,
                onChange: n,
                onClear: () => n(''),
                placeholder: E.intl.string(E.t.pYHobG),
                'aria-label': E.intl.string(E.t.pYHobG)
            }),
            (0, r.jsx)(o.zx, {
                className: S.addButton,
                size: o.zx.Sizes.SMALL,
                onClick: l,
                disabled: i,
                children: E.intl.string(E.t.cHszXl)
            })
        ]
    });
}
function L(e) {
    let { guild: t, role: l, locked: o, setSelectedSection: d } = e,
        [u, m] = i.useState(''),
        { headerHeight: g, headerRef: p } = (0, O.Z)(0),
        { scrolledToTop: f, handleScroll: h } = (0, y.V)(),
        j = l.managed || o,
        v = (0, _.e)(t.id, l.id),
        C =
            (0, a.e7)([b.Z], () => {
                var e, n;
                return null != (n = null == (e = b.Z.getRoleMemberCount(t.id)) ? void 0 : e[l.id]) ? n : 0;
            }) > v.length,
        R = () => {
            (x.default.track(I.rMx.OPEN_MODAL, {
                type: 'Add Role Members',
                location_page: 'Role Settings',
                location_section: 'Members'
            }),
                (0, c.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('7590'), n.e('31564')]).then(n.bind(n, 24722));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            w(P({}, n), {
                                roleId: l.id,
                                guildId: t.id
                            })
                        );
                }));
        };
    return (0, r.jsxs)('div', {
        className: S.container,
        children: [
            (0, r.jsx)('div', {
                className: S.headerContainer,
                ref: p,
                children: (0, r.jsx)('div', {
                    className: T.contentWidth,
                    children: (0, r.jsxs)('div', {
                        className: s()(T.header, { [T.stickyHeaderElevated]: !f }),
                        children: [
                            (0, r.jsx)(y.Z, {
                                guild: t,
                                role: l,
                                selectedSection: N.ZI.MEMBERS,
                                setSelectedSection: d
                            }),
                            (0, r.jsx)(k, {
                                query: u,
                                setQuery: m,
                                locked: j,
                                handleAddClick: R
                            }),
                            C
                                ? (0, r.jsx)(c.Wn, {
                                      className: S.searchWarning,
                                      messageType: c.QYI.INFO,
                                      children: E.intl.string(E.t.RQxHZ2)
                                  })
                                : null
                        ]
                    })
                })
            }),
            (0, r.jsx)(A, {
                headerHeight: g + 8,
                query: u,
                guildId: t.id,
                roleId: l.id,
                locked: j,
                onScroll: h,
                roleMembers: v,
                handleAddClick: R
            })
        ]
    });
}
