l.d(t, { A: () => f });
var n = l(627968),
    i = l(64700),
    s = l(311907),
    a = l(116085),
    r = l(534514),
    d = l(834730),
    o = l(47167),
    c = l(713654),
    u = l(857071),
    x = l(734057),
    h = l(71393),
    m = l(287809),
    g = l(794782),
    v = l(9448),
    j = l(691012),
    A = l(895202),
    E = l(985018),
    p = l(323021);
function f(e) {
    var t;
    let { guildId: l, guildEvent: f, guildEventId: N, error: C, isSlideReady: y } = e,
        b = i.useMemo(() => (0, g.hQ)(f, l), [f, l]),
        { channel_id: S, name: I, image: T, description: R } = b,
        D = (0, s.bG)([x.A], () => x.A.getChannel(S), [S]),
        _ = (0, s.bG)([h.A], () => h.A.getGuild(l), [l]),
        k = (0, v.oF)(b),
        G = (0, s.bG)(
            [m.default],
            () => (null != f.creatorId ? m.default.getUser(f.creatorId) : m.default.getCurrentUser()),
            [f.creatorId],
        ),
        L = (0, s.bG)([u.A], () => u.A.isLurking(l), [l]),
        M = (0, o.Ay)(D),
        P = i.useRef(null);
    i.useEffect(() => {
        y && null != P.current && ((P.current.tabIndex = -1), P.current.focus());
    }, [y]);
    let U = (0, c.gU)(D, _);
    return (0, n.jsxs)("div", {
        className: p.Qs,
        children: [
            (0, n.jsx)(A.A, {
                className: p.B0,
                guild: _,
                channel: D,
                location: k ?? void 0,
                creator: G,
                name: I,
                description: R,
                imageSource:
                    ((t = (0, g.hQ)(f, l, N)),
                    null == T && null == t.image ? null : null != T && /^data:/.test(T) ? T : (0, j.A)(t)),
                isActive: !1,
                isUserLurking: L,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: b,
                eventPreview: b,
                hideAgeVerificationNotice: !0,
            }),
            (0, n.jsxs)("div", {
                className: p.FS,
                children: [
                    (0, n.jsx)(r.D, { ref: P, variant: "heading-xl/semibold", children: E.intl.string(E.t.yBsFE3) }),
                    (0, n.jsx)(d.E, {
                        color: "text-subtle",
                        variant: "text-md/normal",
                        className: p.m_,
                        children:
                            null != location
                                ? E.intl.string(E.t.KDPFi9)
                                : E.intl.format(E.t.f55NX0, {
                                      channelName: M ?? "",
                                      channelHook: () =>
                                          (0, n.jsxs)("div", {
                                              className: p.HA,
                                              children: [
                                                  null != U
                                                      ? (0, n.jsx)(U, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: p.Kk,
                                                        })
                                                      : (0, n.jsx)(a.B, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: p.NR,
                                                        }),
                                                  M ?? k,
                                              ],
                                          }),
                                  }),
                    }),
                    null != C &&
                        (0, n.jsx)(d.E, {
                            color: "text-feedback-critical",
                            variant: "text-xs/normal",
                            className: p.m_,
                            children: C.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
