n.d(t, { Z: () => d }), n(784620), n(973216);
var r = n(544891),
    i = n(570140),
    l = n(346479),
    o = n(624453),
    a = n(668781),
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
                        rejectWithError: !0,
                    })
                    .catch(() => {
                        let t;
                        (t = e.isPrivate()
                            ? c.intl.formatToPlainString(c.t.Q89oQU, { maxPins: s.tG9 })
                            : c.intl.formatToPlainString(c.t.NnO1S5, {
                                  maxPins: s.tG9,
                                  channelName: i,
                              })),
                            a.Z.show({
                                title: c.intl.string(c.t.HI88Q3),
                                body: t,
                                confirmText: c.intl.string(c.t.BddRzS),
                            });
                    });
        },
        async unpinMessage(e, t) {
            await l.Z.unarchiveThreadIfNecessary(e.id),
                r.tn
                    .del({
                        url: s.ANM.PIN(e.id, t),
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .catch(() =>
                        a.Z.show({
                            title: c.intl.string(c.t.xFjByk),
                            body: c.intl.string(c.t["0R/Toc"]),
                            confirmText: c.intl.string(c.t["7NqTJn"]),
                            cancelText: c.intl.string(c.t["ETE/oC"]),
                            onConfirm: u.unpinMessage.bind(u, e, t),
                        }),
                    );
        },
        ackPins(e) {
            i.Z.dispatch({
                type: "CHANNEL_PINS_ACK",
                channelId: e,
            });
        },
        fetchPins(e, t) {
            var n, l;
            let a = null != (n = null == t ? void 0 : t.reset) && n,
                c = null != (l = null == t ? void 0 : t.limit) ? l : 25,
                u = null == t ? void 0 : t.before;
            (a ||
                (function (e, t) {
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
                })(e, u)) &&
                (i.Z.dispatch({
                    type: "LOAD_PINNED_MESSAGES",
                    channelId: e,
                    reset: a,
                }),
                r.tn
                    .get({
                        url: s.ANM.PINS(e),
                        query: {
                            limit: c,
                            before: null == u ? void 0 : u.toISOString(),
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(
                        (t) => {
                            i.Z.dispatch({
                                type: "LOAD_PINNED_MESSAGES_SUCCESS",
                                pins: t.body.items,
                                channelId: e,
                                hasMore: t.body.has_more,
                            });
                        },
                        () => {
                            i.Z.dispatch({
                                type: "LOAD_PINNED_MESSAGES_FAILURE",
                                channelId: e,
                            });
                        },
                    ));
        },
    },
    d = u;
