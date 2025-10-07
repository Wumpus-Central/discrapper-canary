t.d(n, { Z: () => S }), t(642613);
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
    h = t(39793),
    j = t(875817),
    v = t(473682),
    b = t(401561),
    C = t(388032),
    N = t(149671);
function O(e) {
    let { plan: n, selected: t, className: i } = e;
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(N.optionContainer, i),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsxs)("div", {
                              className: N.labelContainer,
                              children: [
                                  (0, r.jsx)(d.$Eu, {
                                      size: "xs",
                                      color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      variant: "text-xs/medium",
                                      children: C.intl.format(b.default.FrRqub, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: N.optionSpacer }),
              ],
          });
}
function y(e) {
    let { region: n, selected: t, disabled: i, className: l } = e,
        { pingText: o, pingCircleStyle: s } = (0, h.t)(n.pingUrl);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(N.optionContainer, { [N.disabled]: i }, l),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsx)("div", {
                              className: N.labelContainer,
                              children: i
                                  ? (0, r.jsx)("span", { children: C.intl.string(b.default["1eK9GR"]) })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: a()(N.pingCircle, s) }),
                                            (0, r.jsx)(d.Text, {
                                                variant: "text-xs/medium",
                                                children: o,
                                            }),
                                        ],
                                    }),
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: N.optionSpacer }),
              ],
          });
}
function S() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        portkeyInstance: l,
        setRegionId: a,
        name: h,
        setName: S,
        planId: E,
        setPlanId: P,
        planCost: T,
        stepLoading: w,
        error: I,
    } = (0, x.aj)();
    i.useEffect(() => {
        (0, g._k)(e);
    }, [e]);
    let R = (0, o.e7)([m.Z], () => m.Z.getRegions()),
        Z = (0, o.e7)([m.Z], () => m.Z.getRegionState()),
        k = i.useMemo(() => {
            var e;
            return null !=
                (e = R.sort((e, n) => (0, j.Z)(e, n, Z)).map((e) => ({
                    value: e,
                    label: e.name,
                })))
                ? e
                : [];
        }, [Z, R]),
        G = i.useMemo(() => {
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
        B = (0, _.Z)();
    return null == n
        ? (0, r.jsx)("div", {
              className: N.spinnerContainer,
              children: (0, r.jsx)(d.$jN, { type: d.RAz.SPINNING_CIRCLE }),
          })
        : (0, r.jsxs)("div", {
              className: N.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: N.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: N.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: N.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: N.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.X6q, {
                                                      className: N.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: C.intl.string(b.default["78avu7"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: C.intl.string(b.default.hmt2ra),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: N.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.oil, {
                                              value: h,
                                              onChange: S,
                                              placeholder: C.intl.string(b.default.Kg0Zio),
                                              showCharacterCount: !0,
                                              maxLength: v.gM,
                                              disabled: w,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: N.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: N.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.X6q, {
                                                      className: N.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: C.intl.string(b.default.iccpNT),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: C.intl.string(
                                                          null != l ? b.default.sjwMnJ : b.default.wKyl39,
                                                      ),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: N.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: N.refresh,
                                                      children: (0, r.jsx)(s.u, {
                                                          asContainer: !0,
                                                          position: "top",
                                                          text: C.intl.string(b.default["G+UZgY"]),
                                                          children: (0, r.jsx)(d.P3F, {
                                                              className: N.sectionHeaderIcon,
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
                                              isDisabled: w || null != l,
                                              options: k,
                                              optionClassName: N.option,
                                              select: (e) => a(e.id),
                                              placeholder: C.intl.string(b.default["op6/kZ"]),
                                              renderOptionLabel: (e) => {
                                                  var n;
                                                  return (0, r.jsx)(y, {
                                                      region: e.value,
                                                      selected: e.value.id === t,
                                                      disabled: null != (n = e.disabled) && n,
                                                  });
                                              },
                                              renderOptionValue: (e) => {
                                                  var n;
                                                  return null == e[0]
                                                      ? null
                                                      : (0, r.jsx)(y, {
                                                            region: e[0].value,
                                                            selected: e[0].value.id === t,
                                                            disabled: null != (n = e[0].disabled) && n,
                                                            className: N.value,
                                                        });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: N.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: N.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.X6q, {
                                                      className: N.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: C.intl.string(b.default["3QONen"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: C.intl.string(b.default.HbR6W1),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: N.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === E,
                                              isDisabled: w,
                                              options: G,
                                              optionClassName: N.option,
                                              select: (e) => P(e.id),
                                              placeholder: C.intl.string(b.default["4QOSPj"]),
                                              renderOptionValue: (e) => {
                                                  var n, t, i;
                                                  return (0, r.jsx)(O, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (i = e[0]) || null == (t = i.value)
                                                              ? void 0
                                                              : t.id) === E,
                                                      className: N.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(O, {
                                                      plan: e.value,
                                                      selected: e.value.id === E,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: N.gameDetailsContainer,
                              children: (0, r.jsx)(p.Z, {}),
                          }),
                      ],
                  }),
                  null != l &&
                      0 !== T &&
                      (0, r.jsx)(c.Z, {
                          className: N.infoBox,
                          children: (0, r.jsx)(d.Text, {
                              variant: "text-xs/medium",
                              children:
                                  T < 0
                                      ? C.intl.format(b.default.H8rHQU, { boostCount: Math.abs(T) })
                                      : C.intl.format(b.default.h4ZvmJ, { boostCount: T }),
                          }),
                      }),
                  (0, r.jsx)(d.Text, {
                      variant: "text-sm/medium",
                      children: C.intl.format(b.default.qW1xR0, {
                          provider: "Portkey",
                          termsOfServiceUrl: () => (0, u.q)({ href: "https://google.com/terms-of-service" }),
                          helpCenterUrl: "https://google.com/help-center",
                      }),
                  }),
                  null != I &&
                      (0, r.jsx)(d.Text, {
                          variant: "text-xs/medium",
                          color: "text-danger",
                          children: I,
                      }),
                  (0, r.jsxs)(f.ok, {
                      step: v.Vb.SERVER_SETTINGS,
                      className: N.footerContainer,
                      children: [(0, r.jsx)(f.VS, {}), (0, r.jsx)(f.oh, { disabled: !B })],
                  }),
              ],
          });
}
