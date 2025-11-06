n.d(t, { Z: () => e6 }), n(388685), n(35282), n(781311), n(997841);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(873546),
    u = n(106351),
    d = n(442837),
    p = n(481060),
    f = n(430742),
    h = n(904245),
    m = n(144144),
    g = n(166459),
    b = n(738619),
    _ = n(410575),
    y = n(857595),
    C = n(607070),
    v = n(367907),
    O = n(499254),
    x = n(541099),
    E = n(827498),
    j = n(533379),
    S = n(555573),
    P = n(456007),
    I = n(10718),
    Z = n(998698),
    T = n(895924),
    N = n(581364),
    A = n(667204),
    w = n(104919),
    M = n(541716),
    R = n(752305),
    D = n(190210),
    k = n(516887),
    L = n(974251),
    U = n(893718),
    B = n(436660),
    V = n(680835),
    F = n(28546),
    H = n(295474),
    G = n(521476),
    W = n(69882),
    z = n(71619),
    q = n(185145),
    Y = n(736052),
    K = n(146128),
    X = n(549006),
    J = n(58873),
    Q = n(925975),
    $ = n(957730),
    ee = n(48854),
    et = n(105457),
    en = n(400023),
    er = n(64078),
    ei = n(351780),
    el = n(843693),
    ea = n(217871),
    eo = n(139577),
    es = n(247944),
    ec = n(623292),
    eu = n(807092),
    ed = n(773359),
    ep = n(45251),
    ef = n(705533),
    eh = n(618857),
    em = n(268350),
    eg = n(155409),
    eb = n(163612),
    e_ = n(314897),
    ey = n(433355),
    eC = n(592125),
    ev = n(703558),
    eO = n(323873),
    ex = n(271383),
    eE = n(375954),
    ej = n(496675),
    eS = n(944486),
    eP = n(117530),
    eI = n(594174),
    eZ = n(626135),
    eT = n(934415),
    eN = n(459273),
    eA = n(585483),
    ew = n(630388),
    eM = n(709054),
    eR = n(838440),
    eD = n(127654),
    ek = n(979956),
    eL = n(413251),
    eU = n(655687),
    eB = n(775685),
    eV = n(583027),
    eF = n(25007),
    eH = n(685722),
    eG = n(199649),
    eW = n(1397),
    ez = n(641861),
    eq = n(981631),
    eY = n(959517),
    eK = n(388032),
    eX = n(97009),
    eJ = n(180376);
