n.d(t, {
    ZP: () => L,
    h4: () => w,
    nH: () => Z
}),
    n(388685),
    n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    p = n(668781),
    m = n(904245),
    f = n(724757),
    h = n(576855),
    g = n(540059),
    _ = n(294218),
    b = n(703656),
    x = n(210887),
    y = n(592125),
    E = n(375954),
    v = n(496675),
    O = n(933429),
    j = n(451478),
    C = n(626135),
    S = n(585483),
    I = n(981631),
    N = n(388032),
    T = n(555565);
function P(e, t, n) {
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
        let { title: t, icon: n, children: i, className: l } = e;
        return (0, r.jsxs)('div', {
            className: a()(l, T.header),
            children: [
                (0, r.jsxs)('div', {
                    className: T.titleContainer,
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
    Z = (e) => {
        let { msg: t, image: n } = e;
        return (0, r.jsxs)('div', {
            className: T.emptyPlaceholder,
            children: [
                (0, r.jsx)('div', {
                    className: T.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, r.jsx)('div', {
                    className: T.body,
                    children: t
                })
            ]
        });
    };
class R extends i.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, r.jsxs)(d.P3F, {
            className: T.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, r.jsx)('div', {
                    className: a()(T.__invalid_text, { hidden: e }),
                    children: N.intl.string(N.t.k5WiPT)
                }),
                (0, r.jsx)(d.$jN, {
                    type: d.$jN.Type.PULSING_ELLIPSIS,
                    className: a()(T.loading, { [T.visible]: e })
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
                      className: T.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, r.jsxs)('div', {
            className: T.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        super(...e),
            P(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            P(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            });
    }
}
let k = u.ZP.connectStores([v.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && v.Z.can(I.Plq.MANAGE_MESSAGES, t) };
})(R);
function D(e) {
    let { analyticsName: t, items: n, hasMore: l, loading: o, loadMore: p, renderHeader: m, renderEmptyState: _, renderItem: b, getProTip: y, scrollerClassName: E, className: v, listName: w } = e,
        Z = i.useRef(null),
        R = (0, f.Z)(w, Z),
        k = (0, u.e7)([O.ZP], () => O.ZP.hasNotice()),
        D = (0, u.e7)([j.Z], () => j.Z.windowSize()),
        L = (0, g.Q3)('ItemsPopout');
    i.useEffect(() => {
        C.default.track(I.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        i.useEffect(() => {
            function e() {
                var e;
                null == (e = Z.current) || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null == (e = Z.current) || e.scrollPageDown({ animate: !0 });
            }
            return (
                S.S.subscribe(I.CkL.SCROLL_PAGE_DOWN, t),
                S.S.subscribe(I.CkL.SCROLL_PAGE_UP, e),
                () => {
                    S.S.unsubscribe(I.CkL.SCROLL_PAGE_DOWN, t), S.S.unsubscribe(I.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let M = i.useCallback(() => {
            var e;
            let t = null == (e = Z.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && l && !o && (null == p || p());
        }, [l, p, o]),
        U = [],
        F = !0;
    null == n
        ? (U = [
              (0, r.jsx)(
                  'div',
                  {
                      className: a()(T.emptyPlaceholder, T.loadingPlaceholder),
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? U.push((0, r.jsx)(i.Fragment, { children: _(x.Z.theme) }, 'empty-state'))
          : ((F = !1),
            (U = []),
            s().each(n, (e) => {
                U.push(...b(e));
            }));
    let B = null;
    null != n &&
        n.length > 0 &&
        null != p &&
        (B = o
            ? (0, r.jsx)(
                  'div',
                  {
                      className: T.loadingMore,
                      children: (0, r.jsx)(d.$jN, {})
                  },
                  'loading-more-after'
              )
            : l
              ? (0, r.jsx)('div', {
                    className: T.hasMore,
                    children: (0, r.jsx)(d.zxk, {
                        look: d.zxk.Looks.FILLED,
                        color: d.zxk.Colors.PRIMARY,
                        size: d.zxk.Sizes.MAX,
                        onClick: p,
                        children: N.intl.string(N.t.XBlaiI)
                    })
                })
              : (0, r.jsx)('div', {
                    className: T.scrollingFooterWrap,
                    children: _(x.Z.theme)
                }));
    let G = null == y ? void 0 : y(),
        H =
            F && null != G
                ? (0, r.jsx)('div', {
                      className: T.footer,
                      children: (0, r.jsx)(h.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: G
                      })
                  })
                : null,
        V = { maxHeight: D.height - 43 - 25 };
    k && (V.maxHeight -= 40), L && (V.maxHeight -= 48);
    let z = null != p && l;
    return (0, r.jsx)('div', {
        className: a()(v, T.messagesPopoutWrap),
        style: V,
        onClick: A,
        onDoubleClick: A,
        'aria-label': e['aria-label'],
        children: (0, r.jsxs)(d.y5t, {
            component: m(),
            children: [
                (0, r.jsxs)(d.Den, {
                    className: a()(T.messagesPopout, E),
                    onScroll: z ? M : void 0,
                    ref: Z,
                    children: [
                        (0, r.jsx)(c.bG, {
                            navigator: R,
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
                                                        P(e, t, n[t]);
                                                    });
                                            }
                                            return e;
                                        })({ ref: i }, l)),
                                        (n = n = { children: U }),
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
                        B
                    ]
                }),
                H
            ]
        })
    });
}
function L(e) {
    let { analyticsName: t, onFetch: n, channel: l, messages: a, hasMore: o, loading: s, loadMore: c, onJump: d, canCloseAllMessages: f = !1, renderHeader: h, renderEmptyState: g, renderMessage: x, getProTip: v, scrollerClassName: O, className: j, onCloseMessage: C, listName: S } = e,
        P = (0, u.e7)([E.Z], () => {
            let e = null != l ? E.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function A(e, n) {
        let { id: r, blocked: i, ignored: l, author: a, channel_id: o } = e;
        if (i)
            p.Z.show({
                title: N.intl.string(N.t['j7eA/v']),
                body: N.intl.formatToPlainString(N.t.dTNNgo, { name: a.username }),
                confirmText: N.intl.string(N.t.BddRzc)
            });
        else if (l)
            p.Z.show({
                title: N.intl.string(N.t.XyWoKS),
                body: N.intl.formatToPlainString(N.t['8t8doK'], { name: a.username }),
                confirmText: N.intl.string(N.t.BddRzc)
            });
        else if (!P) {
            let e = y.Z.getChannel(o);
            null != e && (m.Z.trackJump(o, r, t), (0, b.uL)(I.Z5c.CHANNEL(e.getGuildId(), o, r))), null == d || d(n);
        }
    }
    i.useEffect(() => {
        n(l);
    }, [l, n]);
    let w = i.useMemo(
        () =>
            null == a
                ? void 0
                : a.map((e) => ({
                      message: e,
                      channel: l
                  })),
        [a, l]
    );
    return (0, r.jsx)(D, {
        className: j,
        scrollerClassName: O,
        items: w,
        loading: s,
        analyticsName: t,
        renderEmptyState: g,
        renderHeader: h,
        hasMore: o,
        loadMore: c,
        getProTip: v,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != x) return x(t, (e) => A(t, e));
            let i = [];
            return null == n
                ? []
                : (i.push(
                      (0, r.jsxs)(
                          'div',
                          {
                              className: T.messageGroupWrapper,
                              children: [
                                  (0, r.jsx)(_.Z, {
                                      className: T.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, r.jsx)(k, {
                                      channel: l,
                                      message: t,
                                      jumping: P,
                                      canCloseAllMessages: f,
                                      jumpTo: A,
                                      onCloseMessage: C
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  i);
        },
        listName: S,
        'aria-label': e['aria-label']
    });
}
