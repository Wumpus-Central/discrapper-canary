(r.d(t, {
    ZP: () => M,
    h4: () => N,
    nH: () => k
}),
    r(388685),
    r(539854));
var n = r(255367),
    s = r(73800),
    l = r(120356),
    a = r.n(l),
    o = r(392711),
    i = r.n(o),
    c = r(91192),
    u = r(442837),
    d = r(755721),
    h = r(481060),
    p = r(904245),
    f = r(724757),
    g = r(576855),
    m = r(804063),
    b = r(294218),
    y = r(703656),
    S = r(592125),
    x = r(375954),
    O = r(496675),
    j = r(933429),
    v = r(451478),
    _ = r(626135),
    E = r(585483),
    C = r(981631),
    I = r(388032),
    R = r(555565);
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
    k = (e) => {
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
class w extends s.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, n.jsxs)(h.P3F, {
            className: R.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, n.jsx)('div', {
                    className: a()(R.__invalid_text, { hidden: e }),
                    children: I.intl.string(I.t.k5WiPT)
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
let Z = u.ZP.connectStores([O.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && O.Z.can(C.Plq.MANAGE_MESSAGES, t) };
})(w);
function A(e) {
    let { analyticsName: t, items: r, hasMore: l, loading: o, loadMore: p, renderHeader: m, renderEmptyState: b, renderItem: y, getProTip: S, scrollerClassName: x, className: O, listName: N } = e,
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
    null == r || (o && 0 === r.length)
        ? (F = [
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
          ? F.push((0, n.jsx)(s.Fragment, { children: b() }, 'empty-state'))
          : ((L = !1),
            (F = []),
            i().each(r, (e) => {
                F.push(...y(e));
            }));
    let D = null;
    null != r &&
        r.length > 0 &&
        null != p &&
        (D = o
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
                        children: I.intl.string(I.t.XBlaiI)
                    })
                })
              : (0, n.jsx)('div', {
                    className: R.scrollingFooterWrap,
                    children: b()
                }));
    let H = null == S ? void 0 : S(),
        B =
            L && null != H
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
        U = { maxHeight: A.height - 43 - 25 - 48 };
    Z && (U.maxHeight -= 40);
    let G = null != p && l;
    return (0, n.jsx)('div', {
        className: a()(O, R.messagesPopoutWrap),
        style: U,
        onClick: T,
        onDoubleClick: T,
        'aria-label': e['aria-label'],
        children: (0, n.jsxs)(h.y5t, {
            component: m(),
            children: [
                (0, n.jsxs)(h.Den, {
                    className: a()(R.messagesPopout, x),
                    onScroll: G ? M : void 0,
                    ref: k,
                    children: [
                        (0, n.jsx)(c.bG, {
                            navigator: w,
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
                                        (r = r = { children: F }),
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
function M(e) {
    let { analyticsName: t, onFetch: r, channel: l, messages: a, hasMore: o, loading: i, loadMore: c, onJump: d, canCloseAllMessages: h = !1, renderHeader: f, renderEmptyState: g, renderMessage: O, getProTip: j, scrollerClassName: v, className: _, onCloseMessage: E, listName: I } = e,
        P = (0, u.e7)([x.Z], () => {
            let e = null != l ? x.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function T(e, r) {
        if ((0, m.Z)(e) && !P) {
            let { id: n, channel_id: s } = e,
                l = S.Z.getChannel(s);
            (null != l && (p.Z.trackJump(s, n, t), (0, y.uL)(C.Z5c.CHANNEL(l.getGuildId(), s, n))), null == d || d(r));
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
    return (0, n.jsx)(A, {
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
            let { message: t, channel: r } = e;
            if (null == t) return [];
            if (null != O) return O(t, (e) => T(t, e));
            let s = [];
            return null == r
                ? []
                : (s.push(
                      (0, n.jsxs)(
                          'div',
                          {
                              className: R.messageGroupWrapper,
                              children: [
                                  (0, n.jsx)(b.Z, {
                                      className: R.messageGroupCozy,
                                      message: t,
                                      channel: r
                                  }),
                                  (0, n.jsx)(Z, {
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
