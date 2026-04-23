s.d(e, { default: () => M });
var l = s(627968),
    a = s(64700),
    n = s(17928),
    i = s(821609),
    r = s(935462),
    h = s(534514),
    o = s(228366),
    d = s(356645),
    u = s(636537),
    p = s(568004),
    c = s(652215);
async function A(t, e, s, l) {
    if (p.A.needsToFetchBuildSize(s)) {
        o.h.dispatch({ type: "APPLICATION_BUILD_SIZE_FETCH_START", buildId: s });
        try {
            let a = await u.Bo.post({
                url: c.Rsh.APPLICATION_BUILD_SIZE(t, e, s),
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
var I = s(92077),
    m = s(953689),
    _ = s(587895),
    g = s(235986),
    T = s(137177),
    C = s(976860),
    P = s(293066),
    f = s(775228),
    S = s(255438);
s(321073);
var E = s(691885),
    N = s(466472),
    y = s(19575),
    L = s(985018),
    b = s(139189);
let D = "select";
class O extends a.PureComponent {
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
        (0, N.UQ)(e),
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
            s.push({ id: D, value: D, label: L.intl.string(L.t["cL/rrq"]) }),
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
        t === D
            ? y.Ay.showOpenDialog(["openDirectory"]).then((t) => {
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
            ? (0, l.jsx)("div", { className: b.z, children: L.intl.string(L.t.cEUT8B) })
            : this.hasEnoughDiskSpace(t)
              ? null
              : (0, l.jsx)("div", { className: b.z, children: L.intl.string(L.t["duXbE/"]) });
    }
    renderLabel(t, e) {
        let { installationPathsMetadata: s } = this.props,
            l = null != e ? e : t;
        return null != s[t] && null != s[t].availableKB
            ? L.intl.formatToPlainString(L.t["Y+M3rp"], {
                  path: l,
                  size: (0, S.Xq)(s[t].availableKB, { useKibibytes: !0 }),
              })
            : l;
    }
    render() {
        let { value: t, className: e, autoFocus: s } = this.props;
        return (0, l.jsxs)("div", {
            className: e,
            children: [
                (0, l.jsx)(E.l, {
                    label: L.intl.string(L.t.WTJuNr),
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
let v = n.Ay.connectStores([f.A], () => ({
    installationPaths: f.A.installationPaths,
    installationPathsMetadata: f.A.installationPathsMetadata,
}))(O);
var x = s(442348);
class j extends a.Component {
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
        null == s || null == l ? (0, d.n)(t, e) : this.fetchInstallSize();
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
        (0, I.oc)({
            application: s,
            branchId: l,
            buildId: t,
            manifestIds: e,
            installationPath: this.state.selectedInstallationPath,
            analyticsLocation: a,
        }),
            (0, C.pX)(c.BVt.APPLICATION_LIBRARY),
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
        return (0, l.jsx)(i.$, {
            variant: "active",
            text: L.intl.string(L.t.nL0WvC),
            disabled: e || null == t || !s,
            onClick: this.handleInstall,
        });
    }
    render() {
        let { application: t, buildSizeKB: e, transitionState: s } = this.props,
            { selectedInstallationPath: a, isInstalling: n } = this.state,
            i = null != t && t.getSplashURL(440);
        return (0, l.jsxs)(r.EO, {
            transitionState: s,
            size: r.rI.SMALL,
            "aria-label": L.intl.string(L.t.PphjtJ),
            parentComponent: "ApplicationInstallationModal",
            children: [
                null != i ? (0, l.jsx)("div", { className: x.Yi, style: { backgroundImage: `url(${i})` } }) : null,
                (0, l.jsxs)(r.rQ, {
                    justify: g.A.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(g.A.Child, {
                            grow: 1,
                            children: (0, l.jsx)(h.D, {
                                variant: "heading-lg/semibold",
                                children: L.intl.string(L.t.PphjtJ),
                            }),
                        }),
                        (0, l.jsx)(g.A.Child, { grow: 0, children: (0, l.jsx)(r.s_, { onClick: this.close }) }),
                    ],
                }),
                (0, l.jsxs)(r.$m, {
                    children: [
                        (0, l.jsxs)(g.A, {
                            align: g.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(T.A, { game: t, size: T.M.MEDIUM, className: x.Gt }),
                                (0, l.jsx)("div", { className: x.mO, children: null != t && t.name }),
                                null != e
                                    ? (0, l.jsx)("div", {
                                          className: x.hc,
                                          children: (0, S.Xq)(e, { useKibibytes: !0 }),
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsx)("div", { className: x.yF }),
                        (0, l.jsx)(v, {
                            autoFocus: !0,
                            className: x.gD,
                            value: a,
                            requiredDiskKB: e,
                            onChange: this.handleChangePath,
                        }),
                        (0, l.jsx)(m.A, {
                            eulaId: t.eulaId,
                            applicationName: t.name,
                            disabled: n,
                            onChange: this.handlePurchaseTermsChange,
                            className: x.a_,
                        }),
                    ],
                }),
                (0, l.jsx)(r.jl, { children: this.renderButton() }),
            ],
        });
    }
}
let M = n.Ay.connectStores([p.A, f.A, P.A, _.A], (t) => {
    let { applicationId: e, branchId: s } = t,
        l = p.A.getTargetBuildId(e, s);
    return {
        application: _.A.getApplication(e),
        defaultInstallationPath: f.A.defaultInstallationPath,
        buildId: l,
        manifestIds: p.A.getTargetManifests(e, s),
        buildSizeKB: null != l ? p.A.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: P.A.hasAcceptedStoreTerms,
    };
})(j);
