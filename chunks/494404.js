(n.d(t, {
    ZP: () => L,
    h4: () => N,
    nH: () => A
}),
    n(388685),
    n(539854));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
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
    _ = n(294218),
    S = n(703656),
    y = n(592125),
    b = n(375954),
    x = n(496675),
    E = n(933429),
    C = n(451478),
    O = n(626135),
    v = n(585483),
    I = n(981631),
    j = n(388032),
    R = n(555565);
function T(e, t, n) {
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
function P(e) {
    e.stopPropagation();
}
let N = (e) => {
        let { title: t, icon: n, children: s, className: l } = e;
        return (0, r.jsxs)('div', {
            className: a()(l, R.header),
            children: [
                (0, r.jsxs)('div', {
                    className: R.titleContainer,
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
                s
            ]
        });
    },
    A = (e) => {
        let { msg: t, image: n } = e;
        return (0, r.jsxs)('div', {
            className: R.emptyPlaceholder,
            children: [
                (0, r.jsx)('div', {
                    className: R.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, r.jsx)('div', {
                    className: R.body,
                    children: t
                })
            ]
        });
    };
class Z extends s.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(h.P3F, {
            className: R.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: a()(R.__invalid_text, { hidden: e }),
                    children: j.intl.string(j.t.k5WiPT)
                }),
                (0, r.jsx)(h.$jN, {
                    type: h.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(R.loading, { [R.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: s } = this.props;
        return null != e && (t || n || (null != s && s.isPrivate()))
            ? (0, r.jsx)(d.zx, {
                  look: d.zx.Looks.BLANK,
                  size: d.zx.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, r.jsx)(h.Dio, {
                      size: 'md',
                      color: 'currentColor',
                      className: R.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, r.jsxs)('div', {
            className: R.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        (super(...e),
            T(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            T(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            }));
    }
}
let k = u.ZP.connectStores([x.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && x.Z.can(I.Plq.MANAGE_MESSAGES, t) };
})(Z);
function M(e) {
    let { analyticsName: t, items: n, hasMore: l, loading: i, loadMore: p, renderHeader: m, renderEmptyState: _, renderItem: S, getProTip: y, scrollerClassName: b, className: x, listName: N } = e,
        A = s.useRef(null),
        Z = (0, f.Z)(N, A),
        k = (0, u.e7)([E.ZP], () => E.ZP.hasNotice()),
        M = (0, u.e7)([C.Z], () => C.Z.windowSize());
    (s.useEffect(() => {
        O.default.track(I.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        s.useEffect(() => {
            function e() {
                var e;
                null == (e = A.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = A.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                v.S.subscribe(I.CkL.SCROLL_PAGE_DOWN, t),
                v.S.subscribe(I.CkL.SCROLL_PAGE_UP, e),
                () => {
                    (v.S.unsubscribe(I.CkL.SCROLL_PAGE_DOWN, t), v.S.unsubscribe(I.CkL.SCROLL_PAGE_UP, e));
                }
            );
        }, []));
    let L = s.useCallback(() => {
            var e;
            let t = null == (e = A.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && l && !i && (null == p || p());
        }, [l, p, i]),
        w = [],
        F = !0;
    null == n || (i && 0 === n.length)
        ? (w = [
              (0, r.jsx)(
                  'div',
                  {
                      className: a()(R.emptyPlaceholder, R.loadingPlaceholder),
                      children: (0, r.jsx)(h.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? w.push((0, r.jsx)(s.Fragment, { children: _() }, 'empty-state'))
          : ((F = !1),
            (w = []),
            o().each(n, (e) => {
                w.push(...S(e));
            }));
    let D = null;
    null != n &&
        n.length > 0 &&
        null != p &&
        (D = i
            ? (0, r.jsx)(
                  'div',
                  {
                      className: R.loadingMore,
                      children: (0, r.jsx)(h.$jN, {})
                  },
                  'loading-more-after'
              )
            : l
              ? (0, r.jsx)('div', {
                    className: R.hasMore,
                    children: (0, r.jsx)(d.zx, {
                        look: d.zx.Looks.FILLED,
                        color: d.zx.Colors.PRIMARY,
                        size: d.zx.Sizes.MAX,
                        onClick: p,
                        children: j.intl.string(j.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: R.scrollingFooterWrap,
                    children: _()
                }));
    let H = null == y ? void 0 : y(),
        B =
            F && null != H
                ? (0, r.jsx)('div', {
                      className: R.footer,
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
        U = { maxHeight: M.height - 43 - 25 - 48 };
    k && (U.maxHeight -= 40);
    let W = null != p && l;
    return (0, r.jsx)('div', {
        className: a()(x, R.messagesPopoutWrap),
        style: U,
        onClick: P,
        onDoubleClick: P,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(h.y5t, {
            component: m(),
            children: [
                (0, r.jsxs)(h.Den, {
                    className: a()(R.messagesPopout, b),
                    onScroll: W ? L : void 0,
                    ref: A,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: Z,
                            children: (0, r.jsx)(c.SJ, {
                                children: (e) => {
                                    var t,
                                        n,
                                        { ref: s } = e,
                                        l = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                s = (function (e, t) {
                                                    if (null == e) return {};
                                                    var n,
                                                        r,
                                                        s = {},
                                                        l = Object.keys(e);
                                                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                                                    return s;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(e);
                                                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
                                            }
                                            return s;
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
                                                        T(e, t, n[t]);
                                                    }));
                                            }
                                            return e;
                                        })({ ref: s }, l)),
                                        (n = n = { children: w }),
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
function L(e) {
    let { analyticsName: t, onFetch: n, channel: l, messages: a, hasMore: i, loading: o, loadMore: c, onJump: d, canCloseAllMessages: h = !1, renderHeader: f, renderEmptyState: g, renderMessage: x, getProTip: E, scrollerClassName: C, className: O, onCloseMessage: v, listName: j } = e,
        T = (0, u.e7)([b.Z], () => {
            let e = null != l ? b.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, n) {
        if ((0, m.Z)(e) && !T) {
            let { id: r, channel_id: s } = e,
                l = y.Z.getChannel(s);
            (null != l && (p.Z.trackJump(s, r, t), (0, S.uL)(I.Z5c.CHANNEL(l.getGuildId(), s, r))), null == d || d(n));
        }
    }
    s.useEffect(() => {
        n(l);
    }, [l, n]);
    let N = s.useMemo(
        () =>
            null == a
                ? void 0
                : a.map((e) => ({
                      message: e,
                      channel: l
                  })),
        [a, l]
    );
    return (0, r.jsx)(M, {
        className: O,
        scrollerClassName: C,
        items: N,
        loading: o,
        analyticsName: t,
        renderEmptyState: g,
        renderHeader: f,
        hasMore: i,
        loadMore: c,
        getProTip: E,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != x) return x(t, (e) => P(t, e));
            let s = [];
            return null == n
                ? []
                : (s.push(
                      (0, r.jsxs)(
                          'div',
                          {
                              className: R.messageGroupWrapper,
                              children: [
                                  (0, r.jsx)(_.Z, {
                                      className: R.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, r.jsx)(k, {
                                      channel: l,
                                      message: t,
                                      jumping: T,
                                      canCloseAllMessages: h,
                                      jumpTo: P,
                                      onCloseMessage: v
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  s);
        },
        listName: j,
        'aria-label': e['aria-label']
    });
}
