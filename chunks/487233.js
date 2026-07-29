l.d(n, { A: () => f });
var t = l(477900),
    a = l(582128),
    r = l(17928),
    i = l(919395),
    s = l(252732),
    u = l(696451),
    o = l(84540),
    d = l(836602),
    c = l(342866),
    g = l(569059),
    v = l(375708);
function f(e) {
    let { user: n, guildId: l, disabled: f, errorMessageId: h } = e,
        p = a.useRef(null),
        {
            pendingAvatar: m,
            accessibleValue: b,
            currentProfileAvatarHash: A,
            hasMainProfileFallback: I,
        } = (function (e, n) {
            let { pendingAvatar: l, currentProfileAvatarHash: t } = (0, r.cf)(
                    [d.A, u.Ay],
                    () => ({
                        pendingAvatar: d.A.getPendingChanges(n ?? void 0).pendingAvatar,
                        currentProfileAvatarHash: null != n ? u.Ay.getMember(n, e.id)?.avatar : e.avatar,
                    }),
                    [n, e],
                ),
                a = null != n,
                i = null != e.avatar;
            return {
                pendingAvatar: l,
                accessibleValue: (0, c.$)(l, t),
                currentProfileAvatarHash: t,
                hasMainProfileFallback: a && i,
            };
        })(n, l),
        C = (0, i.z5)(m, A)
            ? {
                  onClick: () => {
                      (0, s.rM)(null, A, (e) => (0, o.p)({ guildId: l ?? void 0, avatar: e })),
                          (0, i.WU)(I ? "reset" : "remove");
                  },
                  type: I ? "reset" : "remove",
                  accessibleLabel: v.intl.string(I ? v.t.Y0mxy1 : v.t.twB3fz),
              }
            : void 0,
        x = (0, g._)({ guildId: l, returnRef: p });
    return (0, t.jsx)(c.A, {
        buttonRef: p,
        userId: n.id,
        guildId: l,
        avatarChange: m,
        accessibleValue: b,
        variant: "square",
        affordance: C,
        onClick: x,
        "aria-haspopup": "dialog",
        disabled: f,
        errorMessageId: h,
    });
}
