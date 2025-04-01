n.d(t, { Z: () => e9 }), n(47120), n(301563), n(566702), n(789020);
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
    v = n(744061),
    y = n(857595),
    x = n(607070),
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
    F = n(974251),
    H = n(893718),
    G = n(436660),
    V = n(131565),
    z = n(603009),
    Y = n(540059),
    q = n(28546),
    K = n(295474),
    X = n(521476),
    Q = n(69882),
    J = n(71619),
    $ = n(185145),
    ee = n(736052),
    et = n(146128),
    en = n(549006),
    er = n(925975),
    ei = n(957730),
    el = n(48854),
    eo = n(400023),
    ea = n(64078),
    es = n(351780),
    ec = n(843693),
    eu = n(217871),
    ed = n(139577),
    ep = n(247944),
    eh = n(623292),
    ef = n(807092),
    em = n(45251),
    eg = n(705533),
    eb = n(618857),
    e_ = n(268350),
    eC = n(155409),
    ev = n(163612),
    ey = n(314897),
    ex = n(433355),
    ej = n(592125),
    eO = n(703558),
    eE = n(323873),
    eN = n(271383),
    eI = n(375954),
    eP = n(496675),
    eS = n(944486),
    eZ = n(117530),
    eT = n(594174),
    eA = n(626135),
    ew = n(934415),
    eR = n(459273),
    ek = n(585483),
    eM = n(709054),
    eL = n(838440),
    eD = n(127654),
    eW = n(979956),
    eU = n(655687),
    eB = n(165540),
    eF = n(583027),
    eH = n(25007),
    eG = n(685006),
    eV = n(685722),
    ez = n(199649),
    eY = n(1397),
    eq = n(641861),
    eK = n(981631),
    eX = n(388032),
    eQ = n(688044),
    eJ = n(840166);
