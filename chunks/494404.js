n.d(t, {
    ZP: () => Y,
    h4: () => B,
    nH: () => Z,
}),
    n(388685),
    n(539854);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(755721),
    f = n(481060),
    _ = n(904245),
    p = n(724757),
    h = n(576855),
    m = n(804063),
    g = n(294218),
    E = n(703656),
    b = n(592125),
    y = n(375954),
    O = n(496675),
    v = n(933429),
    I = n(451478),
    T = n(626135),
    S = n(585483),
    A = n(981631),
    N = n(388032),
    C = n(547660);
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
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let M = 43,
    k = 25,
    j = 40,
    U = 250;
function G(e) {
    e.stopPropagation();
}
let B = (e) => {
        let { title: t, icon: n, children: i, className: o } = e;
        return (0, r.jsxs)("div", {
            className: a()(o, C.header),
            children: [
                (0, r.jsxs)("div", {
                    className: C.titleContainer,
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
            className: C.emptyPlaceholder,
            children: [
                (0, r.jsx)("div", {
                    className: C.image,
                    style: { backgroundImage: "url(".concat(n, ")") },
                }),
                (0, r.jsx)("div", {
                    className: C.body,
                    children: t,
                }),
            ],
        });
    };
class F extends i.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(f.P3F, {
            className: C.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)("div", {
                    className: a()(C.__invalid_text, { hidden: e }),
                    children: N.intl.string(N.t.k5WiPT),
                }),
                (0, r.jsx)(f.$jN, {
                    type: f.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(C.loading, { [C.visible]: e }),
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
                      className: C.closeIcon,
                  }),
              })
            : null;
    }
    render() {
        return (0, r.jsxs)("div", {
            className: C.actionButtons,
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
let V = u.ZP.connectStores([O.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && O.Z.can(A.Plq.MANAGE_MESSAGES, t) };
})(F);
function H(e) {
    let {
            analyticsName: t,
            items: n,
            hasMore: o,
            loading: s,
            loadMore: _,
            renderHeader: m,
            renderEmptyState: g,
            renderItem: E,
            getProTip: b,
            scrollerClassName: y,
            className: O,
            listName: R,
        } = e,
        w = i.useRef(null),
        x = (0, p.Z)(R, w),
        B = (0, u.e7)([v.ZP], () => v.ZP.hasNotice()),
        Z = (0, u.e7)([I.Z], () => I.Z.windowSize());
    i.useEffect(() => {
        T.default.track(A.rMx.OPEN_POPOUT, { type: t });
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
                S.S.subscribe(A.CkL.SCROLL_PAGE_DOWN, t),
                S.S.subscribe(A.CkL.SCROLL_PAGE_UP, e),
                () => {
                    S.S.unsubscribe(A.CkL.SCROLL_PAGE_DOWN, t), S.S.unsubscribe(A.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let F = i.useCallback(() => {
            var e;
            let t = null == (e = w.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < U && o && !s && (null == _ || _());
        }, [o, _, s]),
        V = [],
        H = !0;
    null == n || (s && 0 === n.length)
        ? (V = [
              (0, r.jsx)(
                  "div",
                  {
                      className: a()(C.emptyPlaceholder, C.loadingPlaceholder),
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
                      className: C.loadingMore,
                      children: (0, r.jsx)(f.$jN, {}),
                  },
                  "loading-more-after",
              )
            : o
              ? (0, r.jsx)("div", {
                    className: C.hasMore,
                    children: (0, r.jsx)(d.zx, {
                        look: d.zx.Looks.FILLED,
                        color: d.zx.Colors.PRIMARY,
                        size: d.zx.Sizes.MAX,
                        onClick: _,
                        children: N.intl.string(N.t.XBlaiI),
                    }),
                })
              : (0, r.jsx)("div", {
                    className: C.scrollingFooterWrap,
                    children: g(),
                }));
    let W = null == b ? void 0 : b(),
        K =
            H && null != W
                ? (0, r.jsx)("div", {
                      className: C.footer,
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
        z = { maxHeight: Z.height - M - k - 48 };
    B && (z.maxHeight -= j);
    let q = null != _ && o;
    return (0, r.jsx)("div", {
        className: a()(O, C.messagesPopoutWrap),
        style: z,
        onClick: G,
        onDoubleClick: G,
        "aria-label": e["aria-label"],
        children: (0, r.jsxs)(f.y5t, {
            component: m(),
            children: [
                (0, r.jsxs)(f.Den, {
                    className: a()(C.messagesPopout, y),
                    onScroll: q ? F : void 0,
                    ref: w,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: x,
                            children: (0, r.jsx)(c.SJ, {
                                children: (e) => {
                                    var { ref: t } = e,
                                        n = L(e, ["ref"]);
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
            channel: o,
            messages: a,
            hasMore: s,
            loading: l,
            loadMore: c,
            onJump: d,
            canCloseAllMessages: f = !1,
            renderHeader: p,
            renderEmptyState: h,
            renderMessage: O,
            getProTip: v,
            scrollerClassName: I,
            className: T,
            onCloseMessage: S,
            listName: N,
        } = e,
        R = (0, u.e7)([y.Z], () => {
            let e = null != o ? y.Z.getMessages(o.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, n) {
        if ((0, m.Z)(e) && !R) {
            let { id: r, channel_id: i } = e,
                o = b.Z.getChannel(i);
            null != o && (_.Z.trackJump(i, r, t), (0, E.uL)(A.Z5c.CHANNEL(o.getGuildId(), i, r))), null == d || d(n);
        }
    }
    function w(e) {
        let { message: t, channel: n } = e;
        if (null == t) return [];
        if (null != O) return O(t, (e) => P(t, e));
        let i = [];
        return null == n
            ? []
            : (i.push(
                  (0, r.jsxs)(
                      "div",
                      {
                          className: C.messageGroupWrapper,
                          children: [
                              (0, r.jsx)(g.Z, {
                                  className: C.messageGroupCozy,
                                  message: t,
                                  channel: n,
                              }),
                              (0, r.jsx)(V, {
                                  channel: o,
                                  message: t,
                                  jumping: R,
                                  canCloseAllMessages: f,
                                  jumpTo: P,
                                  onCloseMessage: S,
                              }),
                          ],
                      },
                      t.id,
                  ),
              ),
              i);
    }
    i.useEffect(() => {
        n(o);
    }, [o, n]);
    let D = i.useMemo(
        () =>
            null == a
                ? void 0
                : a.map((e) => ({
                      message: e,
                      channel: o,
                  })),
        [a, o],
    );
    return (0, r.jsx)(H, {
        className: T,
        scrollerClassName: I,
        items: D,
        loading: l,
        analyticsName: t,
        renderEmptyState: h,
        renderHeader: p,
        hasMore: s,
        loadMore: c,
        getProTip: v,
        renderItem: w,
        listName: N,
        "aria-label": e["aria-label"],
    });
}
