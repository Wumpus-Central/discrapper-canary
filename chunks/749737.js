n.d(t, { A: () => eg }), n(896048), n(747238), n(733351), n(457529), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(158954),
    u = n(141931),
    d = n(311907),
    f = n(562465),
    p = n(506774),
    _ = n(435371),
    h = n(397927),
    m = n(73153),
    g = n(256311),
    E = n(926919),
    b = n(246605),
    y = n(414079),
    O = n(416052),
    A = n(148810),
    v = n(380610),
    S = n(883600),
    I = n(235986),
    T = n(172272),
    C = n(53705),
    N = n(354328),
    R = n(142120),
    w = n(353171),
    P = n(735729),
    D = n(237984),
    x = n(195043),
    L = n(111162),
    j = n(274184),
    M = n(954571),
    k = n(661191),
    U = n(837921),
    G = n(544028),
    V = n(253932),
    F = n(559248),
    B = n(740625),
    H = n(524738),
    Y = n(179690),
    W = n(531525),
    K = n(652215),
    z = n(986238),
    q = n(254441),
    X = n(506823),
    Z = n(473169);
function Q(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                Q(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let et = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    en = [
        {
            id: "branch",
            value: "branch",
            label: "Branch Name",
        },
        {
            id: "id",
            value: "id",
            label: "Commit SHA",
        },
    ];
function er(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class ei extends i.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: i, error: a } = this.props,
            o = "branch" === t ? "Branch Name" : "Commit SHA";
        return (0, r.jsxs)(I.A, {
            direction: I.A.Direction.VERTICAL,
            className: s()(q.oS, Z.SX, X.N, q.nM),
            children: [
                (0, r.jsx)(y.A, {
                    className: s()(q.lL, { [q.zi]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, r.jsxs)(I.A, {
                    className: Z.QB,
                    children: [
                        (0, r.jsx)(I.A.Child, {
                            basis: "50%",
                            children: (0, r.jsx)(h.l6P, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: en,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, r.jsx)(I.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, r.jsx)(h.ksK, {
                                label: o,
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(I.A.Child, {
                    children: [
                        null != a &&
                            "" !== a &&
                            (0, r.jsx)(h.Text, {
                                className: q.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: a,
                            }),
                        (0, r.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            className: q.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, r.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            Q(this, "handleRemoveBuildOverride", () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            Q(this, "handleOverrideIdChanged", (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            Q(this, "handleOverrideTypeChanged", (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, {
                    type: e,
                    id: "",
                });
            });
    }
}
class ea extends i.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, v.bD)();
        this.setState({
            loading: !1,
            buildOverrides: e,
            loadedBuildOverrides: l().cloneDeep(e),
            errors: {},
        });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !l().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return l().without(et, ...t);
    }
    renderEmpty() {
        return (0, r.jsx)(h.ppr, {
            theme: G.A.theme,
            className: s()(Z.eT, Z.SX),
            children: (0, r.jsx)(h.SGT, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : l().map(e, (e, i) =>
                  (0, r.jsx)(
                      ei,
                      {
                          project: i,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[i],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      i,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, r.jsx)(h.Button, {
                  variant: "secondary",
                  text: "Reload App",
                  onClick: () => location.reload(),
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, r.jsx)(_.m_, {
                  text: "Generate Public Link",
                  children: (0, r.jsx)(h.K0, {
                      variant: "secondary",
                      icon: h.qYV,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.Button, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, r.jsx)(h.Button, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: er(null != t ? t : {}),
                    onClick: this.handleSaveChanges,
                    loading: e,
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: n, buildOverrides: i } = this.state;
        e = t
            ? (0, r.jsx)(h.y$y, { className: Z.QX })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let a = !n && !t && this.getAvailableProjects().length > 0,
            s =
                er(null != i ? i : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, r.jsx)(h.Text, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, r.jsx)(x.x, {
            setting: W.H.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, r.jsx)(h.nVY, {
                label: "Build Overrides",
                children: (0, r.jsxs)(h.BJc, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(h.l6P, {
                            selectionMode: "single",
                            label: "Add Build Override",
                            placeholder: "discord_project",
                            description: "Select a project to create a build override for.",
                            value: void 0,
                            options: this.getAvailableProjects().map((e) => ({
                                id: e,
                                label: e,
                                value: e,
                            })),
                            onSelectionChange: this.handleAddBuildOverride,
                            disabled: !a,
                        }),
                        s,
                        e,
                        (0, r.jsxs)(h.ButtonGroup, {
                            justify: "end",
                            children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                        }),
                    ],
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            Q(this, "state", {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1,
            }),
            Q(this, "handleAddBuildOverride", (e) => {
                if (null == e) return;
                let t = ee($({}, this.state.buildOverrides), {
                    [e]: {
                        type: "branch",
                        id: "",
                    },
                });
                this.setState({ buildOverrides: t });
            }),
            Q(this, "handleBuildOverrideUpdated", (e, t) => {
                let { buildOverrides: n } = this.state,
                    r = $({}, null != n ? n[e] : {}, t),
                    i = ee($({}, this.state.buildOverrides), { [e]: r });
                this.setState({ buildOverrides: i });
            }),
            Q(this, "handleBuildOverrideRemoved", (e) => {
                let t = $({}, this.state.buildOverrides);
                delete t[e], this.setState({ buildOverrides: t });
            }),
            Q(this, "handleDiscardChanges", () => {
                this.setState({
                    buildOverrides: l().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1,
                });
            }),
            Q(this, "handleSaveChanges", async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, A.Zk)(e);
                if (200 === t.status) {
                    let e = t.body;
                    this.setState({
                        buildOverrides: e,
                        loadedBuildOverrides: l().cloneDeep(e),
                        errors: {},
                        didSave: !0,
                        saving: !1,
                    });
                } else if (400 === t.status) {
                    let e = t.body;
                    this.setState({
                        errors: e,
                        saving: !1,
                        didSave: !1,
                    });
                } else
                    this.setState({
                        saving: !1,
                        didSave: !1,
                    });
            }),
            Q(this, "handleLinkGeneration", () => {
                let { buildOverrides: e } = this.state;
                (0, h.qfG)((t) => (0, r.jsx)(es, ee($({}, t), { buildOverrides: e })));
            });
    }
}
class es extends i.Component {
    isMobile() {
        var e;
        return er(null != (e = this.props.buildOverrides) ? e : {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: n,
                userIdEntryError: i,
                allowedVersions: a,
                allowedVersionEntry: s,
                allowedVersionEntryError: o,
                allowLoggedOut: l,
                experiments: c,
                experimentsError: u,
            } = this.state,
            d = z.fL.find((t) => t.value === e),
            f = a.map((e) => ({
                id: e,
                label: e,
                value: e,
            }));
        return (0, r.jsxs)(h.BJc, {
            gap: 20,
            children: [
                (0, r.jsx)(h.l6P, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: z.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, r.jsx)(h.l6P, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: z.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, r.jsxs)(h.BJc, {
                          gap: 20,
                          children: [
                              (0, r.jsx)(h.ksK, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: s,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: o,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: {
                                      icon: h.j96,
                                      onClick: this.handleAddAllowedVersion,
                                      "aria-label": "Add",
                                  },
                              }),
                              (0, r.jsx)(h.l6P, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: f,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === a.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, r.jsx)(h.fs1, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, r.jsx)(h.fs1, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: c,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, r.jsx)(h.dOG, {
                    label: "Allow logged out users",
                    checked: l,
                    onChange: this.handleAllowLoggedOut,
                }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, r.jsx)("div", {});
        let n = h.YCn.INFO;
        switch (t) {
            case 0:
                n = h.YCn.ERROR;
                break;
            case 1:
                n = h.YCn.WARNING;
        }
        return (0, r.jsx)(h.po8, {
            messageType: n,
            children: e,
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, r.jsx)(c.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, r.jsx)(O.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [
                {
                    variant: "primary",
                    text: "Generate Link",
                    onClick: this.handleGenerateLink,
                },
            ],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            Q(this, "state", {
                ttlSeconds: 3600,
                releaseChannel: "all",
                userIds: new Set(),
                userIdEntry: "",
                userIdEntryError: null,
                allowedVersions: [],
                allowedVersionEntry: "",
                allowedVersionEntryError: null,
                publicLink: " ",
                statusText: null,
                status: 0,
                allowLoggedOut: !1,
            }),
            Q(this, "setUserEntryError", (e) => {
                this.setState({ userIdEntryError: e });
            }),
            Q(this, "setStatusMessage", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                t.setState({
                    statusText: e,
                    status: n,
                });
            }),
            Q(this, "handleUserIDEntry", (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t,
                });
            }),
            Q(this, "setAllowedVersionError", (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            Q(this, "handleAllowedVersionEntry", (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            Q(this, "handleAllowedVersionEnter", (e) => {
                e.charCode === K.Ks6.ENTER && this.handleAddAllowedVersion();
            }),
            Q(this, "handleAddAllowedVersion", () => {
                let { allowedVersions: e, allowedVersionEntry: t } = this.state;
                return 0 === (t = t.trim()).length
                    ? this.setAllowedVersionError("Enter a valid version number!")
                    : e.indexOf(t) >= 0
                      ? this.setAllowedVersionError("You already added that version!")
                      : void this.setState({
                            allowedVersions: [...e, t],
                            allowedVersionEntry: "",
                            allowedVersionEntryError: "",
                        });
            }),
            Q(this, "handleRemoveAllowedVersion", (e) => {
                let { allowedVersions: t } = this.state;
                (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
            }),
            Q(this, "handleAllowLoggedOut", (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            Q(this, "handleExpirationChange", (e) => {
                this.setState({ ttlSeconds: e });
            }),
            Q(this, "handleReleaseChannelChange", (e) => {
                this.setState({ releaseChannel: e });
            }),
            Q(this, "handleExperiments", (e) => {
                if (0 === e.trim().length) return void this.setState({ experimentsError: void 0 });
                try {
                    let t = JSON.parse(e);
                    for (let e in t) {
                        if (null == e.match(/^[0-9]{4}\-[0-9]{2}(-|_)[a-z0-9_-]+$/))
                            return void this.setState({
                                experimentsError: "".concat(e, " is an invalid experiment name"),
                            });
                        if ("number" != typeof t[e])
                            return void this.setState({
                                experimentsError: "".concat(e, " has an invalid bucket override"),
                            });
                    }
                } catch (e) {
                    this.setState({ experimentsError: "Unable to parse experiments ".concat(e.message) });
                    return;
                }
                this.setState({
                    experiments: e,
                    experimentsError: void 0,
                });
            }),
            Q(this, "generatePayload", () => ({
                overrides: this.props.buildOverrides,
                meta: {
                    release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
                    ttl_seconds: this.state.ttlSeconds,
                    user_ids: Array.from(this.state.userIds),
                    allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
                    allow_logged_out: this.state.allowLoggedOut,
                    experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments),
                },
            })),
            Q(this, "handleGenerateLink", async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length)
                    return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, A.SB)(e);
                !1 !== t.error
                    ? this.setStatusMessage(JSON.stringify(t.error), 0)
                    : (this.setState({ publicLink: t.url.toString() }),
                      0 === e.meta.user_ids.length &&
                          this.setStatusMessage(
                              "Warning! No users added to the whitelist! This link could be used by anyone to override their build.",
                              1,
                          ));
            });
    }
}
function eo() {
    let { horizontalSpacing: e, verticalSpacing: t, maxHorizontalSpacing: n, maxVerticalSpacing: a } = (0, T.O)(),
        s = i.useMemo(() => Array.from({ length: n + 1 }, (e, t) => t), [n]),
        o = i.useMemo(() => Array.from({ length: a + 1 }, (e, t) => t), [a]),
        { cssDebuggingEnabled: l, layoutDebuggingEnabled: c } = (0, d.cf)([L.default], () => ({
            cssDebuggingEnabled: L.default.cssDebuggingEnabled,
            layoutDebuggingEnabled: L.default.layoutDebuggingEnabled,
        })),
        u = (0, N.A)("highlight_void_toggleables"),
        f = (0, N.A)("highlight_mana_components");
    return (0, r.jsxs)(h.nVY, {
        label: "Design Tools",
        children: [
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, r.jsx)(h.dOG, {
                    label: "Enable CSS Debugging",
                    description: "Display raw colors as pink. Toggling this will refresh the browser.",
                    checked: l,
                    onChange: (e) => {
                        (0, E.x)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, r.jsx)(h.dOG, {
                    label: "Enable Layout Debugging",
                    description: "Renders a grid on top of the app to help debug layout alignment issues.",
                    checked: c,
                    onChange: (e) => {
                        (0, E.x)({ layoutDebuggingEnabled: e });
                    },
                }),
            }),
            (0, r.jsxs)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, r.jsx)(h.Apm, {
                        label: "Horizontal Grid Spacing",
                        description:
                            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
                        initialValue: e,
                        minValue: 0,
                        maxValue: n,
                        markers: s,
                        onValueChange: (e) => T.O.getState().setHorizontalSpacing(e),
                        onValueRender: (e) => "".concat(Math.round(e), "px"),
                        onMarkerRender: (e) => (e % 4 == 0 ? "".concat(e) : void 0),
                        equidistant: !0,
                    }),
                    (0, r.jsx)(h.Apm, {
                        label: "Vertical Grid Spacing",
                        description:
                            "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
                        initialValue: t,
                        minValue: 0,
                        maxValue: a,
                        markers: o,
                        onValueChange: (e) => T.O.getState().setVerticalSpacing(e),
                        onValueRender: (e) => "".concat(Math.round(e), "px"),
                        onMarkerRender: (e) => (e % 4 == 0 ? "".concat(e) : void 0),
                        equidistant: !0,
                    }),
                ],
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS,
                children: (0, r.jsx)(h.dOG, {
                    label: "Highlight Mana Components",
                    description: "Highlights all Mana design system components for easier debugging",
                    checked: f,
                    onChange: (e) => (0, C.L)("highlight_mana_components", e),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES,
                children: (0, r.jsx)(h.dOG, {
                    label: "Highlight Void Toggleable Components",
                    description:
                        "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue)",
                    checked: u,
                    onChange: (e) => (0, C.L)("highlight_void_toggleables", e),
                }),
            }),
        ],
    });
}
function el() {
    let {
            isTracingRequests: e,
            isForcedCanary: t,
            isAxeEnabled: n,
            isSourceMapsEnabled: i,
            isIdleStatusIndicatorEnabled: a,
            onlyShowPreviewAppCollections: s,
            disableAppCollectionsCache: o,
            preventPopoutClose: l,
            logKeyboardMismatches: c,
        } = (0, d.cf)([L.default], () => ({
            isTracingRequests: L.default.isTracingRequests,
            isForcedCanary: L.default.isForcedCanary,
            isAxeEnabled: L.default.isAxeEnabled,
            isSourceMapsEnabled: L.default.sourceMapsEnabled,
            isIdleStatusIndicatorEnabled: L.default.isIdleStatusIndicatorEnabled,
            onlyShowPreviewAppCollections: L.default.onlyShowPreviewAppCollections,
            disableAppCollectionsCache: L.default.disableAppCollectionsCache,
            preventPopoutClose: L.default.preventPopoutClose,
            logKeyboardMismatches: L.default.logKeyboardMismatches,
        })),
        u = (0, P.A)("go_back_to_regular_input"),
        f = V.HZ.useSetting();
    return (0, r.jsxs)(h.nVY, {
        label: "Developer Flags",
        children: [
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                children: (0, r.jsx)(h.dOG, {
                    label: "Enable Tracing Requests",
                    description: "Force trace all client requests with APM",
                    checked: e,
                    onChange: (e) => (0, E.x)({ trace: e }),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_FORCED_CANARY,
                children: (0, r.jsx)(h.dOG, {
                    label: "Enable Forced Canary",
                    description: "Force all API requests to canary instances",
                    checked: t,
                    onChange: (e) => (0, E.x)({ canary: e }),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
                children: (0, r.jsx)(h.dOG, {
                    label: "Ads auto-targeting",
                    description: "Make user targetable for all active ads",
                    checked: f,
                    onChange: (e) => V.HZ.updateSetting(e),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_SOURCE_MAPS,
                children: (0, r.jsx)(h.dOG, {
                    label: "Enable source maps to be loaded on this client",
                    description: "Only enable on devices you trust.",
                    checked: i,
                    onChange: (e) => (0, E.x)({ sourceMapsEnabled: e }),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                children: (0, r.jsx)(h.dOG, {
                    label: "Enable idle status indicator",
                    description: "Displays a floating idle status indicator",
                    checked: a,
                    onChange: (e) => (0, E.x)({ idleStatusIndicatorEnabled: e }),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                children: (0, r.jsx)(h.dOG, {
                    label: "Enable Accessibility Auditing",
                    description:
                        "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
                    checked: n,
                    onChange: (e) => (0, E.x)({ axeEnabled: e }),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                children: (0, r.jsx)(h.dOG, {
                    label: "Prevent Popouts From Closing Automatically",
                    description:
                        "This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.",
                    checked: l,
                    onChange: (e) => (0, E.x)({ preventPopoutClose: e }),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
                children: (0, r.jsx)(h.dOG, {
                    label: "Enable Logging of Keyboard Mismatches",
                    description: "Logs mismatches in detected keyboard codes to the console",
                    checked: c,
                    onChange: (e) => (0, E.x)({ logKeyboardMismatches: e }),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                children: (0, r.jsx)(h.dOG, {
                    label: "Preview unpublished application collections",
                    description:
                        "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                    checked: s,
                    onChange: (e) => (0, E.x)({ onlyShowPreviewAppCollections: e }),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                children: (0, r.jsx)(h.dOG, {
                    label: "Disable application collections cache",
                    description:
                        "Disable application collections cache so that you can see updates to collections immediately.",
                    checked: o,
                    onChange: (e) => (0, E.x)({ disableAppCollectionsCache: e }),
                }),
            }),
            (0, r.jsx)(x.x, {
                setting: W.H.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
                children: (0, r.jsx)(h.dOG, {
                    label: "Disable aligning chat input to the bottom of the screen",
                    description: "Disable aligning chat input to the bottom of the screen",
                    checked: u,
                    onChange: (e) => {
                        M.default.track(K.HAw.GUILD_JOIN_FEEDBACK, {
                            reason: "disable-align-chat-input",
                            rating: e ? "yes" : "no",
                        }),
                            (0, w.s)("go_back_to_regular_input", { enabled: e });
                    },
                }),
            }),
        ],
    });
}
function ec() {
    let {
        isLoggingGatewayEvents: e,
        isLoggingOverlayEvents: t,
        isLoggingAnalyticsEvents: n,
        isAnalyticsDebuggerEnabled: i,
    } = (0, d.cf)([L.default], () => ({
        isLoggingGatewayEvents: L.default.isLoggingGatewayEvents,
        isLoggingOverlayEvents: L.default.isLoggingOverlayEvents,
        isLoggingAnalyticsEvents: L.default.isLoggingAnalyticsEvents,
        isAnalyticsDebuggerEnabled: L.default.isAnalyticsDebuggerEnabled,
    }));
    return (0, r.jsx)(x.x, {
        setting: W.H.DEVELOPER_OPTIONS_LOGGING_TAB,
        children: (0, r.jsxs)(h.nVY, {
            label: "Logging",
            children: [
                (0, r.jsx)(x.x, {
                    setting: W.H.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                    children: (0, r.jsx)(h.dOG, {
                        label: "Enable Logging of Gateway Events to Console",
                        description:
                            "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
                        checked: e,
                        onChange: (e) => (0, E.x)({ logGatewayEvents: e }),
                    }),
                }),
                (0, r.jsx)(x.x, {
                    setting: W.H.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                    children: (0, r.jsx)(h.dOG, {
                        label: "Enable Logging of Overlay RPC Events & Commands",
                        description: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
                        checked: t,
                        onChange: (e) => (0, E.x)({ logOverlayEvents: e }),
                    }),
                }),
                (0, r.jsx)(x.x, {
                    setting: W.H.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                    children: (0, r.jsx)(h.dOG, {
                        label: "Enable Logging of Analytics Events",
                        description: "Logs all analytics events to the developer console",
                        checked: n,
                        onChange: (e) => (0, E.x)({ logAnalyticsEvents: e }),
                    }),
                }),
                (0, r.jsx)(x.x, {
                    setting: W.H.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                    children: (0, r.jsx)(h.dOG, {
                        label: "Enable standard analytics debugger view",
                        description: "Displays a floating debugger with viewed impressions",
                        checked: i,
                        onChange: (e) => (0, E.x)({ analyticsDebuggerEnabled: e }),
                    }),
                }),
            ],
        }),
    });
}
function eu() {
    throw Error("Send help");
}
function ed(e) {
    U.Ay.triggerJSException(e);
}
function ef() {
    let [e, t] = i.useState(!1),
        n = () => {
            f.Bo.post({
                url: K.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0,
            });
        };
    return e
        ? {}
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: [q.NC, Z.SX].join(" "),
                      children: [
                          (0, r.jsx)(x.x, {
                              setting: W.H.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: (0, r.jsx)(h.Button, {
                                  variant: "primary",
                                  text: "Open Overlay",
                                  onClick: () => (0, D.o)(),
                              }),
                          }),
                          (0, r.jsx)(x.x, {
                              setting: W.H.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, r.jsx)(h.Button, {
                                  variant: "primary",
                                  text: "Reset Socket",
                                  onClick: () => {
                                      R.A.getSocket().close(), R.A.getSocket().connect();
                                  },
                              }),
                          }),
                          (0, r.jsx)(x.x, {
                              setting: W.H.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, r.jsx)(h.Button, {
                                  variant: "primary",
                                  text: "Clear Caches",
                                  onClick: () => {
                                      m.h.dispatch({
                                          type: "CLEAR_CACHES",
                                          reason: "Requested by user",
                                          preventWritingCachesAgainThisSession: !0,
                                          resetSocket: !0,
                                      });
                                  },
                              }),
                          }),
                          (0, r.jsx)(x.x, {
                              setting: W.H.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS,
                              children: (0, r.jsx)(h.Button, {
                                  variant: "primary",
                                  text: "Show TOTP Success",
                                  onClick: () => (0, Y.sy)(!0),
                              }),
                          }),
                          (0, r.jsx)(x.x, {
                              setting: W.H.DEVELOPER_OPTIONS_TRIGGER_SUSPICIOUS_SESSIONS,
                              children: (0, r.jsx)(h.Button, {
                                  variant: "primary",
                                  text: "Trigger Suspicious Sessions Notifications",
                                  onClick: n,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(x.x, {
                      setting: W.H.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, r.jsx)(h.nVY, {
                          label: "Crashes",
                          children: (0, r.jsxs)("div", {
                              className: q.NC,
                              children: [
                                  (0, r.jsx)(h.l6P, {
                                      label: "Native libdiscord crash",
                                      hideLabel: !0,
                                      selectionMode: "single",
                                      value: void 0,
                                      options: [
                                          {
                                              id: "none",
                                              value: void 0,
                                              label: "Native libdiscord crash",
                                          },
                                          {
                                              id: "abort",
                                              value: 0,
                                              label: "Abort()",
                                          },
                                          {
                                              id: "sigsegv",
                                              value: 1,
                                              label: "SIGSEGV()",
                                          },
                                          {
                                              id: "exception",
                                              value: 2,
                                              label: "EXCEPTION_ACCESS_VIOLATION",
                                          },
                                          {
                                              id: "fail",
                                              value: 3,
                                              label: "RaiseFailFastException",
                                          },
                                          {
                                              id: "out-of-memory",
                                              value: 4,
                                              label: "Out of Memory",
                                          },
                                      ],
                                      onSelectionChange: (e) => null != e && U.Ay.crash(e),
                                  }),
                                  (0, r.jsx)(h.l6P, {
                                      selectionMode: "single",
                                      label: "Native JS crash",
                                      hideLabel: !0,
                                      value: void 0,
                                      options: [
                                          {
                                              id: "none",
                                              value: void 0,
                                              label: "Native JS crash",
                                          },
                                          {
                                              id: "delayed-exception-in-renderer-process",
                                              value: u.qQ.RendererProcessDelayed,
                                              label: "Delayed exception in renderer process",
                                          },
                                          {
                                              id: "exception-in-renderer-process",
                                              value: u.qQ.RendererProcess,
                                              label: "Exception in renderer process",
                                          },
                                          {
                                              id: "exception-in-main-process",
                                              value: u.qQ.MainProcess,
                                              label: "Exception in main process",
                                          },
                                      ],
                                      onSelectionChange: (e) => (null != e ? ed(e) : void 0),
                                  }),
                                  (0, r.jsx)(h.Button, {
                                      variant: "primary",
                                      text: "React Crash",
                                      onClick: () => t(!0),
                                  }),
                                  (0, r.jsx)(h.Button, {
                                      variant: "primary",
                                      text: "onClick Throw",
                                      onClick: eu,
                                  }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function ep() {
    let e = (0, d.bG)([j.Ay], () => j.Ay.getSurveyOverride()),
        [t, n] = i.useState(null != e ? e : ""),
        a = (e) => {
            e.preventDefault(), t.length > 0 ? b.xr(t) : b.xr(null);
        };
    return (0, r.jsx)(x.x, {
        setting: W.H.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, r.jsx)("form", {
            className: q.Nn,
            onSubmit: a,
            children: (0, r.jsx)(h.nVY, {
                label: "Survey Override",
                description: "Copy the ID of the Survey you want to test:",
                children: (0, r.jsxs)(h.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.ksK, {
                            fullWidth: !0,
                            value: t,
                            onChange: n,
                        }),
                        (0, r.jsx)(h.Button, {
                            variant: "primary",
                            text: "Save Override",
                            type: "submit",
                        }),
                    ],
                }),
            }),
        }),
    });
}
function e_() {
    var e;
    let t = (0, d.bG)([S.A], () => S.A.overrideId()),
        [n, a] = i.useState(null != (e = S.A.overrideId()) ? e : ""),
        s = () => {
            "" === n ? g.A.setChangelogOverride(null) : g.A.setChangelogOverride(n);
        },
        o = () => {
            let e = new Date("2018-01-01");
            V.pK.updateSetting(k.default.fromTimestamp(e.getTime())), p.w.set("lastChangeLogDate", e);
        };
    return (0, r.jsx)(x.x, {
        setting: W.H.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, r.jsxs)(h.nVY, {
            label: "Changelog",
            children: [
                (0, r.jsxs)(h.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(h.ksK, {
                            label: "Changelog Override",
                            description:
                                "Enter the ID of the changelog you want to test This will override the changelog that is shown to the user.",
                            fullWidth: !0,
                            value: n,
                            onChange: a,
                        }),
                        (0, r.jsx)(h.Button, {
                            variant: "primary",
                            text: "Update Changelog",
                            onClick: s,
                            disabled: t === n,
                        }),
                    ],
                }),
                (0, r.jsx)(c.D0$, {
                    label: "Reset Changelog",
                    description: "This will reset the changelog, so it will show again on the next startup.",
                    children: (0, r.jsx)(h.Button, {
                        variant: "primary",
                        text: "Reset Changelog",
                        onClick: o,
                    }),
                }),
            ],
        }),
    });
}
function eh() {
    return (0, r.jsx)(x.x, {
        setting: W.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        children: (0, r.jsx)(h.nVY, {
            label: "Client-Side Overrides",
            children: (0, r.jsx)(F.M, {}),
        }),
    });
}
function em() {
    return (0, r.jsxs)(h.BJc, {
        gap: 24,
        children: [
            (0, r.jsx)(ea, {}),
            (0, r.jsx)(c.cGx, {}),
            (0, r.jsx)(ep, {}),
            (0, r.jsx)(c.cGx, {}),
            (0, r.jsx)(e_, {}),
            (0, r.jsx)(c.cGx, {}),
            (0, r.jsx)(eh, {}),
        ],
    });
}
let eg = function () {
    return (0, r.jsx)(B.R, {
        header: "Developer Options",
        children: (0, r.jsx)(H.A, {
            parentSetting: W.H.DEVELOPER_OPTIONS,
            settingsSection: K.nc_.DEVELOPER_OPTIONS,
            tabs: [
                {
                    title: "Overrides",
                    component: em,
                    setting: W.H.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                },
                {
                    title: "Manual Triggers",
                    component: ef,
                    setting: W.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                },
                {
                    title: "Developer Flags",
                    component: el,
                    setting: W.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                },
                {
                    title: "Logging",
                    component: ec,
                    setting: W.H.DEVELOPER_OPTIONS_LOGGING_TAB,
                },
                {
                    title: "Design Tools",
                    component: eo,
                    setting: W.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                },
            ],
        }),
    });
};
