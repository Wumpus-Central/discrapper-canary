n.d(t, { Z: () => el }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(512722),
    l = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    h = n(430742),
    p = n(904245),
    f = n(13245),
    g = n(144144),
    m = n(738619),
    y = n(744061),
    _ = n(36311),
    v = n(655687),
    O = n(823748),
    b = n(25007),
    x = n(199649),
    S = n(1397),
    E = n(541716),
    j = n(752305),
    N = n(974251),
    C = n(893718),
    I = n(249458),
    Z = n(552062),
    P = n(957730),
    w = n(400023),
    k = n(623292),
    T = n(807092),
    D = n(592125),
    M = n(703558),
    R = n(731290),
    A = n(430824),
    L = n(375954),
    z = n(944486),
    W = n(914010),
    V = n(594174),
    B = n(556296),
    U = n(237997),
    G = n(585483),
    F = n(838440),
    H = n(13140),
    Y = n(519591),
    K = n(906037),
    X = n(786906),
    J = n(518084),
    Q = n(987650),
    q = n(981631),
    $ = n(388032),
    ee = n(196871);
function et(e, t, n) {
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
function en(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                et(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
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
function er(e, t) {
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
        for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
let es = Q.wF.TOP;
class eo extends r.Component {
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) && this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        M.Z.removeChangeListener(this.draftDidChange), G.S.unsubscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput), G.S.unsubscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
    }
    render() {
        let e = this.props,
            { channel: t, placeholder: n } = e,
            r = er(e, ['channel', 'placeholder']),
            { focused: s, textValue: o, contentWarningProps: a, richValue: c } = this.state,
            u = (0, i.jsx)(d.yRy, {
                position: 'top',
                onRequestClose: () => {
                    var e;
                    null == a || null === (e = a.onCancel) || void 0 === e || e.call(a), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != a,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return l()(null != a, 'ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null'), (0, i.jsx)(y.Z, en({ onClose: t }, a));
                },
                children: () =>
                    (0, i.jsx)(
                        C.Z,
                        ei(en({}, r), {
                            renderAttachButton: this.renderAttachButton,
                            channel: t,
                            type: E.Ie.OVERLAY,
                            onFocus: () => this.setState({ focused: !0 }),
                            onBlur: () => this.setState({ focused: !1 }),
                            placeholder: n,
                            textValue: o,
                            richValue: c,
                            onSubmit: this.handleSendMessage,
                            onChange: this.handleTextareaChange,
                            onKeyDown: this.handleTextareaKeyDown,
                            focused: s
                        })
                    )
            });
        return t.isPrivate()
            ? (0, i.jsx)(
                  x.Z,
                  {
                      channel: t,
                      children: u
                  },
                  t.id
              )
            : (0, i.jsx)(
                  S.Z,
                  {
                      channel: t,
                      children: u
                  },
                  t.id
              );
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            et(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = M.Z.getDraft(e.channel.id, M.d.ChannelMessage);
                n !== i && '' === i && t.setState((0, j.eK)(i));
            }),
            et(this, 'handleTextareaKeyDown', (e) => {
                if (e.which === q.yXg.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
                    e.preventDefault();
                    let { channel: t } = this.props,
                        n = L.Z.getLastEditableMessage(t.id);
                    null != n && p.Z.startEditMessage(t.id, n.id, n.content);
                }
            }),
            et(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    channel: { id: i }
                } = this.props;
                h.Z.changeDraft(i, this.state.textValue, M.d.ChannelMessage),
                    '' !== t ? g.Z.startTyping(i) : g.Z.stopTyping(i),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            et(this, 'handleSendMessage', (e) => {
                let { value: t } = e,
                    { channel: n, pendingReply: i, isTemporarilyActive: r } = this.props;
                return 0 === t.length
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (0, F.v)({
                          openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                          type: E.Ie.OVERLAY,
                          content: t,
                          channel: n
                      }).then((e) => {
                          let { valid: s, failureReason: o } = e;
                          if (!s)
                              return o === q.zYc.SLOWMODE_COOLDOWN
                                  ? (G.S.dispatch(q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                  : {
                                        shouldClear: !1,
                                        shouldRefocus: !1
                                    };
                          let a = p.Z.getSendMessageOptionsForReply(i);
                          return (p.Z.sendMessage(n.id, P.ZP.parse(n, t), !0, a), this.setState((0, j.H2)()), (0, k.A6)(n.id), r)
                              ? (f.Z.deactivateAllRegions(),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                })
                              : {
                                    shouldClear: !0,
                                    shouldRefocus: !0
                                };
                      });
            }),
            et(this, 'focusInput', () => {
                this.setState({ focused: !0 });
            }),
            et(this, 'blurInput', () => {
                this.setState({ focused: !1 });
            }),
            et(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(N.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: M.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: (e) => this.handleTextareaChange(null, e, (0, j.JM)(e)),
                    canOnlyUseTextCommands: e
                })
            ),
            M.Z.addChangeListener(this.draftDidChange);
        let n = M.Z.getDraft(e.channel.id, M.d.ChannelMessage);
        (this.state = ei(en({}, (0, j.eK)(n)), {
            focused: !1,
            contentWarningProps: null
        })),
            G.S.subscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput),
            G.S.subscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
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
                    guild_id: t.guild_id
                });
    }
    componentDidMount() {
        (0, K.m3)(this.props, this.shouldDisplay());
    }
    getOpacity() {
        let e;
        let { locked: t, activated: n, opacity: i, isPreviewingInGame: r } = this.props;
        return (t && !n) || r ? i / 100 : n || !t ? Math.min(1, (i + 25) / 100) : J.wB;
    }
    renderContent() {
        let e;
        let { channel: t, placeholder: n, nsfwAgree: s, guild: a, locked: l, activated: c, chatKeybind: d, pinned: u, isPreviewingInGame: h, dragging: p, pendingReply: f } = this.props;
        if (null == t) return null;
        let g = l || h,
            y = !s && null != t && t.isNSFW(),
            v = !g || c;
        return (
            (e =
                y && null != a
                    ? (0, i.jsx)(_.Z, {
                          guild: a,
                          channelId: t.id
                      })
                    : (0, i.jsx)(
                          w.Z,
                          {
                              channel: t,
                              className: ee.messages,
                              forceCompact: u,
                              showNewMessagesBar: !g,
                              scrollerClassName: u ? ee.scroller : void 0,
                              showingQuarantineBanner: !1
                          },
                          t.id
                      )),
            (0, i.jsx)(I.G.Provider, {
                value: {
                    disableInteractions: u && l && !c,
                    disableAnimations: u && g && !c
                },
                children: (0, i.jsxs)(r.Fragment, {
                    children: [
                        !l &&
                            !h &&
                            (0, i.jsx)(b.Z, {
                                channel: t,
                                guild: a
                            }),
                        (0, i.jsx)(J.ZP.Background, {
                            opacityOverride: l || h ? null : es,
                            children: (0, i.jsx)('div', {
                                className: o()(ee.messagesContainer, {
                                    [ee.isDragging]: p,
                                    [ee.disableHoverStates]: u && l && !c
                                }),
                                children: e
                            })
                        }),
                        y
                            ? null
                            : (0, i.jsx)('div', {
                                  children: v
                                      ? (0, i.jsx)(J.ZP.Background, {
                                            opacityOverride: l || h ? null : es,
                                            children: (0, i.jsxs)('div', {
                                                className: ee.footerContent,
                                                children: [
                                                    (0, i.jsx)(eo, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: c,
                                                        pendingReply: f
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: ee.typingWrapper,
                                                        children: (0, i.jsx)(m.Z, {
                                                            channel: t,
                                                            className: ee.typing
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                      : (0, i.jsx)('div', {
                                            className: ee.activateContainer,
                                            children: (0, i.jsx)(J.ZP.Background, {
                                                opacityOverride: Q.wF.LOWER,
                                                children: (0, i.jsx)('div', {
                                                    className: o()(ee.activateKeybind, ee.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != t.name && t.name.length > 0
                                                            ? $.NW.formatToPlainString($.t['9TkYMD'], {
                                                                  keybind: d,
                                                                  channelName: t.isMultiUserDM() ? t.name : '#'.concat(t.name)
                                                              })
                                                            : $.NW.formatToPlainString($.t['hxz/4O'], { keybind: d })
                                                })
                                            })
                                        })
                              })
                    ]
                })
            })
        );
    }
    renderWidgetWrapper(e) {
        let { locked: t, pinned: n, activated: r, isPreviewingInGame: s, opacity: a, className: l } = this.props,
            c = q.t_t.UNPINNED;
        r ? (c = q.t_t.IN_GAME_ACTIVE) : (n && t) || s ? (c = q.t_t.IN_GAME_TEXT) : n && (c = q.t_t.PINNED);
        let d = (t && !r) || s,
            u = n && (d || r),
            h = n && r,
            p = n && d && !r,
            f = (0, Y.Z)(a);
        return (0, i.jsx)(J.ZP, {
            className: o()(
                f,
                {
                    [ee.widgetWrapper]: !n,
                    [ee.widgetWrapperPinned]: n,
                    [ee.locked]: p,
                    [ee.inGame]: u,
                    [ee.inGameActive]: h,
                    [ee.pinned]: n,
                    'overlay-unlocked': !t
                },
                l
            ),
            type: c,
            opacity: a,
            children: e
        });
    }
    renderContainedWrapper(e) {
        return (0, i.jsx)('div', {
            className: ee.contained,
            children: e
        });
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return null != e.channel;
    }
    render() {
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: s, contained: o } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let a = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(X.Z, {
                    draggableClassName: ee.draggableStartArea,
                    className: ee.headerDefault,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: o,
                    isPreviewingInGame: s,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart
                }),
                this.renderContent(),
                e || s
                    ? null
                    : (0, i.jsx)('div', {
                          className: ee.resizeIcon,
                          onMouseDown: this.resizeDragStart
                      })
            ]
        });
        return o ? this.renderContainedWrapper(a) : this.renderWidgetWrapper(a);
    }
    constructor(...e) {
        super(...e),
            et(this, 'handlePin', () => {
                var e, t, n;
                let i = !this.props.pinned;
                f.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                    channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                    channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                    widget_type: q.Odu.TEXT
                }),
                    f.Z.setPinChat(i);
            }),
            et(this, 'handleContextMenu', (e) => {
                let { channel: t, user: r } = this.props;
                null != t &&
                    null != r &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('56826'), n.e('78001')]).then(n.bind(n, 131404));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                ei(en({}, n), {
                                    user: r,
                                    channelSelected: !0,
                                    channel: t
                                })
                            );
                    });
            }),
            et(this, 'moveDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(Z.B.MOVE, e.clientX, e.clientY);
            }),
            et(this, 'resizeDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(Z.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
    }
}
function el(e) {
    var { contained: t = !1 } = e,
        n = er(e, ['contained']);
    let r = (0, c.e7)([W.Z], () => W.Z.getGuildId()),
        s = (0, c.e7)([z.Z], () => z.Z.getChannelId(r)),
        o = (0, c.e7)([D.Z], () => D.Z.getChannel(s)),
        a = (0, c.e7)([B.ZP], () => B.ZP.getOverlayChatKeybind()),
        l = null != a ? (0, H.BB)(a.shortcut, !0) : ']',
        [d, u, h] = (0, c.Wu)([U.default], () => [U.default.getTextWidgetOpacity(), U.default.getActiveRegions(), !t && U.default.isPreviewingInGame()]),
        p = (0, c.e7)([A.Z], () => A.Z.getGuild(r)),
        f = (0, c.e7)([R.Z], () => null != r && R.Z.didAgree(r)),
        g = null != o && o.isPrivate() ? o.getRecipientId() : null,
        m = (0, c.e7)([T.Z], () => (null != s ? T.Z.getPendingReply(s) : void 0)),
        y = (0, c.e7)([V.default], () => (null != g ? V.default.getUser(g) : null)),
        { placeholder: _ } = (0, v.Z)({ channel: o });
    return null != o && null != p && q.TPd.GUILD_THREADS_ONLY.has(o.type)
        ? (0, i.jsx)(O.Z, {})
        : (0, i.jsx)(
              ea,
              en(
                  {
                      guild: p,
                      channel: o,
                      user: y,
                      opacity: d,
                      nsfwAgree: f,
                      chatKeybind: l,
                      activated: u.has(q.O0n.TEXT_WIDGET),
                      isPreviewingInGame: h,
                      pendingReply: m,
                      contained: t,
                      placeholder: _,
                      widget: q.Odu.TEXT
                  },
                  n
              )
          );
}
