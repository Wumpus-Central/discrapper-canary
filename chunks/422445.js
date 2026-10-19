(n.r(t), n.d(t, { default: () => k }));
var i = n(477900),
    l = n(582128),
    s = n(991690),
    a = n(631828),
    r = n(333007),
    d = n(17928),
    c = n(192308),
    u = n(148494),
    h = n(91242),
    o = n(672929),
    p = n(20465),
    f = n(249288),
    g = n(251363),
    A = n(717519);
function w(e) {
    let { channelId: t, applicationId: n, surface: s, onOpenChat: a } = e,
        w = (0, o.A)(n, s),
        E = w?.id ?? null,
        m = (0, d.bG)([h.A], () => null != E && h.A.isFrameVisible(E), [E]),
        j = (0, d.bG)([f.A], () => f.A.getToastsEnabled(t), [t]),
        I = m && j,
        b = (0, c.useHasAnyModalOpen)(),
        [x, N] = l.useState(null);
    l.useEffect(() => {
        if (!I) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })((0, g.ow)(null, E));
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
    }, [I, E]);
    let C = l.useCallback(
        (e) => {
            (a(), u.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [a],
    );
    return !I || null == x || b
        ? null
        : (0, r.createPortal)(
              (0, i.jsx)("div", {
                  className: A.T,
                  style: { top: x.top, left: x.left, width: x.width, height: x.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: A.f,
                      children: (0, i.jsx)(p.A, { channelId: t, onToastClick: C }),
                  }),
              }),
              document.body,
          );
}
var E = n(73153),
    m = n(483510),
    j = n(358047),
    I = n(573163),
    b = n(801914),
    x = n(246338),
    N = n(343030),
    C = n(150861),
    S = n(317608),
    v = n(378859),
    _ = n(35367),
    y = n(130745),
    G = n(105292),
    T = n(728846);
function U(e) {
    let { applicationId: t, channel: n, showChatToasts: a } = e,
        r = l.useMemo(() => ({ type: s.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id }), [n.id, n.guild_id]),
        { frame: d, state: c } = (0, _.A)({ applicationId: t, surface: r });
    switch (((0, b.A)(t, r), (0, y.A)(n.id), c)) {
        case _.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(S.A, { frameId: d.id, level: N.A.WithinAppContent, className: T.Z }),
                    a
                        ? (0, i.jsx)(w, {
                              channelId: n.id,
                              applicationId: t,
                              surface: r,
                              onOpenChat: () => (0, m.ci)(n.getGuildId(), n.id),
                          })
                        : null,
                ],
            });
        case _.n.RenderingElsewhere:
            return (0, i.jsx)(v.A, { className: T.w, description: G.intl.string(G.t["2KIDX+"]) });
        case _.n.NoApplication:
            return (0, i.jsx)(v.A, { className: T.w, description: G.intl.string(G.t.izggZO) });
        case _.n.DoesNotSupportSurface:
            return (0, i.jsx)(v.A, { className: T.w, description: G.intl.string(G.t["iUWcU/"]) });
        case _.n.Error:
            return (0, i.jsx)(v.A, {
                className: T.w,
                heading: G.intl.string(G.t.VquUff),
                error: G.intl.string(G.t["Sd9D/R"]),
            });
        case _.n.AwaitingLaunch:
        case _.n.Loading:
            return (0, i.jsx)(v.j, { className: T.w });
    }
}
function k(e) {
    let t,
        n,
        s,
        r,
        { channel: c } = e,
        u = (0, a.a)(c),
        h = c.application_id ?? u;
    (0, C.A)(c);
    let o = (0, x.w$)(c, "AppChannel"),
        p =
            ((t = c.id),
            (n = (0, m.HP)(t)),
            (s = (0, d.bG)([I.Ay], () => I.Ay.hasUnread(t) || I.Ay.wasUnreadOnSelect(t), [t])),
            (r = l.useRef(!0)),
            l.useEffect(() => {
                r.current = !0;
            }, [t]),
            l.useEffect(() => {
                o &&
                    s &&
                    r.current &&
                    ((r.current = !1), null == j.Ay.getSidebarState(t) && (0, m.ci)(c.getGuildId(), t));
            }, [o, s, c, t]),
            l.useEffect(() => {
                function e(e) {
                    e.channelId === t && (r.current = !1);
                }
                return (E.h.subscribe("MESSAGE_CREATE", e), () => E.h.unsubscribe("MESSAGE_CREATE", e));
            }, [t]),
            n);
    return null == h
        ? (0, i.jsx)(v.A, {
              className: T.w,
              heading: G.intl.string(G.t.tU5fiM),
              description: G.intl.string(G.t.E94mJf),
          })
        : (0, i.jsx)(U, { applicationId: h, channel: c, showChatToasts: o && !p });
}
