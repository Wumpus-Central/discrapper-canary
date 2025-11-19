n.d(t, {
    ZP: () => H,
    h4: () => G,
    nH: () => B,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    f = n(904245),
    _ = n(724757),
    p = n(576855),
    h = n(703656),
    m = n(592125),
    g = n(375954),
    E = n(496675),
    b = n(933429),
    y = n(451478),
    O = n(626135),
    v = n(585483),
    I = n(804063),
    T = n(294218),
    S = n(981631),
    A = n(388032),
    C = n(509447);
function N(e, t, n) {
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
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
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
let x = 43,
    M = 25,
    k = 40,
    j = 250;
function U(e) {
    e.stopPropagation();
}
let G = (e) => {
        let { title: t, icon: n, children: i, className: a } = e;
        return (0, r.jsxs)("div", {
            className: o()(a, C.header),
            children: [
                (0, r.jsxs)("div", {
                    className: C.titleContainer,
                    children: [
                        null != n ? (0, r.jsx)(n, { color: d.TVs.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, r.jsx)(d.Text, {
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
    B = (e) => {
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
class Z extends i.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsx)(d.Button, {
            variant: "overlay-primary",
            size: "sm",
            text: A.intl.string(A.t.k5WiPf),
            onClick: this.handleClickJump,
            loading: e,
        });
    }
    renderCloseButton() {
        let {
            onCloseMessage: e,
            canCloseAllMessages: t,
            canManageMessages: n,
            channel: i,
            closeAriaLabel: a,
        } = this.props;
        return null != e && (t || n || (null != i && i.isPrivate()))
            ? (0, r.jsx)(d.hU, {
                  icon: d.Dio,
                  size: "sm",
                  variant: "overlay-primary",
                  "aria-label": null != a ? a : A.intl.string(A.t.cpT0Cq),
                  onClick: this.handleClickClose,
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
            N(this, "handleClickJump", (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            N(this, "handleClickClose", (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            });
    }
}
let F = u.ZP.connectStores([E.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && E.Z.can(S.Plq.MANAGE_MESSAGES, t) };
})(Z);
function V(e) {
    let {
            analyticsName: t,
            items: n,
            hasMore: a,
            loading: s,
            loadMore: f,
            renderHeader: h,
            renderEmptyState: m,
            renderItem: g,
            getProTip: E,
            scrollerClassName: I,
            className: T,
            listName: N,
        } = e,
        P = i.useRef(null),
        L = (0, _.Z)(N, P),
        G = (0, u.e7)([b.ZP], () => b.ZP.hasNotice()),
        B = (0, u.e7)([y.Z], () => y.Z.windowSize());
    i.useEffect(() => {
        O.default.track(S.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        i.useEffect(() => {
            function e() {
                var e;
                null == (e = P.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = P.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                v.S.subscribe(S.CkL.SCROLL_PAGE_DOWN, t),
                v.S.subscribe(S.CkL.SCROLL_PAGE_UP, e),
                () => {
                    v.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN, t), v.S.unsubscribe(S.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let Z = i.useCallback(() => {
            var e;
            let t = null == (e = P.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < j && a && !s && (null == f || f());
        }, [a, f, s]),
        F = [],
        V = !0;
    null == n || (s && 0 === n.length)
        ? (F = [
              (0, r.jsx)(
                  "div",
                  {
                      className: o()(C.emptyPlaceholder, C.loadingPlaceholder),
                      children: (0, r.jsx)(d.$jN, {}),
                  },
                  "spinner",
              ),
          ])
        : 0 === n.length
          ? F.push((0, r.jsx)(i.Fragment, { children: m() }, "empty-state"))
          : ((V = !1),
            (F = []),
            l().each(n, (e) => {
                F.push(...g(e));
            }));
    let H = null;
    null != n &&
        n.length > 0 &&
        null != f &&
        (H = s
            ? (0, r.jsx)(
                  "div",
                  {
                      className: C.loadingMore,
                      children: (0, r.jsx)(d.$jN, {}),
                  },
                  "loading-more-after",
              )
            : a
              ? (0, r.jsx)("div", {
                    className: C.hasMore,
                    children: (0, r.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: A.intl.string(A.t.XBlaiC),
                        onClick: f,
                    }),
                })
              : (0, r.jsx)("div", {
                    className: C.scrollingFooterWrap,
                    children: m(),
                }));
    let Y = null == E ? void 0 : E(),
        W =
            V && null != Y
                ? (0, r.jsx)("div", {
                      className: C.footer,
                      children: (0, r.jsx)(p.Z, {
                          style: {
                              width: "100%",
                              paddingTop: 10,
                              paddingBottom: 10,
                          },
                          children: Y,
                      }),
                  })
                : null,
        K = { maxHeight: B.height - x - M - 48 };
    G && (K.maxHeight -= k);
    let z = null != f && a;
    return (0, r.jsx)("div", {
        className: o()(T, C.messagesPopoutWrap),
        style: K,
        onClick: U,
        onDoubleClick: U,
        "aria-label": e["aria-label"],
        children: (0, r.jsxs)(d.y5t, {
            component: h(),
            children: [
                (0, r.jsxs)(d.Den, {
                    className: o()(C.messagesPopout, I),
                    onScroll: z ? Z : void 0,
                    ref: P,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: L,
                            children: (0, r.jsx)(c.SJ, {
                                children: (e) => {
                                    var { ref: t } = e,
                                        n = w(e, ["ref"]);
                                    return (0, r.jsx)("div", D(R({ ref: t }, n), { children: F }));
                                },
                            }),
                        }),
                        H,
                    ],
                }),
                W,
            ],
        }),
    });
}
function H(e) {
    let {
            analyticsName: t,
            onFetch: n,
            channel: a,
            messages: o,
            hasMore: s,
            loading: l,
            loadMore: c,
            onJump: d,
            canCloseAllMessages: _ = !1,
            renderHeader: p,
            renderEmptyState: E,
            renderMessage: b,
            getProTip: y,
            scrollerClassName: O,
            className: v,
            onCloseMessage: A,
            listName: N,
            closeAriaLabel: R,
        } = e,
        P = (0, u.e7)([g.Z], () => {
            let e = null != a ? g.Z.getMessages(a.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function D(e, n) {
        if ((0, I.Z)(e) && !P) {
            let { id: r, channel_id: i } = e,
                a = m.Z.getChannel(i);
            null != a && (f.Z.trackJump(i, r, t), (0, h.uL)(S.Z5c.CHANNEL(a.getGuildId(), i, r))), null == d || d(n);
        }
    }
    function w(e) {
        let { message: t, channel: n } = e;
        if (null == t) return [];
        if (null != b) return b(t, (e) => D(t, e));
        let i = [];
        return null == n
            ? []
            : (i.push(
                  (0, r.jsxs)(
                      "div",
                      {
                          className: C.messageGroupWrapper,
                          children: [
                              (0, r.jsx)(T.Z, {
                                  className: C.messageGroupCozy,
                                  message: t,
                                  channel: n,
                              }),
                              (0, r.jsx)(F, {
                                  channel: a,
                                  message: t,
                                  jumping: P,
                                  canCloseAllMessages: _,
                                  jumpTo: D,
                                  onCloseMessage: A,
                                  closeAriaLabel: R,
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
    let L = i.useMemo(
        () =>
            null == o
                ? void 0
                : o.map((e) => ({
                      message: e,
                      channel: a,
                  })),
        [o, a],
    );
    return (0, r.jsx)(V, {
        className: v,
        scrollerClassName: O,
        items: L,
        loading: l,
        analyticsName: t,
        renderEmptyState: E,
        renderHeader: p,
        hasMore: s,
        loadMore: c,
        getProTip: y,
        renderItem: w,
        listName: N,
        "aria-label": e["aria-label"],
    });
}
