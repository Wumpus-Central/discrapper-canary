t.d(n, { default: () => C }), t(388685), t(953529);
var i = t(255367),
    l = t(73800),
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
    j = t(388032),
    p = t(817576);
function C(e) {
    var n;
    let { transitionState: t, event: C, onSuccess: f, onClose: y } = e,
        { guild_id: N, privacy_level: k } = C,
        b = (0, r.e7)([d.Z], () => d.Z.getChannel(C.channel_id), [C]),
        E = (0, r.e7)([h.Z], () => h.Z.getGuild(N), [N]),
        { canManageGuildEvent: w } = (0, o.XJ)(null != b ? b : E),
        I = w(C),
        O = (0, r.e7)([c.Z], () => c.Z.isLurking(N), [N]),
        S = C.entity_type === g.WX.STAGE_INSTANCE,
        [Z, T] = l.useState(S),
        [_, { loading: G, error: P }] = (0, v.Z)();
    if (!I) return null;
    let A = k === g.j8.PUBLIC ? j.intl.string(j.t.HhlaLC) : j.intl.string(j.t.GI3xXV),
        L = () => {
            null == f || f(), y(), (0, u.Ku)(!1);
        },
        X = async () => {
            await _(C, Z, { onSuccess: L });
        };
    return (0, i.jsxs)(a.Modal, {
        transitionState: t,
        onClose: y,
        title: C.name,
        subtitle: j.intl.format(j.t.UMajoq, {
            privacyLevel: A,
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
                text: j.intl.string(j.t.CZGqeX),
                onClick: () => {
                    y();
                },
            },
            {
                variant: "active",
                text: j.intl.string(j.t.cK1GGR),
                onClick: X,
                loading: G,
            },
        ],
        children: [
            (0, i.jsx)(x.Z, {
                guild: E,
                channel: b,
                name: C.name,
                description: null != (n = C.description) ? n : void 0,
                imageSource: (0, m.Z)(C),
                isActive: !1,
                isUserLurking: O,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: C,
            }),
            S &&
                (0, i.jsx)(s.XZJ, {
                    className: p.verticalSpacing,
                    type: s.XZJ.Types.INVERTED,
                    value: Z,
                    onChange: (e) => {
                        let { currentTarget: n } = e;
                        return T(n.checked);
                    },
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.dGNtgI),
                    }),
                }),
            null != P && null != P.getAnyErrorMessage()
                ? (0, i.jsx)(s.Text, {
                      color: "text-danger",
                      variant: "text-sm/normal",
                      className: p.errorMessage,
                      children: P.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
