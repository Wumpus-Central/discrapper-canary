n.r(e), n(47120), n(411104);
var s = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    r = n(570140),
    o = n(57513),
    h = n(689241),
    u = n(447273),
    d = n(51025),
    c = n(672971),
    p = n(812206),
    f = n(600164),
    I = n(925329),
    m = n(703656),
    g = n(173747),
    P = n(850840),
    T = n(391690),
    A = n(424218),
    C = n(94692),
    S = n(981631),
    Z = n(388032),
    _ = n(51809);
function b(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
class L extends l.Component {
    fetchInstallSize() {
        let { applicationId: t, branchId: e, buildId: n, manifestIds: s, buildSizeKB: l } = this.props;
        null != n &&
            null != s &&
            null == l &&
            r.Z.wait(() => {
                (0, h.q)(t, e, n, s);
            });
    }
    componentDidMount() {
        let { applicationId: t, branchId: e, buildId: n, manifestIds: s } = this.props;
        null == n || null == s ? (0, o.l)(t, e) : this.fetchInstallSize();
    }
    componentDidUpdate(t) {
        (this.props.buildId !== t.buildId || this.props.manifestIds !== t.manifestIds) && this.fetchInstallSize();
    }
    componentWillUnmount() {
        this.isUnmounted = !0;
    }
    renderButton() {
        let { buildId: t } = this.props,
            { hasError: e, hasAcceptedNeccessaryTerms: n } = this.state;
        return (0, s.jsx)(a.Button, {
            disabled: e || null == t || !n,
            color: a.Button.Colors.GREEN,
            onClick: this.handleInstall,
            children: Z.intl.string(Z.t.nL0WvL)
        });
    }
    render() {
        let { application: t, buildSizeKB: e, transitionState: n } = this.props,
            { selectedInstallationPath: l, isInstalling: i } = this.state,
            r = null != t && t.getSplashURL(440);
        return (0, s.jsxs)(a.ModalRoot, {
            transitionState: n,
            size: a.ModalSize.SMALL,
            'aria-label': Z.intl.string(Z.t.PphjtL),
            children: [
                null != r
                    ? (0, s.jsx)('div', {
                          className: _.splash,
                          style: { backgroundImage: 'url('.concat(r, ')') }
                      })
                    : null,
                (0, s.jsxs)(a.ModalHeader, {
                    justify: f.Z.Justify.BETWEEN,
                    children: [
                        (0, s.jsx)(f.Z.Child, {
                            grow: 1,
                            children: (0, s.jsx)(a.Heading, {
                                variant: 'heading-lg/semibold',
                                children: Z.intl.string(Z.t.PphjtL)
                            })
                        }),
                        (0, s.jsx)(f.Z.Child, {
                            grow: 0,
                            children: (0, s.jsx)(a.ModalCloseButton, { onClick: this.close })
                        })
                    ]
                }),
                (0, s.jsxs)(a.ModalContent, {
                    children: [
                        (0, s.jsxs)(f.Z, {
                            align: f.Z.Align.CENTER,
                            children: [
                                (0, s.jsx)(I.Z, {
                                    game: t,
                                    size: I.Z.Sizes.MEDIUM,
                                    className: _.gameIcon
                                }),
                                (0, s.jsx)('div', {
                                    className: _.gameName,
                                    children: null != t && t.name
                                }),
                                null != e
                                    ? (0, s.jsx)('div', {
                                          className: _.installSize,
                                          children: (0, A.BU)(e, { useKibibytes: !0 })
                                      })
                                    : null
                            ]
                        }),
                        (0, s.jsx)('div', { className: _.divider }),
                        (0, s.jsx)(C.Z, {
                            autoFocus: !0,
                            className: _.selector,
                            value: l,
                            requiredDiskKB: e,
                            onChange: this.handleChangePath
                        }),
                        (0, s.jsx)(c.Z, {
                            eulaId: t.eulaId,
                            applicationName: t.name,
                            disabled: i,
                            onChange: this.handlePurchaseTermsChange,
                            className: _.terms
                        })
                    ]
                }),
                (0, s.jsx)(a.ModalFooter, { children: this.renderButton() })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            b(this, 'state', {
                selectedInstallationPath: this.props.defaultInstallationPath,
                hasError: !1,
                isInstalling: !1,
                hasAcceptedNeccessaryTerms: !1
            }),
            b(this, 'isUnmounted', !1),
            b(this, 'handleChangePath', (t, e) => {
                this.setState({
                    selectedInstallationPath: t,
                    hasError: e
                });
            }),
            b(this, 'install', (t, e) => {
                let { application: n, branchId: s, analyticsLocation: l } = this.props;
                if (null == n) return null;
                (0, d.LO)({
                    application: n,
                    branchId: s,
                    buildId: t,
                    manifestIds: e,
                    installationPath: this.state.selectedInstallationPath,
                    analyticsLocation: l
                }),
                    (0, m.uL)(S.Z5c.APPLICATION_LIBRARY),
                    this.close();
            }),
            b(this, 'handleInstall', () => {
                let { application: t, buildId: e, manifestIds: n, hasPreviouslyAcceptedStoreTerms: s } = this.props;
                if (null != e && null != n) !s && (0, u.B)(), null != t && null != t.eulaId && (0, u.D)(t.eulaId), this.install(e, n);
                else throw Error('Unexpected missing build info for non-premium product');
            }),
            b(this, 'handlePurchaseTermsChange', (t) => {
                this.setState({ hasAcceptedNeccessaryTerms: t });
            }),
            b(this, 'close', () => {
                this.props.onClose();
            });
    }
}
e.default = i.ZP.connectStores([g.Z, T.Z, P.Z, p.Z], (t) => {
    let { applicationId: e, branchId: n } = t,
        s = g.Z.getTargetBuildId(e, n);
    return {
        application: p.Z.getApplication(e),
        defaultInstallationPath: T.Z.defaultInstallationPath,
        buildId: s,
        manifestIds: g.Z.getTargetManifests(e, n),
        buildSizeKB: null != s ? g.Z.getBuildSize(s) : null,
        hasPreviouslyAcceptedStoreTerms: P.Z.hasAcceptedStoreTerms
    };
})(L);
