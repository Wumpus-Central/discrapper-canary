n.d(t, {
    ZP: () => D,
    h4: () => L,
    nH: () => P
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n.n(s),
    c = n(91192),
    d = n(442837),
    u = n(481060),
    m = n(668781),
    h = n(904245),
    _ = n(724757),
    p = n(576855),
    g = n(540059),
    f = n(294218),
    x = n(703656),
    E = n(210887),
    C = n(592125),
    v = n(375954),
    I = n(496675),
    N = n(933429),
    S = n(451478),
    T = n(626135),
    b = n(585483),
    A = n(981631),
    j = n(388032),
    y = n(312422);
function Z(e, t, n) {
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
function R(e) {
    e.stopPropagation();
}
let L = (e) => {
        let { title: t, icon: n, children: l, className: a } = e;
        return (0, i.jsxs)('div', {
            className: r()(a, y.header),
            children: [
                (0, i.jsxs)('div', {
                    className: y.titleContainer,
                    children: [
                        null != n ? (0, i.jsx)(n, { color: u.TVs.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, i.jsx)(u.Text, {
                                  variant: 'text-lg/semibold',
                                  color: 'interactive-active',
                                  children: t
                              })
                    ]
                }),
                l
            ]
        });
    },
    P = (e) => {
        let { msg: t, image: n } = e;
        return (0, i.jsxs)('div', {
            className: y.emptyPlaceholder,
            children: [
                (0, i.jsx)('div', {
                    className: y.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, i.jsx)('div', {
                    className: y.body,
                    children: t
                })
            ]
        });
    };
class k extends l.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, i.jsxs)(u.P3F, {
            className: y.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, i.jsx)('div', {
                    className: r()(y.__invalid_text, { hidden: e }),
                    children: j.intl.string(j.t.k5WiPT)
                }),
                (0, i.jsx)(u.$jN, {
                    type: u.$jN.Type.PULSING_ELLIPSIS,
                    className: r()(y.loading, { [y.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: l } = this.props;
        return null != e && (t || n || (null != l && l.isPrivate()))
            ? (0, i.jsx)(u.zxk, {
                  look: u.zxk.Looks.BLANK,
                  size: u.zxk.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, i.jsx)(u.Dio, {
                      size: 'md',
                      color: 'currentColor',
                      className: y.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, i.jsxs)('div', {
            className: y.actionButtons,
            children: [this.renderJumpButton(), this.renderCloseButton()]
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'handleClickJump', (e) => {
                let { jumpTo: t, message: n } = this.props;
                t(n, e);
            }),
            Z(this, 'handleClickClose', (e) => {
                let { onCloseMessage: t, message: n } = this.props;
                null != t && t(n, e);
            });
    }
}
let M = d.ZP.connectStores([I.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && I.Z.can(A.Plq.MANAGE_MESSAGES, t) };
})(k);
function O(e) {
    let { analyticsName: t, items: n, hasMore: a, loading: s, loadMore: m, renderHeader: h, renderEmptyState: f, renderItem: x, getProTip: C, scrollerClassName: v, className: I, listName: Z } = e,
        L = l.useRef(null),
        P = (0, _.Z)(Z, L),
        k = (0, d.e7)([N.ZP], () => N.ZP.hasNotice()),
        M = (0, d.e7)([S.Z], () => S.Z.windowSize()),
        O = (0, g.Q3)('ItemsPopout');
    l.useEffect(() => {
        T.default.track(A.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        l.useEffect(() => {
            function e() {
                var e;
                null === (e = L.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null === (e = L.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }
            return (
                b.S.subscribe(A.CkL.SCROLL_PAGE_DOWN, t),
                b.S.subscribe(A.CkL.SCROLL_PAGE_UP, e),
                () => {
                    b.S.unsubscribe(A.CkL.SCROLL_PAGE_DOWN, t), b.S.unsubscribe(A.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let D = l.useCallback(() => {
            var e;
            let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && a && !s && (null == m || m());
        }, [a, m, s]),
        w = [],
        F = !0;
    null == n
        ? (w = [
              (0, i.jsx)(
                  'div',
                  {
                      className: r()(y.emptyPlaceholder, y.loadingPlaceholder),
                      children: (0, i.jsx)(u.$jN, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? w.push((0, i.jsx)(l.Fragment, { children: f(E.Z.theme) }, 'empty-state'))
          : ((F = !1),
            (w = []),
            o().each(n, (e) => {
                w.push(...x(e));
            }));
    let U = null;
    null != n &&
        n.length > 0 &&
        null != m &&
        (U = s
            ? (0, i.jsx)(
                  'div',
                  {
                      className: y.loadingMore,
                      children: (0, i.jsx)(u.$jN, {})
                  },
                  'loading-more-after'
              )
            : a
              ? (0, i.jsx)('div', {
                    className: y.hasMore,
                    children: (0, i.jsx)(u.zxk, {
                        look: u.zxk.Looks.FILLED,
                        color: u.zxk.Colors.PRIMARY,
                        size: u.zxk.Sizes.MAX,
                        onClick: m,
                        children: j.intl.string(j.t.XBlaiI)
                    })
                })
              : (0, i.jsx)('div', {
                    className: y.scrollingFooterWrap,
                    children: f(E.Z.theme)
                }));
    let B = null == C ? void 0 : C(),
        G =
            F && null != B
                ? (0, i.jsx)('div', {
                      className: y.footer,
                      children: (0, i.jsx)(p.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: B
                      })
                  })
                : null,
        H = { maxHeight: M.height - 43 - 25 };
    k && (H.maxHeight -= 40), O && (H.maxHeight -= 48);
    let V = null != m && a;
    return (0, i.jsx)('div', {
        className: r()(I, y.messagesPopoutWrap),
        style: H,
        onClick: R,
        onDoubleClick: R,
        'aria-label': e['aria-label'],
        children: (0, i.jsxs)(u.y5t, {
            component: h(),
            children: [
                (0, i.jsxs)(u.Den, {
                    className: r()(y.messagesPopout, v),
                    onScroll: V ? D : void 0,
                    ref: L,
                    children: [
                        (0, i.jsx)(c.bG, {
                            navigator: P,
                            children: (0, i.jsx)(c.SJ, {
                                children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, i.jsx)('div', {
                                        ref: t,
                                        ...n,
                                        children: w
                                    });
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
    let { analyticsName: t, onFetch: n, channel: a, messages: r, hasMore: s, loading: o, loadMore: c, onJump: u, canCloseAllMessages: _ = !1, renderHeader: p, renderEmptyState: g, renderMessage: E, getProTip: I, scrollerClassName: N, className: S, onCloseMessage: T, listName: b } = e,
        Z = (0, d.e7)([v.Z], () => {
            let e = null != a ? v.Z.getMessages(a.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function R(e, n) {
        let { id: i, blocked: l, ignored: a, author: r, channel_id: s } = e;
        if (l)
            m.Z.show({
                title: j.intl.string(j.t['j7eA/v']),
                body: j.intl.formatToPlainString(j.t.dTNNgo, { name: r.username }),
                confirmText: j.intl.string(j.t.BddRzc)
            });
        else if (a)
            m.Z.show({
                title: j.intl.string(j.t.XyWoKS),
                body: j.intl.formatToPlainString(j.t['8t8doK'], { name: r.username }),
                confirmText: j.intl.string(j.t.BddRzc)
            });
        else if (!Z) {
            let e = C.Z.getChannel(s);
            null != e && (h.Z.trackJump(s, i, t), (0, x.uL)(A.Z5c.CHANNEL(e.getGuildId(), s, i))), null == u || u(n);
        }
    }
    l.useEffect(() => {
        n(a);
    }, [a, n]);
    let L = l.useMemo(
        () =>
            null == r
                ? void 0
                : r.map((e) => ({
                      message: e,
                      channel: a
                  })),
        [r, a]
    );
    return (0, i.jsx)(O, {
        className: S,
        scrollerClassName: N,
        items: L,
        loading: o,
        analyticsName: t,
        renderEmptyState: g,
        renderHeader: p,
        hasMore: s,
        loadMore: c,
        getProTip: I,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != E) return E(t, (e) => R(t, e));
            let l = [];
            return null == n
                ? []
                : (l.push(
                      (0, i.jsxs)(
                          'div',
                          {
                              className: y.messageGroupWrapper,
                              children: [
                                  (0, i.jsx)(f.Z, {
                                      className: y.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, i.jsx)(M, {
                                      channel: a,
                                      message: t,
                                      jumping: Z,
                                      canCloseAllMessages: _,
                                      jumpTo: R,
                                      onCloseMessage: T
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  l);
        },
        listName: b,
        'aria-label': e['aria-label']
    });
}
