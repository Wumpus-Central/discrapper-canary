n.d(t, { Z: () => ti }), n(388685), n(35282), n(781311), n(997841);
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
    C = n(410575),
    x = n(744061),
    y = n(410030),
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
    G = n(752305),
    F = n(516887),
    H = n(974251),
    V = n(893718),
    z = n(436660),
    W = n(436952),
    Y = n(131565),
    q = n(355888),
    K = n(680783),
    X = n(168551),
    Q = n(540059),
    J = n(28546),
    $ = n(295474),
    ee = n(521476),
    et = n(69882),
    en = n(71619),
    er = n(185145),
    ei = n(736052),
    el = n(146128),
    ea = n(549006),
    eo = n(925975),
    es = n(957730),
    ec = n(48854),
    eu = n(400023),
    ed = n(64078),
    ep = n(351780),
    eh = n(843693),
    ef = n(217871),
    em = n(139577),
    eg = n(247944),
    eb = n(623292),
    e_ = n(807092),
    eC = n(773359),
    ex = n(45251),
    ey = n(705533),
    ev = n(618857),
    ej = n(268350),
    eO = n(155409),
    eE = n(163612),
    eI = n(314897),
    eP = n(433355),
    eS = n(592125),
    eZ = n(703558),
    eN = n(323873),
    eT = n(271383),
    eA = n(375954),
    ew = n(496675),
    eR = n(944486),
    eM = n(117530),
    ek = n(594174),
    eL = n(626135),
    eD = n(934415),
    eU = n(459273),
    eB = n(585483),
    eG = n(709054),
    eF = n(838440),
    eH = n(127654),
    eV = n(979956),
    ez = n(655687),
    eW = n(165540),
    eY = n(583027),
    eq = n(25007),
    eK = n(685006),
    eX = n(685722),
    eQ = n(199649),
    eJ = n(1397),
    e$ = n(641861),
    e0 = n(981631),
    e1 = n(388032),
    e2 = n(22249),
    e3 = n(906557);
