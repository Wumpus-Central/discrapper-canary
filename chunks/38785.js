n.d(t, { E: () => S, T: () => g });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(683071),
    o = n(725836);
n(321073);
var u = n(525723),
    c = n(901930),
    d = n(650170),
    p = n(900730),
    m = n(426398),
    h = n(375708),
    C = n(169797),
    E = n(270537),
    A = n(327105),
    f = n(312867);
function S(e) {
    let { className: t } = e;
    return (0, l.jsx)(C.DJ, { className: a()(f.g4, t) });
}
function y(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(s.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(i.Fragment, { children: e.directContent }, e.key);
}
function P(e) {
    return null == e || "" === e;
}
function I(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        {
            errorMessage: r,
            warningMessage: a,
            richNotices: o,
        } = (function () {
            let e,
                { errorMessage: t } = (0, c.j)({}),
                n =
                    ((e = (0, d.t4)((e) => e.selectedSkuId)),
                    (0, u.vw)({ skuId: e }) ? h.intl.format(h.t.fsOXXO, {}) : null),
                r = (function () {
                    let e = (0, d.t4)((e) => e.paymentSourceId),
                        t = (0, m.kc)(),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: r,
                            willForfeitGiftCardBalance: a,
                        } = i.useMemo(() => {
                            let n = null != e ? t.find((t) => t.id === e) : null;
                            return {
                                relocationCountry: n?.relocationCountry ?? null,
                                relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [t, e]);
                    return i.useMemo(
                        () =>
                            null == n
                                ? null
                                : {
                                      directContent: (0, l.jsx)(p.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: r,
                                          willForfeitGiftCardBalance: a,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, r, a],
                    );
                })();
            return {
                errorMessage: t,
                warningMessage: n,
                richNotices: i.useMemo(() => {
                    let e = [];
                    return null != r && e.push(r), e;
                }, [r]),
            };
        })(),
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            P(r) || null == C.current || C.current.scrollIntoView({ behavior: "smooth" });
        }, [r]),
        i.useMemo(() => {
            if (!(!P(r) || !P(a) || o.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [
                    P(r) ? null : (0, l.jsx)(s.w, { type: "critical", children: r }),
                    P(a) ? null : (0, l.jsx)(s.w, { type: "warning", children: a }),
                    o.map(y),
                ],
            });
            return (0, l.jsx)("div", {
                ref: C,
                className: f.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [r, a, o, t, n])
    );
}
function T(e) {
    return i.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => y(e)) })
                  : null != e
                    ? y(e)
                    : null,
        [e],
    );
}
function _(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: r } = e,
        a = T(t);
    return i.useMemo(
        () =>
            null != a || n
                ? n
                    ? null != a
                        ? (0, l.jsx)(I, { showUpperNoticesAboveGlobalNotices: r, children: a })
                        : (0, l.jsx)(I, {})
                    : (0, l.jsx)("div", { className: f.dD, children: a })
                : null,
        [n, a, r],
    );
}
function g(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: i,
            subscriptionDetailsContent: r,
            isStepLoading: s,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: p,
            invoiceTotalDueLabel: m = h.intl.string(A.default.R0cZsM),
            invoiceTotalDueValue: C,
            shouldShowGlobalNotices: y,
            showUpperNoticesAboveGlobalNotices: P,
            footerInlineNoticeProps: I,
            className: g,
        } = e,
        v = T(I);
    return s
        ? (0, l.jsx)(S, { className: g })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(g, { [f.pg]: null == c }),
                      children: [
                          (0, l.jsx)(_, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: y,
                              showUpperNoticesAboveGlobalNotices: P,
                          }),
                          n,
                          null != n && null != i && (0, l.jsx)("div", { className: f.ls }),
                          i,
                          null != r && (0, l.jsx)("div", { className: f.P3, children: r }),
                          (0, l.jsx)("div", { className: f.Jv, children: u }),
                          null != c && (0, l.jsx)("div", { className: f.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsxs)(o.bx, {
                      children: [
                          null != m && null != C && (0, l.jsx)(E.Qf, { className: f.NR, label: m, value: C }),
                          null != d ? (0, l.jsx)("div", { className: f.uh, children: d }) : null,
                          p,
                          null != v ? (0, l.jsx)("div", { className: f.Uu, children: v }) : null,
                      ],
                  }),
              ],
          });
}
