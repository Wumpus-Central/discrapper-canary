t.d(n, {
    default: () => f,
}),
    t(896048),
    t(228524);
var l = t(627968),
    i = t(64700),
    s = t(158954),
    r = t(311907),
    a = t(397927),
    c = t(857071),
    o = t(931991),
    u = t(571909),
    d = t(660110),
    h = t(734057),
    x = t(71393),
    m = t(883931),
    v = t(691012),
    j = t(895202),
    g = t(988794),
    A = t(985018),
    C = t(587880);

function f(e) {
    var n;
    let { transitionState: t, event: f, onSuccess: N, onClose: p } = e,
        { guild_id: y, privacy_level: k } = f,
        E = (0, r.bG)([h.A], () => h.A.getChannel(f.channel_id), [f]),
        _ = (0, r.bG)([x.A], () => x.A.getGuild(y), [y]),
        { canManageGuildEvent: T } = (0, o.nr)(null != E ? E : _),
        w = T(f),
        G = (0, r.bG)([c.A], () => c.A.isLurking(y), [y]),
        P = f.entity_type === g.Ps.STAGE_INSTANCE,
        [b, S] = i.useState(P),
        [I, { loading: L, error: M }] = (0, m.A)();
    if (!w) return null;
    let U = k === g.dD.PUBLIC ? A.intl.string(A.t.HhlaLP) : A.intl.string(A.t.GI3xXd),
        O = () => {
            null == N || N(), p(), (0, u.ek)(!1);
        },
        D = async () => {
            await I(f, b, {
                onSuccess: O,
            });
        };
    return (0, l.jsxs)(s.Modal, {
        transitionState: t,
        onClose: p,
        title: f.name,
        subtitle: A.intl.format(A.t.UMajol, {
            privacyLevel: U,
            privacyLevelHook: (e, n) =>
                k !== g.dD.PUBLIC
                    ? null
                    : (0, l.jsxs)(
                          "div",
                          {
                              className: C.ro,
                              children: [
                                  (0, l.jsx)(a.L_e, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: C.HJ,
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      children: e,
                                  }),
                              ],
                          },
                          n,
                      ),
        }),
        actionBarInput: P
            ? (0, l.jsxs)(s.DUT, {
                  onClick: () => S(!b),
                  className: C.Qy,
                  children: [
                      (0, l.jsx)(s.P7L, {
                          checked: b,
                      }),
                      (0, l.jsx)(a.Text, {
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
                onClick: D,
                loading: L,
            },
        ],
        children: [
            (0, l.jsx)(j.A, {
                guild: _,
                channel: E,
                name: f.name,
                description: null != (n = f.description) ? n : void 0,
                imageSource: (0, v.A)(f),
                isActive: !1,
                isUserLurking: G,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: f,
                hideAgeVerificationNotice: !0,
            }),
            g.Tn.has(f.entity_type) &&
                (0, l.jsx)(d.A, {
                    className: C.XI,
                }),
            null != M && null != M.getAnyErrorMessage()
                ? (0, l.jsx)(a.Text, {
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      className: C.gJ,
                      children: M.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
