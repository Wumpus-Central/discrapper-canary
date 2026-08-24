n.d(t, { A: () => E }), n(134528), n(947204);
var i = n(636537),
    l = n(228366),
    r = n(913122),
    s = n(867455),
    a = n(966833),
    o = n(157559),
    c = n(652215),
    d = n(375708);
let u = {
        async pinMessage(e, t) {
            let { id: n, name: l } = e;
            await s.A.unarchiveThreadIfNecessary(e.id),
                i.Bo.put({ url: c.Rsh.PIN(n, t), rejectWithError: !0 }).catch((t) => {
                    let n = new r.LG(t),
                        i = n.code,
                        s = d.intl.string(d.t.j2d6Km),
                        a = d.intl.string(d.t.fEptJP);
                    if (null != i)
                        switch (i) {
                            case c.t02.TOO_MANY_PINS_IN_CHANNEL:
                                (s = d.intl.string(d.t.HI88Q3)),
                                    (a = e.isPrivate()
                                        ? d.intl.formatToPlainString(d.t.Q89oQU, { maxPins: c.KL3 })
                                        : d.intl.formatToPlainString(d.t.NnO1S5, { maxPins: c.KL3, channelName: l }));
                                break;
                            case c.t02.INVALID_ACCESS:
                                (s = d.intl.string(d.t["25gfQX"])), (a = d.intl.string(d.t.QNnTwN));
                                break;
                            case c.t02.INVALID_PIN_MESSAGE_CHANNEL:
                                (s = d.intl.string(d.t["Q5G6+m"])), (a = d.intl.string(d.t["5hgPfC"]));
                                break;
                            case c.t02.INVALID_THREAD_ARCHIVE_STATE:
                                (s = d.intl.string(d.t.fu6Lbl)), (a = d.intl.string(d.t.FmrcZM));
                                break;
                            case c.t02.INVALID_ACTION_SYSTEM_MESSAGE:
                                (s = d.intl.string(d.t["zV0/FC"])), (a = d.intl.string(d.t.C4a7xI));
                                break;
                            case c.t02.UNKNOWN_MESSAGE:
                                (s = d.intl.string(d.t.fkqPro)), (a = d.intl.string(d.t.H6fRIg));
                                break;
                            default:
                                (s = d.intl.string(d.t.HI88Q3)),
                                    (a = n.getAnyErrorMessage() ?? d.intl.string(d.t.fEptJP));
                        }
                    o.A.show({ title: s, body: a, confirmText: d.intl.string(d.t.BddRzS) });
                });
        },
        async unpinMessage(e, t) {
            await s.A.unarchiveThreadIfNecessary(e.id),
                i.Bo.del({ url: c.Rsh.PIN(e.id, t), oldFormErrors: !0, rejectWithError: !0 }).catch(() =>
                    o.A.show({
                        title: d.intl.string(d.t.xFjByk),
                        body: d.intl.string(d.t["0R/Toc"]),
                        confirmText: d.intl.string(d.t["7NqTJn"]),
                        cancelText: d.intl.string(d.t["ETE/oC"]),
                        onConfirm: u.unpinMessage.bind(u, e, t),
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
                    url: c.Rsh.PINS(e),
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
    E = u;
