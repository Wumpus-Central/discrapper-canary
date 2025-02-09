n.d(t, { Z: () => el }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(512722),
    o = n.n(r),
    d = n(442837),
    c = n(481060),
    u = n(239091),
    h = n(430742),
    p = n(904245),
    g = n(13245),
    m = n(144144),
    f = n(738619),
    _ = n(744061),
    v = n(36311),
    x = n(655687),
    Z = n(823748),
    S = n(25007),
    E = n(199649),
    C = n(1397),
    I = n(541716),
    y = n(752305),
    N = n(974251),
    T = n(893718),
    b = n(249458),
    O = n(552062),
    j = n(957730),
    k = n(400023),
    M = n(623292),
    w = n(807092),
    P = n(592125),
    R = n(703558),
    D = n(731290),
    A = n(430824),
    L = n(375954),
    z = n(944486),
    B = n(914010),
    V = n(594174),
    W = n(556296),
    F = n(237997),
    U = n(585483),
    G = n(838440),
    H = n(13140),
    Y = n(519591),
    K = n(906037),
    X = n(786906),
    Q = n(518084),
    J = n(987650),
    q = n(981631),
    $ = n(388032),
    ee = n(346701);
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
let en = J.wF.TOP;
class ei extends s.Component {
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) && this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        R.Z.removeChangeListener(this.draftDidChange), U.S.unsubscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput), U.S.unsubscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
    }
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: s, textValue: l, contentWarningProps: a, richValue: r } = this.state,
            d = (0, i.jsx)(c.yRy, {
                position: 'top',
                onRequestClose: () => {
                    var e;
                    null == a || null === (e = a.onCancel) || void 0 === e || e.call(a), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != a,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        o()(null != a, 'ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null'),
                        (0, i.jsx)(_.Z, {
                            onClose: t,
                            ...a
                        })
                    );
                },
                children: () =>
                    (0, i.jsx)(T.Z, {
                        ...n,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: I.Ie.OVERLAY,
                        onFocus: () => this.setState({ focused: !0 }),
                        onBlur: () => this.setState({ focused: !1 }),
                        placeholder: t,
                        textValue: l,
                        richValue: r,
                        onSubmit: this.handleSendMessage,
                        onChange: this.handleTextareaChange,
                        onKeyDown: this.handleTextareaKeyDown,
                        focused: s
                    })
            });
        return e.isPrivate()
            ? (0, i.jsx)(
                  E.Z,
                  {
                      channel: e,
                      children: d
                  },
                  e.id
              )
            : (0, i.jsx)(
                  C.Z,
                  {
                      channel: e,
                      children: d
                  },
                  e.id
              );
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            et(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = R.Z.getDraft(e.channel.id, R.d.ChannelMessage);
                n !== i && '' === i && t.setState((0, y.eK)(i));
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
                h.Z.changeDraft(i, this.state.textValue, R.d.ChannelMessage),
                    '' !== t ? m.Z.startTyping(i) : m.Z.stopTyping(i),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            et(this, 'handleSendMessage', (e) => {
                let { value: t } = e,
                    { channel: n, pendingReply: i, isTemporarilyActive: s } = this.props;
                return 0 === t.length
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (0, G.v)({
                          openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                          type: I.Ie.OVERLAY,
                          content: t,
                          channel: n
                      }).then((e) => {
                          let { valid: l, failureReason: a } = e;
                          if (!l)
                              return a === q.zYc.SLOWMODE_COOLDOWN
                                  ? (U.S.dispatch(q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                  : {
                                        shouldClear: !1,
                                        shouldRefocus: !1
                                    };
                          let r = p.Z.getSendMessageOptionsForReply(i);
                          return (p.Z.sendMessage(n.id, j.ZP.parse(n, t), !0, r), this.setState((0, y.H2)()), (0, M.A6)(n.id), s)
                              ? (g.Z.deactivateAllRegions(),
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
                    draftType: R.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: (e) => this.handleTextareaChange(null, e, (0, y.JM)(e)),
                    canOnlyUseTextCommands: e
                })
            ),
            R.Z.addChangeListener(this.draftDidChange);
        let n = R.Z.getDraft(e.channel.id, R.d.ChannelMessage);
        (this.state = {
            ...(0, y.eK)(n),
            focused: !1,
            contentWarningProps: null
        }),
            U.S.subscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput),
            U.S.subscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
    }
}
class es extends s.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        (0, K.CR)(e, this.props, this.shouldDisplay),
            null != t &&
                n &&
                !e.activated &&
                g.Z.track(q.rMx.OVERLAY_UNLOCKED, {
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
        let { locked: t, activated: n, opacity: i, isPreviewingInGame: s } = this.props;
        return (t && !n) || s ? i / 100 : n || !t ? Math.min(1, (i + 25) / 100) : Q.wB;
    }
    renderContent() {
        let e;
        let { channel: t, placeholder: n, nsfwAgree: l, guild: r, locked: o, activated: d, chatKeybind: c, pinned: u, isPreviewingInGame: h, dragging: p, pendingReply: g } = this.props;
        if (null == t) return null;
        let m = o || h,
            _ = !l && null != t && t.isNSFW(),
            x = !m || d;
        return (
            (e =
                _ && null != r
                    ? (0, i.jsx)(v.Z, { guild: r })
                    : (0, i.jsx)(
                          k.Z,
                          {
                              channel: t,
                              className: ee.messages,
                              forceCompact: u,
                              showNewMessagesBar: !m,
                              scrollerClassName: u ? ee.scroller : void 0,
                              showingQuarantineBanner: !1
                          },
                          t.id
                      )),
            (0, i.jsx)(b.G.Provider, {
                value: {
                    disableInteractions: u && o && !d,
                    disableAnimations: u && m && !d
                },
                children: (0, i.jsxs)(s.Fragment, {
                    children: [
                        !o &&
                            !h &&
                            (0, i.jsx)(S.Z, {
                                channel: t,
                                guild: r
                            }),
                        (0, i.jsx)(Q.ZP.Background, {
                            opacityOverride: o || h ? null : en,
                            children: (0, i.jsx)('div', {
                                className: a()(ee.messagesContainer, {
                                    [ee.isDragging]: p,
                                    [ee.disableHoverStates]: u && o && !d
                                }),
                                children: e
                            })
                        }),
                        _
                            ? null
                            : (0, i.jsx)('div', {
                                  children: x
                                      ? (0, i.jsx)(Q.ZP.Background, {
                                            opacityOverride: o || h ? null : en,
                                            children: (0, i.jsxs)('div', {
                                                className: ee.footerContent,
                                                children: [
                                                    (0, i.jsx)(ei, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: d,
                                                        pendingReply: g
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: ee.typingWrapper,
                                                        children: (0, i.jsx)(f.Z, {
                                                            channel: t,
                                                            className: ee.typing
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                      : (0, i.jsx)('div', {
                                            className: ee.activateContainer,
                                            children: (0, i.jsx)(Q.ZP.Background, {
                                                opacityOverride: J.wF.LOWER,
                                                children: (0, i.jsx)('div', {
                                                    className: a()(ee.activateKeybind, ee.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != t.name && t.name.length > 0
                                                            ? $.intl.formatToPlainString($.t['9TkYMD'], {
                                                                  keybind: c,
                                                                  channelName: t.isMultiUserDM() ? t.name : '#'.concat(t.name)
                                                              })
                                                            : $.intl.formatToPlainString($.t['hxz/4O'], { keybind: c })
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
        let { locked: t, pinned: n, activated: s, isPreviewingInGame: l, opacity: r, className: o } = this.props,
            d = q.t_t.UNPINNED;
        s ? (d = q.t_t.IN_GAME_ACTIVE) : (n && t) || l ? (d = q.t_t.IN_GAME_TEXT) : n && (d = q.t_t.PINNED);
        let c = (t && !s) || l,
            u = n && (c || s),
            h = n && s,
            p = n && c && !s,
            g = (0, Y.Z)(r);
        return (0, i.jsx)(Q.ZP, {
            className: a()(
                g,
                {
                    [ee.widgetWrapper]: !n,
                    [ee.widgetWrapperPinned]: n,
                    [ee.locked]: p,
                    [ee.inGame]: u,
                    [ee.inGameActive]: h,
                    [ee.pinned]: n,
                    'overlay-unlocked': !t
                },
                o
            ),
            type: d,
            opacity: r,
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
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: l, contained: a } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let r = (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(X.Z, {
                    draggableClassName: ee.draggableStartArea,
                    className: ee.headerDefault,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: a,
                    isPreviewingInGame: l,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart
                }),
                this.renderContent(),
                e || l
                    ? null
                    : (0, i.jsx)('div', {
                          className: ee.resizeIcon,
                          onMouseDown: this.resizeDragStart
                      })
            ]
        });
        return a ? this.renderContainedWrapper(r) : this.renderWidgetWrapper(r);
    }
    constructor(...e) {
        super(...e),
            et(this, 'handlePin', () => {
                var e, t, n;
                let i = !this.props.pinned;
                g.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                    channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                    channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                    widget_type: q.Odu.TEXT
                }),
                    g.Z.setPinChat(i);
            }),
            et(this, 'handleContextMenu', (e) => {
                let { channel: t, user: s } = this.props;
                null != t &&
                    null != s &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('56826'), n.e('76586')]).then(n.bind(n, 131404));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: s,
                                channelSelected: !0,
                                channel: t
                            });
                    });
            }),
            et(this, 'moveDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(O.B.MOVE, e.clientX, e.clientY);
            }),
            et(this, 'resizeDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(O.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
    }
}
function el(e) {
    let { contained: t = !1, ...n } = e,
        s = (0, d.e7)([B.Z], () => B.Z.getGuildId()),
        l = (0, d.e7)([z.Z], () => z.Z.getChannelId(s)),
        a = (0, d.e7)([P.Z], () => P.Z.getChannel(l)),
        r = (0, d.e7)([W.ZP], () => W.ZP.getOverlayChatKeybind()),
        o = null != r ? (0, H.BB)(r.shortcut, !0) : ']',
        [c, u, h] = (0, d.Wu)([F.Z], () => [F.Z.getTextWidgetOpacity(), F.Z.getActiveRegions(), !t && F.Z.isPreviewingInGame()]),
        p = (0, d.e7)([A.Z], () => A.Z.getGuild(s)),
        g = (0, d.e7)([D.Z], () => null != s && D.Z.didAgree(s)),
        m = null != a && a.isPrivate() ? a.getRecipientId() : null,
        f = (0, d.e7)([w.Z], () => (null != l ? w.Z.getPendingReply(l) : void 0)),
        _ = (0, d.e7)([V.default], () => (null != m ? V.default.getUser(m) : null)),
        { placeholder: v } = (0, x.Z)({ channel: a });
    return null != a && null != p && q.TPd.GUILD_THREADS_ONLY.has(a.type)
        ? (0, i.jsx)(Z.Z, {})
        : (0, i.jsx)(es, {
              guild: p,
              channel: a,
              user: _,
              opacity: c,
              nsfwAgree: g,
              chatKeybind: o,
              activated: u.has(q.O0n.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: f,
              contained: t,
              placeholder: v,
              widget: q.Odu.TEXT,
              ...n
          });
}
