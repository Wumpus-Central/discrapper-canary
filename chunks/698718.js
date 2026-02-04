n.d(t, {
    A: () => e3,
}),
    n(896048),
    n(747238),
    n(733351),
    n(938796);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(607399),
    u = n(478437),
    d = n(665260),
    h = n(311907),
    p = n(397927),
    f = n(465532),
    m = n(843472),
    g = n(414798),
    A = n(608299),
    b = n(147192),
    _ = n(820284),
    y = n(955572),
    v = n(775602),
    E = n(58149),
    O = n(211401),
    C = n(989837),
    S = n(500049),
    x = n(721768),
    j = n(258363),
    I = n(842209),
    T = n(861382),
    N = n(392054),
    P = n(168186),
    w = n(545152),
    R = n(972995),
    D = n(355622),
    M = n(408018),
    k = n(223938),
    L = n(811501),
    U = n(20737),
    G = n(133343),
    F = n(35277),
    H = n(595914),
    B = n(151271),
    V = n(81400),
    K = n(870006),
    W = n(316031),
    z = n(870136),
    Y = n(834651),
    q = n(265869),
    J = n(129185),
    Z = n(513609),
    X = n(301169),
    Q = n(751258),
    $ = n(451909),
    ee = n(195880),
    et = n(926262),
    en = n(371648),
    el = n(928830),
    er = n(3137),
    ei = n(559908),
    ea = n(329449),
    es = n(582223),
    eo = n(720480),
    ec = n(118517),
    eu = n(853145),
    ed = n(157432),
    eh = n(151282),
    ep = n(654783),
    ef = n(970244),
    em = n(631576),
    eg = n(252263),
    eA = n(67259),
    eb = n(351488),
    e_ = n(728321),
    ey = n(961350),
    ev = n(761640),
    eE = n(31717),
    eO = n(580745),
    eC = n(696451),
    eS = n(320501),
    ex = n(576705),
    ej = n(309010),
    eI = n(522602),
    eT = n(287809),
    eN = n(954571),
    eP = n(147036),
    ew = n(234320),
    eR = n(203982),
    eD = n(661191),
    eM = n(460350),
    ek = n(518960),
    eL = n(382287),
    eU = n(137577),
    eG = n(480870),
    eF = n(390756),
    eH = n(387462),
    eB = n(582968),
    eV = n(667285),
    eK = n(920437),
    eW = n(652215),
    ez = n(381941),
    eY = n(985018),
    eq = n(638990);

function eJ(e, t, n) {
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

function eZ(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                eJ(e, t, n[t]);
            });
    }
    return e;
}

