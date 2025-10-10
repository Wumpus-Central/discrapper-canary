t.d(n, { default: () => f }), t(388685), t(953529);
var i = t(951288),
    l = t(647438),
    a = t(793030),
    r = t(442837),
    s = t(755721),
    c = t(481060),
    o = t(41776),
    u = t(357156),
    d = t(513449),
    h = t(592125),
    v = t(430824),
    g = t(305298),
    m = t(405613),
    x = t(460838),
    p = t(765305),
    C = t(388032),
    j = t(602872);
function f(e) {
    var n;
    let { transitionState: t, event: f, onSuccess: y, onClose: N } = e,
        { guild_id: k, privacy_level: E } = f,
        b = (0, r.e7)([h.Z], () => h.Z.getChannel(f.channel_id), [f]),
        w = (0, r.e7)([v.Z], () => v.Z.getGuild(k), [k]),
        { canManageGuildEvent: I } = (0, u.XJ)(null != b ? b : w),
        S = I(f),
        O = (0, r.e7)([o.Z], () => o.Z.isLurking(k), [k]),
        Z = f.entity_type === p.WX.STAGE_INSTANCE,
        [_, T] = l.useState(Z),
        [P, { loading: L, error: A }] = (0, g.Z)();
    if (!S) return null;
    let G = E === p.j8.PUBLIC ? C.intl.string(C.t.HhlaLC) : C.intl.string(C.t.GI3xXV),
        X = () => {
            null == y || y(), N(), (0, d.Ku)(!1);
        },
        R = async () => {
            await P(f, _, { onSuccess: X });
        };
    return (0, i.jsxs)(a.Modal, {
        transitionState: t,
        onClose: N,
        title: f.name,
        subtitle: C.intl.format(C.t.UMajoq, {
            privacyLevel: G,
            privacyLevelHook: (e, n) =>
                E !== p.j8.PUBLIC
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: j.privacyLevel,
                              children: [
                                  (0, i.jsx)(c.enf, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: j.publicIcon,
                                  }),
                                  (0, i.jsx)(c.Text, {
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
                text: C.intl.string(C.t.CZGqeX),
                onClick: () => {
                    N();
                },
            },
            {
                variant: "active",
                text: C.intl.string(C.t.cK1GGR),
                onClick: R,
                loading: L,
            },
        ],
        children: [
            (0, i.jsx)(x.Z, {
                guild: w,
                channel: b,
                name: f.name,
                description: null != (n = f.description) ? n : void 0,
                imageSource: (0, m.Z)(f),
                isActive: !1,
                isUserLurking: O,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: f,
            }),
            Z &&
                (0, i.jsx)(s.VL, {
                    className: j.verticalSpacing,
                    checked: _,
                    onChange: (e) => T(e),
                    label: C.intl.string(C.t.dGNtgI),
                    labelType: "secondary",
                }),
            null != A && null != A.getAnyErrorMessage()
                ? (0, i.jsx)(c.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      className: j.errorMessage,
                      children: A.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
