n.d(t, { ZP: () => k }), n(781311), n(642613), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(479531),
    u = n(616780),
    m = n(100527),
    g = n(906732),
    p = n(670188),
    h = n(594174),
    f = n(626135),
    b = n(243730),
    x = n(434404),
    j = n(946724),
    N = n(130341),
    _ = n(95242),
    v = n(420966),
    C = n(566476),
    O = n(203377),
    y = n(981631),
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
        await x.Z.updateMemberRoles(t, e.id, i, [], [n]);
    } catch (t) {
        let e = new d.Z(t);
        (0, o.h7j)((t) =>
            (0, r.jsx)(
                o.ConfirmModal,
                P(T({}, t), {
                    header: I.NW.string(I.t.R0RpRU),
                    confirmText: I.NW.string(I.t.BddRzc),
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
    let { member: t, guildId: s, roleId: l, locked: d } = e,
        m = i.useMemo(() => ({ [s]: [t.id] }), [s, t.id]);
    function g(e) {
        if ((e.stopPropagation(), !d)) {
            if (e.shiftKey) return void w(t, s, l);
            let n = j.Z.getRole(l);
            (0, o.h7j)((e) =>
                (0, r.jsxs)(
                    o.ConfirmModal,
                    P(T({}, e), {
                        header: I.NW.string(I.t['7sFNfX']),
                        confirmText: I.NW.string(I.t.N86XcH),
                        cancelText: I.NW.string(I.t['ETE/oK']),
                        onConfirm: () => w(t, s, l),
                        children: [
                            (0, r.jsx)(o.Text, {
                                color: 'text-normal',
                                variant: 'text-md/normal',
                                children: I.NW.format(I.t.scORUl, {
                                    username: t.name,
                                    roleName: null == n ? void 0 : n.name
                                })
                            }),
                            (0, r.jsx)(o.Text, {
                                className: E.removeTip,
                                color: 'text-muted',
                                variant: 'text-md/normal',
                                children: I.NW.string(I.t.jxIxJC)
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
                            guildId: s,
                            showChatItems: !1
                        })
                    );
            });
    }
    return (
        (0, u.$)(m),
        (0, r.jsx)('div', {
            className: S.contentWidth,
            children: (0, r.jsx)(p.Z, {
                userId: t.id,
                guildId: s,
                roleId: l,
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
                                        text: d ? I.NW.string(I.t.wkrQaG) : I.NW.string(I.t['7sFNfX']),
                                        position: 'top',
                                        children: (e) =>
                                            (0, r.jsx)(
                                                o.P3F,
                                                P(T({}, e), {
                                                    className: a()(E.removeButton, { [E.removeButtonDisabled]: d }),
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
            className: a()(E.memberRow, E.emptyRowContainer),
            children: [
                (0, r.jsx)(o.BFJ, {
                    size: 'md',
                    color: 'currentColor'
                }),
                (0, r.jsx)(o.Text, {
                    className: E.emptyRowText,
                    variant: 'text-sm/semibold',
                    color: 'text-muted',
                    children: I.NW.format(I.t.P9pZOT, {
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
    let { guildId: t, roleId: n, query: s, headerHeight: a, locked: l, onScroll: c, roleMembers: d, handleAddClick: u } = e,
        { analyticsLocations: p } = (0, g.ZP)(m.Z.MEMBER_LIST),
        h = i.useMemo(() => s.trim().toLowerCase(), [s]);
    (0, N.rY)(t, h);
    let f = i.useMemo(() => d.filter((e) => (0, N.eg)(h, e)), [d, h]),
        b = i.useMemo(() => f.sort((e, t) => e.name.localeCompare(t.name)), [f]);
    return (0, r.jsx)(g.Gt, {
        value: p,
        children: (0, r.jsx)(o._2F, {
            className: E.list,
            sections: [Math.max(f.length, 1)],
            sectionHeight: a,
            renderSection: () => (0, r.jsx)('div', { style: { height: a } }, 'section'),
            style: { scrollPaddingTop: a },
            rowHeight: 40,
            renderRow: function (e) {
                let { row: i } = e;
                if (0 === b.length)
                    return (0, r.jsx)(
                        Z,
                        {
                            handleAddClick: u,
                            locked: l
                        },
                        'empty'
                    );
                let s = b[i];
                return (0, r.jsx)(
                    R,
                    {
                        member: s,
                        guildId: t,
                        roleId: n,
                        locked: l
                    },
                    s.id
                );
            },
            onScroll: c
        })
    });
}
function A(e) {
    let { query: t, setQuery: n, locked: i, handleAddClick: s } = e;
    return (0, r.jsxs)('div', {
        className: E.searchContainer,
        children: [
            (0, r.jsx)(o.E1j, {
                size: o.E1j.Sizes.MEDIUM,
                query: t,
                onChange: n,
                onClear: () => n(''),
                placeholder: I.NW.string(I.t.pYHobG),
                'aria-label': I.NW.string(I.t.pYHobG)
            }),
            (0, r.jsx)(o.zxk, {
                className: E.addButton,
                size: o.zxk.Sizes.SMALL,
                onClick: s,
                disabled: i,
                children: I.NW.string(I.t.cHszXl)
            })
        ]
    });
}
function k(e) {
    let { guild: t, role: s, locked: c, setSelectedSection: d } = e,
        [u, m] = i.useState(''),
        { headerHeight: g, headerRef: p } = (0, _.Z)(0),
        { scrolledToTop: h, handleScroll: x } = (0, v.V)(),
        j = s.managed || c,
        C = (0, N.e)(t.id, s.id),
        w =
            (0, l.e7)([b.Z], () => {
                var e, n;
                return null != (n = null == (e = b.Z.getRoleMemberCount(t.id)) ? void 0 : e[s.id]) ? n : 0;
            }) > C.length,
        R = () => {
            f.default.track(y.rMx.OPEN_MODAL, {
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
                                roleId: s.id,
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
                        className: a()(S.header, { [S.stickyHeaderElevated]: !h }),
                        children: [
                            (0, r.jsx)(v.Z, {
                                guild: t,
                                role: s,
                                selectedSection: O.ZI.MEMBERS,
                                setSelectedSection: d
                            }),
                            (0, r.jsx)(A, {
                                query: u,
                                setQuery: m,
                                locked: j,
                                handleAddClick: R
                            }),
                            w
                                ? (0, r.jsx)(o.Wn, {
                                      className: E.searchWarning,
                                      messageType: o.QYI.INFO,
                                      children: I.NW.string(I.t.RQxHZ2)
                                  })
                                : null
                        ]
                    })
                })
            }),
            (0, r.jsx)(D, {
                headerHeight: g + 8,
                query: u,
                guildId: t.id,
                roleId: s.id,
                locked: j,
                onScroll: x,
                roleMembers: C,
                handleAddClick: R
            })
        ]
    });
}
