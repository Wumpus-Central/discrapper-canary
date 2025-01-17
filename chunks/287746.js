n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(966390),
    x = n(738619),
    v = n(410575),
    _ = n(744061),
    I = n(857595),
    E = n(607070),
    b = n(367907),
    Z = n(450936),
    S = n(993766),
    N = n(499254),
    T = n(541099),
    j = n(827498),
    A = n(46332),
    y = n(533379),
    P = n(555573),
    M = n(456007),
    R = n(10718),
    L = n(998698),
    k = n(895924),
    O = n(581364),
    D = n(667204),
    w = n(404295),
    B = n(541716),
    U = n(752305),
    H = n(516887),
    G = n(974251),
    F = n(893718),
    V = n(436660),
    z = n(603009),
    W = n(540059),
    K = n(28546),
    Y = n(295474),
    q = n(521476),
    X = n(69882),
    J = n(71619),
    Q = n(185145),
    $ = n(736052),
    ee = n(146128),
    et = n(549006),
    en = n(925975),
    ei = n(957730),
    el = n(400023),
    er = n(64078),
    ea = n(351780),
    es = n(843693),
    eo = n(217871),
    ec = n(139577),
    ed = n(247944),
    eu = n(623292),
    eh = n(807092),
    ep = n(268350),
    em = n(155409),
    ef = n(314897),
    eg = n(433355),
    eC = n(703558),
    ex = n(323873),
    ev = n(271383),
    e_ = n(375954),
    eI = n(496675),
    eE = n(944486),
    eb = n(117530),
    eZ = n(594174),
    eS = n(626135),
    eN = n(934415),
    eT = n(459273),
    ej = n(585483),
    eA = n(709054),
    ey = n(838440),
    eP = n(127654),
    eM = n(979956),
    eR = n(655687),
    eL = n(165540),
    ek = n(583027),
    eO = n(25007),
    eD = n(685006),
    ew = n(685722),
    eB = n(199649),
    eU = n(1397),
    eH = n(981631),
    eG = n(388032),
    eF = n(247627),
    eV = n(89111);
