n.d(t, { A: () => e2 }), n(938796);
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
    I = n(211401),
    T = n(989837),
    N = n(500049),
    y = n(721768),
    b = n(258363),
    v = n(842209),
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
    H = n(595914),
    B = n(627235),
    V = n(151271),
    K = n(81400),
    W = n(870006),
    z = n(316031),
    Y = n(870136),
    q = n(834651),
    J = n(265869),
    $ = n(129185),
    Z = n(513609),
    X = n(301169),
    Q = n(751258),
    ee = n(451909),
    et = n(195880),
    en = n(926262),
    ei = n(371648),
    el = n(928830),
    es = n(3137),
    ea = n(559908),
    er = n(329449),
    eo = n(582223),
    ec = n(720480),
    ed = n(118517),
    eu = n(853145),
    eh = n(157432),
    em = n(151282),
    eA = n(654783),
    eg = n(970244),
    ep = n(631576),
    ef = n(252263),
    e_ = n(67259),
    eE = n(351488),
    ex = n(728321),
    eC = n(961350),
    eS = n(761640),
    eI = n(31717),
    eT = n(580745),
    eN = n(696451),
    ey = n(320501),
    eb = n(576705),
    ev = n(309010),
    ej = n(522602),
    eR = n(287809),
    eM = n(954571),
    eD = n(147036),
    eO = n(234320),
    eL = n(203982),
    eP = n(661191),
    ek = n(460350),
    ew = n(518960),
    eU = n(382287),
    eG = n(137577),
    eF = n(480870),
    eH = n(390756),
    eB = n(387462),
    eV = n(582968),
    eK = n(667285),
    eW = n(920437),
    ez = n(652215),
    eY = n(381941),
    eq = n(985018),
    eJ = n(638990);
