(n.r(t), n.d(t, { default: () => W }));
var i = n(477900),
    l = n(582128),
    s = n(333007),
    a = n(806163),
    r = n(991690),
    c = n(192308),
    d = n(821609),
    u = n(627363),
    o = n(828936),
    h = n(631828),
    p = n(855986),
    f = n(138399),
    g = n(91242),
    A = n(672929),
    w = n(20465),
    m = n(249288),
    j = n(251363);
function x(e, t) {
    let [n, i] = l.useState(null);
    return (
        l.useEffect(() => {
            if (!t) return;
            function n() {
                let t = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })((0, j.ow)(null, e));
                i((e) =>
                    (
                        null == e || null == t
                            ? e === t
                            : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height
                    )
                        ? e
                        : t,
                );
            }
            n();
            let l = window.setInterval(n, 250);
            return (
                window.addEventListener("resize", n),
                () => {
                    (window.clearInterval(l), window.removeEventListener("resize", n));
                }
            );
        }, [t, e]),
        t ? n : null
    );
}
var I = n(717519);
function E(e) {
    let { channelId: t, applicationId: n, surface: a, onOpenChat: r } = e,
        d = (0, A.A)(n, a),
        u = d?.id ?? null,
        o = (0, p.bG)([g.A], () => null != u && g.A.isFrameVisible(u), [u]),
        h = (0, p.bG)([m.A], () => m.A.getToastsEnabled(t), [t]),
        j = o && h,
        E = (0, c.Rv)(),
        C = x(u, j),
        N = l.useCallback(
            (e) => {
                (r(), f.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
            },
            [r],
        );
    return !j || null == C || E
        ? null
        : (0, s.createPortal)(
              (0, i.jsx)("div", {
                  className: I.T,
                  style: { top: C.top, left: C.left, width: C.width, height: C.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: I.f,
                      children: (0, i.jsx)(w.A, { channelId: t, onToastClick: N }),
                  }),
              }),
              document.body,
          );
}
var C = n(144399),
    N = n(73153),
    b = n(483510),
    v = n(799704),
    k = n(218461),
    S = n(240666),
    y = n(513845),
    R = n(522265),
    _ = n(104299),
    L = n(246338),
    P = n(343030),
    U = n(150861),
    z = n(11411),
    G = n(378859),
    T = n(206600),
    M = n(130745),
    D = n(486020),
    Z = n(41234),
    O = n(792996),
    Y = n(728846);
function F(e) {
    let { applicationId: t, frameId: n } = e,
        a = x(n, !0),
        r = (0, c.Rv)(),
        d = l.useCallback(() => (0, y.R2)(t), [t]);
    return null == a || r
        ? null
        : (0, s.createPortal)(
              (0, i.jsx)("div", {
                  className: Y.DK,
                  style: { top: a.top, left: a.left, width: a.width },
                  children: (0, i.jsx)(C.x, { onReload: d }),
              }),
              document.body,
          );
}
function H(e) {
    let { applicationId: t, channel: n, showChatToasts: l, surface: s } = e,
        { frame: a, state: r } = (0, T.A)({ applicationId: t, surface: s });
    ((0, S.A)(t, s), (0, M.A)(n.id));
    let c = (0, o.l)(a?.id);
    switch (r) {
        case T.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(z.A, { frameId: a.id, level: P.A.WithinAppContent, className: Y.Z7 }),
                    c ? (0, i.jsx)(F, { applicationId: t, frameId: a.id }) : null,
                    l
                        ? (0, i.jsx)(E, {
                              channelId: n.id,
                              applicationId: t,
                              surface: s,
                              onOpenChat: () => (0, b.ci)(n.getGuildId(), n.id),
                          })
                        : null,
                ],
            });
        case T.n.RenderingElsewhere:
            return (0, i.jsx)(G.A, { className: Y.wk, description: O.intl.string(O.t["2KIDX+"]) });
        case T.n.NoApplication:
            return (0, i.jsx)(G.A, { className: Y.wk, description: O.intl.string(O.t.izggZO) });
        case T.n.DoesNotSupportSurface:
            return (0, i.jsx)(G.A, { className: Y.wk, description: O.intl.string(O.t["iUWcU/"]) });
        case T.n.Error:
            return (0, i.jsx)(G.A, {
                className: Y.wk,
                heading: O.intl.string(O.t.VquUff),
                error: O.intl.string(O.t["Sd9D/R"]),
            });
        case T.n.AwaitingLaunch:
        case T.n.Loading:
            return (0, i.jsx)(G.j, { className: Y.wk });
    }
}
function K(e) {
    let { applicationId: t, onLaunch: n } = e,
        { data: l } = (0, u.YY)(t);
    return (0, i.jsx)(G.A, {
        className: Y.wk,
        icon:
            l?.icon != null
                ? (0, i.jsx)("img", {
                      alt: "",
                      src: D.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 64 }),
                      className: Y.Z2,
                  })
                : l?.conjureProjectId != null
                  ? (0, i.jsx)(_.A, {
                        applicationId: l.id,
                        name: l.name,
                        glyphSize: (0, R.w)(64).glyphSize,
                        className: Y.Z2,
                    })
                  : null,
        heading: l?.name,
        action: (0, i.jsx)(d.$, { text: O.intl.string(O.t.PPYvuv), onClick: n }),
    });
}
function V(e) {
    let { applicationId: t, channel: n } = e,
        s = l.useMemo(() => ({ type: r.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id }), [n.id, n.guild_id]),
        c = (0, a.zy)().state?.appChannelClosed ?? !1,
        { isClosed: d, launch: u } = (0, Z.A)({ applicationId: t, surface: s, shouldStartClosed: () => c });
    return d ? (0, i.jsx)(K, { applicationId: t, onLaunch: u }) : (0, i.jsx)(H, { ...e, surface: s });
}
function W(e) {
    let t,
        n,
        s,
        a,
        { channel: r } = e,
        c = (0, h.a)(r),
        d = r.application_id ?? c;
    (0, U.A)(r);
    let u = (0, L.w$)(r, "AppChannel"),
        o =
            ((t = r.id),
            (n = (0, b.HP)(t)),
            (s = (0, p.bG)([k.Ay], () => k.Ay.hasUnread(t) || k.Ay.wasUnreadOnSelect(t), [t])),
            (a = l.useRef(!0)),
            l.useEffect(() => {
                a.current = !0;
            }, [t]),
            l.useEffect(() => {
                u &&
                    s &&
                    a.current &&
                    ((a.current = !1), null == v.Ay.getSidebarState(t) && (0, b.ci)(r.getGuildId(), t));
            }, [u, s, r, t]),
            l.useEffect(() => {
                function e(e) {
                    e.channelId === t && (a.current = !1);
                }
                return (N.h.subscribe("MESSAGE_CREATE", e), () => N.h.unsubscribe("MESSAGE_CREATE", e));
            }, [t]),
            n);
    return null == d
        ? (0, i.jsx)(G.A, {
              className: Y.wk,
              heading: O.intl.string(O.t.tU5fiM),
              description: O.intl.string(O.t.E94mJf),
          })
        : (0, i.jsx)(V, { applicationId: d, channel: r, showChatToasts: u && !o });
}
