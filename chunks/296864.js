(t.d(n, { default: () => f }), t(388685), t(953529));
var i = t(255367),
    l = t(73800),
    a = t(120356),
    r = t.n(a),
    s = t(442837),
    c = t(755721),
    o = t(481060),
    u = t(313201),
    d = t(41776),
    h = t(357156),
    v = t(513449),
    m = t(592125),
    x = t(430824),
    g = t(305298),
    p = t(405613),
    j = t(460838),
    C = t(765305),
    N = t(388032),
    y = t(817576);
function f(e) {
    var n;
    let { transitionState: t, event: a, onSuccess: f, onClose: b } = e,
        E = (0, u.Dt)(),
        { guild_id: k, privacy_level: w } = a,
        I = (0, s.e7)([m.Z], () => m.Z.getChannel(a.channel_id), [a]),
        Z = (0, s.e7)([x.Z], () => x.Z.getGuild(k), [k]),
        { canManageGuildEvent: S } = (0, h.XJ)(null != I ? I : Z),
        T = S(a),
        O = (0, s.e7)([d.Z], () => d.Z.isLurking(k), [k]),
        _ = a.entity_type === C.WX.STAGE_INSTANCE,
        [P, A] = l.useState(_),
        [G, { loading: L, error: X }] = (0, g.Z)();
    if (!T) return null;
    let R = w === C.j8.PUBLIC ? N.intl.string(N.t.HhlaLC) : N.intl.string(N.t.GI3xXV),
        M = () => {
            (null == f || f(), b(), (0, v.Ku)(!1));
        },
        z = async () => {
            await G(a, P, { onSuccess: M });
        };
    return (0, i.jsx)(o.Y0X, {
        transitionState: t,
        'aria-labelledby': E,
        parentComponent: 'StartEventModal',
        children: (0, i.jsxs)(o.hzk, {
            className: y.content,
            children: [
                (0, i.jsx)('div', {
                    className: y.previewCard,
                    children: (0, i.jsx)(j.Z, {
                        guild: Z,
                        channel: I,
                        name: a.name,
                        description: null != (n = a.description) ? n : void 0,
                        imageSource: (0, p.Z)(a),
                        isActive: !1,
                        isUserLurking: O,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEvent: a
                    })
                }),
                (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    className: y.privacyLevel,
                    variant: 'text-sm/normal',
                    children: N.intl.format(N.t.UMajoq, {
                        privacyLevel: R,
                        privacyLevelHook: (e, n) =>
                            w !== C.j8.PUBLIC
                                ? null
                                : (0, i.jsxs)(
                                      'div',
                                      {
                                          className: y.privacyLevel,
                                          children: [
                                              (0, i.jsx)(o.enf, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: y.publicIcon
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: e
                                              })
                                          ]
                                      },
                                      n
                                  )
                    })
                }),
                (0, i.jsx)(o.X6q, {
                    variant: 'heading-xl/semibold',
                    className: y.header,
                    children: a.name
                }),
                _ &&
                    (0, i.jsx)(o.XZJ, {
                        className: y.verticalSpacing,
                        type: o.XZJ.Types.INVERTED,
                        value: P,
                        onChange: (e) => {
                            let { currentTarget: n } = e;
                            return A(n.checked);
                        },
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: N.intl.string(N.t.dGNtgI)
                        })
                    }),
                (0, i.jsxs)('div', {
                    className: r()(y.inline, y.buttons, y.verticalSpacing),
                    children: [
                        (0, i.jsx)(c.zx, {
                            color: c.zx.Colors.PRIMARY,
                            onClick: () => {
                                b();
                            },
                            className: r()(y.button, y.spacing),
                            children: N.intl.string(N.t.CZGqeX)
                        }),
                        (0, i.jsx)(c.zx, {
                            color: c.zx.Colors.GREEN,
                            onClick: z,
                            submitting: L,
                            className: y.button,
                            children: N.intl.string(N.t.cK1GGR)
                        })
                    ]
                }),
                null != X && null != X.getAnyErrorMessage()
                    ? (0, i.jsx)(o.Text, {
                          color: 'text-danger',
                          variant: 'text-sm/normal',
                          className: y.errorMessage,
                          children: X.getAnyErrorMessage()
                      })
                    : null
            ]
        })
    });
}
