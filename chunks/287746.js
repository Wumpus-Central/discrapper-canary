n.d(t, { Z: () => e8 }), n(388685), n(35282), n(781311), n(997841);
var r = n(200651),
    i = n(192379),
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
    C = n(410575),
    y = n(744061),
    x = n(857595),
    v = n(607070),
    j = n(367907),
    O = n(450936),
    E = n(993766),
    N = n(499254),
    I = n(541099),
    P = n(827498),
    S = n(46332),
    Z = n(533379),
    T = n(555573),
    A = n(456007),
    w = n(10718),
    R = n(998698),
    k = n(895924),
    M = n(581364),
    L = n(667204),
    D = n(404295),
    W = n(541716),
    U = n(752305),
    B = n(516887),
    H = n(974251),
    F = n(893718),
    G = n(436660),
    V = n(131565),
    z = n(540059),
    Y = n(28546),
    q = n(295474),
    K = n(521476),
    X = n(69882),
    Q = n(71619),
    J = n(185145),
    $ = n(736052),
    ee = n(146128),
    et = n(549006),
    en = n(925975),
    er = n(957730),
    ei = n(48854),
    el = n(400023),
    eo = n(64078),
    ea = n(351780),
    es = n(843693),
    ec = n(217871),
    eu = n(139577),
    ed = n(247944),
    ep = n(623292),
    eh = n(807092),
    ef = n(45251),
    em = n(705533),
    eg = n(618857),
    eb = n(268350),
    e_ = n(155409),
    eC = n(163612),
    ey = n(314897),
    ex = n(433355),
    ev = n(592125),
    ej = n(703558),
    eO = n(323873),
    eE = n(271383),
    eN = n(375954),
    eI = n(496675),
    eP = n(944486),
    eS = n(117530),
    eZ = n(594174),
    eT = n(626135),
    eA = n(934415),
    ew = n(459273),
    eR = n(585483),
    ek = n(709054),
    eM = n(838440),
    eL = n(127654),
    eD = n(979956),
    eW = n(655687),
    eU = n(165540),
    eB = n(583027),
    eH = n(25007),
    eF = n(685006),
    eG = n(685722),
    eV = n(199649),
    ez = n(1397),
    eY = n(641861),
    eq = n(981631),
    eK = n(388032),
    eX = n(100658),
    eQ = n(672);
