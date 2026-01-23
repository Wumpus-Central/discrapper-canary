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
    u = n(156828),
    d = n(397927),
    C = n(282054),
    m = n(652215),
    p = n(985018),
    b = n(309852);

function f(e) {
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
    x = (0, u.Fe)({
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
            isCustomDateRange: u,
            menuName: g,
            onClose: y,
            onSelectDateOption: O,
            onToggleCustomDateRange: v,
            onSelectStartDate: _,
            onSelectEndDate: H,
        } = e,
        w = [
            {
                id: 0,
                option: null,
                label: p.intl.string(p.t.jelCib),
            },
            {
                id: 1,
                option: {
                    input: 1,
                    unit: "h",
                },
                label: p.intl.string(p.t["91RDqi"]),
            },
            {
                id: 2,
                option: {
                    input: 24,
                    unit: "h",
                },
                label: p.intl.string(p.t["Lj/1Tq"]),
            },
            {
                id: 3,
                option: {
                    input: 7,
                    unit: "d",
                },
                label: p.intl.string(p.t.NnUMSZ),
            },
            {
                id: 4,
                option: {
                    input: 2,
                    unit: "w",
                },
                label: p.intl.string(p.t.hY3XWH),
            },
            {
                id: 5,
                option: {
                    input: 4,
                    unit: "w",
                },
                label: p.intl.string(p.t.kQTwT0),
            },
            {
                id: 6,
                option: {
                    input: 3,
                    unit: "M",
                },
                label: p.intl.string(p.t.EPuP0s),
            },
        ],
        [A, S] = i.useState(!1),
        D =
            7 !== s
                ? null
                : null != t && null != n
                  ? "".concat(t, " - ").concat(n)
                  : null != t
                    ? p.intl.formatToPlainString(p.t.ClmSzd, {
                          date: t,
                      })
                    : null != n
                      ? p.intl.formatToPlainString(p.t.YvNhsd, {
                            date: n,
                        })
                      : null,
        N = i.useCallback(() => {
            S(!0), v();
        }, [v]),
        L = i.useCallback(
            (e) => {
                _(e);
            },
            [_],
        ),
        P = i.useCallback(
            (e) => {
                H(e);
            },
            [H],
        ),
        R = i.useCallback(() => {
            null == o && null == r && O(0, null), S(!1);
        }, [r, o, O]);
    return (0, l.jsx)(d.W1t, {
        "data-menu-migration-ready": !0,
        navId: "member-safety-guild-member-".concat(g, "-menu"),
        onClose: y,
        "aria-label": p.intl.string(p.t.k9m8Rg),
        onSelect: m.tEg,
        children: (0, l.jsx)(d.rXV, {
            children: A
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.Drp, {
                              id: "back",
                              action: R,
                              render: (e) =>
                                  (0, l.jsxs)(
                                      "span",
                                      j(f({}, e), {
                                          className: b.W6,
                                          children: [
                                              (0, l.jsx)(d.n2b, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: 16,
                                                  height: 16,
                                              }),
                                              (0, l.jsx)(d.Text, {
                                                  variant: "eyebrow",
                                                  color: "text-strong",
                                                  children: p.intl.string(p.t.BTfN6g),
                                              }),
                                          ],
                                      }),
                                  ),
                          }),
                          (0, l.jsx)(d.Drp, {
                              id: "after-date-menu-item",
                              label: p.intl.string(p.t.RDqVOD),
                              subtext: t,
                              subMenuClassName: b.aD,
                              children: (0, l.jsx)(d.Drp, {
                                  id: "after-date-picker",
                                  render: (e) =>
                                      (0, l.jsx)(
                                          x,
                                          j(f({}, e), {
                                              calendarClassName: b.BJ,
                                              value: u && null != r ? c()(r) : void 0,
                                              onSelect: L,
                                              maxDate: c()().local(),
                                              minDate: h,
                                          }),
                                      ),
                              }),
                          }),
                          (0, l.jsx)(d.Drp, {
                              id: "before-date-menu-item",
                              label: p.intl.string(p.t.jF54hQ),
                              subtext: n,
                              subMenuClassName: b.aD,
                              children: (0, l.jsx)(d.Drp, {
                                  id: "before-date-picker",
                                  render: (e) =>
                                      (0, l.jsx)(
                                          x,
                                          j(f({}, e), {
                                              calendarClassName: b.BJ,
                                              value: u && null != o ? c()(o) : void 0,
                                              onSelect: P,
                                              maxDate: c()().local(),
                                              minDate: u && null != r ? c()(r) : h,
                                          }),
                                      ),
                              }),
                          }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          w.map((e) => {
                              let { id: t, option: n, label: r } = e;
                              return (0, l.jsx)(
                                  d.iDA,
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
                          (0, l.jsx)(d.bXX, {}),
                          (0, l.jsx)(d.Drp, {
                              id: "guild-member-".concat(g, "-custom-option}"),
                              action: N,
                              render: (e) =>
                                  (0, l.jsxs)("div", {
                                      className: a()(b.Dh, {
                                          [b.in]: e.isFocused,
                                      }),
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: b.jA,
                                              children: [
                                                  (0, l.jsx)(d.Text, {
                                                      className: a()(b.ty, {
                                                          [b.in]: e.isFocused,
                                                      }),
                                                      variant: "text-sm/medium",
                                                      children: p.intl.string(p.t.BTfN6g),
                                                  }),
                                                  null != D &&
                                                      (0, l.jsx)(d.Text, {
                                                          className: a()(b.ty, {
                                                              [b.in]: e.isFocused,
                                                          }),
                                                          color: "text-muted",
                                                          variant: "text-xxs/medium",
                                                          children: D,
                                                      }),
                                              ],
                                          }),
                                          7 === s
                                              ? (0, l.jsx)(C.A, {
                                                    foreground: b.QE,
                                                    width: 18,
                                                    height: 18,
                                                })
                                              : (0, l.jsx)(d._BQ, {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 16,
                                                    height: 16,
                                                    className: a()(b.ty, {
                                                        [b.in]: e.isFocused,
                                                    }),
                                                }),
                                      ],
                                  }),
                          }),
                      ],
                  }),
        }),
    });
}
