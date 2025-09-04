n.d(t, { Z: () => ec }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(512722),
    a = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    h = n(430742),
    p = n(904245),
    f = n(13245),
    g = n(144144),
    m = n(738619),
    y = n(744061),
    O = n(36311),
    v = n(655687),
    _ = n(823748),
    b = n(25007),
    E = n(199649),
    S = n(1397),
    x = n(541716),
    j = n(752305),
    Z = n(974251),
    C = n(893718),
    I = n(249458),
    P = n(552062),
    w = n(957730),
    N = n(400023),
    T = n(623292),
    D = n(807092),
    k = n(592125),
    R = n(703558),
    A = n(731290),
    M = n(430824),
    L = n(375954),
    z = n(944486),
    V = n(914010),
    W = n(594174),
    U = n(556296),
    G = n(237997),
    B = n(585483),
    H = n(838440),
    F = n(13140),
    Y = n(519591),
    K = n(906037),
    X = n(786906),
    J = n(518084),
    Q = n(987650),
    q = n(981631),
    $ = n(959517),
    ee = n(388032),
    et = n(442010);
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
function el(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++)
            (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let eo = Q.wF.TOP;
class es extends r.Component {
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props),
            (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
                this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        R.Z.removeChangeListener(this.draftDidChange),
            B.S.unsubscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput),
            B.S.unsubscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
    }
    render() {
        let e = this.props,
            { channel: t, placeholder: n } = e,
            r = el(e, ["channel", "placeholder"]),
            { focused: l, textValue: o, contentWarningProps: s, richValue: c } = this.state,
            u = (0, i.jsx)(d.yRy, {
                targetElementRef: this.textAreaRef,
                position: "top",
                onRequestClose: () => {
                    var e;
                    null == s || null == (e = s.onCancel) || e.call(s), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != s,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        a()(
                            null != s,
                            "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                        ),
                        (0, i.jsx)(y.Z, ei({ onClose: t }, s))
                    );
                },
                children: () =>
                    (0, i.jsx)(
                        C.ZP,
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
                            focused: l,
                        }),
                    ),
            });
        return t.isPrivate()
            ? (0, i.jsx)(
                  E.Z,
                  {
                      channel: t,
                      children: u,
                  },
                  t.id,
              )
            : (0, i.jsx)(
                  S.Z,
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
                n !== i && "" === i && t.setState((0, j.eK)(i));
            }),
            en(this, "handleTextareaKeyDown", (e) => {
                if (
                    e.which === q.yXg.ARROW_UP &&
                    !e.shiftKey &&
                    !e.altKey &&
                    !e.ctrlKey &&
                    !e.metaKey &&
                    0 === this.state.textValue.length
                ) {
                    e.preventDefault();
                    let { channel: t } = this.props,
                        n = L.Z.getLastEditableMessage(t.id);
                    null != n && p.Z.startEditMessageRecord(t.id, n);
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
                          let { valid: l, failureReason: o } = e;
                          if (!l)
                              return o === q.zYc.SLOWMODE_COOLDOWN
                                  ? (B.S.dispatch(q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0,
                                    })
                                  : {
                                        shouldClear: !1,
                                        shouldRefocus: !1,
                                    };
                          let s = p.Z.getSendMessageOptionsForReply(i);
                          return (p.Z.sendMessage(
                              n.id,
                              w.ZP.parse(n, t),
                              !0,
                              er(ei({}, s), { location: $.dy.OVERLAY }),
                          ),
                          this.setState((0, j.H2)()),
                          (0, T.A6)(n.id),
                          r)
                              ? (f.Z.deactivateAllRegions(),
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
                    setValue: (e) => this.handleTextareaChange(null, e, (0, j.JM)(e)),
                    canOnlyUseTextCommands: e,
                }),
            ),
            R.Z.addChangeListener(this.draftDidChange);
        let n = R.Z.getDraft(e.channel.id, R.d.ChannelMessage);
        (this.state = er(ei({}, (0, j.eK)(n)), {
            focused: !1,
            contentWarningProps: null,
        })),
            B.S.subscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput),
            B.S.subscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
    }
}
class ea extends r.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        (0, K.CR)(e, this.props, this.shouldDisplay),
            null != t &&
                n &&
                !e.activated &&
                f.Z.track(q.rMx.OVERLAY_UNLOCKED, {
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
                nsfwAgree: l,
                guild: s,
                locked: a,
                activated: c,
                chatKeybind: d,
                pinned: u,
                isPreviewingInGame: h,
                dragging: p,
                pendingReply: f,
            } = this.props;
        if (null == t) return null;
        let g = a || h,
            y = !l && null != t && t.isNSFW(),
            v = !g || c;
        return (
            (e =
                y && null != s
                    ? (0, i.jsx)(O.Z, {
                          guild: s,
                          channelId: t.id,
                      })
                    : (0, i.jsx)(
                          N.Z,
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
            (0, i.jsx)(I.G.Provider, {
                value: {
                    disableInteractions: u && a && !c,
                    disableAnimations: u && g && !c,
                },
                children: (0, i.jsxs)(r.Fragment, {
                    children: [
                        !a &&
                            !h &&
                            (0, i.jsx)(b.Z, {
                                channel: t,
                                guild: s,
                            }),
                        (0, i.jsx)(J.ZP.Background, {
                            opacityOverride: a || h ? null : eo,
                            children: (0, i.jsx)("div", {
                                className: o()(et.messagesContainer, {
                                    [et.isDragging]: p,
                                    [et.disableHoverStates]: u && a && !c,
                                }),
                                children: e,
                            }),
                        }),
                        y
                            ? null
                            : (0, i.jsx)("div", {
                                  children: v
                                      ? (0, i.jsx)(J.ZP.Background, {
                                            opacityOverride: a || h ? null : eo,
                                            children: (0, i.jsxs)("div", {
                                                className: et.footerContent,
                                                children: [
                                                    (0, i.jsx)(es, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: c,
                                                        pendingReply: f,
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
                                                opacityOverride: Q.wF.LOWER,
                                                children: (0, i.jsx)("div", {
                                                    className: o()(
                                                        et.activateKeybind,
                                                        et.__invalid_mediumBackgroundOpacity,
                                                    ),
                                                    children:
                                                        null != t.name && t.name.length > 0
                                                            ? ee.intl.formatToPlainString(ee.t["9TkYMD"], {
                                                                  keybind: d,
                                                                  channelName: t.isMultiUserDM()
                                                                      ? t.name
                                                                      : "#".concat(t.name),
                                                              })
                                                            : ee.intl.formatToPlainString(ee.t["hxz/4O"], {
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
        let { locked: t, pinned: n, activated: r, isPreviewingInGame: l, opacity: s, className: a } = this.props,
            c = q.t_t.UNPINNED;
        r ? (c = q.t_t.IN_GAME_ACTIVE) : (n && t) || l ? (c = q.t_t.IN_GAME_TEXT) : n && (c = q.t_t.PINNED);
        let d = (t && !r) || l,
            u = n && (d || r),
            h = n && r,
            p = n && d && !r,
            f = (0, Y.Z)(s);
        return (0, i.jsx)(J.ZP, {
            className: o()(
                f,
                {
                    [et.widgetWrapper]: !n,
                    [et.widgetWrapperPinned]: n,
                    [et.locked]: p,
                    [et.inGame]: u,
                    [et.inGameActive]: h,
                    [et.pinned]: n,
                    "overlay-unlocked": !t,
                },
                a,
            ),
            type: c,
            opacity: s,
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
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: l, contained: o } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let s = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(X.Z, {
                    draggableClassName: et.draggableStartArea,
                    className: et.headerDefault,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: o,
                    isPreviewingInGame: l,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart,
                }),
                this.renderContent(),
                e || l
                    ? null
                    : (0, i.jsx)("div", {
                          className: et.resizeIcon,
                          onMouseDown: this.resizeDragStart,
                      }),
            ],
        });
        return o ? this.renderContainedWrapper(s) : this.renderWidgetWrapper(s);
    }
    constructor(...e) {
        super(...e),
            en(this, "handlePin", () => {
                var e, t, n;
                let i = !this.props.pinned;
                f.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null == (e = this.props.channel) ? void 0 : e.guild_id,
                    channel_id: null == (t = this.props.channel) ? void 0 : t.id,
                    channel_type: null == (n = this.props.channel) ? void 0 : n.type,
                    widget_type: q.Odu.TEXT,
                }),
                    f.Z.setPinChat(i);
            }),
            en(this, "handleContextMenu", (e) => {
                let { channel: t, user: r } = this.props;
                null != t &&
                    null != r &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("79695"),
                            n.e("98783"),
                            n.e("56826"),
                            n.e("92799"),
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
                t(P.B.MOVE, e.clientX, e.clientY);
            }),
            en(this, "resizeDragStart", (e) => {
                let { dragStart: t } = this.props;
                t(P.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
    }
}
function ec(e) {
    var { contained: t = !1 } = e,
        n = el(e, ["contained"]);
    let r = (0, c.e7)([V.Z], () => V.Z.getGuildId()),
        l = (0, c.e7)([z.Z], () => z.Z.getChannelId(r)),
        o = (0, c.e7)([k.Z], () => k.Z.getChannel(l)),
        s = (0, c.e7)([U.ZP], () => U.ZP.getOverlayChatKeybind()),
        a = null != s ? (0, F.BB)(s.shortcut, !0) : "]",
        [d, u, h] = (0, c.Wu)([G.default], () => [
            G.default.getTextWidgetOpacity(),
            G.default.getActiveRegions(),
            !t && G.default.isPreviewingInGame(),
        ]),
        p = (0, c.e7)([M.Z], () => M.Z.getGuild(r)),
        f = (0, c.e7)([A.Z], () => null != r && A.Z.didAgree(r)),
        g = null != o && o.isPrivate() ? o.getRecipientId() : null,
        m = (0, c.e7)([D.Z], () => (null != l ? D.Z.getPendingReply(l) : void 0)),
        y = (0, c.e7)([W.default], () => (null != g ? W.default.getUser(g) : null)),
        { placeholder: O } = (0, v.Z)({ channel: o });
    return null != o && null != p && q.TPd.GUILD_THREADS_ONLY.has(o.type)
        ? (0, i.jsx)(_.Z, {})
        : (0, i.jsx)(
              ea,
              ei(
                  {
                      guild: p,
                      channel: o,
                      user: y,
                      opacity: d,
                      nsfwAgree: f,
                      chatKeybind: a,
                      activated: u.has(q.O0n.TEXT_WIDGET),
                      isPreviewingInGame: h,
                      pendingReply: m,
                      contained: t,
                      placeholder: O,
                      widget: q.Odu.TEXT,
                  },
                  n,
              ),
          );
}
