n.d(t, { A: () => e1 }), n(938796);
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
    p = n(843472),
    g = n(414798),
    f = n(608299),
    _ = n(147192),
    E = n(820284),
    C = n(955572),
    x = n(775602),
    S = n(58149),
    T = n(211401),
    I = n(989837),
    N = n(500049),
    v = n(721768),
    y = n(258363),
    b = n(842209),
    R = n(861382),
    j = n(392054),
    M = n(168186),
    D = n(545152),
    O = n(972995),
    L = n(355622),
    P = n(408018),
    w = n(223938),
    k = n(811501),
    U = n(20737),
    G = n(133343),
    F = n(35277),
    H = n(595914),
    B = n(151271),
    V = n(81400),
    W = n(870006),
    K = n(316031),
    z = n(870136),
    Y = n(834651),
    q = n(265869),
    J = n(129185),
    $ = n(513609),
    Z = n(301169),
    X = n(751258),
    Q = n(451909),
    ee = n(195880),
    et = n(926262),
    en = n(371648),
    ei = n(928830),
    el = n(3137),
    ea = n(559908),
    es = n(329449),
    er = n(582223),
    eo = n(720480),
    ec = n(118517),
    ed = n(853145),
    eu = n(157432),
    eh = n(151282),
    em = n(654783),
    eA = n(970244),
    ep = n(631576),
    eg = n(252263),
    ef = n(67259),
    e_ = n(351488),
    eE = n(728321),
    eC = n(961350),
    ex = n(761640),
    eS = n(31717),
    eT = n(580745),
    eI = n(696451),
    eN = n(320501),
    ev = n(576705),
    ey = n(309010),
    eb = n(522602),
    eR = n(287809),
    ej = n(954571),
    eM = n(147036),
    eD = n(234320),
    eO = n(203982),
    eL = n(661191),
    eP = n(460350),
    ew = n(518960),
    ek = n(382287),
    eU = n(137577),
    eG = n(480870),
    eF = n(390756),
    eH = n(387462),
    eB = n(582968),
    eV = n(667285),
    eW = n(920437),
    eK = n(652215),
    ez = n(381941),
    eY = n(985018),
    eq = n(638990);
