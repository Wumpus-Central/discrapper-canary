r.d(n, {
    Z: function () {
        return m;
    },
    c: function () {
        return p;
    }
});
var i = r(653041);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(998698),
    u = r(713583),
    c = r(931981),
    d = r(898188),
    f = r(541716),
    _ = r(407661),
    h = r(652385);
function p(e) {
    let { channel: n, type: r, activeCommand: i, pendingReply: p } = e,
        { activeCommandOption: m, activeCommandOptionStates: g } = (0, o.cj)([l.Z], () => ({
            activeCommandOption: l.Z.getActiveOption(n.id),
            activeCommandOptionStates: l.Z.getOptionStates(n.id)
        })),
        E = (0, c.e)(n);
    return s.useMemo(() => {
        let e = [],
            s = [];
        return (
            null != n.guild_id &&
                r !== f.Ie.SIDEBAR &&
                s.push(
                    (0, a.jsx)(d.Z, {
                        guildId: n.guild_id,
                        channel: n,
                        className: h.newMemberActionBar
                    })
                ),
            null != i &&
                e.push(
                    (0, a.jsx)(u.Z, {
                        activeCommand: i,
                        activeOption: null != m ? m : null,
                        optionStates: g,
                        channelId: n.id
                    })
                ),
            null != p &&
                e.push(
                    (0, a.jsx)(_.Z, {
                        reply: p,
                        chatInputType: r
                    })
                ),
            E && e.push((0, a.jsx)(c.V, {})),
            {
                stacked: e,
                floating: s
            }
        );
    }, [i, m, g, n, p, E, r]);
}
function m(e) {
    let { bars: n } = e,
        r = n.stacked.map((e, n) => (0, a.jsx)('div', { children: e }, n)),
        i = n.floating.map((e, n) => (0, a.jsx)(s.Fragment, { children: e }, n));
    return 0 === r.length && 0 === i.length
        ? null
        : (0, a.jsxs)(s.Fragment, {
              children: [
                  i.length > 0 &&
                      (0, a.jsx)('div', {
                          className: h.floatingBars,
                          children: i
                      }),
                  r.length > 0 &&
                      (0, a.jsx)('div', {
                          className: h.stackedBars,
                          children: r
                      })
              ]
          });
}
