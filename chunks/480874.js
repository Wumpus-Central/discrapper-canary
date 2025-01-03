n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(286379),
    c = n(481060),
    d = n(183126),
    u = n(209613),
    h = n(82295),
    m = n(797614),
    p = n(626135),
    g = n(26373),
    f = n(486622),
    _ = n(922409),
    E = n(727813),
    I = n(355350),
    C = n(307947),
    N = n(125855),
    v = n(687683),
    S = n(981631),
    T = n(388032),
    b = n(300755);
function A() {
    let e = r.useRef(null),
        t = (0, E.Z)(),
        n = (0, I.w)(),
        l = (0, g.V)(),
        A = (0, d.N)(),
        Z = (0, u.Z)('message-requests-spam-list'),
        { channelId: x } = (0, _._)(),
        L = r.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(T.intl.string(T.t.EDYbS0), c.ToastType.FAILURE));
        }, []),
        { rejectAll: P } = (0, f.m)({ onError: L }),
        O = r.useCallback(() => {
            P(t.map((e) => e.channel.id));
        }, [t, P]);
    r.useEffect(() => {
        p.default.track(S.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }), m.Z.increment({ name: o.V.SPAM_MESSAGE_REQUEST_VIEW });
    }, []);
    let y = r.useCallback(
            (e) => {
                var n, r;
                let { row: s } = e,
                    o = t[s],
                    c = null === (r = t[s + 1]) || void 0 === r ? void 0 : null === (n = r.channel) || void 0 === n ? void 0 : n.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    N.Z,
                    {
                        index: s,
                        className: a()({
                            [b.selected]: null != x && x === d,
                            [b.siblingSelected]: null != x && x === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: l
                    },
                    d
                );
            },
            [t, l, x]
        ),
        R = r.useCallback(
            () =>
                (0, i.jsxs)(
                    h.Z,
                    {
                        className: b.sectionTitle,
                        children: [
                            T.intl.format(T.t.C79Edn, { count: n }),
                            A && n > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(c.Text, {
                                              className: b.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(c.Button, {
                                              onClick: O,
                                              look: c.ButtonLooks.LINK,
                                              color: c.ButtonColors.LINK,
                                              size: c.ButtonSizes.SMALL,
                                              className: b.clearAllButton,
                                              'aria-label': T.intl.string(T.t.p6t7RE),
                                              children: T.intl.string(T.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'message-requests-spam-title'
                ),
            [n, O, A]
        );
    return 0 === t.length
        ? (0, i.jsx)(C.Z, { section: v.pS.SPAM })
        : (0, i.jsx)(s.bG, {
              navigator: Z,
              children: (0, i.jsx)(s.SJ, {
                  children: (n) => {
                      let { ref: r, role: l, ...a } = n;
                      return (0, i.jsx)(
                          c.List,
                          {
                              className: b.list,
                              innerRole: l,
                              innerAriaLabel: T.intl.string(T.t.e7GWjY),
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (r.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: v.oi,
                              rowHeight: v.WN,
                              renderSection: R,
                              renderRow: y,
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
