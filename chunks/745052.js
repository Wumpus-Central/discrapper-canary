n.d(t, { Z: () => es }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(91192),
    o = n(286379),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    h = n(150063),
    m = n(230711),
    p = n(112724),
    g = n(183126),
    _ = n(493773),
    f = n(607070),
    E = n(209613),
    I = n(325708),
    C = n(320149),
    N = n(82295),
    v = n(252618),
    T = n(605236),
    S = n(243778),
    Z = n(984370),
    A = n(797614),
    b = n(359110),
    x = n(6025),
    L = n(897473),
    y = n(108427),
    P = n(970731),
    O = n(210887),
    R = n(433355),
    j = n(592125),
    D = n(819640),
    w = n(626135),
    k = n(647090),
    M = n(385956),
    U = n(610697),
    G = n(26373),
    B = n(486622),
    V = n(922409),
    H = n(899740),
    F = n(177033),
    z = n(355350),
    W = n(307947),
    Y = n(96479),
    K = n(480874),
    q = n(687683),
    X = n(981631),
    Q = n(921944),
    J = n(526761),
    $ = n(388032),
    ee = n(278300),
    et = n(767839);
function en() {
    let e = l.useRef(null),
        t = (0, H.q)(),
        n = (0, F.Z)(),
        r = (0, G.K)(),
        c = (0, g.N)(),
        d = l.useCallback(() => {
            (0, u.showToast)((0, u.createToast)($.intl.string($.t.EDYbS0), u.ToastType.FAILURE));
        }, []),
        { rejectAll: h } = (0, B.m)({ onError: d }),
        m = (0, E.Z)('message-requests-list'),
        { channelId: p } = (0, V._)(),
        _ = l.useCallback(() => {
            h(n.map((e) => e.channel.id));
        }, [n, h]),
        f = l.useCallback(
            (e) => {
                var t, l;
                let { row: s } = e,
                    o = n[s],
                    c = null === (l = n[s + 1]) || void 0 === l ? void 0 : null === (t = l.channel) || void 0 === t ? void 0 : t.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    Y.Z,
                    {
                        index: s,
                        className: a()({
                            [ee.selected]: null != p && p === d,
                            [ee.siblingSelected]: null != p && p === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: r
                    },
                    d
                );
            },
            [r, n, p]
        ),
        I = l.useCallback(
            () =>
                (0, i.jsxs)(
                    N.Z,
                    {
                        className: ee.sectionTitle,
                        children: [
                            t > 0 ? $.intl.formatToPlainString($.t.rA4iWV, { count: t }) : $.intl.string($.t.flPU6u),
                            c && t > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Text, {
                                              className: ee.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(u.zxk, {
                                              onClick: _,
                                              look: u.iLD.LINK,
                                              color: u.Ttl.LINK,
                                              size: u.PhG.NONE,
                                              className: ee.clearAllButton,
                                              'aria-label': $.intl.string($.t.p6t7RE),
                                              children: $.intl.string($.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'title'
                ),
            [t, _, c]
        );
    return (n.length !== t && A.Z.increment({ name: o.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, i.jsx)(W.Z, { section: q.pS.REQUESTS })
        : (0, i.jsx)(s.bG, {
              navigator: m,
              children: (0, i.jsx)(s.SJ, {
                  children: (t) => {
                      let { ref: l, role: r, ...a } = t;
                      return (0, i.jsx)(
                          u.aVo,
                          {
                              className: ee.list,
                              innerRole: r,
                              innerAriaLabel: $.intl.string($.t.e7GWjY),
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (l.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: q.oi,
                              rowHeight: q.WN,
                              renderSection: I,
                              renderRow: f,
                              sections: [n.length],
                              chunkSize: 30,
                              fade: !0,
                              ...a
                          },
                          'message-requests-list'
                      );
                  }
              })
          });
}
function ei(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        l = (0, c.e7)([R.ZP], () => R.ZP.getSidebarState(R.uZ)),
        r = (0, c.e7)([j.Z], () => j.Z.getChannel(null == l ? void 0 : l.channelId));
    if (null == l || l.type !== L.tI.VIEW_MESSAGE_REQUEST || null == r || !r.isPrivate()) return null;
    let a = t - X.R7I;
    return (0, i.jsx)(I.Z, {
        sidebarType: I.y.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, i.jsx)(C.Z, {
            channel: r,
            baseChannelId: R.uZ
        })
    });
}
let el = function (e) {
        let { markAsDismissed: t } = e;
        return (0, i.jsx)(P.ZP, {
            header: $.intl.string($.t.hRT8tb),
            content: $.intl.string($.t.apPgJC),
            buttonCTA: $.intl.string($.t.LNoAQU),
            className: ee.messageRequestCoachmark,
            onClick: () => t(Q.L.UNKNOWN),
            markAsDismissed: t,
            caretPosition: P.DF.TOP_CENTER,
            headerClassName: ee.__invalid_header
        });
    },
    er = (e) => {
        let t = (0, U.Z)(),
            n = () => D.Z.hasLayers() || (0, u.$sL)(),
            r = (0, c.e7)([f.Z], () => f.Z.useReducedMotion);
        return (
            l.useEffect(() => {
                (0, T.kk)(d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
            }, []),
            (0, i.jsx)(S.ZP, {
                contentTypes: [d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
                children: (l) => {
                    let { visibleContent: a, markAsDismissed: s } = l;
                    return a === d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                        ? (0, i.jsx)(u.yRy, {
                              renderPopout: () =>
                                  t
                                      ? (0, i.jsx)(el, { markAsDismissed: s })
                                      : (0, i.jsx)(P.ZP, {
                                            header: $.intl.string($.t.hRT8tb),
                                            content: $.intl.string($.t['8JWodn']),
                                            buttonCTA: $.intl.string($.t.JN6EOD),
                                            secondaryButtonCTA: $.intl.string($.t.LNoAQU),
                                            className: ee.messageRequestCoachmark,
                                            onClick: (e) => {
                                                e.stopPropagation(), m.Z.open(X.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: J.FY.MESSAGE_REQUESTS_V2 });
                                            },
                                            markAsDismissed: s,
                                            caretPosition: P.DF.TOP_CENTER,
                                            headerClassName: ee.__invalid_header
                                        }),
                              position: 'bottom',
                              align: 'center',
                              animation: r ? u.yRy.Animation.NONE : u.yRy.Animation.TRANSLATE,
                              shouldShow: !n(),
                              spacing: 16,
                              children: () => e.children
                          })
                        : e.children;
                }
            })
        );
    };
function ea(e) {
    let { section: t } = e;
    return t === q.pS.SPAM ? (0, i.jsx)(K.Z, {}) : (0, i.jsx)(en, {});
}
let es = (0, p.Z)(function (e) {
    let { width: t } = e,
        n = (0, H.q)();
    (0, _.ZP)(() => {
        h.Y(X.Z5c.MESSAGE_REQUESTS), (0, y.e)('message-requests'), w.default.track(X.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }), A.Z.increment({ name: o.V.MESSAGE_REQUEST_VIEW });
    });
    let r = (0, c.e7)([O.Z], () => O.Z.theme),
        s = (0, z.w)(),
        [d, m] = l.useState(!1),
        p = (0, c.e7)([R.ZP], () => {
            let e = R.ZP.getSidebarState(R.uZ);
            return null != e && e.type === L.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        g = null == p ? void 0 : p.channelId,
        f = null != p,
        E = (0, M.T)(g),
        I = (0, k.J)(g);
    l.useEffect(() => {
        null != g && !E && I && f && ((0, b.Kh)(g), x.Z.closeChannelSidebar(R.uZ));
    }, [g, I, f, E]);
    let [C, N] = l.useState(q.pS.REQUESTS),
        T = (e) => {
            N(e);
        };
    return (
        (0, v.Tt)({ location: $.intl.string($.t.e7GWjY) }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: a()(et.chat, ee.container, {
                        [et.threadSidebarOpen]: f,
                        [et.threadSidebarFloating]: f && d
                    }),
                    children: [
                        (0, i.jsx)(u.f6W, {
                            theme: r,
                            children: (e) =>
                                (0, i.jsxs)(Z.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, i.jsx)(Z.Z.Icon, {
                                            icon: u._XJ,
                                            'aria-hidden': !0
                                        }),
                                        (0, i.jsx)(er, { children: (0, i.jsx)(Z.Z.Title, { children: $.intl.string($.t.e7GWjY) }) }),
                                        (0, i.jsx)(Z.Z.Divider, {}),
                                        (0, i.jsxs)(u.njP, {
                                            'aria-label': $.intl.string($.t.e7GWjY),
                                            selectedItem: C,
                                            type: 'top-pill',
                                            onItemSelect: T,
                                            children: [
                                                (0, i.jsx)(u.njP.Item, {
                                                    id: q.pS.REQUESTS,
                                                    className: ee.item,
                                                    children: $.intl.string($.t['7RFcXV'])
                                                }),
                                                (0, i.jsx)(u.njP.Item, {
                                                    id: q.pS.SPAM,
                                                    className: ee.item,
                                                    children: 0 === s ? $.intl.string($.t.ulKXHh) : $.intl.formatToPlainString($.t['5jtrlZ'], { count: s })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsx)('div', {
                            className: et.content,
                            children: (0, i.jsx)(ea, { section: C })
                        })
                    ]
                }),
                f &&
                    (0, i.jsx)(ei, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            m(t);
                        }
                    })
            ]
        })
    );
});
