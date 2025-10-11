t.d(n, { default: () => j }), t(388685), t(953529);
var i = t(951288),
    l = t(647438),
    r = t(793030),
    a = t(442837),
    s = t(481060),
    c = t(41776),
    o = t(357156),
    u = t(513449),
    d = t(592125),
    h = t(430824),
    v = t(305298),
    g = t(405613),
    m = t(460838),
    x = t(765305),
    p = t(388032),
    C = t(602872);
function j(e) {
    var n;
    let { transitionState: t, event: j, onSuccess: f, onClose: y } = e,
        { guild_id: N, privacy_level: k } = j,
        E = (0, a.e7)([d.Z], () => d.Z.getChannel(j.channel_id), [j]),
        b = (0, a.e7)([h.Z], () => h.Z.getGuild(N), [N]),
        { canManageGuildEvent: w } = (0, o.XJ)(null != E ? E : b),
        I = w(j),
        S = (0, a.e7)([c.Z], () => c.Z.isLurking(N), [N]),
        Z = j.entity_type === x.WX.STAGE_INSTANCE,
        [O, _] = l.useState(Z),
        [T, { loading: L, error: P }] = (0, v.Z)();
    if (!I) return null;
    let G = k === x.j8.PUBLIC ? p.intl.string(p.t.HhlaLC) : p.intl.string(p.t.GI3xXV),
        A = () => {
            null == f || f(), y(), (0, u.Ku)(!1);
        },
        X = async () => {
            await T(j, O, { onSuccess: A });
        };
    return (0, i.jsxs)(r.Modal, {
        transitionState: t,
        onClose: y,
        title: j.name,
        subtitle: p.intl.format(p.t.UMajoq, {
            privacyLevel: G,
            privacyLevelHook: (e, n) =>
                k !== x.j8.PUBLIC
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
        actions: [
            {
                variant: "secondary",
                text: p.intl.string(p.t.CZGqeX),
                onClick: () => {
                    y();
                },
            },
            {
                variant: "active",
                text: p.intl.string(p.t.cK1GGR),
                onClick: X,
                loading: L,
            },
        ],
        children: [
            (0, i.jsx)(m.Z, {
                guild: b,
                channel: E,
                name: j.name,
                description: null != (n = j.description) ? n : void 0,
                imageSource: (0, g.Z)(j),
                isActive: !1,
                isUserLurking: S,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: j,
            }),
            Z &&
                (0, i.jsx)("div", {
                    className: C.verticalSpacing,
                    children: (0, i.jsx)(r.XZJ, {
                        checked: O,
                        onChange: (e) => _(e),
                        label: p.intl.string(p.t.dGNtgI),
                        labelType: "secondary",
                    }),
                }),
            null != P && null != P.getAnyErrorMessage()
                ? (0, i.jsx)(s.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      className: C.errorMessage,
                      children: P.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
