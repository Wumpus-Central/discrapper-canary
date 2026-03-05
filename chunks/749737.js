n.d(t, { A: () => em, s: () => ei });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    d = n(158954),
    c = n(141931),
    u = n(311907),
    _ = n(562465),
    g = n(506774),
    m = n(435371),
    A = n(397927),
    h = n(73153),
    p = n(256311),
    x = n(926919),
    E = n(246605),
    T = n(414079),
    S = n(416052),
    C = n(148810),
    f = n(380610),
    I = n(883600),
    b = n(235986),
    N = n(172272),
    v = n(263834),
    j = n(865116),
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
    X = n(179690),
    W = n(531525),
    K = n(652215),
    Z = n(986238),
    q = n(22999),
    J = n(436833),
    Q = n(522759);
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
        let { project: e, overrideType: t, overrideId: n, disabled: s, error: l } = this.props;
        return (0, i.jsxs)(b.A, {
            direction: b.A.Direction.VERTICAL,
            className: a()(q.oS, Q.SX, J.N, q.nM),
            children: [
                (0, i.jsx)(T.A, {
                    className: a()(q.lL, { [q.zi]: s }),
                    onClick: s ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, i.jsxs)(b.A, {
                    className: Q.QB,
                    children: [
                        (0, i.jsx)(b.A.Child, {
                            basis: "50%",
                            children: (0, i.jsx)(A.l6P, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: ee,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: s,
                            }),
                        }),
                        (0, i.jsx)(b.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, i.jsx)(A.ksK, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: s,
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(b.A.Child, {
                    children: [
                        null != l &&
                            "" !== l &&
                            (0, i.jsx)(A.Text, {
                                className: q.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        (0, i.jsxs)(A.Text, {
                            variant: "text-sm/normal",
                            className: q.AS,
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
        let e = await (0, f.bD)();
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
        let t = await (0, C.Zk)(e);
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
        (0, A.qfG)((t) => (0, i.jsx)(es, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, i.jsx)(A.ppr, {
            theme: H.A.theme,
            className: a()(Q.eT, Q.SX),
            children: (0, i.jsx)(A.SGT, { children: "You have no build overrides configured." }),
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
            : (0, i.jsx)(A.Button, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, i.jsx)(m.m_, {
                  text: "Generate Public Link",
                  children: (0, i.jsx)(A.K0, {
                      variant: "secondary",
                      icon: A.qYV,
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
                (0, i.jsx)(A.Button, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, i.jsx)(A.Button, {
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
            ? (0, i.jsx)(A.y$y, { className: Q.QX })
            : null != s && 0 === Object.keys(s).length
              ? this.renderEmpty()
              : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            a =
                et(s ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, i.jsx)(A.Text, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, i.jsx)(G.x, {
            setting: W.H.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, i.jsx)(A.nVY, {
                children: (0, i.jsxs)(A.BJc, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(A.l6P, {
                            selectionMode: "single",
                            label: "Add Build Override",
                            placeholder: "discord_project",
                            description: "Select a project to create a build override for.",
                            layout: "horizontal-responsive",
                            value: void 0,
                            options: this.getAvailableProjects().map((e) => ({ id: e, label: e, value: e })),
                            onSelectionChange: this.handleAddBuildOverride,
                            disabled: !l,
                        }),
                        a,
                        e,
                        (0, i.jsxs)(A.ButtonGroup, {
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
        e.charCode === K.Ks6.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, C.SB)(e);
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
                allowedVersions: l,
                allowedVersionEntry: a,
                allowedVersionEntryError: r,
                allowLoggedOut: o,
                experiments: d,
                experimentsError: c,
            } = this.state,
            u = Z.fL.find((t) => t.value === e),
            _ = l.map((e) => ({ id: e, label: e, value: e }));
        return (0, i.jsxs)(A.BJc, {
            gap: 20,
            children: [
                (0, i.jsx)(A.l6P, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != u ? u.value : void 0,
                    options: Z.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, i.jsx)(A.l6P, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: Z.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, i.jsxs)(A.BJc, {
                          gap: 20,
                          children: [
                              (0, i.jsx)(A.ksK, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: a,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: A.j96, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, i.jsx)(A.l6P, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: _,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === l.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, i.jsx)(A.fs1, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: s,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, i.jsx)(A.fs1, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: d,
                    error: c,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, i.jsx)(A.dOG, { label: "Allow logged out users", checked: o, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, i.jsx)("div", {});
        let n = A.YCn.INFO;
        switch (t) {
            case 0:
                n = A.YCn.ERROR;
                break;
            case 1:
                n = A.YCn.WARNING;
        }
        return (0, i.jsx)(A.po8, { messageType: n, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, i.jsx)(d.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, i.jsx)(S.A, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
function el() {
    let { horizontalSpacing: e, verticalSpacing: t } = (0, N.Or)(),
        n = s.useMemo(() => Array.from({ length: N.YR + 1 }, (e, t) => t), []),
        l = s.useMemo(() => Array.from({ length: N.YR + 1 }, (e, t) => t), []),
        { cssDebuggingEnabled: a, layoutDebuggingEnabled: r } = (0, u.cf)([M.default], () => ({
            cssDebuggingEnabled: M.default.cssDebuggingEnabled,
            layoutDebuggingEnabled: M.default.layoutDebuggingEnabled,
        })),
        o = (0, R.A)("highlight_void_toggleables"),
        d = (0, R.A)("highlight_mana_components");
    return (0, i.jsxs)(A.nVY, {
        label: "Design Tools",
        children: [
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, i.jsx)(A.dOG, {
                    label: "Enable CSS Debugging",
                    description: "Display raw colors as pink. Toggling this will refresh the browser.",
                    checked: a,
                    onChange: (e) => {
                        (0, x.x)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, i.jsx)(A.dOG, {
                    label: "Enable Layout Debugging",
                    description: "Renders a grid on top of the app to help debug layout alignment issues.",
                    checked: r,
                    onChange: (e) => {
                        (0, x.x)({ layoutDebuggingEnabled: e });
                    },
                }),
            }),
            (0, i.jsxs)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, i.jsx)(A.Apm, {
                        label: "Horizontal Grid Spacing",
                        description:
                            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
                        initialValue: e,
                        minValue: 0,
                        maxValue: N.YR,
                        markers: n,
                        onValueChange: (e) => N.Or.getState().setHorizontalSpacing(e),
                        onValueRender: (e) => `${Math.round(e)}px`,
                        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
                        equidistant: !0,
                    }),
                    (0, i.jsx)(A.Apm, {
                        label: "Vertical Grid Spacing",
                        description:
                            "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
                        initialValue: t,
                        minValue: 0,
                        maxValue: N.YR,
                        markers: l,
                        onValueChange: (e) => N.Or.getState().setVerticalSpacing(e),
                        onValueRender: (e) => `${Math.round(e)}px`,
                        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
                        equidistant: !0,
                    }),
                ],
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS,
                children: (0, i.jsx)(A.dOG, {
                    label: "Highlight Mana Components",
                    description: "Highlights all Mana design system components for easier debugging",
                    checked: d,
                    onChange: (e) => (0, O.L)("highlight_mana_components", e),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES,
                children: (0, i.jsx)(A.dOG, {
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
function ea() {
    let {
            isTracingRequests: e,
            isForcedCanary: t,
            isAxeEnabled: n,
            isSourceMapsEnabled: s,
            onlyShowPreviewAppCollections: l,
            disableAppCollectionsCache: a,
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
        d = (0, u.bG)([j.Ay], () => j.Ay.get("idle_status_indicator")),
        c = (0, L.A)("go_back_to_regular_input"),
        _ = B.HZ.useSetting();
    return (0, i.jsxs)(A.nVY, {
        label: "Developer Flags",
        children: [
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                children: (0, i.jsx)(A.dOG, {
                    label: "Enable Tracing Requests",
                    description: "Force trace all client requests with APM",
                    checked: e,
                    onChange: (e) => (0, x.x)({ trace: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_FORCED_CANARY,
                children: (0, i.jsx)(A.dOG, {
                    label: "Enable Forced Canary",
                    description: "Force all API requests to canary instances",
                    checked: t,
                    onChange: (e) => (0, x.x)({ canary: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
                children: (0, i.jsx)(A.dOG, {
                    label: "Ads auto-targeting",
                    description: "Make user targetable for all active ads",
                    checked: _,
                    onChange: (e) => B.HZ.updateSetting(e),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_SOURCE_MAPS,
                children: (0, i.jsx)(A.dOG, {
                    label: "Enable source maps to be loaded on this client",
                    description: "Only enable on devices you trust.",
                    checked: s,
                    onChange: (e) => (0, x.x)({ sourceMapsEnabled: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                children: (0, i.jsx)(A.dOG, {
                    label: "Enable idle status indicator",
                    description: "Displays a floating idle status indicator",
                    checked: d,
                    onChange: (e) => v.L("idle_status_indicator", e),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                children: (0, i.jsx)(A.dOG, {
                    label: "Enable Accessibility Auditing",
                    description:
                        "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
                    checked: n,
                    onChange: (e) => (0, x.x)({ axeEnabled: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                children: (0, i.jsx)(A.dOG, {
                    label: "Prevent Popouts From Closing Automatically",
                    description:
                        "This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.",
                    checked: r,
                    onChange: (e) => (0, x.x)({ preventPopoutClose: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
                children: (0, i.jsx)(A.dOG, {
                    label: "Enable Logging of Keyboard Mismatches",
                    description: "Logs mismatches in detected keyboard codes to the console",
                    checked: o,
                    onChange: (e) => (0, x.x)({ logKeyboardMismatches: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                children: (0, i.jsx)(A.dOG, {
                    label: "Preview unpublished application collections",
                    description:
                        "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                    checked: l,
                    onChange: (e) => (0, x.x)({ onlyShowPreviewAppCollections: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                children: (0, i.jsx)(A.dOG, {
                    label: "Disable application collections cache",
                    description:
                        "Disable application collections cache so that you can see updates to collections immediately.",
                    checked: a,
                    onChange: (e) => (0, x.x)({ disableAppCollectionsCache: e }),
                }),
            }),
            (0, i.jsx)(G.x, {
                setting: W.H.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
                children: (0, i.jsx)(A.dOG, {
                    label: "Disable aligning chat input to the bottom of the screen",
                    description: "Disable aligning chat input to the bottom of the screen",
                    checked: c,
                    onChange: (e) => {
                        k.default.track(K.HAw.GUILD_JOIN_FEEDBACK, {
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
        s = (0, u.bG)([j.Ay], () => j.Ay.get("analytics_debugger"));
    return (0, i.jsx)(G.x, {
        setting: W.H.DEVELOPER_OPTIONS_LOGGING_TAB,
        children: (0, i.jsxs)(A.nVY, {
            label: "Logging",
            children: [
                (0, i.jsx)(G.x, {
                    setting: W.H.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                    children: (0, i.jsx)(A.dOG, {
                        label: "Enable Logging of Gateway Events to Console",
                        description:
                            "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
                        checked: e,
                        onChange: (e) => (0, x.x)({ logGatewayEvents: e }),
                    }),
                }),
                (0, i.jsx)(G.x, {
                    setting: W.H.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                    children: (0, i.jsx)(A.dOG, {
                        label: "Enable Logging of Overlay RPC Events & Commands",
                        description: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
                        checked: t,
                        onChange: (e) => (0, x.x)({ logOverlayEvents: e }),
                    }),
                }),
                (0, i.jsx)(G.x, {
                    setting: W.H.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                    children: (0, i.jsx)(A.dOG, {
                        label: "Enable Logging of Analytics Events",
                        description: "Logs all analytics events to the developer console",
                        checked: n,
                        onChange: (e) => (0, x.x)({ logAnalyticsEvents: e }),
                    }),
                }),
                (0, i.jsx)(G.x, {
                    setting: W.H.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                    children: (0, i.jsx)(A.dOG, {
                        label: "Enable standard analytics debugger view",
                        description: "Displays a floating debugger with viewed impressions",
                        checked: s,
                        onChange: (e) => v.L("analytics_debugger", e),
                    }),
                }),
            ],
        }),
    });
}
function eo() {
    throw Error("Send help");
}
function ed() {
    let [e, t] = s.useState(!1);
    return e
        ? {}
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: [q.NC, Q.SX].join(" "),
                      children: [
                          (0, i.jsx)(G.x, {
                              setting: W.H.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: (0, i.jsx)(A.Button, {
                                  variant: "primary",
                                  text: "Open Overlay",
                                  onClick: () => (0, D.o)(),
                              }),
                          }),
                          (0, i.jsx)(G.x, {
                              setting: W.H.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, i.jsx)(A.Button, {
                                  variant: "primary",
                                  text: "Reset Socket",
                                  onClick: () => {
                                      y.A.getSocket().close(), y.A.getSocket().connect();
                                  },
                              }),
                          }),
                          (0, i.jsx)(G.x, {
                              setting: W.H.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, i.jsx)(A.Button, {
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
                              setting: W.H.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS,
                              children: (0, i.jsx)(A.Button, {
                                  variant: "primary",
                                  text: "Show TOTP Success",
                                  onClick: () => (0, X.sy)(!0),
                              }),
                          }),
                          (0, i.jsx)(G.x, {
                              setting: W.H.DEVELOPER_OPTIONS_TRIGGER_SUSPICIOUS_SESSIONS,
                              children: (0, i.jsx)(A.Button, {
                                  variant: "primary",
                                  text: "Trigger Suspicious Sessions Notifications",
                                  onClick: () => {
                                      _.Bo.post({ url: K.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                                  },
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(G.x, {
                      setting: W.H.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, i.jsx)(A.nVY, {
                          label: "Crashes",
                          children: (0, i.jsxs)("div", {
                              className: q.NC,
                              children: [
                                  (0, i.jsx)(A.l6P, {
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
                                  (0, i.jsx)(A.l6P, {
                                      selectionMode: "single",
                                      label: "Native JS crash",
                                      hideLabel: !0,
                                      value: void 0,
                                      options: [
                                          { id: "none", value: void 0, label: "Native JS crash" },
                                          {
                                              id: "delayed-exception-in-renderer-process",
                                              value: c.qQ.RendererProcessDelayed,
                                              label: "Delayed exception in renderer process",
                                          },
                                          {
                                              id: "exception-in-renderer-process",
                                              value: c.qQ.RendererProcess,
                                              label: "Exception in renderer process",
                                          },
                                          {
                                              id: "exception-in-main-process",
                                              value: c.qQ.MainProcess,
                                              label: "Exception in main process",
                                          },
                                      ],
                                      onSelectionChange: (e) => (null != e ? void w.Ay.triggerJSException(e) : void 0),
                                  }),
                                  (0, i.jsx)(A.Button, {
                                      variant: "primary",
                                      text: "React Crash",
                                      onClick: () => t(!0),
                                  }),
                                  (0, i.jsx)(A.Button, { variant: "primary", text: "onClick Throw", onClick: eo }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function ec() {
    let e = (0, u.bG)([U.Ay], () => U.Ay.getSurveyOverride()),
        [t, n] = s.useState(e ?? "");
    return (0, i.jsx)(G.x, {
        setting: W.H.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, i.jsx)("form", {
            className: q.Nn,
            onSubmit: (e) => {
                e.preventDefault(), t.length > 0 ? E.xr(t) : E.xr(null);
            },
            children: (0, i.jsx)(A.nVY, {
                label: "Survey Override",
                description: "Copy the ID of the Survey you want to test:",
                children: (0, i.jsxs)(A.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    children: [
                        (0, i.jsx)(A.ksK, { fullWidth: !0, value: t, onChange: n }),
                        (0, i.jsx)(A.Button, { variant: "primary", text: "Save Override", type: "submit" }),
                    ],
                }),
            }),
        }),
    });
}
function eu() {
    let e = (0, u.bG)([I.A], () => I.A.overrideId()),
        [t, n] = s.useState(I.A.overrideId() ?? "");
    return (0, i.jsx)(G.x, {
        setting: W.H.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, i.jsxs)(A.nVY, {
            label: "Changelog",
            children: [
                (0, i.jsxs)(A.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, i.jsx)(A.ksK, {
                            label: "Changelog Override",
                            description:
                                "Enter the ID of the changelog you want to test This will override the changelog that is shown to the user.",
                            fullWidth: !0,
                            value: t,
                            onChange: n,
                        }),
                        (0, i.jsx)(A.Button, {
                            variant: "primary",
                            text: "Update Changelog",
                            onClick: () => {
                                "" === t ? p.A.setChangelogOverride(null) : p.A.setChangelogOverride(t);
                            },
                            disabled: e === t,
                        }),
                    ],
                }),
                (0, i.jsx)(d.D0$, {
                    label: "Reset Changelog",
                    description: "This will reset the changelog, so it will show again on the next startup.",
                    children: (0, i.jsx)(A.Button, {
                        variant: "primary",
                        text: "Reset Changelog",
                        onClick: () => {
                            let e = new Date("2018-01-01");
                            B.pK.updateSetting(V.default.fromTimestamp(e.getTime())), g.w.set("lastChangeLogDate", e);
                        },
                    }),
                }),
            ],
        }),
    });
}
function e_() {
    return (0, i.jsx)(G.x, {
        setting: W.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        children: (0, i.jsx)(A.nVY, { label: "Client-Side Overrides", children: (0, i.jsx)(Y.M, {}) }),
    });
}
function eg() {
    return (0, i.jsxs)(A.BJc, {
        gap: 24,
        children: [
            (0, i.jsx)(ei, {}),
            (0, i.jsx)(d.cGx, {}),
            (0, i.jsx)(ec, {}),
            (0, i.jsx)(d.cGx, {}),
            (0, i.jsx)(eu, {}),
            (0, i.jsx)(d.cGx, {}),
            (0, i.jsx)(e_, {}),
        ],
    });
}
let em = function () {
    return (0, i.jsx)(F.R, {
        header: "Developer Options",
        children: (0, i.jsx)(z.A, {
            parentSetting: W.H.DEVELOPER_OPTIONS,
            settingsSection: K.nc_.DEVELOPER_OPTIONS,
            tabs: [
                { title: "Overrides", component: eg, setting: W.H.DEVELOPER_OPTIONS_OVERRIDES_TAB },
                { title: "Manual Triggers", component: ed, setting: W.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB },
                { title: "Developer Flags", component: ea, setting: W.H.DEVELOPER_OPTIONS_FLAGS_TAB },
                { title: "Logging", component: er, setting: W.H.DEVELOPER_OPTIONS_LOGGING_TAB },
                { title: "Design Tools", component: el, setting: W.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB },
            ],
        }),
    });
};
