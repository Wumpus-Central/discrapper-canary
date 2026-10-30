n.d(t, { BE: () => E, SJ: () => _, Wf: () => u, YC: () => d, n$: () => o, uk: () => c });
var i = n(287809),
    a = n(562153),
    s = n(652215),
    l = n(105292),
    r = n(51685);
function o(e, t, n) {
    switch (t) {
        case s.xL.LISTEN:
            return l.intl.formatToPlainString(l.t["/8czH4"], { name: e });
        case s.xL.WATCH:
            return l.intl.formatToPlainString(l.t.BBJXVk, { name: e });
        case s.xL.JOIN:
            return n ? void 0 : l.intl.string(l.t.pkq6Vq);
        case s.xL.STREAM_REQUEST:
            return l.intl.string(r.default.DKHhec);
        case s.xL.JOIN_REQUEST:
        default:
            return l.intl.string(l.t.Ckxb6j);
    }
}
function u(e, t, n) {
    return e.author.id === n
        ? l.intl.string(r.default["8B3U5O"])
        : l.intl.formatToPlainString(r.default["d/qbC0"], { username: (0, a.mG)(t.guild_id, t.id, e.author) });
}
function c(e, t, n) {
    return e.author.id === n
        ? l.intl.string(r.default["8B3U5O"])
        : l.intl.format(r.default["d/qbC0"], { username: (0, a.mG)(t.guild_id, t.id, e.author) });
}
function d(e, t, n, a, s) {
    if (e.author.id === a) {
        if (n.isPrivate()) {
            let e = i.default.getUser(n.getRecipientId());
            if (null != e)
                return s
                    ? l.intl.formatToPlainString(l.t.JddpN2, { username: e.globalName, appName: t })
                    : l.intl.formatToPlainString(l.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return s
            ? l.intl.formatToPlainString(l.t["2N1kNS"], { appName: t })
            : l.intl.formatToPlainString(l.t.IA6uDV, { appName: t });
    }
    return s
        ? l.intl.formatToPlainString(l.t.XE8axA, { username: e.author.globalName, appName: t })
        : l.intl.formatToPlainString(l.t.hgcjOn, { username: e.author.globalName, appName: t });
}
function E(e, t, n, i, a) {
    switch (e.activity?.type) {
        case s.xL.LISTEN:
        case s.xL.WATCH:
        case s.xL.JOIN:
            return l.intl.string(a ? l.t.x1UXGR : l.t["Ek+51n"]);
        case s.xL.STREAM_REQUEST:
            return u(e, n, i);
        case s.xL.JOIN_REQUEST:
        default:
            return d(e, t, n, i, !0);
    }
}
function _(e) {
    let { activityActionType: t, maxPartySize: n, partySize: i } = e;
    return t === s.xL.STREAM_REQUEST
        ? ""
        : t === s.xL.LISTEN
          ? n > 0
              ? l.intl.formatToPlainString(l.t.Zogoou, { partySize: i, maxPartySize: n })
              : l.intl.formatToPlainString(l.t.UGei0j, { partySize: i })
          : n > 0
            ? l.intl.formatToPlainString(l.t.gLu7NU, { partySize: i, maxPartySize: n })
            : l.intl.formatToPlainString(l.t["65JnWC"], { partySize: i });
}
