n.d(t, { Z: () => e4 }), n(388685), n(35282), n(781311), n(997841);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(873546),
    u = n(106351),
    d = n(95015),
    p = n(442837),
    f = n(481060),
    h = n(430742),
    m = n(904245),
    g = n(144144),
    b = n(166459),
    C = n(738619),
    y = n(410575),
    v = n(857595),
    O = n(607070),
    x = n(367907),
    E = n(499254),
    j = n(541099),
    S = n(827498),
    _ = n(555573),
    P = n(456007),
    I = n(10718),
    Z = n(998698),
    T = n(895924),
    N = n(581364),
    A = n(667204),
    w = n(104919),
    M = n(541716),
    R = n(752305),
    L = n(190210),
    D = n(516887),
    k = n(974251),
    U = n(893718),
    V = n(436660),
    F = n(680835),
    B = n(28546),
    H = n(295474),
    G = n(521476),
    z = n(69882),
    W = n(71619),
    q = n(185145),
    K = n(736052),
    Y = n(146128),
    X = n(549006),
    J = n(58873),
    Q = n(925975),
    $ = n(957730),
    ee = n(48854),
    et = n(105457),
    en = n(400023),
    ei = n(64078),
    er = n(351780),
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
    eC = n(314897),
    ey = n(433355),
    ev = n(592125),
    eO = n(703558),
    ex = n(323873),
    eE = n(271383),
    ej = n(375954),
    eS = n(496675),
    e_ = n(944486),
    eP = n(117530),
    eI = n(594174),
    eZ = n(626135),
    eT = n(934415),
    eN = n(459273),
    eA = n(585483),
    ew = n(709054),
    eM = n(838440),
    eR = n(127654),
    eL = n(979956),
    eD = n(413251),
    ek = n(655687),
    eU = n(583027),
    eV = n(25007),
    eF = n(685722),
    eB = n(199649),
    eH = n(1397),
    eG = n(641861),
    ez = n(981631),
    eW = n(959517),
    eq = n(388032),
    eK = n(978966);
