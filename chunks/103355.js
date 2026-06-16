l.d(t, { L: () => L });
var n = l(627968),
    r = l(64700),
    s = l(503698),
    i = l.n(s),
    a = l(989349),
    c = l.n(a),
    u = l(661531),
    o = l(990078),
    d = l(834730),
    m = l(81466),
    x = l(406810),
    h = l(812993),
    g = l(602853),
    N = l(722260),
    E = l(647090),
    v = l(604701),
    A = l(988794),
    f = l(375708),
    j = l(828342);
function T() {
    return (0, n.jsx)(h.Lp, {
        className: j.Ad,
        color: u.A.unsafe_rawColors.BRAND_260.css,
        text: (0, n.jsx)(d.E, { className: j.rm, variant: "text-xs/bold", children: f.intl.string(f.t.y2b7CA) }),
    });
}
function I(e) {
    let { children: t, className: l, tooltipText: r } = e;
    return (0, n.jsx)("div", {
        className: i()(j.cd, l),
        children: (0, n.jsx)(o.m, {
            position: "right",
            text: r,
            shouldShow: null != r,
            children: (0, n.jsx)("div", { className: i()(j.cd, l), children: t }),
        }),
    });
}
function L(e) {
    let {
            startTime: t,
            status: l,
            eventType: s,
            className: a,
            endTime: o,
            liveText: h,
            textVariant: L = "text-sm/semibold",
            isNew: _,
            recurrenceRule: C,
            guildEventId: p,
            recurrenceId: w,
        } = e,
        D = (0, g.r)(u.A.colors.TEXT_BRAND).hex(),
        S = (0, g.r)(u.A.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        b = (0, g.r)(u.A.colors.TEXT_FEEDBACK_CRITICAL).hex();
    null == h && (h = s === A.Ps.EXTERNAL ? f.intl.string(f.t.IyZxjH) : f.intl.string(f.t["X2K3/4"]));
    let y = (0, N.A)(w, p),
        [{ startDateTimeString: k, endDateTimeString: P, currentOrPastEvent: X, upcomingEvent: G, diffMinutes: z }, O] =
            r.useState((0, E.CC)(t, o));
    r.useEffect(() => {
        O((0, E.CC)(t, o));
        let e = setInterval(() => O((0, E.CC)(t, o)), 1e3);
        return () => {
            clearInterval(e);
        };
    }, [t, o]);
    let R = k;
    null != P && "" !== P && (R = f.intl.formatToPlainString(f.t.tXbu7I, { start: k, end: P }));
    let H = r.useMemo(
            () => (l === A.XG.CANCELED || y?.is_canceled ? 5 : l === A.XG.ACTIVE ? 3 : A.lV.has(l) ? 4 : X ? 2 : +!!G),
            [l, y?.is_canceled, X, G],
        ),
        K = (function (e, t, l, r, s) {
            switch (e) {
                case 1:
                    return s > 0 ? f.intl.formatToPlainString(f.t.PQlCWk, { minutes: s }) : f.intl.string(f.t.WINqKV);
                case 2:
                    return f.intl.string(f.t.WINqKV);
                case 3:
                    return null != r && "" !== r
                        ? f.intl.format(f.t.vHYgJW, {
                              start: l,
                              startHook: (e) =>
                                  (0, n.jsx)(d.E, {
                                      color: "text-feedback-positive",
                                      variant: "text-sm/semibold",
                                      className: j.Py,
                                      children: e,
                                  }),
                              end: r,
                          })
                        : (l ?? "");
                default:
                    return t;
            }
        })(H, R, h, P, z),
        {
            Icon: Y,
            iconColor: V,
            textColor: W,
            tooltipText: B,
        } = r.useMemo(
            () =>
                (function (e) {
                    let t,
                        {
                            timeStatus: l,
                            textBrand: n,
                            textPositive: r,
                            textDanger: s,
                            endDateTimeString: i,
                            startDateTimeString: a,
                        } = e,
                        c = m.C,
                        u = n,
                        o = "text-default";
                    switch (l) {
                        case 3:
                            (u = r), (o = null != i ? void 0 : "text-feedback-positive");
                            break;
                        case 4:
                            c = x.O;
                            break;
                        case 2:
                        case 1:
                            (o = "text-brand"), (t = a);
                            break;
                        case 5:
                            u = s;
                    }
                    return { Icon: c, iconColor: u, textColor: o, tooltipText: t };
                })({
                    timeStatus: H,
                    textBrand: D,
                    textPositive: S,
                    textDanger: b,
                    endDateTimeString: P,
                    startDateTimeString: k,
                }),
            [H, D, S, b, P, k],
        ),
        M = null;
    if (null != C) {
        let e = (0, E.X7)(C);
        M = f.intl.formatToPlainString(f.t.HmKEqW, { recurrenceRule: e.toText() });
        let l = c()(t);
        M = (function (e, t) {
            let l = t.toDate(),
                n = l.toLocaleString(f.intl.currentLocale, { weekday: "long" });
            switch (e) {
                case v.z.WEEKLY:
                    return f.intl.formatToPlainString(f.t.xQM9X0, { weekday: n });
                case v.z.BIWEEKLY:
                    return f.intl.formatToPlainString(f.t.RYscac, { weekday: n });
                case v.z.MONTHLY:
                    let r = Math.ceil(l.getDate() / 7);
                    return f.intl.formatToPlainString(f.t["4ZN9Ap"], { weekday: n, nth: r });
                case v.z.YEARLY:
                    return f.intl.formatToPlainString(f.t["rXUS+j"], {
                        date: l.toLocaleString(f.intl.currentLocale, { month: "short", day: "2-digit" }),
                    });
                case v.z.WEEKDAY_ONLY:
                    return f.intl.string(f.t["2BX6bC"]);
                case v.z.WEEKEND_ONLY:
                    return f.intl.string(f.t["IEi+Rw"]);
                default:
                    return null;
            }
        })((0, E.z7)(l, C), l);
    }
    return (0, n.jsxs)(I, {
        className: i()(a, { [j.AD]: null != M }),
        tooltipText: B,
        children: [
            _ && l === A.XG.SCHEDULED
                ? (0, n.jsx)(T, {})
                : (0, n.jsx)(Y, { color: V, size: "custom", width: 20, height: 20 }),
            (0, n.jsxs)("div", {
                className: j.Zy,
                children: [
                    (0, n.jsx)(d.E, { color: W, variant: L, children: K }),
                    null != M && (0, n.jsx)(d.E, { color: "text-default", variant: "text-xs/normal", children: M }),
                ],
            }),
        ],
    });
}
