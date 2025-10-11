n.d(t, { Z: () => R });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    a = n(498607),
    s = n.n(a),
    c = n(399606),
    u = n(28664),
    d = n(755721),
    C = n(481060),
    m = n(430824),
    b = n(496675),
    p = n(588215),
    f = n(241559),
    h = n(893966),
    g = n(256003),
    j = n(170323),
    x = n(434368),
    v = n(42170),
    y = n(123846),
    O = n(42551),
    H = n(981631),
    _ = n(388032),
    w = n(494409),
    S = n(266631);
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
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let D = l.forwardRef(function (e, t) {
    var n,
        l,
        { label: i, onFilter: a, isFiltered: s, isSorted: c, className: u } = e,
        d = Z(e, ["label", "onFilter", "isFiltered", "isSorted", "className"]);
    let m = s ? "header-primary" : "header-secondary";
    return (
        c && (m = "text-brand"),
        (0, r.jsx)("th", {
            className: o()(w.tableHeaderCellContainer, u),
            children: (0, r.jsxs)(
                C.P3F,
                ((n = N({}, d)),
                (l = l =
                    {
                        innerRef: t,
                        onClick: a,
                        className: o()(w.tableHeaderCell, { [w.tableHeaderCellWithFilter]: null != a }),
                        children: [
                            (0, r.jsx)(C.Text, {
                                variant: "eyebrow",
                                color: m,
                                children: i,
                            }),
                            null != a &&
                                (0, r.jsx)("div", {
                                    className: w.filterIconButton,
                                    children: (0, r.jsx)(C.gXV, {
                                        size: "custom",
                                        className: w.filterIcon,
                                        color: s
                                            ? C.TVs.colors.CONTROL_BRAND_FOREGROUND.css
                                            : C.TVs.colors.TEXT_MUTED.css,
                                        width: 16,
                                        height: 16,
                                    }),
                                }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                n),
            ),
        })
    );
});
function R(e) {
    let { guildId: t, currentPagedMembers: n } = e,
        i = l.useRef(null),
        a = l.useRef(null),
        R = l.useRef(null),
        L = l.useRef(null),
        I = l.useRef(null),
        P = (0, c.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], s()),
        V = (0, c.e7)([b.Z, m.Z], () => b.Z.can(H.Plq.MANAGE_GUILD, m.Z.getGuild(t)), [t]),
        { selectedUserIds: M, addUsers: E, clearSelection: T } = (0, g.Z)(t),
        k =
            P.requireUnusualDmActivity ||
            P.requireCommunicationDisabled ||
            P.requireUnusualAccountActivity ||
            P.requireUsernameQuarantined,
        A = P.selectedRoleIds.size > 0,
        U = null != P.selectedJoinDateOption.afterDate,
        B = P.selectedSort === p.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
        F = null != P.selectedAccountAgeOption.afterDate,
        q = P.selectedSort === p.d$.ORDER_BY_USER_ID_ASC || P.selectedSort === p.d$.ORDER_BY_USER_ID_DESC,
        G = null != P.selectedSourceInviteCode && "" !== P.selectedSourceInviteCode,
        z = null != P.selectedJoinSourceType,
        Y = G || z,
        W = (0, f.xC)(t),
        K = l.useMemo(() => n.filter((e) => (0, f.rX)(t, W, e)), [W, n, t]),
        Q = K.length > 0,
        J = 0 === K.filter((e) => !M.has(e)).length,
        X = l.useCallback(() => {
            Q && (J ? T() : E(K));
        }, [Q, J, T, E, K]);
    return (0, r.jsx)("thead", {
        children: (0, r.jsxs)("tr", {
            className: w.tableHeaderRow,
            children: [
                W &&
                    (0, r.jsx)("th", {
                        className: o()(w.tableHeaderCellContainer, S.xsmallCol),
                        children: (0, r.jsx)(u.u, {
                            shouldShow: !Q,
                            text: _.intl.string(_.t.tJEY0N),
                            children: (0, r.jsx)(C.P3F, {
                                onClick: X,
                                className: w.tableHeaderCell,
                                children: (0, r.jsx)(d.$q, {
                                    type: d.M0.INVERTED,
                                    value: J,
                                    disabled: !Q,
                                }),
                            }),
                        }),
                    }),
                (0, r.jsx)(D, { label: _.intl.string(_.t.Es7n9f) }),
                V
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(C.yRy, {
                                  targetElementRef: i,
                                  animation: C.yRy.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () =>
                                      (0, r.jsx)(v.Z, {
                                          guildId: t,
                                          onClose: H.dG4,
                                      }),
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = Z(e, ["onClick"]);
                                      return (0, r.jsx)(
                                          D,
                                          N(
                                              {
                                                  ref: i,
                                                  label: _.intl.string(_.t.xcKP1N),
                                                  onFilter: t,
                                                  isFiltered: U,
                                                  isSorted: B,
                                                  className: S.smallCol,
                                              },
                                              n,
                                          ),
                                      );
                                  },
                              }),
                              (0, r.jsx)(C.yRy, {
                                  targetElementRef: a,
                                  animation: C.yRy.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () =>
                                      (0, r.jsx)(j.Z, {
                                          guildId: t,
                                          onClose: H.dG4,
                                      }),
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = Z(e, ["onClick"]);
                                      return (0, r.jsx)(
                                          D,
                                          N(
                                              {
                                                  ref: a,
                                                  label: _.intl.string(_.t.sPph4O),
                                                  onFilter: t,
                                                  isFiltered: F,
                                                  isSorted: q,
                                                  className: S.smallCol,
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
                              (0, r.jsx)(D, {
                                  label: _.intl.string(_.t.xcKP1N),
                                  className: S.smallCol,
                              }),
                              (0, r.jsx)(D, {
                                  label: _.intl.string(_.t.sPph4O),
                                  className: S.smallCol,
                              }),
                          ],
                      }),
                V
                    ? (0, r.jsx)(C.yRy, {
                          targetElementRef: R,
                          animation: C.yRy.Animation.FADE,
                          position: "bottom",
                          spacing: 4,
                          align: "left",
                          renderPopout: () =>
                              (0, r.jsx)(y.Z, {
                                  guildId: t,
                                  onClose: H.dG4,
                              }),
                          children: (e) => {
                              var { onClick: t } = e,
                                  n = Z(e, ["onClick"]);
                              return (0, r.jsx)(
                                  D,
                                  N(
                                      {
                                          ref: R,
                                          label: _.intl.string(_.t.yn0w19),
                                          onFilter: t,
                                          isFiltered: Y,
                                          className: S.smallCol,
                                      },
                                      n,
                                  ),
                              );
                          },
                      })
                    : V &&
                      (0, r.jsx)(D, {
                          label: _.intl.string(_.t.yn0w19),
                          className: S.smallCol,
                      }),
                (0, r.jsx)(C.yRy, {
                    targetElementRef: L,
                    animation: C.yRy.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, r.jsx)(O.Z, {
                            guildId: t,
                            onClose: n,
                        });
                    },
                    children: (e) => {
                        var { onClick: t } = e,
                            n = Z(e, ["onClick"]);
                        return (0, r.jsx)(
                            D,
                            N(
                                {
                                    ref: L,
                                    label: _.intl.string(_.t["2SZsWV"]),
                                    onFilter: t,
                                    isFiltered: A,
                                    className: S.mediumCol,
                                },
                                n,
                            ),
                        );
                    },
                }),
                (0, r.jsx)(u.u, {
                    text: _.intl.string(_.t["2cRO3d"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    children: (0, r.jsx)(C.yRy, {
                        targetElementRef: I,
                        animation: C.yRy.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: n } = e;
                            return (0, r.jsx)(x.Z, {
                                guildId: t,
                                onClose: n,
                            });
                        },
                        children: (e) =>
                            (0, r.jsx)(D, {
                                ref: I,
                                label: _.intl.string(_.t["7V375+"]),
                                "aria-label": _.intl.string(_.t["2cRO3d"]),
                                onFilter: (t) => {
                                    var n;
                                    null == (n = e.onClick) || n.call(e, t);
                                },
                                isFiltered: k,
                                className: S.smallCol,
                                onMouseEnter: () => {
                                    var t;
                                    null == (t = e.onMouseEnter) || t.call(e);
                                },
                                onMouseDown: e.onMouseDown,
                                onKeyDown: e.onKeyDown,
                                "aria-controls": e["aria-controls"],
                                "aria-expanded": e["aria-expanded"],
                            }),
                    }),
                }),
                (0, r.jsx)(D, {
                    label: _.intl.string(_.t["5Q9xGh"]),
                    className: S.smallCol,
                }),
            ],
        }),
    });
}
