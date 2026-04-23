n.d(t, { BE: () => u, SJ: () => m, Wf: () => d, YC: () => c, n$: () => o });
var i = n(287809),
    l = n(562153),
    a = n(652215),
    s = n(985018),
    r = n(783198);
function o(e, t, n) {
    switch (t) {
        case a.xL.LISTEN:
            return s.intl.formatToPlainString(s.t["/8czH4"], { name: e });
        case a.xL.WATCH:
            return s.intl.formatToPlainString(s.t.BBJXVk, { name: e });
        case a.xL.JOIN:
            return n ? void 0 : s.intl.string(s.t.pkq6Vq);
        case a.xL.STREAM_REQUEST:
            return s.intl.string(r.default.DKHhec);
        case a.xL.JOIN_REQUEST:
        default:
            return s.intl.string(s.t.Ckxb6j);
    }
}
function d(e, t, n) {
    return e.author.id === n
        ? s.intl.string(r.default["8B3U5O"])
        : s.intl.formatToPlainString(r.default["d/qbC0"], { username: (0, l.mG)(t.guild_id, t.id, e.author) });
}
function c(e, t, n, l, a) {
    if (e.author.id === l) {
        if (n.isPrivate()) {
            let e = i.default.getUser(n.getRecipientId());
            if (null != e)
                return a
                    ? s.intl.formatToPlainString(s.t.JddpN2, { username: e.globalName, appName: t })
                    : s.intl.formatToPlainString(s.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return a
            ? s.intl.formatToPlainString(s.t["2N1kNS"], { appName: t })
            : s.intl.formatToPlainString(s.t.IA6uDV, { appName: t });
    }
    return a
        ? s.intl.formatToPlainString(s.t.XE8axA, { username: e.author.globalName, appName: t })
        : s.intl.formatToPlainString(s.t.hgcjOn, { username: e.author.globalName, appName: t });
}
function u(e, t, n, i, l) {
    switch (e.activity?.type) {
        case a.xL.LISTEN:
        case a.xL.WATCH:
        case a.xL.JOIN:
            return s.intl.string(l ? s.t.x1UXGR : s.t["Ek+51n"]);
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
              ? s.intl.formatToPlainString(s.t.Zogoou, { partySize: i, maxPartySize: n })
              : s.intl.formatToPlainString(s.t.UGei0j, { partySize: i })
          : n > 0
            ? s.intl.formatToPlainString(s.t.gLu7NU, { partySize: i, maxPartySize: n })
            : s.intl.formatToPlainString(s.t["65JnWC"], { partySize: i });
}
