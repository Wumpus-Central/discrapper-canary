t.d(n, { Z: () => _ });
var i = t(951288),
    r = t(647438),
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
    v = t(440589),
    x = t(388032),
    b = t(557787);
function j(e) {
    let { currentGame: n, planId: t, selected: a, className: o } = e,
        c = r.useMemo(() => (null == n ? void 0 : n.plans.find((e) => e.id === t)), [null == n ? void 0 : n.plans, t]);
    return null == c
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: l()(b.optionContainer, o),
                      children: [
                          (0, i.jsx)("span", { children: c.name }),
                          (0, i.jsxs)("div", {
                              className: b.labelContainer,
                              children: [
                                  (0, i.jsx)(s.$Eu, {
                                      size: "xs",
                                      color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: "text-xs/medium",
                                      children: x.intl.format(v.default.FrRqub, { boostCount: c.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !a && (0, i.jsx)("div", { className: b.optionSpacer }),
              ],
          });
}
function h(e) {
    let { currentGame: n, locationString: t, selected: a, className: o } = e,
        c = r.useMemo(
            () => (null == n ? void 0 : n.locations.find((e) => e.region === t)),
            [null == n ? void 0 : n.locations, t],
        ),
        { pingText: d, pingCircleStyle: u } = (0, p.i)(null == c ? void 0 : c.pingUrl);
    return null == c
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: l()(b.optionContainer, o),
                      children: [
                          (0, i.jsx)("span", { children: c.region }),
                          (0, i.jsxs)("div", {
                              className: b.labelContainer,
                              children: [
                                  (0, i.jsx)("div", { className: l()(b.pingCircle, u) }),
                                  (0, i.jsx)(s.Text, {
                                      variant: "text-xs/medium",
                                      children: d,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !a && (0, i.jsx)("div", { className: b.optionSpacer }),
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
        O = r.useMemo(() => {
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
        N = r.useMemo(() => {
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
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(s.X6q, {
                      className: b.title,
                      variant: "heading-lg/semibold",
                      children: x.intl.string(v.default.Eonh9P),
                  }),
                  (0, i.jsxs)("div", {
                      className: b.contentContainer,
                      children: [
                          (0, i.jsxs)("div", {
                              className: b.settingsContainer,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: b.sectionContainer,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: b.sectionHeader,
                                              children: [
                                                  (0, i.jsx)(s.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: x.intl.string(v.default["78avu7"]),
                                                  }),
                                                  (0, i.jsx)(o.u, {
                                                      position: "top",
                                                      text: x.intl.string(v.default.hmt2ra),
                                                      children: (0, i.jsx)(s.idN, {
                                                          className: b.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(s.oil, {
                                              value: l,
                                              onChange: p,
                                              placeholder: x.intl.string(v.default.Kg0Zio),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: b.sectionContainer,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: b.sectionHeader,
                                              children: [
                                                  (0, i.jsx)(s.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: x.intl.string(v.default.iccpNT),
                                                  }),
                                                  (0, i.jsx)(o.u, {
                                                      position: "top",
                                                      text: x.intl.string(v.default.wKyl39),
                                                      children: (0, i.jsx)(s.idN, {
                                                          className: b.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(s.PhF, {
                                              serialize: (e) => e.toString(),
                                              isSelected: (e) => e === n,
                                              options: O,
                                              optionClassName: b.option,
                                              select: (e) => a(e),
                                              placeholder: x.intl.string(v.default["op6/kZ"]),
                                              renderOptionLabel: (t) =>
                                                  (0, i.jsx)(h, {
                                                      currentGame: e,
                                                      locationString: t.value,
                                                      selected: (null == t ? void 0 : t.value) === n,
                                                  }),
                                              renderOptionValue: (t) => {
                                                  var r, a;
                                                  return (0, i.jsx)(h, {
                                                      currentGame: e,
                                                      locationString: null == (r = t[0]) ? void 0 : r.value,
                                                      selected: (null == (a = t[0]) ? void 0 : a.value) === n,
                                                      className: b.value,
                                                  });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: b.sectionContainer,
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: b.sectionHeader,
                                              children: (0, i.jsx)(s.X6q, {
                                                  variant: "heading-sm/semibold",
                                                  children: x.intl.string(v.default["3QONen"]),
                                              }),
                                          }),
                                          (0, i.jsx)(s.PhF, {
                                              serialize: (e) => e.toString(),
                                              isSelected: (e) => e === _,
                                              options: N,
                                              optionClassName: b.option,
                                              select: (e) => C(e),
                                              placeholder: x.intl.string(v.default["4QOSPj"]),
                                              renderOptionValue: (n) => {
                                                  var t, r;
                                                  return (0, i.jsx)(j, {
                                                      currentGame: e,
                                                      planId: null == (t = n[0]) ? void 0 : t.value,
                                                      selected: (null == (r = n[0]) ? void 0 : r.value) === _,
                                                      className: b.value,
                                                  });
                                              },
                                              renderOptionLabel: (n) =>
                                                  (0, i.jsx)(j, {
                                                      currentGame: e,
                                                      planId: null == n ? void 0 : n.value,
                                                      selected: (null == n ? void 0 : n.value) === _,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: b.gameDetailsContainer,
                              children: (0, i.jsx)(d.Z, {}),
                          }),
                      ],
                  }),
                  null != t &&
                      0 !== y &&
                      (0, i.jsx)(c.Z, {
                          className: b.infoBox,
                          children: (0, i.jsx)(s.Text, {
                              variant: "text-xs/medium",
                              children:
                                  y < 0
                                      ? x.intl.format(v.default.H8rHQU, { boostCount: Math.abs(y) })
                                      : x.intl.format(v.default.h4ZvmJ, { boostCount: y }),
                          }),
                      }),
                  (0, i.jsxs)(m.ok, {
                      step: f.Vb.SERVER_SETTINGS,
                      className: b.footerContainer,
                      children: [(0, i.jsx)(m.VS, {}), (0, i.jsx)(m.oh, { disabled: !S })],
                  }),
              ],
          });
}
