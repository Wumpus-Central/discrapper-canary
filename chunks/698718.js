n.d(t, {
    A: () => e5,
}),
    n(896048),
    n(747238),
    n(733351),
    n(938796);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(607399),
    u = n(478437),
    d = n(665260),
    p = n(311907),
    h = n(397927),
    f = n(465532),
    g = n(843472),
    m = n(414798),
    b = n(608299),
    A = n(147192),
    y = n(820284),
    _ = n(955572),
    O = n(775602),
    j = n(58149),
    v = n(211401),
    x = n(989837),
    E = n(500049),
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
    k = n(811501),
    G = n(20737),
    U = n(133343),
    B = n(35277),
    V = n(595914),
    F = n(151271),
    H = n(81400),
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
    es = n(329449),
    ea = n(582223),
    eo = n(720480),
    ec = n(118517),
    eu = n(853145),
    ed = n(157432),
    ep = n(151282),
    eh = n(654783),
    ef = n(970244),
    eg = n(631576),
    em = n(252263),
    eb = n(67259),
    eA = n(351488),
    ey = n(728321),
    e_ = n(164891),
    eO = n(961350),
    ej = n(761640),
    ev = n(734057),
    ex = n(31717),
    eE = n(580745),
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
    ek = n(460350),
    eG = n(518960),
    eU = n(382287),
    eB = n(137577),
    eV = n(480870),
    eF = n(390756),
    eH = n(387462),
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
let e9 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

