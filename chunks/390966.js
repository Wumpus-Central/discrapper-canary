n.d(t, { z: () => j }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    c = n(913527),
    s = n.n(c),
    o = n(692547),
    u = n(481060),
    d = n(894017),
    f = n(854698),
    b = n(849464),
    m = n(765305),
    p = n(388032),
    g = n(923167);
function v() {
    return (0, r.jsx)(u.IGR, {
        className: g.newBadge,
        color: o.Z.unsafe_rawColors.BRAND_260.css,
        text: (0, r.jsx)(u.Text, {
            className: g.newBadgeText,
            variant: 'text-xs/bold',
            children: p.intl.string(p.t.y2b7CA)
        })
    });
}
function O(e) {
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
    let { startTime: t, status: n, eventType: i, className: c, endTime: j, liveText: h, textVariant: x = 'text-sm/semibold', isNew: y, recurrenceRule: P, guildEventId: w, recurrenceId: E } = e,
        N = (0, u.dQu)(o.Z.colors.TEXT_BRAND).hex(),
        S = (0, u.dQu)(o.Z.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        T = (0, u.dQu)(o.Z.colors.TEXT_DANGER).hex();
    null == h && (h = i === m.WX.EXTERNAL ? p.intl.string(p.t.IyZxjI) : p.intl.string(p.t['X2K3//']));
    let Z = (0, d.Z)(E, w),
        [{ startDateTimeString: D, endDateTimeString: I, currentOrPastEvent: _, upcomingEvent: C, diffMinutes: L }, k] = l.useState((0, f.ub)(t, j));
    l.useEffect(() => {
        k((0, f.ub)(t, j));
        let e = setInterval(() => k((0, f.ub)(t, j)), 1000);
        return () => {
            clearInterval(e);
        };
    }, [t, j]);
    let A = D;
    null != I &&
        '' !== I &&
        (A = p.intl.formatToPlainString(p.t.tXbu7O, {
            start: D,
            end: I
        }));
    let R = l.useMemo(() => (n === m.p1.CANCELED || (null == Z ? void 0 : Z.is_canceled) ? 5 : n === m.p1.ACTIVE ? 3 : m.$I.has(n) ? 4 : _ ? 2 : +!!C), [n, null == Z ? void 0 : Z.is_canceled, _, C]),
        z = (function (e, t, n, l, i) {
            switch (e) {
                case 1:
                    return i > 0 ? p.intl.formatToPlainString(p.t.PQlCWl, { minutes: i }) : p.intl.string(p.t.WINqKS);
                case 2:
                    return p.intl.string(p.t.WINqKS);
                case 3:
                    return null != l && '' !== l
                        ? p.intl.format(p.t.vHYgJS, {
                              start: n,
                              startHook: (e) =>
                                  (0, r.jsx)(u.Text, {
                                      color: 'text-positive',
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
        })(R, A, h, I, L),
        {
            Icon: B,
            iconColor: K,
            textColor: X,
            tooltipText: H
        } = l.useMemo(
            () =>
                (function (e) {
                    let t,
                        { timeStatus: n, textBrand: r, textPositive: l, textDanger: i, endDateTimeString: a, startDateTimeString: c } = e,
                        s = u.Que,
                        o = r,
                        d = 'header-secondary';
                    switch (n) {
                        case 3:
                            (o = l), (d = null != a ? void 0 : 'text-positive');
                            break;
                        case 4:
                            s = u.T39;
                            break;
                        case 2:
                        case 1:
                            (d = 'text-brand'), (t = c);
                            break;
                        case 5:
                            o = i;
                    }
                    return {
                        Icon: s,
                        iconColor: o,
                        textColor: d,
                        tooltipText: t
                    };
                })({
                    timeStatus: R,
                    textBrand: N,
                    textPositive: S,
                    textDanger: T,
                    endDateTimeString: I,
                    startDateTimeString: D
                }),
            [R, N, S, T, I, D]
        ),
        M = null;
    if (null != P) {
        let e = (0, f.Ho)(P);
        M = p.intl.formatToPlainString(p.t.HmKEqa, { recurrenceRule: e.toText() });
        let n = s()(t);
        M = (function (e, t) {
            let n = t.toDate(),
                r = n.toLocaleString(p.intl.currentLocale, { weekday: 'long' });
            switch (e) {
                case b.z.WEEKLY:
                    return p.intl.formatToPlainString(p.t.xQM9X1, { weekday: r });
                case b.z.BIWEEKLY:
                    return p.intl.formatToPlainString(p.t.RYscaW, { weekday: r });
                case b.z.MONTHLY:
                    let l = Math.ceil(n.getDate() / 7);
                    return p.intl.formatToPlainString(p.t['4ZN9Ag'], {
                        weekday: r,
                        nth: l
                    });
                case b.z.YEARLY:
                    return p.intl.formatToPlainString(p.t['rXUS+v'], {
                        date: n.toLocaleString(p.intl.currentLocale, {
                            month: 'short',
                            day: '2-digit'
                        })
                    });
                case b.z.WEEKDAY_ONLY:
                    return p.intl.string(p.t['2BX6bG']);
                case b.z.WEEKEND_ONLY:
                    return p.intl.string(p.t['IEi+R0']);
                default:
                    return null;
            }
        })((0, f.zi)(n, P), n);
    }
    return (0, r.jsxs)(O, {
        className: a()(c, { [g.isRecurring]: null != M }),
        tooltipText: H,
        children: [
            y && n === m.p1.SCHEDULED
                ? (0, r.jsx)(v, {})
                : (0, r.jsx)(B, {
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
                        variant: x,
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
