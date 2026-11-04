n.d(l, { T: () => k, A: () => G });
var i = n(477900),
    t = n(582128),
    s = n(855986),
    a = n(451988),
    r = n(265872),
    o = n(714114),
    c = n(323073),
    d = n(597306),
    u = n(10862),
    h = n(734057),
    m = n(576705),
    g = n(342952),
    x = n(834730),
    A = n(778712),
    j = n(821609),
    p = n(693879),
    v = n(607407),
    N = n(188645),
    f = n(129095),
    I = n(575731),
    b = n(616356),
    C = n(977997),
    y = n(47167),
    E = n(475889),
    _ = n(262763),
    M = n(402216),
    R = n(792996),
    S = n(971718);
let T = function (e) {
    let { channel: l } = e,
        n = (0, s.bG)([C.A], () => C.A.isInChannel(l.id)),
        t = (0, I.A)(l),
        a = (0, y.Ay)(l),
        r = (0, E.H)(l),
        o = (0, s.bG)([b.A], () => b.A.getAllApplicationStreamsForChannel(l.id)[0]);
    return (0, i.jsxs)(N.Uq, {
        className: S.jC,
        children: [
            (0, i.jsxs)("div", {
                className: S.hY,
                children: [
                    (0, i.jsxs)("div", {
                        className: S.HA,
                        children: [
                            (0, i.jsx)(u.A, {
                                size: "custom",
                                height: 20,
                                width: 20,
                                color: "currentColor",
                                channel: l,
                                style: { flexShrink: 0 },
                            }),
                            (0, i.jsx)("div", {
                                className: S.Mw,
                                children: (0, i.jsx)(x.E, {
                                    variant: "body-sm/medium",
                                    color: "text-default",
                                    className: S.Kw,
                                    children: a,
                                }),
                            }),
                        ],
                    }),
                    null != r &&
                        (0, i.jsx)("span", {
                            className: S.j2,
                            children: (0, i.jsx)(p.z, { entry: { start: r }, textColor: "text-feedback-positive" }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: S.Bm,
                children: [
                    null != o &&
                        (0, i.jsxs)("div", {
                            className: S.yt,
                            children: [
                                (0, i.jsx)(v.A, { stream: o, className: S.Rh, noText: !0 }),
                                (0, i.jsx)(M.Ay, { size: M.Ay.Sizes.SMALL, className: S.wI }),
                            ],
                        }),
                    (0, i.jsx)(g.A, {
                        users: t,
                        guildId: l.guild_id,
                        channelId: l.id,
                        size: A._3.SIZE_24,
                        maxUsers: 8,
                        "aria-label": R.intl.string(R.t["jNqDh/"]),
                    }),
                    (0, i.jsx)(j.$, {
                        variant: n ? "secondary" : "active",
                        size: "sm",
                        text: n ? R.intl.string(R.t["3xjX0U"]) : R.intl.string(R.t.VJlc0S),
                        fullWidth: !0,
                        onClick: function () {
                            l.isGuildStageVoice()
                                ? (0, f.av)(l)
                                : _.A.handleVoiceConnect({
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
var w = n(652215),
    O = n(396975);
function k(e) {
    let { channel: l, children: n, childWrapperClassName: s } = e,
        o = t.useRef(null),
        [c, d] = t.useState(!1),
        u = t.useRef(
            new a.J_(50, () => {
                d(!0);
            }),
        ),
        h = t.useRef(
            new a.J_(175, () => {
                d(!1);
            }),
        );
    t.useEffect(() => {
        let e = u.current,
            l = h.current;
        return () => {
            (e.cancel(), l.cancel());
        };
    }, []);
    let m = t.useCallback(() => {
            (h.current.cancel(), u.current.delay());
        }, []),
        g = t.useCallback(() => {
            (u.current.cancel(), h.current.delay());
        }, []);
    return (0, i.jsx)(r.Y, {
        targetElementRef: o,
        animation: r.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "right",
        shouldShow: c,
        renderPopout: () =>
            (0, i.jsx)("div", { onMouseEnter: m, onMouseLeave: g, children: (0, i.jsx)(T, { channel: l }) }),
        children: () => (0, i.jsx)("div", { className: s, ref: o, onMouseEnter: m, onMouseLeave: g, children: n }),
    });
}
function G(e) {
    let { guild: l, message: n } = e,
        { voiceState: t, voiceChannel: a } = (0, o.Ay)({ userId: n.author.id, guildId: l.id }),
        r = (0, s.bG)([h.A], () => h.A.getChannel(n.channel_id)?.isVocal()),
        g = (0, s.bG)([m.A], () => {
            if (null == a) return !1;
            let e = (0, d.r)() && (0, c.UK)(a.id);
            return (a.isPrivate() || (m.A.can(w.xBc.VIEW_CHANNEL, a) && m.A.can(w.xBc.CONNECT, a))) && !e;
        });
    return null != t && null != a && a.isGuildVocal() && g && !r
        ? (0, i.jsx)(k, {
              channel: a,
              childWrapperClassName: O.y,
              children: (0, i.jsx)(u.A, {
                  className: O.B,
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  channel: a,
              }),
          })
        : null;
}
