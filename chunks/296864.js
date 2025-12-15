t.d(n, { default: () => p }), t(388685), t(953529);
var i = t(54381),
    l = t(473749),
    a = t(793030),
    r = t(442837),
    s = t(481060),
    c = t(41776),
    o = t(357156),
    u = t(513449),
    d = t(937096),
    h = t(592125),
    x = t(430824),
    v = t(305298),
    m = t(405613),
    g = t(460838),
    j = t(765305),
    f = t(388032),
    C = t(710421);
function p(e) {
    var n;
    let { transitionState: t, event: p, onSuccess: N, onClose: k } = e,
        { guild_id: y, privacy_level: E } = p,
        w = (0, r.e7)([h.Z], () => h.Z.getChannel(p.channel_id), [p]),
        _ = (0, r.e7)([x.Z], () => x.Z.getGuild(y), [y]),
        { canManageGuildEvent: T } = (0, o.XJ)(null != w ? w : _),
        Z = T(p),
        S = (0, r.e7)([c.Z], () => c.Z.isLurking(y), [y]),
        A = p.entity_type === j.WX.STAGE_INSTANCE,
        [I, b] = l.useState(A),
        [P, { loading: G, error: L }] = (0, v.Z)();
    if (!Z) return null;
    let O = E === j.j8.PUBLIC ? f.intl.string(f.t.HhlaLP) : f.intl.string(f.t.GI3xXd),
        R = () => {
            null == N || N(), k(), (0, u.Ku)(!1);
        },
        M = async () => {
            await P(p, I, { onSuccess: R });
        };
    return (0, i.jsxs)(a.Modal, {
        transitionState: t,
        onClose: k,
        title: p.name,
        subtitle: f.intl.format(f.t.UMajol, {
            privacyLevel: O,
            privacyLevelHook: (e, n) =>
                E !== j.j8.PUBLIC
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: C.privacyLevel,
                              children: [
                                  (0, i.jsx)(s.enf, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: C.publicIcon,
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: "text-md/normal",
                                      children: e,
                                  }),
                              ],
                          },
                          n,
                      ),
        }),
        actionBarInput: A
            ? (0, i.jsxs)(a.P3F, {
                  onClick: () => b(!I),
                  className: C.notificationToggle,
                  children: [
                      (0, i.jsx)(a.FZ5, { checked: I }),
                      (0, i.jsx)(s.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: f.intl.string(f.t["Pe+Pwp"]),
                      }),
                  ],
              })
            : void 0,
        actions: [
            {
                variant: "active",
                text: f.intl.string(f.t.cK1GGY),
                onClick: M,
                loading: G,
            },
        ],
        children: [
            (0, i.jsx)(g.Z, {
                guild: _,
                channel: w,
                name: p.name,
                description: null != (n = p.description) ? n : void 0,
                imageSource: (0, m.Z)(p),
                isActive: !1,
                isUserLurking: S,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: p,
                hideAgeVerificationNotice: !0,
            }),
            j.Qk.has(p.entity_type) && (0, i.jsx)(d.Z, { className: C.ageVerificationNotice }),
            null != L && null != L.getAnyErrorMessage()
                ? (0, i.jsx)(s.Text, {
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      className: C.errorMessage,
                      children: L.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
