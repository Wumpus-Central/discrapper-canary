"use strict";
n.d(t, { A: () => el });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    d = n(311907),
    c = n(397927),
    u = n(442433),
    h = n(465532),
    p = n(843472),
    A = n(684013),
    f = n(414798),
    g = n(147192),
    _ = n(480870),
    m = n(264140),
    E = n(387462),
    x = n(667285),
    y = n(920437),
    v = n(355622),
    S = n(408018),
    I = n(20737),
    C = n(133343),
    N = n(692051),
    T = n(685603),
    O = n(451909),
    b = n(926262),
    D = n(371648),
    j = n(118517),
    R = n(853145),
    w = n(522556),
    L = n(734057),
    k = n(31717),
    M = n(517019),
    P = n(71393),
    G = n(320501),
    U = n(309010),
    V = n(967198),
    z = n(287809),
    H = n(532624),
    W = n(256415),
    K = n(203982),
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
let en = Q.Li.TOP;
class ei extends s.Component {
    textAreaRef = s.createRef();
    constructor(e) {
        super(e), k.A.addChangeListener(this.draftDidChange);
        const t = k.A.getDraft(e.channel.id, k.C.ChannelMessage);
        (this.state = { ...(0, S.ur)(t), focused: !1, contentWarningProps: null }),
            K._.subscribe(q.jej.TEXTAREA_FOCUS, this.focusInput),
            K._.subscribe(q.jej.TEXTAREA_BLUR, this.blurInput);
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props),
            (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
                this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        k.A.removeChangeListener(this.draftDidChange),
            K._.unsubscribe(q.jej.TEXTAREA_FOCUS, this.focusInput),
            K._.unsubscribe(q.jej.TEXTAREA_BLUR, this.blurInput);
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
            "" !== t ? f.A.startTyping(i) : f.A.stopTyping(i),
            this.setState({ textValue: t, richValue: n });
    };
    handleSendMessage = (e) => {
        let { value: t } = e,
            { channel: n, pendingReply: i, isTemporarilyActive: s } = this.props;
        return 0 === t.length
            ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            : (0, B.i)({
                  openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                  type: v.oU.OVERLAY,
                  content: t,
                  channel: n,
              }).then((e) => {
                  let { valid: l, failureReason: a } = e;
                  if (!l)
                      return a === q.X8x.SLOWMODE_COOLDOWN
                          ? (K._.dispatch(q.jej.EMPHASIZE_SLOWMODE_COOLDOWN), { shouldClear: !1, shouldRefocus: !0 })
                          : { shouldClear: !1, shouldRefocus: !1 };
                  let r = p.A.getSendMessageOptionsForReply(i);
                  return (p.A.sendMessage(n.id, O.Ay.parse(n, t), !0, { ...r, location: $.Hx.OVERLAY }),
                  this.setState((0, S.N3)()),
                  (0, j.Jx)(n.id),
                  s)
                      ? (A.A.deactivateAllRegions(), { shouldClear: !1, shouldRefocus: !1 })
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
        (0, i.jsx)(I.A, {
            className: t,
            channel: this.props.channel,
            draftType: k.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: (e) => this.handleTextareaChange(null, e, (0, S.x7)(e)),
            canOnlyUseTextCommands: e,
        });
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: s, textValue: l, contentWarningProps: a, richValue: r } = this.state,
            d = (0, i.jsx)(c.YNO, {
                targetElementRef: this.textAreaRef,
                position: "top",
                onRequestClose: () => {
                    a?.onCancel?.(), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != a,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        o()(
                            null != a,
                            "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                        ),
                        (0, i.jsx)(b.A, { onClose: t, ...a })
                    );
                },
                children: () =>
                    (0, i.jsx)(C.Ay, {
                        ...n,
                        ref: this.textAreaRef,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: v.oU.OVERLAY,
                        onFocus: () => this.setState({ focused: !0 }),
                        onBlur: () => this.setState({ focused: !1 }),
                        placeholder: t,
                        textValue: l,
                        richValue: r,
                        onSubmit: this.handleSendMessage,
                        onChange: this.handleTextareaChange,
                        onKeyDown: this.handleTextareaKeyDown,
                        focused: s,
                    }),
            });
        return e.isPrivate()
            ? (0, i.jsx)(x.A, { channel: e, children: d }, e.id)
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
                A.A.track(q.HAw.OVERLAY_UNLOCKED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }
    componentDidMount() {
        (0, Z.j_)(this.props, this.shouldDisplay());
    }
    handlePin = () => {
        let e = !this.props.pinned;
        A.A.track(q.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: q.uss.TEXT,
        }),
            A.A.setPinChat(e);
    };
    getOpacity() {
        let { locked: e, activated: t, opacity: n, isPreviewingInGame: i } = this.props;
        return (e && !t) || i ? n / 100 : t || !e ? Math.min(1, (n + 25) / 100) : X.q0;
    }
    renderContent() {
        let e,
            {
                channel: t,
                placeholder: n,
                nsfwAgree: l,
                guild: r,
                locked: o,
                activated: d,
                chatKeybind: c,
                pinned: u,
                isPreviewingInGame: h,
                dragging: p,
                pendingReply: A,
            } = this.props;
        if (null == t) return null;
        let f = o || h,
            _ = !l && null != t && t.isNSFW(),
            m = !f || d;
        return (
            (e =
                _ && null != r
                    ? (0, i.jsx)(w.A, { guild: r, channelId: t.id })
                    : (0, i.jsx)(
                          D.A,
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
            (0, i.jsx)(N.Y.Provider, {
                value: { disableInteractions: u && o && !d, disableAnimations: u && f && !d },
                children: (0, i.jsxs)(s.Fragment, {
                    children: [
                        !o && !h && (0, i.jsx)(E.A, { channel: t, guild: r }),
                        (0, i.jsx)(X.Ay.Background, {
                            opacityOverride: o || h ? null : en,
                            children: (0, i.jsx)("div", {
                                className: a()(et.MJ, { [et.Id]: p, [et.$p]: u && o && !d }),
                                children: e,
                            }),
                        }),
                        _
                            ? null
                            : (0, i.jsx)("div", {
                                  children: m
                                      ? (0, i.jsx)(X.Ay.Background, {
                                            opacityOverride: o || h ? null : en,
                                            children: (0, i.jsxs)("div", {
                                                className: et.z8,
                                                children: [
                                                    (0, i.jsx)(ei, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: d,
                                                        pendingReply: A,
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
                                                    className: a()(et.ew, et.__invalid_mediumBackgroundOpacity),
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
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("54266")]).then(
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
        let { locked: t, pinned: n, activated: s, isPreviewingInGame: l, opacity: r, className: o } = this.props,
            d = q.UVF.UNPINNED;
        s ? (d = q.UVF.IN_GAME_ACTIVE) : (n && t) || l ? (d = q.UVF.IN_GAME_TEXT) : n && (d = q.UVF.PINNED);
        let c = (t && !s) || l,
            u = n && (c || s),
            h = n && s,
            p = n && c && !s,
            A = (0, F.A)(r);
        return (0, i.jsx)(X.Ay, {
            className: a()(
                A,
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
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: l, contained: a } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let r = (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(J.A, {
                    draggableClassName: et.bl,
                    className: et.fB,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: a,
                    isPreviewingInGame: l,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart,
                }),
                this.renderContent(),
                e || l ? null : (0, i.jsx)("div", { className: et.cB, onMouseDown: this.resizeDragStart }),
            ],
        });
        return a ? this.renderContainedWrapper(r) : this.renderWidgetWrapper(r);
    }
}
function el(e) {
    let { contained: t = !1, ...n } = e,
        s = (0, d.bG)([V.A], () => V.A.getGuildId()),
        l = (0, d.bG)([U.A], () => U.A.getChannelId(s)),
        a = (0, d.bG)([L.A], () => L.A.getChannel(l)),
        r = (0, d.bG)([H.Ay], () => H.Ay.getOverlayChatKeybind()),
        o = null != r ? (0, Y.dI)(r.shortcut, !0) : "]",
        [c, u, h] = (0, d.yK)([W.default], () => [
            W.default.getTextWidgetOpacity(),
            W.default.getActiveRegions(),
            !t && W.default.isPreviewingInGame(),
        ]),
        p = (0, d.bG)([P.A], () => P.A.getGuild(s)),
        A = (0, d.bG)([M.A], () => null != s && M.A.didAgree(s)),
        f = null != a && a.isPrivate() ? a.getRecipientId() : null,
        g = (0, d.bG)([R.A], () => (null != l ? R.A.getPendingReply(l) : void 0)),
        E = (0, d.bG)([z.default], () => (null != f ? z.default.getUser(f) : null)),
        { placeholder: x } = (0, _.A)({ channel: a });
    return null != a && null != p && q.kvI.GUILD_THREADS_ONLY.has(a.type)
        ? (0, i.jsx)(m.A, {})
        : (0, i.jsx)(es, {
              guild: p,
              channel: a,
              user: E,
              opacity: c,
              nsfwAgree: A,
              chatKeybind: o,
              activated: u.has(q.ajI.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: g,
              contained: t,
              placeholder: x,
              widget: q.uss.TEXT,
              ...n,
          });
}
