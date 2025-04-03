n.d(t, { ZP: () => W }), n(566702), n(230036), n(47120);
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
    p = n(184301),
    h = n(347475),
    f = n(594174),
    b = n(626135),
    x = n(243730),
    j = n(434404),
    N = n(946724),
    _ = n(130341),
    v = n(95242),
    C = n(420966),
    O = n(566476),
    y = n(203377),
    I = n(981631),
    E = n(388032),
    S = n(905972),
    T = n(877248);
function P(e) {
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
        let e = new d.Z(t);
        (0, o.h7j)((t) =>
            (0, r.jsx)(
                o.ConfirmModal,
                w(P({}, t), {
                    header: E.NW.string(E.t.R0RpRU),
                    confirmText: E.NW.string(E.t.BddRzc),
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
function Z(e) {
    let { member: t, guildId: s, roleId: l, locked: d } = e,
        m = i.useMemo(() => ({ [s]: [t.id] }), [s, t.id]);
    function g(e) {
        if ((e.stopPropagation(), !d)) {
            if (e.shiftKey) return void R(t, s, l);
            let n = N.Z.getRole(l);
            (0, o.h7j)((e) =>
                (0, r.jsxs)(
                    o.ConfirmModal,
                    w(P({}, e), {
                        header: E.NW.string(E.t['7sFNfX']),
                        confirmText: E.NW.string(E.t.N86XcH),
                        cancelText: E.NW.string(E.t['ETE/oK']),
                        onConfirm: () => R(t, s, l),
                        children: [
                            (0, r.jsx)(o.Text, {
                                color: 'text-normal',
                                variant: 'text-md/normal',
                                children: E.NW.format(E.t.scORUl, {
                                    username: t.name,
                                    roleName: null == n ? void 0 : n.name
                                })
                            }),
                            (0, r.jsx)(o.Text, {
                                className: S.removeTip,
                                color: 'text-muted',
                                variant: 'text-md/normal',
                                children: E.NW.string(E.t.jxIxJC)
                            })
                        ]
                    })
                )
            );
        }
    }
    function b(e) {
        let i = f.default.getUser(t.id);
        null != i &&
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('26976'), n.e('51458')]).then(n.bind(n, 415118));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        w(P({}, t), {
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
            className: T.contentWidth,
            children: (0, r.jsx)(o.yRy, {
                renderPopout: (e) =>
                    (0, r.jsx)(
                        h.Z,
                        P(
                            {
                                guildId: s,
                                userId: t.id,
                                roleId: l
                            },
                            e
                        )
                    ),
                position: 'left',
                preload: () => (0, p.Z)(t.id, t.avatarURL, { guildId: s }),
                children: (e) =>
                    (0, r.jsxs)(
                        o.P3F,
                        w(P({}, e), {
                            className: S.memberRow,
                            onContextMenu: b,
                            children: [
                                (0, r.jsx)(O.Z, {
                                    className: S.memberDetails,
                                    avatarURL: t.avatarURL,
                                    name: t.name,
                                    bot: t.bot,
                                    verifiedBot: t.verifiedBot,
                                    userTag: t.userTag
                                }),
                                (0, r.jsx)('div', {
                                    className: S.removeButtonContainer,
                                    children: (0, r.jsx)(o.ua7, {
                                        text: d ? E.NW.string(E.t.wkrQaG) : E.NW.string(E.t['7sFNfX']),
                                        position: 'top',
                                        children: (e) =>
                                            (0, r.jsx)(
                                                o.P3F,
                                                w(P({}, e), {
                                                    className: a()(S.removeButton, { [S.removeButtonDisabled]: d }),
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
function D(e) {
    let { handleAddClick: t, locked: n } = e;
    return (0, r.jsx)('div', {
        className: T.contentWidth,
        children: (0, r.jsxs)('div', {
            className: a()(S.memberRow, S.emptyRowContainer),
            children: [
                (0, r.jsx)(o.BFJ, {
                    size: 'md',
                    color: 'currentColor'
                }),
                (0, r.jsx)(o.Text, {
                    className: S.emptyRowText,
                    variant: 'text-sm/semibold',
                    color: 'text-muted',
                    children: E.NW.format(E.t.P9pZOT, {
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
function A(e) {
    let { guildId: t, roleId: n, query: s, headerHeight: a, locked: l, onScroll: c, roleMembers: d, handleAddClick: u } = e,
        { analyticsLocations: p } = (0, g.ZP)(m.Z.MEMBER_LIST),
        h = i.useMemo(() => s.trim().toLowerCase(), [s]);
    (0, _.rY)(t, h);
    let f = i.useMemo(() => d.filter((e) => (0, _.eg)(h, e)), [d, h]),
        b = i.useMemo(() => f.sort((e, t) => e.name.localeCompare(t.name)), [f]);
    return (0, r.jsx)(g.Gt, {
        value: p,
        children: (0, r.jsx)(o._2F, {
            className: S.list,
            sections: [Math.max(f.length, 1)],
            sectionHeight: a,
            renderSection: () => (0, r.jsx)('div', { style: { height: a } }, 'section'),
            style: { scrollPaddingTop: a },
            rowHeight: 40,
            renderRow: function (e) {
                let { row: i } = e;
                if (0 === b.length)
                    return (0, r.jsx)(
                        D,
                        {
                            handleAddClick: u,
                            locked: l
                        },
                        'empty'
                    );
                let s = b[i];
                return (0, r.jsx)(
                    Z,
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
function k(e) {
    let { query: t, setQuery: n, locked: i, handleAddClick: s } = e;
    return (0, r.jsxs)('div', {
        className: S.searchContainer,
        children: [
            (0, r.jsx)(o.E1j, {
                size: o.E1j.Sizes.MEDIUM,
                query: t,
                onChange: n,
                onClear: () => n(''),
                placeholder: E.NW.string(E.t.pYHobG),
                'aria-label': E.NW.string(E.t.pYHobG)
            }),
            (0, r.jsx)(o.zxk, {
                className: S.addButton,
                size: o.zxk.Sizes.SMALL,
                onClick: s,
                disabled: i,
                children: E.NW.string(E.t.cHszXl)
            })
        ]
    });
}
function W(e) {
    let { guild: t, role: s, locked: c, setSelectedSection: d } = e,
        [u, m] = i.useState(''),
        { headerHeight: g, headerRef: p } = (0, v.Z)(0),
        { scrolledToTop: h, handleScroll: f } = (0, C.V)(),
        j = s.managed || c,
        N = (0, _.e)(t.id, s.id),
        O =
            (0, l.e7)([x.Z], () => {
                var e, n;
                return null != (n = null == (e = x.Z.getRoleMemberCount(t.id)) ? void 0 : e[s.id]) ? n : 0;
            }) > N.length,
        R = () => {
            b.default.track(I.rMx.OPEN_MODAL, {
                type: 'Add Role Members',
                location_page: 'Role Settings',
                location_section: 'Members'
            }),
                (0, o.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('7590'), n.e('45037')]).then(n.bind(n, 24722));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            w(P({}, n), {
                                roleId: s.id,
                                guildId: t.id
                            })
                        );
                });
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
                        className: a()(T.header, { [T.stickyHeaderElevated]: !h }),
                        children: [
                            (0, r.jsx)(C.Z, {
                                guild: t,
                                role: s,
                                selectedSection: y.ZI.MEMBERS,
                                setSelectedSection: d
                            }),
                            (0, r.jsx)(k, {
                                query: u,
                                setQuery: m,
                                locked: j,
                                handleAddClick: R
                            }),
                            O
                                ? (0, r.jsx)(o.Wn, {
                                      className: S.searchWarning,
                                      messageType: o.QYI.INFO,
                                      children: E.NW.string(E.t.RQxHZ2)
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
                roleId: s.id,
                locked: j,
                onScroll: f,
                roleMembers: N,
                handleAddClick: R
            })
        ]
    });
}
