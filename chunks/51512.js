n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(180662),
    o = n(52684),
    a = n(985018);
let c = {
    [o.G.END_EARLY]: (e) =>
        (0, r.jsx)(l.Drp, {
            id: "end-poll-early",
            label: a.intl.string(a.t.grdwwt),
            icon: l.O7L,
            action: () => {
                i.A.endPollEarly({
                    channelId: e.channel_id,
                    messageId: e.id,
                });
            },
            iconProps: { color: "currentColor" },
        }),
};
function s(e) {
    let t = (0, o.A)(e);
    return 0 === t.length ? null : (0, r.jsx)(r.Fragment, { children: t.map((t) => c[t](e)) });
}
