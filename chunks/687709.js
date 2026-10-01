(i.d(e, { A: () => h }), i(134528), i(947204));
var n = i(636537),
    r = i(73153),
    s = i(913122),
    l = i(867455),
    a = i(966833),
    o = i(157559),
    c = i(652215),
    g = i(375708);
let d = {
        async pinMessage(t, e) {
            let { id: i, name: r } = t;
            (await l.A.unarchiveThreadIfNecessary(t.id),
                n.Bo.put({ url: c.Rsh.PIN(i, e), rejectWithError: !0 }).catch((e) => {
                    let i = new s.LG(e),
                        n = i.code,
                        l = g.intl.string(g.t.j2d6Km),
                        a = g.intl.string(g.t.fEptJP);
                    if (null != n)
                        switch (n) {
                            case c.t02.TOO_MANY_PINS_IN_CHANNEL:
                                ((l = g.intl.string(g.t.HI88Q3)),
                                    (a = t.isPrivate()
                                        ? g.intl.formatToPlainString(g.t.Q89oQU, { maxPins: c.KL3 })
                                        : g.intl.formatToPlainString(g.t.NnO1S5, { maxPins: c.KL3, channelName: r })));
                                break;
                            case c.t02.INVALID_ACCESS:
                                ((l = g.intl.string(g.t["25gfQX"])), (a = g.intl.string(g.t.QNnTwN)));
                                break;
                            case c.t02.INVALID_PIN_MESSAGE_CHANNEL:
                                ((l = g.intl.string(g.t["Q5G6+m"])), (a = g.intl.string(g.t["5hgPfC"])));
                                break;
                            case c.t02.INVALID_THREAD_ARCHIVE_STATE:
                                ((l = g.intl.string(g.t.fu6Lbl)), (a = g.intl.string(g.t.FmrcZM)));
                                break;
                            case c.t02.INVALID_ACTION_SYSTEM_MESSAGE:
                                ((l = g.intl.string(g.t["zV0/FC"])), (a = g.intl.string(g.t.C4a7xI)));
                                break;
                            case c.t02.UNKNOWN_MESSAGE:
                                ((l = g.intl.string(g.t.fkqPro)), (a = g.intl.string(g.t.H6fRIg)));
                                break;
                            default:
                                ((l = g.intl.string(g.t.HI88Q3)),
                                    (a = i.getAnyErrorMessage() ?? g.intl.string(g.t.fEptJP)));
                        }
                    o.A.show({ title: l, body: a, confirmText: g.intl.string(g.t.BddRzS) });
                }));
        },
        async unpinMessage(t, e) {
            (await l.A.unarchiveThreadIfNecessary(t.id),
                n.Bo.del({ url: c.Rsh.PIN(t.id, e), oldFormErrors: !0, rejectWithError: !0 }).catch(() =>
                    o.A.show({
                        title: g.intl.string(g.t.xFjByk),
                        body: g.intl.string(g.t["0R/Toc"]),
                        confirmText: g.intl.string(g.t["7NqTJn"]),
                        cancelText: g.intl.string(g.t["ETE/oC"]),
                        onConfirm: d.unpinMessage.bind(d, t, e),
                    }),
                ));
        },
        ackPins(t) {
            r.h.dispatch({ type: "CHANNEL_PINS_ACK", channelId: t });
        },
        fetchPins(t, e) {
            let i = e?.reset ?? !1,
                s = e?.limit ?? 25,
                l = e?.before;
            (i ||
                (function (t, e) {
                    let i = a.A.getPins(t);
                    if (null == i) return !0;
                    switch (i.state) {
                        case a.e.FAILED:
                            return !0;
                        case a.e.LOADING:
                        case a.e.LOADED_FINISHED:
                            return !1;
                        case a.e.LOADED_HAS_MORE:
                            if (null == e) return 0 === i.items.length;
                            return i.items.at(-1).pinnedAt === e;
                    }
                })(t, l)) &&
                (r.h.dispatch({ type: "LOAD_PINNED_MESSAGES", channelId: t, reset: i }),
                n.Bo.get({
                    url: c.Rsh.PINS(t),
                    query: { limit: s, before: l?.toISOString() },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (e) => {
                        r.h.dispatch({
                            type: "LOAD_PINNED_MESSAGES_SUCCESS",
                            pins: e.body.items,
                            channelId: t,
                            hasMore: e.body.has_more,
                        });
                    },
                    () => {
                        r.h.dispatch({ type: "LOAD_PINNED_MESSAGES_FAILURE", channelId: t });
                    },
                ));
        },
    },
    h = d;
