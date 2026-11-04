var s = n(620632),
    i = n(627784),
    a = n(652215);
n.d(
    t,
    {},
    {
        Q: async function (e) {
            let { channelId: t, messageId: n, answerIds: r } = e;
            try {
                await s.Bo.put({ url: a.Rsh.POLL_ANSWERS(t, n), body: { answer_ids: r }, rejectWithError: !1 });
            } catch (e) {
                throw new i.LG(e);
            }
        },
        w: async function (e) {
            let { channelId: t, messageId: n } = e;
            try {
                await s.Bo.post({ url: a.Rsh.POLL_EXPIRE(t, n), rejectWithError: !1 });
            } catch (e) {
                throw new i.LG(e);
            }
        },
    },
);
