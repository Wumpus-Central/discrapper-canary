n.d(t, { Z: () => tt }), n(388685), n(35282), n(781311), n(997841);
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
    O = n(450936),
    x = n(993766),
    E = n(989573),
    j = n(499254),
    S = n(541099),
    P = n(827498),
    I = n(533379),
    Z = n(555573),
    T = n(456007),
    N = n(10718),
    A = n(998698),
    w = n(895924),
    M = n(581364),
    R = n(667204),
    D = n(104919),
    L = n(541716),
    k = n(752305),
    U = n(190210),
    B = n(516887),
    F = n(974251),
    V = n(893718),
    H = n(436660),
    G = n(680835),
    W = n(28546),
    z = n(295474),
    q = n(521476),
    Y = n(69882),
    K = n(71619),
    X = n(185145),
    J = n(736052),
    Q = n(146128),
    $ = n(549006),
    ee = n(58873),
    et = n(925975),
    en = n(957730),
    er = n(48854),
    ei = n(105457),
    el = n(400023),
    ea = n(64078),
    eo = n(351780),
    es = n(843693),
    ec = n(217871),
    eu = n(139577),
    ed = n(247944),
    ep = n(623292),
    ef = n(807092),
    eh = n(773359),
    em = n(45251),
    eg = n(705533),
    eb = n(618857),
    e_ = n(268350),
    ey = n(155409),
    eC = n(163612),
    ev = n(314897),
    eO = n(433355),
    ex = n(592125),
    eE = n(703558),
    ej = n(323873),
    eS = n(271383),
    eP = n(375954),
    eI = n(496675),
    eZ = n(944486),
    eT = n(117530),
    eN = n(594174),
    eA = n(626135),
    ew = n(934415),
    eM = n(459273),
    eR = n(585483),
    eD = n(630388),
    eL = n(709054),
    ek = n(838440),
    eU = n(127654),
    eB = n(979956),
    eF = n(413251),
    eV = n(655687),
    eH = n(775685),
    eG = n(583027),
    eW = n(25007),
    ez = n(685006),
    eq = n(685722),
    eY = n(199649),
    eK = n(1397),
    eX = n(641861),
    eJ = n(981631),
    eQ = n(959517),
    e$ = n(388032),
    e0 = n(161655),
    e1 = n(599610);
