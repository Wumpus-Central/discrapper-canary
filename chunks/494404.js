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
    _ = r(294218),
    y = r(703656),
    S = r(592125),
    x = r(375954),
    b = r(496675),
    v = r(933429),
    C = r(451478),
    j = r(626135),
    E = r(585483),
    O = r(981631),
    R = r(388032),
    I = r(555565);
function P(e, t, r) {
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
function T(e) {
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
class k extends s.PureComponent {
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
            P(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: r } = this.props;
                t(r, e);
            }),
            P(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: r } = this.props;
                null != t && t(r, e);
            }));
    }
}
let M = u.ZP.connectStores([b.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && b.Z.can(O.Plq.MANAGE_MESSAGES, t) };
})(k);
function Z(e) {
    let { analyticsName: t, items: r, hasMore: l, loading: i, loadMore: p, renderHeader: m, renderEmptyState: _, renderItem: y, getProTip: S, scrollerClassName: x, className: b, listName: N } = e,
        A = s.useRef(null),
        k = (0, f.Z)(N, A),
        M = (0, u.e7)([v.ZP], () => v.ZP.hasNotice()),
        Z = (0, u.e7)([C.Z], () => C.Z.windowSize());
    (s.useEffect(() => {
        j.default.track(O.rMx.OPEN_POPOUT, { type: t });
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
                E.S.subscribe(O.CkL.SCROLL_PAGE_DOWN, t),
                E.S.subscribe(O.CkL.SCROLL_PAGE_UP, e),
                () => {
                    (E.S.unsubscribe(O.CkL.SCROLL_PAGE_DOWN, t), E.S.unsubscribe(O.CkL.SCROLL_PAGE_UP, e));
                }
            );
        }, []));
    let w = s.useCallback(() => {
            var e;
            let t = null == (e = A.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && l && !i && (null == p || p());
        }, [l, p, i]),
        D = [],
        L = !0;
    null == r || (i && 0 === r.length)
        ? (D = [
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
          ? D.push((0, n.jsx)(s.Fragment, { children: _() }, 'empty-state'))
          : ((L = !1),
            (D = []),
            o().each(r, (e) => {
                D.push(...y(e));
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
                    children: _()
                }));
    let W = null == S ? void 0 : S(),
        H =
            L && null != W
                ? (0, n.jsx)('div', {
                      className: I.footer,
                      children: (0, n.jsx)(g.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: W
                      })
                  })
                : null,
        B = { maxHeight: Z.height - 43 - 25 - 48 };
    M && (B.maxHeight -= 40);
    let U = null != p && l;
    return (0, n.jsx)('div', {
        className: a()(b, I.messagesPopoutWrap),
        style: B,
        onClick: T,
        onDoubleClick: T,
        'aria-label': e['aria-label'],
        children: (0, n.jsxs)(d.y5t, {
            component: m(),
            children: [
                (0, n.jsxs)(d.Den, {
                    className: a()(I.messagesPopout, x),
                    onScroll: U ? w : void 0,
                    ref: A,
                    children: [
                        (0, n.jsx)(c.bG, {
                            navigator: k,
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
                                                        P(e, t, r[t]);
                                                    }));
                                            }
                                            return e;
                                        })({ ref: s }, l)),
                                        (r = r = { children: D }),
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
                H
            ]
        })
    });
}
function w(e) {
    let { analyticsName: t, onFetch: r, channel: l, messages: a, hasMore: i, loading: o, loadMore: c, onJump: h, canCloseAllMessages: d = !1, renderHeader: f, renderEmptyState: g, renderMessage: b, getProTip: v, scrollerClassName: C, className: j, onCloseMessage: E, listName: R } = e,
        P = (0, u.e7)([x.Z], () => {
            let e = null != l ? x.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function T(e, r) {
        if ((0, m.Z)(e) && !P) {
            let { id: n, channel_id: s } = e,
                l = S.Z.getChannel(s);
            (null != l && (p.Z.trackJump(s, n, t), (0, y.uL)(O.Z5c.CHANNEL(l.getGuildId(), s, n))), null == h || h(r));
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
    return (0, n.jsx)(Z, {
        className: j,
        scrollerClassName: C,
        items: N,
        loading: o,
        analyticsName: t,
        renderEmptyState: g,
        renderHeader: f,
        hasMore: i,
        loadMore: c,
        getProTip: v,
        renderItem: function (e) {
            let { message: t, channel: r } = e;
            if (null == t) return [];
            if (null != b) return b(t, (e) => T(t, e));
            let s = [];
            return null == r
                ? []
                : (s.push(
                      (0, n.jsxs)(
                          'div',
                          {
                              className: I.messageGroupWrapper,
                              children: [
                                  (0, n.jsx)(_.Z, {
                                      className: I.messageGroupCozy,
                                      message: t,
                                      channel: r
                                  }),
                                  (0, n.jsx)(M, {
                                      channel: l,
                                      message: t,
                                      jumping: P,
                                      canCloseAllMessages: d,
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
        listName: R,
        'aria-label': e['aria-label']
    });
}
