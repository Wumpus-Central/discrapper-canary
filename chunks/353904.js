s.d(e, { default: () => q });
var l = s(627968),
    a = s(64700),
    i = s(17928),
    n = s(821609),
    r = s(935462),
    h = s(534514),
    o = s(228366),
    c = s(356645),
    d = s(636537),
    u = s(568004),
    p = s(652215);
async function A(t, e, s, l) {
    if (u.A.needsToFetchBuildSize(s)) {
        o.h.dispatch({ type: "APPLICATION_BUILD_SIZE_FETCH_START", buildId: s });
        try {
            let a = await d.Bo.post({
                url: p.Rsh.APPLICATION_BUILD_SIZE(t, e, s),
                body: { manifest_ids: l },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            o.h.dispatch({ type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS", buildId: s, sizeKB: a.body.size_kb });
        } catch (t) {
            o.h.dispatch({ type: "APPLICATION_BUILD_SIZE_FETCH_FAIL", buildId: s });
        }
    }
}
var m = s(92077),
    I = s(503698),
    g = s.n(I),
    P = s(284009),
    C = s.n(P),
    f = s(150934),
    v = s(192308),
    x = s(834730),
    E = s(293066),
    S = s(975571),
    b = s(428262),
    T = s(375708),
    L = s(470330);
class j extends a.Component {
    state = {
        hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
        hasAcceptedWithdrawalWaiver: !1,
    };
    componentDidMount() {
        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state));
    }
    componentDidUpdate(t, e) {
        let s = this.hasAcceptedNeccessaryTerms(t, e),
            l = this.hasAcceptedNeccessaryTerms(this.props, this.state);
        l !== s && this.props.onChange(l);
    }
    hasAcceptedNeccessaryTerms(t, e) {
        return (null == t.eulaId || e.hasAcceptedEULA) && (!t.showWithdrawalWaiver || e.hasAcceptedWithdrawalWaiver);
    }
    render() {
        let {
                eulaId: t,
                applicationName: e,
                hasPreviouslyAcceptedEULA: a,
                forceShow: i,
                disabled: n,
                className: r,
                finePrint: o,
                showPricingLink: c,
                showWithdrawalWaiver: d,
                isTrial: u,
                isDiscount: A,
                subscriptionPlan: m,
                finePrintClassname: I,
            } = this.props,
            { hasAcceptedEULA: P, hasAcceptedWithdrawalWaiver: x } = this.state;
        return (C()(!u || null != m, "subscriptionPlan cannot be null if shouldShowTrialOrDiscountLayout is true"),
        i || (null != t && !a) || d)
            ? (0, l.jsxs)("div", {
                  className: r,
                  children: [
                      d &&
                          (0, l.jsx)(h.D, {
                              variant: "heading-md/semibold",
                              className: L.Hc,
                              children: T.intl.string(T.t.Ogvn5o),
                          }),
                      null != t && (i || !a)
                          ? (0, l.jsx)(f.S, {
                                checked: P,
                                onChange: (t) => this.setState({ hasAcceptedEULA: t }),
                                disabled: n,
                                label: T.intl.format(T.t.IodJKT, {
                                    applicationName: e,
                                    onClick: (e) => {
                                        (0, v.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                s.e("5096"),
                                                s.e("71568"),
                                                s.e("92064"),
                                                s.e("87297"),
                                            ]).then(s.bind(s, 294264));
                                            return (s) => (0, l.jsx)(e, { eulaId: t, ...s });
                                        }),
                                            e.preventDefault();
                                    },
                                }),
                            })
                          : null,
                      null == o ? null : (0, l.jsx)("div", { className: g()(L.aO, I), children: o }),
                      d
                          ? (0, l.jsxs)("div", {
                                className: r,
                                children: [
                                    (0, l.jsx)(f.S, {
                                        checked: x,
                                        onChange: (t) => this.setState({ hasAcceptedWithdrawalWaiver: t }),
                                        disabled: n,
                                        label: T.intl.string(T.t["DFCVN+"]),
                                    }),
                                    (0, l.jsx)("div", { className: L.aO, children: T.intl.string(T.t.jhu6zm) }),
                                ],
                            })
                          : null,
                      c &&
                          (0, l.jsxs)("div", {
                              className: L.aO,
                              children: [
                                  "*",
                                  T.intl.format(T.t["5zmY3F"], {
                                      documentationLink: S.A.getArticleURL(p.MVz.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      (0, l.jsx)(y, { isTrial: u, subscriptionPlan: m, isDiscount: A }),
                  ],
              })
            : null;
    }
}
function y(t) {
    let { isTrial: e, subscriptionPlan: s, isDiscount: a } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e &&
                null != s &&
                (0, l.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: T.intl.format(T.t["Hvo/Z5"], {
                        buttonText: (0, b.ff)(null, s),
                        interval: b.Ay.formatInterval(s?.interval),
                        cancelSubscriptionArticle: S.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: S.A.getArticleURL(p.MVz.PAID_TERMS),
                    }),
                }),
            a &&
                null != s &&
                (0, l.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: T.intl.format(T.t["Z2c+aV"], {
                        buttonText: (0, b.ff)(null, s),
                        interval: b.Ay.formatInterval(s?.interval),
                        cancelSubscriptionArticle: S.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: S.A.getArticleURL(p.MVz.PAID_TERMS),
                    }),
                }),
        ],
    });
}
let _ = i.Ay.connectStores([E.A], (t) => {
    let { eulaId: e } = t;
    return { hasPreviouslyAcceptedEULA: null != e && E.A.hasAcceptedEULA(e) };
})(j);
var N = s(587895),
    D = s(235986),
    M = s(769015),
    U = s(976860),
    B = s(775228),
    z = s(255438);
