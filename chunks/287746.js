n.d(t, { Z: () => ts }), n(388685), n(35282), n(781311), n(997841);
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
    O = n(367907),
    j = n(450936),
    E = n(993766),
    S = n(989573),
    I = n(499254),
    P = n(541099),
    Z = n(827498),
    T = n(533379),
    N = n(555573),
    A = n(456007),
    w = n(10718),
    R = n(998698),
    M = n(895924),
    D = n(581364),
    L = n(667204),
    k = n(104919),
    U = n(541716),
    B = n(752305),
    G = n(190210),
    F = n(516887),
    H = n(974251),
    V = n(893718),
    z = n(436660),
    W = n(338390),
    Y = n(680835),
    q = n(436952),
    K = n(131565),
    X = n(355888),
    Q = n(680783),
    J = n(168551),
    $ = n(28546),
    ee = n(295474),
    et = n(521476),
    en = n(69882),
    er = n(71619),
    ei = n(185145),
    el = n(736052),
    ea = n(146128),
    eo = n(549006),
    es = n(58873),
    ec = n(925975),
    eu = n(957730),
    ed = n(48854),
    ep = n(400023),
    eh = n(64078),
    ef = n(351780),
    em = n(843693),
    eg = n(217871),
    eb = n(139577),
    e_ = n(247944),
    ey = n(623292),
    eC = n(807092),
    ex = n(773359),
    ev = n(45251),
    eO = n(705533),
    ej = n(618857),
    eE = n(268350),
    eS = n(155409),
    eI = n(163612),
    eP = n(314897),
    eZ = n(433355),
    eT = n(592125),
    eN = n(703558),
    eA = n(323873),
    ew = n(271383),
    eR = n(375954),
    eM = n(496675),
    eD = n(944486),
    eL = n(117530),
    ek = n(594174),
    eU = n(626135),
    eB = n(934415),
    eG = n(459273),
    eF = n(585483),
    eH = n(630388),
    eV = n(709054),
    ez = n(838440),
    eW = n(127654),
    eY = n(979956),
    eq = n(413251),
    eK = n(655687),
    eX = n(165540),
    eQ = n(583027),
    eJ = n(25007),
    e$ = n(685006),
    e0 = n(685722),
    e1 = n(199649),
    e2 = n(1397),
    e8 = n(641861),
    e3 = n(981631),
    e4 = n(959517),
    e7 = n(388032),
    e6 = n(97009),
    e5 = n(180376);
