t.d(n, { Z: () => j });
var a = t(951288),
    i = t(647438),
    r = t(120356),
    l = t.n(r),
    s = t(681715),
    o = t(481060),
    c = t(642633),
    d = t(183369),
    u = t(422663),
    m = t(473682),
    p = t(401561),
    x = t(388032),
    g = t(149671);
function v(e) {
    let { plan: n, selected: t, className: i } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: l()(g.planOptionContainer, i),
                children: [
                    (0, a.jsx)("span", { children: n.name }),
                    (0, a.jsxs)("div", {
                        className: g.planCostContainer,
                        children: [
                            (0, a.jsx)(o.$Eu, {
                                size: "xs",
                                color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                children: x.intl.format(p.default.FrRqub, { boostCount: n.cost }),
                            }),
                        ],
                    }),
                ],
            }),
            !t && (0, a.jsx)("div", { className: g.planOptionSpacer }),
        ],
    });
}
function j() {
    let { currentGame: e, location: n, setLocation: t, name: r, setName: l, planId: j, setPlanId: b } = (0, d.aj)(),
        f = i.useMemo(() => {
            var n;
            return null !=
                (n =
                    null == e
                        ? void 0
                        : e.locations.map((e) => ({
                              value: e,
                              label: e,
                          })))
                ? n
                : [];
        }, [e]),
        h = i.useMemo(() => {
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
        _ = void 0 === r || "" === r || void 0 === n || "" === n || void 0 === j;
    return null == e
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(o.X6q, {
                      className: g.title,
                      variant: "heading-lg/semibold",
                      children: x.intl.string(p.default.Eonh9P),
                  }),
                  (0, a.jsxs)("div", {
                      className: g.contentContainer,
                      children: [
                          (0, a.jsxs)("div", {
                              className: g.settingsContainer,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: g.sectionContainer,
                                      children: [
                                          (0, a.jsxs)("div", {
                                              className: g.sectionHeader,
                                              children: [
                                                  (0, a.jsx)(o.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: x.intl.string(p.default["78avu7"]),
                                                  }),
                                                  (0, a.jsx)(s.u, {
                                                      position: "top",
                                                      text: x.intl.string(p.default.hmt2ra),
                                                      children: (0, a.jsx)(o.idN, {
                                                          className: g.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, a.jsx)(o.oil, {
                                              value: r,
                                              onChange: l,
                                              placeholder: x.intl.string(p.default.Kg0Zio),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: g.sectionContainer,
                                      children: [
                                          (0, a.jsxs)("div", {
                                              className: g.sectionHeader,
                                              children: [
                                                  (0, a.jsx)(o.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      children: x.intl.string(p.default.iccpNT),
                                                  }),
                                                  (0, a.jsx)(s.u, {
                                                      position: "top",
                                                      text: x.intl.string(p.default.wKyl39),
                                                      children: (0, a.jsx)(o.idN, {
                                                          className: g.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, a.jsx)(o.PhF, {
                                              serialize: (e) => e.toString(),
                                              isSelected: (e) => e === n,
                                              options: f,
                                              select: (e) => t(e),
                                              placeholder: x.intl.string(p.default["op6/kZ"]),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: g.sectionContainer,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: g.sectionHeader,
                                              children: (0, a.jsx)(o.X6q, {
                                                  variant: "heading-sm/semibold",
                                                  children: x.intl.string(p.default["3QONen"]),
                                              }),
                                          }),
                                          (0, a.jsx)(o.PhF, {
                                              serialize: (e) => e.toString(),
                                              isSelected: (e) => e === j,
                                              options: h,
                                              optionClassName: g.planOption,
                                              select: (e) => b(e),
                                              placeholder: x.intl.string(p.default["4QOSPj"]),
                                              renderOptionValue: (n) => {
                                                  let t =
                                                      null == e
                                                          ? void 0
                                                          : e.plans.find((e) => {
                                                                var t;
                                                                return e.id === (null == (t = n[0]) ? void 0 : t.value);
                                                            });
                                                  return null == t
                                                      ? null
                                                      : (0, a.jsx)(v, {
                                                            plan: t,
                                                            selected: !0,
                                                            className: g.planValue,
                                                        });
                                              },
                                              renderOptionLabel: (n) => {
                                                  let t =
                                                      null == e
                                                          ? void 0
                                                          : e.plans.find(
                                                                (e) => e.id === (null == n ? void 0 : n.value),
                                                            );
                                                  return null == t
                                                      ? null
                                                      : (0, a.jsx)(v, {
                                                            plan: t,
                                                            selected: t.id === j,
                                                        });
                                              },
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: g.gameDetailsContainer,
                              children: (0, a.jsx)(c.Z, {}),
                          }),
                      ],
                  }),
                  (0, a.jsxs)(u.ok, {
                      step: m.Vb.SERVER_SETTINGS,
                      className: g.footerContainer,
                      children: [(0, a.jsx)(u.VS, {}), (0, a.jsx)(u.oh, { disabled: _ })],
                  }),
              ],
          });
}
