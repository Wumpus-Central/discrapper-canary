n.d(t, { Z: () => _ });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(498607),
    s = n.n(a),
    c = n(399606),
    d = n(28664),
    u = n(481060),
    C = n(430824),
    m = n(496675),
    b = n(588215),
    f = n(241559),
    p = n(893966),
    h = n(256003),
    g = n(170323),
    j = n(434368),
    x = n(42170),
    v = n(123846),
    y = n(42551),
    O = n(981631),
    H = n(388032),
    w = n(452173),
    S = n(983266);
function Z(e) {
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
function D(e, t) {
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
let N = l.forwardRef(function (e, t) {
    var n,
        l,
        { label: i, onFilter: a, isFiltered: s, isSorted: c, className: d } = e,
        C = D(e, ["label", "onFilter", "isFiltered", "isSorted", "className"]);
    let m = s ? "text-strong" : "text-default";
    return (
        c && (m = "text-brand"),
        (0, r.jsx)("th", {
            className: o()(w.tableHeaderCellContainer, d),
            children: (0, r.jsxs)(
                u.P3F,
                ((n = Z({}, C)),
                (l = l =
                    {
                        innerRef: t,
                        onClick: a,
                        className: o()(w.tableHeaderCell, { [w.tableHeaderCellWithFilter]: null != a }),
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: m,
                                children: i,
                            }),
                            null != a &&
                                (0, r.jsx)("div", {
                                    className: w.filterIconButton,
                                    children: (0, r.jsx)(u.gXV, {
                                        size: "custom",
                                        className: w.filterIcon,
                                        color: s
                                            ? u.TVs.colors.CONTROL_BRAND_FOREGROUND.css
                                            : u.TVs.colors.TEXT_MUTED.css,
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
function _(e) {
    let { guildId: t, currentPagedMembers: n } = e,
        i = l.useRef(null),
        a = l.useRef(null),
        _ = l.useRef(null),
        R = l.useRef(null),
        L = l.useRef(null),
        I = (0, c.e7)([p.Z], () => p.Z.getSearchStateByGuildId(t), [t], s()),
        P = (0, c.e7)([m.Z, C.Z], () => m.Z.can(O.Plq.MANAGE_GUILD, C.Z.getGuild(t)), [t]),
        { selectedUserIds: V, addUsers: M, clearSelection: E } = (0, h.Z)(t),
        T =
            I.requireUnusualDmActivity ||
            I.requireCommunicationDisabled ||
            I.requireUnusualAccountActivity ||
            I.requireUsernameQuarantined,
        k = I.selectedRoleIds.size > 0,
        A = null != I.selectedJoinDateOption.afterDate,
        U = I.selectedSort === b.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
        F = null != I.selectedAccountAgeOption.afterDate,
        B = I.selectedSort === b.d$.ORDER_BY_USER_ID_ASC || I.selectedSort === b.d$.ORDER_BY_USER_ID_DESC,
        q = null != I.selectedSourceInviteCode && "" !== I.selectedSourceInviteCode,
        G = null != I.selectedJoinSourceType,
        z = q || G,
        Y = (0, f.xC)(t),
        Q = l.useMemo(() => n.filter((e) => (0, f.rX)(t, Y, e)), [Y, n, t]),
        W = Q.length > 0,
        K = 0 === Q.filter((e) => !V.has(e)).length,
        J = l.useCallback(() => {
            W && (K ? E() : M(Q));
        }, [W, K, E, M, Q]);
    return (0, r.jsx)("thead", {
        children: (0, r.jsxs)("tr", {
            className: w.tableHeaderRow,
            children: [
                Y &&
                    (0, r.jsx)("th", {
                        className: o()(w.tableHeaderCellContainer, S.xsmallCol),
                        children: (0, r.jsx)(d.u, {
                            shouldShow: !W,
                            text: H.intl.string(H.t.tJEY0G),
                            children: (0, r.jsx)(u.P3F, {
                                onClick: J,
                                className: w.tableHeaderCell,
                                children: (0, r.jsx)(u.FZ5, {
                                    checked: K,
                                    disabled: !W,
                                }),
                            }),
                        }),
                    }),
                (0, r.jsx)(N, { label: H.intl.string(H.t.Es7n9c) }),
                P
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.yRy, {
                                  targetElementRef: i,
                                  animation: u.yRy.Animation.FADE,
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
                                          N,
                                          Z(
                                              {
                                                  ref: i,
                                                  label: H.intl.string(H.t.xcKP1P),
                                                  onFilter: t,
                                                  isFiltered: A,
                                                  isSorted: U,
                                                  className: S.smallCol,
                                              },
                                              n,
                                          ),
                                      );
                                  },
                              }),
                              (0, r.jsx)(u.yRy, {
                                  targetElementRef: a,
                                  animation: u.yRy.Animation.FADE,
                                  position: "bottom",
                                  spacing: 4,
                                  align: "left",
                                  renderPopout: () =>
                                      (0, r.jsx)(g.Z, {
                                          guildId: t,
                                          onClose: O.dG4,
                                      }),
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = D(e, ["onClick"]);
                                      return (0, r.jsx)(
                                          N,
                                          Z(
                                              {
                                                  ref: a,
                                                  label: H.intl.string(H.t.sPph4O),
                                                  onFilter: t,
                                                  isFiltered: F,
                                                  isSorted: B,
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
                              (0, r.jsx)(N, {
                                  label: H.intl.string(H.t.xcKP1P),
                                  className: S.smallCol,
                              }),
                              (0, r.jsx)(N, {
                                  label: H.intl.string(H.t.sPph4O),
                                  className: S.smallCol,
                              }),
                          ],
                      }),
                P
                    ? (0, r.jsx)(u.yRy, {
                          targetElementRef: _,
                          animation: u.yRy.Animation.FADE,
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
                                  N,
                                  Z(
                                      {
                                          ref: _,
                                          label: H.intl.string(H.t["yn0w1+"]),
                                          onFilter: t,
                                          isFiltered: z,
                                          className: S.smallCol,
                                      },
                                      n,
                                  ),
                              );
                          },
                      })
                    : P &&
                      (0, r.jsx)(N, {
                          label: H.intl.string(H.t["yn0w1+"]),
                          className: S.smallCol,
                      }),
                (0, r.jsx)(u.yRy, {
                    targetElementRef: R,
                    animation: u.yRy.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: () => (0, r.jsx)(y.Z, { guildId: t }),
                    children: (e) => {
                        var { onClick: t } = e,
                            n = D(e, ["onClick"]);
                        return (0, r.jsx)(
                            N,
                            Z(
                                {
                                    ref: R,
                                    label: H.intl.string(H.t["2SZsWX"]),
                                    onFilter: t,
                                    isFiltered: k,
                                    className: S.mediumCol,
                                },
                                n,
                            ),
                        );
                    },
                }),
                (0, r.jsx)(d.u, {
                    text: H.intl.string(H.t["2cRO3R"]),
                    position: "top",
                    align: "left",
                    shouldShow: !0,
                    children: (0, r.jsx)(u.yRy, {
                        targetElementRef: L,
                        animation: u.yRy.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: (e) => {
                            let { closePopout: n } = e;
                            return (0, r.jsx)(j.Z, {
                                guildId: t,
                                onClose: n,
                            });
                        },
                        children: (e) =>
                            (0, r.jsx)(N, {
                                ref: L,
                                label: H.intl.string(H.t["7V3759"]),
                                "aria-label": H.intl.string(H.t["2cRO3R"]),
                                onFilter: (t) => {
                                    var n;
                                    null == (n = e.onClick) || n.call(e, t);
                                },
                                isFiltered: T,
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
                (0, r.jsx)(N, {
                    label: H.intl.string(H.t["5Q9xGr"]),
                    className: S.smallCol,
                }),
            ],
        }),
    });
}
