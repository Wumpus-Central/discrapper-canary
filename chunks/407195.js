n.d(t, { A: () => ec }), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(284009),
    a = n.n(o),
    c = n(311907),
    d = n(397927),
    u = n(442433),
    h = n(465532),
    p = n(843472),
    f = n(684013),
    b = n(414798),
    g = n(147192),
    y = n(480870),
    A = n(264140),
    m = n(387462),
    O = n(667285),
    v = n(920437),
    E = n(355622),
    x = n(408018),
    S = n(20737),
    j = n(133343),
    _ = n(692051),
    I = n(685603),
    C = n(451909),
    w = n(926262),
    N = n(371648),
    P = n(118517),
    D = n(853145),
    T = n(522556),
    R = n(734057),
    k = n(31717),
    L = n(517019),
    M = n(71393),
    G = n(320501),
    V = n(309010),
    U = n(967198),
    z = n(287809),
    K = n(532624),
    H = n(256415),
    W = n(203982),
    B = n(460350),
    Y = n(350535),
    F = n(401955),
    Z = n(799808),
    J = n(683484),
    X = n(855790),
    Q = n(672396),
    q = n(652215),
    $ = n(381941),
    ee = n(985018),
    et = n(520555);
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
        r,
        s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (i = n[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
        return s;
    }
    if (
        ((s = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.getOwnPropertyNames(e);
            for (i = 0; i < s.length; i++)
                (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (i = n[r]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
    return s;
}
let el = Q.Li.TOP;
class eo extends r.Component {
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props),
            (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
                this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        k.A.removeChangeListener(this.draftDidChange),
            W._.unsubscribe(q.jej.TEXTAREA_FOCUS, this.focusInput),
            W._.unsubscribe(q.jej.TEXTAREA_BLUR, this.blurInput);
    }
    render() {
        let e = this.props,
            { channel: t, placeholder: n } = e,
            r = es(e, ["channel", "placeholder"]),
            { focused: s, textValue: l, contentWarningProps: o, richValue: c } = this.state,
            u = (0, i.jsx)(d.YNO, {
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
                        a()(
                            null != o,
                            "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                        ),
                        (0, i.jsx)(w.A, ei({ onClose: t }, o))
                    );
                },
                children: () =>
                    (0, i.jsx)(
                        j.Ay,
                        er(ei({}, r), {
                            ref: this.textAreaRef,
                            renderAttachButton: this.renderAttachButton,
                            channel: t,
                            type: E.oU.OVERLAY,
                            onFocus: () => this.setState({ focused: !0 }),
                            onBlur: () => this.setState({ focused: !1 }),
                            placeholder: n,
                            textValue: l,
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
                  O.A,
                  {
                      channel: t,
                      children: u,
                  },
                  t.id,
              )
            : (0, i.jsx)(
                  v.A,
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
                    i = k.A.getDraft(e.channel.id, k.C.ChannelMessage);
                n !== i && "" === i && t.setState((0, x.ur)(i));
            }),
            en(this, "handleTextareaKeyDown", (e) => {
                if (
                    e.which === q.Ks6.ARROW_UP &&
                    !e.shiftKey &&
                    !e.altKey &&
                    !e.ctrlKey &&
                    !e.metaKey &&
                    0 === this.state.textValue.length
                ) {
                    e.preventDefault();
                    let { channel: t } = this.props,
                        n = G.A.getLastEditableMessage(t.id);
                    null != n && p.A.startEditMessageRecord(t.id, n);
                }
            }),
            en(this, "handleTextareaChange", (e, t, n) => {
                let {
                    channel: { id: i },
                } = this.props;
                h.A.changeDraft(i, this.state.textValue, k.C.ChannelMessage),
                    "" !== t ? b.A.startTyping(i) : b.A.stopTyping(i),
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
                    : (0, B.i)({
                          openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                          type: E.oU.OVERLAY,
                          content: t,
                          channel: n,
                      }).then((e) => {
                          let { valid: s, failureReason: l } = e;
                          if (!s)
                              return l === q.X8x.SLOWMODE_COOLDOWN
                                  ? (W._.dispatch(q.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0,
                                    })
                                  : {
                                        shouldClear: !1,
                                        shouldRefocus: !1,
                                    };
                          let o = p.A.getSendMessageOptionsForReply(i);
                          return (p.A.sendMessage(
                              n.id,
                              C.Ay.parse(n, t),
                              !0,
                              er(ei({}, o), { location: $.Hx.OVERLAY }),
                          ),
                          this.setState((0, x.N3)()),
                          (0, P.Jx)(n.id),
                          r)
                              ? (f.A.deactivateAllRegions(),
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
                (0, i.jsx)(S.A, {
                    className: t,
                    channel: this.props.channel,
                    draftType: k.C.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: (e) => this.handleTextareaChange(null, e, (0, x.x7)(e)),
                    canOnlyUseTextCommands: e,
                    chatInputType: E.oU.OVERLAY,
                }),
            ),
            k.A.addChangeListener(this.draftDidChange);
        const n = k.A.getDraft(e.channel.id, k.C.ChannelMessage);
        (this.state = er(ei({}, (0, x.ur)(n)), {
            focused: !1,
            contentWarningProps: null,
        })),
            W._.subscribe(q.jej.TEXTAREA_FOCUS, this.focusInput),
            W._.subscribe(q.jej.TEXTAREA_BLUR, this.blurInput);
    }
}
class ea extends r.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        (0, Z.Mw)(e, this.props, this.shouldDisplay),
            null != t &&
                n &&
                !e.activated &&
                f.A.track(q.HAw.OVERLAY_UNLOCKED, {
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.guild_id,
                });
    }
    componentDidMount() {
        (0, Z.j_)(this.props, this.shouldDisplay());
    }
    getOpacity() {
        let { locked: e, activated: t, opacity: n, isPreviewingInGame: i } = this.props;
        return (e && !t) || i ? n / 100 : t || !e ? Math.min(1, (n + 25) / 100) : X.q0;
    }
    renderContent() {
        let e,
            {
                channel: t,
                placeholder: n,
                nsfwAgree: s,
                guild: o,
                locked: a,
                activated: c,
                chatKeybind: d,
                pinned: u,
                isPreviewingInGame: h,
                dragging: p,
                pendingReply: f,
            } = this.props;
        if (null == t) return null;
        let b = a || h,
            y = !s && null != t && t.isNSFW(),
            A = !b || c;
        return (
            (e =
                y && null != o
                    ? (0, i.jsx)(T.A, {
                          guild: o,
                          channelId: t.id,
                      })
                    : (0, i.jsx)(
                          N.A,
                          {
                              channel: t,
                              className: et.Wk,
                              forceCompact: u,
                              showNewMessagesBar: !b,
                              scrollerClassName: u ? et.XG : void 0,
                              showingQuarantineBanner: !1,
                          },
                          t.id,
                      )),
            (0, i.jsx)(_.Y.Provider, {
                value: {
                    disableInteractions: u && a && !c,
                    disableAnimations: u && b && !c,
                },
                children: (0, i.jsxs)(r.Fragment, {
                    children: [
                        !a &&
                            !h &&
                            (0, i.jsx)(m.A, {
                                channel: t,
                                guild: o,
                            }),
                        (0, i.jsx)(X.Ay.Background, {
                            opacityOverride: a || h ? null : el,
                            children: (0, i.jsx)("div", {
                                className: l()(et.MJ, {
                                    [et.Id]: p,
                                    [et.$p]: u && a && !c,
                                }),
                                children: e,
                            }),
                        }),
                        y
                            ? null
                            : (0, i.jsx)("div", {
                                  children: A
                                      ? (0, i.jsx)(X.Ay.Background, {
                                            opacityOverride: a || h ? null : el,
                                            children: (0, i.jsxs)("div", {
                                                className: et.z8,
                                                children: [
                                                    (0, i.jsx)(eo, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: c,
                                                        pendingReply: f,
                                                    }),
                                                    (0, i.jsx)("div", {
                                                        className: et.V_,
                                                        children: (0, i.jsx)(g.Ay, {
                                                            channel: t,
                                                            className: et.IW,
                                                            isInTextChannel: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, i.jsx)("div", {
                                            className: et.Zl,
                                            children: (0, i.jsx)(X.Ay.Background, {
                                                opacityOverride: Q.Li.LOWER,
                                                children: (0, i.jsx)("div", {
                                                    className: l()(et.ew, et.__invalid_mediumBackgroundOpacity),
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
        let { locked: t, pinned: n, activated: r, isPreviewingInGame: s, opacity: o, className: a } = this.props,
            c = q.UVF.UNPINNED;
        r ? (c = q.UVF.IN_GAME_ACTIVE) : (n && t) || s ? (c = q.UVF.IN_GAME_TEXT) : n && (c = q.UVF.PINNED);
        let d = (t && !r) || s,
            u = n && (d || r),
            h = n && r,
            p = n && d && !r,
            f = (0, F.A)(o);
        return (0, i.jsx)(X.Ay, {
            className: l()(
                f,
                {
                    [et.yw]: !n,
                    [et.CP]: n,
                    [et.xt]: p,
                    [et.iM]: u,
                    [et.ip]: h,
                    [et.dp]: n,
                    "overlay-unlocked": !t,
                },
                a,
            ),
            type: c,
            opacity: o,
            children: e,
        });
    }
    renderContainedWrapper(e) {
        return (0, i.jsx)("div", {
            className: et.k_,
            children: e,
        });
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return null != e.channel;
    }
    render() {
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: s, contained: l } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let o = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(J.A, {
                    draggableClassName: et.bl,
                    className: et.fB,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: l,
                    isPreviewingInGame: s,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart,
                }),
                this.renderContent(),
                e || s
                    ? null
                    : (0, i.jsx)("div", {
                          className: et.cB,
                          onMouseDown: this.resizeDragStart,
                      }),
            ],
        });
        return l ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o);
    }
    constructor(...e) {
        super(...e),
            en(this, "handlePin", () => {
                var e, t, n;
                let i = !this.props.pinned;
                f.A.track(q.HAw.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null == (e = this.props.channel) ? void 0 : e.guild_id,
                    channel_id: null == (t = this.props.channel) ? void 0 : t.id,
                    channel_type: null == (n = this.props.channel) ? void 0 : n.type,
                    widget_type: q.uss.TEXT,
                }),
                    f.A.setPinChat(i);
            }),
            en(this, "handleContextMenu", (e) => {
                let { channel: t, user: r } = this.props;
                null != t &&
                    null != r &&
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("97262"),
                            n.e("29534"),
                            n.e("39778"),
                            n.e("54266"),
                        ]).then(n.bind(n, 385913));
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
                t(I.P.MOVE, e.clientX, e.clientY);
            }),
            en(this, "resizeDragStart", (e) => {
                let { dragStart: t } = this.props;
                t(I.P.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
    }
}
function ec(e) {
    let { contained: t = !1 } = e,
        n = es(e, ["contained"]),
        r = (0, c.bG)([U.A], () => U.A.getGuildId()),
        s = (0, c.bG)([V.A], () => V.A.getChannelId(r)),
        l = (0, c.bG)([R.A], () => R.A.getChannel(s)),
        o = (0, c.bG)([K.Ay], () => K.Ay.getOverlayChatKeybind()),
        a = null != o ? (0, Y.dI)(o.shortcut, !0) : "]",
        [d, u, h] = (0, c.yK)([H.default], () => [
            H.default.getTextWidgetOpacity(),
            H.default.getActiveRegions(),
            !t && H.default.isPreviewingInGame(),
        ]),
        p = (0, c.bG)([M.A], () => M.A.getGuild(r)),
        f = (0, c.bG)([L.A], () => null != r && L.A.didAgree(r)),
        b = null != l && l.isPrivate() ? l.getRecipientId() : null,
        g = (0, c.bG)([D.A], () => (null != s ? D.A.getPendingReply(s) : void 0)),
        m = (0, c.bG)([z.default], () => (null != b ? z.default.getUser(b) : null)),
        { placeholder: O } = (0, y.A)({ channel: l });
    return null != l && null != p && q.kvI.GUILD_THREADS_ONLY.has(l.type)
        ? (0, i.jsx)(A.A, {})
        : (0, i.jsx)(
              ea,
              ei(
                  {
                      guild: p,
                      channel: l,
                      user: m,
                      opacity: d,
                      nsfwAgree: f,
                      chatKeybind: a,
                      activated: u.has(q.ajI.TEXT_WIDGET),
                      isPreviewingInGame: h,
                      pendingReply: g,
                      contained: t,
                      placeholder: O,
                      widget: q.uss.TEXT,
                  },
                  n,
              ),
          );
}
