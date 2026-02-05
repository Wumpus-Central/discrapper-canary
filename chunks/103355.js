l.d(t, { L: () => A });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(989349),
    c = l.n(r),
    u = l(827734),
    d = l(990078),
    o = l(397927),
    m = l(722260),
    x = l(974930),
    v = l(604701),
    h = l(988794),
    N = l(985018),
    g = l(719247);
function p() {
    return (0, n.jsx)(o.LpS, {
        className: g.Ad,
        color: u.A.unsafe_rawColors.BRAND_260.css,
        text: (0, n.jsx)(o.Text, { className: g.rm, variant: "text-xs/bold", children: N.intl.string(N.t.y2b7CA) }),
    });
}
function j(e) {
    let { children: t, className: l, tooltipText: s } = e;
    return (0, n.jsx)("div", {
        className: a()(g.cd, l),
        children: (0, n.jsx)(d.m, {
            position: "right",
            text: s,
            shouldShow: null != s,
            children: (0, n.jsx)("div", { className: a()(g.cd, l), children: t }),
        }),
    });
}
function A(e) {
    let {
            startTime: t,
            status: l,
            eventType: i,
            className: r,
            endTime: d,
            liveText: A,
            textVariant: E = "text-sm/semibold",
            isNew: I,
            recurrenceRule: C,
            guildEventId: f,
            recurrenceId: T,
        } = e,
        S = (0, o.rdh)(u.A.colors.TEXT_BRAND).hex(),
        y = (0, o.rdh)(u.A.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        _ = (0, o.rdh)(u.A.colors.TEXT_FEEDBACK_CRITICAL).hex();
    null == A && (A = i === h.Ps.EXTERNAL ? N.intl.string(N.t.IyZxjH) : N.intl.string(N.t["X2K3/4"]));
    let k = (0, m.A)(T, f),
        [{ startDateTimeString: R, endDateTimeString: L, currentOrPastEvent: b, upcomingEvent: D, diffMinutes: P }, B] =
            s.useState((0, x.CC)(t, d));
    s.useEffect(() => {
        B((0, x.CC)(t, d));
        let e = setInterval(() => B((0, x.CC)(t, d)), 1e3);
        return () => {
            clearInterval(e);
        };
    }, [t, d]);
    let G = R;
    null != L && "" !== L && (G = N.intl.formatToPlainString(N.t.tXbu7I, { start: R, end: L }));
    let w = s.useMemo(
            () => (l === h.XG.CANCELED || k?.is_canceled ? 5 : l === h.XG.ACTIVE ? 3 : h.lV.has(l) ? 4 : b ? 2 : +!!D),
            [l, k?.is_canceled, b, D],
        ),
        z = (function (e, t, l, s, i) {
            switch (e) {
                case 1:
                    return i > 0 ? N.intl.formatToPlainString(N.t.PQlCWk, { minutes: i }) : N.intl.string(N.t.WINqKV);
                case 2:
                    return N.intl.string(N.t.WINqKV);
                case 3:
                    return null != s && "" !== s
                        ? N.intl.format(N.t.vHYgJW, {
                              start: l,
                              startHook: (e) =>
                                  (0, n.jsx)(o.Text, {
                                      color: "text-feedback-positive",
                                      variant: "text-sm/semibold",
                                      className: g.Py,
                                      children: e,
                                  }),
                              end: s,
                          })
                        : (l ?? "");
                default:
                    return t;
            }
        })(w, G, A, L, P),
        {
            Icon: U,
            iconColor: O,
            textColor: X,
            tooltipText: M,
        } = s.useMemo(
            () =>
                (function (e) {
                    let t,
                        {
                            timeStatus: l,
                            textBrand: n,
                            textPositive: s,
                            textDanger: i,
                            endDateTimeString: a,
                            startDateTimeString: r,
                        } = e,
                        c = o.CTc,
                        u = n,
                        d = "text-default";
                    switch (l) {
                        case 3:
                            (u = s), (d = null != a ? void 0 : "text-feedback-positive");
                            break;
                        case 4:
                            c = o.O4;
                            break;
                        case 2:
                        case 1:
                            (d = "text-brand"), (t = r);
                            break;
                        case 5:
                            u = i;
                    }
                    return { Icon: c, iconColor: u, textColor: d, tooltipText: t };
                })({
                    timeStatus: w,
                    textBrand: S,
                    textPositive: y,
                    textDanger: _,
                    endDateTimeString: L,
                    startDateTimeString: R,
                }),
            [w, S, y, _, L, R],
        ),
        Y = null;
    if (null != C) {
        let e = (0, x.X7)(C);
        Y = N.intl.formatToPlainString(N.t.HmKEqW, { recurrenceRule: e.toText() });
        let l = c()(t);
        Y = (function (e, t) {
            let l = t.toDate(),
                n = l.toLocaleString(N.intl.currentLocale, { weekday: "long" });
            switch (e) {
                case v.z.WEEKLY:
                    return N.intl.formatToPlainString(N.t.xQM9X0, { weekday: n });
                case v.z.BIWEEKLY:
                    return N.intl.formatToPlainString(N.t.RYscac, { weekday: n });
                case v.z.MONTHLY:
                    let s = Math.ceil(l.getDate() / 7);
                    return N.intl.formatToPlainString(N.t["4ZN9Ap"], { weekday: n, nth: s });
                case v.z.YEARLY:
                    return N.intl.formatToPlainString(N.t["rXUS+j"], {
                        date: l.toLocaleString(N.intl.currentLocale, { month: "short", day: "2-digit" }),
                    });
                case v.z.WEEKDAY_ONLY:
                    return N.intl.string(N.t["2BX6bC"]);
                case v.z.WEEKEND_ONLY:
                    return N.intl.string(N.t["IEi+Rw"]);
                default:
                    return null;
            }
        })((0, x.z7)(l, C), l);
    }
    return (0, n.jsxs)(j, {
        className: a()(r, { [g.AD]: null != Y }),
        tooltipText: M,
        children: [
            I && l === h.XG.SCHEDULED
                ? (0, n.jsx)(p, {})
                : (0, n.jsx)(U, { color: O, size: "custom", width: 20, height: 20 }),
            (0, n.jsxs)("div", {
                className: g.Zy,
                children: [
                    (0, n.jsx)(o.Text, { color: X, variant: E, children: z }),
                    null != Y && (0, n.jsx)(o.Text, { color: "text-default", variant: "text-xs/normal", children: Y }),
                ],
            }),
        ],
    });
}
