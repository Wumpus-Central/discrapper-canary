(n.d(t, {
    ZP: () => M,
    h4: () => N,
    nH: () => k
}),
    n(388685),
    n(539854));
var r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    i = n.n(o),
    c = n(91192),
    u = n(442837),
    d = n(755721),
    h = n(481060),
    p = n(904245),
    f = n(724757),
    g = n(576855),
    m = n(804063),
    b = n(294218),
    y = n(703656),
    S = n(592125),
    x = n(375954),
    O = n(496675),
    j = n(933429),
    v = n(451478),
    _ = n(626135),
    E = n(585483),
    C = n(981631),
    I = n(388032),
    R = n(555565);
function P(e, t, n) {
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
    k = (e) => {
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
class w extends s.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(h.P3F, {
            className: R.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: a()(R.__invalid_text, { hidden: e }),
                    children: I.intl.string(I.t.k5WiPT)
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
            P(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            P(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            }));
    }
}
let Z = u.ZP.connectStores([O.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && O.Z.can(C.Plq.MANAGE_MESSAGES, t) };
})(w);
function A(e) {
    let { analyticsName: t, items: n, hasMore: l, loading: o, loadMore: p, renderHeader: m, renderEmptyState: b, renderItem: y, getProTip: S, scrollerClassName: x, className: O, listName: N } = e,
        k = s.useRef(null),
        w = (0, f.Z)(N, k),
        Z = (0, u.e7)([j.ZP], () => j.ZP.hasNotice()),
        A = (0, u.e7)([v.Z], () => v.Z.windowSize());
    (s.useEffect(() => {
        _.default.track(C.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        s.useEffect(() => {
            function e() {
                var e;
                null == (e = k.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = k.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                E.S.subscribe(C.CkL.SCROLL_PAGE_DOWN, t),
                E.S.subscribe(C.CkL.SCROLL_PAGE_UP, e),
                () => {
                    (E.S.unsubscribe(C.CkL.SCROLL_PAGE_DOWN, t), E.S.unsubscribe(C.CkL.SCROLL_PAGE_UP, e));
                }
            );
        }, []));
    let M = s.useCallback(() => {
            var e;
            let t = null == (e = k.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && l && !o && (null == p || p());
        }, [l, p, o]),
        F = [],
        L = !0;
    null == n || (o && 0 === n.length)
        ? (F = [
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
          ? F.push((0, r.jsx)(s.Fragment, { children: b() }, 'empty-state'))
          : ((L = !1),
            (F = []),
            i().each(n, (e) => {
                F.push(...y(e));
            }));
    let D = null;
    null != n &&
        n.length > 0 &&
        null != p &&
        (D = o
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
                        children: I.intl.string(I.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: R.scrollingFooterWrap,
                    children: b()
                }));
    let H = null == S ? void 0 : S(),
        B =
            L && null != H
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
        U = { maxHeight: A.height - 43 - 25 - 48 };
    Z && (U.maxHeight -= 40);
    let G = null != p && l;
    return (0, r.jsx)('div', {
        className: a()(O, R.messagesPopoutWrap),
        style: U,
        onClick: T,
        onDoubleClick: T,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(h.y5t, {
            component: m(),
            children: [
                (0, r.jsxs)(h.Den, {
                    className: a()(R.messagesPopout, x),
                    onScroll: G ? M : void 0,
                    ref: k,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: w,
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
                                                        P(e, t, n[t]);
                                                    }));
                                            }
                                            return e;
                                        })({ ref: s }, l)),
                                        (n = n = { children: F }),
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
function M(e) {
    let { analyticsName: t, onFetch: n, channel: l, messages: a, hasMore: o, loading: i, loadMore: c, onJump: d, canCloseAllMessages: h = !1, renderHeader: f, renderEmptyState: g, renderMessage: O, getProTip: j, scrollerClassName: v, className: _, onCloseMessage: E, listName: I } = e,
        P = (0, u.e7)([x.Z], () => {
            let e = null != l ? x.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function T(e, n) {
        if ((0, m.Z)(e) && !P) {
            let { id: r, channel_id: s } = e,
                l = S.Z.getChannel(s);
            (null != l && (p.Z.trackJump(s, r, t), (0, y.uL)(C.Z5c.CHANNEL(l.getGuildId(), s, r))), null == d || d(n));
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
    return (0, r.jsx)(A, {
        className: _,
        scrollerClassName: v,
        items: N,
        loading: i,
        analyticsName: t,
        renderEmptyState: g,
        renderHeader: f,
        hasMore: o,
        loadMore: c,
        getProTip: j,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != O) return O(t, (e) => T(t, e));
            let s = [];
            return null == n
                ? []
                : (s.push(
                      (0, r.jsxs)(
                          'div',
                          {
                              className: R.messageGroupWrapper,
                              children: [
                                  (0, r.jsx)(b.Z, {
                                      className: R.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, r.jsx)(Z, {
                                      channel: l,
                                      message: t,
                                      jumping: P,
                                      canCloseAllMessages: h,
                                      jumpTo: T,
                                      onCloseMessage: E
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  s);
        },
        listName: I,
        'aria-label': e['aria-label']
    });
}
