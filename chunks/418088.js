r.d(n, {
    b: function () {
        return s;
    }
});
var i,
    a,
    o = r(47120);
function s(e, n) {
    return {
        id: e.id,
        topic: e.topic,
        summShort: e.summ_short,
        people: Array.from(new Set(e.people)),
        startId: e.start_id,
        endId: e.end_id,
        count: e.count,
        channelId: n,
        source: e.source,
        type: e.type
    };
}
!(function (e) {
    (e[(e.SOURCE_0 = 0)] = 'SOURCE_0'), (e[(e.SOURCE_1 = 1)] = 'SOURCE_1');
})(i || (i = {})),
    !(function (e) {
        (e[(e.UNSET = 0)] = 'UNSET'), (e[(e.SOURCE_1 = 1)] = 'SOURCE_1'), (e[(e.SOURCE_2 = 2)] = 'SOURCE_2');
    })(a || (a = {}));
