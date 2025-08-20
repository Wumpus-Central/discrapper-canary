t.d(e, { Z: () => E }), t(388685);
var n = t(951288),
    r = t(647438),
    l = t(392711),
    i = t.n(l),
    a = t(374470),
    s = t(481060),
    o = t(239091),
    g = t(294218),
    c = t(592125),
    f = t(388032),
    v = t(374815);
function u(A, e, t) {
    return (
        e in A
            ? Object.defineProperty(A, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (A[e] = t),
        A
    );
}
function h(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                u(A, e, t[e]);
            });
    }
    return A;
}
function d(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
class E extends r.PureComponent {
    render() {
        let { result: A, listItemProps: e, searchOffset: t, index: r, totalResults: l } = this.props,
            a = i().find(A, (A) => A.isSearchHit);
        if (null == a) return null;
        let o = c.Z.getChannel(a.channel_id);
        if (null == o) return null;
        let u = "search-result-".concat(a.id);
        return (0, n.jsx)(s.tEY, {
            ringTarget: this.hitRef,
            ringClassName: v.__invalid_searchResultFocusRing,
            offset: 4,
            children: (0, n.jsxs)(
                "li",
                d(h({ className: v.container }, e), {
                    "aria-posinset": 1 + t + r,
                    "aria-setsize": l,
                    "aria-labelledby": u,
                    children: [
                        (0, n.jsx)(s.P3F, {
                            tabIndex: -1,
                            onClick: this.handleMessageClick,
                            innerRef: this.containerRef,
                            className: v.searchResult,
                            focusProps: { enabled: !1 },
                            children: (0, n.jsx)(
                                "div",
                                {
                                    ref: this.hitRef,
                                    className: v.message,
                                    children: (0, n.jsx)(g.Z, {
                                        id: u,
                                        message: a,
                                        channel: o,
                                        onContextMenu: (A) => this.handleContextMenu(A, a),
                                        animateAvatar: !1,
                                        subscribeToComponentDispatch: !1,
                                        trackAnnouncementViews: !0,
                                        isSearchResult: !0,
                                    }),
                                },
                                a.id,
                            ),
                        }),
                        (0, n.jsx)("div", {
                            className: v.buttonsContainer,
                            "aria-hidden": !0,
                            children: (0, n.jsx)(s.P3F, {
                                className: v.button,
                                onClick: this.jumpTo,
                                children: f.intl.string(f.t.k5WiPT),
                            }),
                        }),
                    ],
                }),
            ),
        });
    }
    constructor(...A) {
        super(...A),
            u(this, "containerRef", r.createRef()),
            u(this, "hitRef", r.createRef()),
            u(this, "handleContextMenu", (A, e) => {
                let r = c.Z.getChannel(e.channel_id);
                null != r &&
                    (A.stopPropagation(),
                    (0, o.jW)(A, async () => {
                        let { default: A } = await Promise.all([t.e("76676"), t.e("93077"), t.e("69363")]).then(
                            t.bind(t, 858341),
                        );
                        return (t) =>
                            (0, n.jsx)(
                                A,
                                d(h({}, t), {
                                    message: e,
                                    channel: r,
                                }),
                            );
                    }));
            }),
            u(this, "jumpTo", (A) => {
                null != A && (A.preventDefault(), A.stopPropagation());
                let { onJump: e, result: t, index: n } = this.props,
                    r = t.find((A) => A.isSearchHit);
                null != r && e(r, n);
            }),
            u(this, "handleMessageClick", (A) => {
                if (
                    (function (A, e) {
                        var t;
                        let n = null == (t = window) ? void 0 : t.getSelection();
                        if (null != n && !n.isCollapsed) return !0;
                        if (null == A || null == e) return !1;
                        for (; (0, a.k)(A) && A !== e; ) {
                            let { tagName: e } = A;
                            if ("A" === e || "IMG" === e || "BUTTON" === e) return !0;
                            A = A.parentNode;
                        }
                        return !1;
                    })(A.target, this.containerRef.current)
                )
                    return void A.stopPropagation();
                this.jumpTo(A);
            });
    }
}
