(r.d(t, {
    ZP: () => w,
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
    h = r(755721),
    d = r(481060),
    p = r(904245),
    f = r(724757),
    g = r(576855),
    m = r(804063),
    S = r(294218),
    _ = r(703656),
    y = r(592125),
    b = r(375954),
    x = r(496675),
    E = r(933429),
    O = r(451478),
    C = r(626135),
    v = r(585483),
    j = r(981631),
    R = r(388032),
    I = r(555565);
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
            className: a()(l, I.header),
            children: [
                (0, n.jsxs)('div', {
                    className: I.titleContainer,
                    children: [
                        null != r ? (0, n.jsx)(r, { color: d.TVs.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, n.jsx)(d.Text, {
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
            className: I.emptyPlaceholder,
            children: [
                (0, n.jsx)('div', {
                    className: I.image,
                    style: { backgroundImage: 'url('.concat(r, ')') }
                }),
                (0, n.jsx)('div', {
                    className: I.body,
                    children: t
                })
            ]
        });
    };
class M extends s.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, n.jsxs)(d.P3F, {
            className: I.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, n.jsx)('div', {
                    className: a()(I.__invalid_text, { hidden: e }),
                    children: R.intl.string(R.t.k5WiPT)
                }),
                (0, n.jsx)(d.$jN, {
                    type: d.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(I.loading, { [I.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: r, channel: s } = this.props;
        return null != e && (t || r || (null != s && s.isPrivate()))
            ? (0, n.jsx)(h.zx, {
                  look: h.zx.Looks.BLANK,
                  size: h.zx.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, n.jsx)(d.Dio, {
                      size: 'md',
                      color: 'currentColor',
                      className: I.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, n.jsxs)('div', {
            className: I.actionButtons,
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
let Z = u.ZP.connectStores([x.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && x.Z.can(j.Plq.MANAGE_MESSAGES, t) };
})(M);
function k(e) {
    let { analyticsName: t, items: r, hasMore: l, loading: i, loadMore: p, renderHeader: m, renderEmptyState: S, renderItem: _, getProTip: y, scrollerClassName: b, className: x, listName: N } = e,
        A = s.useRef(null),
        M = (0, f.Z)(N, A),
        Z = (0, u.e7)([E.ZP], () => E.ZP.hasNotice()),
        k = (0, u.e7)([O.Z], () => O.Z.windowSize());
    (s.useEffect(() => {
        C.default.track(j.rMx.OPEN_POPOUT, { type: t });
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
                v.S.subscribe(j.CkL.SCROLL_PAGE_DOWN, t),
                v.S.subscribe(j.CkL.SCROLL_PAGE_UP, e),
                () => {
                    (v.S.unsubscribe(j.CkL.SCROLL_PAGE_DOWN, t), v.S.unsubscribe(j.CkL.SCROLL_PAGE_UP, e));
                }
            );
        }, []));
    let w = s.useCallback(() => {
            var e;
            let t = null == (e = A.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && l && !i && (null == p || p());
        }, [l, p, i]),
        L = [],
        D = !0;
    null == r || (i && 0 === r.length)
        ? (L = [
              (0, n.jsx)(
                  'div',
                  {
                      className: a()(I.emptyPlaceholder, I.loadingPlaceholder),
                      children: (0, n.jsx)(d.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === r.length
          ? L.push((0, n.jsx)(s.Fragment, { children: S() }, 'empty-state'))
          : ((D = !1),
            (L = []),
            o().each(r, (e) => {
                L.push(..._(e));
            }));
    let F = null;
    null != r &&
        r.length > 0 &&
        null != p &&
        (F = i
            ? (0, n.jsx)(
                  'div',
                  {
                      className: I.loadingMore,
                      children: (0, n.jsx)(d.$jN, {})
                  },
                  'loading-more-after'
              )
            : l
              ? (0, n.jsx)('div', {
                    className: I.hasMore,
                    children: (0, n.jsx)(h.zx, {
                        look: h.zx.Looks.FILLED,
                        color: h.zx.Colors.PRIMARY,
                        size: h.zx.Sizes.MAX,
                        onClick: p,
                        children: R.intl.string(R.t.XBlaiI)
                    })
                })
              : (0, n.jsx)('div', {
                    className: I.scrollingFooterWrap,
                    children: S()
                }));
    let H = null == y ? void 0 : y(),
        B =
            D && null != H
                ? (0, n.jsx)('div', {
                      className: I.footer,
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
        U = { maxHeight: k.height - 43 - 25 - 48 };
    Z && (U.maxHeight -= 40);
    let W = null != p && l;
    return (0, n.jsx)('div', {
        className: a()(x, I.messagesPopoutWrap),
        style: U,
        onClick: P,
        onDoubleClick: P,
        'aria-label': e['aria-label'],
        children: (0, n.jsxs)(d.y5t, {
            component: m(),
            children: [
                (0, n.jsxs)(d.Den, {
                    className: a()(I.messagesPopout, b),
                    onScroll: W ? w : void 0,
                    ref: A,
                    children: [
                        (0, n.jsx)(c.bG, {
                            navigator: M,
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
                                        (r = r = { children: L }),
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
                        F
                    ]
                }),
                B
            ]
        })
    });
}
function w(e) {
    let { analyticsName: t, onFetch: r, channel: l, messages: a, hasMore: i, loading: o, loadMore: c, onJump: h, canCloseAllMessages: d = !1, renderHeader: f, renderEmptyState: g, renderMessage: x, getProTip: E, scrollerClassName: O, className: C, onCloseMessage: v, listName: R } = e,
        T = (0, u.e7)([b.Z], () => {
            let e = null != l ? b.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, r) {
        if ((0, m.Z)(e) && !T) {
            let { id: n, channel_id: s } = e,
                l = y.Z.getChannel(s);
            (null != l && (p.Z.trackJump(s, n, t), (0, _.uL)(j.Z5c.CHANNEL(l.getGuildId(), s, n))), null == h || h(r));
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
    return (0, n.jsx)(k, {
        className: C,
        scrollerClassName: O,
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
                              className: I.messageGroupWrapper,
                              children: [
                                  (0, n.jsx)(S.Z, {
                                      className: I.messageGroupCozy,
                                      message: t,
                                      channel: r
                                  }),
                                  (0, n.jsx)(Z, {
                                      channel: l,
                                      message: t,
                                      jumping: T,
                                      canCloseAllMessages: d,
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
        listName: R,
        'aria-label': e['aria-label']
    });
}
