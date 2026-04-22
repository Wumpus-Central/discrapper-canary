n.d(t, { A: () => G });
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(837381),
    c = n(731738),
    d = n(691540),
    o = n(857250),
    u = n(97483),
    A = n(834730),
    h = n(123292),
    m = n(475825),
    g = n(964486),
    x = n(260762),
    S = n(485947),
    E = n(831062),
    f = n(954571),
    _ = n(15978),
    b = n(336590),
    j = n(471271),
    p = n(957283),
    v = n(284306),
    C = n(790499),
    I = n(514426),
    N = n(977524),
    R = n(687599),
    M = n(652215),
    k = n(985018),
    y = n(87433);
function G() {
    let e = l.useRef(null),
        t = (0, v.A)(),
        n = (0, C.I)(),
        a = (0, b.r)(),
        G = (0, _.w)(),
        T = (0, x.A)("message-requests-spam-list"),
        { channelId: P } = (0, p.N)(),
        L = l.useCallback(() => {
            (0, d.P0)((0, o.o)(k.intl.string(k.t["EDYbS+"]), u.Ck.FAILURE));
        }, []),
        { rejectAll: z } = (0, j.t)({ onError: L }),
        w = l.useCallback(() => {
            z(t.map((e) => e.channel.id));
        }, [t, z]);
    (0, g.Ay)(() => {
        f.default.track(M.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }),
            E.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let U = l.useCallback(
            (e) => {
                let { row: n } = e,
                    l = t[n],
                    r = t[n + 1]?.channel?.id,
                    c = l.channel.id;
                return (0, s.jsx)(
                    N.A,
                    {
                        index: n,
                        className: i()({ [y.wH]: null != P && P === c, [y.wZ]: null != P && P === r }),
                        channel: l.channel,
                        user: l.user,
                        hasSingleMessageRequest: a,
                    },
                    c,
                );
            },
            [t, a, P],
        ),
        W = l.useCallback(
            () =>
                (0, s.jsxs)(
                    S.A,
                    {
                        className: y.Gf,
                        children: [
                            k.intl.format(k.t.C79Edh, { count: n }),
                            G && n > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(A.E, {
                                              className: y.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "•",
                                          }),
                                          (0, s.jsx)(h.Q, {
                                              textVariant: "text-sm/normal",
                                              text: k.intl.string(k.t.p6t7RC),
                                              onClick: w,
                                              "aria-label": k.intl.string(k.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [n, w, G],
        );
    return 0 === t.length
        ? (0, s.jsx)(I.A, { section: R.zz.SPAM })
        : (0, s.jsx)(r.hD, {
              navigator: T,
              children: (0, s.jsx)(r.PR, {
                  children: (n) => {
                      let { ref: l, role: a, ...i } = n;
                      return (0, s.jsx)(
                          m.OZ,
                          {
                              className: y.p_,
                              innerRole: a,
                              innerAriaLabel: k.intl.string(k.t.e7GWjQ),
                              ref: (t) => {
                                  (e.current = t), (l.current = t?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: W,
                              renderRow: U,
                              sections: [t.length],
                              chunkSize: 30,
                              fade: !0,
                              ...i,
                          },
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
