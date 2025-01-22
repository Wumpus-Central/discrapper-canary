n.d(t, {
    Z: function () {
        return er;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    o = n.n(r),
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
    v = n(744061),
    x = n(36311),
    S = n(655687),
    Z = n(823748),
    _ = n(25007),
    E = n(199649),
    C = n(1397),
    I = n(541716),
    N = n(752305),
    y = n(974251),
    b = n(893718),
    T = n(249458),
    O = n(552062),
    j = n(957730),
    M = n(400023),
    k = n(623292),
    w = n(807092),
    P = n(592125),
    R = n(703558),
    A = n(731290),
    L = n(430824),
    D = n(375954),
    z = n(944486),
    B = n(914010),
    V = n(594174),
    W = n(556296),
    U = n(237997),
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
            { focused: s, textValue: r, contentWarningProps: o, richValue: a } = this.state,
            c = (0, i.jsx)(d.Popout, {
                position: 'top',
                onRequestClose: () => {
                    var e;
                    null == o || null === (e = o.onCancel) || void 0 === e || e.call(o), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != o,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        l()(null != o, 'ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null'),
                        (0, i.jsx)(v.Z, {
                            onClose: t,
                            ...o
                        })
                    );
                },
                children: () =>
                    (0, i.jsx)(b.Z, {
                        ...n,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: I.Ie.OVERLAY,
                        onFocus: () => this.setState({ focused: !0 }),
                        onBlur: () => this.setState({ focused: !1 }),
                        placeholder: t,
                        textValue: r,
                        richValue: a,
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
                      children: c
                  },
                  e.id
              )
            : (0, i.jsx)(
                  C.Z,
                  {
                      channel: e,
                      children: c
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
                n !== i && '' === i && t.setState((0, N.eK)(i));
            }),
            et(this, 'handleTextareaKeyDown', (e) => {
                if (e.which === q.yXg.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
                    e.preventDefault();
                    let { channel: t } = this.props,
                        n = D.Z.getLastEditableMessage(t.id);
                    null != n && p.Z.startEditMessage(t.id, n.id, n.content);
                }
            }),
            et(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    channel: { id: i }
                } = this.props;
                h.Z.changeDraft(i, this.state.textValue, R.d.ChannelMessage),
                    '' !== t ? g.Z.startTyping(i) : g.Z.stopTyping(i),
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
                          let { valid: r, failureReason: o } = e;
                          if (!r)
                              return o === q.zYc.SLOWMODE_COOLDOWN
                                  ? (F.S.dispatch(q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                  : {
                                        shouldClear: !1,
                                        shouldRefocus: !1
                                    };
                          let a = p.Z.getSendMessageOptionsForReply(i);
                          return (p.Z.sendMessage(n.id, j.ZP.parse(n, t), !0, a), this.setState((0, N.H2)()), (0, k.A6)(n.id), s)
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
                (0, i.jsx)(y.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: R.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: (e) => this.handleTextareaChange(null, e, (0, N.JM)(e)),
                    canOnlyUseTextCommands: e
                })
            ),
            R.Z.addChangeListener(this.draftDidChange);
        let n = R.Z.getDraft(e.channel.id, R.d.ChannelMessage);
        (this.state = {
            ...(0, N.eK)(n),
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
        if (((0, K.CR)(e, this.props, this.shouldDisplay), null != t))
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
        let { locked: t, activated: n, opacity: i, isPreviewingInGame: s } = this.props;
        return (e = (t && !n) || s ? i / 100 : n || !t ? Math.min(1, (i + 25) / 100) : Q.wB);
    }
    renderContent() {
        let e;
        let { channel: t, placeholder: n, nsfwAgree: r, guild: a, locked: l, activated: c, chatKeybind: d, pinned: u, isPreviewingInGame: h, dragging: p, pendingReply: f } = this.props;
        if (null == t) return null;
        let g = l || h,
            v = !r && null != t && t.isNSFW(),
            S = !g || c;
        return (
            (e =
                v && null != a
                    ? (0, i.jsx)(x.Z, { guild: a })
                    : (0, i.jsx)(
                          M.Z,
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
            (0, i.jsx)(T.G.Provider, {
                value: {
                    disableInteractions: u && l && !c,
                    disableAnimations: u && g && !c
                },
                children: (0, i.jsxs)(s.Fragment, {
                    children: [
                        !l &&
                            !h &&
                            (0, i.jsx)(_.Z, {
                                channel: t,
                                guild: a
                            }),
                        (0, i.jsx)(Q.ZP.Background, {
                            opacityOverride: l || h ? null : en,
                            children: (0, i.jsx)('div', {
                                className: o()(ee.messagesContainer, {
                                    [ee.isDragging]: p,
                                    [ee.disableHoverStates]: u && l && !c
                                }),
                                children: e
                            })
                        }),
                        v
                            ? null
                            : (0, i.jsx)('div', {
                                  children: S
                                      ? (0, i.jsx)(Q.ZP.Background, {
                                            opacityOverride: l || h ? null : en,
                                            children: (0, i.jsxs)('div', {
                                                className: ee.footerContent,
                                                children: [
                                                    (0, i.jsx)(ei, {
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
                                            children: (0, i.jsx)(Q.ZP.Background, {
                                                opacityOverride: J.wF.LOWER,
                                                children: (0, i.jsx)('div', {
                                                    className: o()(ee.activateKeybind, ee.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != t.name && t.name.length > 0
                                                            ? $.intl.formatToPlainString($.t['9TkYMD'], {
                                                                  keybind: d,
                                                                  channelName: t.isMultiUserDM() ? t.name : '#'.concat(t.name)
                                                              })
                                                            : $.intl.formatToPlainString($.t['hxz/4O'], { keybind: d })
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
        let { locked: t, pinned: n, activated: s, isPreviewingInGame: r, opacity: a, className: l } = this.props,
            c = q.t_t.UNPINNED;
        s ? (c = q.t_t.IN_GAME_ACTIVE) : (n && t) || r ? (c = q.t_t.IN_GAME_TEXT) : n && (c = q.t_t.PINNED);
        let d = (t && !s) || r,
            u = n && (d || s),
            h = n && s,
            p = n && d && !s,
            f = (0, Y.Z)(a);
        return (0, i.jsx)(Q.ZP, {
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
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: r, contained: o } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let a = (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(X.Z, {
                    draggableClassName: ee.draggableStartArea,
                    className: ee.headerDefault,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: o,
                    isPreviewingInGame: r,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart
                }),
                this.renderContent(),
                e || r
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
                let { channel: t, user: s } = this.props;
                null != t &&
                    null != s &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
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
function er(e) {
    let { contained: t = !1, ...n } = e,
        s = (0, c.e7)([B.Z], () => B.Z.getGuildId()),
        r = (0, c.e7)([z.Z], () => z.Z.getChannelId(s)),
        o = (0, c.e7)([P.Z], () => P.Z.getChannel(r)),
        a = (0, c.e7)([W.Z], () => W.Z.getOverlayChatKeybind()),
        l = null != a ? (0, H.BB)(a.shortcut, !0) : ']',
        [d, u, h] = (0, c.Wu)([U.Z], () => [U.Z.getTextWidgetOpacity(), U.Z.getActiveRegions(), !t && U.Z.isPreviewingInGame()]),
        p = (0, c.e7)([L.Z], () => L.Z.getGuild(s)),
        f = (0, c.e7)([A.Z], () => null != s && A.Z.didAgree(s)),
        g = null != o && o.isPrivate() ? o.getRecipientId() : null,
        m = (0, c.e7)([w.Z], () => (null != r ? w.Z.getPendingReply(r) : void 0)),
        v = (0, c.e7)([V.default], () => (null != g ? V.default.getUser(g) : null)),
        { placeholder: x } = (0, S.Z)({ channel: o });
    return null != o && null != p && q.TPd.GUILD_THREADS_ONLY.has(o.type)
        ? (0, i.jsx)(Z.Z, {})
        : (0, i.jsx)(es, {
              guild: p,
              channel: o,
              user: v,
              opacity: d,
              nsfwAgree: f,
              chatKeybind: l,
              activated: u.has(q.O0n.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: m,
              contained: t,
              placeholder: x,
              widget: q.Odu.TEXT,
              ...n
          });
}