function e$(e) {
    e.preventDefault();
}
let eZ = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eX(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, i.jsx)("section", { ...n, role: "complementary" }) : (0, i.jsx)("main", { ...n });
}
let eQ = l.forwardRef((e, t) => (0, i.jsx)(e0, { ...e, ref: t }));
eQ.displayName = "ChannelTextAreaForm";
class e0 extends l.PureComponent {
    focusEditor() {
        this.editorRef?.focus();
    }
    isFirstChange = !0;
    editorRef = null;
    state = { ...(0, P.ur)(eI.A.getDraft(this.props.channel.id, eI.C.ChannelMessage)), contentWarningProps: null };
    componentDidMount() {
        eI.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eI.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eI.A.getDraft(n.id, eI.C.ChannelMessage);
            e !== i && this.setState((0, P.ur)(e));
        }
        t.textValue.length < ez.uvi && i.length >= ez.uvi && eM.default.track(ez.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = eI.A.getDraft(t.channel.id, eI.C.ChannelMessage);
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
            case ez.Ks6.DELETE:
            case ez.Ks6.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case ez.Ks6.ARROW_UP:
                if (l || s) return;
                if ((e.preventDefault(), t))
                    ej.A.getUploadCount(i.id, eI.C.ChannelMessage) > 0
                        ? eL._.dispatchToLastSubscribed(ez.jej.FOCUS_ATTACHMENT_AREA)
                        : eL._.dispatchToLastSubscribed(ez.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = ey.A.getLastChatCommandMessage(e.id),
                        n = ey.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? eP.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case ez.Ks6.ESCAPE:
                if (l || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, x.Bm)();
                if (ej.A.getUploadCount(i.id, eI.C.ChannelMessage) > 0)
                    return void f.A.clearAll(i.id, eI.C.ChannelMessage);
        }
        n?.(e, s);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        g.A.startEditMessageRecord(t.id, e), S.Ay.trackWithMetadata(ez.HAw.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, M.Ez)(e.interactionData),
            { command: l, application: s } = v.EW({ channel: t, type: "channel" }, n);
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
            y.Gf({
                channelId: t.id,
                command: l,
                section: e,
                location: R.Oh.RECALL,
                initialValues: (0, b.getInitialValuesFromInteractionOptions)(l, i ?? []),
                commandOrigin: R.iw.CHAT,
            });
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            i = eC.default.getId(),
            l = ea.Ay.getUserCombo(i, n),
            s = (l?.value ?? 0) + 1;
        (0, el.oG)({ channelId: n, userId: i, value: null != e ? e.length : s, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: i,
            channel: { id: l },
        } = this.props;
        A.A.changeDraft(l, t, eI.C.ChannelMessage);
        let s = "" !== t && n !== this.state.richValue,
            a = s && !eZ.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
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
                    eL._.dispatch(ez.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
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
                let { location: t, sectionName: n } = (0, eH.bV)(l) ?? {},
                    i = e === R.iw.APPLICATION_LAUNCHER ? T.A.lastShownEntrypoint() : N.s4.TEXT,
                    { isAuthorized: s } = await (0, O.q)({
                        applicationId: l.applicationId,
                        channel: h,
                        commandIntegrationTypes: l.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: i },
                    });
                if (!s) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, eH.My)(l);
            }
            let n = await (0, D.A)({ command: l, optionValues: s ?? {}, context: { guild: d, channel: h } });
            if (l.inputType !== R.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (E = !0 === n.tts));
        }
        return (0, ek.i)({
            openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
            type: this.props.chatInputType,
            content: t,
            stickers: i,
            uploads: n,
            channel: h,
        }).then(async (e) => {
            let { valid: s, failureReason: x } = e;
            if (!s)
                if (x === ez.X8x.SLOWMODE_COOLDOWN)
                    return (
                        eL._.dispatch(ez.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        eL._.dispatch(ez.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let C = (0, Q.S)(t, { channel: h, isEdit: !1 });
            null != C && (null != C.content && (t = C.content), null != C.tts && (E = C.tts));
            let S = ee.Ay.parse(h, t);
            (S.tts = S.tts || E), null != o && ((S.content = ""), (S.components = o));
            let I = {
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
                location: eY.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (I.announcementSendOptions = c),
                null != r && (I.gifMetadata = r),
                null != o && (I.flags = (0, u.UI)(I.flags ?? 0, ez.pr7.IS_COMPONENTS_V2)),
                a)
            )
                return (
                    g.A.sendMessage(h.id, S, void 0, I).then(() => {
                        _ && eE._(h.parent_id ?? void 0);
                    }),
                    (0, ed.Jx)(h.id),
                    ef.B({ channelId: h.id, enabled: !1 }),
                    { shouldClear: !1, shouldRefocus: !0 }
                );
            if (null != n && n.length > 0) {
                let e = (0, eU.LJ)(n);
                if ((0, eU.fJ)(e, d?.id)) return (0, ew.V)(h, e), { shouldClear: !1, shouldRefocus: !1 };
                (I.eagerDispatch = !1),
                    (I.attachmentsToUpload = n),
                    (I.onAttachmentUploadError = (e, i, l) => {
                        (0, X.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: i, reason: l }) &&
                            ("" !== t &&
                                "" === eI.A.getDraft(h.id, eI.C.ChannelMessage) &&
                                A.A.saveDraft(h.id, t, eI.C.ChannelMessage),
                            0 === ej.A.getUploadCount(h.id, eI.C.ChannelMessage) &&
                                f.A.setUploads({ channelId: h.id, uploads: n, draftType: eI.C.ChannelMessage }));
                    }),
                    f.A.clearAll(h.id, eI.C.ChannelMessage);
            }
            if (null != I.scheduledTimestamp)
                try {
                    await (0, em.pr)({
                        channelId: h.id,
                        scheduledTimestamp: I.scheduledTimestamp,
                        messageSendData: {
                            channelId: h.id,
                            content: t,
                            nonce: (0, et.m)(),
                            tts: E,
                            message_reference: I.messageReference,
                            allowed_mentions: I.allowedMentions,
                            flags: I.flags,
                        },
                        attachmentsToUpload: n,
                    }),
                        (0, eg.c_)(I.scheduledTimestamp);
                } catch (e) {
                    return (0, eg.kM)(e.message), { shouldClear: !1, shouldRefocus: !1 };
                }
            else
                g.A.sendMessage(h.id, S, void 0, I).then(() => {
                    _ && eE._(h.parent_id ?? void 0);
                });
            return (
                this.setState((0, P.N3)()),
                (0, ed.Jx)(h.id),
                (0, ep.x5)(h.id, p.drafts.type),
                ef.B({ channelId: h.id, enabled: !1 }),
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
            draftType: eI.C.ChannelMessage,
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
                e.type === ez.rbe.GUILD_ANNOUNCEMENT && p
                    ? (0, i.jsx)(k.A, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eJ.gM,
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
                          promptToUpload: ew.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, i.jsx)(G.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eJ.gM,
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
                          promptToUpload: ew.R,
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
                    (0, i.jsx)(en.A, { onClose: t, ...f })
                );
            },
            children: () =>
                A ? (0, i.jsx)(m.bfh, { isShaking: h > 0, intensity: h, className: eJ.Xn, children: _ }) : _,
        });
    }
}
class e1 extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused:
                      null != n && n.type !== ez.rbe.GUILD_ANNOUNCEMENT && !c.Fr && eb.A.can(ez.xBc.SEND_MESSAGES, n),
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
        eL._.subscribe(ez.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eL._.unsubscribe(ez.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                case ez.Ks6.ARROW_LEFT:
                    n === L.oU.SIDEBAR &&
                        eL._.dispatch(ez.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: ev.A.getChannelId() });
                    return;
                case ez.Ks6.ARROW_RIGHT:
                    n === L.oU.NORMAL &&
                        eL._.dispatch(ez.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: eS.Ay.getCurrentSidebarChannelId(i.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, V.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    handleOpenAppLauncher = (e) => {
        let { applicationId: t } = e;
        return I.R(N.s4.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
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
        return t.type === ez.rbe.DM && n
            ? (0, i.jsx)(ec.A, {})
            : t.isModeratorReportChannel() && t.isArchivedThread()
              ? (0, i.jsx)(eh.A, { channelId: t.id })
              : null != s && (0, z.n)(s) && null != l && !eb.A.can(ez.xBc.ADMINISTRATOR, l)
                ? (0, i.jsx)(q.j, { guild: l, disabledUntil: s })
                : a
                  ? (0, i.jsx)(W.u, { guild: l })
                  : null;
    };
    render() {
        let e,
            {
                channel: t,
                guild: n,
                keyboardModeEnabled: l,
                hasModalOpen: s,
                pendingReply: r,
                threadsAlsoSendToChannel: o,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: h,
                showQuarantinedUserBanner: A,
                filterAfterTimestamp: g,
                communicationDisabledUntil: p,
                shakeIntensity: f,
                poggermodeEnabled: x,
                isSelectedResourceChannel: C,
                showAutomodUserProfileChatBlocker: S,
                pendingScheduledMessage: I,
                messagesTypingGradient: T,
                showLinkedLobbyApplicationLoadingIndicator: N,
                announcementComposerEnabled: y,
            } = this.props,
            { textAreaFocused: b, textAreaHighlighted: v } = this.state,
            j = c === L.oU.SIDEBAR;
        e =
            j && t.type === ez.rbe.GUILD_VOICE
                ? eq.t.pnnyFZ
                : j && t.type === ez.rbe.GUILD_STAGE_VOICE
                  ? eq.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eq.t["OkzL+Q"]
                    : eq.t.UbNmGc;
        let R = (0, i.jsx)("div", { className: eJ.li, children: (0, i.jsx)(eV.A, {}) }),
            M = (0, i.jsx)("div", {
                className: eJ.li,
                children: (0, i.jsx)(ex.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, i.jsx)(eQ, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: b,
                        highlighted: v,
                        channel: t,
                        guild: n,
                        keyboardModeEnabled: l,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: s,
                        pendingReply: r,
                        threadsAlsoSendToChannel: o,
                        chatInputType: c,
                        placeholder: u,
                        accessibilityLabel: h,
                        shakeIntensity: f,
                        poggermodeEnabled: x,
                        pendingScheduledMessage: I,
                        announcementComposerEnabled: y,
                    }),
                }),
            }),
            D = N ? R : M;
        return (0, i.jsx)(
            E.A,
            {
                page: (0, eD.DJ)(this.props.channel),
                children: (0, i.jsx)(Z.di, {
                    children: (0, i.jsx)($.Xq, {
                        children: (0, i.jsxs)(eO.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eO.EG, { event: ez.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, i.jsx)(eO.EG, { event: ez.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, i.jsx)(eO.EG, {
                                    event: ez.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, i.jsx)(eO.EG, {
                                    event: ez.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, i.jsxs)(eX, {
                                    isSidebar: j,
                                    className: eJ.q2,
                                    "aria-label": eq.intl.formatToPlainString(e, { channelName: t.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, i.jsx)(eB.A, { channel: t, guild: n, narrow: j }),
                                        (0, i.jsxs)(m.Fmo, {
                                            component: (0, i.jsx)(m.AC4, {
                                                children: (0, i.jsx)(m.H, {
                                                    children: eq.intl.format(eq.t.eTzKkx, { channelName: t.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, i.jsx)(ei.A, {
                                                    channel: t,
                                                    forceCozy: C,
                                                    filterAfterTimestamp: g,
                                                    showingQuarantineBanner: A,
                                                    typingGradient: T,
                                                    hideSummaries: c === L.oU.OVERLAY,
                                                }),
                                                C
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
                                                          onSubmit: e$,
                                                          className: a()(eJ.Zd, { [eJ.Mf]: !N }),
                                                          children: [
                                                              x && (0, i.jsx)(er.A, { channelId: t.id }),
                                                              t.isPrivate()
                                                                  ? (0, i.jsx)(eK.A, { channel: t, children: D })
                                                                  : (0, i.jsx)(eW.A, { channel: t, children: D }),
                                                              (0, i.jsx)(_.Ay, { channel: t, isInTextChannel: !0 }),
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
let e2 = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: s } = e,
        { placeholder: a, accessibilityLabel: r } = (0, eF.A)({ channel: t }),
        o = (0, ec.L)(eR.default.getCurrentUser(), t),
        [c] = (0, Y.c)(n?.id),
        d = (0, K.uZ)(n?.id),
        u = (0, h.bG)([eR.default], () => eR.default.getCurrentUser()),
        A = (0, h.bG)([eN.Ay], () => null != u && (eN.Ay.getMember(n?.id ?? ez.dJq, u?.id)?.isPending ?? !1)),
        g = (0, h.bG)([es.A], () => es.A.isEnabled()),
        p = (0, eo.A)(t.id),
        f = (0, J.A)(t.id),
        E = (0, eA.D)(t.id),
        x = (0, h.bG)([e_.A], () => e_.A.getAlsoSendToChannel(t.id)),
        S = (0, h.bG)([ea.Ay, eC.default], () => ea.Ay.getUserCombo(eC.default.getId(), t.id)),
        I = (0, _.rj)(t),
        T = (0, _.aW)(t),
        N = I.length > 0 || t.rateLimitPerUser > 0 || null != S || null != T,
        { showLinkedLobbyApplicationLoadingIndicator: y } = (0, eG.A)(t.linkedLobby),
        b = (0, H.A)("ChannelChat");
    return (
        (0, B.A)(t),
        (0, i.jsx)(e1, {
            channel: t,
            isEditing: null != (0, h.bG)([eT.A], () => eT.A.getEditingMessageId(t.id)),
            hasModalOpen: (0, m.red)(m.DXt),
            guild: n,
            keyboardModeEnabled: (0, h.bG)([C.A], () => C.A.keyboardModeEnabled),
            pendingReply: (0, h.bG)([eu.A], () => eu.A.getPendingReply(t.id)),
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
            messagesTypingGradient: N,
            showLinkedLobbyApplicationLoadingIndicator: y,
            announcementComposerEnabled: b,
        })
    );
});
