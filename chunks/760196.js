n.d(t, {
    Z: () => g,
    c: () => m
}),
    n(653041);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(998698),
    s = n(713583),
    l = n(931981),
    c = n(898188),
    u = n(328908),
    d = n(832820),
    f = n(841284),
    p = n(541716),
    _ = n(407661),
    h = n(342203);
function m(e) {
    let { channel: t, type: n, activeCommand: m, pendingReply: g, pendingScheduledMessage: E } = e,
        { activeCommandOption: v, activeCommandOptionStates: b } = (0, o.cj)([a.Z], () => ({
            activeCommandOption: a.Z.getActiveOption(t.id),
            activeCommandOptionStates: a.Z.getOptionStates(t.id)
        })),
        y = (0, l.e)(t),
        O = (0, u.LN)(t.id);
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n === p.Ie.NORMAL &&
                i.push(
                    (0, r.jsx)(c.Z, {
                        guildId: t.guild_id,
                        channel: t,
                        className: h.newMemberActionBar
                    })
                ),
            null != m &&
                e.push(
                    (0, r.jsx)(s.Z, {
                        activeCommand: m,
                        activeOption: null != v ? v : null,
                        optionStates: b,
                        channelId: t.id
                    })
                ),
            null != g &&
                e.push(
                    (0, r.jsx)(_.Z, {
                        reply: g,
                        chatInputType: n
                    })
                ),
            y && e.push((0, r.jsx)(l.V, {})),
            O && e.push((0, r.jsx)(d.Z, { channel: t })),
            null != E && e.push((0, r.jsx)(f.y, { pendingScheduledMessage: E })),
            {
                stacked: e,
                floating: i
            }
        );
    }, [m, v, b, t, g, y, n, O, E]);
}
function g(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)('div', { children: e }, t)),
        o = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === o.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  o.length > 0 &&
                      (0, r.jsx)('div', {
                          className: h.floatingBars,
                          children: o
                      }),
                  n.length > 0 &&
                      (0, r.jsx)('div', {
                          className: h.stackedBars,
                          children: n
                      })
              ]
          });
}
