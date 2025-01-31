l.d(t, { Z: () => I }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(498607),
    r = l.n(s),
    c = l(399606),
    C = l(433517),
    d = l(481060),
    u = l(430824),
    m = l(496675),
    h = l(588215),
    x = l(241559),
    g = l(893966),
    H = l(256003),
    b = l(170323),
    p = l(434368),
    _ = l(42170),
    j = l(123846),
    f = l(42551),
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
            children: (0, n.jsxs)(d.P3F, {
                ...r,
                onClick: l,
                className: o()(Z.tableHeaderCell, { [Z.tableHeaderCellWithFilter]: null != l }),
                children: [
                    (0, n.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: c,
                        children: t
                    }),
                    null != l &&
                        (0, n.jsx)('div', {
                            className: Z.filterIconButton,
                            children: (0, n.jsx)(d.gXV, {
                                size: 'custom',
                                className: Z.filterIcon,
                                color: a ? d.TVs.colors.CONTROL_BRAND_FOREGROUND.css : d.TVs.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16
                            })
                        })
                ]
            })
        })
    );
}
let M = 'member-safety-force-show-signals-tooltip';
function I(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        i = (0, c.e7)([g.Z], () => g.Z.getSearchStateByGuildId(t), [t], r()),
        s = (0, c.e7)([m.Z, u.Z], () => m.Z.can(v.Plq.MANAGE_GUILD, u.Z.getGuild(t)), [t]),
        { selectedUserIds: I, addUsers: V, clearSelection: D } = (0, H.Z)(t),
        S = i.requireUnusualDmActivity || i.requireCommunicationDisabled || i.requireUnusualAccountActivity || i.requireUsernameQuarantined,
        T = i.selectedRoleIds.size > 0,
        E = null != i.selectedJoinDateOption.afterDate,
        w = i.selectedSort === h.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
        k = null != i.selectedAccountAgeOption.afterDate,
        y = i.selectedSort === h.d$.ORDER_BY_USER_ID_ASC || i.selectedSort === h.d$.ORDER_BY_USER_ID_DESC,
        A = null != i.selectedSourceInviteCode && '' !== i.selectedSourceInviteCode,
        B = null != i.selectedJoinSourceType,
        O = A || B,
        [U, F] = a.useState(null == C.K.get(M, null)),
        P = a.useCallback(() => {
            C.K.set(M, Date.now()), F(!1);
        }, []),
        z = (0, x.xC)(t),
        G = a.useMemo(() => l.filter((e) => (0, x.rX)(t, z, e)), [z, l, t]),
        q = G.length > 0,
        Y = 0 === G.filter((e) => !I.has(e)).length,
        W = a.useCallback(() => {
            q && (Y ? D() : V(G));
        }, [q, Y, D, V, G]);
    return (0, n.jsx)('thead', {
        children: (0, n.jsxs)('tr', {
            className: Z.tableHeaderRow,
            children: [
                z &&
                    (0, n.jsx)('th', {
                        className: o()(Z.tableHeaderCellContainer, L.xsmallCol),
                        children: (0, n.jsx)(d.ua7, {
                            shouldShow: !q,
                            text: N.intl.string(N.t.tJEY0N),
                            children: (e) =>
                                (0, n.jsx)(d.P3F, {
                                    ...e,
                                    onClick: W,
                                    className: Z.tableHeaderCell,
                                    children: (0, n.jsx)(d.XZJ, {
                                        type: d.XZJ.Types.INVERTED,
                                        value: Y,
                                        disabled: !q
                                    })
                                })
                        })
                    }),
                (0, n.jsx)(R, { label: N.intl.string(N.t.Es7n9f) }),
                s
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(d.yRy, {
                                  animation: d.yRy.Animation.FADE,
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
                                          label: N.intl.string(N.t.xcKP1N),
                                          onFilter: t,
                                          isFiltered: E,
                                          isSorted: w,
                                          className: L.smallCol,
                                          ...l
                                      });
                                  }
                              }),
                              (0, n.jsx)(d.yRy, {
                                  animation: d.yRy.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, n.jsx)(b.Z, {
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
                    ? (0, n.jsx)(d.yRy, {
                          animation: d.yRy.Animation.FADE,
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
                (0, n.jsx)(d.yRy, {
                    animation: d.yRy.Animation.FADE,
                    position: 'bottom',
                    spacing: 4,
                    align: 'left',
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, n.jsx)(f.Z, {
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
                (0, n.jsx)(d.ua7, {
                    text: N.intl.string(N.t['2cRO3d']),
                    position: 'top',
                    align: 'left',
                    forceOpen: U,
                    shouldShow: !0,
                    color: d.ua7.Colors.BRAND,
                    children: (e) =>
                        (0, n.jsx)(d.yRy, {
                            animation: d.yRy.Animation.FADE,
                            position: 'bottom',
                            spacing: 4,
                            align: 'left',
                            renderPopout: (e) => {
                                let { closePopout: l } = e;
                                return (0, n.jsx)(p.Z, {
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
