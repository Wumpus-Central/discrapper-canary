var n = i(855986),
    s = i(229527),
    l = i(870136),
    a = i(857071),
    r = i(406704),
    d = i(696451),
    o = i(834942),
    u = i(576705),
    c = i(707985),
    m = i(652215);
i.d(
    t,
    {},
    {
        A: function (e) {
            let t = e?.guild_id,
                i = (0, n.bG)([o.A], () => null == t || o.A.canChatInGuild(t), [t]),
                h = (0, n.bG)([a.A], () => null != t && a.A.isLurking(t), [t]),
                p = (0, n.bG)([d.Ay], () => null != t && d.Ay.isCurrentUserGuest(t), [t]),
                A = (0, n.bG)([u.A], () => i && u.A.can(m.xBc.ADD_REACTIONS, e), [i, e]),
                I = (0, s.ix)(t),
                [, g] = (0, l.c)(t),
                f = (0, r.Id)(e);
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
                          isLurking: h,
                          communicationDisabled: g,
                          isActiveChannelOrUnarchivableThread: f,
                          isAutomodQuarantined: I,
                      }),
                      isLurking: h,
                      isGuest: p,
                      isPendingMember: !1,
                  };
        },
    },
);
