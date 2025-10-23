n.d(t, {
    JU: () => r,
    b: () => i,
}),
    n(388685);
var r = (function (e) {
    return (e[(e.UNSET = 0)] = "UNSET"), (e[(e.SOURCE_1 = 1)] = "SOURCE_1"), (e[(e.SOURCE_2 = 2)] = "SOURCE_2"), e;
})({});
function i(e, t) {
    return {
        id: e.id,
        topic: e.topic,
        summShort: e.summ_short,
        people: Array.from(new Set(e.people)),
        startId: e.start_id,
        endId: e.end_id,
        count: e.count,
        channelId: t,
        source: e.source,
        type: e.type,
    };
}
