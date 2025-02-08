l.d(t, { Z: () => M }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(498607),
    r = l.n(s),
    c = l(399606),
    d = l(433517),
    C = l(481060),
    u = l(430824),
    m = l(496675),
    h = l(588215),
    x = l(241559),
    g = l(893966),
    p = l(256003),
    _ = l(170323),
    b = l(434368),
    f = l(42170),
    j = l(123846),
    H = l(42551),
    v = l(981631),
    N = l(388032),
    Z = l(338648),
    L = l(216412);
function R(e) {
    let { label: t, onFilter: l, isFiltered: a, isSorted: i, className: s, ...r } = e,
        c = a ? 'header-primary' : 'header-secondary';
    return (
        i && (c = 'text-brand'),
        (0, n.jsx)('th', {
            className: o()(Z.tableHeaderCellContainer, s),
            children: (0, n.jsxs)(C.P3F, {
                ...r,
                onClick: l,
                className: o()(Z.tableHeaderCell, { [Z.tableHeaderCellWithFilter]: null != l }),
                children: [
                    (0, n.jsx)(C.Text, {
                        variant: 'eyebrow',
                        color: c,
                        children: t
                    }),
                    null != l &&
                        (0, n.jsx)('div', {
                            className: Z.filterIconButton,
                            children: (0, n.jsx)(C.gXV, {
                                size: 'custom',
                                className: Z.filterIcon,
                                color: a ? C.TVs.colors.CONTROL_BRAND_FOREGROUND.css : C.TVs.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16
                            })
                        })
                ]
            })
        })
    );
}
let I = 'member-safety-force-show-signals-tooltip';
function M(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        i = (0, c.e7)([g.Z], () => g.Z.getSearchStateByGuildId(t), [t], r()),
        s = (0, c.e7)([m.Z, u.Z], () => m.Z.can(v.Plq.MANAGE_GUILD, u.Z.getGuild(t)), [t]),
        { selectedUserIds: M, addUsers: V, clearSelection: D } = (0, p.Z)(t),
        S = i.requireUnusualDmActivity || i.requireCommunicationDisabled || i.requireUnusualAccountActivity || i.requireUsernameQuarantined,
        T = i.selectedRoleIds.size > 0,
        E = null != i.selectedJoinDateOption.afterDate,
        w = i.selectedSort === h.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
        k = null != i.selectedAccountAgeOption.afterDate,
        y = i.selectedSort === h.d$.ORDER_BY_USER_ID_ASC || i.selectedSort === h.d$.ORDER_BY_USER_ID_DESC,
        A = null != i.selectedSourceInviteCode && '' !== i.selectedSourceInviteCode,
        B = null != i.selectedJoinSourceType,
        O = A || B,
        [U, F] = a.useState(null == d.K.get(I, null)),
        P = a.useCallback(() => {
            d.K.set(I, Date.now()), F(!1);
        }, []),
        z = (0, x.xC)(t),
        q = a.useMemo(() => l.filter((e) => (0, x.rX)(t, z, e)), [z, l, t]),
        G = q.length > 0,
        Y = 0 === q.filter((e) => !M.has(e)).length,
        K = a.useCallback(() => {
            G && (Y ? D() : V(q));
        }, [G, Y, D, V, q]);
    return (0, n.jsx)('thead', {
        children: (0, n.jsxs)('tr', {
            className: Z.tableHeaderRow,
            children: [
                z &&
                    (0, n.jsx)('th', {
                        className: o()(Z.tableHeaderCellContainer, L.xsmallCol),
                        children: (0, n.jsx)(C.ua7, {
                            shouldShow: !G,
                            text: N.intl.string(N.t.tJEY0N),
                            children: (e) =>
                                (0, n.jsx)(C.P3F, {
                                    ...e,
                                    onClick: K,
                                    className: Z.tableHeaderCell,
                                    children: (0, n.jsx)(C.XZJ, {
                                        type: C.XZJ.Types.INVERTED,
                                        value: Y,
                                        disabled: !G
                                    })
                                })
                        })
                    }),
                (0, n.jsx)(R, { label: N.intl.string(N.t.Es7n9f) }),
                s
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(C.yRy, {
                                  animation: C.yRy.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, n.jsx)(f.Z, {
                                          guildId: t,
                                          onClose: v.dG4
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, n.jsx)(R, {
                                          label: N.intl.string(N.t.xcKP1N),
                                          onFilter: t,
                                          isFiltered: E,
                                          isSorted: w,
                                          className: L.smallCol,
                                          ...l
                                      });
                                  }
                              }),
                              (0, n.jsx)(C.yRy, {
                                  animation: C.yRy.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, n.jsx)(_.Z, {
                                          guildId: t,
                                          onClose: v.dG4
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, n.jsx)(R, {
                                          label: N.intl.string(N.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: k,
                                          isSorted: y,
                                          className: L.smallCol,
                                          ...l
                                      });
                                  }
                              })
                          ]
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(R, {
                                  label: N.intl.string(N.t.xcKP1N),
                                  className: L.smallCol
                              }),
                              (0, n.jsx)(R, {
                                  label: N.intl.string(N.t.sPph4O),
                                  className: L.smallCol
                              })
                          ]
                      }),
                s
                    ? (0, n.jsx)(C.yRy, {
                          animation: C.yRy.Animation.FADE,
                          position: 'bottom',
                          spacing: 4,
                          align: 'left',
                          renderPopout: () =>
                              (0, n.jsx)(j.Z, {
                                  guildId: t,
                                  onClose: v.dG4
                              }),
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, n.jsx)(R, {
                                  label: N.intl.string(N.t.yn0w19),
                                  onFilter: t,
                                  isFiltered: O,
                                  className: L.smallCol,
                                  ...l
                              });
                          }
                      })
                    : s &&
                      (0, n.jsx)(R, {
                          label: N.intl.string(N.t.yn0w19),
                          className: L.smallCol
                      }),
                (0, n.jsx)(C.yRy, {
                    animation: C.yRy.Animation.FADE,
                    position: 'bottom',
                    spacing: 4,
                    align: 'left',
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, n.jsx)(H.Z, {
                            guildId: t,
                            onClose: l
                        });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, n.jsx)(R, {
                            label: N.intl.string(N.t['2SZsWV']),
                            onFilter: t,
                            isFiltered: T,
                            className: o()(L.mediumCol),
                            ...l
                        });
                    }
                }),
                (0, n.jsx)(C.ua7, {
                    text: N.intl.string(N.t['2cRO3d']),
                    position: 'top',
                    align: 'left',
                    forceOpen: U,
                    shouldShow: !0,
                    color: C.ua7.Colors.BRAND,
                    children: (e) =>
                        (0, n.jsx)(C.yRy, {
                            animation: C.yRy.Animation.FADE,
                            position: 'bottom',
                            spacing: 4,
                            align: 'left',
                            renderPopout: (e) => {
                                let { closePopout: l } = e;
                                return (0, n.jsx)(b.Z, {
                                    guildId: t,
                                    onClose: l
                                });
                            },
                            children: (t) =>
                                (0, n.jsx)(R, {
                                    label: N.intl.string(N.t['7V375+']),
                                    'aria-label': N.intl.string(N.t['2cRO3d']),
                                    onFilter: (l) => {
                                        var n, a;
                                        P(), null === (n = t.onClick) || void 0 === n || n.call(t, l), null === (a = e.onClick) || void 0 === a || a.call(e);
                                    },
                                    isFiltered: S,
                                    className: o()(L.smallCol),
                                    onMouseEnter: () => {
                                        var l, n;
                                        P(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (n = t.onMouseEnter) || void 0 === n || n.call(t);
                                    },
                                    onMouseDown: t.onMouseDown,
                                    onMouseLeave: e.onMouseLeave,
                                    onBlur: e.onBlur,
                                    onFocus: e.onFocus,
                                    onKeyDown: t.onKeyDown,
                                    'aria-controls': t['aria-controls'],
                                    'aria-expanded': t['aria-expanded']
                                })
                        })
                }),
                (0, n.jsx)(R, {
                    label: N.intl.string(N.t['5Q9xGh']),
                    className: L.smallCol
                })
            ]
        })
    });
}
