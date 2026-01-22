n.d(t, {
    L: () => S,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    c = n(827734),
    u = n(990078),
    d = n(397927),
    f = n(722260),
    p = n(974930),
    _ = n(604701),
    h = n(988794),
    m = n(985018),
    g = n(719247);
let E = 20;

function b(e, t) {
    let n = t.toDate(),
        r = n.toLocaleString(m.intl.currentLocale, {
            weekday: "long",
        });
    switch (e) {
        case _.z.WEEKLY:
            return m.intl.formatToPlainString(m.t.xQM9X0, {
                weekday: r,
            });
        case _.z.BIWEEKLY:
            return m.intl.formatToPlainString(m.t.RYscac, {
                weekday: r,
            });
        case _.z.MONTHLY:
            let i = Math.ceil(n.getDate() / 7);
            return m.intl.formatToPlainString(m.t["4ZN9Ap"], {
                weekday: r,
                nth: i,
            });
        case _.z.YEARLY:
            return m.intl.formatToPlainString(m.t["rXUS+j"], {
                date: n.toLocaleString(m.intl.currentLocale, {
                    month: "short",
                    day: "2-digit",
                }),
            });
        case _.z.WEEKDAY_ONLY:
            return m.intl.string(m.t["2BX6bC"]);
        case _.z.WEEKEND_ONLY:
            return m.intl.string(m.t["IEi+Rw"]);
        default:
            return null;
    }
}

function y(e, t, n, i, a) {
    switch (e) {
        case 1:
            return a > 0
                ? m.intl.formatToPlainString(m.t.PQlCWk, {
                      minutes: a,
                  })
                : m.intl.string(m.t.WINqKV);
        case 2:
            return m.intl.string(m.t.WINqKV);
        case 3:
            return null != i && "" !== i
                ? m.intl.format(m.t.vHYgJW, {
                      start: n,
                      startHook: (e) =>
                          (0, r.jsx)(d.Text, {
                              color: "text-feedback-positive",
                              variant: "text-sm/semibold",
                              className: g.Py,
                              children: e,
                          }),
                      end: i,
                  })
                : null != n
                  ? n
                  : "";
        default:
            return t;
    }
}

function O(e) {
    let t,
        {
            timeStatus: n,
            textBrand: r,
            textPositive: i,
            textDanger: a,
            endDateTimeString: s,
            startDateTimeString: o,
        } = e,
        l = d.CTc,
        c = r,
        u = "text-default";
    switch (n) {
        case 3:
            (c = i), (u = null != s ? void 0 : "text-feedback-positive");
            break;
        case 4:
            l = d.O4;
            break;
        case 2:
        case 1:
            (u = "text-brand"), (t = o);
            break;
        case 5:
            c = a;
    }
    return {
        Icon: l,
        iconColor: c,
        textColor: u,
        tooltipText: t,
    };
}

function A() {
    return (0, r.jsx)(d.LpS, {
        className: g.Ad,
        color: c.A.unsafe_rawColors.BRAND_260.css,
        text: (0, r.jsx)(d.Text, {
            className: g.rm,
            variant: "text-xs/bold",
            children: m.intl.string(m.t.y2b7CA),
        }),
    });
}

function v(e) {
    let { children: t, className: n, tooltipText: i } = e;
    return (0, r.jsx)("div", {
        className: s()(g.cd, n),
        children: (0, r.jsx)(u.m, {
            position: "right",
            text: i,
            shouldShow: null != i,
            children: (0, r.jsx)("div", {
                className: s()(g.cd, n),
                children: t,
            }),
        }),
    });
}

function S(e) {
    let {
            startTime: t,
            status: n,
            eventType: a,
            className: o,
            endTime: u,
            liveText: _,
            textVariant: S = "text-sm/semibold",
            isNew: I,
            recurrenceRule: T,
            guildEventId: C,
            recurrenceId: N,
        } = e,
        R = (0, d.rdh)(c.A.colors.TEXT_BRAND).hex(),
        w = (0, d.rdh)(c.A.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        P = (0, d.rdh)(c.A.colors.TEXT_FEEDBACK_CRITICAL).hex();
    null == _ && (_ = a === h.Ps.EXTERNAL ? m.intl.string(m.t.IyZxjH) : m.intl.string(m.t["X2K3/4"]));
    let D = (0, f.A)(N, C),
        [{ startDateTimeString: x, endDateTimeString: L, currentOrPastEvent: j, upcomingEvent: M, diffMinutes: k }, U] =
            i.useState((0, p.CC)(t, u));
    i.useEffect(() => {
        U((0, p.CC)(t, u));
        let e = setInterval(() => U((0, p.CC)(t, u)), 1e3);
        return () => {
            clearInterval(e);
        };
    }, [t, u]);
    let G = x;
    null != L &&
        "" !== L &&
        (G = m.intl.formatToPlainString(m.t.tXbu7I, {
            start: x,
            end: L,
        }));
    let V = i.useMemo(
            () =>
                n === h.XG.CANCELED || (null == D ? void 0 : D.is_canceled)
                    ? 5
                    : n === h.XG.ACTIVE
                      ? 3
                      : h.lV.has(n)
                        ? 4
                        : j
                          ? 2
                          : +!!M,
            [n, null == D ? void 0 : D.is_canceled, j, M],
        ),
        F = y(V, G, _, L, k),
        {
            Icon: B,
            iconColor: H,
            textColor: Y,
            tooltipText: W,
        } = i.useMemo(
            () =>
                O({
                    timeStatus: V,
                    textBrand: R,
                    textPositive: w,
                    textDanger: P,
                    endDateTimeString: L,
                    startDateTimeString: x,
                }),
            [V, R, w, P, L, x],
        ),
        K = null;
    if (null != T) {
        let e = (0, p.X7)(T);
        K = m.intl.formatToPlainString(m.t.HmKEqW, {
            recurrenceRule: e.toText(),
        });
        let n = l()(t);
        K = b((0, p.z7)(n, T), n);
    }
    return (0, r.jsxs)(v, {
        className: s()(o, {
            [g.AD]: null != K,
        }),
        tooltipText: W,
        children: [
            I && n === h.XG.SCHEDULED
                ? (0, r.jsx)(A, {})
                : (0, r.jsx)(B, {
                      color: H,
                      size: "custom",
                      width: E,
                      height: E,
                  }),
            (0, r.jsxs)("div", {
                className: g.Zy,
                children: [
                    (0, r.jsx)(d.Text, {
                        color: Y,
                        variant: S,
                        children: F,
                    }),
                    null != K &&
                        (0, r.jsx)(d.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            children: K,
                        }),
                ],
            }),
        ],
    });
}
