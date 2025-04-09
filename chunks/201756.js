n.d(t, { Z: () => R }), n(388685);
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
    g = n(170323),
    j = n(434368),
    x = n(42170),
    O = n(123846),
    y = n(42551),
    v = n(981631),
    _ = n(388032),
    N = n(771429),
    H = n(350381);
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
let Z = l.forwardRef(function (e, t) {
        var { label: n, onFilter: l, isFiltered: o, isSorted: i, className: s } = e,
            c = D(e, ['label', 'onFilter', 'isFiltered', 'isSorted', 'className']);
        let u = o ? 'header-primary' : 'header-secondary';
        return (
            i && (u = 'text-brand'),
            (0, r.jsx)('th', {
                className: a()(N.tableHeaderCellContainer, s),
                children: (0, r.jsxs)(
                    d.P3F,
                    S(w({}, c), {
                        innerRef: t,
                        onClick: l,
                        className: a()(N.tableHeaderCell, { [N.tableHeaderCellWithFilter]: null != l }),
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'eyebrow',
                                color: u,
                                children: n
                            }),
                            null != l &&
                                (0, r.jsx)('div', {
                                    className: N.filterIconButton,
                                    children: (0, r.jsx)(d.gXV, {
                                        size: 'custom',
                                        className: N.filterIcon,
                                        color: o ? d.TVs.colors.CONTROL_BRAND_FOREGROUND.css : d.TVs.colors.TEXT_MUTED.css,
                                        width: 16,
                                        height: 16
                                    })
                                })
                        ]
                    })
                )
            })
        );
    }),
    L = 'member-safety-force-show-signals-tooltip';
