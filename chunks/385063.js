n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(100527),
    o = n(769409),
    s = n(592125),
    c = n(739566),
    u = n(834129),
    d = n(388032);
function p(e) {
    let { message: t, usernameHook: n, compact: p, isForumPost: m } = e,
        f = (0, c.ZP)(t),
        h = n(f),
        g = (0, i.e7)([s.Z], () => {
            var e, n;
            return null != (n = null == (e = s.Z.getChannel(t.channel_id)) ? void 0 : e.isGroupDM()) && n;
        });
    return (0, r.jsx)(u.Z, {
        compact: p,
        iconNode: (0, r.jsx)(l.vdY, {
            size: 'xs',
            color: 'currentColor'
        }),
        timestamp: t.timestamp,
        children: g
            ? d.intl.format('' === t.content ? d.t.AI1ZZm : d.t.geP3ra, {
                  username: f.nick,
                  usernameHook: h,
                  channelName: (0, r.jsx)(
                      l.Text,
                      {
                          tag: 'span',
                          variant: 'text-md/medium',
                          color: 'text-primary',
                          children: t.content
                      },
                      'group-name-'.concat(t.id)
                  ),
                  editGroupButton: (0, r.jsx)(
                      l.Text,
                      {
                          tag: 'span',
                          variant: 'text-md/medium',
                          color: 'text-link',
                          children: d.intl.string(d.t['5Q9+/P'])
                      },
                      'edit-group-button-'.concat(t.id)
                  ),
                  onEditGroup: () => (0, o.B)(t.channel_id, a.Z.GROUP_DM_SYSTEM_MESSAGE_NAME)
              })
            : d.intl.format(m ? d.t.SOQ4hI : d.t.oItgEx, {
                  username: f.nick,
                  usernameHook: h,
                  channelName: t.content
              })
    });
}