function e9(e, t, n) {
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
function te(e) {
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
                e9(e, t, n[t]);
            });
    }
    return e;
}
function tt(e, t) {
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
function tn(e) {
    e.preventDefault();
}
let tr = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function ti(e) {
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
    return t ? (0, r.jsx)("section", tt(te({}, n), { role: "complementary" })) : (0, r.jsx)("main", te({}, n));
}
let tl = i.forwardRef((e, t) => (0, r.jsx)(ta, tt(te({}, e), { ref: t })));
tl.displayName = "ChannelTextAreaForm";
class ta extends i.PureComponent {
    focusEditor() {
        var e;
        null == (e = this.editorRef) || e.focus();
    }
    componentDidMount() {
        eN.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eN.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eN.Z.getDraft(n.id, eN.d.ChannelMessage);
            e !== r && this.setState((0, B.eK)(e));
        }
        t.textValue.length < e3.J6R && r.length >= e3.J6R && eU.default.track(e3.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessageRecord(t.id, e), O.ZP.trackWithMetadata(e3.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: r } = (0, D.XA)(e.interactionData),
            { command: i, application: l } = w.Xq(
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
                          type: M.Qi.APPLICATION,
                          id: l.id,
                          icon: l.icon,
                          name: null != (o = null == l || null == (a = l.bot) ? void 0 : a.username) ? o : l.name,
                          application: l,
                      }
                    : null;
            N.Po({
                channelId: t.id,
                command: i,
                section: e,
                location: M.Vh.RECALL,
                initialValues: (0, A.Dw)(i, null != r ? r : []),
                commandOrigin: M.bB.CHAT,
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
                shakeIntensity: h,
                poggermodeEnabled: f,
                onCommandSentinelTyped: m,
                renderAppLauncherButton: g,
                renderAppCommandButton: b,
                pendingScheduledMessage: _,
                announcementComposerEnabled: C,
            } = this.props,
            { contentWarningProps: x } = this.state,
            v =
                e.type === e3.d4z.GUILD_ANNOUNCEMENT && C
                    ? (0, r.jsx)(G.Z, {
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e6.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: o,
                          type: U.Ie.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: l,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderAppLauncherButton: g,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eW.d5,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, r.jsx)(V.ZP, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e6.channelTextArea,
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
                          promptToUpload: eW.d5,
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
                null == x || null == (e = x.onCancel) || e.call(x), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != x,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    s()(null != x, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, r.jsx)(y.Z, te({ onClose: t }, x))
                );
            },
            children: () =>
                f
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
                          className: e6.shaker,
                          children: v,
                      })
                    : v,
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            e9(this, "isFirstChange", !0),
            e9(this, "editorRef", null),
            e9(
                this,
                "state",
                tt(te({}, (0, B.eK)(eN.Z.getDraft(this.props.channel.id, eN.d.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            e9(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eN.Z.getDraft(e.channel.id, eN.d.ChannelMessage);
                n !== r &&
                    ("" === r || "" === n) &&
                    t.setState((0, B.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            e9(this, "handleKeyDown", (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case e3.yXg.DELETE:
                    case e3.yXg.BACKSPACE:
                        return void this.handleIncrementCombo("", 1);
                    case e3.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t))
                            eL.Z.getUploadCount(r.id, eN.d.ChannelMessage) > 0
                                ? eF.S.dispatchToLastSubscribed(e3.CkL.FOCUS_ATTACHMENT_AREA)
                                : eF.S.dispatchToLastSubscribed(e3.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eR.Z.getLastChatCommandMessage(e.id),
                                n = eR.Z.getLastEditableMessage(e.id);
                            null != t && null != n
                                ? eV.default.compare(n.id, t.id) > 0
                                    ? this.handleEditLastMessage(n)
                                    : this.handleRecallLastCommand(t)
                                : null != t
                                  ? this.handleRecallLastCommand(t)
                                  : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case e3.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, x.rf)();
                        if (eL.Z.getUploadCount(r.id, eN.d.ChannelMessage) > 0)
                            return void g.Z.clearAll(r.id, eN.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            e9(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = eP.default.getId(),
                    l = em.ZP.getUserCombo(i, r),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, eh.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : a,
                    multiplier: t,
                });
            }),
            e9(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i },
                } = this.props;
                h.Z.changeDraft(i, t, eN.d.ChannelMessage);
                let l = "" !== t && n !== this.state.richValue,
                    a = l && !tr.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? m.Z.startTyping(i) : "" === t && m.Z.stopTyping(i),
                    l && r && (0, x.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            e9(this, "handleSendMessage", async (e) => {
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
                    if (l.inputType === M.iw.BUILT_IN_INTEGRATION)
                        return (
                            eF.S.dispatch(e3.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2,
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            })
                        );
                    let e = R.Z.getCommandOrigin(d.id);
                    if (null == e || e === M.bB.CHAT) {
                        let { isAuthorized: e } = await (0, k.L)({
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
                        e === M.bB.APPLICATION_LAUNCHER ||
                        e === M.bB.IMAGE_RECS_MENU ||
                        e === M.bB.IMAGE_RECS_SUBMENU
                    ) {
                        var _;
                        let { location: t, sectionName: n } = null != (_ = (0, eQ._U)(l)) ? _ : {},
                            r = e === M.bB.APPLICATION_LAUNCHER ? P.Z.lastShownEntrypoint() : Z._b.TEXT,
                            { isAuthorized: i } = await (0, k.L)({
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
                        (0, eQ.SC)(l);
                    }
                    let n = await (0, L.Z)({
                        command: l,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: u,
                            channel: d,
                        },
                    });
                    if (l.inputType !== M.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0,
                        });
                    null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (b = !0 === n.tts));
                }
                return (0, ez.v)({
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
                        if (C === e3.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eF.S.dispatch(e3.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2,
                                }),
                                eF.S.dispatch(e3.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let x = (0, ec.g)(t, {
                        channel: d,
                        isEdit: !1,
                    });
                    null != x && (null != x.content && (t = x.content), null != x.tts && (b = x.tts));
                    let v = eu.ZP.parse(d, t);
                    (v.tts = v.tts || b), null != s && ((v.content = ""), (v.components = s));
                    let O = tt(
                        te(
                            {},
                            f.Z.getSendMessageOptions({
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
                        { location: e4.dy.CHAT_INPUT },
                    );
                    if (
                        (null != c && (O.announcementSendOptions = c),
                        null != s && (O.flags = (0, eH.pj)(null != (_ = O.flags) ? _ : 0, e3.iLy.IS_COMPONENTS_V2)),
                        o)
                    )
                        return (
                            f.Z.sendMessage(d.id, v, void 0, O),
                            (0, ey.A6)(d.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eY.KZ)(n);
                        if ((0, eY.Bf)(e, null == u ? void 0 : u.id))
                            return (
                                (0, eW.G)(d, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (O.eagerDispatch = !1),
                            (O.attachmentsToUpload = n),
                            (O.onAttachmentUploadError = (e, r, i) => {
                                (0, es.A)({
                                    file: e,
                                    guildId: d.getGuildId(),
                                    analyticsLocations: [],
                                    code: r,
                                    reason: i,
                                }) &&
                                    ("" !== t &&
                                        "" === eN.Z.getDraft(d.id, eN.d.ChannelMessage) &&
                                        h.Z.saveDraft(d.id, t, eN.d.ChannelMessage),
                                    0 === eL.Z.getUploadCount(d.id, eN.d.ChannelMessage) &&
                                        g.Z.setUploads({
                                            channelId: d.id,
                                            uploads: n,
                                            draftType: eN.d.ChannelMessage,
                                        }));
                            }),
                            g.Z.clearAll(d.id, eN.d.ChannelMessage);
                    }
                    if (null != O.scheduledTimestamp)
                        try {
                            await (0, ev.PV)({
                                channelId: d.id,
                                scheduledTimestamp: O.scheduledTimestamp,
                                messageSendData: {
                                    channelId: d.id,
                                    content: t,
                                    nonce: (0, ed.r)(),
                                    tts: b,
                                    message_reference: O.messageReference,
                                    allowed_mentions: O.allowedMentions,
                                    flags: O.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, ej.Hw)(O.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, ej.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        }
                    else f.Z.sendMessage(d.id, v, void 0, O);
                    return (
                        this.setState((0, B.H2)()),
                        (0, ey.A6)(d.id),
                        (0, eE.qB)(d.id, m.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0,
                        }
                    );
                });
            }),
            e9(this, "handleSetValue", (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (z.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            e9(this, "renderAttachButton", (e, t) =>
                (0, r.jsx)(H.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eN.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                }),
            ),
            e9(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, r.jsx)(F.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class to extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused:
                      null != n && n.type !== e3.d4z.GUILD_ANNOUNCEMENT && !c.tq && eM.Z.can(e3.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    componentDidMount() {
        eF.S.subscribe(e3.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eF.S.unsubscribe(e3.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e, t;
        let n,
            {
                channel: i,
                guild: l,
                keyboardModeEnabled: o,
                hasModalOpen: s,
                pendingReply: c,
                chatInputType: d,
                placeholder: h,
                accessibilityLabel: f,
                showQuarantinedUserBanner: m,
                filterAfterTimestamp: g,
                communicationDisabledUntil: y,
                shakeIntensity: C,
                poggermodeEnabled: x,
                isSelectedResourceChannel: v,
                showAutomodUserProfileChatBlocker: O,
                showAppLauncherButton: j,
                showAppDMsUI: E,
                isInitialLoading: S,
                pendingScheduledMessage: I,
                recipientUser: P,
                voiceChannel: Z,
                theme: T,
                chatWallpaperState: N,
                wallpaperColorMix: A,
                messagesTypingGradient: w,
                isChatInputBottomAligned: R,
                showLinkedLobbyApplicationLoadingIndicator: M,
                announcementComposerEnabled: D,
            } = this.props,
            { textAreaFocused: L, textAreaHighlighted: k } = this.state,
            B = d === U.Ie.SIDEBAR;
        n =
            B && i.type === e3.d4z.GUILD_VOICE
                ? e7.t.pnnyFR
                : B && i.type === e3.d4z.GUILD_STAGE_VOICE
                  ? e7.t.YInSkp
                  : u.T.THREADS.has(i.type)
                    ? e7.t["OkzL+f"]
                    : e7.t.UbNmGR;
        let G = (0, r.jsx)("div", {
                className: e6.channelBottomBarArea,
                children: (0, r.jsx)(e0.Z, {}),
            }),
            F = (0, r.jsxs)("div", {
                className: e6.channelBottomBarArea,
                children: [
                    (0, r.jsx)(eS.Z, {
                        childRef: this.containerDomRef,
                        tutorialId: "writing-messages",
                        position: "left",
                        offsetX: 75,
                        children: (0, r.jsx)(tl, {
                            ref: this.refToChannelTextAreaFormComponent,
                            refInstance: this.containerDomRef,
                            focused: L,
                            highlighted: k,
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
                            pendingScheduledMessage: I,
                            announcementComposerEnabled: D,
                        }),
                    }),
                    this.renderAppCommandButton(),
                ],
            }),
            H = (E && S) || M,
            V = H ? G : F,
            z = a()({
                [e5.barWithAppLauncherButton]: j,
                [e5.barWithAppsDMsUI]: E,
            }),
            { enabled: W } = eI.Z.getCurrentConfig({
                guildId: null == Z ? void 0 : Z.guild_id,
                location: "ChannelChat",
            }),
            Y = q.qM.getCurrentConfig({ location: "ChannelChat" }).enabled,
            X = W && null != P && null != Z && null != Z.guild_id;
        return (0, r.jsx)(
            _.Z,
            {
                page: (0, eB.mE)(this.props.channel),
                children: (0, r.jsx)(eo.sW, {
                    children: (0, r.jsx)(ea.BV, {
                        children: (0, r.jsxs)(eG.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eG.d9, {
                                    event: e3.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, r.jsx)(eG.d9, {
                                    event: e3.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, r.jsx)(eG.d9, {
                                    event: e3.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, r.jsx)(eG.d9, {
                                    event: e3.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, r.jsxs)(ti, {
                                    isSidebar: B,
                                    className: a()(e6.chatContent, {
                                        [e6.hasWallpaper]: null == N ? void 0 : N.isViewable,
                                        [J.e3]: Y ? (null == N ? void 0 : N.isViewable) : void 0,
                                        [null != (e = (0, p.QeD)(T)) ? e : ""]: Y
                                            ? null == N
                                                ? void 0
                                                : N.isViewable
                                            : void 0,
                                    }),
                                    "aria-label": e7.intl.formatToPlainString(n, { channelName: i.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: null != A ? A : {},
                                    children: [
                                        (0, r.jsx)(K.Z, { channel: i }),
                                        X &&
                                            (0, r.jsx)(e8.Z, {
                                                recipientUser: P,
                                                voiceChannel: Z,
                                            }),
                                        (0, r.jsx)(eJ.Z, {
                                            channel: i,
                                            guild: l,
                                            narrow: B,
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, {
                                                children: (0, r.jsx)(p.H, {
                                                    children: e7.intl.format(e7.t.eTzKk5, { channelName: i.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, r.jsx)(ep.Z, {
                                                    channel: i,
                                                    forceCozy: v,
                                                    filterAfterTimestamp: g,
                                                    showingQuarantineBanner: m,
                                                    jumpBarClassName: z,
                                                    typingGradient: w,
                                                    isChatInputBottomAligned: R,
                                                }),
                                                v
                                                    ? null
                                                    : null !=
                                                        (t = this.renderMessageBanner({
                                                            channel: i,
                                                            showQuarantinedUserBanner: m,
                                                            guild: l,
                                                            communicationDisabledUntil: y,
                                                            showAutomodUserProfileChatBlocker: O,
                                                        }))
                                                      ? t
                                                      : (0, r.jsxs)("form", {
                                                            ref: this.inputFormRef,
                                                            onSubmit: tn,
                                                            className: a()(e6.form, {
                                                                [e6.formWithLoadedChatInput]: !H,
                                                            }),
                                                            children: [
                                                                x && (0, r.jsx)(eg.Z, { channelId: i.id }),
                                                                i.isPrivate()
                                                                    ? (0, r.jsx)(e1.Z, {
                                                                          channel: i,
                                                                          children: V,
                                                                      })
                                                                    : (0, r.jsx)(e2.Z, {
                                                                          channel: i,
                                                                          children: V,
                                                                      }),
                                                                (0, r.jsx)(b.ZP, {
                                                                    channel: i,
                                                                    poggermodeEnabled: x,
                                                                    isInTextChannel: !0,
                                                                }),
                                                            ],
                                                        }),
                                                (0, r.jsx)(eo.kw, {}),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            },
            "messages-".concat(i.id),
        );
    }
    constructor(...e) {
        super(...e),
            e9(this, "containerDomRef", i.createRef()),
            e9(this, "refToChannelTextAreaFormComponent", i.createRef()),
            e9(this, "inputFormRef", i.createRef()),
            e9(this, "state", {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id,
            }),
            e9(this, "dispatchGroupRef", i.createRef()),
            e9(this, "appIconAnimateRef", i.createRef()),
            e9(this, "handleRequestFocus", (e) => {
                if (e.channelId === this.props.channel.id)
                    if (this.state.textAreaFocused) {
                        var t;
                        null == (t = this.refToChannelTextAreaFormComponent.current) || t.focusEditor();
                    } else this.setState({ textAreaFocused: !0 });
            }),
            e9(this, "handleInputFocus", (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight,
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            e9(this, "handleInputBlur", () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1,
                    });
            }),
            e9(this, "handleInputKeyDown", (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }),
                    t || this._handleMoveToPane(e);
            }),
            e9(this, "handleKeyDown", (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            e9(this, "_handleMoveToPane", (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case e3.yXg.ARROW_LEFT:
                            n === U.Ie.SIDEBAR &&
                                eF.S.dispatch(e3.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eD.Z.getChannelId() });
                            return;
                        case e3.yXg.ARROW_RIGHT:
                            n === U.Ie.NORMAL &&
                                eF.S.dispatch(e3.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: eZ.ZP.getCurrentSidebarChannelId(r.id),
                                });
                    }
            }),
            e9(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, $.PG)(t, this.props.chatInputType);
            }),
            e9(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return I.__(Z._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            e9(this, "handleChatInteract", () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            e9(this, "handleCommandSentinelTyped", () => {
                var e;
                null == (e = this.appIconAnimateRef.current) || e.animate();
            }),
            e9(this, "renderMessageBanner", (e) => {
                let {
                    channel: t,
                    showQuarantinedUserBanner: n,
                    guild: i,
                    communicationDisabledUntil: l,
                    showAutomodUserProfileChatBlocker: a,
                } = e;
                return t.type === e3.d4z.DM && n
                    ? (0, r.jsx)(e_.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, r.jsx)(ex.Z, { channelId: t.id })
                      : null != l && (0, en.J)(l) && null != i && !eM.Z.can(e3.Plq.ADMINISTRATOR, i)
                        ? (0, r.jsx)(ei.T, {
                              guild: i,
                              disabledUntil: l,
                          })
                        : a
                          ? (0, r.jsx)(et.h, { guild: i })
                          : null;
            }),
            e9(this, "renderAppLauncherButton", () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(eX.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t,
                });
            }),
            e9(this, "renderAppCommandButton", () => {
                let {
                    showAppDMsUI: e,
                    isFailedAppDMLoad: t,
                    channel: n,
                    entryPointCommandButtonRef: i,
                    chatInputType: l,
                } = this.props;
                return e && !t
                    ? (0, r.jsx)("div", {
                          className: e6.entryPointButtonContainer,
                          children: (0, r.jsx)(e$.ZP, {
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
let ts = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: a } = e,
        { placeholder: o, accessibilityLabel: s } = (0, eK.Z)({ channel: t }),
        c = (0, e_.S)(ek.default.getCurrentUser(), t),
        [u] = (0, er.AB)(null == n ? void 0 : n.id),
        h = (0, ee.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([ek.default], () => ek.default.getCurrentUser()),
        m = (0, d.e7)([ew.ZP], () => {
            var e, t, r;
            return (
                null != f &&
                null !=
                    (r =
                        null ==
                        (e = ew.ZP.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : e3.lds,
                            null == f ? void 0 : f.id,
                        ))
                            ? void 0
                            : e.isPending) &&
                r
            );
        }),
        g = (0, d.e7)([ef.Z], () => ef.Z.isEnabled()),
        _ = (0, eb.Z)(t.id),
        y = (0, el.Z)(t.id),
        x = (0, T.R)({
            channel: t,
            chatInputType: l,
        }),
        O = (0, S.Z)(t),
        I = (0, eO.k)(t.id),
        Z = (0, C.ZP)(),
        N = (0, Q.Z)(t.id),
        A = (0, X.Z)(null == N ? void 0 : N.wallpaperId),
        {
            isInitialLoading: w,
            primaryEntryPointCommand: R,
            isProfileFetching: M,
            wasProfileFetching: D,
            applicationId: L,
            channelId: k,
            commands: U,
        } = (0, j.Z)({
            context: {
                channel: t,
                type: "channel",
            },
        });
    (0, E.Z)({
        isProfileFetching: M,
        wasProfileFetching: D,
        applicationId: L,
        channelId: k,
        commands: U,
    });
    let B = i.useRef(null),
        G = (0, d.e7)([P.Z], () => P.Z.appDMChannelsWithFailedLoads().has(t.id)),
        F = (0, d.e7)([eD.Z], () => eD.Z.getVoiceChannelId()),
        H = (0, d.e7)([eT.Z], () => eT.Z.getChannel(F)),
        V = (0, d.e7)([ek.default], () => (t.type !== e3.d4z.DM ? null : ek.default.getUser(t.getRecipientId()))),
        z = (0, d.e7)([em.ZP, eP.default], () => em.ZP.getUserCombo(eP.default.getId(), t.id)),
        q = (0, b.iD)(t),
        K = (0, b.d7)(t),
        J = q.length > 0 || t.rateLimitPerUser > 0 || null != z || null != K,
        $ = (0, W.Z)("ChannelChat"),
        { showLinkedLobbyApplicationLoadingIndicator: et } = (0, eq.Z)(t.linkedLobby),
        en = (0, Y.Z)("ChannelChat");
    return (0, r.jsx)(to, {
        channel: t,
        isEditing: null != (0, d.e7)([eA.Z], () => eA.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([eC.Z], () => eC.Z.getPendingReply(t.id)),
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
        showAppDMsUI: O,
        isInitialLoading: w,
        showEntryPointAppCommandButton: null != R,
        entryPointCommandButtonRef: B,
        isFailedAppDMLoad: G,
        pendingScheduledMessage: I,
        recipientUser: V,
        voiceChannel: H,
        theme: Z,
        chatWallpaperState: N,
        wallpaperColorMix: A,
        messagesTypingGradient: $ && J,
        isChatInputBottomAligned: $,
        showLinkedLobbyApplicationLoadingIndicator: et,
        announcementComposerEnabled: en,
    });
});
