n.d(t, { X: () => C }), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    l = n.n(s),
    c = n(507274),
    u = n(681715),
    d = n(481060),
    f = n(255963),
    _ = n(387188),
    p = n(222677),
    h = n(995774),
    m = n(931651),
    g = n(630388),
    E = n(981631),
    b = n(185923),
    y = n(388032),
    O = n(487111),
    v = n(639543);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class C extends i.Component {
    render() {
        let { message: e, className: t, children: n, useChatFontScaling: i, tabIndex: a = 0 } = this.props,
            { isReactionPickerActive: s } = this.state;
        if (e.state === E.yb.SENDING || (0, g.yE)(e.flags, E.iLy.EPHEMERAL)) return null;
        let l = i ? v : O,
            c = {
                size: "sm",
                color: "currentColor",
                className: l.icon,
            };
        return e.type === E.uaV.EMOJI_ADDED && 0 === e.reactions.length
            ? (0, r.jsx)(_.e, {
                  message: e,
                  className: o()(l.reactionBtn, t),
              })
            : (0, r.jsx)(d.yRy, {
                  targetElementRef: this.ref,
                  shouldShow: s,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: "right",
                  children: (e, i) => {
                      let { isShown: s } = i;
                      return (0, r.jsx)(u.u, {
                          asContainer: !0,
                          text: y.intl.string(y.t.lfIHs4),
                          children: (0, r.jsxs)(
                              d.P3F,
                              A(T({}, e), {
                                  innerRef: this.ref,
                                  tabIndex: a,
                                  onClick: (e) => {
                                      this.handleAddReactionClick(e);
                                  },
                                  onMouseEnter: () => (0, f.x)(b.qR.AddReactionPopoutMouseEntered),
                                  onFocus: () => (0, f.x)(b.qR.AddReactionPopoutFocused),
                                  className: o()(l.reactionBtn, { [l.active]: s }, t),
                                  children: [(0, r.jsx)(d.EO4, T({}, c)), n],
                              }),
                          ),
                      });
                  },
              });
    }
    constructor(...e) {
        super(...e),
            I(this, "state", { isReactionPickerActive: !1 }),
            I(this, "ref", i.createRef()),
            I(this, "onAddReaction", (e, t) => {
                if (null == e) return;
                let { channel: n, message: r, isForumToolbar: i } = this.props;
                (0, p.rU)(n.id, r.id, (0, h.g1)(e), i ? p.TW.FORUM_TOOLBAR : p.TW.MESSAGE_INLINE_BUTTON, { burst: t });
            }),
            I(this, "handleReactionPickerToggle", () => {
                this.setState((e) => ({ isReactionPickerActive: !e.isReactionPickerActive }));
            }),
            I(this, "handleAddReactionClick", (e) => {
                e.stopPropagation(), this.handleReactionPickerToggle();
            }),
            I(this, "renderReactionPopout", (e) => {
                let { closePopout: t } = e,
                    { channel: n, message: i } = this.props,
                    a = { openPopoutType: "message_reaction_emoji_picker" },
                    o = (0, r.jsx)(m.$, {
                        closePopout: t,
                        channel: n,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r, isBurst: i } = e;
                            this.onAddReaction(n, i), r && (i ? l()(t, 150)() : t());
                        },
                        analyticsOverride: a,
                        messageId: i.id,
                    });
                return (0, r.jsx)(c.M.Consumer, {
                    children: (e) => {
                        let { inDialog: t } = e;
                        return t
                            ? (0, r.jsx)(d.VqE, {
                                  "aria-label": y.intl.string(y.t["7Xqzdj"]),
                                  children: o,
                              })
                            : o;
                    },
                });
            });
    }
}
