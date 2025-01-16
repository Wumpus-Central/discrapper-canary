n.d(e, {
    z: function () {
        return j;
    }
}),
    n(47120);
var l,
    r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    u = n.n(s),
    c = n(913527),
    o = n.n(c),
    d = n(692547),
    m = n(481060),
    v = n(44315),
    x = n(894017),
    h = n(854698),
    E = n(849464),
    g = n(765305),
    N = n(231338),
    f = n(388032),
    T = n(98764);
((r = l || (l = {}))[(r.SCHEDULED = 0)] = 'SCHEDULED'), (r[(r.STARTING_SOON = 1)] = 'STARTING_SOON'), (r[(r.READY = 2)] = 'READY'), (r[(r.STARTED = 3)] = 'STARTED'), (r[(r.ENDED = 4)] = 'ENDED'), (r[(r.CANCELED = 5)] = 'CANCELED');
function S() {
    return (0, i.jsx)(m.TextBadge, {
        className: T.newBadge,
        color: d.Z.unsafe_rawColors.BRAND_260.css,
        text: (0, i.jsx)(m.Text, {
            className: T.newBadgeText,
            variant: 'text-xs/bold',
            children: f.intl.string(f.t.y2b7CA)
        })
    });
}
function p(t) {
    let { children: e, className: n, tooltipText: l } = t;
    return (0, i.jsx)('div', {
        className: u()(T.eventStatusContainer, n),
        children: (0, i.jsx)(m.Tooltip, {
            position: 'right',
            text: l,
            shouldShow: null != l,
            children: (t) =>
                (0, i.jsx)('div', {
                    ...t,
                    className: u()(T.eventStatusContainer, n),
                    children: e
                })
        })
    });
}
function j(t) {
    let { startTime: e, status: n, eventType: l, className: r, endTime: s, liveText: c, textVariant: d = 'text-sm/semibold', isNew: j, recurrenceRule: D, guildEventId: I, recurrenceId: C } = t,
        L = (0, v.O0)(N.tP.TEXT_BRAND),
        Z = (0, v.O0)(N.tP.TEXT_POSITIVE),
        w = (0, v.O0)(N.tP.TEXT_DANGER);
    null == c && (c = l === g.WX.EXTERNAL ? f.intl.string(f.t.IyZxjI) : f.intl.string(f.t['X2K3//']));
    let _ = (0, x.Z)(C, I),
        [{ startDateTimeString: b, endDateTimeString: A, currentOrPastEvent: P, upcomingEvent: R, diffMinutes: O }, k] = a.useState((0, h.ub)(e, s));
    a.useEffect(() => {
        k((0, h.ub)(e, s));
        let t = setInterval(() => k((0, h.ub)(e, s)), 1000);
        return () => {
            clearInterval(t);
        };
    }, [e, s]);
    let z = b;
    null != A &&
        '' !== A &&
        (z = f.intl.formatToPlainString(f.t.tXbu7O, {
            start: b,
            end: A
        }));
    let H = a.useMemo(() => (n === g.p1.CANCELED || (null == _ ? void 0 : _.is_canceled) ? 5 : n === g.p1.ACTIVE ? 3 : g.$I.has(n) ? 4 : P ? 2 : R ? 1 : 0), [n, null == _ ? void 0 : _.is_canceled, P, R]),
        y = (function (t, e, n, l, r) {
            switch (t) {
                case 1:
                    return r > 0 ? f.intl.formatToPlainString(f.t.PQlCWl, { minutes: r }) : f.intl.string(f.t.WINqKS);
                case 2:
                    return f.intl.string(f.t.WINqKS);
                case 3:
                    return null != l && '' !== l
                        ? f.intl.format(f.t.vHYgJS, {
                              start: n,
                              startHook: (t) =>
                                  (0, i.jsx)(m.Text, {
                                      color: 'text-positive',
                                      variant: 'text-sm/semibold',
                                      className: T.liveEventEndTime,
                                      children: t
                                  }),
                              end: l
                          })
                        : null != n
                          ? n
                          : '';
                default:
                    return e;
            }
        })(H, z, c, A, O),
        {
            Icon: Y,
            iconColor: B,
            textColor: G,
            tooltipText: K
        } = a.useMemo(
            () =>
                (function (t) {
                    let e,
                        { timeStatus: n, textBrand: l, textPositive: r, textDanger: i, endDateTimeString: a, startDateTimeString: s } = t,
                        u = m.CalendarIcon,
                        c = l,
                        o = 'header-secondary';
                    switch (n) {
                        case 3:
                            (c = r), (o = null != a ? void 0 : 'text-positive');
                            break;
                        case 4:
                            u = m.ClockIcon;
                            break;
                        case 2:
                        case 1:
                            (o = 'text-brand'), (e = s);
                            break;
                        case 5:
                            c = i;
                    }
                    return {
                        Icon: u,
                        iconColor: c.hex,
                        textColor: o,
                        tooltipText: e
                    };
                })({
                    timeStatus: H,
                    textBrand: L,
                    textPositive: Z,
                    textDanger: w,
                    endDateTimeString: A,
                    startDateTimeString: b
                }),
            [H, L, Z, w, A, b]
        ),
        M = null;
    if (null != D) {
        let t = (0, h.Ho)(D);
        M = f.intl.formatToPlainString(f.t.HmKEqa, { recurrenceRule: t.toText() });
        let n = o()(e);
        M = (function (t, e) {
            let n = e.toDate(),
                l = n.toLocaleString(f.intl.currentLocale, { weekday: 'long' });
            switch (t) {
                case E.z.WEEKLY:
                    return f.intl.formatToPlainString(f.t.xQM9X1, { weekday: l });
                case E.z.BIWEEKLY:
                    return f.intl.formatToPlainString(f.t.RYscaW, { weekday: l });
                case E.z.MONTHLY:
                    let r = Math.ceil(n.getDate() / 7);
                    return f.intl.formatToPlainString(f.t['4ZN9Ag'], {
                        weekday: l,
                        nth: r
                    });
                case E.z.YEARLY:
                    return f.intl.formatToPlainString(f.t['rXUS+v'], {
                        date: n.toLocaleString(f.intl.currentLocale, {
                            month: 'short',
                            day: '2-digit'
                        })
                    });
                case E.z.WEEKDAY_ONLY:
                    return f.intl.string(f.t['2BX6bG']);
                case E.z.WEEKEND_ONLY:
                    return f.intl.string(f.t['IEi+R0']);
                default:
                    return null;
            }
        })((0, h.zi)(n, D), n);
    }
    return (0, i.jsxs)(p, {
        className: u()(r, { [T.isRecurring]: null != M }),
        tooltipText: K,
        children: [
            j && n === g.p1.SCHEDULED
                ? (0, i.jsx)(S, {})
                : (0, i.jsx)(Y, {
                      color: B,
                      size: 'custom',
                      width: 20,
                      height: 20
                  }),
            (0, i.jsxs)('div', {
                className: T.eventStatusLabel,
                children: [
                    (0, i.jsx)(m.Text, {
                        color: G,
                        variant: d,
                        children: y
                    }),
                    null != M &&
                        (0, i.jsx)(m.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: M
                        })
                ]
            })
        ]
    });
}
