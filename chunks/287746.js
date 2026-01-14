n.d(t, { Z: () => e5 }), n(388685), n(35282), n(781311), n(997841);
var r = n(54381),
    i = n(473749),
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
    g = n(904245),
    m = n(144144),
    b = n(166459),
    y = n(738619),
    v = n(410575),
    O = n(857595),
    j = n(607070),
    x = n(367907),
    C = n(499254),
    E = n(541099),
    S = n(827498),
    _ = n(555573),
    I = n(456007),
    P = n(10718),
    Z = n(998698),
    N = n(895924),
    T = n(581364),
    A = n(667204),
    w = n(104919),
    R = n(541716),
    D = n(752305),
    M = n(190210),
    k = n(516887),
    L = n(974251),
    U = n(893718),
    G = n(436660),
    B = n(680835),
    F = n(28546),
    H = n(295474),
    V = n(521476),
    z = n(69882),
    W = n(71619),
    K = n(185145),
    Y = n(736052),
    q = n(146128),
    X = n(549006),
    Q = n(58873),
    J = n(925975),
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
    eg = n(268350),
    em = n(920256),
    eb = n(315355),
    ey = n(396664),
    ev = n(155409),
    eO = n(163612),
    ej = n(314897),
    ex = n(433355),
    eC = n(592125),
    eE = n(703558),
    eS = n(323873),
    e_ = n(271383),
    eI = n(375954),
    eP = n(496675),
    eZ = n(944486),
    eN = n(117530),
    eT = n(594174),
    eA = n(626135),
    ew = n(934415),
    eR = n(459273),
    eD = n(585483),
    eM = n(709054),
    ek = n(838440),
    eL = n(127654),
    eU = n(979956),
    eG = n(413251),
    eB = n(655687),
    eF = n(583027),
    eH = n(25007),
    eV = n(685722),
    ez = n(199649),
    eW = n(1397),
    eK = n(641861),
    eY = n(981631),
    eq = n(959517),
    eX = n(388032),
    eQ = n(978966);
