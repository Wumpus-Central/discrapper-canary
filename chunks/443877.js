(n.d(t, { Z: () => g }), n(388685));
var r = n(442837),
    i = n(715903),
    o = n(71619),
    a = n(41776),
    s = n(665906),
    l = n(271383),
    c = n(607744),
    u = n(496675),
    d = n(432376),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let t = null == e ? void 0 : e.guild_id,
        n = (0, r.e7)([c.Z], () => null == t || c.Z.canChatInGuild(t), [t]),
        _ = (0, r.e7)([a.Z], () => null != t && a.Z.isLurking(t), [t]),
        h = (0, r.e7)([l.ZP], () => null != t && l.ZP.isCurrentUserGuest(t), [t]),
        g = (0, r.e7)([u.Z], () => n && u.Z.can(f.Plq.ADD_REACTIONS, e), [n, e]),
        E = (0, i.ux)(t),
        [, b] = (0, o.AB)(t),
        y = (0, s.$R)(e);
    if (null == e)
        return {
            disableReactionReads: !0,
            disableReactionCreates: !0,
            disableReactionUpdates: !0,
            isLurking: !1,
            isGuest: !1,
            isPendingMember: !1
        };
    let O = (0, d.Z)({
        channel: e,
        canChat: n,
        renderReactions: !0,
        canAddNewReactions: g,
        isLurking: _,
        isGuest: h,
        communicationDisabled: b,
        isActiveChannelOrUnarchivableThread: y,
        isAutomodQuarantined: E
    });
    return m(p({}, O), {
        isLurking: _,
        isGuest: h,
        isPendingMember: !1
    });
}