function eX(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
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
    let { isSidebar: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.getOwnPropertyNames(e);
                    for (l = 0; l < i.length; l++)
                        (n = i[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i;
        })(e, ["isSidebar"]);
    return t
        ? (0, l.jsx)(
              "section",
              eX(eZ({}, n), {
                  role: "complementary",
              }),
          )
        : (0, l.jsx)("main", eZ({}, n));
}
let e1 = r.forwardRef((e, t) =>
    (0, l.jsx)(
        e2,
        eX(eZ({}, e), {
            ref: t,
        }),
    ),
);
e1.displayName = "ChannelTextAreaForm";
class e2 extends r.PureComponent {
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
            { textValue: l } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eE.A.getDraft(n.id, eE.C.ChannelMessage);
            e !== l && this.setState((0, M.ur)(e));
        }
        t.textValue.length < eW.uvi && l.length >= eW.uvi && eN.default.track(eW.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        m.A.startEditMessageRecord(t.id, e), E.Ay.trackWithMetadata(eW.HAw.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: l } = (0, P.Ez)(e.interactionData),
            { command: r, application: i } = I.EW(
                {
                    channel: t,
                    type: "channel",
                },
                n,
            );
        if (null != r) {
            var a, s;
            let e =
                null != i
                    ? {
                          type: N.Hf.APPLICATION,
                          id: i.id,
                          icon: i.icon,
                          name: null != (a = null == i || null == (s = i.bot) ? void 0 : s.username) ? a : i.name,
                          application: i,
                      }
                    : null;
            x.Gf({
                channelId: t.id,
                command: r,
                section: e,
                location: N.Oh.RECALL,
                initialValues: (0, j.DB)(r, null != l ? l : []),
                commandOrigin: N.iw.CHAT,
            });
        }
    }
    render() {
        let {
                channel: e,
                focused: t,
                onBlur: n,
                onFocus: r,
                onResize: i,
                highlighted: a,
                pendingReply: s,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: d,
                shakeIntensity: h,
                poggermodeEnabled: f,
                pendingScheduledMessage: m,
                announcementComposerEnabled: g,
            } = this.props,
            { contentWarningProps: A } = this.state,
            b =
                e.type === eW.rbe.GUILD_ANNOUNCEMENT && g
                    ? (0, l.jsx)(k.A, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eq.gM,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: s,
                          type: D.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: i,
                          onFocus: r,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: ek.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, l.jsx)(G.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: eq.gM,
                          channel: e,
                          placeholder: u,
                          accessibilityLabel: d,
                          pendingReply: s,
                          type: c,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: i,
                          onFocus: r,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: ek.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: m,
                      });
        return (0, l.jsx)(p.YNO, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                var e;
                null == A || null == (e = A.onCancel) || e.call(A),
                    this.setState({
                        contentWarningProps: null,
                    });
            },
            shouldShow: null != A,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != A, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, l.jsx)(
                        et.A,
                        eZ(
                            {
                                onClose: t,
                            },
                            A,
                        ),
                    )
                );
            },
            children: () =>
                f
                    ? (0, l.jsx)(p.bfh, {
                          isShaking: h > 0,
                          intensity: h,
                          className: eq.Xn,
                          children: b,
                      })
                    : b,
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eJ(this, "isFirstChange", !0),
            eJ(this, "editorRef", null),
            eJ(
                this,
                "state",
                eX(eZ({}, (0, M.ur)(eE.A.getDraft(this.props.channel.id, eE.C.ChannelMessage))), {
                    contentWarningProps: null,
                }),
            ),
            eJ(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    l = eE.A.getDraft(e.channel.id, eE.C.ChannelMessage);
                n !== l &&
                    ("" === l || "" === n) &&
                    t.setState((0, M.ur)(l), () => {
                        if (n !== l) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eJ(this, "handleKeyDown", (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: l } = this.props,
                    r = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    i = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eW.Ks6.DELETE:
                    case eW.Ks6.BACKSPACE:
                        return void this.handleIncrementCombo("", 1);
                    case eW.Ks6.ARROW_UP:
                        if (r || i) return;
                        if ((e.preventDefault(), t))
                            eI.A.getUploadCount(l.id, eE.C.ChannelMessage) > 0
                                ? eR._.dispatchToLastSubscribed(eW.jej.FOCUS_ATTACHMENT_AREA)
                                : eR._.dispatchToLastSubscribed(eW.jej.FOCUS_MESSAGES, {
                                      atEnd: !0,
                                  });
                        else {
                            let { channel: e } = this.props,
                                t = eS.A.getLastChatCommandMessage(e.id),
                                n = eS.A.getLastEditableMessage(e.id);
                            null != t && null != n
                                ? eD.default.compare(n.id, t.id) > 0
                                    ? this.handleEditLastMessage(n)
                                    : this.handleRecallLastCommand(t)
                                : null != t
                                  ? this.handleRecallLastCommand(t)
                                  : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eW.Ks6.ESCAPE:
                        if (r || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) return void (0, y.Bm)();
                        if (eI.A.getUploadCount(l.id, eE.C.ChannelMessage) > 0)
                            return void A.A.clearAll(l.id, eE.C.ChannelMessage);
                }
                null == n || n(e, i);
            }),
            eJ(this, "handleIncrementCombo", (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let l = this.props.channel.id,
                    r = ey.default.getId(),
                    i = ei.Ay.getUserCombo(r, l),
                    a = (null != (n = null == i ? void 0 : i.value) ? n : 0) + 1;
                (0, el.oG)({
                    channelId: l,
                    userId: r,
                    value: null != e ? e.length : a,
                    multiplier: t,
                });
            }),
            eJ(this, "handleTextareaChange", (e, t, n) => {
                let {
                    keyboardModeEnabled: l,
                    channel: { id: r },
                } = this.props;
                f.A.changeDraft(r, t, eE.C.ChannelMessage);
                let i = "" !== t && n !== this.state.richValue,
                    a = i && !e$.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? g.A.startTyping(r) : "" === t && g.A.stopTyping(r),
                    i && l && (0, y.Bm)(),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            eJ(this, "handleSendMessage", async (e) => {
                let {
                    value: t,
                    uploads: n,
                    stickers: l,
                    command: r,
                    commandOptionValues: i,
                    isGif: a,
                    gifMetadata: s,
                    components: o,
                    announcementSendOptions: c,
                } = e;
                if (0 === (t = t.trim()).length && (null == l || 0 === l.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0,
                    });
                let {
                        guild: u,
                        channel: h,
                        pendingReply: p,
                        chatInputType: g,
                        threadsAlsoSendToChannel: b,
                    } = this.props,
                    _ = !1;
                if (null != r) {
                    if (r.inputType === N.y$.BUILT_IN_INTEGRATION)
                        return (
                            eR._.dispatch(eW.jej.SHAKE_APP, {
                                duration: 200,
                                intensity: 2,
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            })
                        );
                    let e = T.A.getCommandOrigin(h.id);
                    if (null == e || e === N.iw.CHAT) {
                        let { isAuthorized: e } = await (0, R.q)({
                            applicationId: r.applicationId,
                            channel: h,
                            commandIntegrationTypes: r.integration_types,
                        });
                        if (!e)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            });
                    } else if (
                        e === N.iw.APPLICATION_LAUNCHER ||
                        e === N.iw.IMAGE_RECS_MENU ||
                        e === N.iw.IMAGE_RECS_SUBMENU
                    ) {
                        var y;
                        let { location: t, sectionName: n } = null != (y = (0, eF.bV)(r)) ? y : {},
                            l = e === N.iw.APPLICATION_LAUNCHER ? C.A.lastShownEntrypoint() : S.s4.TEXT,
                            { isAuthorized: i } = await (0, R.q)({
                                applicationId: r.applicationId,
                                channel: h,
                                commandIntegrationTypes: r.integration_types,
                                appLauncherContext: {
                                    location: t,
                                    sectionName: n,
                                    entrypoint: l,
                                },
                            });
                        if (!i)
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            });
                        (0, eF.My)(r);
                    }
                    let n = await (0, w.A)({
                        command: r,
                        optionValues: null != i ? i : {},
                        context: {
                            guild: u,
                            channel: h,
                        },
                    });
                    if (r.inputType !== N.y$.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0,
                        });
                    null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (_ = !0 === n.tts));
                }
                return (0, eM.i)({
                    openWarningPopout: (e) =>
                        this.setState({
                            contentWarningProps: e,
                        }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: l,
                    uploads: n,
                    channel: h,
                }).then(async (e) => {
                    var i, y, v;
                    let { valid: E, failureReason: O } = e;
                    if (!E)
                        if (O === eW.X8x.SLOWMODE_COOLDOWN)
                            return (
                                eR._.dispatch(eW.jej.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2,
                                }),
                                eR._.dispatch(eW.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let C = (0, Q.S)(t, {
                        channel: h,
                        isEdit: !1,
                    });
                    null != C && (null != C.content && (t = C.content), null != C.tts && (_ = C.tts));
                    let S = $.Ay.parse(h, t);
                    (S.tts = S.tts || _), null != o && ((S.content = ""), (S.components = o));
                    let x = eX(
                        eZ(
                            {},
                            m.A.getSendMessageOptions({
                                content: t,
                                channelId: h.id,
                                uploads: n,
                                stickers: l,
                                command: r,
                                isGif: a,
                                pendingReply: p,
                                alsoForwardToChannelId: b && null != (i = h.parent_id) ? i : void 0,
                                scheduledTimestamp:
                                    null == (y = this.props.pendingScheduledMessage) ? void 0 : y.scheduledTimestamp,
                            }),
                        ),
                        {
                            location: ez.Hx.CHAT_INPUT,
                        },
                    );
                    if (
                        (null != c && (x.announcementSendOptions = c),
                        null != s && (x.gifMetadata = s),
                        null != o && (x.flags = (0, d.UI)(null != (v = x.flags) ? v : 0, eW.pr7.IS_COMPONENTS_V2)),
                        a)
                    )
                        return (
                            m.A.sendMessage(h.id, S, void 0, x).then(() => {
                                if (b) {
                                    var e;
                                    eb._(null != (e = h.parent_id) ? e : void 0);
                                }
                            }),
                            (0, ec.Jx)(h.id),
                            eg.B({
                                channelId: h.id,
                                enabled: !1,
                            }),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eL.LJ)(n);
                        if ((0, eL.fJ)(e, null == u ? void 0 : u.id))
                            return (
                                (0, ek.V)(h, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                }
                            );
                        (x.eagerDispatch = !1),
                            (x.attachmentsToUpload = n),
                            (x.onAttachmentUploadError = (e, l, r) => {
                                (0, X.k)({
                                    file: e,
                                    guildId: h.getGuildId(),
                                    analyticsLocations: [],
                                    code: l,
                                    reason: r,
                                }) &&
                                    ("" !== t &&
                                        "" === eE.A.getDraft(h.id, eE.C.ChannelMessage) &&
                                        f.A.saveDraft(h.id, t, eE.C.ChannelMessage),
                                    0 === eI.A.getUploadCount(h.id, eE.C.ChannelMessage) &&
                                        A.A.setUploads({
                                            channelId: h.id,
                                            uploads: n,
                                            draftType: eE.C.ChannelMessage,
                                        }));
                            }),
                            A.A.clearAll(h.id, eE.C.ChannelMessage);
                    }
                    if (null != x.scheduledTimestamp)
                        try {
                            await (0, eh.pr)({
                                channelId: h.id,
                                scheduledTimestamp: x.scheduledTimestamp,
                                messageSendData: {
                                    channelId: h.id,
                                    content: t,
                                    nonce: (0, ee.m)(),
                                    tts: _,
                                    message_reference: x.messageReference,
                                    allowed_mentions: x.allowedMentions,
                                    flags: x.flags,
                                },
                                attachmentsToUpload: n,
                            }),
                                (0, ef.c_)(x.scheduledTimestamp);
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
                        m.A.sendMessage(h.id, S, void 0, x).then(() => {
                            if (b) {
                                var e;
                                eb._(null != (e = h.parent_id) ? e : void 0);
                            }
                        });
                    return (
                        this.setState((0, M.N3)()),
                        (0, ec.Jx)(h.id),
                        (0, em.x5)(h.id, g.drafts.type),
                        eg.B({
                            channelId: h.id,
                            enabled: !1,
                        }),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0,
                        }
                    );
                });
            }),
            eJ(this, "handleSetValue", (e) => {
                var t, n;
                let l = null == (t = this.editorRef) ? void 0 : t.getSlateEditor();
                null != l && (F.b.select(l, []), l.insertText(e), null == (n = this.editorRef) || n.focus());
            }),
            eJ(this, "renderAttachButton", (e, t) =>
                (0, l.jsx)(U.A, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eE.C.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e,
                }),
            ),
            eJ(this, "renderApplicationCommandIcon", (e, t, n) =>
                (0, l.jsx)(L.A, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel,
                }),
            );
    }
}
class e7 extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: l } = t;
        return n.id !== l
            ? {
                  textAreaFocused:
                      null != n && n.type !== eW.rbe.GUILD_ANNOUNCEMENT && !c.Fr && ex.A.can(eW.xBc.SEND_MESSAGES, n),
                  currentChannelId: n.id,
              }
            : null;
    }
    componentDidMount() {
        eR._.subscribe(eW.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eR._.unsubscribe(eW.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t,
            {
                channel: n,
                guild: r,
                keyboardModeEnabled: i,
                hasModalOpen: s,
                pendingReply: o,
                threadsAlsoSendToChannel: c,
                chatInputType: d,
                placeholder: h,
                accessibilityLabel: f,
                showQuarantinedUserBanner: m,
                filterAfterTimestamp: g,
                communicationDisabledUntil: A,
                shakeIntensity: y,
                poggermodeEnabled: v,
                isSelectedResourceChannel: E,
                showAutomodUserProfileChatBlocker: O,
                pendingScheduledMessage: C,
                messagesTypingGradient: S,
                showLinkedLobbyApplicationLoadingIndicator: x,
                announcementComposerEnabled: j,
            } = this.props,
            { textAreaFocused: I, textAreaHighlighted: T } = this.state,
            N = d === D.oU.SIDEBAR;
        t =
            N && n.type === eW.rbe.GUILD_VOICE
                ? eY.t.pnnyFZ
                : N && n.type === eW.rbe.GUILD_STAGE_VOICE
                  ? eY.t.YInSkq
                  : u.k.THREADS.has(n.type)
                    ? eY.t["OkzL+Q"]
                    : eY.t.UbNmGc;
        let P = (0, l.jsx)("div", {
                className: eq.li,
                children: (0, l.jsx)(eB.A, {}),
            }),
            w = (0, l.jsx)("div", {
                className: eq.li,
                children: (0, l.jsx)(e_.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, l.jsx)(e1, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: I,
                        highlighted: T,
                        channel: n,
                        guild: r,
                        keyboardModeEnabled: i,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: s,
                        pendingReply: o,
                        threadsAlsoSendToChannel: c,
                        chatInputType: d,
                        placeholder: h,
                        accessibilityLabel: f,
                        shakeIntensity: y,
                        poggermodeEnabled: v,
                        pendingScheduledMessage: C,
                        announcementComposerEnabled: j,
                    }),
                }),
            }),
            R = x ? P : w;
        return (0, l.jsx)(
            _.A,
            {
                page: (0, eP.DJ)(this.props.channel),
                children: (0, l.jsx)(Z.di, {
                    children: (0, l.jsx)(J.Xq, {
                        children: (0, l.jsxs)(ew.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, l.jsx)(ew.EG, {
                                    event: eW.jej.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus,
                                }),
                                (0, l.jsx)(ew.EG, {
                                    event: eW.jej.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur,
                                }),
                                (0, l.jsx)(ew.EG, {
                                    event: eW.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, l.jsx)(ew.EG, {
                                    event: eW.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, l.jsxs)(e0, {
                                    isSidebar: N,
                                    className: eq.q2,
                                    "aria-label": eY.intl.formatToPlainString(t, {
                                        channelName: n.name,
                                    }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, l.jsx)(eH.A, {
                                            channel: n,
                                            guild: r,
                                            narrow: N,
                                        }),
                                        (0, l.jsxs)(p.Fmo, {
                                            component: (0, l.jsx)(p.AC4, {
                                                children: (0, l.jsx)(p.H, {
                                                    children: eY.intl.format(eY.t.eTzKkx, {
                                                        channelName: n.name,
                                                    }),
                                                }),
                                            }),
                                            children: [
                                                (0, l.jsx)(en.A, {
                                                    channel: n,
                                                    forceCozy: E,
                                                    filterAfterTimestamp: g,
                                                    showingQuarantineBanner: m,
                                                    typingGradient: S,
                                                }),
                                                E
                                                    ? null
                                                    : null !=
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: m,
                                                            guild: r,
                                                            communicationDisabledUntil: A,
                                                            showAutomodUserProfileChatBlocker: O,
                                                        }))
                                                      ? e
                                                      : (0, l.jsxs)("form", {
                                                            ref: this.inputFormRef,
                                                            onSubmit: eQ,
                                                            className: a()(eq.Zd, {
                                                                [eq.Mf]: !x,
                                                            }),
                                                            children: [
                                                                v &&
                                                                    (0, l.jsx)(ea.A, {
                                                                        channelId: n.id,
                                                                    }),
                                                                n.isPrivate()
                                                                    ? (0, l.jsx)(eV.A, {
                                                                          channel: n,
                                                                          children: R,
                                                                      })
                                                                    : (0, l.jsx)(eK.A, {
                                                                          channel: n,
                                                                          children: R,
                                                                      }),
                                                                (0, l.jsx)(b.Ay, {
                                                                    channel: n,
                                                                    isInTextChannel: !0,
                                                                }),
                                                            ],
                                                        }),
                                                (0, l.jsx)(Z.lr, {}),
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
            eJ(this, "containerDomRef", r.createRef()),
            eJ(this, "refToChannelTextAreaFormComponent", r.createRef()),
            eJ(this, "inputFormRef", r.createRef()),
            eJ(this, "state", {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id,
            }),
            eJ(this, "dispatchGroupRef", r.createRef()),
            eJ(this, "handleRequestFocus", (e) => {
                if (e.channelId === this.props.channel.id)
                    if (this.state.textAreaFocused) {
                        var t;
                        null == (t = this.refToChannelTextAreaFormComponent.current) || t.focusEditor();
                    } else
                        this.setState({
                            textAreaFocused: !0,
                        });
            }),
            eJ(this, "handleInputFocus", (e) => {
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
            eJ(this, "handleInputBlur", () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1,
                    });
            }),
            eJ(this, "handleInputKeyDown", (e, t) => {
                this.state.textAreaHighlighted &&
                    this.setState({
                        textAreaHighlighted: !1,
                    }),
                    t || this._handleMoveToPane(e);
            }),
            eJ(this, "handleKeyDown", (e) => {
                var t;
                (null != (t = this.inputFormRef.current) && t.contains(e.target)) || this._handleMoveToPane(e);
            }),
            eJ(this, "_handleMoveToPane", (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: l } = this.props;
                if (t)
                    switch (e.which) {
                        case eW.Ks6.ARROW_LEFT:
                            n === D.oU.SIDEBAR &&
                                eR._.dispatch(eW.jej.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: ej.A.getChannelId(),
                                });
                            return;
                        case eW.Ks6.ARROW_RIGHT:
                            n === D.oU.NORMAL &&
                                eR._.dispatch(eW.jej.FOCUS_CHANNEL_TEXT_AREA, {
                                    channelId: ev.Ay.getCurrentSidebarChannelId(l.id),
                                });
                    }
            }),
            eJ(this, "handleOpenExpressionPicker", (e) => {
                let { activeView: t } = e;
                (0, B.bf)(t, this.props.chatInputType, this.props.channel.id);
            }),
            eJ(this, "handleOpenAppLauncher", (e) => {
                let { applicationId: t } = e;
                return O.R(
                    S.s4.TEXT,
                    this.props.chatInputType,
                    {
                        applicationId: t,
                    },
                    this.props.channel.id,
                );
            }),
            eJ(this, "handleChatInteract", () => {
                var e;
                null == (e = this.dispatchGroupRef.current) || e.bumpDispatchPriority();
            }),
            eJ(this, "renderMessageBanner", (e) => {
                let {
                    channel: t,
                    showQuarantinedUserBanner: n,
                    guild: r,
                    communicationDisabledUntil: i,
                    showAutomodUserProfileChatBlocker: a,
                } = e;
                return t.type === eW.rbe.DM && n
                    ? (0, l.jsx)(eo.A, {})
                    : t.isModeratorReportChannel() && t.isArchivedThread()
                      ? (0, l.jsx)(ed.A, {
                            channelId: t.id,
                        })
                      : null != i && (0, W.n)(i) && null != r && !ex.A.can(eW.xBc.ADMINISTRATOR, r)
                        ? (0, l.jsx)(Y.j, {
                              guild: r,
                              disabledUntil: i,
                          })
                        : a
                          ? (0, l.jsx)(K.u, {
                                guild: r,
                            })
                          : null;
            });
    }
}
let e3 = r.memo(function (e) {
    let { channel: t, guild: n, chatInputType: r, filterAfterTimestamp: i } = e,
        { placeholder: a, accessibilityLabel: s } = (0, eG.A)({
            channel: t,
        }),
        o = (0, eo.L)(eT.default.getCurrentUser(), t),
        [c] = (0, z.c)(null == n ? void 0 : n.id),
        u = (0, V.uZ)(null == n ? void 0 : n.id),
        d = (0, h.bG)([eT.default], () => eT.default.getCurrentUser()),
        f = (0, h.bG)([eC.Ay], () => {
            var e, t, l;
            return (
                null != d &&
                null !=
                    (e =
                        null ==
                        (l = eC.Ay.getMember(
                            null != (t = null == n ? void 0 : n.id) ? t : eW.dJq,
                            null == d ? void 0 : d.id,
                        ))
                            ? void 0
                            : l.isPending) &&
                e
            );
        }),
        m = (0, h.bG)([er.A], () => er.A.isEnabled()),
        g = (0, es.A)(t.id),
        A = (0, q.A)(t.id),
        _ = (0, ep.D)(t.id),
        y = (0, h.bG)([eA.A], () => eA.A.getAlsoSendToChannel(t.id)),
        E = (0, h.bG)([ei.Ay, ey.default], () => ei.Ay.getUserCombo(ey.default.getId(), t.id)),
        O = (0, b.rj)(t),
        C = (0, b.aW)(t),
        S = O.length > 0 || t.rateLimitPerUser > 0 || null != E || null != C,
        { showLinkedLobbyApplicationLoadingIndicator: x } = (0, eU.A)(t.linkedLobby),
        j = (0, H.A)("ChannelChat");
    return (0, l.jsx)(e7, {
        channel: t,
        isEditing: null != (0, h.bG)([eO.A], () => eO.A.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.red)(p.DXt),
        guild: n,
        keyboardModeEnabled: (0, h.bG)([v.A], () => v.A.keyboardModeEnabled),
        pendingReply: (0, h.bG)([eu.A], () => eu.A.getPendingReply(t.id)),
        threadsAlsoSendToChannel: y,
        chatInputType: r,
        placeholder: a,
        accessibilityLabel: s,
        filterAfterTimestamp: i,
        showQuarantinedUserBanner: o,
        communicationDisabledUntil: c,
        shakeIntensity: g,
        poggermodeEnabled: m,
        isSelectedResourceChannel: A,
        showAutomodUserProfileChatBlocker: u && !f,
        pendingScheduledMessage: _,
        messagesTypingGradient: S,
        showLinkedLobbyApplicationLoadingIndicator: x,
        announcementComposerEnabled: j,
    });
});
