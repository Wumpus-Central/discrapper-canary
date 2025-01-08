n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(286379),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    h = n(150063),
    m = n(230711),
    p = n(112724),
    g = n(183126),
    f = n(493773),
    _ = n(607070),
    E = n(209613),
    I = n(325708),
    C = n(320149),
    N = n(82295),
    v = n(252618),
    S = n(605236),
    T = n(243778),
    b = n(984370),
    A = n(797614),
    Z = n(359110),
    x = n(6025),
    L = n(897473),
    P = n(108427),
    O = n(970731),
    y = n(187819),
    R = n(210887),
    j = n(433355),
    D = n(592125),
    M = n(819640),
    w = n(626135),
    k = n(647090),
    U = n(385956),
    G = n(610697),
    B = n(26373),
    V = n(486622),
    H = n(922409),
    F = n(899740),
    z = n(177033),
    W = n(355350),
    Y = n(307947),
    K = n(96479),
    q = n(480874),
    X = n(687683),
    Q = n(981631),
    J = n(921944),
    $ = n(526761),
    ee = n(388032),
    et = n(863705),
    en = n(247627);
function ei() {
    let e = r.useRef(null),
        t = (0, F.q)(),
        n = (0, z.Z)(),
        l = (0, B.K)(),
        c = (0, g.N)(),
        d = r.useCallback(() => {
            (0, u.showToast)((0, u.createToast)(ee.intl.string(ee.t.EDYbS0), u.ToastType.FAILURE));
        }, []),
        { rejectAll: h } = (0, V.m)({ onError: d }),
        m = (0, E.Z)('message-requests-list'),
        { channelId: p } = (0, H._)(),
        f = r.useCallback(() => {
            h(n.map((e) => e.channel.id));
        }, [n, h]),
        _ = r.useCallback(
            (e) => {
                var t, r;
                let { row: s } = e,
                    o = n[s],
                    c = null === (r = n[s + 1]) || void 0 === r ? void 0 : null === (t = r.channel) || void 0 === t ? void 0 : t.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    K.Z,
                    {
                        index: s,
                        className: a()({
                            [et.selected]: null != p && p === d,
                            [et.siblingSelected]: null != p && p === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: l
                    },
                    d
                );
            },
            [l, n, p]
        ),
        I = r.useCallback(
            () =>
                (0, i.jsxs)(
                    N.Z,
                    {
                        className: et.sectionTitle,
                        children: [
                            t > 0 ? ee.intl.formatToPlainString(ee.t.rA4iWV, { count: t }) : ee.intl.string(ee.t.flPU6u),
                            c && t > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Text, {
                                              className: et.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(u.Button, {
                                              onClick: f,
                                              look: u.ButtonLooks.LINK,
                                              color: u.ButtonColors.LINK,
                                              size: u.ButtonSizes.NONE,
                                              className: et.clearAllButton,
                                              'aria-label': ee.intl.string(ee.t.p6t7RE),
                                              children: ee.intl.string(ee.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'title'
                ),
            [t, f, c]
        );
    return (n.length !== t && A.Z.increment({ name: o.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, i.jsx)(Y.Z, { section: X.pS.REQUESTS })
        : (0, i.jsx)(s.bG, {
              navigator: m,
              children: (0, i.jsx)(s.SJ, {
                  children: (t) => {
                      let { ref: r, role: l, ...a } = t;
                      return (0, i.jsx)(
                          u.List,
                          {
                              className: et.list,
                              innerRole: l,
                              innerAriaLabel: ee.intl.string(ee.t.e7GWjY),
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (r.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: X.oi,
                              rowHeight: X.WN,
                              renderSection: I,
                              renderRow: _,
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
function er(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        r = (0, c.e7)([j.ZP], () => j.ZP.getSidebarState(j.uZ)),
        l = (0, c.e7)([D.Z], () => D.Z.getChannel(null == r ? void 0 : r.channelId));
    if (null == r || r.type !== L.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - Q.R7I;
    return (0, i.jsx)(I.Z, {
        sidebarType: I.y.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, i.jsx)(C.Z, {
            channel: l,
            baseChannelId: j.uZ
        })
    });
}
let el = function (e) {
        let { markAsDismissed: t } = e;
        return (0, i.jsx)(O.ZP, {
            header: ee.intl.string(ee.t.hRT8tb),
            content: ee.intl.string(ee.t.apPgJC),
            buttonCTA: ee.intl.string(ee.t.LNoAQU),
            className: et.messageRequestCoachmark,
            onClick: () => t(J.L.UNKNOWN),
            markAsDismissed: t,
            caretPosition: O.DF.TOP_CENTER,
            headerClassName: et.__invalid_header
        });
    },
    ea = (e) => {
        let t = (0, G.Z)(),
            n = () => M.Z.hasLayers() || (0, u.hasAnyModalOpen)(),
            l = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
            a = (0, y._p)({ location: 'message-request-coachmark' });
        return (
            r.useEffect(() => {
                (0, S.kk)(d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
            }, []),
            (0, i.jsx)(T.ZP, {
                contentTypes: [d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
                children: (r) => {
                    let { visibleContent: s, markAsDismissed: o } = r;
                    if (s === d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
                        return (0, i.jsx)(u.Popout, {
                            renderPopout: () =>
                                t
                                    ? (0, i.jsx)(el, { markAsDismissed: o })
                                    : (0, i.jsx)(O.ZP, {
                                          header: ee.intl.string(ee.t.hRT8tb),
                                          content: ee.intl.string(ee.t['8JWodn']),
                                          buttonCTA: ee.intl.string(ee.t.JN6EOD),
                                          secondaryButtonCTA: ee.intl.string(ee.t.LNoAQU),
                                          className: et.messageRequestCoachmark,
                                          onClick: (e) => {
                                              e.stopPropagation(), a ? m.Z.open(Q.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: $.to.MESSAGE_REQUESTS_V2 }) : m.Z.open(Q.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: $.to.MESSAGE_REQUESTS });
                                          },
                                          markAsDismissed: o,
                                          caretPosition: O.DF.TOP_CENTER,
                                          headerClassName: et.__invalid_header
                                      }),
                            position: 'bottom',
                            align: 'center',
                            animation: l ? u.Popout.Animation.NONE : u.Popout.Animation.TRANSLATE,
                            shouldShow: !n(),
                            spacing: 16,
                            children: () => e.children
                        });
                    return e.children;
                }
            })
        );
    };
function es(e) {
    let { section: t } = e;
    return t === X.pS.SPAM ? (0, i.jsx)(q.Z, {}) : (0, i.jsx)(ei, {});
}
let eo = (0, p.Z)(function (e) {
    let { width: t } = e,
        n = (0, F.q)();
    (0, f.Z)(() => {
        h.Y(Q.Z5c.MESSAGE_REQUESTS), (0, P.e)('message-requests'), w.default.track(Q.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }), A.Z.increment({ name: o.V.MESSAGE_REQUEST_VIEW });
    });
    let l = (0, c.e7)([R.Z], () => R.Z.theme),
        s = (0, W.w)(),
        [d, m] = r.useState(!1),
        p = (0, c.e7)([j.ZP], () => {
            let e = j.ZP.getSidebarState(j.uZ);
            return null != e && e.type === L.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        g = null == p ? void 0 : p.channelId,
        _ = null != p,
        E = (0, U.T)(g),
        I = (0, k.J)(g);
    r.useEffect(() => {
        null != g && !E && I && _ && ((0, Z.Kh)(g), x.Z.closeChannelSidebar(j.uZ));
    }, [g, I, _, E]);
    let [C, N] = r.useState(X.pS.REQUESTS),
        S = (e) => {
            N(e);
        };
    return (
        (0, v.Tt)({ location: ee.intl.string(ee.t.e7GWjY) }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: a()(en.chat, et.container, {
                        [en.threadSidebarOpen]: _,
                        [en.threadSidebarFloating]: _ && d
                    }),
                    children: [
                        (0, i.jsx)(u.ThemeProvider, {
                            theme: l,
                            children: (e) =>
                                (0, i.jsxs)(b.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, i.jsx)(b.Z.Icon, {
                                            icon: u.EnvelopeIcon,
                                            'aria-hidden': !0
                                        }),
                                        (0, i.jsx)(ea, { children: (0, i.jsx)(b.Z.Title, { children: ee.intl.string(ee.t.e7GWjY) }) }),
                                        (0, i.jsx)(b.Z.Divider, {}),
                                        (0, i.jsxs)(u.TabBar, {
                                            'aria-label': ee.intl.string(ee.t.e7GWjY),
                                            selectedItem: C,
                                            type: 'top-pill',
                                            onItemSelect: S,
                                            children: [
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: X.pS.REQUESTS,
                                                    className: et.item,
                                                    children: ee.intl.string(ee.t['7RFcXV'])
                                                }),
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: X.pS.SPAM,
                                                    className: et.item,
                                                    children: 0 === s ? ee.intl.string(ee.t.ulKXHh) : ee.intl.formatToPlainString(ee.t['5jtrlZ'], { count: s })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsx)('div', {
                            className: en.content,
                            children: (0, i.jsx)(es, { section: C })
                        })
                    ]
                }),
                _ &&
                    (0, i.jsx)(er, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            m(t);
                        }
                    })
            ]
        })
    );
});
t.Z = eo;
