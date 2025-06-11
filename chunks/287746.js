n.d(t, { Z: () => to }), n(388685), n(35282), n(781311), n(997841);
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
    b = n(966390),
    _ = n(738619),
    y = n(410575),
    C = n(744061),
    x = n(410030),
    v = n(857595),
    j = n(607070),
    O = n(367907),
    E = n(450936),
    I = n(993766),
    P = n(499254),
    S = n(541099),
    Z = n(827498),
    N = n(533379),
    T = n(555573),
    A = n(456007),
    w = n(10718),
    R = n(998698),
    M = n(895924),
    k = n(581364),
    L = n(667204),
    D = n(404295),
    U = n(104919),
    B = n(541716),
    F = n(752305),
    G = n(516887),
    H = n(974251),
    V = n(893718),
    z = n(436660),
    W = n(338390),
    Y = n(436952),
    q = n(131565),
    K = n(355888),
    X = n(680783),
    Q = n(168551),
    J = n(28546),
    $ = n(295474),
    ee = n(521476),
    et = n(69882),
    en = n(71619),
    er = n(185145),
    ei = n(736052),
    el = n(146128),
    ea = n(549006),
    eo = n(58873),
    es = n(925975),
    ec = n(957730),
    eu = n(608530),
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
    ej = n(705533),
    eO = n(618857),
    eE = n(268350),
    eI = n(155409),
    eP = n(163612),
    eS = n(314897),
    eZ = n(433355),
    eN = n(592125),
    eT = n(703558),
    eA = n(323873),
    ew = n(271383),
    eR = n(375954),
    eM = n(496675),
    ek = n(944486),
    eL = n(117530),
    eD = n(594174),
    eU = n(626135),
    eB = n(934415),
    eF = n(459273),
    eG = n(585483),
    eH = n(709054),
    eV = n(838440),
    ez = n(127654),
    eW = n(979956),
    eY = n(655687),
    eq = n(165540),
    eK = n(583027),
    eX = n(25007),
    eQ = n(685006),
    eJ = n(685722),
    e$ = n(199649),
    e0 = n(1397),
    e1 = n(641861),
    e2 = n(981631),
    e3 = n(959517),
    e7 = n(388032),
    e8 = n(100658),
    e5 = n(672);
