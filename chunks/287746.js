n.d(t, { Z: () => e6 }), n(388685), n(35282), n(781311), n(997841);
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
    x = n(607070),
    O = n(367907),
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
    eg = n(920256),
    eb = n(315355),
    eC = n(396664),
    ey = n(155409),
    ev = n(163612),
    ex = n(314897),
    eO = n(433355),
    eE = n(592125),
    ej = n(703558),
    eS = n(323873),
    e_ = n(271383),
    eP = n(375954),
    eI = n(496675),
    eZ = n(944486),
    eT = n(117530),
    eN = n(594174),
    eA = n(626135),
    ew = n(934415),
    eM = n(459273),
    eR = n(585483),
    eL = n(709054),
    eD = n(838440),
    ek = n(127654),
    eU = n(979956),
    eV = n(413251),
    eF = n(655687),
    eB = n(583027),
    eH = n(25007),
    eG = n(685722),
    ez = n(199649),
    eW = n(1397),
    eq = n(641861),
    eK = n(981631),
    eY = n(959517),
    eX = n(388032),
    eJ = n(978966);
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
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
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
function e1(e) {
    e.preventDefault();
}
let e2 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e3(e) {
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
    return t ? (0, i.jsx)("section", e0(e$({}, n), { role: "complementary" })) : (0, i.jsx)("main", e$({}, n));
}
let e4 = r.forwardRef((e, t) => (0, i.jsx)(e7, e0(e$({}, e), { ref: t })));
e4.displayName = "ChannelTextAreaForm";
class e7 extends r.PureComponent {
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
            e !== i && this.setState((0, R.eK)(e));
        }
        t.textValue.length < eK.J6R && i.length >= eK.J6R && eA.default.track(eK.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        m.Z.startEditMessageRecord(t.id, e), O.ZP.trackWithMetadata(eK.rMx.MESSAGE_EDIT_UP_ARROW);
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
                e.type === eK.d4z.GUILD_ANNOUNCEMENT && g
                    ? (0, i.jsx)(L.Z, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eJ.channelTextArea,
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
                          promptToUpload: ek.d,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, i.jsx)(U.ZP, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eJ.channelTextArea,
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
                          promptToUpload: ek.d,
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
                    (0, i.jsx)(et.Z, e$({ onClose: t }, b))
                );
            },
            children: () =>
                h
                    ? (0, i.jsx)(f.UkV, {
                          isShaking: p > 0,
                          intensity: p,
                          className: eJ.shaker,
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
                e0(e$({}, (0, R.eK)(ej.Z.getDraft(this.props.channel.id, ej.d.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            eQ(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = ej.Z.getDraft(e.channel.id, ej.d.ChannelMessage);
                n !== i &&
                    ("" === i || "" === n) &&
                    t.setState((0, R.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eQ(this, "handleKeyDown", (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    r = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eK.yXg.DELETE:
                    case eK.yXg.BACKSPACE:
                        return void this.handleIncrementCombo("", 1);
                    case eK.yXg.ARROW_UP:
                        if (r || l) return;
                        if ((e.preventDefault(), t))
                            eT.Z.getUploadCount(i.id, ej.d.ChannelMessage) > 0
                                ? eR.S.dispatchToLastSubscribed(eK.CkL.FOCUS_ATTACHMENT_AREA)
                                : eR.S.dispatchToLastSubscribed(eK.CkL.FOCUS_MESSAGES, { atEnd: !0 });
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
                    case eK.yXg.ESCAPE:
                        if (r || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, v.rf)();
                        if (eT.Z.getUploadCount(i.id, ej.d.ChannelMessage) > 0)
                            return void b.Z.clearAll(i.id, ej.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            eQ(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    r = ex.default.getId(),
                    l = el.ZP.getUserCombo(r, i),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, ei.SE)({
                    channelId: i,
                    userId: r,
                    value: null != e ? e.length : a,
                    multiplier: t,
                });
            }),
            eQ(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: r },
                } = this.props;
                h.Z.changeDraft(r, t, ej.d.ChannelMessage);
                let l = "" !== t && n !== this.state.richValue,
                    a = l && !e2.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? g.Z.startTyping(r) : "" === t && g.Z.stopTyping(r),
                    l && i && (0, v.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            eQ(this, "handleSendMessage", async (e) => {
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
                let {
                        guild: u,
                        channel: p,
                        pendingReply: f,
                        chatInputType: g,
                        threadsAlsoSendToChannel: C,
                    } = this.props,
                    y = !1;
                if (null != l) {
                    if (l.inputType === T.iw.BUILT_IN_INTEGRATION)
                        return (
                            eR.S.dispatch(eK.CkL.SHAKE_APP, {
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
                        var v;
                        let { location: t, sectionName: n } = null != (v = (0, eB._U)(l)) ? v : {},
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
                        (0, eB.SC)(l);
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
                    null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (y = !0 === n.tts));
                }
                return (0, eD.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: p,
                }).then(async (e) => {
                    var a, v, x;
                    let { valid: O, failureReason: E } = e;
                    if (!O)
                        if (E === eK.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eR.S.dispatch(eK.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2,
                                }),
                                eR.S.dispatch(eK.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let j = (0, Q.g)(t, {
                        channel: p,
                        isEdit: !1,
                    });
                    null != j && (null != j.content && (t = j.content), null != j.tts && (y = j.tts));
                    let S = $.ZP.parse(p, t);
                    (S.tts = S.tts || y), null != s && ((S.content = ""), (S.components = s));
                    let _ = e0(
                        e$(
                            {},
                            m.Z.getSendMessageOptions({
                                content: t,
                                channelId: p.id,
                                uploads: n,
                                stickers: i,
                                command: l,
                                isGif: o,
                                pendingReply: f,
                                alsoForwardToChannelId: C && null != (v = p.parent_id) ? v : void 0,
                                confettiPotionEmoji: r,
                                scheduledTimestamp:
                                    null == (a = this.props.pendingScheduledMessage) ? void 0 : a.scheduledTimestamp,
                            }),
                        ),
                        { location: eY.dy.CHAT_INPUT },
                    );
                    if (
                        (null != c && (_.announcementSendOptions = c),
                        null != s && (_.flags = (0, d.pj)(null != (x = _.flags) ? x : 0, eK.iLy.IS_COMPONENTS_V2)),
                        o)
                    )
                        return (
                            m.Z.sendMessage(p.id, S, void 0, _).then(() => {
                                if (C) {
                                    var e;
                                    eC.Z(null != (e = p.parent_id) ? e : void 0);
                                }
                            }),
                            (0, ec.A6)(p.id),
                            eg.E({
                                channelId: p.id,
                                enabled: !1,
                            }),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eU.KZ)(n);
                        if ((0, eU.Bf)(e, null == u ? void 0 : u.id))
                            return (
                                (0, ek.G)(p, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (_.eagerDispatch = !1),
                            (_.attachmentsToUpload = n),
                            (_.onAttachmentUploadError = (e, i, r) => {
                                (0, J.A)({
                                    file: e,
                                    guildId: p.getGuildId(),
                                    analyticsLocations: [],
                                    code: i,
                                    reason: r,
                                }) &&
                                    ("" !== t &&
                                        "" === ej.Z.getDraft(p.id, ej.d.ChannelMessage) &&
                                        h.Z.saveDraft(p.id, t, ej.d.ChannelMessage),
                                    0 === eT.Z.getUploadCount(p.id, ej.d.ChannelMessage) &&
                                        b.Z.setUploads({
                                            channelId: p.id,
                                            uploads: n,
                                            draftType: ej.d.ChannelMessage,
                                        }));
                            }),
                            b.Z.clearAll(p.id, ej.d.ChannelMessage);
                    }
                    if (null != _.scheduledTimestamp)
                        try {
                            await (0, ep.PV)({
                                channelId: p.id,
                                scheduledTimestamp: _.scheduledTimestamp,
                                messageSendData: {
                                    channelId: p.id,
                                    content: t,
                                    nonce: (0, ee.r)(),
                                    tts: y,
                                    message_reference: _.messageReference,
                                    allowed_mentions: _.allowedMentions,
                                    flags: _.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, eh.Hw)(_.scheduledTimestamp);
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
                        m.Z.sendMessage(p.id, S, void 0, _).then(() => {
                            if (C) {
                                var e;
                                eC.Z(null != (e = p.parent_id) ? e : void 0);
                            }
                        });
                    return (
                        this.setState((0, R.H2)()),
                        (0, ec.A6)(p.id),
                        (0, em.qB)(p.id, g.drafts.type),
                        eg.E({
                            channelId: p.id,
                            enabled: !1,
                        }),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0,
                        }
                    );
                });
            }),
            eQ(this, "handleSetValue", (e) => {
                var t, n;
                let i = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != i && (V.Q.select(i, []), i.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            eQ(this, "renderAttachButton", (e, t) =>
                (0, i.jsx)(k.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: ej.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                    chatInputType: this.props.chatInputType,
                }),
            ),
            eQ(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, i.jsx)(D.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class e8 extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused:
                      null != n && n.type !== eK.d4z.GUILD_ANNOUNCEMENT && !c.tq && eI.Z.can(eK.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    componentDidMount() {
        eR.S.subscribe(eK.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eR.S.unsubscribe(eK.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                threadsAlsoSendToChannel: c,
                chatInputType: d,
                placeholder: p,
                accessibilityLabel: h,
                showQuarantinedUserBanner: m,
                filterAfterTimestamp: g,
                communicationDisabledUntil: b,
                shakeIntensity: v,
                poggermodeEnabled: x,
                isSelectedResourceChannel: O,
                showAutomodUserProfileChatBlocker: E,
                pendingScheduledMessage: j,
                recipientUser: S,
                voiceChannel: _,
                messagesTypingGradient: P,
                showLinkedLobbyApplicationLoadingIndicator: I,
                announcementComposerEnabled: Z,
            } = this.props,
            { textAreaFocused: T, textAreaHighlighted: N } = this.state,
            A = d === M.Ie.SIDEBAR;
        t =
            A && n.type === eK.d4z.GUILD_VOICE
                ? eX.t.pnnyFZ
                : A && n.type === eK.d4z.GUILD_STAGE_VOICE
                  ? eX.t.YInSkq
                  : u.T.THREADS.has(n.type)
                    ? eX.t["OkzL+Q"]
                    : eX.t.UbNmGc;
        let w = (0, i.jsx)("div", {
                className: eJ.channelBottomBarArea,
                children: (0, i.jsx)(eG.Z, {}),
            }),
            R = (0, i.jsx)("div", {
                className: eJ.channelBottomBarArea,
                children: (0, i.jsx)(ey.Z, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, i.jsx)(e4, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: T,
                        highlighted: N,
                        channel: n,
                        guild: r,
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
                        shakeIntensity: v,
                        poggermodeEnabled: x,
                        pendingScheduledMessage: j,
                        announcementComposerEnabled: Z,
                    }),
                }),
            }),
            L = I ? w : R,
            { enabled: D } = ev.Z.getCurrentConfig({
                guildId: null == _ ? void 0 : _.guild_id,
                location: "ChannelChat",
            }),
            k = D && null != S && null != _ && null != _.guild_id;
        return (0, i.jsx)(
            y.Z,
            {
                page: (0, ew.mE)(this.props.channel),
                children: (0, i.jsx)(X.sW, {
                    children: (0, i.jsx)(Y.BV, {
                        children: (0, i.jsxs)(eM.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eM.d9, {
                                    event: eK.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, i.jsx)(eM.d9, {
                                    event: eK.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, i.jsx)(eM.d9, {
                                    event: eK.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, i.jsx)(eM.d9, {
                                    event: eK.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, i.jsxs)(e3, {
                                    isSidebar: A,
                                    className: eJ.chatContent,
                                    "aria-label": eX.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        k &&
                                            (0, i.jsx)(eq.Z, {
                                                recipientUser: S,
                                                voiceChannel: _,
                                            }),
                                        (0, i.jsx)(eH.Z, {
                                            channel: n,
                                            guild: r,
                                            narrow: A,
                                        }),
                                        (0, i.jsxs)(f.y5t, {
                                            component: (0, i.jsx)(f.nn4, {
                                                children: (0, i.jsx)(f.H, {
                                                    children: eX.intl.format(eX.t.eTzKkx, { channelName: n.name }),
                                                }),
                                            }),
                                            children: [
                                                (0, i.jsx)(en.Z, {
                                                    channel: n,
                                                    forceCozy: O,
                                                    filterAfterTimestamp: g,
                                                    showingQuarantineBanner: m,
                                                    typingGradient: P,
                                                }),
                                                O
                                                    ? null
                                                    : null !=
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: m,
                                                            guild: r,
                                                            communicationDisabledUntil: b,
                                                            showAutomodUserProfileChatBlocker: E,
                                                        }))
                                                      ? e
                                                      : (0, i.jsxs)("form", {
                                                            ref: this.inputFormRef,
                                                            onSubmit: e1,
                                                            className: a()(eJ.form, {
                                                                [eJ.formWithLoadedChatInput]: !I,
                                                            }),
                                                            children: [
                                                                x && (0, i.jsx)(ea.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(ez.Z, {
                                                                          channel: n,
                                                                          children: L,
                                                                      })
                                                                    : (0, i.jsx)(eW.Z, {
                                                                          channel: n,
                                                                          children: L,
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
            eQ(this, "containerDomRef", r.createRef()),
            eQ(this, "refToChannelTextAreaFormComponent", r.createRef()),
            eQ(this, "inputFormRef", r.createRef()),
            eQ(this, "state", {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id,
            }),
            eQ(this, "dispatchGroupRef", r.createRef()),
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
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (t)
                    switch (e.which) {
                        case eK.yXg.ARROW_LEFT:
                            n === M.Ie.SIDEBAR &&
                                eR.S.dispatch(eK.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eZ.Z.getChannelId() });
                            return;
                        case eK.yXg.ARROW_RIGHT:
                            n === M.Ie.NORMAL &&
                                eR.S.dispatch(eK.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: eO.ZP.getCurrentSidebarChannelId(i.id),
                                });
                    }
            }),
            eQ(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, B.PG)(t, this.props.chatInputType, this.props.channel.id);
            }),
            eQ(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return E._(S._b.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
            }),
            eQ(this, "handleChatInteract", () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            eQ(this, "renderMessageBanner", (e) => {
                let {
                    channel: t,
                    showQuarantinedUserBanner: n,
                    guild: r,
                    communicationDisabledUntil: l,
                    showAutomodUserProfileChatBlocker: a,
                } = e;
                return t.type === eK.d4z.DM && n
                    ? (0, i.jsx)(es.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, i.jsx)(ed.Z, { channelId: t.id })
                      : null != l && (0, z.J)(l) && null != r && !eI.Z.can(eK.Plq.ADMINISTRATOR, r)
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
let e6 = r.memo(function (e) {
    let { channel: t, guild: n, chatInputType: r, filterAfterTimestamp: l } = e,
        { placeholder: a, accessibilityLabel: o } = (0, eF.Z)({ channel: t }),
        s = (0, es.S)(eN.default.getCurrentUser(), t),
        [c] = (0, W.AB)(null == n ? void 0 : n.id),
        u = (0, H.Ux)(null == n ? void 0 : n.id),
        d = (0, p.e7)([eN.default], () => eN.default.getCurrentUser()),
        h = (0, p.e7)([e_.ZP], () => {
            var e, t, i;
            return (
                null != d &&
                null !=
                    (i =
                        null ==
                        (e = e_.ZP.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : eK.lds,
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
        v = (0, p.e7)([eZ.Z], () => eZ.Z.getVoiceChannelId()),
        O = (0, p.e7)([eE.Z], () => eE.Z.getChannel(v)),
        E = (0, p.e7)([eN.default], () => (t.type !== eK.d4z.DM ? null : eN.default.getUser(t.getRecipientId()))),
        j = (0, p.e7)([eb.Z], () => eb.Z.getAlsoSendToChannel(t.id)),
        S = (0, p.e7)([el.ZP, ex.default], () => el.ZP.getUserCombo(ex.default.getId(), t.id)),
        _ = (0, C.iD)(t),
        P = (0, C.d7)(t),
        I = _.length > 0 || t.rateLimitPerUser > 0 || null != S || null != P,
        { showLinkedLobbyApplicationLoadingIndicator: Z } = (0, eV.Z)(t.linkedLobby),
        T = (0, F.Z)("ChannelChat");
    return (0, i.jsx)(e8, {
        channel: t,
        isEditing: null != (0, p.e7)([eS.Z], () => eS.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, f.s9z)(f.JQI),
        guild: n,
        keyboardModeEnabled: (0, p.e7)([x.Z], () => x.Z.keyboardModeEnabled),
        pendingReply: (0, p.e7)([eu.Z], () => eu.Z.getPendingReply(t.id)),
        threadsAlsoSendToChannel: j,
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
        voiceChannel: O,
        messagesTypingGradient: I,
        showLinkedLobbyApplicationLoadingIndicator: Z,
        announcementComposerEnabled: T,
    });
});
