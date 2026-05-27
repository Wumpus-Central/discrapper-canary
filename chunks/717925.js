n.d(t, { E: () => y, T: () => T });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(683071),
    o = n(289873),
    u = n(725836);
n(321073);
var c = n(349786),
    d = n(921925),
    p = n(506120),
    m = n(848584),
    h = n(327105),
    C = n(375708),
    A = n(312867);
let y = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", {
            className: r()(A.g4, t),
            children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, itemClassName: A.Je }),
        });
    },
    E = (e) =>
        null != e && "object" == typeof e && "message" in e && "type" in e
            ? (0, l.jsx)(s.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, l.jsx)(i.Fragment, { children: e.directContent }, e.key),
    P = (e) => null == e || "" === e,
    S = (e) => {
        let { children: t } = e,
            {
                errorMessage: n,
                warningMessage: a,
                richNotices: r,
            } = (() => {
                let { errorMessage: e } = (0, d.e)({}),
                    t = (0, p.P)(),
                    n = (0, c.f)();
                return {
                    errorMessage: e,
                    warningMessage: t,
                    richNotices: i.useMemo(() => {
                        let e = [];
                        return null != n && e.push(n), e;
                    }, [n]),
                };
            })(),
            o = i.useRef(null);
        return (
            i.useEffect(() => {
                P(n) || null == o.current || o.current.scrollIntoView({ behavior: "smooth" });
            }, [n]),
            i.useMemo(
                () =>
                    P(n) && P(a) && !(r.length > 0) && null == t
                        ? null
                        : (0, l.jsxs)("div", {
                              ref: o,
                              className: A.dD,
                              children: [
                                  P(n) ? null : (0, l.jsx)(s.w, { type: "critical", children: n }),
                                  P(a) ? null : (0, l.jsx)(s.w, { type: "warning", children: a }),
                                  r.map(E),
                                  t,
                              ],
                          }),
                [n, a, r, t],
            )
        );
    },
    _ = (e) =>
        i.useMemo(
            () =>
                null == e
                    ? null
                    : Array.isArray(e)
                      ? 0 === e.length
                          ? null
                          : (0, l.jsx)(l.Fragment, { children: e.map((e) => E(e)) })
                      : null != e
                        ? E(e)
                        : null,
            [e],
        ),
    f = (e) => {
        let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
            a = _(t);
        return i.useMemo(
            () =>
                null != a || n
                    ? n
                        ? null != a
                            ? (0, l.jsx)(S, { children: a })
                            : (0, l.jsx)(S, {})
                        : (0, l.jsx)("div", { className: A.dD, children: a })
                    : null,
            [n, a],
        );
    },
    T = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: i,
                subscriptionDetailsContent: a,
                isStepLoading: s,
                paymentMethodContent: o,
                invoiceSummaryContent: c,
                promotionalNoticeContent: d,
                legalContent: p,
                invoiceTotalDueLabel: E = C.intl.string(h.default.R0cZsM),
                invoiceTotalDueValue: P,
                shouldShowGlobalNotices: S,
                footerInlineNoticeProps: T,
                className: I,
            } = e,
            x = _(T);
        return s
            ? (0, l.jsx)(y, { className: I })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)("div", {
                          className: r()(I, { [A.pg]: null == c }),
                          children: [
                              (0, l.jsx)(f, { upperInlineNoticeProps: t, shouldShowGlobalNotices: S }),
                              n,
                              null != n && null != i && (0, l.jsx)("div", { className: A.ls }),
                              i,
                              null != a && (0, l.jsx)("div", { className: A.P3, children: a }),
                              (0, l.jsx)("div", { className: A.Jv, children: o }),
                              null != c && (0, l.jsx)("div", { className: A.ZF, children: c }),
                          ],
                      }),
                      (0, l.jsxs)(u.bx, {
                          children: [
                              null != E && null != P && (0, l.jsx)(m.Qf, { className: A.NR, label: E, value: P }),
                              null != d ? (0, l.jsx)("div", { className: A.uh, children: d }) : null,
                              p,
                              null != x ? (0, l.jsx)("div", { className: A.Uu, children: x }) : null,
                          ],
                      }),
                  ],
              });
    };
