n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(180662),
    a = n(52684),
    o = n(985018);
let c = {
    [a.G.END_EARLY]: (e) =>
        (0, r.jsx)(i.Drp, {
            id: "end-poll-early",
            label: o.intl.string(o.t.grdwwt),
            icon: i.O7L,
            leadingAccessory: {
                type: "icon",
                icon: i.O7L,
            },
            action: () => {
                l.A.endPollEarly({
                    channelId: e.channel_id,
                    messageId: e.id,
                });
            },
            iconProps: {
                color: "currentColor",
            },
        }),
};

function s(e) {
    let t = (0, a.A)(e);
    return 0 === t.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: t.map((t) => c[t](e)),
          });
}
