t.d(n, { Z: () => _ });
var r = t(951288),
    i = t(647438),
    a = t(120356),
    l = t.n(a),
    o = t(681715),
    s = t(481060),
    c = t(494620),
    d = t(642633),
    u = t(183369),
    m = t(422663),
    g = t(210682),
    p = t(555546),
    f = t(473682),
    v = t(401561),
    x = t(388032),
    b = t(149671);
function j(e) {
    let { currentGame: n, planId: t, selected: a, className: o } = e,
        c = i.useMemo(() => (null == n ? void 0 : n.plans.find((e) => e.id === t)), [null == n ? void 0 : n.plans, t]);
    return null == c
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: l()(b.optionContainer, o),
                      children: [
                          (0, r.jsx)("span", { children: c.name }),
                          (0, r.jsxs)("div", {
                              className: b.labelContainer,
                              children: [
                                  (0, r.jsx)(s.$Eu, {
                                      size: "xs",
                                      color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-xs/medium",
                                      children: x.intl.format(v.default.FrRqub, { boostCount: c.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !a && (0, r.jsx)("div", { className: b.optionSpacer }),
              ],
          });
}
function h(e) {
    let { currentGame: n, locationString: t, selected: a, className: o } = e,
        c = i.useMemo(
            () => (null == n ? void 0 : n.locations.find((e) => e.region === t)),
            [null == n ? void 0 : n.locations, t],
        ),
        { pingText: d, pingCircleStyle: u } = (0, p.i)(null == c ? void 0 : c.pingUrl);
    return null == c
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: l()(b.optionContainer, o),
                      children: [
                          (0, r.jsx)("span", { children: c.region }),
                          (0, r.jsxs)("div", {
                              className: b.labelContainer,
                              children: [
                                  (0, r.jsx)("div", { className: l()(b.pingCircle, u) }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-xs/medium",
                                      children: d,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !a && (0, r.jsx)("div", { className: b.optionSpacer }),
              ],
          });
}
function _() {
    let {
            currentGame: e,
            location: n,
            portkeyInstance: t,
            setLocation: a,
            name: l,
            setName: p,
            planId: _,
            setPlanId: C,
            planCost: y,
        } = (0, u.aj)(),
        O = i.useMemo(() => {
            var n;
            return null !=
                (n =
                    null == e
                        ? void 0
                        : e.locations.map((e) => ({
                              value: e.region,
                              label: e.region,
                          })))
                ? n
                : [];
        }, [e]),
        N = i.useMemo(() => {
            var n;
            return null !=
                (n =
                    null == e
                        ? void 0
                        : e.plans.map((e) => ({
                              value: e.id,
                              label: e.name,
                          })))
                ? n
                : [];
        }, [e]),
        S = (0, g.Z)();
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              className: b.container,
              children: [
                  (0, r.jsx)(s.X6q, {
                      variant: "heading-lg/semibold",
                      children: x.intl.string(v.default.Eonh9P),
                  }),
                  (0, r.jsxs)("div", {
                      className: b.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: b.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: b.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: b.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(s.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: x.intl.string(v.default["78avu7"]),
                                                  }),
                                                  (0, r.jsx)(o.u, {
                                                      position: "top",
                                                      text: x.intl.string(v.default.hmt2ra),
                                                      children: (0, r.jsx)(s.idN, {
                                                          className: b.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(s.oil, {
                                              value: l,
                                              onChange: p,
                                              placeholder: x.intl.string(v.default.Kg0Zio),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: b.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: b.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(s.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: x.intl.string(v.default.iccpNT),
                                                  }),
                                                  (0, r.jsx)(o.u, {
                                                      position: "top",
                                                      text: x.intl.string(v.default.wKyl39),
                                                      children: (0, r.jsx)(s.idN, {
                                                          className: b.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(s.PhF, {
                                              serialize: (e) => e.toString(),
                                              isSelected: (e) => e === n,
                                              options: O,
                                              optionClassName: b.option,
                                              select: (e) => a(e),
                                              placeholder: x.intl.string(v.default["op6/kZ"]),
                                              renderOptionLabel: (t) =>
                                                  (0, r.jsx)(h, {
                                                      currentGame: e,
                                                      locationString: t.value,
                                                      selected: (null == t ? void 0 : t.value) === n,
                                                  }),
                                              renderOptionValue: (t) => {
                                                  var i, a;
                                                  return (0, r.jsx)(h, {
                                                      currentGame: e,
                                                      locationString: null == (i = t[0]) ? void 0 : i.value,
                                                      selected: (null == (a = t[0]) ? void 0 : a.value) === n,
                                                      className: b.value,
                                                  });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: b.sectionContainer,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: b.sectionHeader,
                                              children: (0, r.jsx)(s.X6q, {
                                                  variant: "heading-sm/semibold",
                                                  children: x.intl.string(v.default["3QONen"]),
                                              }),
                                          }),
                                          (0, r.jsx)(s.PhF, {
                                              serialize: (e) => e.toString(),
                                              isSelected: (e) => e === _,
                                              options: N,
                                              optionClassName: b.option,
                                              select: (e) => C(e),
                                              placeholder: x.intl.string(v.default["4QOSPj"]),
                                              renderOptionValue: (n) => {
                                                  var t, i;
                                                  return (0, r.jsx)(j, {
                                                      currentGame: e,
                                                      planId: null == (t = n[0]) ? void 0 : t.value,
                                                      selected: (null == (i = n[0]) ? void 0 : i.value) === _,
                                                      className: b.value,
                                                  });
                                              },
                                              renderOptionLabel: (n) =>
                                                  (0, r.jsx)(j, {
                                                      currentGame: e,
                                                      planId: null == n ? void 0 : n.value,
                                                      selected: (null == n ? void 0 : n.value) === _,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: b.gameDetailsContainer,
                              children: (0, r.jsx)(d.Z, {}),
                          }),
                      ],
                  }),
                  null != t &&
                      0 !== y &&
                      (0, r.jsx)(c.Z, {
                          className: b.infoBox,
                          children: (0, r.jsx)(s.Text, {
                              variant: "text-xs/medium",
                              children:
                                  y < 0
                                      ? x.intl.format(v.default.H8rHQU, { boostCount: Math.abs(y) })
                                      : x.intl.format(v.default.h4ZvmJ, { boostCount: y }),
                          }),
                      }),
                  (0, r.jsx)(s.Text, {
                      variant: "text-sm/medium",
                      children: x.intl.format(v.default.qW1xR0, {
                          provider: "Portkey",
                          termsOfServiceUrl: "https://google.com/terms-of-service",
                          helpCenterUrl: "https://google.com/help-center",
                      }),
                  }),
                  (0, r.jsxs)(m.ok, {
                      step: f.Vb.SERVER_SETTINGS,
                      className: b.footerContainer,
                      children: [(0, r.jsx)(m.VS, {}), (0, r.jsx)(m.oh, { disabled: !S })],
                  }),
              ],
          });
}
