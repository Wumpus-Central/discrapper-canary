var n = i(855986),
    l = i(229527),
    a = i(870136),
    s = i(857071),
    d = i(406704),
    r = i(696451),
    u = i(834942),
    o = i(576705),
    c = i(707985),
    m = i(652215);
i.d(
    t,
    {},
    {
        A: function (e) {
            let t = e?.guild_id,
                i = (0, n.bG)([u.A], () => null == t || u.A.canChatInGuild(t), [t]),
                g = (0, n.bG)([s.A], () => null != t && s.A.isLurking(t), [t]),
                I = (0, n.bG)([r.Ay], () => null != t && r.Ay.isCurrentUserGuest(t), [t]),
                A = (0, n.bG)([o.A], () => i && o.A.can(m.xBc.ADD_REACTIONS, e), [i, e]),
                f = (0, l.ix)(t),
                [, h] = (0, a.c)(t),
                N = (0, d.Id)(e);
            return null == e
                ? {
                      disableReactionReads: !0,
                      disableReactionCreates: !0,
                      disableReactionUpdates: !0,
                      isLurking: !1,
                      isGuest: !1,
                      isPendingMember: !1,
                  }
                : {
                      ...(0, c.A)({
                          channel: e,
                          canChat: i,
                          renderReactions: !0,
                          canAddNewReactions: A,
                          isLurking: g,
                          communicationDisabled: h,
                          isActiveChannelOrUnarchivableThread: N,
                          isAutomodQuarantined: f,
                      }),
                      isLurking: g,
                      isGuest: I,
                      isPendingMember: !1,
                  };
        },
    },
);
