n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(498607),
    s = n.n(i),
    c = n(399606),
    u = n(433517),
    d = n(481060),
    C = n(430824),
    m = n(496675),
    b = n(588215),
    p = n(241559),
    f = n(893966),
    h = n(256003),
    j = n(170323),
    g = n(434368),
    x = n(42170),
    v = n(123846),
    y = n(42551),
    O = n(981631),
    N = n(388032),
    _ = n(214438),
    H = n(351641);
function w(e) {
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
function S(e, t) {
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
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function Z(e) {
    var { label: t, onFilter: n, isFiltered: l, isSorted: o, className: i } = e,
        s = D(e, ['label', 'onFilter', 'isFiltered', 'isSorted', 'className']);
    let c = l ? 'header-primary' : 'header-secondary';
    return (
        o && (c = 'text-brand'),
        (0, r.jsx)('th', {
            className: a()(_.tableHeaderCellContainer, i),
            children: (0, r.jsxs)(
                d.P3F,
                S(w({}, s), {
                    onClick: n,
                    className: a()(_.tableHeaderCell, { [_.tableHeaderCellWithFilter]: null != n }),
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: 'eyebrow',
                            color: c,
                            children: t
                        }),
                        null != n &&
                            (0, r.jsx)('div', {
                                className: _.filterIconButton,
                                children: (0, r.jsx)(d.gXV, {
                                    size: 'custom',
                                    className: _.filterIcon,
                                    color: l ? d.TVs.colors.CONTROL_BRAND_FOREGROUND.css : d.TVs.colors.TEXT_MUTED.css,
                                    width: 16,
                                    height: 16
                                })
                            })
                    ]
                })
            )
        })
    );
}
let L = 'member-safety-force-show-signals-tooltip';
function I(e) {
    let { guildId: t, currentPagedMembers: n } = e,
        o = (0, c.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], s()),
        i = (0, c.e7)([m.Z, C.Z], () => m.Z.can(O.Plq.MANAGE_GUILD, C.Z.getGuild(t)), [t]),
        { selectedUserIds: I, addUsers: R, clearSelection: P } = (0, h.Z)(t),
        M = o.requireUnusualDmActivity || o.requireCommunicationDisabled || o.requireUnusualAccountActivity || o.requireUsernameQuarantined,
        V = o.selectedRoleIds.size > 0,
        E = null != o.selectedJoinDateOption.afterDate,
        T = o.selectedSort === b.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
        k = null != o.selectedAccountAgeOption.afterDate,
        A = o.selectedSort === b.d$.ORDER_BY_USER_ID_ASC || o.selectedSort === b.d$.ORDER_BY_USER_ID_DESC,
        B = null != o.selectedSourceInviteCode && '' !== o.selectedSourceInviteCode,
        W = null != o.selectedJoinSourceType,
        U = B || W,
        [F, z] = l.useState(null == u.K.get(L, null)),
        q = l.useCallback(() => {
            u.K.set(L, Date.now()), z(!1);
        }, []),
        G = (0, p.xC)(t),
        Y = l.useMemo(() => n.filter((e) => (0, p.rX)(t, G, e)), [G, n, t]),
        K = Y.length > 0,
        X = 0 === Y.filter((e) => !I.has(e)).length,
        J = l.useCallback(() => {
            K && (X ? P() : R(Y));
        }, [K, X, P, R, Y]);
    return (0, r.jsx)('thead', {
        children: (0, r.jsxs)('tr', {
            className: _.tableHeaderRow,
            children: [
                G &&
                    (0, r.jsx)('th', {
                        className: a()(_.tableHeaderCellContainer, H.xsmallCol),
                        children: (0, r.jsx)(d.ua7, {
                            shouldShow: !K,
                            text: N.NW.string(N.t.tJEY0N),
                            children: (e) =>
                                (0, r.jsx)(
                                    d.P3F,
                                    S(w({}, e), {
                                        onClick: J,
                                        className: _.tableHeaderCell,
                                        children: (0, r.jsx)(d.XZJ, {
                                            type: d.XZJ.Types.INVERTED,
                                            value: X,
                                            disabled: !K
                                        })
                                    })
                                )
                        })
                    }),
                (0, r.jsx)(Z, { label: N.NW.string(N.t.Es7n9f) }),
                i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.yRy, {
                                  animation: d.yRy.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, r.jsx)(x.Z, {
                                          guildId: t,
                                          onClose: O.dG4
                                      }),
                                  closeOnScroll: !0,
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = D(e, ['onClick']);
                                      return (0, r.jsx)(
                                          Z,
                                          w(
                                              {
                                                  label: N.NW.string(N.t.xcKP1N),
                                                  onFilter: t,
                                                  isFiltered: E,
                                                  isSorted: T,
                                                  className: H.smallCol
                                              },
                                              n
                                          )
                                      );
                                  }
                              }),
                              (0, r.jsx)(d.yRy, {
                                  animation: d.yRy.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, r.jsx)(j.Z, {
                                          guildId: t,
                                          onClose: O.dG4
                                      }),
                                  closeOnScroll: !0,
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = D(e, ['onClick']);
                                      return (0, r.jsx)(
                                          Z,
                                          w(
                                              {
                                                  label: N.NW.string(N.t.sPph4O),
                                                  onFilter: t,
                                                  isFiltered: k,
                                                  isSorted: A,
                                                  className: H.smallCol
                                              },
                                              n
                                          )
                                      );
                                  }
                              })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(Z, {
                                  label: N.NW.string(N.t.xcKP1N),
                                  className: H.smallCol
                              }),
                              (0, r.jsx)(Z, {
                                  label: N.NW.string(N.t.sPph4O),
                                  className: H.smallCol
                              })
                          ]
                      }),
                i
                    ? (0, r.jsx)(d.yRy, {
                          animation: d.yRy.Animation.FADE,
                          position: 'bottom',
                          spacing: 4,
                          align: 'left',
                          renderPopout: () =>
                              (0, r.jsx)(v.Z, {
                                  guildId: t,
                                  onClose: O.dG4
                              }),
                          closeOnScroll: !0,
                          children: (e) => {
                              var { onClick: t } = e,
                                  n = D(e, ['onClick']);
                              return (0, r.jsx)(
                                  Z,
                                  w(
                                      {
                                          label: N.NW.string(N.t.yn0w19),
                                          onFilter: t,
                                          isFiltered: U,
                                          className: H.smallCol
                                      },
                                      n
                                  )
                              );
                          }
                      })
                    : i &&
                      (0, r.jsx)(Z, {
                          label: N.NW.string(N.t.yn0w19),
                          className: H.smallCol
                      }),
                (0, r.jsx)(d.yRy, {
                    animation: d.yRy.Animation.FADE,
                    position: 'bottom',
                    spacing: 4,
                    align: 'left',
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, r.jsx)(y.Z, {
                            guildId: t,
                            onClose: n
                        });
                    },
                    children: (e) => {
                        var { onClick: t } = e,
                            n = D(e, ['onClick']);
                        return (0, r.jsx)(
                            Z,
                            w(
                                {
                                    label: N.NW.string(N.t['2SZsWV']),
                                    onFilter: t,
                                    isFiltered: V,
                                    className: H.mediumCol
                                },
                                n
                            )
                        );
                    }
                }),
                (0, r.jsx)(d.ua7, {
                    text: N.NW.string(N.t['2cRO3d']),
                    position: 'top',
                    align: 'left',
                    forceOpen: F,
                    shouldShow: !0,
                    color: d.ua7.Colors.BRAND,
                    children: (e) =>
                        (0, r.jsx)(d.yRy, {
                            animation: d.yRy.Animation.FADE,
                            position: 'bottom',
                            spacing: 4,
                            align: 'left',
                            renderPopout: (e) => {
                                let { closePopout: n } = e;
                                return (0, r.jsx)(g.Z, {
                                    guildId: t,
                                    onClose: n
                                });
                            },
                            closeOnScroll: !0,
                            children: (t) =>
                                (0, r.jsx)(Z, {
                                    label: N.NW.string(N.t['7V375+']),
                                    'aria-label': N.NW.string(N.t['2cRO3d']),
                                    onFilter: (n) => {
                                        var r, l;
                                        q(), null === (r = t.onClick) || void 0 === r || r.call(t, n), null === (l = e.onClick) || void 0 === l || l.call(e);
                                    },
                                    isFiltered: M,
                                    className: H.smallCol,
                                    onMouseEnter: () => {
                                        var n, r;
                                        q(), null === (n = e.onMouseEnter) || void 0 === n || n.call(e), null === (r = t.onMouseEnter) || void 0 === r || r.call(t);
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
                (0, r.jsx)(Z, {
                    label: N.NW.string(N.t['5Q9xGh']),
                    className: H.smallCol
                })
            ]
        })
    });
}
