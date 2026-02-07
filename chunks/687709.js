"use strict";
s.d(t, { A: () => p }), s(134528), s(947204);
var n = s(562465),
    i = s(73153),
    r = s(198982),
    a = s(867455),
    l = s(966833),
    c = s(157559),
    o = s(652215),
    d = s(985018);
let u = {
        async pinMessage(e, t) {
            let { id: s, name: i } = e;
            await a.A.unarchiveThreadIfNecessary(e.id),
                n.Bo.put({ url: o.Rsh.PIN(s, t), rejectWithError: !0 }).catch((t) => {
                    let s = new r.LG(t),
                        n = s.code,
                        a = d.intl.string(d.t.j2d6Km),
                        l = d.intl.string(d.t.fEptJP);
                    if (null != n)
                        switch (n) {
                            case o.t02.TOO_MANY_PINS_IN_CHANNEL:
                                (a = d.intl.string(d.t.HI88Q3)),
                                    (l = e.isPrivate()
                                        ? d.intl.formatToPlainString(d.t.Q89oQU, { maxPins: o.KL3 })
                                        : d.intl.formatToPlainString(d.t.NnO1S5, { maxPins: o.KL3, channelName: i }));
                                break;
                            case o.t02.INVALID_ACCESS:
                                (a = d.intl.string(d.t["25gfQX"])), (l = d.intl.string(d.t.QNnTwN));
                                break;
                            case o.t02.INVALID_PIN_MESSAGE_CHANNEL:
                                (a = d.intl.string(d.t["Q5G6+m"])), (l = d.intl.string(d.t["5hgPfC"]));
                                break;
                            case o.t02.INVALID_THREAD_ARCHIVE_STATE:
                                (a = d.intl.string(d.t.fu6Lbl)), (l = d.intl.string(d.t.FmrcZM));
                                break;
                            case o.t02.INVALID_ACTION_SYSTEM_MESSAGE:
                                (a = d.intl.string(d.t["zV0/FC"])), (l = d.intl.string(d.t.C4a7xI));
                                break;
                            case o.t02.UNKNOWN_MESSAGE:
                                (a = d.intl.string(d.t.fkqPro)), (l = d.intl.string(d.t.H6fRIg));
                                break;
                            default:
                                (a = d.intl.string(d.t.HI88Q3)),
                                    (l = s.getAnyErrorMessage() ?? d.intl.string(d.t.fEptJP));
                        }
                    c.A.show({ title: a, body: l, confirmText: d.intl.string(d.t.BddRzS) });
                });
        },
        async unpinMessage(e, t) {
            await a.A.unarchiveThreadIfNecessary(e.id),
                n.Bo.del({ url: o.Rsh.PIN(e.id, t), oldFormErrors: !0, rejectWithError: !0 }).catch(() =>
                    c.A.show({
                        title: d.intl.string(d.t.xFjByk),
                        body: d.intl.string(d.t["0R/Toc"]),
                        confirmText: d.intl.string(d.t["7NqTJn"]),
                        cancelText: d.intl.string(d.t["ETE/oC"]),
                        onConfirm: u.unpinMessage.bind(u, e, t),
                    }),
                );
        },
        ackPins(e) {
            i.h.dispatch({ type: "CHANNEL_PINS_ACK", channelId: e });
        },
        fetchPins(e, t) {
            let s = t?.reset ?? !1,
                r = t?.limit ?? 25,
                a = t?.before;
            (s ||
                (function (e, t) {
                    let s = l.A.getPins(e);
                    if (null == s) return !0;
                    switch (s.state) {
                        case l.e.FAILED:
                            return !0;
                        case l.e.LOADING:
                        case l.e.LOADED_FINISHED:
                            return !1;
                        case l.e.LOADED_HAS_MORE:
                            if (null == t) return 0 === s.items.length;
                            return s.items.at(-1).pinnedAt === t;
                    }
                })(e, a)) &&
                (i.h.dispatch({ type: "LOAD_PINNED_MESSAGES", channelId: e, reset: s }),
                n.Bo.get({
                    url: o.Rsh.PINS(e),
                    query: { limit: r, before: a?.toISOString() },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (t) => {
                        i.h.dispatch({
                            type: "LOAD_PINNED_MESSAGES_SUCCESS",
                            pins: t.body.items,
                            channelId: e,
                            hasMore: t.body.has_more,
                        });
                    },
                    () => {
                        i.h.dispatch({ type: "LOAD_PINNED_MESSAGES_FAILURE", channelId: e });
                    },
                ));
        },
    },
    p = u;
