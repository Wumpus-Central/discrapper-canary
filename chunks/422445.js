(n.r(t), n.d(t, { default: () => U }));
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
    f = n(20465),
    p = n(249288),
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
        j = (0, c.bG)([p.A], () => p.A.getToastsEnabled(n), [n]),
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
                      children: (0, i.jsx)(f.A, { channelId: n, onToastClick: S }),
                  }),
              }),
              document.body,
          );
}
var E = n(73153),
    m = n(334105),
    b = n(761640),
    j = n(573163),
    I = n(246338),
    x = n(343030),
    C = n(150861),
    N = n(317608),
    S = n(378859),
    v = n(338941),
    y = n(130745),
    _ = n(105292),
    k = n(728846);
function T(e) {
    let { applicationId: t, channel: n, showChatToasts: a } = e,
        r = s.useMemo(() => ({ type: l.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id }), [n.id, n.guild_id]),
        { frame: c, state: d } = (0, v.A)({ applicationId: t, surface: r });
    switch (((0, y.A)(n.id), d)) {
        case v.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(N.A, { frameId: c.id, level: x.A.WithinAppContent, className: k.Z }),
                    a
                        ? (0, i.jsx)(w, {
                              channelId: n.id,
                              applicationId: t,
                              surface: r,
                              onOpenChat: () => (0, m.fJ)(n.getGuildId(), n.id),
                          })
                        : null,
                ],
            });
        case v.n.RenderingElsewhere:
            return (0, i.jsx)(S.A, { className: k.w, description: _.intl.string(_.t["2KIDX+"]) });
        case v.n.NoApplication:
            return (0, i.jsx)(S.A, { className: k.w, description: _.intl.string(_.t.izggZO) });
        case v.n.DoesNotSupportSurface:
            return (0, i.jsx)(S.A, { className: k.w, description: _.intl.string(_.t["iUWcU/"]) });
        case v.n.Error:
            return (0, i.jsx)(S.A, {
                className: k.w,
                heading: _.intl.string(_.t.VquUff),
                error: _.intl.string(_.t["Sd9D/R"]),
            });
        case v.n.AwaitingLaunch:
        case v.n.Loading:
            return (0, i.jsx)(S.j, { className: k.w });
    }
}
function U(e) {
    let t,
        n,
        l,
        r,
        { channel: d } = e,
        u = (0, a.a)(d),
        h = d.application_id ?? u;
    (0, C.A)(d);
    let o = (0, I.w$)(d, "AppChannel"),
        f =
            ((t = d.id),
            (n = (0, m.cz)(t)),
            (l = (0, c.bG)([j.Ay], () => j.Ay.hasUnread(t) || j.Ay.wasUnreadOnSelect(t), [t])),
            (r = s.useRef(!0)),
            s.useEffect(() => {
                r.current = !0;
            }, [t]),
            s.useEffect(() => {
                o &&
                    l &&
                    r.current &&
                    ((r.current = !1), null == b.Ay.getSidebarState(t) && (0, m.fJ)(d.getGuildId(), t));
            }, [o, l, d, t]),
            s.useEffect(() => {
                function e(e) {
                    e.channelId === t && (r.current = !1);
                }
                return (E.h.subscribe("MESSAGE_CREATE", e), () => E.h.unsubscribe("MESSAGE_CREATE", e));
            }, [t]),
            n);
    return null == h
        ? (0, i.jsx)(S.A, {
              className: k.w,
              heading: _.intl.string(_.t.tU5fiM),
              description: _.intl.string(_.t.E94mJf),
          })
        : (0, i.jsx)(T, { applicationId: h, channel: d, showChatToasts: o && !f });
}
