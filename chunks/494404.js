n.d(t, {
    ZP: () => D,
    h4: () => A,
    nH: () => w
}),
    n(388685),
    n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    p = n(904245),
    m = n(724757),
    f = n(576855),
    h = n(540059),
    g = n(804063),
    _ = n(294218),
    b = n(703656),
    E = n(592125),
    x = n(375954),
    y = n(496675),
    v = n(933429),
    O = n(451478),
    j = n(626135),
    C = n(585483),
    S = n(981631),
    I = n(388032),
    N = n(555565);
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
let A = (e) => {
        let { title: t, icon: n, children: i, className: l } = e;
        return (0, r.jsxs)('div', {
            className: a()(l, N.header),
            children: [
                (0, r.jsxs)('div', {
                    className: N.titleContainer,
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
                i
            ]
        });
    },
    w = (e) => {
        let { msg: t, image: n } = e;
        return (0, r.jsxs)('div', {
            className: N.emptyPlaceholder,
            children: [
                (0, r.jsx)('div', {
                    className: N.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, r.jsx)('div', {
                    className: N.body,
                    children: t
                })
            ]
        });
    };
class Z extends i.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(d.P3F, {
            className: N.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: a()(N.__invalid_text, { hidden: e }),
                    children: I.intl.string(I.t.k5WiPT)
                }),
                (0, r.jsx)(d.$jN, {
                    type: d.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(N.loading, { [N.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: i } = this.props;
        return null != e && (t || n || (null != i && i.isPrivate()))
            ? (0, r.jsx)(d.zxk, {
                  look: d.zxk.Looks.BLANK,
                  size: d.zxk.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, r.jsx)(d.Dio, {
                      size: 'md',
                      color: 'currentColor',
                      className: N.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, r.jsxs)('div', {
            className: N.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            T(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            });
    }
}
let R = u.ZP.connectStores([y.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && y.Z.can(S.Plq.MANAGE_MESSAGES, t) };
})(Z);
function k(e) {
    let { analyticsName: t, items: n, hasMore: l, loading: o, loadMore: p, renderHeader: g, renderEmptyState: _, renderItem: b, getProTip: E, scrollerClassName: x, className: y, listName: A } = e,
        w = i.useRef(null),
        Z = (0, m.Z)(A, w),
        R = (0, u.e7)([v.ZP], () => v.ZP.hasNotice()),
        k = (0, u.e7)([O.Z], () => O.Z.windowSize()),
        D = (0, h.Q3)('ItemsPopout');
    i.useEffect(() => {
        j.default.track(S.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        i.useEffect(() => {
            function e() {
                var e;
                null == (e = w.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = w.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                C.S.subscribe(S.CkL.SCROLL_PAGE_DOWN, t),
                C.S.subscribe(S.CkL.SCROLL_PAGE_UP, e),
                () => {
                    C.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN, t), C.S.unsubscribe(S.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let L = i.useCallback(() => {
            var e;
            let t = null == (e = w.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && l && !o && (null == p || p());
        }, [l, p, o]),
        M = [],
        U = !0;
    null == n || (o && 0 === n.length)
        ? (M = [
              (0, r.jsx)(
                  'div',
                  {
                      className: a()(N.emptyPlaceholder, N.loadingPlaceholder),
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? M.push((0, r.jsx)(i.Fragment, { children: _() }, 'empty-state'))
          : ((U = !1),
            (M = []),
            s().each(n, (e) => {
                M.push(...b(e));
            }));
    let F = null;
    null != n &&
        n.length > 0 &&
        null != p &&
        (F = o
            ? (0, r.jsx)(
                  'div',
                  {
                      className: N.loadingMore,
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'loading-more-after'
              )
            : l
              ? (0, r.jsx)('div', {
                    className: N.hasMore,
                    children: (0, r.jsx)(d.zxk, {
                        look: d.zxk.Looks.FILLED,
                        color: d.zxk.Colors.PRIMARY,
                        size: d.zxk.Sizes.MAX,
                        onClick: p,
                        children: I.intl.string(I.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: N.scrollingFooterWrap,
                    children: _()
                }));
    let B = null == E ? void 0 : E(),
        G =
            U && null != B
                ? (0, r.jsx)('div', {
                      className: N.footer,
                      children: (0, r.jsx)(f.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: B
                      })
                  })
                : null,
        H = { maxHeight: k.height - 43 - 25 };
    R && (H.maxHeight -= 40), D && (H.maxHeight -= 48);
    let V = null != p && l;
    return (0, r.jsx)('div', {
        className: a()(y, N.messagesPopoutWrap),
        style: H,
        onClick: P,
        onDoubleClick: P,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(d.y5t, {
            component: g(),
            children: [
                (0, r.jsxs)(d.Den, {
                    className: a()(N.messagesPopout, x),
                    onScroll: V ? L : void 0,
                    ref: w,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: Z,
                            children: (0, r.jsx)(c.SJ, {
                                children: (e) => {
                                    var t,
                                        n,
                                        { ref: i } = e,
                                        l = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                i = (function (e, t) {
                                                    if (null == e) return {};
                                                    var n,
                                                        r,
                                                        i = {},
                                                        l = Object.keys(e);
                                                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                    return i;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(e);
                                                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                            }
                                            return i;
                                        })(e, ['ref']);
                                    return (0, r.jsx)(
                                        'div',
                                        ((t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    r.forEach(function (t) {
                                                        T(e, t, n[t]);
                                                    });
                                            }
                                            return e;
                                        })({ ref: i }, l)),
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
                        F
                    ]
                }),
                G
            ]
        })
    });
}
function D(e) {
    let { analyticsName: t, onFetch: n, channel: l, messages: a, hasMore: o, loading: s, loadMore: c, onJump: d, canCloseAllMessages: m = !1, renderHeader: f, renderEmptyState: h, renderMessage: y, getProTip: v, scrollerClassName: O, className: j, onCloseMessage: C, listName: I } = e,
        T = (0, u.e7)([x.Z], () => {
            let e = null != l ? x.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, n) {
        if ((0, g.Z)(e) && !T) {
            let { id: r, channel_id: i } = e,
                l = E.Z.getChannel(i);
            null != l && (p.Z.trackJump(i, r, t), (0, b.uL)(S.Z5c.CHANNEL(l.getGuildId(), i, r))), null == d || d(n);
        }
    }
    i.useEffect(() => {
        n(l);
    }, [l, n]);
    let A = i.useMemo(
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
        className: j,
        scrollerClassName: O,
        items: A,
        loading: s,
        analyticsName: t,
        renderEmptyState: h,
        renderHeader: f,
        hasMore: o,
        loadMore: c,
        getProTip: v,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != y) return y(t, (e) => P(t, e));
            let i = [];
            return null == n
                ? []
                : (i.push(
                      (0, r.jsxs)(
                          'div',
                          {
                              className: N.messageGroupWrapper,
                              children: [
                                  (0, r.jsx)(_.Z, {
                                      className: N.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, r.jsx)(R, {
                                      channel: l,
                                      message: t,
                                      jumping: T,
                                      canCloseAllMessages: m,
                                      jumpTo: P,
                                      onCloseMessage: C
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  i);
        },
        listName: I,
        'aria-label': e['aria-label']
    });
}
