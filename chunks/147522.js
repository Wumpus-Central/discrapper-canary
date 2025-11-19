n.d(t, { Z: () => d }), n(361932), n(187205), n(539854);
var r = n(54381);
n(473749);
var i = n(392711),
    l = n.n(i),
    o = n(661824),
    a = n(289481),
    s = n(809780),
    c = n(388032),
    u = n(803205);
function d(e, t, n) {
    let { markChannelRead: i, markGuildRead: d, deleteChannel: p, toggle: h, getNumUnreadChannels: f } = t,
        g = null;
    return l().flatMap(e, (e) => {
        let t = e.sortOrder !== g;
        g = e.sortOrder;
        let l = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === s.As.ReallyOldChannel
                    ? l.push(
                          (0, r.jsx)(
                              o.Z,
                              {
                                  className: u.divider,
                                  contentClassName: u.dividerContent,
                                  children: c.intl.string(c.t.roBMzj),
                              },
                              "old-divider",
                          ),
                      )
                    : e.hasLoadedAnything &&
                      e.sortOrder === s.As.NoNotifications &&
                      l.push(
                          (0, r.jsx)(
                              o.Z,
                              {
                                  className: u.divider,
                                  contentClassName: u.dividerContent,
                                  children: c.intl.string(c.t["2Ys7nu"]),
                              },
                              "disabled-divider",
                          ),
                      )),
            l.push(
                (0, r.jsx)(
                    a.Z,
                    {
                        channel: e,
                        markChannelRead: i,
                        markGuildRead: d,
                        toggle: h,
                        deleteChannel: p,
                        onJump: n,
                        getNumUnreadChannels: f,
                    },
                    e.channelId,
                ),
            ),
            l
        );
    });
}
