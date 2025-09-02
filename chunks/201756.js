n.d(t, { Z: () => R });
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(498607),
    s = n.n(a),
    c = n(399606),
    u = n(755721),
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
    _ = n(388032),
    H = n(494409),
    w = n(266631);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let Z = l.forwardRef(function (e, t) {
    var { label: n, onFilter: l, isFiltered: o, isSorted: a, className: s } = e,
        c = D(e, ["label", "onFilter", "isFiltered", "isSorted", "className"]);
    let u = o ? "header-primary" : "header-secondary";
    return (
        a && (u = "text-brand"),
        (0, r.jsx)("th", {
            className: i()(H.tableHeaderCellContainer, s),
            children: (0, r.jsxs)(
                d.P3F,
                S(N({}, c), {
                    innerRef: t,
                    onClick: l,
                    className: i()(H.tableHeaderCell, { [H.tableHeaderCellWithFilter]: null != l }),
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: "eyebrow",
                            color: u,
                            children: n,
                        }),
                        null != l &&
                            (0, r.jsx)("div", {
                                className: H.filterIconButton,
                                children: (0, r.jsx)(d.gXV, {
                                    size: "custom",
                                    className: H.filterIcon,
                                    color: o ? d.TVs.colors.CONTROL_BRAND_FOREGROUND.css : d.TVs.colors.TEXT_MUTED.css,
                                    width: 16,
                                    height: 16,
                                }),
                            }),
                    ],
                }),
            ),
        })
    );
});
function R(e) {
    let { guildId: t, currentPagedMembers: n } = e,
        o = l.useRef(null),
        a = l.useRef(null),
        R = l.useRef(null),
        L = l.useRef(null),
        I = l.useRef(null),
        P = (0, c.e7)([f.Z], () => f.Z.getSearchStateByGuildId(t), [t], s()),
        M = (0, c.e7)([m.Z, C.Z], () => m.Z.can(O.Plq.MANAGE_GUILD, C.Z.getGuild(t)), [t]),
        { selectedUserIds: V, addUsers: E, clearSelection: T } = (0, h.Z)(t),
        k =
            P.requireUnusualDmActivity ||
            P.requireCommunicationDisabled ||
            P.requireUnusualAccountActivity ||
            P.requireUsernameQuarantined,
        A = P.selectedRoleIds.size > 0,
        B = null != P.selectedJoinDateOption.afterDate,
        U = P.selectedSort === b.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
        F = null != P.selectedAccountAgeOption.afterDate,
        q = P.selectedSort === b.d$.ORDER_BY_USER_ID_ASC || P.selectedSort === b.d$.ORDER_BY_USER_ID_DESC,
        z = null != P.selectedSourceInviteCode && "" !== P.selectedSourceInviteCode,
        G = null != P.selectedJoinSourceType,
        Y = z || G,
        W = (0, p.xC)(t),
        K = l.useMemo(() => n.filter((e) => (0, p.rX)(t, W, e)), [W, n, t]),
        Q = K.length > 0,
        X = 0 === K.filter((e) => !V.has(e)).length,
        J = l.useCallback(() => {
            Q && (X ? T() : E(K));
        }, [Q, X, T, E, K]);
    return (0, r.jsx)("thead", {
        children: (0, r.jsxs)("tr", {
            className: H.tableHeaderRow,
            children: [
                W &&
                    (0, r.jsx)("th", {
                        className: i()(H.tableHeaderCellContainer, w.xsmallCol),
                        children: (0, r.jsx)(d.ua7, {
                            shouldShow: !Q,
                            text: _.intl.string(_.t.tJEY0N),
                            children: (e) =>
                                (0, r.jsx)(
                                    d.P3F,
                                    S(N({}, e), {
                                        onClick: J,
                                        className: H.tableHeaderCell,
                                        children: (0, r.jsx)(u.$q, {
                                            type: u.M0.INVERTED,
                                            value: X,
                                            disabled: !Q,
                                        }),
                                    }),
                                ),
                        }),
                    }),
                (0, r.jsx)(Z, { label: _.intl.string(_.t.Es7n9f) }),
                M
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.yRy, {
                                  targetElementRef: o,
                                  animation: d.yRy.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () =>
                                      (0, r.jsx)(x.Z, {
                                          guildId: t,
                                          onClose: O.dG4,
                                      }),
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = D(e, ["onClick"]);
                                      return (0, r.jsx)(
                                          Z,
                                          N(
                                              {
                                                  ref: o,
                                                  label: _.intl.string(_.t.xcKP1N),
                                                  onFilter: t,
                                                  isFiltered: B,
                                                  isSorted: U,
                                                  className: w.smallCol,
                                              },
                                              n,
                                          ),
                                      );
                                  },
                              }),
                              (0, r.jsx)(d.yRy, {
                                  targetElementRef: a,
                                  animation: d.yRy.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () =>
                                      (0, r.jsx)(j.Z, {
                                          guildId: t,
                                          onClose: O.dG4,
                                      }),
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = D(e, ["onClick"]);
                                      return (0, r.jsx)(
                                          Z,
                                          N(
                                              {
                                                  ref: a,
                                                  label: _.intl.string(_.t.sPph4O),
                                                  onFilter: t,
                                                  isFiltered: F,
                                                  isSorted: q,
                                                  className: w.smallCol,
                                              },
                                              n,
                                          ),
                                      );
                                  },
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(Z, {
                                  label: _.intl.string(_.t.xcKP1N),
                                  className: w.smallCol,
                              }),
                              (0, r.jsx)(Z, {
                                  label: _.intl.string(_.t.sPph4O),
                                  className: w.smallCol,
                              }),
                          ],
                      }),
                M
                    ? (0, r.jsx)(d.yRy, {
                          targetElementRef: R,
                          animation: d.yRy.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: () =>
                              (0, r.jsx)(v.Z, {
                                  guildId: t,
                                  onClose: O.dG4,
                              }),
                          children: (e) => {
                              var { onClick: t } = e,
                                  n = D(e, ["onClick"]);
                              return (0, r.jsx)(
                                  Z,
                                  N(
                                      {
                                          ref: R,
                                          label: _.intl.string(_.t.yn0w19),
                                          onFilter: t,
                                          isFiltered: Y,
                                          className: w.smallCol,
                                      },
                                      n,
                                  ),
                              );
                          },
                      })
                    : M &&
                      (0, r.jsx)(Z, {
                          label: _.intl.string(_.t.yn0w19),
                          className: w.smallCol,
                      }),
                (0, r.jsx)(d.yRy, {
                    targetElementRef: L,
                    animation: d.yRy.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, r.jsx)(y.Z, {
                            guildId: t,
                            onClose: n,
                        });
                    },
                    children: (e) => {
                        var { onClick: t } = e,
                            n = D(e, ["onClick"]);
                        return (0, r.jsx)(
                            Z,
                            N(
                                {
                                    ref: L,
                                    label: _.intl.string(_.t["2SZsWV"]),
                                    onFilter: t,
                                    isFiltered: A,
                                    className: w.mediumCol,
                                },
                                n,
                            ),
                        );
                    },
                }),
                (0, r.jsx)(d.ua7, {
                    text: _.intl.string(_.t["2cRO3d"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    color: d.ua7.Colors.BRAND,
                    children: (e) =>
                        (0, r.jsx)(d.yRy, {
                            targetElementRef: I,
                            animation: d.yRy.Animation.FADE,
                            position: "bottom",
                            spacing: 4,
                            align: "left",
                            renderPopout: (e) => {
                                let { closePopout: n } = e;
                                return (0, r.jsx)(g.Z, {
                                    guildId: t,
                                    onClose: n,
                                });
                            },
                            children: (t) =>
                                (0, r.jsx)(Z, {
                                    ref: I,
                                    label: _.intl.string(_.t["7V375+"]),
                                    "aria-label": _.intl.string(_.t["2cRO3d"]),
                                    onFilter: (n) => {
                                        var r, l;
                                        null == (r = t.onClick) || r.call(t, n), null == (l = e.onClick) || l.call(e);
                                    },
                                    isFiltered: k,
                                    className: w.smallCol,
                                    onMouseEnter: () => {
                                        var n, r;
                                        null == (n = e.onMouseEnter) || n.call(e),
                                            null == (r = t.onMouseEnter) || r.call(t);
                                    },
                                    onMouseDown: t.onMouseDown,
                                    onMouseLeave: e.onMouseLeave,
                                    onBlur: e.onBlur,
                                    onFocus: e.onFocus,
                                    onKeyDown: t.onKeyDown,
                                    "aria-controls": t["aria-controls"],
                                    "aria-expanded": t["aria-expanded"],
                                }),
                        }),
                }),
                (0, r.jsx)(Z, {
                    label: _.intl.string(_.t["5Q9xGh"]),
                    className: w.smallCol,
                }),
            ],
        }),
    });
}
