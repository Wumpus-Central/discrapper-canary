n.d(t, { z: () => N }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    c = n(913527),
    s = n.n(c),
    o = n(692547),
    u = n(481060),
    d = n(44315),
    f = n(894017),
    b = n(854698),
    m = n(849464),
    p = n(765305),
    g = n(231338),
    v = n(388032),
    O = n(923167);
function j() {
    return (0, r.jsx)(u.IGR, {
        className: O.newBadge,
        color: o.Z.unsafe_rawColors.BRAND_260.css,
        text: (0, r.jsx)(u.Text, {
            className: O.newBadgeText,
            variant: 'text-xs/bold',
            children: v.NW.string(v.t.y2b7CA)
        })
    });
}
function h(e) {
    let { children: t, className: n, tooltipText: l } = e;
    return (0, r.jsx)('div', {
        className: i()(O.eventStatusContainer, n),
        children: (0, r.jsx)(u.ua7, {
            position: 'right',
            text: l,
            shouldShow: null != l,
            children: (e) => {
                var l, a;
                return (0, r.jsx)(
                    'div',
                    ((l = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (a = a =
                        {
                            className: i()(O.eventStatusContainer, n),
                            children: t
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    l)
                );
            }
        })
    });
}
function N(e) {
    let { startTime: t, status: n, eventType: a, className: c, endTime: o, liveText: N, textVariant: y = 'text-sm/semibold', isNew: x, recurrenceRule: P, guildEventId: w, recurrenceId: E } = e,
        S = (0, d.O0)(g.tP.TEXT_BRAND),
        T = (0, d.O0)(g.tP.TEXT_POSITIVE),
        D = (0, d.O0)(g.tP.TEXT_DANGER);
    null == N && (N = a === p.WX.EXTERNAL ? v.NW.string(v.t.IyZxjI) : v.NW.string(v.t['X2K3//']));
    let W = (0, f.Z)(E, w),
        [{ startDateTimeString: Z, endDateTimeString: I, currentOrPastEvent: _, upcomingEvent: C, diffMinutes: L }, k] = l.useState((0, b.ub)(t, o));
    l.useEffect(() => {
        k((0, b.ub)(t, o));
        let e = setInterval(() => k((0, b.ub)(t, o)), 1000);
        return () => {
            clearInterval(e);
        };
    }, [t, o]);
    let A = Z;
    null != I &&
        '' !== I &&
        (A = v.NW.formatToPlainString(v.t.tXbu7O, {
            start: Z,
            end: I
        }));
    let R = l.useMemo(() => (n === p.p1.CANCELED || (null == W ? void 0 : W.is_canceled) ? 5 : n === p.p1.ACTIVE ? 3 : p.$I.has(n) ? 4 : _ ? 2 : +!!C), [n, null == W ? void 0 : W.is_canceled, _, C]),
        z = (function (e, t, n, l, a) {
            switch (e) {
                case 1:
                    return a > 0 ? v.NW.formatToPlainString(v.t.PQlCWl, { minutes: a }) : v.NW.string(v.t.WINqKS);
                case 2:
                    return v.NW.string(v.t.WINqKS);
                case 3:
                    return null != l && '' !== l
                        ? v.NW.format(v.t.vHYgJS, {
                              start: n,
                              startHook: (e) =>
                                  (0, r.jsx)(u.Text, {
                                      color: 'text-positive',
                                      variant: 'text-sm/semibold',
                                      className: O.liveEventEndTime,
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
        })(R, A, N, I, L),
        {
            Icon: B,
            iconColor: K,
            textColor: X,
            tooltipText: H
        } = l.useMemo(
            () =>
                (function (e) {
                    let t,
                        { timeStatus: n, textBrand: r, textPositive: l, textDanger: a, endDateTimeString: i, startDateTimeString: c } = e,
                        s = u.Que,
                        o = r,
                        d = 'header-secondary';
                    switch (n) {
                        case 3:
                            (o = l), (d = null != i ? void 0 : 'text-positive');
                            break;
                        case 4:
                            s = u.T39;
                            break;
                        case 2:
                        case 1:
                            (d = 'text-brand'), (t = c);
                            break;
                        case 5:
                            o = a;
                    }
                    return {
                        Icon: s,
                        iconColor: o.hex,
                        textColor: d,
                        tooltipText: t
                    };
                })({
                    timeStatus: R,
                    textBrand: S,
                    textPositive: T,
                    textDanger: D,
                    endDateTimeString: I,
                    startDateTimeString: Z
                }),
            [R, S, T, D, I, Z]
        ),
        M = null;
    if (null != P) {
        let e = (0, b.Ho)(P);
        M = v.NW.formatToPlainString(v.t.HmKEqa, { recurrenceRule: e.toText() });
        let n = s()(t);
        M = (function (e, t) {
            let n = t.toDate(),
                r = n.toLocaleString(v.NW.currentLocale, { weekday: 'long' });
            switch (e) {
                case m.z.WEEKLY:
                    return v.NW.formatToPlainString(v.t.xQM9X1, { weekday: r });
                case m.z.BIWEEKLY:
                    return v.NW.formatToPlainString(v.t.RYscaW, { weekday: r });
                case m.z.MONTHLY:
                    let l = Math.ceil(n.getDate() / 7);
                    return v.NW.formatToPlainString(v.t['4ZN9Ag'], {
                        weekday: r,
                        nth: l
                    });
                case m.z.YEARLY:
                    return v.NW.formatToPlainString(v.t['rXUS+v'], {
                        date: n.toLocaleString(v.NW.currentLocale, {
                            month: 'short',
                            day: '2-digit'
                        })
                    });
                case m.z.WEEKDAY_ONLY:
                    return v.NW.string(v.t['2BX6bG']);
                case m.z.WEEKEND_ONLY:
                    return v.NW.string(v.t['IEi+R0']);
                default:
                    return null;
            }
        })((0, b.zi)(n, P), n);
    }
    return (0, r.jsxs)(h, {
        className: i()(c, { [O.isRecurring]: null != M }),
        tooltipText: H,
        children: [
            x && n === p.p1.SCHEDULED
                ? (0, r.jsx)(j, {})
                : (0, r.jsx)(B, {
                      color: K,
                      size: 'custom',
                      width: 20,
                      height: 20
                  }),
            (0, r.jsxs)('div', {
                className: O.eventStatusLabel,
                children: [
                    (0, r.jsx)(u.Text, {
                        color: X,
                        variant: y,
                        children: z
                    }),
                    null != M &&
                        (0, r.jsx)(u.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: M
                        })
                ]
            })
        ]
    });
}
