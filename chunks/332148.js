n.d(t, { Z: () => d }), n(784620), n(973216);
var i = n(544891),
    r = n(570140),
    l = n(346479),
    a = n(624453),
    o = n(668781),
    s = n(981631),
    c = n(388032);
let u = {
        async pinMessage(e, t) {
            let { id: n, name: r } = e;
            await l.Z.unarchiveThreadIfNecessary(e.id),
                i.tn
                    .put({
                        url: s.ANM.PIN(n, t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .catch(() => {
                        let t;
                        (t = e.isPrivate()
                            ? c.intl.formatToPlainString(c.t.Q89oQU, { maxPins: s.tG9 })
                            : c.intl.formatToPlainString(c.t.NnO1S0, {
                                  maxPins: s.tG9,
                                  channelName: r
                              })),
                            o.Z.show({
                                title: c.intl.string(c.t.HI88Q0),
                                body: t,
                                confirmText: c.intl.string(c.t.BddRzc)
                            });
                    });
        },
        async unpinMessage(e, t) {
            await l.Z.unarchiveThreadIfNecessary(e.id),
                i.tn
                    .del({
                        url: s.ANM.PIN(e.id, t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .catch(() =>
                        o.Z.show({
                            title: c.intl.string(c.t.xFjBys),
                            body: c.intl.string(c.t['0R/Toa']),
                            confirmText: c.intl.string(c.t['7NqTJi']),
                            cancelText: c.intl.string(c.t['ETE/oK']),
                            onConfirm: u.unpinMessage.bind(u, e, t)
                        })
                    );
        },
        ackPins(e) {
            r.Z.dispatch({
                type: 'CHANNEL_PINS_ACK',
                channelId: e
            });
        },
        fetchPins(e, t) {
            var n, l;
            let o = null != (n = null == t ? void 0 : t.reset) && n,
                c = null != (l = null == t ? void 0 : t.limit) ? l : 25,
                u = null == t ? void 0 : t.before;
            (o ||
                (function (e, t) {
                    let n = a.Z.getPins(e);
                    if (null == n) return !0;
                    switch (n.state) {
                        case a.M.FAILED:
                            return !0;
                        case a.M.LOADING:
                        case a.M.LOADED_FINISHED:
                            return !1;
                        case a.M.LOADED_HAS_MORE:
                            if (null == t) return 0 === n.items.length;
                            return n.items.at(-1).pinnedAt === t;
                    }
                })(e, u)) &&
                (r.Z.dispatch({
                    type: 'LOAD_PINNED_MESSAGES',
                    channelId: e,
                    reset: o
                }),
                i.tn
                    .get({
                        url: s.ANM.PINS(e),
                        query: {
                            limit: c,
                            before: null == u ? void 0 : u.toISOString()
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (t) => {
                            r.Z.dispatch({
                                type: 'LOAD_PINNED_MESSAGES_SUCCESS',
                                pins: t.body.items,
                                channelId: e,
                                hasMore: t.body.has_more
                            });
                        },
                        () => {
                            r.Z.dispatch({
                                type: 'LOAD_PINNED_MESSAGES_FAILURE',
                                channelId: e
                            });
                        }
                    ));
        }
    },
    d = u;
