(n.d(t, {
    ZP: () => Y,
    h4: () => B,
    nH: () => Z
}),
    n(388685),
    n(539854));
var r = n(255367),
    i = n(73800),
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
    C = n(555565);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            }));
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let k = 43,
    j = 25,
    M = 40,
    U = 250;
function G(e) {
    e.stopPropagation();
}
let B = (e) => {
        let { title: t, icon: n, children: i, className: a } = e;
        return (0, r.jsxs)('div', {
            className: o()(a, C.header),
            children: [
                (0, r.jsxs)('div', {
                    className: C.titleContainer,
                    children: [
                        null != n ? (0, r.jsx)(n, { color: f.TVs.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, r.jsx)(f.Text, {
                                  variant: 'text-lg/semibold',
                                  color: 'interactive-active',
                                  children: t
                              })
                    ]
                }),
                i
            ]
        });
    },
    Z = (e) => {
        let { msg: t, image: n } = e;
        return (0, r.jsxs)('div', {
            className: C.emptyPlaceholder,
            children: [
                (0, r.jsx)('div', {
                    className: C.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, r.jsx)('div', {
                    className: C.body,
                    children: t
                })
            ]
        });
    };
class F extends i.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(f.P3F, {
            className: C.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: o()(C.__invalid_text, { hidden: e }),
                    children: N.intl.string(N.t.k5WiPT)
                }),
                (0, r.jsx)(f.$jN, {
                    type: f.$jN.Type.PULSING_ELLIPSIS,
                    className: o()(C.loading, { [C.visible]: e })
                })
            ]
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
                      size: 'md',
                      color: 'currentColor',
                      className: C.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, r.jsxs)('div', {
            className: C.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        (super(...e),
            w(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            w(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            }));
    }
}
let V = u.ZP.connectStores([O.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && O.Z.can(A.Plq.MANAGE_MESSAGES, t) };
})(F);
function H(e) {
    let { analyticsName: t, items: n, hasMore: a, loading: s, loadMore: _, renderHeader: m, renderEmptyState: g, renderItem: E, getProTip: b, scrollerClassName: y, className: O, listName: w } = e,
        P = i.useRef(null),
        x = (0, p.Z)(w, P),
        B = (0, u.e7)([v.ZP], () => v.ZP.hasNotice()),
        Z = (0, u.e7)([I.Z], () => I.Z.windowSize());
    (i.useEffect(() => {
        T.default.track(A.rMx.OPEN_POPOUT, { type: t });
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
                S.S.subscribe(A.CkL.SCROLL_PAGE_DOWN, t),
                S.S.subscribe(A.CkL.SCROLL_PAGE_UP, e),
                () => {
                    (S.S.unsubscribe(A.CkL.SCROLL_PAGE_DOWN, t), S.S.unsubscribe(A.CkL.SCROLL_PAGE_UP, e));
                }
            );
        }, []));
    let F = i.useCallback(() => {
            var e;
            let t = null == (e = P.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < U && a && !s && (null == _ || _());
        }, [a, _, s]),
        V = [],
        H = !0;
    null == n || (s && 0 === n.length)
        ? (V = [
              (0, r.jsx)(
                  'div',
                  {
                      className: o()(C.emptyPlaceholder, C.loadingPlaceholder),
                      children: (0, r.jsx)(f.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? V.push((0, r.jsx)(i.Fragment, { children: g() }, 'empty-state'))
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
                  'div',
                  {
                      className: C.loadingMore,
                      children: (0, r.jsx)(f.$jN, {})
                  },
                  'loading-more-after'
              )
            : a
              ? (0, r.jsx)('div', {
                    className: C.hasMore,
                    children: (0, r.jsx)(d.zx, {
                        look: d.zx.Looks.FILLED,
                        color: d.zx.Colors.PRIMARY,
                        size: d.zx.Sizes.MAX,
                        onClick: _,
                        children: N.intl.string(N.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: C.scrollingFooterWrap,
                    children: g()
                }));
    let W = null == b ? void 0 : b(),
        K =
            H && null != W
                ? (0, r.jsx)('div', {
                      className: C.footer,
                      children: (0, r.jsx)(h.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: W
                      })
                  })
                : null,
        z = { maxHeight: Z.height - k - j - 48 };
    B && (z.maxHeight -= M);
    let q = null != _ && a;
    return (0, r.jsx)('div', {
        className: o()(O, C.messagesPopoutWrap),
        style: z,
        onClick: G,
        onDoubleClick: G,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(f.y5t, {
            component: m(),
            children: [
                (0, r.jsxs)(f.Den, {
                    className: o()(C.messagesPopout, y),
                    onScroll: q ? F : void 0,
                    ref: P,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: x,
                            children: (0, r.jsx)(c.SJ, {
                                children: (e) => {
                                    var { ref: t } = e,
                                        n = L(e, ['ref']);
                                    return (0, r.jsx)('div', D(R({ ref: t }, n), { children: V }));
                                }
                            })
                        }),
                        Y
                    ]
                }),
                K
            ]
        })
    });
}
function Y(e) {
    let { analyticsName: t, onFetch: n, channel: a, messages: o, hasMore: s, loading: l, loadMore: c, onJump: d, canCloseAllMessages: f = !1, renderHeader: p, renderEmptyState: h, renderMessage: O, getProTip: v, scrollerClassName: I, className: T, onCloseMessage: S, listName: N } = e,
        w = (0, u.e7)([y.Z], () => {
            let e = null != a ? y.Z.getMessages(a.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function R(e, n) {
        if ((0, m.Z)(e) && !w) {
            let { id: r, channel_id: i } = e,
                a = b.Z.getChannel(i);
            (null != a && (_.Z.trackJump(i, r, t), (0, E.uL)(A.Z5c.CHANNEL(a.getGuildId(), i, r))), null == d || d(n));
        }
    }
    function P(e) {
        let { message: t, channel: n } = e;
        if (null == t) return [];
        if (null != O) return O(t, (e) => R(t, e));
        let i = [];
        return null == n
            ? []
            : (i.push(
                  (0, r.jsxs)(
                      'div',
                      {
                          className: C.messageGroupWrapper,
                          children: [
                              (0, r.jsx)(g.Z, {
                                  className: C.messageGroupCozy,
                                  message: t,
                                  channel: n
                              }),
                              (0, r.jsx)(V, {
                                  channel: a,
                                  message: t,
                                  jumping: w,
                                  canCloseAllMessages: f,
                                  jumpTo: R,
                                  onCloseMessage: S
                              })
                          ]
                      },
                      t.id
                  )
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
                      channel: a
                  })),
        [o, a]
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
        renderItem: P,
        listName: N,
        'aria-label': e['aria-label']
    });
}
