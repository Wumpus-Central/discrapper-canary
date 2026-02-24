n.d(t, { A: () => eA, s: () => ei });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(735438),
    o = n.n(r),
    c = n(158954),
    d = n(141931),
    u = n(311907),
    _ = n(562465),
    m = n(506774),
    A = n(435371),
    g = n(397927),
    h = n(73153),
    x = n(256311),
    p = n(926919),
    E = n(246605),
    C = n(414079),
    T = n(416052),
    S = n(148810),
    I = n(380610),
    f = n(883600),
    N = n(235986),
    b = n(172272),
    j = n(263834),
    v = n(865116),
    O = n(53705),
    R = n(354328),
    y = n(142120),
    P = n(353171),
    L = n(735729),
    D = n(237984),
    G = n(195043),
    M = n(111162),
    U = n(274184),
    k = n(954571),
    V = n(661191),
    w = n(837921),
    H = n(544028),
    B = n(253932),
    Y = n(559248),
    F = n(740625),
    z = n(524738),
    W = n(179690),
    K = n(531525),
    Z = n(652215),
    q = n(986238),
    X = n(22999),
    Q = n(436833),
    J = n(522759);
let $ = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    ee = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function et(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class en extends s.Component {
    handleRemoveBuildOverride = () => {
        this.props.onBuildOverrideRemoved(this.props.project);
    };
    handleOverrideIdChanged = (e) => {
        this.props.onBuildOverrideUpdated(this.props.project, { id: e });
    };
    handleOverrideTypeChanged = (e) => {
        this.props.onBuildOverrideUpdated(this.props.project, { type: e, id: "" });
    };
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: s, error: a } = this.props;
        return (0, i.jsxs)(N.A, {
            direction: N.A.Direction.VERTICAL,
            className: l()(X.oS, J.SX, Q.N, X.nM),
            children: [
                (0, i.jsx)(C.A, {
                    className: l()(X.lL, { [X.zi]: s }),
                    onClick: s ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, i.jsxs)(N.A, {
                    className: J.QB,
                    children: [
                        (0, i.jsx)(N.A.Child, {
                            basis: "50%",
                            children: (0, i.jsx)(g.l6P, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: ee,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: s,
                            }),
                        }),
                        (0, i.jsx)(N.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, i.jsx)(g.ksK, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: s,
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(N.A.Child, {
                    children: [
                        null != a &&
                            "" !== a &&
                            (0, i.jsx)(g.Text, {
                                className: X.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: a,
                            }),
                        (0, i.jsxs)(g.Text, {
                            variant: "text-sm/normal",
                            className: X.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, i.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class ei extends s.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, I.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: o().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !o().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return o().without($, ...t);
    }
    handleAddBuildOverride = (e) => {
        if (null == e) return;
        let t = { ...this.state.buildOverrides, [e]: { type: "branch", id: "" } };
        this.setState({ buildOverrides: t });
    };
    handleBuildOverrideUpdated = (e, t) => {
        let { buildOverrides: n } = this.state,
            i = { ...(null != n ? n[e] : {}), ...t },
            s = { ...this.state.buildOverrides, [e]: i };
        this.setState({ buildOverrides: s });
    };
    handleBuildOverrideRemoved = (e) => {
        let t = { ...this.state.buildOverrides };
        delete t[e], this.setState({ buildOverrides: t });
    };
    handleDiscardChanges = () => {
        this.setState({ buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, S.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: o().cloneDeep(e),
                errors: {},
                didSave: !0,
                saving: !1,
            });
        } else if (400 === t.status) {
            let e = t.body;
            this.setState({ errors: e, saving: !1, didSave: !1 });
        } else this.setState({ saving: !1, didSave: !1 });
    };
    handleLinkGeneration = () => {
        let { buildOverrides: e } = this.state;
        (0, g.qfG)((t) => (0, i.jsx)(es, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, i.jsx)(g.ppr, {
            theme: H.A.theme,
            className: l()(J.eT, J.SX),
            children: (0, i.jsx)(g.SGT, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : o().map(e, (e, s) =>
                  (0, i.jsx)(
                      en,
                      {
                          project: s,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[s],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      s,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, i.jsx)(g.Button, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, i.jsx)(A.m_, {
                  text: "Generate Public Link",
                  children: (0, i.jsx)(g.K0, {
                      variant: "secondary",
                      icon: g.qYV,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.Button, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, i.jsx)(g.Button, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: et(t ?? {}),
                    onClick: this.handleSaveChanges,
                    loading: e,
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: n, buildOverrides: s } = this.state;
        e = t
            ? (0, i.jsx)(g.y$y, { className: J.QX })
            : null != s && 0 === Object.keys(s).length
              ? this.renderEmpty()
              : this.renderItems();
        let a = !n && !t && this.getAvailableProjects().length > 0,
            l =
                et(s ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, i.jsx)(g.Text, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, i.jsx)(G.x, {
            setting: K.H.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, i.jsx)(g.nVY, {
                children: (0, i.jsxs)(g.BJc, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(g.l6P, {
                            selectionMode: "single",
                            label: "Add Build Override",
                            placeholder: "discord_project",
                            description: "Select a project to create a build override for.",
                            layout: "horizontal-responsive",
                            value: void 0,
                            options: this.getAvailableProjects().map((e) => ({ id: e, label: e, value: e })),
                            onSelectionChange: this.handleAddBuildOverride,
                            disabled: !a,
                        }),
                        l,
                        e,
                        (0, i.jsxs)(g.ButtonGroup, {
                            justify: "end",
                            children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                        }),
                    ],
                }),
            }),
        });
    }
}
class es extends s.Component {
    state = {
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
    };
    setUserEntryError = (e) => {
        this.setState({ userIdEntryError: e });
    };
    setStatusMessage = (() => {
        var e = this;
        return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            e.setState({ statusText: t, status: n });
        };
    })();
    handleUserIDEntry = (e) => {
        if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
        let t = new Set(e.split(/[,\s]+/).filter(Boolean));
        this.setState({ userIdEntry: e, userIds: t });
    };
    setAllowedVersionError = (e) => {
        this.setState({ allowedVersionEntryError: e });
    };
    handleAllowedVersionEntry = (e) => {
        this.setState({ allowedVersionEntry: e });
    };
    handleAllowedVersionEnter = (e) => {
        e.charCode === Z.Ks6.ENTER && this.handleAddAllowedVersion();
    };
    handleAddAllowedVersion = () => {
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
    };
    handleRemoveAllowedVersion = (e) => {
        let { allowedVersions: t } = this.state;
        (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
    };
    handleAllowLoggedOut = (e) => {
        this.setState({ allowLoggedOut: e });
    };
    handleExpirationChange = (e) => {
        this.setState({ ttlSeconds: e });
    };
    handleReleaseChannelChange = (e) => {
        this.setState({ releaseChannel: e });
    };
    handleExperiments = (e) => {
        if (0 === e.trim().length) return void this.setState({ experimentsError: void 0 });
        try {
            let t = JSON.parse(e);
            for (let e in t) {
                if (null == e.match(/^[0-9]{4}\-[0-9]{2}(-|_)[a-z0-9_-]+$/))
                    return void this.setState({ experimentsError: `${e} is an invalid experiment name` });
                if ("number" != typeof t[e])
                    return void this.setState({ experimentsError: `${e} has an invalid bucket override` });
            }
        } catch (e) {
            this.setState({ experimentsError: `Unable to parse experiments ${e.message}` });
            return;
        }
        this.setState({ experiments: e, experimentsError: void 0 });
    };
    generatePayload = () => ({
        overrides: this.props.buildOverrides,
        meta: {
            release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
            ttl_seconds: this.state.ttlSeconds,
            user_ids: Array.from(this.state.userIds),
            allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
            allow_logged_out: this.state.allowLoggedOut,
            experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments),
        },
    });
    handleGenerateLink = async () => {
        if (this.isMobile() && 0 === this.state.allowedVersions.length)
            return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
        this.setStatusMessage(null);
        let e = this.generatePayload(),
            t = await (0, S.SB)(e);
        !1 !== t.error
            ? this.setStatusMessage(JSON.stringify(t.error), 0)
            : (this.setState({ publicLink: t.url.toString() }),
              0 === e.meta.user_ids.length &&
                  this.setStatusMessage(
                      "Warning! No users added to the whitelist! This link could be used by anyone to override their build.",
                      1,
                  ));
    };
    isMobile() {
        return et(this.props.buildOverrides ?? {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: n,
                userIdEntryError: s,
                allowedVersions: a,
                allowedVersionEntry: l,
                allowedVersionEntryError: r,
                allowLoggedOut: o,
                experiments: c,
                experimentsError: d,
            } = this.state,
            u = q.fL.find((t) => t.value === e),
            _ = a.map((e) => ({ id: e, label: e, value: e }));
        return (0, i.jsxs)(g.BJc, {
            gap: 20,
            children: [
                (0, i.jsx)(g.l6P, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != u ? u.value : void 0,
                    options: q.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, i.jsx)(g.l6P, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: q.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, i.jsxs)(g.BJc, {
                          gap: 20,
                          children: [
                              (0, i.jsx)(g.ksK, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: g.j96, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, i.jsx)(g.l6P, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: _,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === a.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, i.jsx)(g.fs1, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: s,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, i.jsx)(g.fs1, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: c,
                    error: d,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, i.jsx)(g.dOG, { label: "Allow logged out users", checked: o, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, i.jsx)("div", {});
        let n = g.YCn.INFO;
        switch (t) {
            case 0:
                n = g.YCn.ERROR;
                break;
            case 1:
                n = g.YCn.WARNING;
        }
        return (0, i.jsx)(g.po8, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, i.jsx)(c.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, i.jsx)(T.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
function ea() {
    let { horizontalSpacing: e, verticalSpacing: t } = (0, b.Or)(),
        n = s.useMemo(() => Array.from({ length: b.YR + 1 }, (e, t) => t), []),
        a = s.useMemo(() => Array.from({ length: b.YR + 1 }, (e, t) => t), []),
        { cssDebuggingEnabled: l, layoutDebuggingEnabled: r } = (0, u.cf)([M.default], () => ({
            cssDebuggingEnabled: M.default.cssDebuggingEnabled,
            layoutDebuggingEnabled: M.default.layoutDebuggingEnabled,
        })),
        o = (0, R.A)("highlight_void_toggleables"),
        c = (0, R.A)("highlight_mana_components");
    return (0, i.jsxs)(g.nVY, {
        label: "Design Tools",
        children: [
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, i.jsx)(g.dOG, {
                    label: "Enable CSS Debugging",
                    description: "Display raw colors as pink. Toggling this will refresh the browser.",
                    checked: l,
                    onChange: (e) => {
                        (0, p.x)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, i.jsx)(g.dOG, {
                    label: "Enable Layout Debugging",
                    description: "Renders a grid on top of the app to help debug layout alignment issues.",
                    checked: r,
                    onChange: (e) => {
                        (0, p.x)({ layoutDebuggingEnabled: e });
                    },
                }),
            }),
            (0, i.jsxs)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, i.jsx)(g.Apm, {
                        label: "Horizontal Grid Spacing",
                        description:
                            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
                        initialValue: e,
                        minValue: 0,
                        maxValue: b.YR,
                        markers: n,
                        onValueChange: (e) => b.Or.getState().setHorizontalSpacing(e),
                        onValueRender: (e) => `${Math.round(e)}px`,
                        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
                        equidistant: !0,
                    }),
                    (0, i.jsx)(g.Apm, {
                        label: "Vertical Grid Spacing",
                        description:
                            "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
                        initialValue: t,
                        minValue: 0,
                        maxValue: b.YR,
                        markers: a,
                        onValueChange: (e) => b.Or.getState().setVerticalSpacing(e),
                        onValueRender: (e) => `${Math.round(e)}px`,
                        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
                        equidistant: !0,
                    }),
                ],
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS,
                children: (0, i.jsx)(g.dOG, {
                    label: "Highlight Mana Components",
                    description: "Highlights all Mana design system components for easier debugging",
                    checked: c,
                    onChange: (e) => (0, O.L)("highlight_mana_components", e),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES,
                children: (0, i.jsx)(g.dOG, {
                    label: "Highlight Void Toggleable Components",
                    description:
                        "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue)",
                    checked: o,
                    onChange: (e) => (0, O.L)("highlight_void_toggleables", e),
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
            isSourceMapsEnabled: s,
            onlyShowPreviewAppCollections: a,
            disableAppCollectionsCache: l,
            preventPopoutClose: r,
            logKeyboardMismatches: o,
        } = (0, u.cf)([M.default], () => ({
            isTracingRequests: M.default.isTracingRequests,
            isForcedCanary: M.default.isForcedCanary,
            isAxeEnabled: M.default.isAxeEnabled,
            isSourceMapsEnabled: M.default.sourceMapsEnabled,
            onlyShowPreviewAppCollections: M.default.onlyShowPreviewAppCollections,
            disableAppCollectionsCache: M.default.disableAppCollectionsCache,
            preventPopoutClose: M.default.preventPopoutClose,
            logKeyboardMismatches: M.default.logKeyboardMismatches,
        })),
        c = (0, u.bG)([v.Ay], () => v.Ay.get("idle_status_indicator")),
        d = (0, L.A)("go_back_to_regular_input"),
        _ = B.HZ.useSetting();
    return (0, i.jsxs)(g.nVY, {
        label: "Developer Flags",
        children: [
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                children: (0, i.jsx)(g.dOG, {
                    label: "Enable Tracing Requests",
                    description: "Force trace all client requests with APM",
                    checked: e,
                    onChange: (e) => (0, p.x)({ trace: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_FORCED_CANARY,
                children: (0, i.jsx)(g.dOG, {
                    label: "Enable Forced Canary",
                    description: "Force all API requests to canary instances",
                    checked: t,
                    onChange: (e) => (0, p.x)({ canary: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
                children: (0, i.jsx)(g.dOG, {
                    label: "Ads auto-targeting",
                    description: "Make user targetable for all active ads",
                    checked: _,
                    onChange: (e) => B.HZ.updateSetting(e),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_SOURCE_MAPS,
                children: (0, i.jsx)(g.dOG, {
                    label: "Enable source maps to be loaded on this client",
                    description: "Only enable on devices you trust.",
                    checked: s,
                    onChange: (e) => (0, p.x)({ sourceMapsEnabled: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                children: (0, i.jsx)(g.dOG, {
                    label: "Enable idle status indicator",
                    description: "Displays a floating idle status indicator",
                    checked: c,
                    onChange: (e) => j.L("idle_status_indicator", e),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                children: (0, i.jsx)(g.dOG, {
                    label: "Enable Accessibility Auditing",
                    description:
                        "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
                    checked: n,
                    onChange: (e) => (0, p.x)({ axeEnabled: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                children: (0, i.jsx)(g.dOG, {
                    label: "Prevent Popouts From Closing Automatically",
                    description:
                        "This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.",
                    checked: r,
                    onChange: (e) => (0, p.x)({ preventPopoutClose: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
                children: (0, i.jsx)(g.dOG, {
                    label: "Enable Logging of Keyboard Mismatches",
                    description: "Logs mismatches in detected keyboard codes to the console",
                    checked: o,
                    onChange: (e) => (0, p.x)({ logKeyboardMismatches: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                children: (0, i.jsx)(g.dOG, {
                    label: "Preview unpublished application collections",
                    description:
                        "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                    checked: a,
                    onChange: (e) => (0, p.x)({ onlyShowPreviewAppCollections: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                children: (0, i.jsx)(g.dOG, {
                    label: "Disable application collections cache",
                    description:
                        "Disable application collections cache so that you can see updates to collections immediately.",
                    checked: l,
                    onChange: (e) => (0, p.x)({ disableAppCollectionsCache: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: K.H.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
                children: (0, i.jsx)(g.dOG, {
                    label: "Disable aligning chat input to the bottom of the screen",
                    description: "Disable aligning chat input to the bottom of the screen",
                    checked: d,
                    onChange: (e) => {
                        k.default.track(Z.HAw.GUILD_JOIN_FEEDBACK, {
                            reason: "disable-align-chat-input",
                            rating: e ? "yes" : "no",
                        }),
                            (0, P.s)("go_back_to_regular_input", { enabled: e });
                    },
                }),
            }),
        ],
    });
}
function er() {
    let {
            isLoggingGatewayEvents: e,
            isLoggingOverlayEvents: t,
            isLoggingAnalyticsEvents: n,
        } = (0, u.cf)([M.default], () => ({
            isLoggingGatewayEvents: M.default.isLoggingGatewayEvents,
            isLoggingOverlayEvents: M.default.isLoggingOverlayEvents,
            isLoggingAnalyticsEvents: M.default.isLoggingAnalyticsEvents,
        })),
        s = (0, u.bG)([v.Ay], () => v.Ay.get("analytics_debugger"));
    return (0, i.jsx)(G.x, {
        setting: K.H.DEVELOPER_OPTIONS_LOGGING_TAB,
        children: (0, i.jsxs)(g.nVY, {
            label: "Logging",
            children: [
                (0, i.jsx)(G.x, {
                    setting: K.H.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                    children: (0, i.jsx)(g.dOG, {
                        label: "Enable Logging of Gateway Events to Console",
                        description:
                            "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
                        checked: e,
                        onChange: (e) => (0, p.x)({ logGatewayEvents: e }),
                    }),
                }),
                (0, i.jsx)(G.x, {
                    setting: K.H.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                    children: (0, i.jsx)(g.dOG, {
                        label: "Enable Logging of Overlay RPC Events & Commands",
                        description: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
                        checked: t,
                        onChange: (e) => (0, p.x)({ logOverlayEvents: e }),
                    }),
                }),
                (0, i.jsx)(G.x, {
                    setting: K.H.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                    children: (0, i.jsx)(g.dOG, {
                        label: "Enable Logging of Analytics Events",
                        description: "Logs all analytics events to the developer console",
                        checked: n,
                        onChange: (e) => (0, p.x)({ logAnalyticsEvents: e }),
                    }),
                }),
                (0, i.jsx)(G.x, {
                    setting: K.H.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                    children: (0, i.jsx)(g.dOG, {
                        label: "Enable standard analytics debugger view",
                        description: "Displays a floating debugger with viewed impressions",
                        checked: s,
                        onChange: (e) => j.L("analytics_debugger", e),
                    }),
                }),
            ],
        }),
    });
}
function eo() {
    throw Error("Send help");
}
function ec() {
    let [e, t] = s.useState(!1);
    return e
        ? {}
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: [X.NC, J.SX].join(" "),
                      children: [
                          (0, i.jsx)(G.x, {
                              setting: K.H.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: (0, i.jsx)(g.Button, {
                                  variant: "primary",
                                  text: "Open Overlay",
                                  onClick: () => (0, D.o)(),
                              }),
                          }),
                          (0, i.jsx)(G.x, {
                              setting: K.H.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, i.jsx)(g.Button, {
                                  variant: "primary",
                                  text: "Reset Socket",
                                  onClick: () => {
                                      y.A.getSocket().close(), y.A.getSocket().connect();
                                  },
                              }),
                          }),
                          (0, i.jsx)(G.x, {
                              setting: K.H.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, i.jsx)(g.Button, {
                                  variant: "primary",
                                  text: "Clear Caches",
                                  onClick: () => {
                                      h.h.dispatch({
                                          type: "CLEAR_CACHES",
                                          reason: "Requested by user",
                                          preventWritingCachesAgainThisSession: !0,
                                          resetSocket: !0,
                                      });
                                  },
                              }),
                          }),
                          (0, i.jsx)(G.x, {
                              setting: K.H.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS,
                              children: (0, i.jsx)(g.Button, {
                                  variant: "primary",
                                  text: "Show TOTP Success",
                                  onClick: () => (0, W.sy)(!0),
                              }),
                          }),
                          (0, i.jsx)(G.x, {
                              setting: K.H.DEVELOPER_OPTIONS_TRIGGER_SUSPICIOUS_SESSIONS,
                              children: (0, i.jsx)(g.Button, {
                                  variant: "primary",
                                  text: "Trigger Suspicious Sessions Notifications",
                                  onClick: () => {
                                      _.Bo.post({ url: Z.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                                  },
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(G.x, {
                      setting: K.H.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, i.jsx)(g.nVY, {
                          label: "Crashes",
                          children: (0, i.jsxs)("div", {
                              className: X.NC,
                              children: [
                                  (0, i.jsx)(g.l6P, {
                                      label: "Native libdiscord crash",
                                      hideLabel: !0,
                                      selectionMode: "single",
                                      value: void 0,
                                      options: [
                                          { id: "none", value: void 0, label: "Native libdiscord crash" },
                                          { id: "abort", value: 0, label: "Abort()" },
                                          { id: "sigsegv", value: 1, label: "SIGSEGV()" },
                                          { id: "exception", value: 2, label: "EXCEPTION_ACCESS_VIOLATION" },
                                          { id: "fail", value: 3, label: "RaiseFailFastException" },
                                          { id: "out-of-memory", value: 4, label: "Out of Memory" },
                                      ],
                                      onSelectionChange: (e) => null != e && w.Ay.crash(e),
                                  }),
                                  (0, i.jsx)(g.l6P, {
                                      selectionMode: "single",
                                      label: "Native JS crash",
                                      hideLabel: !0,
                                      value: void 0,
                                      options: [
                                          { id: "none", value: void 0, label: "Native JS crash" },
                                          {
                                              id: "delayed-exception-in-renderer-process",
                                              value: d.qQ.RendererProcessDelayed,
                                              label: "Delayed exception in renderer process",
                                          },
                                          {
                                              id: "exception-in-renderer-process",
                                              value: d.qQ.RendererProcess,
                                              label: "Exception in renderer process",
                                          },
                                          {
                                              id: "exception-in-main-process",
                                              value: d.qQ.MainProcess,
                                              label: "Exception in main process",
                                          },
                                      ],
                                      onSelectionChange: (e) => (null != e ? void w.Ay.triggerJSException(e) : void 0),
                                  }),
                                  (0, i.jsx)(g.Button, {
                                      variant: "primary",
                                      text: "React Crash",
                                      onClick: () => t(!0),
                                  }),
                                  (0, i.jsx)(g.Button, { variant: "primary", text: "onClick Throw", onClick: eo }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function ed() {
    let e = (0, u.bG)([U.Ay], () => U.Ay.getSurveyOverride()),
        [t, n] = s.useState(e ?? "");
    return (0, i.jsx)(G.x, {
        setting: K.H.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, i.jsx)("form", {
            className: X.Nn,
            onSubmit: (e) => {
                e.preventDefault(), t.length > 0 ? E.xr(t) : E.xr(null);
            },
            children: (0, i.jsx)(g.nVY, {
                label: "Survey Override",
                description: "Copy the ID of the Survey you want to test:",
                children: (0, i.jsxs)(g.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    children: [
                        (0, i.jsx)(g.ksK, { fullWidth: !0, value: t, onChange: n }),
                        (0, i.jsx)(g.Button, { variant: "primary", text: "Save Override", type: "submit" }),
                    ],
                }),
            }),
        }),
    });
}
function eu() {
    let e = (0, u.bG)([f.A], () => f.A.overrideId()),
        [t, n] = s.useState(f.A.overrideId() ?? "");
    return (0, i.jsx)(G.x, {
        setting: K.H.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, i.jsxs)(g.nVY, {
            label: "Changelog",
            children: [
                (0, i.jsxs)(g.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, i.jsx)(g.ksK, {
                            label: "Changelog Override",
                            description:
                                "Enter the ID of the changelog you want to test This will override the changelog that is shown to the user.",
                            fullWidth: !0,
                            value: t,
                            onChange: n,
                        }),
                        (0, i.jsx)(g.Button, {
                            variant: "primary",
                            text: "Update Changelog",
                            onClick: () => {
                                "" === t ? x.A.setChangelogOverride(null) : x.A.setChangelogOverride(t);
                            },
                            disabled: e === t,
                        }),
                    ],
                }),
                (0, i.jsx)(c.D0$, {
                    label: "Reset Changelog",
                    description: "This will reset the changelog, so it will show again on the next startup.",
                    children: (0, i.jsx)(g.Button, {
                        variant: "primary",
                        text: "Reset Changelog",
                        onClick: () => {
                            let e = new Date("2018-01-01");
                            B.pK.updateSetting(V.default.fromTimestamp(e.getTime())), m.w.set("lastChangeLogDate", e);
                        },
                    }),
                }),
            ],
        }),
    });
}
function e_() {
    return (0, i.jsx)(G.x, {
        setting: K.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        children: (0, i.jsx)(g.nVY, { label: "Client-Side Overrides", children: (0, i.jsx)(Y.M, {}) }),
    });
}
function em() {
    return (0, i.jsxs)(g.BJc, {
        gap: 24,
        children: [
            (0, i.jsx)(ei, {}),
            (0, i.jsx)(c.cGx, {}),
            (0, i.jsx)(ed, {}),
            (0, i.jsx)(c.cGx, {}),
            (0, i.jsx)(eu, {}),
            (0, i.jsx)(c.cGx, {}),
            (0, i.jsx)(e_, {}),
        ],
    });
}
let eA = function () {
    return (0, i.jsx)(F.R, {
        header: "Developer Options",
        children: (0, i.jsx)(z.A, {
            parentSetting: K.H.DEVELOPER_OPTIONS,
            settingsSection: Z.nc_.DEVELOPER_OPTIONS,
            tabs: [
                { title: "Overrides", component: em, setting: K.H.DEVELOPER_OPTIONS_OVERRIDES_TAB },
                { title: "Manual Triggers", component: ec, setting: K.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB },
                { title: "Developer Flags", component: el, setting: K.H.DEVELOPER_OPTIONS_FLAGS_TAB },
                { title: "Logging", component: er, setting: K.H.DEVELOPER_OPTIONS_LOGGING_TAB },
                { title: "Design Tools", component: ea, setting: K.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB },
            ],
        }),
    });
};
