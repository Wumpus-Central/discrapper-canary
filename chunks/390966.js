n.d(t, { z: () => j }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    u = n.n(s),
    c = n(692547),
    o = n(481060),
    d = n(44315),
    m = n(894017),
    x = n(854698),
    h = n(849464),
    v = n(765305),
    g = n(231338),
    N = n(388032),
    f = n(445269);
function E() {
    return (0, l.jsx)(o.IGR, {
        className: f.newBadge,
        color: c.Z.unsafe_rawColors.BRAND_260.css,
        text: (0, l.jsx)(o.Text, {
            className: f.newBadgeText,
            variant: 'text-xs/bold',
            children: N.intl.string(N.t.y2b7CA)
        })
    });
}
function T(e) {
    let { children: t, className: n, tooltipText: r } = e;
    return (0, l.jsx)('div', {
        className: a()(f.eventStatusContainer, n),
        children: (0, l.jsx)(o.ua7, {
            position: 'right',
            text: r,
            shouldShow: null != r,
            children: (e) =>
                (0, l.jsx)('div', {
                    ...e,
                    className: a()(f.eventStatusContainer, n),
                    children: t
                })
        })
    });
}
function j(e) {
    let { startTime: t, status: n, eventType: i, className: s, endTime: c, liveText: j, textVariant: p = 'text-sm/semibold', isNew: S, recurrenceRule: Z, guildEventId: b, recurrenceId: I } = e,
        w = (0, d.O0)(g.tP.TEXT_BRAND),
        P = (0, d.O0)(g.tP.TEXT_POSITIVE),
        _ = (0, d.O0)(g.tP.TEXT_DANGER);
    null == j && (j = i === v.WX.EXTERNAL ? N.intl.string(N.t.IyZxjI) : N.intl.string(N.t['X2K3//']));
    let C = (0, m.Z)(I, b),
        [{ startDateTimeString: L, endDateTimeString: D, currentOrPastEvent: A, upcomingEvent: O, diffMinutes: R }, k] = r.useState((0, x.ub)(t, c));
    r.useEffect(() => {
        k((0, x.ub)(t, c));
        let e = setInterval(() => k((0, x.ub)(t, c)), 1000);
        return () => {
            clearInterval(e);
        };
    }, [t, c]);
    let z = L;
    null != D &&
        '' !== D &&
        (z = N.intl.formatToPlainString(N.t.tXbu7O, {
            start: L,
            end: D
        }));
    let y = r.useMemo(() => (n === v.p1.CANCELED || (null == C ? void 0 : C.is_canceled) ? 5 : n === v.p1.ACTIVE ? 3 : v.$I.has(n) ? 4 : A ? 2 : O ? 1 : 0), [n, null == C ? void 0 : C.is_canceled, A, O]),
        B = (function (e, t, n, r, i) {
            switch (e) {
                case 1:
                    return i > 0 ? N.intl.formatToPlainString(N.t.PQlCWl, { minutes: i }) : N.intl.string(N.t.WINqKS);
                case 2:
                    return N.intl.string(N.t.WINqKS);
                case 3:
                    return null != r && '' !== r
                        ? N.intl.format(N.t.vHYgJS, {
                              start: n,
                              startHook: (e) =>
                                  (0, l.jsx)(o.Text, {
                                      color: 'text-positive',
                                      variant: 'text-sm/semibold',
                                      className: f.liveEventEndTime,
                                      children: e
                                  }),
                              end: r
                          })
                        : null != n
                          ? n
                          : '';
                default:
                    return t;
            }
        })(y, z, j, D, R),
        {
            Icon: K,
            iconColor: X,
            textColor: H,
            tooltipText: M
        } = r.useMemo(
            () =>
                (function (e) {
                    let t,
                        { timeStatus: n, textBrand: l, textPositive: r, textDanger: i, endDateTimeString: a, startDateTimeString: s } = e,
                        u = o.Que,
                        c = l,
                        d = 'header-secondary';
                    switch (n) {
                        case 3:
                            (c = r), (d = null != a ? void 0 : 'text-positive');
                            break;
                        case 4:
                            u = o.T39;
                            break;
                        case 2:
                        case 1:
                            (d = 'text-brand'), (t = s);
                            break;
                        case 5:
                            c = i;
                    }
                    return {
                        Icon: u,
                        iconColor: c.hex,
                        textColor: d,
                        tooltipText: t
                    };
                })({
                    timeStatus: y,
                    textBrand: w,
                    textPositive: P,
                    textDanger: _,
                    endDateTimeString: D,
                    startDateTimeString: L
                }),
            [y, w, P, _, D, L]
        ),
        W = null;
    if (null != Z) {
        let e = (0, x.Ho)(Z);
        W = N.intl.formatToPlainString(N.t.HmKEqa, { recurrenceRule: e.toText() });
        let n = u()(t);
        W = (function (e, t) {
            let n = t.toDate(),
                l = n.toLocaleString(N.intl.currentLocale, { weekday: 'long' });
            switch (e) {
                case h.z.WEEKLY:
                    return N.intl.formatToPlainString(N.t.xQM9X1, { weekday: l });
                case h.z.BIWEEKLY:
                    return N.intl.formatToPlainString(N.t.RYscaW, { weekday: l });
                case h.z.MONTHLY:
                    let r = Math.ceil(n.getDate() / 7);
                    return N.intl.formatToPlainString(N.t['4ZN9Ag'], {
                        weekday: l,
                        nth: r
                    });
                case h.z.YEARLY:
                    return N.intl.formatToPlainString(N.t['rXUS+v'], {
                        date: n.toLocaleString(N.intl.currentLocale, {
                            month: 'short',
                            day: '2-digit'
                        })
                    });
                case h.z.WEEKDAY_ONLY:
                    return N.intl.string(N.t['2BX6bG']);
                case h.z.WEEKEND_ONLY:
                    return N.intl.string(N.t['IEi+R0']);
                default:
                    return null;
            }
        })((0, x.zi)(n, Z), n);
    }
    return (0, l.jsxs)(T, {
        className: a()(s, { [f.isRecurring]: null != W }),
        tooltipText: M,
        children: [
            S && n === v.p1.SCHEDULED
                ? (0, l.jsx)(E, {})
                : (0, l.jsx)(K, {
                      color: X,
                      size: 'custom',
                      width: 20,
                      height: 20
                  }),
            (0, l.jsxs)('div', {
                className: f.eventStatusLabel,
                children: [
                    (0, l.jsx)(o.Text, {
                        color: H,
                        variant: p,
                        children: B
                    }),
                    null != W &&
                        (0, l.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: W
                        })
                ]
            })
        ]
    });
}