function eQ(e, t, n) {
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
function e$(e) {
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
                eQ(e, t, n[t]);
            });
    }
    return e;
}
function e0(e, t) {
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
function e1(e) {
    e.preventDefault();
}
let e2 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e3(e) {
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
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["isSidebar"]);
    return t ? (0, r.jsx)("section", e0(e$({}, n), { role: "complementary" })) : (0, r.jsx)("main", e$({}, n));
}
let e8 = i.forwardRef((e, t) => (0, r.jsx)(e4, e0(e$({}, e), { ref: t })));
e8.displayName = "ChannelTextAreaForm";
class e4 extends i.PureComponent {
    focusEditor() {
        var e;
        null == (e = this.editorRef) || e.focus();
    }
    componentDidMount() {
        ev.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ev.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ev.Z.getDraft(n.id, ev.d.ChannelMessage);
            e !== r && this.setState((0, R.eK)(e));
        }
        t.textValue.length < eq.J6R && r.length >= eq.J6R && eZ.default.track(eq.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        h.Z.startEditMessageRecord(t.id, e), v.ZP.trackWithMetadata(eq.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: r } = (0, N.XA)(e.interactionData),
            { command: i, application: l } = I.Xq(
                {
                    channel: t,
                    type: "channel",
                },
                n,
            );
        if (null != i) {
            var a, o;
            let e =
                null != l
                    ? {
                          type: T.Qi.APPLICATION,
                          id: l.id,
                          icon: l.icon,
                          name: null != (o = null == l || null == (a = l.bot) ? void 0 : a.username) ? o : l.name,
                          application: l,
                      }
                    : null;
            S.Po({
                channelId: t.id,
                command: i,
                section: e,
                location: T.Vh.RECALL,
                initialValues: (0, P.Dw)(i, null != r ? r : []),
                commandOrigin: T.bB.CHAT,
            });
        }
    }
    render() {
        let {
                channel: e,
                focused: t,
                onBlur: n,
                onFocus: i,
                onResize: l,
                highlighted: a,
                pendingReply: o,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: d,
                shakeIntensity: f,
                poggermodeEnabled: h,
                onCommandSentinelTyped: m,
                renderAppLauncherButton: g,
                pendingScheduledMessage: b,
                announcementComposerEnabled: _,
            } = this.props,
            { contentWarningProps: y } = this.state,
            C =
                e.type === eq.d4z.GUILD_ANNOUNCEMENT && _
                    ? (0, r.jsx)(D.Z, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eX.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: o,
                          type: M.Ie.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: l,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderAppLauncherButton: g,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eD.d,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, r.jsx)(U.ZP, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eX.channelTextArea,
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
                          promptToUpload: eD.d,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          onCommandSentinelTyped: m,
                          pendingScheduledMessage: b,
                      });
        return (0, r.jsx)(p.yRy, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                var e;
                null == y || null == (e = y.onCancel) || e.call(y), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != y,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    s()(null != y, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, r.jsx)(et.Z, e$({ onClose: t }, y))
                );
            },
            children: () =>
                h
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: f > 0,
                          intensity: f,
                          className: eX.shaker,
                          children: C,
                      })
                    : C,
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eQ(this, "isFirstChange", !0),
            eQ(this, "editorRef", null),
            eQ(
                this,
                "state",
                e0(e$({}, (0, R.eK)(ev.Z.getDraft(this.props.channel.id, ev.d.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            eQ(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = ev.Z.getDraft(e.channel.id, ev.d.ChannelMessage);
                n !== r &&
                    ("" === r || "" === n) &&
                    t.setState((0, R.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eQ(this, "handleKeyDown", (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eq.yXg.DELETE:
                    case eq.yXg.BACKSPACE:
                        return void this.handleIncrementCombo("", 1);
                    case eq.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t))
                            eP.Z.getUploadCount(r.id, ev.d.ChannelMessage) > 0
                                ? eA.S.dispatchToLastSubscribed(eq.CkL.FOCUS_ATTACHMENT_AREA)
                                : eA.S.dispatchToLastSubscribed(eq.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eE.Z.getLastChatCommandMessage(e.id),
                                n = eE.Z.getLastEditableMessage(e.id);
                            null != t && null != n
                                ? eM.default.compare(n.id, t.id) > 0
                                    ? this.handleEditLastMessage(n)
                                    : this.handleRecallLastCommand(t)
                                : null != t
                                  ? this.handleRecallLastCommand(t)
                                  : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eq.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, y.rf)();
                        if (eP.Z.getUploadCount(r.id, ev.d.ChannelMessage) > 0)
                            return void g.Z.clearAll(r.id, ev.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            eQ(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = e_.default.getId(),
                    l = el.ZP.getUserCombo(i, r),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, er.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : a,
                    multiplier: t,
                });
            }),
            eQ(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i },
                } = this.props;
                f.Z.changeDraft(i, t, ev.d.ChannelMessage);
                let l = "" !== t && n !== this.state.richValue,
                    a = l && !e2.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? m.Z.startTyping(i) : "" === t && m.Z.stopTyping(i),
                    l && r && (0, y.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            eQ(this, "handleSendMessage", async (e) => {
                let {
                    value: t,
                    uploads: n,
                    stickers: r,
                    confettiPotionEmoji: i,
                    command: l,
                    commandOptionValues: a,
                    isGif: o,
                    components: s,
                    announcementSendOptions: c,
                } = e;
                if (0 === (t = t.trim()).length && (null == r || 0 === r.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0,
                    });
                let { guild: u, channel: d, pendingReply: p, chatInputType: m } = this.props,
                    b = !1;
                if (null != l) {
                    if (l.inputType === T.iw.BUILT_IN_INTEGRATION)
                        return (
                            eA.S.dispatch(eq.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2,
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            })
                        );
                    let e = Z.Z.getCommandOrigin(d.id);
                    if (null == e || e === T.bB.CHAT) {
                        let { isAuthorized: e } = await (0, w.L)({
                            applicationId: l.applicationId,
                            channel: d,
                            commandIntegrationTypes: l.integration_types,
                        });
                        if (!e)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            });
                    } else if (
                        e === T.bB.APPLICATION_LAUNCHER ||
                        e === T.bB.IMAGE_RECS_MENU ||
                        e === T.bB.IMAGE_RECS_SUBMENU
                    ) {
                        var _;
                        let { location: t, sectionName: n } = null != (_ = (0, eV._U)(l)) ? _ : {},
                            r = e === T.bB.APPLICATION_LAUNCHER ? x.Z.lastShownEntrypoint() : E._b.TEXT,
                            { isAuthorized: i } = await (0, w.L)({
                                applicationId: l.applicationId,
                                channel: d,
                                commandIntegrationTypes: l.integration_types,
                                appLauncherContext: {
                                    location: t,
                                    sectionName: n,
                                    entrypoint: r,
                                },
                            });
                        if (!i)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            });
                        (0, eV.SC)(l);
                    }
                    let n = await (0, A.Z)({
                        command: l,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: u,
                            channel: d,
                        },
                    });
                    if (l.inputType !== T.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0,
                        });
                    null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (b = !0 === n.tts));
                }
                return (0, eR.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: r,
                    uploads: n,
                    channel: d,
                }).then(async (e) => {
                    var a, _;
                    let { valid: y, failureReason: C } = e;
                    if (!y)
                        if (C === eq.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eA.S.dispatch(eq.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2,
                                }),
                                eA.S.dispatch(eq.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0,
                                }
                            );
                        else
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1,
                            };
                    let v = (0, Q.g)(t, {
                        channel: d,
                        isEdit: !1,
                    });
                    null != v && (null != v.content && (t = v.content), null != v.tts && (b = v.tts));
                    let O = $.ZP.parse(d, t);
                    (O.tts = O.tts || b), null != s && ((O.content = ""), (O.components = s));
                    let x = e0(
                        e$(
                            {},
                            h.Z.getSendMessageOptions({
                                content: t,
                                channelId: d.id,
                                uploads: n,
                                stickers: r,
                                command: l,
                                isGif: o,
                                pendingReply: p,
                                confettiPotionEmoji: i,
                                scheduledTimestamp:
                                    null == (a = this.props.pendingScheduledMessage) ? void 0 : a.scheduledTimestamp,
                            }),
                        ),
                        { location: eY.dy.CHAT_INPUT },
                    );
                    if (
                        (null != c && (x.announcementSendOptions = c),
                        null != s && (x.flags = (0, ew.pj)(null != (_ = x.flags) ? _ : 0, eq.iLy.IS_COMPONENTS_V2)),
                        o)
                    )
                        return (
                            h.Z.sendMessage(d.id, O, void 0, x),
                            (0, ec.A6)(d.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, ek.KZ)(n);
                        if ((0, ek.Bf)(e, null == u ? void 0 : u.id))
                            return (
                                (0, eD.G)(d, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (x.eagerDispatch = !1),
                            (x.attachmentsToUpload = n),
                            (x.onAttachmentUploadError = (e, r, i) => {
                                (0, J.A)({
                                    file: e,
                                    guildId: d.getGuildId(),
                                    analyticsLocations: [],
                                    code: r,
                                    reason: i,
                                }) &&
                                    ("" !== t &&
                                        "" === ev.Z.getDraft(d.id, ev.d.ChannelMessage) &&
                                        f.Z.saveDraft(d.id, t, ev.d.ChannelMessage),
                                    0 === eP.Z.getUploadCount(d.id, ev.d.ChannelMessage) &&
                                        g.Z.setUploads({
                                            channelId: d.id,
                                            uploads: n,
                                            draftType: ev.d.ChannelMessage,
                                        }));
                            }),
                            g.Z.clearAll(d.id, ev.d.ChannelMessage);
                    }
                    if (null != x.scheduledTimestamp)
                        try {
                            await (0, ep.PV)({
                                channelId: d.id,
                                scheduledTimestamp: x.scheduledTimestamp,
                                messageSendData: {
                                    channelId: d.id,
                                    content: t,
                                    nonce: (0, ee.r)(),
                                    tts: b,
                                    message_reference: x.messageReference,
                                    allowed_mentions: x.allowedMentions,
                                    flags: x.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, eh.Hw)(x.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, eh.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        }
                    else h.Z.sendMessage(d.id, O, void 0, x);
                    return (
                        this.setState((0, R.H2)()),
                        (0, ec.A6)(d.id),
                        (0, em.qB)(d.id, m.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0,
                        }
                    );
                });
            }),
            eQ(this, "handleSetValue", (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (B.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            eQ(this, "renderAttachButton", (e, t) =>
                (0, r.jsx)(L.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: ev.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                }),
            ),
            eQ(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, r.jsx)(k.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class e7 extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused:
                      null != n && n.type !== eq.d4z.GUILD_ANNOUNCEMENT && !c.tq && ej.Z.can(eq.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    componentDidMount() {
        eA.S.subscribe(eq.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eA.S.unsubscribe(eq.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t,
            {
                channel: n,
                guild: i,
                keyboardModeEnabled: l,
                hasModalOpen: o,
                pendingReply: s,
                chatInputType: c,
                placeholder: d,
                accessibilityLabel: f,
                showQuarantinedUserBanner: h,
                filterAfterTimestamp: m,
                communicationDisabledUntil: g,
                shakeIntensity: y,
                poggermodeEnabled: C,
                isSelectedResourceChannel: v,
                showAutomodUserProfileChatBlocker: O,
                showAppLauncherButton: x,
                pendingScheduledMessage: E,
                recipientUser: j,
                voiceChannel: S,
                messagesTypingGradient: P,
                showLinkedLobbyApplicationLoadingIndicator: I,
                announcementComposerEnabled: Z,
            } = this.props,
            { textAreaFocused: T, textAreaHighlighted: N } = this.state,
            A = c === M.Ie.SIDEBAR;
        t =
            A && n.type === eq.d4z.GUILD_VOICE
                ? eK.t.pnnyFZ
                : A && n.type === eq.d4z.GUILD_STAGE_VOICE
                  ? eK.t.YInSkq
                  : u.T.THREADS.has(n.type)
                    ? eK.t["OkzL+Q"]
                    : eK.t.UbNmGc;
        let w = (0, r.jsx)("div", {
                className: eX.channelBottomBarArea,
                children: (0, r.jsx)(eH.Z, {}),
            }),
            R = (0, r.jsx)("div", {
                className: eX.channelBottomBarArea,
                children: (0, r.jsx)(eg.Z, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, r.jsx)(e8, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: T,
                        highlighted: N,
                        channel: n,
                        guild: i,
                        keyboardModeEnabled: l,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: o,
                        pendingReply: s,
                        chatInputType: c,
                        placeholder: d,
                        accessibilityLabel: f,
                        shakeIntensity: y,
                        poggermodeEnabled: C,
                        onCommandSentinelTyped: this.handleCommandSentinelTyped,
                        renderAppLauncherButton: this.renderAppLauncherButton,
                        pendingScheduledMessage: E,
                        announcementComposerEnabled: Z,
                    }),
                }),
            }),
            D = I ? w : R,
            k = a()({ [eJ.barWithAppLauncherButton]: x }),
            { enabled: L } = eb.Z.getCurrentConfig({
                guildId: null == S ? void 0 : S.guild_id,
                location: "ChannelChat",
            }),
            U = L && null != j && null != S && null != S.guild_id;
        return (0, r.jsx)(
            _.Z,
            {
                page: (0, eT.mE)(this.props.channel),
                children: (0, r.jsx)(X.sW, {
                    children: (0, r.jsx)(K.BV, {
                        children: (0, r.jsxs)(eN.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eN.d9, {
                                    event: eq.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, r.jsx)(eN.d9, {
                                    event: eq.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, r.jsx)(eN.d9, {
                                    event: eq.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, r.jsx)(eN.d9, {
                                    event: eq.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, r.jsxs)(e3, {
                                    isSidebar: A,
                                    className: eX.chatContent,
                                    "aria-label": eK.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        U &&
                                            (0, r.jsx)(ez.Z, {
                                                recipientUser: j,
                                                voiceChannel: S,
                                            }),
                                        (0, r.jsx)(eF.Z, {
                                            channel: n,
                                            guild: i,
                                            narrow: A,
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, {
                                                children: (0, r.jsx)(p.H, {
                                                    children: eK.intl.format(eK.t.eTzKkx, { channelName: n.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, r.jsx)(en.Z, {
                                                    channel: n,
                                                    forceCozy: v,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: h,
                                                    jumpBarClassName: k,
                                                    typingGradient: P,
                                                }),
                                                v
                                                    ? null
                                                    : null !=
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: h,
                                                            guild: i,
                                                            communicationDisabledUntil: g,
                                                            showAutomodUserProfileChatBlocker: O,
                                                        }))
                                                      ? e
                                                      : (0, r.jsxs)("form", {
                                                            ref: this.inputFormRef,
                                                            onSubmit: e1,
                                                            className: a()(eX.form, {
                                                                [eX.formWithLoadedChatInput]: !I,
                                                            }),
                                                            children: [
                                                                C && (0, r.jsx)(ea.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, r.jsx)(eG.Z, {
                                                                          channel: n,
                                                                          children: D,
                                                                      })
                                                                    : (0, r.jsx)(eW.Z, {
                                                                          channel: n,
                                                                          children: D,
                                                                      }),
                                                                (0, r.jsx)(b.ZP, {
                                                                    channel: n,
                                                                    isInTextChannel: !0,
                                                                }),
                                                            ],
                                                        }),
                                                (0, r.jsx)(X.kw, {}),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            },
            "messages-".concat(n.id),
        );
    }
    constructor(...e) {
        super(...e),
            eQ(this, "containerDomRef", i.createRef()),
            eQ(this, "refToChannelTextAreaFormComponent", i.createRef()),
            eQ(this, "inputFormRef", i.createRef()),
            eQ(this, "state", {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id,
            }),
            eQ(this, "dispatchGroupRef", i.createRef()),
            eQ(this, "appIconAnimateRef", i.createRef()),
            eQ(this, "handleRequestFocus", (e) => {
                if (e.channelId === this.props.channel.id)
                    if (this.state.textAreaFocused) {
                        var t;
                        null == (t = this.refToChannelTextAreaFormComponent.current) || t.focusEditor();
                    } else this.setState({ textAreaFocused: !0 });
            }),
            eQ(this, "handleInputFocus", (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight,
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eQ(this, "handleInputBlur", () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1,
                    });
            }),
            eQ(this, "handleInputKeyDown", (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }),
                    t || this._handleMoveToPane(e);
            }),
            eQ(this, "handleKeyDown", (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            eQ(this, "_handleMoveToPane", (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case eq.yXg.ARROW_LEFT:
                            n === M.Ie.SIDEBAR &&
                                eA.S.dispatch(eq.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eS.Z.getChannelId() });
                            return;
                        case eq.yXg.ARROW_RIGHT:
                            n === M.Ie.NORMAL &&
                                eA.S.dispatch(eq.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: ey.ZP.getCurrentSidebarChannelId(r.id),
                                });
                    }
            }),
            eQ(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, F.PG)(t, this.props.chatInputType);
            }),
            eQ(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return O._(E._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            eQ(this, "handleChatInteract", () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            eQ(this, "handleCommandSentinelTyped", () => {
                var e;
                null == (e = this.appIconAnimateRef.current) || e.animate();
            }),
            eQ(this, "renderMessageBanner", (e) => {
                let {
                    channel: t,
                    showQuarantinedUserBanner: n,
                    guild: i,
                    communicationDisabledUntil: l,
                    showAutomodUserProfileChatBlocker: a,
                } = e;
                return t.type === eq.d4z.DM && n
                    ? (0, r.jsx)(es.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, r.jsx)(ed.Z, { channelId: t.id })
                      : null != l && (0, W.J)(l) && null != i && !ej.Z.can(eq.Plq.ADMINISTRATOR, i)
                        ? (0, r.jsx)(q.T, {
                              guild: i,
                              disabledUntil: l,
                          })
                        : a
                          ? (0, r.jsx)(G.h, { guild: i })
                          : null;
            }),
            eQ(this, "renderAppLauncherButton", () => {
                let { channel: e, chatInputType: t } = this.props;
                return (0, r.jsx)(eB.Z, {
                    channel: e,
                    type: t,
                    animateRef: this.appIconAnimateRef,
                });
            });
    }
}
let e6 = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: i, filterAfterTimestamp: l } = e,
        { placeholder: a, accessibilityLabel: o } = (0, eU.Z)({ channel: t }),
        s = (0, es.S)(eI.default.getCurrentUser(), t),
        [c] = (0, z.AB)(null == n ? void 0 : n.id),
        u = (0, H.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([eI.default], () => eI.default.getCurrentUser()),
        h = (0, d.e7)([ex.ZP], () => {
            var e, t, r;
            return (
                null != f &&
                null !=
                    (r =
                        null ==
                        (e = ex.ZP.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : eq.lds,
                            null == f ? void 0 : f.id,
                        ))
                            ? void 0
                            : e.isPending) &&
                r
            );
        }),
        m = (0, d.e7)([ei.Z], () => ei.Z.isEnabled()),
        g = (0, eo.Z)(t.id),
        _ = (0, Y.Z)(t.id),
        y = (0, j.R)({
            channel: t,
            chatInputType: i,
        }),
        v = (0, ef.k)(t.id),
        O = (0, d.e7)([eS.Z], () => eS.Z.getVoiceChannelId()),
        x = (0, d.e7)([eC.Z], () => eC.Z.getChannel(O)),
        E = (0, d.e7)([eI.default], () => (t.type !== eq.d4z.DM ? null : eI.default.getUser(t.getRecipientId()))),
        S = (0, d.e7)([el.ZP, e_.default], () => el.ZP.getUserCombo(e_.default.getId(), t.id)),
        P = (0, b.iD)(t),
        I = (0, b.d7)(t),
        Z = P.length > 0 || t.rateLimitPerUser > 0 || null != S || null != I,
        { showLinkedLobbyApplicationLoadingIndicator: T } = (0, eL.Z)(t.linkedLobby),
        N = (0, V.Z)("ChannelChat");
    return (0, r.jsx)(e7, {
        channel: t,
        isEditing: null != (0, d.e7)([eO.Z], () => eO.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([C.Z], () => C.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([eu.Z], () => eu.Z.getPendingReply(t.id)),
        chatInputType: i,
        placeholder: a,
        accessibilityLabel: o,
        filterAfterTimestamp: l,
        showQuarantinedUserBanner: s,
        communicationDisabledUntil: c,
        shakeIntensity: g,
        poggermodeEnabled: m,
        isSelectedResourceChannel: _,
        showAutomodUserProfileChatBlocker: u && !h,
        showAppLauncherButton: y,
        pendingScheduledMessage: v,
        recipientUser: E,
        voiceChannel: x,
        messagesTypingGradient: Z,
        showLinkedLobbyApplicationLoadingIndicator: T,
        announcementComposerEnabled: N,
    });
});
