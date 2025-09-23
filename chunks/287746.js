n.d(t, { Z: () => tn }), n(388685), n(35282), n(781311), n(997841);
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
    y = n(410575),
    C = n(744061),
    _ = n(857595),
    v = n(607070),
    x = n(367907),
    O = n(450936),
    j = n(993766),
    E = n(989573),
    S = n(499254),
    P = n(541099),
    I = n(827498),
    Z = n(533379),
    T = n(555573),
    N = n(456007),
    A = n(10718),
    w = n(998698),
    M = n(895924),
    R = n(581364),
    k = n(667204),
    L = n(104919),
    D = n(541716),
    U = n(752305),
    B = n(190210),
    F = n(516887),
    V = n(974251),
    H = n(893718),
    G = n(436660),
    z = n(338390),
    W = n(680835),
    q = n(28546),
    Y = n(295474),
    K = n(521476),
    X = n(69882),
    J = n(71619),
    Q = n(185145),
    $ = n(736052),
    ee = n(146128),
    et = n(549006),
    en = n(58873),
    er = n(925975),
    ei = n(957730),
    el = n(48854),
    ea = n(400023),
    eo = n(64078),
    es = n(351780),
    ec = n(843693),
    eu = n(217871),
    ed = n(139577),
    ep = n(247944),
    eh = n(623292),
    ef = n(807092),
    em = n(773359),
    eg = n(45251),
    eb = n(705533),
    ey = n(618857),
    eC = n(268350),
    e_ = n(155409),
    ev = n(163612),
    ex = n(314897),
    eO = n(433355),
    ej = n(592125),
    eE = n(703558),
    eS = n(323873),
    eP = n(271383),
    eI = n(375954),
    eZ = n(496675),
    eT = n(944486),
    eN = n(117530),
    eA = n(594174),
    ew = n(626135),
    eM = n(934415),
    eR = n(459273),
    ek = n(585483),
    eL = n(630388),
    eD = n(709054),
    eU = n(838440),
    eB = n(127654),
    eF = n(979956),
    eV = n(413251),
    eH = n(655687),
    eG = n(165540),
    ez = n(583027),
    eW = n(25007),
    eq = n(685006),
    eY = n(685722),
    eK = n(199649),
    eX = n(1397),
    eJ = n(641861),
    eQ = n(981631),
    e$ = n(959517),
    e0 = n(388032),
    e1 = n(161655),
    e2 = n(599610);
