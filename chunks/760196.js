n.d(t, {
    Z: () => g,
    c: () => h,
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
    f = n(841284),
    p = n(541716),
    _ = n(407661),
    m = n(72775);
function h(e) {
    let {
            channel: t,
            type: n,
            activeCommand: h,
            pendingReply: g,
            pendingScheduledMessage: E,
            selectedAutocompleteInputType: b,
            selectedAutocompleteInputError: y,
        } = e,
        { activeCommandOption: O, activeCommandOptionStates: v } = (0, a.cj)([o.Z], () => ({
            activeCommandOption: o.Z.getActiveOption(t.id),
            activeCommandOptionStates: o.Z.getOptionStates(t.id),
        })),
        S = (0, c.e)(t);
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n === p.Ie.NORMAL &&
                i.push(
                    (0, r.jsx)(d.Z, {
                        guildId: t.guild_id,
                        channel: t,
                        className: m.newMemberActionBar,
                    }),
                ),
            null != h &&
                e.push(
                    (0, r.jsx)(s.Z, {
                        activeCommand: h,
                        activeOption: null != O ? O : null,
                        optionStates: v,
                        channelId: t.id,
                    }),
                ),
            null != g &&
                e.push(
                    (0, r.jsx)(_.Z, {
                        reply: g,
                        chatInputType: n,
                    }),
                ),
            S && e.push((0, r.jsx)(c.V, {})),
            null != E && e.push((0, r.jsx)(f.y, { pendingScheduledMessage: E })),
            "gameMentionInput" === b && i.push((0, r.jsx)(l.i, {})),
            "timestampMentionInput" === b && i.push((0, r.jsx)(u.a, { error: null != y && y })),
            {
                stacked: e,
                floating: i,
            }
        );
    }, [h, O, v, t, g, S, n, E, b, y]);
}
function g(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)("div", { children: e }, t)),
        a = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  a.length > 0 &&
                      (0, r.jsx)("div", {
                          className: m.floatingBars,
                          children: a,
                      }),
                  n.length > 0 &&
                      (0, r.jsx)("div", {
                          className: m.stackedBars,
                          children: n,
                      }),
              ],
          });
}
