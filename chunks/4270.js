n.d(t, { A: () => y });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(837381),
    o = n(731738),
    d = n(397927),
    c = n(964486),
    u = n(260762),
    A = n(485947),
    h = n(831062),
    _ = n(954571),
    m = n(15978),
    g = n(336590),
    p = n(471271),
    E = n(957283),
    I = n(284306),
    f = n(790499),
    C = n(514426),
    T = n(977524),
    N = n(687599),
    S = n(652215),
    x = n(985018),
    v = n(69081);
function y() {
    let e = a.useRef(null),
        t = (0, I.A)(),
        n = (0, f.I)(),
        l = (0, g.r)(),
        y = (0, m.w)(),
        b = (0, u.A)("message-requests-spam-list"),
        { channelId: O } = (0, E.N)(),
        L = a.useCallback(() => {
            (0, d.showToast)((0, d.createToast)(x.intl.string(x.t["EDYbS+"]), d.ToastType.FAILURE));
        }, []),
        { rejectAll: R } = (0, p.t)({ onError: L }),
        P = a.useCallback(() => {
            R(t.map((e) => e.channel.id));
        }, [t, R]);
    (0, c.Ay)(() => {
        _.default.track(S.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }),
            h.A.increment({ name: o.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let D = a.useCallback(
            (e) => {
                let { row: n } = e,
                    a = t[n],
                    s = t[n + 1]?.channel?.id,
                    o = a.channel.id;
                return (0, i.jsx)(
                    T.A,
                    {
                        index: n,
                        className: r()({ [v.wH]: null != O && O === o, [v.wZ]: null != O && O === s }),
                        channel: a.channel,
                        user: a.user,
                        hasSingleMessageRequest: l,
                    },
                    o,
                );
            },
            [t, l, O],
        ),
        M = a.useCallback(
            () =>
                (0, i.jsxs)(
                    A.A,
                    {
                        className: v.Gf,
                        children: [
                            x.intl.format(x.t.C79Edh, { count: n }),
                            y && n > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(d.Text, {
                                              className: v.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "•",
                                          }),
                                          (0, i.jsx)(d.QWc, {
                                              textVariant: "text-sm/normal",
                                              text: x.intl.string(x.t.p6t7RC),
                                              onClick: P,
                                              "aria-label": x.intl.string(x.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [n, P, y],
        );
    return 0 === t.length
        ? (0, i.jsx)(C.A, { section: N.zz.SPAM })
        : (0, i.jsx)(s.hD, {
              navigator: b,
              children: (0, i.jsx)(s.PR, {
                  children: (n) => {
                      let { ref: a, role: l, ...r } = n;
                      return (0, i.jsx)(
                          d.B8B,
                          {
                              className: v.p_,
                              innerRole: l,
                              innerAriaLabel: x.intl.string(x.t.e7GWjQ),
                              ref: (t) => {
                                  (e.current = t), (a.current = t?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: M,
                              renderRow: D,
                              sections: [t.length],
                              chunkSize: 30,
                              fade: !0,
                              ...r,
                          },
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
