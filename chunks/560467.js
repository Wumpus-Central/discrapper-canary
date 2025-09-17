t.d(n, { Z: () => y });
var i = t(951288),
    r = t(647438),
    a = t(120356),
    l = t.n(a),
    o = t(442837),
    s = t(681715),
    c = t(481060),
    d = t(494620),
    u = t(744993),
    m = t(166098),
    g = t(642633),
    f = t(183369),
    p = t(422663),
    x = t(210682),
    v = t(555546),
    b = t(473682),
    j = t(401561),
    h = t(388032),
    _ = t(149671);
function C(e) {
    let { currentGame: n, planId: t, selected: a, className: o } = e,
        s = r.useMemo(() => (null == n ? void 0 : n.plans.find((e) => e.id === t)), [null == n ? void 0 : n.plans, t]);
    return null == s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: l()(_.optionContainer, o),
                      children: [
                          (0, i.jsx)("span", { children: s.name }),
                          (0, i.jsxs)("div", {
                              className: _.labelContainer,
                              children: [
                                  (0, i.jsx)(c.$Eu, {
                                      size: "xs",
                                      color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      children: h.intl.format(j.default.FrRqub, { boostCount: s.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !a && (0, i.jsx)("div", { className: _.optionSpacer }),
              ],
          });
}
function O(e) {
    let { location: n, selected: t, disabled: r, className: a } = e,
        { pingText: o, pingCircleStyle: s } = (0, v.i)(n.pingUrl);
    return null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: l()(_.optionContainer, { [_.disabled]: r }, a),
                      children: [
                          (0, i.jsx)("span", { children: n.name }),
                          (0, i.jsx)("div", {
                              className: _.labelContainer,
                              children: r
                                  ? (0, i.jsx)("span", { children: h.intl.string(j.default["1eK9GR"]) })
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", { className: l()(_.pingCircle, s) }),
                                            (0, i.jsx)(c.Text, {
                                                variant: "text-xs/medium",
                                                children: o,
                                            }),
                                        ],
                                    }),
                          }),
                      ],
                  }),
                  !t && (0, i.jsx)("div", { className: _.optionSpacer }),
              ],
          });
}
function y() {
    let {
        guildId: e,
        currentGame: n,
        locationId: t,
        portkeyInstance: a,
        setLocationId: l,
        name: v,
        setName: y,
        planId: N,
        setPlanId: S,
        planCost: P,
    } = (0, f.aj)();
    r.useEffect(() => {
        (0, u._k)(e);
    }, [e]);
    let w = (0, o.e7)([m.Z], () => m.Z.getRegions()),
        k = r.useMemo(() => {
            var e;
            return null !=
                (e = w.map((e) => ({
                    value: e,
                    label: e.name,
                })))
                ? e
                : [];
        }, [w]),
        T = r.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == n
                        ? void 0
                        : n.plans.map((e) => ({
                              value: e.id,
                              label: e.name,
                          })))
                ? e
                : [];
        }, [n]),
        E = (0, x.Z)();
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: _.container,
              children: [
                  (0, i.jsx)(c.X6q, {
                      variant: "heading-lg/semibold",
                      children: h.intl.string(j.default.Eonh9P),
                  }),
                  (0, i.jsxs)("div", {
                      className: _.contentContainer,
                      children: [
                          (0, i.jsxs)("div", {
                              className: _.settingsContainer,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: _.sectionContainer,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: _.sectionHeader,
                                              children: [
                                                  (0, i.jsx)(c.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: h.intl.string(j.default["78avu7"]),
                                                  }),
                                                  (0, i.jsx)(s.u, {
                                                      position: "top",
                                                      text: h.intl.string(j.default.hmt2ra),
                                                      children: (0, i.jsx)(c.idN, {
                                                          className: _.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(c.oil, {
                                              value: v,
                                              onChange: y,
                                              placeholder: h.intl.string(j.default.Kg0Zio),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: _.sectionContainer,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: _.sectionHeader,
                                              children: [
                                                  (0, i.jsx)(c.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: h.intl.string(j.default.iccpNT),
                                                  }),
                                                  (0, i.jsx)(s.u, {
                                                      position: "top",
                                                      text: h.intl.string(j.default.wKyl39),
                                                      children: (0, i.jsx)(c.idN, {
                                                          className: _.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: _.refresh,
                                                      children: (0, i.jsx)(s.u, {
                                                          asContainer: !0,
                                                          position: "top",
                                                          text: h.intl.string(j.default["G+UZgY"]),
                                                          children: (0, i.jsx)(c.P3F, {
                                                              className: _.sectionHeaderIcon,
                                                              onClick: () => (0, u.F4)(),
                                                              children: (0, i.jsx)(c.DuK, { size: "xs" }),
                                                          }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(c.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === t,
                                              options: k,
                                              optionClassName: _.option,
                                              select: (e) => l(e.id),
                                              placeholder: h.intl.string(j.default["op6/kZ"]),
                                              renderOptionLabel: (e) => {
                                                  var n;
                                                  return (0, i.jsx)(O, {
                                                      location: e.value,
                                                      selected: e.value.id === t,
                                                      disabled: null != (n = e.disabled) && n,
                                                  });
                                              },
                                              renderOptionValue: (e) => {
                                                  var n;
                                                  return null == e[0]
                                                      ? null
                                                      : (0, i.jsx)(O, {
                                                            location: e[0].value,
                                                            selected: e[0].value.id === t,
                                                            disabled: null != (n = e[0].disabled) && n,
                                                            className: _.value,
                                                        });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: _.sectionContainer,
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: _.sectionHeader,
                                              children: (0, i.jsx)(c.X6q, {
                                                  variant: "heading-sm/semibold",
                                                  children: h.intl.string(j.default["3QONen"]),
                                              }),
                                          }),
                                          (0, i.jsx)(c.PhF, {
                                              serialize: (e) => e.toString(),
                                              isSelected: (e) => e === N,
                                              options: T,
                                              optionClassName: _.option,
                                              select: (e) => S(e),
                                              placeholder: h.intl.string(j.default["4QOSPj"]),
                                              renderOptionValue: (e) => {
                                                  var t, r;
                                                  return (0, i.jsx)(C, {
                                                      currentGame: n,
                                                      planId: null == (t = e[0]) ? void 0 : t.value,
                                                      selected: (null == (r = e[0]) ? void 0 : r.value) === N,
                                                      className: _.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, i.jsx)(C, {
                                                      currentGame: n,
                                                      planId: null == e ? void 0 : e.value,
                                                      selected: (null == e ? void 0 : e.value) === N,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: _.gameDetailsContainer,
                              children: (0, i.jsx)(g.Z, {}),
                          }),
                      ],
                  }),
                  null != a &&
                      0 !== P &&
                      (0, i.jsx)(d.Z, {
                          className: _.infoBox,
                          children: (0, i.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children:
                                  P < 0
                                      ? h.intl.format(j.default.H8rHQU, { boostCount: Math.abs(P) })
                                      : h.intl.format(j.default.h4ZvmJ, { boostCount: P }),
                          }),
                      }),
                  (0, i.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      children: h.intl.format(j.default.qW1xR0, {
                          provider: "Portkey",
                          termsOfServiceUrl: "https://google.com/terms-of-service",
                          helpCenterUrl: "https://google.com/help-center",
                      }),
                  }),
                  (0, i.jsxs)(p.ok, {
                      step: b.Vb.SERVER_SETTINGS,
                      className: _.footerContainer,
                      children: [(0, i.jsx)(p.VS, {}), (0, i.jsx)(p.oh, { disabled: !E })],
                  }),
              ],
          });
}
