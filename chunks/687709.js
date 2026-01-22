n.d(t, { A: () => f }), n(134528), n(947204);
var r = n(562465),
    l = n(73153),
    i = n(198982),
    a = n(867455),
    s = n(966833),
    o = n(157559),
    c = n(652215),
    u = n(985018);
let d = {
        async pinMessage(e, t) {
            let { id: n, name: l } = e;
            await a.A.unarchiveThreadIfNecessary(e.id),
                r.Bo.put({
                    url: c.Rsh.PIN(n, t),
                    rejectWithError: !0,
                }).catch((t) => {
                    let n = new i.LG(t),
                        r = n.code,
                        a = u.intl.string(u.t.j2d6Km),
                        s = u.intl.string(u.t.fEptJP);
                    if (null != r)
                        switch (r) {
                            case c.t02.TOO_MANY_PINS_IN_CHANNEL:
                                (a = u.intl.string(u.t.HI88Q3)),
                                    (s = e.isPrivate()
                                        ? u.intl.formatToPlainString(u.t.Q89oQU, { maxPins: c.KL3 })
                                        : u.intl.formatToPlainString(u.t.NnO1S5, {
                                              maxPins: c.KL3,
                                              channelName: l,
                                          }));
                                break;
                            case c.t02.INVALID_ACCESS:
                                (a = u.intl.string(u.t["25gfQX"])), (s = u.intl.string(u.t.QNnTwN));
                                break;
                            case c.t02.INVALID_PIN_MESSAGE_CHANNEL:
                                (a = u.intl.string(u.t["Q5G6+m"])), (s = u.intl.string(u.t["5hgPfC"]));
                                break;
                            case c.t02.INVALID_THREAD_ARCHIVE_STATE:
                                (a = u.intl.string(u.t.fu6Lbl)), (s = u.intl.string(u.t.FmrcZM));
                                break;
                            case c.t02.INVALID_ACTION_SYSTEM_MESSAGE:
                                (a = u.intl.string(u.t["zV0/FC"])), (s = u.intl.string(u.t.C4a7xI));
                                break;
                            case c.t02.UNKNOWN_MESSAGE:
                                (a = u.intl.string(u.t.fkqPro)), (s = u.intl.string(u.t.H6fRIg));
                                break;
                            default:
                                var d;
                                (a = u.intl.string(u.t.HI88Q3)),
                                    (s = null != (d = n.getAnyErrorMessage()) ? d : u.intl.string(u.t.fEptJP));
                        }
                    o.A.show({
                        title: a,
                        body: s,
                        confirmText: u.intl.string(u.t.BddRzS),
                    });
                });
        },
        async unpinMessage(e, t) {
            await a.A.unarchiveThreadIfNecessary(e.id),
                r.Bo.del({
                    url: c.Rsh.PIN(e.id, t),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).catch(() =>
                    o.A.show({
                        title: u.intl.string(u.t.xFjByk),
                        body: u.intl.string(u.t["0R/Toc"]),
                        confirmText: u.intl.string(u.t["7NqTJn"]),
                        cancelText: u.intl.string(u.t["ETE/oC"]),
                        onConfirm: d.unpinMessage.bind(d, e, t),
                    }),
                );
        },
        ackPins(e) {
            l.h.dispatch({
                type: "CHANNEL_PINS_ACK",
                channelId: e,
            });
        },
        fetchPins(e, t) {
            var n, i;
            let a = null != (n = null == t ? void 0 : t.reset) && n,
                o = null != (i = null == t ? void 0 : t.limit) ? i : 25,
                u = null == t ? void 0 : t.before;
            (a ||
                (function (e, t) {
                    let n = s.A.getPins(e);
                    if (null == n) return !0;
                    switch (n.state) {
                        case s.e.FAILED:
                            return !0;
                        case s.e.LOADING:
                        case s.e.LOADED_FINISHED:
                            return !1;
                        case s.e.LOADED_HAS_MORE:
                            if (null == t) return 0 === n.items.length;
                            return n.items.at(-1).pinnedAt === t;
                    }
                })(e, u)) &&
                (l.h.dispatch({
                    type: "LOAD_PINNED_MESSAGES",
                    channelId: e,
                    reset: a,
                }),
                r.Bo.get({
                    url: c.Rsh.PINS(e),
                    query: {
                        limit: o,
                        before: null == u ? void 0 : u.toISOString(),
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (t) => {
                        l.h.dispatch({
                            type: "LOAD_PINNED_MESSAGES_SUCCESS",
                            pins: t.body.items,
                            channelId: e,
                            hasMore: t.body.has_more,
                        });
                    },
                    () => {
                        l.h.dispatch({
                            type: "LOAD_PINNED_MESSAGES_FAILURE",
                            channelId: e,
                        });
                    },
                ));
        },
    },
    f = d;
