n.d(t, {
    ZP: () => H,
    h4: () => G,
    nH: () => Z,
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
    p = n(724757),
    _ = n(576855),
    m = n(703656),
    h = n(592125),
    g = n(375954),
    E = n(496675),
    b = n(933429),
    y = n(451478),
    O = n(626135),
    v = n(585483),
    S = n(804063),
    I = n(294218),
    T = n(981631),
    A = n(388032),
    C = n(129633);
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = 43,
    j = 25,
    M = 40,
    k = 250;
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
class B extends i.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsx)("div", {
            className: C.buttonContainer,
            children: (0, r.jsx)(d.Button, {
                variant: "secondary",
                size: "sm",
                text: A.intl.string(A.t.k5WiPf),
                onClick: this.handleClickJump,
                loading: e,
            }),
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
            ? (0, r.jsx)("div", {
                  className: C.buttonContainer,
                  children: (0, r.jsx)(d.hU, {
                      icon: d.Dio,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": null != a ? a : A.intl.string(A.t.cpT0Cq),
                      onClick: this.handleClickClose,
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
    return { canManageMessages: null != t && E.Z.can(T.Plq.MANAGE_MESSAGES, t) };
})(B);
function V(e) {
    let {
            analyticsName: t,
            items: n,
            hasMore: a,
            loading: s,
            loadMore: f,
            renderHeader: m,
            renderEmptyState: h,
            renderItem: g,
            getProTip: E,
            scrollerClassName: S,
            className: I,
            listName: N,
        } = e,
        R = i.useRef(null),
        x = (0, p.Z)(N, R),
        G = (0, u.e7)([b.ZP], () => b.ZP.hasNotice()),
        Z = (0, u.e7)([y.Z], () => y.Z.windowSize());
    i.useEffect(() => {
        O.default.track(T.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        i.useEffect(() => {
            function e() {
                var e;
                null == (e = R.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = R.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                v.S.subscribe(T.CkL.SCROLL_PAGE_DOWN, t),
                v.S.subscribe(T.CkL.SCROLL_PAGE_UP, e),
                () => {
                    v.S.unsubscribe(T.CkL.SCROLL_PAGE_DOWN, t), v.S.unsubscribe(T.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let B = i.useCallback(() => {
            var e;
            let t = null == (e = R.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < k && a && !s && (null == f || f());
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
          ? F.push((0, r.jsx)(i.Fragment, { children: h() }, "empty-state"))
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
                    children: h(),
                }));
    let Y = null == E ? void 0 : E(),
        W =
            V && null != Y
                ? (0, r.jsx)("div", {
                      className: C.footer,
                      children: (0, r.jsx)(_.Z, {
                          style: {
                              width: "100%",
                              paddingTop: 10,
                              paddingBottom: 10,
                          },
                          children: Y,
                      }),
                  })
                : null,
        K = { maxHeight: Z.height - L - j - 48 };
    G && (K.maxHeight -= M);
    let z = null != f && a;
    return (0, r.jsx)("div", {
        className: o()(I, C.messagesPopoutWrap),
        style: K,
        onClick: U,
        onDoubleClick: U,
        "aria-label": e["aria-label"],
        children: (0, r.jsxs)(d.y5t, {
            component: m(),
            children: [
                (0, r.jsxs)(d.Den, {
                    className: o()(C.messagesPopout, S),
                    onScroll: z ? B : void 0,
                    ref: R,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: x,
                            children: (0, r.jsx)(c.SJ, {
                                children: (e) => {
                                    var { ref: t } = e,
                                        n = D(e, ["ref"]);
                                    return (0, r.jsx)("div", w(P({ ref: t }, n), { children: F }));
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
            canCloseAllMessages: p = !1,
            renderHeader: _,
            renderEmptyState: E,
            renderMessage: b,
            getProTip: y,
            scrollerClassName: O,
            className: v,
            onCloseMessage: A,
            listName: N,
            closeAriaLabel: P,
        } = e,
        R = (0, u.e7)([g.Z], () => {
            let e = null != a ? g.Z.getMessages(a.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function w(e, n) {
        let r = () => {
            let { id: r, channel_id: i } = e,
                a = h.Z.getChannel(i);
            null != a && (f.Z.trackJump(i, r, t), (0, m.uL)(T.Z5c.CHANNEL(a.getGuildId(), i, r))), null == d || d(n);
        };
        (0, S.Z)(e, r) && !R && r();
    }
    function D(e) {
        let { message: t, channel: n } = e;
        if (null == t) return [];
        if (null != b) return b(t, (e) => w(t, e));
        let i = [];
        return null == n
            ? []
            : (i.push(
                  (0, r.jsxs)(
                      "div",
                      {
                          className: C.messageGroupWrapper,
                          children: [
                              (0, r.jsx)(I.Z, {
                                  className: C.messageGroupCozy,
                                  message: t,
                                  channel: n,
                              }),
                              (0, r.jsx)(F, {
                                  channel: a,
                                  message: t,
                                  jumping: R,
                                  canCloseAllMessages: p,
                                  jumpTo: w,
                                  onCloseMessage: A,
                                  closeAriaLabel: P,
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
    let x = i.useMemo(
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
        items: x,
        loading: l,
        analyticsName: t,
        renderEmptyState: E,
        renderHeader: _,
        hasMore: s,
        loadMore: c,
        getProTip: y,
        renderItem: D,
        listName: N,
        "aria-label": e["aria-label"],
    });
}
