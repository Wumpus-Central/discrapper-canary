n.d(t, {
    Z: () => b,
    c: () => E,
}),
    n(539854);
var r = n(54381),
    i = n(473749),
    o = n(442837),
    a = n(998698),
    s = n(713583),
    l = n(694202),
    c = n(931981),
    u = n(183889),
    d = n(898188),
    f = n(328908),
    p = n(832820),
    _ = n(841284),
    m = n(541716),
    h = n(407661),
    g = n(564355);
function E(e) {
    let {
            channel: t,
            type: n,
            activeCommand: E,
            pendingReply: b,
            pendingScheduledMessage: y,
            selectedAutocompleteInputType: O,
            selectedAutocompleteInputError: v,
        } = e,
        { activeCommandOption: S, activeCommandOptionStates: I } = (0, o.cj)([a.Z], () => ({
            activeCommandOption: a.Z.getActiveOption(t.id),
            activeCommandOptionStates: a.Z.getOptionStates(t.id),
        })),
        T = (0, c.e)(t),
        C = (0, f.LN)(t.id);
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n === m.Ie.NORMAL &&
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
                        activeOption: null != S ? S : null,
                        optionStates: I,
                        channelId: t.id,
                    }),
                ),
            null != b &&
                e.push(
                    (0, r.jsx)(h.Z, {
                        reply: b,
                        chatInputType: n,
                    }),
                ),
            T && e.push((0, r.jsx)(c.V, {})),
            C && e.push((0, r.jsx)(p.Z, { channel: t })),
            null != y && e.push((0, r.jsx)(_.y, { pendingScheduledMessage: y })),
            "gameMentionInput" === O && i.push((0, r.jsx)(l.i, {})),
            "timestampMentionInput" === O && i.push((0, r.jsx)(u.a, { error: null != v && v })),
            {
                stacked: e,
                floating: i,
            }
        );
    }, [E, S, I, t, b, T, n, C, y, O, v]);
}
function b(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)("div", { children: e }, t)),
        o = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === o.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  o.length > 0 &&
                      (0, r.jsx)("div", {
                          className: g.floatingBars,
                          children: o,
                      }),
                  n.length > 0 &&
                      (0, r.jsx)("div", {
                          className: g.stackedBars,
                          children: n,
                      }),
              ],
          });
}
