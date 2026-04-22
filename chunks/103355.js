t.d(l, { L: () => C });
var n = t(627968),
    s = t(64700),
    i = t(503698),
    a = t.n(i),
    r = t(989349),
    c = t.n(r),
    d = t(827734),
    u = t(990078),
    o = t(834730),
    m = t(81466),
    x = t(406810),
    v = t(777666),
    h = t(602853),
    N = t(722260),
    g = t(974930),
    p = t(604701),
    j = t(988794),
    A = t(985018),
    E = t(828342);
function I() {
    return (0, n.jsx)(v.Lp, {
        className: E.Ad,
        color: d.A.unsafe_rawColors.BRAND_260.css,
        text: (0, n.jsx)(o.E, { className: E.rm, variant: "text-xs/bold", children: A.intl.string(A.t.y2b7CA) }),
    });
}
function f(e) {
    let { children: l, className: t, tooltipText: s } = e;
    return (0, n.jsx)("div", {
        className: a()(E.cd, t),
        children: (0, n.jsx)(u.m, {
            position: "right",
            text: s,
            shouldShow: null != s,
            children: (0, n.jsx)("div", { className: a()(E.cd, t), children: l }),
        }),
    });
}
function C(e) {
    let {
            startTime: l,
            status: t,
            eventType: i,
            className: r,
            endTime: u,
            liveText: v,
            textVariant: C = "text-sm/semibold",
            isNew: T,
            recurrenceRule: y,
            guildEventId: S,
            recurrenceId: _,
        } = e,
        k = (0, h.r)(d.A.colors.TEXT_BRAND).hex(),
        w = (0, h.r)(d.A.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        R = (0, h.r)(d.A.colors.TEXT_FEEDBACK_CRITICAL).hex();
    null == v && (v = i === j.Ps.EXTERNAL ? A.intl.string(A.t.IyZxjH) : A.intl.string(A.t["X2K3/4"]));
    let D = (0, N.A)(_, S),
        [{ startDateTimeString: L, endDateTimeString: b, currentOrPastEvent: P, upcomingEvent: B, diffMinutes: G }, z] =
            s.useState((0, g.CC)(l, u));
    s.useEffect(() => {
        z((0, g.CC)(l, u));
        let e = setInterval(() => z((0, g.CC)(l, u)), 1e3);
        return () => {
            clearInterval(e);
        };
    }, [l, u]);
    let O = L;
    null != b && "" !== b && (O = A.intl.formatToPlainString(A.t.tXbu7I, { start: L, end: b }));
    let X = s.useMemo(
            () => (t === j.XG.CANCELED || D?.is_canceled ? 5 : t === j.XG.ACTIVE ? 3 : j.lV.has(t) ? 4 : P ? 2 : +!!B),
            [t, D?.is_canceled, P, B],
        ),
        M = (function (e, l, t, s, i) {
            switch (e) {
                case 1:
                    return i > 0 ? A.intl.formatToPlainString(A.t.PQlCWk, { minutes: i }) : A.intl.string(A.t.WINqKV);
                case 2:
                    return A.intl.string(A.t.WINqKV);
                case 3:
                    return null != s && "" !== s
                        ? A.intl.format(A.t.vHYgJW, {
                              start: t,
                              startHook: (e) =>
                                  (0, n.jsx)(o.E, {
                                      color: "text-feedback-positive",
                                      variant: "text-sm/semibold",
                                      className: E.Py,
                                      children: e,
                                  }),
                              end: s,
                          })
                        : (t ?? "");
                default:
                    return l;
            }
        })(X, O, v, b, G),
        {
            Icon: U,
            iconColor: V,
            textColor: Y,
            tooltipText: W,
        } = s.useMemo(
            () =>
                (function (e) {
                    let l,
                        {
                            timeStatus: t,
                            textBrand: n,
                            textPositive: s,
                            textDanger: i,
                            endDateTimeString: a,
                            startDateTimeString: r,
                        } = e,
                        c = m.C,
                        d = n,
                        u = "text-default";
                    switch (t) {
                        case 3:
                            (d = s), (u = null != a ? void 0 : "text-feedback-positive");
                            break;
                        case 4:
                            c = x.O;
                            break;
                        case 2:
                        case 1:
                            (u = "text-brand"), (l = r);
                            break;
                        case 5:
                            d = i;
                    }
                    return { Icon: c, iconColor: d, textColor: u, tooltipText: l };
                })({
                    timeStatus: X,
                    textBrand: k,
                    textPositive: w,
                    textDanger: R,
                    endDateTimeString: b,
                    startDateTimeString: L,
                }),
            [X, k, w, R, b, L],
        ),
        Z = null;
    if (null != y) {
        let e = (0, g.X7)(y);
        Z = A.intl.formatToPlainString(A.t.HmKEqW, { recurrenceRule: e.toText() });
        let t = c()(l);
        Z = (function (e, l) {
            let t = l.toDate(),
                n = t.toLocaleString(A.intl.currentLocale, { weekday: "long" });
            switch (e) {
                case p.z.WEEKLY:
                    return A.intl.formatToPlainString(A.t.xQM9X0, { weekday: n });
                case p.z.BIWEEKLY:
                    return A.intl.formatToPlainString(A.t.RYscac, { weekday: n });
                case p.z.MONTHLY:
                    let s = Math.ceil(t.getDate() / 7);
                    return A.intl.formatToPlainString(A.t["4ZN9Ap"], { weekday: n, nth: s });
                case p.z.YEARLY:
                    return A.intl.formatToPlainString(A.t["rXUS+j"], {
                        date: t.toLocaleString(A.intl.currentLocale, { month: "short", day: "2-digit" }),
                    });
                case p.z.WEEKDAY_ONLY:
                    return A.intl.string(A.t["2BX6bC"]);
                case p.z.WEEKEND_ONLY:
                    return A.intl.string(A.t["IEi+Rw"]);
                default:
                    return null;
            }
        })((0, g.z7)(t, y), t);
    }
    return (0, n.jsxs)(f, {
        className: a()(r, { [E.AD]: null != Z }),
        tooltipText: W,
        children: [
            T && t === j.XG.SCHEDULED
                ? (0, n.jsx)(I, {})
                : (0, n.jsx)(U, { color: V, size: "custom", width: 20, height: 20 }),
            (0, n.jsxs)("div", {
                className: E.Zy,
                children: [
                    (0, n.jsx)(o.E, { color: Y, variant: C, children: M }),
                    null != Z && (0, n.jsx)(o.E, { color: "text-default", variant: "text-xs/normal", children: Z }),
                ],
            }),
        ],
    });
}
