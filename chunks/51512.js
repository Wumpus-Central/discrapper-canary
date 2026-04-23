n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(477782),
    a = n(337358),
    r = n(180662),
    s = n(52684),
    o = n(985018);
let d = {
    [s.G.END_EARLY]: (e) =>
        (0, i.jsx)(l.Dr, {
            id: "end-poll-early",
            label: o.intl.string(o.t.grdwwt),
            icon: a.O,
            leadingAccessory: { type: "icon", icon: a.O },
            action: () => {
                r.A.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
        }),
};
function c(e) {
    let t = (0, s.A)(e);
    return 0 === t.length ? null : (0, i.jsx)(i.Fragment, { children: t.map((t) => d[t](e)) });
}
