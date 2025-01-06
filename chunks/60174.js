n.d(t, {
    X: function () {
        return R;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(954955),
    s = n.n(o),
    c = n(507274),
    u = n(481060),
    d = n(255963),
    m = n(466794),
    h = n(659215),
    f = n(222677),
    p = n(995774),
    _ = n(931651),
    g = n(594174),
    E = n(630388),
    C = n(74538),
    I = n(833803),
    x = n(566006),
    N = n(981631),
    v = n(185923),
    T = n(474936),
    S = n(388032),
    A = n(636804),
    b = n(952714);
function j(e, t, n) {
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
class R extends r.Component {
    render() {
        let { type: e, message: t, className: n, children: r, useChatFontScaling: l, tabIndex: o = 0 } = this.props,
            { isReactionPickerActive: s } = this.state,
            c = t.state === N.yb.SENDING,
            h = e === x.O.BURST;
        if (c || (0, E.yE)(t.flags, N.iLy.EPHEMERAL)) return null;
        let f = g.default.getCurrentUser(),
            p = (0, C.I5)(f),
            _ = h ? S.intl.string(S.t.Kfcszs) : S.intl.string(S.t.lfIHs7);
        !p && h && (_ = (0, i.jsx)(m.X, { tooltipText: S.intl.string(S.t.Kfcszs) }));
        let T = l ? b : A,
            { canShowImprovedReactionButton: j } = I.Z.getCurrentConfig({ location: 'ButtonAddReaction' }, { autoTrackExposure: !this.props.isForumToolbar }),
            R = j && !this.props.isForumToolbar,
            Z = {
                size: 'sm',
                color: 'currentColor',
                className: a()(T.icon, { [T.largeIcon]: R })
            };
        return (0, i.jsx)(u.Popout, {
            shouldShow: s,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: 'right',
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, i.jsx)(u.TooltipContainer, {
                    text: _,
                    color: u.TooltipColors.PRIMARY,
                    'aria-label': h ? S.intl.string(S.t.Kfcszs) : S.intl.string(S.t.lfIHs7),
                    tooltipClassName: T.__invalid_addReactionTooltip,
                    children: (0, i.jsxs)(u.Clickable, {
                        ...e,
                        tabIndex: o,
                        onClick: (e) => {
                            this.handleAddReactionClick(e);
                        },
                        onMouseEnter: () => (0, d.x)(v.qR.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, d.x)(v.qR.AddReactionPopoutFocused),
                        className: a()(
                            T.reactionBtn,
                            {
                                [T.active]: l,
                                [T.largeReactionBtn]: R
                            },
                            n
                        ),
                        children: [h ? (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(u.SuperReactionIcon, { ...Z }) }) : (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(u.ReactionIcon, { ...Z }) }), r]
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            j(this, 'state', { isReactionPickerActive: !1 }),
            j(this, 'onAddReaction', (e, t) => {
                if (null == e) return;
                let { channel: n, message: i, isForumToolbar: r } = this.props;
                (0, f.rU)(n.id, i.id, (0, p.g1)(e), r ? f.TW.FORUM_TOOLBAR : f.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            j(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            j(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let i = g.default.getCurrentUser();
                t === x.O.BURST &&
                    !(0, C.I5)(i) &&
                    (0, h.openBurstReactionsUpsellModal)({
                        analytics: {
                            type: T.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? N.ZY5.GUILD_CHANNEL : N.ZY5.DM_CHANNEL,
                            section: (0, p.s4)(n),
                            object: N.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle();
            }),
            j(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: r, message: l } = this.props,
                    a = {
                        openPopoutType: 'message_reaction_emoji_picker',
                        ...(n === x.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != r.getGuildId() ? N.ZY5.GUILD_CHANNEL : N.ZY5.DM_CHANNEL,
                            section: (0, p.s4)(r),
                            object: N.qAy.REACTION_RAIL
                        })
                    },
                    o = (0, i.jsx)(_.$, {
                        closePopout: t,
                        channel: r,
                        onSelectEmoji: (e, n, i) => {
                            this.onAddReaction(e, i), n && (i ? s()(t, 150)() : t());
                        },
                        analyticsOverride: a,
                        messageId: l.id
                    });
                return (0, i.jsx)(c.M.Consumer, {
                    children: (e) =>
                        e
                            ? (0, i.jsx)(u.Dialog, {
                                  'aria-label': S.intl.string(S.t['7Xqzdn']),
                                  children: o
                              })
                            : o
                });
            });
    }
}