function e7(e, t, n) {
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
function e8(e) {
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
                e7(e, t, n[t]);
            });
    }
    return e;
}
function e5(e, t) {
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
function e6(e, t) {
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
function e4(e) {
    e.preventDefault();
}
let e9 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function te(e) {
    var { isSidebar: t } = e,
        n = e6(e, ['isSidebar']);
    return t ? (0, r.jsx)('section', e5(e8({}, n), { role: 'complementary' })) : (0, r.jsx)('main', e8({}, n));
}
let tt = (e) => {
    let { ref: t } = e,
        n = e6(e, ['ref']);
    return (0, r.jsx)(tn, e5(e8({}, n), { refInstance: t }));
};
tt.displayName = 'ChannelTextAreaForm';
class tn extends i.PureComponent {
    componentDidMount() {
        eZ.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eZ.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eZ.Z.getDraft(n.id, eZ.d.ChannelMessage);
            e !== r && this.setState((0, G.eK)(e));
        }
        t.textValue.length < e0.J6R && r.length >= e0.J6R && eL.default.track(e0.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessage(t.id, e.id, e.content), O.ZP.trackWithMetadata(e0.rMx.MESSAGE_EDIT_UP_ARROW);
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
            { contentWarningProps: C } = this.state,
            y = (0, r.jsx)(V.Z, {
                ref: this.props.refInstance,
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: e2.channelTextArea,
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
                promptToUpload: eH.d,
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
                null == C || null == (e = C.onCancel) || e.call(C), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != C,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return s()(null != C, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, r.jsx)(x.Z, e8({ onClose: t }, C));
            },
            children: () =>
                f
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
                          className: e2.shaker,
                          children: y
                      })
                    : y
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            e7(this, 'isFirstChange', !0),
            e7(this, 'editorRef', null),
            e7(this, 'state', e5(e8({}, (0, G.eK)(eZ.Z.getDraft(this.props.channel.id, eZ.d.ChannelMessage))), { contentWarningProps: null })),
            e7(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eZ.Z.getDraft(e.channel.id, eZ.d.ChannelMessage);
                n !== r &&
                    ('' === r || '' === n) &&
                    t.setState((0, G.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            e7(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case e0.yXg.DELETE:
                    case e0.yXg.BACKSPACE:
                        return void this.handleIncrementCombo('', 1);
                    case e0.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t)) eM.Z.getUploadCount(r.id, eZ.d.ChannelMessage) > 0 ? eB.S.dispatchToLastSubscribed(e0.CkL.FOCUS_ATTACHMENT_AREA) : eB.S.dispatchToLastSubscribed(e0.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eA.Z.getLastChatCommandMessage(e.id),
                                n = eA.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eG.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case e0.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, v.rf)();
                        if (eM.Z.getUploadCount(r.id, eZ.d.ChannelMessage) > 0) return void g.Z.clearAll(r.id, eZ.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            e7(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = eI.default.getId(),
                    l = eh.ZP.getUserCombo(i, r),
                    a = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, ed.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : a,
                    multiplier: t
                });
            }),
            e7(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i }
                } = this.props;
                h.Z.changeDraft(i, t, eZ.d.ChannelMessage);
                let l = '' !== t && n !== this.state.richValue,
                    a = l && !e9.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? m.Z.startTyping(i) : '' === t && m.Z.stopTyping(i),
                    l && r && (0, v.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            e7(this, 'handleSendMessage', async (e) => {
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
                            eB.S.dispatch(e0.CkL.SHAKE_APP, {
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
                        var h;
                        let { location: t, sectionName: n } = null != (h = (0, eY._U)(l)) ? h : {},
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
                        (0, eY.SC)(l);
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
                return (0, eF.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: r,
                    uploads: n,
                    channel: c
                }).then(async (e) => {
                    var a;
                    let { valid: h, failureReason: m } = e;
                    if (!h)
                        if (m === e0.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eB.S.dispatch(e0.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2
                                }),
                                eB.S.dispatch(e0.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let _ = (0, eo.g)(t, {
                        channel: c,
                        isEdit: !1
                    });
                    null != _ && (null != _.content && (t = _.content), null != _.tts && (p = _.tts));
                    let C = es.ZP.parse(c, t);
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
                    if (o)
                        return (
                            f.Z.sendMessage(c.id, C, void 0, x),
                            (0, eb.A6)(c.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eV.KZ)(n);
                        if ((0, eV.Bf)(e, null == s ? void 0 : s.id))
                            return (
                                (0, eH.G)(c, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        let t = x.scheduledTimestamp,
                            r = b.Z.uploadFiles({
                                channelId: c.id,
                                uploads: n,
                                draftType: eZ.d.ChannelMessage,
                                parsedMessage: C,
                                options: x,
                                raiseEndpointErrors: null != t
                            });
                        null != t && r.then(() => (0, ev.Hw)(t)).catch((e) => (0, ev.wW)(e.message)), g.Z.clearAll(c.id, eZ.d.ChannelMessage);
                    } else if (null != x.scheduledTimestamp)
                        try {
                            await (0, ex.PV)({
                                channelId: c.id,
                                scheduledTimestamp: x.scheduledTimestamp,
                                messageSendData: {
                                    channelId: c.id,
                                    content: t,
                                    nonce: (0, ec.r)(),
                                    tts: p,
                                    message_reference: x.messageReference,
                                    allowed_mentions: x.allowedMentions,
                                    flags: x.flags
                                }
                            }),
                                (0, ev.Hw)(x.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, ev.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        }
                    else null != r && r.length > 0 && '' === t ? f.Z.sendStickers(c.id, r, t, x, C.tts) : f.Z.sendMessage(c.id, C, void 0, x);
                    return (
                        this.setState((0, G.H2)()),
                        (0, eb.A6)(c.id),
                        (0, ej.qB)(c.id, d.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            e7(this, 'handleSetValue', (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (z.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            e7(this, 'renderAttachButton', (e, t) =>
                (0, r.jsx)(H.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eZ.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            e7(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, r.jsx)(F.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class tr extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused: null != n && !c.tq && ew.Z.can(e0.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eB.S.subscribe(e0.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eB.S.unsubscribe(e0.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e, t;
        let n,
            { channel: i, guild: l, keyboardModeEnabled: o, hasModalOpen: s, pendingReply: c, chatInputType: d, placeholder: h, accessibilityLabel: f, showQuarantinedUserBanner: m, filterAfterTimestamp: g, communicationDisabledUntil: b, shakeIntensity: x, poggermodeEnabled: y, isSelectedResourceChannel: v, showAutomodUserProfileChatBlocker: j, showAppLauncherButton: O, showAppDMsUI: E, isInitialLoading: I, isRefreshChatInputEnabled: P, isRefreshEnabled: S, pendingScheduledMessage: Z, recipientUser: N, voiceChannel: T, theme: A, chatWallpaperState: w, wallpaperColorMix: R } = this.props,
            { textAreaFocused: M, textAreaHighlighted: k } = this.state,
            L = d === B.Ie.SIDEBAR;
        n = L && i.type === e0.d4z.GUILD_VOICE ? e1.t.pnnyFR : L && i.type === e0.d4z.GUILD_STAGE_VOICE ? e1.t.YInSkp : u.T.THREADS.has(i.type) ? e1.t['OkzL+f'] : e1.t.UbNmGR;
        let D = (0, r.jsx)('div', {
                className: e2.channelBottomBarArea,
                children: (0, r.jsx)(eX.Z, {})
            }),
            U = (0, r.jsxs)('div', {
                className: e2.channelBottomBarArea,
                children: [
                    (0, r.jsx)(eO.Z, {
                        childRef: this.channelTextAreaFormRef,
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, r.jsx)(tt, {
                            ref: this.channelTextAreaFormRef,
                            focused: M,
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
                            shakeIntensity: x,
                            poggermodeEnabled: y,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped,
                            renderAppLauncherButton: this.renderAppLauncherButton,
                            renderAppCommandButton: this.renderAppCommandButton,
                            pendingScheduledMessage: Z
                        })
                    }),
                    S ? null : this.renderAppLauncherButton(),
                    P ? null : this.renderAppCommandButton()
                ]
            }),
            G = E && I,
            F = G && I ? D : U,
            H = a()({
                [e3.barWithAppLauncherButton]: O,
                [e3.barWithAppsDMsUI]: E
            }),
            { enabled: V } = eE.Z.getCurrentConfig({
                guildId: null == T ? void 0 : T.guild_id,
                location: 'ChannelChat'
            }),
            z = W.qM.getCurrentConfig({ location: 'ChannelChat' }).enabled,
            q = V && null != N && null != T && null != T.guild_id;
        return (0, r.jsx)(
            C.Z,
            {
                page: (0, eD.mE)(this.props.channel),
                children: (0, r.jsx)(ea.sW, {
                    children: (0, r.jsx)(el.BV, {
                        children: (0, r.jsxs)(eU.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eU.d9, {
                                    event: e0.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, r.jsx)(eU.d9, {
                                    event: e0.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, r.jsx)(eU.d9, {
                                    event: e0.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, r.jsx)(eU.d9, {
                                    event: e0.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, r.jsxs)(te, {
                                    isSidebar: L,
                                    className: a()(e2.chatContent, {
                                        [e2.hasWallpaper]: null == w ? void 0 : w.isViewable,
                                        [X.e3]: z ? (null == w ? void 0 : w.isViewable) : void 0,
                                        [null != (e = (0, p.QeD)(A)) ? e : '']: z ? (null == w ? void 0 : w.isViewable) : void 0
                                    }),
                                    'aria-label': e1.intl.formatToPlainString(n, { channelName: i.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: null != R ? R : {},
                                    children: [
                                        (0, r.jsx)(Y.Z, { channel: i }),
                                        q &&
                                            (0, r.jsx)(e$.Z, {
                                                recipientUser: N,
                                                voiceChannel: T
                                            }),
                                        (0, r.jsx)(eq.Z, {
                                            channel: i,
                                            guild: l,
                                            narrow: L
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: e1.intl.format(e1.t.eTzKk5, { channelName: i.name }) }) }),
                                            children: [
                                                (0, r.jsx)(eu.Z, {
                                                    channel: i,
                                                    forceCozy: v,
                                                    filterAfterTimestamp: g,
                                                    showingQuarantineBanner: m,
                                                    jumpBarClassName: H
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
                                                            onSubmit: e4,
                                                            className: a()(e2.form, { [e2.formWithLoadedChatInput]: !G }),
                                                            children: [
                                                                y && (0, r.jsx)(ef.Z, { channelId: i.id }),
                                                                i.isPrivate()
                                                                    ? (0, r.jsx)(eQ.Z, {
                                                                          channel: i,
                                                                          children: F
                                                                      })
                                                                    : (0, r.jsx)(eJ.Z, {
                                                                          channel: i,
                                                                          children: F
                                                                      }),
                                                                P
                                                                    ? null
                                                                    : (0, r.jsx)(_.Z, {
                                                                          channel: i,
                                                                          poggermodeEnabled: y
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
            e7(this, 'channelTextAreaFormRef', i.createRef()),
            e7(this, 'inputFormRef', i.createRef()),
            e7(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            e7(this, 'dispatchGroupRef', i.createRef()),
            e7(this, 'appIconAnimateRef', i.createRef()),
            e7(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            e7(this, 'handleInputFocus', (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            e7(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            e7(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e);
            }),
            e7(this, 'handleKeyDown', (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            e7(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case e0.yXg.ARROW_LEFT:
                            n === B.Ie.SIDEBAR && eB.S.dispatch(e0.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eR.Z.getChannelId() });
                            return;
                        case e0.yXg.ARROW_RIGHT:
                            n === B.Ie.NORMAL && eB.S.dispatch(e0.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eP.ZP.getCurrentSidebarChannelId(r.id) });
                    }
            }),
            e7(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, J.PG)(t, this.props.chatInputType);
            }),
            e7(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return P.__(Z._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            e7(this, 'handleChatInteract', () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            e7(this, 'handleCommandSentinelTyped', () => {
                var e;
                null == (e = this.appIconAnimateRef.current) || e.animate();
            }),
            e7(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: i, communicationDisabledUntil: l, showAutomodUserProfileChatBlocker: a } = e;
                return t.type === e0.d4z.DM && n
                    ? (0, r.jsx)(eg.Z, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, r.jsx)(eC.Z, { channelId: t.id })
                      : null != l && (0, et.J)(l) && null != i && !ew.Z.can(e0.Plq.ADMINISTRATOR, i)
                        ? (0, r.jsx)(er.T, {
                              guild: i,
                              disabledUntil: l
                          })
                        : a
                          ? (0, r.jsx)(ee.h, { guild: i })
                          : null;
            }),
            e7(this, 'renderAppLauncherButton', () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(eW.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t
                });
            }),
            e7(this, 'renderAppCommandButton', () => {
                let { showAppDMsUI: e, isFailedAppDMLoad: t, channel: n, entryPointCommandButtonRef: i, chatInputType: l } = this.props;
                return e && !t
                    ? (0, r.jsx)('div', {
                          className: e2.entryPointButtonContainer,
                          children: (0, r.jsx)(eK.ZP, {
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
let ti = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: a } = e,
        { placeholder: o, accessibilityLabel: s } = (0, ez.Z)({ channel: t }),
        c = (0, eg.S)(ek.default.getCurrentUser(), t),
        [u] = (0, en.AB)(null == n ? void 0 : n.id),
        h = (0, $.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([ek.default], () => ek.default.getCurrentUser()),
        m = (0, d.e7)([eT.ZP], () => {
            var e, t, r;
            return null != f && null != (r = null == (e = eT.ZP.getMember(null != (t = null == n ? void 0 : n.id) ? t : e0.lds, null == f ? void 0 : f.id)) ? void 0 : e.isPending) && r;
        }),
        g = (0, d.e7)([ep.Z], () => ep.Z.isEnabled()),
        b = (0, em.Z)(t.id),
        _ = (0, ei.Z)(t.id),
        C = (0, N.R)({
            channel: t,
            chatInputType: l
        }),
        x = (0, D.h9)(t.id),
        v = (0, ey.k)(t.id),
        O = (0, y.ZP)(),
        P = (0, K.Z)(t.id),
        Z = (0, q.Z)(null == P ? void 0 : P.wallpaperId),
        {
            isInitialLoading: T,
            primaryEntryPointCommand: A,
            isProfileFetching: w,
            wasProfileFetching: R,
            applicationId: M,
            channelId: k,
            commands: L
        } = (0, E.Z)({
            context: {
                channel: t,
                type: 'channel'
            }
        });
    (0, I.Z)({
        isProfileFetching: w,
        wasProfileFetching: R,
        applicationId: M,
        channelId: k,
        commands: L
    });
    let U = i.useRef(null),
        B = (0, d.e7)([S.Z], () => S.Z.appDMChannelsWithFailedLoads().has(t.id)),
        G = (0, Q.R6)('ChannelChat'),
        F = (0, Q.Q3)('ChannelChat'),
        H = (0, d.e7)([eR.Z], () => eR.Z.getVoiceChannelId()),
        V = (0, d.e7)([eS.Z], () => eS.Z.getChannel(H)),
        z = (0, d.e7)([ek.default], () => (t.type !== e0.d4z.DM ? null : ek.default.getUser(t.getRecipientId())));
    return (0, r.jsx)(tr, {
        channel: t,
        isEditing: null != (0, d.e7)([eN.Z], () => eN.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([e_.Z], () => e_.Z.getPendingReply(t.id)),
        chatInputType: l,
        placeholder: o,
        accessibilityLabel: s,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: u,
        shakeIntensity: b,
        poggermodeEnabled: g,
        isSelectedResourceChannel: _,
        showAutomodUserProfileChatBlocker: h && !m,
        showAppLauncherButton: C,
        showAppDMsUI: x,
        isInitialLoading: T,
        showEntryPointAppCommandButton: null != A,
        entryPointCommandButtonRef: U,
        isFailedAppDMLoad: B,
        isRefreshChatInputEnabled: G,
        isRefreshEnabled: F,
        pendingScheduledMessage: v,
        recipientUser: z,
        voiceChannel: V,
        theme: O,
        chatWallpaperState: P,
        wallpaperColorMix: Z
    });
});
