n.d(t, {
    ZP: () => k,
    h4: () => P,
    nH: () => A
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
    h = n(804063),
    g = n(294218),
    _ = n(703656),
    b = n(592125),
    x = n(375954),
    y = n(496675),
    E = n(933429),
    v = n(451478),
    C = n(626135),
    O = n(585483),
    j = n(981631),
    S = n(388032),
    I = n(555565);
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
function N(e) {
    e.stopPropagation();
}
let P = (e) => {
        let { title: t, icon: n, children: i, className: l } = e;
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
                i
            ]
        });
    },
    A = (e) => {
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
class w extends i.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(d.P3F, {
            className: I.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: a()(I.__invalid_text, { hidden: e }),
                    children: S.intl.string(S.t.k5WiPT)
                }),
                (0, r.jsx)(d.$jN, {
                    type: d.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(I.loading, { [I.visible]: e })
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
let Z = u.ZP.connectStores([y.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && y.Z.can(j.Plq.MANAGE_MESSAGES, t) };
})(w);
function R(e) {
    let { analyticsName: t, items: n, hasMore: l, loading: o, loadMore: p, renderHeader: h, renderEmptyState: g, renderItem: _, getProTip: b, scrollerClassName: x, className: y, listName: P } = e,
        A = i.useRef(null),
        w = (0, m.Z)(P, A),
        Z = (0, u.e7)([E.ZP], () => E.ZP.hasNotice()),
        R = (0, u.e7)([v.Z], () => v.Z.windowSize());
    i.useEffect(() => {
        C.default.track(j.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        i.useEffect(() => {
            function e() {
                var e;
                null == (e = A.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = A.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                O.S.subscribe(j.CkL.SCROLL_PAGE_DOWN, t),
                O.S.subscribe(j.CkL.SCROLL_PAGE_UP, e),
                () => {
                    O.S.unsubscribe(j.CkL.SCROLL_PAGE_DOWN, t), O.S.unsubscribe(j.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let k = i.useCallback(() => {
            var e;
            let t = null == (e = A.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && l && !o && (null == p || p());
        }, [l, p, o]),
        L = [],
        D = !0;
    null == n || (o && 0 === n.length)
        ? (L = [
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
          ? L.push((0, r.jsx)(i.Fragment, { children: g() }, 'empty-state'))
          : ((D = !1),
            (L = []),
            s().each(n, (e) => {
                L.push(..._(e));
            }));
    let M = null;
    null != n &&
        n.length > 0 &&
        null != p &&
        (M = o
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
                        onClick: p,
                        children: S.intl.string(S.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: I.scrollingFooterWrap,
                    children: g()
                }));
    let U = null == b ? void 0 : b(),
        F =
            D && null != U
                ? (0, r.jsx)('div', {
                      className: I.footer,
                      children: (0, r.jsx)(f.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: U
                      })
                  })
                : null,
        B = { maxHeight: R.height - 43 - 25 - 48 };
    Z && (B.maxHeight -= 40);
    let G = null != p && l;
    return (0, r.jsx)('div', {
        className: a()(y, I.messagesPopoutWrap),
        style: B,
        onClick: N,
        onDoubleClick: N,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(d.y5t, {
            component: h(),
            children: [
                (0, r.jsxs)(d.Den, {
                    className: a()(I.messagesPopout, x),
                    onScroll: G ? k : void 0,
                    ref: A,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: w,
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
                                        (n = n = { children: L }),
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
                        M
                    ]
                }),
                F
            ]
        })
    });
}
function k(e) {
    let { analyticsName: t, onFetch: n, channel: l, messages: a, hasMore: o, loading: s, loadMore: c, onJump: d, canCloseAllMessages: m = !1, renderHeader: f, renderEmptyState: y, renderMessage: E, getProTip: v, scrollerClassName: C, className: O, onCloseMessage: S, listName: T } = e,
        N = (0, u.e7)([x.Z], () => {
            let e = null != l ? x.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, n) {
        if ((0, h.Z)(e) && !N) {
            let { id: r, channel_id: i } = e,
                l = b.Z.getChannel(i);
            null != l && (p.Z.trackJump(i, r, t), (0, _.uL)(j.Z5c.CHANNEL(l.getGuildId(), i, r))), null == d || d(n);
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
    return (0, r.jsx)(R, {
        className: O,
        scrollerClassName: C,
        items: A,
        loading: s,
        analyticsName: t,
        renderEmptyState: y,
        renderHeader: f,
        hasMore: o,
        loadMore: c,
        getProTip: v,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != E) return E(t, (e) => P(t, e));
            let i = [];
            return null == n
                ? []
                : (i.push(
                      (0, r.jsxs)(
                          'div',
                          {
                              className: I.messageGroupWrapper,
                              children: [
                                  (0, r.jsx)(g.Z, {
                                      className: I.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, r.jsx)(Z, {
                                      channel: l,
                                      message: t,
                                      jumping: N,
                                      canCloseAllMessages: m,
                                      jumpTo: P,
                                      onCloseMessage: S
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  i);
        },
        listName: T,
        'aria-label': e['aria-label']
    });
}
