t.d(n, { Z: () => O });
var r = t(951288),
    i = t(647438),
    a = t(120356),
    l = t.n(a),
    o = t(442837),
    s = t(681715),
    c = t(481060),
    d = t(494620),
    u = t(744993),
    m = t(590383),
    p = t(642633),
    g = t(183369),
    x = t(422663),
    f = t(210682),
    _ = t(39793),
    h = t(473682),
    j = t(440589),
    b = t(388032),
    v = t(557787);
function C(e) {
    let { plan: n, selected: t, className: i } = e;
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: l()(v.optionContainer, i),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsxs)("div", {
                              className: v.labelContainer,
                              children: [
                                  (0, r.jsx)(c.$Eu, {
                                      size: "xs",
                                      color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      children: b.intl.format(j.default.FrRqub, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: v.optionSpacer }),
              ],
          });
}
function N(e) {
    let { region: n, selected: t, disabled: i, className: a } = e,
        { pingText: o, pingCircleStyle: s } = (0, _.t)(n.pingUrl);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: l()(v.optionContainer, { [v.disabled]: i }, a),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsx)("div", {
                              className: v.labelContainer,
                              children: i
                                  ? (0, r.jsx)("span", { children: b.intl.string(j.default["1eK9GR"]) })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: l()(v.pingCircle, s) }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-xs/medium",
                                                children: o,
                                            }),
                                        ],
                                    }),
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: v.optionSpacer }),
              ],
          });
}
function O() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        portkeyInstance: a,
        setRegionId: l,
        name: _,
        setName: O,
        planId: y,
        setPlanId: S,
        planCost: P,
        error: E,
    } = (0, g.aj)();
    i.useEffect(() => {
        (0, u._k)(e);
    }, [e]);
    let w = (0, o.e7)([m.Z], () => m.Z.getRegions()),
        T = i.useMemo(() => {
            var e;
            return null !=
                (e = w.map((e) => ({
                    value: e,
                    label: e.name,
                })))
                ? e
                : [];
        }, [w]),
        I = i.useMemo(() => {
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
        R = (0, f.Z)();
    return null == n
        ? (0, r.jsx)("div", {
              className: v.spinnerContainer,
              children: (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
          })
        : (0, r.jsxs)("div", {
              className: v.container,
              children: [
                  (0, r.jsx)(c.X6q, {
                      variant: "heading-lg/semibold",
                      children: b.intl.string(j.default.Eonh9P),
                  }),
                  (0, r.jsxs)("div", {
                      className: v.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: v.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: v.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: v.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: b.intl.string(j.default["78avu7"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: b.intl.string(j.default.hmt2ra),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: v.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.oil, {
                                              value: _,
                                              onChange: O,
                                              placeholder: b.intl.string(j.default.Kg0Zio),
                                              showCharacterCount: !0,
                                              maxLength: h.gM,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: v.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: v.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: b.intl.string(j.default.iccpNT),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: b.intl.string(j.default.wKyl39),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: v.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: v.refresh,
                                                      children: (0, r.jsx)(s.u, {
                                                          asContainer: !0,
                                                          position: "top",
                                                          text: b.intl.string(j.default["G+UZgY"]),
                                                          children: (0, r.jsx)(c.P3F, {
                                                              className: v.sectionHeaderIcon,
                                                              onClick: () => (0, u.TN)(),
                                                              children: (0, r.jsx)(c.DuK, { size: "xs" }),
                                                          }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === t,
                                              options: T,
                                              optionClassName: v.option,
                                              select: (e) => l(e.id),
                                              placeholder: b.intl.string(j.default["op6/kZ"]),
                                              renderOptionLabel: (e) => {
                                                  var n;
                                                  return (0, r.jsx)(N, {
                                                      region: e.value,
                                                      selected: e.value.id === t,
                                                      disabled: null != (n = e.disabled) && n,
                                                  });
                                              },
                                              renderOptionValue: (e) => {
                                                  var n;
                                                  return null == e[0]
                                                      ? null
                                                      : (0, r.jsx)(N, {
                                                            region: e[0].value,
                                                            selected: e[0].value.id === t,
                                                            disabled: null != (n = e[0].disabled) && n,
                                                            className: v.value,
                                                        });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: v.sectionContainer,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: v.sectionHeader,
                                              children: (0, r.jsx)(c.X6q, {
                                                  variant: "heading-sm/semibold",
                                                  children: b.intl.string(j.default["3QONen"]),
                                              }),
                                          }),
                                          (0, r.jsx)(c.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === y,
                                              options: I,
                                              optionClassName: v.option,
                                              select: (e) => S(e.id),
                                              placeholder: b.intl.string(j.default["4QOSPj"]),
                                              renderOptionValue: (e) => {
                                                  var n, t, i;
                                                  return (0, r.jsx)(C, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (i = e[0]) || null == (t = i.value)
                                                              ? void 0
                                                              : t.id) === y,
                                                      className: v.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(C, {
                                                      plan: e.value,
                                                      selected: e.value.id === y,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: v.gameDetailsContainer,
                              children: (0, r.jsx)(p.Z, {}),
                          }),
                      ],
                  }),
                  null != a &&
                      0 !== P &&
                      (0, r.jsx)(d.Z, {
                          className: v.infoBox,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children:
                                  P < 0
                                      ? b.intl.format(j.default.H8rHQU, { boostCount: Math.abs(P) })
                                      : b.intl.format(j.default.h4ZvmJ, { boostCount: P }),
                          }),
                      }),
                  (0, r.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      children: b.intl.format(j.default.qW1xR0, {
                          provider: "Portkey",
                          termsOfServiceUrl: "https://google.com/terms-of-service",
                          helpCenterUrl: "https://google.com/help-center",
                      }),
                  }),
                  null != E &&
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/medium",
                          color: "text-danger",
                          children: E,
                      }),
                  (0, r.jsxs)(x.ok, {
                      step: h.Vb.SERVER_SETTINGS,
                      className: v.footerContainer,
                      children: [(0, r.jsx)(x.VS, {}), (0, r.jsx)(x.oh, { disabled: !R })],
                  }),
              ],
          });
}
