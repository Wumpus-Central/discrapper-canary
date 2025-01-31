n.d(t, { Z: () => u });
var i = n(544891),
    l = n(570140),
    a = n(346479),
    s = n(624453),
    r = n(668781),
    o = n(981631),
    d = n(388032);
let c = {
        async pinMessage(e, t) {
            let { id: n, name: l } = e;
            await a.Z.unarchiveThreadIfNecessary(e.id),
                i.tn
                    .put({
                        url: o.ANM.PIN(n, t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .catch(() => {
                        let t;
                        (t = e.isPrivate()
                            ? d.intl.formatToPlainString(d.t.Q89oQU, { maxPins: o.tG9 })
                            : d.intl.formatToPlainString(d.t.NnO1S0, {
                                  maxPins: o.tG9,
                                  channelName: l
                              })),
                            r.Z.show({
                                title: d.intl.string(d.t.HI88Q0),
                                body: t,
                                confirmText: d.intl.string(d.t.BddRzc)
                            });
                    });
        },
        async unpinMessage(e, t) {
            await a.Z.unarchiveThreadIfNecessary(e.id),
                i.tn
                    .del({
                        url: o.ANM.PIN(e.id, t),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .catch(() =>
                        r.Z.show({
                            title: d.intl.string(d.t.xFjBys),
                            body: d.intl.string(d.t['0R/Toa']),
                            confirmText: d.intl.string(d.t['7NqTJi']),
                            cancelText: d.intl.string(d.t['ETE/oK']),
                            onConfirm: c.unpinMessage.bind(c, e, t)
                        })
                    );
        },
        ackPins(e) {
            l.Z.dispatch({
                type: 'CHANNEL_PINS_ACK',
                channelId: e
            });
        },
        fetchPins(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = s.Z.getPinnedMessages(e);
            (t || null == n || (!n.loaded && !n.loading)) &&
                (l.Z.dispatch({
                    type: 'LOAD_PINNED_MESSAGES',
                    channelId: e
                }),
                i.tn
                    .get({
                        url: o.ANM.PINS(e),
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (t) => {
                            l.Z.dispatch({
                                type: 'LOAD_PINNED_MESSAGES_SUCCESS',
                                messages: t.body,
                                channelId: e
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
    u = c;
