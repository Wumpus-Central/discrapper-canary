n.d(t, { A: () => e6 }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
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
    f = n(608299),
    _ = n(147192),
    E = n(820284),
    x = n(955572),
    C = n(775602),
    S = n(58149),
    T = n(211401),
    N = n(989837),
    I = n(500049),
    v = n(721768),
    y = n(258363),
    b = n(842209),
    j = n(861382),
    R = n(392054),
    M = n(168186),
    D = n(545152),
    O = n(972995),
    L = n(355622),
    P = n(408018),
    k = n(223938),
    w = n(811501),
    U = n(20737),
    G = n(133343),
    F = n(35277),
    B = n(595914),
    H = n(151271),
    V = n(81400),
    K = n(870006),
    W = n(837024),
    z = n(316031),
    q = n(870136),
    Y = n(834651),
    J = n(265869),
    $ = n(129185),
    Z = n(513609),
    X = n(301169),
    Q = n(751258),
    ee = n(451909),
    et = n(475481),
    en = n(195880),
    ei = n(926262),
    el = n(371648),
    es = n(928830),
    ea = n(3137),
    er = n(559908),
    eo = n(329449),
    ec = n(582223),
    ed = n(720480),
    eu = n(118517),
    eh = n(853145),
    em = n(157432),
    eA = n(151282),
    eg = n(654783),
    ep = n(970244),
    ef = n(631576),
    e_ = n(252263),
    eE = n(67259),
    ex = n(351488),
    eC = n(728321),
    eS = n(961350),
    eT = n(761640),
    eN = n(31717),
    eI = n(580745),
    ev = n(696451),
    ey = n(320501),
    eb = n(576705),
    ej = n(994500),
    eR = n(309010),
    eM = n(522602),
    eD = n(287809),
    eO = n(954571),
    eL = n(147036),
    eP = n(234320),
    ek = n(203982),
    ew = n(661191),
    eU = n(460350),
    eG = n(518960),
    eF = n(382287),
    eB = n(137577),
    eH = n(47167),
    eV = n(480870),
    eK = n(390756),
    eW = n(387462),
    ez = n(582968),
    eq = n(667285),
    eY = n(920437),
    eJ = n(652215),
    e$ = n(381941),
    eZ = n(985018),
    eX = n(513544);
function eQ(e) {
    e.preventDefault();
}
let e0 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e1(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, i.jsx)("section", { ...n, role: "complementary" }) : (0, i.jsx)("main", { ...n });
}
let e2 = l.forwardRef((e, t) => (0, i.jsx)(e3, { ...e, ref: t }));
e2.displayName = "ChannelTextAreaForm";
class e3 extends l.PureComponent {
    focusEditor() {
        this.editorRef?.focus();
    }
    isFirstChange = !0;
    editorRef = null;
    state = { ...(0, P.ur)(eN.A.getDraft(this.props.channel.id, eN.C.ChannelMessage)), contentWarningProps: null };
    componentDidMount() {
        eN.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eN.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eN.A.getDraft(n.id, eN.C.ChannelMessage);
            e !== i && this.setState((0, P.ur)(e));
        }
        t.textValue.length < eJ.uvi && i.length >= eJ.uvi && eO.default.track(eJ.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = eN.A.getDraft(t.channel.id, eN.C.ChannelMessage);
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
            s = 0 !== this.state.textValue.length;
        switch (e.which) {
            case eJ.Ks6.DELETE:
            case eJ.Ks6.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case eJ.Ks6.ARROW_UP:
                if (l || s) return;
                if ((e.preventDefault(), t))
                    eM.A.getUploadCount(i.id, eN.C.ChannelMessage) > 0
                        ? ek._.dispatchToLastSubscribed(eJ.jej.FOCUS_ATTACHMENT_AREA)
                        : ek._.dispatchToLastSubscribed(eJ.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = ey.A.getLastChatCommandMessage(e.id),
                        n = ey.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? ew.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case eJ.Ks6.ESCAPE:
                if (l || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, x.Bm)();
                if (eM.A.getUploadCount(i.id, eN.C.ChannelMessage) > 0)
                    return void f.A.clearAll(i.id, eN.C.ChannelMessage);
        }
        n?.(e, s);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        g.A.startEditMessageRecord(t.id, e), S.Ay.trackWithMetadata(eJ.HAw.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, M.Ez)(e.interactionData),
            { command: l, application: s } = b.EW({ channel: t, type: "channel" }, n);
        if (null != l) {
            let e =
                null != s
                    ? {
                          type: R.Hf.APPLICATION,
                          id: s.id,
                          icon: s.icon,
                          name: s?.bot?.username ?? s.name,
                          application: s,
                      }
                    : null;
            v.Gf({
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
            i = eS.default.getId(),
            l = er.Ay.getUserCombo(i, n),
            s = (l?.value ?? 0) + 1;
        (0, es.oG)({ channelId: n, userId: i, value: null != e ? e.length : s, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: i,
            channel: { id: l },
        } = this.props;
        A.A.changeDraft(l, t, eN.C.ChannelMessage);
        let s = "" !== t && n !== this.state.richValue,
            a = s && !e0.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        (this.isFirstChange = !1),
            a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
            a ? p.A.startTyping(l) : "" === t && p.A.stopTyping(l),
            s && i && (0, x.Bm)(),
            this.setState({ textValue: t, richValue: n });
    };
    handleSendMessage = async (e) => {
        let {
            value: t,
            uploads: n,
            stickers: i,
            command: l,
            commandOptionValues: s,
            isGif: a,
            gifMetadata: r,
            components: o,
            announcementSendOptions: c,
        } = e;
        if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
            return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
        let { guild: d, channel: h, pendingReply: m, chatInputType: p, threadsAlsoSendToChannel: _ } = this.props,
            E = !1;
        if (null != l) {
            if (l.inputType === R.y$.BUILT_IN_INTEGRATION)
                return (
                    ek._.dispatch(eJ.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
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
                    i = e === R.iw.APPLICATION_LAUNCHER ? N.A.lastShownEntrypoint() : I.s4.TEXT,
                    { isAuthorized: s } = await (0, O.q)({
                        applicationId: l.applicationId,
                        channel: h,
                        commandIntegrationTypes: l.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: i },
                    });
                if (!s) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, eK.My)(l);
            }
            let n = await (0, D.A)({ command: l, optionValues: s ?? {}, context: { guild: d, channel: h } });
            if (l.inputType !== R.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (E = !0 === n.tts));
        }
        return (0, eU.i)({
            openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
            type: this.props.chatInputType,
            content: t,
            stickers: i,
            uploads: n,
            channel: h,
        }).then(async (e) => {
            let { valid: s, failureReason: x } = e;
            if (!s)
                if (x === eJ.X8x.SLOWMODE_COOLDOWN)
                    return (
                        ek._.dispatch(eJ.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        ek._.dispatch(eJ.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let C = (0, Q.S)(t, { channel: h, isEdit: !1 });
            null != C && (null != C.content && (t = C.content), null != C.tts && (E = C.tts));
            let S = ee.Ay.parse(h, t);
            (S.tts = S.tts || E), null != o && ((S.content = ""), (S.components = o));
            let T = {
                ...g.A.getSendMessageOptions({
                    content: t,
                    channelId: h.id,
                    uploads: n,
                    stickers: i,
                    command: l,
                    isGif: a,
                    pendingReply: m,
                    alsoForwardToChannelId: _ ? (h.parent_id ?? void 0) : void 0,
                    scheduledTimestamp: this.props.pendingScheduledMessage?.scheduledTimestamp,
                }),
                location: e$.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (T.announcementSendOptions = c),
                null != r && (T.gifMetadata = r),
                null != o && (T.flags = (0, u.UI)(T.flags ?? 0, eJ.pr7.IS_COMPONENTS_V2)),
                a)
            )
                return (
                    g.A.sendMessage(h.id, S, void 0, T).then(() => {
                        _ && ex._(h.parent_id ?? void 0);
                    }),
                    (0, eu.Jx)(h.id),
                    e_.B({ channelId: h.id, enabled: !1 }),
                    { shouldClear: !1, shouldRefocus: !0 }
                );
            if (null != n && n.length > 0) {
                let e = (0, eF.LJ)(n);
                if ((0, eF.fJ)(e, d?.id)) return (0, eG.V)(h, e), { shouldClear: !1, shouldRefocus: !1 };
                (T.eagerDispatch = !1),
                    (T.attachmentsToUpload = n),
                    (T.onAttachmentUploadError = (e, i, l) => {
                        (0, X.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: i, reason: l }) &&
                            ("" !== t &&
                                "" === eN.A.getDraft(h.id, eN.C.ChannelMessage) &&
                                A.A.saveDraft(h.id, t, eN.C.ChannelMessage),
                            0 === eM.A.getUploadCount(h.id, eN.C.ChannelMessage) &&
                                f.A.setUploads({ channelId: h.id, uploads: n, draftType: eN.C.ChannelMessage }));
                    }),
                    f.A.clearAll(h.id, eN.C.ChannelMessage);
            }
            if (null != T.scheduledTimestamp)
                try {
                    await (0, eA.pr)({
                        channelId: h.id,
                        scheduledTimestamp: T.scheduledTimestamp,
                        messageSendData: {
                            channelId: h.id,
                            content: t,
                            nonce: (0, en.m)(),
                            tts: E,
                            message_reference: T.messageReference,
                            allowed_mentions: T.allowedMentions,
                            flags: T.flags,
                        },
                        attachmentsToUpload: n,
                    }),
                        (0, ep.c_)(T.scheduledTimestamp);
                } catch (e) {
                    return (0, ep.kM)(e.message), { shouldClear: !1, shouldRefocus: !1 };
                }
            else
                g.A.sendMessage(h.id, S, void 0, T).then(() => {
                    _ && ex._(h.parent_id ?? void 0);
                });
            return (
                this.setState((0, P.N3)()),
                (0, eu.Jx)(h.id),
                (0, ef.x5)(h.id, p.drafts.type),
                e_.B({ channelId: h.id, enabled: !1 }),
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
            draftType: eN.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e,
        });
    renderApplicationCommandIcon = (e, t, n) =>
        (0, i.jsx)(w.A, { className: n, command: e, section: t, channel: this.props.channel });
    render() {
        let {
                channel: e,
                focused: t,
                onBlur: n,
                onFocus: l,
                onResize: s,
                highlighted: a,
                pendingReply: r,
                chatInputType: c,
                placeholder: d,
                accessibilityLabel: u,
                shakeIntensity: h,
                poggermodeEnabled: A,
                pendingScheduledMessage: g,
                announcementComposerEnabled: p,
            } = this.props,
            { contentWarningProps: f } = this.state,
            _ =
                e.type === eJ.rbe.GUILD_ANNOUNCEMENT && p
                    ? (0, i.jsx)(k.A, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eX.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: L.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: s,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eG.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, i.jsx)(G.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eX.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: c,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: s,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eG.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: g,
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
                    (0, i.jsx)(ei.A, { onClose: t, ...f })
                );
            },
            children: () =>
                A ? (0, i.jsx)(m.bfh, { isShaking: h > 0, intensity: h, className: eX.Xn, children: _ }) : _,
        });
    }
}
class e7 extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? { textAreaFocused: null != n && !c.Fr && eb.A.can(eJ.xBc.SEND_MESSAGES, n), currentChannelId: n.id }
            : null;
    }
    containerDomRef = l.createRef();
    refToChannelTextAreaFormComponent = l.createRef();
    inputFormRef = l.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = l.createRef();
    componentDidMount() {
        ek._.subscribe(eJ.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        ek._.unsubscribe(eJ.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                case eJ.Ks6.ARROW_LEFT:
                    n === L.oU.SIDEBAR &&
                        ek._.dispatch(eJ.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: eR.A.getChannelId() });
                    return;
                case eJ.Ks6.ARROW_RIGHT:
                    n === L.oU.NORMAL &&
                        ek._.dispatch(eJ.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: eT.Ay.getCurrentSidebarChannelId(i.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, H.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    handleOpenAppLauncher = (e) => {
        let { applicationId: t } = e;
        return T.R(I.s4.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
    };
    handleChatInteract = () => {
        this.dispatchGroupRef.current?.bumpDispatchPriority();
    };
    renderMessageBanner = (e) => {
        let {
            channel: t,
            showQuarantinedUserBanner: n,
            guild: l,
            communicationDisabledUntil: s,
            showAutomodUserProfileChatBlocker: a,
        } = e;
        return t.type === eJ.rbe.DM && n
            ? (0, i.jsx)(ed.A, {})
            : t.isModeratorReportChannel() && t.isArchivedThread()
              ? (0, i.jsx)(em.A, { channelId: t.id })
              : null != s && (0, z.n)(s) && null != l && !eb.A.can(eJ.xBc.ADMINISTRATOR, l)
                ? (0, i.jsx)(Y.j, { guild: l, disabledUntil: s })
                : a
                  ? (0, i.jsx)(K.u, { guild: l })
                  : null;
    };
    render() {
        let e,
            t,
            {
                channel: n,
                guild: l,
                keyboardModeEnabled: s,
                hasModalOpen: r,
                pendingReply: o,
                threadsAlsoSendToChannel: c,
                chatInputType: u,
                placeholder: h,
                accessibilityLabel: A,
                showQuarantinedUserBanner: g,
                filterAfterTimestamp: p,
                communicationDisabledUntil: f,
                shakeIntensity: x,
                poggermodeEnabled: C,
                isSelectedResourceChannel: S,
                showAutomodUserProfileChatBlocker: T,
                pendingScheduledMessage: N,
                messagesTypingGradient: I,
                showLinkedLobbyApplicationLoadingIndicator: v,
                announcementComposerEnabled: y,
            } = this.props,
            { textAreaFocused: b, textAreaHighlighted: j } = this.state,
            R = u === L.oU.SIDEBAR;
        e =
            R && n.type === eJ.rbe.GUILD_VOICE
                ? eZ.t.pnnyFZ
                : R && n.type === eJ.rbe.GUILD_STAGE_VOICE
                  ? eZ.t.YInSkq
                  : d.k.THREADS.has(n.type)
                    ? eZ.t["OkzL+Q"]
                    : eZ.t.UbNmGc;
        let M = (0, i.jsx)("div", { className: eX.li, children: (0, i.jsx)(ez.A, {}) }),
            D = (0, i.jsx)("div", {
                className: eX.li,
                children: (0, i.jsx)(eC.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, i.jsx)(e2, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: b,
                        highlighted: j,
                        channel: n,
                        guild: l,
                        keyboardModeEnabled: s,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: r,
                        pendingReply: o,
                        threadsAlsoSendToChannel: c,
                        chatInputType: u,
                        placeholder: h,
                        accessibilityLabel: A,
                        shakeIntensity: x,
                        poggermodeEnabled: C,
                        pendingScheduledMessage: N,
                        announcementComposerEnabled: y,
                    }),
                }),
            }),
            O = v ? M : D,
            P = (0, eH.m1)(n, eD.default, ej.A);
        if (null != l && (0, et.GP)(l, "ChannelChat")) {
            let e = l.officialMessageColor ?? e$.aj;
            t = (0, e$.L)(e);
        }
        return (0, i.jsx)(
            E.A,
            {
                page: (0, eL.DJ)(this.props.channel),
                children: (0, i.jsx)(Z.di, {
                    children: (0, i.jsx)($.Xq, {
                        children: (0, i.jsxs)(eP.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eP.EG, { event: eJ.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, i.jsx)(eP.EG, { event: eJ.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, i.jsx)(eP.EG, {
                                    event: eJ.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, i.jsx)(eP.EG, {
                                    event: eJ.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, i.jsxs)(e1, {
                                    isSidebar: R,
                                    className: eX.q2,
                                    "aria-label": eZ.intl.formatToPlainString(e, { channelName: P }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: t,
                                    children: [
                                        (0, i.jsx)(eW.A, { channel: n, guild: l, narrow: R }),
                                        (0, i.jsxs)(m.Fmo, {
                                            component: (0, i.jsx)(m.AC4, {
                                                children: (0, i.jsx)(m.H, {
                                                    children: eZ.intl.format(eZ.t.eTzKkx, { channelName: P }),
                                                }),
                                            }),
                                            children: [
                                                (0, i.jsx)(el.A, {
                                                    channel: n,
                                                    forceCozy: S,
                                                    filterAfterTimestamp: p,
                                                    showingQuarantineBanner: g,
                                                    typingGradient: I,
                                                    hideSummaries: u === L.oU.OVERLAY,
                                                }),
                                                S
                                                    ? null
                                                    : (this.renderMessageBanner({
                                                          channel: n,
                                                          showQuarantinedUserBanner: g,
                                                          guild: l,
                                                          communicationDisabledUntil: f,
                                                          showAutomodUserProfileChatBlocker: T,
                                                      }) ??
                                                      (0, i.jsxs)("form", {
                                                          ref: this.inputFormRef,
                                                          onSubmit: eQ,
                                                          className: a()(eX.Zd, { [eX.Mf]: !v }),
                                                          children: [
                                                              C && (0, i.jsx)(eo.A, { channelId: n.id }),
                                                              n.isPrivate()
                                                                  ? (0, i.jsx)(eq.A, { channel: n, children: O })
                                                                  : (0, i.jsx)(eY.A, { channel: n, children: O }),
                                                              (0, i.jsx)(_.Ay, { channel: n, isInTextChannel: !0 }),
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
            `messages-${n.id}`,
        );
    }
}
let e6 = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: s } = e,
        { placeholder: a, accessibilityLabel: r } = (0, eV.A)({ channel: t }),
        o = (0, ed.L)(eD.default.getCurrentUser(), t),
        [c] = (0, q.c)(n?.id),
        d = (0, V.uZ)(n?.id),
        u = (0, h.bG)([eD.default], () => eD.default.getCurrentUser()),
        A = (0, h.bG)([ev.Ay], () => null != u && (ev.Ay.getMember(n?.id ?? eJ.dJq, u?.id)?.isPending ?? !1)),
        g = (0, h.bG)([ea.A], () => ea.A.isEnabled()),
        p = (0, ec.A)(t.id),
        f = (0, J.A)(t.id),
        E = (0, eg.D)(t.id),
        x = (0, h.bG)([eE.A], () => eE.A.getAlsoSendToChannel(t.id)),
        S = (0, h.bG)([er.Ay, eS.default], () => er.Ay.getUserCombo(eS.default.getId(), t.id)),
        T = (0, _.rj)(t),
        N = (0, _.aW)(t),
        I = T.length > 0 || t.rateLimitPerUser > 0 || null != S || null != N,
        { showLinkedLobbyApplicationLoadingIndicator: v } = (0, eB.A)(t.linkedLobby),
        y = (0, B.A)("ChannelChat");
    return (
        (0, W.A)(t),
        (0, i.jsx)(e7, {
            channel: t,
            isEditing: null != (0, h.bG)([eI.A], () => eI.A.getEditingMessageId(t.id)),
            hasModalOpen: (0, m.red)(m.DXt),
            guild: n,
            keyboardModeEnabled: (0, h.bG)([C.A], () => C.A.keyboardModeEnabled),
            pendingReply: (0, h.bG)([eh.A], () => eh.A.getPendingReply(t.id)),
            threadsAlsoSendToChannel: x,
            chatInputType: l,
            placeholder: a,
            accessibilityLabel: r,
            filterAfterTimestamp: s,
            showQuarantinedUserBanner: o,
            communicationDisabledUntil: c,
            shakeIntensity: p,
            poggermodeEnabled: g,
            isSelectedResourceChannel: f,
            showAutomodUserProfileChatBlocker: d && !A,
            pendingScheduledMessage: E,
            messagesTypingGradient: I,
            showLinkedLobbyApplicationLoadingIndicator: v,
            announcementComposerEnabled: y,
        })
    );
});