function e4(e, t, n) {
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
function e6(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                e4(e, t, n[t]);
            });
    }
    return e;
}
function e9(e, t) {
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
function te(e, t) {
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
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function tt(e) {
    e.preventDefault();
}
let tn = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function tr(e) {
    var { isSidebar: t } = e,
        n = te(e, ['isSidebar']);
    return t ? (0, r.jsx)('section', e9(e6({}, n), { role: 'complementary' })) : (0, r.jsx)('main', e6({}, n));
}
let ti = (e) => {
    let { ref: t } = e,
        n = te(e, ['ref']);
    return (0, r.jsx)(tl, e9(e6({}, n), { refInstance: t }));
};
ti.displayName = 'ChannelTextAreaForm';
class tl extends i.PureComponent {
    componentDidMount() {
        eT.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eT.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eT.Z.getDraft(n.id, eT.d.ChannelMessage);
            e !== r && this.setState((0, F.eK)(e));
        }
        t.textValue.length < e2.J6R && r.length >= e2.J6R && eU.default.track(e2.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessage(t.id, e.id, e.content), O.ZP.trackWithMetadata(e2.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: r } = (0, k.XA)(e.interactionData),
            { command: i, application: l } = w.Xq(
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
                          type: M.Qi.APPLICATION,
                          id: l.id,
                          icon: l.icon,
                          name: null != (o = null == l || null == (a = l.bot) ? void 0 : a.username) ? o : l.name,
                          application: l
                      }
                    : null;
            T.Po({
                channelId: t.id,
                command: i,
                section: e,
                location: M.Vh.RECALL,
                initialValues: (0, A.Dw)(i, null != r ? r : []),
                commandOrigin: M.bB.CHAT
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: i, onResize: l, highlighted: a, pendingReply: o, chatInputType: c, placeholder: u, accessibilityLabel: d, shakeIntensity: h, poggermodeEnabled: f, onCommandSentinelTyped: m, renderAppLauncherButton: g, renderAppCommandButton: b, pendingScheduledMessage: _ } = this.props,
            { contentWarningProps: y } = this.state,
            x = (0, r.jsx)(V.Z, {
                ref: this.props.refInstance,
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: e8.channelTextArea,
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
                promptToUpload: ez.d,
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
                null == y || null == (e = y.onCancel) || e.call(y), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != y,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return s()(null != y, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, r.jsx)(C.Z, e6({ onClose: t }, y));
            },
            children: () =>
                f
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
                          className: e8.shaker,
                          children: x
                      })
                    : x
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            e4(this, 'isFirstChange', !0),
            e4(this, 'editorRef', null),
            e4(this, 'state', e9(e6({}, (0, F.eK)(eT.Z.getDraft(this.props.channel.id, eT.d.ChannelMessage))), { contentWarningProps: null })),
            e4(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eT.Z.getDraft(e.channel.id, eT.d.ChannelMessage);
                n !== r &&
                    ('' === r || '' === n) &&
                    t.setState((0, F.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            e4(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case e2.yXg.DELETE:
                    case e2.yXg.BACKSPACE:
                        return void this.handleIncrementCombo('', 1);
                    case e2.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t)) eL.Z.getUploadCount(r.id, eT.d.ChannelMessage) > 0 ? eG.S.dispatchToLastSubscribed(e2.CkL.FOCUS_ATTACHMENT_AREA) : eG.S.dispatchToLastSubscribed(e2.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eR.Z.getLastChatCommandMessage(e.id),
                                n = eR.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eH.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case e2.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, v.rf)();
                        if (eL.Z.getUploadCount(r.id, eT.d.ChannelMessage) > 0) return void g.Z.clearAll(r.id, eT.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            e4(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = eS.default.getId(),
                    l = em.ZP.getUserCombo(i, r),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, eh.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : a,
                    multiplier: t
                });
            }),
            e4(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i }
                } = this.props;
                h.Z.changeDraft(i, t, eT.d.ChannelMessage);
                let l = '' !== t && n !== this.state.richValue,
                    a = l && !tn.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? m.Z.startTyping(i) : '' === t && m.Z.stopTyping(i),
                    l && r && (0, v.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            e4(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: r, confettiPotionEmoji: i, command: l, commandOptionValues: a, isGif: o } = e;
                if (0 === (t = t.trim()).length && (null == r || 0 === r.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: s, channel: c, pendingReply: u, chatInputType: d } = this.props,
                    p = !1;
                if (null != l) {
                    if (l.inputType === M.iw.BUILT_IN_INTEGRATION)
                        return (
                            eG.S.dispatch(e2.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = R.Z.getCommandOrigin(c.id);
                    if (null == e || e === M.bB.CHAT) {
                        let { isAuthorized: e } = await (0, U.L)({
                            applicationId: l.applicationId,
                            channel: c,
                            commandIntegrationTypes: l.integration_types
                        });
                        if (!e)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                    } else if (e === M.bB.APPLICATION_LAUNCHER || e === M.bB.IMAGE_RECS_MENU || e === M.bB.IMAGE_RECS_SUBMENU) {
                        var m;
                        let { location: t, sectionName: n } = null != (m = (0, eK._U)(l)) ? m : {},
                            r = e === M.bB.APPLICATION_LAUNCHER ? S.Z.lastShownEntrypoint() : Z._b.TEXT,
                            { isAuthorized: i } = await (0, U.L)({
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
                        (0, eK.SC)(l);
                    }
                    let n = await (0, L.Z)({
                        command: l,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: s,
                            channel: c
                        }
                    });
                    if (l.inputType !== M.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (p = !0 === n.tts));
                }
                return (0, eV.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: r,
                    uploads: n,
                    channel: c
                }).then(async (e) => {
                    var a;
                    let { valid: m, failureReason: _ } = e;
                    if (!m)
                        if (_ === e2.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eG.S.dispatch(e2.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2
                                }),
                                eG.S.dispatch(e2.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let y = (0, es.g)(t, {
                        channel: c,
                        isEdit: !1
                    });
                    null != y && (null != y.content && (t = y.content), null != y.tts && (p = y.tts));
                    let C = ec.ZP.parse(c, t);
                    C.tts = C.tts || p;
                    let x = f.Z.getSendMessageOptions({
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
                    if (((x.location = e3.dy.CHAT_INPUT), o))
                        return (
                            f.Z.sendMessage(c.id, C, void 0, x),
                            (0, ey.A6)(c.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if ((0, eu.L)('ChannelChat')) {
                        if (null != n && n.length > 0) {
                            let e = (0, eW.KZ)(n);
                            if ((0, eW.Bf)(e, null == s ? void 0 : s.id))
                                return (
                                    (0, ez.G)(c, e),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !1
                                    }
                                );
                            (x.eagerDispatch = !1),
                                (x.attachmentsToUpload = n),
                                (x.onAttachmentUploadError = (e, r, i) => {
                                    (0, eo.A)({
                                        file: e,
                                        guildId: c.getGuildId(),
                                        analyticsLocations: [],
                                        code: r,
                                        reason: i
                                    }) &&
                                        ('' !== t && '' === eT.Z.getDraft(c.id, eT.d.ChannelMessage) && h.Z.saveDraft(c.id, t, eT.d.ChannelMessage),
                                        0 === eL.Z.getUploadCount(c.id, eT.d.ChannelMessage) &&
                                            g.Z.setUploads({
                                                channelId: c.id,
                                                uploads: n,
                                                draftType: eT.d.ChannelMessage
                                            }));
                                }),
                                g.Z.clearAll(c.id, eT.d.ChannelMessage);
                        }
                        if (null != x.scheduledTimestamp)
                            try {
                                await (0, ev.PV)({
                                    channelId: c.id,
                                    scheduledTimestamp: x.scheduledTimestamp,
                                    messageSendData: {
                                        channelId: c.id,
                                        content: t,
                                        nonce: (0, ed.r)(),
                                        tts: p,
                                        message_reference: x.messageReference,
                                        allowed_mentions: x.allowedMentions,
                                        flags: x.flags
                                    },
                                    attachmentsToUpload: n
                                }),
                                    (0, eO.Hw)(x.scheduledTimestamp);
                            } catch (e) {
                                return (
                                    (0, eO.wW)(e.message),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !1
                                    }
                                );
                            }
                        else f.Z.sendMessage(c.id, C, void 0, x);
                    } else if (null != n && n.length > 0) {
                        let e = (0, eW.KZ)(n);
                        if ((0, eW.Bf)(e, null == s ? void 0 : s.id))
                            return (
                                (0, ez.G)(c, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        let t = x.scheduledTimestamp,
                            r = b.Z.uploadFiles({
                                channelId: c.id,
                                uploads: n,
                                draftType: eT.d.ChannelMessage,
                                parsedMessage: C,
                                options: x,
                                raiseEndpointErrors: null != t
                            });
                        null != t && r.then(() => (0, eO.Hw)(t)).catch((e) => (0, eO.wW)(e.message)), g.Z.clearAll(c.id, eT.d.ChannelMessage);
                    } else if (null != x.scheduledTimestamp)
                        try {
                            await (0, ev.PV)({
                                channelId: c.id,
                                scheduledTimestamp: x.scheduledTimestamp,
                                messageSendData: {
                                    channelId: c.id,
                                    content: t,
                                    nonce: (0, ed.r)(),
                                    tts: p,
                                    message_reference: x.messageReference,
                                    allowed_mentions: x.allowedMentions,
                                    flags: x.flags
                                }
                            }),
                                (0, eO.Hw)(x.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, eO.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        }
                    else null != r && r.length > 0 && '' === t ? f.Z.sendStickers(c.id, r, t, x, C.tts) : f.Z.sendMessage(c.id, C, void 0, x);
                    return (
                        this.setState((0, F.H2)()),
                        (0, ey.A6)(c.id),
                        (0, eE.qB)(c.id, d.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            e4(this, 'handleSetValue', (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (z.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            e4(this, 'renderAttachButton', (e, t) =>
                (0, r.jsx)(H.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eT.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            e4(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, r.jsx)(G.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class ta extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused: null != n && !c.tq && eM.Z.can(e2.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eG.S.subscribe(e2.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eG.S.unsubscribe(e2.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e, t;
        let n,
            { channel: i, guild: l, keyboardModeEnabled: o, hasModalOpen: s, pendingReply: c, chatInputType: d, placeholder: h, accessibilityLabel: f, showQuarantinedUserBanner: m, filterAfterTimestamp: g, communicationDisabledUntil: b, shakeIntensity: C, poggermodeEnabled: x, isSelectedResourceChannel: v, showAutomodUserProfileChatBlocker: j, showAppLauncherButton: O, showAppDMsUI: E, isInitialLoading: I, pendingScheduledMessage: P, recipientUser: S, voiceChannel: Z, theme: N, chatWallpaperState: T, wallpaperColorMix: A, messagesTypingGradient: w } = this.props,
            { textAreaFocused: R, textAreaHighlighted: M } = this.state,
            k = d === B.Ie.SIDEBAR;
        n = k && i.type === e2.d4z.GUILD_VOICE ? e7.t.pnnyFR : k && i.type === e2.d4z.GUILD_STAGE_VOICE ? e7.t.YInSkp : u.T.THREADS.has(i.type) ? e7.t['OkzL+f'] : e7.t.UbNmGR;
        let L = (0, r.jsx)('div', {
                className: e8.channelBottomBarArea,
                children: (0, r.jsx)(eJ.Z, {})
            }),
            D = (0, r.jsxs)('div', {
                className: e8.channelBottomBarArea,
                children: [
                    (0, r.jsx)(eI.Z, {
                        childRef: this.channelTextAreaFormRef,
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, r.jsx)(ti, {
                            ref: this.channelTextAreaFormRef,
                            focused: R,
                            highlighted: M,
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
                            pendingScheduledMessage: P
                        })
                    }),
                    this.renderAppCommandButton()
                ]
            }),
            U = E && I,
            F = U && I ? L : D,
            G = a()({
                [e5.barWithAppLauncherButton]: O,
                [e5.barWithAppsDMsUI]: E
            }),
            { enabled: H } = eP.Z.getCurrentConfig({
                guildId: null == Z ? void 0 : Z.guild_id,
                location: 'ChannelChat'
            }),
            V = Y.qM.getCurrentConfig({ location: 'ChannelChat' }).enabled,
            z = H && null != S && null != Z && null != Z.guild_id;
        return (0, r.jsx)(
            y.Z,
            {
                page: (0, eB.mE)(this.props.channel),
                children: (0, r.jsx)(ea.sW, {
                    children: (0, r.jsx)(el.BV, {
                        children: (0, r.jsxs)(eF.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eF.d9, {
                                    event: e2.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, r.jsx)(eF.d9, {
                                    event: e2.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, r.jsx)(eF.d9, {
                                    event: e2.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, r.jsx)(eF.d9, {
                                    event: e2.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, r.jsxs)(tr, {
                                    isSidebar: k,
                                    className: a()(e8.chatContent, {
                                        [e8.hasWallpaper]: null == T ? void 0 : T.isViewable,
                                        [Q.e3]: V ? (null == T ? void 0 : T.isViewable) : void 0,
                                        [null != (e = (0, p.QeD)(N)) ? e : '']: V ? (null == T ? void 0 : T.isViewable) : void 0
                                    }),
                                    'aria-label': e7.intl.formatToPlainString(n, { channelName: i.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: null != A ? A : {},
                                    children: [
                                        (0, r.jsx)(q.Z, { channel: i }),
                                        z &&
                                            (0, r.jsx)(e1.Z, {
                                                recipientUser: S,
                                                voiceChannel: Z
                                            }),
                                        (0, r.jsx)(eX.Z, {
                                            channel: i,
                                            guild: l,
                                            narrow: k
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: e7.intl.format(e7.t.eTzKk5, { channelName: i.name }) }) }),
                                            children: [
                                                (0, r.jsx)(ep.Z, {
                                                    channel: i,
                                                    forceCozy: v,
                                                    filterAfterTimestamp: g,
                                                    showingQuarantineBanner: m,
                                                    jumpBarClassName: G,
                                                    typingGradient: w
                                                }),
                                                v
                                                    ? null
                                                    : null !=
                                                        (t = this.renderMessageBanner({
                                                            channel: i,
                                                            showQuarantinedUserBanner: m,
                                                            guild: l,
                                                            communicationDisabledUntil: b,
                                                            showAutomodUserProfileChatBlocker: j
                                                        }))
                                                      ? t
                                                      : (0, r.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: tt,
                                                            className: a()(e8.form, { [e8.formWithLoadedChatInput]: !U }),
                                                            children: [
                                                                x && (0, r.jsx)(eg.Z, { channelId: i.id }),
                                                                i.isPrivate()
                                                                    ? (0, r.jsx)(e$.Z, {
                                                                          channel: i,
                                                                          children: F
                                                                      })
                                                                    : (0, r.jsx)(e0.Z, {
                                                                          channel: i,
                                                                          children: F
                                                                      }),
                                                                (0, r.jsx)(_.Z, {
                                                                    channel: i,
                                                                    poggermodeEnabled: x
                                                                })
                                                            ]
                                                        }),
                                                (0, r.jsx)(ea.kw, {})
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
        super(...e),
            e4(this, 'channelTextAreaFormRef', i.createRef()),
            e4(this, 'inputFormRef', i.createRef()),
            e4(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            e4(this, 'dispatchGroupRef', i.createRef()),
            e4(this, 'appIconAnimateRef', i.createRef()),
            e4(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            e4(this, 'handleInputFocus', (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            e4(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            e4(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e);
            }),
            e4(this, 'handleKeyDown', (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            e4(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case e2.yXg.ARROW_LEFT:
                            n === B.Ie.SIDEBAR && eG.S.dispatch(e2.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ek.Z.getChannelId() });
                            return;
                        case e2.yXg.ARROW_RIGHT:
                            n === B.Ie.NORMAL && eG.S.dispatch(e2.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eZ.ZP.getCurrentSidebarChannelId(r.id) });
                    }
            }),
            e4(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, J.PG)(t, this.props.chatInputType);
            }),
            e4(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return P.__(Z._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            e4(this, 'handleChatInteract', () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            e4(this, 'handleCommandSentinelTyped', () => {
                var e;
                null == (e = this.appIconAnimateRef.current) || e.animate();
            }),
            e4(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: i, communicationDisabledUntil: l, showAutomodUserProfileChatBlocker: a } = e;
                return t.type === e2.d4z.DM && n
                    ? (0, r.jsx)(e_.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, r.jsx)(ex.Z, { channelId: t.id })
                      : null != l && (0, et.J)(l) && null != i && !eM.Z.can(e2.Plq.ADMINISTRATOR, i)
                        ? (0, r.jsx)(er.T, {
                              guild: i,
                              disabledUntil: l
                          })
                        : a
                          ? (0, r.jsx)(ee.h, { guild: i })
                          : null;
            }),
            e4(this, 'renderAppLauncherButton', () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(eq.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t
                });
            }),
            e4(this, 'renderAppCommandButton', () => {
                let { showAppDMsUI: e, isFailedAppDMLoad: t, channel: n, entryPointCommandButtonRef: i, chatInputType: l } = this.props;
                return e && !t
                    ? (0, r.jsx)('div', {
                          className: e8.entryPointButtonContainer,
                          children: (0, r.jsx)(eQ.ZP, {
                              context: {
                                  channel: n,
                                  type: 'channel'
                              },
                              entryPointCommandButtonRef: i,
                              type: l
                          })
                      })
                    : null;
            });
    }
}
let to = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: a } = e,
        { placeholder: o, accessibilityLabel: s } = (0, eY.Z)({ channel: t }),
        c = (0, e_.S)(eD.default.getCurrentUser(), t),
        [u] = (0, en.AB)(null == n ? void 0 : n.id),
        h = (0, $.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([eD.default], () => eD.default.getCurrentUser()),
        m = (0, d.e7)([ew.ZP], () => {
            var e, t, r;
            return null != f && null != (r = null == (e = ew.ZP.getMember(null != (t = null == n ? void 0 : n.id) ? t : e2.lds, null == f ? void 0 : f.id)) ? void 0 : e.isPending) && r;
        }),
        g = (0, d.e7)([ef.Z], () => ef.Z.isEnabled()),
        b = (0, eb.Z)(t.id),
        y = (0, ei.Z)(t.id),
        C = (0, N.R)({
            channel: t,
            chatInputType: l
        }),
        v = (0, D.h9)(t.id),
        O = (0, ej.k)(t.id),
        P = (0, x.ZP)(),
        Z = (0, X.Z)(t.id),
        T = (0, K.Z)(null == Z ? void 0 : Z.wallpaperId),
        {
            isInitialLoading: A,
            primaryEntryPointCommand: w,
            isProfileFetching: R,
            wasProfileFetching: M,
            applicationId: k,
            channelId: L,
            commands: U
        } = (0, E.Z)({
            context: {
                channel: t,
                type: 'channel'
            }
        });
    (0, I.Z)({
        isProfileFetching: R,
        wasProfileFetching: M,
        applicationId: k,
        channelId: L,
        commands: U
    });
    let B = i.useRef(null),
        F = (0, d.e7)([S.Z], () => S.Z.appDMChannelsWithFailedLoads().has(t.id)),
        G = (0, d.e7)([ek.Z], () => ek.Z.getVoiceChannelId()),
        H = (0, d.e7)([eN.Z], () => eN.Z.getChannel(G)),
        V = (0, d.e7)([eD.default], () => (t.type !== e2.d4z.DM ? null : eD.default.getUser(t.getRecipientId()))),
        z = (0, d.e7)([em.ZP, eS.default], () => em.ZP.getUserCombo(eS.default.getId(), t.id)),
        Y = (0, _.i)(t).length > 0 || t.rateLimitPerUser > 0 || null != z,
        q = (0, W.Z)('ChannelChat');
    return (0, r.jsx)(ta, {
        channel: t,
        isEditing: null != (0, d.e7)([eA.Z], () => eA.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([eC.Z], () => eC.Z.getPendingReply(t.id)),
        chatInputType: l,
        placeholder: o,
        accessibilityLabel: s,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: u,
        shakeIntensity: b,
        poggermodeEnabled: g,
        isSelectedResourceChannel: y,
        showAutomodUserProfileChatBlocker: h && !m,
        showAppLauncherButton: C,
        showAppDMsUI: v,
        isInitialLoading: A,
        showEntryPointAppCommandButton: null != w,
        entryPointCommandButtonRef: B,
        isFailedAppDMLoad: F,
        pendingScheduledMessage: O,
        recipientUser: V,
        voiceChannel: H,
        theme: P,
        chatWallpaperState: Z,
        wallpaperColorMix: T,
        messagesTypingGradient: q && Y
    });
});
