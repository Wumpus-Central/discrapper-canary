n.d(t, { Z: () => Z });
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(498607),
    s = n.n(a),
    c = n(399606),
    u = n(481060),
    d = n(430824),
    C = n(496675),
    m = n(588215),
    b = n(241559),
    p = n(893966),
    f = n(256003),
    h = n(170323),
    j = n(434368),
    g = n(42170),
    x = n(123846),
    v = n(42551),
    O = n(981631),
    y = n(388032),
    _ = n(771429),
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
function N(e, t) {
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
function S(e, t) {
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
let D = l.forwardRef(function (e, t) {
    var { label: n, onFilter: l, isFiltered: o, isSorted: a, className: s } = e,
        c = S(e, ['label', 'onFilter', 'isFiltered', 'isSorted', 'className']);
    let d = o ? 'header-primary' : 'header-secondary';
    return (
        a && (d = 'text-brand'),
        (0, r.jsx)('th', {
            className: i()(_.tableHeaderCellContainer, s),
            children: (0, r.jsxs)(
                u.P3F,
                N(w({}, c), {
                    innerRef: t,
                    onClick: l,
                    className: i()(_.tableHeaderCell, { [_.tableHeaderCellWithFilter]: null != l }),
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'eyebrow',
                            color: d,
                            children: n
                        }),
                        null != l &&
                            (0, r.jsx)('div', {
                                className: _.filterIconButton,
                                children: (0, r.jsx)(u.gXV, {
                                    size: 'custom',
                                    className: _.filterIcon,
                                    color: o ? u.TVs.colors.CONTROL_BRAND_FOREGROUND.css : u.TVs.colors.TEXT_MUTED.css,
                                    width: 16,
                                    height: 16
                                })
                            })
                    ]
                })
            )
        })
    );
});
function Z(e) {
    let { guildId: t, currentPagedMembers: n } = e,
        o = l.useRef(null),
        a = l.useRef(null),
        Z = l.useRef(null),
        L = l.useRef(null),
        R = l.useRef(null),
        P = (0, c.e7)([p.Z], () => p.Z.getSearchStateByGuildId(t), [t], s()),
        I = (0, c.e7)([C.Z, d.Z], () => C.Z.can(O.Plq.MANAGE_GUILD, d.Z.getGuild(t)), [t]),
        { selectedUserIds: M, addUsers: V, clearSelection: E } = (0, f.Z)(t),
        T = P.requireUnusualDmActivity || P.requireCommunicationDisabled || P.requireUnusualAccountActivity || P.requireUsernameQuarantined,
        k = P.selectedRoleIds.size > 0,
        A = null != P.selectedJoinDateOption.afterDate,
        B = P.selectedSort === m.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
        U = null != P.selectedAccountAgeOption.afterDate,
        F = P.selectedSort === m.d$.ORDER_BY_USER_ID_ASC || P.selectedSort === m.d$.ORDER_BY_USER_ID_DESC,
        z = null != P.selectedSourceInviteCode && '' !== P.selectedSourceInviteCode,
        q = null != P.selectedJoinSourceType,
        G = z || q,
        Y = (0, b.xC)(t),
        W = l.useMemo(() => n.filter((e) => (0, b.rX)(t, Y, e)), [Y, n, t]),
        X = W.length > 0,
        K = 0 === W.filter((e) => !M.has(e)).length,
        J = l.useCallback(() => {
            X && (K ? E() : V(W));
        }, [X, K, E, V, W]);
    return (0, r.jsx)('thead', {
        children: (0, r.jsxs)('tr', {
            className: _.tableHeaderRow,
            children: [
                Y &&
                    (0, r.jsx)('th', {
                        className: i()(_.tableHeaderCellContainer, H.xsmallCol),
                        children: (0, r.jsx)(u.ua7, {
                            shouldShow: !X,
                            text: y.intl.string(y.t.tJEY0N),
                            children: (e) =>
                                (0, r.jsx)(
                                    u.P3F,
                                    N(w({}, e), {
                                        onClick: J,
                                        className: _.tableHeaderCell,
                                        children: (0, r.jsx)(u.XZJ, {
                                            type: u.XZJ.Types.INVERTED,
                                            value: K,
                                            disabled: !X
                                        })
                                    })
                                )
                        })
                    }),
                (0, r.jsx)(D, { label: y.intl.string(y.t.Es7n9f) }),
                I
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.yRy, {
                                  targetElementRef: o,
                                  animation: u.yRy.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, r.jsx)(g.Z, {
                                          guildId: t,
                                          onClose: O.dG4
                                      }),
                                  closeOnScroll: !0,
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = S(e, ['onClick']);
                                      return (0, r.jsx)(
                                          D,
                                          w(
                                              {
                                                  ref: o,
                                                  label: y.intl.string(y.t.xcKP1N),
                                                  onFilter: t,
                                                  isFiltered: A,
                                                  isSorted: B,
                                                  className: H.smallCol
                                              },
                                              n
                                          )
                                      );
                                  }
                              }),
                              (0, r.jsx)(u.yRy, {
                                  targetElementRef: a,
                                  animation: u.yRy.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, r.jsx)(h.Z, {
                                          guildId: t,
                                          onClose: O.dG4
                                      }),
                                  closeOnScroll: !0,
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = S(e, ['onClick']);
                                      return (0, r.jsx)(
                                          D,
                                          w(
                                              {
                                                  ref: a,
                                                  label: y.intl.string(y.t.sPph4O),
                                                  onFilter: t,
                                                  isFiltered: U,
                                                  isSorted: F,
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
                              (0, r.jsx)(D, {
                                  label: y.intl.string(y.t.xcKP1N),
                                  className: H.smallCol
                              }),
                              (0, r.jsx)(D, {
                                  label: y.intl.string(y.t.sPph4O),
                                  className: H.smallCol
                              })
                          ]
                      }),
                I
                    ? (0, r.jsx)(u.yRy, {
                          targetElementRef: Z,
                          animation: u.yRy.Animation.FADE,
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
                                  n = S(e, ['onClick']);
                              return (0, r.jsx)(
                                  D,
                                  w(
                                      {
                                          ref: Z,
                                          label: y.intl.string(y.t.yn0w19),
                                          onFilter: t,
                                          isFiltered: G,
                                          className: H.smallCol
                                      },
                                      n
                                  )
                              );
                          }
                      })
                    : I &&
                      (0, r.jsx)(D, {
                          label: y.intl.string(y.t.yn0w19),
                          className: H.smallCol
                      }),
                (0, r.jsx)(u.yRy, {
                    targetElementRef: L,
                    animation: u.yRy.Animation.FADE,
                    position: 'bottom',
                    spacing: 4,
                    align: 'left',
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, r.jsx)(v.Z, {
                            guildId: t,
                            onClose: n
                        });
                    },
                    children: (e) => {
                        var { onClick: t } = e,
                            n = S(e, ['onClick']);
                        return (0, r.jsx)(
                            D,
                            w(
                                {
                                    ref: L,
                                    label: y.intl.string(y.t['2SZsWV']),
                                    onFilter: t,
                                    isFiltered: k,
                                    className: H.mediumCol
                                },
                                n
                            )
                        );
                    }
                }),
                (0, r.jsx)(u.ua7, {
                    text: y.intl.string(y.t['2cRO3d']),
                    position: 'top',
                    align: 'left',
                    shouldShow: !0,
                    color: u.ua7.Colors.BRAND,
                    children: (e) =>
                        (0, r.jsx)(u.yRy, {
                            targetElementRef: R,
                            animation: u.yRy.Animation.FADE,
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
                                (0, r.jsx)(D, {
                                    ref: R,
                                    label: y.intl.string(y.t['7V375+']),
                                    'aria-label': y.intl.string(y.t['2cRO3d']),
                                    onFilter: (n) => {
                                        var r, l;
                                        null == (r = t.onClick) || r.call(t, n), null == (l = e.onClick) || l.call(e);
                                    },
                                    isFiltered: T,
                                    className: H.smallCol,
                                    onMouseEnter: () => {
                                        var n, r;
                                        null == (n = e.onMouseEnter) || n.call(e), null == (r = t.onMouseEnter) || r.call(t);
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
                (0, r.jsx)(D, {
                    label: y.intl.string(y.t['5Q9xGh']),
                    className: H.smallCol
                })
            ]
        })
    });
}
