n.d(t, { Z: () => d }), n(13667), n(390547), n(653041);
var r = n(200651);
n(192379);
var i = n(392711),
    a = n.n(i),
    l = n(661824),
    o = n(289481),
    s = n(809780),
    c = n(388032),
    u = n(739910);
function d(e, t, n) {
    let { markChannelRead: i, markGuildRead: d, deleteChannel: p, toggle: m, getNumUnreadChannels: f } = t,
        h = null;
    return a().flatMap(e, (e) => {
        let t = e.sortOrder !== h;
        h = e.sortOrder;
        let a = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === s.As.ReallyOldChannel
                    ? a.push(
                          (0, r.jsx)(
                              l.Z,
                              {
                                  className: u.divider,
                                  contentClassName: u.dividerContent,
                                  children: c.NW.string(c.t.roBMzs)
                              },
                              'old-divider'
                          )
                      )
                    : e.hasLoadedAnything &&
                      e.sortOrder === s.As.NoNotifications &&
                      a.push(
                          (0, r.jsx)(
                              l.Z,
                              {
                                  className: u.divider,
                                  contentClassName: u.dividerContent,
                                  children: c.NW.string(c.t['2Ys7np'])
                              },
                              'disabled-divider'
                          )
                      )),
            a.push(
                (0, r.jsx)(
                    o.Z,
                    {
                        channel: e,
                        markChannelRead: i,
                        markGuildRead: d,
                        toggle: m,
                        deleteChannel: p,
                        onJump: n,
                        getNumUnreadChannels: f
                    },
                    e.channelId
                )
            ),
            a
        );
    });
}
