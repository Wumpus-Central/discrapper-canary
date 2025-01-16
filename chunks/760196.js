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
    s = r(192379),
    o = r(442837),
    l = r(998698),
    u = r(713583),
    c = r(931981),
    d = r(898188),
    f = r(832820),
    _ = r(304123),
    h = r(541716),
    p = r(407661),
    m = r(553796);
function g(e) {
    let { channel: n, type: r, activeCommand: i, pendingReply: g } = e,
        { activeCommandOption: E, activeCommandOptionStates: v } = (0, o.cj)([l.Z], () => ({
            activeCommandOption: l.Z.getActiveOption(n.id),
            activeCommandOptionStates: l.Z.getOptionStates(n.id)
        })),
        I = (0, c.e)(n),
        T = (0, _.Z)();
    return s.useMemo(() => {
        let e = [],
            s = [];
        return (
            null != n.guild_id &&
                r !== h.Ie.SIDEBAR &&
                s.push(
                    (0, a.jsx)(d.Z, {
                        guildId: n.guild_id,
                        channel: n,
                        className: m.newMemberActionBar
                    })
                ),
            T && e.push((0, a.jsx)(f.Z, { channel: n })),
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
                    (0, a.jsx)(p.Z, {
                        reply: g,
                        chatInputType: r
                    })
                ),
            I && e.push((0, a.jsx)(c.V, {})),
            {
                stacked: e,
                floating: s
            }
        );
    }, [i, E, v, n, g, I, r, T]);
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
        i = n.floating.map((e, n) => (0, a.jsx)(s.Fragment, { children: e }, n));
    return 0 === r.length && 0 === i.length
        ? null
        : (0, a.jsxs)(s.Fragment, {
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
