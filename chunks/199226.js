l.d(n, { default: () => p });
var t = l(627968),
    i = l(64700),
    s = l(189213),
    a = l(939249),
    r = l(658675),
    c = l(311907),
    o = l(998445),
    d = l(834730),
    u = l(857071),
    h = l(931991),
    m = l(571909),
    v = l(660110),
    x = l(734057),
    C = l(71393),
    A = l(883931),
    N = l(691012),
    g = l(895202),
    j = l(988794),
    k = l(985018),
    E = l(682043);
function p(e) {
    let { transitionState: n, event: l, onSuccess: p, onClose: y } = e,
        { guild_id: f, privacy_level: _ } = l,
        w = (0, c.bG)([x.A], () => x.A.getChannel(l.channel_id), [l]),
        I = (0, c.bG)([C.A], () => C.A.getGuild(f), [f]),
        { canManageGuildEvent: G } = (0, h.nr)(w ?? I),
        S = G(l),
        P = (0, c.bG)([u.A], () => u.A.isLurking(f), [f]),
        T = l.entity_type === j.Ps.STAGE_INSTANCE,
        [b, L] = i.useState(T),
        [U, { loading: M, error: D }] = (0, A.A)();
    if (!S) return null;
    let O = _ === j.dD.PUBLIC ? k.intl.string(k.t.HhlaLP) : k.intl.string(k.t.GI3xXd),
        B = () => {
            p?.(), y(), (0, m.ek)(!1);
        },
        R = async () => {
            await U(l, b, { onSuccess: B });
        };
    return (0, t.jsxs)(s.Modal, {
        transitionState: n,
        onClose: y,
        title: l.name,
        subtitle: k.intl.format(k.t.UMajol, {
            privacyLevel: O,
            privacyLevelHook: (e, n) =>
                _ !== j.dD.PUBLIC
                    ? null
                    : (0, t.jsxs)(
                          "div",
                          {
                              className: E.ro,
                              children: [
                                  (0, t.jsx)(o.L, { size: "xs", color: "currentColor", className: E.HJ }),
                                  (0, t.jsx)(d.E, { variant: "text-md/normal", children: e }),
                              ],
                          },
                          n,
                      ),
        }),
        actionBarInput: T
            ? (0, t.jsxs)(a.D, {
                  onClick: () => L(!b),
                  className: E.Qy,
                  children: [
                      (0, t.jsx)(r.P, { checked: b }),
                      (0, t.jsx)(d.E, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: k.intl.string(k.t["Pe+Pwp"]),
                      }),
                  ],
              })
            : void 0,
        actions: [{ variant: "active", text: k.intl.string(k.t.cK1GGY), onClick: R, loading: M }],
        children: [
            (0, t.jsx)(g.A, {
                guild: I,
                channel: w,
                name: l.name,
                description: l.description ?? void 0,
                imageSource: (0, N.A)(l),
                isActive: !1,
                isUserLurking: P,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: l,
                hideAgeVerificationNotice: !0,
            }),
            j.Tn.has(l.entity_type) && (0, t.jsx)(v.A, { className: E.XI, channelId: l.channel_id }),
            null != D && null != D.getAnyErrorMessage()
                ? (0, t.jsx)(d.E, {
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      className: E.gJ,
                      children: D.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