function ez(e, t, n) {
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
function eW(e) {
    e.preventDefault();
}
let eK = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eY(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class eq extends l.PureComponent {
    componentDidMount() {
        eC.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eC.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eC.Z.getDraft(n.id, eC.d.ChannelMessage);
            e !== i && this.setState((0, U.eK)(e));
        }
        t.textValue.length < eH.J6R && i.length >= eH.J6R && eS.default.track(eH.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        m.Z.startEditMessage(t.id, e.id, e.content), b.ZP.trackWithMetadata(eH.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, O.XA)(e.interactionData),
            { command: l, application: r } = R.Xq(t, n);
        if (null != l) {
            var a, s;
            let e =
                null != r
                    ? {
                          type: k.Qi.APPLICATION,
                          id: r.id,
                          icon: r.icon,
                          name: null !== (s = null == r ? void 0 : null === (a = r.bot) || void 0 === a ? void 0 : a.username) && void 0 !== s ? s : r.name,
                          application: r
                      }
                    : null;
            P.Po({
                channelId: t.id,
                command: l,
                section: e,
                location: k.Vh.RECALL,
                initialValues: (0, M.Dw)(l, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: l, onResize: r, highlighted: a, pendingReply: s, chatInputType: c, placeholder: d, accessibilityLabel: u, shakeIntensity: p, poggermodeEnabled: m, onCommandSentinelTyped: f, renderAppLauncherButton: g, renderAppCommandButton: C } = this.props,
            { contentWarningProps: x } = this.state,
            v = (0, i.jsx)(F.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eF.channelTextArea,
                channel: e,
                placeholder: d,
                accessibilityLabel: u,
                pendingReply: s,
                type: c,
                onChange: this.handleTextareaChange,
                onSubmit: this.handleSendMessage,
                onResize: r,
                onFocus: l,
                onBlur: n,
                onKeyDown: this.handleKeyDown,
                renderAttachButton: this.renderAttachButton,
                renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                renderAppLauncherButton: g,
                renderAppCommandButton: C,
                promptToUpload: eP.d,
                highlighted: a,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: f
            });
        return (0, i.jsx)(h.Popout, {
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
                    (0, i.jsx)(_.Z, {
                        onClose: t,
                        ...x
                    })
                );
            },
            children: () =>
                m
                    ? (0, i.jsx)(h.Shaker, {
                          isShaking: p > 0,
                          intensity: p,
                          className: eF.shaker,
                          children: v
                      })
                    : v
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            ez(this, 'isFirstChange', !0),
            ez(this, 'editorRef', null),
            ez(this, 'state', {
                ...(0, U.eK)(eC.Z.getDraft(this.props.channel.id, eC.d.ChannelMessage)),
                contentWarningProps: null
            }),
            ez(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = eC.Z.getDraft(e.channel.id, eC.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, U.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            ez(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    r = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eH.yXg.DELETE:
                    case eH.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case eH.yXg.ARROW_UP:
                        if (l || r) return;
                        if ((e.preventDefault(), t)) eb.Z.getUploadCount(i.id, eC.d.ChannelMessage) > 0 ? ej.S.dispatchToLastSubscribed(eH.CkL.FOCUS_ATTACHMENT_AREA) : ej.S.dispatchToLastSubscribed(eH.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = e_.Z.getLastChatCommandMessage(e.id),
                                n = e_.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eA.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eH.yXg.ESCAPE:
                        if (l || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, I.rf)();
                            return;
                        }
                        if (eb.Z.getUploadCount(i.id, eC.d.ChannelMessage) > 0) {
                            g.Z.clearAll(i.id, eC.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, r);
            }),
            ez(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    l = ef.default.getId(),
                    r = es.ZP.getUserCombo(l, i),
                    a = (null !== (n = null == r ? void 0 : r.value) && void 0 !== n ? n : 0) + 1;
                (0, er.SE)({
                    channelId: i,
                    userId: l,
                    value: null != e ? e.length : a,
                    multiplier: t
                });
            }),
            ez(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: l }
                } = this.props;
                p.Z.changeDraft(l, t, eC.d.ChannelMessage);
                let r = '' !== t && n !== this.state.richValue,
                    a = r && !eK.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? f.Z.startTyping(l) : '' === t && f.Z.stopTyping(l),
                    r && i && (0, I.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            ez(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, command: l, commandOptionValues: r, isGif: a } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: s, channel: o, pendingReply: c, chatInputType: d } = this.props,
                    u = !1;
                if (null != l) {
                    if (l.inputType === k.iw.BUILT_IN_INTEGRATION)
                        return (
                            ej.S.dispatch(eH.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = L.Z.getCommandOrigin(o.id);
                    if (e === k.bB.APPLICATION_LAUNCHER || e === k.bB.IMAGE_RECS_MENU || e === k.bB.IMAGE_RECS_SUBMENU) {
                        var h;
                        let { location: t, sectionName: n } = null !== (h = (0, ek._U)(l)) && void 0 !== h ? h : {},
                            i = e === k.bB.APPLICATION_LAUNCHER ? T.Z.lastShownEntrypoint() : j._b.TEXT;
                        if (
                            !(await (0, A.L)({
                                applicationId: l.applicationId,
                                channel: o,
                                location: t,
                                sectionName: n,
                                entrypoint: i
                            }))
                        )
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, ek.SC)(l);
                    }
                    let n = await (0, D.Z)({
                        command: l,
                        optionValues: null != r ? r : {},
                        context: {
                            guild: s,
                            channel: o
                        }
                    });
                    if (l.inputType !== k.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (u = !0 === n.tts));
                }
                return (0, ey.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: l, failureReason: r } = e;
                    if (!l)
                        return r === eH.zYc.SLOWMODE_COOLDOWN
                            ? (ej.S.dispatch(eH.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              ej.S.dispatch(eH.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let h = (0, en.g)(t, {
                        channel: o,
                        isEdit: !1
                    });
                    null != h && (null != h.content && (t = h.content), null != h.tts && (u = h.tts));
                    let p = ei.ZP.parse(o, t);
                    p.tts = p.tts || u;
                    let f = m.Z.getSendMessageOptionsForReply(c);
                    if (a)
                        return (
                            m.Z.sendMessage(o.id, p, void 0, f),
                            (0, eu.A6)(o.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eM.KZ)(n);
                        if ((0, eM.Bf)(e, null == s ? void 0 : s.id))
                            return (
                                (0, eP.G)(o, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        C.Z.uploadFiles({
                            channelId: o.id,
                            uploads: n,
                            draftType: eC.d.ChannelMessage,
                            parsedMessage: p,
                            options: {
                                ...f,
                                stickerIds: i
                            }
                        }),
                            g.Z.clearAll(o.id, eC.d.ChannelMessage);
                    } else
                        null != i && i.length > 0
                            ? '' !== t
                                ? m.Z.sendMessage(o.id, p, void 0, {
                                      ...f,
                                      stickerIds: i
                                  })
                                : m.Z.sendStickers(o.id, i, t, f, p.tts)
                            : m.Z.sendMessage(o.id, p, void 0, f);
                    return (
                        this.setState((0, U.H2)()),
                        (0, eu.A6)(o.id),
                        (0, ep.qB)(o.id, d.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            ez(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (V.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            ez(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(G.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eC.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            ez(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(H.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class eX extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !c.tq && eI.Z.can(eH.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        ej.S.subscribe(eH.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        ej.S.unsubscribe(eH.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: l, keyboardModeEnabled: r, hasModalOpen: s, pendingReply: o, chatInputType: c, placeholder: u, accessibilityLabel: p, showQuarantinedUserBanner: m, filterAfterTimestamp: f, communicationDisabledUntil: g, shakeIntensity: C, poggermodeEnabled: _, isSelectedResourceChannel: I, showAutomodUserProfileChatBlocker: E, showAppLauncherButton: b, showAppDMsUI: Z, isInitialLoading: S, isRefreshEnabled: N } = this.props,
            { textAreaFocused: T, textAreaHighlighted: j } = this.state,
            A = c === B.Ie.SIDEBAR;
        t = A && n.type === eH.d4z.GUILD_VOICE ? eG.t.pnnyFR : A && n.type === eH.d4z.GUILD_STAGE_VOICE ? eG.t.YInSkp : d.T.THREADS.has(n.type) ? eG.t['OkzL+f'] : eG.t.UbNmGR;
        let y = (0, i.jsx)('div', {
                className: eF.channelBottomBarArea,
                children: (0, i.jsx)(ew.Z, {})
            }),
            P = (0, i.jsxs)('div', {
                className: eF.channelBottomBarArea,
                children: [
                    (0, i.jsx)(em.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, i.jsx)(eq, {
                            focused: T,
                            highlighted: j,
                            channel: n,
                            guild: l,
                            keyboardModeEnabled: r,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: s,
                            pendingReply: o,
                            chatInputType: c,
                            placeholder: u,
                            accessibilityLabel: p,
                            shakeIntensity: C,
                            poggermodeEnabled: _,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped,
                            renderAppLauncherButton: this.renderAppLauncherButton,
                            renderAppCommandButton: this.renderAppCommandButton
                        })
                    }),
                    N ? null : this.renderAppLauncherButton(),
                    N ? null : this.renderAppCommandButton()
                ]
            }),
            M = Z && S,
            R = M && S ? y : P,
            L = a()({
                [eV.barWithAppLauncherButton]: b,
                [eV.barWithAppsDMsUI]: Z
            });
        return (0, i.jsx)(
            v.Z,
            {
                page: (0, eN.mE)(this.props.channel),
                children: (0, i.jsx)(et.sW, {
                    children: (0, i.jsx)(ee.BV, {
                        children: (0, i.jsxs)(eT.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eT.d9, {
                                    event: eH.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, i.jsx)(eT.d9, {
                                    event: eH.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, i.jsx)(eT.d9, {
                                    event: eH.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, i.jsx)(eT.d9, {
                                    event: eH.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, i.jsxs)(eY, {
                                    isSidebar: A,
                                    className: eF.chatContent,
                                    'aria-label': eG.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, i.jsx)(eO.Z, {
                                            channel: n,
                                            guild: l,
                                            narrow: A
                                        }),
                                        (0, i.jsxs)(h.HeadingLevel, {
                                            component: (0, i.jsx)(h.HiddenVisually, { children: (0, i.jsx)(h.H, { children: eG.intl.format(eG.t.eTzKk5, { channelName: n.name }) }) }),
                                            children: [
                                                (0, i.jsx)(el.Z, {
                                                    channel: n,
                                                    forceCozy: I,
                                                    filterAfterTimestamp: f,
                                                    showingQuarantineBanner: m,
                                                    jumpBarClassName: L
                                                }),
                                                I
                                                    ? null
                                                    : null !==
                                                            (e = this.renderMessageBanner({
                                                                channel: n,
                                                                showQuarantinedUserBanner: m,
                                                                guild: l,
                                                                communicationDisabledUntil: g,
                                                                showAutomodUserProfileChatBlocker: E
                                                            })) && void 0 !== e
                                                      ? e
                                                      : (0, i.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: eW,
                                                            className: a()(eF.form, { [eF.formWithLoadedChatInput]: !M }),
                                                            children: [
                                                                _ && (0, i.jsx)(eo.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(eB.Z, {
                                                                          channel: n,
                                                                          children: R
                                                                      })
                                                                    : (0, i.jsx)(eU.Z, {
                                                                          channel: n,
                                                                          children: R
                                                                      }),
                                                                N
                                                                    ? null
                                                                    : (0, i.jsx)(x.Z, {
                                                                          channel: n,
                                                                          poggermodeEnabled: _
                                                                      }),
                                                                !A && (0, i.jsx)(z.Z, {})
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
            ez(this, 'inputFormRef', l.createRef()),
            ez(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            ez(this, 'dispatchGroupRef', l.createRef()),
            ez(this, 'appIconAnimateRef', l.createRef()),
            ez(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            ez(this, 'handleInputFocus', (e) => {
                var t;
                null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            ez(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            ez(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
            }),
            ez(this, 'handleKeyDown', (e) => {
                var t;
                if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e);
            }),
            ez(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (!!t)
                    switch (e.which) {
                        case eH.yXg.ARROW_LEFT:
                            n === B.Ie.SIDEBAR && ej.S.dispatch(eH.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eE.Z.getChannelId() });
                            return;
                        case eH.yXg.ARROW_RIGHT:
                            n === B.Ie.NORMAL && ej.S.dispatch(eH.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eg.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            ez(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, K.PG)(t, this.props.chatInputType);
            }),
            ez(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return N.__(j._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            ez(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            ez(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            ez(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: l, communicationDisabledUntil: r, showAutomodUserProfileChatBlocker: a } = e;
                return t.type === eH.d4z.DM && n
                    ? (0, i.jsx)(ed.Z, {})
                    : null != r && (0, X.J)(r) && null != l && !eI.Z.can(eH.Plq.ADMINISTRATOR, l)
                      ? (0, i.jsx)(Q.T, {
                            guild: l,
                            disabledUntil: r
                        })
                      : a
                        ? (0, i.jsx)(q.h, { guild: l })
                        : null;
            }),
            ez(this, 'renderAppLauncherButton', () => {
                let { channel: e, entryPointCommandButtonRef: t, chatInputType: n } = this.props;
                return (0, i.jsx)(eL.Z, {
                    channel: e,
                    type: n,
                    animateRef: this.appIconAnimateRef,
                    entryPointCommandButtonRef: t
                });
            }),
            ez(this, 'renderAppCommandButton', () => {
                let { showAppDMsUI: e, isFailedAppDMLoad: t, channel: n, entryPointCommandButtonRef: l, chatInputType: r } = this.props;
                return e && !t
                    ? (0, i.jsx)('div', {
                          className: eF.entryPointButtonContainer,
                          children: (0, i.jsx)(eD.ZP, {
                              channel: n,
                              entryPointCommandButtonRef: l,
                              type: r
                          })
                      })
                    : null;
            });
    }
}
t.Z = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: r, filterAfterTimestamp: a } = e,
        { placeholder: s, accessibilityLabel: o } = (0, eR.Z)({ channel: t }),
        c = (0, ed.S)(eZ.default.getCurrentUser(), t),
        [d] = (0, J.AB)(null == n ? void 0 : n.id),
        p = (0, Y.Ux)(null == n ? void 0 : n.id),
        m = (0, u.e7)([eZ.default], () => eZ.default.getCurrentUser()),
        f = (0, u.e7)([ev.ZP], () => {
            var e, t, i;
            return null != m && null !== (i = null === (e = ev.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eH.lds, null == m ? void 0 : m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        g = (0, u.e7)([ea.Z], () => ea.Z.isEnabled()),
        C = (0, ec.Z)(t.id),
        x = (0, $.Z)(t.id),
        v = (0, y.R)({
            channel: t,
            chatInputType: r,
            location: 'ChannelChatMemo'
        }),
        _ = (0, w.h9)(t.id),
        { isInitialLoading: I, primaryEntryPointCommand: b, isProfileFetching: N, wasProfileFetching: j, applicationId: A, channelId: P, commands: M } = (0, Z.Z)({ channel: t });
    (0, S.Z)({
        isProfileFetching: N,
        wasProfileFetching: j,
        applicationId: A,
        channelId: P,
        commands: M
    });
    let R = l.useRef(null),
        L = (0, u.e7)([T.Z], () => T.Z.appDMChannelsWithFailedLoads().has(t.id)),
        k = (0, W.R6)('ChannelChat');
    return (0, i.jsx)(eX, {
        channel: t,
        isEditing: null != (0, u.e7)([ex.Z], () => ex.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, h.useModalsStore)(h.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, u.e7)([E.Z], () => E.Z.keyboardModeEnabled),
        pendingReply: (0, u.e7)([eh.Z], () => eh.Z.getPendingReply(t.id)),
        chatInputType: r,
        placeholder: s,
        accessibilityLabel: o,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: d,
        shakeIntensity: C,
        poggermodeEnabled: g,
        isSelectedResourceChannel: x,
        showAutomodUserProfileChatBlocker: p && !f,
        showAppLauncherButton: v,
        showAppDMsUI: _,
        isInitialLoading: I,
        showEntryPointAppCommandButton: null != b,
        entryPointCommandButtonRef: R,
        isFailedAppDMLoad: L,
        isRefreshEnabled: k
    });
});
