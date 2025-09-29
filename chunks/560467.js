t.d(n, { Z: () => y });
var r = t(951288),
    i = t(647438),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    s = t(681715),
    c = t(481060),
    d = t(494620),
    u = t(49012),
    m = t(744993),
    p = t(590383),
    g = t(642633),
    x = t(183369),
    f = t(422663),
    _ = t(210682),
    h = t(39793),
    j = t(473682),
    b = t(440589),
    v = t(388032),
    C = t(557787);
function N(e) {
    let { plan: n, selected: t, className: i } = e;
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(C.optionContainer, i),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsxs)("div", {
                              className: C.labelContainer,
                              children: [
                                  (0, r.jsx)(c.$Eu, {
                                      size: "xs",
                                      color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      children: v.intl.format(b.default.FrRqub, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: C.optionSpacer }),
              ],
          });
}
function O(e) {
    let { region: n, selected: t, disabled: i, className: l } = e,
        { pingText: o, pingCircleStyle: s } = (0, h.t)(n.pingUrl);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(C.optionContainer, { [C.disabled]: i }, l),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsx)("div", {
                              className: C.labelContainer,
                              children: i
                                  ? (0, r.jsx)("span", { children: v.intl.string(b.default["1eK9GR"]) })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: a()(C.pingCircle, s) }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-xs/medium",
                                                children: o,
                                            }),
                                        ],
                                    }),
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: C.optionSpacer }),
              ],
          });
}
function y() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        portkeyInstance: l,
        setRegionId: a,
        name: h,
        setName: y,
        planId: S,
        setPlanId: E,
        planCost: P,
        stepLoading: w,
        error: T,
    } = (0, x.aj)();
    i.useEffect(() => {
        (0, m._k)(e);
    }, [e]);
    let I = (0, o.e7)([p.Z], () => p.Z.getRegions()),
        R = i.useMemo(() => {
            var e;
            return null !=
                (e = I.map((e) => ({
                    value: e,
                    label: e.name,
                })))
                ? e
                : [];
        }, [I]),
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
        Z = (0, _.Z)();
    return null == n
        ? (0, r.jsx)("div", {
              className: C.spinnerContainer,
              children: (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
          })
        : (0, r.jsxs)("div", {
              className: C.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: C.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: C.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: C.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: C.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: v.intl.string(b.default["78avu7"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: v.intl.string(b.default.hmt2ra),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: C.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.oil, {
                                              value: h,
                                              onChange: y,
                                              placeholder: v.intl.string(b.default.Kg0Zio),
                                              showCharacterCount: !0,
                                              maxLength: j.gM,
                                              disabled: w,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: C.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: C.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: v.intl.string(b.default.iccpNT),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: v.intl.string(b.default.wKyl39),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: C.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: C.refresh,
                                                      children: (0, r.jsx)(s.u, {
                                                          asContainer: !0,
                                                          position: "top",
                                                          text: v.intl.string(b.default["G+UZgY"]),
                                                          children: (0, r.jsx)(c.P3F, {
                                                              className: C.sectionHeaderIcon,
                                                              onClick: () => (0, m.TN)(),
                                                              children: (0, r.jsx)(c.DuK, { size: "xs" }),
                                                          }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === t,
                                              isDisabled: w,
                                              options: R,
                                              optionClassName: C.option,
                                              select: (e) => a(e.id),
                                              placeholder: v.intl.string(b.default["op6/kZ"]),
                                              renderOptionLabel: (e) => {
                                                  var n;
                                                  return (0, r.jsx)(O, {
                                                      region: e.value,
                                                      selected: e.value.id === t,
                                                      disabled: null != (n = e.disabled) && n,
                                                  });
                                              },
                                              renderOptionValue: (e) => {
                                                  var n;
                                                  return null == e[0]
                                                      ? null
                                                      : (0, r.jsx)(O, {
                                                            region: e[0].value,
                                                            selected: e[0].value.id === t,
                                                            disabled: null != (n = e[0].disabled) && n,
                                                            className: C.value,
                                                        });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: C.sectionContainer,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: C.sectionHeader,
                                              children: (0, r.jsx)(c.X6q, {
                                                  variant: "heading-sm/semibold",
                                                  children: v.intl.string(b.default["3QONen"]),
                                              }),
                                          }),
                                          (0, r.jsx)(c.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === S,
                                              isDisabled: w,
                                              options: G,
                                              optionClassName: C.option,
                                              select: (e) => E(e.id),
                                              placeholder: v.intl.string(b.default["4QOSPj"]),
                                              renderOptionValue: (e) => {
                                                  var n, t, i;
                                                  return (0, r.jsx)(N, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (i = e[0]) || null == (t = i.value)
                                                              ? void 0
                                                              : t.id) === S,
                                                      className: C.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(N, {
                                                      plan: e.value,
                                                      selected: e.value.id === S,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: C.gameDetailsContainer,
                              children: (0, r.jsx)(g.Z, {}),
                          }),
                      ],
                  }),
                  null != l &&
                      0 !== P &&
                      (0, r.jsx)(d.Z, {
                          className: C.infoBox,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children:
                                  P < 0
                                      ? v.intl.format(b.default.H8rHQU, { boostCount: Math.abs(P) })
                                      : v.intl.format(b.default.h4ZvmJ, { boostCount: P }),
                          }),
                      }),
                  (0, r.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      children: v.intl.format(b.default.qW1xR0, {
                          provider: "Portkey",
                          termsOfServiceUrl: () => (0, u.q)({ href: "https://google.com/terms-of-service" }),
                          helpCenterUrl: "https://google.com/help-center",
                      }),
                  }),
                  null != T &&
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/medium",
                          color: "text-danger",
                          children: T,
                      }),
                  (0, r.jsxs)(f.ok, {
                      step: j.Vb.SERVER_SETTINGS,
                      className: C.footerContainer,
                      children: [(0, r.jsx)(f.VS, {}), (0, r.jsx)(f.oh, { disabled: !Z })],
                  }),
              ],
          });
}
