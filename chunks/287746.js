(n.d(t, { Z: () => td }), n(388685), n(35282), n(781311), n(997841));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(873546),
    u = n(106351),
    d = n(442837),
    f = n(481060),
    _ = n(430742),
    p = n(904245),
    h = n(144144),
    m = n(166459),
    g = n(738619),
    E = n(410575),
    b = n(744061),
    y = n(410030),
    O = n(857595),
    v = n(607070),
    I = n(367907),
    T = n(450936),
    S = n(993766),
    A = n(989573),
    N = n(499254),
    C = n(541099),
    w = n(827498),
    R = n(533379),
    P = n(555573),
    D = n(456007),
    L = n(10718),
    x = n(998698),
    k = n(895924),
    j = n(581364),
    M = n(667204),
    U = n(104919),
    G = n(541716),
    B = n(752305),
    Z = n(190210),
    F = n(516887),
    V = n(974251),
    H = n(893718),
    Y = n(436660),
    W = n(338390),
    K = n(680835),
    z = n(436952),
    q = n(131565),
    $ = n(355888),
    X = n(680783),
    Q = n(168551),
    J = n(28546),
    ee = n(295474),
    et = n(521476),
    en = n(69882),
    er = n(71619),
    ei = n(185145),
    ea = n(736052),
    eo = n(146128),
    es = n(549006),
    el = n(58873),
    ec = n(925975),
    eu = n(957730),
    ed = n(48854),
    ef = n(400023),
    e_ = n(64078),
    ep = n(351780),
    eh = n(843693),
    em = n(217871),
    eg = n(139577),
    eE = n(247944),
    eb = n(623292),
    ey = n(807092),
    eO = n(773359),
    ev = n(45251),
    eI = n(705533),
    eT = n(618857),
    eS = n(268350),
    eA = n(155409),
    eN = n(163612),
    eC = n(314897),
    ew = n(433355),
    eR = n(592125),
    eP = n(703558),
    eD = n(323873),
    eL = n(271383),
    ex = n(375954),
    ek = n(496675),
    ej = n(944486),
    eM = n(117530),
    eU = n(594174),
    eG = n(626135),
    eB = n(934415),
    eZ = n(459273),
    eF = n(585483),
    eV = n(630388),
    eH = n(709054),
    eY = n(838440),
    eW = n(127654),
    eK = n(979956),
    ez = n(413251),
    eq = n(655687),
    e$ = n(165540),
    eX = n(583027),
    eQ = n(25007),
    eJ = n(685006),
    e0 = n(685722),
    e1 = n(199649),
    e2 = n(1397),
    e3 = n(641861),
    e5 = n(981631),
    e4 = n(959517),
    e6 = n(388032),
    e8 = n(100658),
    e7 = n(672);