function e3(e, t, n) {
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
function e8(e) {
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
                e3(e, t, n[t]);
            });
    }
    return e;
}
function e4(e, t) {
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
function e7(e) {
    e.preventDefault();
}
let e6 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e5(e) {
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
    return t ? (0, r.jsx)("section", e4(e8({}, n), { role: "complementary" })) : (0, r.jsx)("main", e8({}, n));
}
let e9 = i.forwardRef((e, t) => (0, r.jsx)(te, e4(e8({}, e), { ref: t })));
e9.displayName = "ChannelTextAreaForm";
class te extends i.PureComponent {
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
            e !== r && this.setState((0, U.eK)(e));
        }
        t.textValue.length < eQ.J6R && r.length >= eQ.J6R && ew.default.track(eQ.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessageRecord(t.id, e), x.ZP.trackWithMetadata(eQ.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: r } = (0, R.XA)(e.interactionData),
            { command: i, application: l } = A.Xq(
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
            T.Po({
                channelId: t.id,
                command: i,
                section: e,
                location: M.Vh.RECALL,
                initialValues: (0, N.Dw)(i, null != r ? r : []),
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
                pendingScheduledMessage: y,
                announcementComposerEnabled: _,
            } = this.props,
            { contentWarningProps: v } = this.state,
            x =
                e.type === eQ.d4z.GUILD_ANNOUNCEMENT && _
                    ? (0, r.jsx)(B.Z, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e1.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: o,
                          type: D.Ie.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: l,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderAppLauncherButton: g,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eB.d5,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, r.jsx)(H.ZP, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e1.channelTextArea,
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
                          promptToUpload: eB.d5,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          onCommandSentinelTyped: m,
                          pendingScheduledMessage: y,
                      });
        return (0, r.jsx)(p.yRy, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                var e;
                null == v || null == (e = v.onCancel) || e.call(v), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != v,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    s()(null != v, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, r.jsx)(C.Z, e8({ onClose: t }, v))
                );
            },
            children: () =>
                f
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
                          className: e1.shaker,
                          children: x,
                      })
                    : x,
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            e3(this, "isFirstChange", !0),
            e3(this, "editorRef", null),
            e3(
                this,
                "state",
                e4(e8({}, (0, U.eK)(eE.Z.getDraft(this.props.channel.id, eE.d.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            e3(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eE.Z.getDraft(e.channel.id, eE.d.ChannelMessage);
                n !== r &&
                    ("" === r || "" === n) &&
                    t.setState((0, U.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            e3(this, "handleKeyDown", (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eQ.yXg.DELETE:
                    case eQ.yXg.BACKSPACE:
                        return void this.handleIncrementCombo("", 1);
                    case eQ.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t))
                            eN.Z.getUploadCount(r.id, eE.d.ChannelMessage) > 0
                                ? ek.S.dispatchToLastSubscribed(eQ.CkL.FOCUS_ATTACHMENT_AREA)
                                : ek.S.dispatchToLastSubscribed(eQ.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eI.Z.getLastChatCommandMessage(e.id),
                                n = eI.Z.getLastEditableMessage(e.id);
                            null != t && null != n
                                ? eD.default.compare(n.id, t.id) > 0
                                    ? this.handleEditLastMessage(n)
                                    : this.handleRecallLastCommand(t)
                                : null != t
                                  ? this.handleRecallLastCommand(t)
                                  : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eQ.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, _.rf)();
                        if (eN.Z.getUploadCount(r.id, eE.d.ChannelMessage) > 0)
                            return void g.Z.clearAll(r.id, eE.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            e3(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = ex.default.getId(),
                    l = ec.ZP.getUserCombo(i, r),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, eo.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : a,
                    multiplier: t,
                });
            }),
            e3(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i },
                } = this.props;
                h.Z.changeDraft(i, t, eE.d.ChannelMessage);
                let l = "" !== t && n !== this.state.richValue,
                    a = l && !e6.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? m.Z.startTyping(i) : "" === t && m.Z.stopTyping(i),
                    l && r && (0, _.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            e3(this, "handleSendMessage", async (e) => {
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
                            ek.S.dispatch(eQ.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2,
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            })
                        );
                    let e = w.Z.getCommandOrigin(d.id);
                    if (null == e || e === M.bB.CHAT) {
                        let { isAuthorized: e } = await (0, L.L)({
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
                        var y;
                        let { location: t, sectionName: n } = null != (y = (0, ez._U)(l)) ? y : {},
                            r = e === M.bB.APPLICATION_LAUNCHER ? P.Z.lastShownEntrypoint() : I._b.TEXT,
                            { isAuthorized: i } = await (0, L.L)({
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
                        (0, ez.SC)(l);
                    }
                    let n = await (0, k.Z)({
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
                return (0, eU.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: r,
                    uploads: n,
                    channel: d,
                }).then(async (e) => {
                    var a, y;
                    let { valid: C, failureReason: _ } = e;
                    if (!C)
                        if (_ === eQ.zYc.SLOWMODE_COOLDOWN)
                            return (
                                ek.S.dispatch(eQ.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2,
                                }),
                                ek.S.dispatch(eQ.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let v = (0, er.g)(t, {
                        channel: d,
                        isEdit: !1,
                    });
                    null != v && (null != v.content && (t = v.content), null != v.tts && (b = v.tts));
                    let x = ei.ZP.parse(d, t);
                    (x.tts = x.tts || b), null != s && ((x.content = ""), (x.components = s));
                    let O = e4(
                        e8(
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
                        { location: e$.dy.CHAT_INPUT },
                    );
                    if (
                        (null != c && (O.announcementSendOptions = c),
                        null != s && (O.flags = (0, eL.pj)(null != (y = O.flags) ? y : 0, eQ.iLy.IS_COMPONENTS_V2)),
                        o)
                    )
                        return (
                            f.Z.sendMessage(d.id, x, void 0, O),
                            (0, eh.A6)(d.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eF.KZ)(n);
                        if ((0, eF.Bf)(e, null == u ? void 0 : u.id))
                            return (
                                (0, eB.G)(d, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (O.eagerDispatch = !1),
                            (O.attachmentsToUpload = n),
                            (O.onAttachmentUploadError = (e, r, i) => {
                                (0, en.A)({
                                    file: e,
                                    guildId: d.getGuildId(),
                                    analyticsLocations: [],
                                    code: r,
                                    reason: i,
                                }) &&
                                    ("" !== t &&
                                        "" === eE.Z.getDraft(d.id, eE.d.ChannelMessage) &&
                                        h.Z.saveDraft(d.id, t, eE.d.ChannelMessage),
                                    0 === eN.Z.getUploadCount(d.id, eE.d.ChannelMessage) &&
                                        g.Z.setUploads({
                                            channelId: d.id,
                                            uploads: n,
                                            draftType: eE.d.ChannelMessage,
                                        }));
                            }),
                            g.Z.clearAll(d.id, eE.d.ChannelMessage);
                    }
                    if (null != O.scheduledTimestamp)
                        try {
                            await (0, eg.PV)({
                                channelId: d.id,
                                scheduledTimestamp: O.scheduledTimestamp,
                                messageSendData: {
                                    channelId: d.id,
                                    content: t,
                                    nonce: (0, el.r)(),
                                    tts: b,
                                    message_reference: O.messageReference,
                                    allowed_mentions: O.allowedMentions,
                                    flags: O.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, ey.Hw)(O.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, ey.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        }
                    else f.Z.sendMessage(d.id, x, void 0, O);
                    return (
                        this.setState((0, U.H2)()),
                        (0, eh.A6)(d.id),
                        (0, eC.qB)(d.id, m.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0,
                        }
                    );
                });
            }),
            e3(this, "handleSetValue", (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (G.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            e3(this, "renderAttachButton", (e, t) =>
                (0, r.jsx)(V.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eE.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                }),
            ),
            e3(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, r.jsx)(F.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class tt extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused:
                      null != n && n.type !== eQ.d4z.GUILD_ANNOUNCEMENT && !c.tq && eZ.Z.can(eQ.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    componentDidMount() {
        ek.S.subscribe(eQ.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        ek.S.unsubscribe(eQ.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                accessibilityLabel: h,
                showQuarantinedUserBanner: f,
                filterAfterTimestamp: m,
                communicationDisabledUntil: g,
                shakeIntensity: C,
                poggermodeEnabled: _,
                isSelectedResourceChannel: v,
                showAutomodUserProfileChatBlocker: x,
                showAppLauncherButton: O,
                showAppDMsUI: j,
                isInitialLoading: E,
                pendingScheduledMessage: S,
                recipientUser: P,
                voiceChannel: I,
                messagesTypingGradient: Z,
                isChatInputBottomAligned: T,
                showLinkedLobbyApplicationLoadingIndicator: N,
                announcementComposerEnabled: A,
            } = this.props,
            { textAreaFocused: w, textAreaHighlighted: M } = this.state,
            R = c === D.Ie.SIDEBAR;
        t =
            R && n.type === eQ.d4z.GUILD_VOICE
                ? e0.t.pnnyFR
                : R && n.type === eQ.d4z.GUILD_STAGE_VOICE
                  ? e0.t.YInSkp
                  : u.T.THREADS.has(n.type)
                    ? e0.t["OkzL+f"]
                    : e0.t.UbNmGR;
        let k = (0, r.jsx)("div", {
                className: e1.channelBottomBarArea,
                children: (0, r.jsx)(eY.Z, {}),
            }),
            L = (0, r.jsxs)("div", {
                className: e1.channelBottomBarArea,
                children: [
                    (0, r.jsx)(e_.Z, {
                        childRef: this.containerDomRef,
                        tutorialId: "writing-messages",
                        position: "left",
                        offsetX: 75,
                        children: (0, r.jsx)(e9, {
                            ref: this.refToChannelTextAreaFormComponent,
                            refInstance: this.containerDomRef,
                            focused: w,
                            highlighted: M,
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
                            accessibilityLabel: h,
                            shakeIntensity: C,
                            poggermodeEnabled: _,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped,
                            renderAppLauncherButton: this.renderAppLauncherButton,
                            renderAppCommandButton: this.renderAppCommandButton,
                            pendingScheduledMessage: S,
                            announcementComposerEnabled: A,
                        }),
                    }),
                    this.renderAppCommandButton(),
                ],
            }),
            U = (j && E) || N,
            B = U ? k : L,
            F = a()({
                [e2.barWithAppLauncherButton]: O,
                [e2.barWithAppsDMsUI]: j,
            }),
            { enabled: V } = ev.Z.getCurrentConfig({
                guildId: null == I ? void 0 : I.guild_id,
                location: "ChannelChat",
            }),
            H = V && null != P && null != I && null != I.guild_id;
        return (0, r.jsx)(
            y.Z,
            {
                page: (0, eM.mE)(this.props.channel),
                children: (0, r.jsx)(et.sW, {
                    children: (0, r.jsx)(ee.BV, {
                        children: (0, r.jsxs)(eR.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eR.d9, {
                                    event: eQ.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, r.jsx)(eR.d9, {
                                    event: eQ.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, r.jsx)(eR.d9, {
                                    event: eQ.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, r.jsx)(eR.d9, {
                                    event: eQ.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, r.jsxs)(e5, {
                                    isSidebar: R,
                                    className: e1.chatContent,
                                    "aria-label": e0.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        H &&
                                            (0, r.jsx)(eJ.Z, {
                                                recipientUser: P,
                                                voiceChannel: I,
                                            }),
                                        (0, r.jsx)(eW.Z, {
                                            channel: n,
                                            guild: i,
                                            narrow: R,
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, {
                                                children: (0, r.jsx)(p.H, {
                                                    children: e0.intl.format(e0.t.eTzKk5, { channelName: n.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, r.jsx)(ea.Z, {
                                                    channel: n,
                                                    forceCozy: v,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: f,
                                                    jumpBarClassName: F,
                                                    typingGradient: Z,
                                                    isChatInputBottomAligned: T,
                                                }),
                                                v
                                                    ? null
                                                    : null !=
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: f,
                                                            guild: i,
                                                            communicationDisabledUntil: g,
                                                            showAutomodUserProfileChatBlocker: x,
                                                        }))
                                                      ? e
                                                      : (0, r.jsxs)("form", {
                                                            ref: this.inputFormRef,
                                                            onSubmit: e7,
                                                            className: a()(e1.form, {
                                                                [e1.formWithLoadedChatInput]: !U,
                                                            }),
                                                            children: [
                                                                _ && (0, r.jsx)(eu.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, r.jsx)(eK.Z, {
                                                                          channel: n,
                                                                          children: B,
                                                                      })
                                                                    : (0, r.jsx)(eX.Z, {
                                                                          channel: n,
                                                                          children: B,
                                                                      }),
                                                                (0, r.jsx)(b.ZP, {
                                                                    channel: n,
                                                                    poggermodeEnabled: _,
                                                                    isInTextChannel: !0,
                                                                }),
                                                            ],
                                                        }),
                                                (0, r.jsx)(et.kw, {}),
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
            e3(this, "containerDomRef", i.createRef()),
            e3(this, "refToChannelTextAreaFormComponent", i.createRef()),
            e3(this, "inputFormRef", i.createRef()),
            e3(this, "state", {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id,
            }),
            e3(this, "dispatchGroupRef", i.createRef()),
            e3(this, "appIconAnimateRef", i.createRef()),
            e3(this, "handleRequestFocus", (e) => {
                if (e.channelId === this.props.channel.id)
                    if (this.state.textAreaFocused) {
                        var t;
                        null == (t = this.refToChannelTextAreaFormComponent.current) || t.focusEditor();
                    } else this.setState({ textAreaFocused: !0 });
            }),
            e3(this, "handleInputFocus", (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight,
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            e3(this, "handleInputBlur", () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1,
                    });
            }),
            e3(this, "handleInputKeyDown", (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }),
                    t || this._handleMoveToPane(e);
            }),
            e3(this, "handleKeyDown", (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            e3(this, "_handleMoveToPane", (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case eQ.yXg.ARROW_LEFT:
                            n === D.Ie.SIDEBAR &&
                                ek.S.dispatch(eQ.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eT.Z.getChannelId() });
                            return;
                        case eQ.yXg.ARROW_RIGHT:
                            n === D.Ie.NORMAL &&
                                ek.S.dispatch(eQ.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: eO.ZP.getCurrentSidebarChannelId(r.id),
                                });
                    }
            }),
            e3(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, q.PG)(t, this.props.chatInputType);
            }),
            e3(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return S.__(I._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            e3(this, "handleChatInteract", () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            e3(this, "handleCommandSentinelTyped", () => {
                var e;
                null == (e = this.appIconAnimateRef.current) || e.animate();
            }),
            e3(this, "renderMessageBanner", (e) => {
                let {
                    channel: t,
                    showQuarantinedUserBanner: n,
                    guild: i,
                    communicationDisabledUntil: l,
                    showAutomodUserProfileChatBlocker: a,
                } = e;
                return t.type === eQ.d4z.DM && n
                    ? (0, r.jsx)(ep.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, r.jsx)(em.Z, { channelId: t.id })
                      : null != l && (0, X.J)(l) && null != i && !eZ.Z.can(eQ.Plq.ADMINISTRATOR, i)
                        ? (0, r.jsx)(Q.T, {
                              guild: i,
                              disabledUntil: l,
                          })
                        : a
                          ? (0, r.jsx)(K.h, { guild: i })
                          : null;
            }),
            e3(this, "renderAppLauncherButton", () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(eG.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t,
                });
            }),
            e3(this, "renderAppCommandButton", () => {
                let {
                    showAppDMsUI: e,
                    isFailedAppDMLoad: t,
                    channel: n,
                    entryPointCommandButtonRef: i,
                    chatInputType: l,
                } = this.props;
                return e && !t
                    ? (0, r.jsx)("div", {
                          className: e1.entryPointButtonContainer,
                          children: (0, r.jsx)(eq.ZP, {
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
let tn = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: a } = e,
        { placeholder: o, accessibilityLabel: s } = (0, eH.Z)({ channel: t }),
        c = (0, ep.S)(eA.default.getCurrentUser(), t),
        [u] = (0, J.AB)(null == n ? void 0 : n.id),
        h = (0, Y.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([eA.default], () => eA.default.getCurrentUser()),
        m = (0, d.e7)([eP.ZP], () => {
            var e, t, r;
            return (
                null != f &&
                null !=
                    (r =
                        null ==
                        (e = eP.ZP.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : eQ.lds,
                            null == f ? void 0 : f.id,
                        ))
                            ? void 0
                            : e.isPending) &&
                r
            );
        }),
        g = (0, d.e7)([es.Z], () => es.Z.isEnabled()),
        y = (0, ed.Z)(t.id),
        C = (0, $.Z)(t.id),
        _ = (0, Z.R)({
            channel: t,
            chatInputType: l,
        }),
        x = (0, E.Z)(t),
        S = (0, eb.k)(t.id),
        {
            isInitialLoading: I,
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
    (0, j.Z)({
        isProfileFetching: N,
        wasProfileFetching: A,
        applicationId: w,
        channelId: M,
        commands: R,
    });
    let k = i.useRef(null),
        L = (0, d.e7)([P.Z], () => P.Z.appDMChannelsWithFailedLoads().has(t.id)),
        D = (0, d.e7)([eT.Z], () => eT.Z.getVoiceChannelId()),
        U = (0, d.e7)([ej.Z], () => ej.Z.getChannel(D)),
        B = (0, d.e7)([eA.default], () => (t.type !== eQ.d4z.DM ? null : eA.default.getUser(t.getRecipientId()))),
        F = (0, d.e7)([ec.ZP, ex.default], () => ec.ZP.getUserCombo(ex.default.getId(), t.id)),
        V = (0, b.iD)(t),
        H = (0, b.d7)(t),
        G = V.length > 0 || t.rateLimitPerUser > 0 || null != F || null != H,
        q = (0, z.Z)("ChannelChat"),
        { showLinkedLobbyApplicationLoadingIndicator: K } = (0, eV.Z)(t.linkedLobby),
        X = (0, W.Z)("ChannelChat");
    return (0, r.jsx)(tt, {
        channel: t,
        isEditing: null != (0, d.e7)([eS.Z], () => eS.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([ef.Z], () => ef.Z.getPendingReply(t.id)),
        chatInputType: l,
        placeholder: o,
        accessibilityLabel: s,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: u,
        shakeIntensity: y,
        poggermodeEnabled: g,
        isSelectedResourceChannel: C,
        showAutomodUserProfileChatBlocker: h && !m,
        showAppLauncherButton: _,
        showAppDMsUI: x,
        isInitialLoading: I,
        showEntryPointAppCommandButton: null != T,
        entryPointCommandButtonRef: k,
        isFailedAppDMLoad: L,
        pendingScheduledMessage: S,
        recipientUser: B,
        voiceChannel: U,
        messagesTypingGradient: q && G,
        isChatInputBottomAligned: q,
        showLinkedLobbyApplicationLoadingIndicator: K,
        announcementComposerEnabled: X,
    });
});