function R(e) {
    let { guildId: t, currentPagedMembers: n } = e,
        o = l.useRef(null),
        i = l.useRef(null),
        R = l.useRef(null),
        P = l.useRef(null),
        I = l.useRef(null),
        M = (0, c.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], s()),
        V = (0, c.e7)([m.Z, C.Z], () => m.Z.can(v.Plq.MANAGE_GUILD, C.Z.getGuild(t)), [t]),
        { selectedUserIds: E, addUsers: k, clearSelection: T } = (0, h.Z)(t),
        A = M.requireUnusualDmActivity || M.requireCommunicationDisabled || M.requireUnusualAccountActivity || M.requireUsernameQuarantined,
        B = M.selectedRoleIds.size > 0,
        W = null != M.selectedJoinDateOption.afterDate,
        U = M.selectedSort === b.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
        F = null != M.selectedAccountAgeOption.afterDate,
        z = M.selectedSort === b.d$.ORDER_BY_USER_ID_ASC || M.selectedSort === b.d$.ORDER_BY_USER_ID_DESC,
        q = null != M.selectedSourceInviteCode && '' !== M.selectedSourceInviteCode,
        G = null != M.selectedJoinSourceType,
        Y = q || G,
        [X, J] = l.useState(null == u.K.get(L, null)),
        K = l.useCallback(() => {
            u.K.set(L, Date.now()), J(!1);
        }, []),
        Q = (0, p.xC)(t),
        $ = l.useMemo(() => n.filter((e) => (0, p.rX)(t, Q, e)), [Q, n, t]),
        ee = $.length > 0,
        et = 0 === $.filter((e) => !E.has(e)).length,
        en = l.useCallback(() => {
            ee && (et ? T() : k($));
        }, [ee, et, T, k, $]);
    return (0, r.jsx)('thead', {
        children: (0, r.jsxs)('tr', {
            className: N.tableHeaderRow,
            children: [
                Q &&
                    (0, r.jsx)('th', {
                        className: a()(N.tableHeaderCellContainer, H.xsmallCol),
                        children: (0, r.jsx)(d.ua7, {
                            shouldShow: !ee,
                            text: _.NW.string(_.t.tJEY0N),
                            children: (e) =>
                                (0, r.jsx)(
                                    d.P3F,
                                    S(w({}, e), {
                                        onClick: en,
                                        className: N.tableHeaderCell,
                                        children: (0, r.jsx)(d.XZJ, {
                                            type: d.XZJ.Types.INVERTED,
                                            value: et,
                                            disabled: !ee
                                        })
                                    })
                                )
                        })
                    }),
                (0, r.jsx)(Z, { label: _.NW.string(_.t.Es7n9f) }),
                V
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.yRy, {
                                  targetElementRef: o,
                                  animation: d.yRy.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, r.jsx)(x.Z, {
                                          guildId: t,
                                          onClose: v.dG4
                                      }),
                                  closeOnScroll: !0,
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = D(e, ['onClick']);
                                      return (0, r.jsx)(
                                          Z,
                                          w(
                                              {
                                                  ref: o,
                                                  label: _.NW.string(_.t.xcKP1N),
                                                  onFilter: t,
                                                  isFiltered: W,
                                                  isSorted: U,
                                                  className: H.smallCol
                                              },
                                              n
                                          )
                                      );
                                  }
                              }),
                              (0, r.jsx)(d.yRy, {
                                  targetElementRef: i,
                                  animation: d.yRy.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, r.jsx)(g.Z, {
                                          guildId: t,
                                          onClose: v.dG4
                                      }),
                                  closeOnScroll: !0,
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = D(e, ['onClick']);
                                      return (0, r.jsx)(
                                          Z,
                                          w(
                                              {
                                                  ref: i,
                                                  label: _.NW.string(_.t.sPph4O),
                                                  onFilter: t,
                                                  isFiltered: F,
                                                  isSorted: z,
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
                                  label: _.NW.string(_.t.xcKP1N),
                                  className: H.smallCol
                              }),
                              (0, r.jsx)(Z, {
                                  label: _.NW.string(_.t.sPph4O),
                                  className: H.smallCol
                              })
                          ]
                      }),
                V
                    ? (0, r.jsx)(d.yRy, {
                          targetElementRef: R,
                          animation: d.yRy.Animation.FADE,
                          position: 'bottom',
                          spacing: 4,
                          align: 'left',
                          renderPopout: () =>
                              (0, r.jsx)(O.Z, {
                                  guildId: t,
                                  onClose: v.dG4
                              }),
                          closeOnScroll: !0,
                          children: (e) => {
                              var { onClick: t } = e,
                                  n = D(e, ['onClick']);
                              return (0, r.jsx)(
                                  Z,
                                  w(
                                      {
                                          ref: R,
                                          label: _.NW.string(_.t.yn0w19),
                                          onFilter: t,
                                          isFiltered: Y,
                                          className: H.smallCol
                                      },
                                      n
                                  )
                              );
                          }
                      })
                    : V &&
                      (0, r.jsx)(Z, {
                          label: _.NW.string(_.t.yn0w19),
                          className: H.smallCol
                      }),
                (0, r.jsx)(d.yRy, {
                    targetElementRef: P,
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
                                    ref: P,
                                    label: _.NW.string(_.t['2SZsWV']),
                                    onFilter: t,
                                    isFiltered: B,
                                    className: H.mediumCol
                                },
                                n
                            )
                        );
                    }
                }),
                (0, r.jsx)(d.ua7, {
                    text: _.NW.string(_.t['2cRO3d']),
                    position: 'top',
                    align: 'left',
                    forceOpen: X,
                    shouldShow: !0,
                    color: d.ua7.Colors.BRAND,
                    children: (e) =>
                        (0, r.jsx)(d.yRy, {
                            targetElementRef: I,
                            animation: d.yRy.Animation.FADE,
                            position: 'bottom',
                            spacing: 4,
                            align: 'left',
                            renderPopout: (e) => {
                                let { closePopout: n } = e;
                                return (0, r.jsx)(j.Z, {
                                    guildId: t,
                                    onClose: n
                                });
                            },
                            closeOnScroll: !0,
                            children: (t) =>
                                (0, r.jsx)(Z, {
                                    ref: I,
                                    label: _.NW.string(_.t['7V375+']),
                                    'aria-label': _.NW.string(_.t['2cRO3d']),
                                    onFilter: (n) => {
                                        var r, l;
                                        K(), null == (r = t.onClick) || r.call(t, n), null == (l = e.onClick) || l.call(e);
                                    },
                                    isFiltered: A,
                                    className: H.smallCol,
                                    onMouseEnter: () => {
                                        var n, r;
                                        K(), null == (n = e.onMouseEnter) || n.call(e), null == (r = t.onMouseEnter) || r.call(t);
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
                    label: _.NW.string(_.t['5Q9xGh']),
                    className: H.smallCol
                })
            ]
        })
    });
}
