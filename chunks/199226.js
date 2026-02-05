t.d(n, { default: () => j });
var l = t(627968),
    i = t(64700),
    s = t(158954),
    a = t(311907),
    r = t(397927),
    c = t(857071),
    o = t(931991),
    d = t(571909),
    u = t(660110),
    h = t(734057),
    m = t(71393),
    x = t(883931),
    v = t(691012),
    C = t(895202),
    A = t(988794),
    N = t(985018),
    g = t(587880);
function j(e) {
    let { transitionState: n, event: t, onSuccess: j, onClose: k } = e,
        { guild_id: p, privacy_level: E } = t,
        y = (0, a.bG)([h.A], () => h.A.getChannel(t.channel_id), [t]),
        _ = (0, a.bG)([m.A], () => m.A.getGuild(p), [p]),
        { canManageGuildEvent: T } = (0, o.nr)(y ?? _),
        f = T(t),
        w = (0, a.bG)([c.A], () => c.A.isLurking(p), [p]),
        I = t.entity_type === A.Ps.STAGE_INSTANCE,
        [G, S] = i.useState(I),
        [P, { loading: L, error: b }] = (0, x.A)();
    if (!f) return null;
    let U = E === A.dD.PUBLIC ? N.intl.string(N.t.HhlaLP) : N.intl.string(N.t.GI3xXd),
        M = () => {
            j?.(), k(), (0, d.ek)(!1);
        },
        B = async () => {
            await P(t, G, { onSuccess: M });
        };
    return (0, l.jsxs)(s.Modal, {
        transitionState: n,
        onClose: k,
        title: t.name,
        subtitle: N.intl.format(N.t.UMajol, {
            privacyLevel: U,
            privacyLevelHook: (e, n) =>
                E !== A.dD.PUBLIC
                    ? null
                    : (0, l.jsxs)(
                          "div",
                          {
                              className: g.ro,
                              children: [
                                  (0, l.jsx)(r.L_e, { size: "xs", color: "currentColor", className: g.HJ }),
                                  (0, l.jsx)(r.Text, { variant: "text-md/normal", children: e }),
                              ],
                          },
                          n,
                      ),
        }),
        actionBarInput: I
            ? (0, l.jsxs)(s.DUT, {
                  onClick: () => S(!G),
                  className: g.Qy,
                  children: [
                      (0, l.jsx)(s.P7L, { checked: G }),
                      (0, l.jsx)(r.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: N.intl.string(N.t["Pe+Pwp"]),
                      }),
                  ],
              })
            : void 0,
        actions: [{ variant: "active", text: N.intl.string(N.t.cK1GGY), onClick: B, loading: L }],
        children: [
            (0, l.jsx)(C.A, {
                guild: _,
                channel: y,
                name: t.name,
                description: t.description ?? void 0,
                imageSource: (0, v.A)(t),
                isActive: !1,
                isUserLurking: w,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: t,
                hideAgeVerificationNotice: !0,
            }),
            A.Tn.has(t.entity_type) && (0, l.jsx)(u.A, { className: g.XI, channelId: t.channel_id }),
            null != b && null != b.getAnyErrorMessage()
                ? (0, l.jsx)(r.Text, {
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      className: g.gJ,
                      children: b.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
