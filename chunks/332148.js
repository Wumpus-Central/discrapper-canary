(n.d(t, { Z: () => f }), n(784620), n(973216));
var r = n(544891),
    i = n(570140),
    a = n(346479),
    o = n(624453),
    s = n(668781),
    l = n(981631),
    c = n(388032);
function u(e, t) {
    let n = o.Z.getPins(e);
    if (null == n) return !0;
    switch (n.state) {
        case o.M.FAILED:
            return !0;
        case o.M.LOADING:
        case o.M.LOADED_FINISHED:
            return !1;
        case o.M.LOADED_HAS_MORE:
            if (null == t) return 0 === n.items.length;
            return n.items.at(-1).pinnedAt === t;
    }
}
let d = {
        async pinMessage(e, t) {
            let { id: n, name: i } = e;
            (await a.Z.unarchiveThreadIfNecessary(e.id),
                r.tn
                    .put({
                        url: l.ANM.PIN(n, t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .catch(() => {
                        let t;
                        ((t = e.isPrivate()
                            ? c.intl.formatToPlainString(c.t.Q89oQU, { maxPins: l.tG9 })
                            : c.intl.formatToPlainString(c.t.NnO1S0, {
                                  maxPins: l.tG9,
                                  channelName: i
                              })),
                            s.Z.show({
                                title: c.intl.string(c.t.HI88Q0),
                                body: t,
                                confirmText: c.intl.string(c.t.BddRzc)
                            }));
                    }));
        },
        async unpinMessage(e, t) {
            (await a.Z.unarchiveThreadIfNecessary(e.id),
                r.tn
                    .del({
                        url: l.ANM.PIN(e.id, t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .catch(() =>
                        s.Z.show({
                            title: c.intl.string(c.t.xFjBys),
                            body: c.intl.string(c.t['0R/Toa']),
                            confirmText: c.intl.string(c.t['7NqTJi']),
                            cancelText: c.intl.string(c.t['ETE/oK']),
                            onConfirm: d.unpinMessage.bind(d, e, t)
                        })
                    ));
        },
        ackPins(e) {
            i.Z.dispatch({
                type: 'CHANNEL_PINS_ACK',
                channelId: e
            });
        },
        fetchPins(e, t) {
            var n, a;
            let o = null != (n = null == t ? void 0 : t.reset) && n,
                s = null != (a = null == t ? void 0 : t.limit) ? a : 25,
                c = null == t ? void 0 : t.before;
            (o || u(e, c)) &&
                (i.Z.dispatch({
                    type: 'LOAD_PINNED_MESSAGES',
                    channelId: e,
                    reset: o
                }),
                r.tn
                    .get({
                        url: l.ANM.PINS(e),
                        query: {
                            limit: s,
                            before: null == c ? void 0 : c.toISOString()
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (t) => {
                            i.Z.dispatch({
                                type: 'LOAD_PINNED_MESSAGES_SUCCESS',
                                pins: t.body.items,
                                channelId: e,
                                hasMore: t.body.has_more
                            });
                        },
                        () => {
                            i.Z.dispatch({
                                type: 'LOAD_PINNED_MESSAGES_FAILURE',
                                channelId: e
                            });
                        }
                    ));
        }
    },
    f = d;
