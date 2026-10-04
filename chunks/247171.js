(n.r(t), n.d(t, { default: () => D }));
var i = n(477900),
    s = n(582128),
    l = n(991690),
    r = n(870440),
    a = n(333007),
    u = n(17928),
    c = n(192308),
    d = n(148494),
    o = n(281969),
    A = n(672929),
    h = n(20465),
    p = n(249288),
    f = n(506902),
    g = n(592543);
function E(e) {
    let t,
        { channelId: n, applicationId: l, surface: r, onOpenChat: E } = e,
        w = (0, A.A)(l, r),
        C = w?.id ?? null,
        N =
            ((t = s.useCallback((e) => o.A.subscribe(e), [])),
            s.useSyncExternalStore(t, () => null != C && o.A.isFrameVisible(C))),
        O = (0, u.bG)([p.A], () => p.A.getToastsEnabled(n), [n]),
        _ = N && O,
        b = (0, c.useHasAnyModalOpen)(),
        [I, j] = s.useState(null);
    s.useEffect(() => {
        if (!_) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })((0, f.o)(null, C));
            j((t) =>
                (
                    null == t || null == e
                        ? t === e
                        : t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
                )
                    ? t
                    : e,
            );
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [_, C]);
    let m = s.useCallback(
        (e) => {
            (E(), d.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [E],
    );
    return !_ || null == I || b
        ? null
        : (0, a.createPortal)(
              (0, i.jsx)("div", {
                  className: g.T,
                  style: { top: I.top, left: I.left, width: I.width, height: I.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: g.f,
                      children: (0, i.jsx)(h.A, { channelId: n, onToastClick: m }),
                  }),
              }),
              document.body,
          );
}
var w = n(73153),
    C = n(334738),
    N = n(334105),
    O = n(761640),
    _ = n(573163),
    b = n(927813);
let I = { lastAutoOpenedAt: null },
    j = I;
class m extends u.Ay.PersistedStore {
    static displayName = "ConjureChatAutoOpenStore";
    static persistKey = "VibegrationsChatAutoOpen";
    initialize(e) {
        j = e ?? I;
    }
    getState() {
        return j;
    }
    canAutoOpen(e) {
        return null == j.lastAutoOpenedAt || e - j.lastAutoOpenedAt >= b.A.Millis.DAY;
    }
}
let S = new m(w.h, {
    LOGOUT: function () {
        if (null == j.lastAutoOpenedAt) return !1;
        j = I;
    },
    CONJURE_APP_CHANNEL_CHAT_AUTO_OPENED: function (e) {
        let { timestamp: t } = e;
        j = { lastAutoOpenedAt: t };
    },
});
var y = n(652215),
    T = n(343030),
    x = n(150861),
    U = n(317608),
    v = n(378859),
    R = n(206600),
    L = n(375708),
    M = n(728846);
function P(e) {
    let { applicationId: t, channel: n, showChatToasts: r } = e,
        a = s.useMemo(() => ({ type: l.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id }), [n.id, n.guild_id]),
        { frame: u, state: c } = (0, R.A)({ applicationId: t, surface: a });
    switch (c) {
        case R.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(U.A, { frameId: u.id, level: T.A.WithinAppContent, className: M.Z }),
                    r
                        ? (0, i.jsx)(E, {
                              channelId: n.id,
                              applicationId: t,
                              surface: a,
                              onOpenChat: () => (0, N.fJ)(n.getGuildId(), n.id),
                          })
                        : null,
                ],
            });
        case R.n.RenderingElsewhere:
            return (0, i.jsx)(v.A, { className: M.w, description: L.intl.string(L.t["2KIDX+"]) });
        case R.n.NoApplication:
            return (0, i.jsx)(v.A, { className: M.w, description: L.intl.string(L.t.izggZO) });
        case R.n.DoesNotSupportSurface:
            return (0, i.jsx)(v.A, { className: M.w, description: L.intl.string(L.t["iUWcU/"]) });
        case R.n.Error:
            return (0, i.jsx)(v.A, {
                className: M.w,
                heading: L.intl.string(L.t.VquUff),
                error: L.intl.string(L.t["Sd9D/R"]),
            });
        case R.n.AwaitingLaunch:
        case R.n.Loading:
            return (0, i.jsx)(v.j, { className: M.w });
    }
}
function D(e) {
    let t,
        n,
        l,
        a,
        c,
        d,
        o,
        { channel: A } = e,
        h = A.application_id;
    (0, x.A)(A);
    let p = (0, r.w$)(A, "AppChannel"),
        f =
            ((t = A.id),
            (n = (0, N.cz)(t)),
            (l = (0, u.bG)([_.Ay], () => _.Ay.hasUnread(t), [t])),
            (a = s.useRef(!1)),
            (c = s.useRef(!1)),
            (d = s.useRef(!0)),
            s.useEffect(() => {
                ((a.current = !1), (c.current = !1), (d.current = !0));
            }, [t]),
            (o = s.useRef(n)),
            s.useEffect(() => {
                let e = o.current;
                ((o.current = n),
                    !p ||
                        !e ||
                        n ||
                        ((a.current = !0),
                        !(_.Ay.getMentionCount(t) > 0) &&
                            _.Ay.hasUnread(t) &&
                            (0, C.ack)(
                                t,
                                {
                                    section: y.JJy.CHANNEL,
                                    object: y.ZSU.ACK_VIBEGRATIONS_CHAT_CLOSED,
                                    objectType: y.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                },
                                !0,
                                !0,
                            )));
            }, [p, n, t]),
            s.useEffect(() => {
                if (p && l && d.current) {
                    if (
                        ((d.current = !1), !a.current && null == O.Ay.getSidebarState(t)) &&
                        !c.current &&
                        S.canAutoOpen(Date.now())
                    ) {
                        var e;
                        ((c.current = !0),
                            (e = Date.now()),
                            w.h.dispatch({ type: "CONJURE_APP_CHANNEL_CHAT_AUTO_OPENED", channelId: t, timestamp: e }),
                            (0, N.fJ)(A.getGuildId(), t));
                    }
                }
            }, [p, l, A, t]),
            s.useEffect(() => {
                function e(e) {
                    e.channelId === t && (d.current = !1);
                }
                return (w.h.subscribe("MESSAGE_CREATE", e), () => w.h.unsubscribe("MESSAGE_CREATE", e));
            }, [t]),
            n);
    return null == h
        ? (0, i.jsx)(v.A, {
              className: M.w,
              heading: L.intl.string(L.t.tU5fiM),
              description: L.intl.string(L.t.E94mJf),
          })
        : (0, i.jsx)(P, { applicationId: h, channel: A, showChatToasts: p && !f });
}
