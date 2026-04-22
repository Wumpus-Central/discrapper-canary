n.d(t, { A: () => tt }), n(938796);
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
    m = n(265872),
    A = n(568602),
    g = n(707554),
    p = n(140735),
    _ = n(192308),
    f = n(465532),
    E = n(843472),
    C = n(414798),
    x = n(608299),
    S = n(147192),
    I = n(820284),
    N = n(955572),
    v = n(775602),
    T = n(58149),
    y = n(211401),
    b = n(989837),
    j = n(500049),
    R = n(721768),
    M = n(258363),
    L = n(842209),
    D = n(861382),
    P = n(392054),
    O = n(168186),
    w = n(545152),
    U = n(972995),
    k = n(355622),
    G = n(408018),
    F = n(223938),
    H = n(811501),
    B = n(20737),
    V = n(133343),
    z = n(35277),
    K = n(595914),
    W = n(151271),
    Y = n(81400),
    J = n(870006),
    q = n(837024),
    $ = n(316031),
    Z = n(870136),
    X = n(834651),
    Q = n(265869),
    ee = n(129185),
    et = n(513609),
    en = n(301169),
    ei = n(521427),
    el = n(751258),
    ea = n(451909),
    es = n(195880),
    er = n(926262),
    eo = n(371648),
    ec = n(537174),
    ed = n(928830),
    eu = n(3137),
    eh = n(559908),
    em = n(329449),
    eA = n(582223),
    eg = n(720480),
    ep = n(118517),
    e_ = n(853145),
    ef = n(157432),
    eE = n(151282),
    eC = n(654783),
    ex = n(970244),
    eS = n(631576),
    eI = n(252263),
    eN = n(67259),
    ev = n(351488),
    eT = n(728321),
    ey = n(961350),
    eb = n(761640),
    ej = n(31717),
    eR = n(580745),
    eM = n(696451),
    eL = n(320501),
    eD = n(576705),
    eP = n(994500),
    eO = n(309010),
    ew = n(522602),
    eU = n(287809),
    ek = n(954571),
    eG = n(147036),
    eF = n(234320),
    eH = n(203982),
    eB = n(661191),
    eV = n(460350),
    ez = n(518960),
    eK = n(382287),
    eW = n(137577),
    eY = n(47167),
    eJ = n(480870),
    eq = n(390756),
    e$ = n(387462),
    eZ = n(582968),
    eX = n(667285),
    eQ = n(920437),
    e0 = n(652215),
    e1 = n(381941),
    e2 = n(650583),
    e3 = n(985018),
    e9 = n(964623);
