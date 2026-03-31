"use strict";
n.d(t, { A: () => ea });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(284009),
    o = n.n(r),
    d = n(311907),
    c = n(397927),
    u = n(442433),
    h = n(465532),
    p = n(843472),
    f = n(684013),
    _ = n(414798),
    A = n(147192),
    g = n(480870),
    m = n(264140),
    x = n(387462),
    E = n(667285),
    y = n(920437),
    v = n(355622),
    S = n(408018),
    C = n(20737),
    I = n(133343),
    N = n(692051),
    T = n(685603),
    b = n(451909),
    O = n(926262),
    j = n(371648),
    D = n(118517),
    R = n(853145),
    L = n(522556),
    w = n(734057),
    k = n(31717),
    M = n(517019),
    P = n(71393),
    G = n(320501),
    V = n(309010),
    U = n(967198),
    z = n(287809),
    H = n(532624),
    W = n(256415),
    B = n(203982),
    K = n(460350),
    F = n(350535),
    Y = n(401955),
    Z = n(799808),
    X = n(683484),
    J = n(855790),
    Q = n(672396),
    q = n(652215),
    $ = n(381941),
    ee = n(985018),
    et = n(34501);
let en = Q.Li.TOP;
class ei extends s.Component {
    textAreaRef = s.createRef();
    constructor(e) {
        super(e), k.A.addChangeListener(this.draftDidChange);
        const t = k.A.getDraft(e.channel.id, k.C.ChannelMessage);
        (this.state = { ...(0, S.ur)(t), focused: !1, contentWarningProps: null }),
            B._.subscribe(q.jej.TEXTAREA_FOCUS, this.focusInput),
            B._.subscribe(q.jej.TEXTAREA_BLUR, this.blurInput);
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props),
            (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
                this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        k.A.removeChangeListener(this.draftDidChange),
            B._.unsubscribe(q.jej.TEXTAREA_FOCUS, this.focusInput),
            B._.unsubscribe(q.jej.TEXTAREA_BLUR, this.blurInput);
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = k.A.getDraft(t.channel.id, k.C.ChannelMessage);
            n !== i && "" === i && e.setState((0, S.ur)(i));
        };
    })();
    handleTextareaKeyDown = (e) => {
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
    };
    handleTextareaChange = (e, t, n) => {
        let {
            channel: { id: i },
        } = this.props;
        h.A.changeDraft(i, this.state.textValue, k.C.ChannelMessage),
            "" !== t ? _.A.startTyping(i) : _.A.stopTyping(i),
            this.setState({ textValue: t, richValue: n });
    };
    handleSendMessage = (e) => {
        let { value: t } = e,
            { channel: n, pendingReply: i, isTemporarilyActive: s } = this.props;
        return 0 === t.length
            ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            : (0, K.i)({
                  openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                  type: v.oU.OVERLAY,
                  content: t,
                  channel: n,
              }).then((e) => {
                  let { valid: a, failureReason: l } = e;
                  if (!a)
                      return l === q.X8x.SLOWMODE_COOLDOWN
                          ? (B._.dispatch(q.jej.EMPHASIZE_SLOWMODE_COOLDOWN), { shouldClear: !1, shouldRefocus: !0 })
                          : { shouldClear: !1, shouldRefocus: !1 };
                  let r = p.A.getSendMessageOptionsForReply(i);
                  return (p.A.sendMessage(n.id, b.Ay.parse(n, t), !0, { ...r, location: $.Hx.OVERLAY }),
                  this.setState((0, S.N3)()),
                  (0, D.Jx)(n.id),
                  s)
                      ? (f.A.deactivateAllRegions(), { shouldClear: !1, shouldRefocus: !1 })
                      : { shouldClear: !0, shouldRefocus: !0 };
              });
    };
    focusInput = () => {
        this.setState({ focused: !0 });
    };
    blurInput = () => {
        this.setState({ focused: !1 });
    };
    renderAttachButton = (e, t) =>
        (0, i.jsx)(C.A, {
            className: t,
            channel: this.props.channel,
            draftType: k.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: (e) => this.handleTextareaChange(null, e, (0, S.x7)(e)),
            canOnlyUseTextCommands: e,
        });
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: s, textValue: a, contentWarningProps: l, richValue: r } = this.state,
            d = (0, i.jsx)(c.YNO, {
                targetElementRef: this.textAreaRef,
                position: "top",
                onRequestClose: () => {
                    l?.onCancel?.(), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != l,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        o()(
                            null != l,
                            "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                        ),
                        (0, i.jsx)(O.A, { onClose: t, ...l })
                    );
                },
                children: () =>
                    (0, i.jsx)(I.Ay, {
                        ...n,
                        ref: this.textAreaRef,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: v.oU.OVERLAY,
                        onFocus: () => this.setState({ focused: !0 }),
                        onBlur: () => this.setState({ focused: !1 }),
                        placeholder: t,
                        textValue: a,
                        richValue: r,
                        onSubmit: this.handleSendMessage,
                        onChange: this.handleTextareaChange,
                        onKeyDown: this.handleTextareaKeyDown,
                        focused: s,
                    }),
            });
        return e.isPrivate()
            ? (0, i.jsx)(E.A, { channel: e, children: d }, e.id)
            : (0, i.jsx)(y.A, { channel: e, children: d }, e.id);
    }
}
class es extends s.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        (0, Z.Mw)(e, this.props, this.shouldDisplay),
            null != t &&
                n &&
                !e.activated &&
                f.A.track(q.HAw.OVERLAY_UNLOCKED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }
    componentDidMount() {
        (0, Z.j_)(this.props, this.shouldDisplay());
    }
    handlePin = () => {
        let e = !this.props.pinned;
        f.A.track(q.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: q.uss.TEXT,
        }),
            f.A.setPinChat(e);
    };
    getOpacity() {
        let { locked: e, activated: t, opacity: n, isPreviewingInGame: i } = this.props;
        return (e && !t) || i ? n / 100 : t || !e ? Math.min(1, (n + 25) / 100) : J.q0;
    }
    renderContent() {
        let e,
            {
                channel: t,
                placeholder: n,
                nsfwAgree: a,
                guild: r,
                locked: o,
                activated: d,
                chatKeybind: c,
                pinned: u,
                isPreviewingInGame: h,
                dragging: p,
                pendingReply: f,
            } = this.props;
        if (null == t) return null;
        let _ = o || h,
            g = !a && null != t && t.isNSFW(),
            m = !_ || d;
        return (
            (e =
                g && null != r
                    ? (0, i.jsx)(L.A, { guild: r, channelId: t.id })
                    : (0, i.jsx)(
                          j.A,
                          {
                              channel: t,
                              className: et.Wk,
                              forceCompact: u,
                              showNewMessagesBar: !_,
                              scrollerClassName: u ? et.XG : void 0,
                              showingQuarantineBanner: !1,
                          },
                          t.id,
                      )),
            (0, i.jsx)(N.Y.Provider, {
                value: { disableInteractions: u && o && !d, disableAnimations: u && _ && !d },
                children: (0, i.jsxs)(s.Fragment, {
                    children: [
                        !o && !h && (0, i.jsx)(x.A, { channel: t, guild: r }),
                        (0, i.jsx)(J.Ay.Background, {
                            opacityOverride: o || h ? null : en,
                            children: (0, i.jsx)("div", {
                                className: l()(et.MJ, { [et.Id]: p, [et.$p]: u && o && !d }),
                                children: e,
                            }),
                        }),
                        g
                            ? null
                            : (0, i.jsx)("div", {
                                  children: m
                                      ? (0, i.jsx)(J.Ay.Background, {
                                            opacityOverride: o || h ? null : en,
                                            children: (0, i.jsxs)("div", {
                                                className: et.z8,
                                                children: [
                                                    (0, i.jsx)(ei, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: d,
                                                        pendingReply: f,
                                                    }),
                                                    (0, i.jsx)("div", {
                                                        className: et.V_,
                                                        children: (0, i.jsx)(A.Ay, {
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
                                            children: (0, i.jsx)(J.Ay.Background, {
                                                opacityOverride: Q.Li.LOWER,
                                                children: (0, i.jsx)("div", {
                                                    className: l()(et.ew, et.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != t.name && t.name.length > 0
                                                            ? ee.intl.formatToPlainString(ee.t["9TkYMO"], {
                                                                  keybind: c,
                                                                  channelName: t.isMultiUserDM()
                                                                      ? t.name
                                                                      : `#${t.name}`,
                                                              })
                                                            : ee.intl.formatToPlainString(ee.t["hxz/4E"], {
                                                                  keybind: c,
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
    handleContextMenu = (e) => {
        let { channel: t, user: s } = this.props;
        null != t &&
            null != s &&
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("22283")]).then(
                    n.bind(n, 385913),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: s, channelSelected: !0, channel: t });
            });
    };
    moveDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(T.P.MOVE, e.clientX, e.clientY);
    };
    resizeDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(T.P.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
    };
    renderWidgetWrapper(e) {
        let { locked: t, pinned: n, activated: s, isPreviewingInGame: a, opacity: r, className: o } = this.props,
            d = q.UVF.UNPINNED;
        s ? (d = q.UVF.IN_GAME_ACTIVE) : (n && t) || a ? (d = q.UVF.IN_GAME_TEXT) : n && (d = q.UVF.PINNED);
        let c = (t && !s) || a,
            u = n && (c || s),
            h = n && s,
            p = n && c && !s,
            f = (0, Y.A)(r);
        return (0, i.jsx)(J.Ay, {
            className: l()(
                f,
                { [et.yw]: !n, [et.CP]: n, [et.xt]: p, [et.iM]: u, [et.ip]: h, [et.dp]: n, "overlay-unlocked": !t },
                o,
            ),
            type: d,
            opacity: r,
            children: e,
        });
    }
    renderContainedWrapper(e) {
        return (0, i.jsx)("div", { className: et.k_, children: e });
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return null != e.channel;
    }
    render() {
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: a, contained: l } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let r = (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(X.A, {
                    draggableClassName: et.bl,
                    className: et.fB,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: l,
                    isPreviewingInGame: a,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart,
                }),
                this.renderContent(),
                e || a ? null : (0, i.jsx)("div", { className: et.cB, onMouseDown: this.resizeDragStart }),
            ],
        });
        return l ? this.renderContainedWrapper(r) : this.renderWidgetWrapper(r);
    }
}
function ea(e) {
    let { contained: t = !1, ...n } = e,
        s = (0, d.bG)([U.A], () => U.A.getGuildId()),
        a = (0, d.bG)([V.A], () => V.A.getChannelId(s)),
        l = (0, d.bG)([w.A], () => w.A.getChannel(a)),
        r = (0, d.bG)([H.Ay], () => H.Ay.getOverlayChatKeybind()),
        o = null != r ? (0, F.dI)(r.shortcut, !0) : "]",
        [c, u, h] = (0, d.yK)([W.default], () => [
            W.default.getTextWidgetOpacity(),
            W.default.getActiveRegions(),
            !t && W.default.isPreviewingInGame(),
        ]),
        p = (0, d.bG)([P.A], () => P.A.getGuild(s)),
        f = (0, d.bG)([M.A], () => null != s && M.A.didAgree(s)),
        _ = null != l && l.isPrivate() ? l.getRecipientId() : null,
        A = (0, d.bG)([R.A], () => (null != a ? R.A.getPendingReply(a) : void 0)),
        x = (0, d.bG)([z.default], () => (null != _ ? z.default.getUser(_) : null)),
        { placeholder: E } = (0, g.A)({ channel: l });
    return null != l && null != p && q.kvI.GUILD_THREADS_ONLY.has(l.type)
        ? (0, i.jsx)(m.A, {})
        : (0, i.jsx)(es, {
              guild: p,
              channel: l,
              user: x,
              opacity: c,
              nsfwAgree: f,
              chatKeybind: o,
              activated: u.has(q.ajI.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: A,
              contained: t,
              placeholder: E,
              widget: q.uss.TEXT,
              ...n,
          });
}
