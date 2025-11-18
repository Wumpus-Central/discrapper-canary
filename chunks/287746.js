n.d(t, { Z: () => e4 }), n(388685), n(35282), n(781311), n(997841);
var i = n(54381),
    r = n(473749),
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
    y = n(410575),
    C = n(857595),
    v = n(607070),
    _ = n(367907),
    x = n(499254),
    j = n(541099),
    O = n(827498),
    E = n(555573),
    S = n(456007),
    P = n(10718),
    I = n(998698),
    Z = n(895924),
    T = n(581364),
    N = n(667204),
    A = n(104919),
    w = n(541716),
    M = n(752305),
    R = n(190210),
    L = n(516887),
    k = n(974251),
    D = n(893718),
    U = n(436660),
    B = n(680835),
    H = n(28546),
    V = n(295474),
    F = n(521476),
    G = n(69882),
    z = n(71619),
    W = n(185145),
    q = n(736052),
    K = n(146128),
    Y = n(549006),
    X = n(58873),
    J = n(925975),
    Q = n(957730),
    $ = n(48854),
    ee = n(105457),
    et = n(400023),
    en = n(64078),
    ei = n(351780),
    er = n(843693),
    el = n(217871),
    ea = n(139577),
    eo = n(247944),
    es = n(623292),
    ec = n(807092),
    eu = n(773359),
    ed = n(45251),
    ep = n(705533),
    eh = n(618857),
    ef = n(268350),
    em = n(155409),
    eg = n(163612),
    eb = n(314897),
    ey = n(433355),
    eC = n(592125),
    ev = n(703558),
    e_ = n(323873),
    ex = n(271383),
    ej = n(375954),
    eO = n(496675),
    eE = n(944486),
    eS = n(117530),
    eP = n(594174),
    eI = n(626135),
    eZ = n(934415),
    eT = n(459273),
    eN = n(585483),
    eA = n(630388),
    ew = n(709054),
    eM = n(838440),
    eR = n(127654),
    eL = n(979956),
    ek = n(413251),
    eD = n(655687),
    eU = n(583027),
    eB = n(25007),
    eH = n(685722),
    eV = n(199649),
    eF = n(1397),
    eG = n(641861),
    ez = n(981631),
    eW = n(959517),
    eq = n(388032),
    eK = n(161655);
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
        ev.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ev.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ev.Z.getDraft(n.id, ev.d.ChannelMessage);
            e !== i && this.setState((0, M.eK)(e));
        }
        t.textValue.length < ez.J6R && i.length >= ez.J6R && eI.default.track(ez.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessageRecord(t.id, e), _.ZP.trackWithMetadata(ez.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, T.XA)(e.interactionData),
            { command: r, application: l } = P.Xq(
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
                          type: Z.Qi.APPLICATION,
                          id: l.id,
                          icon: l.icon,
                          name: null != (o = null == l || null == (a = l.bot) ? void 0 : a.username) ? o : l.name,
                          application: l,
                      }
                    : null;
            E.Po({
                channelId: t.id,
                command: r,
                section: e,
                location: Z.Vh.RECALL,
                initialValues: (0, S.Dw)(r, null != i ? i : []),
                commandOrigin: Z.bB.CHAT,
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
                shakeIntensity: h,
                poggermodeEnabled: f,
                pendingScheduledMessage: m,
                announcementComposerEnabled: g,
            } = this.props,
            { contentWarningProps: b } = this.state,
            y =
                e.type === ez.d4z.GUILD_ANNOUNCEMENT && g
                    ? (0, i.jsx)(R.Z, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eK.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: o,
                          type: w.Ie.CREATE_ANNOUNCEMENT_POST,
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
                    : (0, i.jsx)(D.ZP, {
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
        return (0, i.jsx)(p.yRy, {
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
                    (0, i.jsx)(ee.Z, eX({ onClose: t }, b))
                );
            },
            children: () =>
                f
                    ? (0, i.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
                          className: eK.shaker,
                          children: y,
                      })
                    : y,
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
                eJ(eX({}, (0, M.eK)(ev.Z.getDraft(this.props.channel.id, ev.d.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            eY(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = ev.Z.getDraft(e.channel.id, ev.d.ChannelMessage);
                n !== i &&
                    ("" === i || "" === n) &&
                    t.setState((0, M.eK)(i), () => {
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
                            eS.Z.getUploadCount(i.id, ev.d.ChannelMessage) > 0
                                ? eN.S.dispatchToLastSubscribed(ez.CkL.FOCUS_ATTACHMENT_AREA)
                                : eN.S.dispatchToLastSubscribed(ez.CkL.FOCUS_MESSAGES, { atEnd: !0 });
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
                        if ((e.preventDefault(), t)) return void (0, C.rf)();
                        if (eS.Z.getUploadCount(i.id, ev.d.ChannelMessage) > 0)
                            return void g.Z.clearAll(i.id, ev.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            eY(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    r = eb.default.getId(),
                    l = er.ZP.getUserCombo(r, i),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, en.SE)({
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
                h.Z.changeDraft(r, t, ev.d.ChannelMessage);
                let l = "" !== t && n !== this.state.richValue,
                    a = l && !e$.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? m.Z.startTyping(r) : "" === t && m.Z.stopTyping(r),
                    l && i && (0, C.rf)(),
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
                let { guild: u, channel: d, pendingReply: p, chatInputType: m } = this.props,
                    b = !1;
                if (null != l) {
                    if (l.inputType === Z.iw.BUILT_IN_INTEGRATION)
                        return (
                            eN.S.dispatch(ez.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2,
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            })
                        );
                    let e = I.Z.getCommandOrigin(d.id);
                    if (null == e || e === Z.bB.CHAT) {
                        let { isAuthorized: e } = await (0, A.L)({
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
                        e === Z.bB.APPLICATION_LAUNCHER ||
                        e === Z.bB.IMAGE_RECS_MENU ||
                        e === Z.bB.IMAGE_RECS_SUBMENU
                    ) {
                        var y;
                        let { location: t, sectionName: n } = null != (y = (0, eU._U)(l)) ? y : {},
                            i = e === Z.bB.APPLICATION_LAUNCHER ? j.Z.lastShownEntrypoint() : O._b.TEXT,
                            { isAuthorized: r } = await (0, A.L)({
                                applicationId: l.applicationId,
                                channel: d,
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
                    let n = await (0, N.Z)({
                        command: l,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: u,
                            channel: d,
                        },
                    });
                    if (l.inputType !== Z.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0,
                        });
                    null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (b = !0 === n.tts));
                }
                return (0, eM.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: d,
                }).then(async (e) => {
                    var a, y;
                    let { valid: C, failureReason: v } = e;
                    if (!C)
                        if (v === ez.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eN.S.dispatch(ez.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2,
                                }),
                                eN.S.dispatch(ez.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let _ = (0, J.g)(t, {
                        channel: d,
                        isEdit: !1,
                    });
                    null != _ && (null != _.content && (t = _.content), null != _.tts && (b = _.tts));
                    let x = Q.ZP.parse(d, t);
                    (x.tts = x.tts || b), null != s && ((x.content = ""), (x.components = s));
                    let j = eJ(
                        eX(
                            {},
                            f.Z.getSendMessageOptions({
                                content: t,
                                channelId: d.id,
                                uploads: n,
                                stickers: i,
                                command: l,
                                isGif: o,
                                pendingReply: p,
                                confettiPotionEmoji: r,
                                scheduledTimestamp:
                                    null == (a = this.props.pendingScheduledMessage) ? void 0 : a.scheduledTimestamp,
                            }),
                        ),
                        { location: eW.dy.CHAT_INPUT },
                    );
                    if (
                        (null != c && (j.announcementSendOptions = c),
                        null != s && (j.flags = (0, eA.pj)(null != (y = j.flags) ? y : 0, ez.iLy.IS_COMPONENTS_V2)),
                        o)
                    )
                        return (
                            f.Z.sendMessage(d.id, x, void 0, j),
                            (0, es.A6)(d.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eL.KZ)(n);
                        if ((0, eL.Bf)(e, null == u ? void 0 : u.id))
                            return (
                                (0, eR.G)(d, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (j.eagerDispatch = !1),
                            (j.attachmentsToUpload = n),
                            (j.onAttachmentUploadError = (e, i, r) => {
                                (0, X.A)({
                                    file: e,
                                    guildId: d.getGuildId(),
                                    analyticsLocations: [],
                                    code: i,
                                    reason: r,
                                }) &&
                                    ("" !== t &&
                                        "" === ev.Z.getDraft(d.id, ev.d.ChannelMessage) &&
                                        h.Z.saveDraft(d.id, t, ev.d.ChannelMessage),
                                    0 === eS.Z.getUploadCount(d.id, ev.d.ChannelMessage) &&
                                        g.Z.setUploads({
                                            channelId: d.id,
                                            uploads: n,
                                            draftType: ev.d.ChannelMessage,
                                        }));
                            }),
                            g.Z.clearAll(d.id, ev.d.ChannelMessage);
                    }
                    if (null != j.scheduledTimestamp)
                        try {
                            await (0, ed.PV)({
                                channelId: d.id,
                                scheduledTimestamp: j.scheduledTimestamp,
                                messageSendData: {
                                    channelId: d.id,
                                    content: t,
                                    nonce: (0, $.r)(),
                                    tts: b,
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
                    else f.Z.sendMessage(d.id, x, void 0, j);
                    return (
                        this.setState((0, M.H2)()),
                        (0, es.A6)(d.id),
                        (0, ef.qB)(d.id, m.drafts.type),
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
                null != i && (U.Q.select(i, []), i.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            eY(this, "renderAttachButton", (e, t) =>
                (0, i.jsx)(k.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: ev.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                    chatInputType: this.props.chatInputType,
                }),
            ),
            eY(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, i.jsx)(L.Z, {
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
                      null != n && n.type !== ez.d4z.GUILD_ANNOUNCEMENT && !c.tq && eO.Z.can(ez.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    componentDidMount() {
        eN.S.subscribe(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eN.S.unsubscribe(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                accessibilityLabel: h,
                showQuarantinedUserBanner: f,
                filterAfterTimestamp: m,
                communicationDisabledUntil: g,
                shakeIntensity: C,
                poggermodeEnabled: v,
                isSelectedResourceChannel: _,
                showAutomodUserProfileChatBlocker: x,
                pendingScheduledMessage: j,
                recipientUser: O,
                voiceChannel: E,
                messagesTypingGradient: S,
                showLinkedLobbyApplicationLoadingIndicator: P,
                announcementComposerEnabled: I,
            } = this.props,
            { textAreaFocused: Z, textAreaHighlighted: T } = this.state,
            N = c === w.Ie.SIDEBAR;
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
                children: (0, i.jsx)(eH.Z, {}),
            }),
            M = (0, i.jsx)("div", {
                className: eK.channelBottomBarArea,
                children: (0, i.jsx)(em.Z, {
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
                        accessibilityLabel: h,
                        shakeIntensity: C,
                        poggermodeEnabled: v,
                        pendingScheduledMessage: j,
                        announcementComposerEnabled: I,
                    }),
                }),
            }),
            R = P ? A : M,
            { enabled: L } = eg.Z.getCurrentConfig({
                guildId: null == E ? void 0 : E.guild_id,
                location: "ChannelChat",
            }),
            k = L && null != O && null != E && null != E.guild_id;
        return (0, i.jsx)(
            y.Z,
            {
                page: (0, eZ.mE)(this.props.channel),
                children: (0, i.jsx)(Y.sW, {
                    children: (0, i.jsx)(K.BV, {
                        children: (0, i.jsxs)(eT.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eT.d9, {
                                    event: ez.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, i.jsx)(eT.d9, {
                                    event: ez.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, i.jsx)(eT.d9, {
                                    event: ez.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, i.jsx)(eT.d9, {
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
                                        k &&
                                            (0, i.jsx)(eG.Z, {
                                                recipientUser: O,
                                                voiceChannel: E,
                                            }),
                                        (0, i.jsx)(eB.Z, {
                                            channel: n,
                                            guild: r,
                                            narrow: N,
                                        }),
                                        (0, i.jsxs)(p.y5t, {
                                            component: (0, i.jsx)(p.nn4, {
                                                children: (0, i.jsx)(p.H, {
                                                    children: eq.intl.format(eq.t.eTzKkx, { channelName: n.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, i.jsx)(et.Z, {
                                                    channel: n,
                                                    forceCozy: _,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: f,
                                                    typingGradient: S,
                                                }),
                                                _
                                                    ? null
                                                    : null !=
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: f,
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
                                                                v && (0, i.jsx)(el.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(eV.Z, {
                                                                          channel: n,
                                                                          children: R,
                                                                      })
                                                                    : (0, i.jsx)(eF.Z, {
                                                                          channel: n,
                                                                          children: R,
                                                                      }),
                                                                (0, i.jsx)(b.ZP, {
                                                                    channel: n,
                                                                    isInTextChannel: !0,
                                                                }),
                                                            ],
                                                        }),
                                                (0, i.jsx)(Y.kw, {}),
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
                            n === w.Ie.SIDEBAR &&
                                eN.S.dispatch(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eE.Z.getChannelId() });
                            return;
                        case ez.yXg.ARROW_RIGHT:
                            n === w.Ie.NORMAL &&
                                eN.S.dispatch(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: ey.ZP.getCurrentSidebarChannelId(i.id),
                                });
                    }
            }),
            eY(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, H.PG)(t, this.props.chatInputType);
            }),
            eY(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return x._(O._b.TEXT, this.props.chatInputType, { applicationId: t });
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
                    ? (0, i.jsx)(eo.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, i.jsx)(eu.Z, { channelId: t.id })
                      : null != l && (0, G.J)(l) && null != r && !eO.Z.can(ez.Plq.ADMINISTRATOR, r)
                        ? (0, i.jsx)(W.T, {
                              guild: r,
                              disabledUntil: l,
                          })
                        : a
                          ? (0, i.jsx)(F.h, { guild: r })
                          : null;
            });
    }
}
let e4 = r.memo(function (e) {
    let { channel: t, guild: n, chatInputType: r, filterAfterTimestamp: l } = e,
        { placeholder: a, accessibilityLabel: o } = (0, eD.Z)({ channel: t }),
        s = (0, eo.S)(eP.default.getCurrentUser(), t),
        [c] = (0, z.AB)(null == n ? void 0 : n.id),
        u = (0, V.Ux)(null == n ? void 0 : n.id),
        h = (0, d.e7)([eP.default], () => eP.default.getCurrentUser()),
        f = (0, d.e7)([ex.ZP], () => {
            var e, t, i;
            return (
                null != h &&
                null !=
                    (i =
                        null ==
                        (e = ex.ZP.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : ez.lds,
                            null == h ? void 0 : h.id,
                        ))
                            ? void 0
                            : e.isPending) &&
                i
            );
        }),
        m = (0, d.e7)([ei.Z], () => ei.Z.isEnabled()),
        g = (0, ea.Z)(t.id),
        y = (0, q.Z)(t.id),
        C = (0, ep.k)(t.id),
        _ = (0, d.e7)([eE.Z], () => eE.Z.getVoiceChannelId()),
        x = (0, d.e7)([eC.Z], () => eC.Z.getChannel(_)),
        j = (0, d.e7)([eP.default], () => (t.type !== ez.d4z.DM ? null : eP.default.getUser(t.getRecipientId()))),
        O = (0, d.e7)([er.ZP, eb.default], () => er.ZP.getUserCombo(eb.default.getId(), t.id)),
        E = (0, b.iD)(t),
        S = (0, b.d7)(t),
        P = E.length > 0 || t.rateLimitPerUser > 0 || null != O || null != S,
        { showLinkedLobbyApplicationLoadingIndicator: I } = (0, ek.Z)(t.linkedLobby),
        Z = (0, B.Z)("ChannelChat");
    return (0, i.jsx)(e3, {
        channel: t,
        isEditing: null != (0, d.e7)([e_.Z], () => e_.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([ec.Z], () => ec.Z.getPendingReply(t.id)),
        chatInputType: r,
        placeholder: a,
        accessibilityLabel: o,
        filterAfterTimestamp: l,
        showQuarantinedUserBanner: s,
        communicationDisabledUntil: c,
        shakeIntensity: g,
        poggermodeEnabled: m,
        isSelectedResourceChannel: y,
        showAutomodUserProfileChatBlocker: u && !f,
        pendingScheduledMessage: C,
        recipientUser: j,
        voiceChannel: x,
        messagesTypingGradient: P,
        showLinkedLobbyApplicationLoadingIndicator: I,
        announcementComposerEnabled: Z,
    });
});