function e9(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function te(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                e9(e, t, n[t]);
            }));
    }
    return e;
}
function tt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function tn(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : tt(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function tr(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ti(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function ti(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function ta(e) {
    e.preventDefault();
}
let to = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function ts(e) {
    var { isSidebar: t } = e,
        n = tr(e, ['isSidebar']);
    return t ? (0, r.jsx)('section', tn(te({}, n), { role: 'complementary' })) : (0, r.jsx)('main', te({}, n));
}
let tl = i.forwardRef((e, t) => (0, r.jsx)(tc, tn(te({}, e), { ref: t })));
tl.displayName = 'ChannelTextAreaForm';
class tc extends i.PureComponent {
    focusEditor() {
        var e;
        null == (e = this.editorRef) || e.focus();
    }
    componentDidMount() {
        eP.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eP.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eP.Z.getDraft(n.id, eP.d.ChannelMessage);
            e !== r && this.setState((0, B.eK)(e));
        }
        t.textValue.length < e5.J6R && r.length >= e5.J6R && eG.default.track(e5.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        (p.Z.startEditMessageRecord(t.id, e), I.ZP.trackWithMetadata(e5.rMx.MESSAGE_EDIT_UP_ARROW));
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: r } = (0, j.XA)(e.interactionData),
            { command: i, application: a } = L.Xq(
                {
                    channel: t,
                    type: 'channel'
                },
                n
            );
        if (null != i) {
            var o, s;
            let e =
                null != a
                    ? {
                          type: k.Qi.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: null != (s = null == a || null == (o = a.bot) ? void 0 : o.username) ? s : a.name,
                          application: a
                      }
                    : null;
            P.Po({
                channelId: t.id,
                command: i,
                section: e,
                location: k.Vh.RECALL,
                initialValues: (0, D.Dw)(i, null != r ? r : []),
                commandOrigin: k.bB.CHAT
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: i, onResize: a, highlighted: o, pendingReply: s, chatInputType: c, placeholder: u, accessibilityLabel: d, shakeIntensity: _, poggermodeEnabled: p, onCommandSentinelTyped: h, renderAppLauncherButton: m, renderAppCommandButton: g, pendingScheduledMessage: E, announcementComposerEnabled: y } = this.props,
            { contentWarningProps: O } = this.state,
            v =
                e.type === e5.d4z.GUILD_ANNOUNCEMENT && y
                    ? (0, r.jsx)(Z.Z, {
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e8.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: s,
                          type: G.Ie.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: a,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderAppLauncherButton: m,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eW.d,
                          highlighted: o,
                          setEditorRef: (e) => (this.editorRef = e)
                      })
                    : (0, r.jsx)(H.ZP, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e8.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: s,
                          type: c,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: a,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          renderAppLauncherButton: m,
                          renderAppCommandButton: g,
                          promptToUpload: eW.d,
                          highlighted: o,
                          setEditorRef: (e) => (this.editorRef = e),
                          onCommandSentinelTyped: h,
                          pendingScheduledMessage: E
                      });
        return (0, r.jsx)(f.yRy, {
            targetElementRef: this.props.refInstance,
            position: 'top',
            onRequestClose: () => {
                var e;
                (null == O || null == (e = O.onCancel) || e.call(O), this.setState({ contentWarningProps: null }));
            },
            shouldShow: null != O,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (l()(null != O, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, r.jsx)(b.Z, te({ onClose: t }, O)));
            },
            children: () =>
                p
                    ? (0, r.jsx)(f.UkV, {
                          isShaking: _ > 0,
                          intensity: _,
                          className: e8.shaker,
                          children: v
                      })
                    : v
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            e9(this, 'isFirstChange', !0),
            e9(this, 'editorRef', null),
            e9(this, 'state', tn(te({}, (0, B.eK)(eP.Z.getDraft(this.props.channel.id, eP.d.ChannelMessage))), { contentWarningProps: null })),
            e9(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eP.Z.getDraft(e.channel.id, eP.d.ChannelMessage);
                n !== r &&
                    ('' === r || '' === n) &&
                    t.setState((0, B.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            e9(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    a = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case e5.yXg.DELETE:
                    case e5.yXg.BACKSPACE:
                        return void this.handleIncrementCombo('', 1);
                    case e5.yXg.ARROW_UP:
                        if (i || a) return;
                        if ((e.preventDefault(), t)) eM.Z.getUploadCount(r.id, eP.d.ChannelMessage) > 0 ? eF.S.dispatchToLastSubscribed(e5.CkL.FOCUS_ATTACHMENT_AREA) : eF.S.dispatchToLastSubscribed(e5.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = ex.Z.getLastChatCommandMessage(e.id),
                                n = ex.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eH.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case e5.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, O.rf)();
                        if (eM.Z.getUploadCount(r.id, eP.d.ChannelMessage) > 0) return void m.Z.clearAll(r.id, eP.d.ChannelMessage);
                }
                null == n || n(e, a);
            }),
            e9(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = eC.default.getId(),
                    a = eh.ZP.getUserCombo(i, r),
                    o = (null != (n = null == a ? void 0 : a.value) ? n : 0) + 1;
                (0, e_.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : o,
                    multiplier: t
                });
            }),
            e9(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i }
                } = this.props;
                _.Z.changeDraft(i, t, eP.d.ChannelMessage);
                let a = '' !== t && n !== this.state.richValue,
                    o = a && !to.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                ((this.isFirstChange = !1),
                    o && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    o ? h.Z.startTyping(i) : '' === t && h.Z.stopTyping(i),
                    a && r && (0, O.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    }));
            }),
            e9(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: r, confettiPotionEmoji: i, command: a, commandOptionValues: o, isGif: s, components: l, announcementSendOptions: c } = e;
                if (0 === (t = t.trim()).length && (null == r || 0 === r.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: u, channel: d, pendingReply: f, chatInputType: h } = this.props,
                    g = !1;
                if (null != a) {
                    if (a.inputType === k.iw.BUILT_IN_INTEGRATION)
                        return (
                            eF.S.dispatch(e5.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = x.Z.getCommandOrigin(d.id);
                    if (null == e || e === k.bB.CHAT) {
                        let { isAuthorized: e } = await (0, U.L)({
                            applicationId: a.applicationId,
                            channel: d,
                            commandIntegrationTypes: a.integration_types
                        });
                        if (!e)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                    } else if (e === k.bB.APPLICATION_LAUNCHER || e === k.bB.IMAGE_RECS_MENU || e === k.bB.IMAGE_RECS_SUBMENU) {
                        var E;
                        let { location: t, sectionName: n } = null != (E = (0, eX._U)(a)) ? E : {},
                            r = e === k.bB.APPLICATION_LAUNCHER ? C.Z.lastShownEntrypoint() : w._b.TEXT,
                            { isAuthorized: i } = await (0, U.L)({
                                applicationId: a.applicationId,
                                channel: d,
                                commandIntegrationTypes: a.integration_types,
                                appLauncherContext: {
                                    location: t,
                                    sectionName: n,
                                    entrypoint: r
                                }
                            });
                        if (!i)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, eX.SC)(a);
                    }
                    let n = await (0, M.Z)({
                        command: a,
                        optionValues: null != o ? o : {},
                        context: {
                            guild: u,
                            channel: d
                        }
                    });
                    if (a.inputType !== k.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (g = !0 === n.tts));
                }
                return (0, eY.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: r,
                    uploads: n,
                    channel: d
                }).then(async (e) => {
                    var o, E;
                    let { valid: b, failureReason: y } = e;
                    if (!b)
                        if (y === e5.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eF.S.dispatch(e5.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2
                                }),
                                eF.S.dispatch(e5.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        else
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                    let O = (0, ec.g)(t, {
                        channel: d,
                        isEdit: !1
                    });
                    null != O && (null != O.content && (t = O.content), null != O.tts && (g = O.tts));
                    let v = eu.ZP.parse(d, t);
                    ((v.tts = v.tts || g), null != l && ((v.content = ''), (v.components = l)));
                    let I = p.Z.getSendMessageOptions({
                        content: t,
                        channelId: d.id,
                        uploads: n,
                        stickers: r,
                        command: a,
                        isGif: s,
                        pendingReply: f,
                        confettiPotionEmoji: i,
                        scheduledTimestamp: null == (o = this.props.pendingScheduledMessage) ? void 0 : o.scheduledTimestamp
                    });
                    if (((I.location = e4.dy.CHAT_INPUT), null != c && (I.announcementSendOptions = c), null != l && (I.flags = (0, eV.pj)(null != (E = I.flags) ? E : 0, e5.iLy.IS_COMPONENTS_V2)), s))
                        return (
                            p.Z.sendMessage(d.id, v, void 0, I),
                            (0, eb.A6)(d.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eK.KZ)(n);
                        if ((0, eK.Bf)(e, null == u ? void 0 : u.id))
                            return (
                                (0, eW.G)(d, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        ((I.eagerDispatch = !1),
                            (I.attachmentsToUpload = n),
                            (I.onAttachmentUploadError = (e, r, i) => {
                                (0, el.A)({
                                    file: e,
                                    guildId: d.getGuildId(),
                                    analyticsLocations: [],
                                    code: r,
                                    reason: i
                                }) &&
                                    ('' !== t && '' === eP.Z.getDraft(d.id, eP.d.ChannelMessage) && _.Z.saveDraft(d.id, t, eP.d.ChannelMessage),
                                    0 === eM.Z.getUploadCount(d.id, eP.d.ChannelMessage) &&
                                        m.Z.setUploads({
                                            channelId: d.id,
                                            uploads: n,
                                            draftType: eP.d.ChannelMessage
                                        }));
                            }),
                            m.Z.clearAll(d.id, eP.d.ChannelMessage));
                    }
                    if (null != I.scheduledTimestamp)
                        try {
                            (await (0, ev.PV)({
                                channelId: d.id,
                                scheduledTimestamp: I.scheduledTimestamp,
                                messageSendData: {
                                    channelId: d.id,
                                    content: t,
                                    nonce: (0, ed.r)(),
                                    tts: g,
                                    message_reference: I.messageReference,
                                    allowed_mentions: I.allowedMentions,
                                    flags: I.flags
                                },
                                attachmentsToUpload: n
                            }),
                                (0, eT.Hw)(I.scheduledTimestamp));
                        } catch (e) {
                            return (
                                (0, eT.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        }
                    else p.Z.sendMessage(d.id, v, void 0, I);
                    return (
                        this.setState((0, B.H2)()),
                        (0, eb.A6)(d.id),
                        (0, eS.qB)(d.id, h.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            e9(this, 'handleSetValue', (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (Y.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            e9(this, 'renderAttachButton', (e, t) =>
                (0, r.jsx)(V.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eP.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            e9(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, r.jsx)(F.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            ));
    }
}
class tu extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused: null != n && n.type !== e5.d4z.GUILD_ANNOUNCEMENT && !c.tq && ek.Z.can(e5.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eF.S.subscribe(e5.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eF.S.unsubscribe(e5.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e, t;
        let n,
            { channel: i, guild: a, keyboardModeEnabled: s, hasModalOpen: l, pendingReply: c, chatInputType: d, placeholder: _, accessibilityLabel: p, showQuarantinedUserBanner: h, filterAfterTimestamp: m, communicationDisabledUntil: b, shakeIntensity: y, poggermodeEnabled: O, isSelectedResourceChannel: v, showAutomodUserProfileChatBlocker: I, showAppLauncherButton: T, showAppDMsUI: S, isInitialLoading: A, pendingScheduledMessage: N, recipientUser: C, voiceChannel: w, theme: R, chatWallpaperState: P, wallpaperColorMix: D, messagesTypingGradient: L, isChatInputBottomAligned: x, showLinkedLobbyApplicationLoadingIndicator: k, announcementComposerEnabled: j } = this.props,
            { textAreaFocused: M, textAreaHighlighted: U } = this.state,
            B = d === G.Ie.SIDEBAR;
        n = B && i.type === e5.d4z.GUILD_VOICE ? e6.t.pnnyFR : B && i.type === e5.d4z.GUILD_STAGE_VOICE ? e6.t.YInSkp : u.T.THREADS.has(i.type) ? e6.t['OkzL+f'] : e6.t.UbNmGR;
        let Z = (0, r.jsx)('div', {
                className: e8.channelBottomBarArea,
                children: (0, r.jsx)(e0.Z, {})
            }),
            F = (0, r.jsxs)('div', {
                className: e8.channelBottomBarArea,
                children: [
                    (0, r.jsx)(eA.Z, {
                        childRef: this.containerDomRef,
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, r.jsx)(tl, {
                            ref: this.refToChannelTextAreaFormComponent,
                            refInstance: this.containerDomRef,
                            focused: M,
                            highlighted: U,
                            channel: i,
                            guild: a,
                            keyboardModeEnabled: s,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: l,
                            pendingReply: c,
                            chatInputType: d,
                            placeholder: _,
                            accessibilityLabel: p,
                            shakeIntensity: y,
                            poggermodeEnabled: O,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped,
                            renderAppLauncherButton: this.renderAppLauncherButton,
                            renderAppCommandButton: this.renderAppCommandButton,
                            pendingScheduledMessage: N,
                            announcementComposerEnabled: j
                        })
                    }),
                    this.renderAppCommandButton()
                ]
            }),
            V = (S && A) || k,
            H = V ? Z : F,
            Y = o()({
                [e7.barWithAppLauncherButton]: T,
                [e7.barWithAppsDMsUI]: S
            }),
            { enabled: W } = eN.Z.getCurrentConfig({
                guildId: null == w ? void 0 : w.guild_id,
                location: 'ChannelChat'
            }),
            K = z.qM.getCurrentConfig({ location: 'ChannelChat' }).enabled,
            $ = W && null != C && null != w && null != w.guild_id;
        return (0, r.jsx)(
            E.Z,
            {
                page: (0, eB.mE)(this.props.channel),
                children: (0, r.jsx)(es.sW, {
                    children: (0, r.jsx)(eo.BV, {
                        children: (0, r.jsxs)(eZ.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eZ.d9, {
                                    event: e5.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, r.jsx)(eZ.d9, {
                                    event: e5.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, r.jsx)(eZ.d9, {
                                    event: e5.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, r.jsx)(eZ.d9, {
                                    event: e5.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, r.jsxs)(ts, {
                                    isSidebar: B,
                                    className: o()(e8.chatContent, {
                                        [e8.hasWallpaper]: null == P ? void 0 : P.isViewable,
                                        [Q.e3]: K ? (null == P ? void 0 : P.isViewable) : void 0,
                                        [null != (e = (0, f.QeD)(R)) ? e : '']: K ? (null == P ? void 0 : P.isViewable) : void 0
                                    }),
                                    'aria-label': e6.intl.formatToPlainString(n, { channelName: i.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: null != D ? D : {},
                                    children: [
                                        (0, r.jsx)(q.Z, { channel: i }),
                                        $ &&
                                            (0, r.jsx)(e3.Z, {
                                                recipientUser: C,
                                                voiceChannel: w
                                            }),
                                        (0, r.jsx)(eQ.Z, {
                                            channel: i,
                                            guild: a,
                                            narrow: B
                                        }),
                                        (0, r.jsxs)(f.y5t, {
                                            component: (0, r.jsx)(f.nn4, { children: (0, r.jsx)(f.H, { children: e6.intl.format(e6.t.eTzKk5, { channelName: i.name }) }) }),
                                            children: [
                                                (0, r.jsx)(ef.Z, {
                                                    channel: i,
                                                    forceCozy: v,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: h,
                                                    jumpBarClassName: Y,
                                                    typingGradient: L,
                                                    isChatInputBottomAligned: x
                                                }),
                                                v
                                                    ? null
                                                    : null !=
                                                        (t = this.renderMessageBanner({
                                                            channel: i,
                                                            showQuarantinedUserBanner: h,
                                                            guild: a,
                                                            communicationDisabledUntil: b,
                                                            showAutomodUserProfileChatBlocker: I
                                                        }))
                                                      ? t
                                                      : (0, r.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: ta,
                                                            className: o()(e8.form, { [e8.formWithLoadedChatInput]: !V }),
                                                            children: [
                                                                O && (0, r.jsx)(em.Z, { channelId: i.id }),
                                                                i.isPrivate()
                                                                    ? (0, r.jsx)(e1.Z, {
                                                                          channel: i,
                                                                          children: H
                                                                      })
                                                                    : (0, r.jsx)(e2.Z, {
                                                                          channel: i,
                                                                          children: H
                                                                      }),
                                                                (0, r.jsx)(g.ZP, {
                                                                    channel: i,
                                                                    poggermodeEnabled: O,
                                                                    isInTextChannel: !0
                                                                })
                                                            ]
                                                        }),
                                                (0, r.jsx)(es.kw, {})
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            },
            'messages-'.concat(i.id)
        );
    }
    constructor(...e) {
        (super(...e),
            e9(this, 'containerDomRef', i.createRef()),
            e9(this, 'refToChannelTextAreaFormComponent', i.createRef()),
            e9(this, 'inputFormRef', i.createRef()),
            e9(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            e9(this, 'dispatchGroupRef', i.createRef()),
            e9(this, 'appIconAnimateRef', i.createRef()),
            e9(this, 'handleRequestFocus', (e) => {
                if (e.channelId === this.props.channel.id)
                    if (this.state.textAreaFocused) {
                        var t;
                        null == (t = this.refToChannelTextAreaFormComponent.current) || t.focusEditor();
                    } else this.setState({ textAreaFocused: !0 });
            }),
            e9(this, 'handleInputFocus', (e) => {
                var t;
                (null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 }));
            }),
            e9(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            e9(this, 'handleInputKeyDown', (e, t) => {
                (this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e));
            }),
            e9(this, 'handleKeyDown', (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            e9(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case e5.yXg.ARROW_LEFT:
                            n === G.Ie.SIDEBAR && eF.S.dispatch(e5.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ej.Z.getChannelId() });
                            return;
                        case e5.yXg.ARROW_RIGHT:
                            n === G.Ie.NORMAL && eF.S.dispatch(e5.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ew.ZP.getCurrentSidebarChannelId(r.id) });
                    }
            }),
            e9(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, J.PG)(t, this.props.chatInputType);
            }),
            e9(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return N.__(w._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            e9(this, 'handleChatInteract', () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            e9(this, 'handleCommandSentinelTyped', () => {
                var e;
                null == (e = this.appIconAnimateRef.current) || e.animate();
            }),
            e9(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: i, communicationDisabledUntil: a, showAutomodUserProfileChatBlocker: o } = e;
                return t.type === e5.d4z.DM && n
                    ? (0, r.jsx)(eE.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, r.jsx)(eO.Z, { channelId: t.id })
                      : null != a && (0, en.J)(a) && null != i && !ek.Z.can(e5.Plq.ADMINISTRATOR, i)
                        ? (0, r.jsx)(ei.T, {
                              guild: i,
                              disabledUntil: a
                          })
                        : o
                          ? (0, r.jsx)(et.h, { guild: i })
                          : null;
            }),
            e9(this, 'renderAppLauncherButton', () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(e$.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t
                });
            }),
            e9(this, 'renderAppCommandButton', () => {
                let { showAppDMsUI: e, isFailedAppDMLoad: t, channel: n, entryPointCommandButtonRef: i, chatInputType: a } = this.props,
                    o = {
                        channel: n,
                        type: 'channel'
                    };
                return e && !t
                    ? (0, r.jsx)('div', {
                          className: e8.entryPointButtonContainer,
                          children: (0, r.jsx)(eJ.ZP, {
                              context: o,
                              entryPointCommandButtonRef: i,
                              type: a
                          })
                      })
                    : null;
            }));
    }
}
let td = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: a, filterAfterTimestamp: o } = e,
        { placeholder: s, accessibilityLabel: l } = (0, eq.Z)({ channel: t }),
        c = (0, eE.S)(eU.default.getCurrentUser(), t),
        [u] = (0, er.AB)(null == n ? void 0 : n.id),
        _ = (0, ee.Ux)(null == n ? void 0 : n.id),
        p = (0, d.e7)([eU.default], () => eU.default.getCurrentUser()),
        h = (0, d.e7)([eL.ZP], () => {
            var e, t, r;
            return null != p && null != (r = null == (e = eL.ZP.getMember(null != (t = null == n ? void 0 : n.id) ? t : e5.lds, null == p ? void 0 : p.id)) ? void 0 : e.isPending) && r;
        }),
        m = _ && !h,
        E = (0, d.e7)([ep.Z], () => ep.Z.isEnabled()),
        b = (0, eg.Z)(t.id),
        O = (0, ea.Z)(t.id),
        I = (0, R.R)({
            channel: t,
            chatInputType: a
        }),
        N = (0, A.Z)(t),
        w = (0, eI.k)(t.id),
        P = (0, y.ZP)(),
        D = (0, X.Z)(t.id),
        L = (0, $.Z)(null == D ? void 0 : D.wallpaperId),
        {
            isInitialLoading: x,
            primaryEntryPointCommand: k,
            isProfileFetching: j,
            wasProfileFetching: M,
            applicationId: U,
            channelId: G,
            commands: B
        } = (0, T.Z)({
            context: {
                channel: t,
                type: 'channel'
            }
        });
    (0, S.Z)({
        isProfileFetching: j,
        wasProfileFetching: M,
        applicationId: U,
        channelId: G,
        commands: B
    });
    let Z = i.useRef(null),
        F = (0, d.e7)([C.Z], () => C.Z.appDMChannelsWithFailedLoads().has(t.id)),
        V = (0, d.e7)([ej.Z], () => ej.Z.getVoiceChannelId()),
        H = (0, d.e7)([eR.Z], () => eR.Z.getChannel(V)),
        Y = (0, d.e7)([eU.default], () => (t.type !== e5.d4z.DM ? null : eU.default.getUser(t.getRecipientId()))),
        z = (0, d.e7)([eh.ZP, eC.default], () => eh.ZP.getUserCombo(eC.default.getId(), t.id)),
        q = (0, g.iD)(t),
        Q = (0, g.d7)(t),
        J = q.length > 0 || t.rateLimitPerUser > 0 || null != z || null != Q,
        et = (0, W.Z)('ChannelChat'),
        { showLinkedLobbyApplicationLoadingIndicator: en } = (0, ez.Z)(t.linkedLobby),
        ei = (0, K.Z)('ChannelChat');
    return (0, r.jsx)(tu, {
        channel: t,
        isEditing: null != (0, d.e7)([eD.Z], () => eD.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, f.s9z)(f.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([ey.Z], () => ey.Z.getPendingReply(t.id)),
        chatInputType: a,
        placeholder: s,
        accessibilityLabel: l,
        filterAfterTimestamp: o,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: u,
        shakeIntensity: b,
        poggermodeEnabled: E,
        isSelectedResourceChannel: O,
        showAutomodUserProfileChatBlocker: m,
        showAppLauncherButton: I,
        showAppDMsUI: N,
        isInitialLoading: x,
        showEntryPointAppCommandButton: null != k,
        entryPointCommandButtonRef: Z,
        isFailedAppDMLoad: F,
        pendingScheduledMessage: w,
        recipientUser: Y,
        voiceChannel: H,
        theme: P,
        chatWallpaperState: D,
        wallpaperColorMix: L,
        messagesTypingGradient: et && J,
        isChatInputBottomAligned: et,
        showLinkedLobbyApplicationLoadingIndicator: en,
        announcementComposerEnabled: ei
    });
});
