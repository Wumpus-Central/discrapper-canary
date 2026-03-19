n.d(t, { BE: () => u, SJ: () => _, Wf: () => d, YC: () => c, n$: () => o });
var i = n(287809),
    r = n(562153),
    a = n(652215),
    l = n(985018),
    s = n(55705);
function o(e, t, n) {
    switch (t) {
        case a.xL.LISTEN:
            return l.intl.formatToPlainString(l.t["/8czH4"], { name: e });
        case a.xL.WATCH:
            return l.intl.formatToPlainString(l.t.BBJXVk, { name: e });
        case a.xL.JOIN:
            return n ? void 0 : l.intl.string(l.t.pkq6Vq);
        case a.xL.STREAM_REQUEST:
            return l.intl.string(s.default.DKHhec);
        case a.xL.JOIN_REQUEST:
        default:
            return l.intl.string(l.t.Ckxb6j);
    }
}
function d(e, t, n) {
    return e.author.id === n
        ? l.intl.string(s.default["8B3U5O"])
        : l.intl.formatToPlainString(s.default["d/qbC0"], { username: (0, r.mG)(t.guild_id, t.id, e.author) });
}
function c(e, t, n, r, a) {
    if (e.author.id === r) {
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
function u(e, t, n, i, r) {
    switch (e.activity?.type) {
        case a.xL.LISTEN:
        case a.xL.WATCH:
        case a.xL.JOIN:
            return l.intl.string(r ? l.t.x1UXGR : l.t["Ek+51n"]);
        case a.xL.STREAM_REQUEST:
            return d(e, n, i);
        case a.xL.JOIN_REQUEST:
        default:
            return c(e, t, n, i, !0);
    }
}
function _(e) {
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
}
