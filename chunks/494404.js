n.d(t, {
    ZP: function () {
        return D;
    },
    h4: function () {
        return L;
    },
    nH: function () {
        return y;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(91192),
    d = n(442837),
    u = n(481060),
    m = n(668781),
    h = n(904245),
    f = n(724757),
    p = n(576855),
    _ = n(540059),
    g = n(294218),
    E = n(703656),
    C = n(210887),
    I = n(592125),
    x = n(375954),
    N = n(496675),
    v = n(933429),
    T = n(451478),
    S = n(626135),
    A = n(585483),
    b = n(981631),
    j = n(388032),
    R = n(312422);
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
function P(e) {
    e.stopPropagation();
}
let L = (e) => {
        let { title: t, icon: n, children: r, className: l } = e;
        return (0, i.jsxs)('div', {
            className: a()(l, R.header),
            children: [
                (0, i.jsxs)('div', {
                    className: R.titleContainer,
                    children: [
                        null != n ? (0, i.jsx)(n, { color: u.tokens.colors.INTERACTIVE_NORMAL }) : null,
                        null == t
                            ? null
                            : (0, i.jsx)(u.Text, {
                                  variant: 'text-lg/semibold',
                                  color: 'interactive-active',
                                  children: t
                              })
                    ]
                }),
                r
            ]
        });
    },
    y = (e) => {
        let { msg: t, image: n } = e;
        return (0, i.jsxs)('div', {
            className: R.emptyPlaceholder,
            children: [
                (0, i.jsx)('div', {
                    className: R.image,
                    style: { backgroundImage: 'url('.concat(n, ')') }
                }),
                (0, i.jsx)('div', {
                    className: R.body,
                    children: t
                })
            ]
        });
    };
class O extends r.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, i.jsxs)(u.Clickable, {
            className: R.jumpButton,
            onClick: this.handleClickJump,
            children: [
                (0, i.jsx)('div', {
                    className: a()(R.__invalid_text, { hidden: e }),
                    children: j.intl.string(j.t.k5WiPT)
                }),
                (0, i.jsx)(u.Spinner, {
                    type: u.Spinner.Type.PULSING_ELLIPSIS,
                    className: a()(R.loading, { [R.visible]: e })
                })
            ]
        });
    }
    renderCloseButton() {
        let { onCloseMessage: e, canCloseAllMessages: t, canManageMessages: n, channel: r } = this.props;
        return null != e && (t || n || (null != r && r.isPrivate()))
            ? (0, i.jsx)(u.Button, {
                  look: u.Button.Looks.BLANK,
                  size: u.Button.Sizes.NONE,
                  onClick: this.handleClickClose,
                  children: (0, i.jsx)(u.XSmallIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: R.closeIcon
                  })
              })
            : null;
    }
    render() {
        return (0, i.jsxs)('div', {
            className: R.actionButtons,
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
let M = d.ZP.connectStores([N.Z], (e) => {
    let { channel: t } = e;
    return { canManageMessages: null != t && N.Z.can(b.Plq.MANAGE_MESSAGES, t) };
})(O);
function k(e) {
    let { analyticsName: t, items: n, hasMore: l, loading: o, loadMore: m, renderHeader: h, renderEmptyState: g, renderItem: E, getProTip: I, scrollerClassName: x, className: N, listName: Z } = e,
        L = r.useRef(null),
        y = (0, f.Z)(Z, L),
        O = (0, d.e7)([v.ZP], () => v.ZP.hasNotice()),
        M = (0, d.e7)([T.Z], () => T.Z.windowSize()),
        k = (0, _.Q3)('ItemsPopout');
    r.useEffect(() => {
        S.default.track(b.rMx.OPEN_POPOUT, { type: t });
    }, [t]),
        r.useEffect(() => {
            function e() {
                var e;
                null === (e = L.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }
            function t() {
                var e;
                null === (e = L.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }
            return (
                A.S.subscribe(b.CkL.SCROLL_PAGE_DOWN, t),
                A.S.subscribe(b.CkL.SCROLL_PAGE_UP, e),
                () => {
                    A.S.unsubscribe(b.CkL.SCROLL_PAGE_DOWN, t), A.S.unsubscribe(b.CkL.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let D = r.useCallback(() => {
            var e;
            let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && l && !o && (null == m || m());
        }, [l, m, o]),
        B = [],
        U = !0;
    null == n
        ? (B = [
              (0, i.jsx)(
                  'div',
                  {
                      className: a()(R.emptyPlaceholder, R.loadingPlaceholder),
                      children: (0, i.jsx)(u.Spinner, {})
                  },
                  'spinner'
              )
          ])
        : 0 === n.length
          ? B.push((0, i.jsx)(r.Fragment, { children: g(C.Z.theme) }, 'empty-state'))
          : ((U = !1),
            (B = []),
            s().each(n, (e) => {
                B.push(...E(e));
            }));
    let w = null;
    null != n &&
        n.length > 0 &&
        null != m &&
        (w = o
            ? (0, i.jsx)(
                  'div',
                  {
                      className: R.loadingMore,
                      children: (0, i.jsx)(u.Spinner, {})
                  },
                  'loading-more-after'
              )
            : l
              ? (0, i.jsx)('div', {
                    className: R.hasMore,
                    children: (0, i.jsx)(u.Button, {
                        look: u.Button.Looks.FILLED,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.MAX,
                        onClick: m,
                        children: j.intl.string(j.t.XBlaiI)
                    })
                })
              : (0, i.jsx)('div', {
                    className: R.scrollingFooterWrap,
                    children: g(C.Z.theme)
                }));
    let F = null == I ? void 0 : I(),
        G =
            U && null != F
                ? (0, i.jsx)('div', {
                      className: R.footer,
                      children: (0, i.jsx)(p.Z, {
                          style: {
                              width: '100%',
                              paddingTop: 10,
                              paddingBottom: 10
                          },
                          children: F
                      })
                  })
                : null,
        V = { maxHeight: M.height - 43 - 25 };
    O && (V.maxHeight -= 40), k && (V.maxHeight -= 48);
    let H = null != m && l;
    return (0, i.jsx)('div', {
        className: a()(N, R.messagesPopoutWrap),
        style: V,
        onClick: P,
        onDoubleClick: P,
        'aria-label': e['aria-label'],
        children: (0, i.jsxs)(u.HeadingLevel, {
            component: h(),
            children: [
                (0, i.jsxs)(u.AdvancedScroller, {
                    className: a()(R.messagesPopout, x),
                    onScroll: H ? D : void 0,
                    ref: L,
                    children: [
                        (0, i.jsx)(c.bG, {
                            navigator: y,
                            children: (0, i.jsx)(c.SJ, {
                                children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, i.jsx)('div', {
                                        ref: t,
                                        ...n,
                                        children: B
                                    });
                                }
                            })
                        }),
                        w
                    ]
                }),
                G
            ]
        })
    });
}
function D(e) {
    let { analyticsName: t, onFetch: n, channel: l, messages: a, hasMore: o, loading: s, loadMore: c, onJump: u, canCloseAllMessages: f = !1, renderHeader: p, renderEmptyState: _, renderMessage: C, getProTip: N, scrollerClassName: v, className: T, onCloseMessage: S, listName: A } = e,
        Z = (0, d.e7)([x.Z], () => {
            let e = null != l ? x.Z.getMessages(l.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });
    function P(e, n) {
        let { id: i, blocked: r, ignored: l, author: a, channel_id: o } = e;
        if (r)
            m.Z.show({
                title: j.intl.string(j.t['j7eA/v']),
                body: j.intl.formatToPlainString(j.t.dTNNgo, { name: a.username }),
                confirmText: j.intl.string(j.t.BddRzc)
            });
        else if (l)
            m.Z.show({
                title: j.intl.string(j.t.XyWoKS),
                body: j.intl.formatToPlainString(j.t['8t8doK'], { name: a.username }),
                confirmText: j.intl.string(j.t.BddRzc)
            });
        else if (!Z) {
            let e = I.Z.getChannel(o);
            null != e && (h.Z.trackJump(o, i, t), (0, E.uL)(b.Z5c.CHANNEL(e.getGuildId(), o, i))), null == u || u(n);
        }
    }
    r.useEffect(() => {
        n(l);
    }, [l, n]);
    let L = r.useMemo(
        () =>
            null == a
                ? void 0
                : a.map((e) => ({
                      message: e,
                      channel: l
                  })),
        [a, l]
    );
    return (0, i.jsx)(k, {
        className: T,
        scrollerClassName: v,
        items: L,
        loading: s,
        analyticsName: t,
        renderEmptyState: _,
        renderHeader: p,
        hasMore: o,
        loadMore: c,
        getProTip: N,
        renderItem: function (e) {
            let { message: t, channel: n } = e;
            if (null == t) return [];
            if (null != C) return C(t, (e) => P(t, e));
            let r = [];
            return null == n
                ? []
                : (r.push(
                      (0, i.jsxs)(
                          'div',
                          {
                              className: R.messageGroupWrapper,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      className: R.messageGroupCozy,
                                      message: t,
                                      channel: n
                                  }),
                                  (0, i.jsx)(M, {
                                      channel: l,
                                      message: t,
                                      jumping: Z,
                                      canCloseAllMessages: f,
                                      jumpTo: P,
                                      onCloseMessage: S
                                  })
                              ]
                          },
                          t.id
                      )
                  ),
                  r);
        },
        listName: A,
        'aria-label': e['aria-label']
    });
}