function eJ(e, t, n) {
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
                eJ(e, t, n[t]);
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
let e4 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
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
let e7 = i.forwardRef((e, t) => (0, r.jsx)(e8, e0(e$({}, e), { ref: t })));
e7.displayName = "ChannelTextAreaForm";
class e8 extends i.PureComponent {
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
            e !== r && this.setState((0, D.eK)(e));
        }
        t.textValue.length < eY.J6R && r.length >= eY.J6R && eA.default.track(eY.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        g.Z.startEditMessageRecord(t.id, e), x.ZP.trackWithMetadata(eY.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: r } = (0, T.XA)(e.interactionData),
            { command: i, application: l } = P.Xq(
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
                          type: N.Qi.APPLICATION,
                          id: l.id,
                          icon: l.icon,
                          name: null != (o = null == l || null == (a = l.bot) ? void 0 : a.username) ? o : l.name,
                          application: l,
                      }
                    : null;
            _.Po({
                channelId: t.id,
                command: i,
                section: e,
                location: N.Vh.RECALL,
                initialValues: (0, I.Dw)(i, null != r ? r : []),
                commandOrigin: N.bB.CHAT,
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
                shakeIntensity: p,
                poggermodeEnabled: h,
                pendingScheduledMessage: g,
                announcementComposerEnabled: m,
            } = this.props,
            { contentWarningProps: b } = this.state,
            y =
                e.type === eY.d4z.GUILD_ANNOUNCEMENT && m
                    ? (0, r.jsx)(M.Z, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eQ.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: o,
                          type: R.Ie.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: l,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eL.d,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, r.jsx)(U.ZP, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eQ.channelTextArea,
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
                          promptToUpload: eL.d,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: g,
                      });
        return (0, r.jsx)(f.yRy, {
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
                    (0, r.jsx)(et.Z, e$({ onClose: t }, b))
                );
            },
            children: () =>
                h
                    ? (0, r.jsx)(f.UkV, {
                          isShaking: p > 0,
                          intensity: p,
                          className: eQ.shaker,
                          children: y,
                      })
                    : y,
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eJ(this, "isFirstChange", !0),
            eJ(this, "editorRef", null),
            eJ(
                this,
                "state",
                e0(e$({}, (0, D.eK)(eE.Z.getDraft(this.props.channel.id, eE.d.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            eJ(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eE.Z.getDraft(e.channel.id, eE.d.ChannelMessage);
                n !== r &&
                    ("" === r || "" === n) &&
                    t.setState((0, D.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eJ(this, "handleKeyDown", (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eY.yXg.DELETE:
                    case eY.yXg.BACKSPACE:
                        return void this.handleIncrementCombo("", 1);
                    case eY.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t))
                            eN.Z.getUploadCount(r.id, eE.d.ChannelMessage) > 0
                                ? eD.S.dispatchToLastSubscribed(eY.CkL.FOCUS_ATTACHMENT_AREA)
                                : eD.S.dispatchToLastSubscribed(eY.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eI.Z.getLastChatCommandMessage(e.id),
                                n = eI.Z.getLastEditableMessage(e.id);
                            null != t && null != n
                                ? eM.default.compare(n.id, t.id) > 0
                                    ? this.handleEditLastMessage(n)
                                    : this.handleRecallLastCommand(t)
                                : null != t
                                  ? this.handleRecallLastCommand(t)
                                  : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eY.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, O.rf)();
                        if (eN.Z.getUploadCount(r.id, eE.d.ChannelMessage) > 0)
                            return void b.Z.clearAll(r.id, eE.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            eJ(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = ej.default.getId(),
                    l = el.ZP.getUserCombo(i, r),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, er.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : a,
                    multiplier: t,
                });
            }),
            eJ(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i },
                } = this.props;
                h.Z.changeDraft(i, t, eE.d.ChannelMessage);
                let l = "" !== t && n !== this.state.richValue,
                    a = l && !e4.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? m.Z.startTyping(i) : "" === t && m.Z.stopTyping(i),
                    l && r && (0, O.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            eJ(this, "handleSendMessage", async (e) => {
                let {
                    value: t,
                    uploads: n,
                    stickers: r,
                    command: i,
                    commandOptionValues: l,
                    isGif: a,
                    components: o,
                    announcementSendOptions: s,
                } = e;
                if (0 === (t = t.trim()).length && (null == r || 0 === r.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0,
                    });
                let {
                        guild: c,
                        channel: u,
                        pendingReply: p,
                        chatInputType: f,
                        threadsAlsoSendToChannel: m,
                    } = this.props,
                    y = !1;
                if (null != i) {
                    if (i.inputType === N.iw.BUILT_IN_INTEGRATION)
                        return (
                            eD.S.dispatch(eY.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2,
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            })
                        );
                    let e = Z.Z.getCommandOrigin(u.id);
                    if (null == e || e === N.bB.CHAT) {
                        let { isAuthorized: e } = await (0, w.L)({
                            applicationId: i.applicationId,
                            channel: u,
                            commandIntegrationTypes: i.integration_types,
                        });
                        if (!e)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            });
                    } else if (
                        e === N.bB.APPLICATION_LAUNCHER ||
                        e === N.bB.IMAGE_RECS_MENU ||
                        e === N.bB.IMAGE_RECS_SUBMENU
                    ) {
                        var v;
                        let { location: t, sectionName: n } = null != (v = (0, eF._U)(i)) ? v : {},
                            r = e === N.bB.APPLICATION_LAUNCHER ? E.Z.lastShownEntrypoint() : S._b.TEXT,
                            { isAuthorized: l } = await (0, w.L)({
                                applicationId: i.applicationId,
                                channel: u,
                                commandIntegrationTypes: i.integration_types,
                                appLauncherContext: {
                                    location: t,
                                    sectionName: n,
                                    entrypoint: r,
                                },
                            });
                        if (!l)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            });
                        (0, eF.SC)(i);
                    }
                    let n = await (0, A.Z)({
                        command: i,
                        optionValues: null != l ? l : {},
                        context: {
                            guild: c,
                            channel: u,
                        },
                    });
                    if (i.inputType !== N.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0,
                        });
                    null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (y = !0 === n.tts));
                }
                return (0, ek.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: r,
                    uploads: n,
                    channel: u,
                }).then(async (e) => {
                    var l, v, O;
                    let { valid: j, failureReason: x } = e;
                    if (!j)
                        if (x === eY.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eD.S.dispatch(eY.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2,
                                }),
                                eD.S.dispatch(eY.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let C = (0, J.g)(t, {
                        channel: u,
                        isEdit: !1,
                    });
                    null != C && (null != C.content && (t = C.content), null != C.tts && (y = C.tts));
                    let E = $.ZP.parse(u, t);
                    (E.tts = E.tts || y), null != o && ((E.content = ""), (E.components = o));
                    let S = e0(
                        e$(
                            {},
                            g.Z.getSendMessageOptions({
                                content: t,
                                channelId: u.id,
                                uploads: n,
                                stickers: r,
                                command: i,
                                isGif: a,
                                pendingReply: p,
                                alsoForwardToChannelId: m && null != (v = u.parent_id) ? v : void 0,
                                scheduledTimestamp:
                                    null == (l = this.props.pendingScheduledMessage) ? void 0 : l.scheduledTimestamp,
                            }),
                        ),
                        { location: eq.dy.CHAT_INPUT },
                    );
                    if (
                        (null != s && (S.announcementSendOptions = s),
                        null != o && (S.flags = (0, d.pj)(null != (O = S.flags) ? O : 0, eY.iLy.IS_COMPONENTS_V2)),
                        a)
                    )
                        return (
                            g.Z.sendMessage(u.id, E, void 0, S).then(() => {
                                if (m) {
                                    var e;
                                    ey.Z(null != (e = u.parent_id) ? e : void 0);
                                }
                            }),
                            (0, ec.A6)(u.id),
                            em.E({
                                channelId: u.id,
                                enabled: !1,
                            }),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eU.KZ)(n);
                        if ((0, eU.Bf)(e, null == c ? void 0 : c.id))
                            return (
                                (0, eL.G)(u, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (S.eagerDispatch = !1),
                            (S.attachmentsToUpload = n),
                            (S.onAttachmentUploadError = (e, r, i) => {
                                (0, Q.A)({
                                    file: e,
                                    guildId: u.getGuildId(),
                                    analyticsLocations: [],
                                    code: r,
                                    reason: i,
                                }) &&
                                    ("" !== t &&
                                        "" === eE.Z.getDraft(u.id, eE.d.ChannelMessage) &&
                                        h.Z.saveDraft(u.id, t, eE.d.ChannelMessage),
                                    0 === eN.Z.getUploadCount(u.id, eE.d.ChannelMessage) &&
                                        b.Z.setUploads({
                                            channelId: u.id,
                                            uploads: n,
                                            draftType: eE.d.ChannelMessage,
                                        }));
                            }),
                            b.Z.clearAll(u.id, eE.d.ChannelMessage);
                    }
                    if (null != S.scheduledTimestamp)
                        try {
                            await (0, ep.PV)({
                                channelId: u.id,
                                scheduledTimestamp: S.scheduledTimestamp,
                                messageSendData: {
                                    channelId: u.id,
                                    content: t,
                                    nonce: (0, ee.r)(),
                                    tts: y,
                                    message_reference: S.messageReference,
                                    allowed_mentions: S.allowedMentions,
                                    flags: S.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, eh.Hw)(S.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, eh.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        }
                    else
                        g.Z.sendMessage(u.id, E, void 0, S).then(() => {
                            if (m) {
                                var e;
                                ey.Z(null != (e = u.parent_id) ? e : void 0);
                            }
                        });
                    return (
                        this.setState((0, D.H2)()),
                        (0, ec.A6)(u.id),
                        (0, eg.qB)(u.id, f.drafts.type),
                        em.E({
                            channelId: u.id,
                            enabled: !1,
                        }),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0,
                        }
                    );
                });
            }),
            eJ(this, "handleSetValue", (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (G.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            eJ(this, "renderAttachButton", (e, t) =>
                (0, r.jsx)(L.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eE.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                    chatInputType: this.props.chatInputType,
                }),
            ),
            eJ(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, r.jsx)(k.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class e2 extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused:
                      null != n && n.type !== eY.d4z.GUILD_ANNOUNCEMENT && !c.tq && eP.Z.can(eY.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    componentDidMount() {
        eD.S.subscribe(eY.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eD.S.unsubscribe(eY.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                threadsAlsoSendToChannel: c,
                chatInputType: d,
                placeholder: p,
                accessibilityLabel: h,
                showQuarantinedUserBanner: g,
                filterAfterTimestamp: m,
                communicationDisabledUntil: b,
                shakeIntensity: O,
                poggermodeEnabled: j,
                isSelectedResourceChannel: x,
                showAutomodUserProfileChatBlocker: C,
                pendingScheduledMessage: E,
                recipientUser: S,
                voiceChannel: _,
                messagesTypingGradient: I,
                showLinkedLobbyApplicationLoadingIndicator: P,
                announcementComposerEnabled: Z,
            } = this.props,
            { textAreaFocused: N, textAreaHighlighted: T } = this.state,
            A = d === R.Ie.SIDEBAR;
        t =
            A && n.type === eY.d4z.GUILD_VOICE
                ? eX.t.pnnyFZ
                : A && n.type === eY.d4z.GUILD_STAGE_VOICE
                  ? eX.t.YInSkq
                  : u.T.THREADS.has(n.type)
                    ? eX.t["OkzL+Q"]
                    : eX.t.UbNmGc;
        let w = (0, r.jsx)("div", {
                className: eQ.channelBottomBarArea,
                children: (0, r.jsx)(eV.Z, {}),
            }),
            D = (0, r.jsx)("div", {
                className: eQ.channelBottomBarArea,
                children: (0, r.jsx)(ev.Z, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, r.jsx)(e7, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: N,
                        highlighted: T,
                        channel: n,
                        guild: i,
                        keyboardModeEnabled: l,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: o,
                        pendingReply: s,
                        threadsAlsoSendToChannel: c,
                        chatInputType: d,
                        placeholder: p,
                        accessibilityLabel: h,
                        shakeIntensity: O,
                        poggermodeEnabled: j,
                        pendingScheduledMessage: E,
                        announcementComposerEnabled: Z,
                    }),
                }),
            }),
            M = P ? w : D,
            { enabled: k } = eO.Z.getCurrentConfig({
                guildId: null == _ ? void 0 : _.guild_id,
                location: "ChannelChat",
            }),
            L = k && null != S && null != _ && null != _.guild_id;
        return (0, r.jsx)(
            v.Z,
            {
                page: (0, ew.mE)(this.props.channel),
                children: (0, r.jsx)(X.sW, {
                    children: (0, r.jsx)(q.BV, {
                        children: (0, r.jsxs)(eR.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eR.d9, {
                                    event: eY.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, r.jsx)(eR.d9, {
                                    event: eY.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, r.jsx)(eR.d9, {
                                    event: eY.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, r.jsx)(eR.d9, {
                                    event: eY.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, r.jsxs)(e3, {
                                    isSidebar: A,
                                    className: eQ.chatContent,
                                    "aria-label": eX.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        L &&
                                            (0, r.jsx)(eK.Z, {
                                                recipientUser: S,
                                                voiceChannel: _,
                                            }),
                                        (0, r.jsx)(eH.Z, {
                                            channel: n,
                                            guild: i,
                                            narrow: A,
                                        }),
                                        (0, r.jsxs)(f.y5t, {
                                            component: (0, r.jsx)(f.nn4, {
                                                children: (0, r.jsx)(f.H, {
                                                    children: eX.intl.format(eX.t.eTzKkx, { channelName: n.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, r.jsx)(en.Z, {
                                                    channel: n,
                                                    forceCozy: x,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: g,
                                                    typingGradient: I,
                                                }),
                                                x
                                                    ? null
                                                    : null !=
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: g,
                                                            guild: i,
                                                            communicationDisabledUntil: b,
                                                            showAutomodUserProfileChatBlocker: C,
                                                        }))
                                                      ? e
                                                      : (0, r.jsxs)("form", {
                                                            ref: this.inputFormRef,
                                                            onSubmit: e1,
                                                            className: a()(eQ.form, {
                                                                [eQ.formWithLoadedChatInput]: !P,
                                                            }),
                                                            children: [
                                                                j && (0, r.jsx)(ea.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, r.jsx)(ez.Z, {
                                                                          channel: n,
                                                                          children: M,
                                                                      })
                                                                    : (0, r.jsx)(eW.Z, {
                                                                          channel: n,
                                                                          children: M,
                                                                      }),
                                                                (0, r.jsx)(y.ZP, {
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
            eJ(this, "containerDomRef", i.createRef()),
            eJ(this, "refToChannelTextAreaFormComponent", i.createRef()),
            eJ(this, "inputFormRef", i.createRef()),
            eJ(this, "state", {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id,
            }),
            eJ(this, "dispatchGroupRef", i.createRef()),
            eJ(this, "handleRequestFocus", (e) => {
                if (e.channelId === this.props.channel.id)
                    if (this.state.textAreaFocused) {
                        var t;
                        null == (t = this.refToChannelTextAreaFormComponent.current) || t.focusEditor();
                    } else this.setState({ textAreaFocused: !0 });
            }),
            eJ(this, "handleInputFocus", (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight,
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eJ(this, "handleInputBlur", () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1,
                    });
            }),
            eJ(this, "handleInputKeyDown", (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }),
                    t || this._handleMoveToPane(e);
            }),
            eJ(this, "handleKeyDown", (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            eJ(this, "_handleMoveToPane", (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case eY.yXg.ARROW_LEFT:
                            n === R.Ie.SIDEBAR &&
                                eD.S.dispatch(eY.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eZ.Z.getChannelId() });
                            return;
                        case eY.yXg.ARROW_RIGHT:
                            n === R.Ie.NORMAL &&
                                eD.S.dispatch(eY.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: ex.ZP.getCurrentSidebarChannelId(r.id),
                                });
                    }
            }),
            eJ(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, F.PG)(t, this.props.chatInputType, this.props.channel.id);
            }),
            eJ(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return C._(S._b.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
            }),
            eJ(this, "handleChatInteract", () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            eJ(this, "renderMessageBanner", (e) => {
                let {
                    channel: t,
                    showQuarantinedUserBanner: n,
                    guild: i,
                    communicationDisabledUntil: l,
                    showAutomodUserProfileChatBlocker: a,
                } = e;
                return t.type === eY.d4z.DM && n
                    ? (0, r.jsx)(es.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, r.jsx)(ed.Z, { channelId: t.id })
                      : null != l && (0, z.J)(l) && null != i && !eP.Z.can(eY.Plq.ADMINISTRATOR, i)
                        ? (0, r.jsx)(K.T, {
                              guild: i,
                              disabledUntil: l,
                          })
                        : a
                          ? (0, r.jsx)(V.h, { guild: i })
                          : null;
            });
    }
}
let e5 = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: i, filterAfterTimestamp: l } = e,
        { placeholder: a, accessibilityLabel: o } = (0, eB.Z)({ channel: t }),
        s = (0, es.S)(eT.default.getCurrentUser(), t),
        [c] = (0, W.AB)(null == n ? void 0 : n.id),
        u = (0, H.Ux)(null == n ? void 0 : n.id),
        d = (0, p.e7)([eT.default], () => eT.default.getCurrentUser()),
        h = (0, p.e7)([e_.ZP], () => {
            var e, t, r;
            return (
                null != d &&
                null !=
                    (r =
                        null ==
                        (e = e_.ZP.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : eY.lds,
                            null == d ? void 0 : d.id,
                        ))
                            ? void 0
                            : e.isPending) &&
                r
            );
        }),
        g = (0, p.e7)([ei.Z], () => ei.Z.isEnabled()),
        m = (0, eo.Z)(t.id),
        b = (0, Y.Z)(t.id),
        v = (0, ef.k)(t.id),
        O = (0, p.e7)([eZ.Z], () => eZ.Z.getVoiceChannelId()),
        x = (0, p.e7)([eC.Z], () => eC.Z.getChannel(O)),
        C = (0, p.e7)([eT.default], () => (t.type !== eY.d4z.DM ? null : eT.default.getUser(t.getRecipientId()))),
        E = (0, p.e7)([eb.Z], () => eb.Z.getAlsoSendToChannel(t.id)),
        S = (0, p.e7)([el.ZP, ej.default], () => el.ZP.getUserCombo(ej.default.getId(), t.id)),
        _ = (0, y.iD)(t),
        I = (0, y.d7)(t),
        P = _.length > 0 || t.rateLimitPerUser > 0 || null != S || null != I,
        { showLinkedLobbyApplicationLoadingIndicator: Z } = (0, eG.Z)(t.linkedLobby),
        N = (0, B.Z)("ChannelChat");
    return (0, r.jsx)(e2, {
        channel: t,
        isEditing: null != (0, p.e7)([eS.Z], () => eS.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, f.s9z)(f.JQI),
        guild: n,
        keyboardModeEnabled: (0, p.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        pendingReply: (0, p.e7)([eu.Z], () => eu.Z.getPendingReply(t.id)),
        threadsAlsoSendToChannel: E,
        chatInputType: i,
        placeholder: a,
        accessibilityLabel: o,
        filterAfterTimestamp: l,
        showQuarantinedUserBanner: s,
        communicationDisabledUntil: c,
        shakeIntensity: m,
        poggermodeEnabled: g,
        isSelectedResourceChannel: b,
        showAutomodUserProfileChatBlocker: u && !h,
        pendingScheduledMessage: v,
        recipientUser: C,
        voiceChannel: x,
        messagesTypingGradient: P,
        showLinkedLobbyApplicationLoadingIndicator: Z,
        announcementComposerEnabled: N,
    });
});
