n.d(t, {
    Z: () => E,
    c: () => g,
}),
    n(539854);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(998698),
    s = n(713583),
    l = n(694202),
    c = n(931981),
    u = n(898188),
    d = n(328908),
    f = n(832820),
    _ = n(841284),
    p = n(541716),
    h = n(407661),
    m = n(939267);
function g(e) {
    let {
            channel: t,
            type: n,
            activeCommand: g,
            pendingReply: E,
            pendingScheduledMessage: b,
            selectedAutocompleteInputType: y,
        } = e,
        { activeCommandOption: O, activeCommandOptionStates: v } = (0, o.cj)([a.Z], () => ({
            activeCommandOption: a.Z.getActiveOption(t.id),
            activeCommandOptionStates: a.Z.getOptionStates(t.id),
        })),
        I = (0, c.e)(t),
        T = (0, d.LN)(t.id);
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n === p.Ie.NORMAL &&
                i.push(
                    (0, r.jsx)(u.Z, {
                        guildId: t.guild_id,
                        channel: t,
                        className: m.newMemberActionBar,
                    }),
                ),
            null != g &&
                e.push(
                    (0, r.jsx)(s.Z, {
                        activeCommand: g,
                        activeOption: null != O ? O : null,
                        optionStates: v,
                        channelId: t.id,
                    }),
                ),
            null != E &&
                e.push(
                    (0, r.jsx)(h.Z, {
                        reply: E,
                        chatInputType: n,
                    }),
                ),
            I && e.push((0, r.jsx)(c.V, {})),
            T && e.push((0, r.jsx)(f.Z, { channel: t })),
            null != b && e.push((0, r.jsx)(_.y, { pendingScheduledMessage: b })),
            "gameMentionInput" === y && i.push((0, r.jsx)(l.i, {})),
            {
                stacked: e,
                floating: i,
            }
        );
    }, [g, O, v, t, E, I, n, T, b, y]);
}
function E(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)("div", { children: e }, t)),
        o = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === o.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  o.length > 0 &&
                      (0, r.jsx)("div", {
                          className: m.floatingBars,
                          children: o,
                      }),
                  n.length > 0 &&
                      (0, r.jsx)("div", {
                          className: m.stackedBars,
                          children: n,
                      }),
              ],
          });
}
