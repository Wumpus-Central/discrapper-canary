n.d(t, {
    Z: () => g,
    c: () => m
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(998698),
    o = n(713583),
    l = n(931981),
    u = n(898188),
    c = n(328908),
    d = n(832820),
    f = n(841284),
    _ = n(541716),
    p = n(407661),
    h = n(553796);
function m(e) {
    let { channel: t, type: n, activeCommand: m, pendingReply: g, pendingScheduledMessage: E } = e,
        { activeCommandOption: v, activeCommandOptionStates: y } = (0, a.cj)([s.Z], () => ({
            activeCommandOption: s.Z.getActiveOption(t.id),
            activeCommandOptionStates: s.Z.getOptionStates(t.id)
        })),
        I = (0, l.e)(t),
        T = (0, c.LN)(t.id);
    return r.useMemo(() => {
        let e = [],
            r = [];
        return (
            null != t.guild_id &&
                n !== _.Ie.SIDEBAR &&
                r.push(
                    (0, i.jsx)(u.Z, {
                        guildId: t.guild_id,
                        channel: t,
                        className: h.newMemberActionBar
                    })
                ),
            null != m &&
                e.push(
                    (0, i.jsx)(o.Z, {
                        activeCommand: m,
                        activeOption: null != v ? v : null,
                        optionStates: y,
                        channelId: t.id
                    })
                ),
            null != g &&
                e.push(
                    (0, i.jsx)(p.Z, {
                        reply: g,
                        chatInputType: n
                    })
                ),
            I && e.push((0, i.jsx)(l.V, {})),
            T && e.push((0, i.jsx)(d.Z, { channel: t })),
            null != E && e.push((0, i.jsx)(f.y, { pendingScheduledMessage: E })),
            {
                stacked: e,
                floating: r
            }
        );
    }, [m, v, y, t, g, I, n, T, E]);
}
function g(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, i.jsx)('div', { children: e }, t)),
        a = t.floating.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
        ? null
        : (0, i.jsxs)(r.Fragment, {
              children: [
                  a.length > 0 &&
                      (0, i.jsx)('div', {
                          className: h.floatingBars,
                          children: a
                      }),
                  n.length > 0 &&
                      (0, i.jsx)('div', {
                          className: h.stackedBars,
                          children: n
                      })
              ]
          });
}
