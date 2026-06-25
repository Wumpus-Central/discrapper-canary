s.d(e, { default: () => k });
var l = s(627968),
    a = s(64700),
    n = s(17928),
    i = s(821609),
    r = s(935462),
    h = s(534514),
    o = s(228366),
    d = s(356645),
    u = s(636537),
    c = s(568004),
    p = s(652215);
async function m(t, e, s, l) {
    if (c.A.needsToFetchBuildSize(s)) {
        o.h.dispatch({ type: "APPLICATION_BUILD_SIZE_FETCH_START", buildId: s });
        try {
            let a = await u.Bo.post({
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
var A = s(92077),
    I = s(953689),
    g = s(587895),
    P = s(235986),
    C = s(769015),
    f = s(976860),
    E = s(293066),
    S = s(775228),
    b = s(255438);
s(321073);
var T = s(834730),
    x = s(691885),
    _ = s(466472),
    j = s(19575),
    v = s(375708),
    y = s(245109);
let L = "select";
class B extends a.PureComponent {
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
        (0, _.UQ)(e),
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
            s.push({ id: L, value: L, label: v.intl.string(v.t["cL/rrq"]) }),
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
        t === L
            ? j.Ay.showOpenDialog(["openDirectory"]).then((t) => {
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
            ? (0, l.jsx)(T.E, {
                  variant: "text-sm/medium",
                  color: "text-feedback-critical",
                  className: y.z,
                  children: v.intl.string(v.t.cEUT8B),
              })
            : this.hasEnoughDiskSpace(t)
              ? null
              : (0, l.jsx)(T.E, {
                    variant: "text-sm/medium",
                    color: "text-feedback-critical",
                    className: y.z,
                    children: v.intl.string(v.t["duXbE/"]),
                });
    }
    renderLabel(t, e) {
        let { installationPathsMetadata: s } = this.props,
            l = null != e ? e : t;
        return null != s[t] && null != s[t].availableKB
            ? v.intl.formatToPlainString(v.t["Y+M3rp"], {
                  path: l,
                  size: (0, b.Xq)(s[t].availableKB, { useKibibytes: !0 }),
              })
            : l;
    }
    render() {
        let { value: t, className: e, autoFocus: s } = this.props;
        return (0, l.jsxs)("div", {
            className: e,
            children: [
                (0, l.jsx)(x.l, {
                    label: v.intl.string(v.t.WTJuNr),
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
let D = n.Ay.connectStores([S.A], () => ({
    installationPaths: S.A.installationPaths,
    installationPathsMetadata: S.A.installationPathsMetadata,
}))(B);
var N = s(548268);
class M extends a.Component {
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
                m(t, e, s, l);
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
        (0, A.oc)({
            application: s,
            branchId: l,
            buildId: t,
            manifestIds: e,
            installationPath: this.state.selectedInstallationPath,
            analyticsLocation: a,
        }),
            (0, f.pX)(p.BVt.APPLICATION_LIBRARY),
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
            text: v.intl.string(v.t.nL0WvC),
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
            "aria-label": v.intl.string(v.t.PphjtJ),
            parentComponent: "ApplicationInstallationModal",
            children: [
                null != i ? (0, l.jsx)("div", { className: N.Yi, style: { backgroundImage: `url(${i})` } }) : null,
                (0, l.jsxs)(r.rQ, {
                    justify: P.A.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(P.A.Child, {
                            grow: 1,
                            children: (0, l.jsx)(h.D, {
                                variant: "heading-lg/semibold",
                                children: v.intl.string(v.t.PphjtJ),
                            }),
                        }),
                        (0, l.jsx)(P.A.Child, { grow: 0, children: (0, l.jsx)(r.s_, { onClick: this.close }) }),
                    ],
                }),
                (0, l.jsxs)(r.$m, {
                    children: [
                        (0, l.jsxs)(P.A, {
                            align: P.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(C.A, { game: t, size: C.M.MEDIUM, className: N.Gt }),
                                (0, l.jsx)("div", { className: N.mO, children: null != t && t.name }),
                                null != e
                                    ? (0, l.jsx)("div", {
                                          className: N.hc,
                                          children: (0, b.Xq)(e, { useKibibytes: !0 }),
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsx)("div", { className: N.yF }),
                        (0, l.jsx)(D, {
                            autoFocus: !0,
                            className: N.gD,
                            value: a,
                            requiredDiskKB: e,
                            onChange: this.handleChangePath,
                        }),
                        (0, l.jsx)(I.A, {
                            eulaId: t.eulaId,
                            applicationName: t.name,
                            disabled: n,
                            onChange: this.handlePurchaseTermsChange,
                            className: N.a_,
                        }),
                    ],
                }),
                (0, l.jsx)(r.jl, { children: this.renderButton() }),
            ],
        });
    }
}
let k = n.Ay.connectStores([c.A, S.A, E.A, g.A], (t) => {
    let { applicationId: e, branchId: s } = t,
        l = c.A.getTargetBuildId(e, s);
    return {
        application: g.A.getApplication(e),
        defaultInstallationPath: S.A.defaultInstallationPath,
        buildId: l,
        manifestIds: c.A.getTargetManifests(e, s),
        buildSizeKB: null != l ? c.A.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: E.A.hasAcceptedStoreTerms,
    };
})(M);
