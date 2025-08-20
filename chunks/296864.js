t.d(n, { default: () => j }), t(388685), t(953529);
var i = t(951288),
    l = t(647438),
    r = t(442837),
    a = t(82659),
    s = t(481060),
    c = t(41776),
    o = t(357156),
    u = t(513449),
    d = t(592125),
    h = t(430824),
    v = t(305298),
    m = t(405613),
    x = t(460838),
    g = t(765305),
    C = t(388032),
    p = t(602872);
function j(e) {
    var n;
    let { transitionState: t, event: j, onSuccess: f, onClose: N } = e,
        { guild_id: y, privacy_level: k } = j,
        E = (0, r.e7)([d.Z], () => d.Z.getChannel(j.channel_id), [j]),
        w = (0, r.e7)([h.Z], () => h.Z.getGuild(y), [y]),
        { canManageGuildEvent: b } = (0, o.XJ)(null != E ? E : w),
        I = b(j),
        Z = (0, r.e7)([c.Z], () => c.Z.isLurking(y), [y]),
        S = j.entity_type === g.WX.STAGE_INSTANCE,
        [O, _] = l.useState(S),
        [T, { loading: P, error: A }] = (0, v.Z)();
    if (!I) return null;
    let G = k === g.j8.PUBLIC ? C.intl.string(C.t.HhlaLC) : C.intl.string(C.t.GI3xXV),
        L = () => {
            null == f || f(), N(), (0, u.Ku)(!1);
        },
        X = async () => {
            await T(j, O, { onSuccess: L });
        };
    return (0, i.jsxs)(a.Modal, {
        transitionState: t,
        onClose: N,
        title: j.name,
        subtitle: C.intl.format(C.t.UMajoq, {
            privacyLevel: G,
            privacyLevelHook: (e, n) =>
                k !== g.j8.PUBLIC
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: p.privacyLevel,
                              children: [
                                  (0, i.jsx)(s.enf, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: p.publicIcon,
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
                text: C.intl.string(C.t.CZGqeX),
                onClick: () => {
                    N();
                },
            },
            {
                variant: "active",
                text: C.intl.string(C.t.cK1GGR),
                onClick: X,
                loading: P,
            },
        ],
        children: [
            (0, i.jsx)(x.Z, {
                guild: w,
                channel: E,
                name: j.name,
                description: null != (n = j.description) ? n : void 0,
                imageSource: (0, m.Z)(j),
                isActive: !1,
                isUserLurking: Z,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: j,
            }),
            S &&
                (0, i.jsx)(s.XZJ, {
                    className: p.verticalSpacing,
                    type: s.XZJ.Types.INVERTED,
                    value: O,
                    onChange: (e) => {
                        let { currentTarget: n } = e;
                        return _(n.checked);
                    },
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: C.intl.string(C.t.dGNtgI),
                    }),
                }),
            null != A && null != A.getAnyErrorMessage()
                ? (0, i.jsx)(s.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      className: p.errorMessage,
                      children: A.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
