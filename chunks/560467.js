t.d(n, { Z: () => j });
var r = t(951288),
    i = t(647438),
    a = t(120356),
    l = t.n(a),
    o = t(681715),
    s = t(481060),
    c = t(642633),
    d = t(183369),
    u = t(422663),
    m = t(555546),
    g = t(473682),
    p = t(401561),
    v = t(388032),
    f = t(149671);
function b(e) {
    let { currentGame: n, planId: t, selected: a, className: o } = e,
        c = i.useMemo(() => (null == n ? void 0 : n.plans.find((e) => e.id === t)), [null == n ? void 0 : n.plans, t]);
    return null == c
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: l()(f.optionContainer, o),
                      children: [
                          (0, r.jsx)("span", { children: c.name }),
                          (0, r.jsxs)("div", {
                              className: f.labelContainer,
                              children: [
                                  (0, r.jsx)(s.$Eu, {
                                      size: "xs",
                                      color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-xs/medium",
                                      children: v.intl.format(p.default.FrRqub, { boostCount: c.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !a && (0, r.jsx)("div", { className: f.optionSpacer }),
              ],
          });
}
function x(e) {
    let { currentGame: n, locationString: t, selected: a, className: o } = e,
        c = i.useMemo(
            () => (null == n ? void 0 : n.locations.find((e) => e.region === t)),
            [null == n ? void 0 : n.locations, t],
        ),
        { pingText: d, pingCircleStyle: u } = (0, m.i)(null == c ? void 0 : c.pingUrl);
    return null == c
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: l()(f.optionContainer, o),
                      children: [
                          (0, r.jsx)("span", { children: c.region }),
                          (0, r.jsxs)("div", {
                              className: f.labelContainer,
                              children: [
                                  (0, r.jsx)("div", { className: l()(f.pingCircle, u) }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-xs/medium",
                                      children: d,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !a && (0, r.jsx)("div", { className: f.optionSpacer }),
              ],
          });
}
function j() {
    let { currentGame: e, location: n, setLocation: t, name: a, setName: l, planId: m, setPlanId: j } = (0, d.aj)(),
        h = i.useMemo(() => {
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
        _ = i.useMemo(() => {
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
        C = void 0 === a || "" === a || void 0 === n || "" === n || void 0 === m;
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(s.X6q, {
                      className: f.title,
                      variant: "heading-lg/semibold",
                      children: v.intl.string(p.default.Eonh9P),
                  }),
                  (0, r.jsxs)("div", {
                      className: f.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: f.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: f.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: f.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(s.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: v.intl.string(p.default["78avu7"]),
                                                  }),
                                                  (0, r.jsx)(o.u, {
                                                      position: "top",
                                                      text: v.intl.string(p.default.hmt2ra),
                                                      children: (0, r.jsx)(s.idN, {
                                                          className: f.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(s.oil, {
                                              value: a,
                                              onChange: l,
                                              placeholder: v.intl.string(p.default.Kg0Zio),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: f.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: f.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(s.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: v.intl.string(p.default.iccpNT),
                                                  }),
                                                  (0, r.jsx)(o.u, {
                                                      position: "top",
                                                      text: v.intl.string(p.default.wKyl39),
                                                      children: (0, r.jsx)(s.idN, {
                                                          className: f.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(s.PhF, {
                                              serialize: (e) => e.toString(),
                                              isSelected: (e) => e === n,
                                              options: h,
                                              optionClassName: f.option,
                                              select: (e) => t(e),
                                              placeholder: v.intl.string(p.default["op6/kZ"]),
                                              renderOptionLabel: (t) =>
                                                  (0, r.jsx)(x, {
                                                      currentGame: e,
                                                      locationString: t.value,
                                                      selected: (null == t ? void 0 : t.value) === n,
                                                  }),
                                              renderOptionValue: (t) => {
                                                  var i, a;
                                                  return (0, r.jsx)(x, {
                                                      currentGame: e,
                                                      locationString: null == (i = t[0]) ? void 0 : i.value,
                                                      selected: (null == (a = t[0]) ? void 0 : a.value) === n,
                                                      className: f.value,
                                                  });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: f.sectionContainer,
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: f.sectionHeader,
                                              children: (0, r.jsx)(s.X6q, {
                                                  variant: "heading-sm/semibold",
                                                  children: v.intl.string(p.default["3QONen"]),
                                              }),
                                          }),
                                          (0, r.jsx)(s.PhF, {
                                              serialize: (e) => e.toString(),
                                              isSelected: (e) => e === m,
                                              options: _,
                                              optionClassName: f.option,
                                              select: (e) => j(e),
                                              placeholder: v.intl.string(p.default["4QOSPj"]),
                                              renderOptionValue: (n) => {
                                                  var t, i;
                                                  return (0, r.jsx)(b, {
                                                      currentGame: e,
                                                      planId: null == (t = n[0]) ? void 0 : t.value,
                                                      selected: (null == (i = n[0]) ? void 0 : i.value) === m,
                                                      className: f.value,
                                                  });
                                              },
                                              renderOptionLabel: (n) =>
                                                  (0, r.jsx)(b, {
                                                      currentGame: e,
                                                      planId: null == n ? void 0 : n.value,
                                                      selected: (null == n ? void 0 : n.value) === m,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: f.gameDetailsContainer,
                              children: (0, r.jsx)(c.Z, {}),
                          }),
                      ],
                  }),
                  (0, r.jsxs)(u.ok, {
                      step: g.Vb.SERVER_SETTINGS,
                      className: f.footerContainer,
                      children: [(0, r.jsx)(u.VS, {}), (0, r.jsx)(u.oh, { disabled: C })],
                  }),
              ],
          });
}