function eY(e, t, n) {
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
function eX(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                eY(e, t, n[t]);
            });
    }
    return e;
}
function eJ(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eQ(e) {
    e.preventDefault();
}
let e$ = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e0(e) {
    var { isSidebar: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["isSidebar"]);
    return t ? (0, i.jsx)("section", eJ(eX({}, n), { role: "complementary" })) : (0, i.jsx)("main", eX({}, n));
}
let e1 = r.forwardRef((e, t) => (0, i.jsx)(e2, eJ(eX({}, e), { ref: t })));
e1.displayName = "ChannelTextAreaForm";
class e2 extends r.PureComponent {
    focusEditor() {
        var e;
        null == (e = this.editorRef) || e.focus();
    }
    componentDidMount() {
        eO.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eO.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eO.Z.getDraft(n.id, eO.d.ChannelMessage);
            e !== i && this.setState((0, R.eK)(e));
        }
        t.textValue.length < ez.J6R && i.length >= ez.J6R && eZ.default.track(ez.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        m.Z.startEditMessageRecord(t.id, e), x.ZP.trackWithMetadata(ez.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, N.XA)(e.interactionData),
            { command: r, application: l } = I.Xq(
                {
                    channel: t,
                    type: "channel",
                },
                n,
            );
        if (null != r) {
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
            _.Po({
                channelId: t.id,
                command: r,
                section: e,
                location: T.Vh.RECALL,
                initialValues: (0, P.Dw)(r, null != i ? i : []),
                commandOrigin: T.bB.CHAT,
            });
        }
    }
    render() {
        let {
                channel: e,
                focused: t,
                onBlur: n,
                onFocus: r,
                onResize: l,
                highlighted: a,
                pendingReply: o,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: d,
                shakeIntensity: p,
                poggermodeEnabled: h,
                pendingScheduledMessage: m,
                announcementComposerEnabled: g,
            } = this.props,
            { contentWarningProps: b } = this.state,
            C =
                e.type === ez.d4z.GUILD_ANNOUNCEMENT && g
                    ? (0, i.jsx)(L.Z, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eK.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: o,
                          type: M.Ie.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: l,
                          onFocus: r,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eR.d,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, i.jsx)(U.ZP, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eK.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: o,
                          type: c,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: l,
                          onFocus: r,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eR.d,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: m,
                      });
        return (0, i.jsx)(f.yRy, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                var e;
                null == b || null == (e = b.onCancel) || e.call(b), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != b,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    s()(null != b, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, i.jsx)(et.Z, eX({ onClose: t }, b))
                );
            },
            children: () =>
                h
                    ? (0, i.jsx)(f.UkV, {
                          isShaking: p > 0,
                          intensity: p,
                          className: eK.shaker,
                          children: C,
                      })
                    : C,
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eY(this, "isFirstChange", !0),
            eY(this, "editorRef", null),
            eY(
                this,
                "state",
                eJ(eX({}, (0, R.eK)(eO.Z.getDraft(this.props.channel.id, eO.d.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            eY(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = eO.Z.getDraft(e.channel.id, eO.d.ChannelMessage);
                n !== i &&
                    ("" === i || "" === n) &&
                    t.setState((0, R.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eY(this, "handleKeyDown", (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    r = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case ez.yXg.DELETE:
                    case ez.yXg.BACKSPACE:
                        return void this.handleIncrementCombo("", 1);
                    case ez.yXg.ARROW_UP:
                        if (r || l) return;
                        if ((e.preventDefault(), t))
                            eP.Z.getUploadCount(i.id, eO.d.ChannelMessage) > 0
                                ? eA.S.dispatchToLastSubscribed(ez.CkL.FOCUS_ATTACHMENT_AREA)
                                : eA.S.dispatchToLastSubscribed(ez.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = ej.Z.getLastChatCommandMessage(e.id),
                                n = ej.Z.getLastEditableMessage(e.id);
                            null != t && null != n
                                ? ew.default.compare(n.id, t.id) > 0
                                    ? this.handleEditLastMessage(n)
                                    : this.handleRecallLastCommand(t)
                                : null != t
                                  ? this.handleRecallLastCommand(t)
                                  : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case ez.yXg.ESCAPE:
                        if (r || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, v.rf)();
                        if (eP.Z.getUploadCount(i.id, eO.d.ChannelMessage) > 0)
                            return void b.Z.clearAll(i.id, eO.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            eY(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    r = eC.default.getId(),
                    l = el.ZP.getUserCombo(r, i),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, ei.SE)({
                    channelId: i,
                    userId: r,
                    value: null != e ? e.length : a,
                    multiplier: t,
                });
            }),
            eY(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: r },
                } = this.props;
                h.Z.changeDraft(r, t, eO.d.ChannelMessage);
                let l = "" !== t && n !== this.state.richValue,
                    a = l && !e$.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? g.Z.startTyping(r) : "" === t && g.Z.stopTyping(r),
                    l && i && (0, v.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            eY(this, "handleSendMessage", async (e) => {
                let {
                    value: t,
                    uploads: n,
                    stickers: i,
                    confettiPotionEmoji: r,
                    command: l,
                    commandOptionValues: a,
                    isGif: o,
                    components: s,
                    announcementSendOptions: c,
                } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0,
                    });
                let { guild: u, channel: p, pendingReply: f, chatInputType: g } = this.props,
                    C = !1;
                if (null != l) {
                    if (l.inputType === T.iw.BUILT_IN_INTEGRATION)
                        return (
                            eA.S.dispatch(ez.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2,
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            })
                        );
                    let e = Z.Z.getCommandOrigin(p.id);
                    if (null == e || e === T.bB.CHAT) {
                        let { isAuthorized: e } = await (0, w.L)({
                            applicationId: l.applicationId,
                            channel: p,
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
                        var y;
                        let { location: t, sectionName: n } = null != (y = (0, eU._U)(l)) ? y : {},
                            i = e === T.bB.APPLICATION_LAUNCHER ? j.Z.lastShownEntrypoint() : S._b.TEXT,
                            { isAuthorized: r } = await (0, w.L)({
                                applicationId: l.applicationId,
                                channel: p,
                                commandIntegrationTypes: l.integration_types,
                                appLauncherContext: {
                                    location: t,
                                    sectionName: n,
                                    entrypoint: i,
                                },
                            });
                        if (!r)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            });
                        (0, eU.SC)(l);
                    }
                    let n = await (0, A.Z)({
                        command: l,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: u,
                            channel: p,
                        },
                    });
                    if (l.inputType !== T.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0,
                        });
                    null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (C = !0 === n.tts));
                }
                return (0, eM.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: p,
                }).then(async (e) => {
                    var a, y;
                    let { valid: v, failureReason: O } = e;
                    if (!v)
                        if (O === ez.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eA.S.dispatch(ez.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2,
                                }),
                                eA.S.dispatch(ez.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let x = (0, Q.g)(t, {
                        channel: p,
                        isEdit: !1,
                    });
                    null != x && (null != x.content && (t = x.content), null != x.tts && (C = x.tts));
                    let E = $.ZP.parse(p, t);
                    (E.tts = E.tts || C), null != s && ((E.content = ""), (E.components = s));
                    let j = eJ(
                        eX(
                            {},
                            m.Z.getSendMessageOptions({
                                content: t,
                                channelId: p.id,
                                uploads: n,
                                stickers: i,
                                command: l,
                                isGif: o,
                                pendingReply: f,
                                confettiPotionEmoji: r,
                                scheduledTimestamp:
                                    null == (a = this.props.pendingScheduledMessage) ? void 0 : a.scheduledTimestamp,
                            }),
                        ),
                        { location: eW.dy.CHAT_INPUT },
                    );
                    if (
                        (null != c && (j.announcementSendOptions = c),
                        null != s && (j.flags = (0, d.pj)(null != (y = j.flags) ? y : 0, ez.iLy.IS_COMPONENTS_V2)),
                        o)
                    )
                        return (
                            m.Z.sendMessage(p.id, E, void 0, j),
                            (0, ec.A6)(p.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eL.KZ)(n);
                        if ((0, eL.Bf)(e, null == u ? void 0 : u.id))
                            return (
                                (0, eR.G)(p, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (j.eagerDispatch = !1),
                            (j.attachmentsToUpload = n),
                            (j.onAttachmentUploadError = (e, i, r) => {
                                (0, J.A)({
                                    file: e,
                                    guildId: p.getGuildId(),
                                    analyticsLocations: [],
                                    code: i,
                                    reason: r,
                                }) &&
                                    ("" !== t &&
                                        "" === eO.Z.getDraft(p.id, eO.d.ChannelMessage) &&
                                        h.Z.saveDraft(p.id, t, eO.d.ChannelMessage),
                                    0 === eP.Z.getUploadCount(p.id, eO.d.ChannelMessage) &&
                                        b.Z.setUploads({
                                            channelId: p.id,
                                            uploads: n,
                                            draftType: eO.d.ChannelMessage,
                                        }));
                            }),
                            b.Z.clearAll(p.id, eO.d.ChannelMessage);
                    }
                    if (null != j.scheduledTimestamp)
                        try {
                            await (0, ep.PV)({
                                channelId: p.id,
                                scheduledTimestamp: j.scheduledTimestamp,
                                messageSendData: {
                                    channelId: p.id,
                                    content: t,
                                    nonce: (0, ee.r)(),
                                    tts: C,
                                    message_reference: j.messageReference,
                                    allowed_mentions: j.allowedMentions,
                                    flags: j.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, eh.Hw)(j.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, eh.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        }
                    else m.Z.sendMessage(p.id, E, void 0, j);
                    return (
                        this.setState((0, R.H2)()),
                        (0, ec.A6)(p.id),
                        (0, em.qB)(p.id, g.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0,
                        }
                    );
                });
            }),
            eY(this, "handleSetValue", (e) => {
                var t, n;
                let i = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != i && (V.Q.select(i, []), i.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            eY(this, "renderAttachButton", (e, t) =>
                (0, i.jsx)(k.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eO.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                    chatInputType: this.props.chatInputType,
                }),
            ),
            eY(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, i.jsx)(D.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class e3 extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused:
                      null != n && n.type !== ez.d4z.GUILD_ANNOUNCEMENT && !c.tq && eS.Z.can(ez.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    componentDidMount() {
        eA.S.subscribe(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eA.S.unsubscribe(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t,
            {
                channel: n,
                guild: r,
                keyboardModeEnabled: l,
                hasModalOpen: o,
                pendingReply: s,
                chatInputType: c,
                placeholder: d,
                accessibilityLabel: p,
                showQuarantinedUserBanner: h,
                filterAfterTimestamp: m,
                communicationDisabledUntil: g,
                shakeIntensity: b,
                poggermodeEnabled: v,
                isSelectedResourceChannel: O,
                showAutomodUserProfileChatBlocker: x,
                pendingScheduledMessage: E,
                recipientUser: j,
                voiceChannel: S,
                messagesTypingGradient: _,
                showLinkedLobbyApplicationLoadingIndicator: P,
                announcementComposerEnabled: I,
            } = this.props,
            { textAreaFocused: Z, textAreaHighlighted: T } = this.state,
            N = c === M.Ie.SIDEBAR;
        t =
            N && n.type === ez.d4z.GUILD_VOICE
                ? eq.t.pnnyFZ
                : N && n.type === ez.d4z.GUILD_STAGE_VOICE
                  ? eq.t.YInSkq
                  : u.T.THREADS.has(n.type)
                    ? eq.t["OkzL+Q"]
                    : eq.t.UbNmGc;
        let A = (0, i.jsx)("div", {
                className: eK.channelBottomBarArea,
                children: (0, i.jsx)(eF.Z, {}),
            }),
            w = (0, i.jsx)("div", {
                className: eK.channelBottomBarArea,
                children: (0, i.jsx)(eg.Z, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, i.jsx)(e1, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: Z,
                        highlighted: T,
                        channel: n,
                        guild: r,
                        keyboardModeEnabled: l,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: o,
                        pendingReply: s,
                        chatInputType: c,
                        placeholder: d,
                        accessibilityLabel: p,
                        shakeIntensity: b,
                        poggermodeEnabled: v,
                        pendingScheduledMessage: E,
                        announcementComposerEnabled: I,
                    }),
                }),
            }),
            R = P ? A : w,
            { enabled: L } = eb.Z.getCurrentConfig({
                guildId: null == S ? void 0 : S.guild_id,
                location: "ChannelChat",
            }),
            D = L && null != j && null != S && null != S.guild_id;
        return (0, i.jsx)(
            y.Z,
            {
                page: (0, eT.mE)(this.props.channel),
                children: (0, i.jsx)(X.sW, {
                    children: (0, i.jsx)(Y.BV, {
                        children: (0, i.jsxs)(eN.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eN.d9, {
                                    event: ez.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, i.jsx)(eN.d9, {
                                    event: ez.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, i.jsx)(eN.d9, {
                                    event: ez.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, i.jsx)(eN.d9, {
                                    event: ez.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, i.jsxs)(e0, {
                                    isSidebar: N,
                                    className: eK.chatContent,
                                    "aria-label": eq.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        D &&
                                            (0, i.jsx)(eG.Z, {
                                                recipientUser: j,
                                                voiceChannel: S,
                                            }),
                                        (0, i.jsx)(eV.Z, {
                                            channel: n,
                                            guild: r,
                                            narrow: N,
                                        }),
                                        (0, i.jsxs)(f.y5t, {
                                            component: (0, i.jsx)(f.nn4, {
                                                children: (0, i.jsx)(f.H, {
                                                    children: eq.intl.format(eq.t.eTzKkx, { channelName: n.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, i.jsx)(en.Z, {
                                                    channel: n,
                                                    forceCozy: O,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: h,
                                                    typingGradient: _,
                                                }),
                                                O
                                                    ? null
                                                    : null !=
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: h,
                                                            guild: r,
                                                            communicationDisabledUntil: g,
                                                            showAutomodUserProfileChatBlocker: x,
                                                        }))
                                                      ? e
                                                      : (0, i.jsxs)("form", {
                                                            ref: this.inputFormRef,
                                                            onSubmit: eQ,
                                                            className: a()(eK.form, {
                                                                [eK.formWithLoadedChatInput]: !P,
                                                            }),
                                                            children: [
                                                                v && (0, i.jsx)(ea.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(eB.Z, {
                                                                          channel: n,
                                                                          children: R,
                                                                      })
                                                                    : (0, i.jsx)(eH.Z, {
                                                                          channel: n,
                                                                          children: R,
                                                                      }),
                                                                (0, i.jsx)(C.ZP, {
                                                                    channel: n,
                                                                    isInTextChannel: !0,
                                                                }),
                                                            ],
                                                        }),
                                                (0, i.jsx)(X.kw, {}),
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
            eY(this, "containerDomRef", r.createRef()),
            eY(this, "refToChannelTextAreaFormComponent", r.createRef()),
            eY(this, "inputFormRef", r.createRef()),
            eY(this, "state", {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id,
            }),
            eY(this, "dispatchGroupRef", r.createRef()),
            eY(this, "handleRequestFocus", (e) => {
                if (e.channelId === this.props.channel.id)
                    if (this.state.textAreaFocused) {
                        var t;
                        null == (t = this.refToChannelTextAreaFormComponent.current) || t.focusEditor();
                    } else this.setState({ textAreaFocused: !0 });
            }),
            eY(this, "handleInputFocus", (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight,
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eY(this, "handleInputBlur", () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1,
                    });
            }),
            eY(this, "handleInputKeyDown", (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }),
                    t || this._handleMoveToPane(e);
            }),
            eY(this, "handleKeyDown", (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            eY(this, "_handleMoveToPane", (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (t)
                    switch (e.which) {
                        case ez.yXg.ARROW_LEFT:
                            n === M.Ie.SIDEBAR &&
                                eA.S.dispatch(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e_.Z.getChannelId() });
                            return;
                        case ez.yXg.ARROW_RIGHT:
                            n === M.Ie.NORMAL &&
                                eA.S.dispatch(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: ey.ZP.getCurrentSidebarChannelId(i.id),
                                });
                    }
            }),
            eY(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, B.PG)(t, this.props.chatInputType, this.props.channel.id);
            }),
            eY(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return E._(S._b.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
            }),
            eY(this, "handleChatInteract", () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            eY(this, "renderMessageBanner", (e) => {
                let {
                    channel: t,
                    showQuarantinedUserBanner: n,
                    guild: r,
                    communicationDisabledUntil: l,
                    showAutomodUserProfileChatBlocker: a,
                } = e;
                return t.type === ez.d4z.DM && n
                    ? (0, i.jsx)(es.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, i.jsx)(ed.Z, { channelId: t.id })
                      : null != l && (0, z.J)(l) && null != r && !eS.Z.can(ez.Plq.ADMINISTRATOR, r)
                        ? (0, i.jsx)(q.T, {
                              guild: r,
                              disabledUntil: l,
                          })
                        : a
                          ? (0, i.jsx)(G.h, { guild: r })
                          : null;
            });
    }
}
let e4 = r.memo(function (e) {
    let { channel: t, guild: n, chatInputType: r, filterAfterTimestamp: l } = e,
        { placeholder: a, accessibilityLabel: o } = (0, ek.Z)({ channel: t }),
        s = (0, es.S)(eI.default.getCurrentUser(), t),
        [c] = (0, W.AB)(null == n ? void 0 : n.id),
        u = (0, H.Ux)(null == n ? void 0 : n.id),
        d = (0, p.e7)([eI.default], () => eI.default.getCurrentUser()),
        h = (0, p.e7)([eE.ZP], () => {
            var e, t, i;
            return (
                null != d &&
                null !=
                    (i =
                        null ==
                        (e = eE.ZP.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : ez.lds,
                            null == d ? void 0 : d.id,
                        ))
                            ? void 0
                            : e.isPending) &&
                i
            );
        }),
        m = (0, p.e7)([er.Z], () => er.Z.isEnabled()),
        g = (0, eo.Z)(t.id),
        b = (0, K.Z)(t.id),
        y = (0, ef.k)(t.id),
        v = (0, p.e7)([e_.Z], () => e_.Z.getVoiceChannelId()),
        x = (0, p.e7)([ev.Z], () => ev.Z.getChannel(v)),
        E = (0, p.e7)([eI.default], () => (t.type !== ez.d4z.DM ? null : eI.default.getUser(t.getRecipientId()))),
        j = (0, p.e7)([el.ZP, eC.default], () => el.ZP.getUserCombo(eC.default.getId(), t.id)),
        S = (0, C.iD)(t),
        _ = (0, C.d7)(t),
        P = S.length > 0 || t.rateLimitPerUser > 0 || null != j || null != _,
        { showLinkedLobbyApplicationLoadingIndicator: I } = (0, eD.Z)(t.linkedLobby),
        Z = (0, F.Z)("ChannelChat");
    return (0, i.jsx)(e3, {
        channel: t,
        isEditing: null != (0, p.e7)([ex.Z], () => ex.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, f.s9z)(f.JQI),
        guild: n,
        keyboardModeEnabled: (0, p.e7)([O.Z], () => O.Z.keyboardModeEnabled),
        pendingReply: (0, p.e7)([eu.Z], () => eu.Z.getPendingReply(t.id)),
        chatInputType: r,
        placeholder: a,
        accessibilityLabel: o,
        filterAfterTimestamp: l,
        showQuarantinedUserBanner: s,
        communicationDisabledUntil: c,
        shakeIntensity: g,
        poggermodeEnabled: m,
        isSelectedResourceChannel: b,
        showAutomodUserProfileChatBlocker: u && !h,
        pendingScheduledMessage: y,
        recipientUser: E,
        voiceChannel: x,
        messagesTypingGradient: P,
        showLinkedLobbyApplicationLoadingIndicator: I,
        announcementComposerEnabled: Z,
    });
});
