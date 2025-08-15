n.d(t, { z: () => x }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(913527),
    o = n.n(a),
    c = n(692547),
    u = n(481060),
    d = n(894017),
    m = n(854698),
    p = n(849464),
    v = n(765305),
    f = n(388032),
    g = n(646615);
function b() {
    return (0, r.jsx)(u.IGR, {
        className: g.newBadge,
        color: c.Z.unsafe_rawColors.BRAND_260.css,
        text: (0, r.jsx)(u.Text, {
            className: g.newBadgeText,
            variant: "text-xs/bold",
            children: f.intl.string(f.t.y2b7CA),
        }),
    });
}
function j(e) {
    let { children: t, className: n, tooltipText: l } = e;
    return (0, r.jsx)("div", {
        className: s()(g.eventStatusContainer, n),
        children: (0, r.jsx)(u.ua7, {
            position: "right",
            text: l,
            shouldShow: null != l,
            children: (e) => {
                var l, i;
                return (0, r.jsx)(
                    "div",
                    ((l = (function (e) {
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
                    })({}, e)),
                    (i = i =
                        {
                            className: s()(g.eventStatusContainer, n),
                            children: t,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    l),
                );
            },
        }),
    });
}
function x(e) {
    let {
            startTime: t,
            status: n,
            eventType: i,
            className: a,
            endTime: x,
            liveText: h,
            textVariant: N = "text-sm/semibold",
            isNew: O,
            recurrenceRule: y,
            guildEventId: E,
            recurrenceId: P,
        } = e,
        I = (0, u.dQu)(c.Z.colors.TEXT_BRAND).hex(),
        S = (0, u.dQu)(c.Z.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        C = (0, u.dQu)(c.Z.colors.TEXT_DANGER).hex();
    null == h && (h = i === v.WX.EXTERNAL ? f.intl.string(f.t.IyZxjI) : f.intl.string(f.t["X2K3//"]));
    let w = (0, d.Z)(P, E),
        [{ startDateTimeString: T, endDateTimeString: Z, currentOrPastEvent: k, upcomingEvent: D, diffMinutes: z }, L] =
            l.useState((0, m.ub)(t, x));
    l.useEffect(() => {
        L((0, m.ub)(t, x));
        let e = setInterval(() => L((0, m.ub)(t, x)), 1000);
        return () => {
            clearInterval(e);
        };
    }, [t, x]);
    let R = T;
    null != Z &&
        "" !== Z &&
        (R = f.intl.formatToPlainString(f.t.tXbu7O, {
            start: T,
            end: Z,
        }));
    let _ = l.useMemo(
            () =>
                n === v.p1.CANCELED || (null == w ? void 0 : w.is_canceled)
                    ? 5
                    : n === v.p1.ACTIVE
                      ? 3
                      : v.$I.has(n)
                        ? 4
                        : k
                          ? 2
                          : +!!D,
            [n, null == w ? void 0 : w.is_canceled, k, D],
        ),
        A = (function (e, t, n, l, i) {
            switch (e) {
                case 1:
                    return i > 0 ? f.intl.formatToPlainString(f.t.PQlCWl, { minutes: i }) : f.intl.string(f.t.WINqKS);
                case 2:
                    return f.intl.string(f.t.WINqKS);
                case 3:
                    return null != l && "" !== l
                        ? f.intl.format(f.t.vHYgJS, {
                              start: n,
                              startHook: (e) =>
                                  (0, r.jsx)(u.Text, {
                                      color: "text-feedback-positive",
                                      variant: "text-sm/semibold",
                                      className: g.liveEventEndTime,
                                      children: e,
                                  }),
                              end: l,
                          })
                        : null != n
                          ? n
                          : "";
                default:
                    return t;
            }
        })(_, R, h, Z, z),
        {
            Icon: B,
            iconColor: X,
            textColor: M,
            tooltipText: G,
        } = l.useMemo(
            () =>
                (function (e) {
                    let t,
                        {
                            timeStatus: n,
                            textBrand: r,
                            textPositive: l,
                            textDanger: i,
                            endDateTimeString: s,
                            startDateTimeString: a,
                        } = e,
                        o = u.Que,
                        c = r,
                        d = "header-secondary";
                    switch (n) {
                        case 3:
                            (c = l), (d = null != s ? void 0 : "text-feedback-positive");
                            break;
                        case 4:
                            o = u.T39;
                            break;
                        case 2:
                        case 1:
                            (d = "text-brand"), (t = a);
                            break;
                        case 5:
                            c = i;
                    }
                    return {
                        Icon: o,
                        iconColor: c,
                        textColor: d,
                        tooltipText: t,
                    };
                })({
                    timeStatus: _,
                    textBrand: I,
                    textPositive: S,
                    textDanger: C,
                    endDateTimeString: Z,
                    startDateTimeString: T,
                }),
            [_, I, S, C, Z, T],
        ),
        K = null;
    if (null != y) {
        let e = (0, m.Ho)(y);
        K = f.intl.formatToPlainString(f.t.HmKEqa, { recurrenceRule: e.toText() });
        let n = o()(t);
        K = (function (e, t) {
            let n = t.toDate(),
                r = n.toLocaleString(f.intl.currentLocale, { weekday: "long" });
            switch (e) {
                case p.z.WEEKLY:
                    return f.intl.formatToPlainString(f.t.xQM9X1, { weekday: r });
                case p.z.BIWEEKLY:
                    return f.intl.formatToPlainString(f.t.RYscaW, { weekday: r });
                case p.z.MONTHLY:
                    let l = Math.ceil(n.getDate() / 7);
                    return f.intl.formatToPlainString(f.t["4ZN9Ag"], {
                        weekday: r,
                        nth: l,
                    });
                case p.z.YEARLY:
                    return f.intl.formatToPlainString(f.t["rXUS+v"], {
                        date: n.toLocaleString(f.intl.currentLocale, {
                            month: "short",
                            day: "2-digit",
                        }),
                    });
                case p.z.WEEKDAY_ONLY:
                    return f.intl.string(f.t["2BX6bG"]);
                case p.z.WEEKEND_ONLY:
                    return f.intl.string(f.t["IEi+R0"]);
                default:
                    return null;
            }
        })((0, m.zi)(n, y), n);
    }
    return (0, r.jsxs)(j, {
        className: s()(a, { [g.isRecurring]: null != K }),
        tooltipText: G,
        children: [
            O && n === v.p1.SCHEDULED
                ? (0, r.jsx)(b, {})
                : (0, r.jsx)(B, {
                      color: X,
                      size: "custom",
                      width: 20,
                      height: 20,
                  }),
            (0, r.jsxs)("div", {
                className: g.eventStatusLabel,
                children: [
                    (0, r.jsx)(u.Text, {
                        color: M,
                        variant: N,
                        children: A,
                    }),
                    null != K &&
                        (0, r.jsx)(u.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: K,
                        }),
                ],
            }),
        ],
    });
}
