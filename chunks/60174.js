n.d(t, { X: () => N }), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(954955),
    s = n.n(a),
    c = n(507274),
    u = n(481060),
    d = n(255963),
    p = n(387188),
    m = n(466794),
    f = n(659215),
    g = n(222677),
    _ = n(995774),
    h = n(931651),
    b = n(594174),
    E = n(630388),
    C = n(74538),
    O = n(566006),
    v = n(981631),
    y = n(185923),
    x = n(474936),
    j = n(388032),
    I = n(127947),
    S = n(893973);
function T(e, t, n) {
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
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
class N extends i.Component {
    render() {
        let { type: e, message: t, className: n, children: i, useChatFontScaling: l, tabIndex: a = 0 } = this.props,
            { isReactionPickerActive: s } = this.state,
            c = t.state === v.yb.SENDING,
            f = e === O.O.BURST;
        if (c || (0, E.yE)(t.flags, v.iLy.EPHEMERAL)) return null;
        let g = b.default.getCurrentUser(),
            _ = (0, C.I5)(g),
            h = f ? j.intl.string(j.t.Kfcszs) : j.intl.string(j.t.lfIHs7);
        !_ && f && (h = (0, r.jsx)(m.X, { tooltipText: j.intl.string(j.t.Kfcszs) }));
        let x = l ? S : I,
            T = {
                size: "sm",
                color: "currentColor",
                className: x.icon,
            };
        return t.type === v.uaV.EMOJI_ADDED && 0 === t.reactions.length
            ? (0, r.jsx)(p.e, {
                  message: t,
                  className: o()(x.reactionBtn, n),
              })
            : (0, r.jsx)(u.yRy, {
                  targetElementRef: this.ref,
                  shouldShow: s,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: "right",
                  children: (e, t) => {
                      var l, s;
                      let { isShown: c } = t;
                      return (0, r.jsx)(u.DY3, {
                          text: h,
                          color: u.FGA.PRIMARY,
                          "aria-label": f ? j.intl.string(j.t.Kfcszs) : j.intl.string(j.t.lfIHs7),
                          tooltipClassName: x.__invalid_addReactionTooltip,
                          children: (0, r.jsxs)(
                              u.P3F,
                              ((l = P({}, e)),
                              (s = s =
                                  {
                                      innerRef: this.ref,
                                      tabIndex: a,
                                      onClick: (e) => {
                                          this.handleAddReactionClick(e);
                                      },
                                      onMouseEnter: () => (0, d.x)(y.qR.AddReactionPopoutMouseEntered),
                                      onFocus: () => (0, d.x)(y.qR.AddReactionPopoutFocused),
                                      className: o()(x.reactionBtn, { [x.active]: c }, n),
                                      children: [f ? (0, r.jsx)(u.Pt5, P({}, T)) : (0, r.jsx)(u.EO4, P({}, T)), i],
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(s)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                                    }),
                              l),
                          ),
                      });
                  },
              });
    }
    constructor(...e) {
        super(...e),
            T(this, "state", { isReactionPickerActive: !1 }),
            T(this, "ref", i.createRef()),
            T(this, "onAddReaction", (e, t) => {
                if (null == e) return;
                let { channel: n, message: r, isForumToolbar: i } = this.props;
                (0, g.rU)(n.id, r.id, (0, _.g1)(e), i ? g.TW.FORUM_TOOLBAR : g.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            T(this, "handleReactionPickerToggle", () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            T(this, "handleAddReactionClick", (e) => {
                let { type: t, channel: n } = this.props;
                e.stopPropagation();
                let r = b.default.getCurrentUser();
                t !== O.O.BURST ||
                    (0, C.I5)(r) ||
                    (0, f.m)({
                        analytics: {
                            type: x.cd.BURST_REACTION_UPSELL,
                            page: null != n.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
                            section: (0, _.s4)(n),
                            object: v.qAy.INLINE_REACTION_PICKER_UPSELL,
                        },
                    }),
                    this.handleReactionPickerToggle();
            }),
            T(this, "renderReactionPopout", (e) => {
                let { closePopout: t } = e,
                    { type: n, channel: i, message: l } = this.props,
                    o = P(
                        { openPopoutType: "message_reaction_emoji_picker" },
                        n === O.O.BURST && {
                            openPopoutType: "message_super_reaction_emoji_picker",
                            page: null != i.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
                            section: (0, _.s4)(i),
                            object: v.qAy.REACTION_RAIL,
                        },
                    ),
                    a = (0, r.jsx)(h.$, {
                        closePopout: t,
                        channel: i,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r, isBurst: i } = e;
                            this.onAddReaction(n, i), r && (i ? s()(t, 150)() : t());
                        },
                        analyticsOverride: o,
                        messageId: l.id,
                    });
                return (0, r.jsx)(c.M.Consumer, {
                    children: (e) => {
                        let { inDialog: t } = e;
                        return t
                            ? (0, r.jsx)(u.VqE, {
                                  "aria-label": j.intl.string(j.t["7Xqzdn"]),
                                  children: a,
                              })
                            : a;
                    },
                });
            });
    }
}
