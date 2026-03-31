n.d(t, { BE: () => u, SJ: () => _, Wf: () => d, YC: () => c, n$: () => o });
var i = n(287809),
    a = n(562153),
    r = n(652215),
    l = n(985018),
    s = n(55705);
function o(e, t, n) {
    switch (t) {
        case r.xL.LISTEN:
            return l.intl.formatToPlainString(l.t["/8czH4"], { name: e });
        case r.xL.WATCH:
            return l.intl.formatToPlainString(l.t.BBJXVk, { name: e });
        case r.xL.JOIN:
            return n ? void 0 : l.intl.string(l.t.pkq6Vq);
        case r.xL.STREAM_REQUEST:
            return l.intl.string(s.default.DKHhec);
        case r.xL.JOIN_REQUEST:
        default:
            return l.intl.string(l.t.Ckxb6j);
    }
}
function d(e, t, n) {
    return e.author.id === n
        ? l.intl.string(s.default["8B3U5O"])
        : l.intl.formatToPlainString(s.default["d/qbC0"], { username: (0, a.mG)(t.guild_id, t.id, e.author) });
}
function c(e, t, n, a, r) {
    if (e.author.id === a) {
        if (n.isPrivate()) {
            let e = i.default.getUser(n.getRecipientId());
            if (null != e)
                return r
                    ? l.intl.formatToPlainString(l.t.JddpN2, { username: e.globalName, appName: t })
                    : l.intl.formatToPlainString(l.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return r
            ? l.intl.formatToPlainString(l.t["2N1kNS"], { appName: t })
            : l.intl.formatToPlainString(l.t.IA6uDV, { appName: t });
    }
    return r
        ? l.intl.formatToPlainString(l.t.XE8axA, { username: e.author.globalName, appName: t })
        : l.intl.formatToPlainString(l.t.hgcjOn, { username: e.author.globalName, appName: t });
}
function u(e, t, n, i, a) {
    switch (e.activity?.type) {
        case r.xL.LISTEN:
        case r.xL.WATCH:
        case r.xL.JOIN:
            return l.intl.string(a ? l.t.x1UXGR : l.t["Ek+51n"]);
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
              ? l.intl.formatToPlainString(l.t.Zogoou, { partySize: i, maxPartySize: n })
              : l.intl.formatToPlainString(l.t.UGei0j, { partySize: i })
          : n > 0
            ? l.intl.formatToPlainString(l.t.gLu7NU, { partySize: i, maxPartySize: n })
            : l.intl.formatToPlainString(l.t["65JnWC"], { partySize: i });
}
