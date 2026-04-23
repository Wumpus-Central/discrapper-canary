l.d(t, { Ay: () => v, H_: () => A, Ti: () => f });
var n,
    i = l(627968),
    a = l(64700),
    s = l(503698),
    C = l.n(s),
    r = l(989349),
    o = l.n(r),
    d = l(156828),
    c = l(861672),
    u = l(477782),
    m = l(834730),
    h = l(320448),
    x = l(921853),
    g = l(282054),
    H = l(652215),
    _ = l(985018),
    p = l(550551);
let f = "MMM Do, YYYY",
    j = o()("2015-05-15").local(),
    b = (0, d.Fe)({
        createPromise: () => Promise.all([l.e("68883"), l.e("61156")]).then(l.bind(l, 939538)),
        webpackId: 939538,
    });
var A =
    (((n = {})[(n.ALL = 0)] = "ALL"),
    (n[(n["1_HOUR"] = 1)] = "1_HOUR"),
    (n[(n["24_HOURS"] = 2)] = "24_HOURS"),
    (n[(n["7_DAYS"] = 3)] = "7_DAYS"),
    (n[(n["2_WEEKS"] = 4)] = "2_WEEKS"),
    (n[(n["4_WEEKS"] = 5)] = "4_WEEKS"),
    (n[(n["3_MONTHS"] = 6)] = "3_MONTHS"),
    (n[(n.CUSTOM = 7)] = "CUSTOM"),
    n);
function v(e) {
    let {
            startDateLabel: t,
            endDateLabel: l,
            afterDate: n,
            beforeDate: s,
            selectedOption: r,
            isCustomDateRange: d,
            menuName: f,
            onClose: A,
            onSelectDateOption: v,
            onToggleCustomDateRange: V,
            onSelectStartDate: L,
            onSelectEndDate: D,
        } = e,
        R = [
            { id: 0, option: null, label: _.intl.string(_.t.jelCib) },
            { id: 1, option: { input: 1, unit: "h" }, label: _.intl.string(_.t["91RDqi"]) },
            { id: 2, option: { input: 24, unit: "h" }, label: _.intl.string(_.t["Lj/1Tq"]) },
            { id: 3, option: { input: 7, unit: "d" }, label: _.intl.string(_.t.NnUMSZ) },
            { id: 4, option: { input: 2, unit: "w" }, label: _.intl.string(_.t.hY3XWH) },
            { id: 5, option: { input: 4, unit: "w" }, label: _.intl.string(_.t.kQTwT0) },
            { id: 6, option: { input: 3, unit: "M" }, label: _.intl.string(_.t.EPuP0s) },
        ],
        [M, E] = a.useState(!1),
        N =
            7 !== r
                ? null
                : null != t && null != l
                  ? `${t} - ${l}`
                  : null != t
                    ? _.intl.formatToPlainString(_.t.ClmSzd, { date: t })
                    : null != l
                      ? _.intl.formatToPlainString(_.t.YvNhsd, { date: l })
                      : null,
        I = a.useCallback(() => {
            E(!0), V();
        }, [V]),
        S = a.useCallback(
            (e) => {
                L(e);
            },
            [L],
        ),
        y = a.useCallback(
            (e) => {
                D(e);
            },
            [D],
        ),
        Z = a.useCallback(() => {
            null == s && null == n && v(0, null), E(!1);
        }, [n, s, v]);
    return (0, i.jsx)(c.W, {
        "data-menu-needs-migration": !0,
        navId: `member-safety-guild-member-${f}-menu`,
        onClose: A,
        "aria-label": _.intl.string(_.t.k9m8Rg),
        onSelect: H.tEg,
        children: (0, i.jsx)(u.rX, {
            children: M
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.Dr, {
                              id: "back",
                              action: Z,
                              render: (e) =>
                                  (0, i.jsxs)("span", {
                                      ...e,
                                      className: p.W6,
                                      children: [
                                          (0, i.jsx)(x.n, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 16,
                                              height: 16,
                                          }),
                                          (0, i.jsx)(m.E, {
                                              variant: "eyebrow",
                                              color: "text-strong",
                                              children: _.intl.string(_.t.BTfN6g),
                                          }),
                                      ],
                                  }),
                          }),
                          (0, i.jsx)(u.Dr, {
                              id: "after-date-menu-item",
                              label: _.intl.string(_.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: p.aD,
                              children: (0, i.jsx)(u.Dr, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(b, {
                                          ...e,
                                          calendarClassName: p.BJ,
                                          value: d && null != n ? o()(n) : void 0,
                                          onSelect: S,
                                          maxDate: o()().local(),
                                          minDate: j,
                                      }),
                              }),
                          }),
                          (0, i.jsx)(u.Dr, {
                              id: "before-date-menu-item",
                              label: _.intl.string(_.t.jF54hQ),
                              subtext: l,
                              subMenuClassName: p.aD,
                              children: (0, i.jsx)(u.Dr, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, i.jsx)(b, {
                                          ...e,
                                          calendarClassName: p.BJ,
                                          value: d && null != s ? o()(s) : void 0,
                                          onSelect: y,
                                          maxDate: o()().local(),
                                          minDate: d && null != n ? o()(n) : j,
                                      }),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          R.map((e) => {
                              let { id: t, option: l, label: n } = e;
                              return (0, i.jsx)(
                                  u.iD,
                                  {
                                      group: `member-safety-guild-member-${f}-menu`,
                                      id: `guild-member-${f}-option-${t}`,
                                      label: n,
                                      action: () => v(t, l),
                                      checked: t === r,
                                  },
                                  `option-${t}`,
                              );
                          }),
                          (0, i.jsx)(u.bX, {}),
                          (0, i.jsx)(u.Dr, {
                              id: `guild-member-${f}-custom-option}`,
                              action: I,
                              render: (e) =>
                                  (0, i.jsxs)("div", {
                                      className: C()(p.Dh, { [p.in]: e.isFocused }),
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: p.jA,
                                              children: [
                                                  (0, i.jsx)(m.E, {
                                                      className: C()(p.ty, { [p.in]: e.isFocused }),
                                                      variant: "text-sm/medium",
                                                      children: _.intl.string(_.t.BTfN6g),
                                                  }),
                                                  null != N &&
                                                      (0, i.jsx)(m.E, {
                                                          className: C()(p.ty, { [p.in]: e.isFocused }),
                                                          color: "text-muted",
                                                          variant: "text-xxs/medium",
                                                          children: N,
                                                      }),
                                              ],
                                          }),
                                          7 === r
                                              ? (0, i.jsx)(g.A, { foreground: p.QE, width: 18, height: 18 })
                                              : (0, i.jsx)(h._, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: C()(p.ty, { [p.in]: e.isFocused }),
                                                }),
                                      ],
                                  }),
                          }),
                      ],
                  }),
        }),
    });
}
