n.d(t, { Z: () => el }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(512722),
    a = n.n(o),
    d = n(442837),
    c = n(481060),
    u = n(239091),
    h = n(430742),
    p = n(904245),
    g = n(13245),
    f = n(144144),
    m = n(738619),
    x = n(744061),
    v = n(36311),
    Z = n(655687),
    S = n(823748),
    E = n(25007),
    C = n(199649),
    I = n(1397),
    N = n(541716),
    y = n(752305),
    _ = n(974251),
    j = n(893718),
    O = n(249458),
    T = n(552062),
    b = n(957730),
    k = n(400023),
    M = n(623292),
    w = n(807092),
    P = n(592125),
    R = n(703558),
    A = n(731290),
    D = n(430824),
    L = n(375954),
    z = n(944486),
    V = n(914010),
    U = n(594174),
    W = n(556296),
    B = n(237997),
    F = n(585483),
    G = n(838440),
    H = n(13140),
    Y = n(519591),
    K = n(906037),
    X = n(786906),
    Q = n(518084),
    J = n(987650),
    q = n(981631),
    $ = n(388032),
    ee = n(684648);
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
        R.Z.removeChangeListener(this.draftDidChange), F.S.unsubscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput), F.S.unsubscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
    }
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: s, textValue: l, contentWarningProps: r, richValue: o } = this.state,
            d = (0, i.jsx)(c.yRy, {
                position: 'top',
                onRequestClose: () => {
                    var e;
                    null == r || null === (e = r.onCancel) || void 0 === e || e.call(r), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != r,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        a()(null != r, 'ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null'),
                        (0, i.jsx)(x.Z, {
                            onClose: t,
                            ...r
                        })
                    );
                },
                children: () =>
                    (0, i.jsx)(j.Z, {
                        ...n,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: N.Ie.OVERLAY,
                        onFocus: () => this.setState({ focused: !0 }),
                        onBlur: () => this.setState({ focused: !1 }),
                        placeholder: t,
                        textValue: l,
                        richValue: o,
                        onSubmit: this.handleSendMessage,
                        onChange: this.handleTextareaChange,
                        onKeyDown: this.handleTextareaKeyDown,
                        focused: s
                    })
            });
        return e.isPrivate()
            ? (0, i.jsx)(
                  C.Z,
                  {
                      channel: e,
                      children: d
                  },
                  e.id
              )
            : (0, i.jsx)(
                  I.Z,
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
                    '' !== t ? f.Z.startTyping(i) : f.Z.stopTyping(i),
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
                          type: N.Ie.OVERLAY,
                          content: t,
                          channel: n
                      }).then((e) => {
                          let { valid: l, failureReason: r } = e;
                          if (!l)
                              return r === q.zYc.SLOWMODE_COOLDOWN
                                  ? (F.S.dispatch(q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                  : {
                                        shouldClear: !1,
                                        shouldRefocus: !1
                                    };
                          let o = p.Z.getSendMessageOptionsForReply(i);
                          return (p.Z.sendMessage(n.id, b.ZP.parse(n, t), !0, o), this.setState((0, y.H2)()), (0, M.A6)(n.id), s)
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
                (0, i.jsx)(_.Z, {
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
            F.S.subscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput),
            F.S.subscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
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
        let { channel: t, placeholder: n, nsfwAgree: l, guild: o, locked: a, activated: d, chatKeybind: c, pinned: u, isPreviewingInGame: h, dragging: p, pendingReply: g } = this.props;
        if (null == t) return null;
        let f = a || h,
            x = !l && null != t && t.isNSFW(),
            Z = !f || d;
        return (
            (e =
                x && null != o
                    ? (0, i.jsx)(v.Z, { guild: o })
                    : (0, i.jsx)(
                          k.Z,
                          {
                              channel: t,
                              className: ee.messages,
                              forceCompact: u,
                              showNewMessagesBar: !f,
                              scrollerClassName: u ? ee.scroller : void 0,
                              showingQuarantineBanner: !1
                          },
                          t.id
                      )),
            (0, i.jsx)(O.G.Provider, {
                value: {
                    disableInteractions: u && a && !d,
                    disableAnimations: u && f && !d
                },
                children: (0, i.jsxs)(s.Fragment, {
                    children: [
                        !a &&
                            !h &&
                            (0, i.jsx)(E.Z, {
                                channel: t,
                                guild: o
                            }),
                        (0, i.jsx)(Q.ZP.Background, {
                            opacityOverride: a || h ? null : en,
                            children: (0, i.jsx)('div', {
                                className: r()(ee.messagesContainer, {
                                    [ee.isDragging]: p,
                                    [ee.disableHoverStates]: u && a && !d
                                }),
                                children: e
                            })
                        }),
                        x
                            ? null
                            : (0, i.jsx)('div', {
                                  children: Z
                                      ? (0, i.jsx)(Q.ZP.Background, {
                                            opacityOverride: a || h ? null : en,
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
                                            children: (0, i.jsx)(Q.ZP.Background, {
                                                opacityOverride: J.wF.LOWER,
                                                children: (0, i.jsx)('div', {
                                                    className: r()(ee.activateKeybind, ee.__invalid_mediumBackgroundOpacity),
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
        let { locked: t, pinned: n, activated: s, isPreviewingInGame: l, opacity: o, className: a } = this.props,
            d = q.t_t.UNPINNED;
        s ? (d = q.t_t.IN_GAME_ACTIVE) : (n && t) || l ? (d = q.t_t.IN_GAME_TEXT) : n && (d = q.t_t.PINNED);
        let c = (t && !s) || l,
            u = n && (c || s),
            h = n && s,
            p = n && c && !s,
            g = (0, Y.Z)(o);
        return (0, i.jsx)(Q.ZP, {
            className: r()(
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
                a
            ),
            type: d,
            opacity: o,
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
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: l, contained: r } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let o = (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(X.Z, {
                    draggableClassName: ee.draggableStartArea,
                    className: ee.headerDefault,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: r,
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
        return r ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o);
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
                        let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
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
                t(T.B.MOVE, e.clientX, e.clientY);
            }),
            et(this, 'resizeDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(T.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
    }
}
function el(e) {
    let { contained: t = !1, ...n } = e,
        s = (0, d.e7)([V.Z], () => V.Z.getGuildId()),
        l = (0, d.e7)([z.Z], () => z.Z.getChannelId(s)),
        r = (0, d.e7)([P.Z], () => P.Z.getChannel(l)),
        o = (0, d.e7)([W.Z], () => W.Z.getOverlayChatKeybind()),
        a = null != o ? (0, H.BB)(o.shortcut, !0) : ']',
        [c, u, h] = (0, d.Wu)([B.Z], () => [B.Z.getTextWidgetOpacity(), B.Z.getActiveRegions(), !t && B.Z.isPreviewingInGame()]),
        p = (0, d.e7)([D.Z], () => D.Z.getGuild(s)),
        g = (0, d.e7)([A.Z], () => null != s && A.Z.didAgree(s)),
        f = null != r && r.isPrivate() ? r.getRecipientId() : null,
        m = (0, d.e7)([w.Z], () => (null != l ? w.Z.getPendingReply(l) : void 0)),
        x = (0, d.e7)([U.default], () => (null != f ? U.default.getUser(f) : null)),
        { placeholder: v } = (0, Z.Z)({ channel: r });
    return null != r && null != p && q.TPd.GUILD_THREADS_ONLY.has(r.type)
        ? (0, i.jsx)(S.Z, {})
        : (0, i.jsx)(es, {
              guild: p,
              channel: r,
              user: x,
              opacity: c,
              nsfwAgree: g,
              chatKeybind: a,
              activated: u.has(q.O0n.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: m,
              contained: t,
              placeholder: v,
              widget: q.Odu.TEXT,
              ...n
          });
}
