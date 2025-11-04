n.d(t, { Z: () => T }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(374470),
    s = n(481060),
    a = n(239091),
    o = n(294218),
    u = n(592125),
    c = n(388032),
    E = n(374815);
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class T extends l.PureComponent {
    render() {
        let { message: e, listItemProps: t, searchOffset: n, index: l, totalResults: i } = this.props,
            a = u.Z.getChannel(e.channel_id);
        if (null == a) return null;
        let d = "search-result-".concat(e.id);
        return (0, r.jsx)(s.tEY, {
            ringTarget: this.hitRef,
            ringClassName: E.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, r.jsxs)(
                "li",
                A(_({ className: E.container }, t), {
                    "aria-posinset": 1 + n + l,
                    "aria-setsize": i,
                    "aria-labelledby": d,
                    children: [
                        (0, r.jsx)(s.P3F, {
                            tabIndex: -1,
                            onClick: this.handleMessageClick,
                            innerRef: this.containerRef,
                            className: E.searchResult,
                            focusProps: { enabled: !1 },
                            children: (0, r.jsx)(
                                "div",
                                {
                                    ref: this.hitRef,
                                    className: E.message,
                                    children: (0, r.jsx)(o.Z, {
                                        id: d,
                                        message: e,
                                        channel: a,
                                        onContextMenu: (t) => this.handleContextMenu(t, e),
                                        animateAvatar: !1,
                                        subscribeToComponentDispatch: !1,
                                        trackAnnouncementViews: !0,
                                    }),
                                },
                                e.id,
                            ),
                        }),
                        (0, r.jsx)("div", {
                            className: E.buttonsContainer,
                            "aria-hidden": !0,
                            children: (0, r.jsx)(s.P3F, {
                                className: E.button,
                                onClick: this.jumpTo,
                                children: c.intl.string(c.t.k5WiPf),
                            }),
                        }),
                    ],
                }),
            ),
        });
    }
    constructor(...e) {
        super(...e),
            d(this, "containerRef", l.createRef()),
            d(this, "hitRef", l.createRef()),
            d(this, "handleContextMenu", (e, t) => {
                let l = u.Z.getChannel(t.channel_id);
                null != l &&
                    (e.stopPropagation(),
                    (0, a.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("38342"), n.e("46155")]).then(n.bind(n, 858341));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                A(_({}, n), {
                                    message: t,
                                    channel: l,
                                }),
                            );
                    }));
            }),
            d(this, "jumpTo", (e) => {
                null != e && (e.preventDefault(), e.stopPropagation());
                let { onJump: t, message: n, index: r } = this.props;
                null != n && t(n, r);
            }),
            d(this, "handleMessageClick", (e) => {
                if (
                    (function (e, t) {
                        var n;
                        let r = null == (n = window) ? void 0 : n.getSelection();
                        if (null != r && !r.isCollapsed) return !0;
                        if (null == e || null == t) return !1;
                        for (; (0, i.kK)(e) && e !== t; ) {
                            let { tagName: t } = e;
                            if ("A" === t || "IMG" === t || "BUTTON" === t) return !0;
                            e = e.parentNode;
                        }
                        return !1;
                    })(e.target, this.containerRef.current)
                )
                    return void e.stopPropagation();
                this.jumpTo(e);
            });
    }
}
