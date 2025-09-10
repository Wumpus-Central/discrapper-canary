t.d(n, { Z: () => C });
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
    g = t(985862),
    p = t(210682),
    f = t(555546),
    v = t(473682),
    x = t(401561),
    j = t(388032),
    b = t(149671);
function h(e) {
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
                                      children: j.intl.format(x.default.FrRqub, { boostCount: c.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !a && (0, r.jsx)("div", { className: b.optionSpacer }),
              ],
          });
}
function _(e) {
    let { currentGame: n, locationString: t, selected: a, className: o } = e,
        c = i.useMemo(
            () => (null == n ? void 0 : n.locations.find((e) => e.region === t)),
            [null == n ? void 0 : n.locations, t],
        ),
        { pingText: d, pingCircleStyle: u } = (0, f.i)(null == c ? void 0 : c.pingUrl);
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
function C() {
    let {
            currentGame: e,
            location: n,
            portkeyInstance: t,
            setLocation: a,
            name: l,
            setName: f,
            planId: C,
            setPlanId: y,
        } = (0, u.aj)(),
        O = (0, g.Z)(),
        N = i.useMemo(() => {
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
        S = i.useMemo(() => {
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
        P = (0, p.Z)();
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(s.X6q, {
                      className: b.title,
                      variant: "heading-lg/semibold",
                      children: j.intl.string(x.default.Eonh9P),
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
                                                      children: j.intl.string(x.default["78avu7"]),
                                                  }),
                                                  (0, r.jsx)(o.u, {
                                                      position: "top",
                                                      text: j.intl.string(x.default.hmt2ra),
                                                      children: (0, r.jsx)(s.idN, {
                                                          className: b.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(s.oil, {
                                              value: l,
                                              onChange: f,
                                              placeholder: j.intl.string(x.default.Kg0Zio),
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
                                                      children: j.intl.string(x.default.iccpNT),
                                                  }),
                                                  (0, r.jsx)(o.u, {
                                                      position: "top",
                                                      text: j.intl.string(x.default.wKyl39),
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
                                              options: N,
                                              optionClassName: b.option,
                                              select: (e) => a(e),
                                              placeholder: j.intl.string(x.default["op6/kZ"]),
                                              renderOptionLabel: (t) =>
                                                  (0, r.jsx)(_, {
                                                      currentGame: e,
                                                      locationString: t.value,
                                                      selected: (null == t ? void 0 : t.value) === n,
                                                  }),
                                              renderOptionValue: (t) => {
                                                  var i, a;
                                                  return (0, r.jsx)(_, {
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
                                                  children: j.intl.string(x.default["3QONen"]),
                                              }),
                                          }),
                                          (0, r.jsx)(s.PhF, {
                                              serialize: (e) => e.toString(),
                                              isSelected: (e) => e === C,
                                              options: S,
                                              optionClassName: b.option,
                                              select: (e) => y(e),
                                              placeholder: j.intl.string(x.default["4QOSPj"]),
                                              renderOptionValue: (n) => {
                                                  var t, i;
                                                  return (0, r.jsx)(h, {
                                                      currentGame: e,
                                                      planId: null == (t = n[0]) ? void 0 : t.value,
                                                      selected: (null == (i = n[0]) ? void 0 : i.value) === C,
                                                      className: b.value,
                                                  });
                                              },
                                              renderOptionLabel: (n) =>
                                                  (0, r.jsx)(h, {
                                                      currentGame: e,
                                                      planId: null == n ? void 0 : n.value,
                                                      selected: (null == n ? void 0 : n.value) === C,
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
                      0 !== O &&
                      (0, r.jsx)(c.Z, {
                          className: b.infoBox,
                          children: (0, r.jsx)(s.Text, {
                              variant: "text-xs/medium",
                              children:
                                  O < 0
                                      ? j.intl.format(x.default.H8rHQU, { boostCount: Math.abs(O) })
                                      : j.intl.format(x.default.h4ZvmJ, { boostCount: O }),
                          }),
                      }),
                  (0, r.jsxs)(m.ok, {
                      step: v.Vb.SERVER_SETTINGS,
                      className: b.footerContainer,
                      children: [(0, r.jsx)(m.VS, {}), (0, r.jsx)(m.oh, { disabled: !P })],
                  }),
              ],
          });
}
