n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var l = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    r = n(498607),
    s = n.n(r),
    c = n(399606),
    C = n(433517),
    d = n(481060),
    u = n(430824),
    m = n(496675),
    h = n(588215),
    x = n(241559),
    b = n(893966),
    f = n(256003),
    g = n(170323),
    p = n(434368),
    H = n(42170),
    j = n(123846),
    v = n(42551),
    N = n(981631),
    L = n(388032),
    I = n(338648),
    _ = n(216412);
function M(e) {
    let { label: t, onFilter: n, isFiltered: o, isSorted: i, className: r, ...s } = e,
        c = o ? 'header-primary' : 'header-secondary';
    return (
        i && (c = 'text-brand'),
        (0, l.jsx)('th', {
            className: a()(I.tableHeaderCellContainer, r),
            children: (0, l.jsxs)(d.Clickable, {
                ...s,
                onClick: n,
                className: a()(I.tableHeaderCell, { [I.tableHeaderCellWithFilter]: null != n }),
                children: [
                    (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: c,
                        children: t
                    }),
                    null != n &&
                        (0, l.jsx)('div', {
                            className: I.filterIconButton,
                            children: (0, l.jsx)(d.FiltersHorizontalIcon, {
                                size: 'custom',
                                className: I.filterIcon,
                                color: o ? d.tokens.colors.CONTROL_BRAND_FOREGROUND.css : d.tokens.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16
                            })
                        })
                ]
            })
        })
    );
}
let Z = 'member-safety-force-show-signals-tooltip';
function R(e) {
    let { guildId: t, currentPagedMembers: n } = e,
        i = (0, c.e7)([b.Z], () => b.Z.getSearchStateByGuildId(t), [t], s()),
        r = (0, c.e7)([m.Z, u.Z], () => m.Z.can(N.Plq.MANAGE_GUILD, u.Z.getGuild(t)), [t]),
        { selectedUserIds: R, addUsers: D, clearSelection: S } = (0, f.Z)(t),
        V = i.requireUnusualDmActivity || i.requireCommunicationDisabled || i.requireUnusualAccountActivity || i.requireUsernameQuarantined,
        T = i.selectedRoleIds.size > 0,
        E = null != i.selectedJoinDateOption.afterDate,
        w = i.selectedSort === h.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
        A = null != i.selectedAccountAgeOption.afterDate,
        k = i.selectedSort === h.d$.ORDER_BY_USER_ID_ASC || i.selectedSort === h.d$.ORDER_BY_USER_ID_DESC,
        y = null != i.selectedSourceInviteCode && '' !== i.selectedSourceInviteCode,
        B = null != i.selectedJoinSourceType,
        O = y || B,
        [U, P] = o.useState(null == C.K.get(Z, null)),
        F = o.useCallback(() => {
            C.K.set(Z, Date.now()), P(!1);
        }, []),
        G = (0, x.xC)(t),
        z = o.useMemo(() => n.filter((e) => (0, x.rX)(t, G, e)), [G, n, t]),
        q = z.length > 0,
        Y = 0 === z.filter((e) => !R.has(e)).length,
        W = o.useCallback(() => {
            q && (Y ? S() : D(z));
        }, [q, Y, S, D, z]);
    return (0, l.jsx)('thead', {
        children: (0, l.jsxs)('tr', {
            className: I.tableHeaderRow,
            children: [
                G &&
                    (0, l.jsx)('th', {
                        className: a()(I.tableHeaderCellContainer, _.xsmallCol),
                        children: (0, l.jsx)(d.Tooltip, {
                            shouldShow: !q,
                            text: L.intl.string(L.t.tJEY0N),
                            children: (e) =>
                                (0, l.jsx)(d.Clickable, {
                                    ...e,
                                    onClick: W,
                                    className: I.tableHeaderCell,
                                    children: (0, l.jsx)(d.Checkbox, {
                                        type: d.Checkbox.Types.INVERTED,
                                        value: Y,
                                        disabled: !q
                                    })
                                })
                        })
                    }),
                (0, l.jsx)(M, { label: L.intl.string(L.t.Es7n9f) }),
                r
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.Popout, {
                                  animation: d.Popout.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, l.jsx)(H.Z, {
                                          guildId: t,
                                          onClose: N.dG4
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...n } = e;
                                      return (0, l.jsx)(M, {
                                          label: L.intl.string(L.t.xcKP1N),
                                          onFilter: t,
                                          isFiltered: E,
                                          isSorted: w,
                                          className: _.smallCol,
                                          ...n
                                      });
                                  }
                              }),
                              (0, l.jsx)(d.Popout, {
                                  animation: d.Popout.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, l.jsx)(g.Z, {
                                          guildId: t,
                                          onClose: N.dG4
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...n } = e;
                                      return (0, l.jsx)(M, {
                                          label: L.intl.string(L.t.sPph4O),
                                          onFilter: t,
                                          isFiltered: A,
                                          isSorted: k,
                                          className: _.smallCol,
                                          ...n
                                      });
                                  }
                              })
                          ]
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(M, {
                                  label: L.intl.string(L.t.xcKP1N),
                                  className: _.smallCol
                              }),
                              (0, l.jsx)(M, {
                                  label: L.intl.string(L.t.sPph4O),
                                  className: _.smallCol
                              })
                          ]
                      }),
                r
                    ? (0, l.jsx)(d.Popout, {
                          animation: d.Popout.Animation.FADE,
                          position: 'bottom',
                          spacing: 4,
                          align: 'left',
                          renderPopout: () =>
                              (0, l.jsx)(j.Z, {
                                  guildId: t,
                                  onClose: N.dG4
                              }),
                          children: (e) => {
                              let { onClick: t, ...n } = e;
                              return (0, l.jsx)(M, {
                                  label: L.intl.string(L.t.yn0w19),
                                  onFilter: t,
                                  isFiltered: O,
                                  className: _.smallCol,
                                  ...n
                              });
                          }
                      })
                    : r &&
                      (0, l.jsx)(M, {
                          label: L.intl.string(L.t.yn0w19),
                          className: _.smallCol
                      }),
                (0, l.jsx)(d.Popout, {
                    animation: d.Popout.Animation.FADE,
                    position: 'bottom',
                    spacing: 4,
                    align: 'left',
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, l.jsx)(v.Z, {
                            guildId: t,
                            onClose: n
                        });
                    },
                    children: (e) => {
                        let { onClick: t, ...n } = e;
                        return (0, l.jsx)(M, {
                            label: L.intl.string(L.t['2SZsWV']),
                            onFilter: t,
                            isFiltered: T,
                            className: a()(_.mediumCol),
                            ...n
                        });
                    }
                }),
                (0, l.jsx)(d.Tooltip, {
                    text: L.intl.string(L.t['2cRO3d']),
                    position: 'top',
                    align: 'left',
                    forceOpen: U,
                    shouldShow: !0,
                    color: d.Tooltip.Colors.BRAND,
                    children: (e) =>
                        (0, l.jsx)(d.Popout, {
                            animation: d.Popout.Animation.FADE,
                            position: 'bottom',
                            spacing: 4,
                            align: 'left',
                            renderPopout: (e) => {
                                let { closePopout: n } = e;
                                return (0, l.jsx)(p.Z, {
                                    guildId: t,
                                    onClose: n
                                });
                            },
                            children: (t) =>
                                (0, l.jsx)(M, {
                                    label: L.intl.string(L.t['7V375+']),
                                    'aria-label': L.intl.string(L.t['2cRO3d']),
                                    onFilter: (n) => {
                                        var l, o;
                                        F(), null === (l = t.onClick) || void 0 === l || l.call(t, n), null === (o = e.onClick) || void 0 === o || o.call(e);
                                    },
                                    isFiltered: V,
                                    className: a()(_.smallCol),
                                    onMouseEnter: () => {
                                        var n, l;
                                        F(), null === (n = e.onMouseEnter) || void 0 === n || n.call(e), null === (l = t.onMouseEnter) || void 0 === l || l.call(t);
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
                (0, l.jsx)(M, {
                    label: L.intl.string(L.t['5Q9xGh']),
                    className: _.smallCol
                })
            ]
        })
    });
}
