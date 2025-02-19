n.d(t, {
    ZP: () => D,
    h4: () => w,
    nH: () => Z
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(392711),
    s = n.n(l),
    c = n(91192),
    d = n(442837),
    u = n(481060),
    p = n(668781),
    m = n(904245),
    f = n(724757),
    h = n(576855),
    g = n(540059),
    _ = n(294218),
    b = n(703656),
    v = n(210887),
    y = n(592125),
    x = n(375954),
    O = n(496675),
    E = n(933429),
    j = n(451478),
    N = n(626135),
    C = n(585483),
    I = n(981631),
    S = n(388032),
    P = n(238874);
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
function A(e) {
    e.stopPropagation();
}
let w = (e) => {
        let { title: t, icon: n, children: i, className: a } = e;
        return (0, r.jsxs)('div', {
            className: o()(a, P.header),
            children: [
                (0, r.jsxs)('div', {
                    className: P.titleContainer,
                    children: [
                        null != n ? (0, r.jsx)(n, { color: u.TVs.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, r.jsx)(u.Text, {
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
    Z = (e) => {
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
class k extends i.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(u.P3F, {
            className: P.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: o()(P.__invalid_text, { hidden: e }),
                    children: S.NW.string(S.t.k5WiPT)
                }),
                (0, r.jsx)(u.$jN, {
                    type: u.$jN.Type.PULSING_ELLIPSIS,
                    className: o()(P.loading, { [P.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: i } = this.props;
        return null != e && (t || n || (null != i && i.isPrivate()))
            ? (0, r.jsx)(u.zxk, {
                  look: u.zxk.Looks.BLANK,
                  size: u.zxk.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, r.jsx)(u.Dio, {
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
let R = d.ZP.connectStores([O.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && O.Z.can(I.Plq.MANAGE_MESSAGES, t) };
})(k);
function L(e) {
    let { analyticsName: t, items: n, hasMore: a, loading: l, loadMore: p, renderHeader: m, renderEmptyState: _, renderItem: b, getProTip: y, scrollerClassName: x, className: O, listName: w } = e,
        Z = i.useRef(null),
        k = (0, f.Z)(w, Z),
        R = (0, d.e7)([E.ZP], () => E.ZP.hasNotice()),
        L = (0, d.e7)([j.Z], () => j.Z.windowSize()),
        D = (0, g.Q3)('ItemsPopout');
    i.useEffect(() => {
        N.default.track(I.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        i.useEffect(() => {
            function e() {
                var e;
                null === (e = Z.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null === (e = Z.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }
            return (
                C.S.subscribe(I.CkL.SCROLL_PAGE_DOWN, t),
                C.S.subscribe(I.CkL.SCROLL_PAGE_UP, e),
                () => {
                    C.S.unsubscribe(I.CkL.SCROLL_PAGE_DOWN, t), C.S.unsubscribe(I.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let M = i.useCallback(() => {
            var e;
            let t = null === (e = Z.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && a && !l && (null == p || p());
        }, [a, p, l]),
        W = [],
        F = !0;
    null == n
        ? (W = [
              (0, r.jsx)(
                  'div',
                  {
                      className: o()(P.emptyPlaceholder, P.loadingPlaceholder),
                      children: (0, r.jsx)(u.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? W.push((0, r.jsx)(i.Fragment, { children: _(v.Z.theme) }, 'empty-state'))
          : ((F = !1),
            (W = []),
            s().each(n, (e) => {
                W.push(...b(e));
            }));
    let U = null;
    null != n &&
        n.length > 0 &&
        null != p &&
        (U = l
            ? (0, r.jsx)(
                  'div',
                  {
                      className: P.loadingMore,
                      children: (0, r.jsx)(u.$jN, {})
                  },
                  'loading-more-after'
              )
            : a
              ? (0, r.jsx)('div', {
                    className: P.hasMore,
                    children: (0, r.jsx)(u.zxk, {
                        look: u.zxk.Looks.FILLED,
                        color: u.zxk.Colors.PRIMARY,
                        size: u.zxk.Sizes.MAX,
                        onClick: p,
                        children: S.NW.string(S.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: P.scrollingFooterWrap,
                    children: _(v.Z.theme)
                }));
    let B = null == y ? void 0 : y(),
        G =
            F && null != B
                ? (0, r.jsx)('div', {
                      className: P.footer,
                      children: (0, r.jsx)(h.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: B
                      })
                  })
                : null,
        H = { maxHeight: L.height - 43 - 25 };
    R && (H.maxHeight -= 40), D && (H.maxHeight -= 48);
    let V = null != p && a;
    return (0, r.jsx)('div', {
        className: o()(O, P.messagesPopoutWrap),
        style: H,
        onClick: A,
        onDoubleClick: A,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(u.y5t, {
            component: m(),
            children: [
                (0, r.jsxs)(u.Den, {
                    className: o()(P.messagesPopout, x),
                    onScroll: V ? M : void 0,
                    ref: Z,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: k,
                            children: (0, r.jsx)(c.SJ, {
                                children: (e) => {
                                    var t,
                                        n,
                                        { ref: i } = e,
                                        a = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                i = (function (e, t) {
                                                    if (null == e) return {};
                                                    var n,
                                                        r,
                                                        i = {},
                                                        a = Object.keys(e);
                                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                    return i;
                                                })(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var a = Object.getOwnPropertySymbols(e);
                                                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
                                        })({ ref: i }, a)),
                                        (n = n = { children: W }),
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
                        U
                    ]
                }),
                G
            ]
        })
    });
}
function D(e) {
    let { analyticsName: t, onFetch: n, channel: a, messages: o, hasMore: l, loading: s, loadMore: c, onJump: u, canCloseAllMessages: f = !1, renderHeader: h, renderEmptyState: g, renderMessage: v, getProTip: O, scrollerClassName: E, className: j, onCloseMessage: N, listName: C } = e,
        T = (0, d.e7)([x.Z], () => {
            let e = null != a ? x.Z.getMessages(a.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function A(e, n) {
        let { id: r, blocked: i, ignored: a, author: o, channel_id: l } = e;
        if (i)
            p.Z.show({
                title: S.NW.string(S.t['j7eA/v']),
                body: S.NW.formatToPlainString(S.t.dTNNgo, { name: o.username }),
                confirmText: S.NW.string(S.t.BddRzc)
            });
        else if (a)
            p.Z.show({
                title: S.NW.string(S.t.XyWoKS),
                body: S.NW.formatToPlainString(S.t['8t8doK'], { name: o.username }),
                confirmText: S.NW.string(S.t.BddRzc)
            });
        else if (!T) {
            let e = y.Z.getChannel(l);
            null != e && (m.Z.trackJump(l, r, t), (0, b.uL)(I.Z5c.CHANNEL(e.getGuildId(), l, r))), null == u || u(n);
        }
    }
    i.useEffect(() => {
        n(a);
    }, [a, n]);
    let w = i.useMemo(
        () =>
            null == o
                ? void 0
                : o.map((e) => ({
                      message: e,
                      channel: a
                  })),
        [o, a]
    );
    return (0, r.jsx)(L, {
        className: j,
        scrollerClassName: E,
        items: w,
        loading: s,
        analyticsName: t,
        renderEmptyState: g,
        renderHeader: h,
        hasMore: l,
        loadMore: c,
        getProTip: O,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != v) return v(t, (e) => A(t, e));
            let i = [];
            return null == n
                ? []
                : (i.push(
                      (0, r.jsxs)(
                          'div',
                          {
                              className: P.messageGroupWrapper,
                              children: [
                                  (0, r.jsx)(_.Z, {
                                      className: P.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, r.jsx)(R, {
                                      channel: a,
                                      message: t,
                                      jumping: T,
                                      canCloseAllMessages: f,
                                      jumpTo: A,
                                      onCloseMessage: N
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  i);
        },
        listName: C,
        'aria-label': e['aria-label']
    });
}
