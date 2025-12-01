n.d(t, { _: () => w }), n(642613), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(913527),
    s = n.n(a),
    c = n(91192),
    u = n(793030),
    d = n(442837),
    f = n(481060),
    h = n(724757),
    p = n(294218),
    g = n(703656),
    m = n(45251),
    b = n(156012),
    _ = n(74365),
    y = n(618857),
    O = n(695346),
    v = n(23750),
    j = n(592125),
    x = n(594174),
    C = n(823379),
    E = n(324081),
    S = n(240126),
    I = n(981631),
    P = n(388032),
    N = n(909136);
let Z = {
    offset: {
        left: 4,
        right: -12,
    },
};
function w() {
    return (
        i.useEffect(() => {
            (0, m.kg)();
        }, []),
        (0, r.jsx)(T, {})
    );
}
function T() {
    let e = (0, d.e7)([b.Z], () => b.Z.getScheduledMessagesForInbox(), []),
        t = i.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, d.e7)([b.Z], () => b.Z.loading, []),
        l = i.useRef(null),
        o = (0, h.Z)("scheduled-messages", l);
    return n
        ? (0, r.jsx)(f.$jN, { className: N.loadingPlaceholder })
        : 0 === t.length
          ? (0, r.jsx)(S.Z, {
                Icon: f.T39,
                header: P.intl.string(P.t.aJQZfZ),
                tip: P.intl.string(P.t.rCN4pN),
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
                                            (o.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                },
                                a,
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
        l = (0, d.e7)([b.Z], () => b.Z.getMessagesPendingDeletion(), []);
    return (0, r.jsx)(r.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: i }] = e;
            return (0, r.jsxs)(
                "div",
                {
                    className: N.channelRow,
                    children: [
                        (0, r.jsx)(E.Z, {
                            channel: n,
                            gotoChannel: () => (0, g.uL)(I.Z5c.CHANNEL(n.getGuildId(), n.id)),
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
        a = new v.ZP({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: x.default.getUser(t.userId),
            timestamp: s()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: c, stateMessage: d } = (function (e) {
            switch (e) {
                case _._.SCHEDULED:
                    return {
                        isError: !1,
                        stateMessage: P.intl.string(P.t.Fn6Odn),
                    };
                case _._.ERROR_CHANNEL_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: P.intl.string(P.t.v5O2dK),
                    };
                case _._.ERROR_USER_NOT_FOUND:
                    return {
                        isError: !0,
                        stateMessage: P.intl.string(P.t.j8uIfG),
                    };
                case _._.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return {
                        isError: !0,
                        stateMessage: P.intl.string(P.t["w6zHX/"]),
                    };
                case _._.ERROR_SEND_FAILED:
                    return {
                        isError: !0,
                        stateMessage: P.intl.string(P.t.pflV7z),
                    };
                case _._.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return {
                        isError: !0,
                        stateMessage: P.intl.string(P.t.j8uIfG),
                    };
                default:
                    (0, C.vE)(e);
            }
        })(t.state),
        h = i.useCallback(() => {
            (0, m.gD)(t.scheduledMessageId)
                .then(() => {
                    (0, y.C$)();
                })
                .catch((e) => {
                    (0, y.wW)(e.message);
                });
        }, [t.scheduledMessageId]),
        g = i.useCallback(() => {
            (0, y.uW)({ scheduledMessage: t });
        }, [t]);
    return (0, r.jsx)(
        "div",
        {
            className: o()(N.messageContainer, {
                [N.messageSendError]: c,
                [N.messageSendScheduled]: !c,
            }),
            children: l
                ? (0, r.jsx)(f.$jN, { className: N.messageSpinner })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(f.Text, {
                              variant: "text-xs/semibold",
                              color: c ? "text-danger" : "text-feedback-positive",
                              className: N.messageState,
                              children: d,
                          }),
                          (0, r.jsxs)("div", {
                              className: N.channelMessageAndButtons,
                              children: [
                                  (0, r.jsx)(
                                      p.Z,
                                      {
                                          message: a,
                                          channel: n,
                                          className: N.message,
                                          compact: O.jU.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: Z,
                                      },
                                      a.id,
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
        a.id,
    );
});
