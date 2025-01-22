n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(390547),
    n(653041);
var i = n(200651);
n(192379);
var r = n(392711),
    l = n.n(r),
    a = n(661824),
    o = n(289481),
    s = n(809780),
    c = n(388032),
    u = n(4817);
function d(e, t, n) {
    let { markChannelRead: r, markGuildRead: d, deleteChannel: m, toggle: h, getNumUnreadChannels: f } = t,
        p = null;
    return l().flatMap(e, (e) => {
        let t = e.sortOrder !== p;
        p = e.sortOrder;
        let l = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === s.As.ReallyOldChannel
                    ? l.push(
                          (0, i.jsx)(
                              a.Z,
                              {
                                  className: u.divider,
                                  contentClassName: u.dividerContent,
                                  children: c.intl.string(c.t.roBMzs)
                              },
                              'old-divider'
                          )
                      )
                    : e.hasLoadedAnything &&
                      e.sortOrder === s.As.NoNotifications &&
                      l.push(
                          (0, i.jsx)(
                              a.Z,
                              {
                                  className: u.divider,
                                  contentClassName: u.dividerContent,
                                  children: c.intl.string(c.t['2Ys7np'])
                              },
                              'disabled-divider'
                          )
                      )),
            l.push(
                (0, i.jsx)(
                    o.Z,
                    {
                        channel: e,
                        markChannelRead: r,
                        markGuildRead: d,
                        toggle: h,
                        deleteChannel: m,
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
