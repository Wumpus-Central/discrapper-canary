s.d(e, { default: () => Z });
var l = s(477900),
    a = s(582128),
    i = s(855986),
    n = s(935462),
    r = s(821609),
    h = s(534514),
    o = s(356645),
    c = s(620632),
    d = s(73153),
    u = s(568004),
    p = s(652215),
    A = s(92077),
    m = s(503698),
    I = s.n(m),
    g = s(284009),
    P = s.n(g),
    C = s(150934),
    f = s(192308),
    v = s(834730),
    E = s(293066),
    S = s(975571),
    b = s(448645),
    x = s(792996),
    T = s(468251);
class L extends a.Component {
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
                finePrintClassname: g,
            } = this.props,
            { hasAcceptedEULA: v, hasAcceptedWithdrawalWaiver: E } = this.state;
        return (P()(!u || null != m, "subscriptionPlan cannot be null if shouldShowTrialOrDiscountLayout is true"),
        i || (null != t && !a) || d)
            ? (0, l.jsxs)("div", {
                  className: r,
                  children: [
                      d &&
                          (0, l.jsx)(h.D, {
                              variant: "heading-sm/semibold",
                              className: T.Hc,
                              children: x.intl.string(x.t.Ogvn5o),
                          }),
                      null != t && (i || !a)
                          ? (0, l.jsx)(C.S, {
                                checked: v,
                                onChange: (t) => this.setState({ hasAcceptedEULA: t }),
                                disabled: n,
                                label: x.intl.format(x.t.IodJKT, {
                                    applicationName: e,
                                    onClick: (e) => {
                                        ((0, f.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                s.e(895909),
                                                s.e(490743),
                                                s.e(728053),
                                                s.e(630290),
                                                s.e(189423),
                                                s.e(738098),
                                                s.e(415695),
                                                s.e(770105),
                                                s.e(650376),
                                                s.e(322690),
                                                s.e(879315),
                                                s.e(463095),
                                                s.e(955184),
                                                s.e(414260),
                                                s.e(92064),
                                                s.e(611990),
                                            ]).then(s.bind(s, 389109));
                                            return (s) => (0, l.jsx)(e, { eulaId: t, ...s });
                                        }),
                                            e.preventDefault());
                                    },
                                }),
                            })
                          : null,
                      null == o ? null : (0, l.jsx)("div", { className: I()(T.aO, g), children: o }),
                      d
                          ? (0, l.jsxs)("div", {
                                className: r,
                                children: [
                                    (0, l.jsx)(C.S, {
                                        checked: E,
                                        onChange: (t) => this.setState({ hasAcceptedWithdrawalWaiver: t }),
                                        disabled: n,
                                        label: x.intl.string(x.t["DFCVN+"]),
                                    }),
                                    (0, l.jsx)("div", { className: T.aO, children: x.intl.string(x.t.jhu6zm) }),
                                ],
                            })
                          : null,
                      c &&
                          (0, l.jsxs)("div", {
                              className: T.aO,
                              children: [
                                  "*",
                                  x.intl.format(x.t["5zmY3F"], {
                                      documentationLink: S.A.getArticleURL(p.MVz.LOCALIZED_PRICING),
                                  }),
                              ],
                          }),
                      (0, l.jsx)(j, { isTrial: u, subscriptionPlan: m, isDiscount: A }),
                  ],
              })
            : null;
    }
}
function j(t) {
    let { isTrial: e, subscriptionPlan: s, isDiscount: a } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            e &&
                null != s &&
                (0, l.jsx)(v.E, {
                    variant: "body-xs/medium",
                    color: "interactive-text-default",
                    children: x.intl.format(x.t["Hvo/Z5"], {
                        buttonText: (0, b.ff)(null, s),
                        interval: b.Ay.formatInterval(s?.interval),
                        cancelSubscriptionArticle: S.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: S.A.getArticleURL(p.MVz.PAID_TERMS),
                    }),
                }),
            a &&
                null != s &&
                (0, l.jsx)(v.E, {
                    variant: "body-xs/medium",
                    color: "interactive-text-default",
                    children: x.intl.format(x.t["Z2c+aV"], {
                        buttonText: (0, b.ff)(null, s),
                        interval: b.Ay.formatInterval(s?.interval),
                        cancelSubscriptionArticle: S.A.getArticleURL(p.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                        paidServiceTermsArticle: S.A.getArticleURL(p.MVz.PAID_TERMS),
                    }),
                }),
        ],
    });
}
let y = i.Ay.connectStores([E.A], (t) => {
    let { eulaId: e } = t;
    return { hasPreviouslyAcceptedEULA: null != e && E.A.hasAcceptedEULA(e) };
})(L);
var _ = s(587895),
    N = s(235986),
    D = s(769015),
    M = s(976860),
    U = s(775228),
    B = s(255438);