function eJ(e, t, n) {
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
function e$(e) {
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
let e2 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['isSidebar']);
    return t ? (0, r.jsx)('section', e0(e$({}, n), { role: 'complementary' })) : (0, r.jsx)('main', e$({}, n));
}
let e7 = i.forwardRef((e, t) => (0, r.jsx)(e4, e0(e$({}, e), { refInstance: t })));
e7.displayName = 'ChannelTextAreaForm';
class e4 extends i.PureComponent {
    componentDidMount() {
        ej.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ej.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ej.Z.getDraft(n.id, ej.d.ChannelMessage);
            e !== r && this.setState((0, U.eK)(e));
        }
        t.textValue.length < eq.J6R && r.length >= eq.J6R && eT.default.track(eq.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessage(t.id, e.id, e.content), j.ZP.trackWithMetadata(eq.rMx.MESSAGE_EDIT_UP_ARROW);
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
                initialValues: (0, A.Dw)(i, null != r ? r : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: i, onResize: l, highlighted: o, pendingReply: a, chatInputType: c, placeholder: u, accessibilityLabel: d, shakeIntensity: h, poggermodeEnabled: f, onCommandSentinelTyped: m, renderAppLauncherButton: g, renderAppCommandButton: b, pendingScheduledMessage: _ } = this.props,
            { contentWarningProps: C } = this.state,
            x = (0, r.jsx)(F.Z, {
                ref: this.props.refInstance,
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eX.channelTextArea,
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
                promptToUpload: eL.d,
                highlighted: o,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: m,
                pendingScheduledMessage: _
            });
        return (0, r.jsx)(p.yRy, {
            position: 'top',
            onRequestClose: () => {
                var e;
                null == C || null == (e = C.onCancel) || e.call(C), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != C,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return s()(null != C, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, r.jsx)(y.Z, e$({ onClose: t }, C));
            },
            children: () =>
                f
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
                          className: eX.shaker,
                          children: x
                      })
                    : x
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eJ(this, 'isFirstChange', !0),
            eJ(this, 'editorRef', null),
            eJ(this, 'state', e0(e$({}, (0, U.eK)(ej.Z.getDraft(this.props.channel.id, ej.d.ChannelMessage))), { contentWarningProps: null })),
            eJ(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = ej.Z.getDraft(e.channel.id, ej.d.ChannelMessage);
                n !== r &&
                    ('' === r || '' === n) &&
                    t.setState((0, U.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eJ(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eq.yXg.DELETE:
                    case eq.yXg.BACKSPACE:
                        return void this.handleIncrementCombo('', 1);
                    case eq.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t)) eS.Z.getUploadCount(r.id, ej.d.ChannelMessage) > 0 ? eR.S.dispatchToLastSubscribed(eq.CkL.FOCUS_ATTACHMENT_AREA) : eR.S.dispatchToLastSubscribed(eq.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eN.Z.getLastChatCommandMessage(e.id),
                                n = eN.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (ek.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eq.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, x.rf)();
                        if (eS.Z.getUploadCount(r.id, ej.d.ChannelMessage) > 0) return void g.Z.clearAll(r.id, ej.d.ChannelMessage);
                }
                null == n || n(e, l);
            }),
            eJ(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = ey.default.getId(),
                    l = es.ZP.getUserCombo(i, r),
                    o = (null != (n = null == l ? void 0 : l.value) ? n : 0) + 1;
                (0, eo.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : o,
                    multiplier: t
                });
            }),
            eJ(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i }
                } = this.props;
                h.Z.changeDraft(i, t, ej.d.ChannelMessage);
                let l = '' !== t && n !== this.state.richValue,
                    o = l && !e2.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    o && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    o ? m.Z.startTyping(i) : '' === t && m.Z.stopTyping(i),
                    l && r && (0, x.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            eJ(this, 'handleSendMessage', async (e) => {
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
                            eR.S.dispatch(eq.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = R.Z.getCommandOrigin(c.id);
                    if (e === k.bB.APPLICATION_LAUNCHER || e === k.bB.IMAGE_RECS_MENU || e === k.bB.IMAGE_RECS_SUBMENU) {
                        var h;
                        let { location: t, sectionName: n } = null != (h = (0, eB._U)(l)) ? h : {},
                            r = e === k.bB.APPLICATION_LAUNCHER ? I.Z.lastShownEntrypoint() : P._b.TEXT;
                        if (
                            !(await (0, S.L)({
                                applicationId: l.applicationId,
                                channel: c,
                                location: t,
                                sectionName: n,
                                entrypoint: r
                            }))
                        )
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, eB.SC)(l);
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
                return (0, eM.v)({
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
                        if (m === eq.zYc.SLOWMODE_COOLDOWN)
                            return (
                                eR.S.dispatch(eq.CkL.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2
                                }),
                                eR.S.dispatch(eq.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let _ = (0, en.g)(t, {
                        channel: c,
                        isEdit: !1
                    });
                    null != _ && (null != _.content && (t = _.content), null != _.tts && (p = _.tts));
                    let C = er.ZP.parse(c, t);
                    C.tts = C.tts || p;
                    let y = f.Z.getSendMessageOptions({
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
                            f.Z.sendMessage(c.id, C, void 0, y),
                            (0, ep.A6)(c.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eD.KZ)(n);
                        if ((0, eD.Bf)(e, null == s ? void 0 : s.id))
                            return (
                                (0, eL.G)(c, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        let t = y.scheduledTimestamp,
                            r = b.Z.uploadFiles({
                                channelId: c.id,
                                uploads: n,
                                draftType: ej.d.ChannelMessage,
                                parsedMessage: C,
                                options: y,
                                raiseEndpointErrors: null != t
                            });
                        null != t && r.then(() => (0, eg.Hw)(t)).catch((e) => (0, eg.wW)(e.message)), g.Z.clearAll(c.id, ej.d.ChannelMessage);
                    } else if (null != y.scheduledTimestamp)
                        try {
                            await (0, ef.PV)({
                                channelId: c.id,
                                scheduledTimestamp: y.scheduledTimestamp,
                                messageSendData: {
                                    channelId: c.id,
                                    content: t,
                                    nonce: (0, ei.r)(),
                                    tts: p,
                                    message_reference: y.messageReference,
                                    allowed_mentions: y.allowedMentions,
                                    flags: y.flags
                                }
                            }),
                                (0, eg.Hw)(y.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, eg.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        }
                    else null != r && r.length > 0 && '' === t ? f.Z.sendStickers(c.id, r, t, y, C.tts) : f.Z.sendMessage(c.id, C, void 0, y);
                    return (
                        this.setState((0, U.H2)()),
                        (0, ep.A6)(c.id),
                        (0, eb.qB)(c.id, d.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            eJ(this, 'handleSetValue', (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (G.Q.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            eJ(this, 'renderAttachButton', (e, t) =>
                (0, r.jsx)(H.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: ej.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eJ(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, r.jsx)(B.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class e6 extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused: null != n && !c.tq && eI.Z.can(eq.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eR.S.subscribe(eq.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eR.S.unsubscribe(eq.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t,
            { channel: n, guild: i, keyboardModeEnabled: l, hasModalOpen: a, pendingReply: s, chatInputType: c, placeholder: d, accessibilityLabel: h, showQuarantinedUserBanner: f, filterAfterTimestamp: m, communicationDisabledUntil: g, shakeIntensity: b, poggermodeEnabled: y, isSelectedResourceChannel: x, showAutomodUserProfileChatBlocker: v, showAppLauncherButton: j, showAppDMsUI: O, isInitialLoading: E, isRefreshChatInputEnabled: N, isRefreshEnabled: I, pendingScheduledMessage: P, recipientUser: S, voiceChannel: Z } = this.props,
            { textAreaFocused: T, textAreaHighlighted: A } = this.state,
            w = c === W.Ie.SIDEBAR;
        t = w && n.type === eq.d4z.GUILD_VOICE ? eK.t.pnnyFR : w && n.type === eq.d4z.GUILD_STAGE_VOICE ? eK.t.YInSkp : u.T.THREADS.has(n.type) ? eK.t['OkzL+f'] : eK.t.UbNmGR;
        let R = (0, r.jsx)('div', {
                className: eX.channelBottomBarArea,
                children: (0, r.jsx)(eG.Z, {})
            }),
            k = (0, r.jsxs)('div', {
                className: eX.channelBottomBarArea,
                children: [
                    (0, r.jsx)(e_.Z, {
                        childRef: this.channelTextAreaFormRef,
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, r.jsx)(e7, {
                            ref: this.channelTextAreaFormRef,
                            focused: T,
                            highlighted: A,
                            channel: n,
                            guild: i,
                            keyboardModeEnabled: l,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: a,
                            pendingReply: s,
                            chatInputType: c,
                            placeholder: d,
                            accessibilityLabel: h,
                            shakeIntensity: b,
                            poggermodeEnabled: y,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped,
                            renderAppLauncherButton: this.renderAppLauncherButton,
                            renderAppCommandButton: this.renderAppCommandButton,
                            pendingScheduledMessage: P
                        })
                    }),
                    I ? null : this.renderAppLauncherButton(),
                    N ? null : this.renderAppCommandButton()
                ]
            }),
            M = O && E,
            L = M && E ? R : k,
            D = o()({
                [eQ.barWithAppLauncherButton]: j,
                [eQ.barWithAppsDMsUI]: O
            }),
            { enabled: U } = eC.Z.getCurrentConfig({
                guildId: null == Z ? void 0 : Z.guild_id,
                location: 'ChannelChat'
            }),
            B = U && null != S && null != Z;
        return (0, r.jsx)(
            C.Z,
            {
                page: (0, eA.mE)(this.props.channel),
                children: (0, r.jsx)(et.sW, {
                    children: (0, r.jsx)(ee.BV, {
                        children: (0, r.jsxs)(ew.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(ew.d9, {
                                    event: eq.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, r.jsx)(ew.d9, {
                                    event: eq.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, r.jsx)(ew.d9, {
                                    event: eq.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, r.jsx)(ew.d9, {
                                    event: eq.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, r.jsxs)(e3, {
                                    isSidebar: w,
                                    className: eX.chatContent,
                                    'aria-label': eK.NW.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, r.jsx)(V.Z, { channel: n }),
                                        B &&
                                            (0, r.jsx)(eY.Z, {
                                                recipientUser: S,
                                                voiceChannel: Z
                                            }),
                                        (0, r.jsx)(eH.Z, {
                                            channel: n,
                                            guild: i,
                                            narrow: w
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: eK.NW.format(eK.t.eTzKk5, { channelName: n.name }) }) }),
                                            children: [
                                                (0, r.jsx)(el.Z, {
                                                    channel: n,
                                                    forceCozy: x,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: f,
                                                    jumpBarClassName: D
                                                }),
                                                x
                                                    ? null
                                                    : null !=
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: f,
                                                            guild: i,
                                                            communicationDisabledUntil: g,
                                                            showAutomodUserProfileChatBlocker: v
                                                        }))
                                                      ? e
                                                      : (0, r.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: e1,
                                                            className: o()(eX.form, { [eX.formWithLoadedChatInput]: !M }),
                                                            children: [
                                                                y && (0, r.jsx)(ec.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, r.jsx)(eV.Z, {
                                                                          channel: n,
                                                                          children: L
                                                                      })
                                                                    : (0, r.jsx)(ez.Z, {
                                                                          channel: n,
                                                                          children: L
                                                                      }),
                                                                N
                                                                    ? null
                                                                    : (0, r.jsx)(_.Z, {
                                                                          channel: n,
                                                                          poggermodeEnabled: y
                                                                      })
                                                            ]
                                                        }),
                                                (0, r.jsx)(et.kw, {})
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            },
            'messages-'.concat(n.id)
        );
    }
    constructor(...e) {
        super(...e),
            eJ(this, 'channelTextAreaFormRef', i.createRef()),
            eJ(this, 'inputFormRef', i.createRef()),
            eJ(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eJ(this, 'dispatchGroupRef', i.createRef()),
            eJ(this, 'appIconAnimateRef', i.createRef()),
            eJ(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            eJ(this, 'handleInputFocus', (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eJ(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            eJ(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e);
            }),
            eJ(this, 'handleKeyDown', (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            eJ(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case eq.yXg.ARROW_LEFT:
                            n === W.Ie.SIDEBAR && eR.S.dispatch(eq.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eP.Z.getChannelId() });
                            return;
                        case eq.yXg.ARROW_RIGHT:
                            n === W.Ie.NORMAL && eR.S.dispatch(eq.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ex.ZP.getCurrentSidebarChannelId(r.id) });
                    }
            }),
            eJ(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, Y.PG)(t, this.props.chatInputType);
            }),
            eJ(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return N.__(P._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            eJ(this, 'handleChatInteract', () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            eJ(this, 'handleCommandSentinelTyped', () => {
                var e;
                null == (e = this.appIconAnimateRef.current) || e.animate();
            }),
            eJ(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: i, communicationDisabledUntil: l, showAutomodUserProfileChatBlocker: o } = e;
                return t.type === eq.d4z.DM && n
                    ? (0, r.jsx)(ed.Z, {})
                    : null != l && (0, X.J)(l) && null != i && !eI.Z.can(eq.Plq.ADMINISTRATOR, i)
                      ? (0, r.jsx)(J.T, {
                            guild: i,
                            disabledUntil: l
                        })
                      : o
                        ? (0, r.jsx)(K.h, { guild: i })
                        : null;
            }),
            eJ(this, 'renderAppLauncherButton', () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(eU.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t
                });
            }),
            eJ(this, 'renderAppCommandButton', () => {
                let { showAppDMsUI: e, isFailedAppDMLoad: t, channel: n, entryPointCommandButtonRef: i, chatInputType: l } = this.props;
                return e && !t
                    ? (0, r.jsx)('div', {
                          className: eX.entryPointButtonContainer,
                          children: (0, r.jsx)(eF.ZP, {
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
let e8 = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: o } = e,
        { placeholder: a, accessibilityLabel: s } = (0, eW.Z)({ channel: t }),
        c = (0, ed.S)(eZ.default.getCurrentUser(), t),
        [u] = (0, Q.AB)(null == n ? void 0 : n.id),
        h = (0, q.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([eZ.default], () => eZ.default.getCurrentUser()),
        m = (0, d.e7)([eE.ZP], () => {
            var e, t, r;
            return null != f && null != (r = null == (e = eE.ZP.getMember(null != (t = null == n ? void 0 : n.id) ? t : eq.lds, null == f ? void 0 : f.id)) ? void 0 : e.isPending) && r;
        }),
        g = (0, d.e7)([ea.Z], () => ea.Z.isEnabled()),
        b = (0, eu.Z)(t.id),
        _ = (0, $.Z)(t.id),
        C = (0, Z.R)({
            channel: t,
            chatInputType: l
        }),
        y = (0, D.h9)(t.id),
        x = (0, em.k)(t.id),
        {
            isInitialLoading: j,
            primaryEntryPointCommand: N,
            isProfileFetching: P,
            wasProfileFetching: S,
            applicationId: T,
            channelId: A,
            commands: w
        } = (0, O.Z)({
            context: {
                channel: t,
                type: 'channel'
            }
        });
    (0, E.Z)({
        isProfileFetching: P,
        wasProfileFetching: S,
        applicationId: T,
        channelId: A,
        commands: w
    });
    let R = i.useRef(null),
        k = (0, d.e7)([I.Z], () => I.Z.appDMChannelsWithFailedLoads().has(t.id)),
        M = (0, z.R6)('ChannelChat'),
        L = (0, z.Q3)('ChannelChat'),
        W = (0, d.e7)([eP.Z], () => eP.Z.getVoiceChannelId()),
        U = (0, d.e7)([ev.Z], () => ev.Z.getChannel(W)),
        B = (0, d.e7)([eZ.default], () => (t.type !== eq.d4z.DM ? null : eZ.default.getUser(t.getRecipientId())));
    return (0, r.jsx)(e6, {
        channel: t,
        isEditing: null != (0, d.e7)([eO.Z], () => eO.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([eh.Z], () => eh.Z.getPendingReply(t.id)),
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
        showAppLauncherButton: C,
        showAppDMsUI: y,
        isInitialLoading: j,
        showEntryPointAppCommandButton: null != N,
        entryPointCommandButtonRef: R,
        isFailedAppDMLoad: k,
        isRefreshChatInputEnabled: M,
        isRefreshEnabled: L,
        pendingScheduledMessage: x,
        recipientUser: B,
        voiceChannel: U
    });
});
