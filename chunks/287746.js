(n.d(t, { Z: () => ti }), n(388685), n(35282), n(781311), n(997841));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(873546),
    u = n(106351),
    d = n(442837),
    p = n(481060),
    h = n(430742),
    f = n(904245),
    m = n(144144),
    g = n(166459),
    b = n(738619),
    _ = n(410575),
    y = n(744061),
    C = n(410030),
    x = n(857595),
    v = n(607070),
    j = n(367907),
    O = n(450936),
    E = n(993766),
    S = n(499254),
    I = n(541099),
    P = n(827498),
    Z = n(533379),
    N = n(555573),
    T = n(456007),
    A = n(10718),
    w = n(998698),
    R = n(895924),
    M = n(581364),
    D = n(667204),
    k = n(104919),
    L = n(307508),
    U = n(541716),
    B = n(752305),
    F = n(516887),
    H = n(974251),
    G = n(893718),
    V = n(436660),
    z = n(338390),
    W = n(436952),
    Y = n(131565),
    q = n(355888),
    K = n(680783),
    X = n(168551),
    Q = n(28546),
    J = n(295474),
    $ = n(521476),
    ee = n(69882),
    et = n(71619),
    en = n(185145),
    er = n(736052),
    ei = n(146128),
    el = n(549006),
    ea = n(58873),
    eo = n(925975),
    es = n(957730),
    ec = n(48854),
    eu = n(400023),
    ed = n(64078),
    ep = n(351780),
    eh = n(843693),
    ef = n(217871),
    em = n(139577),
    eg = n(247944),
    eb = n(623292),
    e_ = n(807092),
    ey = n(773359),
    eC = n(45251),
    ex = n(705533),
    ev = n(618857),
    ej = n(268350),
    eO = n(155409),
    eE = n(163612),
    eS = n(314897),
    eI = n(433355),
    eP = n(592125),
    eZ = n(703558),
    eN = n(323873),
    eT = n(271383),
    eA = n(375954),
    ew = n(496675),
    eR = n(944486),
    eM = n(117530),
    eD = n(594174),
    ek = n(626135),
    eL = n(934415),
    eU = n(459273),
    eB = n(585483),
    eF = n(709054),
    eH = n(838440),
    eG = n(127654),
    eV = n(979956),
    ez = n(655687),
    eW = n(165540),
    eY = n(583027),
    eq = n(25007),
    eK = n(685006),
    eX = n(685722),
    eQ = n(199649),
    eJ = n(1397),
    e$ = n(641861),
    e0 = n(981631),
    e1 = n(959517),
    e2 = n(388032),
    e3 = n(100658),
    e7 = n(672);
