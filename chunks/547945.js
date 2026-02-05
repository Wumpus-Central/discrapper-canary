n.d(t, { w: () => O });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(989349),
    o = n.n(r),
    d = n(837381),
    c = n(158954),
    u = n(311907),
    h = n(397927),
    A = n(928039),
    g = n(636922),
    m = n(976860),
    p = n(151282),
    _ = n(199160),
    x = n(551640),
    f = n(970244),
    E = n(253932),
    C = n(383233),
    I = n(734057),
    S = n(287809),
    b = n(403362),
    N = n(572448),
    T = n(963702),
    j = n(652215),
    v = n(985018),
    y = n(693853);
let R = { offset: { left: 4, right: -12 } };
function O() {
    return (
        l.useEffect(() => {
            (0, p.sy)();
        }, []),
        (0, i.jsx)(L, {})
    );
}
function L() {
    let e = (0, u.bG)([_.A], () => _.A.getScheduledMessagesForInbox(), []),
        t = l.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, u.bG)([_.A], () => _.A.loading, []),
        s = l.useRef(null),
        a = (0, A.A)("scheduled-messages", s);
    return n
        ? (0, i.jsx)(h.y$y, { className: y.k$ })
        : 0 === t.length
          ? (0, i.jsx)(T.A, { Icon: h.O4, header: v.intl.string(v.t.aJQZfZ), tip: v.intl.string(v.t.rCN4pN) })
          : (0, i.jsx)(d.hD, {
                navigator: a,
                children: (0, i.jsx)(d.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsx)(h.T7Y, {
                            ref: (e) => {
                                (s.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...l,
                            children: (0, i.jsx)(D, { scheduledMessages: t }),
                        });
                    },
                }),
            });
}
function D(e) {
    let { scheduledMessages: t } = e,
        n = l.useMemo(
            () =>
                t.reduce((e, t) => {
                    let n = I.A.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == n ||
                            (e[n.id] = { channel: n, scheduledMessages: [...(e[n.id]?.scheduledMessages ?? []), t] }),
                        e
                    );
                }, {}),
            [t],
        ),
        s = (0, u.bG)([_.A], () => _.A.getMessagesPendingDeletion(), []);
    return (0, i.jsx)(i.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: l }] = e;
            return (0, i.jsxs)(
                "div",
                {
                    className: y.WG,
                    children: [
                        (0, i.jsx)(N.A, {
                            channel: n,
                            gotoChannel: () => (0, m.pX)(j.BVt.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        l.map((e) => {
                            let t = s.has(e.scheduledMessageId);
                            return (0, i.jsx)(
                                M,
                                { scheduledMessage: e, channel: n, isPendingDeletion: t },
                                e.scheduledMessageId,
                            );
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
let M = l.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: s } = e,
        r = new C.Ay({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: S.default.getUser(t.userId),
            timestamp: o()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: d, stateMessage: u } = (function (e) {
            switch (e) {
                case x.A.SCHEDULED:
                    return { isError: !1, stateMessage: v.intl.string(v.t.Fn6Odn) };
                case x.A.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: v.intl.string(v.t.v5O2dK) };
                case x.A.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: v.intl.string(v.t.j8uIfG) };
                case x.A.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: v.intl.string(v.t["w6zHX/"]) };
                case x.A.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: v.intl.string(v.t.pflV7z) };
                case x.A.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: v.intl.string(v.t.j8uIfG) };
                default:
                    (0, b.xb)(e);
            }
        })(t.state),
        A = l.useCallback(() => {
            (0, p.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, f.Re)();
                })
                .catch((e) => {
                    (0, f.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        m = l.useCallback(() => {
            (0, f.CI)({ scheduledMessage: t });
        }, [t]);
    return (0, i.jsx)(
        "div",
        {
            className: a()(y.zC, { [y._4]: d, [y.j3]: !d }),
            children: s
                ? (0, i.jsx)(h.y$y, { className: y.$5 })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              variant: "text-xs/semibold",
                              color: d ? "text-feedback-critical" : "text-feedback-positive",
                              className: y.Rq,
                              children: u,
                          }),
                          (0, i.jsxs)("div", {
                              className: y.Pd,
                              children: [
                                  (0, i.jsx)(
                                      g.A,
                                      {
                                          message: r,
                                          channel: n,
                                          className: y.iU,
                                          compact: E.hH.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: R,
                                      },
                                      r.id,
                                  ),
                                  (0, i.jsxs)(c.e2v, {
                                      size: "sm",
                                      children: [
                                          (0, i.jsx)(c.K0, {
                                              icon: h.O4,
                                              onClick: m,
                                              variant: "icon-only",
                                              "aria-label": v.intl.string(v.t.SBcdAN),
                                          }),
                                          (0, i.jsx)(c.K0, {
                                              icon: h.aXh,
                                              onClick: A,
                                              "aria-label": v.intl.string(v.t.O3sL8F),
                                              variant: "icon-only",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
        },
        r.id,
    );
});
