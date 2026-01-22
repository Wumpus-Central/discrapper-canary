n.d(t, {
    Ay: () => O,
    H_: () => y,
    Ti: () => g,
}),
    n(896048);
var r,
    l = n(627968),
    i = n(64700),
    o = n(503698),
    a = n.n(o),
    s = n(989349),
    c = n.n(s),
    d = n(156828),
    u = n(397927),
    C = n(282054),
    f = n(652215),
    b = n(985018),
    m = n(309852);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = "MMM Do, YYYY",
    h = c()("2015-05-15").local(),
    x = (0, d.Fe)({
        createPromise: () => Promise.resolve().then(n.bind(n, 939538)),
        webpackId: 939538,
    });
var y =
    (((r = {})[(r.ALL = 0)] = "ALL"),
    (r[(r["1_HOUR"] = 1)] = "1_HOUR"),
    (r[(r["24_HOURS"] = 2)] = "24_HOURS"),
    (r[(r["7_DAYS"] = 3)] = "7_DAYS"),
    (r[(r["2_WEEKS"] = 4)] = "2_WEEKS"),
    (r[(r["4_WEEKS"] = 5)] = "4_WEEKS"),
    (r[(r["3_MONTHS"] = 6)] = "3_MONTHS"),
    (r[(r.CUSTOM = 7)] = "CUSTOM"),
    r);
function O(e) {
    let {
            startDateLabel: t,
            endDateLabel: n,
            afterDate: r,
            beforeDate: o,
            selectedOption: s,
            isCustomDateRange: d,
            menuName: g,
            onClose: y,
            onSelectDateOption: O,
            onToggleCustomDateRange: v,
            onSelectStartDate: H,
            onSelectEndDate: w,
        } = e,
        A = [
            {
                id: 0,
                option: null,
                label: b.intl.string(b.t.jelCib),
            },
            {
                id: 1,
                option: {
                    input: 1,
                    unit: "h",
                },
                label: b.intl.string(b.t["91RDqi"]),
            },
            {
                id: 2,
                option: {
                    input: 24,
                    unit: "h",
                },
                label: b.intl.string(b.t["Lj/1Tq"]),
            },
            {
                id: 3,
                option: {
                    input: 7,
                    unit: "d",
                },
                label: b.intl.string(b.t.NnUMSZ),
            },
            {
                id: 4,
                option: {
                    input: 2,
                    unit: "w",
                },
                label: b.intl.string(b.t.hY3XWH),
            },
            {
                id: 5,
                option: {
                    input: 4,
                    unit: "w",
                },
                label: b.intl.string(b.t.kQTwT0),
            },
            {
                id: 6,
                option: {
                    input: 3,
                    unit: "M",
                },
                label: b.intl.string(b.t.EPuP0s),
            },
        ],
        [D, S] = i.useState(!1),
        _ =
            7 !== s
                ? null
                : null != t && null != n
                  ? "".concat(t, " - ").concat(n)
                  : null != t
                    ? b.intl.formatToPlainString(b.t.ClmSzd, { date: t })
                    : null != n
                      ? b.intl.formatToPlainString(b.t.YvNhsd, { date: n })
                      : null,
        N = i.useCallback(() => {
            S(!0), v();
        }, [v]),
        P = i.useCallback(
            (e) => {
                H(e);
            },
            [H],
        ),
        V = i.useCallback(
            (e) => {
                w(e);
            },
            [w],
        ),
        L = i.useCallback(() => {
            null == o && null == r && O(0, null), S(!1);
        }, [r, o, O]);
    return (0, l.jsx)(u.W1t, {
        navId: "member-safety-guild-member-".concat(g, "-menu"),
        onClose: y,
        "aria-label": b.intl.string(b.t.k9m8Rg),
        onSelect: f.tEg,
        children: (0, l.jsx)(u.rXV, {
            children: D
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.Drp, {
                              id: "back",
                              action: L,
                              render: (e) =>
                                  (0, l.jsxs)(
                                      "span",
                                      j(p({}, e), {
                                          className: m.W6,
                                          children: [
                                              (0, l.jsx)(u.n2b, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: 16,
                                                  height: 16,
                                              }),
                                              (0, l.jsx)(u.Text, {
                                                  variant: "eyebrow",
                                                  color: "text-strong",
                                                  children: b.intl.string(b.t.BTfN6g),
                                              }),
                                          ],
                                      }),
                                  ),
                          }),
                          (0, l.jsx)(u.Drp, {
                              id: "after-date-menu-item",
                              label: b.intl.string(b.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: m.aD,
                              children: (0, l.jsx)(u.Drp, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, l.jsx)(
                                          x,
                                          j(p({}, e), {
                                              calendarClassName: m.BJ,
                                              value: d && null != r ? c()(r) : void 0,
                                              onSelect: P,
                                              maxDate: c()().local(),
                                              minDate: h,
                                          }),
                                      ),
                              }),
                          }),
                          (0, l.jsx)(u.Drp, {
                              id: "before-date-menu-item",
                              label: b.intl.string(b.t.jF54hQ),
                              subtext: n,
                              subMenuClassName: m.aD,
                              children: (0, l.jsx)(u.Drp, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, l.jsx)(
                                          x,
                                          j(p({}, e), {
                                              calendarClassName: m.BJ,
                                              value: d && null != o ? c()(o) : void 0,
                                              onSelect: V,
                                              maxDate: c()().local(),
                                              minDate: d && null != r ? c()(r) : h,
                                          }),
                                      ),
                              }),
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          A.map((e) => {
                              let { id: t, option: n, label: r } = e;
                              return (0, l.jsx)(
                                  u.iDA,
                                  {
                                      group: "member-safety-guild-member-".concat(g, "-menu"),
                                      id: "guild-member-".concat(g, "-option-").concat(t),
                                      label: r,
                                      action: () => O(t, n),
                                      checked: t === s,
                                  },
                                  "option-".concat(t),
                              );
                          }),
                          (0, l.jsx)(u.bXX, {}),
                          (0, l.jsx)(u.Drp, {
                              id: "guild-member-".concat(g, "-custom-option}"),
                              action: N,
                              render: (e) =>
                                  (0, l.jsxs)("div", {
                                      className: a()(m.Dh, { [m.in]: e.isFocused }),
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: m.jA,
                                              children: [
                                                  (0, l.jsx)(u.Text, {
                                                      className: a()(m.ty, { [m.in]: e.isFocused }),
                                                      variant: "text-sm/medium",
                                                      children: b.intl.string(b.t.BTfN6g),
                                                  }),
                                                  null != _ &&
                                                      (0, l.jsx)(u.Text, {
                                                          className: a()(m.ty, { [m.in]: e.isFocused }),
                                                          color: "text-muted",
                                                          variant: "text-xxs/medium",
                                                          children: _,
                                                      }),
                                              ],
                                          }),
                                          7 === s
                                              ? (0, l.jsx)(C.A, {
                                                    foreground: m.QE,
                                                    width: 18,
                                                    height: 18,
                                                })
                                              : (0, l.jsx)(u._BQ, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: a()(m.ty, { [m.in]: e.isFocused }),
                                                }),
                                      ],
                                  }),
                          }),
                      ],
                  }),
        }),
    });
}
