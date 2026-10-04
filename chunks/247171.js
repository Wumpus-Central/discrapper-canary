(n.r(t), n.d(t, { default: () => P }));
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
        I = (0, u.bG)([p.A], () => p.A.getToastsEnabled(n), [n]),
        O = N && I,
        _ = (0, c.useHasAnyModalOpen)(),
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
            })((0, f.F)(null, C));
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
    }, [O, C]);
    let T = s.useCallback(
        (e) => {
            (E(), d.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [E],
    );
    return !O || null == b || _
        ? null
        : (0, a.createPortal)(
              (0, i.jsx)("div", {
                  className: g.T,
                  style: { top: b.top, left: b.left, width: b.width, height: b.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: g.f,
                      children: (0, i.jsx)(h.A, { channelId: n, onToastClick: T }),
                  }),
              }),
              document.body,
          );
}
var w = n(73153),
    C = n(334738),
    N = n(334105),
    I = n(761640),
    O = n(573163),
    _ = n(927813);
let b = { lastAutoOpenedAt: null },
    S = b;
class T extends u.Ay.PersistedStore {
    static displayName = "VibegrationsChatAutoOpenStore";
    static persistKey = "VibegrationsChatAutoOpen";
    initialize(e) {
        S = e ?? b;
    }
    getState() {
        return S;
    }
    canAutoOpen(e) {
        return null == S.lastAutoOpenedAt || e - S.lastAutoOpenedAt >= _.A.Millis.DAY;
    }
}
let m = new T(w.h, {
    LOGOUT: function () {
        if (null == S.lastAutoOpenedAt) return !1;
        S = b;
    },
    VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED: function (e) {
        let { timestamp: t } = e;
        S = { lastAutoOpenedAt: t };
    },
});
var j = n(652215),
    y = n(343030),
    x = n(150861),
    v = n(317608),
    R = n(378859),
    U = n(206600),
    L = n(375708),
    G = n(728846);
function M(e) {
    let { applicationId: t, channel: n, showChatToasts: r } = e,
        a = s.useMemo(() => ({ type: l.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id }), [n.id, n.guild_id]),
        { frame: u, state: c } = (0, U.A)({ applicationId: t, surface: a });
    switch (c) {
        case U.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(v.A, { frameId: u.id, level: y.A.WithinAppContent, className: G.Z }),
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
        case U.n.RenderingElsewhere:
            return (0, i.jsx)(R.A, { className: G.w, description: L.intl.string(L.t["2KIDX+"]) });
        case U.n.NoApplication:
            return (0, i.jsx)(R.A, { className: G.w, description: L.intl.string(L.t.izggZO) });
        case U.n.DoesNotSupportSurface:
            return (0, i.jsx)(R.A, { className: G.w, description: L.intl.string(L.t["iUWcU/"]) });
        case U.n.Error:
            return (0, i.jsx)(R.A, {
                className: G.w,
                heading: L.intl.string(L.t.VquUff),
                error: L.intl.string(L.t["Sd9D/R"]),
            });
        case U.n.AwaitingLaunch:
        case U.n.Loading:
            return (0, i.jsx)(R.j, { className: G.w });
    }
}
function P(e) {
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
    let p = (0, r.Bp)(A, "AppChannel"),
        f =
            ((t = A.id),
            (n = (0, N.cz)(t)),
            (l = (0, u.bG)([O.Ay], () => O.Ay.hasUnread(t), [t])),
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
                        !(O.Ay.getMentionCount(t) > 0) &&
                            O.Ay.hasUnread(t) &&
                            (0, C.ack)(
                                t,
                                {
                                    section: j.JJy.CHANNEL,
                                    object: j.ZSU.ACK_VIBEGRATIONS_CHAT_CLOSED,
                                    objectType: j.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                },
                                !0,
                                !0,
                            )));
            }, [p, n, t]),
            s.useEffect(() => {
                if (p && l && d.current) {
                    if (
                        ((d.current = !1), !a.current && null == I.Ay.getSidebarState(t)) &&
                        !c.current &&
                        m.canAutoOpen(Date.now())
                    ) {
                        var e;
                        ((c.current = !0),
                            (e = Date.now()),
                            w.h.dispatch({
                                type: "VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED",
                                channelId: t,
                                timestamp: e,
                            }),
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
        ? (0, i.jsx)(R.A, {
              className: G.w,
              heading: L.intl.string(L.t.tU5fiM),
              description: L.intl.string(L.t.E94mJf),
          })
        : (0, i.jsx)(M, { applicationId: h, channel: A, showChatToasts: p && !f });
}
