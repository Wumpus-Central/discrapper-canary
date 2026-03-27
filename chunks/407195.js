"use strict";
i.d(t, { A: () => ea });
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(284009),
    o = i.n(r),
    d = i(311907),
    c = i(397927),
    u = i(442433),
    h = i(465532),
    _ = i(843472),
    p = i(684013),
    f = i(414798),
    m = i(147192),
    g = i(480870),
    A = i(264140),
    x = i(387462),
    v = i(667285),
    y = i(920437),
    E = i(355622),
    I = i(408018),
    S = i(20737),
    C = i(133343),
    N = i(692051),
    b = i(685603),
    T = i(451909),
    O = i(926262),
    L = i(371648),
    j = i(118517),
    w = i(853145),
    D = i(522556),
    R = i(734057),
    k = i(31717),
    M = i(517019),
    P = i(71393),
    G = i(320501),
    V = i(309010),
    U = i(967198),
    z = i(287809),
    H = i(532624),
    W = i(256415),
    B = i(203982),
    F = i(460350),
    K = i(350535),
    Y = i(401955),
    Z = i(799808),
    X = i(683484),
    J = i(855790),
    Q = i(672396),
    q = i(652215),
    $ = i(381941),
    ee = i(985018),
    et = i(34501);
let ei = Q.Li.TOP;
class en extends s.Component {
    textAreaRef = s.createRef();
    constructor(e) {
        super(e), k.A.addChangeListener(this.draftDidChange);
        const t = k.A.getDraft(e.channel.id, k.C.ChannelMessage);
        (this.state = { ...(0, I.ur)(t), focused: !1, contentWarningProps: null }),
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
                { textValue: i } = e.state,
                n = k.A.getDraft(t.channel.id, k.C.ChannelMessage);
            i !== n && "" === n && e.setState((0, I.ur)(n));
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
                i = G.A.getLastEditableMessage(t.id);
            null != i && _.A.startEditMessageRecord(t.id, i);
        }
    };
    handleTextareaChange = (e, t, i) => {
        let {
            channel: { id: n },
        } = this.props;
        h.A.changeDraft(n, this.state.textValue, k.C.ChannelMessage),
            "" !== t ? f.A.startTyping(n) : f.A.stopTyping(n),
            this.setState({ textValue: t, richValue: i });
    };
    handleSendMessage = (e) => {
        let { value: t } = e,
            { channel: i, pendingReply: n, isTemporarilyActive: s } = this.props;
        return 0 === t.length
            ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            : (0, F.i)({
                  openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                  type: E.oU.OVERLAY,
                  content: t,
                  channel: i,
              }).then((e) => {
                  let { valid: a, failureReason: l } = e;
                  if (!a)
                      return l === q.X8x.SLOWMODE_COOLDOWN
                          ? (B._.dispatch(q.jej.EMPHASIZE_SLOWMODE_COOLDOWN), { shouldClear: !1, shouldRefocus: !0 })
                          : { shouldClear: !1, shouldRefocus: !1 };
                  let r = _.A.getSendMessageOptionsForReply(n);
                  return (_.A.sendMessage(i.id, T.Ay.parse(i, t), !0, { ...r, location: $.Hx.OVERLAY }),
                  this.setState((0, I.N3)()),
                  (0, j.Jx)(i.id),
                  s)
                      ? (p.A.deactivateAllRegions(), { shouldClear: !1, shouldRefocus: !1 })
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
        (0, n.jsx)(S.A, {
            className: t,
            channel: this.props.channel,
            draftType: k.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: (e) => this.handleTextareaChange(null, e, (0, I.x7)(e)),
            canOnlyUseTextCommands: e,
        });
    render() {
        let { channel: e, placeholder: t, ...i } = this.props,
            { focused: s, textValue: a, contentWarningProps: l, richValue: r } = this.state,
            d = (0, n.jsx)(c.YNO, {
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
                        (0, n.jsx)(O.A, { onClose: t, ...l })
                    );
                },
                children: () =>
                    (0, n.jsx)(C.Ay, {
                        ...i,
                        ref: this.textAreaRef,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: E.oU.OVERLAY,
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
            ? (0, n.jsx)(v.A, { channel: e, children: d }, e.id)
            : (0, n.jsx)(y.A, { channel: e, children: d }, e.id);
    }
}
class es extends s.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: i } = this.props;
        (0, Z.Mw)(e, this.props, this.shouldDisplay),
            null != t &&
                i &&
                !e.activated &&
                p.A.track(q.HAw.OVERLAY_UNLOCKED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }
    componentDidMount() {
        (0, Z.j_)(this.props, this.shouldDisplay());
    }
    handlePin = () => {
        let e = !this.props.pinned;
        p.A.track(q.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: q.uss.TEXT,
        }),
            p.A.setPinChat(e);
    };
    getOpacity() {
        let { locked: e, activated: t, opacity: i, isPreviewingInGame: n } = this.props;
        return (e && !t) || n ? i / 100 : t || !e ? Math.min(1, (i + 25) / 100) : J.q0;
    }
    renderContent() {
        let e,
            {
                channel: t,
                placeholder: i,
                nsfwAgree: a,
                guild: r,
                locked: o,
                activated: d,
                chatKeybind: c,
                pinned: u,
                isPreviewingInGame: h,
                dragging: _,
                pendingReply: p,
            } = this.props;
        if (null == t) return null;
        let f = o || h,
            g = !a && null != t && t.isNSFW(),
            A = !f || d;
        return (
            (e =
                g && null != r
                    ? (0, n.jsx)(D.A, { guild: r, channelId: t.id })
                    : (0, n.jsx)(
                          L.A,
                          {
                              channel: t,
                              className: et.Wk,
                              forceCompact: u,
                              showNewMessagesBar: !f,
                              scrollerClassName: u ? et.XG : void 0,
                              showingQuarantineBanner: !1,
                          },
                          t.id,
                      )),
            (0, n.jsx)(N.Y.Provider, {
                value: { disableInteractions: u && o && !d, disableAnimations: u && f && !d },
                children: (0, n.jsxs)(s.Fragment, {
                    children: [
                        !o && !h && (0, n.jsx)(x.A, { channel: t, guild: r }),
                        (0, n.jsx)(J.Ay.Background, {
                            opacityOverride: o || h ? null : ei,
                            children: (0, n.jsx)("div", {
                                className: l()(et.MJ, { [et.Id]: _, [et.$p]: u && o && !d }),
                                children: e,
                            }),
                        }),
                        g
                            ? null
                            : (0, n.jsx)("div", {
                                  children: A
                                      ? (0, n.jsx)(J.Ay.Background, {
                                            opacityOverride: o || h ? null : ei,
                                            children: (0, n.jsxs)("div", {
                                                className: et.z8,
                                                children: [
                                                    (0, n.jsx)(en, {
                                                        channel: t,
                                                        placeholder: i,
                                                        isTemporarilyActive: d,
                                                        pendingReply: p,
                                                    }),
                                                    (0, n.jsx)("div", {
                                                        className: et.V_,
                                                        children: (0, n.jsx)(m.Ay, {
                                                            channel: t,
                                                            className: et.IW,
                                                            isInTextChannel: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, n.jsx)("div", {
                                            className: et.Zl,
                                            children: (0, n.jsx)(J.Ay.Background, {
                                                opacityOverride: Q.Li.LOWER,
                                                children: (0, n.jsx)("div", {
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
                let { default: e } = await Promise.all([i.e("97262"), i.e("42128"), i.e("39778"), i.e("22283")]).then(
                    i.bind(i, 385913),
                );
                return (i) => (0, n.jsx)(e, { ...i, user: s, channelSelected: !0, channel: t });
            });
    };
    moveDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(b.P.MOVE, e.clientX, e.clientY);
    };
    resizeDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(b.P.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
    };
    renderWidgetWrapper(e) {
        let { locked: t, pinned: i, activated: s, isPreviewingInGame: a, opacity: r, className: o } = this.props,
            d = q.UVF.UNPINNED;
        s ? (d = q.UVF.IN_GAME_ACTIVE) : (i && t) || a ? (d = q.UVF.IN_GAME_TEXT) : i && (d = q.UVF.PINNED);
        let c = (t && !s) || a,
            u = i && (c || s),
            h = i && s,
            _ = i && c && !s,
            p = (0, Y.A)(r);
        return (0, n.jsx)(J.Ay, {
            className: l()(
                p,
                { [et.yw]: !i, [et.CP]: i, [et.xt]: _, [et.iM]: u, [et.ip]: h, [et.dp]: i, "overlay-unlocked": !t },
                o,
            ),
            type: d,
            opacity: r,
            children: e,
        });
    }
    renderContainedWrapper(e) {
        return (0, n.jsx)("div", { className: et.k_, children: e });
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return null != e.channel;
    }
    render() {
        let { locked: e, channel: t, pinned: i, isPreviewingInGame: a, contained: l } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let r = (0, n.jsxs)(s.Fragment, {
            children: [
                (0, n.jsx)(X.A, {
                    draggableClassName: et.bl,
                    className: et.fB,
                    channel: t,
                    locked: e,
                    pinned: i,
                    disableDragIndicator: l,
                    isPreviewingInGame: a,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart,
                }),
                this.renderContent(),
                e || a ? null : (0, n.jsx)("div", { className: et.cB, onMouseDown: this.resizeDragStart }),
            ],
        });
        return l ? this.renderContainedWrapper(r) : this.renderWidgetWrapper(r);
    }
}
function ea(e) {
    let { contained: t = !1, ...i } = e,
        s = (0, d.bG)([U.A], () => U.A.getGuildId()),
        a = (0, d.bG)([V.A], () => V.A.getChannelId(s)),
        l = (0, d.bG)([R.A], () => R.A.getChannel(a)),
        r = (0, d.bG)([H.Ay], () => H.Ay.getOverlayChatKeybind()),
        o = null != r ? (0, K.dI)(r.shortcut, !0) : "]",
        [c, u, h] = (0, d.yK)([W.default], () => [
            W.default.getTextWidgetOpacity(),
            W.default.getActiveRegions(),
            !t && W.default.isPreviewingInGame(),
        ]),
        _ = (0, d.bG)([P.A], () => P.A.getGuild(s)),
        p = (0, d.bG)([M.A], () => null != s && M.A.didAgree(s)),
        f = null != l && l.isPrivate() ? l.getRecipientId() : null,
        m = (0, d.bG)([w.A], () => (null != a ? w.A.getPendingReply(a) : void 0)),
        x = (0, d.bG)([z.default], () => (null != f ? z.default.getUser(f) : null)),
        { placeholder: v } = (0, g.A)({ channel: l });
    return null != l && null != _ && q.kvI.GUILD_THREADS_ONLY.has(l.type)
        ? (0, n.jsx)(A.A, {})
        : (0, n.jsx)(es, {
              guild: _,
              channel: l,
              user: x,
              opacity: c,
              nsfwAgree: p,
              chatKeybind: o,
              activated: u.has(q.ajI.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: m,
              contained: t,
              placeholder: v,
              widget: q.uss.TEXT,
              ...i,
          });
}
