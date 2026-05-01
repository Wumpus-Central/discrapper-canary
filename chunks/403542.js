let i;
n.d(t, { A: () => C });
var s = n(627968),
    r = n(64700),
    l = n(873263),
    a = n(607399),
    o = n(17928),
    d = n(707554),
    h = n(220839),
    c = n(897479),
    E = n(942156),
    u = n(4616),
    I = n(714087);
function B(e, t) {
    let { innerWidth: n, innerHeight: i } = window;
    if (0 === e || 0 === t) return null;
    let s = t / e,
        r = n,
        l = Math.round(n * s);
    return (
        l < i && ((l = i), (r = Math.round(i * (s = e / t)))),
        { naturalWidth: e, naturalHeight: t, width: r, height: l }
    );
}
function _(e) {
    let { splash: t, children: n } = e,
        [{ width: i, height: l }, a] = r.useState({ width: 0, height: 0, naturalHeight: 0, naturalWidth: 0 });
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
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(u.A, {
                    className: I.T,
                    onLoad: function (e) {
                        let { currentTarget: t } = e,
                            { naturalWidth: n, naturalHeight: i } = t,
                            s = B(n, i);
                        null != s && a(s);
                    },
                    src: t,
                    width: i,
                    height: l,
                }),
                (0, s.jsx)("div", { className: I.Q, children: n }),
            ],
        })
    );
}
var T = n(736056),
    V = n(976860),
    m = n(426660),
    L = n(652215),
    R = n(476958);
let A = n(843020),
    p = n(545044),
    N = [
        L.BVt.LOGIN,
        L.BVt.LOGIN_HANDOFF,
        L.BVt.LOGIN_ONE_TIME,
        L.BVt.REGISTER,
        L.BVt.INVITE(""),
        L.BVt.GIFT_CODE(""),
        L.BVt.GUILD_TEMPLATE_LOGIN(""),
        L.BVt.GUILD_TEMPLATE(""),
        L.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        L.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        L.BVt.BILLING_PREMIUM_SUBSCRIBE,
        L.BVt.BILLING_PAYMENT_SOURCES_CREATE,
        L.BVt.BILLING_PAYMENTS,
        L.BVt.BILLING_PREMIUM_SWITCH_PLAN,
        L.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        L.BVt.GIFT_CARD_REDEEM,
        L.BVt.VERIFY,
        L.BVt.VERIFY_HUB_EMAIL,
        L.BVt.REJECT_IP,
        L.BVt.REJECT_MFA,
        L.BVt.AUTHORIZE_IP,
        L.BVt.AUTHORIZE_PAYMENT,
        L.BVt.RESET,
        L.BVt.HANDOFF,
        L.BVt.REPORT,
        L.BVt.REPORT_SECOND_LOOK,
        L.BVt.ACCOUNT_REVERT(""),
    ];
function w(e) {
    return N.some((t) => e.startsWith(t));
}
let M = (e) => ((i = e), e),
    F = [L.BVt.VERIFY, L.BVt.VERIFY_HUB_EMAIL],
    G = [L.BVt.GIFT_CARD_REDEEM];
function O(e) {
    let { children: t } = e,
        n = (function () {
            let [e, t] = r.useState(!1),
                [n, s] = r.useState(!0),
                l = (0, o.bG)([T.A], () => T.A.hasLoadedExperiments);
            return ((0, h.A)(() => {}, 300), void 0 !== i)
                ? i
                : !n && l
                  ? (e || t(!0), M("default"))
                  : n
                    ? M("default")
                    : "loading";
        })(),
        a = (0, l.zy)(),
        d = G.includes(a.pathname),
        c = F.includes(a.pathname);
    if (d) return t;
    switch (n) {
        case "default":
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    c ? (0, s.jsx)(m.A, {}) : (0, s.jsx)("img", { className: R.xX, src: A, alt: "" }),
                    (0, s.jsx)("img", { className: R.F, src: p, alt: "" }),
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
        if (w(e)) (0, V.pX)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : `${e}?${n}`;
        }
    }
    mobileReplaceWith(e) {
        w(e) ? (0, V.bG)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, s.jsx)(c.A, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (e) =>
                    r.cloneElement(e, { transitionTo: V.pX, replaceWith: V.bG }),
                ),
            });
        return (0, s.jsx)("div", {
            className: R.WA,
            children: (0, s.jsx)(d.F, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(E.A, { show: !0, className: R.wm }),
                                  (0, s.jsx)(_, { splash: e, children: t }),
                              ],
                          })
                        : (0, s.jsx)(O, { children: t }),
            }),
        });
    }
    renderMobile() {
        return (0, s.jsx)(c.A, {
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
let C = S;
