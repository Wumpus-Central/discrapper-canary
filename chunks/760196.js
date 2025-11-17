n.d(t, {
    Z: () => b,
    c: () => E,
}),
    n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(998698),
    s = n(713583),
    l = n(694202),
    c = n(931981),
    u = n(183889),
    d = n(898188),
    f = n(328908),
    _ = n(832820),
    p = n(841284),
    h = n(541716),
    m = n(407661),
    g = n(564355);
function E(e) {
    let {
            channel: t,
            type: n,
            activeCommand: E,
            pendingReply: b,
            pendingScheduledMessage: y,
            selectedAutocompleteInputType: O,
        } = e,
        { activeCommandOption: v, activeCommandOptionStates: I } = (0, a.cj)([o.Z], () => ({
            activeCommandOption: o.Z.getActiveOption(t.id),
            activeCommandOptionStates: o.Z.getOptionStates(t.id),
        })),
        T = (0, c.e)(t),
        S = (0, f.LN)(t.id);
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n === h.Ie.NORMAL &&
                i.push(
                    (0, r.jsx)(d.Z, {
                        guildId: t.guild_id,
                        channel: t,
                        className: g.newMemberActionBar,
                    }),
                ),
            null != E &&
                e.push(
                    (0, r.jsx)(s.Z, {
                        activeCommand: E,
                        activeOption: null != v ? v : null,
                        optionStates: I,
                        channelId: t.id,
                    }),
                ),
            null != b &&
                e.push(
                    (0, r.jsx)(m.Z, {
                        reply: b,
                        chatInputType: n,
                    }),
                ),
            T && e.push((0, r.jsx)(c.V, {})),
            S && e.push((0, r.jsx)(_.Z, { channel: t })),
            null != y && e.push((0, r.jsx)(p.y, { pendingScheduledMessage: y })),
            "gameMentionInput" === O && i.push((0, r.jsx)(l.i, {})),
            "timestampMentionInput" === O && i.push((0, r.jsx)(u.a, {})),
            {
                stacked: e,
                floating: i,
            }
        );
    }, [E, v, I, t, b, T, n, S, y, O]);
}
function b(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)("div", { children: e }, t)),
        a = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  a.length > 0 &&
                      (0, r.jsx)("div", {
                          className: g.floatingBars,
                          children: a,
                      }),
                  n.length > 0 &&
                      (0, r.jsx)("div", {
                          className: g.stackedBars,
                          children: n,
                      }),
              ],
          });
}
