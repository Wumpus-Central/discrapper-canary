n.d(e, { L: () => D, o: () => I });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(536637),
    c = n.n(s),
    u = n(661531),
    o = n(834730),
    d = n(81466),
    m = n(406810),
    x = n(62010),
    g = n(866665),
    h = n(602853),
    f = n(722260),
    E = n(492260),
    N = n(974930),
    v = n(604701),
    A = n(988794),
    j = n(660183),
    T = n(202265);
function I(t) {
    let e,
        { timeData: n, status: l, eventType: r, isCanceled: i } = t,
        { startDateTimeString: a, endDateTimeString: s, currentOrPastEvent: c, upcomingEvent: u, diffMinutes: o } = n;
    if (5 == (e = l === A.XG.CANCELED || i ? 5 : l === A.XG.ACTIVE ? 3 : A.lV.has(l) ? 4 : c ? 2 : +!!u))
        return `${a}, ${j.intl.string(j.t.fyBVRm)}`;
    let d = r === A.Ps.EXTERNAL ? j.intl.string(j.t.IyZxjH) : j.intl.string(j.t["X2K3/4"]),
        m = a;
    switch ((null != s && "" !== s && (m = j.intl.formatToPlainString(j.t.tXbu7I, { start: a, end: s })), e)) {
        case 1:
            return o > 0 ? j.intl.formatToPlainString(j.t.PQlCWk, { minutes: o }) : j.intl.string(j.t.WINqKV);
        case 2:
            return j.intl.string(j.t.WINqKV);
        case 3:
            return null != s && "" !== s ? j.intl.formatToPlainString(j.t.tXbu7I, { start: d, end: s }) : d;
        default:
            return m;
    }
}
function C() {
    return (0, l.jsx)("div", { className: T.Ad, children: (0, l.jsx)(x.E, { type: "new", variant: "brand" }) });
}
function L(t) {
    let { children: e, className: n, tooltipText: r } = t;
    return (0, l.jsx)("div", {
        className: a()(T.cd, n),
        children: (0, l.jsx)(g.m, {
            position: "right",
            text: r,
            shouldShow: null != r,
            children: (0, l.jsx)("div", { className: a()(T.cd, n), children: e }),
        }),
    });
}
function D(t) {
    return null != t.timeData ? (0, l.jsx)(p, { ...t, timeData: t.timeData }) : (0, l.jsx)(_, { ...t });
}
function _(t) {
    let e = (0, E.A)(t.startTime, t.endTime);
    return (0, l.jsx)(p, { ...t, timeData: e });
}
function p(t) {
    let {
            startTime: e,
            status: n,
            eventType: i,
            className: s,
            liveText: x,
            textVariant: g = "text-sm/semibold",
            isNew: E,
            recurrenceRule: I,
            guildEventId: D,
            recurrenceId: _,
            timeData: p,
        } = t,
        w = (0, h.r)(u.A.colors.TEXT_BRAND).hex(),
        S = (0, h.r)(u.A.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        y = (0, h.r)(u.A.colors.TEXT_FEEDBACK_CRITICAL).hex();
    null == x && (x = i === A.Ps.EXTERNAL ? j.intl.string(j.t.IyZxjH) : j.intl.string(j.t["X2K3/4"]));
    let P = (0, f.A)(_, D),
        { startDateTimeString: b, endDateTimeString: k, currentOrPastEvent: X, upcomingEvent: G, diffMinutes: V } = p,
        K = b;
    null != k && "" !== k && (K = j.intl.formatToPlainString(j.t.tXbu7I, { start: b, end: k }));
    let z = r.useMemo(
            () => (n === A.XG.CANCELED || P?.is_canceled ? 5 : n === A.XG.ACTIVE ? 3 : A.lV.has(n) ? 4 : X ? 2 : +!!G),
            [n, P?.is_canceled, X, G],
        ),
        R = (function (t, e, n, r, i) {
            switch (t) {
                case 1:
                    return i > 0 ? j.intl.formatToPlainString(j.t.PQlCWk, { minutes: i }) : j.intl.string(j.t.WINqKV);
                case 2:
                    return j.intl.string(j.t.WINqKV);
                case 3:
                    return null != r && "" !== r
                        ? j.intl.format(j.t.vHYgJW, {
                              start: n,
                              startHook: (t) =>
                                  (0, l.jsx)(o.E, {
                                      color: "text-feedback-positive",
                                      variant: "text-sm/semibold",
                                      className: T.Py,
                                      children: t,
                                  }),
                              end: r,
                          })
                        : (n ?? "");
                default:
                    return e;
            }
        })(z, K, x, k, V),
        {
            Icon: W,
            iconColor: H,
            textColor: Y,
            tooltipText: O,
        } = r.useMemo(
            () =>
                (function (t) {
                    let e,
                        {
                            timeStatus: n,
                            textBrand: l,
                            textPositive: r,
                            textDanger: i,
                            endDateTimeString: a,
                            startDateTimeString: s,
                        } = t,
                        c = d.CalendarIcon,
                        u = l,
                        o = "text-default";
                    switch (n) {
                        case 3:
                            ((u = r), (o = null != a ? void 0 : "text-feedback-positive"));
                            break;
                        case 4:
                            c = m.ClockIcon;
                            break;
                        case 2:
                        case 1:
                            ((o = "text-brand"), (e = s));
                            break;
                        case 5:
                            u = i;
                    }
                    return { Icon: c, iconColor: u, textColor: o, tooltipText: e };
                })({
                    timeStatus: z,
                    textBrand: w,
                    textPositive: S,
                    textDanger: y,
                    endDateTimeString: k,
                    startDateTimeString: b,
                }),
            [z, w, S, y, k, b],
        ),
        B = null;
    if (null != I) {
        let t = (0, N.X7)(I);
        B = j.intl.formatToPlainString(j.t.HmKEqW, { recurrenceRule: t.toText() });
        let n = c()(e);
        B = (function (t, e) {
            let n = e.toDate(),
                l = n.toLocaleString(j.intl.currentLocale, { weekday: "long" });
            switch (t) {
                case v.z.WEEKLY:
                    return j.intl.formatToPlainString(j.t.xQM9X0, { weekday: l });
                case v.z.BIWEEKLY:
                    return j.intl.formatToPlainString(j.t.RYscac, { weekday: l });
                case v.z.MONTHLY:
                    let r = Math.ceil(n.getDate() / 7);
                    return j.intl.formatToPlainString(j.t["4ZN9Ap"], { weekday: l, nth: r });
                case v.z.YEARLY:
                    return j.intl.formatToPlainString(j.t["rXUS+j"], {
                        date: n.toLocaleString(j.intl.currentLocale, { month: "short", day: "2-digit" }),
                    });
                case v.z.DAILY:
                    return j.intl.string(j.t["/i8N++"]);
                case v.z.WEEKDAY_ONLY:
                    return j.intl.string(j.t["2BX6bC"]);
                case v.z.WEEKEND_ONLY:
                    return j.intl.string(j.t["IEi+Rw"]);
                default:
                    return null;
            }
        })((0, N.z7)(n, I), n);
    }
    return (0, l.jsxs)(L, {
        className: a()(s, { [T.AD]: null != B }),
        tooltipText: O,
        children: [
            E && n === A.XG.SCHEDULED
                ? (0, l.jsx)(C, {})
                : (0, l.jsx)(W, { color: H, size: "custom", width: 20, height: 20 }),
            (0, l.jsxs)("div", {
                className: T.Zy,
                children: [
                    (0, l.jsx)(o.E, { color: Y, variant: g, children: R }),
                    null != B && (0, l.jsx)(o.E, { color: "text-default", variant: "text-xs/normal", children: B }),
                ],
            }),
        ],
    });
}
