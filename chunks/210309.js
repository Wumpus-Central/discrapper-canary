let n;
s.d(t, { A: () => O });
var r = s(627968),
    i = s(64700),
    l = s(873263),
    a = s(607399),
    o = s(17928),
    c = s(707554),
    d = s(220839),
    u = s(73939),
    h = s(334465);
function p(e) {
    let { children: t, ...s } = e,
        n = (0, l.zy)(),
        a = (0, l.W6)(),
        o = null,
        c = null;
    return (
        i.Children.forEach(t, (e) => {
            if (null == o && i.isValidElement(e)) {
                let { component: t, render: s, ...r } = e.props,
                    l = r.path || r.from;
                null != (o = null != l ? (0, h.B)(n.pathname, { ...r, path: l }) : null) &&
                    ((r = { ...r, key: l, location: n, match: o, history: a }),
                    null != t ? (c = i.createElement(t, r)) : null != s && (c = s(r)));
            }
        }),
        (0, r.jsx)(u.F, { ...s, children: c })
    );
}
var f = s(942156),
    x = s(4616),
    m = s(714087);
function g(e, t) {
    let { innerWidth: s, innerHeight: n } = window;
    if (0 === e || 0 === t) return null;
    let r = t / e,
        i = s,
        l = Math.round(s * r);
    return (
        l < n && ((l = n), (i = Math.round(n * (r = e / t)))),
        { naturalWidth: e, naturalHeight: t, width: i, height: l }
    );
}
function _(e) {
    let { splash: t, children: s } = e,
        [{ width: n, height: l }, a] = i.useState({ width: 0, height: 0, naturalHeight: 0, naturalWidth: 0 });
    return (
        i.useEffect(() => {
            function e() {
                a((e) => {
                    let { naturalWidth: t, naturalHeight: s } = e;
                    return g(t, s) ?? e;
                });
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x.A, {
                    className: m.T,
                    onLoad: function (e) {
                        let { currentTarget: t } = e,
                            { naturalWidth: s, naturalHeight: n } = t,
                            r = g(s, n);
                        null != r && a(r);
                    },
                    src: t,
                    width: n,
                    height: l,
                }),
                (0, r.jsx)("div", { className: m.Q, children: s }),
            ],
        })
    );
}
var B = s(736056),
    E = s(976860),
    I = s(426660),
    A = s(652215),
    j = s(476958);
let w = s(843020),
    T = s(545044),
    R = [
        A.BVt.LOGIN,
        A.BVt.LOGIN_HANDOFF,
        A.BVt.LOGIN_ONE_TIME,
        A.BVt.REGISTER,
        A.BVt.INVITE(""),
        A.BVt.GIFT_CODE(""),
        A.BVt.GUILD_TEMPLATE_LOGIN(""),
        A.BVt.GUILD_TEMPLATE(""),
        A.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        A.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        A.BVt.BILLING_PREMIUM_SUBSCRIBE,
        A.BVt.BILLING_PAYMENT_SOURCES_CREATE,
        A.BVt.BILLING_PAYMENTS,
        A.BVt.BILLING_PREMIUM_SWITCH_PLAN,
        A.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        A.BVt.GIFT_CARD_REDEEM,
        A.BVt.VERIFY,
        A.BVt.VERIFY_HUB_EMAIL,
        A.BVt.REJECT_IP,
        A.BVt.REJECT_MFA,
        A.BVt.AUTHORIZE_IP,
        A.BVt.AUTHORIZE_PAYMENT,
        A.BVt.RESET,
        A.BVt.HANDOFF,
        A.BVt.REPORT,
        A.BVt.REPORT_SECOND_LOOK,
        A.BVt.ACCOUNT_REVERT(""),
    ];
function V(e) {
    return R.some((t) => e.startsWith(t));
}
let F = (e) => ((n = e), e),
    v = [A.BVt.VERIFY, A.BVt.VERIFY_HUB_EMAIL],
    S = [A.BVt.GIFT_CARD_REDEEM];
function L(e) {
    let { children: t } = e,
        s = (function () {
            let [e, t] = i.useState(!1),
                [s, r] = i.useState(!0),
                l = (0, o.bG)([B.A], () => B.A.hasLoadedExperiments);
            return ((0, d.A)(() => {}, 300), void 0 !== n)
                ? n
                : !s && l
                  ? (e || t(!0), F("default"))
                  : s
                    ? F("default")
                    : "loading";
        })(),
        a = (0, l.zy)(),
        c = S.includes(a.pathname),
        u = v.includes(a.pathname);
    if (c) return t;
    switch (s) {
        case "default":
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    u ? (0, r.jsx)(I.A, {}) : (0, r.jsx)("img", { className: j.xX, src: w, alt: "" }),
                    (0, r.jsx)("img", { className: j.F, src: T, alt: "" }),
                    t,
                ],
            });
        case "experimental":
        case "loading":
            return null;
    }
}
class b extends i.Component {
    constructor(e) {
        super(e), (this.state = { isMobileWidth: window.innerWidth <= 485 });
    }
    handleResize = () => {
        this.setState({ isMobileWidth: window.innerWidth <= 485 });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (V(e)) (0, E.pX)(e, t);
        else {
            let s = null != t && null != t.search ? t.search : null;
            window.location = null == s ? e : `${e}?${s}`;
        }
    }
    mobileReplaceWith(e) {
        V(e) ? (0, E.bG)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, r.jsx)(p, {
                component: i.Fragment,
                children: i.Children.map(this.props.children, (e) =>
                    i.cloneElement(e, { transitionTo: E.pX, replaceWith: E.bG }),
                ),
            });
        return (0, r.jsx)("div", {
            className: j.WA,
            children: (0, r.jsx)(c.F, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(f.A, { show: !0, className: j.wm }),
                                  (0, r.jsx)(_, { splash: e, children: t }),
                              ],
                          })
                        : (0, r.jsx)(L, { children: t }),
            }),
        });
    }
    renderMobile() {
        return (0, r.jsx)(p, {
            component: i.Fragment,
            children: i.Children.map(this.props.children, (e) =>
                i.cloneElement(e, { transitionTo: this.mobileTransitionTo, replaceWith: this.mobileReplaceWith }),
            ),
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes("GameLauncher");
        return e || a.Fr || a.v1 || t ? this.renderMobile() : this.renderDefault();
    }
}
let O = b;
