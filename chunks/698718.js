n.d(t, {
    A: () => e8,
}),
    n(896048),
    n(747238),
    n(733351),
    n(938796);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(607399),
    u = n(478437),
    d = n(665260),
    f = n(311907),
    p = n(397927),
    h = n(465532),
    b = n(843472),
    g = n(414798),
    m = n(608299),
    A = n(147192),
    y = n(820284),
    O = n(955572),
    j = n(775602),
    v = n(58149),
    x = n(211401),
    E = n(989837),
    _ = n(500049),
    C = n(721768),
    S = n(258363),
    I = n(842209),
    N = n(861382),
    T = n(392054),
    P = n(168186),
    w = n(545152),
    R = n(972995),
    D = n(355622),
    M = n(408018),
    L = n(223938),
    G = n(811501),
    k = n(20737),
    U = n(133343),
    V = n(35277),
    F = n(595914),
    H = n(151271),
    B = n(81400),
    K = n(870006),
    W = n(316031),
    z = n(870136),
    Y = n(834651),
    q = n(265869),
    X = n(129185),
    J = n(513609),
    Q = n(301169),
    Z = n(751258),
    $ = n(451909),
    ee = n(195880),
    et = n(926262),
    en = n(371648),
    er = n(928830),
    el = n(3137),
    ei = n(559908),
    ea = n(329449),
    es = n(582223),
    eo = n(720480),
    ec = n(118517),
    eu = n(853145),
    ed = n(157432),
    ef = n(151282),
    ep = n(654783),
    eh = n(970244),
    eb = n(631576),
    eg = n(252263),
    em = n(67259),
    eA = n(351488),
    ey = n(728321),
    eO = n(164891),
    ej = n(961350),
    ev = n(761640),
    ex = n(734057),
    eE = n(31717),
    e_ = n(580745),
    eC = n(696451),
    eS = n(320501),
    eI = n(576705),
    eN = n(309010),
    eT = n(522602),
    eP = n(287809),
    ew = n(954571),
    eR = n(147036),
    eD = n(234320),
    eM = n(203982),
    eL = n(661191),
    eG = n(460350),
    ek = n(518960),
    eU = n(382287),
    eV = n(137577),
    eF = n(480870),
    eH = n(390756),
    eB = n(387462),
    eK = n(582968),
    eW = n(667285),
    ez = n(920437),
    eY = n(379600),
    eq = n(652215),
    eX = n(381941),
    eJ = n(985018),
    eQ = n(638990);

