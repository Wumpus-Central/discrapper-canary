n.d(l, { A: () => G, T: () => O });
var t = n(627968),
    a = n(64700),
    i = n(17928),
    s = n(451988),
    r = n(922016),
    o = n(714114),
    u = n(323073),
    d = n(10862),
    c = n(734057),
    g = n(576705),
    h = n(342952),
    m = n(834730),
    A = n(778712),
    v = n(821609),
    f = n(85451),
    x = n(607407),
    p = n(34337),
    j = n(790535),
    C = n(575731),
    N = n(616356),
    I = n(977997),
    _ = n(47167),
    E = n(475889),
    b = n(262763),
    M = n(402216),
    S = n(985018),
    y = n(255201);
let w = function (e) {
    let { channel: l } = e,
        n = (0, i.bG)([I.A], () => I.A.isInChannel(l.id)),
        a = (0, C.A)(l),
        s = (0, _.Ay)(l),
        r = (0, E.H)(l),
        o = (0, i.bG)([N.A], () => N.A.getAllApplicationStreamsForChannel(l.id)[0]);
    return (0, t.jsxs)(p.Uq, {
        className: y.jC,
        children: [
            (0, t.jsxs)("div", {
                className: y.hY,
                children: [
                    (0, t.jsxs)("div", {
                        className: y.HA,
                        children: [
                            (0, t.jsx)(d.A, {
                                size: "custom",
                                height: 20,
                                width: 20,
                                color: "currentColor",
                                channel: l,
                                style: { flexShrink: 0 },
                            }),
                            (0, t.jsx)("div", {
                                className: y.Mw,
                                children: (0, t.jsx)(m.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    className: y.Kw,
                                    children: s,
                                }),
                            }),
                        ],
                    }),
                    null != r &&
                        (0, t.jsx)("span", {
                            className: y.j2,
                            children: (0, t.jsx)(f.z, { entry: { start: r }, textColor: "text-feedback-positive" }),
                        }),
                ],
            }),
            (0, t.jsxs)("div", {
                className: y.Bm,
                children: [
                    null != o &&
                        (0, t.jsxs)("div", {
                            className: y.yt,
                            children: [
                                (0, t.jsx)(x.A, { stream: o, className: y.Rh, noText: !0 }),
                                (0, t.jsx)(M.Ay, { size: M.Ay.Sizes.SMALL, className: y.wI }),
                            ],
                        }),
                    (0, t.jsx)(h.A, {
                        users: a,
                        guildId: l.guild_id,
                        channelId: l.id,
                        size: A._3.SIZE_24,
                        maxUsers: 8,
                        "aria-label": S.intl.string(S.t["jNqDh/"]),
                    }),
                    (0, t.jsx)(v.$, {
                        variant: n ? "secondary" : "active",
                        size: "sm",
                        text: n ? S.intl.string(S.t["3xjX0U"]) : S.intl.string(S.t.VJlc0S),
                        fullWidth: !0,
                        onClick: () => {
                            l.isGuildStageVoice()
                                ? (0, j.av)(l)
                                : b.A.handleVoiceConnect({
                                      channel: l,
                                      connected: n,
                                      needSubscriptionToAccess: !1,
                                      routeDirectlyToChannel: !0,
                                      bypassChangeModal: !0,
                                  });
                        },
                    }),
                ],
            }),
        ],
    });
};
var T = n(652215),
    R = n(129728);
function O(e) {
    let { channel: l, children: n, childWrapperClassName: i } = e,
        o = a.useRef(null),
        [u, d] = a.useState(!1),
        c = a.useRef(
            new s.J_(50, () => {
                d(!0);
            }),
        ),
        g = a.useRef(
            new s.J_(175, () => {
                d(!1);
            }),
        );
    a.useEffect(() => {
        let e = c.current,
            l = g.current;
        return () => {
            e.cancel(), l.cancel();
        };
    }, []);
    let h = a.useCallback(() => {
            g.current.cancel(), c.current.delay();
        }, []),
        m = a.useCallback(() => {
            c.current.cancel(), g.current.delay();
        }, []);
    return (0, t.jsx)(r.Y, {
        targetElementRef: o,
        animation: r.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "right",
        shouldShow: u,
        renderPopout: () =>
            (0, t.jsx)("div", { onMouseEnter: h, onMouseLeave: m, children: (0, t.jsx)(w, { channel: l }) }),
        children: () => (0, t.jsx)("div", { className: i, ref: o, onMouseEnter: h, onMouseLeave: m, children: n }),
    });
}
function G(e) {
    let { guild: l, message: n } = e,
        { voiceState: a, voiceChannel: s } = (0, o.A)({ userId: n.author.id, guildId: l.id }),
        r = (0, i.bG)([c.A], () => c.A.getChannel(n.channel_id)?.isVocal()),
        h = (0, i.bG)([g.A], () => {
            if (null == s) return !1;
            let e = (0, u.r9)() && (0, u.UK)(s.id);
            return (s.isPrivate() || (g.A.can(T.xBc.VIEW_CHANNEL, s) && g.A.can(T.xBc.CONNECT, s))) && !e;
        });
    return null != a && null != s && s.isGuildVocal() && h && !r
        ? (0, t.jsx)(O, {
              channel: s,
              childWrapperClassName: R.y,
              children: (0, t.jsx)(d.A, {
                  className: R.B,
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  channel: s,
              }),
          })
        : null;
}
