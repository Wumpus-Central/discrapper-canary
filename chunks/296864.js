i.d(n, { default: () => k }), i(47120);
var l = i(200651),
    t = i(192379),
    a = i(120356),
    s = i.n(a),
    r = i(442837),
    c = i(481060),
    o = i(313201),
    d = i(41776),
    u = i(357156),
    h = i(513449),
    v = i(592125),
    x = i(430824),
    m = i(305298),
    g = i(405613),
    C = i(460838),
    N = i(765305),
    j = i(388032),
    p = i(618575);
function k(e) {
    var n;
    let { transitionState: i, event: a, onSuccess: k, onClose: E } = e,
        I = (0, o.Dt)(),
        { guild_id: Z, privacy_level: y } = a,
        f = (0, r.e7)([v.Z], () => v.Z.getChannel(a.channel_id), [a]),
        T = (0, r.e7)([x.Z], () => x.Z.getGuild(Z), [Z]),
        { canManageGuildEvent: w } = (0, u.XJ)(null != f ? f : T),
        _ = w(a),
        S = (0, r.e7)([d.Z], () => d.Z.isLurking(Z), [Z]),
        A = a.entity_type === N.WX.STAGE_INSTANCE,
        [G, L] = t.useState(A),
        [b, { loading: X, error: R }] = (0, m.Z)();
    if (!_) return null;
    let P = y === N.j8.PUBLIC ? j.intl.string(j.t.HhlaLC) : j.intl.string(j.t.GI3xXV),
        M = () => {
            null == k || k(), E(), (0, h.Ku)(!1);
        },
        z = async () => {
            await b(a, G, { onSuccess: M });
        };
    return (0, l.jsx)(c.Y0X, {
        transitionState: i,
        'aria-labelledby': I,
        children: (0, l.jsxs)(c.hzk, {
            className: p.content,
            children: [
                (0, l.jsx)('div', {
                    className: p.previewCard,
                    children: (0, l.jsx)(C.Z, {
                        guild: T,
                        channel: f,
                        name: a.name,
                        description: null !== (n = a.description) && void 0 !== n ? n : void 0,
                        imageSource: (0, g.Z)(a),
                        isActive: !1,
                        isUserLurking: S,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEvent: a
                    })
                }),
                (0, l.jsx)(c.Text, {
                    color: 'header-secondary',
                    className: p.privacyLevel,
                    variant: 'text-sm/normal',
                    children: j.intl.format(j.t.UMajoq, {
                        privacyLevel: P,
                        privacyLevelHook: (e, n) =>
                            y !== N.j8.PUBLIC
                                ? null
                                : (0, l.jsxs)(
                                      'div',
                                      {
                                          className: p.privacyLevel,
                                          children: [
                                              (0, l.jsx)(c.enf, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: p.publicIcon
                                              }),
                                              (0, l.jsx)(c.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: e
                                              })
                                          ]
                                      },
                                      n
                                  )
                    })
                }),
                (0, l.jsx)(c.X6q, {
                    variant: 'heading-xl/semibold',
                    className: p.header,
                    children: a.name
                }),
                A &&
                    (0, l.jsx)(c.XZJ, {
                        className: p.verticalSpacing,
                        type: c.XZJ.Types.INVERTED,
                        value: G,
                        onChange: (e) => {
                            let { currentTarget: n } = e;
                            return L(n.checked);
                        },
                        children: (0, l.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: j.intl.string(j.t.dGNtgI)
                        })
                    }),
                (0, l.jsxs)('div', {
                    className: s()(p.inline, p.buttons, p.verticalSpacing),
                    children: [
                        (0, l.jsx)(c.zxk, {
                            color: c.zxk.Colors.PRIMARY,
                            onClick: () => {
                                E();
                            },
                            className: s()(p.button, p.spacing),
                            children: j.intl.string(j.t.CZGqeX)
                        }),
                        (0, l.jsx)(c.zxk, {
                            color: c.zxk.Colors.GREEN,
                            onClick: z,
                            submitting: X,
                            className: p.button,
                            children: j.intl.string(j.t.cK1GGR)
                        })
                    ]
                }),
                null != R && null != R.getAnyErrorMessage()
                    ? (0, l.jsx)(c.Text, {
                          color: 'text-danger',
                          variant: 'text-sm/normal',
                          className: p.errorMessage,
                          children: R.getAnyErrorMessage()
                      })
                    : null
            ]
        })
    });
}
