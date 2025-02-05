n.d(t, { Z: () => u }), n(390547), n(653041);
var i = n(200651);
n(192379);
var l = n(392711),
    a = n.n(l),
    r = n(661824),
    s = n(289481),
    o = n(809780),
    c = n(388032),
    d = n(4817);
function u(e, t, n) {
    let { markChannelRead: l, markGuildRead: u, deleteChannel: m, toggle: _, getNumUnreadChannels: h } = t,
        p = null;
    return a().flatMap(e, (e) => {
        let t = e.sortOrder !== p;
        p = e.sortOrder;
        let a = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === o.As.ReallyOldChannel
                    ? a.push(
                          (0, i.jsx)(
                              r.Z,
                              {
                                  className: d.divider,
                                  contentClassName: d.dividerContent,
                                  children: c.intl.string(c.t.roBMzs)
                              },
                              'old-divider'
                          )
                      )
                    : e.hasLoadedAnything &&
                      e.sortOrder === o.As.NoNotifications &&
                      a.push(
                          (0, i.jsx)(
                              r.Z,
                              {
                                  className: d.divider,
                                  contentClassName: d.dividerContent,
                                  children: c.intl.string(c.t['2Ys7np'])
                              },
                              'disabled-divider'
                          )
                      )),
            a.push(
                (0, i.jsx)(
                    s.Z,
                    {
                        channel: e,
                        markChannelRead: l,
                        markGuildRead: u,
                        toggle: _,
                        deleteChannel: m,
                        onJump: n,
                        getNumUnreadChannels: h
                    },
                    e.channelId
                )
            ),
            a
        );
    });
}
