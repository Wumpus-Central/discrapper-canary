n.d(t, { Z: () => ec }), n(388685);
var i = n(54381),
    r = n(473749),
    s = n(120356),
    o = n.n(s),
    l = n(512722),
    a = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    h = n(430742),
    f = n(904245),
    p = n(13245),
    g = n(144144),
    m = n(738619),
    b = n(655687),
    y = n(823748),
    v = n(25007),
    O = n(199649),
    E = n(1397),
    x = n(541716),
    S = n(752305),
    Z = n(974251),
    j = n(893718),
    _ = n(249458),
    C = n(552062),
    I = n(957730),
    P = n(105457),
    w = n(400023),
    N = n(623292),
    T = n(807092),
    D = n(271172),
    k = n(592125),
    R = n(703558),
    A = n(731290),
    L = n(430824),
    M = n(375954),
    z = n(944486),
    V = n(914010),
    U = n(594174),
    W = n(556296),
    G = n(237997),
    B = n(585483),
    H = n(838440),
    F = n(13140),
    Y = n(519591),
    K = n(906037),
    X = n(786906),
    J = n(518084),
    q = n(987650),
    Q = n(981631),
    $ = n(959517),
    ee = n(388032),
    et = n(749570);
function en(e, t, n) {
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
function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                en(e, t, n[t]);
            });
    }
    return e;
}
function er(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function es(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++)
            (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let eo = q.wF.TOP;
class el extends r.Component {
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props),
            (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
                this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        R.Z.removeChangeListener(this.draftDidChange),
            B.S.unsubscribe(Q.CkL.TEXTAREA_FOCUS, this.focusInput),
            B.S.unsubscribe(Q.CkL.TEXTAREA_BLUR, this.blurInput);
    }
    render() {
        let e = this.props,
            { channel: t, placeholder: n } = e,
            r = es(e, ["channel", "placeholder"]),
            { focused: s, textValue: o, contentWarningProps: l, richValue: c } = this.state,
            u = (0, i.jsx)(d.yRy, {
                targetElementRef: this.textAreaRef,
                position: "top",
                onRequestClose: () => {
                    var e;
                    null == l || null == (e = l.onCancel) || e.call(l), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != l,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        a()(
                            null != l,
                            "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                        ),
                        (0, i.jsx)(P.Z, ei({ onClose: t }, l))
                    );
                },
                children: () =>
                    (0, i.jsx)(
                        j.ZP,
                        er(ei({}, r), {
                            ref: this.textAreaRef,
                            renderAttachButton: this.renderAttachButton,
                            channel: t,
                            type: x.Ie.OVERLAY,
                            onFocus: () => this.setState({ focused: !0 }),
                            onBlur: () => this.setState({ focused: !1 }),
                            placeholder: n,
                            textValue: o,
                            richValue: c,
                            onSubmit: this.handleSendMessage,
                            onChange: this.handleTextareaChange,
                            onKeyDown: this.handleTextareaKeyDown,
                            focused: s,
                        }),
                    ),
            });
        return t.isPrivate()
            ? (0, i.jsx)(
                  O.Z,
                  {
                      channel: t,
                      children: u,
                  },
                  t.id,
              )
            : (0, i.jsx)(
                  E.Z,
                  {
                      channel: t,
                      children: u,
                  },
                  t.id,
              );
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            en(this, "textAreaRef", r.createRef()),
            en(this, "draftDidChange", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = R.Z.getDraft(e.channel.id, R.d.ChannelMessage);
                n !== i && "" === i && t.setState((0, S.eK)(i));
            }),
            en(this, "handleTextareaKeyDown", (e) => {
                if (
                    e.which === Q.yXg.ARROW_UP &&
                    !e.shiftKey &&
                    !e.altKey &&
                    !e.ctrlKey &&
                    !e.metaKey &&
                    0 === this.state.textValue.length
                ) {
                    e.preventDefault();
                    let { channel: t } = this.props,
                        n = M.Z.getLastEditableMessage(t.id);
                    null != n && f.Z.startEditMessageRecord(t.id, n);
                }
            }),
            en(this, "handleTextareaChange", (e, t, n) => {
                let {
                    channel: { id: i },
                } = this.props;
                h.Z.changeDraft(i, this.state.textValue, R.d.ChannelMessage),
                    "" !== t ? g.Z.startTyping(i) : g.Z.stopTyping(i),
                    this.setState({
                        textValue: t,
                        richValue: n,
                    });
            }),
            en(this, "handleSendMessage", (e) => {
                let { value: t } = e,
                    { channel: n, pendingReply: i, isTemporarilyActive: r } = this.props;
                return 0 === t.length
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0,
                      })
                    : (0, H.v)({
                          openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                          type: x.Ie.OVERLAY,
                          content: t,
                          channel: n,
                      }).then((e) => {
                          let { valid: s, failureReason: o } = e;
                          if (!s)
                              return o === Q.zYc.SLOWMODE_COOLDOWN
                                  ? (B.S.dispatch(Q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0,
                                    })
                                  : {
                                        shouldClear: !1,
                                        shouldRefocus: !1,
                                    };
                          let l = f.Z.getSendMessageOptionsForReply(i);
                          return (f.Z.sendMessage(
                              n.id,
                              I.ZP.parse(n, t),
                              !0,
                              er(ei({}, l), { location: $.dy.OVERLAY }),
                          ),
                          this.setState((0, S.H2)()),
                          (0, N.A6)(n.id),
                          r)
                              ? (p.Z.deactivateAllRegions(),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1,
                                })
                              : {
                                    shouldClear: !0,
                                    shouldRefocus: !0,
                                };
                      });
            }),
            en(this, "focusInput", () => {
                this.setState({ focused: !0 });
            }),
            en(this, "blurInput", () => {
                this.setState({ focused: !1 });
            }),
            en(this, "renderAttachButton", (e, t) =>
                (0, i.jsx)(Z.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: R.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: (e) => this.handleTextareaChange(null, e, (0, S.JM)(e)),
                    canOnlyUseTextCommands: e,
                    chatInputType: x.Ie.OVERLAY,
                }),
            ),
            R.Z.addChangeListener(this.draftDidChange);
        let n = R.Z.getDraft(e.channel.id, R.d.ChannelMessage);
        (this.state = er(ei({}, (0, S.eK)(n)), {
            focused: !1,
            contentWarningProps: null,
        })),
            B.S.subscribe(Q.CkL.TEXTAREA_FOCUS, this.focusInput),
            B.S.subscribe(Q.CkL.TEXTAREA_BLUR, this.blurInput);
    }
}
class ea extends r.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        (0, K.CR)(e, this.props, this.shouldDisplay),
            null != t &&
                n &&
                !e.activated &&
                p.Z.track(Q.rMx.OVERLAY_UNLOCKED, {
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.guild_id,
                });
    }
    componentDidMount() {
        (0, K.m3)(this.props, this.shouldDisplay());
    }
    getOpacity() {
        let { locked: e, activated: t, opacity: n, isPreviewingInGame: i } = this.props;
        return (e && !t) || i ? n / 100 : t || !e ? Math.min(1, (n + 25) / 100) : J.wB;
    }
    renderContent() {
        let e,
            {
                channel: t,
                placeholder: n,
                nsfwAgree: s,
                guild: l,
                locked: a,
                activated: c,
                chatKeybind: d,
                pinned: u,
                isPreviewingInGame: h,
                dragging: f,
                pendingReply: p,
            } = this.props;
        if (null == t) return null;
        let g = a || h,
            b = !s && null != t && t.isNSFW(),
            y = !g || c;
        return (
            (e =
                b && null != l
                    ? (0, i.jsx)(D.Z, {
                          guild: l,
                          channelId: t.id,
                      })
                    : (0, i.jsx)(
                          w.Z,
                          {
                              channel: t,
                              className: et.messages,
                              forceCompact: u,
                              showNewMessagesBar: !g,
                              scrollerClassName: u ? et.scroller : void 0,
                              showingQuarantineBanner: !1,
                          },
                          t.id,
                      )),
            (0, i.jsx)(_.G.Provider, {
                value: {
                    disableInteractions: u && a && !c,
                    disableAnimations: u && g && !c,
                },
                children: (0, i.jsxs)(r.Fragment, {
                    children: [
                        !a &&
                            !h &&
                            (0, i.jsx)(v.Z, {
                                channel: t,
                                guild: l,
                            }),
                        (0, i.jsx)(J.ZP.Background, {
                            opacityOverride: a || h ? null : eo,
                            children: (0, i.jsx)("div", {
                                className: o()(et.messagesContainer, {
                                    [et.isDragging]: f,
                                    [et.disableHoverStates]: u && a && !c,
                                }),
                                children: e,
                            }),
                        }),
                        b
                            ? null
                            : (0, i.jsx)("div", {
                                  children: y
                                      ? (0, i.jsx)(J.ZP.Background, {
                                            opacityOverride: a || h ? null : eo,
                                            children: (0, i.jsxs)("div", {
                                                className: et.footerContent,
                                                children: [
                                                    (0, i.jsx)(el, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: c,
                                                        pendingReply: p,
                                                    }),
                                                    (0, i.jsx)("div", {
                                                        className: et.typingWrapper,
                                                        children: (0, i.jsx)(m.ZP, {
                                                            channel: t,
                                                            className: et.typing,
                                                            isInTextChannel: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, i.jsx)("div", {
                                            className: et.activateContainer,
                                            children: (0, i.jsx)(J.ZP.Background, {
                                                opacityOverride: q.wF.LOWER,
                                                children: (0, i.jsx)("div", {
                                                    className: o()(
                                                        et.activateKeybind,
                                                        et.__invalid_mediumBackgroundOpacity,
                                                    ),
                                                    children:
                                                        null != t.name && t.name.length > 0
                                                            ? ee.intl.formatToPlainString(ee.t["9TkYMO"], {
                                                                  keybind: d,
                                                                  channelName: t.isMultiUserDM()
                                                                      ? t.name
                                                                      : "#".concat(t.name),
                                                              })
                                                            : ee.intl.formatToPlainString(ee.t["hxz/4E"], {
                                                                  keybind: d,
                                                              }),
                                                }),
                                            }),
                                        }),
                              }),
                    ],
                }),
            })
        );
    }
    renderWidgetWrapper(e) {
        let { locked: t, pinned: n, activated: r, isPreviewingInGame: s, opacity: l, className: a } = this.props,
            c = Q.t_t.UNPINNED;
        r ? (c = Q.t_t.IN_GAME_ACTIVE) : (n && t) || s ? (c = Q.t_t.IN_GAME_TEXT) : n && (c = Q.t_t.PINNED);
        let d = (t && !r) || s,
            u = n && (d || r),
            h = n && r,
            f = n && d && !r,
            p = (0, Y.Z)(l);
        return (0, i.jsx)(J.ZP, {
            className: o()(
                p,
                {
                    [et.widgetWrapper]: !n,
                    [et.widgetWrapperPinned]: n,
                    [et.locked]: f,
                    [et.inGame]: u,
                    [et.inGameActive]: h,
                    [et.pinned]: n,
                    "overlay-unlocked": !t,
                },
                a,
            ),
            type: c,
            opacity: l,
            children: e,
        });
    }
    renderContainedWrapper(e) {
        return (0, i.jsx)("div", {
            className: et.contained,
            children: e,
        });
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return null != e.channel;
    }
    render() {
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: s, contained: o } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let l = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(X.Z, {
                    draggableClassName: et.draggableStartArea,
                    className: et.headerDefault,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: o,
                    isPreviewingInGame: s,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart,
                }),
                this.renderContent(),
                e || s
                    ? null
                    : (0, i.jsx)("div", {
                          className: et.resizeIcon,
                          onMouseDown: this.resizeDragStart,
                      }),
            ],
        });
        return o ? this.renderContainedWrapper(l) : this.renderWidgetWrapper(l);
    }
    constructor(...e) {
        super(...e),
            en(this, "handlePin", () => {
                var e, t, n;
                let i = !this.props.pinned;
                p.Z.track(Q.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null == (e = this.props.channel) ? void 0 : e.guild_id,
                    channel_id: null == (t = this.props.channel) ? void 0 : t.id,
                    channel_type: null == (n = this.props.channel) ? void 0 : n.type,
                    widget_type: Q.Odu.TEXT,
                }),
                    p.Z.setPinChat(i);
            }),
            en(this, "handleContextMenu", (e) => {
                let { channel: t, user: r } = this.props;
                null != t &&
                    null != r &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("79695"),
                            n.e("4040"),
                            n.e("56826"),
                            n.e("93896"),
                        ]).then(n.bind(n, 131404));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                er(ei({}, n), {
                                    user: r,
                                    channelSelected: !0,
                                    channel: t,
                                }),
                            );
                    });
            }),
            en(this, "moveDragStart", (e) => {
                let { dragStart: t } = this.props;
                t(C.B.MOVE, e.clientX, e.clientY);
            }),
            en(this, "resizeDragStart", (e) => {
                let { dragStart: t } = this.props;
                t(C.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
    }
}
function ec(e) {
    var { contained: t = !1 } = e,
        n = es(e, ["contained"]);
    let r = (0, c.e7)([V.Z], () => V.Z.getGuildId()),
        s = (0, c.e7)([z.Z], () => z.Z.getChannelId(r)),
        o = (0, c.e7)([k.Z], () => k.Z.getChannel(s)),
        l = (0, c.e7)([W.ZP], () => W.ZP.getOverlayChatKeybind()),
        a = null != l ? (0, F.BB)(l.shortcut, !0) : "]",
        [d, u, h] = (0, c.Wu)([G.default], () => [
            G.default.getTextWidgetOpacity(),
            G.default.getActiveRegions(),
            !t && G.default.isPreviewingInGame(),
        ]),
        f = (0, c.e7)([L.Z], () => L.Z.getGuild(r)),
        p = (0, c.e7)([A.Z], () => null != r && A.Z.didAgree(r)),
        g = null != o && o.isPrivate() ? o.getRecipientId() : null,
        m = (0, c.e7)([T.Z], () => (null != s ? T.Z.getPendingReply(s) : void 0)),
        v = (0, c.e7)([U.default], () => (null != g ? U.default.getUser(g) : null)),
        { placeholder: O } = (0, b.Z)({ channel: o });
    return null != o && null != f && Q.TPd.GUILD_THREADS_ONLY.has(o.type)
        ? (0, i.jsx)(y.Z, {})
        : (0, i.jsx)(
              ea,
              ei(
                  {
                      guild: f,
                      channel: o,
                      user: v,
                      opacity: d,
                      nsfwAgree: p,
                      chatKeybind: a,
                      activated: u.has(Q.O0n.TEXT_WIDGET),
                      isPreviewingInGame: h,
                      pendingReply: m,
                      contained: t,
                      placeholder: O,
                      widget: Q.Odu.TEXT,
                  },
                  n,
              ),
          );
}
