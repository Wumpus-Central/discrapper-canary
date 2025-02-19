n.d(t, { Z: () => e3 }), n(47120), n(301563), n(566702), n(789020);
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
    N = n(993766),
    E = n(499254),
    P = n(541099),
    I = n(827498),
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
    V = n(603009),
    z = n(540059),
    q = n(28546),
    Y = n(295474),
    K = n(521476),
    X = n(69882),
    J = n(71619),
    Q = n(185145),
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
    eC = n(314897),
    ev = n(433355),
    ey = n(703558),
    ex = n(323873),
    ej = n(271383),
    eO = n(375954),
    eN = n(496675),
    eE = n(944486),
    eP = n(117530),
    eI = n(594174),
    eS = n(626135),
    eZ = n(934415),
    eT = n(459273),
    eA = n(585483),
    ew = n(709054),
    eR = n(838440),
    ek = n(127654),
    eM = n(979956),
    eL = n(655687),
    eD = n(165540),
    eW = n(583027),
    eU = n(25007),
    eB = n(685006),
    eF = n(685722),
    eH = n(199649),
    eG = n(1397),
    eV = n(981631),
    ez = n(388032),
    eq = n(527194),
    eY = n(298010);
function eK(e, t, n) {
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
function eX(e) {
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
                eK(e, t, n[t]);
            });
    }
    return e;
}
function eJ(e, t) {
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
function eQ(e) {
    e.preventDefault();
}
let e$ = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function e0(e) {
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
    return t ? (0, r.jsx)('section', eJ(eX({}, n), { role: 'complementary' })) : (0, r.jsx)('main', eX({}, n));
}
class e1 extends i.PureComponent {
    componentDidMount() {
        ey.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ey.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ey.Z.getDraft(n.id, ey.d.ChannelMessage);
            e !== r && this.setState((0, U.eK)(e));
        }
        t.textValue.length < eV.J6R && r.length >= eV.J6R && eS.default.track(eV.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessage(t.id, e.id, e.content), j.ZP.trackWithMetadata(eV.rMx.MESSAGE_EDIT_UP_ARROW);
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
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eq.channelTextArea,
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
                promptToUpload: ek.d,
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
                return s()(null != C, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, r.jsx)(v.Z, eX({ onClose: t }, C));
            },
            children: () =>
                f
                    ? (0, r.jsx)(p.UkV, {
                          isShaking: h > 0,
                          intensity: h,
                          className: eq.shaker,
                          children: y
                      })
                    : y
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eK(this, 'isFirstChange', !0),
            eK(this, 'editorRef', null),
            eK(this, 'state', eJ(eX({}, (0, U.eK)(ey.Z.getDraft(this.props.channel.id, ey.d.ChannelMessage))), { contentWarningProps: null })),
            eK(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = ey.Z.getDraft(e.channel.id, ey.d.ChannelMessage);
                n !== r &&
                    ('' === r || '' === n) &&
                    t.setState((0, U.eK)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eK(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    l = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eV.yXg.DELETE:
                    case eV.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case eV.yXg.ARROW_UP:
                        if (i || l) return;
                        if ((e.preventDefault(), t)) eP.Z.getUploadCount(r.id, ey.d.ChannelMessage) > 0 ? eA.S.dispatchToLastSubscribed(eV.CkL.FOCUS_ATTACHMENT_AREA) : eA.S.dispatchToLastSubscribed(eV.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eO.Z.getLastChatCommandMessage(e.id),
                                n = eO.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (ew.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eV.yXg.ESCAPE:
                        if (i || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, y.rf)();
                            return;
                        }
                        if (eP.Z.getUploadCount(r.id, ey.d.ChannelMessage) > 0) {
                            g.Z.clearAll(r.id, ey.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, l);
            }),
            eK(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    i = eC.default.getId(),
                    l = es.ZP.getUserCombo(i, r),
                    o = (null !== (n = null == l ? void 0 : l.value) && void 0 !== n ? n : 0) + 1;
                (0, eo.SE)({
                    channelId: r,
                    userId: i,
                    value: null != e ? e.length : o,
                    multiplier: t
                });
            }),
            eK(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: i }
                } = this.props;
                h.Z.changeDraft(i, t, ey.d.ChannelMessage);
                let l = '' !== t && n !== this.state.richValue,
                    o = l && !e$.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    o && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    o ? m.Z.startTyping(i) : '' === t && m.Z.stopTyping(i),
                    l && r && (0, y.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            eK(this, 'handleSendMessage', async (e) => {
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
                            eA.S.dispatch(eV.CkL.SHAKE_APP, {
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
                        let { location: t, sectionName: n } = null !== (h = (0, eW._U)(l)) && void 0 !== h ? h : {},
                            r = e === k.bB.APPLICATION_LAUNCHER ? P.Z.lastShownEntrypoint() : I._b.TEXT;
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
                return (0, eR.v)({
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
                        return m === eV.zYc.SLOWMODE_COOLDOWN
                            ? (eA.S.dispatch(eV.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              eA.S.dispatch(eV.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
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
                            (0, ep.A6)(c.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eM.KZ)(n);
                        if ((0, eM.Bf)(e, null == s ? void 0 : s.id))
                            return (
                                (0, ek.G)(c, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        let t = v.scheduledTimestamp,
                            r = b.Z.uploadFiles({
                                channelId: c.id,
                                uploads: n,
                                draftType: ey.d.ChannelMessage,
                                parsedMessage: C,
                                options: v,
                                raiseEndpointErrors: null != t
                            });
                        null != t && r.then(() => (0, eg.Hw)(t)).catch((e) => (0, eg.wW)(e.message)), g.Z.clearAll(c.id, ey.d.ChannelMessage);
                    } else if (null != v.scheduledTimestamp)
                        try {
                            await (0, ef.PV)({
                                channelId: c.id,
                                scheduledTimestamp: v.scheduledTimestamp,
                                messageSendData: {
                                    channelId: c.id,
                                    content: t,
                                    nonce: (0, ei.r)(),
                                    tts: p,
                                    message_reference: v.messageReference,
                                    allowed_mentions: v.allowedMentions,
                                    flags: v.flags
                                }
                            }),
                                (0, eg.Hw)(v.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, eg.wW)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        }
                    else null != r && r.length > 0 && '' === t ? f.Z.sendStickers(c.id, r, t, v, C.tts) : f.Z.sendMessage(c.id, C, void 0, v);
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
            eK(this, 'handleSetValue', (e) => {
                var t, n;
                let r = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != r && (G.Q.select(r, []), r.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            eK(this, 'renderAttachButton', (e, t) =>
                (0, r.jsx)(F.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: ey.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eK(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, r.jsx)(B.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class e2 extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused: null != n && !c.tq && eN.Z.can(eV.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eA.S.subscribe(eV.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eA.S.unsubscribe(eV.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: i, keyboardModeEnabled: l, hasModalOpen: a, pendingReply: s, chatInputType: c, placeholder: d, accessibilityLabel: h, showQuarantinedUserBanner: f, filterAfterTimestamp: m, communicationDisabledUntil: g, shakeIntensity: b, poggermodeEnabled: v, isSelectedResourceChannel: y, showAutomodUserProfileChatBlocker: x, showAppLauncherButton: j, showAppDMsUI: O, isInitialLoading: N, isRefreshChatInputEnabled: E, isRefreshEnabled: P, pendingScheduledMessage: I } = this.props,
            { textAreaFocused: S, textAreaHighlighted: Z } = this.state,
            T = c === W.Ie.SIDEBAR;
        t = T && n.type === eV.d4z.GUILD_VOICE ? ez.t.pnnyFR : T && n.type === eV.d4z.GUILD_STAGE_VOICE ? ez.t.YInSkp : u.T.THREADS.has(n.type) ? ez.t['OkzL+f'] : ez.t.UbNmGR;
        let A = (0, r.jsx)('div', {
                className: eq.channelBottomBarArea,
                children: (0, r.jsx)(eF.Z, {})
            }),
            w = (0, r.jsxs)('div', {
                className: eq.channelBottomBarArea,
                children: [
                    (0, r.jsx)(e_.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, r.jsx)(e1, {
                            focused: S,
                            highlighted: Z,
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
                            pendingScheduledMessage: I
                        })
                    }),
                    P ? null : this.renderAppLauncherButton(),
                    E ? null : this.renderAppCommandButton()
                ]
            }),
            R = O && N,
            k = R && N ? A : w,
            M = o()({
                [eY.barWithAppLauncherButton]: j,
                [eY.barWithAppsDMsUI]: O
            });
        return (0, r.jsx)(
            C.Z,
            {
                page: (0, eZ.mE)(this.props.channel),
                children: (0, r.jsx)(et.sW, {
                    children: (0, r.jsx)(ee.BV, {
                        children: (0, r.jsxs)(eT.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eT.d9, {
                                    event: eV.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, r.jsx)(eT.d9, {
                                    event: eV.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, r.jsx)(eT.d9, {
                                    event: eV.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, r.jsx)(eT.d9, {
                                    event: eV.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, r.jsxs)(e0, {
                                    isSidebar: T,
                                    className: eq.chatContent,
                                    'aria-label': ez.NW.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, r.jsx)(eU.Z, {
                                            channel: n,
                                            guild: i,
                                            narrow: T
                                        }),
                                        (0, r.jsxs)(p.y5t, {
                                            component: (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: ez.NW.format(ez.t.eTzKk5, { channelName: n.name }) }) }),
                                            children: [
                                                (0, r.jsx)(el.Z, {
                                                    channel: n,
                                                    forceCozy: y,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: f,
                                                    jumpBarClassName: M
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
                                                            onSubmit: eQ,
                                                            className: o()(eq.form, { [eq.formWithLoadedChatInput]: !R }),
                                                            children: [
                                                                v && (0, r.jsx)(ec.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, r.jsx)(eH.Z, {
                                                                          channel: n,
                                                                          children: k
                                                                      })
                                                                    : (0, r.jsx)(eG.Z, {
                                                                          channel: n,
                                                                          children: k
                                                                      }),
                                                                E
                                                                    ? null
                                                                    : (0, r.jsx)(_.Z, {
                                                                          channel: n,
                                                                          poggermodeEnabled: v
                                                                      }),
                                                                !T && (0, r.jsx)(V.Z, {})
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
            eK(this, 'inputFormRef', i.createRef()),
            eK(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eK(this, 'dispatchGroupRef', i.createRef()),
            eK(this, 'appIconAnimateRef', i.createRef()),
            eK(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            eK(this, 'handleInputFocus', (e) => {
                var t;
                null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eK(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            eK(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e);
            }),
            eK(this, 'handleKeyDown', (e) => {
                var t;
                (null === (t = this.inputFormRef.current) || void 0 === t || !t.contains(e.target)) && this._handleMoveToPane(e);
            }),
            eK(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case eV.yXg.ARROW_LEFT:
                            n === W.Ie.SIDEBAR && eA.S.dispatch(eV.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eE.Z.getChannelId() });
                            return;
                        case eV.yXg.ARROW_RIGHT:
                            n === W.Ie.NORMAL && eA.S.dispatch(eV.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ev.ZP.getCurrentSidebarChannelId(r.id) });
                    }
            }),
            eK(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, q.PG)(t, this.props.chatInputType);
            }),
            eK(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return E.__(I._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            eK(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            eK(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            eK(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: i, communicationDisabledUntil: l, showAutomodUserProfileChatBlocker: o } = e;
                return t.type === eV.d4z.DM && n
                    ? (0, r.jsx)(ed.Z, {})
                    : null != l && (0, X.J)(l) && null != i && !eN.Z.can(eV.Plq.ADMINISTRATOR, i)
                      ? (0, r.jsx)(Q.T, {
                            guild: i,
                            disabledUntil: l
                        })
                      : o
                        ? (0, r.jsx)(K.h, { guild: i })
                        : null;
            }),
            eK(this, 'renderAppLauncherButton', () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, r.jsx)(eD.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t
                });
            }),
            eK(this, 'renderAppCommandButton', () => {
                let { showAppDMsUI: e, isFailedAppDMLoad: t, channel: n, entryPointCommandButtonRef: i, chatInputType: l } = this.props;
                return e && !t
                    ? (0, r.jsx)('div', {
                          className: eq.entryPointButtonContainer,
                          children: (0, r.jsx)(eB.ZP, {
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
let e3 = i.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: o } = e,
        { placeholder: a, accessibilityLabel: s } = (0, eL.Z)({ channel: t }),
        c = (0, ed.S)(eI.default.getCurrentUser(), t),
        [u] = (0, J.AB)(null == n ? void 0 : n.id),
        h = (0, Y.Ux)(null == n ? void 0 : n.id),
        f = (0, d.e7)([eI.default], () => eI.default.getCurrentUser()),
        m = (0, d.e7)([ej.ZP], () => {
            var e, t, r;
            return null != f && null !== (r = null === (e = ej.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eV.lds, null == f ? void 0 : f.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== r && r;
        }),
        g = (0, d.e7)([ea.Z], () => ea.Z.isEnabled()),
        b = (0, eu.Z)(t.id),
        _ = (0, $.Z)(t.id),
        C = (0, Z.R)({
            channel: t,
            chatInputType: l,
            location: 'ChannelChatMemo'
        }),
        v = (0, D.h9)(t.id),
        y = (0, em.k)(t.id),
        {
            isInitialLoading: j,
            primaryEntryPointCommand: E,
            isProfileFetching: I,
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
    (0, N.Z)({
        isProfileFetching: I,
        wasProfileFetching: S,
        applicationId: T,
        channelId: A,
        commands: w
    });
    let R = i.useRef(null),
        k = (0, d.e7)([P.Z], () => P.Z.appDMChannelsWithFailedLoads().has(t.id)),
        M = (0, z.R6)('ChannelChat'),
        L = (0, z.Q3)('ChannelChat');
    return (0, r.jsx)(e2, {
        channel: t,
        isEditing: null != (0, d.e7)([ex.Z], () => ex.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.s9z)(p.JQI),
        guild: n,
        keyboardModeEnabled: (0, d.e7)([x.Z], () => x.Z.keyboardModeEnabled),
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
        showAppDMsUI: v,
        isInitialLoading: j,
        showEntryPointAppCommandButton: null != E,
        entryPointCommandButtonRef: R,
        isFailedAppDMLoad: k,
        isRefreshChatInputEnabled: M,
        isRefreshEnabled: L,
        pendingScheduledMessage: y
    });
});
