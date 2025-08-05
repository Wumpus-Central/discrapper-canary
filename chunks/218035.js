n.d(t, {
    Z: () => E,
    c: () => g
});
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(87051),
    s = n(729052),
    l = n(9156),
    c = n(621600),
    u = n(981631),
    d = n(388032);
function f(e) {
    return [
        {
            setting: u.bL.NULL,
            label: null != e.parent_id ? d.intl.string(d.t.wlrV1d) : d.intl.string(d.t['1Wn2Mz'])
        },
        {
            setting: u.bL.ALL_MESSAGES,
            label: d.intl.string(d.t['9sGJkp'])
        },
        {
            setting: u.bL.ONLY_MENTIONS,
            label: d.intl.format(d.t.cpcXvb, {})
        },
        {
            setting: u.bL.NO_MESSAGES,
            label: d.intl.string(d.t.CtVGyc)
        }
    ];
}
function _(e) {
    return [
        {
            setting: u.bL.NULL,
            label: null != e.parent_id ? d.intl.string(d.t.wlrV1d) : d.intl.string(d.t['1Wn2Mz'])
        },
        {
            setting: u.bL.ALL_MESSAGES,
            label: d.intl.string(d.t['n/bTaW'])
        },
        {
            setting: u.bL.ONLY_MENTIONS,
            label: d.intl.format(d.t.L2hmY2, {})
        },
        {
            setting: u.bL.NO_MESSAGES,
            label: d.intl.string(d.t.CtVGyc)
        }
    ];
}
function p(e) {
    return [
        {
            setting: u.bL.NULL,
            label: null != e.parent_id ? d.intl.string(d.t.wlrV1d) : d.intl.string(d.t['1Wn2Mz'])
        },
        {
            setting: u.bL.ONLY_MENTIONS,
            label: d.intl.string(d.t['BENn//'])
        },
        {
            setting: u.bL.NO_MESSAGES,
            label: d.intl.string(d.t.CtVGyc)
        }
    ];
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e.type) {
        case u.d4z.GUILD_VOICE:
            return t ? f(e) : null;
        case u.d4z.GUILD_STAGE_VOICE:
            return p(e);
        default:
            return _(e);
    }
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    switch (e) {
        case u.bL.ALL_MESSAGES:
            return t.type === u.d4z.GUILD_VOICE && n ? d.intl.string(d.t['9sGJkp']) : d.intl.string(d.t['n/bTaW']);
        case u.bL.ONLY_MENTIONS:
            return d.intl.format(d.t.L2hmY2, {});
        case u.bL.NO_MESSAGES:
            return d.intl.string(d.t.CtVGyc);
        case u.bL.NULL:
        default:
            return;
    }
}
function g(e) {
    let t = e.getGuildId(),
        n = e.id,
        f = (0, i.e7)(
            [l.ZP],
            () => {
                let n = u.bL.NULL;
                return (null != e.parent_id && (n = l.ZP.getChannelMessageNotifications(t, e.parent_id)), n !== u.bL.NULL ? n : l.ZP.getMessageNotifications(t));
            },
            [t, e.parent_id]
        ),
        _ = (0, i.e7)([l.ZP], () => l.ZP.getNewForumThreadsCreated(e)),
        p = (0, i.e7)([l.ZP], () => l.ZP.getChannelOverrides(t)[n], [t, n]),
        g = null == p ? u.bL.NULL : p.message_notifications,
        E = (0, s.p2)(e),
        b = h(e, E);
    if (null == b) return null;
    function y(e) {
        null != t && o.Z.updateChannelOverrideSettings(t, n, { message_notifications: e }, c.UE.notifications(e));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            e.isForumLikeChannel()
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.S89, {
                              id: 'new-forum-threads-created',
                              label: d.intl.string(d.t.Rkgjpq),
                              checked: _,
                              action: () => o.Z.setForumThreadsCreated(e, !_)
                          }),
                          (0, r.jsx)(a.Clw, {})
                      ]
                  })
                : null,
            b.map((t) => {
                let { setting: n, label: i } = t;
                return (0, r.jsx)(
                    a.k5B,
                    {
                        group: 'channel-notifications',
                        id: ''.concat(n),
                        label: i,
                        subtext: n === u.bL.NULL ? m(f, e, E) : void 0,
                        action: () => y(n),
                        checked: n === g
                    },
                    n
                );
            })
        ]
    });
}
function E(e) {
    var t, n;
    let o = g(e),
        c = (0, i.e7)([l.ZP], () => l.ZP.resolvedMessageNotifications(e), [e]),
        f = (0, i.e7)([l.ZP], () => l.ZP.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
        _ = null == f ? u.bL.NULL : f.message_notifications,
        p = (0, s.p2)(e),
        m =
            _ === u.bL.NULL && e.isGuildStageVoice()
                ? d.intl.format(d.t.L2hmY2, {})
                : null == (n = h(e, p)) ||
                    null ==
                        (t = n.find((e) => {
                            let { setting: t } = e;
                            return t === c;
                        }))
                  ? void 0
                  : t.label;
    return null != o
        ? (0, r.jsx)(a.sNh, {
              id: 'channel-notifications',
              label: d.intl.string(d.t.h850Sk),
              subtext: m,
              children: o
          })
        : null;
}
