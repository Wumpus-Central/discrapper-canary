n.d(t, {
    L: () => f,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(989349),
    c = n.n(a),
    o = n(827734),
    u = n(990078),
    d = n(397927),
    m = n(722260),
    v = n(974930),
    p = n(604701),
    x = n(988794),
    g = n(985018),
    j = n(719247);

function h() {
    return (0, l.jsx)(d.LpS, {
        className: j.Ad,
        color: o.A.unsafe_rawColors.BRAND_260.css,
        text: (0, l.jsx)(d.Text, {
            className: j.rm,
            variant: "text-xs/bold",
            children: g.intl.string(g.t.y2b7CA),
        }),
    });
}

function N(e) {
    let { children: t, className: n, tooltipText: r } = e;
    return (0, l.jsx)("div", {
        className: s()(j.cd, n),
        children: (0, l.jsx)(u.m, {
            position: "right",
            text: r,
            shouldShow: null != r,
            children: (0, l.jsx)("div", {
                className: s()(j.cd, n),
                children: t,
            }),
        }),
    });
}

function f(e) {
    let {
            startTime: t,
            status: n,
            eventType: i,
            className: a,
            endTime: u,
            liveText: f,
            textVariant: y = "text-sm/semibold",
            isNew: E,
            recurrenceRule: b,
            guildEventId: I,
            recurrenceId: A,
        } = e,
        C = (0, d.rdh)(o.A.colors.TEXT_BRAND).hex(),
        O = (0, d.rdh)(o.A.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        T = (0, d.rdh)(o.A.colors.TEXT_FEEDBACK_CRITICAL).hex();
    null == f && (f = i === x.Ps.EXTERNAL ? g.intl.string(g.t.IyZxjH) : g.intl.string(g.t["X2K3/4"]));
    let S = (0, m.A)(A, I),
        [{ startDateTimeString: P, endDateTimeString: w, currentOrPastEvent: _, upcomingEvent: k, diffMinutes: D }, R] =
            r.useState((0, v.CC)(t, u));
    r.useEffect(() => {
        R((0, v.CC)(t, u));
        let e = setInterval(() => R((0, v.CC)(t, u)), 1e3);
        return () => {
            clearInterval(e);
        };
    }, [t, u]);
    let L = P;
    null != w &&
        "" !== w &&
        (L = g.intl.formatToPlainString(g.t.tXbu7I, {
            start: P,
            end: w,
        }));
    let B = r.useMemo(
            () =>
                n === x.XG.CANCELED || (null == S ? void 0 : S.is_canceled)
                    ? 5
                    : n === x.XG.ACTIVE
                      ? 3
                      : x.lV.has(n)
                        ? 4
                        : _
                          ? 2
                          : +!!k,
            [n, null == S ? void 0 : S.is_canceled, _, k],
        ),
        G = (function (e, t, n, r, i) {
            switch (e) {
                case 1:
                    return i > 0
                        ? g.intl.formatToPlainString(g.t.PQlCWk, {
                              minutes: i,
                          })
                        : g.intl.string(g.t.WINqKV);
                case 2:
                    return g.intl.string(g.t.WINqKV);
                case 3:
                    return null != r && "" !== r
                        ? g.intl.format(g.t.vHYgJW, {
                              start: n,
                              startHook: (e) =>
                                  (0, l.jsx)(d.Text, {
                                      color: "text-feedback-positive",
                                      variant: "text-sm/semibold",
                                      className: j.Py,
                                      children: e,
                                  }),
                              end: r,
                          })
                        : null != n
                          ? n
                          : "";
                default:
                    return t;
            }
        })(B, L, f, w, D),
        {
            Icon: z,
            iconColor: U,
            textColor: X,
            tooltipText: M,
        } = r.useMemo(
            () =>
                (function (e) {
                    let t,
                        {
                            timeStatus: n,
                            textBrand: l,
                            textPositive: r,
                            textDanger: i,
                            endDateTimeString: s,
                            startDateTimeString: a,
                        } = e,
                        c = d.CTc,
                        o = l,
                        u = "text-default";
                    switch (n) {
                        case 3:
                            (o = r), (u = null != s ? void 0 : "text-feedback-positive");
                            break;
                        case 4:
                            c = d.O4;
                            break;
                        case 2:
                        case 1:
                            (u = "text-brand"), (t = a);
                            break;
                        case 5:
                            o = i;
                    }
                    return {
                        Icon: c,
                        iconColor: o,
                        textColor: u,
                        tooltipText: t,
                    };
                })({
                    timeStatus: B,
                    textBrand: C,
                    textPositive: O,
                    textDanger: T,
                    endDateTimeString: w,
                    startDateTimeString: P,
                }),
            [B, C, O, T, w, P],
        ),
        V = null;
    if (null != b) {
        let e = (0, v.X7)(b);
        V = g.intl.formatToPlainString(g.t.HmKEqW, {
            recurrenceRule: e.toText(),
        });
        let n = c()(t);
        V = (function (e, t) {
            let n = t.toDate(),
                l = n.toLocaleString(g.intl.currentLocale, {
                    weekday: "long",
                });
            switch (e) {
                case p.z.WEEKLY:
                    return g.intl.formatToPlainString(g.t.xQM9X0, {
                        weekday: l,
                    });
                case p.z.BIWEEKLY:
                    return g.intl.formatToPlainString(g.t.RYscac, {
                        weekday: l,
                    });
                case p.z.MONTHLY:
                    let r = Math.ceil(n.getDate() / 7);
                    return g.intl.formatToPlainString(g.t["4ZN9Ap"], {
                        weekday: l,
                        nth: r,
                    });
                case p.z.YEARLY:
                    return g.intl.formatToPlainString(g.t["rXUS+j"], {
                        date: n.toLocaleString(g.intl.currentLocale, {
                            month: "short",
                            day: "2-digit",
                        }),
                    });
                case p.z.WEEKDAY_ONLY:
                    return g.intl.string(g.t["2BX6bC"]);
                case p.z.WEEKEND_ONLY:
                    return g.intl.string(g.t["IEi+Rw"]);
                default:
                    return null;
            }
        })((0, v.z7)(n, b), n);
    }
    return (0, l.jsxs)(N, {
        className: s()(a, {
            [j.AD]: null != V,
        }),
        tooltipText: M,
        children: [
            E && n === x.XG.SCHEDULED
                ? (0, l.jsx)(h, {})
                : (0, l.jsx)(z, {
                      color: U,
                      size: "custom",
                      width: 20,
                      height: 20,
                  }),
            (0, l.jsxs)("div", {
                className: j.Zy,
                children: [
                    (0, l.jsx)(d.Text, {
                        color: X,
                        variant: y,
                        children: G,
                    }),
                    null != V &&
                        (0, l.jsx)(d.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            children: V,
                        }),
                ],
            }),
        ],
    });
}
