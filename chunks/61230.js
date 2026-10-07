l.d(n, { A: () => G, T: () => k });
var t = l(477900),
    i = l(582128),
    a = l(17928),
    s = l(451988),
    r = l(922016),
    o = l(714114),
    c = l(323073),
    d = l(597306),
    u = l(10862),
    h = l(734057),
    m = l(576705),
    g = l(342952),
    x = l(834730),
    A = l(778712),
    j = l(821609),
    p = l(693879),
    v = l(607407),
    N = l(188645),
    f = l(747376),
    I = l(575731),
    C = l(616356),
    b = l(977997),
    E = l(47167),
    y = l(475889),
    M = l(262763),
    _ = l(402216),
    S = l(660183),
    R = l(971718);
let T = function (e) {
    let { channel: n } = e,
        l = (0, a.bG)([b.A], () => b.A.isInChannel(n.id)),
        i = (0, I.A)(n),
        s = (0, E.Ay)(n),
        r = (0, y.H)(n),
        o = (0, a.bG)([C.A], () => C.A.getAllApplicationStreamsForChannel(n.id)[0]);
    return (0, t.jsxs)(N.Uq, {
        className: R.jC,
        children: [
            (0, t.jsxs)("div", {
                className: R.hY,
                children: [
                    (0, t.jsxs)("div", {
                        className: R.HA,
                        children: [
                            (0, t.jsx)(u.A, {
                                size: "custom",
                                height: 20,
                                width: 20,
                                color: "currentColor",
                                channel: n,
                                style: { flexShrink: 0 },
                            }),
                            (0, t.jsx)("div", {
                                className: R.Mw,
                                children: (0, t.jsx)(x.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    className: R.Kw,
                                    children: s,
                                }),
                            }),
                        ],
                    }),
                    null != r &&
                        (0, t.jsx)("span", {
                            className: R.j2,
                            children: (0, t.jsx)(p.z, { entry: { start: r }, textColor: "text-feedback-positive" }),
                        }),
                ],
            }),
            (0, t.jsxs)("div", {
                className: R.Bm,
                children: [
                    null != o &&
                        (0, t.jsxs)("div", {
                            className: R.yt,
                            children: [
                                (0, t.jsx)(v.A, { stream: o, className: R.Rh, noText: !0 }),
                                (0, t.jsx)(_.Ay, { size: _.Ay.Sizes.SMALL, className: R.wI }),
                            ],
                        }),
                    (0, t.jsx)(g.A, {
                        users: i,
                        guildId: n.guild_id,
                        channelId: n.id,
                        size: A._3.SIZE_24,
                        maxUsers: 8,
                        "aria-label": S.intl.string(S.t["jNqDh/"]),
                    }),
                    (0, t.jsx)(j.$, {
                        variant: l ? "secondary" : "active",
                        size: "sm",
                        text: l ? S.intl.string(S.t["3xjX0U"]) : S.intl.string(S.t.VJlc0S),
                        fullWidth: !0,
                        onClick: function () {
                            n.isGuildStageVoice()
                                ? (0, f.av)(n)
                                : M.A.handleVoiceConnect({
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
var w = l(652215),
    O = l(396975);
function k(e) {
    let { channel: n, children: l, childWrapperClassName: a } = e,
        o = i.useRef(null),
        [c, d] = i.useState(!1),
        u = i.useRef(
            new s.J_(50, () => {
                d(!0);
            }),
        ),
        h = i.useRef(
            new s.J_(175, () => {
                d(!1);
            }),
        );
    i.useEffect(() => {
        let e = u.current,
            n = h.current;
        return () => {
            (e.cancel(), n.cancel());
        };
    }, []);
    let m = i.useCallback(() => {
            (h.current.cancel(), u.current.delay());
        }, []),
        g = i.useCallback(() => {
            (u.current.cancel(), h.current.delay());
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
            (0, t.jsx)("div", { onMouseEnter: m, onMouseLeave: g, children: (0, t.jsx)(T, { channel: n }) }),
        children: () => (0, t.jsx)("div", { className: a, ref: o, onMouseEnter: m, onMouseLeave: g, children: l }),
    });
}
function G(e) {
    let { guild: n, message: l } = e,
        { voiceState: i, voiceChannel: s } = (0, o.Ay)({ userId: l.author.id, guildId: n.id }),
        r = (0, a.bG)([h.A], () => h.A.getChannel(l.channel_id)?.isVocal()),
        g = (0, a.bG)([m.A], () => {
            if (null == s) return !1;
            let e = (0, d.r)() && (0, c.UK)(s.id);
            return (s.isPrivate() || (m.A.can(w.xBc.VIEW_CHANNEL, s) && m.A.can(w.xBc.CONNECT, s))) && !e;
        });
    return null != i && null != s && s.isGuildVocal() && g && !r
        ? (0, t.jsx)(k, {
              channel: s,
              childWrapperClassName: O.y,
              children: (0, t.jsx)(u.A, {
                  className: O.B,
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  channel: s,
              }),
          })
        : null;
}