function e7(e) {
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
let e2 = l.forwardRef((e, t) =>
    (0, r.jsx)(
        e6,
        e0(e$({}, e), {
            ref: t,
        }),
    ),
);
e2.displayName = "ChannelTextAreaForm";
class e6 extends l.PureComponent {
    focusEditor() {
        var e;
        null == (e = this.editorRef) || e.focus();
    }
    componentDidMount() {
        ex.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ex.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: r } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ex.A.getDraft(n.id, ex.C.ChannelMessage);
            e !== r && this.setState((0, M.ur)(e));
        }
        t.textValue.length < eq.uvi && r.length >= eq.uvi && ew.default.track(eq.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        g.A.startEditMessageRecord(t.id, e), j.Ay.trackWithMetadata(eq.HAw.MESSAGE_EDIT_UP_ARROW);
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
            var s, a;
            let e =
                null != i
                    ? {
                          type: T.Hf.APPLICATION,
                          id: i.id,
                          icon: i.icon,
                          name: null != (s = null == i || null == (a = i.bot) ? void 0 : a.username) ? s : i.name,
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
                highlighted: s,
                pendingReply: a,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: d,
                shakeIntensity: p,
                poggermodeEnabled: f,
                pendingScheduledMessage: g,
                announcementComposerEnabled: m,
            } = this.props,
            { contentWarningProps: b } = this.state,
            A =
                e.type === eq.rbe.GUILD_ANNOUNCEMENT && m
                    ? (0, r.jsx)(L.A, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eQ.gM,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: a,
                          type: D.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: i,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eG.R,
                          highlighted: s,
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
                          pendingReply: a,
                          type: c,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: i,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eG.R,
                          highlighted: s,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: g,
                      });
        return (0, r.jsx)(h.YNO, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                var e;
                null == b || null == (e = b.onCancel) || e.call(b),
                    this.setState({
                        contentWarningProps: null,
                    });
            },
            shouldShow: null != b,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != b, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, r.jsx)(
                        et.A,
                        e$(
                            {
                                onClose: t,
                            },
                            b,
                        ),
                    )
                );
            },
            children: () =>
                f
                    ? (0, r.jsx)(h.bfh, {
                          isShaking: p > 0,
                          intensity: p,
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
                e0(e$({}, (0, M.ur)(ex.A.getDraft(this.props.channel.id, ex.C.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            eZ(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    r = ex.A.getDraft(e.channel.id, ex.C.ChannelMessage);
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
                            eT.A.getUploadCount(r.id, ex.C.ChannelMessage) > 0
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
                        if ((e.preventDefault(), t)) return void (0, _.Bm)();
                        if (eT.A.getUploadCount(r.id, ex.C.ChannelMessage) > 0)
                            return void b.A.clearAll(r.id, ex.C.ChannelMessage);
                }
                null == n || n(e, i);
            }),
            eZ(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let r = this.props.channel.id,
                    l = eO.default.getId(),
                    i = ei.Ay.getUserCombo(l, r),
                    s = (null != (n = null == i ? void 0 : i.value) ? n : 0) + 1;
                (0, er.oG)({
                    channelId: r,
                    userId: l,
                    value: null != e ? e.length : s,
                    multiplier: t,
                });
            }),
            eZ(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: r,
                    channel: { id: l },
                } = this.props;
                f.A.changeDraft(l, t, ex.C.ChannelMessage);
                let i = "" !== t && n !== this.state.richValue,
                    s = i && !e9.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    s && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    s ? m.A.startTyping(l) : "" === t && m.A.stopTyping(l),
                    i && r && (0, _.Bm)(),
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
                    isGif: s,
                    components: a,
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
                        pendingReply: p,
                        chatInputType: h,
                        threadsAlsoSendToChannel: m,
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
                        let { location: t, sectionName: n } = null != (y = (0, eF.bV)(l)) ? y : {},
                            r = e === T.iw.APPLICATION_LAUNCHER ? x.A.lastShownEntrypoint() : E.s4.TEXT,
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
                        (0, eF.My)(l);
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
                return (0, ek.i)({
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
                    var i, y, _;
                    let { valid: O, failureReason: j } = e;
                    if (!O)
                        if (j === eq.X8x.SLOWMODE_COOLDOWN)
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
                    let v = (0, Z.S)(t, {
                        channel: u,
                        isEdit: !1,
                    });
                    null != v && (null != v.content && (t = v.content), null != v.tts && (A = v.tts));
                    let x = $.Ay.parse(u, t);
                    (x.tts = x.tts || A), null != a && ((x.content = ""), (x.components = a));
                    let E = e0(
                        e$(
                            {},
                            g.A.getSendMessageOptions({
                                content: t,
                                channelId: u.id,
                                uploads: n,
                                stickers: r,
                                command: l,
                                isGif: s,
                                pendingReply: p,
                                alsoForwardToChannelId: m && null != (i = u.parent_id) ? i : void 0,
                                scheduledTimestamp:
                                    null == (y = this.props.pendingScheduledMessage) ? void 0 : y.scheduledTimestamp,
                            }),
                        ),
                        {
                            location: eX.Hx.CHAT_INPUT,
                        },
                    );
                    if (
                        (null != o && (E.announcementSendOptions = o),
                        null != a && (E.flags = (0, d.UI)(null != (_ = E.flags) ? _ : 0, eq.pr7.IS_COMPONENTS_V2)),
                        s)
                    )
                        return (
                            g.A.sendMessage(u.id, x, void 0, E).then(() => {
                                if (m) {
                                    var e;
                                    eA._(null != (e = u.parent_id) ? e : void 0);
                                }
                            }),
                            (0, ec.Jx)(u.id),
                            em.B({
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
                                (0, eG.V)(u, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (E.eagerDispatch = !1),
                            (E.attachmentsToUpload = n),
                            (E.onAttachmentUploadError = (e, r, l) => {
                                (0, Q.k)({
                                    file: e,
                                    guildId: u.getGuildId(),
                                    analyticsLocations: [],
                                    code: r,
                                    reason: l,
                                }) &&
                                    ("" !== t &&
                                        "" === ex.A.getDraft(u.id, ex.C.ChannelMessage) &&
                                        f.A.saveDraft(u.id, t, ex.C.ChannelMessage),
                                    0 === eT.A.getUploadCount(u.id, ex.C.ChannelMessage) &&
                                        b.A.setUploads({
                                            channelId: u.id,
                                            uploads: n,
                                            draftType: ex.C.ChannelMessage,
                                        }));
                            }),
                            b.A.clearAll(u.id, ex.C.ChannelMessage);
                    }
                    if (null != E.scheduledTimestamp)
                        try {
                            await (0, ep.pr)({
                                channelId: u.id,
                                scheduledTimestamp: E.scheduledTimestamp,
                                messageSendData: {
                                    channelId: u.id,
                                    content: t,
                                    nonce: (0, ee.m)(),
                                    tts: A,
                                    message_reference: E.messageReference,
                                    allowed_mentions: E.allowedMentions,
                                    flags: E.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, ef.c_)(E.scheduledTimestamp);
                        } catch (e) {
                            return (
                                (0, ef.kM)(e.message),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        }
                    else
                        g.A.sendMessage(u.id, x, void 0, E).then(() => {
                            if (m) {
                                var e;
                                eA._(null != (e = u.parent_id) ? e : void 0);
                            }
                        });
                    return (
                        this.setState((0, M.N3)()),
                        (0, ec.Jx)(u.id),
                        (0, eg.x5)(u.id, h.drafts.type),
                        em.B({
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
                null != r && (B.b.select(r, []), r.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            eZ(this, "renderAttachButton", (e, t) =>
                (0, r.jsx)(G.A, {
                    className: t,
                    channel: this.props.channel,
                    draftType: ex.C.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                }),
            ),
            eZ(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, r.jsx)(k.A, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class e3 extends l.PureComponent {
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
                hasModalOpen: a,
                pendingReply: o,
                threadsAlsoSendToChannel: c,
                chatInputType: d,
                placeholder: p,
                accessibilityLabel: f,
                showQuarantinedUserBanner: g,
                filterAfterTimestamp: m,
                communicationDisabledUntil: b,
                shakeIntensity: _,
                poggermodeEnabled: O,
                isSelectedResourceChannel: j,
                showAutomodUserProfileChatBlocker: v,
                pendingScheduledMessage: x,
                recipientUser: E,
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
                    children: (0, r.jsx)(e2, {
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
                        hasModalOpen: a,
                        pendingReply: o,
                        threadsAlsoSendToChannel: c,
                        chatInputType: d,
                        placeholder: p,
                        accessibilityLabel: f,
                        shakeIntensity: _,
                        poggermodeEnabled: O,
                        pendingScheduledMessage: x,
                        announcementComposerEnabled: N,
                    }),
                }),
            }),
            L = I ? R : M,
            { enabled: k } = e_.A.getCurrentConfig({
                guildId: null == C ? void 0 : C.guild_id,
                location: "ChannelChat",
            }),
            G = k && null != E && null != C && null != C.guild_id;
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
                                (0, r.jsxs)(e7, {
                                    isSidebar: w,
                                    className: eQ.q2,
                                    "aria-label": eJ.intl.formatToPlainString(t, {
                                        channelName: n.name,
                                    }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        G &&
                                            (0, r.jsx)(eY.A, {
                                                recipientUser: E,
                                                voiceChannel: C,
                                            }),
                                        (0, r.jsx)(eH.A, {
                                            channel: n,
                                            guild: l,
                                            narrow: w,
                                        }),
                                        (0, r.jsxs)(h.Fmo, {
                                            component: (0, r.jsx)(h.AC4, {
                                                children: (0, r.jsx)(h.H, {
                                                    children: eJ.intl.format(eJ.t.eTzKkx, {
                                                        channelName: n.name,
                                                    }),
                                                }),
                                            }),
                                            children: [
                                                (0, r.jsx)(en.A, {
                                                    channel: n,
                                                    forceCozy: j,
                                                    filterAfterTimestamp: m,
                                                    showingQuarantineBanner: g,
                                                    typingGradient: S,
                                                }),
                                                j
                                                    ? null
                                                    : null !=
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: g,
                                                            guild: l,
                                                            communicationDisabledUntil: b,
                                                            showAutomodUserProfileChatBlocker: v,
                                                        }))
                                                      ? e
                                                      : (0, r.jsxs)("form", {
                                                            ref: this.inputFormRef,
                                                            onSubmit: e1,
                                                            className: s()(eQ.Zd, {
                                                                [eQ.Mf]: !I,
                                                            }),
                                                            children: [
                                                                O &&
                                                                    (0, r.jsx)(es.A, {
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
                                    channelId: ej.Ay.getCurrentSidebarChannelId(r.id),
                                });
                    }
            }),
            eZ(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, F.bf)(t, this.props.chatInputType, this.props.channel.id);
            }),
            eZ(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return v.R(
                    E.s4.TEXT,
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
                    showAutomodUserProfileChatBlocker: s,
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
                        : s
                          ? (0, r.jsx)(K.u, {
                                guild: l,
                            })
                          : null;
            });
    }
}
let e5 = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: l, filterAfterTimestamp: i } = e,
        { placeholder: s, accessibilityLabel: a } = (0, eV.A)({
            channel: t,
        }),
        o = (0, eo.L)(eP.default.getCurrentUser(), t),
        [c] = (0, z.c)(null == n ? void 0 : n.id),
        u = (0, H.uZ)(null == n ? void 0 : n.id),
        d = (0, p.bG)([eP.default], () => eP.default.getCurrentUser()),
        f = (0, p.bG)([eC.Ay], () => {
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
        g = (0, p.bG)([el.A], () => el.A.isEnabled()),
        m = (0, ea.A)(t.id),
        b = (0, q.A)(t.id),
        y = (0, eh.D)(t.id),
        _ = (0, p.bG)([eN.A], () => eN.A.getVoiceChannelId()),
        j = (0, p.bG)([ev.A], () => ev.A.getChannel(_)),
        v = (0, p.bG)([eP.default], () => (t.type !== eq.rbe.DM ? null : eP.default.getUser(t.getRecipientId()))),
        x = (0, p.bG)([eb.A], () => eb.A.getAlsoSendToChannel(t.id)),
        E = (0, p.bG)([ei.Ay, eO.default], () => ei.Ay.getUserCombo(eO.default.getId(), t.id)),
        C = (0, A.rj)(t),
        S = (0, A.aW)(t),
        I = C.length > 0 || t.rateLimitPerUser > 0 || null != E || null != S,
        { showLinkedLobbyApplicationLoadingIndicator: N } = (0, eB.A)(t.linkedLobby),
        T = (0, V.A)("ChannelChat");
    return (0, r.jsx)(e3, {
        channel: t,
        isEditing: null != (0, p.bG)([eE.A], () => eE.A.getEditingMessageId(t.id)),
        hasModalOpen: (0, h.red)(h.DXt),
        guild: n,
        keyboardModeEnabled: (0, p.bG)([O.A], () => O.A.keyboardModeEnabled),
        pendingReply: (0, p.bG)([eu.A], () => eu.A.getPendingReply(t.id)),
        threadsAlsoSendToChannel: x,
        chatInputType: l,
        placeholder: s,
        accessibilityLabel: a,
        filterAfterTimestamp: i,
        showQuarantinedUserBanner: o,
        communicationDisabledUntil: c,
        shakeIntensity: m,
        poggermodeEnabled: g,
        isSelectedResourceChannel: b,
        showAutomodUserProfileChatBlocker: u && !f,
        pendingScheduledMessage: y,
        recipientUser: v,
        voiceChannel: j,
        messagesTypingGradient: I,
        showLinkedLobbyApplicationLoadingIndicator: N,
        announcementComposerEnabled: T,
    });
});
