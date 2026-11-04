var i = n(287809),
    s = n(562153),
    a = n(652215),
    l = n(792996),
    r = n(861089);
function o(e, t, n) {
    return e.author.id === n
        ? l.intl.string(r.default["8B3U5O"])
        : l.intl.formatToPlainString(r.default["d/qbC0"], { username: (0, s.mG)(t.guild_id, t.id, e.author) });
}
function u(e, t, n, s, a) {
    if (e.author.id === s) {
        if (n.isPrivate()) {
            let e = i.default.getUser(n.getRecipientId());
            if (null != e)
                return a
                    ? l.intl.formatToPlainString(l.t.JddpN2, { username: e.globalName, appName: t })
                    : l.intl.formatToPlainString(l.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return a
            ? l.intl.formatToPlainString(l.t["2N1kNS"], { appName: t })
            : l.intl.formatToPlainString(l.t.IA6uDV, { appName: t });
    }
    return a
        ? l.intl.formatToPlainString(l.t.XE8axA, { username: e.author.globalName, appName: t })
        : l.intl.formatToPlainString(l.t.hgcjOn, { username: e.author.globalName, appName: t });
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
                    return l.intl.string(s ? l.t.x1UXGR : l.t["Ek+51n"]);
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
                      ? l.intl.formatToPlainString(l.t.Zogoou, { partySize: i, maxPartySize: n })
                      : l.intl.formatToPlainString(l.t.UGei0j, { partySize: i })
                  : n > 0
                    ? l.intl.formatToPlainString(l.t.gLu7NU, { partySize: i, maxPartySize: n })
                    : l.intl.formatToPlainString(l.t["65JnWC"], { partySize: i });
        },
        Wf: o,
        YC: u,
        n$: function (e, t, n) {
            switch (t) {
                case a.xL.LISTEN:
                    return l.intl.formatToPlainString(l.t["/8czH4"], { name: e });
                case a.xL.WATCH:
                    return l.intl.formatToPlainString(l.t.BBJXVk, { name: e });
                case a.xL.JOIN:
                    return n ? void 0 : l.intl.string(l.t.pkq6Vq);
                case a.xL.STREAM_REQUEST:
                    return l.intl.string(r.default.DKHhec);
                case a.xL.JOIN_REQUEST:
                default:
                    return l.intl.string(l.t.Ckxb6j);
            }
        },
        uk: function (e, t, n) {
            return e.author.id === n
                ? l.intl.string(r.default["8B3U5O"])
                : l.intl.format(r.default["d/qbC0"], { username: (0, s.mG)(t.guild_id, t.id, e.author) });
        },
    },
);
