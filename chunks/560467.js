t.d(n, { Z: () => E }), t(642613);
var r = t(951288),
    i = t(647438),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    s = t(681715),
    d = t(481060),
    c = t(494620),
    u = t(49012),
    g = t(744993),
    m = t(590383),
    p = t(642633),
    x = t(183369),
    f = t(422663),
    _ = t(210682),
    j = t(39793),
    h = t(875817),
    v = t(761266),
    b = t(473682),
    C = t(401561),
    N = t(388032),
    O = t(149671);
function y(e) {
    let { plan: n, selected: t, className: i } = e;
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(O.optionContainer, i),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsxs)("div", {
                              className: O.labelContainer,
                              children: [
                                  (0, r.jsx)(d.$Eu, {
                                      size: "xs",
                                      color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      variant: "text-xs/medium",
                                      children: N.intl.format(C.default.FrRqub, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: O.optionSpacer }),
              ],
          });
}
function S(e) {
    let { region: n, selected: t, disabled: i, className: l } = e,
        { pingText: o, pingCircleStyle: s } = (0, j.t)(n.pingUrl);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(O.optionContainer, { [O.disabled]: i }, l),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsx)("div", {
                              className: O.labelContainer,
                              children: i
                                  ? (0, r.jsx)("span", { children: N.intl.string(C.default["1eK9GR"]) })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: a()(O.pingCircle, s) }),
                                            (0, r.jsx)(d.Text, {
                                                variant: "text-xs/medium",
                                                children: o,
                                            }),
                                        ],
                                    }),
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: O.optionSpacer }),
              ],
          });
}
function E() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        portkeyInstance: l,
        setRegionId: a,
        name: j,
        setName: E,
        planId: P,
        setPlanId: T,
        planCost: w,
        stepLoading: I,
        error: Z,
        gameProvider: R,
    } = (0, x.aj)();
    i.useEffect(() => {
        (0, g._k)(e);
    }, [e]);
    let k = (0, o.e7)([m.Z], () => m.Z.getRegions()),
        G = (0, o.e7)([m.Z], () => m.Z.getRegionState()),
        B = i.useMemo(() => {
            var e;
            return null !=
                (e = k
                    .sort((e, n) => (0, h.Z)(e, n, G))
                    .map((e) => ({
                        value: e,
                        label: e.name,
                    })))
                ? e
                : [];
        }, [G, k]),
        D = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == n
                        ? void 0
                        : n.plans.map((e) => ({
                              value: e,
                              label: e.name,
                          })))
                ? e
                : [];
        }, [n]),
        F = (0, _.Z)(),
        H = null != l,
        M = (0, v.Z)(R),
        U = null != R && null != b.Q_[R] ? b.Q_[R] : "";
    return null == n
        ? (0, r.jsx)("div", {
              className: O.spinnerContainer,
              children: (0, r.jsx)(d.$jN, { type: d.RAz.SPINNING_CIRCLE }),
          })
        : (0, r.jsxs)("div", {
              className: O.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: O.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: O.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: O.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: O.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.X6q, {
                                                      className: O.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: N.intl.string(C.default["78avu7"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: N.intl.string(C.default.hmt2ra),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: O.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.oil, {
                                              value: j,
                                              onChange: E,
                                              placeholder: N.intl.string(C.default.Kg0Zio),
                                              maxLength: b.gM,
                                              disabled: I,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: O.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: O.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.X6q, {
                                                      className: O.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: N.intl.string(C.default.iccpNT),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: N.intl.string(
                                                          null != l ? C.default.sjwMnJ : C.default.wKyl39,
                                                      ),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: O.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: O.refresh,
                                                      children: (0, r.jsx)(s.u, {
                                                          asContainer: !0,
                                                          position: "top",
                                                          text: N.intl.string(C.default["G+UZgY"]),
                                                          children: (0, r.jsx)(d.P3F, {
                                                              className: O.sectionHeaderIcon,
                                                              onClick: () => (0, g.TN)(),
                                                              children: (0, r.jsx)(d.DuK, { size: "xs" }),
                                                          }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === t,
                                              isDisabled: I || H,
                                              options: B,
                                              optionClassName: O.option,
                                              select: (e) => a(e.id),
                                              placeholder: N.intl.string(C.default["op6/kZ"]),
                                              renderOptionLabel: (e) => {
                                                  var n;
                                                  return (0, r.jsx)(S, {
                                                      region: e.value,
                                                      selected: e.value.id === t,
                                                      disabled: null != (n = e.disabled) && n,
                                                  });
                                              },
                                              renderOptionValue: (e) => {
                                                  var n;
                                                  return null == e[0]
                                                      ? null
                                                      : (0, r.jsx)(S, {
                                                            region: e[0].value,
                                                            selected: e[0].value.id === t,
                                                            disabled: null != (n = e[0].disabled) && n,
                                                            className: O.value,
                                                        });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: O.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: O.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.X6q, {
                                                      className: O.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: N.intl.string(C.default["3QONen"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: N.intl.string(C.default.HbR6W1),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: O.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === P,
                                              isDisabled: I,
                                              options: D,
                                              optionClassName: O.option,
                                              select: (e) => T(e.id),
                                              placeholder: N.intl.string(C.default["4QOSPj"]),
                                              renderOptionValue: (e) => {
                                                  var n, t, i;
                                                  return (0, r.jsx)(y, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (i = e[0]) || null == (t = i.value)
                                                              ? void 0
                                                              : t.id) === P,
                                                      className: O.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(y, {
                                                      plan: e.value,
                                                      selected: e.value.id === P,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: O.gameDetailsContainer,
                              children: (0, r.jsx)(p.Z, {}),
                          }),
                      ],
                  }),
                  null != l &&
                      0 !== w &&
                      (0, r.jsx)(c.Z, {
                          className: O.infoBox,
                          children: (0, r.jsx)(d.Text, {
                              variant: "text-xs/medium",
                              children:
                                  w < 0
                                      ? N.intl.format(C.default.H8rHQU, { boostCount: Math.abs(w) })
                                      : N.intl.format(C.default.h4ZvmJ, { boostCount: w }),
                          }),
                      }),
                  (0, r.jsx)(d.Text, {
                      variant: "text-sm/medium",
                      children:
                          null != R &&
                          N.intl.format(H ? C.default["fJCJ5+"] : C.default.qW1xR0, {
                              provider: M,
                              termsOfServiceUrl: () => (0, u.q)({ href: U }),
                              helpCenterUrl: "https://google.com/help-center",
                          }),
                  }),
                  null != Z &&
                      (0, r.jsx)(d.Text, {
                          variant: "text-xs/medium",
                          color: "text-danger",
                          children: Z,
                      }),
                  (0, r.jsxs)(f.ok, {
                      step: b.Vb.SERVER_SETTINGS,
                      className: O.footerContainer,
                      children: [(0, r.jsx)(f.VS, {}), (0, r.jsx)(f.oh, { disabled: !F })],
                  }),
              ],
          });
}
