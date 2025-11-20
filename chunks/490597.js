n.d(t, { X: () => C }), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    l = n.n(s),
    c = n(95015),
    u = n(507274),
    d = n(681715),
    f = n(481060),
    _ = n(255963),
    p = n(387188),
    h = n(222677),
    m = n(995774),
    g = n(931651),
    E = n(981631),
    b = n(185923),
    y = n(388032),
    O = n(127947),
    v = n(893973);
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
        if (e.state === E.yb.SENDING || (0, c.yE)(e.flags, E.iLy.EPHEMERAL)) return null;
        let l = i ? v : O,
            u = {
                size: "sm",
                color: "currentColor",
                className: l.icon,
            };
        return e.type === E.uaV.EMOJI_ADDED && 0 === e.reactions.length
            ? (0, r.jsx)(p.e, {
                  message: e,
                  className: o()(l.reactionBtn, t),
              })
            : (0, r.jsx)(f.yRy, {
                  targetElementRef: this.ref,
                  shouldShow: s,
                  onRequestClose: this.handleReactionPickerToggle,
                  renderPopout: this.renderReactionPopout,
                  position: "right",
                  children: (e, i) => {
                      let { isShown: s } = i;
                      return (0, r.jsx)(d.u, {
                          asContainer: !0,
                          text: y.intl.string(y.t.lfIHs4),
                          children: (0, r.jsxs)(
                              f.P3F,
                              A(T({}, e), {
                                  innerRef: this.ref,
                                  tabIndex: a,
                                  onClick: (e) => {
                                      this.handleAddReactionClick(e);
                                  },
                                  onMouseEnter: () => (0, _.x)(b.qR.AddReactionPopoutMouseEntered),
                                  onFocus: () => (0, _.x)(b.qR.AddReactionPopoutFocused),
                                  className: o()(l.reactionBtn, { [l.active]: s }, t),
                                  children: [(0, r.jsx)(f.EO4, T({}, u)), n],
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
                (0, h.rU)(n.id, r.id, (0, m.g1)(e), i ? h.TW.FORUM_TOOLBAR : h.TW.MESSAGE_INLINE_BUTTON, { burst: t });
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
                    o = (0, r.jsx)(g.$, {
                        closePopout: t,
                        channel: n,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r, isBurst: i } = e;
                            this.onAddReaction(n, i), r && (i ? l()(t, 150)() : t());
                        },
                        analyticsOverride: a,
                        messageId: i.id,
                    });
                return (0, r.jsx)(u.M.Consumer, {
                    children: (e) => {
                        let { inDialog: t } = e;
                        return t
                            ? (0, r.jsx)(f.VqE, {
                                  "aria-label": y.intl.string(y.t["7Xqzdj"]),
                                  children: o,
                              })
                            : o;
                    },
                });
            });
    }
}
