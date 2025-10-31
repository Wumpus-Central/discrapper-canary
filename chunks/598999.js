n.d(t, {
    ZP: () => Y,
    h4: () => B,
    nH: () => Z,
}),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(755721),
    f = n(481060),
    _ = n(904245),
    p = n(724757),
    h = n(576855),
    m = n(703656),
    g = n(592125),
    E = n(375954),
    b = n(496675),
    y = n(933429),
    O = n(451478),
    v = n(626135),
    I = n(585483),
    T = n(804063),
    S = n(294218),
    A = n(981631),
    C = n(388032),
    N = n(129633);
function R(e, t, n) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let M = 43,
    j = 25,
    k = 40,
    U = 250;
function G(e) {
    e.stopPropagation();
}
let B = (e) => {
        let { title: t, icon: n, children: i, className: a } = e;
        return (0, r.jsxs)("div", {
            className: o()(a, N.header),
            children: [
                (0, r.jsxs)("div", {
                    className: N.titleContainer,
                    children: [
                        null != n ? (0, r.jsx)(n, { color: f.TVs.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, r.jsx)(f.Text, {
                                  variant: "text-lg/semibold",
                                  color: "interactive-active",
                                  children: t,
                              }),
                    ],
                }),
                i,
            ],
        });
    },
    Z = (e) => {
        let { msg: t, image: n } = e;
        return (0, r.jsxs)("div", {
            className: N.emptyPlaceholder,
            children: [
                (0, r.jsx)("div", {
                    className: N.image,
                    style: { backgroundImage: "url(".concat(n, ")") },
                }),
                (0, r.jsx)("div", {
                    className: N.body,
                    children: t,
                }),
            ],
        });
    };
class F extends i.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(f.P3F, {
            className: N.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)("div", {
                    className: o()(N.__invalid_text, { hidden: e }),
                    children: C.intl.string(C.t.k5WiPf),
                }),
                (0, r.jsx)(f.$jN, {
                    type: f.$jN.Type.PULSING_ELLIPSIS,
                    className: o()(N.loading, { [N.visible]: e }),
                }),
            ],
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: i } = this.props;
        return null != e && (t || n || (null != i && i.isPrivate()))
            ? (0, r.jsx)(d.zx, {
                  look: d.zx.Looks.BLANK,
                  size: d.zx.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, r.jsx)(f.Dio, {
                      size: "md",
                      color: "currentColor",
                      className: N.closeIcon,
                  }),
              })
            : null;
    }
    render() {
        return (0, r.jsxs)("div", {
            className: N.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()],
        });
    }
    constructor(...e) {
        super(...e),
            R(this, "handleClickJump", (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            R(this, "handleClickClose", (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            });
    }
}
let V = u.ZP.connectStores([b.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && b.Z.can(A.Plq.MANAGE_MESSAGES, t) };
})(F);
function H(e) {
    let {
            analyticsName: t,
            items: n,
            hasMore: a,
            loading: s,
            loadMore: _,
            renderHeader: m,
            renderEmptyState: g,
            renderItem: E,
            getProTip: b,
            scrollerClassName: T,
            className: S,
            listName: R,
        } = e,
        w = i.useRef(null),
        L = (0, p.Z)(R, w),
        B = (0, u.e7)([y.ZP], () => y.ZP.hasNotice()),
        Z = (0, u.e7)([O.Z], () => O.Z.windowSize());
    i.useEffect(() => {
        v.default.track(A.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        i.useEffect(() => {
            function e() {
                var e;
                null == (e = w.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = w.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                I.S.subscribe(A.CkL.SCROLL_PAGE_DOWN, t),
                I.S.subscribe(A.CkL.SCROLL_PAGE_UP, e),
                () => {
                    I.S.unsubscribe(A.CkL.SCROLL_PAGE_DOWN, t), I.S.unsubscribe(A.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let F = i.useCallback(() => {
            var e;
            let t = null == (e = w.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < U && a && !s && (null == _ || _());
        }, [a, _, s]),
        V = [],
        H = !0;
    null == n || (s && 0 === n.length)
        ? (V = [
              (0, r.jsx)(
                  "div",
                  {
                      className: o()(N.emptyPlaceholder, N.loadingPlaceholder),
                      children: (0, r.jsx)(f.$jN, {}),
                  },
                  "spinner",
              ),
          ])
        : 0 === n.length
          ? V.push((0, r.jsx)(i.Fragment, { children: g() }, "empty-state"))
          : ((H = !1),
            (V = []),
            l().each(n, (e) => {
                V.push(...E(e));
            }));
    let Y = null;
    null != n &&
        n.length > 0 &&
        null != _ &&
        (Y = s
            ? (0, r.jsx)(
                  "div",
                  {
                      className: N.loadingMore,
                      children: (0, r.jsx)(f.$jN, {}),
                  },
                  "loading-more-after",
              )
            : a
              ? (0, r.jsx)("div", {
                    className: N.hasMore,
                    children: (0, r.jsx)(d.zx, {
                        look: d.zx.Looks.FILLED,
                        color: d.zx.Colors.PRIMARY,
                        size: d.zx.Sizes.MAX,
                        onClick: _,
                        children: C.intl.string(C.t.XBlaiC),
                    }),
                })
              : (0, r.jsx)("div", {
                    className: N.scrollingFooterWrap,
                    children: g(),
                }));
    let W = null == b ? void 0 : b(),
        K =
            H && null != W
                ? (0, r.jsx)("div", {
                      className: N.footer,
                      children: (0, r.jsx)(h.Z, {
                          style: {
                              width: "100%",
                              paddingTop: 10,
                              paddingBottom: 10,
                          },
                          children: W,
                      }),
                  })
                : null,
        z = { maxHeight: Z.height - M - j - 48 };
    B && (z.maxHeight -= k);
    let q = null != _ && a;
    return (0, r.jsx)("div", {
        className: o()(S, N.messagesPopoutWrap),
        style: z,
        onClick: G,
        onDoubleClick: G,
        "aria-label": e["aria-label"],
        children: (0, r.jsxs)(f.y5t, {
            component: m(),
            children: [
                (0, r.jsxs)(f.Den, {
                    className: o()(N.messagesPopout, T),
                    onScroll: q ? F : void 0,
                    ref: w,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: L,
                            children: (0, r.jsx)(c.SJ, {
                                children: (e) => {
                                    var { ref: t } = e,
                                        n = x(e, ["ref"]);
                                    return (0, r.jsx)("div", D(P({ ref: t }, n), { children: V }));
                                },
                            }),
                        }),
                        Y,
                    ],
                }),
                K,
            ],
        }),
    });
}
function Y(e) {
    let {
            analyticsName: t,
            onFetch: n,
            channel: a,
            messages: o,
            hasMore: s,
            loading: l,
            loadMore: c,
            onJump: d,
            canCloseAllMessages: f = !1,
            renderHeader: p,
            renderEmptyState: h,
            renderMessage: b,
            getProTip: y,
            scrollerClassName: O,
            className: v,
            onCloseMessage: I,
            listName: C,
        } = e,
        R = (0, u.e7)([E.Z], () => {
            let e = null != a ? E.Z.getMessages(a.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, n) {
        if ((0, T.Z)(e) && !R) {
            let { id: r, channel_id: i } = e,
                a = g.Z.getChannel(i);
            null != a && (_.Z.trackJump(i, r, t), (0, m.uL)(A.Z5c.CHANNEL(a.getGuildId(), i, r))), null == d || d(n);
        }
    }
    function w(e) {
        let { message: t, channel: n } = e;
        if (null == t) return [];
        if (null != b) return b(t, (e) => P(t, e));
        let i = [];
        return null == n
            ? []
            : (i.push(
                  (0, r.jsxs)(
                      "div",
                      {
                          className: N.messageGroupWrapper,
                          children: [
                              (0, r.jsx)(S.Z, {
                                  className: N.messageGroupCozy,
                                  message: t,
                                  channel: n,
                              }),
                              (0, r.jsx)(V, {
                                  channel: a,
                                  message: t,
                                  jumping: R,
                                  canCloseAllMessages: f,
                                  jumpTo: P,
                                  onCloseMessage: I,
                              }),
                          ],
                      },
                      t.id,
                  ),
              ),
              i);
    }
    i.useEffect(() => {
        n(a);
    }, [a, n]);
    let D = i.useMemo(
        () =>
            null == o
                ? void 0
                : o.map((e) => ({
                      message: e,
                      channel: a,
                  })),
        [o, a],
    );
    return (0, r.jsx)(H, {
        className: v,
        scrollerClassName: O,
        items: D,
        loading: l,
        analyticsName: t,
        renderEmptyState: h,
        renderHeader: p,
        hasMore: s,
        loadMore: c,
        getProTip: y,
        renderItem: w,
        listName: C,
        "aria-label": e["aria-label"],
    });
}
