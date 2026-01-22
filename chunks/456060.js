n.d(t, {
    BE: () => d,
    SJ: () => f,
    Wf: () => c,
    YC: () => u,
    n$: () => l,
});
var r = n(287809),
    i = n(562153),
    a = n(652215),
    s = n(985018),
    o = n(426127);
function l(e, t, n) {
    switch (t) {
        case a.xL.LISTEN:
            return s.intl.formatToPlainString(s.t["/8czH4"], { name: e });
        case a.xL.WATCH:
            return s.intl.formatToPlainString(s.t.BBJXVk, { name: e });
        case a.xL.JOIN:
            return n ? void 0 : s.intl.string(s.t.pkq6Vq);
        case a.xL.STREAM_REQUEST:
            return s.intl.string(o.default.DKHhec);
        case a.xL.JOIN_REQUEST:
        default:
            return s.intl.string(s.t.Ckxb6j);
    }
}
function c(e, t, n) {
    return e.author.id === n
        ? s.intl.string(o.default["8B3U5O"])
        : s.intl.formatToPlainString(o.default["d/qbC0"], { username: (0, i.mG)(t.guild_id, t.id, e.author) });
}
function u(e, t, n, i, a) {
    if (e.author.id === i) {
        if (n.isPrivate()) {
            let e = r.default.getUser(n.getRecipientId());
            if (null != e)
                return a
                    ? s.intl.formatToPlainString(s.t.JddpN2, {
                          username: e.globalName,
                          appName: t,
                      })
                    : s.intl.formatToPlainString(s.t.gYVkSW, {
                          username: e.globalName,
                          appName: t,
                      });
        }
        return a
            ? s.intl.formatToPlainString(s.t["2N1kNS"], { appName: t })
            : s.intl.formatToPlainString(s.t.IA6uDV, { appName: t });
    }
    return a
        ? s.intl.formatToPlainString(s.t.XE8axA, {
              username: e.author.globalName,
              appName: t,
          })
        : s.intl.formatToPlainString(s.t.hgcjOn, {
              username: e.author.globalName,
              appName: t,
          });
}
function d(e, t, n, r, i) {
    var o;
    switch (null == (o = e.activity) ? void 0 : o.type) {
        case a.xL.LISTEN:
        case a.xL.WATCH:
        case a.xL.JOIN:
            return s.intl.string(i ? s.t.x1UXGR : s.t["Ek+51n"]);
        case a.xL.STREAM_REQUEST:
            return c(e, n, r);
        case a.xL.JOIN_REQUEST:
        default:
            return u(e, t, n, r, !0);
    }
}
function f(e) {
    let t,
        { activityActionType: n, maxPartySize: r, partySize: i } = e;
    return n === a.xL.STREAM_REQUEST
        ? ""
        : (t =
              n === a.xL.LISTEN
                  ? r > 0
                      ? s.intl.formatToPlainString(s.t.Zogoou, {
                            partySize: i,
                            maxPartySize: r,
                        })
                      : s.intl.formatToPlainString(s.t.UGei0j, { partySize: i })
                  : r > 0
                    ? s.intl.formatToPlainString(s.t.gLu7NU, {
                          partySize: i,
                          maxPartySize: r,
                      })
                    : s.intl.formatToPlainString(s.t["65JnWC"], { partySize: i }));
}
