n.d(t, { Z: () => tn }), n(388685), n(35282), n(781311), n(997841);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
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
    k = n(895924),
    M = n(581364),
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
    eo = n(549006),
    ea = n(925975),
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
    ey = n(45251),
    eC = n(705533),
    ex = n(618857),
    ev = n(268350),
    ej = n(155409),
    eO = n(163612),
    eE = n(314897),
    eI = n(433355),
    eP = n(592125),
    eS = n(703558),
    eZ = n(323873),
    eN = n(271383),
    eT = n(375954),
    eA = n(496675),
    ew = n(944486),
    eR = n(117530),
    ek = n(594174),
    eM = n(626135),
    eL = n(934415),
    eD = n(459273),
    eU = n(585483),
    eB = n(709054),
    eG = n(838440),
    eF = n(127654),
    eH = n(979956),
    eV = n(655687),
    ez = n(165540),
    eW = n(583027),
    eY = n(25007),
    eq = n(685006),
    eK = n(685722),
    eX = n(199649),
    eQ = n(1397),
    eJ = n(641861),
    e$ = n(981631),
    e0 = n(388032),
    e1 = n(100658),
    e2 = n(672);
function e3(e, t, n) {
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
function e7(e) {
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
                e3(e, t, n[t]);
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
function e5(e) {
    e.preventDefault();
}
let e4 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['isSidebar']);
    return t ? (0, r.jsx)('section', e8(e7({}, n), { role: 'complementary' })) : (0, r.jsx)('main', e7({}, n));
}
let e9 = i.forwardRef((e, t) => (0, r.jsx)(te, e8(e7({}, e), { refInstance: t })));
e9.displayName = 'ChannelTextAreaForm';
class te extends i.PureComponent {
    componentDidMount() {
        eS.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eS.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eS.Z.getDraft(n.id, eS.d.ChannelMessage);
            e !== r && this.setState((0, G.eK)(e));
        }
        t.textValue.length < e$.J6R && r.length >= e$.J6R && eM.default.track(e$.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessage(t.id, e.id, e.content), O.ZP.trackWithMetadata(e$.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: r } = (0, M.XA)(e.interactionData),
            { command: i, application: l } = w.Xq(
                {
                    channel: t,
                    type: 'channel'
                },
                n
            );
        if (null != i) {
            var o, a;
            let e =
                null != l
                    ? {
                          type: k.Qi.APPLICATION,
                          id: l.id,
                          icon: l.icon,
                          name: null != (a = null == l || null == (o = l.bot) ? void 0 : o.username) ? a : l.name,
                          application: l
                      }
                    : null;
            T.Po({
                channelId: t.id,
                command: i,
                section: e,
                location: k.Vh.RECALL,
                initialValues: (0, A.Dw)(i, null != r ? r : []),
                commandOrigin: k.bB.CHAT
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: i, onResize: l, highlighted: o, pendingReply: a, chatInputType: c, placeholder: u, accessibilityLabel: d, shakeIntensity: h, poggermodeEnabled: f, onCommandSentinelTyped: m, renderAppLauncherButton: g, renderAppCommandButton: b, pendingScheduledMessage: _ } = this.props,
            { contentWarningProps: y } = this.state,
            x = (0, r.jsx)(V.Z, {
                ref: this.props.refInstance,
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: e1.channelTextArea,
                channel: e,
                placeholder: u,
                accessibilityLabel: d,
                pendingReply: a,
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
                promptToUpload: eF.d,
                highlighted: o,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: m,
                pendingScheduledMessage: _
            });
        return (0, r.jsx)(p.yRy, {
            position: 'top',
            onRequestClose: () => {
                var e;
                null == y || null == (e = y.onCancel) || e.call(y), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != y,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return s()(null != y, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, r.jsx)(C.Z, e7({ onClose: t }, y));
            },
            children: () =>
                f
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
                          className: e1.shaker,
                          children: x
                      })
                    : x
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            e3(this, 'isFirstChange', !0),
            e3(this, 'editorRef', null),
            e3(this, 'state', e8(e7({}, (0, G.eK)(eS.Z.getDraft(this.props.channel.id, eS.d.ChannelMessage))), { contentWarningProps: null })),
            e3(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eS.Z.getDraft(e.channel.id, eS.d.ChannelMessage);
                n !== r &&
                    ('' === r || '' === n) &&
                    t.setState((0, G.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            e3(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case e$.yXg.DELETE:
                    case e$.yXg.BACKSPACE:
                        return void this.handleIncrementCombo('', 1);
                    case e$.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t)) eR.Z.getUploadCount(r.id, eS.d.ChannelMessage) > 0 ? eU.S.dispatchToLastSubscribed(e$.CkL.FOCUS_ATTACHMENT_AREA) : eU.S.dispatchToLastSubscribed(e$.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eT.Z.getLastChatCommandMessage(e.id),
                                n = eT.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eB.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case e$.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, v.rf)();
                        if (eR.Z.getUploadCount(r.id, eS.d.ChannelMessage) > 0) return void g.Z.clearAll(r.id, eS.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            e3(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = eE.default.getId(),
                    l = eh.ZP.getUserCombo(i, r),
                    o = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, ed.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : o,
                    multiplier: t
                });
            }),
            e3(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i }
                } = this.props;
                h.Z.changeDraft(i, t, eS.d.ChannelMessage);
                let l = '' !== t && n !== this.state.richValue,
                    o = l && !e4.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    o && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    o ? m.Z.startTyping(i) : '' === t && m.Z.stopTyping(i),
                    l && r && (0, v.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            e3(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: r, confettiPotionEmoji: i, command: l, commandOptionValues: o, isGif: a } = e;
                if (0 === (t = t.trim()).length && (null == r || 0 === r.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: s, channel: c, pendingReply: u, chatInputType: d } = this.props,
                    p = !1;
                if (null != l) {
                    if (l.inputType === k.iw.BUILT_IN_INTEGRATION)
                        return (
                            eU.S.dispatch(e$.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = R.Z.getCommandOrigin(c.id);
                    if (null == e || e === k.bB.CHAT) {
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
                    } else if (e === k.bB.APPLICATION_LAUNCHER || e === k.bB.IMAGE_RECS_MENU || e === k.bB.IMAGE_RECS_SUBMENU) {
                        var h;
                        let { location: t, sectionName: n } = null != (h = (0, eW._U)(l)) ? h : {},
                            r = e === k.bB.APPLICATION_LAUNCHER ? S.Z.lastShownEntrypoint() : Z._b.TEXT,
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
                        (0, eW.SC)(l);
                    }
                    let n = await (0, L.Z)({
                        command: l,
                        optionValues: null != o ? o : {},
                        context: {
                            guild: s,
                            channel: c
                        }
                    });
                    if (l.inputType !== k.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (p = !0 === n.tts));
                }
                return (0, eG.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: r,
                    uploads: n,
                    channel: c
                }).then(async (e) => {
                    var o;
                    let { valid: h, failureReason: m } = e;
                    if (!h)
                        if (m === e$.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eU.S.dispatch(e$.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2
                                }),
                                eU.S.dispatch(e$.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let _ = (0, ea.g)(t, {
                        channel: c,
                        isEdit: !1
                    });
                    null != _ && (null != _.content && (t = _.content), null != _.tts && (p = _.tts));
                    let y = es.ZP.parse(c, t);
                    y.tts = y.tts || p;
                    let C = f.Z.getSendMessageOptions({
                        content: t,
                        channelId: c.id,
                        uploads: n,
                        stickers: r,
                        command: l,
                        isGif: a,
                        pendingReply: u,
                        confettiPotionEmoji: i,
                        scheduledTimestamp: null == (o = this.props.pendingScheduledMessage) ? void 0 : o.scheduledTimestamp
                    });
                    if (a)
                        return (
                            f.Z.sendMessage(c.id, y, void 0, C),
                            (0, eb.A6)(c.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eH.KZ)(n);
                        if ((0, eH.Bf)(e, null == s ? void 0 : s.id))
                            return (
                                (0, eF.G)(c, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        let t = C.scheduledTimestamp,
                            r = b.Z.uploadFiles({
                                channelId: c.id,
                                uploads: n,
                                draftType: eS.d.ChannelMessage,
                                parsedMessage: y,
                                options: C,
                                raiseEndpointErrors: null != t
                            });
                        null != t && r.then(() => (0, ex.Hw)(t)).catch((e) => (0, ex.wW)(e.message)), g.Z.clearAll(c.id, eS.d.ChannelMessage);
                    } else if (null != C.scheduledTimestamp)
                        try {
                            await (0, ey.PV)({
                                channelId: c.id,
                                scheduledTimestamp: C.scheduledTimestamp,
                                messageSendData: {
                                    channelId: c.id,
                                    content: t,
                                    nonce: (0, ec.r)(),
                                    tts: p,
                                    message_reference: C.messageReference,
                                    allowed_mentions: C.allowedMentions,
                                    flags: C.flags
                                }
                            }),
                                (0, ex.Hw)(C.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, ex.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        }
                    else null != r && r.length > 0 && '' === t ? f.Z.sendStickers(c.id, r, t, C, y.tts) : f.Z.sendMessage(c.id, y, void 0, C);
                    return (
                        this.setState((0, G.H2)()),
                        (0, eb.A6)(c.id),
                        (0, ev.qB)(c.id, d.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            e3(this, 'handleSetValue', (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (z.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            e3(this, 'renderAttachButton', (e, t) =>
                (0, r.jsx)(H.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eS.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            e3(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, r.jsx)(F.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class tt extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused: null != n && !c.tq && eA.Z.can(e$.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eU.S.subscribe(e$.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eU.S.unsubscribe(e$.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e, t;
        let n,
            { channel: i, guild: l, keyboardModeEnabled: a, hasModalOpen: s, pendingReply: c, chatInputType: d, placeholder: h, accessibilityLabel: f, showQuarantinedUserBanner: m, filterAfterTimestamp: g, communicationDisabledUntil: b, shakeIntensity: C, poggermodeEnabled: x, isSelectedResourceChannel: v, showAutomodUserProfileChatBlocker: j, showAppLauncherButton: O, showAppDMsUI: E, isInitialLoading: I, isRefreshChatInputEnabled: P, isRefreshEnabled: S, pendingScheduledMessage: Z, recipientUser: N, voiceChannel: T, theme: A, chatWallpaperState: w, wallpaperColorMix: R } = this.props,
            { textAreaFocused: k, textAreaHighlighted: M } = this.state,
            L = d === B.Ie.SIDEBAR;
        n = L && i.type === e$.d4z.GUILD_VOICE ? e0.t.pnnyFR : L && i.type === e$.d4z.GUILD_STAGE_VOICE ? e0.t.YInSkp : u.T.THREADS.has(i.type) ? e0.t['OkzL+f'] : e0.t.UbNmGR;
        let D = (0, r.jsx)('div', {
                className: e1.channelBottomBarArea,
                children: (0, r.jsx)(eK.Z, {})
            }),
            U = (0, r.jsxs)('div', {
                className: e1.channelBottomBarArea,
                children: [
                    (0, r.jsx)(ej.Z, {
                        childRef: this.channelTextAreaFormRef,
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, r.jsx)(e9, {
                            ref: this.channelTextAreaFormRef,
                            focused: k,
                            highlighted: M,
                            channel: i,
                            guild: l,
                            keyboardModeEnabled: a,
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
                            pendingScheduledMessage: Z
                        })
                    }),
                    S ? null : this.renderAppLauncherButton(),
                    P ? null : this.renderAppCommandButton()
                ]
            }),
            G = E && I,
            F = G && I ? D : U,
            H = o()({
                [e2.barWithAppLauncherButton]: O,
                [e2.barWithAppsDMsUI]: E
            }),
            { enabled: V } = eO.Z.getCurrentConfig({
                guildId: null == T ? void 0 : T.guild_id,
                location: 'ChannelChat'
            }),
            z = W.qM.getCurrentConfig({ location: 'ChannelChat' }).enabled,
            q = V && null != N && null != T && null != T.guild_id;
        return (0, r.jsx)(
            y.Z,
            {
                page: (0, eL.mE)(this.props.channel),
                children: (0, r.jsx)(eo.sW, {
                    children: (0, r.jsx)(el.BV, {
                        children: (0, r.jsxs)(eD.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eD.d9, {
                                    event: e$.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, r.jsx)(eD.d9, {
                                    event: e$.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, r.jsx)(eD.d9, {
                                    event: e$.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, r.jsx)(eD.d9, {
                                    event: e$.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, r.jsxs)(e6, {
                                    isSidebar: L,
                                    className: o()(e1.chatContent, {
                                        [e1.hasWallpaper]: null == w ? void 0 : w.isViewable,
                                        [X.e3]: z ? (null == w ? void 0 : w.isViewable) : void 0,
                                        [null != (e = (0, p.QeD)(A)) ? e : '']: z ? (null == w ? void 0 : w.isViewable) : void 0
                                    }),
                                    'aria-label': e0.intl.formatToPlainString(n, { channelName: i.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: null != R ? R : {},
                                    children: [
                                        (0, r.jsx)(Y.Z, { channel: i }),
                                        q &&
                                            (0, r.jsx)(eJ.Z, {
                                                recipientUser: N,
                                                voiceChannel: T
                                            }),
                                        (0, r.jsx)(eY.Z, {
                                            channel: i,
                                            guild: l,
                                            narrow: L
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: e0.intl.format(e0.t.eTzKk5, { channelName: i.name }) }) }),
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
                                                            onSubmit: e5,
                                                            className: o()(e1.form, { [e1.formWithLoadedChatInput]: !G }),
                                                            children: [
                                                                x && (0, r.jsx)(ef.Z, { channelId: i.id }),
                                                                i.isPrivate()
                                                                    ? (0, r.jsx)(eX.Z, {
                                                                          channel: i,
                                                                          children: F
                                                                      })
                                                                    : (0, r.jsx)(eQ.Z, {
                                                                          channel: i,
                                                                          children: F
                                                                      }),
                                                                P
                                                                    ? null
                                                                    : (0, r.jsx)(_.Z, {
                                                                          channel: i,
                                                                          poggermodeEnabled: x
                                                                      })
                                                            ]
                                                        }),
                                                (0, r.jsx)(eo.kw, {})
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
            e3(this, 'channelTextAreaFormRef', i.createRef()),
            e3(this, 'inputFormRef', i.createRef()),
            e3(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            e3(this, 'dispatchGroupRef', i.createRef()),
            e3(this, 'appIconAnimateRef', i.createRef()),
            e3(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            e3(this, 'handleInputFocus', (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            e3(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            e3(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e);
            }),
            e3(this, 'handleKeyDown', (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            e3(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case e$.yXg.ARROW_LEFT:
                            n === B.Ie.SIDEBAR && eU.S.dispatch(e$.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ew.Z.getChannelId() });
                            return;
                        case e$.yXg.ARROW_RIGHT:
                            n === B.Ie.NORMAL && eU.S.dispatch(e$.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eI.ZP.getCurrentSidebarChannelId(r.id) });
                    }
            }),
            e3(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, J.PG)(t, this.props.chatInputType);
            }),
            e3(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return P.__(Z._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            e3(this, 'handleChatInteract', () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            e3(this, 'handleCommandSentinelTyped', () => {
                var e;
                null == (e = this.appIconAnimateRef.current) || e.animate();
            }),
            e3(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: i, communicationDisabledUntil: l, showAutomodUserProfileChatBlocker: o } = e;
                return t.type === e$.d4z.DM && n
                    ? (0, r.jsx)(eg.Z, {})
                    : null != l && (0, et.J)(l) && null != i && !eA.Z.can(e$.Plq.ADMINISTRATOR, i)
                      ? (0, r.jsx)(er.T, {
                            guild: i,
                            disabledUntil: l
                        })
                      : o
                        ? (0, r.jsx)(ee.h, { guild: i })
                        : null;
            }),
            e3(this, 'renderAppLauncherButton', () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(ez.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t
                });
            }),
            e3(this, 'renderAppCommandButton', () => {
                let { showAppDMsUI: e, isFailedAppDMLoad: t, channel: n, entryPointCommandButtonRef: i, chatInputType: l } = this.props;
                return e && !t
                    ? (0, r.jsx)('div', {
                          className: e1.entryPointButtonContainer,
                          children: (0, r.jsx)(eq.ZP, {
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
let tn = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: o } = e,
        { placeholder: a, accessibilityLabel: s } = (0, eV.Z)({ channel: t }),
        c = (0, eg.S)(ek.default.getCurrentUser(), t),
        [u] = (0, en.AB)(null == n ? void 0 : n.id),
        h = (0, $.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([ek.default], () => ek.default.getCurrentUser()),
        m = (0, d.e7)([eN.ZP], () => {
            var e, t, r;
            return null != f && null != (r = null == (e = eN.ZP.getMember(null != (t = null == n ? void 0 : n.id) ? t : e$.lds, null == f ? void 0 : f.id)) ? void 0 : e.isPending) && r;
        }),
        g = (0, d.e7)([ep.Z], () => ep.Z.isEnabled()),
        b = (0, em.Z)(t.id),
        _ = (0, ei.Z)(t.id),
        y = (0, N.R)({
            channel: t,
            chatInputType: l
        }),
        C = (0, D.h9)(t.id),
        v = (0, eC.k)(t.id),
        O = (0, x.ZP)(),
        P = (0, K.Z)(t.id),
        Z = (0, q.Z)(null == P ? void 0 : P.wallpaperId),
        {
            isInitialLoading: T,
            primaryEntryPointCommand: A,
            isProfileFetching: w,
            wasProfileFetching: R,
            applicationId: k,
            channelId: M,
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
        applicationId: k,
        channelId: M,
        commands: L
    });
    let U = i.useRef(null),
        B = (0, d.e7)([S.Z], () => S.Z.appDMChannelsWithFailedLoads().has(t.id)),
        G = (0, Q.R6)('ChannelChat'),
        F = (0, Q.Q3)('ChannelChat'),
        H = (0, d.e7)([ew.Z], () => ew.Z.getVoiceChannelId()),
        V = (0, d.e7)([eP.Z], () => eP.Z.getChannel(H)),
        z = (0, d.e7)([ek.default], () => (t.type !== e$.d4z.DM ? null : ek.default.getUser(t.getRecipientId())));
    return (0, r.jsx)(tt, {
        channel: t,
        isEditing: null != (0, d.e7)([eZ.Z], () => eZ.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([e_.Z], () => e_.Z.getPendingReply(t.id)),
        chatInputType: l,
        placeholder: a,
        accessibilityLabel: s,
        filterAfterTimestamp: o,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: u,
        shakeIntensity: b,
        poggermodeEnabled: g,
        isSelectedResourceChannel: _,
        showAutomodUserProfileChatBlocker: h && !m,
        showAppLauncherButton: y,
        showAppDMsUI: C,
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
