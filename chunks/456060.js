n.d(t, { BE: () => u, SJ: () => _, Wf: () => d, YC: () => c, n$: () => o });
var i = n(287809),
    l = n(562153),
    s = n(652215),
    r = n(985018),
    a = n(426127);
function o(e, t, n) {
    switch (t) {
        case s.xL.LISTEN:
            return r.intl.formatToPlainString(r.t["/8czH4"], { name: e });
        case s.xL.WATCH:
            return r.intl.formatToPlainString(r.t.BBJXVk, { name: e });
        case s.xL.JOIN:
            return n ? void 0 : r.intl.string(r.t.pkq6Vq);
        case s.xL.STREAM_REQUEST:
            return r.intl.string(a.default.DKHhec);
        case s.xL.JOIN_REQUEST:
        default:
            return r.intl.string(r.t.Ckxb6j);
    }
}
function d(e, t, n) {
    return e.author.id === n
        ? r.intl.string(a.default["8B3U5O"])
        : r.intl.formatToPlainString(a.default["d/qbC0"], { username: (0, l.mG)(t.guild_id, t.id, e.author) });
}
function c(e, t, n, l, s) {
    if (e.author.id === l) {
        if (n.isPrivate()) {
            let e = i.default.getUser(n.getRecipientId());
            if (null != e)
                return s
                    ? r.intl.formatToPlainString(r.t.JddpN2, { username: e.globalName, appName: t })
                    : r.intl.formatToPlainString(r.t.gYVkSW, { username: e.globalName, appName: t });
        }
        return s
            ? r.intl.formatToPlainString(r.t["2N1kNS"], { appName: t })
            : r.intl.formatToPlainString(r.t.IA6uDV, { appName: t });
    }
    return s
        ? r.intl.formatToPlainString(r.t.XE8axA, { username: e.author.globalName, appName: t })
        : r.intl.formatToPlainString(r.t.hgcjOn, { username: e.author.globalName, appName: t });
}
function u(e, t, n, i, l) {
    switch (e.activity?.type) {
        case s.xL.LISTEN:
        case s.xL.WATCH:
        case s.xL.JOIN:
            return r.intl.string(l ? r.t.x1UXGR : r.t["Ek+51n"]);
        case s.xL.STREAM_REQUEST:
            return d(e, n, i);
        case s.xL.JOIN_REQUEST:
        default:
            return c(e, t, n, i, !0);
    }
}
function _(e) {
    let { activityActionType: t, maxPartySize: n, partySize: i } = e;
    return t === s.xL.STREAM_REQUEST
        ? ""
        : t === s.xL.LISTEN
          ? n > 0
              ? r.intl.formatToPlainString(r.t.Zogoou, { partySize: i, maxPartySize: n })
              : r.intl.formatToPlainString(r.t.UGei0j, { partySize: i })
          : n > 0
            ? r.intl.formatToPlainString(r.t.gLu7NU, { partySize: i, maxPartySize: n })
            : r.intl.formatToPlainString(r.t["65JnWC"], { partySize: i });
}
