n.d(t, { Z: () => d }), n(361932), n(187205), n(539854);
var r = n(200651);
n(192379);
var i = n(392711),
    l = n.n(i),
    a = n(661824),
    o = n(289481),
    s = n(809780),
    c = n(388032),
    u = n(739910);
function d(e, t, n) {
    let { markChannelRead: i, markGuildRead: d, deleteChannel: p, toggle: m, getNumUnreadChannels: f } = t,
        h = null;
    return l().flatMap(e, (e) => {
        let t = e.sortOrder !== h;
        h = e.sortOrder;
        let l = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === s.As.ReallyOldChannel
                    ? l.push(
                          (0, r.jsx)(
                              a.Z,
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
                      l.push(
                          (0, r.jsx)(
                              a.Z,
                              {
                                  className: u.divider,
                                  contentClassName: u.dividerContent,
                                  children: c.NW.string(c.t['2Ys7np'])
                              },
                              'disabled-divider'
                          )
                      )),
            l.push(
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
            l
        );
    });
}
