n.d(t, { A: () => h }), n(134528), n(947204);
var i = n(562465),
    l = n(73153),
    s = n(198982),
    a = n(867455),
    r = n(966833),
    o = n(157559),
    d = n(652215),
    c = n(985018);
let u = {
        async pinMessage(e, t) {
            let { id: n, name: l } = e;
            await a.A.unarchiveThreadIfNecessary(e.id),
                i.Bo.put({ url: d.Rsh.PIN(n, t), rejectWithError: !0 }).catch((t) => {
                    let n = new s.LG(t),
                        i = n.code,
                        a = c.intl.string(c.t.j2d6Km),
                        r = c.intl.string(c.t.fEptJP);
                    if (null != i)
                        switch (i) {
                            case d.t02.TOO_MANY_PINS_IN_CHANNEL:
                                (a = c.intl.string(c.t.HI88Q3)),
                                    (r = e.isPrivate()
                                        ? c.intl.formatToPlainString(c.t.Q89oQU, { maxPins: d.KL3 })
                                        : c.intl.formatToPlainString(c.t.NnO1S5, { maxPins: d.KL3, channelName: l }));
                                break;
                            case d.t02.INVALID_ACCESS:
                                (a = c.intl.string(c.t["25gfQX"])), (r = c.intl.string(c.t.QNnTwN));
                                break;
                            case d.t02.INVALID_PIN_MESSAGE_CHANNEL:
                                (a = c.intl.string(c.t["Q5G6+m"])), (r = c.intl.string(c.t["5hgPfC"]));
                                break;
                            case d.t02.INVALID_THREAD_ARCHIVE_STATE:
                                (a = c.intl.string(c.t.fu6Lbl)), (r = c.intl.string(c.t.FmrcZM));
                                break;
                            case d.t02.INVALID_ACTION_SYSTEM_MESSAGE:
                                (a = c.intl.string(c.t["zV0/FC"])), (r = c.intl.string(c.t.C4a7xI));
                                break;
                            case d.t02.UNKNOWN_MESSAGE:
                                (a = c.intl.string(c.t.fkqPro)), (r = c.intl.string(c.t.H6fRIg));
                                break;
                            default:
                                (a = c.intl.string(c.t.HI88Q3)),
                                    (r = n.getAnyErrorMessage() ?? c.intl.string(c.t.fEptJP));
                        }
                    o.A.show({ title: a, body: r, confirmText: c.intl.string(c.t.BddRzS) });
                });
        },
        async unpinMessage(e, t) {
            await a.A.unarchiveThreadIfNecessary(e.id),
                i.Bo.del({ url: d.Rsh.PIN(e.id, t), oldFormErrors: !0, rejectWithError: !0 }).catch(() =>
                    o.A.show({
                        title: c.intl.string(c.t.xFjByk),
                        body: c.intl.string(c.t["0R/Toc"]),
                        confirmText: c.intl.string(c.t["7NqTJn"]),
                        cancelText: c.intl.string(c.t["ETE/oC"]),
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
                    url: d.Rsh.PINS(e),
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
