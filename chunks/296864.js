i.r(e),
    i.d(e, {
        default: function () {
            return k;
        }
    }),
    i(47120);
var l = i(200651),
    t = i(192379),
    a = i(120356),
    r = i.n(a),
    s = i(442837),
    c = i(481060),
    o = i(313201),
    u = i(41776),
    d = i(357156),
    h = i(513449),
    v = i(592125),
    x = i(430824),
    m = i(305298),
    C = i(405613),
    g = i(460838),
    N = i(765305),
    j = i(388032),
    p = i(393219);
function k(n) {
    var e;
    let { transitionState: i, event: a, onSuccess: k, onClose: f } = n,
        I = (0, o.Dt)(),
        { guild_id: E, privacy_level: y } = a,
        T = (0, s.e7)([v.Z], () => v.Z.getChannel(a.channel_id), [a]),
        Z = (0, s.e7)([x.Z], () => x.Z.getGuild(E), [E]),
        { canManageGuildEvent: w } = (0, d.XJ)(null != T ? T : Z),
        b = w(a),
        _ = (0, s.e7)([u.Z], () => u.Z.isLurking(E), [E]),
        S = a.entity_type === N.WX.STAGE_INSTANCE,
        [A, G] = t.useState(S),
        [L, { loading: R, error: X }] = (0, m.Z)();
    if (!b) return null;
    let M = y === N.j8.PUBLIC ? j.intl.string(j.t.HhlaLC) : j.intl.string(j.t.GI3xXV),
        P = () => {
            null == k || k(), f(), (0, h.Ku)(!1);
        },
        W = async () => {
            await L(a, A, { onSuccess: P });
        };
    return (0, l.jsx)(c.ModalRoot, {
        transitionState: i,
        'aria-labelledby': I,
        children: (0, l.jsxs)(c.ModalContent, {
            className: p.content,
            children: [
                (0, l.jsx)('div', {
                    className: p.previewCard,
                    children: (0, l.jsx)(g.Z, {
                        guild: Z,
                        channel: T,
                        name: a.name,
                        description: null !== (e = a.description) && void 0 !== e ? e : void 0,
                        imageSource: (0, C.Z)(a),
                        isActive: !1,
                        isUserLurking: _,
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
                        privacyLevel: M,
                        privacyLevelHook: (n, e) =>
                            y !== N.j8.PUBLIC
                                ? null
                                : (0, l.jsxs)(
                                      'div',
                                      {
                                          className: p.privacyLevel,
                                          children: [
                                              (0, l.jsx)(c.GlobeEarthIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: p.publicIcon
                                              }),
                                              (0, l.jsx)(c.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: n
                                              })
                                          ]
                                      },
                                      e
                                  )
                    })
                }),
                (0, l.jsx)(c.Heading, {
                    variant: 'heading-xl/semibold',
                    className: p.header,
                    children: a.name
                }),
                S &&
                    (0, l.jsx)(c.Checkbox, {
                        className: p.verticalSpacing,
                        type: c.Checkbox.Types.INVERTED,
                        value: A,
                        onChange: (n) => {
                            let { currentTarget: e } = n;
                            return G(e.checked);
                        },
                        children: (0, l.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            children: j.intl.string(j.t.dGNtgI)
                        })
                    }),
                (0, l.jsxs)('div', {
                    className: r()(p.inline, p.buttons, p.verticalSpacing),
                    children: [
                        (0, l.jsx)(c.Button, {
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                                f();
                            },
                            className: r()(p.button, p.spacing),
                            children: j.intl.string(j.t.CZGqeX)
                        }),
                        (0, l.jsx)(c.Button, {
                            color: c.Button.Colors.GREEN,
                            onClick: W,
                            submitting: R,
                            className: p.button,
                            children: j.intl.string(j.t.cK1GGR)
                        })
                    ]
                }),
                null != X && null != X.getAnyErrorMessage()
                    ? (0, l.jsx)(c.Text, {
                          color: 'text-danger',
                          variant: 'text-sm/normal',
                          className: p.errorMessage,
                          children: X.getAnyErrorMessage()
                      })
                    : null
            ]
        })
    });
}
