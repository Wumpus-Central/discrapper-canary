(n.r(t), n.d(t, { default: () => k }));
var i = n(477900),
    s = n(582128),
    l = n(991690),
    a = n(333007),
    r = n(17928),
    c = n(192308),
    d = n(148494),
    u = n(281969),
    h = n(672929),
    o = n(20465),
    f = n(249288),
    p = n(251363),
    g = n(717519);
function A(e) {
    let t,
        { channelId: n, applicationId: l, surface: A, onOpenChat: w } = e,
        E = (0, h.A)(l, A),
        m = E?.id ?? null,
        b =
            ((t = s.useCallback((e) => u.A.subscribe(e), [])),
            s.useSyncExternalStore(t, () => null != m && u.A.isFrameVisible(m))),
        j = (0, r.bG)([f.A], () => f.A.getToastsEnabled(n), [n]),
        I = b && j,
        x = (0, c.useHasAnyModalOpen)(),
        [C, N] = s.useState(null);
    s.useEffect(() => {
        if (!I) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })((0, p.o)(null, m));
            N((t) =>
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
    }, [I, m]);
    let S = s.useCallback(
        (e) => {
            (w(), d.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [w],
    );
    return !I || null == C || x
        ? null
        : (0, a.createPortal)(
              (0, i.jsx)("div", {
                  className: g.T,
                  style: { top: C.top, left: C.left, width: C.width, height: C.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: g.f,
                      children: (0, i.jsx)(o.A, { channelId: n, onToastClick: S }),
                  }),
              }),
              document.body,
          );
}
var w = n(73153),
    E = n(334105),
    m = n(761640),
    b = n(573163),
    j = n(246338),
    I = n(343030),
    x = n(150861),
    C = n(317608),
    N = n(378859),
    S = n(206600),
    v = n(375708),
    y = n(728846);
function _(e) {
    let { applicationId: t, channel: n, showChatToasts: a } = e,
        r = s.useMemo(() => ({ type: l.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id }), [n.id, n.guild_id]),
        { frame: c, state: d } = (0, S.A)({ applicationId: t, surface: r });
    switch (d) {
        case S.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(C.A, { frameId: c.id, level: I.A.WithinAppContent, className: y.Z }),
                    a
                        ? (0, i.jsx)(A, {
                              channelId: n.id,
                              applicationId: t,
                              surface: r,
                              onOpenChat: () => (0, E.fJ)(n.getGuildId(), n.id),
                          })
                        : null,
                ],
            });
        case S.n.RenderingElsewhere:
            return (0, i.jsx)(N.A, { className: y.w, description: v.intl.string(v.t["2KIDX+"]) });
        case S.n.NoApplication:
            return (0, i.jsx)(N.A, { className: y.w, description: v.intl.string(v.t.izggZO) });
        case S.n.DoesNotSupportSurface:
            return (0, i.jsx)(N.A, { className: y.w, description: v.intl.string(v.t["iUWcU/"]) });
        case S.n.Error:
            return (0, i.jsx)(N.A, {
                className: y.w,
                heading: v.intl.string(v.t.VquUff),
                error: v.intl.string(v.t["Sd9D/R"]),
            });
        case S.n.AwaitingLaunch:
        case S.n.Loading:
            return (0, i.jsx)(N.j, { className: y.w });
    }
}
function k(e) {
    let t,
        n,
        l,
        a,
        { channel: c } = e,
        d = c.application_id;
    (0, x.A)(c);
    let u = (0, j.w$)(c, "AppChannel"),
        h =
            ((t = c.id),
            (n = (0, E.cz)(t)),
            (l = (0, r.bG)([b.Ay], () => b.Ay.hasUnread(t) || b.Ay.wasUnreadOnSelect(t), [t])),
            (a = s.useRef(!0)),
            s.useEffect(() => {
                a.current = !0;
            }, [t]),
            s.useEffect(() => {
                u &&
                    l &&
                    a.current &&
                    ((a.current = !1), null == m.Ay.getSidebarState(t) && (0, E.fJ)(c.getGuildId(), t));
            }, [u, l, c, t]),
            s.useEffect(() => {
                function e(e) {
                    e.channelId === t && (a.current = !1);
                }
                return (w.h.subscribe("MESSAGE_CREATE", e), () => w.h.unsubscribe("MESSAGE_CREATE", e));
            }, [t]),
            n);
    return null == d
        ? (0, i.jsx)(N.A, {
              className: y.w,
              heading: v.intl.string(v.t.tU5fiM),
              description: v.intl.string(v.t.E94mJf),
          })
        : (0, i.jsx)(_, { applicationId: d, channel: c, showChatToasts: u && !h });
}
