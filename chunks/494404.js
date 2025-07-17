(r.d(t, {
    ZP: () => L,
    h4: () => N,
    nH: () => A
}),
    r(388685),
    r(539854));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    i = r(392711),
    o = r.n(i),
    c = r(91192),
    u = r(442837),
    d = r(755721),
    h = r(481060),
    p = r(904245),
    f = r(724757),
    g = r(576855),
    m = r(804063),
    _ = r(294218),
    S = r(703656),
    y = r(592125),
    b = r(375954),
    x = r(496675),
    E = r(933429),
    C = r(451478),
    O = r(626135),
    I = r(585483),
    v = r(981631),
    j = r(388032),
    R = r(555565);
function T(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function P(e) {
    e.stopPropagation();
}
let N = (e) => {
        let { title: t, icon: r, children: s, className: l } = e;
        return (0, n.jsxs)('div', {
            className: a()(l, R.header),
            children: [
                (0, n.jsxs)('div', {
                    className: R.titleContainer,
                    children: [
                        null != r ? (0, n.jsx)(r, { color: h.TVs.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, n.jsx)(h.Text, {
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
        let { msg: t, image: r } = e;
        return (0, n.jsxs)('div', {
            className: R.emptyPlaceholder,
            children: [
                (0, n.jsx)('div', {
                    className: R.image,
                    style: { backgroundImage: 'url('.concat(r, ')') }
                }),
                (0, n.jsx)('div', {
                    className: R.body,
                    children: t
                })
            ]
        });
    };
class Z extends s.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, n.jsxs)(h.P3F, {
            className: R.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, n.jsx)('div', {
                    className: a()(R.__invalid_text, { hidden: e }),
                    children: j.intl.string(j.t.k5WiPT)
                }),
                (0, n.jsx)(h.$jN, {
                    type: h.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(R.loading, { [R.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: r, channel: s } = this.props;
        return null != e && (t || r || (null != s && s.isPrivate()))
            ? (0, n.jsx)(d.zx, {
                  look: d.zx.Looks.BLANK,
                  size: d.zx.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, n.jsx)(h.Dio, {
                      size: 'md',
                      color: 'currentColor',
                      className: R.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, n.jsxs)('div', {
            className: R.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        (super(...e),
            T(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: r } = this.props;
                t(r, e);
            }),
            T(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: r } = this.props;
                null != t && t(r, e);
            }));
    }
}
let k = u.ZP.connectStores([x.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && x.Z.can(v.Plq.MANAGE_MESSAGES, t) };
})(Z);
function M(e) {
    let { analyticsName: t, items: r, hasMore: l, loading: i, loadMore: p, renderHeader: m, renderEmptyState: _, renderItem: S, getProTip: y, scrollerClassName: b, className: x, listName: N } = e,
        A = s.useRef(null),
        Z = (0, f.Z)(N, A),
        k = (0, u.e7)([E.ZP], () => E.ZP.hasNotice()),
        M = (0, u.e7)([C.Z], () => C.Z.windowSize());
    (s.useEffect(() => {
        O.default.track(v.rMx.OPEN_POPOUT, { type: t });
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
                I.S.subscribe(v.CkL.SCROLL_PAGE_DOWN, t),
                I.S.subscribe(v.CkL.SCROLL_PAGE_UP, e),
                () => {
                    (I.S.unsubscribe(v.CkL.SCROLL_PAGE_DOWN, t), I.S.unsubscribe(v.CkL.SCROLL_PAGE_UP, e));
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
    null == r || (i && 0 === r.length)
        ? (w = [
              (0, n.jsx)(
                  'div',
                  {
                      className: a()(R.emptyPlaceholder, R.loadingPlaceholder),
                      children: (0, n.jsx)(h.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === r.length
          ? w.push((0, n.jsx)(s.Fragment, { children: _() }, 'empty-state'))
          : ((F = !1),
            (w = []),
            o().each(r, (e) => {
                w.push(...S(e));
            }));
    let D = null;
    null != r &&
        r.length > 0 &&
        null != p &&
        (D = i
            ? (0, n.jsx)(
                  'div',
                  {
                      className: R.loadingMore,
                      children: (0, n.jsx)(h.$jN, {})
                  },
                  'loading-more-after'
              )
            : l
              ? (0, n.jsx)('div', {
                    className: R.hasMore,
                    children: (0, n.jsx)(d.zx, {
                        look: d.zx.Looks.FILLED,
                        color: d.zx.Colors.PRIMARY,
                        size: d.zx.Sizes.MAX,
                        onClick: p,
                        children: j.intl.string(j.t.XBlaiI)
                    })
                })
              : (0, n.jsx)('div', {
                    className: R.scrollingFooterWrap,
                    children: _()
                }));
    let H = null == y ? void 0 : y(),
        B =
            F && null != H
                ? (0, n.jsx)('div', {
                      className: R.footer,
                      children: (0, n.jsx)(g.Z, {
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
    return (0, n.jsx)('div', {
        className: a()(x, R.messagesPopoutWrap),
        style: U,
        onClick: P,
        onDoubleClick: P,
        'aria-label': e['aria-label'],
        children: (0, n.jsxs)(h.y5t, {
            component: m(),
            children: [
                (0, n.jsxs)(h.Den, {
                    className: a()(R.messagesPopout, b),
                    onScroll: W ? L : void 0,
                    ref: A,
                    children: [
                        (0, n.jsx)(c.bG, {
                            navigator: Z,
                            children: (0, n.jsx)(c.SJ, {
                                children: (e) => {
                                    var t,
                                        r,
                                        { ref: s } = e,
                                        l = (function (e, t) {
                                            if (null == e) return {};
                                            var r,
                                                n,
                                                s = (function (e, t) {
                                                    if (null == e) return {};
                                                    var r,
                                                        n,
                                                        s = {},
                                                        l = Object.keys(e);
                                                    for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (s[r] = e[r]));
                                                    return s;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(e);
                                                for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
                                            }
                                            return s;
                                        })(e, ['ref']);
                                    return (0, n.jsx)(
                                        'div',
                                        ((t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        })
                                                    )),
                                                    n.forEach(function (t) {
                                                        T(e, t, r[t]);
                                                    }));
                                            }
                                            return e;
                                        })({ ref: s }, l)),
                                        (r = r = { children: w }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                            : (function (e, t) {
                                                  var r = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var n = Object.getOwnPropertySymbols(e);
                                                      r.push.apply(r, n);
                                                  }
                                                  return r;
                                              })(Object(r)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
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
    let { analyticsName: t, onFetch: r, channel: l, messages: a, hasMore: i, loading: o, loadMore: c, onJump: d, canCloseAllMessages: h = !1, renderHeader: f, renderEmptyState: g, renderMessage: x, getProTip: E, scrollerClassName: C, className: O, onCloseMessage: I, listName: j } = e,
        T = (0, u.e7)([b.Z], () => {
            let e = null != l ? b.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, r) {
        if ((0, m.Z)(e) && !T) {
            let { id: n, channel_id: s } = e,
                l = y.Z.getChannel(s);
            (null != l && (p.Z.trackJump(s, n, t), (0, S.uL)(v.Z5c.CHANNEL(l.getGuildId(), s, n))), null == d || d(r));
        }
    }
    s.useEffect(() => {
        r(l);
    }, [l, r]);
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
    return (0, n.jsx)(M, {
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
            let { message: t, channel: r } = e;
            if (null == t) return [];
            if (null != x) return x(t, (e) => P(t, e));
            let s = [];
            return null == r
                ? []
                : (s.push(
                      (0, n.jsxs)(
                          'div',
                          {
                              className: R.messageGroupWrapper,
                              children: [
                                  (0, n.jsx)(_.Z, {
                                      className: R.messageGroupCozy,
                                      message: t,
                                      channel: r
                                  }),
                                  (0, n.jsx)(k, {
                                      channel: l,
                                      message: t,
                                      jumping: T,
                                      canCloseAllMessages: h,
                                      jumpTo: P,
                                      onCloseMessage: I
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
