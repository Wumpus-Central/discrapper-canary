n.d(t, { T_: () => T, Ed: () => f });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i),
    a = n(683071),
    s = n(725836);
n(321073);
var u = n(525723),
    c = n(901930),
    d = n(6938),
    E = n(900730),
    C = n(426398),
    h = n(375708),
    m = n(169797),
    _ = n(270537);
n(652215);
var S = n(327105),
    I = n(312867);
function f(e) {
    let { className: t } = e;
    return (0, l.jsx)(m.DJ, { className: o()(I.g4, t) });
}
function p(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function A(e) {
    return null == e || "" === e;
}
function N(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        {
            errorMessage: i,
            warningMessage: o,
            richNotices: s,
        } = (function () {
            let e,
                { errorMessage: t } = (0, c.j)({}),
                n =
                    ((e = (0, d.t4)((e) => e.selectedSkuId)),
                    (0, u.vw)({ skuId: e }) ? h.intl.format(h.t.fsOXXO, {}) : null),
                i = (function () {
                    let e = (0, d.t4)((e) => e.paymentSourceId),
                        t = (0, C.kc)(),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: o,
                        } = r.useMemo(() => {
                            let n = null != e ? t.find((t) => t.id === e) : null;
                            return {
                                relocationCountry: n?.relocationCountry ?? null,
                                relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [t, e]);
                    return r.useMemo(
                        () =>
                            null == n
                                ? null
                                : {
                                      directContent: (0, l.jsx)(E.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: i,
                                          willForfeitGiftCardBalance: o,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, i, o],
                    );
                })();
            return {
                errorMessage: t,
                warningMessage: n,
                richNotices: r.useMemo(() => {
                    let e = [];
                    return null != i && e.push(i), e;
                }, [i]),
            };
        })(),
        m = r.useRef(null);
    return (
        r.useEffect(() => {
            A(i) || null == m.current || m.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!A(i) || !A(o) || s.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [
                    A(i) ? null : (0, l.jsx)(a.w, { type: "critical", children: i }),
                    A(o) ? null : (0, l.jsx)(a.w, { type: "warning", children: o }),
                    s.map(p),
                ],
            });
            return (0, l.jsx)("div", {
                ref: m,
                className: I.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [i, o, s, t, n])
    );
}
function g(e) {
    return r.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => p(e)) })
                  : null != e
                    ? p(e)
                    : null,
        [e],
    );
}
function y(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        o = g(t);
    return r.useMemo(
        () =>
            null != o || n
                ? n
                    ? null != o
                        ? (0, l.jsx)(N, { showUpperNoticesAboveGlobalNotices: i, children: o })
                        : (0, l.jsx)(N, {})
                    : (0, l.jsx)("div", { className: I.dD, children: o })
                : null,
        [n, o, i],
    );
}
function T(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: r,
            subscriptionDetailsContent: i,
            isStepLoading: a,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: E,
            invoiceTotalDueLabel: C = h.intl.string(S.default.R0cZsM),
            invoiceTotalDueValue: m,
            shouldShowGlobalNotices: p,
            showUpperNoticesAboveGlobalNotices: A,
            footerInlineNoticeProps: N,
            className: T,
        } = e,
        R = g(N);
    return a
        ? (0, l.jsx)(f, { className: T })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: o()(T, { [I.pg]: null == c }),
                      children: [
                          (0, l.jsx)(y, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: p,
                              showUpperNoticesAboveGlobalNotices: A,
                          }),
                          n,
                          null != n && null != r && (0, l.jsx)("div", { className: I.ls }),
                          r,
                          null != i && (0, l.jsx)("div", { className: I.P3, children: i }),
                          (0, l.jsx)("div", { className: I.Jv, children: u }),
                          null != c && (0, l.jsx)("div", { className: I.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsxs)(s.bx, {
                      children: [
                          null != C && null != m && (0, l.jsx)(_.Qf, { className: I.NR, label: C, value: m }),
                          null != d ? (0, l.jsx)("div", { className: I.uh, children: d }) : null,
                          E,
                          null != R ? (0, l.jsx)("div", { className: I.Uu, children: R }) : null,
                      ],
                  }),
              ],
          });
}
