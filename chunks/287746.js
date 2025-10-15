n.d(t, { Z: () => tt }), n(388685), n(35282), n(781311), n(997841);
var i = n(951288),
    r = n(647438),
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
    C = n(410575),
    y = n(857595),
    _ = n(607070),
    v = n(367907),
    x = n(450936),
    O = n(993766),
    j = n(989573),
    E = n(499254),
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
    L = n(104919),
    D = n(541716),
    k = n(752305),
    U = n(190210),
    B = n(516887),
    H = n(974251),
    V = n(893718),
    F = n(436660),
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
    ei = n(48854),
    er = n(105457),
    el = n(400023),
    ea = n(64078),
    eo = n(351780),
    es = n(843693),
    ec = n(217871),
    eu = n(139577),
    ed = n(247944),
    ep = n(623292),
    eh = n(807092),
    ef = n(773359),
    em = n(45251),
    eg = n(705533),
    eb = n(618857),
    eC = n(268350),
    ey = n(155409),
    e_ = n(163612),
    ev = n(314897),
    ex = n(433355),
    eO = n(592125),
    ej = n(703558),
    eE = n(323873),
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
    eL = n(630388),
    eD = n(709054),
    ek = n(838440),
    eU = n(127654),
    eB = n(979956),
    eH = n(413251),
    eV = n(655687),
    eF = n(775685),
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
    e0 = n(97009),
    e1 = n(180376);
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
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
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
function e4(e) {
    e.preventDefault();
}
let e7 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e6(e) {
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
    return t ? (0, i.jsx)("section", e8(e3({}, n), { role: "complementary" })) : (0, i.jsx)("main", e3({}, n));
}
let e5 = r.forwardRef((e, t) => (0, i.jsx)(e9, e8(e3({}, e), { ref: t })));
e5.displayName = "ChannelTextAreaForm";
class e9 extends r.PureComponent {
    focusEditor() {
        var e;
        null == (e = this.editorRef) || e.focus();
    }
    componentDidMount() {
        ej.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ej.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ej.Z.getDraft(n.id, ej.d.ChannelMessage);
            e !== i && this.setState((0, k.eK)(e));
        }
        t.textValue.length < eJ.J6R && i.length >= eJ.J6R && eA.default.track(eJ.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessageRecord(t.id, e), v.ZP.trackWithMetadata(eJ.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, M.XA)(e.interactionData),
            { command: r, application: l } = N.Xq(
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
                          type: w.Qi.APPLICATION,
                          id: l.id,
                          icon: l.icon,
                          name: null != (o = null == l || null == (a = l.bot) ? void 0 : a.username) ? o : l.name,
                          application: l,
                      }
                    : null;
            Z.Po({
                channelId: t.id,
                command: r,
                section: e,
                location: w.Vh.RECALL,
                initialValues: (0, T.Dw)(r, null != i ? i : []),
                commandOrigin: w.bB.CHAT,
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
                onCommandSentinelTyped: m,
                renderAppLauncherButton: g,
                renderAppCommandButton: b,
                pendingScheduledMessage: C,
                announcementComposerEnabled: y,
            } = this.props,
            { contentWarningProps: _ } = this.state,
            v =
                e.type === eJ.d4z.GUILD_ANNOUNCEMENT && y
                    ? (0, i.jsx)(U.Z, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: e0.channelTextArea,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: o,
                          type: D.Ie.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: l,
                          onFocus: r,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderAppLauncherButton: g,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eU.d,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, i.jsx)(V.ZP, {
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
                          onFocus: r,
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
                          pendingScheduledMessage: C,
                      });
        return (0, i.jsx)(p.yRy, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                var e;
                null == _ || null == (e = _.onCancel) || e.call(_), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != _,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    s()(null != _, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, i.jsx)(er.Z, e3({ onClose: t }, _))
                );
            },
            children: () =>
                f
                    ? (0, i.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
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
                e8(e3({}, (0, k.eK)(ej.Z.getDraft(this.props.channel.id, ej.d.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            e2(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = ej.Z.getDraft(e.channel.id, ej.d.ChannelMessage);
                n !== i &&
                    ("" === i || "" === n) &&
                    t.setState((0, k.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            e2(this, "handleKeyDown", (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    r = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eJ.yXg.DELETE:
                    case eJ.yXg.BACKSPACE:
                        return void this.handleIncrementCombo("", 1);
                    case eJ.yXg.ARROW_UP:
                        if (r || l) return;
                        if ((e.preventDefault(), t))
                            eT.Z.getUploadCount(i.id, ej.d.ChannelMessage) > 0
                                ? eR.S.dispatchToLastSubscribed(eJ.CkL.FOCUS_ATTACHMENT_AREA)
                                : eR.S.dispatchToLastSubscribed(eJ.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eP.Z.getLastChatCommandMessage(e.id),
                                n = eP.Z.getLastEditableMessage(e.id);
                            null != t && null != n
                                ? eD.default.compare(n.id, t.id) > 0
                                    ? this.handleEditLastMessage(n)
                                    : this.handleRecallLastCommand(t)
                                : null != t
                                  ? this.handleRecallLastCommand(t)
                                  : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eJ.yXg.ESCAPE:
                        if (r || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, y.rf)();
                        if (eT.Z.getUploadCount(i.id, ej.d.ChannelMessage) > 0)
                            return void g.Z.clearAll(i.id, ej.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            e2(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    r = ev.default.getId(),
                    l = es.ZP.getUserCombo(r, i),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, ea.SE)({
                    channelId: i,
                    userId: r,
                    value: null != e ? e.length : a,
                    multiplier: t,
                });
            }),
            e2(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: r },
                } = this.props;
                h.Z.changeDraft(r, t, ej.d.ChannelMessage);
                let l = "" !== t && n !== this.state.richValue,
                    a = l && !e7.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? m.Z.startTyping(r) : "" === t && m.Z.stopTyping(r),
                    l && i && (0, y.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            e2(this, "handleSendMessage", async (e) => {
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
                        e === w.bB.APPLICATION_LAUNCHER ||
                        e === w.bB.IMAGE_RECS_MENU ||
                        e === w.bB.IMAGE_RECS_SUBMENU
                    ) {
                        var C;
                        let { location: t, sectionName: n } = null != (C = (0, eG._U)(l)) ? C : {},
                            i = e === w.bB.APPLICATION_LAUNCHER ? S.Z.lastShownEntrypoint() : P._b.TEXT,
                            { isAuthorized: r } = await (0, L.L)({
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
                    stickers: i,
                    uploads: n,
                    channel: d,
                }).then(async (e) => {
                    var a, C;
                    let { valid: y, failureReason: _ } = e;
                    if (!y)
                        if (_ === eJ.zYc.SLOWMODE_COOLDOWN)
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
                    let x = en.ZP.parse(d, t);
                    (x.tts = x.tts || b), null != s && ((x.content = ""), (x.components = s));
                    let O = e8(
                        e3(
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
                        { location: eQ.dy.CHAT_INPUT },
                    );
                    if (
                        (null != c && (O.announcementSendOptions = c),
                        null != s && (O.flags = (0, eL.pj)(null != (C = O.flags) ? C : 0, eJ.iLy.IS_COMPONENTS_V2)),
                        o)
                    )
                        return (
                            f.Z.sendMessage(d.id, x, void 0, O),
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
                        (O.eagerDispatch = !1),
                            (O.attachmentsToUpload = n),
                            (O.onAttachmentUploadError = (e, i, r) => {
                                (0, ee.A)({
                                    file: e,
                                    guildId: d.getGuildId(),
                                    analyticsLocations: [],
                                    code: i,
                                    reason: r,
                                }) &&
                                    ("" !== t &&
                                        "" === ej.Z.getDraft(d.id, ej.d.ChannelMessage) &&
                                        h.Z.saveDraft(d.id, t, ej.d.ChannelMessage),
                                    0 === eT.Z.getUploadCount(d.id, ej.d.ChannelMessage) &&
                                        g.Z.setUploads({
                                            channelId: d.id,
                                            uploads: n,
                                            draftType: ej.d.ChannelMessage,
                                        }));
                            }),
                            g.Z.clearAll(d.id, ej.d.ChannelMessage);
                    }
                    if (null != O.scheduledTimestamp)
                        try {
                            await (0, em.PV)({
                                channelId: d.id,
                                scheduledTimestamp: O.scheduledTimestamp,
                                messageSendData: {
                                    channelId: d.id,
                                    content: t,
                                    nonce: (0, ei.r)(),
                                    tts: b,
                                    message_reference: O.messageReference,
                                    allowed_mentions: O.allowedMentions,
                                    flags: O.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, eb.Hw)(O.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, eb.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        }
                    else f.Z.sendMessage(d.id, x, void 0, O);
                    return (
                        this.setState((0, k.H2)()),
                        (0, ep.A6)(d.id),
                        (0, eC.qB)(d.id, m.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0,
                        }
                    );
                });
            }),
            e2(this, "handleSetValue", (e) => {
                var t, n;
                let i = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != i && (F.Q.select(i, []), i.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            e2(this, "renderAttachButton", (e, t) =>
                (0, i.jsx)(H.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: ej.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                }),
            ),
            e2(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, i.jsx)(B.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class te extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
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
                shakeIntensity: y,
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
                showLinkedLobbyApplicationLoadingIndicator: T,
                announcementComposerEnabled: N,
            } = this.props,
            { textAreaFocused: A, textAreaHighlighted: w } = this.state,
            M = c === D.Ie.SIDEBAR;
        t =
            M && n.type === eJ.d4z.GUILD_VOICE
                ? e$.t.pnnyFZ
                : M && n.type === eJ.d4z.GUILD_STAGE_VOICE
                  ? e$.t.YInSkq
                  : u.T.THREADS.has(n.type)
                    ? e$.t["OkzL+Q"]
                    : e$.t.UbNmGc;
        let R = (0, i.jsx)("div", {
                className: e0.channelBottomBarArea,
                children: (0, i.jsx)(eq.Z, {}),
            }),
            L = (0, i.jsxs)("div", {
                className: e0.channelBottomBarArea,
                children: [
                    (0, i.jsx)(ey.Z, {
                        childRef: this.containerDomRef,
                        tutorialId: "writing-messages",
                        position: "left",
                        offsetX: 75,
                        children: (0, i.jsx)(e5, {
                            ref: this.refToChannelTextAreaFormComponent,
                            refInstance: this.containerDomRef,
                            focused: A,
                            highlighted: w,
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
                            shakeIntensity: y,
                            poggermodeEnabled: _,
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
            k = (j && E) || T,
            U = k ? R : L,
            B = a()({
                [e1.barWithAppLauncherButton]: O,
                [e1.barWithAppsDMsUI]: j,
            }),
            { enabled: H } = e_.Z.getCurrentConfig({
                guildId: null == I ? void 0 : I.guild_id,
                location: "ChannelChat",
            }),
            V = H && null != P && null != I && null != I.guild_id;
        return (0, i.jsx)(
            C.Z,
            {
                page: (0, ew.mE)(this.props.channel),
                children: (0, i.jsx)($.sW, {
                    children: (0, i.jsx)(Q.BV, {
                        children: (0, i.jsxs)(eM.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eM.d9, {
                                    event: eJ.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, i.jsx)(eM.d9, {
                                    event: eJ.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, i.jsx)(eM.d9, {
                                    event: eJ.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, i.jsx)(eM.d9, {
                                    event: eJ.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, i.jsxs)(e6, {
                                    isSidebar: M,
                                    className: e0.chatContent,
                                    "aria-label": e$.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        V &&
                                            (0, i.jsx)(eX.Z, {
                                                recipientUser: P,
                                                voiceChannel: I,
                                            }),
                                        (0, i.jsx)(eW.Z, {
                                            channel: n,
                                            guild: r,
                                            narrow: M,
                                        }),
                                        (0, i.jsxs)(p.y5t, {
                                            component: (0, i.jsx)(p.nn4, {
                                                children: (0, i.jsx)(p.H, {
                                                    children: e$.intl.format(e$.t.eTzKkx, { channelName: n.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, i.jsx)(el.Z, {
                                                    channel: n,
                                                    forceCozy: v,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: f,
                                                    jumpBarClassName: B,
                                                    typingGradient: Z,
                                                }),
                                                v
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
                                                            onSubmit: e4,
                                                            className: a()(e0.form, {
                                                                [e0.formWithLoadedChatInput]: !k,
                                                            }),
                                                            children: [
                                                                _ && (0, i.jsx)(ec.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(eY.Z, {
                                                                          channel: n,
                                                                          children: U,
                                                                      })
                                                                    : (0, i.jsx)(eK.Z, {
                                                                          channel: n,
                                                                          children: U,
                                                                      }),
                                                                (0, i.jsx)(b.ZP, {
                                                                    channel: n,
                                                                    isInTextChannel: !0,
                                                                }),
                                                            ],
                                                        }),
                                                (0, i.jsx)($.kw, {}),
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
            e2(this, "containerDomRef", r.createRef()),
            e2(this, "refToChannelTextAreaFormComponent", r.createRef()),
            e2(this, "inputFormRef", r.createRef()),
            e2(this, "state", {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id,
            }),
            e2(this, "dispatchGroupRef", r.createRef()),
            e2(this, "appIconAnimateRef", r.createRef()),
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
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (t)
                    switch (e.which) {
                        case eJ.yXg.ARROW_LEFT:
                            n === D.Ie.SIDEBAR &&
                                eR.S.dispatch(eJ.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eZ.Z.getChannelId() });
                            return;
                        case eJ.yXg.ARROW_RIGHT:
                            n === D.Ie.NORMAL &&
                                eR.S.dispatch(eJ.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: ex.ZP.getCurrentSidebarChannelId(i.id),
                                });
                    }
            }),
            e2(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, W.PG)(t, this.props.chatInputType);
            }),
            e2(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return E.__(P._b.TEXT, this.props.chatInputType, { applicationId: t });
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
                    guild: r,
                    communicationDisabledUntil: l,
                    showAutomodUserProfileChatBlocker: a,
                } = e;
                return t.type === eJ.d4z.DM && n
                    ? (0, i.jsx)(ed.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, i.jsx)(ef.Z, { channelId: t.id })
                      : null != l && (0, Y.J)(l) && null != r && !eI.Z.can(eJ.Plq.ADMINISTRATOR, r)
                        ? (0, i.jsx)(X.T, {
                              guild: r,
                              disabledUntil: l,
                          })
                        : a
                          ? (0, i.jsx)(q.h, { guild: r })
                          : null;
            }),
            e2(this, "renderAppLauncherButton", () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, i.jsx)(eF.Z, {
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
                    entryPointCommandButtonRef: r,
                    chatInputType: l,
                } = this.props;
                return e && !t
                    ? (0, i.jsx)("div", {
                          className: e0.entryPointButtonContainer,
                          children: (0, i.jsx)(ez.ZP, {
                              context: {
                                  channel: n,
                                  type: "channel",
                              },
                              entryPointCommandButtonRef: r,
                              type: l,
                          }),
                      })
                    : null;
            });
    }
}
let tt = r.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: a } = e,
        { placeholder: o, accessibilityLabel: s } = (0, eV.Z)({ channel: t }),
        c = (0, ed.S)(eN.default.getCurrentUser(), t),
        [u] = (0, K.AB)(null == n ? void 0 : n.id),
        h = (0, z.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([eN.default], () => eN.default.getCurrentUser()),
        m = (0, d.e7)([eS.ZP], () => {
            var e, t, i;
            return (
                null != f &&
                null !=
                    (i =
                        null ==
                        (e = eS.ZP.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : eJ.lds,
                            null == f ? void 0 : f.id,
                        ))
                            ? void 0
                            : e.isPending) &&
                i
            );
        }),
        g = (0, d.e7)([eo.Z], () => eo.Z.isEnabled()),
        C = (0, eu.Z)(t.id),
        y = (0, J.Z)(t.id),
        v = (0, I.R)({
            channel: t,
            chatInputType: l,
        }),
        E = (0, j.Z)(t),
        P = (0, eg.k)(t.id),
        {
            isInitialLoading: Z,
            primaryEntryPointCommand: T,
            isProfileFetching: N,
            wasProfileFetching: A,
            applicationId: w,
            channelId: M,
            commands: R,
        } = (0, x.Z)({
            context: {
                channel: t,
                type: "channel",
            },
        });
    (0, O.Z)({
        isProfileFetching: N,
        wasProfileFetching: A,
        applicationId: w,
        channelId: M,
        commands: R,
    });
    let L = r.useRef(null),
        D = (0, d.e7)([S.Z], () => S.Z.appDMChannelsWithFailedLoads().has(t.id)),
        k = (0, d.e7)([eZ.Z], () => eZ.Z.getVoiceChannelId()),
        U = (0, d.e7)([eO.Z], () => eO.Z.getChannel(k)),
        B = (0, d.e7)([eN.default], () => (t.type !== eJ.d4z.DM ? null : eN.default.getUser(t.getRecipientId()))),
        H = (0, d.e7)([es.ZP, ev.default], () => es.ZP.getUserCombo(ev.default.getId(), t.id)),
        V = (0, b.iD)(t),
        F = (0, b.d7)(t),
        W = V.length > 0 || t.rateLimitPerUser > 0 || null != H || null != F,
        { showLinkedLobbyApplicationLoadingIndicator: q } = (0, eH.Z)(t.linkedLobby),
        Y = (0, G.Z)("ChannelChat");
    return (0, i.jsx)(te, {
        channel: t,
        isEditing: null != (0, d.e7)([eE.Z], () => eE.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([eh.Z], () => eh.Z.getPendingReply(t.id)),
        chatInputType: l,
        placeholder: o,
        accessibilityLabel: s,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: u,
        shakeIntensity: C,
        poggermodeEnabled: g,
        isSelectedResourceChannel: y,
        showAutomodUserProfileChatBlocker: h && !m,
        showAppLauncherButton: v,
        showAppDMsUI: E,
        isInitialLoading: Z,
        showEntryPointAppCommandButton: null != T,
        entryPointCommandButtonRef: L,
        isFailedAppDMLoad: D,
        pendingScheduledMessage: P,
        recipientUser: B,
        voiceChannel: U,
        messagesTypingGradient: W,
        showLinkedLobbyApplicationLoadingIndicator: q,
        announcementComposerEnabled: Y,
    });
});
