(n.d(t, {
    ZP: () => F,
    h4: () => N,
    nH: () => w
}),
    n(388685),
    n(539854));
var r = n(255367),
    l = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(392711),
    o = n.n(i),
    c = n(91192),
    u = n(442837),
    d = n(755721),
    h = n(481060),
    p = n(904245),
    f = n(724757),
    g = n(576855),
    m = n(804063),
    S = n(294218),
    y = n(703656),
    b = n(592125),
    x = n(375954),
    _ = n(496675),
    v = n(933429),
    O = n(451478),
    E = n(626135),
    j = n(585483),
    C = n(981631),
    P = n(388032),
    I = n(555565);
function R(e, t, n) {
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
function T(e) {
    e.stopPropagation();
}
let N = (e) => {
        let { title: t, icon: n, children: l, className: s } = e;
        return (0, r.jsxs)('div', {
            className: a()(s, I.header),
            children: [
                (0, r.jsxs)('div', {
                    className: I.titleContainer,
                    children: [
                        null != n ? (0, r.jsx)(n, { color: h.TVs.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, r.jsx)(h.Text, {
                                  variant: 'text-lg/semibold',
                                  color: 'interactive-active',
                                  children: t
                              })
                    ]
                }),
                l
            ]
        });
    },
    w = (e) => {
        let { msg: t, image: n } = e;
        return (0, r.jsxs)('div', {
            className: I.emptyPlaceholder,
            children: [
                (0, r.jsx)('div', {
                    className: I.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, r.jsx)('div', {
                    className: I.body,
                    children: t
                })
            ]
        });
    };
class k extends l.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(h.P3F, {
            className: I.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: a()(I.__invalid_text, { hidden: e }),
                    children: P.intl.string(P.t.k5WiPT)
                }),
                (0, r.jsx)(h.$jN, {
                    type: h.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(I.loading, { [I.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: l } = this.props;
        return null != e && (t || n || (null != l && l.isPrivate()))
            ? (0, r.jsx)(d.zx, {
                  look: d.zx.Looks.BLANK,
                  size: d.zx.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, r.jsx)(h.Dio, {
                      size: 'md',
                      color: 'currentColor',
                      className: I.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, r.jsxs)('div', {
            className: I.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        (super(...e),
            R(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            R(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            }));
    }
}
let A = u.ZP.connectStores([_.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && _.Z.can(C.Plq.MANAGE_MESSAGES, t) };
})(k);
function Z(e) {
    let { analyticsName: t, items: n, hasMore: s, loading: i, loadMore: p, renderHeader: m, renderEmptyState: S, renderItem: y, getProTip: b, scrollerClassName: x, className: _, listName: N } = e,
        w = l.useRef(null),
        k = (0, f.Z)(N, w),
        A = (0, u.e7)([v.ZP], () => v.ZP.hasNotice()),
        Z = (0, u.e7)([O.Z], () => O.Z.windowSize());
    (l.useEffect(() => {
        E.default.track(C.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        l.useEffect(() => {
            function e() {
                var e;
                null == (e = w.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = w.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                j.S.subscribe(C.CkL.SCROLL_PAGE_DOWN, t),
                j.S.subscribe(C.CkL.SCROLL_PAGE_UP, e),
                () => {
                    (j.S.unsubscribe(C.CkL.SCROLL_PAGE_DOWN, t), j.S.unsubscribe(C.CkL.SCROLL_PAGE_UP, e));
                }
            );
        }, []));
    let F = l.useCallback(() => {
            var e;
            let t = null == (e = w.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && s && !i && (null == p || p());
        }, [s, p, i]),
        M = [],
        L = !0;
    null == n || (i && 0 === n.length)
        ? (M = [
              (0, r.jsx)(
                  'div',
                  {
                      className: a()(I.emptyPlaceholder, I.loadingPlaceholder),
                      children: (0, r.jsx)(h.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? M.push((0, r.jsx)(l.Fragment, { children: S() }, 'empty-state'))
          : ((L = !1),
            (M = []),
            o().each(n, (e) => {
                M.push(...y(e));
            }));
    let D = null;
    null != n &&
        n.length > 0 &&
        null != p &&
        (D = i
            ? (0, r.jsx)(
                  'div',
                  {
                      className: I.loadingMore,
                      children: (0, r.jsx)(h.$jN, {})
                  },
                  'loading-more-after'
              )
            : s
              ? (0, r.jsx)('div', {
                    className: I.hasMore,
                    children: (0, r.jsx)(d.zx, {
                        look: d.zx.Looks.FILLED,
                        color: d.zx.Colors.PRIMARY,
                        size: d.zx.Sizes.MAX,
                        onClick: p,
                        children: P.intl.string(P.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: I.scrollingFooterWrap,
                    children: S()
                }));
    let H = null == b ? void 0 : b(),
        B =
            L && null != H
                ? (0, r.jsx)('div', {
                      className: I.footer,
                      children: (0, r.jsx)(g.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: H
                      })
                  })
                : null,
        U = { maxHeight: Z.height - 43 - 25 - 48 };
    A && (U.maxHeight -= 40);
    let G = null != p && s;
    return (0, r.jsx)('div', {
        className: a()(_, I.messagesPopoutWrap),
        style: U,
        onClick: T,
        onDoubleClick: T,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(h.y5t, {
            component: m(),
            children: [
                (0, r.jsxs)(h.Den, {
                    className: a()(I.messagesPopout, x),
                    onScroll: G ? F : void 0,
                    ref: w,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: k,
                            children: (0, r.jsx)(c.SJ, {
                                children: (e) => {
                                    var t,
                                        n,
                                        { ref: l } = e,
                                        s = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                l = (function (e, t) {
                                                    if (null == e) return {};
                                                    var n,
                                                        r,
                                                        l = {},
                                                        s = Object.keys(e);
                                                    for (r = 0; r < s.length; r++) ((n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                                                    return l;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var s = Object.getOwnPropertySymbols(e);
                                                for (r = 0; r < s.length; r++) ((n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
                                            }
                                            return l;
                                        })(e, ['ref']);
                                    return (0, r.jsx)(
                                        'div',
                                        ((t = (function (e) {
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
                                                        R(e, t, n[t]);
                                                    }));
                                            }
                                            return e;
                                        })({ ref: l }, s)),
                                        (n = n = { children: M }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(n)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                              }),
                                        t)
                                    );
                                }
                            })
                        }),
                        D
                    ]
                }),
                B
            ]
        })
    });
}
function F(e) {
    let { analyticsName: t, onFetch: n, channel: s, messages: a, hasMore: i, loading: o, loadMore: c, onJump: d, canCloseAllMessages: h = !1, renderHeader: f, renderEmptyState: g, renderMessage: _, getProTip: v, scrollerClassName: O, className: E, onCloseMessage: j, listName: P } = e,
        R = (0, u.e7)([x.Z], () => {
            let e = null != s ? x.Z.getMessages(s.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function T(e, n) {
        if ((0, m.Z)(e) && !R) {
            let { id: r, channel_id: l } = e,
                s = b.Z.getChannel(l);
            (null != s && (p.Z.trackJump(l, r, t), (0, y.uL)(C.Z5c.CHANNEL(s.getGuildId(), l, r))), null == d || d(n));
        }
    }
    l.useEffect(() => {
        n(s);
    }, [s, n]);
    let N = l.useMemo(
        () =>
            null == a
                ? void 0
                : a.map((e) => ({
                      message: e,
                      channel: s
                  })),
        [a, s]
    );
    return (0, r.jsx)(Z, {
        className: E,
        scrollerClassName: O,
        items: N,
        loading: o,
        analyticsName: t,
        renderEmptyState: g,
        renderHeader: f,
        hasMore: i,
        loadMore: c,
        getProTip: v,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != _) return _(t, (e) => T(t, e));
            let l = [];
            return null == n
                ? []
                : (l.push(
                      (0, r.jsxs)(
                          'div',
                          {
                              className: I.messageGroupWrapper,
                              children: [
                                  (0, r.jsx)(S.Z, {
                                      className: I.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, r.jsx)(A, {
                                      channel: s,
                                      message: t,
                                      jumping: R,
                                      canCloseAllMessages: h,
                                      jumpTo: T,
                                      onCloseMessage: j
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  l);
        },
        listName: P,
        'aria-label': e['aria-label']
    });
}
