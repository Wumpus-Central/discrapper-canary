(t.r(n), t.d(n, { default: () => D }));
var i = t(477900),
    l = t(582128),
    s = t(806163),
    a = t(991690),
    r = t(821609),
    c = t(627363),
    d = t(631828),
    u = t(333007),
    o = t(17928),
    h = t(192308),
    p = t(148494),
    f = t(91242),
    A = t(672929),
    g = t(20465),
    w = t(249288),
    m = t(251363),
    C = t(717519);
function j(e) {
    let { channelId: n, applicationId: t, surface: s, onOpenChat: a } = e,
        r = (0, A.A)(t, s),
        c = r?.id ?? null,
        d = (0, o.bG)([f.A], () => null != c && f.A.isFrameVisible(c), [c]),
        j = (0, o.bG)([w.A], () => w.A.getToastsEnabled(n), [n]),
        x = d && j,
        E = (0, h.useHasAnyModalOpen)(),
        [I, b] = l.useState(null);
    l.useEffect(() => {
        if (!x) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let n = e.getBoundingClientRect();
                return n.width < 1 || n.height < 1
                    ? null
                    : { left: n.left, top: n.top, width: n.width, height: n.height };
            })((0, m.ow)(null, c));
            b((n) =>
                (
                    null == n || null == e
                        ? n === e
                        : n.left === e.left && n.top === e.top && n.width === e.width && n.height === e.height
                )
                    ? n
                    : e,
            );
        }
        e();
        let n = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(n), window.removeEventListener("resize", e));
            }
        );
    }, [x, c]);
    let k = l.useCallback(
        (e) => {
            (a(), p.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [a],
    );
    return !x || null == I || E
        ? null
        : (0, u.createPortal)(
              (0, i.jsx)("div", {
                  className: C.T,
                  style: { top: I.top, left: I.left, width: I.width, height: I.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: C.f,
                      children: (0, i.jsx)(g.A, { channelId: n, onToastClick: k }),
                  }),
              }),
              document.body,
          );
}
var x = t(73153),
    E = t(483510),
    I = t(358047),
    b = t(573163),
    k = t(771293),
    N = t(246338),
    L = t(343030),
    S = t(150861),
    v = t(317608),
    y = t(378859),
    _ = t(35367),
    U = t(130745),
    G = t(486020),
    R = t(165610),
    T = t(105292),
    M = t(728846);
function P(e) {
    let { applicationId: n, channel: t, showChatToasts: l, surface: s } = e,
        { frame: a, state: r } = (0, _.A)({ applicationId: n, surface: s });
    switch (((0, k.A)(n, s), (0, U.A)(t.id), r)) {
        case _.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(v.A, { frameId: a.id, level: L.A.WithinAppContent, className: M.Z7 }),
                    l
                        ? (0, i.jsx)(j, {
                              channelId: t.id,
                              applicationId: n,
                              surface: s,
                              onOpenChat: () => (0, E.ci)(t.getGuildId(), t.id),
                          })
                        : null,
                ],
            });
        case _.n.RenderingElsewhere:
            return (0, i.jsx)(y.A, { className: M.wk, description: T.intl.string(T.t["2KIDX+"]) });
        case _.n.NoApplication:
            return (0, i.jsx)(y.A, { className: M.wk, description: T.intl.string(T.t.izggZO) });
        case _.n.DoesNotSupportSurface:
            return (0, i.jsx)(y.A, { className: M.wk, description: T.intl.string(T.t["iUWcU/"]) });
        case _.n.Error:
            return (0, i.jsx)(y.A, {
                className: M.wk,
                heading: T.intl.string(T.t.VquUff),
                error: T.intl.string(T.t["Sd9D/R"]),
            });
        case _.n.AwaitingLaunch:
        case _.n.Loading:
            return (0, i.jsx)(y.j, { className: M.wk });
    }
}
function z(e) {
    let { applicationId: n, onLaunch: t } = e,
        { data: l } = (0, c.YY)(n);
    return (0, i.jsx)(y.A, {
        className: M.wk,
        icon:
            l?.icon != null
                ? (0, i.jsx)("img", {
                      alt: "",
                      src: G.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 64 }),
                      className: M.Z2,
                  })
                : null,
        heading: l?.name,
        action: (0, i.jsx)(r.$, { text: T.intl.string(T.t.PPYvuv), onClick: t }),
    });
}
function O(e) {
    let { applicationId: n, channel: t } = e,
        r = l.useMemo(() => ({ type: a.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id }), [t.id, t.guild_id]),
        c = (0, s.zy)().state?.appChannelClosed ?? !1,
        { isClosed: d, launch: u } = (function (e) {
            let { applicationId: n, surface: t, shouldStartClosed: i } = e,
                s = (0, R.VA)(n, t),
                a = (0, A.A)(n, t),
                [r, c] = l.useState(null);
            r?.frameId !== s
                ? c({ frameId: s, hasLaunched: !1, isClosed: null == a && i() })
                : (0, R.x1)(a) && !r.hasLaunched
                  ? c({ ...r, hasLaunched: !0 })
                  : null == a && r.hasLaunched && c({ frameId: s, hasLaunched: !1, isClosed: !0 });
            let d = l.useCallback(() => c((e) => (null != e ? { ...e, isClosed: !1 } : e)), []);
            return { isClosed: r?.frameId === s && r.isClosed, launch: d };
        })({ applicationId: n, surface: r, shouldStartClosed: () => c });
    return d ? (0, i.jsx)(z, { applicationId: n, onLaunch: u }) : (0, i.jsx)(P, { ...e, surface: r });
}
function D(e) {
    let n,
        t,
        s,
        a,
        { channel: r } = e,
        c = (0, d.a)(r),
        u = r.application_id ?? c;
    (0, S.A)(r);
    let h = (0, N.w$)(r, "AppChannel"),
        p =
            ((n = r.id),
            (t = (0, E.HP)(n)),
            (s = (0, o.bG)([b.Ay], () => b.Ay.hasUnread(n) || b.Ay.wasUnreadOnSelect(n), [n])),
            (a = l.useRef(!0)),
            l.useEffect(() => {
                a.current = !0;
            }, [n]),
            l.useEffect(() => {
                h &&
                    s &&
                    a.current &&
                    ((a.current = !1), null == I.Ay.getSidebarState(n) && (0, E.ci)(r.getGuildId(), n));
            }, [h, s, r, n]),
            l.useEffect(() => {
                function e(e) {
                    e.channelId === n && (a.current = !1);
                }
                return (x.h.subscribe("MESSAGE_CREATE", e), () => x.h.unsubscribe("MESSAGE_CREATE", e));
            }, [n]),
            t);
    return null == u
        ? (0, i.jsx)(y.A, {
              className: M.wk,
              heading: T.intl.string(T.t.tU5fiM),
              description: T.intl.string(T.t.E94mJf),
          })
        : (0, i.jsx)(O, { applicationId: u, channel: r, showChatToasts: h && !p });
}
