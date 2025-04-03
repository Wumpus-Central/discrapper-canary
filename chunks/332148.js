n.d(t, { Z: () => d });
var r = n(544891),
    i = n(570140),
    l = n(346479),
    a = n(624453),
    o = n(668781),
    s = n(981631),
    c = n(388032);
let u = {
        async pinMessage(e, t) {
            let { id: n, name: i } = e;
            await l.Z.unarchiveThreadIfNecessary(e.id),
                r.tn
                    .put({
                        url: s.ANM.PIN(n, t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .catch(() => {
                        let t;
                        (t = e.isPrivate()
                            ? c.NW.formatToPlainString(c.t.Q89oQU, { maxPins: s.tG9 })
                            : c.NW.formatToPlainString(c.t.NnO1S0, {
                                  maxPins: s.tG9,
                                  channelName: i
                              })),
                            o.Z.show({
                                title: c.NW.string(c.t.HI88Q0),
                                body: t,
                                confirmText: c.NW.string(c.t.BddRzc)
                            });
                    });
        },
        async unpinMessage(e, t) {
            await l.Z.unarchiveThreadIfNecessary(e.id),
                r.tn
                    .del({
                        url: s.ANM.PIN(e.id, t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .catch(() =>
                        o.Z.show({
                            title: c.NW.string(c.t.xFjBys),
                            body: c.NW.string(c.t['0R/Toa']),
                            confirmText: c.NW.string(c.t['7NqTJi']),
                            cancelText: c.NW.string(c.t['ETE/oK']),
                            onConfirm: u.unpinMessage.bind(u, e, t)
                        })
                    );
        },
        ackPins(e) {
            i.Z.dispatch({
                type: 'CHANNEL_PINS_ACK',
                channelId: e
            });
        },
        fetchPins(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = a.Z.getPinnedMessages(e);
            (!t && null != n && (n.loaded || n.loading)) ||
                (i.Z.dispatch({
                    type: 'LOAD_PINNED_MESSAGES',
                    channelId: e
                }),
                r.tn
                    .get({
                        url: s.ANM.PINS(e),
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (t) => {
                            i.Z.dispatch({
                                type: 'LOAD_PINNED_MESSAGES_SUCCESS',
                                messages: t.body,
                                channelId: e
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
    d = u;
