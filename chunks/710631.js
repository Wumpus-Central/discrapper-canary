n.d(t, { Z: () => C }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(493683),
    l = n(447543),
    c = n(904245),
    u = n(159300),
    d = n(592125),
    f = n(984933),
    p = n(430824),
    _ = n(496675),
    h = n(699516),
    m = n(771845),
    g = n(594174),
    E = n(981631),
    v = n(388032);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 'max_uses',
    T = 'User Invite Context Menu',
    N = 'context_menu';
function A(e, t) {
    s.Z.ensurePrivateChannel(e).then((e) => {
        null != d.Z.getChannel(e) && c.Z.sendInvite(e, t, N, null);
    });
}
function C(e) {
    let { user: t, guildId: n, onAction: s } = e,
        c = (0, o.e7)([g.default], () => g.default.getCurrentUser(), []),
        d = (0, o.Wu)(
            [m.ZP, p.Z, _.Z],
            () => {
                let e = m.ZP.getFlattenedGuildIds(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let r = p.Z.getGuild(e);
                        null != r && (0, u.b)(_.Z, r) && r.id !== n && t.push(r);
                    }),
                    t
                );
            },
            [n]
        ),
        [b, O] = i.useState({});
    function N(e, t) {
        let n = f.ZP.getDefaultChannel(e.id, !0, E.Plq.CREATE_INSTANT_INVITE);
        if (null != n) {
            if ((O(S(y({}, b), { [e.id]: !0 })), !_.Z.can(E.Plq.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode)) {
                A(t, e.vanityURLCode);
                return;
            }
            l.Z.createInvite(
                n.id,
                {
                    [I]: 1,
                    unique: !0
                },
                T
            ).then((e) => A(t, e.code));
        }
    }
    return (null == c ? void 0 : c.id) === t.id || t.bot || 0 === d.length || h.Z.isBlockedOrIgnored(t.id)
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'invite-to-server',
              label: v.NW.string(v.t.Sd8Ix8),
              children: d.map((e) =>
                  b[e.id]
                      ? (0, r.jsx)(
                            a.sNh,
                            {
                                id: e.id,
                                disabled: !0,
                                label: v.NW.string(v.t.PuLLzM)
                            },
                            e.id
                        )
                      : (0, r.jsx)(
                            a.sNh,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    null == s || s(), N(e, t.id);
                                }
                            },
                            e.id
                        )
              )
          });
}
