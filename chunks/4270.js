n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(731738),
    d = n(397927),
    c = n(964486),
    u = n(260762),
    A = n(485947),
    h = n(831062),
    _ = n(954571),
    m = n(15978),
    p = n(336590),
    g = n(471271),
    E = n(957283),
    I = n(284306),
    f = n(790499),
    C = n(514426),
    T = n(977524),
    N = n(687599),
    S = n(652215),
    x = n(985018),
    v = n(146430);
function b() {
    let e = r.useRef(null),
        t = (0, I.A)(),
        n = (0, f.I)(),
        a = (0, p.r)(),
        b = (0, m.w)(),
        y = (0, u.A)("message-requests-spam-list"),
        { channelId: O } = (0, E.N)(),
        L = r.useCallback(() => {
            (0, d.showToast)((0, d.createToast)(x.intl.string(x.t["EDYbS+"]), d.ToastType.FAILURE));
        }, []),
        { rejectAll: R } = (0, g.t)({ onError: L }),
        P = r.useCallback(() => {
            R(t.map((e) => e.channel.id));
        }, [t, R]);
    (0, c.Ay)(() => {
        _.default.track(S.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }),
            h.A.increment({ name: o.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let D = r.useCallback(
            (e) => {
                let { row: n } = e,
                    r = t[n],
                    s = t[n + 1]?.channel?.id,
                    o = r.channel.id;
                return (0, i.jsx)(
                    T.A,
                    {
                        index: n,
                        className: l()({ [v.wH]: null != O && O === o, [v.wZ]: null != O && O === s }),
                        channel: r.channel,
                        user: r.user,
                        hasSingleMessageRequest: a,
                    },
                    o,
                );
            },
            [t, a, O],
        ),
        M = r.useCallback(
            () =>
                (0, i.jsxs)(
                    A.A,
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
        ? (0, i.jsx)(C.A, { section: N.zz.SPAM })
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
                              renderSection: M,
                              renderRow: D,
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
