n.d(t, { BE: () => u, SJ: () => _, Wf: () => d, YC: () => c, n$: () => o });
var i = n(287809),
    l = n(562153),
    r = n(652215),
    a = n(985018),
    s = n(426127);
function o(e, t, n) {
    switch (t) {
        case r.xL.LISTEN:
            return a.intl.formatToPlainString(a.t["/8czH4"], { name: e });
        case r.xL.WATCH:
            return a.intl.formatToPlainString(a.t.BBJXVk, { name: e });
        case r.xL.JOIN:
            return n ? void 0 : a.intl.string(a.t.pkq6Vq);
        case r.xL.STREAM_REQUEST:
            return a.intl.string(s.default.DKHhec);
        case r.xL.JOIN_REQUEST:
        default:
            return a.intl.string(a.t.Ckxb6j);
    }
}
function d(e, t, n) {
    return e.author.id === n
        ? a.intl.string(s.default["8B3U5O"])
        : a.intl.formatToPlainString(s.default["d/qbC0"], { username: (0, l.mG)(t.guild_id, t.id, e.author) });
}
function c(e, t, n, l, r) {
    if (e.author.id === l) {
        if (n.isPrivate()) {
            let e = i.default.getUser(n.getRecipientId());
            if (null != e)
                return r
                    ? a.intl.formatToPlainString(a.t.JddpN2, { username: e.globalName, appName: t })
                    : a.intl.formatToPlainString(a.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return r
            ? a.intl.formatToPlainString(a.t["2N1kNS"], { appName: t })
            : a.intl.formatToPlainString(a.t.IA6uDV, { appName: t });
    }
    return r
        ? a.intl.formatToPlainString(a.t.XE8axA, { username: e.author.globalName, appName: t })
        : a.intl.formatToPlainString(a.t.hgcjOn, { username: e.author.globalName, appName: t });
}
function u(e, t, n, i, l) {
    switch (e.activity?.type) {
        case r.xL.LISTEN:
        case r.xL.WATCH:
        case r.xL.JOIN:
            return a.intl.string(l ? a.t.x1UXGR : a.t["Ek+51n"]);
        case r.xL.STREAM_REQUEST:
            return d(e, n, i);
        case r.xL.JOIN_REQUEST:
        default:
            return c(e, t, n, i, !0);
    }
}
function _(e) {
    let { activityActionType: t, maxPartySize: n, partySize: i } = e;
    return t === r.xL.STREAM_REQUEST
        ? ""
        : t === r.xL.LISTEN
          ? n > 0
              ? a.intl.formatToPlainString(a.t.Zogoou, { partySize: i, maxPartySize: n })
              : a.intl.formatToPlainString(a.t.UGei0j, { partySize: i })
          : n > 0
            ? a.intl.formatToPlainString(a.t.gLu7NU, { partySize: i, maxPartySize: n })
            : a.intl.formatToPlainString(a.t["65JnWC"], { partySize: i });
}
