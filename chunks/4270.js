n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(731738),
    d = n(397927),
    c = n(55400),
    u = n(964486),
    A = n(260762),
    h = n(485947),
    _ = n(831062),
    m = n(954571),
    p = n(336590),
    g = n(471271),
    E = n(957283),
    f = n(284306),
    I = n(790499),
    C = n(514426),
    N = n(977524),
    T = n(687599),
    S = n(652215),
    x = n(985018),
    v = n(843284);
function b() {
    let e = r.useRef(null),
        t = (0, f.A)(),
        n = (0, I.I)(),
        a = (0, p.r)(),
        b = (0, c.w)(),
        y = (0, A.A)("message-requests-spam-list"),
        { channelId: L } = (0, E.N)(),
        O = r.useCallback(() => {
            (0, d.showToast)((0, d.createToast)(x.intl.string(x.t["EDYbS+"]), d.ToastType.FAILURE));
        }, []),
        { rejectAll: R } = (0, g.t)({ onError: O }),
        P = r.useCallback(() => {
            R(t.map((e) => e.channel.id));
        }, [t, R]);
    (0, u.Ay)(() => {
        m.default.track(S.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }),
            _.A.increment({ name: o.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let j = r.useCallback(
            (e) => {
                let { row: n } = e,
                    r = t[n],
                    s = t[n + 1]?.channel?.id,
                    o = r.channel.id;
                return (0, i.jsx)(
                    N.A,
                    {
                        index: n,
                        className: l()({ [v.wH]: null != L && L === o, [v.wZ]: null != L && L === s }),
                        channel: r.channel,
                        user: r.user,
                        hasSingleMessageRequest: a,
                    },
                    o,
                );
            },
            [t, a, L],
        ),
        D = r.useCallback(
            () =>
                (0, i.jsxs)(
                    h.A,
                    {
                        className: v.Gf,
                        children: [
                            x.intl.format(x.t.C79Edh, { count: n }),
                            b && n > 0
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
            [n, P, b],
        );
    return 0 === t.length
        ? (0, i.jsx)(C.A, { section: T.zz.SPAM })
        : (0, i.jsx)(s.hD, {
              navigator: y,
              children: (0, i.jsx)(s.PR, {
                  children: (n) => {
                      let { ref: r, role: a, ...l } = n;
                      return (0, i.jsx)(
                          d.B8B,
                          {
                              className: v.p_,
                              innerRole: a,
                              innerAriaLabel: x.intl.string(x.t.e7GWjQ),
                              ref: (t) => {
                                  (e.current = t), (r.current = t?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: D,
                              renderRow: j,
                              sections: [t.length],
                              chunkSize: 30,
                              fade: !0,
                              ...l,
                          },
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
