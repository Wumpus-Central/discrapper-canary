n.d(t, { X: () => y }), n(789020), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(954955),
    o = n.n(s),
    c = n(507274),
    d = n(481060),
    u = n(255963),
    m = n(466794),
    _ = n(659215),
    h = n(222677),
    p = n(995774),
    g = n(931651),
    f = n(594174),
    x = n(630388),
    C = n(74538),
    v = n(833803),
    E = n(566006),
    I = n(981631),
    N = n(185923),
    S = n(474936),
    T = n(388032),
    b = n(470528),
    A = n(945384);
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
class y extends l.Component {
    render() {
        let { type: e, message: t, className: n, children: l, useChatFontScaling: a, tabIndex: s = 0 } = this.props,
            { isReactionPickerActive: o } = this.state,
            c = t.state === I.yb.SENDING,
            _ = e === E.O.BURST;
        if (c || (0, x.yE)(t.flags, I.iLy.EPHEMERAL)) return null;
        let h = f.default.getCurrentUser(),
            p = (0, C.I5)(h),
            g = _ ? T.intl.string(T.t.Kfcszs) : T.intl.string(T.t.lfIHs7);
        !p && _ && (g = (0, i.jsx)(m.X, { tooltipText: T.intl.string(T.t.Kfcszs) }));
        let S = a ? A : b,
            { canShowImprovedReactionButton: j } = v.Z.getCurrentConfig({ location: 'ButtonAddReaction' }, { autoTrackExposure: !this.props.isForumToolbar }),
            y = {
                size: 'sm',
                color: 'currentColor',
                className: r()(S.icon, { [S.largeIcon]: j })
            };
        return (0, i.jsx)(d.yRy, {
            shouldShow: o,
            onRequestClose: this.handleReactionPickerToggle,
            renderPopout: this.renderReactionPopout,
            position: 'right',
            children: (e, t) => {
                let { isShown: a } = t;
                return (0, i.jsx)(d.DY3, {
                    text: g,
                    color: d.FGA.PRIMARY,
                    'aria-label': _ ? T.intl.string(T.t.Kfcszs) : T.intl.string(T.t.lfIHs7),
                    tooltipClassName: S.__invalid_addReactionTooltip,
                    children: (0, i.jsxs)(d.P3F, {
                        ...e,
                        tabIndex: s,
                        onClick: (e) => {
                            this.handleAddReactionClick(e);
                        },
                        onMouseEnter: () => (0, u.x)(N.qR.AddReactionPopoutMouseEntered),
                        onFocus: () => (0, u.x)(N.qR.AddReactionPopoutFocused),
                        className: r()(
                            S.reactionBtn,
                            {
                                [S.active]: a,
                                [S.largeReactionBtn]: j
                            },
                            n
                        ),
                        children: [_ ? (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(d.Pt5, { ...y }) }) : (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(d.EO4, { ...y }) }), l]
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
                let { channel: n, message: i, isForumToolbar: l } = this.props;
                (0, h.rU)(n.id, i.id, (0, p.g1)(e), l ? h.TW.FORUM_TOOLBAR : h.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            j(this, 'handleReactionPickerToggle', () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            j(this, 'handleAddReactionClick', (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let i = f.default.getCurrentUser();
                t !== E.O.BURST ||
                    (0, C.I5)(i) ||
                    (0, _.m)({
                        analytics: {
                            type: S.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? I.ZY5.GUILD_CHANNEL : I.ZY5.DM_CHANNEL,
                            section: (0, p.s4)(n),
                            object: I.qAy.INLINE_REACTION_PICKER_UPSELL
                        }
                    }),
                    this.handleReactionPickerToggle();
            }),
            j(this, 'renderReactionPopout', (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: l, message: a } = this.props,
                    r = {
                        openPopoutType: 'message_reaction_emoji_picker',
                        ...(n === E.O.BURST && {
                            openPopoutType: 'message_super_reaction_emoji_picker',
                            page: null != l.getGuildId() ? I.ZY5.GUILD_CHANNEL : I.ZY5.DM_CHANNEL,
                            section: (0, p.s4)(l),
                            object: I.qAy.REACTION_RAIL
                        })
                    },
                    s = (0, i.jsx)(g.$, {
                        closePopout: t,
                        channel: l,
                        onSelectEmoji: (e, n, i) => {
                            this.onAddReaction(e, i), n && (i ? o()(t, 150)() : t());
                        },
                        analyticsOverride: r,
                        messageId: a.id
                    });
                return (0, i.jsx)(c.M.Consumer, {
                    children: (e) =>
                        e
                            ? (0, i.jsx)(d.VqE, {
                                  'aria-label': T.intl.string(T.t['7Xqzdn']),
                                  children: s
                              })
                            : s
                });
            });
    }
}
