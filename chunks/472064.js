s.d(e, { default: () => E }), s(388685), s(415506);
var l = s(255367),
    n = s(73800),
    a = s(442837),
    i = s(481060),
    r = s(570140),
    h = s(57513),
    o = s(689241),
    d = s(447273),
    u = s(51025),
    c = s(672971),
    p = s(812206),
    I = s(600164),
    m = s(925329),
    g = s(703656),
    f = s(173747),
    P = s(850840),
    _ = s(391690),
    T = s(424218),
    A = s(94692),
    C = s(981631),
    Z = s(388032),
    S = s(232277);
function L(t, e, s) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = s),
        t
    );
}
class b extends n.Component {
    fetchInstallSize() {
        let { applicationId: t, branchId: e, buildId: s, manifestIds: l, buildSizeKB: n } = this.props;
        null != s &&
            null != l &&
            null == n &&
            r.Z.wait(() => {
                (0, o.q)(t, e, s, l);
            });
    }
    componentDidMount() {
        let { applicationId: t, branchId: e, buildId: s, manifestIds: l } = this.props;
        null == s || null == l ? (0, h.l)(t, e) : this.fetchInstallSize();
    }
    componentDidUpdate(t) {
        (this.props.buildId !== t.buildId || this.props.manifestIds !== t.manifestIds) && this.fetchInstallSize();
    }
    componentWillUnmount() {
        this.isUnmounted = !0;
    }
    renderButton() {
        let { buildId: t } = this.props,
            { hasError: e, hasAcceptedNeccessaryTerms: s } = this.state;
        return (0, l.jsx)(i.zxk, {
            disabled: e || null == t || !s,
            color: i.zxk.Colors.GREEN,
            onClick: this.handleInstall,
            children: Z.intl.string(Z.t.nL0WvL)
        });
    }
    render() {
        let { application: t, buildSizeKB: e, transitionState: s } = this.props,
            { selectedInstallationPath: n, isInstalling: a } = this.state,
            r = null != t && t.getSplashURL(440);
        return (0, l.jsxs)(i.Y0X, {
            transitionState: s,
            size: i.CgR.SMALL,
            'aria-label': Z.intl.string(Z.t.PphjtL),
            children: [
                null != r
                    ? (0, l.jsx)('div', {
                          className: S.splash,
                          style: { backgroundImage: 'url('.concat(r, ')') }
                      })
                    : null,
                (0, l.jsxs)(i.xBx, {
                    justify: I.Z.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(I.Z.Child, {
                            grow: 1,
                            children: (0, l.jsx)(i.X6q, {
                                variant: 'heading-lg/semibold',
                                children: Z.intl.string(Z.t.PphjtL)
                            })
                        }),
                        (0, l.jsx)(I.Z.Child, {
                            grow: 0,
                            children: (0, l.jsx)(i.olH, { onClick: this.close })
                        })
                    ]
                }),
                (0, l.jsxs)(i.hzk, {
                    children: [
                        (0, l.jsxs)(I.Z, {
                            align: I.Z.Align.CENTER,
                            children: [
                                (0, l.jsx)(m.Z, {
                                    game: t,
                                    size: m.Z.Sizes.MEDIUM,
                                    className: S.gameIcon
                                }),
                                (0, l.jsx)('div', {
                                    className: S.gameName,
                                    children: null != t && t.name
                                }),
                                null != e
                                    ? (0, l.jsx)('div', {
                                          className: S.installSize,
                                          children: (0, T.BU)(e, { useKibibytes: !0 })
                                      })
                                    : null
                            ]
                        }),
                        (0, l.jsx)('div', { className: S.divider }),
                        (0, l.jsx)(A.Z, {
                            autoFocus: !0,
                            className: S.selector,
                            value: n,
                            requiredDiskKB: e,
                            onChange: this.handleChangePath
                        }),
                        (0, l.jsx)(c.Z, {
                            eulaId: t.eulaId,
                            applicationName: t.name,
                            disabled: a,
                            onChange: this.handlePurchaseTermsChange,
                            className: S.terms
                        })
                    ]
                }),
                (0, l.jsx)(i.mzw, { children: this.renderButton() })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            L(this, 'state', {
                selectedInstallationPath: this.props.defaultInstallationPath,
                hasError: !1,
                isInstalling: !1,
                hasAcceptedNeccessaryTerms: !1
            }),
            L(this, 'isUnmounted', !1),
            L(this, 'handleChangePath', (t, e) => {
                this.setState({
                    selectedInstallationPath: t,
                    hasError: e
                });
            }),
            L(this, 'install', (t, e) => {
                let { application: s, branchId: l, analyticsLocation: n } = this.props;
                if (null == s) return null;
                (0, u.LO)({
                    application: s,
                    branchId: l,
                    buildId: t,
                    manifestIds: e,
                    installationPath: this.state.selectedInstallationPath,
                    analyticsLocation: n
                }),
                    (0, g.uL)(C.Z5c.APPLICATION_LIBRARY),
                    this.close();
            }),
            L(this, 'handleInstall', () => {
                let { application: t, buildId: e, manifestIds: s, hasPreviouslyAcceptedStoreTerms: l } = this.props;
                if (null != e && null != s) l || (0, d.B)(), null != t && null != t.eulaId && (0, d.D)(t.eulaId), this.install(e, s);
                else throw Error('Unexpected missing build info for non-premium product');
            }),
            L(this, 'handlePurchaseTermsChange', (t) => {
                this.setState({ hasAcceptedNeccessaryTerms: t });
            }),
            L(this, 'close', () => {
                this.props.onClose();
            });
    }
}
let E = a.ZP.connectStores([f.Z, _.Z, P.Z, p.Z], (t) => {
    let { applicationId: e, branchId: s } = t,
        l = f.Z.getTargetBuildId(e, s);
    return {
        application: p.Z.getApplication(e),
        defaultInstallationPath: _.Z.defaultInstallationPath,
        buildId: l,
        manifestIds: f.Z.getTargetManifests(e, s),
        buildSizeKB: null != l ? f.Z.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: P.Z.hasAcceptedStoreTerms
    };
})(b);
