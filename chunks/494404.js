(n.d(t, {
    ZP: () => D,
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
    h = n(755721),
    d = n(481060),
    p = n(904245),
    f = n(724757),
    g = n(576855),
    m = n(804063),
    y = n(294218),
    x = n(703656),
    b = n(592125),
    S = n(375954),
    v = n(496675),
    j = n(933429),
    C = n(451478),
    O = n(626135),
    _ = n(585483),
    P = n(981631),
    R = n(388032),
    E = n(555565);
function I(e, t, n) {
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
            className: a()(l, E.header),
            children: [
                (0, r.jsxs)('div', {
                    className: E.titleContainer,
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
    k = (e) => {
        let { msg: t, image: n } = e;
        return (0, r.jsxs)('div', {
            className: E.emptyPlaceholder,
            children: [
                (0, r.jsx)('div', {
                    className: E.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, r.jsx)('div', {
                    className: E.body,
                    children: t
                })
            ]
        });
    };
class w extends s.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(d.P3F, {
            className: E.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: a()(E.__invalid_text, { hidden: e }),
                    children: R.intl.string(R.t.k5WiPT)
                }),
                (0, r.jsx)(d.$jN, {
                    type: d.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(E.loading, { [E.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: s } = this.props;
        return null != e && (t || n || (null != s && s.isPrivate()))
            ? (0, r.jsx)(h.zx, {
                  look: h.zx.Looks.BLANK,
                  size: h.zx.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, r.jsx)(d.Dio, {
                      size: 'md',
                      color: 'currentColor',
                      className: E.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, r.jsxs)('div', {
            className: E.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        (super(...e),
            I(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            I(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            }));
    }
}
let Z = u.ZP.connectStores([v.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && v.Z.can(P.Plq.MANAGE_MESSAGES, t) };
})(w);
function A(e) {
    let { analyticsName: t, items: n, hasMore: l, loading: o, loadMore: p, renderHeader: m, renderEmptyState: y, renderItem: x, getProTip: b, scrollerClassName: S, className: v, listName: N } = e,
        k = s.useRef(null),
        w = (0, f.Z)(N, k),
        Z = (0, u.e7)([j.ZP], () => j.ZP.hasNotice()),
        A = (0, u.e7)([C.Z], () => C.Z.windowSize());
    (s.useEffect(() => {
        O.default.track(P.rMx.OPEN_POPOUT, { type: t });
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
                _.S.subscribe(P.CkL.SCROLL_PAGE_DOWN, t),
                _.S.subscribe(P.CkL.SCROLL_PAGE_UP, e),
                () => {
                    (_.S.unsubscribe(P.CkL.SCROLL_PAGE_DOWN, t), _.S.unsubscribe(P.CkL.SCROLL_PAGE_UP, e));
                }
            );
        }, []));
    let D = s.useCallback(() => {
            var e;
            let t = null == (e = k.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && l && !o && (null == p || p());
        }, [l, p, o]),
        M = [],
        F = !0;
    null == n || (o && 0 === n.length)
        ? (M = [
              (0, r.jsx)(
                  'div',
                  {
                      className: a()(E.emptyPlaceholder, E.loadingPlaceholder),
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? M.push((0, r.jsx)(s.Fragment, { children: y() }, 'empty-state'))
          : ((F = !1),
            (M = []),
            i().each(n, (e) => {
                M.push(...x(e));
            }));
    let L = null;
    null != n &&
        n.length > 0 &&
        null != p &&
        (L = o
            ? (0, r.jsx)(
                  'div',
                  {
                      className: E.loadingMore,
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'loading-more-after'
              )
            : l
              ? (0, r.jsx)('div', {
                    className: E.hasMore,
                    children: (0, r.jsx)(h.zx, {
                        look: h.zx.Looks.FILLED,
                        color: h.zx.Colors.PRIMARY,
                        size: h.zx.Sizes.MAX,
                        onClick: p,
                        children: R.intl.string(R.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: E.scrollingFooterWrap,
                    children: y()
                }));
    let B = null == b ? void 0 : b(),
        H =
            F && null != B
                ? (0, r.jsx)('div', {
                      className: E.footer,
                      children: (0, r.jsx)(g.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: B
                      })
                  })
                : null,
        Q = { maxHeight: A.height - 43 - 25 - 48 };
    Z && (Q.maxHeight -= 40);
    let U = null != p && l;
    return (0, r.jsx)('div', {
        className: a()(v, E.messagesPopoutWrap),
        style: Q,
        onClick: T,
        onDoubleClick: T,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(d.y5t, {
            component: m(),
            children: [
                (0, r.jsxs)(d.Den, {
                    className: a()(E.messagesPopout, S),
                    onScroll: U ? D : void 0,
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
                                                        I(e, t, n[t]);
                                                    }));
                                            }
                                            return e;
                                        })({ ref: s }, l)),
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
                        L
                    ]
                }),
                H
            ]
        })
    });
}
function D(e) {
    let { analyticsName: t, onFetch: n, channel: l, messages: a, hasMore: o, loading: i, loadMore: c, onJump: h, canCloseAllMessages: d = !1, renderHeader: f, renderEmptyState: g, renderMessage: v, getProTip: j, scrollerClassName: C, className: O, onCloseMessage: _, listName: R } = e,
        I = (0, u.e7)([S.Z], () => {
            let e = null != l ? S.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function T(e, n) {
        if ((0, m.Z)(e) && !I) {
            let { id: r, channel_id: s } = e,
                l = b.Z.getChannel(s);
            (null != l && (p.Z.trackJump(s, r, t), (0, x.uL)(P.Z5c.CHANNEL(l.getGuildId(), s, r))), null == h || h(n));
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
        className: O,
        scrollerClassName: C,
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
            if (null != v) return v(t, (e) => T(t, e));
            let s = [];
            return null == n
                ? []
                : (s.push(
                      (0, r.jsxs)(
                          'div',
                          {
                              className: E.messageGroupWrapper,
                              children: [
                                  (0, r.jsx)(y.Z, {
                                      className: E.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, r.jsx)(Z, {
                                      channel: l,
                                      message: t,
                                      jumping: I,
                                      canCloseAllMessages: d,
                                      jumpTo: T,
                                      onCloseMessage: _
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
