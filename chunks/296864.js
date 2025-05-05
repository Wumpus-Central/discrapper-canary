i.d(n, { default: () => y }), i(388685), i(953529);
var t = i(255367),
    l = i(73800),
    a = i(120356),
    r = i.n(a),
    s = i(442837),
    c = i(481060),
    o = i(313201),
    u = i(41776),
    d = i(357156),
    h = i(513449),
    v = i(592125),
    m = i(430824),
    x = i(305298),
    g = i(405613),
    j = i(460838),
    p = i(765305),
    C = i(388032),
    N = i(817576);
function y(e) {
    var n;
    let { transitionState: i, event: a, onSuccess: y, onClose: f } = e,
        k = (0, o.Dt)(),
        { guild_id: b, privacy_level: E } = a,
        w = (0, s.e7)([v.Z], () => v.Z.getChannel(a.channel_id), [a]),
        I = (0, s.e7)([m.Z], () => m.Z.getGuild(b), [b]),
        { canManageGuildEvent: Z } = (0, d.XJ)(null != w ? w : I),
        S = Z(a),
        T = (0, s.e7)([u.Z], () => u.Z.isLurking(b), [b]),
        O = a.entity_type === p.WX.STAGE_INSTANCE,
        [_, P] = l.useState(O),
        [A, { loading: G, error: L }] = (0, x.Z)();
    if (!S) return null;
    let X = E === p.j8.PUBLIC ? C.intl.string(C.t.HhlaLC) : C.intl.string(C.t.GI3xXV),
        R = () => {
            null == y || y(), f(), (0, h.Ku)(!1);
        },
        M = async () => {
            await A(a, _, { onSuccess: R });
        };
    return (0, t.jsx)(c.Y0X, {
        transitionState: i,
        'aria-labelledby': k,
        children: (0, t.jsxs)(c.hzk, {
            className: N.content,
            children: [
                (0, t.jsx)('div', {
                    className: N.previewCard,
                    children: (0, t.jsx)(j.Z, {
                        guild: I,
                        channel: w,
                        name: a.name,
                        description: null != (n = a.description) ? n : void 0,
                        imageSource: (0, g.Z)(a),
                        isActive: !1,
                        isUserLurking: T,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEvent: a
                    })
                }),
                (0, t.jsx)(c.Text, {
                    color: 'header-secondary',
                    className: N.privacyLevel,
                    variant: 'text-sm/normal',
                    children: C.intl.format(C.t.UMajoq, {
                        privacyLevel: X,
                        privacyLevelHook: (e, n) =>
                            E !== p.j8.PUBLIC
                                ? null
                                : (0, t.jsxs)(
                                      'div',
                                      {
                                          className: N.privacyLevel,
                                          children: [
                                              (0, t.jsx)(c.enf, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: N.publicIcon
                                              }),
                                              (0, t.jsx)(c.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: e
                                              })
                                          ]
                                      },
                                      n
                                  )
                    })
                }),
                (0, t.jsx)(c.X6q, {
                    variant: 'heading-xl/semibold',
                    className: N.header,
                    children: a.name
                }),
                O &&
                    (0, t.jsx)(c.XZJ, {
                        className: N.verticalSpacing,
                        type: c.XZJ.Types.INVERTED,
                        value: _,
                        onChange: (e) => {
                            let { currentTarget: n } = e;
                            return P(n.checked);
                        },
                        children: (0, t.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: C.intl.string(C.t.dGNtgI)
                        })
                    }),
                (0, t.jsxs)('div', {
                    className: r()(N.inline, N.buttons, N.verticalSpacing),
                    children: [
                        (0, t.jsx)(c.zxk, {
                            color: c.zxk.Colors.PRIMARY,
                            onClick: () => {
                                f();
                            },
                            className: r()(N.button, N.spacing),
                            children: C.intl.string(C.t.CZGqeX)
                        }),
                        (0, t.jsx)(c.zxk, {
                            color: c.zxk.Colors.GREEN,
                            onClick: M,
                            submitting: G,
                            className: N.button,
                            children: C.intl.string(C.t.cK1GGR)
                        })
                    ]
                }),
                null != L && null != L.getAnyErrorMessage()
                    ? (0, t.jsx)(c.Text, {
                          color: 'text-danger',
                          variant: 'text-sm/normal',
                          className: N.errorMessage,
                          children: L.getAnyErrorMessage()
                      })
                    : null
            ]
        })
    });
}
