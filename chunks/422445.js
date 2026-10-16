(n.r(t), n.d(t, { default: () => G }));
var i = n(477900),
    s = n(582128),
    l = n(991690),
    a = n(631828),
    r = n(333007),
    c = n(17928),
    d = n(192308),
    u = n(148494),
    h = n(281969),
    o = n(672929),
    p = n(20465),
    f = n(249288),
    g = n(251363),
    A = n(717519);
function w(e) {
    let t,
        { channelId: n, applicationId: l, surface: a, onOpenChat: w } = e,
        E = (0, o.A)(l, a),
        m = E?.id ?? null,
        b =
            ((t = s.useCallback((e) => h.A.subscribe(e), [])),
            s.useSyncExternalStore(t, () => null != m && h.A.isFrameVisible(m))),
        j = (0, c.bG)([f.A], () => f.A.getToastsEnabled(n), [n]),
        I = b && j,
        x = (0, d.useHasAnyModalOpen)(),
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
            })((0, g.ow)(null, m));
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
            (w(), u.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [w],
    );
    return !I || null == C || x
        ? null
        : (0, r.createPortal)(
              (0, i.jsx)("div", {
                  className: A.T,
                  style: { top: C.top, left: C.left, width: C.width, height: C.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: A.f,
                      children: (0, i.jsx)(p.A, { channelId: n, onToastClick: S }),
                  }),
              }),
              document.body,
          );
}
var E = n(73153),
    m = n(483510),
    b = n(358047),
    j = n(573163),
    I = n(801914),
    x = n(246338),
    C = n(343030),
    N = n(150861),
    S = n(317608),
    v = n(378859),
    y = n(35367),
    _ = n(130745),
    k = n(105292),
    T = n(728846);
function U(e) {
    let { applicationId: t, channel: n, showChatToasts: a } = e,
        r = s.useMemo(() => ({ type: l.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id }), [n.id, n.guild_id]),
        { frame: c, state: d } = (0, y.A)({ applicationId: t, surface: r });
    switch (((0, I.A)(t, r), (0, _.A)(n.id), d)) {
        case y.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(S.A, { frameId: c.id, level: C.A.WithinAppContent, className: T.Z }),
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
        case y.n.RenderingElsewhere:
            return (0, i.jsx)(v.A, { className: T.w, description: k.intl.string(k.t["2KIDX+"]) });
        case y.n.NoApplication:
            return (0, i.jsx)(v.A, { className: T.w, description: k.intl.string(k.t.izggZO) });
        case y.n.DoesNotSupportSurface:
            return (0, i.jsx)(v.A, { className: T.w, description: k.intl.string(k.t["iUWcU/"]) });
        case y.n.Error:
            return (0, i.jsx)(v.A, {
                className: T.w,
                heading: k.intl.string(k.t.VquUff),
                error: k.intl.string(k.t["Sd9D/R"]),
            });
        case y.n.AwaitingLaunch:
        case y.n.Loading:
            return (0, i.jsx)(v.j, { className: T.w });
    }
}
function G(e) {
    let t,
        n,
        l,
        r,
        { channel: d } = e,
        u = (0, a.a)(d),
        h = d.application_id ?? u;
    (0, N.A)(d);
    let o = (0, x.w$)(d, "AppChannel"),
        p =
            ((t = d.id),
            (n = (0, m.HP)(t)),
            (l = (0, c.bG)([j.Ay], () => j.Ay.hasUnread(t) || j.Ay.wasUnreadOnSelect(t), [t])),
            (r = s.useRef(!0)),
            s.useEffect(() => {
                r.current = !0;
            }, [t]),
            s.useEffect(() => {
                o &&
                    l &&
                    r.current &&
                    ((r.current = !1), null == b.Ay.getSidebarState(t) && (0, m.ci)(d.getGuildId(), t));
            }, [o, l, d, t]),
            s.useEffect(() => {
                function e(e) {
                    e.channelId === t && (r.current = !1);
                }
                return (E.h.subscribe("MESSAGE_CREATE", e), () => E.h.unsubscribe("MESSAGE_CREATE", e));
            }, [t]),
            n);
    return null == h
        ? (0, i.jsx)(v.A, {
              className: T.w,
              heading: k.intl.string(k.t.tU5fiM),
              description: k.intl.string(k.t.E94mJf),
          })
        : (0, i.jsx)(U, { applicationId: h, channel: d, showChatToasts: o && !p });
}
