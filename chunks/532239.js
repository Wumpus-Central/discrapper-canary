n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(40851),
    r = n(493754),
    s = n(496675),
    o = n(981631),
    c = n(388032);
function d(e, t, n, d) {
    let u = {
            streamUserId: n,
            channel: e,
            applicationId: d,
            appContext: (0, a.bp)()
        },
        h = () => {
            null != t &&
                e.type === o.d4z.GUILD_VOICE &&
                (0, r.W)({
                    guild: t,
                    ...u
                });
        };
    return null != d
        ? (0, i.jsx)(l.sNh, {
              id: 'invite-to-stream',
              label: c.intl.string(c.t['OzOM/v']),
              action: h,
              icon: l.gQj
          })
        : null != t && null != e && s.Z.can(o.Plq.CREATE_INSTANT_INVITE, e)
          ? (0, i.jsx)(l.sNh, {
                id: 'invite-friends',
                label: c.intl.string(c.t['6Qgren']),
                action: h,
                icon: l.ejJ
            })
          : null;
}