function e2(e, t, n) {
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
function e3(e) {
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
                e2(e, t, n[t]);
            });
    }
    return e;
}
function e8(e, t) {
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
let e7 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e6(e) {
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
    return t ? (0, r.jsx)("section", e8(e3({}, n), { role: "complementary" })) : (0, r.jsx)("main", e3({}, n));
}
let e5 = i.forwardRef((e, t) => (0, r.jsx)(e9, e8(e3({}, e), { ref: t })));
e5.displayName = "ChannelTextAreaForm";
class e9 extends i.PureComponent {
    focusEditor() {
        var e;
        null == (e = this.editorRef) || e.focus();
    }
    componentDidMount() {
        eE.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eE.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eE.Z.getDraft(n.id, eE.d.ChannelMessage);
            e !== r && this.setState((0, k.eK)(e));
        }
        t.textValue.length < eJ.J6R && r.length >= eJ.J6R && eA.default.track(eJ.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        h.Z.startEditMessageRecord(t.id, e), v.ZP.trackWithMetadata(eJ.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: r } = (0, M.XA)(e.interactionData),
            { command: i, application: l } = N.Xq(
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
                          type: w.Qi.APPLICATION,
                          id: l.id,
                          icon: l.icon,
                          name: null != (o = null == l || null == (a = l.bot) ? void 0 : a.username) ? o : l.name,
                          application: l,
                      }
                    : null;
            Z.Po({
                channelId: t.id,
                command: i,
                section: e,
                location: w.Vh.RECALL,
                initialValues: (0, T.Dw)(i, null != r ? r : []),
                commandOrigin: w.bB.CHAT,
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
                renderAppCommandButton: b,
                pendingScheduledMessage: _,
                announcementComposerEnabled: y,
            } = this.props,
            { contentWarningProps: C } = this.state,
            v =
                e.type === eJ.d4z.GUILD_ANNOUNCEMENT && y
                    ? (0, r.jsx)(U.Z, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e0.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: o,
                          type: L.Ie.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: l,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderAppLauncherButton: g,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eU.d,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, r.jsx)(V.ZP, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e0.channelTextArea,
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
                          promptToUpload: eU.d,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          onCommandSentinelTyped: m,
                          pendingScheduledMessage: _,
                      });
        return (0, r.jsx)(p.yRy, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                var e;
                null == C || null == (e = C.onCancel) || e.call(C), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != C,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    s()(null != C, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, r.jsx)(ei.Z, e3({ onClose: t }, C))
                );
            },
            children: () =>
                h
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: f > 0,
                          intensity: f,
                          className: e0.shaker,
                          children: v,
                      })
                    : v,
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            e2(this, "isFirstChange", !0),
            e2(this, "editorRef", null),
            e2(
                this,
                "state",
                e8(e3({}, (0, k.eK)(eE.Z.getDraft(this.props.channel.id, eE.d.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            e2(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eE.Z.getDraft(e.channel.id, eE.d.ChannelMessage);
                n !== r &&
                    ("" === r || "" === n) &&
                    t.setState((0, k.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            e2(this, "handleKeyDown", (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eJ.yXg.DELETE:
                    case eJ.yXg.BACKSPACE:
                        return void this.handleIncrementCombo("", 1);
                    case eJ.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t))
                            eT.Z.getUploadCount(r.id, eE.d.ChannelMessage) > 0
                                ? eR.S.dispatchToLastSubscribed(eJ.CkL.FOCUS_ATTACHMENT_AREA)
                                : eR.S.dispatchToLastSubscribed(eJ.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eP.Z.getLastChatCommandMessage(e.id),
                                n = eP.Z.getLastEditableMessage(e.id);
                            null != t && null != n
                                ? eL.default.compare(n.id, t.id) > 0
                                    ? this.handleEditLastMessage(n)
                                    : this.handleRecallLastCommand(t)
                                : null != t
                                  ? this.handleRecallLastCommand(t)
                                  : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eJ.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, y.rf)();
                        if (eT.Z.getUploadCount(r.id, eE.d.ChannelMessage) > 0)
                            return void g.Z.clearAll(r.id, eE.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            e2(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = ev.default.getId(),
                    l = es.ZP.getUserCombo(i, r),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, ea.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : a,
                    multiplier: t,
                });
            }),
            e2(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i },
                } = this.props;
                f.Z.changeDraft(i, t, eE.d.ChannelMessage);
                let l = "" !== t && n !== this.state.richValue,
                    a = l && !e7.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? m.Z.startTyping(i) : "" === t && m.Z.stopTyping(i),
                    l && r && (0, y.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            e2(this, "handleSendMessage", async (e) => {
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
                    if (l.inputType === w.iw.BUILT_IN_INTEGRATION)
                        return (
                            eR.S.dispatch(eJ.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2,
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            })
                        );
                    let e = A.Z.getCommandOrigin(d.id);
                    if (null == e || e === w.bB.CHAT) {
                        let { isAuthorized: e } = await (0, D.L)({
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
                        e === w.bB.APPLICATION_LAUNCHER ||
                        e === w.bB.IMAGE_RECS_MENU ||
                        e === w.bB.IMAGE_RECS_SUBMENU
                    ) {
                        var _;
                        let { location: t, sectionName: n } = null != (_ = (0, eG._U)(l)) ? _ : {},
                            r = e === w.bB.APPLICATION_LAUNCHER ? S.Z.lastShownEntrypoint() : P._b.TEXT,
                            { isAuthorized: i } = await (0, D.L)({
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
                        (0, eG.SC)(l);
                    }
                    let n = await (0, R.Z)({
                        command: l,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: u,
                            channel: d,
                        },
                    });
                    if (l.inputType !== w.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0,
                        });
                    null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (b = !0 === n.tts));
                }
                return (0, ek.v)({
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
                        if (C === eJ.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eR.S.dispatch(eJ.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2,
                                }),
                                eR.S.dispatch(eJ.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let v = (0, et.g)(t, {
                        channel: d,
                        isEdit: !1,
                    });
                    null != v && (null != v.content && (t = v.content), null != v.tts && (b = v.tts));
                    let O = en.ZP.parse(d, t);
                    (O.tts = O.tts || b), null != s && ((O.content = ""), (O.components = s));
                    let x = e8(
                        e3(
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
                        { location: eQ.dy.CHAT_INPUT },
                    );
                    if (
                        (null != c && (x.announcementSendOptions = c),
                        null != s && (x.flags = (0, eD.pj)(null != (_ = x.flags) ? _ : 0, eJ.iLy.IS_COMPONENTS_V2)),
                        o)
                    )
                        return (
                            h.Z.sendMessage(d.id, O, void 0, x),
                            (0, ep.A6)(d.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eB.KZ)(n);
                        if ((0, eB.Bf)(e, null == u ? void 0 : u.id))
                            return (
                                (0, eU.G)(d, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (x.eagerDispatch = !1),
                            (x.attachmentsToUpload = n),
                            (x.onAttachmentUploadError = (e, r, i) => {
                                (0, ee.A)({
                                    file: e,
                                    guildId: d.getGuildId(),
                                    analyticsLocations: [],
                                    code: r,
                                    reason: i,
                                }) &&
                                    ("" !== t &&
                                        "" === eE.Z.getDraft(d.id, eE.d.ChannelMessage) &&
                                        f.Z.saveDraft(d.id, t, eE.d.ChannelMessage),
                                    0 === eT.Z.getUploadCount(d.id, eE.d.ChannelMessage) &&
                                        g.Z.setUploads({
                                            channelId: d.id,
                                            uploads: n,
                                            draftType: eE.d.ChannelMessage,
                                        }));
                            }),
                            g.Z.clearAll(d.id, eE.d.ChannelMessage);
                    }
                    if (null != x.scheduledTimestamp)
                        try {
                            await (0, em.PV)({
                                channelId: d.id,
                                scheduledTimestamp: x.scheduledTimestamp,
                                messageSendData: {
                                    channelId: d.id,
                                    content: t,
                                    nonce: (0, er.r)(),
                                    tts: b,
                                    message_reference: x.messageReference,
                                    allowed_mentions: x.allowedMentions,
                                    flags: x.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, eb.Hw)(x.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, eb.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        }
                    else h.Z.sendMessage(d.id, O, void 0, x);
                    return (
                        this.setState((0, k.H2)()),
                        (0, ep.A6)(d.id),
                        (0, e_.qB)(d.id, m.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0,
                        }
                    );
                });
            }),
            e2(this, "handleSetValue", (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (H.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            e2(this, "renderAttachButton", (e, t) =>
                (0, r.jsx)(F.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eE.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                }),
            ),
            e2(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, r.jsx)(B.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class te extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused:
                      null != n && n.type !== eJ.d4z.GUILD_ANNOUNCEMENT && !c.tq && eI.Z.can(eJ.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    componentDidMount() {
        eR.S.subscribe(eJ.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eR.S.unsubscribe(eJ.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                showAppDMsUI: E,
                isInitialLoading: j,
                pendingScheduledMessage: S,
                recipientUser: P,
                voiceChannel: I,
                messagesTypingGradient: Z,
                showLinkedLobbyApplicationLoadingIndicator: T,
                announcementComposerEnabled: N,
            } = this.props,
            { textAreaFocused: A, textAreaHighlighted: w } = this.state,
            M = c === L.Ie.SIDEBAR;
        t =
            M && n.type === eJ.d4z.GUILD_VOICE
                ? e$.t.pnnyFZ
                : M && n.type === eJ.d4z.GUILD_STAGE_VOICE
                  ? e$.t.YInSkq
                  : u.T.THREADS.has(n.type)
                    ? e$.t["OkzL+Q"]
                    : e$.t.UbNmGc;
        let R = (0, r.jsx)("div", {
                className: e0.channelBottomBarArea,
                children: (0, r.jsx)(eq.Z, {}),
            }),
            D = (0, r.jsxs)("div", {
                className: e0.channelBottomBarArea,
                children: [
                    (0, r.jsx)(ey.Z, {
                        childRef: this.containerDomRef,
                        tutorialId: "writing-messages",
                        position: "left",
                        offsetX: 75,
                        children: (0, r.jsx)(e5, {
                            ref: this.refToChannelTextAreaFormComponent,
                            refInstance: this.containerDomRef,
                            focused: A,
                            highlighted: w,
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
                            renderAppCommandButton: this.renderAppCommandButton,
                            pendingScheduledMessage: S,
                            announcementComposerEnabled: N,
                        }),
                    }),
                    this.renderAppCommandButton(),
                ],
            }),
            k = (E && j) || T,
            U = k ? R : D,
            B = a()({
                [e1.barWithAppLauncherButton]: x,
                [e1.barWithAppsDMsUI]: E,
            }),
            { enabled: F } = eC.Z.getCurrentConfig({
                guildId: null == I ? void 0 : I.guild_id,
                location: "ChannelChat",
            }),
            V = F && null != P && null != I && null != I.guild_id;
        return (0, r.jsx)(
            _.Z,
            {
                page: (0, ew.mE)(this.props.channel),
                children: (0, r.jsx)($.sW, {
                    children: (0, r.jsx)(Q.BV, {
                        children: (0, r.jsxs)(eM.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eM.d9, {
                                    event: eJ.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, r.jsx)(eM.d9, {
                                    event: eJ.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, r.jsx)(eM.d9, {
                                    event: eJ.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, r.jsx)(eM.d9, {
                                    event: eJ.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, r.jsxs)(e6, {
                                    isSidebar: M,
                                    className: e0.chatContent,
                                    "aria-label": e$.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        V &&
                                            (0, r.jsx)(eX.Z, {
                                                recipientUser: P,
                                                voiceChannel: I,
                                            }),
                                        (0, r.jsx)(eW.Z, {
                                            channel: n,
                                            guild: i,
                                            narrow: M,
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, {
                                                children: (0, r.jsx)(p.H, {
                                                    children: e$.intl.format(e$.t.eTzKkx, { channelName: n.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, r.jsx)(el.Z, {
                                                    channel: n,
                                                    forceCozy: v,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: h,
                                                    jumpBarClassName: B,
                                                    typingGradient: Z,
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
                                                            onSubmit: e4,
                                                            className: a()(e0.form, {
                                                                [e0.formWithLoadedChatInput]: !k,
                                                            }),
                                                            children: [
                                                                C && (0, r.jsx)(ec.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, r.jsx)(eY.Z, {
                                                                          channel: n,
                                                                          children: U,
                                                                      })
                                                                    : (0, r.jsx)(eK.Z, {
                                                                          channel: n,
                                                                          children: U,
                                                                      }),
                                                                (0, r.jsx)(b.ZP, {
                                                                    channel: n,
                                                                    isInTextChannel: !0,
                                                                }),
                                                            ],
                                                        }),
                                                (0, r.jsx)($.kw, {}),
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
            e2(this, "containerDomRef", i.createRef()),
            e2(this, "refToChannelTextAreaFormComponent", i.createRef()),
            e2(this, "inputFormRef", i.createRef()),
            e2(this, "state", {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id,
            }),
            e2(this, "dispatchGroupRef", i.createRef()),
            e2(this, "appIconAnimateRef", i.createRef()),
            e2(this, "handleRequestFocus", (e) => {
                if (e.channelId === this.props.channel.id)
                    if (this.state.textAreaFocused) {
                        var t;
                        null == (t = this.refToChannelTextAreaFormComponent.current) || t.focusEditor();
                    } else this.setState({ textAreaFocused: !0 });
            }),
            e2(this, "handleInputFocus", (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight,
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            e2(this, "handleInputBlur", () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1,
                    });
            }),
            e2(this, "handleInputKeyDown", (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }),
                    t || this._handleMoveToPane(e);
            }),
            e2(this, "handleKeyDown", (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            e2(this, "_handleMoveToPane", (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case eJ.yXg.ARROW_LEFT:
                            n === L.Ie.SIDEBAR &&
                                eR.S.dispatch(eJ.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eZ.Z.getChannelId() });
                            return;
                        case eJ.yXg.ARROW_RIGHT:
                            n === L.Ie.NORMAL &&
                                eR.S.dispatch(eJ.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: eO.ZP.getCurrentSidebarChannelId(r.id),
                                });
                    }
            }),
            e2(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, W.PG)(t, this.props.chatInputType);
            }),
            e2(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return j.__(P._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            e2(this, "handleChatInteract", () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            e2(this, "handleCommandSentinelTyped", () => {
                var e;
                null == (e = this.appIconAnimateRef.current) || e.animate();
            }),
            e2(this, "renderMessageBanner", (e) => {
                let {
                    channel: t,
                    showQuarantinedUserBanner: n,
                    guild: i,
                    communicationDisabledUntil: l,
                    showAutomodUserProfileChatBlocker: a,
                } = e;
                return t.type === eJ.d4z.DM && n
                    ? (0, r.jsx)(ed.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, r.jsx)(eh.Z, { channelId: t.id })
                      : null != l && (0, Y.J)(l) && null != i && !eI.Z.can(eJ.Plq.ADMINISTRATOR, i)
                        ? (0, r.jsx)(X.T, {
                              guild: i,
                              disabledUntil: l,
                          })
                        : a
                          ? (0, r.jsx)(q.h, { guild: i })
                          : null;
            }),
            e2(this, "renderAppLauncherButton", () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(eH.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t,
                });
            }),
            e2(this, "renderAppCommandButton", () => {
                let {
                    showAppDMsUI: e,
                    isFailedAppDMLoad: t,
                    channel: n,
                    entryPointCommandButtonRef: i,
                    chatInputType: l,
                } = this.props;
                return e && !t
                    ? (0, r.jsx)("div", {
                          className: e0.entryPointButtonContainer,
                          children: (0, r.jsx)(ez.ZP, {
                              context: {
                                  channel: n,
                                  type: "channel",
                              },
                              entryPointCommandButtonRef: i,
                              type: l,
                          }),
                      })
                    : null;
            });
    }
}
let tt = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: a } = e,
        { placeholder: o, accessibilityLabel: s } = (0, eV.Z)({ channel: t }),
        c = (0, ed.S)(eN.default.getCurrentUser(), t),
        [u] = (0, K.AB)(null == n ? void 0 : n.id),
        f = (0, z.Ux)(null == n ? void 0 : n.id),
        h = (0, d.e7)([eN.default], () => eN.default.getCurrentUser()),
        m = (0, d.e7)([eS.ZP], () => {
            var e, t, r;
            return (
                null != h &&
                null !=
                    (r =
                        null ==
                        (e = eS.ZP.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : eJ.lds,
                            null == h ? void 0 : h.id,
                        ))
                            ? void 0
                            : e.isPending) &&
                r
            );
        }),
        g = (0, d.e7)([eo.Z], () => eo.Z.isEnabled()),
        _ = (0, eu.Z)(t.id),
        y = (0, J.Z)(t.id),
        v = (0, I.R)({
            channel: t,
            chatInputType: l,
        }),
        j = (0, E.Z)(t),
        P = (0, eg.k)(t.id),
        {
            isInitialLoading: Z,
            primaryEntryPointCommand: T,
            isProfileFetching: N,
            wasProfileFetching: A,
            applicationId: w,
            channelId: M,
            commands: R,
        } = (0, O.Z)({
            context: {
                channel: t,
                type: "channel",
            },
        });
    (0, x.Z)({
        isProfileFetching: N,
        wasProfileFetching: A,
        applicationId: w,
        channelId: M,
        commands: R,
    });
    let D = i.useRef(null),
        L = (0, d.e7)([S.Z], () => S.Z.appDMChannelsWithFailedLoads().has(t.id)),
        k = (0, d.e7)([eZ.Z], () => eZ.Z.getVoiceChannelId()),
        U = (0, d.e7)([ex.Z], () => ex.Z.getChannel(k)),
        B = (0, d.e7)([eN.default], () => (t.type !== eJ.d4z.DM ? null : eN.default.getUser(t.getRecipientId()))),
        F = (0, d.e7)([es.ZP, ev.default], () => es.ZP.getUserCombo(ev.default.getId(), t.id)),
        V = (0, b.iD)(t),
        H = (0, b.d7)(t),
        W = V.length > 0 || t.rateLimitPerUser > 0 || null != F || null != H,
        { showLinkedLobbyApplicationLoadingIndicator: q } = (0, eF.Z)(t.linkedLobby),
        Y = (0, G.Z)("ChannelChat");
    return (0, r.jsx)(te, {
        channel: t,
        isEditing: null != (0, d.e7)([ej.Z], () => ej.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([C.Z], () => C.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([ef.Z], () => ef.Z.getPendingReply(t.id)),
        chatInputType: l,
        placeholder: o,
        accessibilityLabel: s,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: u,
        shakeIntensity: _,
        poggermodeEnabled: g,
        isSelectedResourceChannel: y,
        showAutomodUserProfileChatBlocker: f && !m,
        showAppLauncherButton: v,
        showAppDMsUI: j,
        isInitialLoading: Z,
        showEntryPointAppCommandButton: null != T,
        entryPointCommandButtonRef: D,
        isFailedAppDMLoad: L,
        pendingScheduledMessage: P,
        recipientUser: B,
        voiceChannel: U,
        messagesTypingGradient: W,
        showLinkedLobbyApplicationLoadingIndicator: q,
        announcementComposerEnabled: Y,
    });
});
