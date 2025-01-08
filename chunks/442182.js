n.d(t, {
    ZP: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(479531),
    u = n(616780),
    m = n(100527),
    h = n(906732),
    g = n(184301),
    x = n(347475),
    p = n(594174),
    f = n(626135),
    C = n(243730),
    v = n(434404),
    _ = n(946724),
    N = n(130341),
    I = n(95242),
    T = n(420966),
    j = n(566476),
    b = n(203377),
    S = n(981631),
    E = n(388032),
    R = n(322442),
    y = n(490909);
async function A(e, t, n) {
    let r = e.roles.filter((e) => e !== n);
    try {
        await v.Z.updateMemberRoles(t, e.id, r, [], [n]);
    } catch (t) {
        let e = new d.Z(t);
        (0, o.openModal)((t) =>
            (0, i.jsx)(o.ConfirmModal, {
                ...t,
                header: E.intl.string(E.t.R0RpRU),
                confirmText: E.intl.string(E.t.BddRzc),
                confirmButtonColor: o.Button.Colors.BRAND,
                children: (0, i.jsx)(o.Text, {
                    color: 'text-normal',
                    variant: 'text-md/normal',
                    children: e.getAnyErrorMessage()
                })
            })
        );
    }
}
function Z(e) {
    let { member: t, guildId: l, roleId: s, locked: d } = e,
        m = r.useMemo(() => ({ [l]: [t.id] }), [l, t.id]);
    function h(e) {
        if ((e.stopPropagation(), !d)) {
            if (e.shiftKey) {
                A(t, l, s);
                return;
            }
            !(function (e, t, n) {
                let r = _.Z.getRole(n);
                (0, o.openModal)((l) =>
                    (0, i.jsxs)(o.ConfirmModal, {
                        ...l,
                        header: E.intl.string(E.t['7sFNfX']),
                        confirmText: E.intl.string(E.t.N86XcH),
                        cancelText: E.intl.string(E.t['ETE/oK']),
                        onConfirm: () => A(e, t, n),
                        children: [
                            (0, i.jsx)(o.Text, {
                                color: 'text-normal',
                                variant: 'text-md/normal',
                                children: E.intl.format(E.t.scORUl, {
                                    username: e.name,
                                    roleName: null == r ? void 0 : r.name
                                })
                            }),
                            (0, i.jsx)(o.Text, {
                                className: R.removeTip,
                                color: 'text-muted',
                                variant: 'text-md/normal',
                                children: E.intl.string(E.t.jxIxJC)
                            })
                        ]
                    })
                );
            })(t, l, s);
        }
    }
    function f(e) {
        let r = p.default.getUser(t.id);
        if (null != r)
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('51269'), n.e('13125'), n.e('26976'), n.e('84416')]).then(n.bind(n, 415118));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        user: r,
                        guildId: l,
                        showChatItems: !1
                    });
            });
    }
    return (
        (0, u.$)(m),
        (0, i.jsx)('div', {
            className: y.contentWidth,
            children: (0, i.jsx)(o.Popout, {
                renderPopout: (e) =>
                    (0, i.jsx)(x.Z, {
                        guildId: l,
                        userId: t.id,
                        roleId: s,
                        ...e
                    }),
                position: 'left',
                preload: () => (0, g.Z)(t.id, t.avatarURL, { guildId: l }),
                children: (e) =>
                    (0, i.jsxs)(o.Clickable, {
                        ...e,
                        className: R.memberRow,
                        onContextMenu: f,
                        children: [
                            (0, i.jsx)(j.Z, {
                                className: R.memberDetails,
                                avatarURL: t.avatarURL,
                                name: t.name,
                                bot: t.bot,
                                verifiedBot: t.verifiedBot,
                                userTag: t.userTag
                            }),
                            (0, i.jsx)('div', {
                                className: R.removeButtonContainer,
                                children: (0, i.jsx)(o.Tooltip, {
                                    text: d ? E.intl.string(E.t.wkrQaG) : E.intl.string(E.t['7sFNfX']),
                                    position: 'top',
                                    children: (e) =>
                                        (0, i.jsx)(o.Clickable, {
                                            ...e,
                                            className: a()(R.removeButton, { [R.removeButtonDisabled]: d }),
                                            onClick: h,
                                            children: (0, i.jsx)(o.CircleXIcon, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            })
                                        })
                                })
                            })
                        ]
                    })
            })
        })
    );
}
function L(e) {
    let { handleAddClick: t, locked: n } = e;
    return (0, i.jsx)('div', {
        className: y.contentWidth,
        children: (0, i.jsxs)('div', {
            className: a()(R.memberRow, R.emptyRowContainer),
            children: [
                (0, i.jsx)(o.GroupIcon, {
                    size: 'md',
                    color: 'currentColor'
                }),
                (0, i.jsx)(o.Text, {
                    className: R.emptyRowText,
                    variant: 'text-sm/semibold',
                    color: 'text-muted',
                    children: E.intl.format(E.t.P9pZOT, {
                        addMembersHook: function (e, r) {
                            return n
                                ? null
                                : (0, i.jsx)(
                                      o.Anchor,
                                      {
                                          onClick: t,
                                          children: e
                                      },
                                      r
                                  );
                        }
                    })
                })
            ]
        })
    });
}
function D(e) {
    let { guildId: t, roleId: n, query: l, headerHeight: a, locked: s, onScroll: c, roleMembers: d, handleAddClick: u } = e,
        { analyticsLocations: g } = (0, h.ZP)(m.Z.MEMBER_LIST),
        x = r.useMemo(() => l.trim().toLowerCase(), [l]);
    (0, N.rY)(t, x);
    let p = r.useMemo(() => d.filter((e) => (0, N.eg)(x, e)), [d, x]),
        f = r.useMemo(() => p.sort((e, t) => e.name.localeCompare(t.name)), [p]);
    return (0, i.jsx)(h.Gt, {
        value: g,
        children: (0, i.jsx)(o.ListAuto, {
            className: R.list,
            sections: [Math.max(p.length, 1)],
            sectionHeight: a,
            renderSection: () => (0, i.jsx)('div', { style: { height: a } }, 'section'),
            style: { scrollPaddingTop: a },
            rowHeight: 40,
            renderRow: function (e) {
                let { row: r } = e;
                if (0 === f.length)
                    return (0, i.jsx)(
                        L,
                        {
                            handleAddClick: u,
                            locked: s
                        },
                        'empty'
                    );
                let l = f[r];
                return (0, i.jsx)(
                    Z,
                    {
                        member: l,
                        guildId: t,
                        roleId: n,
                        locked: s
                    },
                    l.id
                );
            },
            onScroll: c
        })
    });
}
function O(e) {
    let { query: t, setQuery: n, locked: r, handleAddClick: l } = e;
    return (0, i.jsxs)('div', {
        className: R.searchContainer,
        children: [
            (0, i.jsx)(o.SearchBar, {
                size: o.SearchBar.Sizes.MEDIUM,
                query: t,
                onChange: n,
                onClear: () => n(''),
                placeholder: E.intl.string(E.t.pYHobG),
                'aria-label': E.intl.string(E.t.pYHobG)
            }),
            (0, i.jsx)(o.Button, {
                className: R.addButton,
                size: o.Button.Sizes.SMALL,
                onClick: l,
                disabled: r,
                children: E.intl.string(E.t.cHszXl)
            })
        ]
    });
}
function k(e) {
    let { guild: t, role: l, locked: c, setSelectedSection: d } = e,
        [u, m] = r.useState(''),
        { headerHeight: h, headerRef: g } = (0, I.Z)(0),
        { scrolledToTop: x, handleScroll: p } = (0, T.V)(),
        v = l.managed || c,
        _ = (0, N.e)(t.id, l.id),
        j =
            (0, s.e7)([C.Z], () => {
                var e, n;
                return null !== (n = null === (e = C.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[l.id]) && void 0 !== n ? n : 0;
            }) > _.length,
        A = () => {
            f.default.track(S.rMx.OPEN_MODAL, {
                type: 'Add Role Members',
                location_page: 'Role Settings',
                location_section: 'Members'
            }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('7590'), n.e('5154')]).then(n.bind(n, 24722));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            roleId: l.id,
                            guildId: t.id
                        });
                });
        };
    return (0, i.jsxs)('div', {
        className: R.container,
        children: [
            (0, i.jsx)('div', {
                className: R.headerContainer,
                ref: g,
                children: (0, i.jsx)('div', {
                    className: y.contentWidth,
                    children: (0, i.jsxs)('div', {
                        className: a()(y.header, { [y.stickyHeaderElevated]: !x }),
                        children: [
                            (0, i.jsx)(T.Z, {
                                guild: t,
                                role: l,
                                selectedSection: b.ZI.MEMBERS,
                                setSelectedSection: d
                            }),
                            (0, i.jsx)(O, {
                                query: u,
                                setQuery: m,
                                locked: v,
                                handleAddClick: A
                            }),
                            j
                                ? (0, i.jsx)(o.HelpMessage, {
                                      className: R.searchWarning,
                                      messageType: o.HelpMessageTypes.INFO,
                                      children: E.intl.string(E.t.RQxHZ2)
                                  })
                                : null
                        ]
                    })
                })
            }),
            (0, i.jsx)(D, {
                headerHeight: h + 8,
                query: u,
                guildId: t.id,
                roleId: l.id,
                locked: v,
                onScroll: p,
                roleMembers: _,
                handleAddClick: A
            })
        ]
    });
}
