n.d(t, { Z: () => N }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(493683),
    l = n(447543),
    c = n(904245),
    u = n(159300),
    d = n(592125),
    f = n(984933),
    p = n(430824),
    _ = n(496675),
    m = n(699516),
    h = n(771845),
    g = n(594174),
    E = n(981631),
    b = n(388032);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = "max_uses",
    T = "User Invite Context Menu",
    A = "context_menu";
function C(e, t) {
    s.Z.ensurePrivateChannel(e).then((e) => {
        null != d.Z.getChannel(e) && c.Z.sendInvite(e, t, A, { source: E.t4x.GUILD_CONTEXT_MENU });
    });
}
function N(e) {
    let { user: t, guildId: n, onAction: s } = e,
        c = (0, a.e7)([g.default], () => g.default.getCurrentUser(), []),
        d = (0, a.Wu)([h.ZP, p.Z, _.Z], () => {
            let e = h.ZP.getFlattenedGuildIds(),
                t = [];
            return (
                e.forEach((e) => {
                    let r = p.Z.getGuild(e);
                    null != r && (0, u.b)(_.Z, r) && r.id !== n && t.push(r);
                }),
                t
            );
        }, [n]),
        [y, v] = i.useState({});
    function A(e, t) {
        let n = f.ZP.getDefaultChannel(e.id, !0, E.Plq.CREATE_INSTANT_INVITE);
        if (null != n) {
            if ((v(S(O({}, y), { [e.id]: !0 })), !_.Z.can(E.Plq.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode))
                return void C(t, e.vanityURLCode);
            l.ZP.createInvite(
                n.id,
                {
                    [I]: 1,
                    unique: !0,
                },
                T,
            ).then((e) => C(t, e.code));
        }
    }
    return (null == c ? void 0 : c.id) === t.id || t.bot || 0 === d.length || m.Z.isBlockedOrIgnored(t.id)
        ? null
        : (0, r.jsx)(o.sNh, {
              id: "invite-to-server",
              label: b.intl.string(b.t.Sd8Ixw),
              children: d.map((e) =>
                  y[e.id]
                      ? (0, r.jsx)(
                            o.sNh,
                            {
                                id: e.id,
                                disabled: !0,
                                label: b.intl.string(b.t.PuLLzP),
                            },
                            e.id,
                        )
                      : (0, r.jsx)(
                            o.sNh,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    null == s || s(), A(e, t.id);
                                },
                            },
                            e.id,
                        ),
              ),
          });
}