function e$(e, t, n) {
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
function e0(e) {
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
                e$(e, t, n[t]);
            });
    }
    return e;
}
function e1(e, t) {
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
function e2(e) {
    e.preventDefault();
}
let e3 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e7(e) {
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
    return t ? (0, r.jsx)('section', e1(e0({}, n), { role: 'complementary' })) : (0, r.jsx)('main', e0({}, n));
}
let e4 = i.forwardRef((e, t) => (0, r.jsx)(e6, e1(e0({}, e), { refInstance: t })));
e4.displayName = 'ChannelTextAreaForm';
class e6 extends i.PureComponent {
    componentDidMount() {
        eO.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eO.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eO.Z.getDraft(n.id, eO.d.ChannelMessage);
            e !== r && this.setState((0, U.eK)(e));
        }
        t.textValue.length < eK.J6R && r.length >= eK.J6R && eA.default.track(eK.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessage(t.id, e.id, e.content), j.ZP.trackWithMetadata(eK.rMx.MESSAGE_EDIT_UP_ARROW);
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
                          name: null !== (a = null == l ? void 0 : null === (o = l.bot) || void 0 === o ? void 0 : o.username) && void 0 !== a ? a : l.name,
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
            y = (0, r.jsx)(H.Z, {
                ref: this.props.refInstance,
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eQ.channelTextArea,
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
                promptToUpload: eD.d,
                highlighted: o,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: m,
                pendingScheduledMessage: _
            });
        return (0, r.jsx)(p.yRy, {
            position: 'top',
            onRequestClose: () => {
                var e;
                null == C || null === (e = C.onCancel) || void 0 === e || e.call(C), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != C,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return s()(null != C, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, r.jsx)(v.Z, e0({ onClose: t }, C));
            },
            children: () =>
                f
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
                          className: eQ.shaker,
                          children: y
                      })
                    : y
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            e$(this, 'isFirstChange', !0),
            e$(this, 'editorRef', null),
            e$(this, 'state', e1(e0({}, (0, U.eK)(eO.Z.getDraft(this.props.channel.id, eO.d.ChannelMessage))), { contentWarningProps: null })),
            e$(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eO.Z.getDraft(e.channel.id, eO.d.ChannelMessage);
                n !== r &&
                    ('' === r || '' === n) &&
                    t.setState((0, U.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            e$(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eK.yXg.DELETE:
                    case eK.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case eK.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t)) eZ.Z.getUploadCount(r.id, eO.d.ChannelMessage) > 0 ? ek.S.dispatchToLastSubscribed(eK.CkL.FOCUS_ATTACHMENT_AREA) : ek.S.dispatchToLastSubscribed(eK.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eI.Z.getLastChatCommandMessage(e.id),
                                n = eI.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eM.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eK.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, y.rf)();
                            return;
                        }
                        if (eZ.Z.getUploadCount(r.id, eO.d.ChannelMessage) > 0) {
                            g.Z.clearAll(r.id, eO.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, l);
            }),
            e$(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = ey.default.getId(),
                    l = ec.ZP.getUserCombo(i, r),
                    o = (null !== (n = null == l ? void 0 : l.value) && void 0 !== n ? n : 0) + 1;
                (0, ea.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : o,
                    multiplier: t
                });
            }),
            e$(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i }
                } = this.props;
                h.Z.changeDraft(i, t, eO.d.ChannelMessage);
                let l = '' !== t && n !== this.state.richValue,
                    o = l && !e3.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    o && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    o ? m.Z.startTyping(i) : '' === t && m.Z.stopTyping(i),
                    l && r && (0, y.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            e$(this, 'handleSendMessage', async (e) => {
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
                            ek.S.dispatch(eK.CkL.SHAKE_APP, {
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
                        let { location: t, sectionName: n } = null !== (h = (0, eF._U)(l)) && void 0 !== h ? h : {},
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
                        (0, eF.SC)(l);
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
                return (0, eL.v)({
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
                        return m === eK.zYc.SLOWMODE_COOLDOWN
                            ? (ek.S.dispatch(eK.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              ek.S.dispatch(eK.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let _ = (0, er.g)(t, {
                        channel: c,
                        isEdit: !1
                    });
                    null != _ && (null != _.content && (t = _.content), null != _.tts && (p = _.tts));
                    let C = ei.ZP.parse(c, t);
                    C.tts = C.tts || p;
                    let v = f.Z.getSendMessageOptions({
                        content: t,
                        channelId: c.id,
                        uploads: n,
                        stickers: r,
                        command: l,
                        isGif: a,
                        pendingReply: u,
                        confettiPotionEmoji: i,
                        scheduledTimestamp: null === (o = this.props.pendingScheduledMessage) || void 0 === o ? void 0 : o.scheduledTimestamp
                    });
                    if (a)
                        return (
                            f.Z.sendMessage(c.id, C, void 0, v),
                            (0, eh.A6)(c.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eW.KZ)(n);
                        if ((0, eW.Bf)(e, null == s ? void 0 : s.id))
                            return (
                                (0, eD.G)(c, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        let t = v.scheduledTimestamp,
                            r = b.Z.uploadFiles({
                                channelId: c.id,
                                uploads: n,
                                draftType: eO.d.ChannelMessage,
                                parsedMessage: C,
                                options: v,
                                raiseEndpointErrors: null != t
                            });
                        null != t && r.then(() => (0, eb.Hw)(t)).catch((e) => (0, eb.wW)(e.message)), g.Z.clearAll(c.id, eO.d.ChannelMessage);
                    } else if (null != v.scheduledTimestamp)
                        try {
                            await (0, em.PV)({
                                channelId: c.id,
                                scheduledTimestamp: v.scheduledTimestamp,
                                messageSendData: {
                                    channelId: c.id,
                                    content: t,
                                    nonce: (0, el.r)(),
                                    tts: p,
                                    message_reference: v.messageReference,
                                    allowed_mentions: v.allowedMentions,
                                    flags: v.flags
                                }
                            }),
                                (0, eb.Hw)(v.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, eb.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        }
                    else null != r && r.length > 0 && '' === t ? f.Z.sendStickers(c.id, r, t, v, C.tts) : f.Z.sendMessage(c.id, C, void 0, v);
                    return (
                        this.setState((0, U.H2)()),
                        (0, eh.A6)(c.id),
                        (0, e_.qB)(c.id, d.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            e$(this, 'handleSetValue', (e) => {
                var t, n;
                let r = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != r && (G.Q.select(r, []), r.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            e$(this, 'renderAttachButton', (e, t) =>
                (0, r.jsx)(F.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eO.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            e$(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, r.jsx)(B.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class e5 extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused: null != n && !c.tq && eP.Z.can(eK.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        ek.S.subscribe(eK.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        ek.S.unsubscribe(eK.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: i, keyboardModeEnabled: l, hasModalOpen: a, pendingReply: s, chatInputType: c, placeholder: d, accessibilityLabel: h, showQuarantinedUserBanner: f, filterAfterTimestamp: m, communicationDisabledUntil: g, shakeIntensity: b, poggermodeEnabled: v, isSelectedResourceChannel: y, showAutomodUserProfileChatBlocker: x, showAppLauncherButton: j, showAppDMsUI: O, isInitialLoading: E, isRefreshChatInputEnabled: N, isRefreshEnabled: I, pendingScheduledMessage: P, recipientUser: S, voiceChannel: Z } = this.props,
            { textAreaFocused: T, textAreaHighlighted: A } = this.state,
            w = c === W.Ie.SIDEBAR;
        t = w && n.type === eK.d4z.GUILD_VOICE ? eX.t.pnnyFR : w && n.type === eK.d4z.GUILD_STAGE_VOICE ? eX.t.YInSkp : u.T.THREADS.has(n.type) ? eX.t['OkzL+f'] : eX.t.UbNmGR;
        let R = (0, r.jsx)('div', {
                className: eQ.channelBottomBarArea,
                children: (0, r.jsx)(eV.Z, {})
            }),
            k = (0, r.jsxs)('div', {
                className: eQ.channelBottomBarArea,
                children: [
                    (0, r.jsx)(eC.Z, {
                        childRef: this.channelTextAreaFormRef,
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, r.jsx)(e4, {
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
                            poggermodeEnabled: v,
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
                [eJ.barWithAppLauncherButton]: j,
                [eJ.barWithAppsDMsUI]: O
            }),
            { enabled: U } = ev.Z.getCurrentConfig({
                guildId: null == Z ? void 0 : Z.guild_id,
                location: 'ChannelChat'
            }),
            B = U && null != S && null != Z;
        return (0, r.jsx)(
            C.Z,
            {
                page: (0, ew.mE)(this.props.channel),
                children: (0, r.jsx)(en.sW, {
                    children: (0, r.jsx)(et.BV, {
                        children: (0, r.jsxs)(eR.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eR.d9, {
                                    event: eK.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, r.jsx)(eR.d9, {
                                    event: eK.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, r.jsx)(eR.d9, {
                                    event: eK.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, r.jsx)(eR.d9, {
                                    event: eK.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, r.jsxs)(e7, {
                                    isSidebar: w,
                                    className: eQ.chatContent,
                                    'aria-label': eX.NW.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, r.jsx)(V.Z, { channel: n }),
                                        B &&
                                            (0, r.jsx)(eq.Z, {
                                                recipientUser: S,
                                                voiceChannel: Z
                                            }),
                                        (0, r.jsx)(eH.Z, {
                                            channel: n,
                                            guild: i,
                                            narrow: w
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: eX.NW.format(eX.t.eTzKk5, { channelName: n.name }) }) }),
                                            children: [
                                                (0, r.jsx)(eo.Z, {
                                                    channel: n,
                                                    forceCozy: y,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: f,
                                                    jumpBarClassName: D
                                                }),
                                                y
                                                    ? null
                                                    : null !==
                                                            (e = this.renderMessageBanner({
                                                                channel: n,
                                                                showQuarantinedUserBanner: f,
                                                                guild: i,
                                                                communicationDisabledUntil: g,
                                                                showAutomodUserProfileChatBlocker: x
                                                            })) && void 0 !== e
                                                      ? e
                                                      : (0, r.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: e2,
                                                            className: o()(eQ.form, { [eQ.formWithLoadedChatInput]: !M }),
                                                            children: [
                                                                v && (0, r.jsx)(eu.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, r.jsx)(ez.Z, {
                                                                          channel: n,
                                                                          children: L
                                                                      })
                                                                    : (0, r.jsx)(eY.Z, {
                                                                          channel: n,
                                                                          children: L
                                                                      }),
                                                                N
                                                                    ? null
                                                                    : (0, r.jsx)(_.Z, {
                                                                          channel: n,
                                                                          poggermodeEnabled: v
                                                                      }),
                                                                !w && (0, r.jsx)(z.Z, {})
                                                            ]
                                                        }),
                                                (0, r.jsx)(en.kw, {})
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
            e$(this, 'channelTextAreaFormRef', i.createRef()),
            e$(this, 'inputFormRef', i.createRef()),
            e$(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            e$(this, 'dispatchGroupRef', i.createRef()),
            e$(this, 'appIconAnimateRef', i.createRef()),
            e$(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            e$(this, 'handleInputFocus', (e) => {
                var t;
                null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            e$(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            e$(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e);
            }),
            e$(this, 'handleKeyDown', (e) => {
                var t;
                (null === (t = this.inputFormRef.current) || void 0 === t || !t.contains(e.target)) && this._handleMoveToPane(e);
            }),
            e$(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case eK.yXg.ARROW_LEFT:
                            n === W.Ie.SIDEBAR && ek.S.dispatch(eK.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eS.Z.getChannelId() });
                            return;
                        case eK.yXg.ARROW_RIGHT:
                            n === W.Ie.NORMAL && ek.S.dispatch(eK.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ex.ZP.getCurrentSidebarChannelId(r.id) });
                    }
            }),
            e$(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, q.PG)(t, this.props.chatInputType);
            }),
            e$(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return N.__(P._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            e$(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            e$(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            e$(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: i, communicationDisabledUntil: l, showAutomodUserProfileChatBlocker: o } = e;
                return t.type === eK.d4z.DM && n
                    ? (0, r.jsx)(ep.Z, {})
                    : null != l && (0, Q.J)(l) && null != i && !eP.Z.can(eK.Plq.ADMINISTRATOR, i)
                      ? (0, r.jsx)($.T, {
                            guild: i,
                            disabledUntil: l
                        })
                      : o
                        ? (0, r.jsx)(X.h, { guild: i })
                        : null;
            }),
            e$(this, 'renderAppLauncherButton', () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(eB.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t
                });
            }),
            e$(this, 'renderAppCommandButton', () => {
                let { showAppDMsUI: e, isFailedAppDMLoad: t, channel: n, entryPointCommandButtonRef: i, chatInputType: l } = this.props;
                return e && !t
                    ? (0, r.jsx)('div', {
                          className: eQ.entryPointButtonContainer,
                          children: (0, r.jsx)(eG.ZP, {
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
let e9 = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: o } = e,
        { placeholder: a, accessibilityLabel: s } = (0, eU.Z)({ channel: t }),
        c = (0, ep.S)(eT.default.getCurrentUser(), t),
        [u] = (0, J.AB)(null == n ? void 0 : n.id),
        h = (0, K.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([eT.default], () => eT.default.getCurrentUser()),
        m = (0, d.e7)([eN.ZP], () => {
            var e, t, r;
            return null != f && null !== (r = null === (e = eN.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eK.lds, null == f ? void 0 : f.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== r && r;
        }),
        g = (0, d.e7)([es.Z], () => es.Z.isEnabled()),
        b = (0, ed.Z)(t.id),
        _ = (0, ee.Z)(t.id),
        C = (0, Z.R)({
            channel: t,
            chatInputType: l
        }),
        v = (0, D.h9)(t.id),
        y = (0, eg.k)(t.id),
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
        M = (0, Y.R6)('ChannelChat'),
        L = (0, Y.Q3)('ChannelChat'),
        W = (0, d.e7)([eS.Z], () => eS.Z.getVoiceChannelId()),
        U = (0, d.e7)([ej.Z], () => ej.Z.getChannel(W)),
        B = (0, d.e7)([eT.default], () => (t.type !== eK.d4z.DM ? null : eT.default.getUser(t.getRecipientId())));
    return (0, r.jsx)(e5, {
        channel: t,
        isEditing: null != (0, d.e7)([eE.Z], () => eE.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([x.Z], () => x.Z.keyboardModeEnabled),
        pendingReply: (0, d.e7)([ef.Z], () => ef.Z.getPendingReply(t.id)),
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
        showAppDMsUI: v,
        isInitialLoading: j,
        showEntryPointAppCommandButton: null != N,
        entryPointCommandButtonRef: R,
        isFailedAppDMLoad: k,
        isRefreshChatInputEnabled: M,
        isRefreshEnabled: L,
        pendingScheduledMessage: y,
        recipientUser: B,
        voiceChannel: U
    });
});
