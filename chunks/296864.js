(t.d(n, { default: () => j }), t(388685), t(953529));
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
    g = t(460838),
    x = t(765305),
    p = t(388032),
    C = t(817576);
function j(e) {
    var n;
    let { transitionState: t, event: j, onSuccess: N, onClose: f } = e,
        { guild_id: y, privacy_level: k } = j,
        E = (0, r.e7)([d.Z], () => d.Z.getChannel(j.channel_id), [j]),
        b = (0, r.e7)([h.Z], () => h.Z.getGuild(y), [y]),
        { canManageGuildEvent: w } = (0, o.XJ)(null != E ? E : b),
        I = w(j),
        Z = (0, r.e7)([c.Z], () => c.Z.isLurking(y), [y]),
        S = j.entity_type === x.WX.STAGE_INSTANCE,
        [T, O] = l.useState(S),
        [_, { loading: P, error: G }] = (0, v.Z)();
    if (!I) return null;
    let A = k === x.j8.PUBLIC ? p.intl.string(p.t.HhlaLC) : p.intl.string(p.t.GI3xXV),
        L = () => {
            (null == N || N(), f(), (0, u.Ku)(!1));
        },
        X = async () => {
            await _(j, T, { onSuccess: L });
        };
    return (0, i.jsxs)(a.Modal, {
        transitionState: t,
        onClose: f,
        title: j.name,
        subtitle: p.intl.format(p.t.UMajoq, {
            privacyLevel: A,
            privacyLevelHook: (e, n) =>
                k !== x.j8.PUBLIC
                    ? null
                    : (0, i.jsxs)(
                          'div',
                          {
                              className: C.privacyLevel,
                              children: [
                                  (0, i.jsx)(s.enf, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: C.publicIcon
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/normal',
                                      children: e
                                  })
                              ]
                          },
                          n
                      )
        }),
        actions: [
            {
                variant: 'secondary',
                text: p.intl.string(p.t.CZGqeX),
                onClick: () => {
                    f();
                }
            },
            {
                variant: 'active',
                text: p.intl.string(p.t.cK1GGR),
                onClick: X,
                loading: P
            }
        ],
        children: [
            (0, i.jsx)(g.Z, {
                guild: b,
                channel: E,
                name: j.name,
                description: null != (n = j.description) ? n : void 0,
                imageSource: (0, m.Z)(j),
                isActive: !1,
                isUserLurking: Z,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: j
            }),
            S &&
                (0, i.jsx)(s.XZJ, {
                    className: C.verticalSpacing,
                    type: s.XZJ.Types.INVERTED,
                    value: T,
                    onChange: (e) => {
                        let { currentTarget: n } = e;
                        return O(n.checked);
                    },
                    children: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: p.intl.string(p.t.dGNtgI)
                    })
                }),
            null != G && null != G.getAnyErrorMessage()
                ? (0, i.jsx)(s.Text, {
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      className: C.errorMessage,
                      children: G.getAnyErrorMessage()
                  })
                : null
        ]
    });
}
