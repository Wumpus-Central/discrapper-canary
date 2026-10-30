(t.r(n), t.d(n, { default: () => H }));
var i = t(477900),
    l = t(582128),
    s = t(806163),
    a = t(991690),
    c = t(821609),
    r = t(627363),
    d = t(631828),
    u = t(333007),
    o = t(17928),
    h = t(192308),
    p = t(148494),
    f = t(91242),
    g = t(672929),
    A = t(20465),
    w = t(249288),
    m = t(251363),
    j = t(717519);
function C(e) {
    let { channelId: n, applicationId: t, surface: s, onOpenChat: a } = e,
        c = (0, g.A)(t, s),
        r = c?.id ?? null,
        d = (0, o.bG)([f.A], () => null != r && f.A.isFrameVisible(r), [r]),
        C = (0, o.bG)([w.A], () => w.A.getToastsEnabled(n), [n]),
        x = d && C,
        I = (0, h.useHasAnyModalOpen)(),
        [E, N] = l.useState(null);
    l.useEffect(() => {
        if (!x) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let n = e.getBoundingClientRect();
                return n.width < 1 || n.height < 1
                    ? null
                    : { left: n.left, top: n.top, width: n.width, height: n.height };
            })((0, m.ow)(null, r));
            N((n) =>
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
    }, [x, r]);
    let b = l.useCallback(
        (e) => {
            (a(), p.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [a],
    );
    return !x || null == E || I
        ? null
        : (0, u.createPortal)(
              (0, i.jsx)("div", {
                  className: j.T,
                  style: { top: E.top, left: E.left, width: E.width, height: E.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: j.f,
                      children: (0, i.jsx)(A.A, { channelId: n, onToastClick: b }),
                  }),
              }),
              document.body,
          );
}
var x = t(73153),
    I = t(483510),
    E = t(358047),
    N = t(573163),
    b = t(228946),
    k = t(522265),
    S = t(649045),
    L = t(246338),
    v = t(343030),
    y = t(150861),
    _ = t(317608),
    U = t(378859),
    z = t(35367),
    G = t(130745),
    P = t(486020),
    R = t(165610),
    T = t(105292),
    M = t(728846);
function O(e) {
    let { applicationId: n, channel: t, showChatToasts: l, surface: s } = e,
        { frame: a, state: c } = (0, z.A)({ applicationId: n, surface: s });
    switch (((0, b.A)(n, s), (0, G.A)(t.id), c)) {
        case z.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_.A, { frameId: a.id, level: v.A.WithinAppContent, className: M.Z7 }),
                    l
                        ? (0, i.jsx)(C, {
                              channelId: t.id,
                              applicationId: n,
                              surface: s,
                              onOpenChat: () => (0, I.ci)(t.getGuildId(), t.id),
                          })
                        : null,
                ],
            });
        case z.n.RenderingElsewhere:
            return (0, i.jsx)(U.A, { className: M.wk, description: T.intl.string(T.t["2KIDX+"]) });
        case z.n.NoApplication:
            return (0, i.jsx)(U.A, { className: M.wk, description: T.intl.string(T.t.izggZO) });
        case z.n.DoesNotSupportSurface:
            return (0, i.jsx)(U.A, { className: M.wk, description: T.intl.string(T.t["iUWcU/"]) });
        case z.n.Error:
            return (0, i.jsx)(U.A, {
                className: M.wk,
                heading: T.intl.string(T.t.VquUff),
                error: T.intl.string(T.t["Sd9D/R"]),
            });
        case z.n.AwaitingLaunch:
        case z.n.Loading:
            return (0, i.jsx)(U.j, { className: M.wk });
    }
}
function Z(e) {
    let { applicationId: n, onLaunch: t } = e,
        { data: l } = (0, r.YY)(n);
    return (0, i.jsx)(U.A, {
        className: M.wk,
        icon:
            l?.icon != null
                ? (0, i.jsx)("img", {
                      alt: "",
                      src: P.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 64 }),
                      className: M.Z2,
                  })
                : l?.conjureProjectId != null
                  ? (0, i.jsx)(S.A, {
                        applicationId: l.id,
                        name: l.name,
                        glyphSize: (0, k.w)(64).glyphSize,
                        className: M.Z2,
                    })
                  : null,
        heading: l?.name,
        action: (0, i.jsx)(c.$, { text: T.intl.string(T.t.PPYvuv), onClick: t }),
    });
}
function D(e) {
    let { applicationId: n, channel: t } = e,
        c = l.useMemo(() => ({ type: a.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id }), [t.id, t.guild_id]),
        r = (0, s.zy)().state?.appChannelClosed ?? !1,
        { isClosed: d, launch: u } = (function (e) {
            let { applicationId: n, surface: t, shouldStartClosed: i } = e,
                s = (0, R.VA)(n, t),
                a = (0, g.A)(n, t),
                [c, r] = l.useState(null);
            c?.frameId !== s
                ? r({ frameId: s, hasLaunched: !1, isClosed: null == a && i() })
                : (0, R.x1)(a) && !c.hasLaunched
                  ? r({ ...c, hasLaunched: !0 })
                  : null == a && c.hasLaunched && r({ frameId: s, hasLaunched: !1, isClosed: !0 });
            let d = l.useCallback(() => r((e) => (null != e ? { ...e, isClosed: !1 } : e)), []);
            return { isClosed: c?.frameId === s && c.isClosed, launch: d };
        })({ applicationId: n, surface: c, shouldStartClosed: () => r });
    return d ? (0, i.jsx)(Z, { applicationId: n, onLaunch: u }) : (0, i.jsx)(O, { ...e, surface: c });
}
function H(e) {
    let n,
        t,
        s,
        a,
        { channel: c } = e,
        r = (0, d.a)(c),
        u = c.application_id ?? r;
    (0, y.A)(c);
    let h = (0, L.w$)(c, "AppChannel"),
        p =
            ((n = c.id),
            (t = (0, I.HP)(n)),
            (s = (0, o.bG)([N.Ay], () => N.Ay.hasUnread(n) || N.Ay.wasUnreadOnSelect(n), [n])),
            (a = l.useRef(!0)),
            l.useEffect(() => {
                a.current = !0;
            }, [n]),
            l.useEffect(() => {
                h &&
                    s &&
                    a.current &&
                    ((a.current = !1), null == E.Ay.getSidebarState(n) && (0, I.ci)(c.getGuildId(), n));
            }, [h, s, c, n]),
            l.useEffect(() => {
                function e(e) {
                    e.channelId === n && (a.current = !1);
                }
                return (x.h.subscribe("MESSAGE_CREATE", e), () => x.h.unsubscribe("MESSAGE_CREATE", e));
            }, [n]),
            t);
    return null == u
        ? (0, i.jsx)(U.A, {
              className: M.wk,
              heading: T.intl.string(T.t.tU5fiM),
              description: T.intl.string(T.t.E94mJf),
          })
        : (0, i.jsx)(D, { applicationId: u, channel: c, showChatToasts: h && !p });
}
