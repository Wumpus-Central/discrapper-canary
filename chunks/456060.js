var i = n(287809),
    s = n(562153),
    a = n(652215),
    r = n(792996),
    l = n(861089);
function o(e, t, n) {
    return e.author.id === n
        ? r.intl.string(l.default["8B3U5O"])
        : r.intl.formatToPlainString(l.default["d/qbC0"], { username: (0, s.mG)(t.guild_id, t.id, e.author) });
}
function u(e, t, n, s, a) {
    if (e.author.id === s) {
        if (n.isPrivate()) {
            let e = i.default.getUser(n.getRecipientId());
            if (null != e)
                return a
                    ? r.intl.formatToPlainString(r.t.JddpN2, { username: e.globalName, appName: t })
                    : r.intl.formatToPlainString(r.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return a
            ? r.intl.formatToPlainString(r.t["2N1kNS"], { appName: t })
            : r.intl.formatToPlainString(r.t.IA6uDV, { appName: t });
    }
    return a
        ? r.intl.formatToPlainString(r.t.XE8axA, { username: e.author.globalName, appName: t })
        : r.intl.formatToPlainString(r.t.hgcjOn, { username: e.author.globalName, appName: t });
}
n.d(
    t,
    {},
    {
        BE: function (e, t, n, i, s) {
            switch (e.activity?.type) {
                case a.xL.LISTEN:
                case a.xL.WATCH:
                case a.xL.JOIN:
                    return r.intl.string(s ? r.t.x1UXGR : r.t["Ek+51n"]);
                case a.xL.STREAM_REQUEST:
                    return o(e, n, i);
                case a.xL.JOIN_REQUEST:
                default:
                    return u(e, t, n, i, !0);
            }
        },
        SJ: function (e) {
            let { activityActionType: t, maxPartySize: n, partySize: i } = e;
            return t === a.xL.STREAM_REQUEST
                ? ""
                : t === a.xL.LISTEN
                  ? n > 0
                      ? r.intl.formatToPlainString(r.t.Zogoou, { partySize: i, maxPartySize: n })
                      : r.intl.formatToPlainString(r.t.UGei0j, { partySize: i })
                  : n > 0
                    ? r.intl.formatToPlainString(r.t.gLu7NU, { partySize: i, maxPartySize: n })
                    : r.intl.formatToPlainString(r.t["65JnWC"], { partySize: i });
        },
        Wf: o,
        YC: u,
        n$: function (e, t, n) {
            switch (t) {
                case a.xL.LISTEN:
                    return r.intl.formatToPlainString(r.t["/8czH4"], { name: e });
                case a.xL.WATCH:
                    return r.intl.formatToPlainString(r.t.BBJXVk, { name: e });
                case a.xL.JOIN:
                    return n ? void 0 : r.intl.string(r.t.pkq6Vq);
                case a.xL.STREAM_REQUEST:
                    return r.intl.string(l.default.DKHhec);
                case a.xL.JOIN_REQUEST:
                default:
                    return r.intl.string(r.t.Ckxb6j);
            }
        },
        uk: function (e, t, n) {
            return e.author.id === n
                ? r.intl.string(l.default["8B3U5O"])
                : r.intl.format(l.default["d/qbC0"], { username: (0, s.mG)(t.guild_id, t.id, e.author) });
        },
    },
);
