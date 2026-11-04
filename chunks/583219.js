(t.r(n), t.d(n, { default: () => $ }));
var l = t(477900),
    i = t(582128),
    s = t(333007),
    a = t(806163),
    d = t(991690),
    r = t(192308),
    c = t(821609),
    u = t(627363),
    o = t(828936),
    h = t(631828),
    p = t(17928),
    f = t(148494),
    A = t(91242),
    g = t(672929),
    w = t(20465),
    m = t(249288),
    j = t(251363);
function x(e, n) {
    let [t, l] = i.useState(null);
    return (
        i.useEffect(() => {
            if (!n) return;
            function t() {
                let n = (function (e) {
                    if (null == e) return null;
                    let n = e.getBoundingClientRect();
                    return n.width < 1 || n.height < 1
                        ? null
                        : { left: n.left, top: n.top, width: n.width, height: n.height };
                })((0, j.ow)(null, e));
                l((e) =>
                    (
                        null == e || null == n
                            ? e === n
                            : e.left === n.left && e.top === n.top && e.width === n.width && e.height === n.height
                    )
                        ? e
                        : n,
                );
            }
            t();
            let i = window.setInterval(t, 250);
            return (
                window.addEventListener("resize", t),
                () => {
                    (window.clearInterval(i), window.removeEventListener("resize", t));
                }
            );
        }, [n, e]),
        n ? t : null
    );
}
var I = t(717519);
function C(e) {
    let { channelId: n, applicationId: t, surface: a, onOpenChat: d } = e,
        c = (0, g.A)(t, a),
        u = c?.id ?? null,
        o = (0, p.bG)([A.A], () => null != u && A.A.isFrameVisible(u), [u]),
        h = (0, p.bG)([m.A], () => m.A.getToastsEnabled(n), [n]),
        j = o && h,
        C = (0, r.useHasAnyModalOpen)(),
        E = x(u, j),
        N = i.useCallback(
            (e) => {
                (d(), f.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
            },
            [d],
        );
    return !j || null == E || C
        ? null
        : (0, s.createPortal)(
              (0, l.jsx)("div", {
                  className: I.T,
                  style: { top: E.top, left: E.left, width: E.width, height: E.height / 2 },
                  children: (0, l.jsx)("div", {
                      className: I.f,
                      children: (0, l.jsx)(w.A, { channelId: n, onToastClick: N }),
                  }),
              }),
              document.body,
          );
}
var E = t(144399),
    N = t(73153),
    b = t(483510),
    S = t(358047),
    k = t(573163),
    v = t(228946),
    y = t(513845),
    L = t(522265),
    R = t(649045),
    _ = t(246338),
    P = t(343030),
    U = t(150861),
    z = t(317608),
    G = t(378859),
    M = t(35367),
    T = t(130745),
    O = t(486020),
    D = t(165610);
let H = new Set();
var Z = t(105292),
    V = t(728846);
function Y(e) {
    let { applicationId: n, frameId: t } = e,
        a = x(t, !0),
        d = (0, r.useHasAnyModalOpen)(),
        c = i.useCallback(() => (0, y.R2)(n), [n]);
    return null == a || d
        ? null
        : (0, s.createPortal)(
              (0, l.jsx)("div", {
                  className: V.DK,
                  style: { top: a.top, left: a.left, width: a.width },
                  children: (0, l.jsx)(E.x, { onReload: c }),
              }),
              document.body,
          );
}
function F(e) {
    let { applicationId: n, channel: t, showChatToasts: i, surface: s } = e,
        { frame: a, state: d } = (0, M.A)({ applicationId: n, surface: s });
    ((0, v.A)(n, s), (0, T.A)(t.id));
    let r = (0, o.l)(a?.id);
    switch (d) {
        case M.n.Launched:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(z.A, { frameId: a.id, level: P.A.WithinAppContent, className: V.Z7 }),
                    r ? (0, l.jsx)(Y, { applicationId: n, frameId: a.id }) : null,
                    i
                        ? (0, l.jsx)(C, {
                              channelId: t.id,
                              applicationId: n,
                              surface: s,
                              onOpenChat: () => (0, b.ci)(t.getGuildId(), t.id),
                          })
                        : null,
                ],
            });
        case M.n.RenderingElsewhere:
            return (0, l.jsx)(G.A, { className: V.wk, description: Z.intl.string(Z.t["2KIDX+"]) });
        case M.n.NoApplication:
            return (0, l.jsx)(G.A, { className: V.wk, description: Z.intl.string(Z.t.izggZO) });
        case M.n.DoesNotSupportSurface:
            return (0, l.jsx)(G.A, { className: V.wk, description: Z.intl.string(Z.t["iUWcU/"]) });
        case M.n.Error:
            return (0, l.jsx)(G.A, {
                className: V.wk,
                heading: Z.intl.string(Z.t.VquUff),
                error: Z.intl.string(Z.t["Sd9D/R"]),
            });
        case M.n.AwaitingLaunch:
        case M.n.Loading:
            return (0, l.jsx)(G.j, { className: V.wk });
    }
}
function K(e) {
    let { applicationId: n, onLaunch: t } = e,
        { data: i } = (0, u.YY)(n);
    return (0, l.jsx)(G.A, {
        className: V.wk,
        icon:
            i?.icon != null
                ? (0, l.jsx)("img", {
                      alt: "",
                      src: O.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 64 }),
                      className: V.Z2,
                  })
                : i?.conjureProjectId != null
                  ? (0, l.jsx)(R.A, {
                        applicationId: i.id,
                        name: i.name,
                        glyphSize: (0, L.w)(64).glyphSize,
                        className: V.Z2,
                    })
                  : null,
        heading: i?.name,
        action: (0, l.jsx)(c.$, { text: Z.intl.string(Z.t.PPYvuv), onClick: t }),
    });
}
function W(e) {
    let { applicationId: n, channel: t } = e,
        s = i.useMemo(() => ({ type: d.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id }), [t.id, t.guild_id]),
        r = (0, a.zy)().state?.appChannelClosed ?? !1,
        { isClosed: c, launch: u } = (function (e) {
            let { applicationId: n, surface: t, shouldStartClosed: l } = e,
                s = (0, D.VA)(n, t),
                a = (0, g.A)(n, t),
                [d, r] = i.useState(null);
            return (
                d?.frameId !== s
                    ? r({ frameId: s, hasLaunched: !1, isClosed: null == a && (H.has(s) || l()) })
                    : (0, D.x1)(a) && !d.hasLaunched
                      ? r({ ...d, hasLaunched: !0 })
                      : null == a && d.hasLaunched && !d.isClosed && r({ ...d, isClosed: !0 }),
                i.useEffect(() => {
                    d?.hasLaunched === !0 && (d.isClosed ? H.add(d.frameId) : H.delete(d.frameId));
                }, [d]),
                {
                    isClosed: d?.frameId === s && d.isClosed,
                    launch: function () {
                        r((e) => (null != e ? { ...e, hasLaunched: !1, isClosed: !1 } : e));
                    },
                }
            );
        })({ applicationId: n, surface: s, shouldStartClosed: () => r });
    return c ? (0, l.jsx)(K, { applicationId: n, onLaunch: u }) : (0, l.jsx)(F, { ...e, surface: s });
}
function $(e) {
    let n,
        t,
        s,
        a,
        { channel: d } = e,
        r = (0, h.a)(d),
        c = d.application_id ?? r;
    (0, U.A)(d);
    let u = (0, _.w$)(d, "AppChannel"),
        o =
            ((n = d.id),
            (t = (0, b.HP)(n)),
            (s = (0, p.bG)([k.Ay], () => k.Ay.hasUnread(n) || k.Ay.wasUnreadOnSelect(n), [n])),
            (a = i.useRef(!0)),
            i.useEffect(() => {
                a.current = !0;
            }, [n]),
            i.useEffect(() => {
                u &&
                    s &&
                    a.current &&
                    ((a.current = !1), null == S.Ay.getSidebarState(n) && (0, b.ci)(d.getGuildId(), n));
            }, [u, s, d, n]),
            i.useEffect(() => {
                function e(e) {
                    e.channelId === n && (a.current = !1);
                }
                return (N.h.subscribe("MESSAGE_CREATE", e), () => N.h.unsubscribe("MESSAGE_CREATE", e));
            }, [n]),
            t);
    return null == c
        ? (0, l.jsx)(G.A, {
              className: V.wk,
              heading: Z.intl.string(Z.t.tU5fiM),
              description: Z.intl.string(Z.t.E94mJf),
          })
        : (0, l.jsx)(W, { applicationId: c, channel: d, showChatToasts: u && !o });
}