function e8(e, t, n) {
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
function e5(e) {
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
                e8(e, t, n[t]);
            }));
    }
    return e;
}
function e6(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e4(e) {
    e.preventDefault();
}
let e9 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function te(e) {
    var { isSidebar: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['isSidebar']);
    return t ? (0, r.jsx)('section', e6(e5({}, n), { role: 'complementary' })) : (0, r.jsx)('main', e5({}, n));
}
let tt = i.forwardRef((e, t) => (0, r.jsx)(tn, e6(e5({}, e), { ref: t })));
tt.displayName = 'ChannelTextAreaForm';
class tn extends i.PureComponent {
    focusEditor() {
        var e;
        null == (e = this.editorRef) || e.focus();
    }
    componentDidMount() {
        eZ.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eZ.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eZ.Z.getDraft(n.id, eZ.d.ChannelMessage);
            e !== r && this.setState((0, B.eK)(e));
        }
        t.textValue.length < e0.J6R && r.length >= e0.J6R && ek.default.track(e0.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        (f.Z.startEditMessage(t.id, e.id, e.content), j.ZP.trackWithMetadata(e0.rMx.MESSAGE_EDIT_UP_ARROW));
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: r } = (0, M.XA)(e.interactionData),
            { command: i, application: l } = A.Xq(
                {
                    channel: t,
                    type: 'channel'
                },
                n
            );
        if (null != i) {
            var a, o;
            let e =
                null != l
                    ? {
                          type: R.Qi.APPLICATION,
                          id: l.id,
                          icon: l.icon,
                          name: null != (o = null == l || null == (a = l.bot) ? void 0 : a.username) ? o : l.name,
                          application: l
                      }
                    : null;
            N.Po({
                channelId: t.id,
                command: i,
                section: e,
                location: R.Vh.RECALL,
                initialValues: (0, T.Dw)(i, null != r ? r : []),
                commandOrigin: R.bB.CHAT
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: i, onResize: l, highlighted: a, pendingReply: o, chatInputType: c, placeholder: u, accessibilityLabel: d, shakeIntensity: h, poggermodeEnabled: f, onCommandSentinelTyped: m, renderAppLauncherButton: g, renderAppCommandButton: b, pendingScheduledMessage: _ } = this.props,
            { contentWarningProps: C } = this.state,
            x = (0, r.jsx)(G.Z, {
                ref: this.props.refInstance,
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: e3.channelTextArea,
                channel: e,
                placeholder: u,
                accessibilityLabel: d,
                pendingReply: o,
                type: c,
                onChange: this.handleTextareaChange,
                onSubmit: this.handleSendMessage,
                onResize: l,
                onFocus: i,
                onBlur: n,
                onKeyDown: this.handleKeyDown,
                renderAttachButton: this.renderAttachButton,
                renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                renderAppLauncherButton: g,
                renderAppCommandButton: b,
                promptToUpload: eG.d,
                highlighted: a,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: m,
                pendingScheduledMessage: _
            });
        return (0, r.jsx)(p.yRy, {
            targetElementRef: this.props.refInstance,
            position: 'top',
            onRequestClose: () => {
                var e;
                (null == C || null == (e = C.onCancel) || e.call(C), this.setState({ contentWarningProps: null }));
            },
            shouldShow: null != C,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (s()(null != C, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, r.jsx)(y.Z, e5({ onClose: t }, C)));
            },
            children: () =>
                f
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
                          className: e3.shaker,
                          children: x
                      })
                    : x
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            e8(this, 'isFirstChange', !0),
            e8(this, 'editorRef', null),
            e8(this, 'state', e6(e5({}, (0, B.eK)(eZ.Z.getDraft(this.props.channel.id, eZ.d.ChannelMessage))), { contentWarningProps: null })),
            e8(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eZ.Z.getDraft(e.channel.id, eZ.d.ChannelMessage);
                n !== r &&
                    ('' === r || '' === n) &&
                    t.setState((0, B.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            e8(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case e0.yXg.DELETE:
                    case e0.yXg.BACKSPACE:
                        return void this.handleIncrementCombo('', 1);
                    case e0.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t)) eM.Z.getUploadCount(r.id, eZ.d.ChannelMessage) > 0 ? eB.S.dispatchToLastSubscribed(e0.CkL.FOCUS_ATTACHMENT_AREA) : eB.S.dispatchToLastSubscribed(e0.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eA.Z.getLastChatCommandMessage(e.id),
                                n = eA.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eF.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case e0.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, x.rf)();
                        if (eM.Z.getUploadCount(r.id, eZ.d.ChannelMessage) > 0) return void g.Z.clearAll(r.id, eZ.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            e8(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = eS.default.getId(),
                    l = eh.ZP.getUserCombo(i, r),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, ed.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : a,
                    multiplier: t
                });
            }),
            e8(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i }
                } = this.props;
                h.Z.changeDraft(i, t, eZ.d.ChannelMessage);
                let l = '' !== t && n !== this.state.richValue,
                    a = l && !e9.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                ((this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? m.Z.startTyping(i) : '' === t && m.Z.stopTyping(i),
                    l && r && (0, x.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    }));
            }),
            e8(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: r, confettiPotionEmoji: i, command: l, commandOptionValues: a, isGif: o } = e;
                if (0 === (t = t.trim()).length && (null == r || 0 === r.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: s, channel: c, pendingReply: u, chatInputType: d } = this.props,
                    p = !1;
                if (null != l) {
                    if (l.inputType === R.iw.BUILT_IN_INTEGRATION)
                        return (
                            eB.S.dispatch(e0.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = w.Z.getCommandOrigin(c.id);
                    if (null == e || e === R.bB.CHAT) {
                        let { isAuthorized: e } = await (0, k.L)({
                            applicationId: l.applicationId,
                            channel: c,
                            commandIntegrationTypes: l.integration_types
                        });
                        if (!e)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                    } else if (e === R.bB.APPLICATION_LAUNCHER || e === R.bB.IMAGE_RECS_MENU || e === R.bB.IMAGE_RECS_SUBMENU) {
                        var m;
                        let { location: t, sectionName: n } = null != (m = (0, eY._U)(l)) ? m : {},
                            r = e === R.bB.APPLICATION_LAUNCHER ? I.Z.lastShownEntrypoint() : P._b.TEXT,
                            { isAuthorized: i } = await (0, k.L)({
                                applicationId: l.applicationId,
                                channel: c,
                                commandIntegrationTypes: l.integration_types,
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
                        (0, eY.SC)(l);
                    }
                    let n = await (0, D.Z)({
                        command: l,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: s,
                            channel: c
                        }
                    });
                    if (l.inputType !== R.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (p = !0 === n.tts));
                }
                return (0, eH.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: r,
                    uploads: n,
                    channel: c
                }).then(async (e) => {
                    var a;
                    let { valid: m, failureReason: b } = e;
                    if (!m)
                        if (b === e0.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eB.S.dispatch(e0.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2
                                }),
                                eB.S.dispatch(e0.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let _ = (0, eo.g)(t, {
                        channel: c,
                        isEdit: !1
                    });
                    null != _ && (null != _.content && (t = _.content), null != _.tts && (p = _.tts));
                    let y = es.ZP.parse(c, t);
                    y.tts = y.tts || p;
                    let C = f.Z.getSendMessageOptions({
                        content: t,
                        channelId: c.id,
                        uploads: n,
                        stickers: r,
                        command: l,
                        isGif: o,
                        pendingReply: u,
                        confettiPotionEmoji: i,
                        scheduledTimestamp: null == (a = this.props.pendingScheduledMessage) ? void 0 : a.scheduledTimestamp
                    });
                    if (((C.location = e1.dy.CHAT_INPUT), o))
                        return (
                            f.Z.sendMessage(c.id, y, void 0, C),
                            (0, eb.A6)(c.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eV.KZ)(n);
                        if ((0, eV.Bf)(e, null == s ? void 0 : s.id))
                            return (
                                (0, eG.G)(c, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        ((C.eagerDispatch = !1),
                            (C.attachmentsToUpload = n),
                            (C.onAttachmentUploadError = (e, r, i) => {
                                (0, ea.A)({
                                    file: e,
                                    guildId: c.getGuildId(),
                                    analyticsLocations: [],
                                    code: r,
                                    reason: i
                                }) &&
                                    ('' !== t && '' === eZ.Z.getDraft(c.id, eZ.d.ChannelMessage) && h.Z.saveDraft(c.id, t, eZ.d.ChannelMessage),
                                    0 === eM.Z.getUploadCount(c.id, eZ.d.ChannelMessage) &&
                                        g.Z.setUploads({
                                            channelId: c.id,
                                            uploads: n,
                                            draftType: eZ.d.ChannelMessage
                                        }));
                            }),
                            g.Z.clearAll(c.id, eZ.d.ChannelMessage));
                    }
                    if (null != C.scheduledTimestamp)
                        try {
                            (await (0, eC.PV)({
                                channelId: c.id,
                                scheduledTimestamp: C.scheduledTimestamp,
                                messageSendData: {
                                    channelId: c.id,
                                    content: t,
                                    nonce: (0, ec.r)(),
                                    tts: p,
                                    message_reference: C.messageReference,
                                    allowed_mentions: C.allowedMentions,
                                    flags: C.flags
                                },
                                attachmentsToUpload: n
                            }),
                                (0, ev.Hw)(C.scheduledTimestamp));
                        } catch (e) {
                            return (
                                (0, ev.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        }
                    else f.Z.sendMessage(c.id, y, void 0, C);
                    return (
                        this.setState((0, B.H2)()),
                        (0, eb.A6)(c.id),
                        (0, ej.qB)(c.id, d.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            e8(this, 'handleSetValue', (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (V.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            e8(this, 'renderAttachButton', (e, t) =>
                (0, r.jsx)(H.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eZ.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            e8(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, r.jsx)(F.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            ));
    }
}
class tr extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused: null != n && !c.tq && ew.Z.can(e0.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eB.S.subscribe(e0.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eB.S.unsubscribe(e0.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e, t;
        let n,
            { channel: i, guild: l, keyboardModeEnabled: o, hasModalOpen: s, pendingReply: c, chatInputType: d, placeholder: h, accessibilityLabel: f, showQuarantinedUserBanner: m, filterAfterTimestamp: g, communicationDisabledUntil: y, shakeIntensity: C, poggermodeEnabled: x, isSelectedResourceChannel: v, showAutomodUserProfileChatBlocker: j, showAppLauncherButton: O, showAppDMsUI: E, isInitialLoading: S, pendingScheduledMessage: I, recipientUser: P, voiceChannel: Z, theme: N, chatWallpaperState: T, wallpaperColorMix: A, messagesTypingGradient: w, isChatInputBottomAligned: R } = this.props,
            { textAreaFocused: M, textAreaHighlighted: D } = this.state,
            k = d === U.Ie.SIDEBAR;
        n = k && i.type === e0.d4z.GUILD_VOICE ? e2.t.pnnyFR : k && i.type === e0.d4z.GUILD_STAGE_VOICE ? e2.t.YInSkp : u.T.THREADS.has(i.type) ? e2.t['OkzL+f'] : e2.t.UbNmGR;
        let L = (0, r.jsx)('div', {
                className: e3.channelBottomBarArea,
                children: (0, r.jsx)(eX.Z, {})
            }),
            B = (0, r.jsxs)('div', {
                className: e3.channelBottomBarArea,
                children: [
                    (0, r.jsx)(eO.Z, {
                        childRef: this.containerDomRef,
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, r.jsx)(tt, {
                            ref: this.refToChannelTextAreaFormComponent,
                            refInstance: this.containerDomRef,
                            focused: M,
                            highlighted: D,
                            channel: i,
                            guild: l,
                            keyboardModeEnabled: o,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: s,
                            pendingReply: c,
                            chatInputType: d,
                            placeholder: h,
                            accessibilityLabel: f,
                            shakeIntensity: C,
                            poggermodeEnabled: x,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped,
                            renderAppLauncherButton: this.renderAppLauncherButton,
                            renderAppCommandButton: this.renderAppCommandButton,
                            pendingScheduledMessage: I
                        })
                    }),
                    this.renderAppCommandButton()
                ]
            }),
            F = E && S,
            H = F && S ? L : B,
            G = a()({
                [e7.barWithAppLauncherButton]: O,
                [e7.barWithAppsDMsUI]: E
            }),
            { enabled: V } = eE.Z.getCurrentConfig({
                guildId: null == Z ? void 0 : Z.guild_id,
                location: 'ChannelChat'
            }),
            z = W.qM.getCurrentConfig({ location: 'ChannelChat' }).enabled,
            q = V && null != P && null != Z && null != Z.guild_id;
        return (0, r.jsx)(
            _.Z,
            {
                page: (0, eL.mE)(this.props.channel),
                children: (0, r.jsx)(el.sW, {
                    children: (0, r.jsx)(ei.BV, {
                        children: (0, r.jsxs)(eU.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eU.d9, {
                                    event: e0.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, r.jsx)(eU.d9, {
                                    event: e0.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, r.jsx)(eU.d9, {
                                    event: e0.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, r.jsx)(eU.d9, {
                                    event: e0.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, r.jsxs)(te, {
                                    isSidebar: k,
                                    className: a()(e3.chatContent, {
                                        [e3.hasWallpaper]: null == T ? void 0 : T.isViewable,
                                        [X.e3]: z ? (null == T ? void 0 : T.isViewable) : void 0,
                                        [null != (e = (0, p.QeD)(N)) ? e : '']: z ? (null == T ? void 0 : T.isViewable) : void 0
                                    }),
                                    'aria-label': e2.intl.formatToPlainString(n, { channelName: i.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: null != A ? A : {},
                                    children: [
                                        (0, r.jsx)(Y.Z, { channel: i }),
                                        q &&
                                            (0, r.jsx)(e$.Z, {
                                                recipientUser: P,
                                                voiceChannel: Z
                                            }),
                                        (0, r.jsx)(eq.Z, {
                                            channel: i,
                                            guild: l,
                                            narrow: k
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: e2.intl.format(e2.t.eTzKk5, { channelName: i.name }) }) }),
                                            children: [
                                                (0, r.jsx)(eu.Z, {
                                                    channel: i,
                                                    forceCozy: v,
                                                    filterAfterTimestamp: g,
                                                    showingQuarantineBanner: m,
                                                    jumpBarClassName: G,
                                                    typingGradient: w,
                                                    isChatInputBottomAligned: R
                                                }),
                                                v
                                                    ? null
                                                    : null !=
                                                        (t = this.renderMessageBanner({
                                                            channel: i,
                                                            showQuarantinedUserBanner: m,
                                                            guild: l,
                                                            communicationDisabledUntil: y,
                                                            showAutomodUserProfileChatBlocker: j
                                                        }))
                                                      ? t
                                                      : (0, r.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: e4,
                                                            className: a()(e3.form, { [e3.formWithLoadedChatInput]: !F }),
                                                            children: [
                                                                x && (0, r.jsx)(ef.Z, { channelId: i.id }),
                                                                i.isPrivate()
                                                                    ? (0, r.jsx)(eQ.Z, {
                                                                          channel: i,
                                                                          children: H
                                                                      })
                                                                    : (0, r.jsx)(eJ.Z, {
                                                                          channel: i,
                                                                          children: H
                                                                      }),
                                                                (0, r.jsx)(b.ZP, {
                                                                    channel: i,
                                                                    poggermodeEnabled: x,
                                                                    isInTextChannel: !0
                                                                })
                                                            ]
                                                        }),
                                                (0, r.jsx)(el.kw, {})
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
            e8(this, 'containerDomRef', i.createRef()),
            e8(this, 'refToChannelTextAreaFormComponent', i.createRef()),
            e8(this, 'inputFormRef', i.createRef()),
            e8(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            e8(this, 'dispatchGroupRef', i.createRef()),
            e8(this, 'appIconAnimateRef', i.createRef()),
            e8(this, 'handleRequestFocus', (e) => {
                if (e.channelId === this.props.channel.id)
                    if (this.state.textAreaFocused) {
                        var t;
                        null == (t = this.refToChannelTextAreaFormComponent.current) || t.focusEditor();
                    } else this.setState({ textAreaFocused: !0 });
            }),
            e8(this, 'handleInputFocus', (e) => {
                var t;
                (null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 }));
            }),
            e8(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            e8(this, 'handleInputKeyDown', (e, t) => {
                (this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e));
            }),
            e8(this, 'handleKeyDown', (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            e8(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case e0.yXg.ARROW_LEFT:
                            n === U.Ie.SIDEBAR && eB.S.dispatch(e0.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eR.Z.getChannelId() });
                            return;
                        case e0.yXg.ARROW_RIGHT:
                            n === U.Ie.NORMAL && eB.S.dispatch(e0.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eI.ZP.getCurrentSidebarChannelId(r.id) });
                    }
            }),
            e8(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, Q.PG)(t, this.props.chatInputType);
            }),
            e8(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return S.__(P._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            e8(this, 'handleChatInteract', () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            e8(this, 'handleCommandSentinelTyped', () => {
                var e;
                null == (e = this.appIconAnimateRef.current) || e.animate();
            }),
            e8(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: i, communicationDisabledUntil: l, showAutomodUserProfileChatBlocker: a } = e;
                return t.type === e0.d4z.DM && n
                    ? (0, r.jsx)(eg.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, r.jsx)(ey.Z, { channelId: t.id })
                      : null != l && (0, ee.J)(l) && null != i && !ew.Z.can(e0.Plq.ADMINISTRATOR, i)
                        ? (0, r.jsx)(en.T, {
                              guild: i,
                              disabledUntil: l
                          })
                        : a
                          ? (0, r.jsx)($.h, { guild: i })
                          : null;
            }),
            e8(this, 'renderAppLauncherButton', () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(eW.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t
                });
            }),
            e8(this, 'renderAppCommandButton', () => {
                let { showAppDMsUI: e, isFailedAppDMLoad: t, channel: n, entryPointCommandButtonRef: i, chatInputType: l } = this.props;
                return e && !t
                    ? (0, r.jsx)('div', {
                          className: e3.entryPointButtonContainer,
                          children: (0, r.jsx)(eK.ZP, {
                              context: {
                                  channel: n,
                                  type: 'channel'
                              },
                              entryPointCommandButtonRef: i,
                              type: l
                          })
                      })
                    : null;
            }));
    }
}
let ti = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: a } = e,
        { placeholder: o, accessibilityLabel: s } = (0, ez.Z)({ channel: t }),
        c = (0, eg.S)(eD.default.getCurrentUser(), t),
        [u] = (0, et.AB)(null == n ? void 0 : n.id),
        h = (0, J.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([eD.default], () => eD.default.getCurrentUser()),
        m = (0, d.e7)([eT.ZP], () => {
            var e, t, r;
            return null != f && null != (r = null == (e = eT.ZP.getMember(null != (t = null == n ? void 0 : n.id) ? t : e0.lds, null == f ? void 0 : f.id)) ? void 0 : e.isPending) && r;
        }),
        g = (0, d.e7)([ep.Z], () => ep.Z.isEnabled()),
        _ = (0, em.Z)(t.id),
        y = (0, er.Z)(t.id),
        x = (0, Z.R)({
            channel: t,
            chatInputType: l
        }),
        j = (0, L.Q)(t.id),
        S = (0, ex.k)(t.id),
        P = (0, C.ZP)(),
        N = (0, K.Z)(t.id),
        T = (0, q.Z)(null == N ? void 0 : N.wallpaperId),
        {
            isInitialLoading: A,
            primaryEntryPointCommand: w,
            isProfileFetching: R,
            wasProfileFetching: M,
            applicationId: D,
            channelId: k,
            commands: U
        } = (0, O.Z)({
            context: {
                channel: t,
                type: 'channel'
            }
        });
    (0, E.Z)({
        isProfileFetching: R,
        wasProfileFetching: M,
        applicationId: D,
        channelId: k,
        commands: U
    });
    let B = i.useRef(null),
        F = (0, d.e7)([I.Z], () => I.Z.appDMChannelsWithFailedLoads().has(t.id)),
        H = (0, d.e7)([eR.Z], () => eR.Z.getVoiceChannelId()),
        G = (0, d.e7)([eP.Z], () => eP.Z.getChannel(H)),
        V = (0, d.e7)([eD.default], () => (t.type !== e0.d4z.DM ? null : eD.default.getUser(t.getRecipientId()))),
        W = (0, d.e7)([eh.ZP, eS.default], () => eh.ZP.getUserCombo(eS.default.getId(), t.id)),
        Y = (0, b.iD)(t),
        X = (0, b.d7)(t),
        Q = Y.length > 0 || t.rateLimitPerUser > 0 || null != W || null != X,
        $ = (0, z.Z)('ChannelChat');
    return (0, r.jsx)(tr, {
        channel: t,
        isEditing: null != (0, d.e7)([eN.Z], () => eN.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([e_.Z], () => e_.Z.getPendingReply(t.id)),
        chatInputType: l,
        placeholder: o,
        accessibilityLabel: s,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: u,
        shakeIntensity: _,
        poggermodeEnabled: g,
        isSelectedResourceChannel: y,
        showAutomodUserProfileChatBlocker: h && !m,
        showAppLauncherButton: x,
        showAppDMsUI: j,
        isInitialLoading: A,
        showEntryPointAppCommandButton: null != w,
        entryPointCommandButtonRef: B,
        isFailedAppDMLoad: F,
        pendingScheduledMessage: S,
        recipientUser: V,
        voiceChannel: G,
        theme: P,
        chatWallpaperState: N,
        wallpaperColorMix: T,
        messagesTypingGradient: $ && Q,
        isChatInputBottomAligned: $
    });
});
