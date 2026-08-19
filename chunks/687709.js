n.d(t, { A: () => E }), n(134528), n(947204);
var i = n(636537),
    l = n(228366),
    r = n(913122),
    s = n(867455),
    a = n(966833),
    o = n(157559),
    d = n(652215),
    u = n(375708);
let c = {
        async pinMessage(e, t) {
            let { id: n, name: l } = e;
            await s.A.unarchiveThreadIfNecessary(e.id),
                i.Bo.put({ url: d.Rsh.PIN(n, t), rejectWithError: !0 }).catch((t) => {
                    let n = new r.LG(t),
                        i = n.code,
                        s = u.intl.string(u.t.j2d6Km),
                        a = u.intl.string(u.t.fEptJP);
                    if (null != i)
                        switch (i) {
                            case d.t02.TOO_MANY_PINS_IN_CHANNEL:
                                (s = u.intl.string(u.t.HI88Q3)),
                                    (a = e.isPrivate()
                                        ? u.intl.formatToPlainString(u.t.Q89oQU, { maxPins: d.KL3 })
                                        : u.intl.formatToPlainString(u.t.NnO1S5, { maxPins: d.KL3, channelName: l }));
                                break;
                            case d.t02.INVALID_ACCESS:
                                (s = u.intl.string(u.t["25gfQX"])), (a = u.intl.string(u.t.QNnTwN));
                                break;
                            case d.t02.INVALID_PIN_MESSAGE_CHANNEL:
                                (s = u.intl.string(u.t["Q5G6+m"])), (a = u.intl.string(u.t["5hgPfC"]));
                                break;
                            case d.t02.INVALID_THREAD_ARCHIVE_STATE:
                                (s = u.intl.string(u.t.fu6Lbl)), (a = u.intl.string(u.t.FmrcZM));
                                break;
                            case d.t02.INVALID_ACTION_SYSTEM_MESSAGE:
                                (s = u.intl.string(u.t["zV0/FC"])), (a = u.intl.string(u.t.C4a7xI));
                                break;
                            case d.t02.UNKNOWN_MESSAGE:
                                (s = u.intl.string(u.t.fkqPro)), (a = u.intl.string(u.t.H6fRIg));
                                break;
                            default:
                                (s = u.intl.string(u.t.HI88Q3)),
                                    (a = n.getAnyErrorMessage() ?? u.intl.string(u.t.fEptJP));
                        }
                    o.A.show({ title: s, body: a, confirmText: u.intl.string(u.t.BddRzS) });
                });
        },
        async unpinMessage(e, t) {
            await s.A.unarchiveThreadIfNecessary(e.id),
                i.Bo.del({ url: d.Rsh.PIN(e.id, t), oldFormErrors: !0, rejectWithError: !0 }).catch(() =>
                    o.A.show({
                        title: u.intl.string(u.t.xFjByk),
                        body: u.intl.string(u.t["0R/Toc"]),
                        confirmText: u.intl.string(u.t["7NqTJn"]),
                        cancelText: u.intl.string(u.t["ETE/oC"]),
                        onConfirm: c.unpinMessage.bind(c, e, t),
                    }),
                );
        },
        ackPins(e) {
            l.h.dispatch({ type: "CHANNEL_PINS_ACK", channelId: e });
        },
        fetchPins(e, t) {
            let n = t?.reset ?? !1,
                r = t?.limit ?? 25,
                s = t?.before;
            (n ||
                (function (e, t) {
                    let n = a.A.getPins(e);
                    if (null == n) return !0;
                    switch (n.state) {
                        case a.e.FAILED:
                            return !0;
                        case a.e.LOADING:
                        case a.e.LOADED_FINISHED:
                            return !1;
                        case a.e.LOADED_HAS_MORE:
                            if (null == t) return 0 === n.items.length;
                            return n.items.at(-1).pinnedAt === t;
                    }
                })(e, s)) &&
                (l.h.dispatch({ type: "LOAD_PINNED_MESSAGES", channelId: e, reset: n }),
                i.Bo.get({
                    url: d.Rsh.PINS(e),
                    query: { limit: r, before: s?.toISOString() },
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
                        l.h.dispatch({ type: "LOAD_PINNED_MESSAGES_FAILURE", channelId: e });
                    },
                ));
        },
    },
    E = c;
