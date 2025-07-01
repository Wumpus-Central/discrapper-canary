(n.d(t, { Z: () => u }), n(784620), n(973216));
var i = n(544891),
    l = n(570140),
    r = n(346479),
    s = n(624453),
    a = n(668781),
    o = n(981631),
    c = n(388032);
let d = {
        async pinMessage(e, t) {
            let { id: n, name: l } = e;
            (await r.Z.unarchiveThreadIfNecessary(e.id),
                i.tn
                    .put({
                        url: o.ANM.PIN(n, t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .catch(() => {
                        let t;
                        ((t = e.isPrivate()
                            ? c.intl.formatToPlainString(c.t.Q89oQU, { maxPins: o.tG9 })
                            : c.intl.formatToPlainString(c.t.NnO1S0, {
                                  maxPins: o.tG9,
                                  channelName: l
                              })),
                            a.Z.show({
                                title: c.intl.string(c.t.HI88Q0),
                                body: t,
                                confirmText: c.intl.string(c.t.BddRzc)
                            }));
                    }));
        },
        async unpinMessage(e, t) {
            (await r.Z.unarchiveThreadIfNecessary(e.id),
                i.tn
                    .del({
                        url: o.ANM.PIN(e.id, t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .catch(() =>
                        a.Z.show({
                            title: c.intl.string(c.t.xFjBys),
                            body: c.intl.string(c.t['0R/Toa']),
                            confirmText: c.intl.string(c.t['7NqTJi']),
                            cancelText: c.intl.string(c.t['ETE/oK']),
                            onConfirm: d.unpinMessage.bind(d, e, t)
                        })
                    ));
        },
        ackPins(e) {
            l.Z.dispatch({
                type: 'CHANNEL_PINS_ACK',
                channelId: e
            });
        },
        fetchPins(e, t) {
            var n, r;
            let a = null != (n = null == t ? void 0 : t.reset) && n,
                c = null != (r = null == t ? void 0 : t.limit) ? r : 25,
                d = null == t ? void 0 : t.before;
            (a ||
                (function (e, t) {
                    let n = s.Z.getPins(e);
                    if (null == n) return !0;
                    switch (n.state) {
                        case s.M.FAILED:
                            return !0;
                        case s.M.LOADING:
                        case s.M.LOADED_FINISHED:
                            return !1;
                        case s.M.LOADED_HAS_MORE:
                            if (null == t) return 0 === n.items.length;
                            return n.items.at(-1).pinnedAt === t;
                    }
                })(e, d)) &&
                (l.Z.dispatch({
                    type: 'LOAD_PINNED_MESSAGES',
                    channelId: e,
                    reset: a
                }),
                i.tn
                    .get({
                        url: o.ANM.PINS(e),
                        query: {
                            limit: c,
                            before: null == d ? void 0 : d.toISOString()
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (t) => {
                            l.Z.dispatch({
                                type: 'LOAD_PINNED_MESSAGES_SUCCESS',
                                pins: t.body.items,
                                channelId: e,
                                hasMore: t.body.has_more
                            });
                        },
                        () => {
                            l.Z.dispatch({
                                type: 'LOAD_PINNED_MESSAGES_FAILURE',
                                channelId: e
                            });
                        }
                    ));
        }
    },
    u = d;
