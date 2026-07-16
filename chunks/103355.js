n.d(e, { L: () => D, o: () => I });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(989349),
    c = n.n(a),
    u = n(661531),
    o = n(834730),
    d = n(81466),
    m = n(406810),
    x = n(812993),
    g = n(866665),
    h = n(602853),
    f = n(722260),
    N = n(492260),
    A = n(974930),
    E = n(604701),
    v = n(988794),
    j = n(375708),
    T = n(828342);
function I(t) {
    let e,
        { timeData: n, status: l, eventType: r, isCanceled: i } = t,
        { startDateTimeString: s, endDateTimeString: a, currentOrPastEvent: c, upcomingEvent: u, diffMinutes: o } = n;
    if (5 == (e = l === v.XG.CANCELED || i ? 5 : l === v.XG.ACTIVE ? 3 : v.lV.has(l) ? 4 : c ? 2 : +!!u))
        return `${s}, ${j.intl.string(j.t.fyBVRm)}`;
    let d = r === v.Ps.EXTERNAL ? j.intl.string(j.t.IyZxjH) : j.intl.string(j.t["X2K3/4"]),
        m = s;
    switch ((null != a && "" !== a && (m = j.intl.formatToPlainString(j.t.tXbu7I, { start: s, end: a })), e)) {
        case 1:
            return o > 0 ? j.intl.formatToPlainString(j.t.PQlCWk, { minutes: o }) : j.intl.string(j.t.WINqKV);
        case 2:
            return j.intl.string(j.t.WINqKV);
        case 3:
            return null != a && "" !== a ? j.intl.formatToPlainString(j.t.tXbu7I, { start: d, end: a }) : d;
        default:
            return m;
    }
}
function C() {
    return (0, l.jsx)(x.Lp, {
        className: T.Ad,
        color: u.A.unsafe_rawColors.BRAND_260.css,
        text: (0, l.jsx)(o.E, { className: T.rm, variant: "text-xs/bold", children: j.intl.string(j.t.y2b7CA) }),
    });
}
function L(t) {
    let { children: e, className: n, tooltipText: r } = t;
    return (0, l.jsx)("div", {
        className: s()(T.cd, n),
        children: (0, l.jsx)(g.m, {
            position: "right",
            text: r,
            shouldShow: null != r,
            children: (0, l.jsx)("div", { className: s()(T.cd, n), children: e }),
        }),
    });
}
function D(t) {
    return null != t.timeData ? (0, l.jsx)(p, { ...t, timeData: t.timeData }) : (0, l.jsx)(_, { ...t });
}
function _(t) {
    let e = (0, N.A)(t.startTime, t.endTime);
    return (0, l.jsx)(p, { ...t, timeData: e });
}
function p(t) {
    let {
            startTime: e,
            status: n,
            eventType: i,
            className: a,
            liveText: x,
            textVariant: g = "text-sm/semibold",
            isNew: N,
            recurrenceRule: I,
            guildEventId: D,
            recurrenceId: _,
            timeData: p,
        } = t,
        w = (0, h.r)(u.A.colors.TEXT_BRAND).hex(),
        S = (0, h.r)(u.A.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        b = (0, h.r)(u.A.colors.TEXT_FEEDBACK_CRITICAL).hex();
    null == x && (x = i === v.Ps.EXTERNAL ? j.intl.string(j.t.IyZxjH) : j.intl.string(j.t["X2K3/4"]));
    let y = (0, f.A)(_, D),
        { startDateTimeString: P, endDateTimeString: k, currentOrPastEvent: X, upcomingEvent: G, diffMinutes: V } = p,
        K = P;
    null != k && "" !== k && (K = j.intl.formatToPlainString(j.t.tXbu7I, { start: P, end: k }));
    let R = r.useMemo(
            () => (n === v.XG.CANCELED || y?.is_canceled ? 5 : n === v.XG.ACTIVE ? 3 : v.lV.has(n) ? 4 : X ? 2 : +!!G),
            [n, y?.is_canceled, X, G],
        ),
        z = (function (t, e, n, r, i) {
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
        })(R, K, x, k, V),
        {
            Icon: W,
            iconColor: H,
            textColor: O,
            tooltipText: Y,
        } = r.useMemo(
            () =>
                (function (t) {
                    let e,
                        {
                            timeStatus: n,
                            textBrand: l,
                            textPositive: r,
                            textDanger: i,
                            endDateTimeString: s,
                            startDateTimeString: a,
                        } = t,
                        c = d.C,
                        u = l,
                        o = "text-default";
                    switch (n) {
                        case 3:
                            (u = r), (o = null != s ? void 0 : "text-feedback-positive");
                            break;
                        case 4:
                            c = m.O;
                            break;
                        case 2:
                        case 1:
                            (o = "text-brand"), (e = a);
                            break;
                        case 5:
                            u = i;
                    }
                    return { Icon: c, iconColor: u, textColor: o, tooltipText: e };
                })({
                    timeStatus: R,
                    textBrand: w,
                    textPositive: S,
                    textDanger: b,
                    endDateTimeString: k,
                    startDateTimeString: P,
                }),
            [R, w, S, b, k, P],
        ),
        B = null;
    if (null != I) {
        let t = (0, A.X7)(I);
        B = j.intl.formatToPlainString(j.t.HmKEqW, { recurrenceRule: t.toText() });
        let n = c()(e);
        B = (function (t, e) {
            let n = e.toDate(),
                l = n.toLocaleString(j.intl.currentLocale, { weekday: "long" });
            switch (t) {
                case E.z.WEEKLY:
                    return j.intl.formatToPlainString(j.t.xQM9X0, { weekday: l });
                case E.z.BIWEEKLY:
                    return j.intl.formatToPlainString(j.t.RYscac, { weekday: l });
                case E.z.MONTHLY:
                    let r = Math.ceil(n.getDate() / 7);
                    return j.intl.formatToPlainString(j.t["4ZN9Ap"], { weekday: l, nth: r });
                case E.z.YEARLY:
                    return j.intl.formatToPlainString(j.t["rXUS+j"], {
                        date: n.toLocaleString(j.intl.currentLocale, { month: "short", day: "2-digit" }),
                    });
                case E.z.DAILY:
                    return j.intl.string(j.t["/i8N++"]);
                case E.z.WEEKDAY_ONLY:
                    return j.intl.string(j.t["2BX6bC"]);
                case E.z.WEEKEND_ONLY:
                    return j.intl.string(j.t["IEi+Rw"]);
                default:
                    return null;
            }
        })((0, A.z7)(n, I), n);
    }
    return (0, l.jsxs)(L, {
        className: s()(a, { [T.AD]: null != B }),
        tooltipText: Y,
        children: [
            N && n === v.XG.SCHEDULED
                ? (0, l.jsx)(C, {})
                : (0, l.jsx)(W, { color: H, size: "custom", width: 20, height: 20 }),
            (0, l.jsxs)("div", {
                className: T.Zy,
                children: [
                    (0, l.jsx)(o.E, { color: O, variant: g, children: z }),
                    null != B && (0, l.jsx)(o.E, { color: "text-default", variant: "text-xs/normal", children: B }),
                ],
            }),
        ],
    });
}
