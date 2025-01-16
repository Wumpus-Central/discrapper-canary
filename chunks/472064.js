n.r(t), n(47120), n(411104);
var l = n(200651),
    s = n(192379),
    i = n(442837),
    a = n(481060),
    r = n(570140),
    o = n(57513),
    c = n(689241),
    h = n(447273),
    d = n(51025),
    u = n(672971),
    p = n(812206),
    m = n(600164),
    f = n(925329),
    A = n(703656),
    I = n(173747),
    g = n(850840),
    T = n(391690),
    P = n(424218),
    b = n(94692),
    v = n(981631),
    x = n(388032),
    L = n(51809);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class C extends s.Component {
    fetchInstallSize() {
        let { applicationId: e, branchId: t, buildId: n, manifestIds: l, buildSizeKB: s } = this.props;
        null != n &&
            null != l &&
            null == s &&
            r.Z.wait(() => {
                (0, c.q)(e, t, n, l);
            });
    }
    componentDidMount() {
        let { applicationId: e, branchId: t, buildId: n, manifestIds: l } = this.props;
        null == n || null == l ? (0, o.l)(e, t) : this.fetchInstallSize();
    }
    componentDidUpdate(e) {
        (this.props.buildId !== e.buildId || this.props.manifestIds !== e.manifestIds) && this.fetchInstallSize();
    }
    componentWillUnmount() {
        this.isUnmounted = !0;
    }
    renderButton() {
        let { buildId: e } = this.props,
            { hasError: t, hasAcceptedNeccessaryTerms: n } = this.state;
        return (0, l.jsx)(a.Button, {
            disabled: t || null == e || !n,
            color: a.Button.Colors.GREEN,
            onClick: this.handleInstall,
            children: x.intl.string(x.t.nL0WvL)
        });
    }
    render() {
        let { application: e, buildSizeKB: t, transitionState: n } = this.props,
            { selectedInstallationPath: s, isInstalling: i } = this.state,
            r = null != e && e.getSplashURL(440);
        return (0, l.jsxs)(a.ModalRoot, {
            transitionState: n,
            size: a.ModalSize.SMALL,
            'aria-label': x.intl.string(x.t.PphjtL),
            children: [
                null != r
                    ? (0, l.jsx)('div', {
                          className: L.splash,
                          style: { backgroundImage: 'url('.concat(r, ')') }
                      })
                    : null,
                (0, l.jsxs)(a.ModalHeader, {
                    justify: m.Z.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(m.Z.Child, {
                            grow: 1,
                            children: (0, l.jsx)(a.Heading, {
                                variant: 'heading-lg/semibold',
                                children: x.intl.string(x.t.PphjtL)
                            })
                        }),
                        (0, l.jsx)(m.Z.Child, {
                            grow: 0,
                            children: (0, l.jsx)(a.ModalCloseButton, { onClick: this.close })
                        })
                    ]
                }),
                (0, l.jsxs)(a.ModalContent, {
                    children: [
                        (0, l.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, l.jsx)(f.Z, {
                                    game: e,
                                    size: f.Z.Sizes.MEDIUM,
                                    className: L.gameIcon
                                }),
                                (0, l.jsx)('div', {
                                    className: L.gameName,
                                    children: null != e && e.name
                                }),
                                null != t
                                    ? (0, l.jsx)('div', {
                                          className: L.installSize,
                                          children: (0, P.BU)(t, { useKibibytes: !0 })
                                      })
                                    : null
                            ]
                        }),
                        (0, l.jsx)('div', { className: L.divider }),
                        (0, l.jsx)(b.Z, {
                            autoFocus: !0,
                            className: L.selector,
                            value: s,
                            requiredDiskKB: t,
                            onChange: this.handleChangePath
                        }),
                        (0, l.jsx)(u.Z, {
                            eulaId: e.eulaId,
                            applicationName: e.name,
                            disabled: i,
                            onChange: this.handlePurchaseTermsChange,
                            className: L.terms
                        })
                    ]
                }),
                (0, l.jsx)(a.ModalFooter, { children: this.renderButton() })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                selectedInstallationPath: this.props.defaultInstallationPath,
                hasError: !1,
                isInstalling: !1,
                hasAcceptedNeccessaryTerms: !1
            }),
            N(this, 'isUnmounted', !1),
            N(this, 'handleChangePath', (e, t) => {
                this.setState({
                    selectedInstallationPath: e,
                    hasError: t
                });
            }),
            N(this, 'install', (e, t) => {
                let { application: n, branchId: l, analyticsLocation: s } = this.props;
                if (null == n) return null;
                (0, d.LO)({
                    application: n,
                    branchId: l,
                    buildId: e,
                    manifestIds: t,
                    installationPath: this.state.selectedInstallationPath,
                    analyticsLocation: s
                }),
                    (0, A.uL)(v.Z5c.APPLICATION_LIBRARY),
                    this.close();
            }),
            N(this, 'handleInstall', () => {
                let { application: e, buildId: t, manifestIds: n, hasPreviouslyAcceptedStoreTerms: l } = this.props;
                if (null != t && null != n) !l && (0, h.B)(), null != e && null != e.eulaId && (0, h.D)(e.eulaId), this.install(t, n);
                else throw Error('Unexpected missing build info for non-premium product');
            }),
            N(this, 'handlePurchaseTermsChange', (e) => {
                this.setState({ hasAcceptedNeccessaryTerms: e });
            }),
            N(this, 'close', () => {
                this.props.onClose();
            });
    }
}
t.default = i.ZP.connectStores([I.Z, T.Z, g.Z, p.Z], (e) => {
    let { applicationId: t, branchId: n } = e,
        l = I.Z.getTargetBuildId(t, n);
    return {
        application: p.Z.getApplication(t),
        defaultInstallationPath: T.Z.defaultInstallationPath,
        buildId: l,
        manifestIds: I.Z.getTargetManifests(t, n),
        buildSizeKB: null != l ? I.Z.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: g.Z.hasAcceptedStoreTerms
    };
})(C);
