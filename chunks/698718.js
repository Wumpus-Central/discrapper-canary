n.d(t, { A: () => e5 }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(607399),
    d = n(478437),
    u = n(665260),
    h = n(311907),
    m = n(397927),
    A = n(465532),
    g = n(843472),
    p = n(414798),
    _ = n(608299),
    f = n(147192),
    E = n(820284),
    C = n(955572),
    x = n(775602),
    S = n(58149),
    I = n(211401),
    T = n(989837),
    v = n(500049),
    N = n(721768),
    y = n(258363),
    b = n(842209),
    j = n(861382),
    R = n(392054),
    M = n(168186),
    L = n(545152),
    O = n(972995),
    D = n(355622),
    P = n(408018),
    k = n(223938),
    U = n(811501),
    w = n(20737),
    G = n(133343),
    F = n(35277),
    H = n(595914),
    B = n(151271),
    V = n(81400),
    W = n(870006),
    K = n(837024),
    z = n(316031),
    Y = n(870136),
    J = n(834651),
    q = n(265869),
    $ = n(129185),
    Z = n(513609),
    X = n(301169),
    Q = n(751258),
    ee = n(451909),
    et = n(501255),
    en = n(195880),
    ei = n(926262),
    el = n(371648),
    ea = n(537174),
    es = n(928830),
    er = n(3137),
    eo = n(559908),
    ec = n(329449),
    ed = n(582223),
    eu = n(720480),
    eh = n(118517),
    em = n(853145),
    eA = n(157432),
    eg = n(151282),
    ep = n(654783),
    e_ = n(970244),
    ef = n(631576),
    eE = n(252263),
    eC = n(67259),
    ex = n(351488),
    eS = n(728321),
    eI = n(961350),
    eT = n(761640),
    ev = n(31717),
    eN = n(580745),
    ey = n(696451),
    eb = n(320501),
    ej = n(576705),
    eR = n(994500),
    eM = n(309010),
    eL = n(522602),
    eO = n(287809),
    eD = n(954571),
    eP = n(147036),
    ek = n(234320),
    eU = n(203982),
    ew = n(661191),
    eG = n(460350),
    eF = n(518960),
    eH = n(382287),
    eB = n(137577),
    eV = n(47167),
    eW = n(480870),
    eK = n(390756),
    ez = n(387462),
    eY = n(582968),
    eJ = n(667285),
    eq = n(920437),
    e$ = n(652215),
    eZ = n(381941),
    eX = n(985018),
    eQ = n(358943);
function e0(e) {
    e.preventDefault();
}
let e1 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e2(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, i.jsx)("section", { ...n, role: "complementary" }) : (0, i.jsx)("main", { ...n });
}
let e9 = l.forwardRef((e, t) => (0, i.jsx)(e7, { ...e, ref: t }));
e9.displayName = "ChannelTextAreaForm";
class e7 extends l.PureComponent {
    focusEditor() {
        this.editorRef?.focus();
    }
    isFirstChange = !0;
    editorRef = null;
    state = { ...(0, P.ur)(ev.A.getDraft(this.props.channel.id, ev.C.ChannelMessage)), contentWarningProps: null };
    componentDidMount() {
        ev.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ev.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ev.A.getDraft(n.id, ev.C.ChannelMessage);
            e !== i && this.setState((0, P.ur)(e));
        }
        t.textValue.length < e$.uvi && i.length >= e$.uvi && eD.default.track(e$.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = ev.A.getDraft(t.channel.id, ev.C.ChannelMessage);
            n !== i &&
                ("" === i || "" === n) &&
                e.setState((0, P.ur)(i), () => {
                    if (n !== i) {
                        let { onFocus: t } = e.props;
                        t?.();
                    }
                });
        };
    })();
    handleKeyDown = (e) => {
        let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
            l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
            a = 0 !== this.state.textValue.length;
        switch (e.which) {
            case e$.Ks6.DELETE:
            case e$.Ks6.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case e$.Ks6.ARROW_UP:
                if (l || a) return;
                if ((e.preventDefault(), t))
                    eL.A.getUploadCount(i.id, ev.C.ChannelMessage) > 0
                        ? eU._.dispatchToLastSubscribed(e$.jej.FOCUS_ATTACHMENT_AREA)
                        : eU._.dispatchToLastSubscribed(e$.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = eb.A.getLastChatCommandMessage(e.id),
                        n = eb.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? ew.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case e$.Ks6.ESCAPE:
                if (l || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, C.Bm)();
                if (eL.A.getUploadCount(i.id, ev.C.ChannelMessage) > 0)
                    return void _.A.clearAll(i.id, ev.C.ChannelMessage);
        }
        n?.(e, a);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        g.A.startEditMessageRecord(t.id, e), S.Ay.trackWithMetadata(e$.HAw.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, M.Ez)(e.interactionData),
            { command: l, application: a } = b.EW({ channel: t, type: "channel" }, n);
        if (null != l) {
            let e =
                null != a
                    ? {
                          type: R.Hf.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: a?.bot?.username ?? a.name,
                          application: a,
                      }
                    : null;
            N.Gf({
                channelId: t.id,
                command: l,
                section: e,
                location: R.Oh.RECALL,
                initialValues: (0, y.getInitialValuesFromInteractionOptions)(l, i ?? []),
                commandOrigin: R.iw.CHAT,
            });
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            i = eI.default.getId(),
            l = eo.Ay.getUserCombo(i, n),
            a = (l?.value ?? 0) + 1;
        (0, es.oG)({ channelId: n, userId: i, value: null != e ? e.length : a, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: i,
            channel: { id: l },
        } = this.props;
        A.A.changeDraft(l, t, ev.C.ChannelMessage);
        let a = "" !== t && n !== this.state.richValue,
            s = a && !e1.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        (this.isFirstChange = !1),
            s && this.state.textValue.length < t.length && this.handleIncrementCombo(),
            s ? p.A.startTyping(l) : "" === t && p.A.stopTyping(l),
            a && i && (0, C.Bm)(),
            this.setState({ textValue: t, richValue: n });
    };
    handleSendMessage = async (e) => {
        let {
            value: t,
            uploads: n,
            stickers: i,
            command: l,
            commandOptionValues: a,
            isGif: s,
            gifMetadata: r,
            components: o,
            announcementSendOptions: c,
        } = e;
        if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
            return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
        let { guild: d, channel: h, pendingReply: m, chatInputType: p, threadsAlsoSendToChannel: f } = this.props,
            E = !1;
        if (null != l) {
            if (l.inputType === R.y$.BUILT_IN_INTEGRATION)
                return (
                    eU._.dispatch(e$.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                );
            let e = j.A.getCommandOrigin(h.id);
            if (null == e || e === R.iw.CHAT) {
                let { isAuthorized: e } = await (0, O.q)({
                    applicationId: l.applicationId,
                    channel: h,
                    commandIntegrationTypes: l.integration_types,
                });
                if (!e) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
            } else if (e === R.iw.APPLICATION_LAUNCHER || e === R.iw.IMAGE_RECS_MENU || e === R.iw.IMAGE_RECS_SUBMENU) {
                let { location: t, sectionName: n } = (0, eK.bV)(l) ?? {},
                    i = e === R.iw.APPLICATION_LAUNCHER ? T.A.lastShownEntrypoint() : v.s4.TEXT,
                    { isAuthorized: a } = await (0, O.q)({
                        applicationId: l.applicationId,
                        channel: h,
                        commandIntegrationTypes: l.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: i },
                    });
                if (!a) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, eK.My)(l);
            }
            let n = await (0, L.A)({ command: l, optionValues: a ?? {}, context: { guild: d, channel: h } });
            if (l.inputType !== R.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (E = !0 === n.tts));
        }
        return (0, eG.i)({
            openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
            type: this.props.chatInputType,
            content: t,
            stickers: i,
            uploads: n,
            channel: h,
        }).then(async (e) => {
            let { valid: a, failureReason: C } = e;
            if (!a)
                if (C === e$.X8x.SLOWMODE_COOLDOWN)
                    return (
                        eU._.dispatch(e$.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        eU._.dispatch(e$.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let x = (0, Q.S)(t, { channel: h, isEdit: !1 });
            null != x && (null != x.content && (t = x.content), null != x.tts && (E = x.tts));
            let S = ee.Ay.parse(h, t);
            (S.tts = S.tts || E), null != o && ((S.content = ""), (S.components = o));
            let I = {
                ...g.A.getSendMessageOptions({
                    content: t,
                    channelId: h.id,
                    uploads: n,
                    stickers: i,
                    command: l,
                    isGif: s,
                    pendingReply: m,
                    alsoForwardToChannelId: f ? (h.parent_id ?? void 0) : void 0,
                    scheduledTimestamp: this.props.pendingScheduledMessage?.scheduledTimestamp,
                }),
                location: eZ.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (I.announcementSendOptions = c),
                null != r && (I.gifMetadata = r),
                null != o && (I.flags = (0, u.UI)(I.flags ?? 0, e$.pr7.IS_COMPONENTS_V2)),
                s)
            )
                return (
                    g.A.sendMessage(h.id, S, void 0, I).then(() => {
                        f && ex._(h.parent_id ?? void 0);
                    }),
                    (0, eh.Jx)(h.id),
                    eE.B({ channelId: h.id, enabled: !1 }),
                    { shouldClear: !1, shouldRefocus: !0 }
                );
            if (null != n && n.length > 0) {
                let e = (0, eH.LJ)(n);
                if ((0, eH.fJ)(e, d?.id)) return (0, eF.V)(h, e), { shouldClear: !1, shouldRefocus: !1 };
                (I.eagerDispatch = !1),
                    (I.attachmentsToUpload = n),
                    (I.onAttachmentUploadError = (e, i, l) => {
                        (0, X.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: i, reason: l }) &&
                            ("" !== t &&
                                "" === ev.A.getDraft(h.id, ev.C.ChannelMessage) &&
                                A.A.saveDraft(h.id, t, ev.C.ChannelMessage),
                            0 === eL.A.getUploadCount(h.id, ev.C.ChannelMessage) &&
                                _.A.setUploads({ channelId: h.id, uploads: n, draftType: ev.C.ChannelMessage }));
                    }),
                    _.A.clearAll(h.id, ev.C.ChannelMessage);
            }
            if (null != I.scheduledTimestamp)
                try {
                    await (0, eg.pr)({
                        channelId: h.id,
                        scheduledTimestamp: I.scheduledTimestamp,
                        messageSendData: {
                            channelId: h.id,
                            content: t,
                            nonce: (0, en.m)(),
                            tts: E,
                            message_reference: I.messageReference,
                            allowed_mentions: I.allowedMentions,
                            flags: I.flags,
                        },
                        attachmentsToUpload: n,
                    }),
                        (0, e_.c_)(I.scheduledTimestamp);
                } catch (e) {
                    return (0, e_.kM)(e.message), { shouldClear: !1, shouldRefocus: !1 };
                }
            else
                g.A.sendMessage(h.id, S, void 0, I).then(() => {
                    f && ex._(h.parent_id ?? void 0);
                });
            return (
                this.setState((0, P.N3)()),
                (0, eh.Jx)(h.id),
                (0, ef.x5)(h.id, p.drafts.type),
                eE.B({ channelId: h.id, enabled: !1 }),
                { shouldClear: !0, shouldRefocus: !0 }
            );
        });
    };
    handleSetValue = (e) => {
        let t = this.editorRef?.getSlateEditor();
        null != t && (F.b.select(t, []), t.insertText(e), this.editorRef?.focus());
    };
    renderAttachButton = (e, t) =>
        (0, i.jsx)(w.A, {
            className: t,
            channel: this.props.channel,
            draftType: ev.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e,
        });
    renderApplicationCommandIcon = (e, t, n) =>
        (0, i.jsx)(U.A, { className: n, command: e, section: t, channel: this.props.channel });
    render() {
        let {
                channel: e,
                focused: t,
                onBlur: n,
                onFocus: l,
                onResize: a,
                highlighted: s,
                pendingReply: r,
                chatInputType: c,
                placeholder: d,
                accessibilityLabel: u,
                shakeIntensity: h,
                poggermodeEnabled: A,
                pendingScheduledMessage: g,
                announcementComposerEnabled: p,
            } = this.props,
            { contentWarningProps: _ } = this.state,
            f =
                e.type === e$.rbe.GUILD_ANNOUNCEMENT && p
                    ? (0, i.jsx)(k.A, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eQ.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: D.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: a,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eF.R,
                          highlighted: s,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, i.jsx)(G.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eQ.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: c,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: a,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eF.R,
                          highlighted: s,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: g,
                      });
        return (0, i.jsx)(m.YNO, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                _?.onCancel?.(), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != _,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != _, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, i.jsx)(ei.A, { onClose: t, ..._ })
                );
            },
            children: () =>
                A ? (0, i.jsx)(m.bfh, { isShaking: h > 0, intensity: h, className: eQ.Xn, children: f }) : f,
        });
    }
}
class e3 extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? { textAreaFocused: null != n && !c.Fr && ej.A.can(e$.xBc.SEND_MESSAGES, n), currentChannelId: n.id }
            : null;
    }
    containerDomRef = l.createRef();
    refToChannelTextAreaFormComponent = l.createRef();
    inputFormRef = l.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = l.createRef();
    componentDidMount() {
        eU._.subscribe(e$.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eU._.unsubscribe(e$.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    handleRequestFocus = (e) => {
        e.channelId === this.props.channel.id &&
            (this.state.textAreaFocused
                ? this.refToChannelTextAreaFormComponent.current?.focusEditor()
                : this.setState({ textAreaFocused: !0 }));
    };
    handleInputFocus = (e) => {
        this.dispatchGroupRef.current?.bumpDispatchPriority(),
            e?.highlight != null
                ? this.setState({ textAreaFocused: !0, textAreaHighlighted: e?.highlight })
                : this.setState({ textAreaFocused: !0 });
    };
    handleInputBlur = () => {
        (document.hasFocus() || this.props.hasModalOpen) &&
            this.setState({ textAreaFocused: !1, textAreaHighlighted: !1 });
    };
    handleInputKeyDown = (e, t) => {
        this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e);
    };
    handleKeyDown = (e) => {
        this.inputFormRef.current?.contains(e.target) || this._handleMoveToPane(e);
    };
    _handleMoveToPane = (e) => {
        let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
        if (t)
            switch (e.which) {
                case e$.Ks6.ARROW_LEFT:
                    n === D.oU.SIDEBAR &&
                        eU._.dispatch(e$.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: eM.A.getChannelId() });
                    return;
                case e$.Ks6.ARROW_RIGHT:
                    n === D.oU.NORMAL &&
                        eU._.dispatch(e$.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: eT.Ay.getCurrentSidebarChannelId(i.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, B.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    handleOpenAppLauncher = (e) => {
        let { applicationId: t } = e;
        return I.R(v.s4.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
    };
    handleChatInteract = () => {
        this.dispatchGroupRef.current?.bumpDispatchPriority();
    };
    renderMessageBanner = (e) => {
        let {
            channel: t,
            showQuarantinedUserBanner: n,
            guild: l,
            communicationDisabledUntil: a,
            showAutomodUserProfileChatBlocker: s,
        } = e;
        return t.type === e$.rbe.DM && n
            ? (0, i.jsx)(eu.A, {})
            : t.isModeratorReportChannel() && t.isArchivedThread()
              ? (0, i.jsx)(eA.A, { channelId: t.id })
              : null != a && (0, z.n)(a) && null != l && !ej.A.can(e$.xBc.ADMINISTRATOR, l)
                ? (0, i.jsx)(J.j, { guild: l, disabledUntil: a })
                : s
                  ? (0, i.jsx)(W.u, { guild: l })
                  : null;
    };
    render() {
        let e,
            {
                channel: t,
                guild: n,
                keyboardModeEnabled: l,
                hasModalOpen: a,
                pendingReply: r,
                threadsAlsoSendToChannel: o,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: h,
                showQuarantinedUserBanner: A,
                filterAfterTimestamp: g,
                communicationDisabledUntil: p,
                shakeIntensity: _,
                poggermodeEnabled: C,
                isSelectedResourceChannel: x,
                showAutomodUserProfileChatBlocker: S,
                pendingScheduledMessage: I,
                messagesTypingGradient: T,
                showLinkedLobbyApplicationLoadingIndicator: v,
                announcementComposerEnabled: N,
            } = this.props,
            { textAreaFocused: y, textAreaHighlighted: b } = this.state,
            j = c === D.oU.SIDEBAR;
        e =
            j && t.type === e$.rbe.GUILD_VOICE
                ? eX.t.pnnyFZ
                : j && t.type === e$.rbe.GUILD_STAGE_VOICE
                  ? eX.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eX.t["OkzL+Q"]
                    : eX.t.UbNmGc;
        let R = (0, i.jsx)("div", { className: eQ.li, children: (0, i.jsx)(eY.A, {}) }),
            M = (0, i.jsx)("div", {
                className: eQ.li,
                children: (0, i.jsx)(eS.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, i.jsx)(e9, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: y,
                        highlighted: b,
                        channel: t,
                        guild: n,
                        keyboardModeEnabled: l,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: a,
                        pendingReply: r,
                        threadsAlsoSendToChannel: o,
                        chatInputType: c,
                        placeholder: u,
                        accessibilityLabel: h,
                        shakeIntensity: _,
                        poggermodeEnabled: C,
                        pendingScheduledMessage: I,
                        announcementComposerEnabled: N,
                    }),
                }),
            }),
            L = v ? R : M,
            O = (0, eV.m1)(t, eO.default, eR.A);
        return (0, i.jsx)(
            E.A,
            {
                page: (0, eP.DJ)(this.props.channel),
                children: (0, i.jsx)(Z.di, {
                    children: (0, i.jsx)($.Xq, {
                        children: (0, i.jsxs)(ek.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(ek.EG, { event: e$.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, i.jsx)(ek.EG, { event: e$.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, i.jsx)(ek.EG, {
                                    event: e$.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, i.jsx)(ek.EG, {
                                    event: e$.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, i.jsxs)(e2, {
                                    isSidebar: j,
                                    className: eQ.q2,
                                    "aria-label": eX.intl.formatToPlainString(e, { channelName: O }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: this.props.guildOfficialMessageStyle,
                                    children: [
                                        (0, i.jsx)(ez.A, { channel: t, guild: n, narrow: j }),
                                        (0, i.jsxs)(m.Fmo, {
                                            component: (0, i.jsx)(m.AC4, {
                                                children: (0, i.jsx)(m.H, {
                                                    children: eX.intl.format(eX.t.eTzKkx, { channelName: O }),
                                                }),
                                            }),
                                            children: [
                                                (0, i.jsx)(el.A, {
                                                    channel: t,
                                                    forceCozy: x,
                                                    filterAfterTimestamp: g,
                                                    showingQuarantineBanner: A,
                                                    typingGradient: T,
                                                    hideSummaries: c === D.oU.OVERLAY,
                                                }),
                                                x
                                                    ? null
                                                    : (this.renderMessageBanner({
                                                          channel: t,
                                                          showQuarantinedUserBanner: A,
                                                          guild: n,
                                                          communicationDisabledUntil: p,
                                                          showAutomodUserProfileChatBlocker: S,
                                                      }) ??
                                                      (0, i.jsxs)("form", {
                                                          ref: this.inputFormRef,
                                                          onSubmit: e0,
                                                          className: s()(eQ.Zd, { [eQ.Mf]: !v }),
                                                          children: [
                                                              C && (0, i.jsx)(ec.A, { channelId: t.id }),
                                                              t.isPrivate()
                                                                  ? (0, i.jsx)(eJ.A, { channel: t, children: L })
                                                                  : (0, i.jsx)(eq.A, { channel: t, children: L }),
                                                              (0, i.jsx)(f.Ay, { channel: t, isInTextChannel: !0 }),
                                                          ],
                                                      })),
                                                (0, i.jsx)(Z.lr, {}),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            },
            `messages-${t.id}`,
        );
    }
}
let e5 = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: a } = e,
        { placeholder: s, accessibilityLabel: r } = (0, eW.A)({ channel: t }),
        o = (0, eu.L)(eO.default.getCurrentUser(), t),
        [c] = (0, Y.c)(n?.id),
        d = (0, V.uZ)(n?.id),
        u = (0, h.bG)([eO.default], () => eO.default.getCurrentUser()),
        A = (0, h.bG)([ey.Ay], () => null != u && (ey.Ay.getMember(n?.id ?? e$.dJq, u?.id)?.isPending ?? !1)),
        g = (0, h.bG)([er.A], () => er.A.isEnabled()),
        p = (0, ed.A)(t.id),
        _ = (0, q.A)(t.id),
        E = (0, ep.D)(t.id),
        C = (0, h.bG)([eC.A], () => eC.A.getAlsoSendToChannel(t.id)),
        S = (0, h.bG)([eo.Ay, eI.default], () => eo.Ay.getUserCombo(eI.default.getId(), t.id)),
        I = (0, f.rj)(t),
        T = (0, f.aW)(t),
        v = I.length > 0 || t.rateLimitPerUser > 0 || null != S || null != T,
        { showLinkedLobbyApplicationLoadingIndicator: N } = (0, eB.A)(t.linkedLobby),
        y = (0, H.A)("ChannelChat"),
        b = (0, ea.A)((0, et.GP)(n, "ChannelChat") ? (n?.officialMessageColor ?? eZ.aj) : null);
    return (
        (0, K.A)(t),
        (0, i.jsx)(e3, {
            channel: t,
            guildOfficialMessageStyle: b,
            isEditing: null != (0, h.bG)([eN.A], () => eN.A.getEditingMessageId(t.id)),
            hasModalOpen: (0, m.red)(m.DXt),
            guild: n,
            keyboardModeEnabled: (0, h.bG)([x.A], () => x.A.keyboardModeEnabled),
            pendingReply: (0, h.bG)([em.A], () => em.A.getPendingReply(t.id)),
            threadsAlsoSendToChannel: C,
            chatInputType: l,
            placeholder: s,
            accessibilityLabel: r,
            filterAfterTimestamp: a,
            showQuarantinedUserBanner: o,
            communicationDisabledUntil: c,
            shakeIntensity: p,
            poggermodeEnabled: g,
            isSelectedResourceChannel: _,
            showAutomodUserProfileChatBlocker: d && !A,
            pendingScheduledMessage: E,
            messagesTypingGradient: v,
            showLinkedLobbyApplicationLoadingIndicator: N,
            announcementComposerEnabled: y,
        })
    );
});
