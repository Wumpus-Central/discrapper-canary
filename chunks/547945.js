"use strict";
n.d(t, { w: () => O });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(989349),
    o = n.n(a),
    c = n(837381),
    d = n(158954),
    u = n(311907),
    h = n(397927),
    A = n(928039),
    p = n(636922),
    g = n(976860),
    m = n(151282),
    _ = n(199160),
    f = n(551640),
    x = n(970244),
    C = n(253932),
    E = n(383233),
    I = n(734057),
    b = n(287809),
    N = n(403362),
    S = n(572448),
    T = n(963702),
    v = n(652215),
    y = n(985018),
    j = n(693853);
let R = { offset: { left: 4, right: -12 } };
function O() {
    return (
        s.useEffect(() => {
            (0, m.sy)();
        }, []),
        (0, i.jsx)(L, {})
    );
}
function L() {
    let e = (0, u.bG)([_.A], () => _.A.getScheduledMessagesForInbox(), []),
        t = s.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, u.bG)([_.A], () => _.A.loading, []),
        l = s.useRef(null),
        r = (0, A.A)("scheduled-messages", l);
    return n
        ? (0, i.jsx)(h.y$y, { className: j.k$ })
        : 0 === t.length
          ? (0, i.jsx)(T.A, { Icon: h.O4, header: y.intl.string(y.t.aJQZfZ), tip: y.intl.string(y.t.rCN4pN) })
          : (0, i.jsx)(c.hD, {
                navigator: r,
                children: (0, i.jsx)(c.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(h.T7Y, {
                            ref: (e) => {
                                (l.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: (0, i.jsx)(M, { scheduledMessages: t }),
                        });
                    },
                }),
            });
}
function M(e) {
    let { scheduledMessages: t } = e,
        n = s.useMemo(
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
        l = (0, u.bG)([_.A], () => _.A.getMessagesPendingDeletion(), []);
    return (0, i.jsx)(i.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: s }] = e;
            return (0, i.jsxs)(
                "div",
                {
                    className: j.WG,
                    children: [
                        (0, i.jsx)(S.A, {
                            channel: n,
                            gotoChannel: () => (0, g.pX)(v.BVt.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        s.map((e) => {
                            let t = l.has(e.scheduledMessageId);
                            return (0, i.jsx)(
                                D,
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
let D = s.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: l } = e,
        a = new E.Ay({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: b.default.getUser(t.userId),
            timestamp: o()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: c, stateMessage: u } = (function (e) {
            switch (e) {
                case f.A.SCHEDULED:
                    return { isError: !1, stateMessage: y.intl.string(y.t.Fn6Odn) };
                case f.A.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: y.intl.string(y.t.v5O2dK) };
                case f.A.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: y.intl.string(y.t.j8uIfG) };
                case f.A.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: y.intl.string(y.t["w6zHX/"]) };
                case f.A.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: y.intl.string(y.t.pflV7z) };
                case f.A.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: y.intl.string(y.t.j8uIfG) };
                default:
                    (0, N.xb)(e);
            }
        })(t.state),
        A = s.useCallback(() => {
            (0, m.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, x.Re)();
                })
                .catch((e) => {
                    (0, x.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        g = s.useCallback(() => {
            (0, x.CI)({ scheduledMessage: t });
        }, [t]);
    return (0, i.jsx)(
        "div",
        {
            className: r()(j.zC, { [j._4]: c, [j.j3]: !c }),
            children: l
                ? (0, i.jsx)(h.y$y, { className: j.$5 })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              variant: "text-xs/semibold",
                              color: c ? "text-feedback-critical" : "text-feedback-positive",
                              className: j.Rq,
                              children: u,
                          }),
                          (0, i.jsxs)("div", {
                              className: j.Pd,
                              children: [
                                  (0, i.jsx)(
                                      p.A,
                                      {
                                          message: a,
                                          channel: n,
                                          className: j.iU,
                                          compact: C.hH.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: R,
                                      },
                                      a.id,
                                  ),
                                  (0, i.jsxs)(d.e2v, {
                                      size: "sm",
                                      children: [
                                          (0, i.jsx)(d.K0, {
                                              icon: h.O4,
                                              onClick: g,
                                              variant: "icon-only",
                                              "aria-label": y.intl.string(y.t.SBcdAN),
                                          }),
                                          (0, i.jsx)(d.K0, {
                                              icon: h.aXh,
                                              onClick: A,
                                              "aria-label": y.intl.string(y.t.O3sL8F),
                                              variant: "icon-only",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
        },
        a.id,
    );
});
