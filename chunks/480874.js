n.d(t, { Z: () => Z });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(91192),
    o = n(286379),
    c = n(481060),
    d = n(183126),
    u = n(493773),
    h = n(209613),
    m = n(82295),
    p = n(797614),
    g = n(626135),
    _ = n(26373),
    f = n(486622),
    E = n(922409),
    I = n(727813),
    C = n(355350),
    N = n(307947),
    v = n(125855),
    T = n(687683),
    S = n(981631),
    A = n(388032),
    b = n(356439);
function Z() {
    let e = l.useRef(null),
        t = (0, I.Z)(),
        n = (0, C.w)(),
        r = (0, _.V)(),
        Z = (0, d.N)(),
        x = (0, h.Z)('message-requests-spam-list'),
        { channelId: L } = (0, E._)(),
        y = l.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(A.intl.string(A.t.EDYbS0), c.ToastType.FAILURE));
        }, []),
        { rejectAll: P } = (0, f.m)({ onError: y }),
        O = l.useCallback(() => {
            P(t.map((e) => e.channel.id));
        }, [t, P]);
    (0, u.ZP)(() => {
        g.default.track(S.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }), p.Z.increment({ name: o.V.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let R = l.useCallback(
            (e) => {
                var n, l;
                let { row: s } = e,
                    o = t[s],
                    c = null === (l = t[s + 1]) || void 0 === l ? void 0 : null === (n = l.channel) || void 0 === n ? void 0 : n.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    v.Z,
                    {
                        index: s,
                        className: a()({
                            [b.selected]: null != L && L === d,
                            [b.siblingSelected]: null != L && L === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: r
                    },
                    d
                );
            },
            [t, r, L]
        ),
        j = l.useCallback(
            () =>
                (0, i.jsxs)(
                    m.Z,
                    {
                        className: b.sectionTitle,
                        children: [
                            A.intl.format(A.t.C79Edn, { count: n }),
                            Z && n > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(c.Text, {
                                              className: b.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(c.zxk, {
                                              onClick: O,
                                              look: c.iLD.LINK,
                                              color: c.Ttl.LINK,
                                              size: c.PhG.SMALL,
                                              className: b.clearAllButton,
                                              'aria-label': A.intl.string(A.t.p6t7RE),
                                              children: A.intl.string(A.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'message-requests-spam-title'
                ),
            [n, O, Z]
        );
    return 0 === t.length
        ? (0, i.jsx)(N.Z, { section: T.pS.SPAM })
        : (0, i.jsx)(s.bG, {
              navigator: x,
              children: (0, i.jsx)(s.SJ, {
                  children: (n) => {
                      let { ref: l, role: r, ...a } = n;
                      return (0, i.jsx)(
                          c.aVo,
                          {
                              className: b.list,
                              innerRole: r,
                              innerAriaLabel: A.intl.string(A.t.e7GWjY),
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (l.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: T.oi,
                              rowHeight: T.WN,
                              renderSection: j,
                              renderRow: R,
                              sections: [t.length],
                              chunkSize: 30,
                              fade: !0,
                              ...a
                          },
                          'message-requests-spam-list'
                      );
                  }
              })
          });
}
