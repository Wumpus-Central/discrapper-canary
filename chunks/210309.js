let s;
n.d(t, { A: () => G });
var i = n(627968),
    r = n(64700),
    l = n(873263),
    a = n(607399),
    o = n(17928),
    d = n(707554),
    c = n(220839),
    u = n(73939),
    h = n(334465);
function p(e) {
    let { children: t, ...n } = e,
        s = (0, l.zy)(),
        a = (0, l.W6)(),
        o = null,
        d = null;
    return (
        r.Children.forEach(t, (e) => {
            if (null == o && r.isValidElement(e)) {
                let { component: t, render: n, ...i } = e.props,
                    l = i.path || i.from;
                null != (o = null != l ? (0, h.B)(s.pathname, { ...i, path: l }) : null) &&
                    ((i = { ...i, key: l, location: s, match: o, history: a }),
                    null != t ? (d = r.createElement(t, i)) : null != n && (d = n(i)));
            }
        }),
        (0, i.jsx)(u.F, { ...n, children: d })
    );
}
var f = n(942156),
    m = n(4616),
    x = n(714087);
function B(e, t) {
    let { innerWidth: n, innerHeight: s } = window;
    if (0 === e || 0 === t) return null;
    let i = t / e,
        r = n,
        l = Math.round(n * i);
    return (
        l < s && ((l = s), (r = Math.round(s * (i = e / t)))),
        { naturalWidth: e, naturalHeight: t, width: r, height: l }
    );
}
function E(e) {
    let { splash: t, children: n } = e,
        [{ width: s, height: l }, a] = r.useState({ width: 0, height: 0, naturalHeight: 0, naturalWidth: 0 });
    return (
        r.useEffect(() => {
            function e() {
                a((e) => {
                    let { naturalWidth: t, naturalHeight: n } = e;
                    return B(t, n) ?? e;
                });
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.A, {
                    className: x.T,
                    onLoad: function (e) {
                        let { currentTarget: t } = e,
                            { naturalWidth: n, naturalHeight: s } = t,
                            i = B(n, s);
                        null != i && a(i);
                    },
                    src: t,
                    width: s,
                    height: l,
                }),
                (0, i.jsx)("div", { className: x.Q, children: n }),
            ],
        })
    );
}
var g = n(736056),
    I = n(976860),
    _ = n(426660),
    j = n(652215),
    w = n(476958);
let A = n(843020),
    R = n(545044),
    F = [
        j.BVt.LOGIN,
        j.BVt.LOGIN_HANDOFF,
        j.BVt.LOGIN_ONE_TIME,
        j.BVt.REGISTER,
        j.BVt.INVITE(""),
        j.BVt.GIFT_CODE(""),
        j.BVt.GUILD_TEMPLATE_LOGIN(""),
        j.BVt.GUILD_TEMPLATE(""),
        j.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        j.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        j.BVt.BILLING_PREMIUM_SUBSCRIBE,
        j.BVt.BILLING_PAYMENT_SOURCES_CREATE,
        j.BVt.BILLING_PAYMENTS,
        j.BVt.BILLING_PREMIUM_SWITCH_PLAN,
        j.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        j.BVt.GIFT_CARD_REDEEM,
        j.BVt.VERIFY,
        j.BVt.VERIFY_HUB_EMAIL,
        j.BVt.REJECT_IP,
        j.BVt.REJECT_MFA,
        j.BVt.AUTHORIZE_IP,
        j.BVt.AUTHORIZE_PAYMENT,
        j.BVt.RESET,
        j.BVt.HANDOFF,
        j.BVt.REPORT,
        j.BVt.REPORT_SECOND_LOOK,
        j.BVt.ACCOUNT_REVERT(""),
    ];
function T(e) {
    return F.some((t) => e.startsWith(t));
}
let V = (e) => ((s = e), e),
    v = [j.BVt.VERIFY, j.BVt.VERIFY_HUB_EMAIL],
    L = [j.BVt.GIFT_CARD_REDEEM];
function N(e) {
    let { children: t } = e,
        n = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!0),
                l = (0, o.bG)([g.A], () => g.A.hasLoadedExperiments);
            return ((0, c.A)(() => {}, 300), void 0 !== s)
                ? s
                : !n && l
                  ? (e || t(!0), V("default"))
                  : n
                    ? V("default")
                    : "loading";
        })(),
        a = (0, l.zy)(),
        d = L.includes(a.pathname),
        u = v.includes(a.pathname);
    if (d) return t;
    switch (n) {
        case "default":
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    u ? (0, i.jsx)(_.A, {}) : (0, i.jsx)("img", { className: w.xX, src: A, alt: "" }),
                    (0, i.jsx)("img", { className: w.F, src: R, alt: "" }),
                    t,
                ],
            });
        case "experimental":
        case "loading":
            return null;
    }
}
class S extends r.Component {
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
        if (T(e)) (0, I.pX)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : `${e}?${n}`;
        }
    }
    mobileReplaceWith(e) {
        T(e) ? (0, I.bG)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(p, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (e) =>
                    r.cloneElement(e, { transitionTo: I.pX, replaceWith: I.bG }),
                ),
            });
        return (0, i.jsx)("div", {
            className: w.WA,
            children: (0, i.jsx)(d.F, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(f.A, { show: !0, className: w.wm }),
                                  (0, i.jsx)(E, { splash: e, children: t }),
                              ],
                          })
                        : (0, i.jsx)(N, { children: t }),
            }),
        });
    }
    renderMobile() {
        return (0, i.jsx)(p, {
            component: r.Fragment,
            children: r.Children.map(this.props.children, (e) =>
                r.cloneElement(e, { transitionTo: this.mobileTransitionTo, replaceWith: this.mobileReplaceWith }),
            ),
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes("GameLauncher");
        return e || a.Fr || a.v1 || t ? this.renderMobile() : this.renderDefault();
    }
}
let G = S;
