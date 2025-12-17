n.d(t, { _: () => w }), n(642613), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(91192),
    u = n(793030),
    d = n(442837),
    f = n(481060),
    h = n(724757),
    p = n(294218),
    g = n(703656),
    b = n(45251),
    m = n(156012),
    y = n(74365),
    O = n(618857),
    v = n(695346),
    j = n(23750),
    C = n(592125),
    x = n(594174),
    E = n(823379),
    S = n(324081),
    I = n(240126),
    _ = n(981631),
    P = n(388032),
    N = n(217337);
let Z = {
    offset: {
        left: 4,
        right: -12,
    },
};
function w() {
    return (
        i.useEffect(() => {
            (0, b.kg)();
        }, []),
        (0, r.jsx)(T, {})
    );
}
function T() {
    let e = (0, d.e7)([m.Z], () => m.Z.getScheduledMessagesForInbox(), []),
        t = i.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, d.e7)([m.Z], () => m.Z.loading, []),
        l = i.useRef(null),
        a = (0, h.Z)("scheduled-messages", l);
    return n
        ? (0, r.jsx)(f.$jN, { className: N.loadingPlaceholder })
        : 0 === t.length
          ? (0, r.jsx)(I.Z, {
                Icon: f.T39,
                header: P.intl.string(P.t.aJQZfZ),
                tip: P.intl.string(P.t.rCN4pN),
            })
          : (0, r.jsx)(c.bG, {
                navigator: a,
                children: (0, r.jsx)(c.SJ, {
                    children: (e) => {
                        var n,
                            i,
                            { ref: a } = e,
                            o = (function (e, t) {
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
                            f.Den,
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
                                            (a.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                },
                                o,
                            )),
                            (i = i = { children: (0, r.jsx)(A, { scheduledMessages: t }) }),
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
function A(e) {
    let { scheduledMessages: t } = e,
        n = i.useMemo(
            () =>
                t.reduce((e, t) => {
                    var n, r;
                    let i = C.Z.getChannel(t.scheduledMessage.channelId);
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
        l = (0, d.e7)([m.Z], () => m.Z.getMessagesPendingDeletion(), []);
    return (0, r.jsx)(r.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: i }] = e;
            return (0, r.jsxs)(
                "div",
                {
                    className: N.channelRow,
                    children: [
                        (0, r.jsx)(S.Z, {
                            channel: n,
                            gotoChannel: () => (0, g.uL)(_.Z5c.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        i.map((e) => {
                            let t = l.has(e.scheduledMessageId);
                            return (0, r.jsx)(
                                R,
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
let R = i.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: l } = e,
        o = new j.ZP({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: x.default.getUser(t.userId),
            timestamp: s()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: c, stateMessage: d } = (function (e) {
            switch (e) {
                case y._.SCHEDULED:
                    return {
                        isError: !1,
                        stateMessage: P.intl.string(P.t.Fn6Odn),
                    };
                case y._.ERROR_CHANNEL_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: P.intl.string(P.t.v5O2dK),
                    };
                case y._.ERROR_USER_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: P.intl.string(P.t.j8uIfG),
                    };
                case y._.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return {
                        isError: !0,
                        stateMessage: P.intl.string(P.t["w6zHX/"]),
                    };
                case y._.ERROR_SEND_FAILED:
                    return {
                        isError: !0,
                        stateMessage: P.intl.string(P.t.pflV7z),
                    };
                case y._.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return {
                        isError: !0,
                        stateMessage: P.intl.string(P.t.j8uIfG),
                    };
                default:
                    (0, E.vE)(e);
            }
        })(t.state),
        h = i.useCallback(() => {
            (0, b.gD)(t.scheduledMessageId)
                .then(() => {
                    (0, O.C$)();
                })
                .catch((e) => {
                    (0, O.wW)(e.message);
                });
        }, [t.scheduledMessageId]),
        g = i.useCallback(() => {
            (0, O.uW)({ scheduledMessage: t });
        }, [t]);
    return (0, r.jsx)(
        "div",
        {
            className: a()(N.messageContainer, {
                [N.messageSendError]: c,
                [N.messageSendScheduled]: !c,
            }),
            children: l
                ? (0, r.jsx)(f.$jN, { className: N.messageSpinner })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(f.Text, {
                              variant: "text-xs/semibold",
                              color: c ? "text-feedback-critical" : "text-feedback-positive",
                              className: N.messageState,
                              children: d,
                          }),
                          (0, r.jsxs)("div", {
                              className: N.channelMessageAndButtons,
                              children: [
                                  (0, r.jsx)(
                                      p.Z,
                                      {
                                          message: o,
                                          channel: n,
                                          className: N.message,
                                          compact: v.jU.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: Z,
                                      },
                                      o.id,
                                  ),
                                  (0, r.jsxs)(u.hE2, {
                                      size: "sm",
                                      children: [
                                          (0, r.jsx)(u.hU, {
                                              icon: f.T39,
                                              onClick: g,
                                              variant: "icon-only",
                                              "aria-label": P.intl.string(P.t.SBcdAN),
                                          }),
                                          (0, r.jsx)(u.hU, {
                                              icon: f.k$p,
                                              onClick: h,
                                              "aria-label": P.intl.string(P.t.O3sL8F),
                                              variant: "icon-only",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
        },
        o.id,
    );
});
