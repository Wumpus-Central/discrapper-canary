l.d(n, { A: () => G, T: () => O });
var t = l(477900),
    i = l(582128),
    a = l(17928),
    s = l(451988),
    r = l(922016),
    o = l(714114),
    c = l(323073),
    d = l(10862),
    u = l(734057),
    m = l(576705),
    h = l(342952),
    g = l(834730),
    x = l(778712),
    A = l(821609),
    j = l(693879),
    p = l(607407),
    v = l(966245),
    f = l(790535),
    N = l(575731),
    I = l(616356),
    C = l(977997),
    b = l(47167),
    E = l(475889),
    y = l(262763),
    _ = l(402216),
    M = l(375708),
    S = l(971718);
let R = function (e) {
    let { channel: n } = e,
        l = (0, a.bG)([C.A], () => C.A.isInChannel(n.id)),
        i = (0, N.A)(n),
        s = (0, b.Ay)(n),
        r = (0, E.H)(n),
        o = (0, a.bG)([I.A], () => I.A.getAllApplicationStreamsForChannel(n.id)[0]);
    return (0, t.jsxs)(v.Uq, {
        className: S.jC,
        children: [
            (0, t.jsxs)("div", {
                className: S.hY,
                children: [
                    (0, t.jsxs)("div", {
                        className: S.HA,
                        children: [
                            (0, t.jsx)(d.A, {
                                size: "custom",
                                height: 20,
                                width: 20,
                                color: "currentColor",
                                channel: n,
                                style: { flexShrink: 0 },
                            }),
                            (0, t.jsx)("div", {
                                className: S.Mw,
                                children: (0, t.jsx)(g.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    className: S.Kw,
                                    children: s,
                                }),
                            }),
                        ],
                    }),
                    null != r &&
                        (0, t.jsx)("span", {
                            className: S.j2,
                            children: (0, t.jsx)(j.z, { entry: { start: r }, textColor: "text-feedback-positive" }),
                        }),
                ],
            }),
            (0, t.jsxs)("div", {
                className: S.Bm,
                children: [
                    null != o &&
                        (0, t.jsxs)("div", {
                            className: S.yt,
                            children: [
                                (0, t.jsx)(p.A, { stream: o, className: S.Rh, noText: !0 }),
                                (0, t.jsx)(_.Ay, { size: _.Ay.Sizes.SMALL, className: S.wI }),
                            ],
                        }),
                    (0, t.jsx)(h.A, {
                        users: i,
                        guildId: n.guild_id,
                        channelId: n.id,
                        size: x._3.SIZE_24,
                        maxUsers: 8,
                        "aria-label": M.intl.string(M.t["jNqDh/"]),
                    }),
                    (0, t.jsx)(A.$, {
                        variant: l ? "secondary" : "active",
                        size: "sm",
                        text: l ? M.intl.string(M.t["3xjX0U"]) : M.intl.string(M.t.VJlc0S),
                        fullWidth: !0,
                        onClick: function () {
                            n.isGuildStageVoice()
                                ? (0, f.av)(n)
                                : y.A.handleVoiceConnect({
                                      channel: n,
                                      connected: l,
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
var T = l(652215),
    w = l(396975);
function O(e) {
    let { channel: n, children: l, childWrapperClassName: a } = e,
        o = i.useRef(null),
        [c, d] = i.useState(!1),
        u = i.useRef(
            new s.J_(50, () => {
                d(!0);
            }),
        ),
        m = i.useRef(
            new s.J_(175, () => {
                d(!1);
            }),
        );
    i.useEffect(() => {
        let e = u.current,
            n = m.current;
        return () => {
            e.cancel(), n.cancel();
        };
    }, []);
    let h = i.useCallback(() => {
            m.current.cancel(), u.current.delay();
        }, []),
        g = i.useCallback(() => {
            u.current.cancel(), m.current.delay();
        }, []);
    return (0, t.jsx)(r.Y, {
        targetElementRef: o,
        animation: r.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "right",
        shouldShow: c,
        renderPopout: () =>
            (0, t.jsx)("div", { onMouseEnter: h, onMouseLeave: g, children: (0, t.jsx)(R, { channel: n }) }),
        children: () => (0, t.jsx)("div", { className: a, ref: o, onMouseEnter: h, onMouseLeave: g, children: l }),
    });
}
function G(e) {
    let { guild: n, message: l } = e,
        { voiceState: i, voiceChannel: s } = (0, o.Ay)({ userId: l.author.id, guildId: n.id }),
        r = (0, a.bG)([u.A], () => u.A.getChannel(l.channel_id)?.isVocal()),
        h = (0, a.bG)([m.A], () => {
            if (null == s) return !1;
            let e = (0, c.r9)() && (0, c.UK)(s.id);
            return (s.isPrivate() || (m.A.can(T.xBc.VIEW_CHANNEL, s) && m.A.can(T.xBc.CONNECT, s))) && !e;
        });
    return null != i && null != s && s.isGuildVocal() && h && !r
        ? (0, t.jsx)(O, {
              channel: s,
              childWrapperClassName: w.y,
              children: (0, t.jsx)(d.A, {
                  className: w.B,
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  channel: s,
              }),
          })
        : null;
}
