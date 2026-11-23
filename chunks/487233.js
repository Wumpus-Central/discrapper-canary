var t = l(477900),
    i = l(582128),
    a = l(855986),
    r = l(919395),
    s = l(468450),
    u = l(696451),
    d = l(841183),
    o = l(84540),
    c = l(836602),
    g = l(342866),
    v = l(569059),
    f = l(792996);
l.d(
    n,
    {},
    {
        A: function (e) {
            let { user: n, guildId: l, disabled: p, errorMessageId: h } = e,
                A = i.useRef(null),
                {
                    pendingAvatar: b,
                    currentValueA11yLabel: m,
                    currentProfileAvatarHash: I,
                    hasMainProfileFallback: y,
                } = (function (e, n) {
                    let { pendingAvatar: l, currentProfileAvatarHash: t } = (0, a.cf)(
                            [c.A, u.Ay],
                            () => ({
                                pendingAvatar: c.A.getPendingChanges(n ?? void 0).pendingAvatar,
                                currentProfileAvatarHash: null != n ? u.Ay.getMember(n, e.id)?.avatar : e.avatar,
                            }),
                            [n, e],
                        ),
                        i = null != n,
                        r = null != e.avatar;
                    return {
                        pendingAvatar: l,
                        currentValueA11yLabel: (0, d.Fk)(l, t),
                        currentProfileAvatarHash: t,
                        hasMainProfileFallback: i && r,
                    };
                })(n, l),
                k = (0, r.z5)(b, I)
                    ? {
                          onClick: () => {
                              ((0, s.rM)(null, I, (e) => (0, o.p)({ guildId: l ?? void 0, avatar: e })),
                                  (0, r.WU)(y ? "reset" : "remove"));
                          },
                          type: y ? "reset" : "remove",
                          accessibleLabel: f.intl.string(y ? f.t.Y0mxy1 : f.t.twB3fz),
                      }
                    : void 0,
                C = (0, v._)({ guildId: l, returnRef: A });
            return (0, t.jsx)(g.A, {
                buttonRef: A,
                userId: n.id,
                guildId: l,
                avatarChange: b,
                currentValueA11yLabel: m,
                variant: "square",
                affordance: k,
                onClick: C,
                "aria-haspopup": "dialog",
                disabled: p,
                errorMessageId: h,
            });
        },
    },
);
