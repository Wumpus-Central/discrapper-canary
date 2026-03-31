n.d(t, { A: () => h }), n(134528), n(947204);
var i = n(562465),
    l = n(73153),
    s = n(198982),
    a = n(867455),
    r = n(966833),
    o = n(157559),
    c = n(652215),
    d = n(985018);
let u = {
        async pinMessage(e, t) {
            let { id: n, name: l } = e;
            await a.A.unarchiveThreadIfNecessary(e.id),
                i.Bo.put({ url: c.Rsh.PIN(n, t), rejectWithError: !0 }).catch((t) => {
                    let n = new s.LG(t),
                        i = n.code,
                        a = d.intl.string(d.t.j2d6Km),
                        r = d.intl.string(d.t.fEptJP);
                    if (null != i)
                        switch (i) {
                            case c.t02.TOO_MANY_PINS_IN_CHANNEL:
                                (a = d.intl.string(d.t.HI88Q3)),
                                    (r = e.isPrivate()
                                        ? d.intl.formatToPlainString(d.t.Q89oQU, { maxPins: c.KL3 })
                                        : d.intl.formatToPlainString(d.t.NnO1S5, { maxPins: c.KL3, channelName: l }));
                                break;
                            case c.t02.INVALID_ACCESS:
                                (a = d.intl.string(d.t["25gfQX"])), (r = d.intl.string(d.t.QNnTwN));
                                break;
                            case c.t02.INVALID_PIN_MESSAGE_CHANNEL:
                                (a = d.intl.string(d.t["Q5G6+m"])), (r = d.intl.string(d.t["5hgPfC"]));
                                break;
                            case c.t02.INVALID_THREAD_ARCHIVE_STATE:
                                (a = d.intl.string(d.t.fu6Lbl)), (r = d.intl.string(d.t.FmrcZM));
                                break;
                            case c.t02.INVALID_ACTION_SYSTEM_MESSAGE:
                                (a = d.intl.string(d.t["zV0/FC"])), (r = d.intl.string(d.t.C4a7xI));
                                break;
                            case c.t02.UNKNOWN_MESSAGE:
                                (a = d.intl.string(d.t.fkqPro)), (r = d.intl.string(d.t.H6fRIg));
                                break;
                            default:
                                (a = d.intl.string(d.t.HI88Q3)),
                                    (r = n.getAnyErrorMessage() ?? d.intl.string(d.t.fEptJP));
                        }
                    o.A.show({ title: a, body: r, confirmText: d.intl.string(d.t.BddRzS) });
                });
        },
        async unpinMessage(e, t) {
            await a.A.unarchiveThreadIfNecessary(e.id),
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
                s = t?.limit ?? 25,
                a = t?.before;
            (n ||
                (function (e, t) {
                    let n = r.A.getPins(e);
                    if (null == n) return !0;
                    switch (n.state) {
                        case r.e.FAILED:
                            return !0;
                        case r.e.LOADING:
                        case r.e.LOADED_FINISHED:
                            return !1;
                        case r.e.LOADED_HAS_MORE:
                            if (null == t) return 0 === n.items.length;
                            return n.items.at(-1).pinnedAt === t;
                    }
                })(e, a)) &&
                (l.h.dispatch({ type: "LOAD_PINNED_MESSAGES", channelId: e, reset: n }),
                i.Bo.get({
                    url: c.Rsh.PINS(e),
                    query: { limit: s, before: a?.toISOString() },
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
    h = u;
