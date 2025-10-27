n.d(t, { _: () => Z }), n(642613), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(913527),
    s = n.n(a),
    c = n(91192),
    u = n(442837),
    d = n(481060),
    p = n(724757),
    f = n(294218),
    h = n(703656),
    g = n(45251),
    m = n(156012),
    b = n(74365),
    _ = n(618857),
    O = n(695346),
    y = n(23750),
    j = n(592125),
    v = n(594174),
    x = n(823379),
    C = n(324081),
    E = n(240126),
    S = n(981631),
    I = n(388032),
    P = n(909136);
let N = {
    offset: {
        left: 4,
        right: -12,
    },
};
function Z() {
    return (
        i.useEffect(() => {
            (0, g.kg)();
        }, []),
        (0, r.jsx)(T, {})
    );
}
function T() {
    let e = (0, u.e7)([m.Z], () => m.Z.getScheduledMessagesForInbox(), []),
        t = i.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, u.e7)([m.Z], () => m.Z.loading, []),
        l = i.useRef(null),
        o = (0, p.Z)("scheduled-messages", l);
    return n
        ? (0, r.jsx)(d.$jN, { className: P.loadingPlaceholder })
        : 0 === t.length
          ? (0, r.jsx)(E.Z, {
                Icon: d.T39,
                header: I.intl.string(I.t.aJQZfZ),
                tip: I.intl.string(I.t.rCN4pN),
            })
          : (0, r.jsx)(c.bG, {
                navigator: o,
                children: (0, r.jsx)(c.SJ, {
                    children: (e) => {
                        var n,
                            i,
                            { ref: o } = e,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = {},
                                            l = Object.keys(e);
                                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < l.length; r++)
                                        (n = l[r]),
                                            !(t.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                (i[n] = e[n]);
                                }
                                return i;
                            })(e, ["ref"]);
                        return (0, r.jsx)(
                            d.Den,
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })(
                                {
                                    ref: (e) => {
                                        var t;
                                        (l.current = e),
                                            (o.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                },
                                a,
                            )),
                            (i = i = { children: (0, r.jsx)(w, { scheduledMessages: t }) }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n),
                        );
                    },
                }),
            });
}
function w(e) {
    let { scheduledMessages: t } = e,
        n = i.useMemo(
            () =>
                t.reduce((e, t) => {
                    var n, r;
                    let i = j.Z.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == i ||
                            (e[i.id] = {
                                channel: i,
                                scheduledMessages: [
                                    ...(null != (r = null == (n = e[i.id]) ? void 0 : n.scheduledMessages) ? r : []),
                                    t,
                                ],
                            }),
                        e
                    );
                }, {}),
            [t],
        ),
        l = (0, u.e7)([m.Z], () => m.Z.getMessagesPendingDeletion(), []);
    return (0, r.jsx)(r.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: i }] = e;
            return (0, r.jsxs)(
                "div",
                {
                    className: P.channelRow,
                    children: [
                        (0, r.jsx)(C.Z, {
                            channel: n,
                            gotoChannel: () => (0, h.uL)(S.Z5c.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        i.map((e) => {
                            let t = l.has(e.scheduledMessageId);
                            return (0, r.jsx)(
                                A,
                                {
                                    scheduledMessage: e,
                                    channel: n,
                                    isPendingDeletion: t,
                                },
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
let A = i.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: l } = e,
        a = new y.ZP({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: v.default.getUser(t.userId),
            timestamp: s()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: c, stateMessage: u } = (function (e) {
            switch (e) {
                case b._.SCHEDULED:
                    return {
                        isError: !1,
                        stateMessage: I.intl.string(I.t.Fn6Odn),
                    };
                case b._.ERROR_CHANNEL_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: I.intl.string(I.t.v5O2dK),
                    };
                case b._.ERROR_USER_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: I.intl.string(I.t.j8uIfG),
                    };
                case b._.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return {
                        isError: !0,
                        stateMessage: I.intl.string(I.t["w6zHX/"]),
                    };
                case b._.ERROR_SEND_FAILED:
                    return {
                        isError: !0,
                        stateMessage: I.intl.string(I.t.pflV7z),
                    };
                case b._.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return {
                        isError: !0,
                        stateMessage: I.intl.string(I.t.j8uIfG),
                    };
                default:
                    (0, x.vE)(e);
            }
        })(t.state),
        p = i.useCallback(() => {
            (0, g.gD)(t.scheduledMessageId)
                .then(() => {
                    (0, _.C$)();
                })
                .catch((e) => {
                    (0, _.wW)(e.message);
                });
        }, [t.scheduledMessageId]);
    return (0, r.jsx)(
        "div",
        {
            className: o()(P.messageContainer, {
                [P.messageSendError]: c,
                [P.messageSendScheduled]: !c,
            }),
            children: l
                ? (0, r.jsx)(d.$jN, { className: P.messageSpinner })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(d.Text, {
                              variant: "text-xs/semibold",
                              color: c ? "text-danger" : "text-feedback-positive",
                              className: P.messageState,
                              children: u,
                          }),
                          (0, r.jsxs)("div", {
                              className: P.channelMessageAndCancelButton,
                              children: [
                                  (0, r.jsx)(
                                      f.Z,
                                      {
                                          message: a,
                                          channel: n,
                                          className: P.message,
                                          compact: O.jU.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: N,
                                      },
                                      a.id,
                                  ),
                                  (0, r.jsx)(d.P3F, {
                                      className: P.cancelMessageButton,
                                      onClick: p,
                                      children: (0, r.jsx)(d.k$p, {}),
                                  }),
                              ],
                          }),
                      ],
                  }),
        },
        a.id,
    );
});
