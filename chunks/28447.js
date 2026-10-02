(n.r(t), n.d(t, { default: () => P }));
var i = n(477900),
    s = n(582128),
    l = n(991690),
    r = n(343030),
    a = n(150861),
    u = n(317608),
    c = n(378859),
    d = n(206600),
    o = n(683180),
    A = n(333007),
    h = n(17928),
    p = n(192308),
    f = n(148494),
    g = n(281969),
    E = n(672929),
    w = n(20465),
    C = n(249288),
    N = n(120426),
    I = n(563013);
function O(e) {
    let t,
        { channelId: n, applicationId: l, surface: r, onOpenChat: a } = e,
        u = (0, E.A)(l, r),
        c = u?.id ?? null,
        d =
            ((t = s.useCallback((e) => g.A.subscribe(e), [])),
            s.useSyncExternalStore(t, () => null != c && g.A.isFrameVisible(c))),
        o = (0, h.bG)([C.A], () => C.A.getToastsEnabled(n), [n]),
        O = d && o,
        _ = (0, p.useHasAnyModalOpen)(),
        [b, S] = s.useState(null);
    s.useEffect(() => {
        if (!O) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })((0, N.F)(null, c));
            S((t) =>
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
    }, [O, c]);
    let T = s.useCallback(
        (e) => {
            (a(), f.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [a],
    );
    return !O || null == b || _
        ? null
        : (0, A.createPortal)(
              (0, i.jsx)("div", {
                  className: I.T,
                  style: { top: b.top, left: b.left, width: b.width, height: b.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: I.f,
                      children: (0, i.jsx)(w.A, { channelId: n, onToastClick: T }),
                  }),
              }),
              document.body,
          );
}
var _ = n(73153),
    b = n(334738),
    S = n(334105),
    T = n(761640),
    m = n(573163),
    j = n(927813);
let y = { lastAutoOpenedAt: null },
    x = y;
class v extends h.Ay.PersistedStore {
    static displayName = "VibegrationsChatAutoOpenStore";
    static persistKey = "VibegrationsChatAutoOpen";
    initialize(e) {
        x = e ?? y;
    }
    getState() {
        return x;
    }
    canAutoOpen(e) {
        return null == x.lastAutoOpenedAt || e - x.lastAutoOpenedAt >= j.A.Millis.DAY;
    }
}
let R = new v(_.h, {
    LOGOUT: function () {
        if (null == x.lastAutoOpenedAt) return !1;
        x = y;
    },
    VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED: function (e) {
        let { timestamp: t } = e;
        x = { lastAutoOpenedAt: t };
    },
});
var U = n(652215),
    L = n(375708),
    G = n(728846);
function M(e) {
    let { applicationId: t, channel: n, showChatToasts: a } = e,
        o = s.useMemo(() => ({ type: l.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id }), [n.id, n.guild_id]),
        { frame: A, state: h } = (0, d.A)({ applicationId: t, surface: o });
    switch (h) {
        case d.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(u.A, { frameId: A.id, level: r.A.WithinAppContent, className: G.Z }),
                    a
                        ? (0, i.jsx)(O, {
                              channelId: n.id,
                              applicationId: t,
                              surface: o,
                              onOpenChat: () => (0, S.fJ)(n.getGuildId(), n.id),
                          })
                        : null,
                ],
            });
        case d.n.RenderingElsewhere:
            return (0, i.jsx)(c.A, { className: G.w, description: L.intl.string(L.t["2KIDX+"]) });
        case d.n.NoApplication:
            return (0, i.jsx)(c.A, { className: G.w, description: L.intl.string(L.t.izggZO) });
        case d.n.DoesNotSupportSurface:
            return (0, i.jsx)(c.A, { className: G.w, description: L.intl.string(L.t["iUWcU/"]) });
        case d.n.Error:
            return (0, i.jsx)(c.A, {
                className: G.w,
                heading: L.intl.string(L.t.VquUff),
                error: L.intl.string(L.t["Sd9D/R"]),
            });
        case d.n.AwaitingLaunch:
        case d.n.Loading:
            return (0, i.jsx)(c.j, { className: G.w });
    }
}
function P(e) {
    let t,
        n,
        l,
        r,
        u,
        d,
        A,
        { channel: p } = e,
        f = p.application_id;
    (0, a.A)(p);
    let g = (0, o.Bp)(p, "AppChannel"),
        E =
            ((t = p.id),
            (n = (0, S.cz)(t)),
            (l = (0, h.bG)([m.Ay], () => m.Ay.hasUnread(t), [t])),
            (r = s.useRef(!1)),
            (u = s.useRef(!1)),
            (d = s.useRef(!0)),
            s.useEffect(() => {
                ((r.current = !1), (u.current = !1), (d.current = !0));
            }, [t]),
            (A = s.useRef(n)),
            s.useEffect(() => {
                let e = A.current;
                ((A.current = n),
                    !g ||
                        !e ||
                        n ||
                        ((r.current = !0),
                        !(m.Ay.getMentionCount(t) > 0) &&
                            m.Ay.hasUnread(t) &&
                            (0, b.ack)(
                                t,
                                {
                                    section: U.JJy.CHANNEL,
                                    object: U.ZSU.ACK_VIBEGRATIONS_CHAT_CLOSED,
                                    objectType: U.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                },
                                !0,
                                !0,
                            )));
            }, [g, n, t]),
            s.useEffect(() => {
                if (g && l && d.current) {
                    if (
                        ((d.current = !1), !r.current && null == T.Ay.getSidebarState(t)) &&
                        !u.current &&
                        R.canAutoOpen(Date.now())
                    ) {
                        var e;
                        ((u.current = !0),
                            (e = Date.now()),
                            _.h.dispatch({
                                type: "VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED",
                                channelId: t,
                                timestamp: e,
                            }),
                            (0, S.fJ)(p.getGuildId(), t));
                    }
                }
            }, [g, l, p, t]),
            s.useEffect(() => {
                function e(e) {
                    e.channelId === t && (d.current = !1);
                }
                return (_.h.subscribe("MESSAGE_CREATE", e), () => _.h.unsubscribe("MESSAGE_CREATE", e));
            }, [t]),
            n);
    return null == f
        ? (0, i.jsx)(c.A, {
              className: G.w,
              heading: L.intl.string(L.t.tU5fiM),
              description: L.intl.string(L.t.E94mJf),
          })
        : (0, i.jsx)(M, { applicationId: f, channel: p, showChatToasts: g && !E });
}