s(321073);
var O = s(691885),
    k = s(466472),
    R = s(19575),
    w = s(139189);
let F = "select";
class W extends a.PureComponent {
    state = { newInstallationPath: null };
    fetchedMetadataPaths = new Set();
    fetchAllDirectoryMetadata() {
        let { installationPaths: t } = this.props,
            e = t.map((t) => {
                let { path: e } = t;
                return e;
            }),
            { newInstallationPath: s } = this.state;
        for (let t of (null != s && e.push(s),
        (e = e.filter((t) => !this.fetchedMetadataPaths.has(t))),
        (0, k.UQ)(e),
        e))
            this.fetchedMetadataPaths.add(t);
    }
    componentDidMount() {
        this.fetchAllDirectoryMetadata();
    }
    componentDidUpdate(t) {
        this.fetchAllDirectoryMetadata(),
            (this.props.requiredDiskKB !== t.requiredDiskKB ||
                this.props.installationPathsMetadata !== t.installationPathsMetadata) &&
                this.sendChange(this.props.value);
    }
    getOptions() {
        let { installationPaths: t } = this.props,
            { newInstallationPath: e } = this.state,
            s = t.map((t) => {
                let { path: e, label: s } = t;
                return { id: e, value: e, label: this.renderLabel(e, s) };
            });
        return (
            null != e && s.push({ id: e, value: e, label: this.renderLabel(e) }),
            s.push({ id: F, value: F, label: T.intl.string(T.t["cL/rrq"]) }),
            s
        );
    }
    hasEnoughDiskSpace(t) {
        let { requiredDiskKB: e, installationPathsMetadata: s } = this.props,
            l = null != s[t] ? s[t].availableKB : null;
        return null == e || null == l || e < l;
    }
    sendChange(t) {
        let { installationPathsMetadata: e, onChange: s } = this.props,
            l = null != e[t] && !1 === e[t].hasPermission;
        s(t, l || !this.hasEnoughDiskSpace(t));
    }
    handleChange = (t) => {
        t === F
            ? R.Ay.showOpenDialog(["openDirectory"]).then((t) => {
                  if (null != t && t.length > 0) {
                      let e = t[0];
                      this.setState({
                          newInstallationPath:
                              null !=
                              this.props.installationPaths.find((t) => {
                                  let { path: s } = t;
                                  return s === e;
                              })
                                  ? null
                                  : e,
                      }),
                          this.sendChange(e);
                  }
              })
            : this.sendChange(t);
    };
    renderError() {
        let { value: t, installationPathsMetadata: e } = this.props;
        return null != e[t] && !1 === e[t].hasPermission
            ? (0, l.jsx)(x.E, {
                  variant: "text-sm/medium",
                  color: "text-feedback-critical",
                  className: w.z,
                  children: T.intl.string(T.t.cEUT8B),
              })
            : this.hasEnoughDiskSpace(t)
              ? null
              : (0, l.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: "text-feedback-critical",
                    className: w.z,
                    children: T.intl.string(T.t["duXbE/"]),
                });
    }
    renderLabel(t, e) {
        let { installationPathsMetadata: s } = this.props,
            l = null != e ? e : t;
        return null != s[t] && null != s[t].availableKB
            ? T.intl.formatToPlainString(T.t["Y+M3rp"], {
                  path: l,
                  size: (0, z.Xq)(s[t].availableKB, { useKibibytes: !0 }),
              })
            : l;
    }
    render() {
        let { value: t, className: e, autoFocus: s } = this.props;
        return (0, l.jsxs)("div", {
            className: e,
            children: [
                (0, l.jsx)(O.l, {
                    label: T.intl.string(T.t.WTJuNr),
                    autoFocus: s,
                    options: this.getOptions(),
                    value: t,
                    onSelectionChange: this.handleChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                this.renderError(),
            ],
        });
    }
}
let K = i.Ay.connectStores([B.A], () => ({
    installationPaths: B.A.installationPaths,
    installationPathsMetadata: B.A.installationPathsMetadata,
}))(W);
var V = s(442348);
class Z extends a.Component {
    state = {
        selectedInstallationPath: this.props.defaultInstallationPath,
        hasError: !1,
        isInstalling: !1,
        hasAcceptedNeccessaryTerms: !1,
    };
    isUnmounted = !1;
    fetchInstallSize() {
        let { applicationId: t, branchId: e, buildId: s, manifestIds: l, buildSizeKB: a } = this.props;
        null != s &&
            null != l &&
            null == a &&
            o.h.wait(() => {
                A(t, e, s, l);
            });
    }
    componentDidMount() {
        let { applicationId: t, branchId: e, buildId: s, manifestIds: l } = this.props;
        null == s || null == l ? (0, c.n)(t, e) : this.fetchInstallSize();
    }
    componentDidUpdate(t) {
        (this.props.buildId !== t.buildId || this.props.manifestIds !== t.manifestIds) && this.fetchInstallSize();
    }
    componentWillUnmount() {
        this.isUnmounted = !0;
    }
    handleChangePath = (t, e) => {
        this.setState({ selectedInstallationPath: t, hasError: e });
    };
    install = (t, e) => {
        let { application: s, branchId: l, analyticsLocation: a } = this.props;
        if (null == s) return null;
        (0, m.oc)({
            application: s,
            branchId: l,
            buildId: t,
            manifestIds: e,
            installationPath: this.state.selectedInstallationPath,
            analyticsLocation: a,
        }),
            (0, U.pX)(p.BVt.APPLICATION_LIBRARY),
            this.close();
    };
    handleInstall = () => {
        let { application: t, buildId: e, manifestIds: s, hasPreviouslyAcceptedStoreTerms: l } = this.props;
        if (null != e && null != s) {
            var a;
            l || o.h.dispatch({ type: "APPLICATION_STORE_ACCEPT_STORE_TERMS" }),
                null != t &&
                    null != t.eulaId &&
                    ((a = t.eulaId), o.h.dispatch({ type: "APPLICATION_STORE_ACCEPT_EULA", eulaId: a })),
                this.install(e, s);
        } else throw Error("Unexpected missing build info for non-premium product");
    };
    handlePurchaseTermsChange = (t) => {
        this.setState({ hasAcceptedNeccessaryTerms: t });
    };
    close = () => {
        this.props.onClose();
    };
    renderButton() {
        let { buildId: t } = this.props,
            { hasError: e, hasAcceptedNeccessaryTerms: s } = this.state;
        return (0, l.jsx)(n.$, {
            variant: "active",
            text: T.intl.string(T.t.nL0WvC),
            disabled: e || null == t || !s,
            onClick: this.handleInstall,
        });
    }
    render() {
        let { application: t, buildSizeKB: e, transitionState: s } = this.props,
            { selectedInstallationPath: a, isInstalling: i } = this.state,
            n = null != t && t.getSplashURL(440);
        return (0, l.jsxs)(r.EO, {
            transitionState: s,
            size: r.rI.SMALL,
            "aria-label": T.intl.string(T.t.PphjtJ),
            parentComponent: "ApplicationInstallationModal",
            children: [
                null != n ? (0, l.jsx)("div", { className: V.Yi, style: { backgroundImage: `url(${n})` } }) : null,
                (0, l.jsxs)(r.rQ, {
                    justify: D.A.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(D.A.Child, {
                            grow: 1,
                            children: (0, l.jsx)(h.D, {
                                variant: "heading-lg/semibold",
                                children: T.intl.string(T.t.PphjtJ),
                            }),
                        }),
                        (0, l.jsx)(D.A.Child, { grow: 0, children: (0, l.jsx)(r.s_, { onClick: this.close }) }),
                    ],
                }),
                (0, l.jsxs)(r.$m, {
                    children: [
                        (0, l.jsxs)(D.A, {
                            align: D.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(M.A, { game: t, size: M.M.MEDIUM, className: V.Gt }),
                                (0, l.jsx)("div", { className: V.mO, children: null != t && t.name }),
                                null != e
                                    ? (0, l.jsx)("div", {
                                          className: V.hc,
                                          children: (0, z.Xq)(e, { useKibibytes: !0 }),
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsx)("div", { className: V.yF }),
                        (0, l.jsx)(K, {
                            autoFocus: !0,
                            className: V.gD,
                            value: a,
                            requiredDiskKB: e,
                            onChange: this.handleChangePath,
                        }),
                        (0, l.jsx)(_, {
                            eulaId: t.eulaId,
                            applicationName: t.name,
                            disabled: i,
                            onChange: this.handlePurchaseTermsChange,
                            className: V.a_,
                        }),
                    ],
                }),
                (0, l.jsx)(r.jl, { children: this.renderButton() }),
            ],
        });
    }
}
let q = i.Ay.connectStores([u.A, B.A, E.A, N.A], (t) => {
    let { applicationId: e, branchId: s } = t,
        l = u.A.getTargetBuildId(e, s);
    return {
        application: N.A.getApplication(e),
        defaultInstallationPath: B.A.defaultInstallationPath,
        buildId: l,
        manifestIds: u.A.getTargetManifests(e, s),
        buildSizeKB: null != l ? u.A.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: E.A.hasAcceptedStoreTerms,
    };
})(Z);
