n.d(t, { ZP: () => A }), n(781311), n(642613), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(239091),
    u = n(479531),
    d = n(616780),
    m = n(100527),
    g = n(906732),
    p = n(670188),
    h = n(594174),
    f = n(626135),
    x = n(243730),
    b = n(434404),
    j = n(946724),
    _ = n(130341),
    v = n(95242),
    O = n(420966),
    C = n(566476),
    y = n(203377),
    N = n(981631),
    I = n(388032),
    E = n(905972),
    S = n(877248);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e, t) {
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
async function w(e, t, n) {
    let i = e.roles.filter((e) => e !== n);
    try {
        await b.Z.updateMemberRoles(t, e.id, i, [], [n]);
    } catch (t) {
        let e = new u.Z(t);
        (0, o.h7j)((t) =>
            (0, r.jsx)(
                o.ConfirmModal,
                P(T({}, t), {
                    header: I.intl.string(I.t.R0RpRU),
                    confirmText: I.intl.string(I.t.BddRzc),
                    confirmButtonColor: o.zxk.Colors.BRAND,
                    children: (0, r.jsx)(o.Text, {
                        color: 'text-normal',
                        variant: 'text-md/normal',
                        children: e.getAnyErrorMessage()
                    })
                })
            )
        );
    }
}
function R(e) {
    let { member: t, guildId: l, roleId: a, locked: u } = e,
        m = i.useMemo(() => ({ [l]: [t.id] }), [l, t.id]);
    function g(e) {
        if ((e.stopPropagation(), !u)) {
            if (e.shiftKey) return void w(t, l, a);
            let n = j.Z.getRole(a);
            (0, o.h7j)((e) =>
                (0, r.jsxs)(
                    o.ConfirmModal,
                    P(T({}, e), {
                        header: I.intl.string(I.t['7sFNfX']),
                        confirmText: I.intl.string(I.t.N86XcH),
                        cancelText: I.intl.string(I.t['ETE/oK']),
                        onConfirm: () => w(t, l, a),
                        children: [
                            (0, r.jsx)(o.Text, {
                                color: 'text-normal',
                                variant: 'text-md/normal',
                                children: I.intl.format(I.t.scORUl, {
                                    username: t.name,
                                    roleName: null == n ? void 0 : n.name
                                })
                            }),
                            (0, r.jsx)(o.Text, {
                                className: E.removeTip,
                                color: 'text-muted',
                                variant: 'text-md/normal',
                                children: I.intl.string(I.t.jxIxJC)
                            })
                        ]
                    })
                )
            );
        }
    }
    function f(e) {
        let i = h.default.getUser(t.id);
        null != i &&
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('26976'), n.e('51458')]).then(n.bind(n, 415118));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        P(T({}, t), {
                            user: i,
                            guildId: l,
                            showChatItems: !1
                        })
                    );
            });
    }
    return (
        (0, d.$)(m),
        (0, r.jsx)('div', {
            className: S.contentWidth,
            children: (0, r.jsx)(p.Z, {
                userId: t.id,
                guildId: l,
                roleId: a,
                position: 'left',
                children: (e) =>
                    (0, r.jsxs)(
                        o.P3F,
                        P(T({}, e), {
                            className: E.memberRow,
                            onContextMenu: f,
                            children: [
                                (0, r.jsx)(C.Z, {
                                    className: E.memberDetails,
                                    avatarURL: t.avatarURL,
                                    name: t.name,
                                    bot: t.bot,
                                    verifiedBot: t.verifiedBot,
                                    userTag: t.userTag
                                }),
                                (0, r.jsx)('div', {
                                    className: E.removeButtonContainer,
                                    children: (0, r.jsx)(o.ua7, {
                                        text: u ? I.intl.string(I.t.wkrQaG) : I.intl.string(I.t['7sFNfX']),
                                        position: 'top',
                                        children: (e) =>
                                            (0, r.jsx)(
                                                o.P3F,
                                                P(T({}, e), {
                                                    className: s()(E.removeButton, { [E.removeButtonDisabled]: u }),
                                                    onClick: g,
                                                    children: (0, r.jsx)(o.k$p, {
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
function Z(e) {
    let { handleAddClick: t, locked: n } = e;
    return (0, r.jsx)('div', {
        className: S.contentWidth,
        children: (0, r.jsxs)('div', {
            className: s()(E.memberRow, E.emptyRowContainer),
            children: [
                (0, r.jsx)(o.BFJ, {
                    size: 'md',
                    color: 'currentColor'
                }),
                (0, r.jsx)(o.Text, {
                    className: E.emptyRowText,
                    variant: 'text-sm/semibold',
                    color: 'text-muted',
                    children: I.intl.format(I.t.P9pZOT, {
                        addMembersHook: function (e, i) {
                            return n
                                ? null
                                : (0, r.jsx)(
                                      o.eee,
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
function D(e) {
    let { guildId: t, roleId: n, query: l, headerHeight: s, locked: a, onScroll: c, roleMembers: u, handleAddClick: d } = e,
        { analyticsLocations: p } = (0, g.ZP)(m.Z.MEMBER_LIST),
        h = i.useMemo(() => l.trim().toLowerCase(), [l]);
    (0, _.rY)(t, h);
    let f = i.useMemo(() => u.filter((e) => (0, _.eg)(h, e)), [u, h]),
        x = i.useMemo(() => f.sort((e, t) => e.name.localeCompare(t.name)), [f]);
    return (0, r.jsx)(g.Gt, {
        value: p,
        children: (0, r.jsx)(o._2F, {
            className: E.list,
            sections: [Math.max(f.length, 1)],
            sectionHeight: s,
            renderSection: () => (0, r.jsx)('div', { style: { height: s } }, 'section'),
            style: { scrollPaddingTop: s },
            rowHeight: 40,
            renderRow: function (e) {
                let { row: i } = e;
                if (0 === x.length)
                    return (0, r.jsx)(
                        Z,
                        {
                            handleAddClick: d,
                            locked: a
                        },
                        'empty'
                    );
                let l = x[i];
                return (0, r.jsx)(
                    R,
                    {
                        member: l,
                        guildId: t,
                        roleId: n,
                        locked: a
                    },
                    l.id
                );
            },
            onScroll: c
        })
    });
}
function k(e) {
    let { query: t, setQuery: n, locked: i, handleAddClick: l } = e;
    return (0, r.jsxs)('div', {
        className: E.searchContainer,
        children: [
            (0, r.jsx)(o.E1j, {
                size: o.E1j.Sizes.MEDIUM,
                query: t,
                onChange: n,
                onClear: () => n(''),
                placeholder: I.intl.string(I.t.pYHobG),
                'aria-label': I.intl.string(I.t.pYHobG)
            }),
            (0, r.jsx)(o.zxk, {
                className: E.addButton,
                size: o.zxk.Sizes.SMALL,
                onClick: l,
                disabled: i,
                children: I.intl.string(I.t.cHszXl)
            })
        ]
    });
}
function A(e) {
    let { guild: t, role: l, locked: c, setSelectedSection: u } = e,
        [d, m] = i.useState(''),
        { headerHeight: g, headerRef: p } = (0, v.Z)(0),
        { scrolledToTop: h, handleScroll: b } = (0, O.V)(),
        j = l.managed || c,
        C = (0, _.e)(t.id, l.id),
        w =
            (0, a.e7)([x.Z], () => {
                var e, n;
                return null != (n = null == (e = x.Z.getRoleMemberCount(t.id)) ? void 0 : e[l.id]) ? n : 0;
            }) > C.length,
        R = () => {
            f.default.track(N.rMx.OPEN_MODAL, {
                type: 'Add Role Members',
                location_page: 'Role Settings',
                location_section: 'Members'
            }),
                (0, o.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('7590'), n.e('45037')]).then(n.bind(n, 24722));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            P(T({}, n), {
                                roleId: l.id,
                                guildId: t.id
                            })
                        );
                });
        };
    return (0, r.jsxs)('div', {
        className: E.container,
        children: [
            (0, r.jsx)('div', {
                className: E.headerContainer,
                ref: p,
                children: (0, r.jsx)('div', {
                    className: S.contentWidth,
                    children: (0, r.jsxs)('div', {
                        className: s()(S.header, { [S.stickyHeaderElevated]: !h }),
                        children: [
                            (0, r.jsx)(O.Z, {
                                guild: t,
                                role: l,
                                selectedSection: y.ZI.MEMBERS,
                                setSelectedSection: u
                            }),
                            (0, r.jsx)(k, {
                                query: d,
                                setQuery: m,
                                locked: j,
                                handleAddClick: R
                            }),
                            w
                                ? (0, r.jsx)(o.Wn, {
                                      className: E.searchWarning,
                                      messageType: o.QYI.INFO,
                                      children: I.intl.string(I.t.RQxHZ2)
                                  })
                                : null
                        ]
                    })
                })
            }),
            (0, r.jsx)(D, {
                headerHeight: g + 8,
                query: d,
                guildId: t.id,
                roleId: l.id,
                locked: j,
                onScroll: b,
                roleMembers: C,
                handleAddClick: R
            })
        ]
    });
}
