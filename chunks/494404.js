(n.d(t, {
    ZP: () => Z,
    h4: () => T,
    nH: () => N
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
    d = n(481060),
    h = n(904245),
    p = n(724757),
    f = n(576855),
    g = n(804063),
    m = n(294218),
    y = n(703656),
    b = n(592125),
    S = n(375954),
    x = n(496675),
    _ = n(933429),
    v = n(451478),
    O = n(626135),
    E = n(585483),
    j = n(981631),
    C = n(388032),
    P = n(555565);
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
function I(e) {
    e.stopPropagation();
}
let T = (e) => {
        let { title: t, icon: n, children: l, className: s } = e;
        return (0, r.jsxs)('div', {
            className: a()(s, P.header),
            children: [
                (0, r.jsxs)('div', {
                    className: P.titleContainer,
                    children: [
                        null != n ? (0, r.jsx)(n, { color: d.TVs.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, r.jsx)(d.Text, {
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
    N = (e) => {
        let { msg: t, image: n } = e;
        return (0, r.jsxs)('div', {
            className: P.emptyPlaceholder,
            children: [
                (0, r.jsx)('div', {
                    className: P.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, r.jsx)('div', {
                    className: P.body,
                    children: t
                })
            ]
        });
    };
class k extends l.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(d.P3F, {
            className: P.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: a()(P.__invalid_text, { hidden: e }),
                    children: C.intl.string(C.t.k5WiPT)
                }),
                (0, r.jsx)(d.$jN, {
                    type: d.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(P.loading, { [P.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: l } = this.props;
        return null != e && (t || n || (null != l && l.isPrivate()))
            ? (0, r.jsx)(d.zxk, {
                  look: d.zxk.Looks.BLANK,
                  size: d.zxk.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, r.jsx)(d.Dio, {
                      size: 'md',
                      color: 'currentColor',
                      className: P.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, r.jsxs)('div', {
            className: P.actionButtons,
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
let w = u.ZP.connectStores([x.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && x.Z.can(j.Plq.MANAGE_MESSAGES, t) };
})(k);
function A(e) {
    let { analyticsName: t, items: n, hasMore: s, loading: i, loadMore: h, renderHeader: g, renderEmptyState: m, renderItem: y, getProTip: b, scrollerClassName: S, className: x, listName: T } = e,
        N = l.useRef(null),
        k = (0, p.Z)(T, N),
        w = (0, u.e7)([_.ZP], () => _.ZP.hasNotice()),
        A = (0, u.e7)([v.Z], () => v.Z.windowSize());
    (l.useEffect(() => {
        O.default.track(j.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        l.useEffect(() => {
            function e() {
                var e;
                null == (e = N.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = N.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                E.S.subscribe(j.CkL.SCROLL_PAGE_DOWN, t),
                E.S.subscribe(j.CkL.SCROLL_PAGE_UP, e),
                () => {
                    (E.S.unsubscribe(j.CkL.SCROLL_PAGE_DOWN, t), E.S.unsubscribe(j.CkL.SCROLL_PAGE_UP, e));
                }
            );
        }, []));
    let Z = l.useCallback(() => {
            var e;
            let t = null == (e = N.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && s && !i && (null == h || h());
        }, [s, h, i]),
        F = [],
        M = !0;
    null == n || (i && 0 === n.length)
        ? (F = [
              (0, r.jsx)(
                  'div',
                  {
                      className: a()(P.emptyPlaceholder, P.loadingPlaceholder),
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? F.push((0, r.jsx)(l.Fragment, { children: m() }, 'empty-state'))
          : ((M = !1),
            (F = []),
            o().each(n, (e) => {
                F.push(...y(e));
            }));
    let L = null;
    null != n &&
        n.length > 0 &&
        null != h &&
        (L = i
            ? (0, r.jsx)(
                  'div',
                  {
                      className: P.loadingMore,
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'loading-more-after'
              )
            : s
              ? (0, r.jsx)('div', {
                    className: P.hasMore,
                    children: (0, r.jsx)(d.zxk, {
                        look: d.zxk.Looks.FILLED,
                        color: d.zxk.Colors.PRIMARY,
                        size: d.zxk.Sizes.MAX,
                        onClick: h,
                        children: C.intl.string(C.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: P.scrollingFooterWrap,
                    children: m()
                }));
    let D = null == b ? void 0 : b(),
        H =
            M && null != D
                ? (0, r.jsx)('div', {
                      className: P.footer,
                      children: (0, r.jsx)(f.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: D
                      })
                  })
                : null,
        U = { maxHeight: A.height - 43 - 25 - 48 };
    w && (U.maxHeight -= 40);
    let B = null != h && s;
    return (0, r.jsx)('div', {
        className: a()(x, P.messagesPopoutWrap),
        style: U,
        onClick: I,
        onDoubleClick: I,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(d.y5t, {
            component: g(),
            children: [
                (0, r.jsxs)(d.Den, {
                    className: a()(P.messagesPopout, S),
                    onScroll: B ? Z : void 0,
                    ref: N,
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
                        L
                    ]
                }),
                H
            ]
        })
    });
}
function Z(e) {
    let { analyticsName: t, onFetch: n, channel: s, messages: a, hasMore: i, loading: o, loadMore: c, onJump: d, canCloseAllMessages: p = !1, renderHeader: f, renderEmptyState: x, renderMessage: _, getProTip: v, scrollerClassName: O, className: E, onCloseMessage: C, listName: R } = e,
        I = (0, u.e7)([S.Z], () => {
            let e = null != s ? S.Z.getMessages(s.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function T(e, n) {
        if ((0, g.Z)(e) && !I) {
            let { id: r, channel_id: l } = e,
                s = b.Z.getChannel(l);
            (null != s && (h.Z.trackJump(l, r, t), (0, y.uL)(j.Z5c.CHANNEL(s.getGuildId(), l, r))), null == d || d(n));
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
    return (0, r.jsx)(A, {
        className: E,
        scrollerClassName: O,
        items: N,
        loading: o,
        analyticsName: t,
        renderEmptyState: x,
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
                              className: P.messageGroupWrapper,
                              children: [
                                  (0, r.jsx)(m.Z, {
                                      className: P.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, r.jsx)(w, {
                                      channel: s,
                                      message: t,
                                      jumping: I,
                                      canCloseAllMessages: p,
                                      jumpTo: T,
                                      onCloseMessage: C
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  l);
        },
        listName: R,
        'aria-label': e['aria-label']
    });
}
