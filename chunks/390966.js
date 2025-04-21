n.d(t, { z: () => y }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
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
            children: v.intl.string(v.t.y2b7CA)
        })
    });
}
function h(e) {
    let { children: t, className: n, tooltipText: l } = e;
    return (0, r.jsx)('div', {
        className: a()(O.eventStatusContainer, n),
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
                            className: a()(O.eventStatusContainer, n),
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
function y(e) {
    let { startTime: t, status: n, eventType: i, className: c, endTime: o, liveText: y, textVariant: x = 'text-sm/semibold', isNew: P, recurrenceRule: w, guildEventId: E, recurrenceId: N } = e,
        S = (0, d.O0)(g.tP.TEXT_BRAND),
        T = (0, d.O0)(g.tP.TEXT_POSITIVE),
        D = (0, d.O0)(g.tP.TEXT_DANGER);
    null == y && (y = i === p.WX.EXTERNAL ? v.intl.string(v.t.IyZxjI) : v.intl.string(v.t['X2K3//']));
    let Z = (0, f.Z)(N, E),
        [{ startDateTimeString: I, endDateTimeString: _, currentOrPastEvent: C, upcomingEvent: L, diffMinutes: k }, A] = l.useState((0, b.ub)(t, o));
    l.useEffect(() => {
        A((0, b.ub)(t, o));
        let e = setInterval(() => A((0, b.ub)(t, o)), 1000);
        return () => {
            clearInterval(e);
        };
    }, [t, o]);
    let R = I;
    null != _ &&
        '' !== _ &&
        (R = v.intl.formatToPlainString(v.t.tXbu7O, {
            start: I,
            end: _
        }));
    let z = l.useMemo(() => (n === p.p1.CANCELED || (null == Z ? void 0 : Z.is_canceled) ? 5 : n === p.p1.ACTIVE ? 3 : p.$I.has(n) ? 4 : C ? 2 : +!!L), [n, null == Z ? void 0 : Z.is_canceled, C, L]),
        B = (function (e, t, n, l, i) {
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
        })(z, R, y, _, k),
        {
            Icon: K,
            iconColor: X,
            textColor: H,
            tooltipText: M
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
                        iconColor: o.hex,
                        textColor: d,
                        tooltipText: t
                    };
                })({
                    timeStatus: z,
                    textBrand: S,
                    textPositive: T,
                    textDanger: D,
                    endDateTimeString: _,
                    startDateTimeString: I
                }),
            [z, S, T, D, _, I]
        ),
        W = null;
    if (null != w) {
        let e = (0, b.Ho)(w);
        W = v.intl.formatToPlainString(v.t.HmKEqa, { recurrenceRule: e.toText() });
        let n = s()(t);
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
        })((0, b.zi)(n, w), n);
    }
    return (0, r.jsxs)(h, {
        className: a()(c, { [O.isRecurring]: null != W }),
        tooltipText: M,
        children: [
            P && n === p.p1.SCHEDULED
                ? (0, r.jsx)(j, {})
                : (0, r.jsx)(K, {
                      color: X,
                      size: 'custom',
                      width: 20,
                      height: 20
                  }),
            (0, r.jsxs)('div', {
                className: O.eventStatusLabel,
                children: [
                    (0, r.jsx)(u.Text, {
                        color: H,
                        variant: x,
                        children: B
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
