n.d(e, { BE: () => E, SJ: () => _, Wf: () => u, YC: () => c, n$: () => r, uk: () => d });
var i = n(287809),
    s = n(562153),
    a = n(652215),
    l = n(105292),
    o = n(431788);
function r(t, e, n) {
    switch (e) {
        case a.xL.LISTEN:
            return l.intl.formatToPlainString(l.t["/8czH4"], { name: t });
        case a.xL.WATCH:
            return l.intl.formatToPlainString(l.t.BBJXVk, { name: t });
        case a.xL.JOIN:
            return n ? void 0 : l.intl.string(l.t.pkq6Vq);
        case a.xL.STREAM_REQUEST:
            return l.intl.string(o.default.DKHhec);
        case a.xL.JOIN_REQUEST:
        default:
            return l.intl.string(l.t.Ckxb6j);
    }
}
function u(t, e, n) {
    return t.author.id === n
        ? l.intl.string(o.default["8B3U5O"])
        : l.intl.formatToPlainString(o.default["d/qbC0"], { username: (0, s.mG)(e.guild_id, e.id, t.author) });
}
function d(t, e, n) {
    return t.author.id === n
        ? l.intl.string(o.default["8B3U5O"])
        : l.intl.format(o.default["d/qbC0"], { username: (0, s.mG)(e.guild_id, e.id, t.author) });
}
function c(t, e, n, s, a) {
    if (t.author.id === s) {
        if (n.isPrivate()) {
            let t = i.default.getUser(n.getRecipientId());
            if (null != t)
                return a
                    ? l.intl.formatToPlainString(l.t.JddpN2, { username: t.globalName, appName: e })
                    : l.intl.formatToPlainString(l.t.gYVkSW, { username: t.globalName, appName: e });
        }
        return a
            ? l.intl.formatToPlainString(l.t["2N1kNS"], { appName: e })
            : l.intl.formatToPlainString(l.t.IA6uDV, { appName: e });
    }
    return a
        ? l.intl.formatToPlainString(l.t.XE8axA, { username: t.author.globalName, appName: e })
        : l.intl.formatToPlainString(l.t.hgcjOn, { username: t.author.globalName, appName: e });
}
function E(t, e, n, i, s) {
    switch (t.activity?.type) {
        case a.xL.LISTEN:
        case a.xL.WATCH:
        case a.xL.JOIN:
            return l.intl.string(s ? l.t.x1UXGR : l.t["Ek+51n"]);
        case a.xL.STREAM_REQUEST:
            return u(t, n, i);
        case a.xL.JOIN_REQUEST:
        default:
            return c(t, e, n, i, !0);
    }
}
function _(t) {
    let { activityActionType: e, maxPartySize: n, partySize: i } = t;
    return e === a.xL.STREAM_REQUEST
        ? ""
        : e === a.xL.LISTEN
          ? n > 0
              ? l.intl.formatToPlainString(l.t.Zogoou, { partySize: i, maxPartySize: n })
              : l.intl.formatToPlainString(l.t.UGei0j, { partySize: i })
          : n > 0
            ? l.intl.formatToPlainString(l.t.gLu7NU, { partySize: i, maxPartySize: n })
            : l.intl.formatToPlainString(l.t["65JnWC"], { partySize: i });
}
