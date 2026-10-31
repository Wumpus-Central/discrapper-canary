(t.r(n), t.d(n, { default: () => V }));
var i = t(477900),
    s = t(582128),
    l = t(806163),
    a = t(991690),
    d = t(821609),
    c = t(627363),
    r = t(631828),
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
    let { channelId: n, applicationId: t, surface: l, onOpenChat: a } = e,
        d = (0, g.A)(t, l),
        c = d?.id ?? null,
        r = (0, o.bG)([f.A], () => null != c && f.A.isFrameVisible(c), [c]),
        C = (0, o.bG)([w.A], () => w.A.getToastsEnabled(n), [n]),
        I = r && C,
        x = (0, h.useHasAnyModalOpen)(),
        [E, N] = s.useState(null);
    s.useEffect(() => {
        if (!I) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let n = e.getBoundingClientRect();
                return n.width < 1 || n.height < 1
                    ? null
                    : { left: n.left, top: n.top, width: n.width, height: n.height };
            })((0, m.ow)(null, c));
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
    }, [I, c]);
    let S = s.useCallback(
        (e) => {
            (a(), p.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [a],
    );
    return !I || null == E || x
        ? null
        : (0, u.createPortal)(
              (0, i.jsx)("div", {
                  className: j.T,
                  style: { top: E.top, left: E.left, width: E.width, height: E.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: j.f,
                      children: (0, i.jsx)(A.A, { channelId: n, onToastClick: S }),
                  }),
              }),
              document.body,
          );
}
var I = t(73153),
    x = t(483510),
    E = t(358047),
    N = t(573163),
    S = t(228946),
    b = t(522265),
    k = t(649045),
    L = t(246338),
    v = t(343030),
    y = t(150861),
    _ = t(317608),
    U = t(378859),
    z = t(35367),
    G = t(130745),
    P = t(486020),
    R = t(165610);
let T = new Set();
var M = t(105292),
    O = t(728846);
function Z(e) {
    let { applicationId: n, channel: t, showChatToasts: s, surface: l } = e,
        { frame: a, state: d } = (0, z.A)({ applicationId: n, surface: l });
    switch (((0, S.A)(n, l), (0, G.A)(t.id), d)) {
        case z.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_.A, { frameId: a.id, level: v.A.WithinAppContent, className: O.Z7 }),
                    s
                        ? (0, i.jsx)(C, {
                              channelId: t.id,
                              applicationId: n,
                              surface: l,
                              onOpenChat: () => (0, x.ci)(t.getGuildId(), t.id),
                          })
                        : null,
                ],
            });
        case z.n.RenderingElsewhere:
            return (0, i.jsx)(U.A, { className: O.wk, description: M.intl.string(M.t["2KIDX+"]) });
        case z.n.NoApplication:
            return (0, i.jsx)(U.A, { className: O.wk, description: M.intl.string(M.t.izggZO) });
        case z.n.DoesNotSupportSurface:
            return (0, i.jsx)(U.A, { className: O.wk, description: M.intl.string(M.t["iUWcU/"]) });
        case z.n.Error:
            return (0, i.jsx)(U.A, {
                className: O.wk,
                heading: M.intl.string(M.t.VquUff),
                error: M.intl.string(M.t["Sd9D/R"]),
            });
        case z.n.AwaitingLaunch:
        case z.n.Loading:
            return (0, i.jsx)(U.j, { className: O.wk });
    }
}
function D(e) {
    let { applicationId: n, onLaunch: t } = e,
        { data: s } = (0, c.YY)(n);
    return (0, i.jsx)(U.A, {
        className: O.wk,
        icon:
            s?.icon != null
                ? (0, i.jsx)("img", {
                      alt: "",
                      src: P.Ay.getApplicationIconURL({ id: s.id, icon: s.icon, size: 64 }),
                      className: O.Z2,
                  })
                : s?.conjureProjectId != null
                  ? (0, i.jsx)(k.A, {
                        applicationId: s.id,
                        name: s.name,
                        glyphSize: (0, b.w)(64).glyphSize,
                        className: O.Z2,
                    })
                  : null,
        heading: s?.name,
        action: (0, i.jsx)(d.$, { text: M.intl.string(M.t.PPYvuv), onClick: t }),
    });
}
function H(e) {
    let { applicationId: n, channel: t } = e,
        d = s.useMemo(() => ({ type: a.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id }), [t.id, t.guild_id]),
        c = (0, l.zy)().state?.appChannelClosed ?? !1,
        { isClosed: r, launch: u } = (function (e) {
            let { applicationId: n, surface: t, shouldStartClosed: i } = e,
                l = (0, R.VA)(n, t),
                a = (0, g.A)(n, t),
                [d, c] = s.useState(null);
            return (
                d?.frameId !== l
                    ? c({ frameId: l, hasLaunched: !1, isClosed: null == a && (T.has(l) || i()) })
                    : (0, R.x1)(a) && !d.hasLaunched
                      ? c({ ...d, hasLaunched: !0 })
                      : null == a && d.hasLaunched && !d.isClosed && c({ ...d, isClosed: !0 }),
                s.useEffect(() => {
                    d?.hasLaunched === !0 && (d.isClosed ? T.add(d.frameId) : T.delete(d.frameId));
                }, [d]),
                {
                    isClosed: d?.frameId === l && d.isClosed,
                    launch: function () {
                        c((e) => (null != e ? { ...e, hasLaunched: !1, isClosed: !1 } : e));
                    },
                }
            );
        })({ applicationId: n, surface: d, shouldStartClosed: () => c });
    return r ? (0, i.jsx)(D, { applicationId: n, onLaunch: u }) : (0, i.jsx)(Z, { ...e, surface: d });
}
function V(e) {
    let n,
        t,
        l,
        a,
        { channel: d } = e,
        c = (0, r.a)(d),
        u = d.application_id ?? c;
    (0, y.A)(d);
    let h = (0, L.w$)(d, "AppChannel"),
        p =
            ((n = d.id),
            (t = (0, x.HP)(n)),
            (l = (0, o.bG)([N.Ay], () => N.Ay.hasUnread(n) || N.Ay.wasUnreadOnSelect(n), [n])),
            (a = s.useRef(!0)),
            s.useEffect(() => {
                a.current = !0;
            }, [n]),
            s.useEffect(() => {
                h &&
                    l &&
                    a.current &&
                    ((a.current = !1), null == E.Ay.getSidebarState(n) && (0, x.ci)(d.getGuildId(), n));
            }, [h, l, d, n]),
            s.useEffect(() => {
                function e(e) {
                    e.channelId === n && (a.current = !1);
                }
                return (I.h.subscribe("MESSAGE_CREATE", e), () => I.h.unsubscribe("MESSAGE_CREATE", e));
            }, [n]),
            t);
    return null == u
        ? (0, i.jsx)(U.A, {
              className: O.wk,
              heading: M.intl.string(M.t.tU5fiM),
              description: M.intl.string(M.t.E94mJf),
          })
        : (0, i.jsx)(H, { applicationId: u, channel: d, showChatToasts: h && !p });
}