function eJ(e) {
    e.preventDefault();
}
let e$ = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eZ(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, i.jsx)("section", { ...n, role: "complementary" }) : (0, i.jsx)("main", { ...n });
}
let eX = l.forwardRef((e, t) => (0, i.jsx)(eQ, { ...e, ref: t }));
eX.displayName = "ChannelTextAreaForm";
class eQ extends l.PureComponent {
    focusEditor() {
        this.editorRef?.focus();
    }
    isFirstChange = !0;
    editorRef = null;
    state = { ...(0, P.ur)(eS.A.getDraft(this.props.channel.id, eS.C.ChannelMessage)), contentWarningProps: null };
    componentDidMount() {
        eS.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eS.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eS.A.getDraft(n.id, eS.C.ChannelMessage);
            e !== i && this.setState((0, P.ur)(e));
        }
        t.textValue.length < eK.uvi && i.length >= eK.uvi && ej.default.track(eK.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = eS.A.getDraft(t.channel.id, eS.C.ChannelMessage);
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
            case eK.Ks6.DELETE:
            case eK.Ks6.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case eK.Ks6.ARROW_UP:
                if (l || a) return;
                if ((e.preventDefault(), t))
                    eb.A.getUploadCount(i.id, eS.C.ChannelMessage) > 0
                        ? eO._.dispatchToLastSubscribed(eK.jej.FOCUS_ATTACHMENT_AREA)
                        : eO._.dispatchToLastSubscribed(eK.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = eN.A.getLastChatCommandMessage(e.id),
                        n = eN.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? eL.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case eK.Ks6.ESCAPE:
                if (l || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, C.Bm)();
                if (eb.A.getUploadCount(i.id, eS.C.ChannelMessage) > 0)
                    return void f.A.clearAll(i.id, eS.C.ChannelMessage);
        }
        n?.(e, a);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        p.A.startEditMessageRecord(t.id, e), S.Ay.trackWithMetadata(eK.HAw.MESSAGE_EDIT_UP_ARROW);
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
                          type: j.Hf.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: a?.bot?.username ?? a.name,
                          application: a,
                      }
                    : null;
            v.Gf({
                channelId: t.id,
                command: l,
                section: e,
                location: j.Oh.RECALL,
                initialValues: (0, y.getInitialValuesFromInteractionOptions)(l, i ?? []),
                commandOrigin: j.iw.CHAT,
            });
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            i = eC.default.getId(),
            l = ea.Ay.getUserCombo(i, n),
            a = (l?.value ?? 0) + 1;
        (0, ei.oG)({ channelId: n, userId: i, value: null != e ? e.length : a, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: i,
            channel: { id: l },
        } = this.props;
        A.A.changeDraft(l, t, eS.C.ChannelMessage);
        let a = "" !== t && n !== this.state.richValue,
            s = a && !e$.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        (this.isFirstChange = !1),
            s && this.state.textValue.length < t.length && this.handleIncrementCombo(),
            s ? g.A.startTyping(l) : "" === t && g.A.stopTyping(l),
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
        let { guild: d, channel: h, pendingReply: m, chatInputType: g, threadsAlsoSendToChannel: _ } = this.props,
            E = !1;
        if (null != l) {
            if (l.inputType === j.y$.BUILT_IN_INTEGRATION)
                return (
                    eO._.dispatch(eK.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                );
            let e = R.A.getCommandOrigin(h.id);
            if (null == e || e === j.iw.CHAT) {
                let { isAuthorized: e } = await (0, O.q)({
                    applicationId: l.applicationId,
                    channel: h,
                    commandIntegrationTypes: l.integration_types,
                });
                if (!e) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
            } else if (e === j.iw.APPLICATION_LAUNCHER || e === j.iw.IMAGE_RECS_MENU || e === j.iw.IMAGE_RECS_SUBMENU) {
                let { location: t, sectionName: n } = (0, eF.bV)(l) ?? {},
                    i = e === j.iw.APPLICATION_LAUNCHER ? I.A.lastShownEntrypoint() : N.s4.TEXT,
                    { isAuthorized: a } = await (0, O.q)({
                        applicationId: l.applicationId,
                        channel: h,
                        commandIntegrationTypes: l.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: i },
                    });
                if (!a) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, eF.My)(l);
            }
            let n = await (0, D.A)({ command: l, optionValues: a ?? {}, context: { guild: d, channel: h } });
            if (l.inputType !== j.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (E = !0 === n.tts));
        }
        return (0, eP.i)({
            openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
            type: this.props.chatInputType,
            content: t,
            stickers: i,
            uploads: n,
            channel: h,
        }).then(async (e) => {
            let { valid: a, failureReason: C } = e;
            if (!a)
                if (C === eK.X8x.SLOWMODE_COOLDOWN)
                    return (
                        eO._.dispatch(eK.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        eO._.dispatch(eK.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let x = (0, X.S)(t, { channel: h, isEdit: !1 });
            null != x && (null != x.content && (t = x.content), null != x.tts && (E = x.tts));
            let S = Q.Ay.parse(h, t);
            (S.tts = S.tts || E), null != o && ((S.content = ""), (S.components = o));
            let T = {
                ...p.A.getSendMessageOptions({
                    content: t,
                    channelId: h.id,
                    uploads: n,
                    stickers: i,
                    command: l,
                    isGif: s,
                    pendingReply: m,
                    alsoForwardToChannelId: _ ? (h.parent_id ?? void 0) : void 0,
                    scheduledTimestamp: this.props.pendingScheduledMessage?.scheduledTimestamp,
                }),
                location: ez.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (T.announcementSendOptions = c),
                null != r && (T.gifMetadata = r),
                null != o && (T.flags = (0, u.UI)(T.flags ?? 0, eK.pr7.IS_COMPONENTS_V2)),
                s)
            )
                return (
                    p.A.sendMessage(h.id, S, void 0, T).then(() => {
                        _ && e_._(h.parent_id ?? void 0);
                    }),
                    (0, ec.Jx)(h.id),
                    eg.B({ channelId: h.id, enabled: !1 }),
                    { shouldClear: !1, shouldRefocus: !0 }
                );
            if (null != n && n.length > 0) {
                let e = (0, ek.LJ)(n);
                if ((0, ek.fJ)(e, d?.id)) return (0, ew.V)(h, e), { shouldClear: !1, shouldRefocus: !1 };
                (T.eagerDispatch = !1),
                    (T.attachmentsToUpload = n),
                    (T.onAttachmentUploadError = (e, i, l) => {
                        (0, Z.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: i, reason: l }) &&
                            ("" !== t &&
                                "" === eS.A.getDraft(h.id, eS.C.ChannelMessage) &&
                                A.A.saveDraft(h.id, t, eS.C.ChannelMessage),
                            0 === eb.A.getUploadCount(h.id, eS.C.ChannelMessage) &&
                                f.A.setUploads({ channelId: h.id, uploads: n, draftType: eS.C.ChannelMessage }));
                    }),
                    f.A.clearAll(h.id, eS.C.ChannelMessage);
            }
            if (null != T.scheduledTimestamp)
                try {
                    await (0, eh.pr)({
                        channelId: h.id,
                        scheduledTimestamp: T.scheduledTimestamp,
                        messageSendData: {
                            channelId: h.id,
                            content: t,
                            nonce: (0, ee.m)(),
                            tts: E,
                            message_reference: T.messageReference,
                            allowed_mentions: T.allowedMentions,
                            flags: T.flags,
                        },
                        attachmentsToUpload: n,
                    }),
                        (0, eA.c_)(T.scheduledTimestamp);
                } catch (e) {
                    return (0, eA.kM)(e.message), { shouldClear: !1, shouldRefocus: !1 };
                }
            else
                p.A.sendMessage(h.id, S, void 0, T).then(() => {
                    _ && e_._(h.parent_id ?? void 0);
                });
            return (
                this.setState((0, P.N3)()),
                (0, ec.Jx)(h.id),
                (0, ep.x5)(h.id, g.drafts.type),
                eg.B({ channelId: h.id, enabled: !1 }),
                { shouldClear: !0, shouldRefocus: !0 }
            );
        });
    };
    handleSetValue = (e) => {
        let t = this.editorRef?.getSlateEditor();
        null != t && (F.b.select(t, []), t.insertText(e), this.editorRef?.focus());
    };
    renderAttachButton = (e, t) =>
        (0, i.jsx)(U.A, {
            className: t,
            channel: this.props.channel,
            draftType: eS.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e,
        });
    renderApplicationCommandIcon = (e, t, n) =>
        (0, i.jsx)(k.A, { className: n, command: e, section: t, channel: this.props.channel });
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
                pendingScheduledMessage: p,
                announcementComposerEnabled: g,
            } = this.props,
            { contentWarningProps: f } = this.state,
            _ =
                e.type === eK.rbe.GUILD_ANNOUNCEMENT && g
                    ? (0, i.jsx)(w.A, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eq.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: L.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: a,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: ew.R,
                          highlighted: s,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, i.jsx)(G.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eq.gM,
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
                          promptToUpload: ew.R,
                          highlighted: s,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: p,
                      });
        return (0, i.jsx)(m.YNO, {
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
                    (0, i.jsx)(et.A, { onClose: t, ...f })
                );
            },
            children: () =>
                A ? (0, i.jsx)(m.bfh, { isShaking: h > 0, intensity: h, className: eq.Xn, children: _ }) : _,
        });
    }
}
class e0 extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused:
                      null != n && n.type !== eK.rbe.GUILD_ANNOUNCEMENT && !c.Fr && ev.A.can(eK.xBc.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    containerDomRef = l.createRef();
    refToChannelTextAreaFormComponent = l.createRef();
    inputFormRef = l.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = l.createRef();
    componentDidMount() {
        eO._.subscribe(eK.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eO._.unsubscribe(eK.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                case eK.Ks6.ARROW_LEFT:
                    n === L.oU.SIDEBAR &&
                        eO._.dispatch(eK.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: ey.A.getChannelId() });
                    return;
                case eK.Ks6.ARROW_RIGHT:
                    n === L.oU.NORMAL &&
                        eO._.dispatch(eK.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: ex.Ay.getCurrentSidebarChannelId(i.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, B.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    handleOpenAppLauncher = (e) => {
        let { applicationId: t } = e;
        return T.R(N.s4.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
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
        return t.type === eK.rbe.DM && n
            ? (0, i.jsx)(eo.A, {})
            : t.isModeratorReportChannel() && t.isArchivedThread()
              ? (0, i.jsx)(eu.A, { channelId: t.id })
              : null != a && (0, K.n)(a) && null != l && !ev.A.can(eK.xBc.ADMINISTRATOR, l)
                ? (0, i.jsx)(Y.j, { guild: l, disabledUntil: a })
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
                filterAfterTimestamp: p,
                communicationDisabledUntil: g,
                shakeIntensity: f,
                poggermodeEnabled: C,
                isSelectedResourceChannel: x,
                showAutomodUserProfileChatBlocker: S,
                pendingScheduledMessage: T,
                messagesTypingGradient: I,
                showLinkedLobbyApplicationLoadingIndicator: N,
                announcementComposerEnabled: v,
            } = this.props,
            { textAreaFocused: y, textAreaHighlighted: b } = this.state,
            R = c === L.oU.SIDEBAR;
        e =
            R && t.type === eK.rbe.GUILD_VOICE
                ? eY.t.pnnyFZ
                : R && t.type === eK.rbe.GUILD_STAGE_VOICE
                  ? eY.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eY.t["OkzL+Q"]
                    : eY.t.UbNmGc;
        let j = (0, i.jsx)("div", { className: eq.li, children: (0, i.jsx)(eB.A, {}) }),
            M = (0, i.jsx)("div", {
                className: eq.li,
                children: (0, i.jsx)(eE.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, i.jsx)(eX, {
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
                        shakeIntensity: f,
                        poggermodeEnabled: C,
                        pendingScheduledMessage: T,
                        announcementComposerEnabled: v,
                    }),
                }),
            }),
            D = N ? j : M;
        return (0, i.jsx)(
            E.A,
            {
                page: (0, eM.DJ)(this.props.channel),
                children: (0, i.jsx)($.di, {
                    children: (0, i.jsx)(J.Xq, {
                        children: (0, i.jsxs)(eD.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eD.EG, { event: eK.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, i.jsx)(eD.EG, { event: eK.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, i.jsx)(eD.EG, {
                                    event: eK.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, i.jsx)(eD.EG, {
                                    event: eK.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, i.jsxs)(eZ, {
                                    isSidebar: R,
                                    className: eq.q2,
                                    "aria-label": eY.intl.formatToPlainString(e, { channelName: t.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, i.jsx)(eH.A, { channel: t, guild: n, narrow: R }),
                                        (0, i.jsxs)(m.Fmo, {
                                            component: (0, i.jsx)(m.AC4, {
                                                children: (0, i.jsx)(m.H, {
                                                    children: eY.intl.format(eY.t.eTzKkx, { channelName: t.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, i.jsx)(en.A, {
                                                    channel: t,
                                                    forceCozy: x,
                                                    filterAfterTimestamp: p,
                                                    showingQuarantineBanner: A,
                                                    typingGradient: I,
                                                }),
                                                x
                                                    ? null
                                                    : (this.renderMessageBanner({
                                                          channel: t,
                                                          showQuarantinedUserBanner: A,
                                                          guild: n,
                                                          communicationDisabledUntil: g,
                                                          showAutomodUserProfileChatBlocker: S,
                                                      }) ??
                                                      (0, i.jsxs)("form", {
                                                          ref: this.inputFormRef,
                                                          onSubmit: eJ,
                                                          className: s()(eq.Zd, { [eq.Mf]: !N }),
                                                          children: [
                                                              C && (0, i.jsx)(es.A, { channelId: t.id }),
                                                              t.isPrivate()
                                                                  ? (0, i.jsx)(eV.A, { channel: t, children: D })
                                                                  : (0, i.jsx)(eW.A, { channel: t, children: D }),
                                                              (0, i.jsx)(_.Ay, { channel: t, isInTextChannel: !0 }),
                                                          ],
                                                      })),
                                                (0, i.jsx)($.lr, {}),
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
let e1 = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: a } = e,
        { placeholder: s, accessibilityLabel: r } = (0, eG.A)({ channel: t }),
        o = (0, eo.L)(eR.default.getCurrentUser(), t),
        [c] = (0, z.c)(n?.id),
        d = (0, V.uZ)(n?.id),
        u = (0, h.bG)([eR.default], () => eR.default.getCurrentUser()),
        A = (0, h.bG)([eI.Ay], () => null != u && (eI.Ay.getMember(n?.id ?? eK.dJq, u?.id)?.isPending ?? !1)),
        p = (0, h.bG)([el.A], () => el.A.isEnabled()),
        g = (0, er.A)(t.id),
        f = (0, q.A)(t.id),
        E = (0, em.D)(t.id),
        C = (0, h.bG)([ef.A], () => ef.A.getAlsoSendToChannel(t.id)),
        S = (0, h.bG)([ea.Ay, eC.default], () => ea.Ay.getUserCombo(eC.default.getId(), t.id)),
        T = (0, _.rj)(t),
        I = (0, _.aW)(t),
        N = T.length > 0 || t.rateLimitPerUser > 0 || null != S || null != I,
        { showLinkedLobbyApplicationLoadingIndicator: v } = (0, eU.A)(t.linkedLobby),
        y = (0, H.A)("ChannelChat");
    return (0, i.jsx)(e0, {
        channel: t,
        isEditing: null != (0, h.bG)([eT.A], () => eT.A.getEditingMessageId(t.id)),
        hasModalOpen: (0, m.red)(m.DXt),
        guild: n,
        keyboardModeEnabled: (0, h.bG)([x.A], () => x.A.keyboardModeEnabled),
        pendingReply: (0, h.bG)([ed.A], () => ed.A.getPendingReply(t.id)),
        threadsAlsoSendToChannel: C,
        chatInputType: l,
        placeholder: s,
        accessibilityLabel: r,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: o,
        communicationDisabledUntil: c,
        shakeIntensity: g,
        poggermodeEnabled: p,
        isSelectedResourceChannel: f,
        showAutomodUserProfileChatBlocker: d && !A,
        pendingScheduledMessage: E,
        messagesTypingGradient: N,
        showLinkedLobbyApplicationLoadingIndicator: v,
        announcementComposerEnabled: y,
    });
});
