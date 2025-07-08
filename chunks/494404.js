(n.d(t, {
    ZP: () => M,
    h4: () => T,
    nH: () => N
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
    d = n(481060),
    h = n(904245),
    p = n(724757),
    f = n(576855),
    g = n(804063),
    m = n(294218),
    S = n(703656),
    y = n(592125),
    b = n(375954),
    x = n(496675),
    _ = n(933429),
    E = n(451478),
    v = n(626135),
    O = n(585483),
    j = n(981631),
    C = n(388032),
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
function P(e) {
    e.stopPropagation();
}
let T = (e) => {
        let { title: t, icon: n, children: s, className: l } = e;
        return (0, r.jsxs)('div', {
            className: a()(l, I.header),
            children: [
                (0, r.jsxs)('div', {
                    className: I.titleContainer,
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
                s
            ]
        });
    },
    N = (e) => {
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
class A extends s.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(d.P3F, {
            className: I.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: a()(I.__invalid_text, { hidden: e }),
                    children: C.intl.string(C.t.k5WiPT)
                }),
                (0, r.jsx)(d.$jN, {
                    type: d.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(I.loading, { [I.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: s } = this.props;
        return null != e && (t || n || (null != s && s.isPrivate()))
            ? (0, r.jsx)(d.zxk, {
                  look: d.zxk.Looks.BLANK,
                  size: d.zxk.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, r.jsx)(d.Dio, {
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
let w = u.ZP.connectStores([x.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && x.Z.can(j.Plq.MANAGE_MESSAGES, t) };
})(A);
function k(e) {
    let { analyticsName: t, items: n, hasMore: l, loading: i, loadMore: h, renderHeader: g, renderEmptyState: m, renderItem: S, getProTip: y, scrollerClassName: b, className: x, listName: T } = e,
        N = s.useRef(null),
        A = (0, p.Z)(T, N),
        w = (0, u.e7)([_.ZP], () => _.ZP.hasNotice()),
        k = (0, u.e7)([E.Z], () => E.Z.windowSize());
    (s.useEffect(() => {
        v.default.track(j.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        s.useEffect(() => {
            function e() {
                var e;
                null == (e = N.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = N.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                O.S.subscribe(j.CkL.SCROLL_PAGE_DOWN, t),
                O.S.subscribe(j.CkL.SCROLL_PAGE_UP, e),
                () => {
                    (O.S.unsubscribe(j.CkL.SCROLL_PAGE_DOWN, t), O.S.unsubscribe(j.CkL.SCROLL_PAGE_UP, e));
                }
            );
        }, []));
    let M = s.useCallback(() => {
            var e;
            let t = null == (e = N.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && l && !i && (null == h || h());
        }, [l, h, i]),
        F = [],
        Z = !0;
    null == n || (i && 0 === n.length)
        ? (F = [
              (0, r.jsx)(
                  'div',
                  {
                      className: a()(I.emptyPlaceholder, I.loadingPlaceholder),
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? F.push((0, r.jsx)(s.Fragment, { children: m() }, 'empty-state'))
          : ((Z = !1),
            (F = []),
            o().each(n, (e) => {
                F.push(...S(e));
            }));
    let D = null;
    null != n &&
        n.length > 0 &&
        null != h &&
        (D = i
            ? (0, r.jsx)(
                  'div',
                  {
                      className: I.loadingMore,
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'loading-more-after'
              )
            : l
              ? (0, r.jsx)('div', {
                    className: I.hasMore,
                    children: (0, r.jsx)(d.zxk, {
                        look: d.zxk.Looks.FILLED,
                        color: d.zxk.Colors.PRIMARY,
                        size: d.zxk.Sizes.MAX,
                        onClick: h,
                        children: C.intl.string(C.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: I.scrollingFooterWrap,
                    children: m()
                }));
    let L = null == y ? void 0 : y(),
        H =
            Z && null != L
                ? (0, r.jsx)('div', {
                      className: I.footer,
                      children: (0, r.jsx)(f.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: L
                      })
                  })
                : null,
        U = { maxHeight: k.height - 43 - 25 - 48 };
    w && (U.maxHeight -= 40);
    let G = null != h && l;
    return (0, r.jsx)('div', {
        className: a()(x, I.messagesPopoutWrap),
        style: U,
        onClick: P,
        onDoubleClick: P,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(d.y5t, {
            component: g(),
            children: [
                (0, r.jsxs)(d.Den, {
                    className: a()(I.messagesPopout, b),
                    onScroll: G ? M : void 0,
                    ref: N,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: A,
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
                                                        R(e, t, n[t]);
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
                H
            ]
        })
    });
}
function M(e) {
    let { analyticsName: t, onFetch: n, channel: l, messages: a, hasMore: i, loading: o, loadMore: c, onJump: d, canCloseAllMessages: p = !1, renderHeader: f, renderEmptyState: x, renderMessage: _, getProTip: E, scrollerClassName: v, className: O, onCloseMessage: C, listName: R } = e,
        P = (0, u.e7)([b.Z], () => {
            let e = null != l ? b.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function T(e, n) {
        if ((0, g.Z)(e) && !P) {
            let { id: r, channel_id: s } = e,
                l = y.Z.getChannel(s);
            (null != l && (h.Z.trackJump(s, r, t), (0, S.uL)(j.Z5c.CHANNEL(l.getGuildId(), s, r))), null == d || d(n));
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
    return (0, r.jsx)(k, {
        className: O,
        scrollerClassName: v,
        items: N,
        loading: o,
        analyticsName: t,
        renderEmptyState: x,
        renderHeader: f,
        hasMore: i,
        loadMore: c,
        getProTip: E,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != _) return _(t, (e) => T(t, e));
            let s = [];
            return null == n
                ? []
                : (s.push(
                      (0, r.jsxs)(
                          'div',
                          {
                              className: I.messageGroupWrapper,
                              children: [
                                  (0, r.jsx)(m.Z, {
                                      className: I.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, r.jsx)(w, {
                                      channel: l,
                                      message: t,
                                      jumping: P,
                                      canCloseAllMessages: p,
                                      jumpTo: T,
                                      onCloseMessage: C
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  s);
        },
        listName: R,
        'aria-label': e['aria-label']
    });
}
