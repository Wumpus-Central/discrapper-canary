n.d(l, { A: () => G, T: () => k });
var i = n(477900),
    t = n(582128),
    s = n(17928),
    a = n(451988),
    r = n(265872),
    o = n(714114),
    c = n(323073),
    d = n(597306),
    u = n(10862),
    h = n(734057),
    m = n(576705),
    x = n(342952),
    g = n(834730),
    A = n(778712),
    j = n(821609),
    p = n(693879),
    v = n(607407),
    N = n(188645),
    f = n(747376),
    I = n(575731),
    C = n(616356),
    b = n(977997),
    E = n(47167),
    y = n(475889),
    _ = n(262763),
    S = n(402216),
    M = n(105292),
    R = n(971718);
let T = function (e) {
    let { channel: l } = e,
        n = (0, s.bG)([b.A], () => b.A.isInChannel(l.id)),
        t = (0, I.A)(l),
        a = (0, E.Ay)(l),
        r = (0, y.H)(l),
        o = (0, s.bG)([C.A], () => C.A.getAllApplicationStreamsForChannel(l.id)[0]);
    return (0, i.jsxs)(N.Uq, {
        className: R.jC,
        children: [
            (0, i.jsxs)("div", {
                className: R.hY,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.HA,
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
                                className: R.Mw,
                                children: (0, i.jsx)(g.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    className: R.Kw,
                                    children: a,
                                }),
                            }),
                        ],
                    }),
                    null != r &&
                        (0, i.jsx)("span", {
                            className: R.j2,
                            children: (0, i.jsx)(p.z, { entry: { start: r }, textColor: "text-feedback-positive" }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: R.Bm,
                children: [
                    null != o &&
                        (0, i.jsxs)("div", {
                            className: R.yt,
                            children: [
                                (0, i.jsx)(v.A, { stream: o, className: R.Rh, noText: !0 }),
                                (0, i.jsx)(S.Ay, { size: S.Ay.Sizes.SMALL, className: R.wI }),
                            ],
                        }),
                    (0, i.jsx)(x.A, {
                        users: t,
                        guildId: l.guild_id,
                        channelId: l.id,
                        size: A._3.SIZE_24,
                        maxUsers: 8,
                        "aria-label": M.intl.string(M.t["jNqDh/"]),
                    }),
                    (0, i.jsx)(j.$, {
                        variant: n ? "secondary" : "active",
                        size: "sm",
                        text: n ? M.intl.string(M.t["3xjX0U"]) : M.intl.string(M.t.VJlc0S),
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
        x = t.useCallback(() => {
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
            (0, i.jsx)("div", { onMouseEnter: m, onMouseLeave: x, children: (0, i.jsx)(T, { channel: l }) }),
        children: () => (0, i.jsx)("div", { className: s, ref: o, onMouseEnter: m, onMouseLeave: x, children: n }),
    });
}
function G(e) {
    let { guild: l, message: n } = e,
        { voiceState: t, voiceChannel: a } = (0, o.Ay)({ userId: n.author.id, guildId: l.id }),
        r = (0, s.bG)([h.A], () => h.A.getChannel(n.channel_id)?.isVocal()),
        x = (0, s.bG)([m.A], () => {
            if (null == a) return !1;
            let e = (0, d.r)() && (0, c.UK)(a.id);
            return (a.isPrivate() || (m.A.can(w.xBc.VIEW_CHANNEL, a) && m.A.can(w.xBc.CONNECT, a))) && !e;
        });
    return null != t && null != a && a.isGuildVocal() && x && !r
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
