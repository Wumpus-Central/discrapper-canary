n.d(t, { Z: () => e1 }), n(47120), n(789020);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(873546),
    d = n(106351),
    u = n(442837),
    h = n(481060),
    p = n(430742),
    m = n(904245),
    f = n(144144),
    g = n(166459),
    _ = n(966390),
    C = n(738619),
    x = n(410575),
    v = n(744061),
    E = n(857595),
    I = n(607070),
    b = n(367907),
    Z = n(450936),
    N = n(993766),
    T = n(499254),
    S = n(541099),
    j = n(827498),
    y = n(46332),
    A = n(533379),
    P = n(555573),
    R = n(456007),
    M = n(10718),
    L = n(998698),
    k = n(895924),
    O = n(581364),
    D = n(667204),
    w = n(404295),
    U = n(541716),
    B = n(752305),
    F = n(516887),
    H = n(974251),
    G = n(893718),
    V = n(436660),
    z = n(603009),
    W = n(540059),
    q = n(28546),
    Y = n(295474),
    K = n(521476),
    X = n(69882),
    Q = n(71619),
    J = n(185145),
    $ = n(736052),
    ee = n(146128),
    et = n(549006),
    en = n(925975),
    ei = n(957730),
    el = n(48854),
    ea = n(400023),
    er = n(64078),
    es = n(351780),
    eo = n(843693),
    ec = n(217871),
    ed = n(139577),
    eu = n(247944),
    eh = n(623292),
    ep = n(807092),
    em = n(45251),
    ef = n(705533),
    eg = n(618857),
    e_ = n(268350),
    eC = n(155409),
    ex = n(314897),
    ev = n(433355),
    eE = n(703558),
    eI = n(323873),
    eb = n(271383),
    eZ = n(375954),
    eN = n(496675),
    eT = n(944486),
    eS = n(117530),
    ej = n(594174),
    ey = n(626135),
    eA = n(934415),
    eP = n(459273),
    eR = n(585483),
    eM = n(709054),
    eL = n(838440),
    ek = n(127654),
    eO = n(979956),
    eD = n(655687),
    ew = n(165540),
    eU = n(583027),
    eB = n(25007),
    eF = n(685006),
    eH = n(685722),
    eG = n(199649),
    eV = n(1397),
    ez = n(981631),
    eW = n(388032),
    eq = n(247627),
    eY = n(89111);
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
    e.preventDefault();
}
let eQ = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eJ(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class e$ extends l.PureComponent {
    componentDidMount() {
        eE.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eE.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eE.Z.getDraft(n.id, eE.d.ChannelMessage);
            e !== i && this.setState((0, B.eK)(e));
        }
        t.textValue.length < ez.J6R && i.length >= ez.J6R && ey.default.track(ez.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        m.Z.startEditMessage(t.id, e.id, e.content), b.ZP.trackWithMetadata(ez.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, O.XA)(e.interactionData),
            { command: l, application: a } = M.Xq(
                {
                    channel: t,
                    type: 'channel'
                },
                n
            );
        if (null != l) {
            var r, s;
            let e =
                null != a
                    ? {
                          type: k.Qi.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: null !== (s = null == a ? void 0 : null === (r = a.bot) || void 0 === r ? void 0 : r.username) && void 0 !== s ? s : a.name,
                          application: a
                      }
                    : null;
            P.Po({
                channelId: t.id,
                command: l,
                section: e,
                location: k.Vh.RECALL,
                initialValues: (0, R.Dw)(l, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: l, onResize: a, highlighted: r, pendingReply: s, chatInputType: c, placeholder: d, accessibilityLabel: u, shakeIntensity: p, poggermodeEnabled: m, onCommandSentinelTyped: f, renderAppLauncherButton: g, renderAppCommandButton: _, pendingScheduledMessage: C } = this.props,
            { contentWarningProps: x } = this.state,
            E = (0, i.jsx)(G.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eq.channelTextArea,
                channel: e,
                placeholder: d,
                accessibilityLabel: u,
                pendingReply: s,
                type: c,
                onChange: this.handleTextareaChange,
                onSubmit: this.handleSendMessage,
                onResize: a,
                onFocus: l,
                onBlur: n,
                onKeyDown: this.handleKeyDown,
                renderAttachButton: this.renderAttachButton,
                renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                renderAppLauncherButton: g,
                renderAppCommandButton: _,
                promptToUpload: ek.d,
                highlighted: r,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: f,
                pendingScheduledMessage: C
            });
        return (0, i.jsx)(h.yRy, {
            position: 'top',
            onRequestClose: () => {
                var e;
                null == x || null === (e = x.onCancel) || void 0 === e || e.call(x), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != x,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != x, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'),
                    (0, i.jsx)(v.Z, {
                        onClose: t,
                        ...x
                    })
                );
            },
            children: () =>
                m
                    ? (0, i.jsx)(h.UkV, {
                          isShaking: p > 0,
                          intensity: p,
                          className: eq.shaker,
                          children: E
                      })
                    : E
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eK(this, 'isFirstChange', !0),
            eK(this, 'editorRef', null),
            eK(this, 'state', {
                ...(0, B.eK)(eE.Z.getDraft(this.props.channel.id, eE.d.ChannelMessage)),
                contentWarningProps: null
            }),
            eK(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = eE.Z.getDraft(e.channel.id, eE.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, B.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eK(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    a = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case ez.yXg.DELETE:
                    case ez.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case ez.yXg.ARROW_UP:
                        if (l || a) return;
                        if ((e.preventDefault(), t)) eS.Z.getUploadCount(i.id, eE.d.ChannelMessage) > 0 ? eR.S.dispatchToLastSubscribed(ez.CkL.FOCUS_ATTACHMENT_AREA) : eR.S.dispatchToLastSubscribed(ez.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eZ.Z.getLastChatCommandMessage(e.id),
                                n = eZ.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eM.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case ez.yXg.ESCAPE:
                        if (l || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, E.rf)();
                            return;
                        }
                        if (eS.Z.getUploadCount(i.id, eE.d.ChannelMessage) > 0) {
                            g.Z.clearAll(i.id, eE.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, a);
            }),
            eK(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    l = ex.default.getId(),
                    a = eo.ZP.getUserCombo(l, i),
                    r = (null !== (n = null == a ? void 0 : a.value) && void 0 !== n ? n : 0) + 1;
                (0, er.SE)({
                    channelId: i,
                    userId: l,
                    value: null != e ? e.length : r,
                    multiplier: t
                });
            }),
            eK(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: l }
                } = this.props;
                p.Z.changeDraft(l, t, eE.d.ChannelMessage);
                let a = '' !== t && n !== this.state.richValue,
                    r = a && !eQ.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    r && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    r ? f.Z.startTyping(l) : '' === t && f.Z.stopTyping(l),
                    a && i && (0, E.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            eK(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, confettiPotionEmoji: l, command: a, commandOptionValues: r, isGif: s } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: o, channel: c, pendingReply: d, chatInputType: u } = this.props,
                    h = !1;
                if (null != a) {
                    if (a.inputType === k.iw.BUILT_IN_INTEGRATION)
                        return (
                            eR.S.dispatch(ez.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = L.Z.getCommandOrigin(c.id);
                    if (e === k.bB.APPLICATION_LAUNCHER || e === k.bB.IMAGE_RECS_MENU || e === k.bB.IMAGE_RECS_SUBMENU) {
                        var p;
                        let { location: t, sectionName: n } = null !== (p = (0, eU._U)(a)) && void 0 !== p ? p : {},
                            i = e === k.bB.APPLICATION_LAUNCHER ? S.Z.lastShownEntrypoint() : j._b.TEXT;
                        if (
                            !(await (0, y.L)({
                                applicationId: a.applicationId,
                                channel: c,
                                location: t,
                                sectionName: n,
                                entrypoint: i
                            }))
                        )
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, eU.SC)(a);
                    }
                    let n = await (0, D.Z)({
                        command: a,
                        optionValues: null != r ? r : {},
                        context: {
                            guild: o,
                            channel: c
                        }
                    });
                    if (a.inputType !== k.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (h = !0 === n.tts));
                }
                return (0, eL.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: c
                }).then(async (e) => {
                    var r;
                    let { valid: p, failureReason: f } = e;
                    if (!p)
                        return f === ez.zYc.SLOWMODE_COOLDOWN
                            ? (eR.S.dispatch(ez.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              eR.S.dispatch(ez.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let C = (0, en.g)(t, {
                        channel: c,
                        isEdit: !1
                    });
                    null != C && (null != C.content && (t = C.content), null != C.tts && (h = C.tts));
                    let x = ei.ZP.parse(c, t);
                    x.tts = x.tts || h;
                    let v = m.Z.getSendMessageOptions({
                        content: t,
                        channelId: c.id,
                        uploads: n,
                        stickers: i,
                        command: a,
                        isGif: s,
                        pendingReply: d,
                        confettiPotionEmoji: l,
                        scheduledTimestamp: null === (r = this.props.pendingScheduledMessage) || void 0 === r ? void 0 : r.scheduledTimestamp
                    });
                    if (s)
                        return (
                            m.Z.sendMessage(c.id, x, void 0, v),
                            (0, eh.A6)(c.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eO.KZ)(n);
                        if ((0, eO.Bf)(e, null == o ? void 0 : o.id))
                            return (
                                (0, ek.G)(c, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        let t = v.scheduledTimestamp,
                            i = _.Z.uploadFiles({
                                channelId: c.id,
                                uploads: n,
                                draftType: eE.d.ChannelMessage,
                                parsedMessage: x,
                                options: v,
                                raiseEndpointErrors: null != t
                            });
                        null != t && i.then(() => (0, eg.Hw)(t)).catch((e) => (0, eg.wW)(e.message)), g.Z.clearAll(c.id, eE.d.ChannelMessage);
                    } else if (null != v.scheduledTimestamp)
                        try {
                            await (0, em.PV)({
                                channelId: c.id,
                                scheduledTimestamp: v.scheduledTimestamp,
                                messageSendData: {
                                    channelId: c.id,
                                    content: t,
                                    nonce: (0, el.r)(),
                                    tts: h,
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
                    else null != i && i.length > 0 && '' === t ? m.Z.sendStickers(c.id, i, t, v, x.tts) : m.Z.sendMessage(c.id, x, void 0, v);
                    return (
                        this.setState((0, B.H2)()),
                        (0, eh.A6)(c.id),
                        (0, e_.qB)(c.id, u.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            eK(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (V.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            eK(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(H.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eE.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eK(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(F.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class e0 extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !c.tq && eN.Z.can(ez.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eR.S.subscribe(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eR.S.unsubscribe(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: l, keyboardModeEnabled: a, hasModalOpen: s, pendingReply: o, chatInputType: c, placeholder: u, accessibilityLabel: p, showQuarantinedUserBanner: m, filterAfterTimestamp: f, communicationDisabledUntil: g, shakeIntensity: _, poggermodeEnabled: v, isSelectedResourceChannel: E, showAutomodUserProfileChatBlocker: I, showAppLauncherButton: b, showAppDMsUI: Z, isInitialLoading: N, isRefreshChatInputEnabled: T, isRefreshEnabled: S, pendingScheduledMessage: j } = this.props,
            { textAreaFocused: y, textAreaHighlighted: A } = this.state,
            P = c === U.Ie.SIDEBAR;
        t = P && n.type === ez.d4z.GUILD_VOICE ? eW.t.pnnyFR : P && n.type === ez.d4z.GUILD_STAGE_VOICE ? eW.t.YInSkp : d.T.THREADS.has(n.type) ? eW.t['OkzL+f'] : eW.t.UbNmGR;
        let R = (0, i.jsx)('div', {
                className: eq.channelBottomBarArea,
                children: (0, i.jsx)(eH.Z, {})
            }),
            M = (0, i.jsxs)('div', {
                className: eq.channelBottomBarArea,
                children: [
                    (0, i.jsx)(eC.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, i.jsx)(e$, {
                            focused: y,
                            highlighted: A,
                            channel: n,
                            guild: l,
                            keyboardModeEnabled: a,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: s,
                            pendingReply: o,
                            chatInputType: c,
                            placeholder: u,
                            accessibilityLabel: p,
                            shakeIntensity: _,
                            poggermodeEnabled: v,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped,
                            renderAppLauncherButton: this.renderAppLauncherButton,
                            renderAppCommandButton: this.renderAppCommandButton,
                            pendingScheduledMessage: j
                        })
                    }),
                    S ? null : this.renderAppLauncherButton(),
                    T ? null : this.renderAppCommandButton()
                ]
            }),
            L = Z && N,
            k = L && N ? R : M,
            O = r()({
                [eY.barWithAppLauncherButton]: b,
                [eY.barWithAppsDMsUI]: Z
            });
        return (0, i.jsx)(
            x.Z,
            {
                page: (0, eA.mE)(this.props.channel),
                children: (0, i.jsx)(et.sW, {
                    children: (0, i.jsx)(ee.BV, {
                        children: (0, i.jsxs)(eP.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eP.d9, {
                                    event: ez.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, i.jsx)(eP.d9, {
                                    event: ez.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, i.jsx)(eP.d9, {
                                    event: ez.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, i.jsx)(eP.d9, {
                                    event: ez.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, i.jsxs)(eJ, {
                                    isSidebar: P,
                                    className: eq.chatContent,
                                    'aria-label': eW.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, i.jsx)(eB.Z, {
                                            channel: n,
                                            guild: l,
                                            narrow: P
                                        }),
                                        (0, i.jsxs)(h.y5t, {
                                            component: (0, i.jsx)(h.nn4, { children: (0, i.jsx)(h.H, { children: eW.intl.format(eW.t.eTzKk5, { channelName: n.name }) }) }),
                                            children: [
                                                (0, i.jsx)(ea.Z, {
                                                    channel: n,
                                                    forceCozy: E,
                                                    filterAfterTimestamp: f,
                                                    showingQuarantineBanner: m,
                                                    jumpBarClassName: O
                                                }),
                                                E
                                                    ? null
                                                    : null !==
                                                            (e = this.renderMessageBanner({
                                                                channel: n,
                                                                showQuarantinedUserBanner: m,
                                                                guild: l,
                                                                communicationDisabledUntil: g,
                                                                showAutomodUserProfileChatBlocker: I
                                                            })) && void 0 !== e
                                                      ? e
                                                      : (0, i.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: eX,
                                                            className: r()(eq.form, { [eq.formWithLoadedChatInput]: !L }),
                                                            children: [
                                                                v && (0, i.jsx)(ec.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(eG.Z, {
                                                                          channel: n,
                                                                          children: k
                                                                      })
                                                                    : (0, i.jsx)(eV.Z, {
                                                                          channel: n,
                                                                          children: k
                                                                      }),
                                                                T
                                                                    ? null
                                                                    : (0, i.jsx)(C.Z, {
                                                                          channel: n,
                                                                          poggermodeEnabled: v
                                                                      }),
                                                                !P && (0, i.jsx)(z.Z, {})
                                                            ]
                                                        }),
                                                (0, i.jsx)(et.kw, {})
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
            eK(this, 'inputFormRef', l.createRef()),
            eK(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eK(this, 'dispatchGroupRef', l.createRef()),
            eK(this, 'appIconAnimateRef', l.createRef()),
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
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (t)
                    switch (e.which) {
                        case ez.yXg.ARROW_LEFT:
                            n === U.Ie.SIDEBAR && eR.S.dispatch(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eT.Z.getChannelId() });
                            return;
                        case ez.yXg.ARROW_RIGHT:
                            n === U.Ie.NORMAL && eR.S.dispatch(ez.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ev.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            eK(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, q.PG)(t, this.props.chatInputType);
            }),
            eK(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return T.__(j._b.TEXT, this.props.chatInputType, { applicationId: t });
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
                let { channel: t, showQuarantinedUserBanner: n, guild: l, communicationDisabledUntil: a, showAutomodUserProfileChatBlocker: r } = e;
                return t.type === ez.d4z.DM && n
                    ? (0, i.jsx)(eu.Z, {})
                    : null != a && (0, X.J)(a) && null != l && !eN.Z.can(ez.Plq.ADMINISTRATOR, l)
                      ? (0, i.jsx)(J.T, {
                            guild: l,
                            disabledUntil: a
                        })
                      : r
                        ? (0, i.jsx)(K.h, { guild: l })
                        : null;
            }),
            eK(this, 'renderAppLauncherButton', () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, i.jsx)(ew.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t
                });
            }),
            eK(this, 'renderAppCommandButton', () => {
                let { showAppDMsUI: e, isFailedAppDMLoad: t, channel: n, entryPointCommandButtonRef: l, chatInputType: a } = this.props;
                return e && !t
                    ? (0, i.jsx)('div', {
                          className: eq.entryPointButtonContainer,
                          children: (0, i.jsx)(eF.ZP, {
                              context: {
                                  channel: n,
                                  type: 'channel'
                              },
                              entryPointCommandButtonRef: l,
                              type: a
                          })
                      })
                    : null;
            });
    }
}
let e1 = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: a, filterAfterTimestamp: r } = e,
        { placeholder: s, accessibilityLabel: o } = (0, eD.Z)({ channel: t }),
        c = (0, eu.S)(ej.default.getCurrentUser(), t),
        [d] = (0, Q.AB)(null == n ? void 0 : n.id),
        p = (0, Y.Ux)(null == n ? void 0 : n.id),
        m = (0, u.e7)([ej.default], () => ej.default.getCurrentUser()),
        f = (0, u.e7)([eb.ZP], () => {
            var e, t, i;
            return null != m && null !== (i = null === (e = eb.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ez.lds, null == m ? void 0 : m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        g = (0, u.e7)([es.Z], () => es.Z.isEnabled()),
        _ = (0, ed.Z)(t.id),
        C = (0, $.Z)(t.id),
        x = (0, A.R)({
            channel: t,
            chatInputType: a,
            location: 'ChannelChatMemo'
        }),
        v = (0, w.h9)(t.id),
        E = (0, ef.k)(t.id),
        {
            isInitialLoading: b,
            primaryEntryPointCommand: T,
            isProfileFetching: j,
            wasProfileFetching: y,
            applicationId: P,
            channelId: R,
            commands: M
        } = (0, Z.Z)({
            context: {
                channel: t,
                type: 'channel'
            }
        });
    (0, N.Z)({
        isProfileFetching: j,
        wasProfileFetching: y,
        applicationId: P,
        channelId: R,
        commands: M
    });
    let L = l.useRef(null),
        k = (0, u.e7)([S.Z], () => S.Z.appDMChannelsWithFailedLoads().has(t.id)),
        O = (0, W.R6)('ChannelChat'),
        D = (0, W.Q3)('ChannelChat');
    return (0, i.jsx)(e0, {
        channel: t,
        isEditing: null != (0, u.e7)([eI.Z], () => eI.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, h.s9z)(h.JQI),
        guild: n,
        keyboardModeEnabled: (0, u.e7)([I.Z], () => I.Z.keyboardModeEnabled),
        pendingReply: (0, u.e7)([ep.Z], () => ep.Z.getPendingReply(t.id)),
        chatInputType: a,
        placeholder: s,
        accessibilityLabel: o,
        filterAfterTimestamp: r,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: d,
        shakeIntensity: _,
        poggermodeEnabled: g,
        isSelectedResourceChannel: C,
        showAutomodUserProfileChatBlocker: p && !f,
        showAppLauncherButton: x,
        showAppDMsUI: v,
        isInitialLoading: b,
        showEntryPointAppCommandButton: null != T,
        entryPointCommandButtonRef: L,
        isFailedAppDMLoad: k,
        isRefreshChatInputEnabled: O,
        isRefreshEnabled: D,
        pendingScheduledMessage: E
    });
});
