t.d(n, { default: () => j }), t(388685), t(953529);
var l = t(54381),
    i = t(473749),
    a = t(793030),
    r = t(442837),
    s = t(481060),
    c = t(41776),
    o = t(357156),
    u = t(513449),
    d = t(592125),
    h = t(430824),
    v = t(305298),
    m = t(405613),
    x = t(460838),
    C = t(765305),
    g = t(388032),
    p = t(710421);
function j(e) {
    var n;
    let { transitionState: t, event: j, onSuccess: N, onClose: f } = e,
        { guild_id: k, privacy_level: E } = j,
        y = (0, r.e7)([d.Z], () => d.Z.getChannel(j.channel_id), [j]),
        w = (0, r.e7)([h.Z], () => h.Z.getGuild(k), [k]),
        { canManageGuildEvent: I } = (0, o.XJ)(null != y ? y : w),
        Z = I(j),
        _ = (0, r.e7)([c.Z], () => c.Z.isLurking(k), [k]),
        b = j.entity_type === C.WX.STAGE_INSTANCE,
        [S, T] = i.useState(b),
        [A, { loading: G, error: L }] = (0, v.Z)();
    if (!Z) return null;
    let X = E === C.j8.PUBLIC ? g.intl.string(g.t.HhlaLP) : g.intl.string(g.t.GI3xXd),
        O = () => {
            null == N || N(), f(), (0, u.Ku)(!1);
        },
        P = async () => {
            await A(j, S, { onSuccess: O });
        };
    return (0, l.jsxs)(a.Modal, {
        transitionState: t,
        onClose: f,
        title: j.name,
        subtitle: g.intl.format(g.t.UMajol, {
            privacyLevel: X,
            privacyLevelHook: (e, n) =>
                E !== C.j8.PUBLIC
                    ? null
                    : (0, l.jsxs)(
                          "div",
                          {
                              className: p.privacyLevel,
                              children: [
                                  (0, l.jsx)(s.enf, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: p.publicIcon,
                                  }),
                                  (0, l.jsx)(s.Text, {
                                      variant: "text-md/normal",
                                      children: e,
                                  }),
                              ],
                          },
                          n,
                      ),
        }),
        actions: [
            {
                variant: "secondary",
                text: g.intl.string(g.t.CZGqeT),
                onClick: () => {
                    f();
                },
            },
            {
                variant: "active",
                text: g.intl.string(g.t.cK1GGY),
                onClick: P,
                loading: G,
            },
        ],
        children: [
            (0, l.jsx)(x.Z, {
                guild: w,
                channel: y,
                name: j.name,
                description: null != (n = j.description) ? n : void 0,
                imageSource: (0, m.Z)(j),
                isActive: !1,
                isUserLurking: _,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: j,
            }),
            b &&
                (0, l.jsx)("div", {
                    className: p.verticalSpacing,
                    children: (0, l.jsx)(a.XZJ, {
                        checked: S,
                        onChange: (e) => T(e),
                        label: g.intl.string(g.t.dGNtgI),
                        labelType: "secondary",
                    }),
                }),
            null != L && null != L.getAnyErrorMessage()
                ? (0, l.jsx)(s.Text, {
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      className: p.errorMessage,
                      children: L.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
