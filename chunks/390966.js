(n.d(t, { z: () => j }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    c = n.n(s),
    o = n(692547),
    u = n(481060),
    d = n(894017),
    p = n(854698),
    m = n(849464),
    f = n(765305),
    v = n(388032),
    g = n(923167);
function b() {
    return (0, r.jsx)(u.IGR, {
        className: g.newBadge,
        color: o.Z.unsafe_rawColors.BRAND_260.css,
        text: (0, r.jsx)(u.Text, {
            className: g.newBadgeText,
            variant: 'text-xs/bold',
            children: v.intl.string(v.t.y2b7CA)
        })
    });
}
function h(e) {
    let { children: t, className: n, tooltipText: l } = e;
    return (0, r.jsx)('div', {
        className: a()(g.eventStatusContainer, n),
        children: (0, r.jsx)(u.ua7, {
            position: 'right',
            text: l,
            shouldShow: null != l,
            children: (e) => {
                var l, i;
                return (0, r.jsx)(
                    'div',
                    ((l = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (i = i =
                        {
                            className: a()(g.eventStatusContainer, n),
                            children: t
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
                    l)
                );
            }
        })
    });
}
function j(e) {
    let { startTime: t, status: n, eventType: i, className: s, endTime: j, liveText: O, textVariant: y = 'text-sm/semibold', isNew: x, recurrenceRule: N, guildEventId: E, recurrenceId: w } = e,
        P = (0, u.dQu)(o.Z.colors.TEXT_BRAND).hex(),
        S = (0, u.dQu)(o.Z.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        I = (0, u.dQu)(o.Z.colors.TEXT_DANGER).hex();
    null == O && (O = i === f.WX.EXTERNAL ? v.intl.string(v.t.IyZxjI) : v.intl.string(v.t['X2K3//']));
    let C = (0, d.Z)(w, E),
        [{ startDateTimeString: T, endDateTimeString: D, currentOrPastEvent: Z, upcomingEvent: k, diffMinutes: R }, B] = l.useState((0, p.ub)(t, j));
    l.useEffect(() => {
        B((0, p.ub)(t, j));
        let e = setInterval(() => B((0, p.ub)(t, j)), 1000);
        return () => {
            clearInterval(e);
        };
    }, [t, j]);
    let _ = T;
    null != D &&
        '' !== D &&
        (_ = v.intl.formatToPlainString(v.t.tXbu7O, {
            start: T,
            end: D
        }));
    let L = l.useMemo(() => (n === f.p1.CANCELED || (null == C ? void 0 : C.is_canceled) ? 5 : n === f.p1.ACTIVE ? 3 : f.$I.has(n) ? 4 : Z ? 2 : +!!k), [n, null == C ? void 0 : C.is_canceled, Z, k]),
        z = (function (e, t, n, l, i) {
            switch (e) {
                case 1:
                    return i > 0 ? v.intl.formatToPlainString(v.t.PQlCWl, { minutes: i }) : v.intl.string(v.t.WINqKS);
                case 2:
                    return v.intl.string(v.t.WINqKS);
                case 3:
                    return null != l && '' !== l
                        ? v.intl.format(v.t.vHYgJS, {
                              start: n,
                              startHook: (e) =>
                                  (0, r.jsx)(u.Text, {
                                      color: 'text-feedback-positive',
                                      variant: 'text-sm/semibold',
                                      className: g.liveEventEndTime,
                                      children: e
                                  }),
                              end: l
                          })
                        : null != n
                          ? n
                          : '';
                default:
                    return t;
            }
        })(L, _, O, D, R),
        {
            Icon: A,
            iconColor: K,
            textColor: X,
            tooltipText: G
        } = l.useMemo(
            () =>
                (function (e) {
                    let t,
                        { timeStatus: n, textBrand: r, textPositive: l, textDanger: i, endDateTimeString: a, startDateTimeString: s } = e,
                        c = u.Que,
                        o = r,
                        d = 'header-secondary';
                    switch (n) {
                        case 3:
                            ((o = l), (d = null != a ? void 0 : 'text-feedback-positive'));
                            break;
                        case 4:
                            c = u.T39;
                            break;
                        case 2:
                        case 1:
                            ((d = 'text-brand'), (t = s));
                            break;
                        case 5:
                            o = i;
                    }
                    return {
                        Icon: c,
                        iconColor: o,
                        textColor: d,
                        tooltipText: t
                    };
                })({
                    timeStatus: L,
                    textBrand: P,
                    textPositive: S,
                    textDanger: I,
                    endDateTimeString: D,
                    startDateTimeString: T
                }),
            [L, P, S, I, D, T]
        ),
        W = null;
    if (null != N) {
        let e = (0, p.Ho)(N);
        W = v.intl.formatToPlainString(v.t.HmKEqa, { recurrenceRule: e.toText() });
        let n = c()(t);
        W = (function (e, t) {
            let n = t.toDate(),
                r = n.toLocaleString(v.intl.currentLocale, { weekday: 'long' });
            switch (e) {
                case m.z.WEEKLY:
                    return v.intl.formatToPlainString(v.t.xQM9X1, { weekday: r });
                case m.z.BIWEEKLY:
                    return v.intl.formatToPlainString(v.t.RYscaW, { weekday: r });
                case m.z.MONTHLY:
                    let l = Math.ceil(n.getDate() / 7);
                    return v.intl.formatToPlainString(v.t['4ZN9Ag'], {
                        weekday: r,
                        nth: l
                    });
                case m.z.YEARLY:
                    return v.intl.formatToPlainString(v.t['rXUS+v'], {
                        date: n.toLocaleString(v.intl.currentLocale, {
                            month: 'short',
                            day: '2-digit'
                        })
                    });
                case m.z.WEEKDAY_ONLY:
                    return v.intl.string(v.t['2BX6bG']);
                case m.z.WEEKEND_ONLY:
                    return v.intl.string(v.t['IEi+R0']);
                default:
                    return null;
            }
        })((0, p.zi)(n, N), n);
    }
    return (0, r.jsxs)(h, {
        className: a()(s, { [g.isRecurring]: null != W }),
        tooltipText: G,
        children: [
            x && n === f.p1.SCHEDULED
                ? (0, r.jsx)(b, {})
                : (0, r.jsx)(A, {
                      color: K,
                      size: 'custom',
                      width: 20,
                      height: 20
                  }),
            (0, r.jsxs)('div', {
                className: g.eventStatusLabel,
                children: [
                    (0, r.jsx)(u.Text, {
                        color: X,
                        variant: y,
                        children: z
                    }),
                    null != W &&
                        (0, r.jsx)(u.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: W
                        })
                ]
            })
        ]
    });
}
