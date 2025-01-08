n.d(t, {
    Z: function () {
        return Z;
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
    u = n(493773),
    h = n(209613),
    m = n(82295),
    p = n(797614),
    g = n(626135),
    f = n(26373),
    _ = n(486622),
    E = n(922409),
    I = n(727813),
    C = n(355350),
    N = n(307947),
    v = n(125855),
    S = n(687683),
    T = n(981631),
    b = n(388032),
    A = n(300755);
function Z() {
    let e = r.useRef(null),
        t = (0, I.Z)(),
        n = (0, C.w)(),
        l = (0, f.V)(),
        Z = (0, d.N)(),
        x = (0, h.Z)('message-requests-spam-list'),
        { channelId: L } = (0, E._)(),
        P = r.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(b.intl.string(b.t.EDYbS0), c.ToastType.FAILURE));
        }, []),
        { rejectAll: O } = (0, _.m)({ onError: P }),
        y = r.useCallback(() => {
            O(t.map((e) => e.channel.id));
        }, [t, O]);
    (0, u.Z)(() => {
        g.default.track(T.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }), p.Z.increment({ name: o.V.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let R = r.useCallback(
            (e) => {
                var n, r;
                let { row: s } = e,
                    o = t[s],
                    c = null === (r = t[s + 1]) || void 0 === r ? void 0 : null === (n = r.channel) || void 0 === n ? void 0 : n.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    v.Z,
                    {
                        index: s,
                        className: a()({
                            [A.selected]: null != L && L === d,
                            [A.siblingSelected]: null != L && L === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: l
                    },
                    d
                );
            },
            [t, l, L]
        ),
        j = r.useCallback(
            () =>
                (0, i.jsxs)(
                    m.Z,
                    {
                        className: A.sectionTitle,
                        children: [
                            b.intl.format(b.t.C79Edn, { count: n }),
                            Z && n > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(c.Text, {
                                              className: A.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(c.Button, {
                                              onClick: y,
                                              look: c.ButtonLooks.LINK,
                                              color: c.ButtonColors.LINK,
                                              size: c.ButtonSizes.SMALL,
                                              className: A.clearAllButton,
                                              'aria-label': b.intl.string(b.t.p6t7RE),
                                              children: b.intl.string(b.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'message-requests-spam-title'
                ),
            [n, y, Z]
        );
    return 0 === t.length
        ? (0, i.jsx)(N.Z, { section: S.pS.SPAM })
        : (0, i.jsx)(s.bG, {
              navigator: x,
              children: (0, i.jsx)(s.SJ, {
                  children: (n) => {
                      let { ref: r, role: l, ...a } = n;
                      return (0, i.jsx)(
                          c.List,
                          {
                              className: A.list,
                              innerRole: l,
                              innerAriaLabel: b.intl.string(b.t.e7GWjY),
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (r.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: S.oi,
                              rowHeight: S.WN,
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
