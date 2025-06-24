n.d(t, { Z: () => d }), n(361932), n(187205), n(539854);
var r = n(255367);
n(73800);
var i = n(392711),
    l = n.n(i),
    o = n(661824),
    s = n(289481),
    a = n(809780),
    c = n(388032),
    u = n(739910);
function d(e, t, n) {
    let { markChannelRead: i, markGuildRead: d, deleteChannel: h, toggle: p, getNumUnreadChannels: f } = t,
        g = null;
    return l().flatMap(e, (e) => {
        let t = e.sortOrder !== g;
        g = e.sortOrder;
        let l = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === a.As.ReallyOldChannel
                    ? l.push(
                          (0, r.jsx)(
                              o.Z,
                              {
                                  className: u.divider,
                                  contentClassName: u.dividerContent,
                                  children: c.intl.string(c.t.roBMzs)
                              },
                              'old-divider'
                          )
                      )
                    : e.hasLoadedAnything &&
                      e.sortOrder === a.As.NoNotifications &&
                      l.push(
                          (0, r.jsx)(
                              o.Z,
                              {
                                  className: u.divider,
                                  contentClassName: u.dividerContent,
                                  children: c.intl.string(c.t['2Ys7np'])
                              },
                              'disabled-divider'
                          )
                      )),
            l.push(
                (0, r.jsx)(
                    s.Z,
                    {
                        channel: e,
                        markChannelRead: i,
                        markGuildRead: d,
                        toggle: p,
                        deleteChannel: h,
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
