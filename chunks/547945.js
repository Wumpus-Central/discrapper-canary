n.d(t, { w: () => U });
var s = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    r = n(989349),
    o = n.n(r),
    d = n(837381),
    c = n(825484),
    u = n(408278),
    h = n(311907),
    _ = n(289873),
    A = n(406810),
    m = n(599319),
    g = n(834730),
    f = n(285796),
    E = n(928039),
    N = n(636922),
    p = n(976860),
    I = n(151282),
    C = n(199160),
    S = n(551640),
    x = n(970244),
    R = n(253932),
    y = n(383233),
    T = n(734057),
    j = n(287809),
    b = n(403362),
    D = n(572448),
    O = n(963702),
    v = n(652215),
    M = n(985018),
    F = n(560502);
let L = { offset: { left: 4, right: -12 } };
function U() {
    return (
        a.useEffect(() => {
            (0, I.sy)();
        }, []),
        (0, s.jsx)(k, {})
    );
}
function k() {
    let e = (0, h.bG)([C.A], () => C.A.getScheduledMessagesForInbox(), []),
        t = a.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, h.bG)([C.A], () => C.A.loading, []),
        l = a.useRef(null),
        i = (0, E.A)("scheduled-messages", l);
    return n
        ? (0, s.jsx)(_.y, { className: F.k$ })
        : 0 === t.length
          ? (0, s.jsx)(O.A, { Icon: A.O, header: M.intl.string(M.t.aJQZfZ), tip: M.intl.string(M.t.rCN4pN) })
          : (0, s.jsx)(d.hD, {
                navigator: i,
                children: (0, s.jsx)(d.PR, {
                    children: (e) => {
                        let { ref: n, ...a } = e;
                        return (0, s.jsx)(m.Ch, {
                            ref: (e) => {
                                (l.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...a,
                            children: (0, s.jsx)(G, { scheduledMessages: t }),
                        });
                    },
                }),
            });
}
function G(e) {
    let { scheduledMessages: t } = e,
        n = a.useMemo(
            () =>
                t.reduce((e, t) => {
                    let n = T.A.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == n ||
                            (e[n.id] = { channel: n, scheduledMessages: [...(e[n.id]?.scheduledMessages ?? []), t] }),
                        e
                    );
                }, {}),
            [t],
        ),
        l = (0, h.bG)([C.A], () => C.A.getMessagesPendingDeletion(), []);
    return (0, s.jsx)(s.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: a }] = e;
            return (0, s.jsxs)(
                "div",
                {
                    className: F.WG,
                    children: [
                        (0, s.jsx)(D.A, {
                            channel: n,
                            gotoChannel: () => (0, p.pX)(v.BVt.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        a.map((e) => {
                            let t = l.has(e.scheduledMessageId);
                            return (0, s.jsx)(
                                w,
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
let w = a.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: l } = e,
        r = new y.Ay({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: j.default.getUser(t.userId),
            timestamp: o()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: d, stateMessage: h } = (function (e) {
            switch (e) {
                case S.A.SCHEDULED:
                    return { isError: !1, stateMessage: M.intl.string(M.t.Fn6Odn) };
                case S.A.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: M.intl.string(M.t.v5O2dK) };
                case S.A.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: M.intl.string(M.t.j8uIfG) };
                case S.A.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: M.intl.string(M.t["w6zHX/"]) };
                case S.A.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: M.intl.string(M.t.pflV7z) };
                case S.A.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: M.intl.string(M.t.j8uIfG) };
                default:
                    (0, b.xb)(e);
            }
        })(t.state),
        m = a.useCallback(() => {
            (0, I.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, x.Re)();
                })
                .catch((e) => {
                    (0, x.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        E = a.useCallback(() => {
            (0, x.CI)({ scheduledMessage: t });
        }, [t]);
    return (0, s.jsx)(
        "div",
        {
            className: i()(F.zC, { [F._4]: d, [F.j3]: !d }),
            children: l
                ? (0, s.jsx)(_.y, { className: F.$5 })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(g.E, {
                              variant: "text-xs/semibold",
                              color: d ? "text-feedback-critical" : "text-feedback-positive",
                              className: F.Rq,
                              children: h,
                          }),
                          (0, s.jsxs)("div", {
                              className: F.Pd,
                              children: [
                                  (0, s.jsx)(
                                      N.A,
                                      {
                                          message: r,
                                          channel: n,
                                          className: F.iU,
                                          compact: R.hH.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: L,
                                      },
                                      r.id,
                                  ),
                                  (0, s.jsxs)(c.e, {
                                      size: "sm",
                                      children: [
                                          (0, s.jsx)(u.K, {
                                              icon: A.O,
                                              onClick: E,
                                              variant: "icon-only",
                                              "aria-label": M.intl.string(M.t.SBcdAN),
                                          }),
                                          (0, s.jsx)(u.K, {
                                              icon: f.a,
                                              onClick: m,
                                              "aria-label": M.intl.string(M.t.O3sL8F),
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
