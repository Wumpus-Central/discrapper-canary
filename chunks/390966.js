n.d(t, { z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(692547),
    u = n(28664),
    d = n(481060),
    f = n(894017),
    _ = n(854698),
    p = n(849464),
    h = n(765305),
    m = n(388032),
    g = n(646615);
let E = 20;
function b(e, t) {
    let n = t.toDate(),
        r = n.toLocaleString(m.intl.currentLocale, { weekday: "long" });
    switch (e) {
        case p.z.WEEKLY:
            return m.intl.formatToPlainString(m.t.xQM9X0, { weekday: r });
        case p.z.BIWEEKLY:
            return m.intl.formatToPlainString(m.t.RYscac, { weekday: r });
        case p.z.MONTHLY:
            let i = Math.ceil(n.getDate() / 7);
            return m.intl.formatToPlainString(m.t["4ZN9Ap"], {
                weekday: r,
                nth: i,
            });
        case p.z.YEARLY:
            return m.intl.formatToPlainString(m.t["rXUS+j"], {
                date: n.toLocaleString(m.intl.currentLocale, {
                    month: "short",
                    day: "2-digit",
                }),
            });
        case p.z.WEEKDAY_ONLY:
            return m.intl.string(m.t["2BX6bC"]);
        case p.z.WEEKEND_ONLY:
            return m.intl.string(m.t["IEi+Rw"]);
        default:
            return null;
    }
}
function y(e, t, n, i, a) {
    switch (e) {
        case 1:
            return a > 0 ? m.intl.formatToPlainString(m.t.PQlCWk, { minutes: a }) : m.intl.string(m.t.WINqKV);
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
                              className: g.liveEventEndTime,
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
            endDateTimeString: o,
            startDateTimeString: s,
        } = e,
        l = d.Que,
        c = r,
        u = "header-secondary";
    switch (n) {
        case 3:
            (c = i), (u = null != o ? void 0 : "text-feedback-positive");
            break;
        case 4:
            l = d.T39;
            break;
        case 2:
        case 1:
            (u = "text-brand"), (t = s);
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
function v() {
    return (0, r.jsx)(d.IGR, {
        className: g.newBadge,
        color: c.Z.unsafe_rawColors.BRAND_260.css,
        text: (0, r.jsx)(d.Text, {
            className: g.newBadgeText,
            variant: "text-xs/bold",
            children: m.intl.string(m.t.y2b7CA),
        }),
    });
}
function I(e) {
    let { children: t, className: n, tooltipText: i } = e;
    return (0, r.jsx)("div", {
        className: o()(g.eventStatusContainer, n),
        children: (0, r.jsx)(u.u, {
            position: "right",
            text: i,
            shouldShow: null != i,
            children: (0, r.jsx)("div", {
                className: o()(g.eventStatusContainer, n),
                children: t,
            }),
        }),
    });
}
function T(e) {
    let {
            startTime: t,
            status: n,
            eventType: a,
            className: s,
            endTime: u,
            liveText: p,
            textVariant: T = "text-sm/semibold",
            isNew: S,
            recurrenceRule: A,
            guildEventId: C,
            recurrenceId: N,
        } = e,
        R = (0, d.dQu)(c.Z.colors.TEXT_BRAND).hex(),
        P = (0, d.dQu)(c.Z.colors.TEXT_FEEDBACK_POSITIVE).hex(),
        D = (0, d.dQu)(c.Z.colors.TEXT_DANGER).hex();
    null == p && (p = a === h.WX.EXTERNAL ? m.intl.string(m.t.IyZxjH) : m.intl.string(m.t["X2K3/4"]));
    let w = (0, f.Z)(N, C),
        [{ startDateTimeString: L, endDateTimeString: x, currentOrPastEvent: M, upcomingEvent: k, diffMinutes: j }, U] =
            i.useState((0, _.ub)(t, u));
    i.useEffect(() => {
        U((0, _.ub)(t, u));
        let e = setInterval(() => U((0, _.ub)(t, u)), 1000);
        return () => {
            clearInterval(e);
        };
    }, [t, u]);
    let G = L;
    null != x &&
        "" !== x &&
        (G = m.intl.formatToPlainString(m.t.tXbu7I, {
            start: L,
            end: x,
        }));
    let B = i.useMemo(
            () =>
                n === h.p1.CANCELED || (null == w ? void 0 : w.is_canceled)
                    ? 5
                    : n === h.p1.ACTIVE
                      ? 3
                      : h.$I.has(n)
                        ? 4
                        : M
                          ? 2
                          : +!!k,
            [n, null == w ? void 0 : w.is_canceled, M, k],
        ),
        Z = y(B, G, p, x, j),
        {
            Icon: F,
            iconColor: V,
            textColor: H,
            tooltipText: Y,
        } = i.useMemo(
            () =>
                O({
                    timeStatus: B,
                    textBrand: R,
                    textPositive: P,
                    textDanger: D,
                    endDateTimeString: x,
                    startDateTimeString: L,
                }),
            [B, R, P, D, x, L],
        ),
        W = null;
    if (null != A) {
        let e = (0, _.Ho)(A);
        W = m.intl.formatToPlainString(m.t.HmKEqW, { recurrenceRule: e.toText() });
        let n = l()(t);
        W = b((0, _.zi)(n, A), n);
    }
    return (0, r.jsxs)(I, {
        className: o()(s, { [g.isRecurring]: null != W }),
        tooltipText: Y,
        children: [
            S && n === h.p1.SCHEDULED
                ? (0, r.jsx)(v, {})
                : (0, r.jsx)(F, {
                      color: V,
                      size: "custom",
                      width: E,
                      height: E,
                  }),
            (0, r.jsxs)("div", {
                className: g.eventStatusLabel,
                children: [
                    (0, r.jsx)(d.Text, {
                        color: H,
                        variant: T,
                        children: Z,
                    }),
                    null != W &&
                        (0, r.jsx)(d.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: W,
                        }),
                ],
            }),
        ],
    });
}
