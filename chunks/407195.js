"use strict";
n.d(t, { A: () => eo });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    d = n(311907),
    c = n(265872),
    u = n(442433),
    h = n(465532),
    p = n(843472),
    A = n(684013),
    f = n(414798),
    _ = n(147192),
    g = n(47167),
    m = n(480870),
    E = n(264140),
    x = n(387462),
    y = n(667285),
    v = n(920437),
    S = n(355622),
    C = n(408018),
    I = n(20737),
    N = n(133343),
    T = n(692051),
    b = n(685603),
    O = n(451909),
    D = n(926262),
    j = n(371648),
    L = n(118517),
    R = n(853145),
    w = n(522556),
    k = n(734057),
    M = n(31717),
    P = n(517019),
    G = n(71393),
    V = n(320501),
    U = n(994500),
    z = n(309010),
    H = n(967198),
    W = n(287809),
    K = n(532624),
    B = n(256415),
    F = n(203982),
    Y = n(460350),
    Z = n(350535),
    X = n(401955),
    J = n(799808),
    Q = n(683484),
    q = n(855790),
    $ = n(672396),
    ee = n(652215),
    et = n(381941),
    en = n(650583),
    ei = n(985018),
    es = n(463912);
let el = $.Li.TOP;
class ea extends s.Component {
    textAreaRef = s.createRef();
    constructor(e) {
        super(e), M.A.addChangeListener(this.draftDidChange);
        const t = M.A.getDraft(e.channel.id, M.C.ChannelMessage);
        (this.state = { ...(0, C.ur)(t), focused: !1, contentWarningProps: null }),
            F._.subscribe(ee.jej.TEXTAREA_FOCUS, this.focusInput),
            F._.subscribe(ee.jej.TEXTAREA_BLUR, this.blurInput);
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props),
            (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
                this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        M.A.removeChangeListener(this.draftDidChange),
            F._.unsubscribe(ee.jej.TEXTAREA_FOCUS, this.focusInput),
            F._.unsubscribe(ee.jej.TEXTAREA_BLUR, this.blurInput);
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = M.A.getDraft(t.channel.id, M.C.ChannelMessage);
            n !== i && "" === i && e.setState((0, C.ur)(i));
        };
    })();
    handleTextareaKeyDown = (e) => {
        if (
            e.key === en.dh.ARROW_UP &&
            !e.shiftKey &&
            !e.altKey &&
            !e.ctrlKey &&
            !e.metaKey &&
            0 === this.state.textValue.length
        ) {
            e.preventDefault();
            let { channel: t } = this.props,
                n = V.A.getLastEditableMessage(t.id);
            null != n && p.A.startEditMessageRecord(t.id, n);
        }
    };
    handleTextareaChange = (e, t, n) => {
        let {
            channel: { id: i },
        } = this.props;
        h.A.changeDraft(i, this.state.textValue, M.C.ChannelMessage),
            "" !== t ? f.A.startTyping(i) : f.A.stopTyping(i),
            this.setState({ textValue: t, richValue: n });
    };
    handleSendMessage = (e) => {
        let { value: t } = e,
            { channel: n, pendingReply: i, isTemporarilyActive: s } = this.props;
        return 0 === t.length
            ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            : (0, Y.i)({
                  openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                  type: S.oU.OVERLAY,
                  content: t,
                  channel: n,
              }).then((e) => {
                  let { valid: l, failureReason: a } = e;
                  if (!l)
                      return a === ee.X8x.SLOWMODE_COOLDOWN
                          ? (F._.dispatch(ee.jej.EMPHASIZE_SLOWMODE_COOLDOWN), { shouldClear: !1, shouldRefocus: !0 })
                          : { shouldClear: !1, shouldRefocus: !1 };
                  let r = p.A.getSendMessageOptionsForReply(i);
                  return (p.A.sendMessage(n.id, O.Ay.parse(n, t), !0, { ...r, location: et.Hx.OVERLAY }),
                  this.setState((0, C.N3)()),
                  (0, L.Jx)(n.id),
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
            draftType: M.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: (e) => this.handleTextareaChange(null, e, (0, C.x7)(e)),
            canOnlyUseTextCommands: e,
        });
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: s, textValue: l, contentWarningProps: a, richValue: r } = this.state,
            d = (0, i.jsx)(c.Y, {
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
                        (0, i.jsx)(D.A, { onClose: t, ...a })
                    );
                },
                children: () =>
                    (0, i.jsx)(N.Ay, {
                        ...n,
                        ref: this.textAreaRef,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: S.oU.OVERLAY,
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
            ? (0, i.jsx)(y.A, { channel: e, children: d }, e.id)
            : (0, i.jsx)(v.A, { channel: e, children: d }, e.id);
    }
}
class er extends s.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        (0, J.Mw)(e, this.props, this.shouldDisplay),
            null != t &&
                n &&
                !e.activated &&
                A.A.track(ee.HAw.OVERLAY_UNLOCKED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }
    componentDidMount() {
        (0, J.j_)(this.props, this.shouldDisplay());
    }
    handlePin = () => {
        let e = !this.props.pinned;
        A.A.track(ee.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: ee.uss.TEXT,
        }),
            A.A.setPinChat(e);
    };
    getOpacity() {
        let { locked: e, activated: t, opacity: n, isPreviewingInGame: i } = this.props;
        return (e && !t) || i ? n / 100 : t || !e ? Math.min(1, (n + 25) / 100) : q.q0;
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
            m = (0, g.m1)(t, W.default, U.A),
            E = !l && null != t && t.isNSFW(),
            y = !f || d;
        return (
            (e =
                E && null != r
                    ? (0, i.jsx)(w.A, { guild: r, channelId: t.id })
                    : (0, i.jsx)(
                          j.A,
                          {
                              channel: t,
                              className: es.Wk,
                              forceCompact: u,
                              showNewMessagesBar: !f,
                              scrollerClassName: u ? es.XG : void 0,
                              showingQuarantineBanner: !1,
                          },
                          t.id,
                      )),
            (0, i.jsx)(T.Y.Provider, {
                value: { disableInteractions: u && o && !d, disableAnimations: u && f && !d },
                children: (0, i.jsxs)(s.Fragment, {
                    children: [
                        !o && !h && (0, i.jsx)(x.A, { channel: t, guild: r }),
                        (0, i.jsx)(q.Ay.Background, {
                            opacityOverride: o || h ? null : el,
                            children: (0, i.jsx)("div", {
                                className: a()(es.MJ, { [es.Id]: p, [es.$p]: u && o && !d }),
                                children: e,
                            }),
                        }),
                        E
                            ? null
                            : (0, i.jsx)("div", {
                                  children: y
                                      ? (0, i.jsx)(q.Ay.Background, {
                                            opacityOverride: o || h ? null : el,
                                            children: (0, i.jsxs)("div", {
                                                className: es.z8,
                                                children: [
                                                    (0, i.jsx)(ea, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: d,
                                                        pendingReply: A,
                                                    }),
                                                    (0, i.jsx)("div", {
                                                        className: es.V_,
                                                        children: (0, i.jsx)(_.Ay, {
                                                            channel: t,
                                                            className: es.IW,
                                                            isInTextChannel: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, i.jsx)("div", {
                                            className: es.Zl,
                                            children: (0, i.jsx)(q.Ay.Background, {
                                                opacityOverride: $.Li.LOWER,
                                                children: (0, i.jsx)("div", {
                                                    className: a()(es.ew, es.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != m && m.length > 0
                                                            ? ei.intl.formatToPlainString(ei.t["9TkYMO"], {
                                                                  keybind: c,
                                                                  channelName: t.isMultiUserDM() ? m : `#${m}`,
                                                              })
                                                            : ei.intl.formatToPlainString(ei.t["hxz/4E"], {
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
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("97169")]).then(
                    n.bind(n, 385913),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: s, channelSelected: !0, channel: t });
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
        let { locked: t, pinned: n, activated: s, isPreviewingInGame: l, opacity: r, className: o } = this.props,
            d = ee.UVF.UNPINNED;
        s ? (d = ee.UVF.IN_GAME_ACTIVE) : (n && t) || l ? (d = ee.UVF.IN_GAME_TEXT) : n && (d = ee.UVF.PINNED);
        let c = (t && !s) || l,
            u = n && (c || s),
            h = n && s,
            p = n && c && !s,
            A = (0, X.A)(r);
        return (0, i.jsx)(q.Ay, {
            className: a()(
                A,
                { [es.yw]: !n, [es.CP]: n, [es.xt]: p, [es.iM]: u, [es.ip]: h, [es.dp]: n, "overlay-unlocked": !t },
                o,
            ),
            type: d,
            opacity: r,
            children: e,
        });
    }
    renderContainedWrapper(e) {
        return (0, i.jsx)("div", { className: es.k_, children: e });
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
                (0, i.jsx)(Q.A, {
                    draggableClassName: es.bl,
                    className: es.fB,
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
                e || l ? null : (0, i.jsx)("div", { className: es.cB, onMouseDown: this.resizeDragStart }),
            ],
        });
        return a ? this.renderContainedWrapper(r) : this.renderWidgetWrapper(r);
    }
}
function eo(e) {
    let { contained: t = !1, ...n } = e,
        s = (0, d.bG)([H.A], () => H.A.getGuildId()),
        l = (0, d.bG)([z.A], () => z.A.getChannelId(s)),
        a = (0, d.bG)([k.A], () => k.A.getChannel(l)),
        r = (0, d.bG)([K.Ay], () => K.Ay.getOverlayChatKeybind()),
        o = null != r ? (0, Z.dI)(r.shortcut, !0) : "]",
        [c, u, h] = (0, d.yK)([B.default], () => [
            B.default.getTextWidgetOpacity(),
            B.default.getActiveRegions(),
            !t && B.default.isPreviewingInGame(),
        ]),
        p = (0, d.bG)([G.A], () => G.A.getGuild(s)),
        A = (0, d.bG)([P.A], () => null != s && P.A.didAgree(s)),
        f = null != a && a.isPrivate() ? a.getRecipientId() : null,
        _ = (0, d.bG)([R.A], () => (null != l ? R.A.getPendingReply(l) : void 0)),
        g = (0, d.bG)([W.default], () => (null != f ? W.default.getUser(f) : null)),
        { placeholder: x } = (0, m.A)({ channel: a });
    return null != a && null != p && ee.kvI.GUILD_THREADS_ONLY.has(a.type)
        ? (0, i.jsx)(E.A, {})
        : (0, i.jsx)(er, {
              guild: p,
              channel: a,
              user: g,
              opacity: c,
              nsfwAgree: A,
              chatKeybind: o,
              activated: u.has(ee.ajI.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: _,
              contained: t,
              placeholder: x,
              widget: ee.uss.TEXT,
              ...n,
          });
}
