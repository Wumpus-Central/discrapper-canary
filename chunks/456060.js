n.d(t, { BE: () => u, SJ: () => m, Wf: () => d, YC: () => c, n$: () => o });
var i = n(287809),
    l = n(562153),
    a = n(652215),
    r = n(985018),
    s = n(55705);
function o(e, t, n) {
    switch (t) {
        case a.xL.LISTEN:
            return r.intl.formatToPlainString(r.t["/8czH4"], { name: e });
        case a.xL.WATCH:
            return r.intl.formatToPlainString(r.t.BBJXVk, { name: e });
        case a.xL.JOIN:
            return n ? void 0 : r.intl.string(r.t.pkq6Vq);
        case a.xL.STREAM_REQUEST:
            return r.intl.string(s.default.DKHhec);
        case a.xL.JOIN_REQUEST:
        default:
            return r.intl.string(r.t.Ckxb6j);
    }
}
function d(e, t, n) {
    return e.author.id === n
        ? r.intl.string(s.default["8B3U5O"])
        : r.intl.formatToPlainString(s.default["d/qbC0"], { username: (0, l.mG)(t.guild_id, t.id, e.author) });
}
function c(e, t, n, l, a) {
    if (e.author.id === l) {
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
function u(e, t, n, i, l) {
    switch (e.activity?.type) {
        case a.xL.LISTEN:
        case a.xL.WATCH:
        case a.xL.JOIN:
            return r.intl.string(l ? r.t.x1UXGR : r.t["Ek+51n"]);
        case a.xL.STREAM_REQUEST:
            return d(e, n, i);
        case a.xL.JOIN_REQUEST:
        default:
            return c(e, t, n, i, !0);
    }
}
function m(e) {
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
}
