n.d(e, { BE: () => E, SJ: () => _, Wf: () => u, YC: () => c, n$: () => o, uk: () => d });
var i = n(287809),
    a = n(562153),
    l = n(652215),
    s = n(105292),
    r = n(905322);
function o(t, e, n) {
    switch (e) {
        case l.xL.LISTEN:
            return s.intl.formatToPlainString(s.t["/8czH4"], { name: t });
        case l.xL.WATCH:
            return s.intl.formatToPlainString(s.t.BBJXVk, { name: t });
        case l.xL.JOIN:
            return n ? void 0 : s.intl.string(s.t.pkq6Vq);
        case l.xL.STREAM_REQUEST:
            return s.intl.string(r.default.DKHhec);
        case l.xL.JOIN_REQUEST:
        default:
            return s.intl.string(s.t.Ckxb6j);
    }
}
function u(t, e, n) {
    return t.author.id === n
        ? s.intl.string(r.default["8B3U5O"])
        : s.intl.formatToPlainString(r.default["d/qbC0"], { username: (0, a.mG)(e.guild_id, e.id, t.author) });
}
function d(t, e, n) {
    return t.author.id === n
        ? s.intl.string(r.default["8B3U5O"])
        : s.intl.format(r.default["d/qbC0"], { username: (0, a.mG)(e.guild_id, e.id, t.author) });
}
function c(t, e, n, a, l) {
    if (t.author.id === a) {
        if (n.isPrivate()) {
            let t = i.default.getUser(n.getRecipientId());
            if (null != t)
                return l
                    ? s.intl.formatToPlainString(s.t.JddpN2, { username: t.globalName, appName: e })
                    : s.intl.formatToPlainString(s.t.gYVkSW, { username: t.globalName, appName: e });
        }
        return l
            ? s.intl.formatToPlainString(s.t["2N1kNS"], { appName: e })
            : s.intl.formatToPlainString(s.t.IA6uDV, { appName: e });
    }
    return l
        ? s.intl.formatToPlainString(s.t.XE8axA, { username: t.author.globalName, appName: e })
        : s.intl.formatToPlainString(s.t.hgcjOn, { username: t.author.globalName, appName: e });
}
function E(t, e, n, i, a) {
    switch (t.activity?.type) {
        case l.xL.LISTEN:
        case l.xL.WATCH:
        case l.xL.JOIN:
            return s.intl.string(a ? s.t.x1UXGR : s.t["Ek+51n"]);
        case l.xL.STREAM_REQUEST:
            return u(t, n, i);
        case l.xL.JOIN_REQUEST:
        default:
            return c(t, e, n, i, !0);
    }
}
function _(t) {
    let { activityActionType: e, maxPartySize: n, partySize: i } = t;
    return e === l.xL.STREAM_REQUEST
        ? ""
        : e === l.xL.LISTEN
          ? n > 0
              ? s.intl.formatToPlainString(s.t.Zogoou, { partySize: i, maxPartySize: n })
              : s.intl.formatToPlainString(s.t.UGei0j, { partySize: i })
          : n > 0
            ? s.intl.formatToPlainString(s.t.gLu7NU, { partySize: i, maxPartySize: n })
            : s.intl.formatToPlainString(s.t["65JnWC"], { partySize: i });
}