function e7(e) {
    e.preventDefault();
}
let e6 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e4(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, i.jsx)("section", { ...n, role: "complementary" }) : (0, i.jsx)("main", { ...n });
}
let e8 = l.forwardRef((e, t) => (0, i.jsx)(e5, { ...e, ref: t }));
e8.displayName = "ChannelTextAreaForm";
class e5 extends l.PureComponent {
    focusEditor() {
        this.editorRef?.focus();
    }
    submit() {
        this.editorRef?.submit();
    }
    isFirstChange = !0;
    editorRef = null;
    state = { ...(0, G.ur)(ej.A.getDraft(this.props.channel.id, ej.C.ChannelMessage)), contentWarningProps: null };
    componentDidMount() {
        ej.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ej.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ej.A.getDraft(n.id, ej.C.ChannelMessage);
            e !== i && this.setState((0, G.ur)(e));
        }
        t.textValue.length < e0.uvi && i.length >= e0.uvi && ek.default.track(e0.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = ej.A.getDraft(t.channel.id, ej.C.ChannelMessage);
            n !== i &&
                ("" === i || "" === n) &&
                e.setState((0, G.ur)(i), () => {
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
        switch (e.key) {
            case e2.dh.DELETE:
            case e2.dh.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case e2.dh.ARROW_UP:
                if (l || a) return;
                if ((e.preventDefault(), t))
                    ew.A.getUploadCount(i.id, ej.C.ChannelMessage) > 0
                        ? eH._.dispatchToLastSubscribed(e0.jej.FOCUS_ATTACHMENT_AREA)
                        : eH._.dispatchToLastSubscribed(e0.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = eL.A.getLastChatCommandMessage(e.id),
                        n = eL.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? eB.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case e2.dh.ESCAPE:
                if (l || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, N.Bm)();
                if (ew.A.getUploadCount(i.id, ej.C.ChannelMessage) > 0)
                    return void x.A.clearAll(i.id, ej.C.ChannelMessage);
        }
        n?.(e, a);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        E.A.startEditMessageRecord(t.id, e), T.Ay.trackWithMetadata(e0.HAw.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, O.Ez)(e.interactionData),
            { command: l, application: a } = L.EW({ channel: t, type: "channel" }, n);
        if (null != l) {
            let e =
                null != a
                    ? {
                          type: P.Hf.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: a?.bot?.username ?? a.name,
                          application: a,
                      }
                    : null;
            R.Gf({
                channelId: t.id,
                command: l,
                section: e,
                location: P.Oh.RECALL,
                initialValues: (0, M.getInitialValuesFromInteractionOptions)(l, i ?? []),
                commandOrigin: P.iw.CHAT,
            });
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            i = ey.default.getId(),
            l = eh.Ay.getUserCombo(i, n),
            a = (l?.value ?? 0) + 1;
        (0, ed.oG)({ channelId: n, userId: i, value: null != e ? e.length : a, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: i,
            channel: { id: l },
        } = this.props;
        f.A.changeDraft(l, t, ej.C.ChannelMessage);
        let a = "" !== t && n !== this.state.richValue,
            s = a && !e6.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        (this.isFirstChange = !1),
            s && this.state.textValue.length < t.length && this.handleIncrementCombo(),
            s ? C.A.startTyping(l) : "" === t && C.A.stopTyping(l),
            a && i && (0, N.Bm)(),
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
        let { guild: d, channel: h, pendingReply: m, chatInputType: A, threadsAlsoSendToChannel: g } = this.props,
            p = !1;
        if (null != l) {
            if (l.inputType === P.y$.BUILT_IN_INTEGRATION)
                return (
                    eH._.dispatch(e0.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                );
            let e = D.A.getCommandOrigin(h.id);
            if (null == e || e === P.iw.CHAT) {
                let { isAuthorized: e } = await (0, U.q)({
                    applicationId: l.applicationId,
                    channel: h,
                    commandIntegrationTypes: l.integration_types,
                });
                if (!e) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
            } else if (e === P.iw.APPLICATION_LAUNCHER || e === P.iw.IMAGE_RECS_MENU || e === P.iw.IMAGE_RECS_SUBMENU) {
                let { location: t, sectionName: n } = (0, eq.bV)(l) ?? {},
                    i = e === P.iw.APPLICATION_LAUNCHER ? b.A.lastShownEntrypoint() : j.s4.TEXT,
                    { isAuthorized: a } = await (0, U.q)({
                        applicationId: l.applicationId,
                        channel: h,
                        commandIntegrationTypes: l.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: i },
                    });
                if (!a) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, eq.My)(l);
            }
            let n = await (0, w.A)({ command: l, optionValues: a ?? {}, context: { guild: d, channel: h } });
            if (l.inputType !== P.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (p = !0 === n.tts));
        }
        return (0, eV.i)({
            openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
            type: this.props.chatInputType,
            content: t,
            stickers: i,
            uploads: n,
            channel: h,
        }).then(async (e) => {
            let { valid: a, failureReason: _ } = e;
            if (!a)
                if (_ === e0.X8x.SLOWMODE_COOLDOWN)
                    return (
                        eH._.dispatch(e0.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        eH._.dispatch(e0.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let C = (0, el.S)(t, { channel: h, isEdit: !1 });
            null != C && (null != C.content && (t = C.content), null != C.tts && (p = C.tts));
            let S = ea.Ay.parse(h, t);
            (S.tts = S.tts || p), null != o && ((S.content = ""), (S.components = o));
            let I = {
                ...E.A.getSendMessageOptions({
                    content: t,
                    channelId: h.id,
                    uploads: n,
                    stickers: i,
                    command: l,
                    isGif: s,
                    pendingReply: m,
                    alsoForwardToChannelId: g ? (h.parent_id ?? void 0) : void 0,
                    scheduledTimestamp: this.props.pendingScheduledMessage?.scheduledTimestamp,
                }),
                location: e1.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (I.announcementSendOptions = c),
                null != r && (I.gifMetadata = r),
                null != o && (I.flags = (0, u.UI)(I.flags ?? 0, e0.pr7.IS_COMPONENTS_V2)),
                s)
            )
                return (
                    E.A.sendMessage(h.id, S, void 0, I).then(() => {
                        g && ev._(h.parent_id ?? void 0);
                    }),
                    (0, ep.Jx)(h.id),
                    eI.B({ channelId: h.id, enabled: !1 }),
                    { shouldClear: !1, shouldRefocus: !0 }
                );
            if (null != n && n.length > 0) {
                let e = (0, eK.LJ)(n);
                if ((0, eK.fJ)(e, d?.id)) return (0, ez.V)(h, e), { shouldClear: !1, shouldRefocus: !1 };
                (I.eagerDispatch = !1),
                    (I.attachmentsToUpload = n),
                    (I.onAttachmentUploadError = (e, i, l) => {
                        (0, en.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: i, reason: l }) &&
                            ("" !== t &&
                                "" === ej.A.getDraft(h.id, ej.C.ChannelMessage) &&
                                f.A.saveDraft(h.id, t, ej.C.ChannelMessage),
                            0 === ew.A.getUploadCount(h.id, ej.C.ChannelMessage) &&
                                x.A.setUploads({ channelId: h.id, uploads: n, draftType: ej.C.ChannelMessage }));
                    }),
                    x.A.clearAll(h.id, ej.C.ChannelMessage);
            }
            if (null != I.scheduledTimestamp)
                try {
                    await (0, eE.pr)({
                        channelId: h.id,
                        scheduledTimestamp: I.scheduledTimestamp,
                        messageSendData: {
                            channelId: h.id,
                            content: t,
                            nonce: (0, es.m)(),
                            tts: p,
                            message_reference: I.messageReference,
                            allowed_mentions: I.allowedMentions,
                            flags: I.flags,
                        },
                        attachmentsToUpload: n,
                    }),
                        (0, ex.c_)(I.scheduledTimestamp);
                } catch (e) {
                    return (0, ex.kM)(e.message), { shouldClear: !1, shouldRefocus: !1 };
                }
            else
                E.A.sendMessage(h.id, S, void 0, I).then(() => {
                    g && ev._(h.parent_id ?? void 0);
                });
            return (
                this.setState((0, G.N3)()),
                (0, ep.Jx)(h.id),
                (0, eS.x5)(h.id, A.drafts.type),
                eI.B({ channelId: h.id, enabled: !1 }),
                { shouldClear: !0, shouldRefocus: !0 }
            );
        });
    };
    handleSetValue = (e) => {
        let t = this.editorRef?.getSlateEditor();
        null != t && (z.b.select(t, []), t.insertText(e), this.editorRef?.focus());
    };
    renderAttachButton = (e, t) =>
        (0, i.jsx)(B.A, {
            className: t,
            channel: this.props.channel,
            draftType: ej.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e,
        });
    renderApplicationCommandIcon = (e, t, n) =>
        (0, i.jsx)(H.A, { className: n, command: e, section: t, channel: this.props.channel });
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
                poggermodeEnabled: g,
                pendingScheduledMessage: p,
                announcementComposerEnabled: _,
            } = this.props,
            { contentWarningProps: f } = this.state,
            E =
                e.type === e0.rbe.GUILD_ANNOUNCEMENT && _
                    ? (0, i.jsx)(F.A, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e9.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: k.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: a,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: ez.R,
                          highlighted: s,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, i.jsx)(V.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e9.gM,
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
                          promptToUpload: ez.R,
                          highlighted: s,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: p,
                      });
        return (0, i.jsx)(m.Y, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                f?.onCancel?.(), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != f,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != f, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, i.jsx)(er.A, { onClose: t, ...f })
                );
            },
            children: () =>
                g ? (0, i.jsx)(A.b, { isShaking: h > 0, intensity: h, className: e9.Xn, children: E }) : E,
        });
    }
}
class te extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? { textAreaFocused: null != n && !c.Fr && eD.A.can(e0.xBc.SEND_MESSAGES, n), currentChannelId: n.id }
            : null;
    }
    containerDomRef = l.createRef();
    refToChannelTextAreaFormComponent = l.createRef();
    inputFormRef = l.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = l.createRef();
    componentDidMount() {
        eH._.subscribe(e0.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eH._.unsubscribe(e0.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                : this.setState({ textAreaFocused: !0 }),
            e?.wasEnterPressed &&
                (e?.event?.preventDefault(), this.refToChannelTextAreaFormComponent.current?.submit());
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
            switch (e.key) {
                case e2.dh.ARROW_LEFT:
                    n === k.oU.SIDEBAR &&
                        eH._.dispatch(e0.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: eO.A.getChannelId() });
                    return;
                case e2.dh.ARROW_RIGHT:
                    n === k.oU.NORMAL &&
                        eH._.dispatch(e0.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: eb.Ay.getCurrentSidebarChannelId(i.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, W.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    handleOpenAppLauncher = (e) => {
        let { applicationId: t } = e;
        return y.R(j.s4.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
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
        return t.type === e0.rbe.DM && n
            ? (0, i.jsx)(eg.A, {})
            : t.isModeratorReportChannel() && t.isArchivedThread()
              ? (0, i.jsx)(ef.A, { channelId: t.id })
              : null != a && (0, $.n)(a) && null != l && !eD.A.can(e0.xBc.ADMINISTRATOR, l)
                ? (0, i.jsx)(X.j, { guild: l, disabledUntil: a })
                : s
                  ? (0, i.jsx)(J.u, { guild: l })
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
                showQuarantinedUserBanner: m,
                filterAfterTimestamp: A,
                communicationDisabledUntil: _,
                shakeIntensity: f,
                poggermodeEnabled: E,
                isSelectedResourceChannel: C,
                showAutomodUserProfileChatBlocker: x,
                pendingScheduledMessage: N,
                messagesTypingGradient: v,
                showLinkedLobbyApplicationLoadingIndicator: T,
                announcementComposerEnabled: y,
            } = this.props,
            { textAreaFocused: b, textAreaHighlighted: j } = this.state,
            R = c === k.oU.SIDEBAR;
        e =
            R && t.type === e0.rbe.GUILD_VOICE
                ? e3.t.pnnyFZ
                : R && t.type === e0.rbe.GUILD_STAGE_VOICE
                  ? e3.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? e3.t["OkzL+Q"]
                    : e3.t.UbNmGc;
        let M = (0, i.jsx)("div", { className: e9.li, children: (0, i.jsx)(eZ.A, {}) }),
            L = (0, i.jsx)("div", {
                className: e9.li,
                children: (0, i.jsx)(eT.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, i.jsx)(e8, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: b,
                        highlighted: j,
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
                        shakeIntensity: f,
                        poggermodeEnabled: E,
                        pendingScheduledMessage: N,
                        announcementComposerEnabled: y,
                    }),
                }),
            }),
            D = T ? M : L,
            P = (0, eY.m1)(t, eU.default, eP.A);
        return (0, i.jsx)(
            I.A,
            {
                page: (0, eG.DJ)(this.props.channel),
                children: (0, i.jsx)(et.di, {
                    children: (0, i.jsx)(ee.Xq, {
                        children: (0, i.jsxs)(eF.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eF.EG, { event: e0.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, i.jsx)(eF.EG, { event: e0.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, i.jsx)(eF.EG, {
                                    event: e0.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, i.jsx)(eF.EG, {
                                    event: e0.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, i.jsxs)(e4, {
                                    isSidebar: R,
                                    className: e9.q2,
                                    "aria-label": e3.intl.formatToPlainString(e, { channelName: P }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: this.props.guildOfficialMessageStyle,
                                    children: [
                                        (0, i.jsx)(e$.A, { channel: t, guild: n, narrow: R }),
                                        (0, i.jsxs)(g.F, {
                                            component: (0, i.jsx)(p.A, {
                                                children: (0, i.jsx)(g.H, {
                                                    children: e3.intl.format(e3.t.eTzKkx, { channelName: P }),
                                                }),
                                            }),
                                            children: [
                                                (0, i.jsx)(eo.A, {
                                                    channel: t,
                                                    forceCozy: C,
                                                    filterAfterTimestamp: A,
                                                    showingQuarantineBanner: m,
                                                    typingGradient: v,
                                                    hideSummaries: c === k.oU.OVERLAY,
                                                }),
                                                C
                                                    ? null
                                                    : (this.renderMessageBanner({
                                                          channel: t,
                                                          showQuarantinedUserBanner: m,
                                                          guild: n,
                                                          communicationDisabledUntil: _,
                                                          showAutomodUserProfileChatBlocker: x,
                                                      }) ??
                                                      (0, i.jsxs)("form", {
                                                          ref: this.inputFormRef,
                                                          onSubmit: e7,
                                                          className: s()(e9.Zd, { [e9.Mf]: !T }),
                                                          children: [
                                                              E && (0, i.jsx)(em.A, { channelId: t.id }),
                                                              t.isPrivate()
                                                                  ? (0, i.jsx)(eX.A, { channel: t, children: D })
                                                                  : (0, i.jsx)(eQ.A, { channel: t, children: D }),
                                                              (0, i.jsx)(S.Ay, { channel: t, isInTextChannel: !0 }),
                                                          ],
                                                      })),
                                                (0, i.jsx)(et.lr, {}),
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
let tt = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: a } = e,
        { placeholder: s, accessibilityLabel: r } = (0, eJ.A)({ channel: t }),
        o = (0, eg.L)(eU.default.getCurrentUser(), t),
        [c] = (0, Z.c)(n?.id),
        d = (0, Y.uZ)(n?.id),
        u = (0, h.bG)([eU.default], () => eU.default.getCurrentUser()),
        m = (0, h.bG)([eM.Ay], () => null != u && (eM.Ay.getMember(n?.id ?? e0.dJq, u?.id)?.isPending ?? !1)),
        A = (0, h.bG)([eu.A], () => eu.A.isEnabled()),
        g = (0, eA.A)(t.id),
        p = (0, Q.A)(t.id),
        f = (0, eC.D)(t.id),
        E = (0, h.bG)([eN.A], () => eN.A.getAlsoSendToChannel(t.id)),
        C = (0, h.bG)([eh.Ay, ey.default], () => eh.Ay.getUserCombo(ey.default.getId(), t.id)),
        x = (0, S.rj)(t),
        I = (0, S.aW)(t),
        N = x.length > 0 || t.rateLimitPerUser > 0 || null != C || null != I,
        { showLinkedLobbyApplicationLoadingIndicator: T } = (0, eW.A)(t.linkedLobby),
        y = (0, K.A)("ChannelChat"),
        b = (0, ec.A)((0, ei.GP)(n, "ChannelChat") ? (n?.officialMessageColor ?? e1.aj) : null);
    return (
        (0, q.A)(t),
        (0, i.jsx)(te, {
            channel: t,
            guildOfficialMessageStyle: b,
            isEditing: null != (0, h.bG)([eR.A], () => eR.A.getEditingMessageId(t.id)),
            hasModalOpen: (0, _.useModalsStore)(_.hasAnyModalOpenSelector),
            guild: n,
            keyboardModeEnabled: (0, h.bG)([v.A], () => v.A.keyboardModeEnabled),
            pendingReply: (0, h.bG)([e_.A], () => e_.A.getPendingReply(t.id)),
            threadsAlsoSendToChannel: E,
            chatInputType: l,
            placeholder: s,
            accessibilityLabel: r,
            filterAfterTimestamp: a,
            showQuarantinedUserBanner: o,
            communicationDisabledUntil: c,
            shakeIntensity: g,
            poggermodeEnabled: A,
            isSelectedResourceChannel: p,
            showAutomodUserProfileChatBlocker: d && !m,
            pendingScheduledMessage: f,
            messagesTypingGradient: N,
            showLinkedLobbyApplicationLoadingIndicator: T,
            announcementComposerEnabled: y,
        })
    );
});
