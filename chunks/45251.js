n.d(t, {
    gD: function () {
        return o;
    },
    kg: function () {
        return c;
    }
}),
    n(789020),
    n(411104);
var i = n(544891),
    r = n(570140),
    l = n(216789),
    a = n(981631);
async function o(e) {
    r.Z.dispatch({
        type: 'SCHEDULED_MESSAGES_DELETE_START',
        scheduledMessageId: e
    });
    try {
        if (
            !(
                await i.tn.del({
                    url: a.ANM.SCHEDULED_MESSAGE(e),
                    rejectWithError: !0
                })
            ).ok
        )
            throw Error('Failed to delete scheduled message');
        r.Z.dispatch({
            type: 'SCHEDULED_MESSAGES_DELETE_SUCCESS',
            scheduledMessageId: e
        });
    } catch (i) {
        var t, n;
        l.GO.error('Failed to cancel scheduled message', i),
            r.Z.dispatch({
                type: 'SCHEDULED_MESSAGES_DELETE_FAILURE',
                scheduledMessageId: e,
                errorMsg: null !== (n = null === (t = i.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : i.message
            });
    }
}
async function s() {
    let e = await i.tn.get({
        url: a.ANM.SCHEDULED_MESSAGES,
        rejectWithError: !0
    });
    if (!e.ok) throw Error('Failed to fetch scheduled messages');
    return e.body.map(l.IR);
}
async function c() {
    r.Z.dispatch({ type: 'FETCH_SCHEDULED_MESSAGES' });
    try {
        let e = await s();
        l.GO.info('Fetched scheduled messages', e),
            r.Z.dispatch({
                type: 'FETCH_SCHEDULED_MESSAGES_SUCCESS',
                messages: e
            });
    } catch (e) {
        l.GO.error('Failed to fetch scheduled messages', e),
            r.Z.dispatch({
                type: 'FETCH_SCHEDULED_MESSAGES_FAILURE',
                error: e
            });
    }
}
