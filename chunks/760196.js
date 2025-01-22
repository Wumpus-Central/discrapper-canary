r.d(n, {
    Z: function () {
        return E;
    },
    c: function () {
        return g;
    }
});
var i = r(653041);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(998698),
    u = r(713583),
    c = r(931981),
    d = r(898188),
    f = r(328908),
    p = r(832820),
    h = r(541716),
    _ = r(407661),
    m = r(553796);
function g(e) {
    let { channel: n, type: r, activeCommand: i, pendingReply: g } = e,
        { activeCommandOption: E, activeCommandOptionStates: v } = (0, s.cj)([l.Z], () => ({
            activeCommandOption: l.Z.getActiveOption(n.id),
            activeCommandOptionStates: l.Z.getOptionStates(n.id)
        })),
        y = (0, c.e)(n),
        b = (0, f.LN)(n.id);
    return o.useMemo(() => {
        let e = [],
            o = [];
        return (
            null != n.guild_id &&
                r !== h.Ie.SIDEBAR &&
                o.push(
                    (0, a.jsx)(d.Z, {
                        guildId: n.guild_id,
                        channel: n,
                        className: m.newMemberActionBar
                    })
                ),
            b && e.push((0, a.jsx)(p.Z, { channel: n })),
            null != i &&
                e.push(
                    (0, a.jsx)(u.Z, {
                        activeCommand: i,
                        activeOption: null != E ? E : null,
                        optionStates: v,
                        channelId: n.id
                    })
                ),
            null != g &&
                e.push(
                    (0, a.jsx)(_.Z, {
                        reply: g,
                        chatInputType: r
                    })
                ),
            y && e.push((0, a.jsx)(c.V, {})),
            {
                stacked: e,
                floating: o
            }
        );
    }, [i, E, v, n, g, y, r, b]);
}
function E(e) {
    let { bars: n } = e,
        r = n.stacked.map((e, n) =>
            (0, a.jsx)(
                'div',
                {
                    className: m.bar,
                    children: e
                },
                n
            )
        ),
        i = n.floating.map((e, n) => (0, a.jsx)(o.Fragment, { children: e }, n));
    return 0 === r.length && 0 === i.length
        ? null
        : (0, a.jsxs)(o.Fragment, {
              children: [
                  i.length > 0 &&
                      (0, a.jsx)('div', {
                          className: m.floatingBars,
                          children: i
                      }),
                  r.length > 0 &&
                      (0, a.jsx)('div', {
                          className: m.stackedBars,
                          children: r
                      })
              ]
          });
}
