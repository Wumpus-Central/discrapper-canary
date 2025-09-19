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
    g = t(642633),
    f = t(183369),
    p = t(422663),
    x = t(210682),
    v = t(39793),
    b = t(473682),
    j = t(401561),
    h = t(388032),
    _ = t(149671);
function C(e) {
    let { plan: n, selected: t, className: i } = e;
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: l()(_.optionContainer, i),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsxs)("div", {
                              className: _.labelContainer,
                              children: [
                                  (0, r.jsx)(c.$Eu, {
                                      size: "xs",
                                      color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      children: h.intl.format(j.default.FrRqub, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: _.optionSpacer }),
              ],
          });
}
function y(e) {
    let { region: n, selected: t, disabled: i, className: a } = e,
        { pingText: o, pingCircleStyle: s } = (0, v.t)(n.pingUrl);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: l()(_.optionContainer, { [_.disabled]: i }, a),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsx)("div", {
                              className: _.labelContainer,
                              children: i
                                  ? (0, r.jsx)("span", { children: h.intl.string(j.default["1eK9GR"]) })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: l()(_.pingCircle, s) }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-xs/medium",
                                                children: o,
                                            }),
                                        ],
                                    }),
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: _.optionSpacer }),
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
        name: v,
        setName: O,
        planId: N,
        setPlanId: S,
        planCost: P,
    } = (0, f.aj)();
    i.useEffect(() => {
        (0, u._k)(e);
    }, [e]);
    let w = (0, o.e7)([m.Z], () => m.Z.getRegions()),
        k = i.useMemo(() => {
            var e;
            return null !=
                (e = w.map((e) => ({
                    value: e,
                    label: e.name,
                })))
                ? e
                : [];
        }, [w]),
        T = i.useMemo(() => {
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
        E = (0, x.Z)();
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: _.container,
              children: [
                  (0, r.jsx)(c.X6q, {
                      variant: "heading-lg/semibold",
                      children: h.intl.string(j.default.Eonh9P),
                  }),
                  (0, r.jsxs)("div", {
                      className: _.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: _.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: _.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: _.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: h.intl.string(j.default["78avu7"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: h.intl.string(j.default.hmt2ra),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: _.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.oil, {
                                              value: v,
                                              onChange: O,
                                              placeholder: h.intl.string(j.default.Kg0Zio),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: _.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: _.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: h.intl.string(j.default.iccpNT),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: h.intl.string(j.default.wKyl39),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: _.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: _.refresh,
                                                      children: (0, r.jsx)(s.u, {
                                                          asContainer: !0,
                                                          position: "top",
                                                          text: h.intl.string(j.default["G+UZgY"]),
                                                          children: (0, r.jsx)(c.P3F, {
                                                              className: _.sectionHeaderIcon,
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
                                              options: k,
                                              optionClassName: _.option,
                                              select: (e) => l(e.id),
                                              placeholder: h.intl.string(j.default["op6/kZ"]),
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
                                                            className: _.value,
                                                        });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: _.sectionContainer,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: _.sectionHeader,
                                              children: (0, r.jsx)(c.X6q, {
                                                  variant: "heading-sm/semibold",
                                                  children: h.intl.string(j.default["3QONen"]),
                                              }),
                                          }),
                                          (0, r.jsx)(c.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === N,
                                              options: T,
                                              optionClassName: _.option,
                                              select: (e) => S(e.id),
                                              placeholder: h.intl.string(j.default["4QOSPj"]),
                                              renderOptionValue: (e) => {
                                                  var n, t, i;
                                                  return (0, r.jsx)(C, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (i = e[0]) || null == (t = i.value)
                                                              ? void 0
                                                              : t.id) === N,
                                                      className: _.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(C, {
                                                      plan: e.value,
                                                      selected: e.value.id === N,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: _.gameDetailsContainer,
                              children: (0, r.jsx)(g.Z, {}),
                          }),
                      ],
                  }),
                  null != a &&
                      0 !== P &&
                      (0, r.jsx)(d.Z, {
                          className: _.infoBox,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children:
                                  P < 0
                                      ? h.intl.format(j.default.H8rHQU, { boostCount: Math.abs(P) })
                                      : h.intl.format(j.default.h4ZvmJ, { boostCount: P }),
                          }),
                      }),
                  (0, r.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      children: h.intl.format(j.default.qW1xR0, {
                          provider: "Portkey",
                          termsOfServiceUrl: "https://google.com/terms-of-service",
                          helpCenterUrl: "https://google.com/help-center",
                      }),
                  }),
                  (0, r.jsxs)(p.ok, {
                      step: b.Vb.SERVER_SETTINGS,
                      className: _.footerContainer,
                      children: [(0, r.jsx)(p.VS, {}), (0, r.jsx)(p.oh, { disabled: !E })],
                  }),
              ],
          });
}
