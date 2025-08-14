n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(665149),
    s = n(892001),
    l = n(650774),
    c = n(430824),
    u = n(496675),
    d = n(709054),
    f = n(826581),
    _ = n(246364),
    p = n(360328),
    h = n(981631),
    m = n(388032),
    g = n(482722);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: E = !1 } = e,
        y = d.default.cast(t),
        {
            joinRequest: v,
            isModmin: I,
            guildId: T,
            maxMembers: S,
        } = (0, i.cj)([f.Z, c.Z, u.Z], () => {
            let e = f.Z.getRequest(y),
                t = c.Z.getGuild(null == e ? void 0 : e.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && u.Z.can(h.Plq.KICK_MEMBERS, t),
                guildId: null == t ? void 0 : t.id,
                maxMembers: null == t ? void 0 : t.maxMembers,
            };
        }),
        A = (0, i.e7)([l.Z], () => (null != T ? l.Z.getMemberCount(T) : 0)),
        N = null != S && (null != A ? A : 0) >= S,
        {
            approveRequest: C,
            rejectRequest: R,
            submitting: P,
        } = (0, p.s)(
            null == v ? void 0 : v.guildId,
            null == v ? void 0 : v.userId,
            null == v ? void 0 : v.joinRequestId,
        );
    if (null == v || v.applicationStatus !== _.wB.SUBMITTED || !I) return null;
    let w = () => {
        (0, s.openUserProfileModal)({
            userId: v.userId,
            guildId: v.guildId,
        });
    };
    return (0, r.jsxs)("div", {
        className: g.buttons,
        children: [
            (0, r.jsx)(o.ua7, {
                text: m.intl.string(m.t.cdPGbG),
                shouldShow: N,
                children: (e) =>
                    (0, r.jsx)(
                        o.zxk,
                        O(
                            b(
                                {
                                    variant: "active",
                                    size: "sm",
                                    text: m.intl.string(m.t.BzjDQE),
                                },
                                e,
                            ),
                            {
                                loading: P,
                                onClick: C,
                                disabled: N,
                            },
                        ),
                    ),
            }),
            (0, r.jsx)(o.zxk, {
                variant: "critical-primary",
                size: "sm",
                text: m.intl.string(m.t.hDtbs7),
                onClick: R,
                disabled: P || v.applicationStatus !== _.wB.SUBMITTED,
            }),
            n &&
                (0, r.jsx)(o.zxk, {
                    onClick: w,
                    variant: "secondary",
                    size: "sm",
                    text: m.intl.string(m.t.iXAna2),
                }),
            E && (0, r.jsx)(a.ZP.Divider, {}),
        ],
    });
}