s(321073);
var O = s(691885),
    k = s(466472),
    z = s(253400),
    R = s(725064);
let w = "select";
class F extends a.PureComponent {
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
        (this.fetchAllDirectoryMetadata(),
            (this.props.requiredDiskKB !== t.requiredDiskKB ||
                this.props.installationPathsMetadata !== t.installationPathsMetadata) &&
                this.sendChange(this.props.value));
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
            s.push({ id: w, value: w, label: x.intl.string(x.t["cL/rrq"]) }),
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
        t === w
            ? z.Ay.showOpenDialog(["openDirectory"]).then((t) => {
                  if (null != t && t.length > 0) {
                      let e = t[0];
                      (this.setState({
                          newInstallationPath:
                              null !=
                              this.props.installationPaths.find((t) => {
                                  let { path: s } = t;
                                  return s === e;
                              })
                                  ? null
                                  : e,
                      }),
                          this.sendChange(e));
                  }
              })
            : this.sendChange(t);
    };
    renderError() {
        let { value: t, installationPathsMetadata: e } = this.props;
        return null != e[t] && !1 === e[t].hasPermission
            ? (0, l.jsx)(v.E, {
                  variant: "body-sm/medium",
                  color: "text-feedback-critical",
                  className: R.z,
                  children: x.intl.string(x.t.cEUT8B),
              })
            : this.hasEnoughDiskSpace(t)
              ? null
              : (0, l.jsx)(v.E, {
                    variant: "body-sm/medium",
                    color: "text-feedback-critical",
                    className: R.z,
                    children: x.intl.string(x.t["duXbE/"]),
                });
    }
    renderLabel(t, e) {
        let { installationPathsMetadata: s } = this.props,
            l = null != e ? e : t;
        return null != s[t] && null != s[t].availableKB
            ? x.intl.formatToPlainString(x.t["Y+M3rp"], {
                  path: l,
                  size: (0, B.Xq)(s[t].availableKB, { useKibibytes: !0 }),
              })
            : l;
    }
    render() {
        let { value: t, className: e, autoFocus: s } = this.props;
        return (0, l.jsxs)("div", {
            className: e,
            children: [
                (0, l.jsx)(O.l, {
                    label: x.intl.string(x.t.WTJuNr),
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
let W = i.Ay.connectStores([U.A], () => ({
    installationPaths: U.A.installationPaths,
    installationPathsMetadata: U.A.installationPathsMetadata,
}))(F);
var K = s(566989);
class V extends a.Component {
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
            (async function (t, e, s, l) {
                if (u.A.needsToFetchBuildSize(s)) {
                    d.h.dispatch({ type: "APPLICATION_BUILD_SIZE_FETCH_START", buildId: s });
                    try {
                        let a = await c.Bo.post({
                            url: p.Rsh.APPLICATION_BUILD_SIZE(t, e, s),
                            body: { manifest_ids: l },
                            oldFormErrors: !0,
                            rejectWithError: !0,
                        });
                        d.h.dispatch({
                            type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
                            buildId: s,
                            sizeKB: a.body.size_kb,
                        });
                    } catch (t) {
                        d.h.dispatch({ type: "APPLICATION_BUILD_SIZE_FETCH_FAIL", buildId: s });
                    }
                }
            })(t, e, s, l);
    }
    componentDidMount() {
        let { applicationId: t, branchId: e, buildId: s, manifestIds: l } = this.props;
        null == s || null == l ? (0, o.n)(t, e) : this.fetchInstallSize();
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
        ((0, A.oc)({
            application: s,
            branchId: l,
            buildId: t,
            manifestIds: e,
            installationPath: this.state.selectedInstallationPath,
            analyticsLocation: a,
        }),
            (0, M.pX)(p.BVt.APPLICATION_LIBRARY),
            this.close());
    };
    handleInstall = () => {
        let { application: t, buildId: e, manifestIds: s, hasPreviouslyAcceptedStoreTerms: l } = this.props;
        if (null != e && null != s) {
            var a;
            (l || d.h.dispatch({ type: "APPLICATION_STORE_ACCEPT_STORE_TERMS" }),
                null != t &&
                    null != t.eulaId &&
                    ((a = t.eulaId), d.h.dispatch({ type: "APPLICATION_STORE_ACCEPT_EULA", eulaId: a })),
                this.install(e, s));
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
        return (0, l.jsx)(r.$, {
            variant: "active",
            text: x.intl.string(x.t.nL0WvC),
            disabled: e || null == t || !s,
            onClick: this.handleInstall,
        });
    }
    render() {
        let { application: t, buildSizeKB: e, transitionState: s } = this.props,
            { selectedInstallationPath: a, isInstalling: i } = this.state,
            r = null != t && t.getSplashURL(440);
        return (0, l.jsxs)(n.EO, {
            transitionState: s,
            size: n.rI.SMALL,
            "aria-label": x.intl.string(x.t.PphjtJ),
            parentComponent: "ApplicationInstallationModal",
            children: [
                null != r ? (0, l.jsx)("div", { className: K.Yi, style: { backgroundImage: `url(${r})` } }) : null,
                (0, l.jsxs)(n.rQ, {
                    justify: N.A.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(N.A.Child, {
                            grow: 1,
                            children: (0, l.jsx)(h.D, {
                                variant: "heading-lg/semibold",
                                children: x.intl.string(x.t.PphjtJ),
                            }),
                        }),
                        (0, l.jsx)(N.A.Child, { grow: 0, children: (0, l.jsx)(n.s_, { onClick: this.close }) }),
                    ],
                }),
                (0, l.jsxs)(n.$m, {
                    children: [
                        (0, l.jsxs)(N.A, {
                            align: N.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(D.A, { game: t, size: D.M.MEDIUM, className: K.Gt }),
                                (0, l.jsx)("div", { className: K.mO, children: null != t && t.name }),
                                null != e
                                    ? (0, l.jsx)("div", {
                                          className: K.hc,
                                          children: (0, B.Xq)(e, { useKibibytes: !0 }),
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsx)("div", { className: K.yF }),
                        (0, l.jsx)(W, {
                            autoFocus: !0,
                            className: K.gD,
                            value: a,
                            requiredDiskKB: e,
                            onChange: this.handleChangePath,
                        }),
                        (0, l.jsx)(y, {
                            eulaId: t?.eulaId,
                            applicationName: t?.name,
                            disabled: i,
                            onChange: this.handlePurchaseTermsChange,
                            className: K.a_,
                        }),
                    ],
                }),
                (0, l.jsx)(n.jl, { children: this.renderButton() }),
            ],
        });
    }
}
let Z = i.Ay.connectStores([u.A, U.A, E.A, _.A], (t) => {
    let { applicationId: e, branchId: s } = t,
        l = u.A.getTargetBuildId(e, s);
    return {
        application: _.A.getApplication(e),
        defaultInstallationPath: U.A.defaultInstallationPath,
        buildId: l,
        manifestIds: u.A.getTargetManifests(e, s),
        buildSizeKB: null != l ? u.A.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: E.A.hasAcceptedStoreTerms,
    };
})(V);
