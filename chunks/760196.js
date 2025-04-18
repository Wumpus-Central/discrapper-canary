n.d(t, {
    Z: () => g,
    c: () => m
}),
    n(539854);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(998698),
    s = n(713583),
    l = n(931981),
    c = n(898188),
    u = n(328908),
    d = n(832820),
    f = n(841284),
    _ = n(541716),
    p = n(407661),
    h = n(302195);
function m(e) {
    let { channel: t, type: n, activeCommand: m, pendingReply: g, pendingScheduledMessage: E } = e,
        { activeCommandOption: b, activeCommandOptionStates: y } = (0, a.cj)([o.Z], () => ({
            activeCommandOption: o.Z.getActiveOption(t.id),
            activeCommandOptionStates: o.Z.getOptionStates(t.id)
        })),
        v = (0, l.e)(t),
        O = (0, u.LN)(t.id);
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n === _.Ie.NORMAL &&
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
                        activeOption: null != b ? b : null,
                        optionStates: y,
                        channelId: t.id
                    })
                ),
            null != g &&
                e.push(
                    (0, r.jsx)(p.Z, {
                        reply: g,
                        chatInputType: n
                    })
                ),
            v && e.push((0, r.jsx)(l.V, {})),
            O && e.push((0, r.jsx)(d.Z, { channel: t })),
            null != E && e.push((0, r.jsx)(f.y, { pendingScheduledMessage: E })),
            {
                stacked: e,
                floating: i
            }
        );
    }, [m, b, y, t, g, v, n, O, E]);
}
function g(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)('div', { children: e }, t)),
        a = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  a.length > 0 &&
                      (0, r.jsx)('div', {
                          className: h.floatingBars,
                          children: a
                      }),
                  n.length > 0 &&
                      (0, r.jsx)('div', {
                          className: h.stackedBars,
                          children: n
                      })
              ]
          });
}
