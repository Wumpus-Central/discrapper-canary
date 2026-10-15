l.d(n, { A: () => h });
var t = l(477900),
    a = l(582128),
    r = l(17928),
    i = l(919395),
    s = l(252732),
    u = l(696451),
    o = l(841183),
    d = l(84540),
    c = l(836602),
    g = l(342866),
    v = l(569059),
    f = l(105292);
function h(e) {
    let { user: n, guildId: l, disabled: h, errorMessageId: p } = e,
        b = a.useRef(null),
        {
            pendingAvatar: m,
            accessibleValue: A,
            currentProfileAvatarHash: I,
            hasMainProfileFallback: C,
        } = (function (e, n) {
            let { pendingAvatar: l, currentProfileAvatarHash: t } = (0, r.cf)(
                    [c.A, u.Ay],
                    () => ({
                        pendingAvatar: c.A.getPendingChanges(n ?? void 0).pendingAvatar,
                        currentProfileAvatarHash: null != n ? u.Ay.getMember(n, e.id)?.avatar : e.avatar,
                    }),
                    [n, e],
                ),
                a = null != n,
                i = null != e.avatar;
            return {
                pendingAvatar: l,
                accessibleValue: (0, o.Fk)(l, t),
                currentProfileAvatarHash: t,
                hasMainProfileFallback: a && i,
            };
        })(n, l),
        y = (0, i.z5)(m, I)
            ? {
                  onClick: () => {
                      ((0, s.rM)(null, I, (e) => (0, d.p)({ guildId: l ?? void 0, avatar: e })),
                          (0, i.WU)(C ? "reset" : "remove"));
                  },
                  type: C ? "reset" : "remove",
                  accessibleLabel: f.intl.string(C ? f.t.Y0mxy1 : f.t.twB3fz),
              }
            : void 0,
        k = (0, v._)({ guildId: l, returnRef: b });
    return (0, t.jsx)(g.A, {
        buttonRef: b,
        userId: n.id,
        guildId: l,
        avatarChange: m,
        accessibleValue: A,
        variant: "square",
        affordance: y,
        onClick: k,
        "aria-haspopup": "dialog",
        disabled: h,
        errorMessageId: p,
    });
}