function eZ(e, t, n) {
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eZ(e, t, n[t]);
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

function e9(e) {
    let { isSidebar: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["isSidebar"]);
    return t
        ? (0, r.jsx)(
              "section",
              e0(e$({}, n), {
                  role: "complementary",
              }),
          )
        : (0, r.jsx)("main", e$({}, n));
}
let e7 = l.forwardRef((e, t) =>
    (0, r.jsx)(
        e3,
        e0(e$({}, e), {
            ref: t,
        }),
    ),
);
e7.displayName = "ChannelTextAreaForm";
class e3 extends l.PureComponent {
    focusEditor() {
        var e;
        null == (e = this.editorRef) || e.focus();
    }
    componentDidMount() {
        eE.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eE.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eE.A.getDraft(n.id, eE.C.ChannelMessage);
            e !== r && this.setState((0, M.ur)(e));
        }
        t.textValue.length < eq.uvi && r.length >= eq.uvi && ew.default.track(eq.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        b.A.startEditMessageRecord(t.id, e), v.Ay.trackWithMetadata(eq.HAw.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: r } = (0, P.Ez)(e.interactionData),
            { command: l, application: i } = I.EW(
                {
                    channel: t,
                    type: "channel",
                },
                n,
            );
        if (null != l) {
            var a, s;
            let e =
                null != i
                    ? {
                          type: T.Hf.APPLICATION,
                          id: i.id,
                          icon: i.icon,
                          name: null != (a = null == i || null == (s = i.bot) ? void 0 : s.username) ? a : i.name,
                          application: i,
                      }
                    : null;
            C.Gf({
                channelId: t.id,
                command: l,
                section: e,
                location: T.Oh.RECALL,
                initialValues: (0, S.DB)(l, null != r ? r : []),
                commandOrigin: T.iw.CHAT,
            });
        }
    }
    render() {
        let {
                channel: e,
                focused: t,
                onBlur: n,
                onFocus: l,
                onResize: i,
                highlighted: a,
                pendingReply: s,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: d,
                shakeIntensity: f,
                poggermodeEnabled: h,
                pendingScheduledMessage: b,
                announcementComposerEnabled: g,
            } = this.props,
            { contentWarningProps: m } = this.state,
            A =
                e.type === eq.rbe.GUILD_ANNOUNCEMENT && g
                    ? (0, r.jsx)(L.A, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eQ.gM,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: s,
                          type: D.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: i,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: ek.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, r.jsx)(U.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eQ.gM,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: s,
                          type: c,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: i,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: ek.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: b,
                      });
        return (0, r.jsx)(p.YNO, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                var e;
                null == m || null == (e = m.onCancel) || e.call(m),
                    this.setState({
                        contentWarningProps: null,
                    });
            },
            shouldShow: null != m,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != m, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, r.jsx)(
                        et.A,
                        e$(
                            {
                                onClose: t,
                            },
                            m,
                        ),
                    )
                );
            },
            children: () =>
                h
                    ? (0, r.jsx)(p.bfh, {
                          isShaking: f > 0,
                          intensity: f,
                          className: eQ.Xn,
                          children: A,
                      })
                    : A,
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eZ(this, "isFirstChange", !0),
            eZ(this, "editorRef", null),
            eZ(
                this,
                "state",
                e0(e$({}, (0, M.ur)(eE.A.getDraft(this.props.channel.id, eE.C.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            eZ(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = eE.A.getDraft(e.channel.id, eE.C.ChannelMessage);
                n !== r &&
                    ("" === r || "" === n) &&
                    t.setState((0, M.ur)(r), () => {
                        if (n !== r) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eZ(this, "handleKeyDown", (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: r } = this.props,
                    l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    i = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eq.Ks6.DELETE:
                    case eq.Ks6.BACKSPACE:
                        return void this.handleIncrementCombo("", 1);
                    case eq.Ks6.ARROW_UP:
                        if (l || i) return;
                        if ((e.preventDefault(), t))
                            eT.A.getUploadCount(r.id, eE.C.ChannelMessage) > 0
                                ? eM._.dispatchToLastSubscribed(eq.jej.FOCUS_ATTACHMENT_AREA)
                                : eM._.dispatchToLastSubscribed(eq.jej.FOCUS_MESSAGES, {
                                      atEnd: !0,
                                  });
                        else {
                            let { channel: e } = this.props,
                                t = eS.A.getLastChatCommandMessage(e.id),
                                n = eS.A.getLastEditableMessage(e.id);
                            null != t && null != n
                                ? eL.default.compare(n.id, t.id) > 0
                                    ? this.handleEditLastMessage(n)
                                    : this.handleRecallLastCommand(t)
                                : null != t
                                  ? this.handleRecallLastCommand(t)
                                  : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eq.Ks6.ESCAPE:
                        if (l || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, O.Bm)();
                        if (eT.A.getUploadCount(r.id, eE.C.ChannelMessage) > 0)
                            return void m.A.clearAll(r.id, eE.C.ChannelMessage);
                }
                null == n || n(e, i);
            }),
            eZ(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    l = ej.default.getId(),
                    i = ei.Ay.getUserCombo(l, r),
                    a = (null != (n = null == i ? void 0 : i.value) ? n : 0) + 1;
                (0, er.oG)({
                    channelId: r,
                    userId: l,
                    value: null != e ? e.length : a,
                    multiplier: t,
                });
            }),
            eZ(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: l },
                } = this.props;
                h.A.changeDraft(l, t, eE.C.ChannelMessage);
                let i = "" !== t && n !== this.state.richValue,
                    a = i && !e2.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? g.A.startTyping(l) : "" === t && g.A.stopTyping(l),
                    i && r && (0, O.Bm)(),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            eZ(this, "handleSendMessage", async (e) => {
                let {
                    value: t,
                    uploads: n,
                    stickers: r,
                    command: l,
                    commandOptionValues: i,
                    isGif: a,
                    components: s,
                    announcementSendOptions: o,
                } = e;
                if (0 === (t = t.trim()).length && (null == r || 0 === r.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0,
                    });
                let {
                        guild: c,
                        channel: u,
                        pendingReply: f,
                        chatInputType: p,
                        threadsAlsoSendToChannel: g,
                    } = this.props,
                    A = !1;
                if (null != l) {
                    if (l.inputType === T.y$.BUILT_IN_INTEGRATION)
                        return (
                            eM._.dispatch(eq.jej.SHAKE_APP, {
                                duration: 200,
                                intensity: 2,
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            })
                        );
                    let e = N.A.getCommandOrigin(u.id);
                    if (null == e || e === T.iw.CHAT) {
                        let { isAuthorized: e } = await (0, R.q)({
                            applicationId: l.applicationId,
                            channel: u,
                            commandIntegrationTypes: l.integration_types,
                        });
                        if (!e)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            });
                    } else if (
                        e === T.iw.APPLICATION_LAUNCHER ||
                        e === T.iw.IMAGE_RECS_MENU ||
                        e === T.iw.IMAGE_RECS_SUBMENU
                    ) {
                        var y;
                        let { location: t, sectionName: n } = null != (y = (0, eH.bV)(l)) ? y : {},
                            r = e === T.iw.APPLICATION_LAUNCHER ? E.A.lastShownEntrypoint() : _.s4.TEXT,
                            { isAuthorized: i } = await (0, R.q)({
                                applicationId: l.applicationId,
                                channel: u,
                                commandIntegrationTypes: l.integration_types,
                                appLauncherContext: {
                                    location: t,
                                    sectionName: n,
                                    entrypoint: r,
                                },
                            });
                        if (!i)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            });
                        (0, eH.My)(l);
                    }
                    let n = await (0, w.A)({
                        command: l,
                        optionValues: null != i ? i : {},
                        context: {
                            guild: c,
                            channel: u,
                        },
                    });
                    if (l.inputType !== T.y$.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0,
                        });
                    null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (A = !0 === n.tts));
                }
                return (0, eG.i)({
                    openWarningPopout: (e) =>
                        this.setState({
                            contentWarningProps: e,
                        }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: r,
                    uploads: n,
                    channel: u,
                }).then(async (e) => {
                    var i, y, O;
                    let { valid: j, failureReason: v } = e;
                    if (!j)
                        if (v === eq.X8x.SLOWMODE_COOLDOWN)
                            return (
                                eM._.dispatch(eq.jej.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2,
                                }),
                                eM._.dispatch(eq.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let x = (0, Z.S)(t, {
                        channel: u,
                        isEdit: !1,
                    });
                    null != x && (null != x.content && (t = x.content), null != x.tts && (A = x.tts));
                    let E = $.Ay.parse(u, t);
                    (E.tts = E.tts || A), null != s && ((E.content = ""), (E.components = s));
                    let _ = e0(
                        e$(
                            {},
                            b.A.getSendMessageOptions({
                                content: t,
                                channelId: u.id,
                                uploads: n,
                                stickers: r,
                                command: l,
                                isGif: a,
                                pendingReply: f,
                                alsoForwardToChannelId: g && null != (i = u.parent_id) ? i : void 0,
                                scheduledTimestamp:
                                    null == (y = this.props.pendingScheduledMessage) ? void 0 : y.scheduledTimestamp,
                            }),
                        ),
                        {
                            location: eX.Hx.CHAT_INPUT,
                        },
                    );
                    if (
                        (null != o && (_.announcementSendOptions = o),
                        null != s && (_.flags = (0, d.UI)(null != (O = _.flags) ? O : 0, eq.pr7.IS_COMPONENTS_V2)),
                        a)
                    )
                        return (
                            b.A.sendMessage(u.id, E, void 0, _).then(() => {
                                if (g) {
                                    var e;
                                    eA._(null != (e = u.parent_id) ? e : void 0);
                                }
                            }),
                            (0, ec.Jx)(u.id),
                            eg.B({
                                channelId: u.id,
                                enabled: !1,
                            }),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eU.LJ)(n);
                        if ((0, eU.fJ)(e, null == c ? void 0 : c.id))
                            return (
                                (0, ek.V)(u, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (_.eagerDispatch = !1),
                            (_.attachmentsToUpload = n),
                            (_.onAttachmentUploadError = (e, r, l) => {
                                (0, Q.k)({
                                    file: e,
                                    guildId: u.getGuildId(),
                                    analyticsLocations: [],
                                    code: r,
                                    reason: l,
                                }) &&
                                    ("" !== t &&
                                        "" === eE.A.getDraft(u.id, eE.C.ChannelMessage) &&
                                        h.A.saveDraft(u.id, t, eE.C.ChannelMessage),
                                    0 === eT.A.getUploadCount(u.id, eE.C.ChannelMessage) &&
                                        m.A.setUploads({
                                            channelId: u.id,
                                            uploads: n,
                                            draftType: eE.C.ChannelMessage,
                                        }));
                            }),
                            m.A.clearAll(u.id, eE.C.ChannelMessage);
                    }
                    if (null != _.scheduledTimestamp)
                        try {
                            await (0, ef.pr)({
                                channelId: u.id,
                                scheduledTimestamp: _.scheduledTimestamp,
                                messageSendData: {
                                    channelId: u.id,
                                    content: t,
                                    nonce: (0, ee.m)(),
                                    tts: A,
                                    message_reference: _.messageReference,
                                    allowed_mentions: _.allowedMentions,
                                    flags: _.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, eh.c_)(_.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, eh.kM)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        }
                    else
                        b.A.sendMessage(u.id, E, void 0, _).then(() => {
                            if (g) {
                                var e;
                                eA._(null != (e = u.parent_id) ? e : void 0);
                            }
                        });
                    return (
                        this.setState((0, M.N3)()),
                        (0, ec.Jx)(u.id),
                        (0, eb.x5)(u.id, p.drafts.type),
                        eg.B({
                            channelId: u.id,
                            enabled: !1,
                        }),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0,
                        }
                    );
                });
            }),
            eZ(this, "handleSetValue", (e) => {
                var t, n;
                let r = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != r && (V.b.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            eZ(this, "renderAttachButton", (e, t) =>
                (0, r.jsx)(k.A, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eE.C.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                    chatInputType: this.props.chatInputType,
                }),
            ),
            eZ(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, r.jsx)(G.A, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class e6 extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: r } = t;
        return n.id !== r
            ? {
                  textAreaFocused:
                      null != n && n.type !== eq.rbe.GUILD_ANNOUNCEMENT && !c.Fr && eI.A.can(eq.xBc.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    componentDidMount() {
        eM._.subscribe(eq.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eM._.unsubscribe(eq.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t,
            {
                channel: n,
                guild: l,
                keyboardModeEnabled: i,
                hasModalOpen: s,
                pendingReply: o,
                threadsAlsoSendToChannel: c,
                chatInputType: d,
                placeholder: f,
                accessibilityLabel: h,
                showQuarantinedUserBanner: b,
                filterAfterTimestamp: g,
                communicationDisabledUntil: m,
                shakeIntensity: O,
                poggermodeEnabled: j,
                isSelectedResourceChannel: v,
                showAutomodUserProfileChatBlocker: x,
                pendingScheduledMessage: E,
                recipientUser: _,
                voiceChannel: C,
                messagesTypingGradient: S,
                showLinkedLobbyApplicationLoadingIndicator: I,
                announcementComposerEnabled: N,
            } = this.props,
            { textAreaFocused: T, textAreaHighlighted: P } = this.state,
            w = d === D.oU.SIDEBAR;
        t =
            w && n.type === eq.rbe.GUILD_VOICE
                ? eJ.t.pnnyFZ
                : w && n.type === eq.rbe.GUILD_STAGE_VOICE
                  ? eJ.t.YInSkq
                  : u.k.THREADS.has(n.type)
                    ? eJ.t["OkzL+Q"]
                    : eJ.t.UbNmGc;
        let R = (0, r.jsx)("div", {
                className: eQ.li,
                children: (0, r.jsx)(eK.A, {}),
            }),
            M = (0, r.jsx)("div", {
                className: eQ.li,
                children: (0, r.jsx)(ey.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, r.jsx)(e7, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: T,
                        highlighted: P,
                        channel: n,
                        guild: l,
                        keyboardModeEnabled: i,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: s,
                        pendingReply: o,
                        threadsAlsoSendToChannel: c,
                        chatInputType: d,
                        placeholder: f,
                        accessibilityLabel: h,
                        shakeIntensity: O,
                        poggermodeEnabled: j,
                        pendingScheduledMessage: E,
                        announcementComposerEnabled: N,
                    }),
                }),
            }),
            L = I ? R : M,
            { enabled: G } = eO.A.getCurrentConfig({
                guildId: null == C ? void 0 : C.guild_id,
                location: "ChannelChat",
            }),
            k = G && null != _ && null != C && null != C.guild_id;
        return (0, r.jsx)(
            y.A,
            {
                page: (0, eR.DJ)(this.props.channel),
                children: (0, r.jsx)(J.di, {
                    children: (0, r.jsx)(X.Xq, {
                        children: (0, r.jsxs)(eD.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, r.jsx)(eD.EG, {
                                    event: eq.jej.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, r.jsx)(eD.EG, {
                                    event: eq.jej.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, r.jsx)(eD.EG, {
                                    event: eq.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, r.jsx)(eD.EG, {
                                    event: eq.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, r.jsxs)(e9, {
                                    isSidebar: w,
                                    className: eQ.q2,
                                    "aria-label": eJ.intl.formatToPlainString(t, {
                                        channelName: n.name,
                                    }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        k &&
                                            (0, r.jsx)(eY.A, {
                                                recipientUser: _,
                                                voiceChannel: C,
                                            }),
                                        (0, r.jsx)(eB.A, {
                                            channel: n,
                                            guild: l,
                                            narrow: w,
                                        }),
                                        (0, r.jsxs)(p.Fmo, {
                                            component: (0, r.jsx)(p.AC4, {
                                                children: (0, r.jsx)(p.H, {
                                                    children: eJ.intl.format(eJ.t.eTzKkx, {
                                                        channelName: n.name,
                                                    }),
                                                }),
                                            }),
                                            children: [
                                                (0, r.jsx)(en.A, {
                                                    channel: n,
                                                    forceCozy: v,
                                                    filterAfterTimestamp: g,
                                                    showingQuarantineBanner: b,
                                                    typingGradient: S,
                                                }),
                                                v
                                                    ? null
                                                    : null !=
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: b,
                                                            guild: l,
                                                            communicationDisabledUntil: m,
                                                            showAutomodUserProfileChatBlocker: x,
                                                        }))
                                                      ? e
                                                      : (0, r.jsxs)("form", {
                                                            ref: this.inputFormRef,
                                                            onSubmit: e1,
                                                            className: a()(eQ.Zd, {
                                                                [eQ.Mf]: !I,
                                                            }),
                                                            children: [
                                                                j &&
                                                                    (0, r.jsx)(ea.A, {
                                                                        channelId: n.id,
                                                                    }),
                                                                n.isPrivate()
                                                                    ? (0, r.jsx)(eW.A, {
                                                                          channel: n,
                                                                          children: L,
                                                                      })
                                                                    : (0, r.jsx)(ez.A, {
                                                                          channel: n,
                                                                          children: L,
                                                                      }),
                                                                (0, r.jsx)(A.Ay, {
                                                                    channel: n,
                                                                    isInTextChannel: !0,
                                                                }),
                                                            ],
                                                        }),
                                                (0, r.jsx)(J.lr, {}),
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
            eZ(this, "containerDomRef", l.createRef()),
            eZ(this, "refToChannelTextAreaFormComponent", l.createRef()),
            eZ(this, "inputFormRef", l.createRef()),
            eZ(this, "state", {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id,
            }),
            eZ(this, "dispatchGroupRef", l.createRef()),
            eZ(this, "handleRequestFocus", (e) => {
                if (e.channelId === this.props.channel.id)
                    if (this.state.textAreaFocused) {
                        var t;
                        null == (t = this.refToChannelTextAreaFormComponent.current) || t.focusEditor();
                    } else
                        this.setState({
                            textAreaFocused: !0,
                        });
            }),
            eZ(this, "handleInputFocus", (e) => {
                var t;
                null == (t = this.dispatchGroupRef.current) || t.bumpDispatchPriority(),
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight,
                          })
                        : this.setState({
                              textAreaFocused: !0,
                          });
            }),
            eZ(this, "handleInputBlur", () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1,
                    });
            }),
            eZ(this, "handleInputKeyDown", (e, t) => {
                this.state.textAreaHighlighted &&
                    this.setState({
                        textAreaHighlighted: !1,
                    }),
                    t || this._handleMoveToPane(e);
            }),
            eZ(this, "handleKeyDown", (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            eZ(this, "_handleMoveToPane", (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: r } = this.props;
                if (t)
                    switch (e.which) {
                        case eq.Ks6.ARROW_LEFT:
                            n === D.oU.SIDEBAR &&
                                eM._.dispatch(eq.jej.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: eN.A.getChannelId(),
                                });
                            return;
                        case eq.Ks6.ARROW_RIGHT:
                            n === D.oU.NORMAL &&
                                eM._.dispatch(eq.jej.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: ev.Ay.getCurrentSidebarChannelId(r.id),
                                });
                    }
            }),
            eZ(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, H.bf)(t, this.props.chatInputType, this.props.channel.id);
            }),
            eZ(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return x.R(
                    _.s4.TEXT,
                    this.props.chatInputType,
                    {
                        applicationId: t,
                    },
                    this.props.channel.id,
                );
            }),
            eZ(this, "handleChatInteract", () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            eZ(this, "renderMessageBanner", (e) => {
                let {
                    channel: t,
                    showQuarantinedUserBanner: n,
                    guild: l,
                    communicationDisabledUntil: i,
                    showAutomodUserProfileChatBlocker: a,
                } = e;
                return t.type === eq.rbe.DM && n
                    ? (0, r.jsx)(eo.A, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, r.jsx)(ed.A, {
                            channelId: t.id,
                        })
                      : null != i && (0, W.n)(i) && null != l && !eI.A.can(eq.xBc.ADMINISTRATOR, l)
                        ? (0, r.jsx)(Y.j, {
                              guild: l,
                              disabledUntil: i,
                          })
                        : a
                          ? (0, r.jsx)(K.u, {
                                guild: l,
                            })
                          : null;
            });
    }
}
let e8 = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: i } = e,
        { placeholder: a, accessibilityLabel: s } = (0, eF.A)({
            channel: t,
        }),
        o = (0, eo.L)(eP.default.getCurrentUser(), t),
        [c] = (0, z.c)(null == n ? void 0 : n.id),
        u = (0, B.uZ)(null == n ? void 0 : n.id),
        d = (0, f.bG)([eP.default], () => eP.default.getCurrentUser()),
        h = (0, f.bG)([eC.Ay], () => {
            var e, t, r;
            return (
                null != d &&
                null !=
                    (e =
                        null ==
                        (r = eC.Ay.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : eq.dJq,
                            null == d ? void 0 : d.id,
                        ))
                            ? void 0
                            : r.isPending) &&
                e
            );
        }),
        b = (0, f.bG)([el.A], () => el.A.isEnabled()),
        g = (0, es.A)(t.id),
        m = (0, q.A)(t.id),
        y = (0, ep.D)(t.id),
        O = (0, f.bG)([eN.A], () => eN.A.getVoiceChannelId()),
        v = (0, f.bG)([ex.A], () => ex.A.getChannel(O)),
        x = (0, f.bG)([eP.default], () => (t.type !== eq.rbe.DM ? null : eP.default.getUser(t.getRecipientId()))),
        E = (0, f.bG)([em.A], () => em.A.getAlsoSendToChannel(t.id)),
        _ = (0, f.bG)([ei.Ay, ej.default], () => ei.Ay.getUserCombo(ej.default.getId(), t.id)),
        C = (0, A.rj)(t),
        S = (0, A.aW)(t),
        I = C.length > 0 || t.rateLimitPerUser > 0 || null != _ || null != S,
        { showLinkedLobbyApplicationLoadingIndicator: N } = (0, eV.A)(t.linkedLobby),
        T = (0, F.A)("ChannelChat");
    return (0, r.jsx)(e6, {
        channel: t,
        isEditing: null != (0, f.bG)([e_.A], () => e_.A.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.red)(p.DXt),
        guild: n,
        keyboardModeEnabled: (0, f.bG)([j.A], () => j.A.keyboardModeEnabled),
        pendingReply: (0, f.bG)([eu.A], () => eu.A.getPendingReply(t.id)),
        threadsAlsoSendToChannel: E,
        chatInputType: l,
        placeholder: a,
        accessibilityLabel: s,
        filterAfterTimestamp: i,
        showQuarantinedUserBanner: o,
        communicationDisabledUntil: c,
        shakeIntensity: g,
        poggermodeEnabled: b,
        isSelectedResourceChannel: m,
        showAutomodUserProfileChatBlocker: u && !h,
        pendingScheduledMessage: y,
        recipientUser: x,
        voiceChannel: v,
        messagesTypingGradient: I,
        showLinkedLobbyApplicationLoadingIndicator: N,
        announcementComposerEnabled: T,
    });
});
