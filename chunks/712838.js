n.d(t, { A: () => A }), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(621466),
    i = n(397927),
    s = n(442433),
    o = n(636922),
    c = n(734057),
    u = n(985018),
    E = n(641548);
function d(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class A extends r.PureComponent {
    render() {
        let { message: e, listItemProps: t, searchOffset: n, index: r, totalResults: a } = this.props,
            s = c.A.getChannel(e.channel_id);
        if (null == s) return null;
        let d = "search-result-".concat(e.id);
        return (0, l.jsx)(i.vN3, {
            ringTarget: this.hitRef,
            ringClassName: E.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, l.jsxs)(
                "li",
                g(_({ className: E.kL }, t), {
                    "aria-posinset": 1 + n + r,
                    "aria-setsize": a,
                    "aria-labelledby": d,
                    children: [
                        (0, l.jsx)(i.DUT, {
                            tabIndex: -1,
                            onClick: this.handleMessageClick,
                            innerRef: this.containerRef,
                            className: E.mk,
                            focusProps: { enabled: !1 },
                            children: (0, l.jsx)(
                                "div",
                                {
                                    ref: this.hitRef,
                                    className: E.iU,
                                    children: (0, l.jsx)(o.A, {
                                        id: d,
                                        message: e,
                                        channel: s,
                                        onContextMenu: (t) => this.handleContextMenu(t, e),
                                        animateAvatar: !1,
                                        subscribeToComponentDispatch: !1,
                                        trackAnnouncementViews: !0,
                                    }),
                                },
                                e.id,
                            ),
                        }),
                        (0, l.jsx)("div", {
                            className: E.NC,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(i.DUT, {
                                className: E.x6,
                                onClick: this.jumpTo,
                                children: u.intl.string(u.t.k5WiPf),
                            }),
                        }),
                    ],
                }),
            ),
        });
    }
    constructor(...e) {
        super(...e),
            d(this, "containerRef", r.createRef()),
            d(this, "hitRef", r.createRef()),
            d(this, "handleContextMenu", (e, t) => {
                let r = c.A.getChannel(t.channel_id);
                null != r &&
                    (e.stopPropagation(),
                    (0, s.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("6502"), n.e("27687"), n.e("4948")]).then(
                            n.bind(n, 847342),
                        );
                        return (n) =>
                            (0, l.jsx)(
                                e,
                                g(_({}, n), {
                                    message: t,
                                    channel: r,
                                }),
                            );
                    }));
            }),
            d(this, "jumpTo", (e) => {
                null != e && (e.preventDefault(), e.stopPropagation());
                let { onJump: t, message: n, index: l } = this.props;
                null != n && t(n, l);
            }),
            d(this, "handleMessageClick", (e) => {
                !(function (e, t) {
                    var n;
                    let l = null == (n = window) ? void 0 : n.getSelection();
                    if (null != l && !l.isCollapsed) return !0;
                    if (null == e || null == t) return !1;
                    for (; (0, a.vq)(e) && e !== t; ) {
                        let { tagName: t } = e;
                        if ("A" === t || "IMG" === t || "BUTTON" === t) return !0;
                        e = e.parentNode;
                    }
                    return !1;
                })(e.target, this.containerRef.current)
                    ? this.jumpTo(e)
                    : e.stopPropagation();
            });
    }
}
