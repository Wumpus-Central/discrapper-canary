l.d(n, {
    default: () => j,
}),
    l(896048),
    l(228524);
var t = l(627968),
    i = l(64700),
    s = l(158954),
    a = l(311907),
    r = l(397927),
    c = l(857071),
    o = l(931991),
    u = l(571909),
    d = l(660110),
    h = l(734057),
    m = l(71393),
    v = l(883931),
    x = l(691012),
    C = l(895202),
    g = l(988794),
    A = l(985018),
    N = l(587880);

function j(e) {
    var n;
    let { transitionState: l, event: j, onSuccess: p, onClose: k } = e,
        { guild_id: y, privacy_level: f } = j,
        E = (0, a.bG)([h.A], () => h.A.getChannel(j.channel_id), [j]),
        w = (0, a.bG)([m.A], () => m.A.getGuild(y), [y]),
        { canManageGuildEvent: _ } = (0, o.nr)(null != E ? E : w),
        T = _(j),
        b = (0, a.bG)([c.A], () => c.A.isLurking(y), [y]),
        I = j.entity_type === g.Ps.STAGE_INSTANCE,
        [G, P] = i.useState(I),
        [S, { loading: L, error: O }] = (0, v.A)();
    if (!T) return null;
    let U = f === g.dD.PUBLIC ? A.intl.string(A.t.HhlaLP) : A.intl.string(A.t.GI3xXd),
        M = () => {
            null == p || p(), k(), (0, u.ek)(!1);
        },
        B = async () => {
            await S(j, G, {
                onSuccess: M,
            });
        };
    return (0, t.jsxs)(s.Modal, {
        transitionState: l,
        onClose: k,
        title: j.name,
        subtitle: A.intl.format(A.t.UMajol, {
            privacyLevel: U,
            privacyLevelHook: (e, n) =>
                f !== g.dD.PUBLIC
                    ? null
                    : (0, t.jsxs)(
                          "div",
                          {
                              className: N.ro,
                              children: [
                                  (0, t.jsx)(r.L_e, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: N.HJ,
                                  }),
                                  (0, t.jsx)(r.Text, {
                                      variant: "text-md/normal",
                                      children: e,
                                  }),
                              ],
                          },
                          n,
                      ),
        }),
        actionBarInput: I
            ? (0, t.jsxs)(s.DUT, {
                  onClick: () => P(!G),
                  className: N.Qy,
                  children: [
                      (0, t.jsx)(s.P7L, {
                          checked: G,
                      }),
                      (0, t.jsx)(r.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: A.intl.string(A.t["Pe+Pwp"]),
                      }),
                  ],
              })
            : void 0,
        actions: [
            {
                variant: "active",
                text: A.intl.string(A.t.cK1GGY),
                onClick: B,
                loading: L,
            },
        ],
        children: [
            (0, t.jsx)(C.A, {
                guild: w,
                channel: E,
                name: j.name,
                description: null != (n = j.description) ? n : void 0,
                imageSource: (0, x.A)(j),
                isActive: !1,
                isUserLurking: b,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: j,
                hideAgeVerificationNotice: !0,
            }),
            g.Tn.has(j.entity_type) &&
                (0, t.jsx)(d.A, {
                    className: N.XI,
                    channelId: j.channel_id,
                }),
            null != O && null != O.getAnyErrorMessage()
                ? (0, t.jsx)(r.Text, {
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      className: N.gJ,
                      children: O.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
