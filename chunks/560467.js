t.d(n, { Z: () => O });
var i = t(951288),
    r = t(647438),
    l = t(120356),
    a = t.n(l),
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
    j = t(473682),
    b = t(401561),
    h = t(388032),
    _ = t(149671);
function C(e) {
    let { plan: n, selected: t, className: r } = e;
    return null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: a()(_.optionContainer, r),
                      children: [
                          (0, i.jsx)("span", { children: n.name }),
                          (0, i.jsxs)("div", {
                              className: _.labelContainer,
                              children: [
                                  (0, i.jsx)(c.$Eu, {
                                      size: "xs",
                                      color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      children: h.intl.format(b.default.FrRqub, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, i.jsx)("div", { className: _.optionSpacer }),
              ],
          });
}
function y(e) {
    let { region: n, selected: t, disabled: r, className: l } = e,
        { pingText: o, pingCircleStyle: s } = (0, v.t)(n.pingUrl);
    return null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: a()(_.optionContainer, { [_.disabled]: r }, l),
                      children: [
                          (0, i.jsx)("span", { children: n.name }),
                          (0, i.jsx)("div", {
                              className: _.labelContainer,
                              children: r
                                  ? (0, i.jsx)("span", { children: h.intl.string(b.default["1eK9GR"]) })
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", { className: a()(_.pingCircle, s) }),
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
function O() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        portkeyInstance: l,
        setRegionId: a,
        name: v,
        setName: O,
        planId: N,
        setPlanId: P,
        planCost: S,
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
        E = r.useMemo(() => {
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
        I = (0, x.Z)();
    return null == n
        ? (0, i.jsx)("div", {
              className: _.spinnerContainer,
              children: (0, i.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
          })
        : (0, i.jsxs)("div", {
              className: _.container,
              children: [
                  (0, i.jsx)(c.X6q, {
                      variant: "heading-lg/semibold",
                      children: h.intl.string(b.default.Eonh9P),
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
                                                      children: h.intl.string(b.default["78avu7"]),
                                                  }),
                                                  (0, i.jsx)(s.u, {
                                                      position: "top",
                                                      text: h.intl.string(b.default.hmt2ra),
                                                      children: (0, i.jsx)(c.idN, {
                                                          className: _.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(c.oil, {
                                              value: v,
                                              onChange: O,
                                              placeholder: h.intl.string(b.default.Kg0Zio),
                                              showCharacterCount: !0,
                                              maxLength: j.gM,
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
                                                      children: h.intl.string(b.default.iccpNT),
                                                  }),
                                                  (0, i.jsx)(s.u, {
                                                      position: "top",
                                                      text: h.intl.string(b.default.wKyl39),
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
                                                          text: h.intl.string(b.default["G+UZgY"]),
                                                          children: (0, i.jsx)(c.P3F, {
                                                              className: _.sectionHeaderIcon,
                                                              onClick: () => (0, u.TN)(),
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
                                              select: (e) => a(e.id),
                                              placeholder: h.intl.string(b.default["op6/kZ"]),
                                              renderOptionLabel: (e) => {
                                                  var n;
                                                  return (0, i.jsx)(y, {
                                                      region: e.value,
                                                      selected: e.value.id === t,
                                                      disabled: null != (n = e.disabled) && n,
                                                  });
                                              },
                                              renderOptionValue: (e) => {
                                                  var n;
                                                  return null == e[0]
                                                      ? null
                                                      : (0, i.jsx)(y, {
                                                            region: e[0].value,
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
                                                  children: h.intl.string(b.default["3QONen"]),
                                              }),
                                          }),
                                          (0, i.jsx)(c.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === N,
                                              options: E,
                                              optionClassName: _.option,
                                              select: (e) => P(e.id),
                                              placeholder: h.intl.string(b.default["4QOSPj"]),
                                              renderOptionValue: (e) => {
                                                  var n, t, r;
                                                  return (0, i.jsx)(C, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (r = e[0]) || null == (t = r.value)
                                                              ? void 0
                                                              : t.id) === N,
                                                      className: _.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, i.jsx)(C, {
                                                      plan: e.value,
                                                      selected: e.value.id === N,
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
                  null != l &&
                      0 !== S &&
                      (0, i.jsx)(d.Z, {
                          className: _.infoBox,
                          children: (0, i.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children:
                                  S < 0
                                      ? h.intl.format(b.default.H8rHQU, { boostCount: Math.abs(S) })
                                      : h.intl.format(b.default.h4ZvmJ, { boostCount: S }),
                          }),
                      }),
                  (0, i.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      children: h.intl.format(b.default.qW1xR0, {
                          provider: "Portkey",
                          termsOfServiceUrl: "https://google.com/terms-of-service",
                          helpCenterUrl: "https://google.com/help-center",
                      }),
                  }),
                  (0, i.jsxs)(p.ok, {
                      step: j.Vb.SERVER_SETTINGS,
                      className: _.footerContainer,
                      children: [(0, i.jsx)(p.VS, {}), (0, i.jsx)(p.oh, { disabled: !I })],
                  }),
              ],
          });
}
