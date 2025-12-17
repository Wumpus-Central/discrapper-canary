n.d(t, { Z: () => ec }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    f = n(430742),
    h = n(904245),
    p = n(13245),
    g = n(144144),
    b = n(738619),
    m = n(655687),
    y = n(823748),
    v = n(25007),
    O = n(199649),
    E = n(1397),
    x = n(541716),
    S = n(752305),
    _ = n(974251),
    Z = n(893718),
    j = n(249458),
    C = n(552062),
    I = n(957730),
    P = n(105457),
    w = n(400023),
    T = n(623292),
    N = n(807092),
    D = n(271172),
    k = n(592125),
    R = n(703558),
    A = n(731290),
    L = n(430824),
    M = n(375954),
    z = n(944486),
    V = n(914010),
    W = n(594174),
    U = n(556296),
    G = n(237997),
    B = n(585483),
    F = n(838440),
    H = n(13140),
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
function ea(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                a = Object.keys(e);
            for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let es = q.wF.TOP;
class eo extends r.Component {
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
            r = ea(e, ["channel", "placeholder"]),
            { focused: a, textValue: s, contentWarningProps: o, richValue: c } = this.state,
            u = (0, i.jsx)(d.yRy, {
                targetElementRef: this.textAreaRef,
                position: "top",
                onRequestClose: () => {
                    var e;
                    null == o || null == (e = o.onCancel) || e.call(o), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != o,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        l()(
                            null != o,
                            "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                        ),
                        (0, i.jsx)(P.Z, ei({ onClose: t }, o))
                    );
                },
                children: () =>
                    (0, i.jsx)(
                        Z.ZP,
                        er(ei({}, r), {
                            ref: this.textAreaRef,
                            renderAttachButton: this.renderAttachButton,
                            channel: t,
                            type: x.Ie.OVERLAY,
                            onFocus: () => this.setState({ focused: !0 }),
                            onBlur: () => this.setState({ focused: !1 }),
                            placeholder: n,
                            textValue: s,
                            richValue: c,
                            onSubmit: this.handleSendMessage,
                            onChange: this.handleTextareaChange,
                            onKeyDown: this.handleTextareaKeyDown,
                            focused: a,
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
                    null != n && h.Z.startEditMessageRecord(t.id, n);
                }
            }),
            en(this, "handleTextareaChange", (e, t, n) => {
                let {
                    channel: { id: i },
                } = this.props;
                f.Z.changeDraft(i, this.state.textValue, R.d.ChannelMessage),
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
                    : (0, F.v)({
                          openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                          type: x.Ie.OVERLAY,
                          content: t,
                          channel: n,
                      }).then((e) => {
                          let { valid: a, failureReason: s } = e;
                          if (!a)
                              return s === Q.zYc.SLOWMODE_COOLDOWN
                                  ? (B.S.dispatch(Q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0,
                                    })
                                  : {
                                        shouldClear: !1,
                                        shouldRefocus: !1,
                                    };
                          let o = h.Z.getSendMessageOptionsForReply(i);
                          return (h.Z.sendMessage(
                              n.id,
                              I.ZP.parse(n, t),
                              !0,
                              er(ei({}, o), { location: $.dy.OVERLAY }),
                          ),
                          this.setState((0, S.H2)()),
                          (0, T.A6)(n.id),
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
                (0, i.jsx)(_.Z, {
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
class el extends r.PureComponent {
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
                nsfwAgree: a,
                guild: o,
                locked: l,
                activated: c,
                chatKeybind: d,
                pinned: u,
                isPreviewingInGame: f,
                dragging: h,
                pendingReply: p,
            } = this.props;
        if (null == t) return null;
        let g = l || f,
            m = !a && null != t && t.isNSFW(),
            y = !g || c;
        return (
            (e =
                m && null != o
                    ? (0, i.jsx)(D.Z, {
                          guild: o,
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
            (0, i.jsx)(j.G.Provider, {
                value: {
                    disableInteractions: u && l && !c,
                    disableAnimations: u && g && !c,
                },
                children: (0, i.jsxs)(r.Fragment, {
                    children: [
                        !l &&
                            !f &&
                            (0, i.jsx)(v.Z, {
                                channel: t,
                                guild: o,
                            }),
                        (0, i.jsx)(J.ZP.Background, {
                            opacityOverride: l || f ? null : es,
                            children: (0, i.jsx)("div", {
                                className: s()(et.messagesContainer, {
                                    [et.isDragging]: h,
                                    [et.disableHoverStates]: u && l && !c,
                                }),
                                children: e,
                            }),
                        }),
                        m
                            ? null
                            : (0, i.jsx)("div", {
                                  children: y
                                      ? (0, i.jsx)(J.ZP.Background, {
                                            opacityOverride: l || f ? null : es,
                                            children: (0, i.jsxs)("div", {
                                                className: et.footerContent,
                                                children: [
                                                    (0, i.jsx)(eo, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: c,
                                                        pendingReply: p,
                                                    }),
                                                    (0, i.jsx)("div", {
                                                        className: et.typingWrapper,
                                                        children: (0, i.jsx)(b.ZP, {
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
                                                    className: s()(
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
        let { locked: t, pinned: n, activated: r, isPreviewingInGame: a, opacity: o, className: l } = this.props,
            c = Q.t_t.UNPINNED;
        r ? (c = Q.t_t.IN_GAME_ACTIVE) : (n && t) || a ? (c = Q.t_t.IN_GAME_TEXT) : n && (c = Q.t_t.PINNED);
        let d = (t && !r) || a,
            u = n && (d || r),
            f = n && r,
            h = n && d && !r,
            p = (0, Y.Z)(o);
        return (0, i.jsx)(J.ZP, {
            className: s()(
                p,
                {
                    [et.widgetWrapper]: !n,
                    [et.widgetWrapperPinned]: n,
                    [et.locked]: h,
                    [et.inGame]: u,
                    [et.inGameActive]: f,
                    [et.pinned]: n,
                    "overlay-unlocked": !t,
                },
                l,
            ),
            type: c,
            opacity: o,
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
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: a, contained: s } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let o = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(X.Z, {
                    draggableClassName: et.draggableStartArea,
                    className: et.headerDefault,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: s,
                    isPreviewingInGame: a,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart,
                }),
                this.renderContent(),
                e || a
                    ? null
                    : (0, i.jsx)("div", {
                          className: et.resizeIcon,
                          onMouseDown: this.resizeDragStart,
                      }),
            ],
        });
        return s ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o);
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
                            n.e("66165"),
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
        n = ea(e, ["contained"]);
    let r = (0, c.e7)([V.Z], () => V.Z.getGuildId()),
        a = (0, c.e7)([z.Z], () => z.Z.getChannelId(r)),
        s = (0, c.e7)([k.Z], () => k.Z.getChannel(a)),
        o = (0, c.e7)([U.ZP], () => U.ZP.getOverlayChatKeybind()),
        l = null != o ? (0, H.BB)(o.shortcut, !0) : "]",
        [d, u, f] = (0, c.Wu)([G.default], () => [
            G.default.getTextWidgetOpacity(),
            G.default.getActiveRegions(),
            !t && G.default.isPreviewingInGame(),
        ]),
        h = (0, c.e7)([L.Z], () => L.Z.getGuild(r)),
        p = (0, c.e7)([A.Z], () => null != r && A.Z.didAgree(r)),
        g = null != s && s.isPrivate() ? s.getRecipientId() : null,
        b = (0, c.e7)([N.Z], () => (null != a ? N.Z.getPendingReply(a) : void 0)),
        v = (0, c.e7)([W.default], () => (null != g ? W.default.getUser(g) : null)),
        { placeholder: O } = (0, m.Z)({ channel: s });
    return null != s && null != h && Q.TPd.GUILD_THREADS_ONLY.has(s.type)
        ? (0, i.jsx)(y.Z, {})
        : (0, i.jsx)(
              el,
              ei(
                  {
                      guild: h,
                      channel: s,
                      user: v,
                      opacity: d,
                      nsfwAgree: p,
                      chatKeybind: l,
                      activated: u.has(Q.O0n.TEXT_WIDGET),
                      isPreviewingInGame: f,
                      pendingReply: b,
                      contained: t,
                      placeholder: O,
                      widget: Q.Odu.TEXT,
                  },
                  n,
              ),
          );
}
